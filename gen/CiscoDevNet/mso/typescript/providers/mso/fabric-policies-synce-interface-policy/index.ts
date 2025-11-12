// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricPoliciesSynceInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#admin_state FabricPoliciesSynceInterfacePolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#description FabricPoliciesSynceInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#id FabricPoliciesSynceInterfacePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#name FabricPoliciesSynceInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#selection_input FabricPoliciesSynceInterfacePolicy#selection_input}
  */
  readonly selectionInput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#src_priority FabricPoliciesSynceInterfacePolicy#src_priority}
  */
  readonly srcPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#sync_state_msg FabricPoliciesSynceInterfacePolicy#sync_state_msg}
  */
  readonly syncStateMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#template_id FabricPoliciesSynceInterfacePolicy#template_id}
  */
  readonly templateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#wait_to_restore FabricPoliciesSynceInterfacePolicy#wait_to_restore}
  */
  readonly waitToRestore?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy mso_fabric_policies_synce_interface_policy}
*/
export class FabricPoliciesSynceInterfacePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_fabric_policies_synce_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricPoliciesSynceInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricPoliciesSynceInterfacePolicy to import
  * @param importFromId The id of the existing FabricPoliciesSynceInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricPoliciesSynceInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_fabric_policies_synce_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/fabric_policies_synce_interface_policy mso_fabric_policies_synce_interface_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricPoliciesSynceInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FabricPoliciesSynceInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_fabric_policies_synce_interface_policy',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._selectionInput = config.selectionInput;
    this._srcPriority = config.srcPriority;
    this._syncStateMsg = config.syncStateMsg;
    this._templateId = config.templateId;
    this._waitToRestore = config.waitToRestore;
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

  // selection_input - computed: true, optional: true, required: false
  private _selectionInput?: string; 
  public get selectionInput() {
    return this.getStringAttribute('selection_input');
  }
  public set selectionInput(value: string) {
    this._selectionInput = value;
  }
  public resetSelectionInput() {
    this._selectionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInputInput() {
    return this._selectionInput;
  }

  // src_priority - computed: true, optional: true, required: false
  private _srcPriority?: number; 
  public get srcPriority() {
    return this.getNumberAttribute('src_priority');
  }
  public set srcPriority(value: number) {
    this._srcPriority = value;
  }
  public resetSrcPriority() {
    this._srcPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPriorityInput() {
    return this._srcPriority;
  }

  // sync_state_msg - computed: true, optional: true, required: false
  private _syncStateMsg?: string; 
  public get syncStateMsg() {
    return this.getStringAttribute('sync_state_msg');
  }
  public set syncStateMsg(value: string) {
    this._syncStateMsg = value;
  }
  public resetSyncStateMsg() {
    this._syncStateMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStateMsgInput() {
    return this._syncStateMsg;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // wait_to_restore - computed: true, optional: true, required: false
  private _waitToRestore?: number; 
  public get waitToRestore() {
    return this.getNumberAttribute('wait_to_restore');
  }
  public set waitToRestore(value: number) {
    this._waitToRestore = value;
  }
  public resetWaitToRestore() {
    this._waitToRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitToRestoreInput() {
    return this._waitToRestore;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      selection_input: cdktf.stringToTerraform(this._selectionInput),
      src_priority: cdktf.numberToTerraform(this._srcPriority),
      sync_state_msg: cdktf.stringToTerraform(this._syncStateMsg),
      template_id: cdktf.stringToTerraform(this._templateId),
      wait_to_restore: cdktf.numberToTerraform(this._waitToRestore),
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
      selection_input: {
        value: cdktf.stringToHclTerraform(this._selectionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_priority: {
        value: cdktf.numberToHclTerraform(this._srcPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_state_msg: {
        value: cdktf.stringToHclTerraform(this._syncStateMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_to_restore: {
        value: cdktf.numberToHclTerraform(this._waitToRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
