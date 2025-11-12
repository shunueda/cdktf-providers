// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemotePcWakeOnLanHypervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number of actions that can execute in parallel on the hypervisor. Default is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#max_absolute_active_actions RemotePcWakeOnLanHypervisor#max_absolute_active_actions}
  */
  readonly maxAbsoluteActiveActions?: number;
  /**
  * Maximum number of actions that can be started on the hypervisor per-minute. Default is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#max_absolute_new_actions_per_minute RemotePcWakeOnLanHypervisor#max_absolute_new_actions_per_minute}
  */
  readonly maxAbsoluteNewActionsPerMinute?: number;
  /**
  * Maximum percentage of machines on the hypervisor which can have their power state changed simultaneously. Default is 40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#max_power_actions_percentage_of_machines RemotePcWakeOnLanHypervisor#max_power_actions_percentage_of_machines}
  */
  readonly maxPowerActionsPercentageOfMachines?: number;
  /**
  * Metadata for the Hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#metadata RemotePcWakeOnLanHypervisor#metadata}
  */
  readonly metadata?: RemotePcWakeOnLanHypervisorMetadata[] | cdktf.IResolvable;
  /**
  * The name of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#name RemotePcWakeOnLanHypervisor#name}
  */
  readonly name: string;
  /**
  * The IDs of the scopes for the hypervisor to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#scopes RemotePcWakeOnLanHypervisor#scopes}
  */
  readonly scopes?: string[];
  /**
  * Id of the zone the hypervisor is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#zone RemotePcWakeOnLanHypervisor#zone}
  */
  readonly zone: string;
}
export interface RemotePcWakeOnLanHypervisorMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#name RemotePcWakeOnLanHypervisor#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#value RemotePcWakeOnLanHypervisor#value}
  */
  readonly value: string;
}

export function remotePcWakeOnLanHypervisorMetadataToTerraform(struct?: RemotePcWakeOnLanHypervisorMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function remotePcWakeOnLanHypervisorMetadataToHclTerraform(struct?: RemotePcWakeOnLanHypervisorMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RemotePcWakeOnLanHypervisorMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RemotePcWakeOnLanHypervisorMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RemotePcWakeOnLanHypervisorMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RemotePcWakeOnLanHypervisorMetadataList extends cdktf.ComplexList {
  public internalValue? : RemotePcWakeOnLanHypervisorMetadata[] | cdktf.IResolvable

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
  public get(index: number): RemotePcWakeOnLanHypervisorMetadataOutputReference {
    return new RemotePcWakeOnLanHypervisorMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor citrix_remote_pc_wake_on_lan_hypervisor}
*/
export class RemotePcWakeOnLanHypervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_remote_pc_wake_on_lan_hypervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemotePcWakeOnLanHypervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemotePcWakeOnLanHypervisor to import
  * @param importFromId The id of the existing RemotePcWakeOnLanHypervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemotePcWakeOnLanHypervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_remote_pc_wake_on_lan_hypervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/remote_pc_wake_on_lan_hypervisor citrix_remote_pc_wake_on_lan_hypervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemotePcWakeOnLanHypervisorConfig
  */
  public constructor(scope: Construct, id: string, config: RemotePcWakeOnLanHypervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_remote_pc_wake_on_lan_hypervisor',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._maxAbsoluteActiveActions = config.maxAbsoluteActiveActions;
    this._maxAbsoluteNewActionsPerMinute = config.maxAbsoluteNewActionsPerMinute;
    this._maxPowerActionsPercentageOfMachines = config.maxPowerActionsPercentageOfMachines;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._scopes = config.scopes;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_absolute_active_actions - computed: true, optional: true, required: false
  private _maxAbsoluteActiveActions?: number; 
  public get maxAbsoluteActiveActions() {
    return this.getNumberAttribute('max_absolute_active_actions');
  }
  public set maxAbsoluteActiveActions(value: number) {
    this._maxAbsoluteActiveActions = value;
  }
  public resetMaxAbsoluteActiveActions() {
    this._maxAbsoluteActiveActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAbsoluteActiveActionsInput() {
    return this._maxAbsoluteActiveActions;
  }

  // max_absolute_new_actions_per_minute - computed: true, optional: true, required: false
  private _maxAbsoluteNewActionsPerMinute?: number; 
  public get maxAbsoluteNewActionsPerMinute() {
    return this.getNumberAttribute('max_absolute_new_actions_per_minute');
  }
  public set maxAbsoluteNewActionsPerMinute(value: number) {
    this._maxAbsoluteNewActionsPerMinute = value;
  }
  public resetMaxAbsoluteNewActionsPerMinute() {
    this._maxAbsoluteNewActionsPerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAbsoluteNewActionsPerMinuteInput() {
    return this._maxAbsoluteNewActionsPerMinute;
  }

  // max_power_actions_percentage_of_machines - computed: true, optional: true, required: false
  private _maxPowerActionsPercentageOfMachines?: number; 
  public get maxPowerActionsPercentageOfMachines() {
    return this.getNumberAttribute('max_power_actions_percentage_of_machines');
  }
  public set maxPowerActionsPercentageOfMachines(value: number) {
    this._maxPowerActionsPercentageOfMachines = value;
  }
  public resetMaxPowerActionsPercentageOfMachines() {
    this._maxPowerActionsPercentageOfMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPowerActionsPercentageOfMachinesInput() {
    return this._maxPowerActionsPercentageOfMachines;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new RemotePcWakeOnLanHypervisorMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: RemotePcWakeOnLanHypervisorMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_absolute_active_actions: cdktf.numberToTerraform(this._maxAbsoluteActiveActions),
      max_absolute_new_actions_per_minute: cdktf.numberToTerraform(this._maxAbsoluteNewActionsPerMinute),
      max_power_actions_percentage_of_machines: cdktf.numberToTerraform(this._maxPowerActionsPercentageOfMachines),
      metadata: cdktf.listMapper(remotePcWakeOnLanHypervisorMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_absolute_active_actions: {
        value: cdktf.numberToHclTerraform(this._maxAbsoluteActiveActions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_absolute_new_actions_per_minute: {
        value: cdktf.numberToHclTerraform(this._maxAbsoluteNewActionsPerMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_power_actions_percentage_of_machines: {
        value: cdktf.numberToHclTerraform(this._maxPowerActionsPercentageOfMachines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.listMapperHcl(remotePcWakeOnLanHypervisorMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RemotePcWakeOnLanHypervisorMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
