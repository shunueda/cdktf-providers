// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScvmmHypervisorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hypervisor address(es). At least one is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#addresses ScvmmHypervisor#addresses}
  */
  readonly addresses: string[];
  /**
  * Maximum number of actions that can execute in parallel on the hypervisor. Default is 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#max_absolute_active_actions ScvmmHypervisor#max_absolute_active_actions}
  */
  readonly maxAbsoluteActiveActions?: number;
  /**
  * Maximum number of actions that can be started on the hypervisor per-minute. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#max_absolute_new_actions_per_minute ScvmmHypervisor#max_absolute_new_actions_per_minute}
  */
  readonly maxAbsoluteNewActionsPerMinute?: number;
  /**
  * Maximum percentage of machines on the hypervisor which can have their power state changed simultaneously. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#max_power_actions_percentage_of_machines ScvmmHypervisor#max_power_actions_percentage_of_machines}
  */
  readonly maxPowerActionsPercentageOfMachines?: number;
  /**
  * Metadata for the Hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#metadata ScvmmHypervisor#metadata}
  */
  readonly metadata?: ScvmmHypervisorMetadata[] | cdktf.IResolvable;
  /**
  * Name of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#name ScvmmHypervisor#name}
  */
  readonly name: string;
  /**
  * Password of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#password ScvmmHypervisor#password}
  */
  readonly password: string;
  /**
  * Password format of the hypervisor. Choose between Base64 and PlainText.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#password_format ScvmmHypervisor#password_format}
  */
  readonly passwordFormat: string;
  /**
  * The IDs of the scopes for the hypervisor to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#scopes ScvmmHypervisor#scopes}
  */
  readonly scopes?: string[];
  /**
  * Username of the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#username ScvmmHypervisor#username}
  */
  readonly username: string;
  /**
  * Id of the zone the hypervisor is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#zone ScvmmHypervisor#zone}
  */
  readonly zone: string;
}
export interface ScvmmHypervisorMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#name ScvmmHypervisor#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#value ScvmmHypervisor#value}
  */
  readonly value: string;
}

export function scvmmHypervisorMetadataToTerraform(struct?: ScvmmHypervisorMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function scvmmHypervisorMetadataToHclTerraform(struct?: ScvmmHypervisorMetadata | cdktf.IResolvable): any {
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

export class ScvmmHypervisorMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScvmmHypervisorMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScvmmHypervisorMetadata | cdktf.IResolvable | undefined) {
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

export class ScvmmHypervisorMetadataList extends cdktf.ComplexList {
  public internalValue? : ScvmmHypervisorMetadata[] | cdktf.IResolvable

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
  public get(index: number): ScvmmHypervisorMetadataOutputReference {
    return new ScvmmHypervisorMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor citrix_scvmm_hypervisor}
*/
export class ScvmmHypervisor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_scvmm_hypervisor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScvmmHypervisor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScvmmHypervisor to import
  * @param importFromId The id of the existing ScvmmHypervisor that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScvmmHypervisor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_scvmm_hypervisor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/scvmm_hypervisor citrix_scvmm_hypervisor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScvmmHypervisorConfig
  */
  public constructor(scope: Construct, id: string, config: ScvmmHypervisorConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_scvmm_hypervisor',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses = config.addresses;
    this._maxAbsoluteActiveActions = config.maxAbsoluteActiveActions;
    this._maxAbsoluteNewActionsPerMinute = config.maxAbsoluteNewActionsPerMinute;
    this._maxPowerActionsPercentageOfMachines = config.maxPowerActionsPercentageOfMachines;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._password = config.password;
    this._passwordFormat = config.passwordFormat;
    this._scopes = config.scopes;
    this._username = config.username;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

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
  private _metadata = new ScvmmHypervisorMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ScvmmHypervisorMetadata[] | cdktf.IResolvable) {
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_format - computed: false, optional: false, required: true
  private _passwordFormat?: string; 
  public get passwordFormat() {
    return this.getStringAttribute('password_format');
  }
  public set passwordFormat(value: string) {
    this._passwordFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFormatInput() {
    return this._passwordFormat;
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

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenants'));
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      max_absolute_active_actions: cdktf.numberToTerraform(this._maxAbsoluteActiveActions),
      max_absolute_new_actions_per_minute: cdktf.numberToTerraform(this._maxAbsoluteNewActionsPerMinute),
      max_power_actions_percentage_of_machines: cdktf.numberToTerraform(this._maxPowerActionsPercentageOfMachines),
      metadata: cdktf.listMapper(scvmmHypervisorMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_format: cdktf.stringToTerraform(this._passwordFormat),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      username: cdktf.stringToTerraform(this._username),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
        value: cdktf.listMapperHcl(scvmmHypervisorMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScvmmHypervisorMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_format: {
        value: cdktf.stringToHclTerraform(this._passwordFormat),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
