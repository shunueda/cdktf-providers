// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#annotation Filter#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#description Filter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#id Filter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#name Filter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#name_alias Filter#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#relation_vz_rs_filt_graph_att Filter#relation_vz_rs_filt_graph_att}
  */
  readonly relationVzRsFiltGraphAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#relation_vz_rs_fwd_r_flt_p_att Filter#relation_vz_rs_fwd_r_flt_p_att}
  */
  readonly relationVzRsFwdRFltPAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#relation_vz_rs_rev_r_flt_p_att Filter#relation_vz_rs_rev_r_flt_p_att}
  */
  readonly relationVzRsRevRFltPAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#tenant_dn Filter#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter aci_filter}
*/
export class Filter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Filter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Filter to import
  * @param importFromId The id of the existing Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Filter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/filter aci_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilterConfig
  */
  public constructor(scope: Construct, id: string, config: FilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_filter',
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
    this._relationVzRsFiltGraphAtt = config.relationVzRsFiltGraphAtt;
    this._relationVzRsFwdRFltPAtt = config.relationVzRsFwdRFltPAtt;
    this._relationVzRsRevRFltPAtt = config.relationVzRsRevRFltPAtt;
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

  // relation_vz_rs_filt_graph_att - computed: true, optional: true, required: false
  private _relationVzRsFiltGraphAtt?: string; 
  public get relationVzRsFiltGraphAtt() {
    return this.getStringAttribute('relation_vz_rs_filt_graph_att');
  }
  public set relationVzRsFiltGraphAtt(value: string) {
    this._relationVzRsFiltGraphAtt = value;
  }
  public resetRelationVzRsFiltGraphAtt() {
    this._relationVzRsFiltGraphAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsFiltGraphAttInput() {
    return this._relationVzRsFiltGraphAtt;
  }

  // relation_vz_rs_fwd_r_flt_p_att - computed: true, optional: true, required: false
  private _relationVzRsFwdRFltPAtt?: string; 
  public get relationVzRsFwdRFltPAtt() {
    return this.getStringAttribute('relation_vz_rs_fwd_r_flt_p_att');
  }
  public set relationVzRsFwdRFltPAtt(value: string) {
    this._relationVzRsFwdRFltPAtt = value;
  }
  public resetRelationVzRsFwdRFltPAtt() {
    this._relationVzRsFwdRFltPAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsFwdRFltPAttInput() {
    return this._relationVzRsFwdRFltPAtt;
  }

  // relation_vz_rs_rev_r_flt_p_att - computed: true, optional: true, required: false
  private _relationVzRsRevRFltPAtt?: string; 
  public get relationVzRsRevRFltPAtt() {
    return this.getStringAttribute('relation_vz_rs_rev_r_flt_p_att');
  }
  public set relationVzRsRevRFltPAtt(value: string) {
    this._relationVzRsRevRFltPAtt = value;
  }
  public resetRelationVzRsRevRFltPAtt() {
    this._relationVzRsRevRFltPAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsRevRFltPAttInput() {
    return this._relationVzRsRevRFltPAtt;
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
      relation_vz_rs_filt_graph_att: cdktf.stringToTerraform(this._relationVzRsFiltGraphAtt),
      relation_vz_rs_fwd_r_flt_p_att: cdktf.stringToTerraform(this._relationVzRsFwdRFltPAtt),
      relation_vz_rs_rev_r_flt_p_att: cdktf.stringToTerraform(this._relationVzRsRevRFltPAtt),
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
      relation_vz_rs_filt_graph_att: {
        value: cdktf.stringToHclTerraform(this._relationVzRsFiltGraphAtt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vz_rs_fwd_r_flt_p_att: {
        value: cdktf.stringToHclTerraform(this._relationVzRsFwdRFltPAtt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vz_rs_rev_r_flt_p_att: {
        value: cdktf.stringToHclTerraform(this._relationVzRsRevRFltPAtt),
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
