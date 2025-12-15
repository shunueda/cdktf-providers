// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_rf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterWirelessRfProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * RF Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_rf_profile#rf_profile_name DataCatalystcenterWirelessRfProfile#rf_profile_name}
  */
  readonly rfProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_rf_profile catalystcenter_wireless_rf_profile}
*/
export class DataCatalystcenterWirelessRfProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_wireless_rf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterWirelessRfProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterWirelessRfProfile to import
  * @param importFromId The id of the existing DataCatalystcenterWirelessRfProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_rf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterWirelessRfProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_wireless_rf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_rf_profile catalystcenter_wireless_rf_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterWirelessRfProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterWirelessRfProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_wireless_rf_profile',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rfProfileName = config.rfProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_rf_profile - computed: true, optional: false, required: false
  public get defaultRfProfile() {
    return this.getBooleanAttribute('default_rf_profile');
  }

  // enable_radio_type6_g_hz - computed: true, optional: false, required: false
  public get enableRadioType6GHz() {
    return this.getBooleanAttribute('enable_radio_type6_g_hz');
  }

  // enable_radio_type_a - computed: true, optional: false, required: false
  public get enableRadioTypeA() {
    return this.getBooleanAttribute('enable_radio_type_a');
  }

  // enable_radio_type_b - computed: true, optional: false, required: false
  public get enableRadioTypeB() {
    return this.getBooleanAttribute('enable_radio_type_b');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // radio_type_a_channel_width - computed: true, optional: false, required: false
  public get radioTypeAChannelWidth() {
    return this.getStringAttribute('radio_type_a_channel_width');
  }

  // radio_type_a_coverage_hole_detection_properties_chd_client_level - computed: true, optional: false, required: false
  public get radioTypeACoverageHoleDetectionPropertiesChdClientLevel() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_client_level');
  }

  // radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold - computed: true, optional: false, required: false
  public get radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold');
  }

  // radio_type_a_coverage_hole_detection_properties_chd_exception_level - computed: true, optional: false, required: false
  public get radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_exception_level');
  }

  // radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold - computed: true, optional: false, required: false
  public get radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold');
  }

  // radio_type_a_custom_rx_sop_threshold - computed: true, optional: false, required: false
  public get radioTypeACustomRxSopThreshold() {
    return this.getNumberAttribute('radio_type_a_custom_rx_sop_threshold');
  }

  // radio_type_a_data_rates - computed: true, optional: false, required: false
  public get radioTypeADataRates() {
    return this.getStringAttribute('radio_type_a_data_rates');
  }

  // radio_type_a_fra_properties_client_aware - computed: true, optional: false, required: false
  public get radioTypeAFraPropertiesClientAware() {
    return this.getBooleanAttribute('radio_type_a_fra_properties_client_aware');
  }

  // radio_type_a_fra_properties_client_reset - computed: true, optional: false, required: false
  public get radioTypeAFraPropertiesClientReset() {
    return this.getNumberAttribute('radio_type_a_fra_properties_client_reset');
  }

  // radio_type_a_fra_properties_client_select - computed: true, optional: false, required: false
  public get radioTypeAFraPropertiesClientSelect() {
    return this.getNumberAttribute('radio_type_a_fra_properties_client_select');
  }

  // radio_type_a_mandatory_data_rates - computed: true, optional: false, required: false
  public get radioTypeAMandatoryDataRates() {
    return this.getStringAttribute('radio_type_a_mandatory_data_rates');
  }

  // radio_type_a_max_power_level - computed: true, optional: false, required: false
  public get radioTypeAMaxPowerLevel() {
    return this.getNumberAttribute('radio_type_a_max_power_level');
  }

  // radio_type_a_max_radio_clients - computed: true, optional: false, required: false
  public get radioTypeAMaxRadioClients() {
    return this.getNumberAttribute('radio_type_a_max_radio_clients');
  }

  // radio_type_a_min_power_level - computed: true, optional: false, required: false
  public get radioTypeAMinPowerLevel() {
    return this.getNumberAttribute('radio_type_a_min_power_level');
  }

  // radio_type_a_parent_profile - computed: true, optional: false, required: false
  public get radioTypeAParentProfile() {
    return this.getStringAttribute('radio_type_a_parent_profile');
  }

  // radio_type_a_power_threshold_v1 - computed: true, optional: false, required: false
  public get radioTypeAPowerThresholdV1() {
    return this.getNumberAttribute('radio_type_a_power_threshold_v1');
  }

  // radio_type_a_preamble_puncture - computed: true, optional: false, required: false
  public get radioTypeAPreamblePuncture() {
    return this.getBooleanAttribute('radio_type_a_preamble_puncture');
  }

  // radio_type_a_radio_channels - computed: true, optional: false, required: false
  public get radioTypeARadioChannels() {
    return this.getStringAttribute('radio_type_a_radio_channels');
  }

  // radio_type_a_rx_sop_threshold - computed: true, optional: false, required: false
  public get radioTypeARxSopThreshold() {
    return this.getStringAttribute('radio_type_a_rx_sop_threshold');
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect - computed: true, optional: false, required: false
  public get radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect');
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold - computed: true, optional: false, required: false
  public get radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold');
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect - computed: true, optional: false, required: false
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect');
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold - computed: true, optional: false, required: false
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold');
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold - computed: true, optional: false, required: false
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    return this.getNumberAttribute('radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold');
  }

  // radio_type_a_zero_wait_dfs_enable - computed: true, optional: false, required: false
  public get radioTypeAZeroWaitDfsEnable() {
    return this.getBooleanAttribute('radio_type_a_zero_wait_dfs_enable');
  }

  // radio_type_b_coverage_hole_detection_properties_chd_client_level - computed: true, optional: false, required: false
  public get radioTypeBCoverageHoleDetectionPropertiesChdClientLevel() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_client_level');
  }

  // radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold - computed: true, optional: false, required: false
  public get radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold');
  }

  // radio_type_b_coverage_hole_detection_properties_chd_exception_level - computed: true, optional: false, required: false
  public get radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_exception_level');
  }

  // radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold - computed: true, optional: false, required: false
  public get radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold');
  }

  // radio_type_b_custom_rx_sop_threshold - computed: true, optional: false, required: false
  public get radioTypeBCustomRxSopThreshold() {
    return this.getNumberAttribute('radio_type_b_custom_rx_sop_threshold');
  }

  // radio_type_b_data_rates - computed: true, optional: false, required: false
  public get radioTypeBDataRates() {
    return this.getStringAttribute('radio_type_b_data_rates');
  }

  // radio_type_b_mandatory_data_rates - computed: true, optional: false, required: false
  public get radioTypeBMandatoryDataRates() {
    return this.getStringAttribute('radio_type_b_mandatory_data_rates');
  }

  // radio_type_b_max_power_level - computed: true, optional: false, required: false
  public get radioTypeBMaxPowerLevel() {
    return this.getNumberAttribute('radio_type_b_max_power_level');
  }

  // radio_type_b_max_radio_clients - computed: true, optional: false, required: false
  public get radioTypeBMaxRadioClients() {
    return this.getNumberAttribute('radio_type_b_max_radio_clients');
  }

  // radio_type_b_min_power_level - computed: true, optional: false, required: false
  public get radioTypeBMinPowerLevel() {
    return this.getNumberAttribute('radio_type_b_min_power_level');
  }

  // radio_type_b_parent_profile - computed: true, optional: false, required: false
  public get radioTypeBParentProfile() {
    return this.getStringAttribute('radio_type_b_parent_profile');
  }

  // radio_type_b_power_threshold_v1 - computed: true, optional: false, required: false
  public get radioTypeBPowerThresholdV1() {
    return this.getNumberAttribute('radio_type_b_power_threshold_v1');
  }

  // radio_type_b_radio_channels - computed: true, optional: false, required: false
  public get radioTypeBRadioChannels() {
    return this.getStringAttribute('radio_type_b_radio_channels');
  }

  // radio_type_b_rx_sop_threshold - computed: true, optional: false, required: false
  public get radioTypeBRxSopThreshold() {
    return this.getStringAttribute('radio_type_b_rx_sop_threshold');
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect - computed: true, optional: false, required: false
  public get radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect');
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold - computed: true, optional: false, required: false
  public get radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold');
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect - computed: true, optional: false, required: false
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect');
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold - computed: true, optional: false, required: false
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold');
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold - computed: true, optional: false, required: false
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    return this.getNumberAttribute('radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold');
  }

  // radio_type_c_broadcast_probe_response_interval - computed: true, optional: false, required: false
  public get radioTypeCBroadcastProbeResponseInterval() {
    return this.getNumberAttribute('radio_type_c_broadcast_probe_response_interval');
  }

  // radio_type_c_coverage_hole_detection_properties_chd_client_level - computed: true, optional: false, required: false
  public get radioTypeCCoverageHoleDetectionPropertiesChdClientLevel() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_client_level');
  }

  // radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold - computed: true, optional: false, required: false
  public get radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold');
  }

  // radio_type_c_coverage_hole_detection_properties_chd_exception_level - computed: true, optional: false, required: false
  public get radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_exception_level');
  }

  // radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold - computed: true, optional: false, required: false
  public get radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold');
  }

  // radio_type_c_custom_rx_sop_threshold - computed: true, optional: false, required: false
  public get radioTypeCCustomRxSopThreshold() {
    return this.getNumberAttribute('radio_type_c_custom_rx_sop_threshold');
  }

  // radio_type_c_data_rates - computed: true, optional: false, required: false
  public get radioTypeCDataRates() {
    return this.getStringAttribute('radio_type_c_data_rates');
  }

  // radio_type_c_discovery_frames_6ghz - computed: true, optional: false, required: false
  public get radioTypeCDiscoveryFrames6Ghz() {
    return this.getStringAttribute('radio_type_c_discovery_frames_6ghz');
  }

  // radio_type_c_enable_standard_power_service - computed: true, optional: false, required: false
  public get radioTypeCEnableStandardPowerService() {
    return this.getBooleanAttribute('radio_type_c_enable_standard_power_service');
  }

  // radio_type_c_fra_properties_client_reset_count - computed: true, optional: false, required: false
  public get radioTypeCFraPropertiesClientResetCount() {
    return this.getNumberAttribute('radio_type_c_fra_properties_client_reset_count');
  }

  // radio_type_c_fra_properties_client_utilization_threshold - computed: true, optional: false, required: false
  public get radioTypeCFraPropertiesClientUtilizationThreshold() {
    return this.getNumberAttribute('radio_type_c_fra_properties_client_utilization_threshold');
  }

  // radio_type_c_mandatory_data_rates - computed: true, optional: false, required: false
  public get radioTypeCMandatoryDataRates() {
    return this.getStringAttribute('radio_type_c_mandatory_data_rates');
  }

  // radio_type_c_max_dbs_width - computed: true, optional: false, required: false
  public get radioTypeCMaxDbsWidth() {
    return this.getNumberAttribute('radio_type_c_max_dbs_width');
  }

  // radio_type_c_max_power_level - computed: true, optional: false, required: false
  public get radioTypeCMaxPowerLevel() {
    return this.getNumberAttribute('radio_type_c_max_power_level');
  }

  // radio_type_c_max_radio_clients - computed: true, optional: false, required: false
  public get radioTypeCMaxRadioClients() {
    return this.getNumberAttribute('radio_type_c_max_radio_clients');
  }

  // radio_type_c_min_dbs_width - computed: true, optional: false, required: false
  public get radioTypeCMinDbsWidth() {
    return this.getNumberAttribute('radio_type_c_min_dbs_width');
  }

  // radio_type_c_min_power_level - computed: true, optional: false, required: false
  public get radioTypeCMinPowerLevel() {
    return this.getNumberAttribute('radio_type_c_min_power_level');
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link');
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link');
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link');
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link');
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link');
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link');
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link');
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru');
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link');
  }

  // radio_type_c_multi_bssid_properties_target_wake_time - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesTargetWakeTime() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_target_wake_time');
  }

  // radio_type_c_multi_bssid_properties_twt_broadcast_support - computed: true, optional: false, required: false
  public get radioTypeCMultiBssidPropertiesTwtBroadcastSupport() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_twt_broadcast_support');
  }

  // radio_type_c_parent_profile - computed: true, optional: false, required: false
  public get radioTypeCParentProfile() {
    return this.getStringAttribute('radio_type_c_parent_profile');
  }

  // radio_type_c_power_threshold_v1 - computed: true, optional: false, required: false
  public get radioTypeCPowerThresholdV1() {
    return this.getNumberAttribute('radio_type_c_power_threshold_v1');
  }

  // radio_type_c_preamble_puncture - computed: true, optional: false, required: false
  public get radioTypeCPreamblePuncture() {
    return this.getBooleanAttribute('radio_type_c_preamble_puncture');
  }

  // radio_type_c_psc_enforcing_enabled - computed: true, optional: false, required: false
  public get radioTypeCPscEnforcingEnabled() {
    return this.getBooleanAttribute('radio_type_c_psc_enforcing_enabled');
  }

  // radio_type_c_radio_channels - computed: true, optional: false, required: false
  public get radioTypeCRadioChannels() {
    return this.getStringAttribute('radio_type_c_radio_channels');
  }

  // radio_type_c_rx_sop_threshold - computed: true, optional: false, required: false
  public get radioTypeCRxSopThreshold() {
    return this.getStringAttribute('radio_type_c_rx_sop_threshold');
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect - computed: true, optional: false, required: false
  public get radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect');
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold - computed: true, optional: false, required: false
  public get radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold');
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect - computed: true, optional: false, required: false
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect');
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold - computed: true, optional: false, required: false
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold');
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold - computed: true, optional: false, required: false
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    return this.getNumberAttribute('radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold');
  }

  // rf_profile_name - computed: false, optional: false, required: true
  private _rfProfileName?: string; 
  public get rfProfileName() {
    return this.getStringAttribute('rf_profile_name');
  }
  public set rfProfileName(value: string) {
    this._rfProfileName = value;
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
      rf_profile_name: cdktf.stringToTerraform(this._rfProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
