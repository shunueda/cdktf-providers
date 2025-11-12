// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutOspfExternalPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#annotation L3OutOspfExternalPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#area_cost L3OutOspfExternalPolicy#area_cost}
  */
  readonly areaCost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#area_ctrl L3OutOspfExternalPolicy#area_ctrl}
  */
  readonly areaCtrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#area_id L3OutOspfExternalPolicy#area_id}
  */
  readonly areaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#area_type L3OutOspfExternalPolicy#area_type}
  */
  readonly areaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#description L3OutOspfExternalPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#id L3OutOspfExternalPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#l3_outside_dn L3OutOspfExternalPolicy#l3_outside_dn}
  */
  readonly l3OutsideDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#multipod_internal L3OutOspfExternalPolicy#multipod_internal}
  */
  readonly multipodInternal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#name_alias L3OutOspfExternalPolicy#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy aci_l3out_ospf_external_policy}
*/
export class L3OutOspfExternalPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_ospf_external_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutOspfExternalPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutOspfExternalPolicy to import
  * @param importFromId The id of the existing L3OutOspfExternalPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutOspfExternalPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_ospf_external_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_ospf_external_policy aci_l3out_ospf_external_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutOspfExternalPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutOspfExternalPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_ospf_external_policy',
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
    this._areaCost = config.areaCost;
    this._areaCtrl = config.areaCtrl;
    this._areaId = config.areaId;
    this._areaType = config.areaType;
    this._description = config.description;
    this._id = config.id;
    this._l3OutsideDn = config.l3OutsideDn;
    this._multipodInternal = config.multipodInternal;
    this._nameAlias = config.nameAlias;
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

  // area_cost - computed: true, optional: true, required: false
  private _areaCost?: string; 
  public get areaCost() {
    return this.getStringAttribute('area_cost');
  }
  public set areaCost(value: string) {
    this._areaCost = value;
  }
  public resetAreaCost() {
    this._areaCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCostInput() {
    return this._areaCost;
  }

  // area_ctrl - computed: true, optional: true, required: false
  private _areaCtrl?: string[]; 
  public get areaCtrl() {
    return this.getListAttribute('area_ctrl');
  }
  public set areaCtrl(value: string[]) {
    this._areaCtrl = value;
  }
  public resetAreaCtrl() {
    this._areaCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCtrlInput() {
    return this._areaCtrl;
  }

  // area_id - computed: true, optional: true, required: false
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  public resetAreaId() {
    this._areaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // area_type - computed: true, optional: true, required: false
  private _areaType?: string; 
  public get areaType() {
    return this.getStringAttribute('area_type');
  }
  public set areaType(value: string) {
    this._areaType = value;
  }
  public resetAreaType() {
    this._areaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaTypeInput() {
    return this._areaType;
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

  // multipod_internal - computed: true, optional: true, required: false
  private _multipodInternal?: string; 
  public get multipodInternal() {
    return this.getStringAttribute('multipod_internal');
  }
  public set multipodInternal(value: string) {
    this._multipodInternal = value;
  }
  public resetMultipodInternal() {
    this._multipodInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipodInternalInput() {
    return this._multipodInternal;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      area_cost: cdktf.stringToTerraform(this._areaCost),
      area_ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._areaCtrl),
      area_id: cdktf.stringToTerraform(this._areaId),
      area_type: cdktf.stringToTerraform(this._areaType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      l3_outside_dn: cdktf.stringToTerraform(this._l3OutsideDn),
      multipod_internal: cdktf.stringToTerraform(this._multipodInternal),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
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
      area_cost: {
        value: cdktf.stringToHclTerraform(this._areaCost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._areaCtrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      area_id: {
        value: cdktf.stringToHclTerraform(this._areaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_type: {
        value: cdktf.stringToHclTerraform(this._areaType),
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
      multipod_internal: {
        value: cdktf.stringToHclTerraform(this._multipodInternal),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
