// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L4L7ServiceGraphTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#annotation L4L7ServiceGraphTemplate#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#description L4L7ServiceGraphTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#id L4L7ServiceGraphTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#l4_l7_service_graph_template_type L4L7ServiceGraphTemplate#l4_l7_service_graph_template_type}
  */
  readonly l4L7ServiceGraphTemplateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#name L4L7ServiceGraphTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#name_alias L4L7ServiceGraphTemplate#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#tenant_dn L4L7ServiceGraphTemplate#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#term_cons_dn L4L7ServiceGraphTemplate#term_cons_dn}
  */
  readonly termConsDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#term_cons_name L4L7ServiceGraphTemplate#term_cons_name}
  */
  readonly termConsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#term_node_cons_dn L4L7ServiceGraphTemplate#term_node_cons_dn}
  */
  readonly termNodeConsDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#term_node_prov_dn L4L7ServiceGraphTemplate#term_node_prov_dn}
  */
  readonly termNodeProvDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#term_prov_dn L4L7ServiceGraphTemplate#term_prov_dn}
  */
  readonly termProvDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#term_prov_name L4L7ServiceGraphTemplate#term_prov_name}
  */
  readonly termProvName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#ui_template_type L4L7ServiceGraphTemplate#ui_template_type}
  */
  readonly uiTemplateType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template aci_l4_l7_service_graph_template}
*/
export class L4L7ServiceGraphTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l4_l7_service_graph_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L4L7ServiceGraphTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L4L7ServiceGraphTemplate to import
  * @param importFromId The id of the existing L4L7ServiceGraphTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L4L7ServiceGraphTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l4_l7_service_graph_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_service_graph_template aci_l4_l7_service_graph_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L4L7ServiceGraphTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: L4L7ServiceGraphTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l4_l7_service_graph_template',
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
    this._l4L7ServiceGraphTemplateType = config.l4L7ServiceGraphTemplateType;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._tenantDn = config.tenantDn;
    this._termConsDn = config.termConsDn;
    this._termConsName = config.termConsName;
    this._termNodeConsDn = config.termNodeConsDn;
    this._termNodeProvDn = config.termNodeProvDn;
    this._termProvDn = config.termProvDn;
    this._termProvName = config.termProvName;
    this._uiTemplateType = config.uiTemplateType;
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

  // l4_l7_service_graph_template_type - computed: true, optional: true, required: false
  private _l4L7ServiceGraphTemplateType?: string; 
  public get l4L7ServiceGraphTemplateType() {
    return this.getStringAttribute('l4_l7_service_graph_template_type');
  }
  public set l4L7ServiceGraphTemplateType(value: string) {
    this._l4L7ServiceGraphTemplateType = value;
  }
  public resetL4L7ServiceGraphTemplateType() {
    this._l4L7ServiceGraphTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7ServiceGraphTemplateTypeInput() {
    return this._l4L7ServiceGraphTemplateType;
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

  // term_cons_dn - computed: true, optional: true, required: false
  private _termConsDn?: string; 
  public get termConsDn() {
    return this.getStringAttribute('term_cons_dn');
  }
  public set termConsDn(value: string) {
    this._termConsDn = value;
  }
  public resetTermConsDn() {
    this._termConsDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termConsDnInput() {
    return this._termConsDn;
  }

  // term_cons_name - computed: false, optional: true, required: false
  private _termConsName?: string; 
  public get termConsName() {
    return this.getStringAttribute('term_cons_name');
  }
  public set termConsName(value: string) {
    this._termConsName = value;
  }
  public resetTermConsName() {
    this._termConsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termConsNameInput() {
    return this._termConsName;
  }

  // term_node_cons_dn - computed: true, optional: true, required: false
  private _termNodeConsDn?: string; 
  public get termNodeConsDn() {
    return this.getStringAttribute('term_node_cons_dn');
  }
  public set termNodeConsDn(value: string) {
    this._termNodeConsDn = value;
  }
  public resetTermNodeConsDn() {
    this._termNodeConsDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termNodeConsDnInput() {
    return this._termNodeConsDn;
  }

  // term_node_prov_dn - computed: true, optional: true, required: false
  private _termNodeProvDn?: string; 
  public get termNodeProvDn() {
    return this.getStringAttribute('term_node_prov_dn');
  }
  public set termNodeProvDn(value: string) {
    this._termNodeProvDn = value;
  }
  public resetTermNodeProvDn() {
    this._termNodeProvDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termNodeProvDnInput() {
    return this._termNodeProvDn;
  }

  // term_prov_dn - computed: true, optional: true, required: false
  private _termProvDn?: string; 
  public get termProvDn() {
    return this.getStringAttribute('term_prov_dn');
  }
  public set termProvDn(value: string) {
    this._termProvDn = value;
  }
  public resetTermProvDn() {
    this._termProvDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termProvDnInput() {
    return this._termProvDn;
  }

  // term_prov_name - computed: false, optional: true, required: false
  private _termProvName?: string; 
  public get termProvName() {
    return this.getStringAttribute('term_prov_name');
  }
  public set termProvName(value: string) {
    this._termProvName = value;
  }
  public resetTermProvName() {
    this._termProvName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termProvNameInput() {
    return this._termProvName;
  }

  // ui_template_type - computed: true, optional: true, required: false
  private _uiTemplateType?: string; 
  public get uiTemplateType() {
    return this.getStringAttribute('ui_template_type');
  }
  public set uiTemplateType(value: string) {
    this._uiTemplateType = value;
  }
  public resetUiTemplateType() {
    this._uiTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiTemplateTypeInput() {
    return this._uiTemplateType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      l4_l7_service_graph_template_type: cdktf.stringToTerraform(this._l4L7ServiceGraphTemplateType),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      term_cons_dn: cdktf.stringToTerraform(this._termConsDn),
      term_cons_name: cdktf.stringToTerraform(this._termConsName),
      term_node_cons_dn: cdktf.stringToTerraform(this._termNodeConsDn),
      term_node_prov_dn: cdktf.stringToTerraform(this._termNodeProvDn),
      term_prov_dn: cdktf.stringToTerraform(this._termProvDn),
      term_prov_name: cdktf.stringToTerraform(this._termProvName),
      ui_template_type: cdktf.stringToTerraform(this._uiTemplateType),
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
      l4_l7_service_graph_template_type: {
        value: cdktf.stringToHclTerraform(this._l4L7ServiceGraphTemplateType),
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
      term_cons_dn: {
        value: cdktf.stringToHclTerraform(this._termConsDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      term_cons_name: {
        value: cdktf.stringToHclTerraform(this._termConsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      term_node_cons_dn: {
        value: cdktf.stringToHclTerraform(this._termNodeConsDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      term_node_prov_dn: {
        value: cdktf.stringToHclTerraform(this._termNodeProvDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      term_prov_dn: {
        value: cdktf.stringToHclTerraform(this._termProvDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      term_prov_name: {
        value: cdktf.stringToHclTerraform(this._termProvName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_template_type: {
        value: cdktf.stringToHclTerraform(this._uiTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
