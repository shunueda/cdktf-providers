// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciLogicalNodeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#annotation DataAciLogicalNodeProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#config_issues DataAciLogicalNodeProfile#config_issues}
  */
  readonly configIssues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#description DataAciLogicalNodeProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#id DataAciLogicalNodeProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#l3_outside_dn DataAciLogicalNodeProfile#l3_outside_dn}
  */
  readonly l3OutsideDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#name DataAciLogicalNodeProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#name_alias DataAciLogicalNodeProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#tag DataAciLogicalNodeProfile#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#target_dscp DataAciLogicalNodeProfile#target_dscp}
  */
  readonly targetDscp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile aci_logical_node_profile}
*/
export class DataAciLogicalNodeProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_logical_node_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciLogicalNodeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciLogicalNodeProfile to import
  * @param importFromId The id of the existing DataAciLogicalNodeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciLogicalNodeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_logical_node_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_node_profile aci_logical_node_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciLogicalNodeProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciLogicalNodeProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_logical_node_profile',
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
    this._annotation = config.annotation;
    this._configIssues = config.configIssues;
    this._description = config.description;
    this._id = config.id;
    this._l3OutsideDn = config.l3OutsideDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._tag = config.tag;
    this._targetDscp = config.targetDscp;
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

  // config_issues - computed: true, optional: true, required: false
  private _configIssues?: string; 
  public get configIssues() {
    return this.getStringAttribute('config_issues');
  }
  public set configIssues(value: string) {
    this._configIssues = value;
  }
  public resetConfigIssues() {
    this._configIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIssuesInput() {
    return this._configIssues;
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

  // l3_outside_dn - computed: false, optional: false, required: true
  private _l3OutsideDn?: string; 
  public get l3OutsideDn() {
    return this.getStringAttribute('l3_outside_dn');
  }
  public set l3OutsideDn(value: string) {
    this._l3OutsideDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutsideDnInput() {
    return this._l3OutsideDn;
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

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target_dscp - computed: true, optional: true, required: false
  private _targetDscp?: string; 
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }
  public set targetDscp(value: string) {
    this._targetDscp = value;
  }
  public resetTargetDscp() {
    this._targetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDscpInput() {
    return this._targetDscp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      config_issues: cdktf.stringToTerraform(this._configIssues),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      l3_outside_dn: cdktf.stringToTerraform(this._l3OutsideDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tag: cdktf.stringToTerraform(this._tag),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
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
      config_issues: {
        value: cdktf.stringToHclTerraform(this._configIssues),
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
      l3_outside_dn: {
        value: cdktf.stringToHclTerraform(this._l3OutsideDn),
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dscp: {
        value: cdktf.stringToHclTerraform(this._targetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
