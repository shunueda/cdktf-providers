// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionRuleAdditionalCommunitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#action_rule_profile_dn ActionRuleAdditionalCommunities#action_rule_profile_dn}
  */
  readonly actionRuleProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#annotation ActionRuleAdditionalCommunities#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#community ActionRuleAdditionalCommunities#community}
  */
  readonly community: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#description ActionRuleAdditionalCommunities#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#id ActionRuleAdditionalCommunities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#name_alias ActionRuleAdditionalCommunities#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#set_criteria ActionRuleAdditionalCommunities#set_criteria}
  */
  readonly setCriteria?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities aci_action_rule_additional_communities}
*/
export class ActionRuleAdditionalCommunities extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_action_rule_additional_communities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionRuleAdditionalCommunities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionRuleAdditionalCommunities to import
  * @param importFromId The id of the existing ActionRuleAdditionalCommunities that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionRuleAdditionalCommunities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_action_rule_additional_communities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_additional_communities aci_action_rule_additional_communities} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionRuleAdditionalCommunitiesConfig
  */
  public constructor(scope: Construct, id: string, config: ActionRuleAdditionalCommunitiesConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_action_rule_additional_communities',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionRuleProfileDn = config.actionRuleProfileDn;
    this._annotation = config.annotation;
    this._community = config.community;
    this._description = config.description;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._setCriteria = config.setCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_rule_profile_dn - computed: false, optional: false, required: true
  private _actionRuleProfileDn?: string; 
  public get actionRuleProfileDn() {
    return this.getStringAttribute('action_rule_profile_dn');
  }
  public set actionRuleProfileDn(value: string) {
    this._actionRuleProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRuleProfileDnInput() {
    return this._actionRuleProfileDn;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // community - computed: false, optional: false, required: true
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // set_criteria - computed: true, optional: true, required: false
  private _setCriteria?: string; 
  public get setCriteria() {
    return this.getStringAttribute('set_criteria');
  }
  public set setCriteria(value: string) {
    this._setCriteria = value;
  }
  public resetSetCriteria() {
    this._setCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCriteriaInput() {
    return this._setCriteria;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_rule_profile_dn: cdktf.stringToTerraform(this._actionRuleProfileDn),
      annotation: cdktf.stringToTerraform(this._annotation),
      community: cdktf.stringToTerraform(this._community),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      set_criteria: cdktf.stringToTerraform(this._setCriteria),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_rule_profile_dn: {
        value: cdktf.stringToHclTerraform(this._actionRuleProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community: {
        value: cdktf.stringToHclTerraform(this._community),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_criteria: {
        value: cdktf.stringToHclTerraform(this._setCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
