// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_rf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterWirelessRfProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_rf_profile#id DataDnacenterWirelessRfProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rf-profile-name query parameter. RF Profile Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_rf_profile#rf_profile_name DataDnacenterWirelessRfProfile#rf_profile_name}
  */
  readonly rfProfileName?: string;
}
export interface DataDnacenterWirelessRfProfileItems {
}

export function dataDnacenterWirelessRfProfileItemsToTerraform(struct?: DataDnacenterWirelessRfProfileItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessRfProfileItemsToHclTerraform(struct?: DataDnacenterWirelessRfProfileItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessRfProfileItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessRfProfileItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessRfProfileItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // a_radio_channels - computed: true, optional: false, required: false
  public get aRadioChannels() {
    return this.getStringAttribute('a_radio_channels');
  }

  // b_radio_channels - computed: true, optional: false, required: false
  public get bRadioChannels() {
    return this.getStringAttribute('b_radio_channels');
  }

  // c_radio_channels - computed: true, optional: false, required: false
  public get cRadioChannels() {
    return this.getStringAttribute('c_radio_channels');
  }

  // channel_width - computed: true, optional: false, required: false
  public get channelWidth() {
    return this.getStringAttribute('channel_width');
  }

  // data_rates_a - computed: true, optional: false, required: false
  public get dataRatesA() {
    return this.getStringAttribute('data_rates_a');
  }

  // data_rates_b - computed: true, optional: false, required: false
  public get dataRatesB() {
    return this.getStringAttribute('data_rates_b');
  }

  // data_rates_c - computed: true, optional: false, required: false
  public get dataRatesC() {
    return this.getStringAttribute('data_rates_c');
  }

  // default_rf_profile - computed: true, optional: false, required: false
  public get defaultRfProfile() {
    return this.getStringAttribute('default_rf_profile');
  }

  // enable_a_radio_type - computed: true, optional: false, required: false
  public get enableARadioType() {
    return this.getStringAttribute('enable_a_radio_type');
  }

  // enable_b_radio_type - computed: true, optional: false, required: false
  public get enableBRadioType() {
    return this.getStringAttribute('enable_b_radio_type');
  }

  // enable_brown_field - computed: true, optional: false, required: false
  public get enableBrownField() {
    return this.getStringAttribute('enable_brown_field');
  }

  // enable_c_radio_type - computed: true, optional: false, required: false
  public get enableCRadioType() {
    return this.getStringAttribute('enable_c_radio_type');
  }

  // enable_custom - computed: true, optional: false, required: false
  public get enableCustom() {
    return this.getStringAttribute('enable_custom');
  }

  // mandatory_data_rates_a - computed: true, optional: false, required: false
  public get mandatoryDataRatesA() {
    return this.getStringAttribute('mandatory_data_rates_a');
  }

  // mandatory_data_rates_b - computed: true, optional: false, required: false
  public get mandatoryDataRatesB() {
    return this.getStringAttribute('mandatory_data_rates_b');
  }

  // mandatory_data_rates_c - computed: true, optional: false, required: false
  public get mandatoryDataRatesC() {
    return this.getStringAttribute('mandatory_data_rates_c');
  }

  // max_power_level_a - computed: true, optional: false, required: false
  public get maxPowerLevelA() {
    return this.getStringAttribute('max_power_level_a');
  }

  // max_power_level_b - computed: true, optional: false, required: false
  public get maxPowerLevelB() {
    return this.getStringAttribute('max_power_level_b');
  }

  // min_power_level_a - computed: true, optional: false, required: false
  public get minPowerLevelA() {
    return this.getStringAttribute('min_power_level_a');
  }

  // min_power_level_b - computed: true, optional: false, required: false
  public get minPowerLevelB() {
    return this.getStringAttribute('min_power_level_b');
  }

  // min_power_level_c - computed: true, optional: false, required: false
  public get minPowerLevelC() {
    return this.getStringAttribute('min_power_level_c');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_profile_a - computed: true, optional: false, required: false
  public get parentProfileA() {
    return this.getStringAttribute('parent_profile_a');
  }

  // parent_profile_b - computed: true, optional: false, required: false
  public get parentProfileB() {
    return this.getStringAttribute('parent_profile_b');
  }

  // power_threshold_v1_a - computed: true, optional: false, required: false
  public get powerThresholdV1A() {
    return this.getNumberAttribute('power_threshold_v1_a');
  }

  // power_threshold_v1_b - computed: true, optional: false, required: false
  public get powerThresholdV1B() {
    return this.getNumberAttribute('power_threshold_v1_b');
  }

  // power_threshold_v1_c - computed: true, optional: false, required: false
  public get powerThresholdV1C() {
    return this.getNumberAttribute('power_threshold_v1_c');
  }

  // rx_sop_threshold_a - computed: true, optional: false, required: false
  public get rxSopThresholdA() {
    return this.getStringAttribute('rx_sop_threshold_a');
  }

  // rx_sop_threshold_b - computed: true, optional: false, required: false
  public get rxSopThresholdB() {
    return this.getStringAttribute('rx_sop_threshold_b');
  }

  // rx_sop_threshold_c - computed: true, optional: false, required: false
  public get rxSopThresholdC() {
    return this.getStringAttribute('rx_sop_threshold_c');
  }
}

export class DataDnacenterWirelessRfProfileItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessRfProfileItemsOutputReference {
    return new DataDnacenterWirelessRfProfileItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_rf_profile dnacenter_wireless_rf_profile}
*/
export class DataDnacenterWirelessRfProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_rf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterWirelessRfProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterWirelessRfProfile to import
  * @param importFromId The id of the existing DataDnacenterWirelessRfProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_rf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterWirelessRfProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_rf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_rf_profile dnacenter_wireless_rf_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterWirelessRfProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterWirelessRfProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_rf_profile',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._rfProfileName = config.rfProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterWirelessRfProfileItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // rf_profile_name - computed: false, optional: true, required: false
  private _rfProfileName?: string; 
  public get rfProfileName() {
    return this.getStringAttribute('rf_profile_name');
  }
  public set rfProfileName(value: string) {
    this._rfProfileName = value;
  }
  public resetRfProfileName() {
    this._rfProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileNameInput() {
    return this._rfProfileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rf_profile_name: cdktf.stringToTerraform(this._rfProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rf_profile_name: {
        value: cdktf.stringToHclTerraform(this._rfProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
