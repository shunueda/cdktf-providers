// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable MAC blocklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#mac_blocklist_enabled SwitchSettings#mac_blocklist_enabled}
  */
  readonly macBlocklistEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#network_id SwitchSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Exceptions on a per switch basis to 'useCombinedPower'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#power_exceptions SwitchSettings#power_exceptions}
  */
  readonly powerExceptions?: SwitchSettingsPowerExceptions[] | cdktf.IResolvable;
  /**
  * Enable uplink client sampling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#uplink_client_sampling_enabled SwitchSettings#uplink_client_sampling_enabled}
  */
  readonly uplinkClientSamplingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The use Combined Power as the default behavior of secondary power supplies on supported devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#use_combined_power SwitchSettings#use_combined_power}
  */
  readonly useCombinedPower?: boolean | cdktf.IResolvable;
  /**
  * Management VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#vlan SwitchSettings#vlan}
  */
  readonly vlan?: number;
}
export interface SwitchSettingsPowerExceptions {
  /**
  * Per switch exception (combined, redundant, useNetworkSetting)
  *   - Choices: `combined`, `redundant`, `useNetworkSetting`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#power_type SwitchSettings#power_type}
  */
  readonly powerType: string;
  /**
  * Serial number of the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#serial SwitchSettings#serial}
  */
  readonly serial: string;
}

export function switchSettingsPowerExceptionsToTerraform(struct?: SwitchSettingsPowerExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    power_type: cdktf.stringToTerraform(struct!.powerType),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function switchSettingsPowerExceptionsToHclTerraform(struct?: SwitchSettingsPowerExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    power_type: {
      value: cdktf.stringToHclTerraform(struct!.powerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchSettingsPowerExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchSettingsPowerExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._powerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerType = this._powerType;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchSettingsPowerExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._powerType = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._powerType = value.powerType;
      this._serial = value.serial;
    }
  }

  // power_type - computed: false, optional: false, required: true
  private _powerType?: string; 
  public get powerType() {
    return this.getStringAttribute('power_type');
  }
  public set powerType(value: string) {
    this._powerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerTypeInput() {
    return this._powerType;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }
}

export class SwitchSettingsPowerExceptionsList extends cdktf.ComplexList {
  public internalValue? : SwitchSettingsPowerExceptions[] | cdktf.IResolvable

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
  public get(index: number): SwitchSettingsPowerExceptionsOutputReference {
    return new SwitchSettingsPowerExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings meraki_switch_settings}
*/
export class SwitchSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchSettings to import
  * @param importFromId The id of the existing SwitchSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_settings meraki_switch_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._macBlocklistEnabled = config.macBlocklistEnabled;
    this._networkId = config.networkId;
    this._powerExceptions.internalValue = config.powerExceptions;
    this._uplinkClientSamplingEnabled = config.uplinkClientSamplingEnabled;
    this._useCombinedPower = config.useCombinedPower;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mac_blocklist_enabled - computed: false, optional: true, required: false
  private _macBlocklistEnabled?: boolean | cdktf.IResolvable; 
  public get macBlocklistEnabled() {
    return this.getBooleanAttribute('mac_blocklist_enabled');
  }
  public set macBlocklistEnabled(value: boolean | cdktf.IResolvable) {
    this._macBlocklistEnabled = value;
  }
  public resetMacBlocklistEnabled() {
    this._macBlocklistEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macBlocklistEnabledInput() {
    return this._macBlocklistEnabled;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // power_exceptions - computed: false, optional: true, required: false
  private _powerExceptions = new SwitchSettingsPowerExceptionsList(this, "power_exceptions", false);
  public get powerExceptions() {
    return this._powerExceptions;
  }
  public putPowerExceptions(value: SwitchSettingsPowerExceptions[] | cdktf.IResolvable) {
    this._powerExceptions.internalValue = value;
  }
  public resetPowerExceptions() {
    this._powerExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerExceptionsInput() {
    return this._powerExceptions.internalValue;
  }

  // uplink_client_sampling_enabled - computed: false, optional: true, required: false
  private _uplinkClientSamplingEnabled?: boolean | cdktf.IResolvable; 
  public get uplinkClientSamplingEnabled() {
    return this.getBooleanAttribute('uplink_client_sampling_enabled');
  }
  public set uplinkClientSamplingEnabled(value: boolean | cdktf.IResolvable) {
    this._uplinkClientSamplingEnabled = value;
  }
  public resetUplinkClientSamplingEnabled() {
    this._uplinkClientSamplingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkClientSamplingEnabledInput() {
    return this._uplinkClientSamplingEnabled;
  }

  // use_combined_power - computed: false, optional: true, required: false
  private _useCombinedPower?: boolean | cdktf.IResolvable; 
  public get useCombinedPower() {
    return this.getBooleanAttribute('use_combined_power');
  }
  public set useCombinedPower(value: boolean | cdktf.IResolvable) {
    this._useCombinedPower = value;
  }
  public resetUseCombinedPower() {
    this._useCombinedPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCombinedPowerInput() {
    return this._useCombinedPower;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mac_blocklist_enabled: cdktf.booleanToTerraform(this._macBlocklistEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      power_exceptions: cdktf.listMapper(switchSettingsPowerExceptionsToTerraform, false)(this._powerExceptions.internalValue),
      uplink_client_sampling_enabled: cdktf.booleanToTerraform(this._uplinkClientSamplingEnabled),
      use_combined_power: cdktf.booleanToTerraform(this._useCombinedPower),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mac_blocklist_enabled: {
        value: cdktf.booleanToHclTerraform(this._macBlocklistEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_exceptions: {
        value: cdktf.listMapperHcl(switchSettingsPowerExceptionsToHclTerraform, false)(this._powerExceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchSettingsPowerExceptionsList",
      },
      uplink_client_sampling_enabled: {
        value: cdktf.booleanToHclTerraform(this._uplinkClientSamplingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_combined_power: {
        value: cdktf.booleanToHclTerraform(this._useCombinedPower),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
