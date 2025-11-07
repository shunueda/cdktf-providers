// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciBgpAddressFamilyContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#annotation DataAciBgpAddressFamilyContext#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#ctrl DataAciBgpAddressFamilyContext#ctrl}
  */
  readonly ctrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#description DataAciBgpAddressFamilyContext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#e_dist DataAciBgpAddressFamilyContext#e_dist}
  */
  readonly eDist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#i_dist DataAciBgpAddressFamilyContext#i_dist}
  */
  readonly iDist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#id DataAciBgpAddressFamilyContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#local_dist DataAciBgpAddressFamilyContext#local_dist}
  */
  readonly localDist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#max_ecmp DataAciBgpAddressFamilyContext#max_ecmp}
  */
  readonly maxEcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#max_ecmp_ibgp DataAciBgpAddressFamilyContext#max_ecmp_ibgp}
  */
  readonly maxEcmpIbgp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#name DataAciBgpAddressFamilyContext#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#name_alias DataAciBgpAddressFamilyContext#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#tenant_dn DataAciBgpAddressFamilyContext#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context aci_bgp_address_family_context}
*/
export class DataAciBgpAddressFamilyContext extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bgp_address_family_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciBgpAddressFamilyContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciBgpAddressFamilyContext to import
  * @param importFromId The id of the existing DataAciBgpAddressFamilyContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciBgpAddressFamilyContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bgp_address_family_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_address_family_context aci_bgp_address_family_context} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciBgpAddressFamilyContextConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciBgpAddressFamilyContextConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bgp_address_family_context',
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
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._eDist = config.eDist;
    this._iDist = config.iDist;
    this._id = config.id;
    this._localDist = config.localDist;
    this._maxEcmp = config.maxEcmp;
    this._maxEcmpIbgp = config.maxEcmpIbgp;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
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

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string; 
  public get ctrl() {
    return this.getStringAttribute('ctrl');
  }
  public set ctrl(value: string) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
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

  // e_dist - computed: true, optional: true, required: false
  private _eDist?: string; 
  public get eDist() {
    return this.getStringAttribute('e_dist');
  }
  public set eDist(value: string) {
    this._eDist = value;
  }
  public resetEDist() {
    this._eDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eDistInput() {
    return this._eDist;
  }

  // i_dist - computed: true, optional: true, required: false
  private _iDist?: string; 
  public get iDist() {
    return this.getStringAttribute('i_dist');
  }
  public set iDist(value: string) {
    this._iDist = value;
  }
  public resetIDist() {
    this._iDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iDistInput() {
    return this._iDist;
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

  // local_dist - computed: true, optional: true, required: false
  private _localDist?: string; 
  public get localDist() {
    return this.getStringAttribute('local_dist');
  }
  public set localDist(value: string) {
    this._localDist = value;
  }
  public resetLocalDist() {
    this._localDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDistInput() {
    return this._localDist;
  }

  // max_ecmp - computed: true, optional: true, required: false
  private _maxEcmp?: string; 
  public get maxEcmp() {
    return this.getStringAttribute('max_ecmp');
  }
  public set maxEcmp(value: string) {
    this._maxEcmp = value;
  }
  public resetMaxEcmp() {
    this._maxEcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEcmpInput() {
    return this._maxEcmp;
  }

  // max_ecmp_ibgp - computed: true, optional: true, required: false
  private _maxEcmpIbgp?: string; 
  public get maxEcmpIbgp() {
    return this.getStringAttribute('max_ecmp_ibgp');
  }
  public set maxEcmpIbgp(value: string) {
    this._maxEcmpIbgp = value;
  }
  public resetMaxEcmpIbgp() {
    this._maxEcmpIbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEcmpIbgpInput() {
    return this._maxEcmpIbgp;
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
      ctrl: cdktf.stringToTerraform(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      e_dist: cdktf.stringToTerraform(this._eDist),
      i_dist: cdktf.stringToTerraform(this._iDist),
      id: cdktf.stringToTerraform(this._id),
      local_dist: cdktf.stringToTerraform(this._localDist),
      max_ecmp: cdktf.stringToTerraform(this._maxEcmp),
      max_ecmp_ibgp: cdktf.stringToTerraform(this._maxEcmpIbgp),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
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
      ctrl: {
        value: cdktf.stringToHclTerraform(this._ctrl),
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
      e_dist: {
        value: cdktf.stringToHclTerraform(this._eDist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      i_dist: {
        value: cdktf.stringToHclTerraform(this._iDist),
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
      local_dist: {
        value: cdktf.stringToHclTerraform(this._localDist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ecmp: {
        value: cdktf.stringToHclTerraform(this._maxEcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ecmp_ibgp: {
        value: cdktf.stringToHclTerraform(this._maxEcmpIbgp),
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
