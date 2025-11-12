// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#admin_state ServiceNode#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#allowed_vlans ServiceNode#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#attached_fabric ServiceNode#attached_fabric}
  */
  readonly attachedFabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#attached_switch_interface_name ServiceNode#attached_switch_interface_name}
  */
  readonly attachedSwitchInterfaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#bpdu_guard_flag ServiceNode#bpdu_guard_flag}
  */
  readonly bpduGuardFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#form_factor ServiceNode#form_factor}
  */
  readonly formFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#id ServiceNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#interface_name ServiceNode#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#link_template_name ServiceNode#link_template_name}
  */
  readonly linkTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#mtu ServiceNode#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#name ServiceNode#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#node_type ServiceNode#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#policy_description ServiceNode#policy_description}
  */
  readonly policyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#porttype_fast_enabled ServiceNode#porttype_fast_enabled}
  */
  readonly porttypeFastEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#service_fabric ServiceNode#service_fabric}
  */
  readonly serviceFabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#speed ServiceNode#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#switches ServiceNode#switches}
  */
  readonly switches: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node dcnm_service_node}
*/
export class ServiceNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_service_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceNode to import
  * @param importFromId The id of the existing ServiceNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_service_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/resources/service_node dcnm_service_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceNodeConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_service_node',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7',
        providerVersionConstraint: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._allowedVlans = config.allowedVlans;
    this._attachedFabric = config.attachedFabric;
    this._attachedSwitchInterfaceName = config.attachedSwitchInterfaceName;
    this._bpduGuardFlag = config.bpduGuardFlag;
    this._formFactor = config.formFactor;
    this._id = config.id;
    this._interfaceName = config.interfaceName;
    this._linkTemplateName = config.linkTemplateName;
    this._mtu = config.mtu;
    this._name = config.name;
    this._nodeType = config.nodeType;
    this._policyDescription = config.policyDescription;
    this._porttypeFastEnabled = config.porttypeFastEnabled;
    this._serviceFabric = config.serviceFabric;
    this._speed = config.speed;
    this._switches = config.switches;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: false, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // allowed_vlans - computed: false, optional: true, required: false
  private _allowedVlans?: string; 
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }
  public set allowedVlans(value: string) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // attached_fabric - computed: false, optional: false, required: true
  private _attachedFabric?: string; 
  public get attachedFabric() {
    return this.getStringAttribute('attached_fabric');
  }
  public set attachedFabric(value: string) {
    this._attachedFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedFabricInput() {
    return this._attachedFabric;
  }

  // attached_switch_interface_name - computed: false, optional: false, required: true
  private _attachedSwitchInterfaceName?: string; 
  public get attachedSwitchInterfaceName() {
    return this.getStringAttribute('attached_switch_interface_name');
  }
  public set attachedSwitchInterfaceName(value: string) {
    this._attachedSwitchInterfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedSwitchInterfaceNameInput() {
    return this._attachedSwitchInterfaceName;
  }

  // bpdu_guard_flag - computed: false, optional: true, required: false
  private _bpduGuardFlag?: string; 
  public get bpduGuardFlag() {
    return this.getStringAttribute('bpdu_guard_flag');
  }
  public set bpduGuardFlag(value: string) {
    this._bpduGuardFlag = value;
  }
  public resetBpduGuardFlag() {
    this._bpduGuardFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduGuardFlagInput() {
    return this._bpduGuardFlag;
  }

  // form_factor - computed: false, optional: true, required: false
  private _formFactor?: string; 
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }
  public set formFactor(value: string) {
    this._formFactor = value;
  }
  public resetFormFactor() {
    this._formFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFactorInput() {
    return this._formFactor;
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

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // link_template_name - computed: false, optional: true, required: false
  private _linkTemplateName?: string; 
  public get linkTemplateName() {
    return this.getStringAttribute('link_template_name');
  }
  public set linkTemplateName(value: string) {
    this._linkTemplateName = value;
  }
  public resetLinkTemplateName() {
    this._linkTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTemplateNameInput() {
    return this._linkTemplateName;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // policy_description - computed: true, optional: true, required: false
  private _policyDescription?: string; 
  public get policyDescription() {
    return this.getStringAttribute('policy_description');
  }
  public set policyDescription(value: string) {
    this._policyDescription = value;
  }
  public resetPolicyDescription() {
    this._policyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDescriptionInput() {
    return this._policyDescription;
  }

  // porttype_fast_enabled - computed: false, optional: true, required: false
  private _porttypeFastEnabled?: string; 
  public get porttypeFastEnabled() {
    return this.getStringAttribute('porttype_fast_enabled');
  }
  public set porttypeFastEnabled(value: string) {
    this._porttypeFastEnabled = value;
  }
  public resetPorttypeFastEnabled() {
    this._porttypeFastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get porttypeFastEnabledInput() {
    return this._porttypeFastEnabled;
  }

  // service_fabric - computed: false, optional: false, required: true
  private _serviceFabric?: string; 
  public get serviceFabric() {
    return this.getStringAttribute('service_fabric');
  }
  public set serviceFabric(value: string) {
    this._serviceFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricInput() {
    return this._serviceFabric;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // switches - computed: false, optional: false, required: true
  private _switches?: string[]; 
  public get switches() {
    return cdktf.Fn.tolist(this.getListAttribute('switches'));
  }
  public set switches(value: string[]) {
    this._switches = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchesInput() {
    return this._switches;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      allowed_vlans: cdktf.stringToTerraform(this._allowedVlans),
      attached_fabric: cdktf.stringToTerraform(this._attachedFabric),
      attached_switch_interface_name: cdktf.stringToTerraform(this._attachedSwitchInterfaceName),
      bpdu_guard_flag: cdktf.stringToTerraform(this._bpduGuardFlag),
      form_factor: cdktf.stringToTerraform(this._formFactor),
      id: cdktf.stringToTerraform(this._id),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      link_template_name: cdktf.stringToTerraform(this._linkTemplateName),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      node_type: cdktf.stringToTerraform(this._nodeType),
      policy_description: cdktf.stringToTerraform(this._policyDescription),
      porttype_fast_enabled: cdktf.stringToTerraform(this._porttypeFastEnabled),
      service_fabric: cdktf.stringToTerraform(this._serviceFabric),
      speed: cdktf.stringToTerraform(this._speed),
      switches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switches),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._allowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attached_fabric: {
        value: cdktf.stringToHclTerraform(this._attachedFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attached_switch_interface_name: {
        value: cdktf.stringToHclTerraform(this._attachedSwitchInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bpdu_guard_flag: {
        value: cdktf.stringToHclTerraform(this._bpduGuardFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_factor: {
        value: cdktf.stringToHclTerraform(this._formFactor),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_template_name: {
        value: cdktf.stringToHclTerraform(this._linkTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_description: {
        value: cdktf.stringToHclTerraform(this._policyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      porttype_fast_enabled: {
        value: cdktf.stringToHclTerraform(this._porttypeFastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_fabric: {
        value: cdktf.stringToHclTerraform(this._serviceFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
