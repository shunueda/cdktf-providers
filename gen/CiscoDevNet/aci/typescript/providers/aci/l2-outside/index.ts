// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2OutsideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#annotation L2Outside#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#description L2Outside#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#id L2Outside#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#name L2Outside#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#name_alias L2Outside#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#relation_l2ext_rs_e_bd L2Outside#relation_l2ext_rs_e_bd}
  */
  readonly relationL2ExtRsEBd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#relation_l2ext_rs_l2_dom_att L2Outside#relation_l2ext_rs_l2_dom_att}
  */
  readonly relationL2ExtRsL2DomAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#target_dscp L2Outside#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#tenant_dn L2Outside#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside aci_l2_outside}
*/
export class L2Outside extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l2_outside";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2Outside resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2Outside to import
  * @param importFromId The id of the existing L2Outside that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2Outside to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l2_outside", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_outside aci_l2_outside} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2OutsideConfig
  */
  public constructor(scope: Construct, id: string, config: L2OutsideConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l2_outside',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationL2ExtRsEBd = config.relationL2ExtRsEBd;
    this._relationL2ExtRsL2DomAtt = config.relationL2ExtRsL2DomAtt;
    this._targetDscp = config.targetDscp;
    this._tenantDn = config.tenantDn;
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

  // relation_l2ext_rs_e_bd - computed: false, optional: true, required: false
  private _relationL2ExtRsEBd?: string; 
  public get relationL2ExtRsEBd() {
    return this.getStringAttribute('relation_l2ext_rs_e_bd');
  }
  public set relationL2ExtRsEBd(value: string) {
    this._relationL2ExtRsEBd = value;
  }
  public resetRelationL2ExtRsEBd() {
    this._relationL2ExtRsEBd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL2ExtRsEBdInput() {
    return this._relationL2ExtRsEBd;
  }

  // relation_l2ext_rs_l2_dom_att - computed: false, optional: true, required: false
  private _relationL2ExtRsL2DomAtt?: string; 
  public get relationL2ExtRsL2DomAtt() {
    return this.getStringAttribute('relation_l2ext_rs_l2_dom_att');
  }
  public set relationL2ExtRsL2DomAtt(value: string) {
    this._relationL2ExtRsL2DomAtt = value;
  }
  public resetRelationL2ExtRsL2DomAtt() {
    this._relationL2ExtRsL2DomAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL2ExtRsL2DomAttInput() {
    return this._relationL2ExtRsL2DomAtt;
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

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_l2ext_rs_e_bd: cdktf.stringToTerraform(this._relationL2ExtRsEBd),
      relation_l2ext_rs_l2_dom_att: cdktf.stringToTerraform(this._relationL2ExtRsL2DomAtt),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
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
      relation_l2ext_rs_e_bd: {
        value: cdktf.stringToHclTerraform(this._relationL2ExtRsEBd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l2ext_rs_l2_dom_att: {
        value: cdktf.stringToHclTerraform(this._relationL2ExtRsL2DomAtt),
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
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
