// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/sensor_alerts_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSensorAlertsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/sensor_alerts_profile#id DataMerakiSensorAlertsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the sensor alert profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/sensor_alerts_profile#name DataMerakiSensorAlertsProfile#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/sensor_alerts_profile#network_id DataMerakiSensorAlertsProfile#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiSensorAlertsProfileConditions {
}

export function dataMerakiSensorAlertsProfileConditionsToTerraform(struct?: DataMerakiSensorAlertsProfileConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSensorAlertsProfileConditionsToHclTerraform(struct?: DataMerakiSensorAlertsProfileConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSensorAlertsProfileConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSensorAlertsProfileConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSensorAlertsProfileConditions | undefined) {
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

export class DataMerakiSensorAlertsProfileConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSensorAlertsProfileConditionsOutputReference {
    return new DataMerakiSensorAlertsProfileConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/sensor_alerts_profile meraki_sensor_alerts_profile}
*/
export class DataMerakiSensorAlertsProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_sensor_alerts_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSensorAlertsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSensorAlertsProfile to import
  * @param importFromId The id of the existing DataMerakiSensorAlertsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/sensor_alerts_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSensorAlertsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_sensor_alerts_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/sensor_alerts_profile meraki_sensor_alerts_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSensorAlertsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSensorAlertsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_sensor_alerts_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataMerakiSensorAlertsProfileConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
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

  // include_sensor_url - computed: true, optional: false, required: false
  public get includeSensorUrl() {
    return this.getBooleanAttribute('include_sensor_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
