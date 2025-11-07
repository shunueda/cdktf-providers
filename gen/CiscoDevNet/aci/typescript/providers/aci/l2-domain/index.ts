// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#annotation L2Domain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#id L2Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#name L2Domain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#name_alias L2Domain#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#relation_extnw_rs_out L2Domain#relation_extnw_rs_out}
  */
  readonly relationExtnwRsOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#relation_infra_rs_dom_vxlan_ns_def L2Domain#relation_infra_rs_dom_vxlan_ns_def}
  */
  readonly relationInfraRsDomVxlanNsDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#relation_infra_rs_vip_addr_ns L2Domain#relation_infra_rs_vip_addr_ns}
  */
  readonly relationInfraRsVipAddrNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#relation_infra_rs_vlan_ns L2Domain#relation_infra_rs_vlan_ns}
  */
  readonly relationInfraRsVlanNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#relation_infra_rs_vlan_ns_def L2Domain#relation_infra_rs_vlan_ns_def}
  */
  readonly relationInfraRsVlanNsDef?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain aci_l2_domain}
*/
export class L2Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l2_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2Domain to import
  * @param importFromId The id of the existing L2Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l2_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2_domain aci_l2_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2DomainConfig
  */
  public constructor(scope: Construct, id: string, config: L2DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l2_domain',
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
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationExtnwRsOut = config.relationExtnwRsOut;
    this._relationInfraRsDomVxlanNsDef = config.relationInfraRsDomVxlanNsDef;
    this._relationInfraRsVipAddrNs = config.relationInfraRsVipAddrNs;
    this._relationInfraRsVlanNs = config.relationInfraRsVlanNs;
    this._relationInfraRsVlanNsDef = config.relationInfraRsVlanNsDef;
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

  // relation_extnw_rs_out - computed: false, optional: true, required: false
  private _relationExtnwRsOut?: string[]; 
  public get relationExtnwRsOut() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_extnw_rs_out'));
  }
  public set relationExtnwRsOut(value: string[]) {
    this._relationExtnwRsOut = value;
  }
  public resetRelationExtnwRsOut() {
    this._relationExtnwRsOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationExtnwRsOutInput() {
    return this._relationExtnwRsOut;
  }

  // relation_infra_rs_dom_vxlan_ns_def - computed: true, optional: true, required: false
  private _relationInfraRsDomVxlanNsDef?: string; 
  public get relationInfraRsDomVxlanNsDef() {
    return this.getStringAttribute('relation_infra_rs_dom_vxlan_ns_def');
  }
  public set relationInfraRsDomVxlanNsDef(value: string) {
    this._relationInfraRsDomVxlanNsDef = value;
  }
  public resetRelationInfraRsDomVxlanNsDef() {
    this._relationInfraRsDomVxlanNsDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsDomVxlanNsDefInput() {
    return this._relationInfraRsDomVxlanNsDef;
  }

  // relation_infra_rs_vip_addr_ns - computed: false, optional: true, required: false
  private _relationInfraRsVipAddrNs?: string; 
  public get relationInfraRsVipAddrNs() {
    return this.getStringAttribute('relation_infra_rs_vip_addr_ns');
  }
  public set relationInfraRsVipAddrNs(value: string) {
    this._relationInfraRsVipAddrNs = value;
  }
  public resetRelationInfraRsVipAddrNs() {
    this._relationInfraRsVipAddrNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsVipAddrNsInput() {
    return this._relationInfraRsVipAddrNs;
  }

  // relation_infra_rs_vlan_ns - computed: false, optional: true, required: false
  private _relationInfraRsVlanNs?: string; 
  public get relationInfraRsVlanNs() {
    return this.getStringAttribute('relation_infra_rs_vlan_ns');
  }
  public set relationInfraRsVlanNs(value: string) {
    this._relationInfraRsVlanNs = value;
  }
  public resetRelationInfraRsVlanNs() {
    this._relationInfraRsVlanNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsVlanNsInput() {
    return this._relationInfraRsVlanNs;
  }

  // relation_infra_rs_vlan_ns_def - computed: true, optional: true, required: false
  private _relationInfraRsVlanNsDef?: string; 
  public get relationInfraRsVlanNsDef() {
    return this.getStringAttribute('relation_infra_rs_vlan_ns_def');
  }
  public set relationInfraRsVlanNsDef(value: string) {
    this._relationInfraRsVlanNsDef = value;
  }
  public resetRelationInfraRsVlanNsDef() {
    this._relationInfraRsVlanNsDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsVlanNsDefInput() {
    return this._relationInfraRsVlanNsDef;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_extnw_rs_out: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationExtnwRsOut),
      relation_infra_rs_dom_vxlan_ns_def: cdktf.stringToTerraform(this._relationInfraRsDomVxlanNsDef),
      relation_infra_rs_vip_addr_ns: cdktf.stringToTerraform(this._relationInfraRsVipAddrNs),
      relation_infra_rs_vlan_ns: cdktf.stringToTerraform(this._relationInfraRsVlanNs),
      relation_infra_rs_vlan_ns_def: cdktf.stringToTerraform(this._relationInfraRsVlanNsDef),
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
      relation_extnw_rs_out: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationExtnwRsOut),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_infra_rs_dom_vxlan_ns_def: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsDomVxlanNsDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_vip_addr_ns: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsVipAddrNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_vlan_ns: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsVlanNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_vlan_ns_def: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsVlanNsDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
