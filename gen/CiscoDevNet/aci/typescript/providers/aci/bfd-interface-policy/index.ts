// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BfdInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#admin_st BfdInterfacePolicy#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#annotation BfdInterfacePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#ctrl BfdInterfacePolicy#ctrl}
  */
  readonly ctrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#description BfdInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#detect_mult BfdInterfacePolicy#detect_mult}
  */
  readonly detectMult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#echo_admin_st BfdInterfacePolicy#echo_admin_st}
  */
  readonly echoAdminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#echo_rx_intvl BfdInterfacePolicy#echo_rx_intvl}
  */
  readonly echoRxIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#id BfdInterfacePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#min_rx_intvl BfdInterfacePolicy#min_rx_intvl}
  */
  readonly minRxIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#min_tx_intvl BfdInterfacePolicy#min_tx_intvl}
  */
  readonly minTxIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#name BfdInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#name_alias BfdInterfacePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#tenant_dn BfdInterfacePolicy#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy aci_bfd_interface_policy}
*/
export class BfdInterfacePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bfd_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BfdInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BfdInterfacePolicy to import
  * @param importFromId The id of the existing BfdInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BfdInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bfd_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_interface_policy aci_bfd_interface_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BfdInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BfdInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bfd_interface_policy',
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
    this._adminSt = config.adminSt;
    this._annotation = config.annotation;
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._detectMult = config.detectMult;
    this._echoAdminSt = config.echoAdminSt;
    this._echoRxIntvl = config.echoRxIntvl;
    this._id = config.id;
    this._minRxIntvl = config.minRxIntvl;
    this._minTxIntvl = config.minTxIntvl;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_st - computed: true, optional: true, required: false
  private _adminSt?: string; 
  public get adminSt() {
    return this.getStringAttribute('admin_st');
  }
  public set adminSt(value: string) {
    this._adminSt = value;
  }
  public resetAdminSt() {
    this._adminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStInput() {
    return this._adminSt;
  }

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

  // detect_mult - computed: true, optional: true, required: false
  private _detectMult?: string; 
  public get detectMult() {
    return this.getStringAttribute('detect_mult');
  }
  public set detectMult(value: string) {
    this._detectMult = value;
  }
  public resetDetectMult() {
    this._detectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectMultInput() {
    return this._detectMult;
  }

  // echo_admin_st - computed: true, optional: true, required: false
  private _echoAdminSt?: string; 
  public get echoAdminSt() {
    return this.getStringAttribute('echo_admin_st');
  }
  public set echoAdminSt(value: string) {
    this._echoAdminSt = value;
  }
  public resetEchoAdminSt() {
    this._echoAdminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoAdminStInput() {
    return this._echoAdminSt;
  }

  // echo_rx_intvl - computed: true, optional: true, required: false
  private _echoRxIntvl?: string; 
  public get echoRxIntvl() {
    return this.getStringAttribute('echo_rx_intvl');
  }
  public set echoRxIntvl(value: string) {
    this._echoRxIntvl = value;
  }
  public resetEchoRxIntvl() {
    this._echoRxIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRxIntvlInput() {
    return this._echoRxIntvl;
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

  // min_rx_intvl - computed: true, optional: true, required: false
  private _minRxIntvl?: string; 
  public get minRxIntvl() {
    return this.getStringAttribute('min_rx_intvl');
  }
  public set minRxIntvl(value: string) {
    this._minRxIntvl = value;
  }
  public resetMinRxIntvl() {
    this._minRxIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxIntvlInput() {
    return this._minRxIntvl;
  }

  // min_tx_intvl - computed: true, optional: true, required: false
  private _minTxIntvl?: string; 
  public get minTxIntvl() {
    return this.getStringAttribute('min_tx_intvl');
  }
  public set minTxIntvl(value: string) {
    this._minTxIntvl = value;
  }
  public resetMinTxIntvl() {
    this._minTxIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTxIntvlInput() {
    return this._minTxIntvl;
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
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      ctrl: cdktf.stringToTerraform(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      detect_mult: cdktf.stringToTerraform(this._detectMult),
      echo_admin_st: cdktf.stringToTerraform(this._echoAdminSt),
      echo_rx_intvl: cdktf.stringToTerraform(this._echoRxIntvl),
      id: cdktf.stringToTerraform(this._id),
      min_rx_intvl: cdktf.stringToTerraform(this._minRxIntvl),
      min_tx_intvl: cdktf.stringToTerraform(this._minTxIntvl),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_st: {
        value: cdktf.stringToHclTerraform(this._adminSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      detect_mult: {
        value: cdktf.stringToHclTerraform(this._detectMult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      echo_admin_st: {
        value: cdktf.stringToHclTerraform(this._echoAdminSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      echo_rx_intvl: {
        value: cdktf.stringToHclTerraform(this._echoRxIntvl),
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
      min_rx_intvl: {
        value: cdktf.stringToHclTerraform(this._minRxIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_tx_intvl: {
        value: cdktf.stringToHclTerraform(this._minTxIntvl),
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
