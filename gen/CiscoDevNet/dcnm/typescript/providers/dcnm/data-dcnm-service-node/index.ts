// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDcnmServiceNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#admin_state DataDcnmServiceNode#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#allowed_vlans DataDcnmServiceNode#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#attached_fabric DataDcnmServiceNode#attached_fabric}
  */
  readonly attachedFabric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#attached_switch_interface_name DataDcnmServiceNode#attached_switch_interface_name}
  */
  readonly attachedSwitchInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#bpdu_guard_flag DataDcnmServiceNode#bpdu_guard_flag}
  */
  readonly bpduGuardFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#dest_fabric_name DataDcnmServiceNode#dest_fabric_name}
  */
  readonly destFabricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#dest_if_name DataDcnmServiceNode#dest_if_name}
  */
  readonly destIfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#dest_serial_number DataDcnmServiceNode#dest_serial_number}
  */
  readonly destSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#dest_switch_name DataDcnmServiceNode#dest_switch_name}
  */
  readonly destSwitchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#form_factor DataDcnmServiceNode#form_factor}
  */
  readonly formFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#id DataDcnmServiceNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#interface_name DataDcnmServiceNode#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#is_metaswitch DataDcnmServiceNode#is_metaswitch}
  */
  readonly isMetaswitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#link_template_name DataDcnmServiceNode#link_template_name}
  */
  readonly linkTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#mtu DataDcnmServiceNode#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#name DataDcnmServiceNode#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#node_type DataDcnmServiceNode#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#policy_description DataDcnmServiceNode#policy_description}
  */
  readonly policyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#policy_id DataDcnmServiceNode#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#porttype_fast_enabled DataDcnmServiceNode#porttype_fast_enabled}
  */
  readonly porttypeFastEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#priority DataDcnmServiceNode#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#service_fabric DataDcnmServiceNode#service_fabric}
  */
  readonly serviceFabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#source_fabric_name DataDcnmServiceNode#source_fabric_name}
  */
  readonly sourceFabricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#source_if_name DataDcnmServiceNode#source_if_name}
  */
  readonly sourceIfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#source_serial_number DataDcnmServiceNode#source_serial_number}
  */
  readonly sourceSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#source_switch_name DataDcnmServiceNode#source_switch_name}
  */
  readonly sourceSwitchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#speed DataDcnmServiceNode#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#switches DataDcnmServiceNode#switches}
  */
  readonly switches?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node dcnm_service_node}
*/
export class DataDcnmServiceNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_service_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDcnmServiceNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDcnmServiceNode to import
  * @param importFromId The id of the existing DataDcnmServiceNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDcnmServiceNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_service_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_node dcnm_service_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDcnmServiceNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataDcnmServiceNodeConfig) {
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
    this._destFabricName = config.destFabricName;
    this._destIfName = config.destIfName;
    this._destSerialNumber = config.destSerialNumber;
    this._destSwitchName = config.destSwitchName;
    this._formFactor = config.formFactor;
    this._id = config.id;
    this._interfaceName = config.interfaceName;
    this._isMetaswitch = config.isMetaswitch;
    this._linkTemplateName = config.linkTemplateName;
    this._mtu = config.mtu;
    this._name = config.name;
    this._nodeType = config.nodeType;
    this._policyDescription = config.policyDescription;
    this._policyId = config.policyId;
    this._porttypeFastEnabled = config.porttypeFastEnabled;
    this._priority = config.priority;
    this._serviceFabric = config.serviceFabric;
    this._sourceFabricName = config.sourceFabricName;
    this._sourceIfName = config.sourceIfName;
    this._sourceSerialNumber = config.sourceSerialNumber;
    this._sourceSwitchName = config.sourceSwitchName;
    this._speed = config.speed;
    this._switches = config.switches;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
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

  // allowed_vlans - computed: true, optional: true, required: false
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

  // attached_fabric - computed: true, optional: true, required: false
  private _attachedFabric?: string; 
  public get attachedFabric() {
    return this.getStringAttribute('attached_fabric');
  }
  public set attachedFabric(value: string) {
    this._attachedFabric = value;
  }
  public resetAttachedFabric() {
    this._attachedFabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedFabricInput() {
    return this._attachedFabric;
  }

  // attached_switch_interface_name - computed: true, optional: true, required: false
  private _attachedSwitchInterfaceName?: string; 
  public get attachedSwitchInterfaceName() {
    return this.getStringAttribute('attached_switch_interface_name');
  }
  public set attachedSwitchInterfaceName(value: string) {
    this._attachedSwitchInterfaceName = value;
  }
  public resetAttachedSwitchInterfaceName() {
    this._attachedSwitchInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedSwitchInterfaceNameInput() {
    return this._attachedSwitchInterfaceName;
  }

  // bpdu_guard_flag - computed: true, optional: true, required: false
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

  // dest_fabric_name - computed: true, optional: true, required: false
  private _destFabricName?: string; 
  public get destFabricName() {
    return this.getStringAttribute('dest_fabric_name');
  }
  public set destFabricName(value: string) {
    this._destFabricName = value;
  }
  public resetDestFabricName() {
    this._destFabricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destFabricNameInput() {
    return this._destFabricName;
  }

  // dest_if_name - computed: true, optional: true, required: false
  private _destIfName?: string; 
  public get destIfName() {
    return this.getStringAttribute('dest_if_name');
  }
  public set destIfName(value: string) {
    this._destIfName = value;
  }
  public resetDestIfName() {
    this._destIfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIfNameInput() {
    return this._destIfName;
  }

  // dest_serial_number - computed: true, optional: true, required: false
  private _destSerialNumber?: string; 
  public get destSerialNumber() {
    return this.getStringAttribute('dest_serial_number');
  }
  public set destSerialNumber(value: string) {
    this._destSerialNumber = value;
  }
  public resetDestSerialNumber() {
    this._destSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destSerialNumberInput() {
    return this._destSerialNumber;
  }

  // dest_switch_name - computed: true, optional: true, required: false
  private _destSwitchName?: string; 
  public get destSwitchName() {
    return this.getStringAttribute('dest_switch_name');
  }
  public set destSwitchName(value: string) {
    this._destSwitchName = value;
  }
  public resetDestSwitchName() {
    this._destSwitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destSwitchNameInput() {
    return this._destSwitchName;
  }

  // form_factor - computed: true, optional: true, required: false
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

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // is_metaswitch - computed: true, optional: true, required: false
  private _isMetaswitch?: string; 
  public get isMetaswitch() {
    return this.getStringAttribute('is_metaswitch');
  }
  public set isMetaswitch(value: string) {
    this._isMetaswitch = value;
  }
  public resetIsMetaswitch() {
    this._isMetaswitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetaswitchInput() {
    return this._isMetaswitch;
  }

  // link_template_name - computed: true, optional: true, required: false
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

  // mtu - computed: true, optional: true, required: false
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

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
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

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // porttype_fast_enabled - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // source_fabric_name - computed: true, optional: true, required: false
  private _sourceFabricName?: string; 
  public get sourceFabricName() {
    return this.getStringAttribute('source_fabric_name');
  }
  public set sourceFabricName(value: string) {
    this._sourceFabricName = value;
  }
  public resetSourceFabricName() {
    this._sourceFabricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFabricNameInput() {
    return this._sourceFabricName;
  }

  // source_if_name - computed: true, optional: true, required: false
  private _sourceIfName?: string; 
  public get sourceIfName() {
    return this.getStringAttribute('source_if_name');
  }
  public set sourceIfName(value: string) {
    this._sourceIfName = value;
  }
  public resetSourceIfName() {
    this._sourceIfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIfNameInput() {
    return this._sourceIfName;
  }

  // source_serial_number - computed: true, optional: true, required: false
  private _sourceSerialNumber?: string; 
  public get sourceSerialNumber() {
    return this.getStringAttribute('source_serial_number');
  }
  public set sourceSerialNumber(value: string) {
    this._sourceSerialNumber = value;
  }
  public resetSourceSerialNumber() {
    this._sourceSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSerialNumberInput() {
    return this._sourceSerialNumber;
  }

  // source_switch_name - computed: true, optional: true, required: false
  private _sourceSwitchName?: string; 
  public get sourceSwitchName() {
    return this.getStringAttribute('source_switch_name');
  }
  public set sourceSwitchName(value: string) {
    this._sourceSwitchName = value;
  }
  public resetSourceSwitchName() {
    this._sourceSwitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSwitchNameInput() {
    return this._sourceSwitchName;
  }

  // speed - computed: true, optional: true, required: false
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

  // switches - computed: false, optional: true, required: false
  private _switches?: string[]; 
  public get switches() {
    return cdktf.Fn.tolist(this.getListAttribute('switches'));
  }
  public set switches(value: string[]) {
    this._switches = value;
  }
  public resetSwitches() {
    this._switches = undefined;
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
      dest_fabric_name: cdktf.stringToTerraform(this._destFabricName),
      dest_if_name: cdktf.stringToTerraform(this._destIfName),
      dest_serial_number: cdktf.stringToTerraform(this._destSerialNumber),
      dest_switch_name: cdktf.stringToTerraform(this._destSwitchName),
      form_factor: cdktf.stringToTerraform(this._formFactor),
      id: cdktf.stringToTerraform(this._id),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      is_metaswitch: cdktf.stringToTerraform(this._isMetaswitch),
      link_template_name: cdktf.stringToTerraform(this._linkTemplateName),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      node_type: cdktf.stringToTerraform(this._nodeType),
      policy_description: cdktf.stringToTerraform(this._policyDescription),
      policy_id: cdktf.stringToTerraform(this._policyId),
      porttype_fast_enabled: cdktf.stringToTerraform(this._porttypeFastEnabled),
      priority: cdktf.stringToTerraform(this._priority),
      service_fabric: cdktf.stringToTerraform(this._serviceFabric),
      source_fabric_name: cdktf.stringToTerraform(this._sourceFabricName),
      source_if_name: cdktf.stringToTerraform(this._sourceIfName),
      source_serial_number: cdktf.stringToTerraform(this._sourceSerialNumber),
      source_switch_name: cdktf.stringToTerraform(this._sourceSwitchName),
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
      dest_fabric_name: {
        value: cdktf.stringToHclTerraform(this._destFabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_if_name: {
        value: cdktf.stringToHclTerraform(this._destIfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_serial_number: {
        value: cdktf.stringToHclTerraform(this._destSerialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_switch_name: {
        value: cdktf.stringToHclTerraform(this._destSwitchName),
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
      is_metaswitch: {
        value: cdktf.stringToHclTerraform(this._isMetaswitch),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
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
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
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
      source_fabric_name: {
        value: cdktf.stringToHclTerraform(this._sourceFabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_if_name: {
        value: cdktf.stringToHclTerraform(this._sourceIfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_serial_number: {
        value: cdktf.stringToHclTerraform(this._sourceSerialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_switch_name: {
        value: cdktf.stringToHclTerraform(this._sourceSwitchName),
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
