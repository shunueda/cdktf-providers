// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellularControllerFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cellular interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#cellular_interface_id CellularControllerFeatureTemplate#cellular_interface_id}
  */
  readonly cellularInterfaceId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#cellular_interface_id_variable CellularControllerFeatureTemplate#cellular_interface_id_variable}
  */
  readonly cellularInterfaceIdVariable?: string;
  /**
  * Data Profile List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#data_profiles CellularControllerFeatureTemplate#data_profiles}
  */
  readonly dataProfiles?: CellularControllerFeatureTemplateDataProfiles[] | cdktf.IResolvable;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#description CellularControllerFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#device_types CellularControllerFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable/Disable Firmware Auto Sim
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#firmware_auto_sim CellularControllerFeatureTemplate#firmware_auto_sim}
  */
  readonly firmwareAutoSim?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#firmware_auto_sim_variable CellularControllerFeatureTemplate#firmware_auto_sim_variable}
  */
  readonly firmwareAutoSimVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#name CellularControllerFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Set primary SIM slot
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#primary_sim_slot CellularControllerFeatureTemplate#primary_sim_slot}
  */
  readonly primarySimSlot?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#primary_sim_slot_variable CellularControllerFeatureTemplate#primary_sim_slot_variable}
  */
  readonly primarySimSlotVariable?: string;
  /**
  * Set SIM failover retries
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#sim_failover_retries CellularControllerFeatureTemplate#sim_failover_retries}
  */
  readonly simFailoverRetries?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#sim_failover_retries_variable CellularControllerFeatureTemplate#sim_failover_retries_variable}
  */
  readonly simFailoverRetriesVariable?: string;
  /**
  * Set SIM failover timeout in minutes
  *   - Range: `3`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#sim_failover_timeout CellularControllerFeatureTemplate#sim_failover_timeout}
  */
  readonly simFailoverTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#sim_failover_timeout_variable CellularControllerFeatureTemplate#sim_failover_timeout_variable}
  */
  readonly simFailoverTimeoutVariable?: string;
}
export interface CellularControllerFeatureTemplateDataProfiles {
  /**
  * Set attach profile
  *   - Range: `1`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#attach_profile CellularControllerFeatureTemplate#attach_profile}
  */
  readonly attachProfile?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#attach_profile_variable CellularControllerFeatureTemplate#attach_profile_variable}
  */
  readonly attachProfileVariable?: string;
  /**
  * Set data profile
  *   - Range: `1`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#data_profile CellularControllerFeatureTemplate#data_profile}
  */
  readonly dataProfile?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#data_profile_variable CellularControllerFeatureTemplate#data_profile_variable}
  */
  readonly dataProfileVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#optional CellularControllerFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set slot number
  *   - Range: `0`-`1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#slot_number CellularControllerFeatureTemplate#slot_number}
  */
  readonly slotNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#slot_number_variable CellularControllerFeatureTemplate#slot_number_variable}
  */
  readonly slotNumberVariable?: string;
}

export function cellularControllerFeatureTemplateDataProfilesToTerraform(struct?: CellularControllerFeatureTemplateDataProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_profile: cdktf.numberToTerraform(struct!.attachProfile),
    attach_profile_variable: cdktf.stringToTerraform(struct!.attachProfileVariable),
    data_profile: cdktf.numberToTerraform(struct!.dataProfile),
    data_profile_variable: cdktf.stringToTerraform(struct!.dataProfileVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    slot_number: cdktf.numberToTerraform(struct!.slotNumber),
    slot_number_variable: cdktf.stringToTerraform(struct!.slotNumberVariable),
  }
}


export function cellularControllerFeatureTemplateDataProfilesToHclTerraform(struct?: CellularControllerFeatureTemplateDataProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_profile: {
      value: cdktf.numberToHclTerraform(struct!.attachProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attach_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.attachProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_profile: {
      value: cdktf.numberToHclTerraform(struct!.dataProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.dataProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slot_number: {
      value: cdktf.numberToHclTerraform(struct!.slotNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot_number_variable: {
      value: cdktf.stringToHclTerraform(struct!.slotNumberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CellularControllerFeatureTemplateDataProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CellularControllerFeatureTemplateDataProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachProfile = this._attachProfile;
    }
    if (this._attachProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachProfileVariable = this._attachProfileVariable;
    }
    if (this._dataProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProfile = this._dataProfile;
    }
    if (this._dataProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProfileVariable = this._dataProfileVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._slotNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotNumber = this._slotNumber;
    }
    if (this._slotNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotNumberVariable = this._slotNumberVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CellularControllerFeatureTemplateDataProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachProfile = undefined;
      this._attachProfileVariable = undefined;
      this._dataProfile = undefined;
      this._dataProfileVariable = undefined;
      this._optional = undefined;
      this._slotNumber = undefined;
      this._slotNumberVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachProfile = value.attachProfile;
      this._attachProfileVariable = value.attachProfileVariable;
      this._dataProfile = value.dataProfile;
      this._dataProfileVariable = value.dataProfileVariable;
      this._optional = value.optional;
      this._slotNumber = value.slotNumber;
      this._slotNumberVariable = value.slotNumberVariable;
    }
  }

  // attach_profile - computed: false, optional: true, required: false
  private _attachProfile?: number; 
  public get attachProfile() {
    return this.getNumberAttribute('attach_profile');
  }
  public set attachProfile(value: number) {
    this._attachProfile = value;
  }
  public resetAttachProfile() {
    this._attachProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachProfileInput() {
    return this._attachProfile;
  }

  // attach_profile_variable - computed: false, optional: true, required: false
  private _attachProfileVariable?: string; 
  public get attachProfileVariable() {
    return this.getStringAttribute('attach_profile_variable');
  }
  public set attachProfileVariable(value: string) {
    this._attachProfileVariable = value;
  }
  public resetAttachProfileVariable() {
    this._attachProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachProfileVariableInput() {
    return this._attachProfileVariable;
  }

  // data_profile - computed: false, optional: true, required: false
  private _dataProfile?: number; 
  public get dataProfile() {
    return this.getNumberAttribute('data_profile');
  }
  public set dataProfile(value: number) {
    this._dataProfile = value;
  }
  public resetDataProfile() {
    this._dataProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProfileInput() {
    return this._dataProfile;
  }

  // data_profile_variable - computed: false, optional: true, required: false
  private _dataProfileVariable?: string; 
  public get dataProfileVariable() {
    return this.getStringAttribute('data_profile_variable');
  }
  public set dataProfileVariable(value: string) {
    this._dataProfileVariable = value;
  }
  public resetDataProfileVariable() {
    this._dataProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProfileVariableInput() {
    return this._dataProfileVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // slot_number - computed: false, optional: true, required: false
  private _slotNumber?: number; 
  public get slotNumber() {
    return this.getNumberAttribute('slot_number');
  }
  public set slotNumber(value: number) {
    this._slotNumber = value;
  }
  public resetSlotNumber() {
    this._slotNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNumberInput() {
    return this._slotNumber;
  }

  // slot_number_variable - computed: false, optional: true, required: false
  private _slotNumberVariable?: string; 
  public get slotNumberVariable() {
    return this.getStringAttribute('slot_number_variable');
  }
  public set slotNumberVariable(value: string) {
    this._slotNumberVariable = value;
  }
  public resetSlotNumberVariable() {
    this._slotNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNumberVariableInput() {
    return this._slotNumberVariable;
  }
}

export class CellularControllerFeatureTemplateDataProfilesList extends cdktf.ComplexList {
  public internalValue? : CellularControllerFeatureTemplateDataProfiles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CellularControllerFeatureTemplateDataProfilesOutputReference {
    return new CellularControllerFeatureTemplateDataProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template sdwan_cellular_controller_feature_template}
*/
export class CellularControllerFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cellular_controller_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CellularControllerFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CellularControllerFeatureTemplate to import
  * @param importFromId The id of the existing CellularControllerFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CellularControllerFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cellular_controller_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cellular_controller_feature_template sdwan_cellular_controller_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellularControllerFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CellularControllerFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cellular_controller_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cellularInterfaceId = config.cellularInterfaceId;
    this._cellularInterfaceIdVariable = config.cellularInterfaceIdVariable;
    this._dataProfiles.internalValue = config.dataProfiles;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
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

  // cellular_interface_id - computed: false, optional: true, required: false
  private _cellularInterfaceId?: string; 
  public get cellularInterfaceId() {
    return this.getStringAttribute('cellular_interface_id');
  }
  public set cellularInterfaceId(value: string) {
    this._cellularInterfaceId = value;
  }
  public resetCellularInterfaceId() {
    this._cellularInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularInterfaceIdInput() {
    return this._cellularInterfaceId;
  }

  // cellular_interface_id_variable - computed: false, optional: true, required: false
  private _cellularInterfaceIdVariable?: string; 
  public get cellularInterfaceIdVariable() {
    return this.getStringAttribute('cellular_interface_id_variable');
  }
  public set cellularInterfaceIdVariable(value: string) {
    this._cellularInterfaceIdVariable = value;
  }
  public resetCellularInterfaceIdVariable() {
    this._cellularInterfaceIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularInterfaceIdVariableInput() {
    return this._cellularInterfaceIdVariable;
  }

  // data_profiles - computed: false, optional: true, required: false
  private _dataProfiles = new CellularControllerFeatureTemplateDataProfilesList(this, "data_profiles", false);
  public get dataProfiles() {
    return this._dataProfiles;
  }
  public putDataProfiles(value: CellularControllerFeatureTemplateDataProfiles[] | cdktf.IResolvable) {
    this._dataProfiles.internalValue = value;
  }
  public resetDataProfiles() {
    this._dataProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProfilesInput() {
    return this._dataProfiles.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      cellular_interface_id: cdktf.stringToTerraform(this._cellularInterfaceId),
      cellular_interface_id_variable: cdktf.stringToTerraform(this._cellularInterfaceIdVariable),
      data_profiles: cdktf.listMapper(cellularControllerFeatureTemplateDataProfilesToTerraform, false)(this._dataProfiles.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
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
      cellular_interface_id: {
        value: cdktf.stringToHclTerraform(this._cellularInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cellular_interface_id_variable: {
        value: cdktf.stringToHclTerraform(this._cellularInterfaceIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_profiles: {
        value: cdktf.listMapperHcl(cellularControllerFeatureTemplateDataProfilesToHclTerraform, false)(this._dataProfiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CellularControllerFeatureTemplateDataProfilesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
