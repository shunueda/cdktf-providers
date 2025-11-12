// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FcDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#annotation FcDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#id FcDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#name FcDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#name_alias FcDomain#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_fc_rs_vsan_attr FcDomain#relation_fc_rs_vsan_attr}
  */
  readonly relationFcRsVsanAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_fc_rs_vsan_attr_def FcDomain#relation_fc_rs_vsan_attr_def}
  */
  readonly relationFcRsVsanAttrDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_fc_rs_vsan_ns FcDomain#relation_fc_rs_vsan_ns}
  */
  readonly relationFcRsVsanNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_fc_rs_vsan_ns_def FcDomain#relation_fc_rs_vsan_ns_def}
  */
  readonly relationFcRsVsanNsDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_infra_rs_dom_vxlan_ns_def FcDomain#relation_infra_rs_dom_vxlan_ns_def}
  */
  readonly relationInfraRsDomVxlanNsDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_infra_rs_vip_addr_ns FcDomain#relation_infra_rs_vip_addr_ns}
  */
  readonly relationInfraRsVipAddrNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_infra_rs_vlan_ns FcDomain#relation_infra_rs_vlan_ns}
  */
  readonly relationInfraRsVlanNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#relation_infra_rs_vlan_ns_def FcDomain#relation_infra_rs_vlan_ns_def}
  */
  readonly relationInfraRsVlanNsDef?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain aci_fc_domain}
*/
export class FcDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_fc_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FcDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FcDomain to import
  * @param importFromId The id of the existing FcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FcDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_fc_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fc_domain aci_fc_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FcDomainConfig
  */
  public constructor(scope: Construct, id: string, config: FcDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_fc_domain',
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
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationFcRsVsanAttr = config.relationFcRsVsanAttr;
    this._relationFcRsVsanAttrDef = config.relationFcRsVsanAttrDef;
    this._relationFcRsVsanNs = config.relationFcRsVsanNs;
    this._relationFcRsVsanNsDef = config.relationFcRsVsanNsDef;
    this._relationInfraRsDomVxlanNsDef = config.relationInfraRsDomVxlanNsDef;
    this._relationInfraRsVipAddrNs = config.relationInfraRsVipAddrNs;
    this._relationInfraRsVlanNs = config.relationInfraRsVlanNs;
    this._relationInfraRsVlanNsDef = config.relationInfraRsVlanNsDef;
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

  // relation_fc_rs_vsan_attr - computed: false, optional: true, required: false
  private _relationFcRsVsanAttr?: string; 
  public get relationFcRsVsanAttr() {
    return this.getStringAttribute('relation_fc_rs_vsan_attr');
  }
  public set relationFcRsVsanAttr(value: string) {
    this._relationFcRsVsanAttr = value;
  }
  public resetRelationFcRsVsanAttr() {
    this._relationFcRsVsanAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFcRsVsanAttrInput() {
    return this._relationFcRsVsanAttr;
  }

  // relation_fc_rs_vsan_attr_def - computed: true, optional: true, required: false
  private _relationFcRsVsanAttrDef?: string; 
  public get relationFcRsVsanAttrDef() {
    return this.getStringAttribute('relation_fc_rs_vsan_attr_def');
  }
  public set relationFcRsVsanAttrDef(value: string) {
    this._relationFcRsVsanAttrDef = value;
  }
  public resetRelationFcRsVsanAttrDef() {
    this._relationFcRsVsanAttrDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFcRsVsanAttrDefInput() {
    return this._relationFcRsVsanAttrDef;
  }

  // relation_fc_rs_vsan_ns - computed: false, optional: true, required: false
  private _relationFcRsVsanNs?: string; 
  public get relationFcRsVsanNs() {
    return this.getStringAttribute('relation_fc_rs_vsan_ns');
  }
  public set relationFcRsVsanNs(value: string) {
    this._relationFcRsVsanNs = value;
  }
  public resetRelationFcRsVsanNs() {
    this._relationFcRsVsanNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFcRsVsanNsInput() {
    return this._relationFcRsVsanNs;
  }

  // relation_fc_rs_vsan_ns_def - computed: true, optional: true, required: false
  private _relationFcRsVsanNsDef?: string; 
  public get relationFcRsVsanNsDef() {
    return this.getStringAttribute('relation_fc_rs_vsan_ns_def');
  }
  public set relationFcRsVsanNsDef(value: string) {
    this._relationFcRsVsanNsDef = value;
  }
  public resetRelationFcRsVsanNsDef() {
    this._relationFcRsVsanNsDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFcRsVsanNsDefInput() {
    return this._relationFcRsVsanNsDef;
  }

  // relation_infra_rs_dom_vxlan_ns_def - computed: false, optional: true, required: false
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
      relation_fc_rs_vsan_attr: cdktf.stringToTerraform(this._relationFcRsVsanAttr),
      relation_fc_rs_vsan_attr_def: cdktf.stringToTerraform(this._relationFcRsVsanAttrDef),
      relation_fc_rs_vsan_ns: cdktf.stringToTerraform(this._relationFcRsVsanNs),
      relation_fc_rs_vsan_ns_def: cdktf.stringToTerraform(this._relationFcRsVsanNsDef),
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
      relation_fc_rs_vsan_attr: {
        value: cdktf.stringToHclTerraform(this._relationFcRsVsanAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fc_rs_vsan_attr_def: {
        value: cdktf.stringToHclTerraform(this._relationFcRsVsanAttrDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fc_rs_vsan_ns: {
        value: cdktf.stringToHclTerraform(this._relationFcRsVsanNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fc_rs_vsan_ns_def: {
        value: cdktf.stringToHclTerraform(this._relationFcRsVsanNsDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
