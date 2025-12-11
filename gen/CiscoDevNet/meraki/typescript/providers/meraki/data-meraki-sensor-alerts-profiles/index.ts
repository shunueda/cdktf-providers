// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_alerts_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSensorAlertsProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_alerts_profiles#network_id DataMerakiSensorAlertsProfiles#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiSensorAlertsProfilesItemsConditions {
}

export function dataMerakiSensorAlertsProfilesItemsConditionsToTerraform(struct?: DataMerakiSensorAlertsProfilesItemsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSensorAlertsProfilesItemsConditionsToHclTerraform(struct?: DataMerakiSensorAlertsProfilesItemsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSensorAlertsProfilesItemsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSensorAlertsProfilesItemsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSensorAlertsProfilesItemsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // threshold_apparent_power_draw - computed: true, optional: false, required: false
  public get thresholdApparentPowerDraw() {
    return this.getNumberAttribute('threshold_apparent_power_draw');
  }

  // threshold_co2_concentration - computed: true, optional: false, required: false
  public get thresholdCo2Concentration() {
    return this.getNumberAttribute('threshold_co2_concentration');
  }

  // threshold_co2_quality - computed: true, optional: false, required: false
  public get thresholdCo2Quality() {
    return this.getStringAttribute('threshold_co2_quality');
  }

  // threshold_current_draw - computed: true, optional: false, required: false
  public get thresholdCurrentDraw() {
    return this.getNumberAttribute('threshold_current_draw');
  }

  // threshold_door_open - computed: true, optional: false, required: false
  public get thresholdDoorOpen() {
    return this.getBooleanAttribute('threshold_door_open');
  }

  // threshold_frequency_level - computed: true, optional: false, required: false
  public get thresholdFrequencyLevel() {
    return this.getNumberAttribute('threshold_frequency_level');
  }

  // threshold_humidity_quality - computed: true, optional: false, required: false
  public get thresholdHumidityQuality() {
    return this.getStringAttribute('threshold_humidity_quality');
  }

  // threshold_humidity_relative_percentage - computed: true, optional: false, required: false
  public get thresholdHumidityRelativePercentage() {
    return this.getNumberAttribute('threshold_humidity_relative_percentage');
  }

  // threshold_indoor_air_quality_quality - computed: true, optional: false, required: false
  public get thresholdIndoorAirQualityQuality() {
    return this.getStringAttribute('threshold_indoor_air_quality_quality');
  }

  // threshold_indoor_air_quality_score - computed: true, optional: false, required: false
  public get thresholdIndoorAirQualityScore() {
    return this.getNumberAttribute('threshold_indoor_air_quality_score');
  }

  // threshold_noise_ambient_level - computed: true, optional: false, required: false
  public get thresholdNoiseAmbientLevel() {
    return this.getNumberAttribute('threshold_noise_ambient_level');
  }

  // threshold_noise_ambient_quality - computed: true, optional: false, required: false
  public get thresholdNoiseAmbientQuality() {
    return this.getStringAttribute('threshold_noise_ambient_quality');
  }

  // threshold_pm25_concentration - computed: true, optional: false, required: false
  public get thresholdPm25Concentration() {
    return this.getNumberAttribute('threshold_pm25_concentration');
  }

  // threshold_pm25_quality - computed: true, optional: false, required: false
  public get thresholdPm25Quality() {
    return this.getStringAttribute('threshold_pm25_quality');
  }

  // threshold_power_factor_percentage - computed: true, optional: false, required: false
  public get thresholdPowerFactorPercentage() {
    return this.getNumberAttribute('threshold_power_factor_percentage');
  }

  // threshold_real_power_draw - computed: true, optional: false, required: false
  public get thresholdRealPowerDraw() {
    return this.getNumberAttribute('threshold_real_power_draw');
  }

  // threshold_temperature_celsius - computed: true, optional: false, required: false
  public get thresholdTemperatureCelsius() {
    return this.getNumberAttribute('threshold_temperature_celsius');
  }

  // threshold_temperature_fahrenheit - computed: true, optional: false, required: false
  public get thresholdTemperatureFahrenheit() {
    return this.getNumberAttribute('threshold_temperature_fahrenheit');
  }

  // threshold_temperature_quality - computed: true, optional: false, required: false
  public get thresholdTemperatureQuality() {
    return this.getStringAttribute('threshold_temperature_quality');
  }

  // threshold_tvoc_concentration - computed: true, optional: false, required: false
  public get thresholdTvocConcentration() {
    return this.getNumberAttribute('threshold_tvoc_concentration');
  }

  // threshold_tvoc_quality - computed: true, optional: false, required: false
  public get thresholdTvocQuality() {
    return this.getStringAttribute('threshold_tvoc_quality');
  }

  // threshold_upstream_power_outage_detected - computed: true, optional: false, required: false
  public get thresholdUpstreamPowerOutageDetected() {
    return this.getBooleanAttribute('threshold_upstream_power_outage_detected');
  }

  // threshold_voltage_level - computed: true, optional: false, required: false
  public get thresholdVoltageLevel() {
    return this.getNumberAttribute('threshold_voltage_level');
  }

  // threshold_water_present - computed: true, optional: false, required: false
  public get thresholdWaterPresent() {
    return this.getBooleanAttribute('threshold_water_present');
  }
}

export class DataMerakiSensorAlertsProfilesItemsConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSensorAlertsProfilesItemsConditionsOutputReference {
    return new DataMerakiSensorAlertsProfilesItemsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiSensorAlertsProfilesItems {
}

export function dataMerakiSensorAlertsProfilesItemsToTerraform(struct?: DataMerakiSensorAlertsProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSensorAlertsProfilesItemsToHclTerraform(struct?: DataMerakiSensorAlertsProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSensorAlertsProfilesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSensorAlertsProfilesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSensorAlertsProfilesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataMerakiSensorAlertsProfilesItemsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_sensor_url - computed: true, optional: false, required: false
  public get includeSensorUrl() {
    return this.getBooleanAttribute('include_sensor_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recipients_emails - computed: true, optional: false, required: false
  public get recipientsEmails() {
    return this.getListAttribute('recipients_emails');
  }

  // recipients_http_server_ids - computed: true, optional: false, required: false
  public get recipientsHttpServerIds() {
    return this.getListAttribute('recipients_http_server_ids');
  }

  // recipients_sms_numbers - computed: true, optional: false, required: false
  public get recipientsSmsNumbers() {
    return this.getListAttribute('recipients_sms_numbers');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // serials - computed: true, optional: false, required: false
  public get serials() {
    return this.getListAttribute('serials');
  }
}

export class DataMerakiSensorAlertsProfilesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSensorAlertsProfilesItemsOutputReference {
    return new DataMerakiSensorAlertsProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_alerts_profiles meraki_sensor_alerts_profiles}
*/
export class DataMerakiSensorAlertsProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_sensor_alerts_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSensorAlertsProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSensorAlertsProfiles to import
  * @param importFromId The id of the existing DataMerakiSensorAlertsProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_alerts_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSensorAlertsProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_sensor_alerts_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_alerts_profiles meraki_sensor_alerts_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSensorAlertsProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSensorAlertsProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_sensor_alerts_profiles',
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
  private _items = new DataMerakiSensorAlertsProfilesItemsList(this, "items", true);
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
