// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalDeviceContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#annotation LogicalDeviceContext#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#context LogicalDeviceContext#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#ctrct_name_or_lbl LogicalDeviceContext#ctrct_name_or_lbl}
  */
  readonly ctrctNameOrLbl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#description LogicalDeviceContext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#graph_name_or_lbl LogicalDeviceContext#graph_name_or_lbl}
  */
  readonly graphNameOrLbl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#id LogicalDeviceContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#name_alias LogicalDeviceContext#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#node_name_or_lbl LogicalDeviceContext#node_name_or_lbl}
  */
  readonly nodeNameOrLbl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#relation_vns_rs_l_dev_ctx_to_l_dev LogicalDeviceContext#relation_vns_rs_l_dev_ctx_to_l_dev}
  */
  readonly relationVnsRsLDevCtxToLDev: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#relation_vns_rs_l_dev_ctx_to_rtr_cfg LogicalDeviceContext#relation_vns_rs_l_dev_ctx_to_rtr_cfg}
  */
  readonly relationVnsRsLDevCtxToRtrCfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#tenant_dn LogicalDeviceContext#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context aci_logical_device_context}
*/
export class LogicalDeviceContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_logical_device_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalDeviceContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalDeviceContext to import
  * @param importFromId The id of the existing LogicalDeviceContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalDeviceContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_logical_device_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_device_context aci_logical_device_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalDeviceContextConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalDeviceContextConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_logical_device_context',
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
    this._context = config.context;
    this._ctrctNameOrLbl = config.ctrctNameOrLbl;
    this._description = config.description;
    this._graphNameOrLbl = config.graphNameOrLbl;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._nodeNameOrLbl = config.nodeNameOrLbl;
    this._relationVnsRsLDevCtxToLDev = config.relationVnsRsLDevCtxToLDev;
    this._relationVnsRsLDevCtxToRtrCfg = config.relationVnsRsLDevCtxToRtrCfg;
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

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // ctrct_name_or_lbl - computed: false, optional: false, required: true
  private _ctrctNameOrLbl?: string; 
  public get ctrctNameOrLbl() {
    return this.getStringAttribute('ctrct_name_or_lbl');
  }
  public set ctrctNameOrLbl(value: string) {
    this._ctrctNameOrLbl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrctNameOrLblInput() {
    return this._ctrctNameOrLbl;
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

  // graph_name_or_lbl - computed: false, optional: false, required: true
  private _graphNameOrLbl?: string; 
  public get graphNameOrLbl() {
    return this.getStringAttribute('graph_name_or_lbl');
  }
  public set graphNameOrLbl(value: string) {
    this._graphNameOrLbl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameOrLblInput() {
    return this._graphNameOrLbl;
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

  // node_name_or_lbl - computed: false, optional: false, required: true
  private _nodeNameOrLbl?: string; 
  public get nodeNameOrLbl() {
    return this.getStringAttribute('node_name_or_lbl');
  }
  public set nodeNameOrLbl(value: string) {
    this._nodeNameOrLbl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameOrLblInput() {
    return this._nodeNameOrLbl;
  }

  // relation_vns_rs_l_dev_ctx_to_l_dev - computed: false, optional: false, required: true
  private _relationVnsRsLDevCtxToLDev?: string; 
  public get relationVnsRsLDevCtxToLDev() {
    return this.getStringAttribute('relation_vns_rs_l_dev_ctx_to_l_dev');
  }
  public set relationVnsRsLDevCtxToLDev(value: string) {
    this._relationVnsRsLDevCtxToLDev = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLDevCtxToLDevInput() {
    return this._relationVnsRsLDevCtxToLDev;
  }

  // relation_vns_rs_l_dev_ctx_to_rtr_cfg - computed: false, optional: true, required: false
  private _relationVnsRsLDevCtxToRtrCfg?: string; 
  public get relationVnsRsLDevCtxToRtrCfg() {
    return this.getStringAttribute('relation_vns_rs_l_dev_ctx_to_rtr_cfg');
  }
  public set relationVnsRsLDevCtxToRtrCfg(value: string) {
    this._relationVnsRsLDevCtxToRtrCfg = value;
  }
  public resetRelationVnsRsLDevCtxToRtrCfg() {
    this._relationVnsRsLDevCtxToRtrCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLDevCtxToRtrCfgInput() {
    return this._relationVnsRsLDevCtxToRtrCfg;
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
      context: cdktf.stringToTerraform(this._context),
      ctrct_name_or_lbl: cdktf.stringToTerraform(this._ctrctNameOrLbl),
      description: cdktf.stringToTerraform(this._description),
      graph_name_or_lbl: cdktf.stringToTerraform(this._graphNameOrLbl),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      node_name_or_lbl: cdktf.stringToTerraform(this._nodeNameOrLbl),
      relation_vns_rs_l_dev_ctx_to_l_dev: cdktf.stringToTerraform(this._relationVnsRsLDevCtxToLDev),
      relation_vns_rs_l_dev_ctx_to_rtr_cfg: cdktf.stringToTerraform(this._relationVnsRsLDevCtxToRtrCfg),
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
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrct_name_or_lbl: {
        value: cdktf.stringToHclTerraform(this._ctrctNameOrLbl),
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
      graph_name_or_lbl: {
        value: cdktf.stringToHclTerraform(this._graphNameOrLbl),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name_or_lbl: {
        value: cdktf.stringToHclTerraform(this._nodeNameOrLbl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_dev_ctx_to_l_dev: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLDevCtxToLDev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_dev_ctx_to_rtr_cfg: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLDevCtxToRtrCfg),
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
