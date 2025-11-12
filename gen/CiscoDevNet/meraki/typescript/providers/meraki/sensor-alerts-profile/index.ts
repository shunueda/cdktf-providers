// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorAlertsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of conditions that will cause the profile to send an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#conditions SensorAlertsProfile#conditions}
  */
  readonly conditions: SensorAlertsProfileConditions[] | cdktf.IResolvable;
  /**
  * Include dashboard link to sensor in messages (default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#include_sensor_url SensorAlertsProfile#include_sensor_url}
  */
  readonly includeSensorUrl?: boolean | cdktf.IResolvable;
  /**
  * A custom message that will appear in email and text message alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#message SensorAlertsProfile#message}
  */
  readonly message?: string;
  /**
  * Name of the sensor alert profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#name SensorAlertsProfile#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#network_id SensorAlertsProfile#network_id}
  */
  readonly networkId: string;
  /**
  * A list of emails that will receive information about the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#recipients_emails SensorAlertsProfile#recipients_emails}
  */
  readonly recipientsEmails?: string[];
  /**
  * A list of webhook endpoint IDs that will receive information about the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#recipients_http_server_ids SensorAlertsProfile#recipients_http_server_ids}
  */
  readonly recipientsHttpServerIds?: string[];
  /**
  * A list of SMS numbers that will receive information about the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#recipients_sms_numbers SensorAlertsProfile#recipients_sms_numbers}
  */
  readonly recipientsSmsNumbers?: string[];
  /**
  * ID of the sensor schedule to use with the alert profile. If not defined, the alert profile will be active at all times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#schedule_id SensorAlertsProfile#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * List of device serials assigned to this sensor alert profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#serials SensorAlertsProfile#serials}
  */
  readonly serials?: string[];
}
export interface SensorAlertsProfileConditions {
  /**
  * If `above`, an alert will be sent when a sensor reads above the threshold. If `below`, an alert will be sent when a sensor reads below the threshold. Only applicable for temperature, humidity, realPower, apparentPower, powerFactor, voltage, current, and frequency thresholds.
  *   - Choices: `above`, `below`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#direction SensorAlertsProfile#direction}
  */
  readonly direction: string;
  /**
  * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, 1 hour, 1 hour and 30 minutes, 2 hours, 4 hours, and 8 hours. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#duration SensorAlertsProfile#duration}
  */
  readonly duration?: number;
  /**
  * The type of sensor metric that will be monitored for changes.
  *   - Choices: `apparentPower`, `co2`, `current`, `door`, `frequency`, `humidity`, `indoorAirQuality`, `noise`, `pm25`, `powerFactor`, `realPower`, `temperature`, `tvoc`, `upstreamPower`, `voltage`, `water`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#metric SensorAlertsProfile#metric}
  */
  readonly metric: string;
  /**
  * Alerting threshold in volt-amps. Must be between 0 and 3750.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_apparent_power_draw SensorAlertsProfile#threshold_apparent_power_draw}
  */
  readonly thresholdApparentPowerDraw?: number;
  /**
  * Alerting threshold as CO2 parts per million.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_co2_concentration SensorAlertsProfile#threshold_co2_concentration}
  */
  readonly thresholdCo2Concentration?: number;
  /**
  * Alerting threshold as a qualitative CO2 level.
  *   - Choices: `fair`, `good`, `inadequate`, `poor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_co2_quality SensorAlertsProfile#threshold_co2_quality}
  */
  readonly thresholdCo2Quality?: string;
  /**
  * Alerting threshold in amps. Must be between 0 and 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_current_draw SensorAlertsProfile#threshold_current_draw}
  */
  readonly thresholdCurrentDraw?: number;
  /**
  * Alerting threshold for a door open event. Must be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_door_open SensorAlertsProfile#threshold_door_open}
  */
  readonly thresholdDoorOpen?: boolean | cdktf.IResolvable;
  /**
  * Alerting threshold in hertz. Must be between 0 and 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_frequency_level SensorAlertsProfile#threshold_frequency_level}
  */
  readonly thresholdFrequencyLevel?: number;
  /**
  * Alerting threshold as a qualitative humidity level.
  *   - Choices: `fair`, `good`, `inadequate`, `poor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_humidity_quality SensorAlertsProfile#threshold_humidity_quality}
  */
  readonly thresholdHumidityQuality?: string;
  /**
  * Alerting threshold in %RH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_humidity_relative_percentage SensorAlertsProfile#threshold_humidity_relative_percentage}
  */
  readonly thresholdHumidityRelativePercentage?: number;
  /**
  * Alerting threshold as a qualitative indoor air quality level.
  *   - Choices: `fair`, `good`, `inadequate`, `poor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_indoor_air_quality_quality SensorAlertsProfile#threshold_indoor_air_quality_quality}
  */
  readonly thresholdIndoorAirQualityQuality?: string;
  /**
  * Alerting threshold as indoor air quality score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_indoor_air_quality_score SensorAlertsProfile#threshold_indoor_air_quality_score}
  */
  readonly thresholdIndoorAirQualityScore?: number;
  /**
  * Alerting threshold as adjusted decibels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_noise_ambient_level SensorAlertsProfile#threshold_noise_ambient_level}
  */
  readonly thresholdNoiseAmbientLevel?: number;
  /**
  * Alerting threshold as a qualitative ambient noise level.
  *   - Choices: `fair`, `good`, `inadequate`, `poor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_noise_ambient_quality SensorAlertsProfile#threshold_noise_ambient_quality}
  */
  readonly thresholdNoiseAmbientQuality?: string;
  /**
  * Alerting threshold as PM2.5 parts per million.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_pm25_concentration SensorAlertsProfile#threshold_pm25_concentration}
  */
  readonly thresholdPm25Concentration?: number;
  /**
  * Alerting threshold as a qualitative PM2.5 level.
  *   - Choices: `fair`, `good`, `inadequate`, `poor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_pm25_quality SensorAlertsProfile#threshold_pm25_quality}
  */
  readonly thresholdPm25Quality?: string;
  /**
  * Alerting threshold as the ratio of active power to apparent power. Must be between 0 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_power_factor_percentage SensorAlertsProfile#threshold_power_factor_percentage}
  */
  readonly thresholdPowerFactorPercentage?: number;
  /**
  * Alerting threshold in watts. Must be between 0 and 3750.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_real_power_draw SensorAlertsProfile#threshold_real_power_draw}
  */
  readonly thresholdRealPowerDraw?: number;
  /**
  * Alerting threshold in degrees Celsius.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_temperature_celsius SensorAlertsProfile#threshold_temperature_celsius}
  */
  readonly thresholdTemperatureCelsius?: number;
  /**
  * Alerting threshold in degrees Fahrenheit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_temperature_fahrenheit SensorAlertsProfile#threshold_temperature_fahrenheit}
  */
  readonly thresholdTemperatureFahrenheit?: number;
  /**
  * Alerting threshold as a qualitative temperature level.
  *   - Choices: `fair`, `good`, `inadequate`, `poor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_temperature_quality SensorAlertsProfile#threshold_temperature_quality}
  */
  readonly thresholdTemperatureQuality?: string;
  /**
  * Alerting threshold as TVOC micrograms per cubic meter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_tvoc_concentration SensorAlertsProfile#threshold_tvoc_concentration}
  */
  readonly thresholdTvocConcentration?: number;
  /**
  * Alerting threshold as a qualitative TVOC level.
  *   - Choices: `fair`, `good`, `inadequate`, `poor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_tvoc_quality SensorAlertsProfile#threshold_tvoc_quality}
  */
  readonly thresholdTvocQuality?: string;
  /**
  * Alerting threshold for an upstream power event. Must be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_upstream_power_outage_detected SensorAlertsProfile#threshold_upstream_power_outage_detected}
  */
  readonly thresholdUpstreamPowerOutageDetected?: boolean | cdktf.IResolvable;
  /**
  * Alerting threshold in volts. Must be between 0 and 250.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_voltage_level SensorAlertsProfile#threshold_voltage_level}
  */
  readonly thresholdVoltageLevel?: number;
  /**
  * Alerting threshold for a water detection event. Must be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#threshold_water_present SensorAlertsProfile#threshold_water_present}
  */
  readonly thresholdWaterPresent?: boolean | cdktf.IResolvable;
}

export function sensorAlertsProfileConditionsToTerraform(struct?: SensorAlertsProfileConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    duration: cdktf.numberToTerraform(struct!.duration),
    metric: cdktf.stringToTerraform(struct!.metric),
    threshold_apparent_power_draw: cdktf.numberToTerraform(struct!.thresholdApparentPowerDraw),
    threshold_co2_concentration: cdktf.numberToTerraform(struct!.thresholdCo2Concentration),
    threshold_co2_quality: cdktf.stringToTerraform(struct!.thresholdCo2Quality),
    threshold_current_draw: cdktf.numberToTerraform(struct!.thresholdCurrentDraw),
    threshold_door_open: cdktf.booleanToTerraform(struct!.thresholdDoorOpen),
    threshold_frequency_level: cdktf.numberToTerraform(struct!.thresholdFrequencyLevel),
    threshold_humidity_quality: cdktf.stringToTerraform(struct!.thresholdHumidityQuality),
    threshold_humidity_relative_percentage: cdktf.numberToTerraform(struct!.thresholdHumidityRelativePercentage),
    threshold_indoor_air_quality_quality: cdktf.stringToTerraform(struct!.thresholdIndoorAirQualityQuality),
    threshold_indoor_air_quality_score: cdktf.numberToTerraform(struct!.thresholdIndoorAirQualityScore),
    threshold_noise_ambient_level: cdktf.numberToTerraform(struct!.thresholdNoiseAmbientLevel),
    threshold_noise_ambient_quality: cdktf.stringToTerraform(struct!.thresholdNoiseAmbientQuality),
    threshold_pm25_concentration: cdktf.numberToTerraform(struct!.thresholdPm25Concentration),
    threshold_pm25_quality: cdktf.stringToTerraform(struct!.thresholdPm25Quality),
    threshold_power_factor_percentage: cdktf.numberToTerraform(struct!.thresholdPowerFactorPercentage),
    threshold_real_power_draw: cdktf.numberToTerraform(struct!.thresholdRealPowerDraw),
    threshold_temperature_celsius: cdktf.numberToTerraform(struct!.thresholdTemperatureCelsius),
    threshold_temperature_fahrenheit: cdktf.numberToTerraform(struct!.thresholdTemperatureFahrenheit),
    threshold_temperature_quality: cdktf.stringToTerraform(struct!.thresholdTemperatureQuality),
    threshold_tvoc_concentration: cdktf.numberToTerraform(struct!.thresholdTvocConcentration),
    threshold_tvoc_quality: cdktf.stringToTerraform(struct!.thresholdTvocQuality),
    threshold_upstream_power_outage_detected: cdktf.booleanToTerraform(struct!.thresholdUpstreamPowerOutageDetected),
    threshold_voltage_level: cdktf.numberToTerraform(struct!.thresholdVoltageLevel),
    threshold_water_present: cdktf.booleanToTerraform(struct!.thresholdWaterPresent),
  }
}


export function sensorAlertsProfileConditionsToHclTerraform(struct?: SensorAlertsProfileConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_apparent_power_draw: {
      value: cdktf.numberToHclTerraform(struct!.thresholdApparentPowerDraw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_co2_concentration: {
      value: cdktf.numberToHclTerraform(struct!.thresholdCo2Concentration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_co2_quality: {
      value: cdktf.stringToHclTerraform(struct!.thresholdCo2Quality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_current_draw: {
      value: cdktf.numberToHclTerraform(struct!.thresholdCurrentDraw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_door_open: {
      value: cdktf.booleanToHclTerraform(struct!.thresholdDoorOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold_frequency_level: {
      value: cdktf.numberToHclTerraform(struct!.thresholdFrequencyLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_humidity_quality: {
      value: cdktf.stringToHclTerraform(struct!.thresholdHumidityQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_humidity_relative_percentage: {
      value: cdktf.numberToHclTerraform(struct!.thresholdHumidityRelativePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_indoor_air_quality_quality: {
      value: cdktf.stringToHclTerraform(struct!.thresholdIndoorAirQualityQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_indoor_air_quality_score: {
      value: cdktf.numberToHclTerraform(struct!.thresholdIndoorAirQualityScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_noise_ambient_level: {
      value: cdktf.numberToHclTerraform(struct!.thresholdNoiseAmbientLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_noise_ambient_quality: {
      value: cdktf.stringToHclTerraform(struct!.thresholdNoiseAmbientQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_pm25_concentration: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPm25Concentration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_pm25_quality: {
      value: cdktf.stringToHclTerraform(struct!.thresholdPm25Quality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_power_factor_percentage: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPowerFactorPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_real_power_draw: {
      value: cdktf.numberToHclTerraform(struct!.thresholdRealPowerDraw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_temperature_celsius: {
      value: cdktf.numberToHclTerraform(struct!.thresholdTemperatureCelsius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_temperature_fahrenheit: {
      value: cdktf.numberToHclTerraform(struct!.thresholdTemperatureFahrenheit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_temperature_quality: {
      value: cdktf.stringToHclTerraform(struct!.thresholdTemperatureQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_tvoc_concentration: {
      value: cdktf.numberToHclTerraform(struct!.thresholdTvocConcentration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_tvoc_quality: {
      value: cdktf.stringToHclTerraform(struct!.thresholdTvocQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_upstream_power_outage_detected: {
      value: cdktf.booleanToHclTerraform(struct!.thresholdUpstreamPowerOutageDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold_voltage_level: {
      value: cdktf.numberToHclTerraform(struct!.thresholdVoltageLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_water_present: {
      value: cdktf.booleanToHclTerraform(struct!.thresholdWaterPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorAlertsProfileConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorAlertsProfileConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._thresholdApparentPowerDraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdApparentPowerDraw = this._thresholdApparentPowerDraw;
    }
    if (this._thresholdCo2Concentration !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCo2Concentration = this._thresholdCo2Concentration;
    }
    if (this._thresholdCo2Quality !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCo2Quality = this._thresholdCo2Quality;
    }
    if (this._thresholdCurrentDraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCurrentDraw = this._thresholdCurrentDraw;
    }
    if (this._thresholdDoorOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdDoorOpen = this._thresholdDoorOpen;
    }
    if (this._thresholdFrequencyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdFrequencyLevel = this._thresholdFrequencyLevel;
    }
    if (this._thresholdHumidityQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdHumidityQuality = this._thresholdHumidityQuality;
    }
    if (this._thresholdHumidityRelativePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdHumidityRelativePercentage = this._thresholdHumidityRelativePercentage;
    }
    if (this._thresholdIndoorAirQualityQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdIndoorAirQualityQuality = this._thresholdIndoorAirQualityQuality;
    }
    if (this._thresholdIndoorAirQualityScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdIndoorAirQualityScore = this._thresholdIndoorAirQualityScore;
    }
    if (this._thresholdNoiseAmbientLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNoiseAmbientLevel = this._thresholdNoiseAmbientLevel;
    }
    if (this._thresholdNoiseAmbientQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNoiseAmbientQuality = this._thresholdNoiseAmbientQuality;
    }
    if (this._thresholdPm25Concentration !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPm25Concentration = this._thresholdPm25Concentration;
    }
    if (this._thresholdPm25Quality !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPm25Quality = this._thresholdPm25Quality;
    }
    if (this._thresholdPowerFactorPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPowerFactorPercentage = this._thresholdPowerFactorPercentage;
    }
    if (this._thresholdRealPowerDraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdRealPowerDraw = this._thresholdRealPowerDraw;
    }
    if (this._thresholdTemperatureCelsius !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTemperatureCelsius = this._thresholdTemperatureCelsius;
    }
    if (this._thresholdTemperatureFahrenheit !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTemperatureFahrenheit = this._thresholdTemperatureFahrenheit;
    }
    if (this._thresholdTemperatureQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTemperatureQuality = this._thresholdTemperatureQuality;
    }
    if (this._thresholdTvocConcentration !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTvocConcentration = this._thresholdTvocConcentration;
    }
    if (this._thresholdTvocQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTvocQuality = this._thresholdTvocQuality;
    }
    if (this._thresholdUpstreamPowerOutageDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdUpstreamPowerOutageDetected = this._thresholdUpstreamPowerOutageDetected;
    }
    if (this._thresholdVoltageLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVoltageLevel = this._thresholdVoltageLevel;
    }
    if (this._thresholdWaterPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWaterPresent = this._thresholdWaterPresent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorAlertsProfileConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._duration = undefined;
      this._metric = undefined;
      this._thresholdApparentPowerDraw = undefined;
      this._thresholdCo2Concentration = undefined;
      this._thresholdCo2Quality = undefined;
      this._thresholdCurrentDraw = undefined;
      this._thresholdDoorOpen = undefined;
      this._thresholdFrequencyLevel = undefined;
      this._thresholdHumidityQuality = undefined;
      this._thresholdHumidityRelativePercentage = undefined;
      this._thresholdIndoorAirQualityQuality = undefined;
      this._thresholdIndoorAirQualityScore = undefined;
      this._thresholdNoiseAmbientLevel = undefined;
      this._thresholdNoiseAmbientQuality = undefined;
      this._thresholdPm25Concentration = undefined;
      this._thresholdPm25Quality = undefined;
      this._thresholdPowerFactorPercentage = undefined;
      this._thresholdRealPowerDraw = undefined;
      this._thresholdTemperatureCelsius = undefined;
      this._thresholdTemperatureFahrenheit = undefined;
      this._thresholdTemperatureQuality = undefined;
      this._thresholdTvocConcentration = undefined;
      this._thresholdTvocQuality = undefined;
      this._thresholdUpstreamPowerOutageDetected = undefined;
      this._thresholdVoltageLevel = undefined;
      this._thresholdWaterPresent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._duration = value.duration;
      this._metric = value.metric;
      this._thresholdApparentPowerDraw = value.thresholdApparentPowerDraw;
      this._thresholdCo2Concentration = value.thresholdCo2Concentration;
      this._thresholdCo2Quality = value.thresholdCo2Quality;
      this._thresholdCurrentDraw = value.thresholdCurrentDraw;
      this._thresholdDoorOpen = value.thresholdDoorOpen;
      this._thresholdFrequencyLevel = value.thresholdFrequencyLevel;
      this._thresholdHumidityQuality = value.thresholdHumidityQuality;
      this._thresholdHumidityRelativePercentage = value.thresholdHumidityRelativePercentage;
      this._thresholdIndoorAirQualityQuality = value.thresholdIndoorAirQualityQuality;
      this._thresholdIndoorAirQualityScore = value.thresholdIndoorAirQualityScore;
      this._thresholdNoiseAmbientLevel = value.thresholdNoiseAmbientLevel;
      this._thresholdNoiseAmbientQuality = value.thresholdNoiseAmbientQuality;
      this._thresholdPm25Concentration = value.thresholdPm25Concentration;
      this._thresholdPm25Quality = value.thresholdPm25Quality;
      this._thresholdPowerFactorPercentage = value.thresholdPowerFactorPercentage;
      this._thresholdRealPowerDraw = value.thresholdRealPowerDraw;
      this._thresholdTemperatureCelsius = value.thresholdTemperatureCelsius;
      this._thresholdTemperatureFahrenheit = value.thresholdTemperatureFahrenheit;
      this._thresholdTemperatureQuality = value.thresholdTemperatureQuality;
      this._thresholdTvocConcentration = value.thresholdTvocConcentration;
      this._thresholdTvocQuality = value.thresholdTvocQuality;
      this._thresholdUpstreamPowerOutageDetected = value.thresholdUpstreamPowerOutageDetected;
      this._thresholdVoltageLevel = value.thresholdVoltageLevel;
      this._thresholdWaterPresent = value.thresholdWaterPresent;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // threshold_apparent_power_draw - computed: false, optional: true, required: false
  private _thresholdApparentPowerDraw?: number; 
  public get thresholdApparentPowerDraw() {
    return this.getNumberAttribute('threshold_apparent_power_draw');
  }
  public set thresholdApparentPowerDraw(value: number) {
    this._thresholdApparentPowerDraw = value;
  }
  public resetThresholdApparentPowerDraw() {
    this._thresholdApparentPowerDraw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdApparentPowerDrawInput() {
    return this._thresholdApparentPowerDraw;
  }

  // threshold_co2_concentration - computed: false, optional: true, required: false
  private _thresholdCo2Concentration?: number; 
  public get thresholdCo2Concentration() {
    return this.getNumberAttribute('threshold_co2_concentration');
  }
  public set thresholdCo2Concentration(value: number) {
    this._thresholdCo2Concentration = value;
  }
  public resetThresholdCo2Concentration() {
    this._thresholdCo2Concentration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCo2ConcentrationInput() {
    return this._thresholdCo2Concentration;
  }

  // threshold_co2_quality - computed: false, optional: true, required: false
  private _thresholdCo2Quality?: string; 
  public get thresholdCo2Quality() {
    return this.getStringAttribute('threshold_co2_quality');
  }
  public set thresholdCo2Quality(value: string) {
    this._thresholdCo2Quality = value;
  }
  public resetThresholdCo2Quality() {
    this._thresholdCo2Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCo2QualityInput() {
    return this._thresholdCo2Quality;
  }

  // threshold_current_draw - computed: false, optional: true, required: false
  private _thresholdCurrentDraw?: number; 
  public get thresholdCurrentDraw() {
    return this.getNumberAttribute('threshold_current_draw');
  }
  public set thresholdCurrentDraw(value: number) {
    this._thresholdCurrentDraw = value;
  }
  public resetThresholdCurrentDraw() {
    this._thresholdCurrentDraw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCurrentDrawInput() {
    return this._thresholdCurrentDraw;
  }

  // threshold_door_open - computed: false, optional: true, required: false
  private _thresholdDoorOpen?: boolean | cdktf.IResolvable; 
  public get thresholdDoorOpen() {
    return this.getBooleanAttribute('threshold_door_open');
  }
  public set thresholdDoorOpen(value: boolean | cdktf.IResolvable) {
    this._thresholdDoorOpen = value;
  }
  public resetThresholdDoorOpen() {
    this._thresholdDoorOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdDoorOpenInput() {
    return this._thresholdDoorOpen;
  }

  // threshold_frequency_level - computed: false, optional: true, required: false
  private _thresholdFrequencyLevel?: number; 
  public get thresholdFrequencyLevel() {
    return this.getNumberAttribute('threshold_frequency_level');
  }
  public set thresholdFrequencyLevel(value: number) {
    this._thresholdFrequencyLevel = value;
  }
  public resetThresholdFrequencyLevel() {
    this._thresholdFrequencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdFrequencyLevelInput() {
    return this._thresholdFrequencyLevel;
  }

  // threshold_humidity_quality - computed: false, optional: true, required: false
  private _thresholdHumidityQuality?: string; 
  public get thresholdHumidityQuality() {
    return this.getStringAttribute('threshold_humidity_quality');
  }
  public set thresholdHumidityQuality(value: string) {
    this._thresholdHumidityQuality = value;
  }
  public resetThresholdHumidityQuality() {
    this._thresholdHumidityQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdHumidityQualityInput() {
    return this._thresholdHumidityQuality;
  }

  // threshold_humidity_relative_percentage - computed: false, optional: true, required: false
  private _thresholdHumidityRelativePercentage?: number; 
  public get thresholdHumidityRelativePercentage() {
    return this.getNumberAttribute('threshold_humidity_relative_percentage');
  }
  public set thresholdHumidityRelativePercentage(value: number) {
    this._thresholdHumidityRelativePercentage = value;
  }
  public resetThresholdHumidityRelativePercentage() {
    this._thresholdHumidityRelativePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdHumidityRelativePercentageInput() {
    return this._thresholdHumidityRelativePercentage;
  }

  // threshold_indoor_air_quality_quality - computed: false, optional: true, required: false
  private _thresholdIndoorAirQualityQuality?: string; 
  public get thresholdIndoorAirQualityQuality() {
    return this.getStringAttribute('threshold_indoor_air_quality_quality');
  }
  public set thresholdIndoorAirQualityQuality(value: string) {
    this._thresholdIndoorAirQualityQuality = value;
  }
  public resetThresholdIndoorAirQualityQuality() {
    this._thresholdIndoorAirQualityQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdIndoorAirQualityQualityInput() {
    return this._thresholdIndoorAirQualityQuality;
  }

  // threshold_indoor_air_quality_score - computed: false, optional: true, required: false
  private _thresholdIndoorAirQualityScore?: number; 
  public get thresholdIndoorAirQualityScore() {
    return this.getNumberAttribute('threshold_indoor_air_quality_score');
  }
  public set thresholdIndoorAirQualityScore(value: number) {
    this._thresholdIndoorAirQualityScore = value;
  }
  public resetThresholdIndoorAirQualityScore() {
    this._thresholdIndoorAirQualityScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdIndoorAirQualityScoreInput() {
    return this._thresholdIndoorAirQualityScore;
  }

  // threshold_noise_ambient_level - computed: false, optional: true, required: false
  private _thresholdNoiseAmbientLevel?: number; 
  public get thresholdNoiseAmbientLevel() {
    return this.getNumberAttribute('threshold_noise_ambient_level');
  }
  public set thresholdNoiseAmbientLevel(value: number) {
    this._thresholdNoiseAmbientLevel = value;
  }
  public resetThresholdNoiseAmbientLevel() {
    this._thresholdNoiseAmbientLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNoiseAmbientLevelInput() {
    return this._thresholdNoiseAmbientLevel;
  }

  // threshold_noise_ambient_quality - computed: false, optional: true, required: false
  private _thresholdNoiseAmbientQuality?: string; 
  public get thresholdNoiseAmbientQuality() {
    return this.getStringAttribute('threshold_noise_ambient_quality');
  }
  public set thresholdNoiseAmbientQuality(value: string) {
    this._thresholdNoiseAmbientQuality = value;
  }
  public resetThresholdNoiseAmbientQuality() {
    this._thresholdNoiseAmbientQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNoiseAmbientQualityInput() {
    return this._thresholdNoiseAmbientQuality;
  }

  // threshold_pm25_concentration - computed: false, optional: true, required: false
  private _thresholdPm25Concentration?: number; 
  public get thresholdPm25Concentration() {
    return this.getNumberAttribute('threshold_pm25_concentration');
  }
  public set thresholdPm25Concentration(value: number) {
    this._thresholdPm25Concentration = value;
  }
  public resetThresholdPm25Concentration() {
    this._thresholdPm25Concentration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPm25ConcentrationInput() {
    return this._thresholdPm25Concentration;
  }

  // threshold_pm25_quality - computed: false, optional: true, required: false
  private _thresholdPm25Quality?: string; 
  public get thresholdPm25Quality() {
    return this.getStringAttribute('threshold_pm25_quality');
  }
  public set thresholdPm25Quality(value: string) {
    this._thresholdPm25Quality = value;
  }
  public resetThresholdPm25Quality() {
    this._thresholdPm25Quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPm25QualityInput() {
    return this._thresholdPm25Quality;
  }

  // threshold_power_factor_percentage - computed: false, optional: true, required: false
  private _thresholdPowerFactorPercentage?: number; 
  public get thresholdPowerFactorPercentage() {
    return this.getNumberAttribute('threshold_power_factor_percentage');
  }
  public set thresholdPowerFactorPercentage(value: number) {
    this._thresholdPowerFactorPercentage = value;
  }
  public resetThresholdPowerFactorPercentage() {
    this._thresholdPowerFactorPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPowerFactorPercentageInput() {
    return this._thresholdPowerFactorPercentage;
  }

  // threshold_real_power_draw - computed: false, optional: true, required: false
  private _thresholdRealPowerDraw?: number; 
  public get thresholdRealPowerDraw() {
    return this.getNumberAttribute('threshold_real_power_draw');
  }
  public set thresholdRealPowerDraw(value: number) {
    this._thresholdRealPowerDraw = value;
  }
  public resetThresholdRealPowerDraw() {
    this._thresholdRealPowerDraw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdRealPowerDrawInput() {
    return this._thresholdRealPowerDraw;
  }

  // threshold_temperature_celsius - computed: false, optional: true, required: false
  private _thresholdTemperatureCelsius?: number; 
  public get thresholdTemperatureCelsius() {
    return this.getNumberAttribute('threshold_temperature_celsius');
  }
  public set thresholdTemperatureCelsius(value: number) {
    this._thresholdTemperatureCelsius = value;
  }
  public resetThresholdTemperatureCelsius() {
    this._thresholdTemperatureCelsius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTemperatureCelsiusInput() {
    return this._thresholdTemperatureCelsius;
  }

  // threshold_temperature_fahrenheit - computed: false, optional: true, required: false
  private _thresholdTemperatureFahrenheit?: number; 
  public get thresholdTemperatureFahrenheit() {
    return this.getNumberAttribute('threshold_temperature_fahrenheit');
  }
  public set thresholdTemperatureFahrenheit(value: number) {
    this._thresholdTemperatureFahrenheit = value;
  }
  public resetThresholdTemperatureFahrenheit() {
    this._thresholdTemperatureFahrenheit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTemperatureFahrenheitInput() {
    return this._thresholdTemperatureFahrenheit;
  }

  // threshold_temperature_quality - computed: false, optional: true, required: false
  private _thresholdTemperatureQuality?: string; 
  public get thresholdTemperatureQuality() {
    return this.getStringAttribute('threshold_temperature_quality');
  }
  public set thresholdTemperatureQuality(value: string) {
    this._thresholdTemperatureQuality = value;
  }
  public resetThresholdTemperatureQuality() {
    this._thresholdTemperatureQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTemperatureQualityInput() {
    return this._thresholdTemperatureQuality;
  }

  // threshold_tvoc_concentration - computed: false, optional: true, required: false
  private _thresholdTvocConcentration?: number; 
  public get thresholdTvocConcentration() {
    return this.getNumberAttribute('threshold_tvoc_concentration');
  }
  public set thresholdTvocConcentration(value: number) {
    this._thresholdTvocConcentration = value;
  }
  public resetThresholdTvocConcentration() {
    this._thresholdTvocConcentration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTvocConcentrationInput() {
    return this._thresholdTvocConcentration;
  }

  // threshold_tvoc_quality - computed: false, optional: true, required: false
  private _thresholdTvocQuality?: string; 
  public get thresholdTvocQuality() {
    return this.getStringAttribute('threshold_tvoc_quality');
  }
  public set thresholdTvocQuality(value: string) {
    this._thresholdTvocQuality = value;
  }
  public resetThresholdTvocQuality() {
    this._thresholdTvocQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTvocQualityInput() {
    return this._thresholdTvocQuality;
  }

  // threshold_upstream_power_outage_detected - computed: false, optional: true, required: false
  private _thresholdUpstreamPowerOutageDetected?: boolean | cdktf.IResolvable; 
  public get thresholdUpstreamPowerOutageDetected() {
    return this.getBooleanAttribute('threshold_upstream_power_outage_detected');
  }
  public set thresholdUpstreamPowerOutageDetected(value: boolean | cdktf.IResolvable) {
    this._thresholdUpstreamPowerOutageDetected = value;
  }
  public resetThresholdUpstreamPowerOutageDetected() {
    this._thresholdUpstreamPowerOutageDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdUpstreamPowerOutageDetectedInput() {
    return this._thresholdUpstreamPowerOutageDetected;
  }

  // threshold_voltage_level - computed: false, optional: true, required: false
  private _thresholdVoltageLevel?: number; 
  public get thresholdVoltageLevel() {
    return this.getNumberAttribute('threshold_voltage_level');
  }
  public set thresholdVoltageLevel(value: number) {
    this._thresholdVoltageLevel = value;
  }
  public resetThresholdVoltageLevel() {
    this._thresholdVoltageLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVoltageLevelInput() {
    return this._thresholdVoltageLevel;
  }

  // threshold_water_present - computed: false, optional: true, required: false
  private _thresholdWaterPresent?: boolean | cdktf.IResolvable; 
  public get thresholdWaterPresent() {
    return this.getBooleanAttribute('threshold_water_present');
  }
  public set thresholdWaterPresent(value: boolean | cdktf.IResolvable) {
    this._thresholdWaterPresent = value;
  }
  public resetThresholdWaterPresent() {
    this._thresholdWaterPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWaterPresentInput() {
    return this._thresholdWaterPresent;
  }
}

export class SensorAlertsProfileConditionsList extends cdktf.ComplexList {
  public internalValue? : SensorAlertsProfileConditions[] | cdktf.IResolvable

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
  public get(index: number): SensorAlertsProfileConditionsOutputReference {
    return new SensorAlertsProfileConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile meraki_sensor_alerts_profile}
*/
export class SensorAlertsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_sensor_alerts_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorAlertsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorAlertsProfile to import
  * @param importFromId The id of the existing SensorAlertsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorAlertsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_sensor_alerts_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/sensor_alerts_profile meraki_sensor_alerts_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorAlertsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SensorAlertsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_sensor_alerts_profile',
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
    this._conditions.internalValue = config.conditions;
    this._includeSensorUrl = config.includeSensorUrl;
    this._message = config.message;
    this._name = config.name;
    this._networkId = config.networkId;
    this._recipientsEmails = config.recipientsEmails;
    this._recipientsHttpServerIds = config.recipientsHttpServerIds;
    this._recipientsSmsNumbers = config.recipientsSmsNumbers;
    this._scheduleId = config.scheduleId;
    this._serials = config.serials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conditions - computed: false, optional: false, required: true
  private _conditions = new SensorAlertsProfileConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SensorAlertsProfileConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_sensor_url - computed: false, optional: true, required: false
  private _includeSensorUrl?: boolean | cdktf.IResolvable; 
  public get includeSensorUrl() {
    return this.getBooleanAttribute('include_sensor_url');
  }
  public set includeSensorUrl(value: boolean | cdktf.IResolvable) {
    this._includeSensorUrl = value;
  }
  public resetIncludeSensorUrl() {
    this._includeSensorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSensorUrlInput() {
    return this._includeSensorUrl;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // recipients_emails - computed: false, optional: true, required: false
  private _recipientsEmails?: string[]; 
  public get recipientsEmails() {
    return this.getListAttribute('recipients_emails');
  }
  public set recipientsEmails(value: string[]) {
    this._recipientsEmails = value;
  }
  public resetRecipientsEmails() {
    this._recipientsEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsEmailsInput() {
    return this._recipientsEmails;
  }

  // recipients_http_server_ids - computed: false, optional: true, required: false
  private _recipientsHttpServerIds?: string[]; 
  public get recipientsHttpServerIds() {
    return this.getListAttribute('recipients_http_server_ids');
  }
  public set recipientsHttpServerIds(value: string[]) {
    this._recipientsHttpServerIds = value;
  }
  public resetRecipientsHttpServerIds() {
    this._recipientsHttpServerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsHttpServerIdsInput() {
    return this._recipientsHttpServerIds;
  }

  // recipients_sms_numbers - computed: false, optional: true, required: false
  private _recipientsSmsNumbers?: string[]; 
  public get recipientsSmsNumbers() {
    return this.getListAttribute('recipients_sms_numbers');
  }
  public set recipientsSmsNumbers(value: string[]) {
    this._recipientsSmsNumbers = value;
  }
  public resetRecipientsSmsNumbers() {
    this._recipientsSmsNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsSmsNumbersInput() {
    return this._recipientsSmsNumbers;
  }

  // schedule_id - computed: false, optional: true, required: false
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  public resetScheduleId() {
    this._scheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // serials - computed: false, optional: true, required: false
  private _serials?: string[]; 
  public get serials() {
    return this.getListAttribute('serials');
  }
  public set serials(value: string[]) {
    this._serials = value;
  }
  public resetSerials() {
    this._serials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialsInput() {
    return this._serials;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conditions: cdktf.listMapper(sensorAlertsProfileConditionsToTerraform, false)(this._conditions.internalValue),
      include_sensor_url: cdktf.booleanToTerraform(this._includeSensorUrl),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      recipients_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientsEmails),
      recipients_http_server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientsHttpServerIds),
      recipients_sms_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientsSmsNumbers),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      serials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serials),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conditions: {
        value: cdktf.listMapperHcl(sensorAlertsProfileConditionsToHclTerraform, false)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensorAlertsProfileConditionsList",
      },
      include_sensor_url: {
        value: cdktf.booleanToHclTerraform(this._includeSensorUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
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
      recipients_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientsEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recipients_http_server_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientsHttpServerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recipients_sms_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientsSmsNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serials),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
