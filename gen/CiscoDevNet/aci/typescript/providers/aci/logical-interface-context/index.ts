// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalInterfaceContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#annotation LogicalInterfaceContext#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#conn_name_or_lbl LogicalInterfaceContext#conn_name_or_lbl}
  */
  readonly connNameOrLbl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#description LogicalInterfaceContext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#id LogicalInterfaceContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#l3_dest LogicalInterfaceContext#l3_dest}
  */
  readonly l3Dest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#logical_device_context_dn LogicalInterfaceContext#logical_device_context_dn}
  */
  readonly logicalDeviceContextDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#name_alias LogicalInterfaceContext#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#permit_log LogicalInterfaceContext#permit_log}
  */
  readonly permitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_bd LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_bd}
  */
  readonly relationVnsRsLIfCtxToBd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_cust_qos_pol LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_cust_qos_pol}
  */
  readonly relationVnsRsLIfCtxToCustQosPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_inst_p LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_inst_p}
  */
  readonly relationVnsRsLIfCtxToInstP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_l_if LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_l_if}
  */
  readonly relationVnsRsLIfCtxToLIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_out LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_out}
  */
  readonly relationVnsRsLIfCtxToOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_out_def LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_out_def}
  */
  readonly relationVnsRsLIfCtxToOutDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_svc_e_pg_pol LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_svc_e_pg_pol}
  */
  readonly relationVnsRsLIfCtxToSvcEPgPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#relation_vns_rs_l_if_ctx_to_svc_redirect_pol LogicalInterfaceContext#relation_vns_rs_l_if_ctx_to_svc_redirect_pol}
  */
  readonly relationVnsRsLIfCtxToSvcRedirectPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context aci_logical_interface_context}
*/
export class LogicalInterfaceContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_logical_interface_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalInterfaceContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalInterfaceContext to import
  * @param importFromId The id of the existing LogicalInterfaceContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalInterfaceContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_logical_interface_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/logical_interface_context aci_logical_interface_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalInterfaceContextConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalInterfaceContextConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_logical_interface_context',
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
    this._connNameOrLbl = config.connNameOrLbl;
    this._description = config.description;
    this._id = config.id;
    this._l3Dest = config.l3Dest;
    this._logicalDeviceContextDn = config.logicalDeviceContextDn;
    this._nameAlias = config.nameAlias;
    this._permitLog = config.permitLog;
    this._relationVnsRsLIfCtxToBd = config.relationVnsRsLIfCtxToBd;
    this._relationVnsRsLIfCtxToCustQosPol = config.relationVnsRsLIfCtxToCustQosPol;
    this._relationVnsRsLIfCtxToInstP = config.relationVnsRsLIfCtxToInstP;
    this._relationVnsRsLIfCtxToLIf = config.relationVnsRsLIfCtxToLIf;
    this._relationVnsRsLIfCtxToOut = config.relationVnsRsLIfCtxToOut;
    this._relationVnsRsLIfCtxToOutDef = config.relationVnsRsLIfCtxToOutDef;
    this._relationVnsRsLIfCtxToSvcEPgPol = config.relationVnsRsLIfCtxToSvcEPgPol;
    this._relationVnsRsLIfCtxToSvcRedirectPol = config.relationVnsRsLIfCtxToSvcRedirectPol;
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

  // conn_name_or_lbl - computed: false, optional: false, required: true
  private _connNameOrLbl?: string; 
  public get connNameOrLbl() {
    return this.getStringAttribute('conn_name_or_lbl');
  }
  public set connNameOrLbl(value: string) {
    this._connNameOrLbl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connNameOrLblInput() {
    return this._connNameOrLbl;
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

  // l3_dest - computed: true, optional: true, required: false
  private _l3Dest?: string; 
  public get l3Dest() {
    return this.getStringAttribute('l3_dest');
  }
  public set l3Dest(value: string) {
    this._l3Dest = value;
  }
  public resetL3Dest() {
    this._l3Dest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3DestInput() {
    return this._l3Dest;
  }

  // logical_device_context_dn - computed: false, optional: false, required: true
  private _logicalDeviceContextDn?: string; 
  public get logicalDeviceContextDn() {
    return this.getStringAttribute('logical_device_context_dn');
  }
  public set logicalDeviceContextDn(value: string) {
    this._logicalDeviceContextDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDeviceContextDnInput() {
    return this._logicalDeviceContextDn;
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

  // permit_log - computed: true, optional: true, required: false
  private _permitLog?: string; 
  public get permitLog() {
    return this.getStringAttribute('permit_log');
  }
  public set permitLog(value: string) {
    this._permitLog = value;
  }
  public resetPermitLog() {
    this._permitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogInput() {
    return this._permitLog;
  }

  // relation_vns_rs_l_if_ctx_to_bd - computed: false, optional: true, required: false
  private _relationVnsRsLIfCtxToBd?: string; 
  public get relationVnsRsLIfCtxToBd() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_bd');
  }
  public set relationVnsRsLIfCtxToBd(value: string) {
    this._relationVnsRsLIfCtxToBd = value;
  }
  public resetRelationVnsRsLIfCtxToBd() {
    this._relationVnsRsLIfCtxToBd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToBdInput() {
    return this._relationVnsRsLIfCtxToBd;
  }

  // relation_vns_rs_l_if_ctx_to_cust_qos_pol - computed: false, optional: true, required: false
  private _relationVnsRsLIfCtxToCustQosPol?: string; 
  public get relationVnsRsLIfCtxToCustQosPol() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_cust_qos_pol');
  }
  public set relationVnsRsLIfCtxToCustQosPol(value: string) {
    this._relationVnsRsLIfCtxToCustQosPol = value;
  }
  public resetRelationVnsRsLIfCtxToCustQosPol() {
    this._relationVnsRsLIfCtxToCustQosPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToCustQosPolInput() {
    return this._relationVnsRsLIfCtxToCustQosPol;
  }

  // relation_vns_rs_l_if_ctx_to_inst_p - computed: true, optional: true, required: false
  private _relationVnsRsLIfCtxToInstP?: string; 
  public get relationVnsRsLIfCtxToInstP() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_inst_p');
  }
  public set relationVnsRsLIfCtxToInstP(value: string) {
    this._relationVnsRsLIfCtxToInstP = value;
  }
  public resetRelationVnsRsLIfCtxToInstP() {
    this._relationVnsRsLIfCtxToInstP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToInstPInput() {
    return this._relationVnsRsLIfCtxToInstP;
  }

  // relation_vns_rs_l_if_ctx_to_l_if - computed: false, optional: true, required: false
  private _relationVnsRsLIfCtxToLIf?: string; 
  public get relationVnsRsLIfCtxToLIf() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_l_if');
  }
  public set relationVnsRsLIfCtxToLIf(value: string) {
    this._relationVnsRsLIfCtxToLIf = value;
  }
  public resetRelationVnsRsLIfCtxToLIf() {
    this._relationVnsRsLIfCtxToLIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToLIfInput() {
    return this._relationVnsRsLIfCtxToLIf;
  }

  // relation_vns_rs_l_if_ctx_to_out - computed: false, optional: true, required: false
  private _relationVnsRsLIfCtxToOut?: string; 
  public get relationVnsRsLIfCtxToOut() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_out');
  }
  public set relationVnsRsLIfCtxToOut(value: string) {
    this._relationVnsRsLIfCtxToOut = value;
  }
  public resetRelationVnsRsLIfCtxToOut() {
    this._relationVnsRsLIfCtxToOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToOutInput() {
    return this._relationVnsRsLIfCtxToOut;
  }

  // relation_vns_rs_l_if_ctx_to_out_def - computed: true, optional: true, required: false
  private _relationVnsRsLIfCtxToOutDef?: string; 
  public get relationVnsRsLIfCtxToOutDef() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_out_def');
  }
  public set relationVnsRsLIfCtxToOutDef(value: string) {
    this._relationVnsRsLIfCtxToOutDef = value;
  }
  public resetRelationVnsRsLIfCtxToOutDef() {
    this._relationVnsRsLIfCtxToOutDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToOutDefInput() {
    return this._relationVnsRsLIfCtxToOutDef;
  }

  // relation_vns_rs_l_if_ctx_to_svc_e_pg_pol - computed: false, optional: true, required: false
  private _relationVnsRsLIfCtxToSvcEPgPol?: string; 
  public get relationVnsRsLIfCtxToSvcEPgPol() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_svc_e_pg_pol');
  }
  public set relationVnsRsLIfCtxToSvcEPgPol(value: string) {
    this._relationVnsRsLIfCtxToSvcEPgPol = value;
  }
  public resetRelationVnsRsLIfCtxToSvcEPgPol() {
    this._relationVnsRsLIfCtxToSvcEPgPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToSvcEPgPolInput() {
    return this._relationVnsRsLIfCtxToSvcEPgPol;
  }

  // relation_vns_rs_l_if_ctx_to_svc_redirect_pol - computed: false, optional: true, required: false
  private _relationVnsRsLIfCtxToSvcRedirectPol?: string; 
  public get relationVnsRsLIfCtxToSvcRedirectPol() {
    return this.getStringAttribute('relation_vns_rs_l_if_ctx_to_svc_redirect_pol');
  }
  public set relationVnsRsLIfCtxToSvcRedirectPol(value: string) {
    this._relationVnsRsLIfCtxToSvcRedirectPol = value;
  }
  public resetRelationVnsRsLIfCtxToSvcRedirectPol() {
    this._relationVnsRsLIfCtxToSvcRedirectPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsLIfCtxToSvcRedirectPolInput() {
    return this._relationVnsRsLIfCtxToSvcRedirectPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      conn_name_or_lbl: cdktf.stringToTerraform(this._connNameOrLbl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      l3_dest: cdktf.stringToTerraform(this._l3Dest),
      logical_device_context_dn: cdktf.stringToTerraform(this._logicalDeviceContextDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      permit_log: cdktf.stringToTerraform(this._permitLog),
      relation_vns_rs_l_if_ctx_to_bd: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToBd),
      relation_vns_rs_l_if_ctx_to_cust_qos_pol: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToCustQosPol),
      relation_vns_rs_l_if_ctx_to_inst_p: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToInstP),
      relation_vns_rs_l_if_ctx_to_l_if: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToLIf),
      relation_vns_rs_l_if_ctx_to_out: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToOut),
      relation_vns_rs_l_if_ctx_to_out_def: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToOutDef),
      relation_vns_rs_l_if_ctx_to_svc_e_pg_pol: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToSvcEPgPol),
      relation_vns_rs_l_if_ctx_to_svc_redirect_pol: cdktf.stringToTerraform(this._relationVnsRsLIfCtxToSvcRedirectPol),
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
      conn_name_or_lbl: {
        value: cdktf.stringToHclTerraform(this._connNameOrLbl),
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
      l3_dest: {
        value: cdktf.stringToHclTerraform(this._l3Dest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_device_context_dn: {
        value: cdktf.stringToHclTerraform(this._logicalDeviceContextDn),
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
      permit_log: {
        value: cdktf.stringToHclTerraform(this._permitLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_bd: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToBd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_cust_qos_pol: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToCustQosPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_inst_p: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToInstP),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_l_if: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToLIf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_out: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_out_def: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToOutDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_svc_e_pg_pol: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToSvcEPgPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_l_if_ctx_to_svc_redirect_pol: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsLIfCtxToSvcRedirectPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
