// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportCellularControllerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cellular ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#cellular_id TransportCellularControllerFeature#cellular_id}
  */
  readonly cellularId: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#cellular_id_variable TransportCellularControllerFeature#cellular_id_variable}
  */
  readonly cellularIdVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#description TransportCellularControllerFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#feature_profile_id TransportCellularControllerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Enable/Disable Firmware Auto Sim
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#firmware_auto_sim TransportCellularControllerFeature#firmware_auto_sim}
  */
  readonly firmwareAutoSim?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#firmware_auto_sim_variable TransportCellularControllerFeature#firmware_auto_sim_variable}
  */
  readonly firmwareAutoSimVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#name TransportCellularControllerFeature#name}
  */
  readonly name: string;
  /**
  * Set primary SIM slot
  *   - Range: `0`-`1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#primary_sim_slot TransportCellularControllerFeature#primary_sim_slot}
  */
  readonly primarySimSlot?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#primary_sim_slot_variable TransportCellularControllerFeature#primary_sim_slot_variable}
  */
  readonly primarySimSlotVariable?: string;
  /**
  * Set SIM failover retries
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#sim_failover_retries TransportCellularControllerFeature#sim_failover_retries}
  */
  readonly simFailoverRetries?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#sim_failover_retries_variable TransportCellularControllerFeature#sim_failover_retries_variable}
  */
  readonly simFailoverRetriesVariable?: string;
  /**
  * Set SIM failover timeout in minutes
  *   - Range: `3`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#sim_failover_timeout TransportCellularControllerFeature#sim_failover_timeout}
  */
  readonly simFailoverTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#sim_failover_timeout_variable TransportCellularControllerFeature#sim_failover_timeout_variable}
  */
  readonly simFailoverTimeoutVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature sdwan_transport_cellular_controller_feature}
*/
export class TransportCellularControllerFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_cellular_controller_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportCellularControllerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportCellularControllerFeature to import
  * @param importFromId The id of the existing TransportCellularControllerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportCellularControllerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_cellular_controller_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_cellular_controller_feature sdwan_transport_cellular_controller_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportCellularControllerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportCellularControllerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_cellular_controller_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cellularId = config.cellularId;
    this._cellularIdVariable = config.cellularIdVariable;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._firmwareAutoSim = config.firmwareAutoSim;
    this._firmwareAutoSimVariable = config.firmwareAutoSimVariable;
    this._name = config.name;
    this._primarySimSlot = config.primarySimSlot;
    this._primarySimSlotVariable = config.primarySimSlotVariable;
    this._simFailoverRetries = config.simFailoverRetries;
    this._simFailoverRetriesVariable = config.simFailoverRetriesVariable;
    this._simFailoverTimeout = config.simFailoverTimeout;
    this._simFailoverTimeoutVariable = config.simFailoverTimeoutVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cellular_id - computed: false, optional: false, required: true
  private _cellularId?: string; 
  public get cellularId() {
    return this.getStringAttribute('cellular_id');
  }
  public set cellularId(value: string) {
    this._cellularId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularIdInput() {
    return this._cellularId;
  }

  // cellular_id_variable - computed: false, optional: true, required: false
  private _cellularIdVariable?: string; 
  public get cellularIdVariable() {
    return this.getStringAttribute('cellular_id_variable');
  }
  public set cellularIdVariable(value: string) {
    this._cellularIdVariable = value;
  }
  public resetCellularIdVariable() {
    this._cellularIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularIdVariableInput() {
    return this._cellularIdVariable;
  }

  // description - computed: false, optional: true, required: false
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // firmware_auto_sim - computed: false, optional: true, required: false
  private _firmwareAutoSim?: boolean | cdktf.IResolvable; 
  public get firmwareAutoSim() {
    return this.getBooleanAttribute('firmware_auto_sim');
  }
  public set firmwareAutoSim(value: boolean | cdktf.IResolvable) {
    this._firmwareAutoSim = value;
  }
  public resetFirmwareAutoSim() {
    this._firmwareAutoSim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareAutoSimInput() {
    return this._firmwareAutoSim;
  }

  // firmware_auto_sim_variable - computed: false, optional: true, required: false
  private _firmwareAutoSimVariable?: string; 
  public get firmwareAutoSimVariable() {
    return this.getStringAttribute('firmware_auto_sim_variable');
  }
  public set firmwareAutoSimVariable(value: string) {
    this._firmwareAutoSimVariable = value;
  }
  public resetFirmwareAutoSimVariable() {
    this._firmwareAutoSimVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareAutoSimVariableInput() {
    return this._firmwareAutoSimVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // primary_sim_slot - computed: false, optional: true, required: false
  private _primarySimSlot?: number; 
  public get primarySimSlot() {
    return this.getNumberAttribute('primary_sim_slot');
  }
  public set primarySimSlot(value: number) {
    this._primarySimSlot = value;
  }
  public resetPrimarySimSlot() {
    this._primarySimSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySimSlotInput() {
    return this._primarySimSlot;
  }

  // primary_sim_slot_variable - computed: false, optional: true, required: false
  private _primarySimSlotVariable?: string; 
  public get primarySimSlotVariable() {
    return this.getStringAttribute('primary_sim_slot_variable');
  }
  public set primarySimSlotVariable(value: string) {
    this._primarySimSlotVariable = value;
  }
  public resetPrimarySimSlotVariable() {
    this._primarySimSlotVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySimSlotVariableInput() {
    return this._primarySimSlotVariable;
  }

  // sim_failover_retries - computed: false, optional: true, required: false
  private _simFailoverRetries?: number; 
  public get simFailoverRetries() {
    return this.getNumberAttribute('sim_failover_retries');
  }
  public set simFailoverRetries(value: number) {
    this._simFailoverRetries = value;
  }
  public resetSimFailoverRetries() {
    this._simFailoverRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simFailoverRetriesInput() {
    return this._simFailoverRetries;
  }

  // sim_failover_retries_variable - computed: false, optional: true, required: false
  private _simFailoverRetriesVariable?: string; 
  public get simFailoverRetriesVariable() {
    return this.getStringAttribute('sim_failover_retries_variable');
  }
  public set simFailoverRetriesVariable(value: string) {
    this._simFailoverRetriesVariable = value;
  }
  public resetSimFailoverRetriesVariable() {
    this._simFailoverRetriesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simFailoverRetriesVariableInput() {
    return this._simFailoverRetriesVariable;
  }

  // sim_failover_timeout - computed: false, optional: true, required: false
  private _simFailoverTimeout?: number; 
  public get simFailoverTimeout() {
    return this.getNumberAttribute('sim_failover_timeout');
  }
  public set simFailoverTimeout(value: number) {
    this._simFailoverTimeout = value;
  }
  public resetSimFailoverTimeout() {
    this._simFailoverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simFailoverTimeoutInput() {
    return this._simFailoverTimeout;
  }

  // sim_failover_timeout_variable - computed: false, optional: true, required: false
  private _simFailoverTimeoutVariable?: string; 
  public get simFailoverTimeoutVariable() {
    return this.getStringAttribute('sim_failover_timeout_variable');
  }
  public set simFailoverTimeoutVariable(value: string) {
    this._simFailoverTimeoutVariable = value;
  }
  public resetSimFailoverTimeoutVariable() {
    this._simFailoverTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simFailoverTimeoutVariableInput() {
    return this._simFailoverTimeoutVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cellular_id: cdktf.stringToTerraform(this._cellularId),
      cellular_id_variable: cdktf.stringToTerraform(this._cellularIdVariable),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      firmware_auto_sim: cdktf.booleanToTerraform(this._firmwareAutoSim),
      firmware_auto_sim_variable: cdktf.stringToTerraform(this._firmwareAutoSimVariable),
      name: cdktf.stringToTerraform(this._name),
      primary_sim_slot: cdktf.numberToTerraform(this._primarySimSlot),
      primary_sim_slot_variable: cdktf.stringToTerraform(this._primarySimSlotVariable),
      sim_failover_retries: cdktf.numberToTerraform(this._simFailoverRetries),
      sim_failover_retries_variable: cdktf.stringToTerraform(this._simFailoverRetriesVariable),
      sim_failover_timeout: cdktf.numberToTerraform(this._simFailoverTimeout),
      sim_failover_timeout_variable: cdktf.stringToTerraform(this._simFailoverTimeoutVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cellular_id: {
        value: cdktf.stringToHclTerraform(this._cellularId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cellular_id_variable: {
        value: cdktf.stringToHclTerraform(this._cellularIdVariable),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_auto_sim: {
        value: cdktf.booleanToHclTerraform(this._firmwareAutoSim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firmware_auto_sim_variable: {
        value: cdktf.stringToHclTerraform(this._firmwareAutoSimVariable),
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
      primary_sim_slot: {
        value: cdktf.numberToHclTerraform(this._primarySimSlot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_sim_slot_variable: {
        value: cdktf.stringToHclTerraform(this._primarySimSlotVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim_failover_retries: {
        value: cdktf.numberToHclTerraform(this._simFailoverRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sim_failover_retries_variable: {
        value: cdktf.stringToHclTerraform(this._simFailoverRetriesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim_failover_timeout: {
        value: cdktf.numberToHclTerraform(this._simFailoverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sim_failover_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._simFailoverTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
