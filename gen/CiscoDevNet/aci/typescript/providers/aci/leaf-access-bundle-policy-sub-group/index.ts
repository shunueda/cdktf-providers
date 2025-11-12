// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LeafAccessBundlePolicySubGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#annotation LeafAccessBundlePolicySubGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#description LeafAccessBundlePolicySubGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#id LeafAccessBundlePolicySubGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#leaf_access_bundle_policy_group_dn LeafAccessBundlePolicySubGroup#leaf_access_bundle_policy_group_dn}
  */
  readonly leafAccessBundlePolicyGroupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#name LeafAccessBundlePolicySubGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#name_alias LeafAccessBundlePolicySubGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Create relation to lacp:IfPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#port_channel_member LeafAccessBundlePolicySubGroup#port_channel_member}
  */
  readonly portChannelMember?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group aci_leaf_access_bundle_policy_sub_group}
*/
export class LeafAccessBundlePolicySubGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_leaf_access_bundle_policy_sub_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LeafAccessBundlePolicySubGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LeafAccessBundlePolicySubGroup to import
  * @param importFromId The id of the existing LeafAccessBundlePolicySubGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LeafAccessBundlePolicySubGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_leaf_access_bundle_policy_sub_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/leaf_access_bundle_policy_sub_group aci_leaf_access_bundle_policy_sub_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LeafAccessBundlePolicySubGroupConfig
  */
  public constructor(scope: Construct, id: string, config: LeafAccessBundlePolicySubGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_leaf_access_bundle_policy_sub_group',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._leafAccessBundlePolicyGroupDn = config.leafAccessBundlePolicyGroupDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._portChannelMember = config.portChannelMember;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // leaf_access_bundle_policy_group_dn - computed: false, optional: false, required: true
  private _leafAccessBundlePolicyGroupDn?: string; 
  public get leafAccessBundlePolicyGroupDn() {
    return this.getStringAttribute('leaf_access_bundle_policy_group_dn');
  }
  public set leafAccessBundlePolicyGroupDn(value: string) {
    this._leafAccessBundlePolicyGroupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leafAccessBundlePolicyGroupDnInput() {
    return this._leafAccessBundlePolicyGroupDn;
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

  // port_channel_member - computed: true, optional: true, required: false
  private _portChannelMember?: string; 
  public get portChannelMember() {
    return this.getStringAttribute('port_channel_member');
  }
  public set portChannelMember(value: string) {
    this._portChannelMember = value;
  }
  public resetPortChannelMember() {
    this._portChannelMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelMemberInput() {
    return this._portChannelMember;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      leaf_access_bundle_policy_group_dn: cdktf.stringToTerraform(this._leafAccessBundlePolicyGroupDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      port_channel_member: cdktf.stringToTerraform(this._portChannelMember),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      leaf_access_bundle_policy_group_dn: {
        value: cdktf.stringToHclTerraform(this._leafAccessBundlePolicyGroupDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      port_channel_member: {
        value: cdktf.stringToHclTerraform(this._portChannelMember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
