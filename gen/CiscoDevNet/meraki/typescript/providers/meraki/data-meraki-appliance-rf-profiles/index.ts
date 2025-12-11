// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_rf_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceRfProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_rf_profiles#network_id DataMerakiApplianceRfProfiles#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiApplianceRfProfilesItems {
}

export function dataMerakiApplianceRfProfilesItemsToTerraform(struct?: DataMerakiApplianceRfProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceRfProfilesItemsToHclTerraform(struct?: DataMerakiApplianceRfProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceRfProfilesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiApplianceRfProfilesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceRfProfilesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // five_ghz_settings_ax_enabled - computed: true, optional: false, required: false
  public get fiveGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('five_ghz_settings_ax_enabled');
  }

  // five_ghz_settings_min_bitrate - computed: true, optional: false, required: false
  public get fiveGhzSettingsMinBitrate() {
    return this.getNumberAttribute('five_ghz_settings_min_bitrate');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // per_ssid_settings_1_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings1BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_1_band_operation_mode');
  }

  // per_ssid_settings_1_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings1BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_1_band_steering_enabled');
  }

  // per_ssid_settings_2_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings2BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_2_band_operation_mode');
  }

  // per_ssid_settings_2_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings2BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_2_band_steering_enabled');
  }

  // per_ssid_settings_3_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings3BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_3_band_operation_mode');
  }

  // per_ssid_settings_3_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings3BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_3_band_steering_enabled');
  }

  // per_ssid_settings_4_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings4BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_4_band_operation_mode');
  }

  // per_ssid_settings_4_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings4BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_4_band_steering_enabled');
  }

  // two_four_ghz_settings_ax_enabled - computed: true, optional: false, required: false
  public get twoFourGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('two_four_ghz_settings_ax_enabled');
  }

  // two_four_ghz_settings_min_bitrate - computed: true, optional: false, required: false
  public get twoFourGhzSettingsMinBitrate() {
    return this.getNumberAttribute('two_four_ghz_settings_min_bitrate');
  }
}

export class DataMerakiApplianceRfProfilesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceRfProfilesItemsOutputReference {
    return new DataMerakiApplianceRfProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_rf_profiles meraki_appliance_rf_profiles}
*/
export class DataMerakiApplianceRfProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_rf_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceRfProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceRfProfiles to import
  * @param importFromId The id of the existing DataMerakiApplianceRfProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_rf_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceRfProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_rf_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/appliance_rf_profiles meraki_appliance_rf_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceRfProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceRfProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_rf_profiles',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiApplianceRfProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
