// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutBgpProtocolProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#annotation L3OutBgpProtocolProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#id L3OutBgpProtocolProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#logical_node_profile_dn L3OutBgpProtocolProfile#logical_node_profile_dn}
  */
  readonly logicalNodeProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#name L3OutBgpProtocolProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#name_alias L3OutBgpProtocolProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#relation_bgp_rs_best_path_ctrl_pol L3OutBgpProtocolProfile#relation_bgp_rs_best_path_ctrl_pol}
  */
  readonly relationBgpRsBestPathCtrlPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#relation_bgp_rs_bgp_node_ctx_pol L3OutBgpProtocolProfile#relation_bgp_rs_bgp_node_ctx_pol}
  */
  readonly relationBgpRsBgpNodeCtxPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile aci_l3out_bgp_protocol_profile}
*/
export class L3OutBgpProtocolProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_bgp_protocol_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutBgpProtocolProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutBgpProtocolProfile to import
  * @param importFromId The id of the existing L3OutBgpProtocolProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutBgpProtocolProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_bgp_protocol_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bgp_protocol_profile aci_l3out_bgp_protocol_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutBgpProtocolProfileConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutBgpProtocolProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_bgp_protocol_profile',
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
    this._id = config.id;
    this._logicalNodeProfileDn = config.logicalNodeProfileDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationBgpRsBestPathCtrlPol = config.relationBgpRsBestPathCtrlPol;
    this._relationBgpRsBgpNodeCtxPol = config.relationBgpRsBgpNodeCtxPol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: false, optional: true, required: false
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

  // logical_node_profile_dn - computed: false, optional: false, required: true
  private _logicalNodeProfileDn?: string; 
  public get logicalNodeProfileDn() {
    return this.getStringAttribute('logical_node_profile_dn');
  }
  public set logicalNodeProfileDn(value: string) {
    this._logicalNodeProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNodeProfileDnInput() {
    return this._logicalNodeProfileDn;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // relation_bgp_rs_best_path_ctrl_pol - computed: false, optional: true, required: false
  private _relationBgpRsBestPathCtrlPol?: string; 
  public get relationBgpRsBestPathCtrlPol() {
    return this.getStringAttribute('relation_bgp_rs_best_path_ctrl_pol');
  }
  public set relationBgpRsBestPathCtrlPol(value: string) {
    this._relationBgpRsBestPathCtrlPol = value;
  }
  public resetRelationBgpRsBestPathCtrlPol() {
    this._relationBgpRsBestPathCtrlPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationBgpRsBestPathCtrlPolInput() {
    return this._relationBgpRsBestPathCtrlPol;
  }

  // relation_bgp_rs_bgp_node_ctx_pol - computed: false, optional: true, required: false
  private _relationBgpRsBgpNodeCtxPol?: string; 
  public get relationBgpRsBgpNodeCtxPol() {
    return this.getStringAttribute('relation_bgp_rs_bgp_node_ctx_pol');
  }
  public set relationBgpRsBgpNodeCtxPol(value: string) {
    this._relationBgpRsBgpNodeCtxPol = value;
  }
  public resetRelationBgpRsBgpNodeCtxPol() {
    this._relationBgpRsBgpNodeCtxPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationBgpRsBgpNodeCtxPolInput() {
    return this._relationBgpRsBgpNodeCtxPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      id: cdktf.stringToTerraform(this._id),
      logical_node_profile_dn: cdktf.stringToTerraform(this._logicalNodeProfileDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_bgp_rs_best_path_ctrl_pol: cdktf.stringToTerraform(this._relationBgpRsBestPathCtrlPol),
      relation_bgp_rs_bgp_node_ctx_pol: cdktf.stringToTerraform(this._relationBgpRsBgpNodeCtxPol),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_node_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalNodeProfileDn),
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
      relation_bgp_rs_best_path_ctrl_pol: {
        value: cdktf.stringToHclTerraform(this._relationBgpRsBestPathCtrlPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_bgp_rs_bgp_node_ctx_pol: {
        value: cdktf.stringToHclTerraform(this._relationBgpRsBgpNodeCtxPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
