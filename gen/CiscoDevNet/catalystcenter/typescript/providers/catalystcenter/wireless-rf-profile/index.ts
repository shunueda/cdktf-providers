// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessRfProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies if the RF Profile is the default. Only one RF Profile can be marked as default at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#default_rf_profile WirelessRfProfile#default_rf_profile}
  */
  readonly defaultRfProfile: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the 6 GHz radio band in the RF Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#enable_radio_type6_g_hz WirelessRfProfile#enable_radio_type6_g_hz}
  */
  readonly enableRadioType6GHz: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the 5 GHz radio band in the RF Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#enable_radio_type_a WirelessRfProfile#enable_radio_type_a}
  */
  readonly enableRadioTypeA: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the 2.4 GHz radio band in the RF Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#enable_radio_type_b WirelessRfProfile#enable_radio_type_b}
  */
  readonly enableRadioTypeB: boolean | cdktf.IResolvable;
  /**
  * Channel width for the 5 GHz radio band.
  *   - Choices: `20`, `40`, `80`, `160`, `best`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_channel_width WirelessRfProfile#radio_type_a_channel_width}
  */
  readonly radioTypeAChannelWidth?: string;
  /**
  * Coverage Hole Detection client level for the 5 GHz radio band.
  *   - Range: `1`-`200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_coverage_hole_detection_properties_chd_client_level WirelessRfProfile#radio_type_a_coverage_hole_detection_properties_chd_client_level}
  */
  readonly radioTypeACoverageHoleDetectionPropertiesChdClientLevel?: number;
  /**
  * Coverage Hole Detection data RSSI threshold for the 5 GHz radio band.
  *   - Range: `-90`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold WirelessRfProfile#radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold}
  */
  readonly radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold?: number;
  /**
  * Coverage Hole Detection exception level (%) for the 5 GHz radio band.
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_coverage_hole_detection_properties_chd_exception_level WirelessRfProfile#radio_type_a_coverage_hole_detection_properties_chd_exception_level}
  */
  readonly radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel?: number;
  /**
  * Coverage Hole Detection voice RSSI threshold for the 5 GHz radio band.
  *   - Range: `-90`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold WirelessRfProfile#radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold}
  */
  readonly radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold?: number;
  /**
  * Custom RX-SOP threshold for the 5 GHz radio band.
  *   - Range: `-85`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_custom_rx_sop_threshold WirelessRfProfile#radio_type_a_custom_rx_sop_threshold}
  */
  readonly radioTypeACustomRxSopThreshold?: number;
  /**
  * Data rates for the 5 GHz radio band, passed in comma-separated format without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_data_rates WirelessRfProfile#radio_type_a_data_rates}
  */
  readonly radioTypeADataRates?: string;
  /**
  * Client awareness for the 5 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_fra_properties_client_aware WirelessRfProfile#radio_type_a_fra_properties_client_aware}
  */
  readonly radioTypeAFraPropertiesClientAware?: boolean | cdktf.IResolvable;
  /**
  * Client reset percentage for the 5 GHz radio band.
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_fra_properties_client_reset WirelessRfProfile#radio_type_a_fra_properties_client_reset}
  */
  readonly radioTypeAFraPropertiesClientReset?: number;
  /**
  * Client selection percentage for the 5 GHz radio band.
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_fra_properties_client_select WirelessRfProfile#radio_type_a_fra_properties_client_select}
  */
  readonly radioTypeAFraPropertiesClientSelect?: number;
  /**
  * Mandatory data rates for the 5 GHz radio band, passed in comma-separated format, must be a subset of dataRates with a maximum of 2 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_mandatory_data_rates WirelessRfProfile#radio_type_a_mandatory_data_rates}
  */
  readonly radioTypeAMandatoryDataRates?: string;
  /**
  * Maximum power level for the 5 GHz radio band.
  *   - Range: `-10`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_max_power_level WirelessRfProfile#radio_type_a_max_power_level}
  */
  readonly radioTypeAMaxPowerLevel?: number;
  /**
  * Client limit for the 5 GHz radio band.
  *   - Range: `0`-`500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_max_radio_clients WirelessRfProfile#radio_type_a_max_radio_clients}
  */
  readonly radioTypeAMaxRadioClients?: number;
  /**
  * Minimum power level for the 5 GHz radio band.
  *   - Range: `-10`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_min_power_level WirelessRfProfile#radio_type_a_min_power_level}
  */
  readonly radioTypeAMinPowerLevel?: number;
  /**
  * Parent profile for the 5 GHz radio band.
  *   - Choices: `HIGH`, `TYPICAL`, `LOW`, `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_parent_profile WirelessRfProfile#radio_type_a_parent_profile}
  */
  readonly radioTypeAParentProfile?: string;
  /**
  * Power threshold for the 5 GHz radio band.
  *   - Range: `-80`-`-50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_power_threshold_v1 WirelessRfProfile#radio_type_a_power_threshold_v1}
  */
  readonly radioTypeAPowerThresholdV1?: number;
  /**
  * Enable or disable preamble puncturing for the 5 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_preamble_puncture WirelessRfProfile#radio_type_a_preamble_puncture}
  */
  readonly radioTypeAPreamblePuncture?: boolean | cdktf.IResolvable;
  /**
  * DCA channels for the 5 GHz radio band, passed in comma-separated format without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_radio_channels WirelessRfProfile#radio_type_a_radio_channels}
  */
  readonly radioTypeARadioChannels?: string;
  /**
  * RX-SOP threshold for the 5 GHz radio band.
  *   - Choices: `HIGH`, `MEDIUM`, `LOW`, `AUTO`, `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_rx_sop_threshold WirelessRfProfile#radio_type_a_rx_sop_threshold}
  */
  readonly radioTypeARxSopThreshold?: string;
  /**
  * Dot11ax Non-SRG OBSS PD for the 5 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect WirelessRfProfile#radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect}
  */
  readonly radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect?: boolean | cdktf.IResolvable;
  /**
  * Dot11ax Non-SRG OBSS PD max threshold for the 5 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold WirelessRfProfile#radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold}
  */
  readonly radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold?: number;
  /**
  * Dot11ax SRG OBSS PD for the 5 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect WirelessRfProfile#radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect}
  */
  readonly radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect?: boolean | cdktf.IResolvable;
  /**
  * Dot11ax SRG OBSS PD max threshold for the 5 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold WirelessRfProfile#radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold}
  */
  readonly radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold?: number;
  /**
  * Dot11ax SRG OBSS PD min threshold for the 5 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold WirelessRfProfile#radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold}
  */
  readonly radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold?: number;
  /**
  * Enable Zero Wait DFS for IOS-XE-based Wireless Controllers running version 17.9.1 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_a_zero_wait_dfs_enable WirelessRfProfile#radio_type_a_zero_wait_dfs_enable}
  */
  readonly radioTypeAZeroWaitDfsEnable?: boolean | cdktf.IResolvable;
  /**
  * Coverage Hole Detection client level for the 2.4 GHz radio band.
  *   - Range: `1`-`200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_coverage_hole_detection_properties_chd_client_level WirelessRfProfile#radio_type_b_coverage_hole_detection_properties_chd_client_level}
  */
  readonly radioTypeBCoverageHoleDetectionPropertiesChdClientLevel?: number;
  /**
  * Coverage Hole Detection data RSSI threshold for the 2.4 GHz radio band.
  *   - Range: `-90`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold WirelessRfProfile#radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold}
  */
  readonly radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold?: number;
  /**
  * Coverage Hole Detection exception level (%) for the 2.4 GHz radio band.
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_coverage_hole_detection_properties_chd_exception_level WirelessRfProfile#radio_type_b_coverage_hole_detection_properties_chd_exception_level}
  */
  readonly radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel?: number;
  /**
  * Coverage Hole Detection voice RSSI threshold for the 2.4 GHz radio band.
  *   - Range: `-90`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold WirelessRfProfile#radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold}
  */
  readonly radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold?: number;
  /**
  * Custom RX-SOP threshold for the 2.4 GHz radio band.
  *   - Range: `-85`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_custom_rx_sop_threshold WirelessRfProfile#radio_type_b_custom_rx_sop_threshold}
  */
  readonly radioTypeBCustomRxSopThreshold?: number;
  /**
  * Data rates for the 2.4 GHz radio band, passed in comma-separated format without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_data_rates WirelessRfProfile#radio_type_b_data_rates}
  */
  readonly radioTypeBDataRates?: string;
  /**
  * Mandatory data rates for the 2.4 GHz radio band, passed in comma-separated format, must be a subset of dataRates with a maximum of 2 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_mandatory_data_rates WirelessRfProfile#radio_type_b_mandatory_data_rates}
  */
  readonly radioTypeBMandatoryDataRates?: string;
  /**
  * Maximum power level for the 2.4 GHz radio band.
  *   - Range: `-10`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_max_power_level WirelessRfProfile#radio_type_b_max_power_level}
  */
  readonly radioTypeBMaxPowerLevel?: number;
  /**
  * Client limit for the 2.4 GHz radio band.
  *   - Range: `0`-`500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_max_radio_clients WirelessRfProfile#radio_type_b_max_radio_clients}
  */
  readonly radioTypeBMaxRadioClients?: number;
  /**
  * Minimum power level for the 2.4 GHz radio band.
  *   - Range: `-10`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_min_power_level WirelessRfProfile#radio_type_b_min_power_level}
  */
  readonly radioTypeBMinPowerLevel?: number;
  /**
  * Parent profile for the 2.4 GHz radio band.
  *   - Choices: `HIGH`, `TYPICAL`, `LOW`, `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_parent_profile WirelessRfProfile#radio_type_b_parent_profile}
  */
  readonly radioTypeBParentProfile?: string;
  /**
  * Power threshold for the 2.4 GHz radio band.
  *   - Range: `-80`-`-50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_power_threshold_v1 WirelessRfProfile#radio_type_b_power_threshold_v1}
  */
  readonly radioTypeBPowerThresholdV1?: number;
  /**
  * DCA channels for the 2.4 GHz radio band, passed in comma-separated format without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_radio_channels WirelessRfProfile#radio_type_b_radio_channels}
  */
  readonly radioTypeBRadioChannels?: string;
  /**
  * RX-SOP threshold for the 2.4 GHz radio band.
  *   - Choices: `HIGH`, `MEDIUM`, `LOW`, `AUTO`, `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_rx_sop_threshold WirelessRfProfile#radio_type_b_rx_sop_threshold}
  */
  readonly radioTypeBRxSopThreshold?: string;
  /**
  * Dot11ax Non-SRG OBSS PD for the 2.4 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect WirelessRfProfile#radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect}
  */
  readonly radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect?: boolean | cdktf.IResolvable;
  /**
  * Dot11ax Non-SRG OBSS PD max threshold for the 2.4 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold WirelessRfProfile#radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold}
  */
  readonly radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold?: number;
  /**
  * Dot11ax SRG OBSS PD for the 2.4 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect WirelessRfProfile#radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect}
  */
  readonly radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect?: boolean | cdktf.IResolvable;
  /**
  * Dot11ax SRG OBSS PD max threshold for the 2.4 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold WirelessRfProfile#radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold}
  */
  readonly radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold?: number;
  /**
  * Dot11ax SRG OBSS PD min threshold for the 2.4 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold WirelessRfProfile#radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold}
  */
  readonly radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold?: number;
  /**
  * Broadcast Probe Response Interval for the 6 GHz radio band.
  *   - Range: `5`-`25`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_broadcast_probe_response_interval WirelessRfProfile#radio_type_c_broadcast_probe_response_interval}
  */
  readonly radioTypeCBroadcastProbeResponseInterval?: number;
  /**
  * Coverage Hole Detection client level for the 6 GHz radio band.
  *   - Range: `1`-`200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_coverage_hole_detection_properties_chd_client_level WirelessRfProfile#radio_type_c_coverage_hole_detection_properties_chd_client_level}
  */
  readonly radioTypeCCoverageHoleDetectionPropertiesChdClientLevel?: number;
  /**
  * Coverage Hole Detection data RSSI threshold for the 6 GHz radio band.
  *   - Range: `-90`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold WirelessRfProfile#radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold}
  */
  readonly radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold?: number;
  /**
  * Coverage Hole Detection exception level (%) for the 6 GHz radio band.
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_coverage_hole_detection_properties_chd_exception_level WirelessRfProfile#radio_type_c_coverage_hole_detection_properties_chd_exception_level}
  */
  readonly radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel?: number;
  /**
  * Coverage Hole Detection voice RSSI threshold for the 6 GHz radio band.
  *   - Range: `-90`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold WirelessRfProfile#radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold}
  */
  readonly radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold?: number;
  /**
  * Custom RX-SOP threshold for the 6 GHz radio band.
  *   - Range: `-85`-`-60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_custom_rx_sop_threshold WirelessRfProfile#radio_type_c_custom_rx_sop_threshold}
  */
  readonly radioTypeCCustomRxSopThreshold?: number;
  /**
  * Data rates of 6 GHz radio band, passed in comma-separated format without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_data_rates WirelessRfProfile#radio_type_c_data_rates}
  */
  readonly radioTypeCDataRates?: string;
  /**
  * Discovery Frames for the 6 GHz radio band.
  *   - Choices: `None`, `Broadcast Probe Response`, `FILS Discovery`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_discovery_frames_6ghz WirelessRfProfile#radio_type_c_discovery_frames_6ghz}
  */
  readonly radioTypeCDiscoveryFrames6Ghz?: string;
  /**
  * True if Standard Power Service is enabled, else False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_enable_standard_power_service WirelessRfProfile#radio_type_c_enable_standard_power_service}
  */
  readonly radioTypeCEnableStandardPowerService?: boolean | cdktf.IResolvable;
  /**
  * Client Reset Count for the 6 GHz radio band.
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_fra_properties_client_reset_count WirelessRfProfile#radio_type_c_fra_properties_client_reset_count}
  */
  readonly radioTypeCFraPropertiesClientResetCount?: number;
  /**
  * Client Utilization Threshold for the 6 GHz radio band.
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_fra_properties_client_utilization_threshold WirelessRfProfile#radio_type_c_fra_properties_client_utilization_threshold}
  */
  readonly radioTypeCFraPropertiesClientUtilizationThreshold?: number;
  /**
  * Mandatory data rates of 6 GHz radio band, passed in comma-separated format without spaces. Must be a subset of dataRates with a maximum of 2 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_mandatory_data_rates WirelessRfProfile#radio_type_c_mandatory_data_rates}
  */
  readonly radioTypeCMandatoryDataRates?: string;
  /**
  * Maximum DBS Width for the 6 GHz radio band.
  *   - Choices: `20`, `40`, `80`, `160`, `320`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_max_dbs_width WirelessRfProfile#radio_type_c_max_dbs_width}
  */
  readonly radioTypeCMaxDbsWidth?: number;
  /**
  * Maximum power level of the 6 GHz radio band.
  *   - Range: `-10`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_max_power_level WirelessRfProfile#radio_type_c_max_power_level}
  */
  readonly radioTypeCMaxPowerLevel?: number;
  /**
  * Client limit for the 6 GHz radio band.
  *   - Range: `0`-`500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_max_radio_clients WirelessRfProfile#radio_type_c_max_radio_clients}
  */
  readonly radioTypeCMaxRadioClients?: number;
  /**
  * Minimum DBS Width for the 6 GHz radio band.
  *   - Choices: `20`, `40`, `80`, `160`, `320`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_min_dbs_width WirelessRfProfile#radio_type_c_min_dbs_width}
  */
  readonly radioTypeCMinDbsWidth?: number;
  /**
  * Minimum power level of the 6 GHz radio band.
  *   - Range: `-10`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_min_power_level WirelessRfProfile#radio_type_c_min_power_level}
  */
  readonly radioTypeCMinPowerLevel?: number;
  /**
  * MU-MIMO Downlink for 802.11ax parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink?: boolean | cdktf.IResolvable;
  /**
  * MU-MIMO Uplink for 802.11ax parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink?: boolean | cdktf.IResolvable;
  /**
  * OFDMA Downlink for 802.11ax parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink?: boolean | cdktf.IResolvable;
  /**
  * OFDMA Uplink for 802.11ax parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink?: boolean | cdktf.IResolvable;
  /**
  * OFDMA mu mimo down link for 802.11be parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink?: boolean | cdktf.IResolvable;
  /**
  * OFDMA mu mimo up link for 802.11be parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink?: boolean | cdktf.IResolvable;
  /**
  * OFDMA dma down link for 802.11be parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink?: boolean | cdktf.IResolvable;
  /**
  * OFDMA Multi-RU for 802.11be parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru}
  */
  readonly radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu?: boolean | cdktf.IResolvable;
  /**
  * OFDMA dma up link for 802.11be parameters in the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link WirelessRfProfile#radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link}
  */
  readonly radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink?: boolean | cdktf.IResolvable;
  /**
  * Target Wake Time for the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_target_wake_time WirelessRfProfile#radio_type_c_multi_bssid_properties_target_wake_time}
  */
  readonly radioTypeCMultiBssidPropertiesTargetWakeTime?: boolean | cdktf.IResolvable;
  /**
  * TWT Broadcast Support for the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_multi_bssid_properties_twt_broadcast_support WirelessRfProfile#radio_type_c_multi_bssid_properties_twt_broadcast_support}
  */
  readonly radioTypeCMultiBssidPropertiesTwtBroadcastSupport?: boolean | cdktf.IResolvable;
  /**
  * Parent profile for the 6 GHz radio band.
  *   - Choices: `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_parent_profile WirelessRfProfile#radio_type_c_parent_profile}
  */
  readonly radioTypeCParentProfile?: string;
  /**
  * Power threshold of the 6 GHz radio band.
  *   - Range: `-80`-`-50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_power_threshold_v1 WirelessRfProfile#radio_type_c_power_threshold_v1}
  */
  readonly radioTypeCPowerThresholdV1?: number;
  /**
  * Enable or Disable Preamble Puncturing. This WiFi 7 configuration is applicable to wireless IOS devices supporting 17.15 and higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_preamble_puncture WirelessRfProfile#radio_type_c_preamble_puncture}
  */
  readonly radioTypeCPreamblePuncture?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable PSC enforcement for the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_psc_enforcing_enabled WirelessRfProfile#radio_type_c_psc_enforcing_enabled}
  */
  readonly radioTypeCPscEnforcingEnabled?: boolean | cdktf.IResolvable;
  /**
  * DCA channels of 6 GHz radio band, passed in comma-separated format without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_radio_channels WirelessRfProfile#radio_type_c_radio_channels}
  */
  readonly radioTypeCRadioChannels?: string;
  /**
  * RX-SOP threshold of the 6 GHz radio band.
  *   - Choices: `HIGH`, `MEDIUM`, `LOW`, `AUTO`, `CUSTOM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_rx_sop_threshold WirelessRfProfile#radio_type_c_rx_sop_threshold}
  */
  readonly radioTypeCRxSopThreshold?: string;
  /**
  * Dot11ax Non-SRG OBSS PD for the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect WirelessRfProfile#radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect}
  */
  readonly radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect?: boolean | cdktf.IResolvable;
  /**
  * Dot11ax Non-SRG OBSS PD Max Threshold for the 6 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold WirelessRfProfile#radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold}
  */
  readonly radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold?: number;
  /**
  * Dot11ax SRG OBSS PD for the 6 GHz radio band.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect WirelessRfProfile#radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect}
  */
  readonly radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect?: boolean | cdktf.IResolvable;
  /**
  * Dot11ax SRG OBSS PD Max Threshold for the 6 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold WirelessRfProfile#radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold}
  */
  readonly radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold?: number;
  /**
  * Dot11ax SRG OBSS PD Min Threshold for the 6 GHz radio band.
  *   - Range: `-82`-`-62`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold WirelessRfProfile#radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold}
  */
  readonly radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold?: number;
  /**
  * RF Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#rf_profile_name WirelessRfProfile#rf_profile_name}
  */
  readonly rfProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile catalystcenter_wireless_rf_profile}
*/
export class WirelessRfProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_wireless_rf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessRfProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessRfProfile to import
  * @param importFromId The id of the existing WirelessRfProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessRfProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_wireless_rf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/wireless_rf_profile catalystcenter_wireless_rf_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessRfProfileConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessRfProfileConfig) {
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
    this._defaultRfProfile = config.defaultRfProfile;
    this._enableRadioType6GHz = config.enableRadioType6GHz;
    this._enableRadioTypeA = config.enableRadioTypeA;
    this._enableRadioTypeB = config.enableRadioTypeB;
    this._radioTypeAChannelWidth = config.radioTypeAChannelWidth;
    this._radioTypeACoverageHoleDetectionPropertiesChdClientLevel = config.radioTypeACoverageHoleDetectionPropertiesChdClientLevel;
    this._radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold = config.radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold;
    this._radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel = config.radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel;
    this._radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold = config.radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold;
    this._radioTypeACustomRxSopThreshold = config.radioTypeACustomRxSopThreshold;
    this._radioTypeADataRates = config.radioTypeADataRates;
    this._radioTypeAFraPropertiesClientAware = config.radioTypeAFraPropertiesClientAware;
    this._radioTypeAFraPropertiesClientReset = config.radioTypeAFraPropertiesClientReset;
    this._radioTypeAFraPropertiesClientSelect = config.radioTypeAFraPropertiesClientSelect;
    this._radioTypeAMandatoryDataRates = config.radioTypeAMandatoryDataRates;
    this._radioTypeAMaxPowerLevel = config.radioTypeAMaxPowerLevel;
    this._radioTypeAMaxRadioClients = config.radioTypeAMaxRadioClients;
    this._radioTypeAMinPowerLevel = config.radioTypeAMinPowerLevel;
    this._radioTypeAParentProfile = config.radioTypeAParentProfile;
    this._radioTypeAPowerThresholdV1 = config.radioTypeAPowerThresholdV1;
    this._radioTypeAPreamblePuncture = config.radioTypeAPreamblePuncture;
    this._radioTypeARadioChannels = config.radioTypeARadioChannels;
    this._radioTypeARxSopThreshold = config.radioTypeARxSopThreshold;
    this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect = config.radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect;
    this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = config.radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold;
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect = config.radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect;
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = config.radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold;
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = config.radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold;
    this._radioTypeAZeroWaitDfsEnable = config.radioTypeAZeroWaitDfsEnable;
    this._radioTypeBCoverageHoleDetectionPropertiesChdClientLevel = config.radioTypeBCoverageHoleDetectionPropertiesChdClientLevel;
    this._radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold = config.radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold;
    this._radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel = config.radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel;
    this._radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold = config.radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold;
    this._radioTypeBCustomRxSopThreshold = config.radioTypeBCustomRxSopThreshold;
    this._radioTypeBDataRates = config.radioTypeBDataRates;
    this._radioTypeBMandatoryDataRates = config.radioTypeBMandatoryDataRates;
    this._radioTypeBMaxPowerLevel = config.radioTypeBMaxPowerLevel;
    this._radioTypeBMaxRadioClients = config.radioTypeBMaxRadioClients;
    this._radioTypeBMinPowerLevel = config.radioTypeBMinPowerLevel;
    this._radioTypeBParentProfile = config.radioTypeBParentProfile;
    this._radioTypeBPowerThresholdV1 = config.radioTypeBPowerThresholdV1;
    this._radioTypeBRadioChannels = config.radioTypeBRadioChannels;
    this._radioTypeBRxSopThreshold = config.radioTypeBRxSopThreshold;
    this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect = config.radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect;
    this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = config.radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold;
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect = config.radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect;
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = config.radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold;
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = config.radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold;
    this._radioTypeCBroadcastProbeResponseInterval = config.radioTypeCBroadcastProbeResponseInterval;
    this._radioTypeCCoverageHoleDetectionPropertiesChdClientLevel = config.radioTypeCCoverageHoleDetectionPropertiesChdClientLevel;
    this._radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold = config.radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold;
    this._radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel = config.radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel;
    this._radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold = config.radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold;
    this._radioTypeCCustomRxSopThreshold = config.radioTypeCCustomRxSopThreshold;
    this._radioTypeCDataRates = config.radioTypeCDataRates;
    this._radioTypeCDiscoveryFrames6Ghz = config.radioTypeCDiscoveryFrames6Ghz;
    this._radioTypeCEnableStandardPowerService = config.radioTypeCEnableStandardPowerService;
    this._radioTypeCFraPropertiesClientResetCount = config.radioTypeCFraPropertiesClientResetCount;
    this._radioTypeCFraPropertiesClientUtilizationThreshold = config.radioTypeCFraPropertiesClientUtilizationThreshold;
    this._radioTypeCMandatoryDataRates = config.radioTypeCMandatoryDataRates;
    this._radioTypeCMaxDbsWidth = config.radioTypeCMaxDbsWidth;
    this._radioTypeCMaxPowerLevel = config.radioTypeCMaxPowerLevel;
    this._radioTypeCMaxRadioClients = config.radioTypeCMaxRadioClients;
    this._radioTypeCMinDbsWidth = config.radioTypeCMinDbsWidth;
    this._radioTypeCMinPowerLevel = config.radioTypeCMinPowerLevel;
    this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink = config.radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink;
    this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink = config.radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink;
    this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink = config.radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink;
    this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink = config.radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink;
    this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink = config.radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink;
    this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink = config.radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink;
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink = config.radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink;
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu = config.radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu;
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink = config.radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink;
    this._radioTypeCMultiBssidPropertiesTargetWakeTime = config.radioTypeCMultiBssidPropertiesTargetWakeTime;
    this._radioTypeCMultiBssidPropertiesTwtBroadcastSupport = config.radioTypeCMultiBssidPropertiesTwtBroadcastSupport;
    this._radioTypeCParentProfile = config.radioTypeCParentProfile;
    this._radioTypeCPowerThresholdV1 = config.radioTypeCPowerThresholdV1;
    this._radioTypeCPreamblePuncture = config.radioTypeCPreamblePuncture;
    this._radioTypeCPscEnforcingEnabled = config.radioTypeCPscEnforcingEnabled;
    this._radioTypeCRadioChannels = config.radioTypeCRadioChannels;
    this._radioTypeCRxSopThreshold = config.radioTypeCRxSopThreshold;
    this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect = config.radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect;
    this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = config.radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold;
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect = config.radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect;
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = config.radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold;
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = config.radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold;
    this._rfProfileName = config.rfProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_rf_profile - computed: false, optional: false, required: true
  private _defaultRfProfile?: boolean | cdktf.IResolvable; 
  public get defaultRfProfile() {
    return this.getBooleanAttribute('default_rf_profile');
  }
  public set defaultRfProfile(value: boolean | cdktf.IResolvable) {
    this._defaultRfProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRfProfileInput() {
    return this._defaultRfProfile;
  }

  // enable_radio_type6_g_hz - computed: false, optional: false, required: true
  private _enableRadioType6GHz?: boolean | cdktf.IResolvable; 
  public get enableRadioType6GHz() {
    return this.getBooleanAttribute('enable_radio_type6_g_hz');
  }
  public set enableRadioType6GHz(value: boolean | cdktf.IResolvable) {
    this._enableRadioType6GHz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRadioType6GHzInput() {
    return this._enableRadioType6GHz;
  }

  // enable_radio_type_a - computed: false, optional: false, required: true
  private _enableRadioTypeA?: boolean | cdktf.IResolvable; 
  public get enableRadioTypeA() {
    return this.getBooleanAttribute('enable_radio_type_a');
  }
  public set enableRadioTypeA(value: boolean | cdktf.IResolvable) {
    this._enableRadioTypeA = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRadioTypeAInput() {
    return this._enableRadioTypeA;
  }

  // enable_radio_type_b - computed: false, optional: false, required: true
  private _enableRadioTypeB?: boolean | cdktf.IResolvable; 
  public get enableRadioTypeB() {
    return this.getBooleanAttribute('enable_radio_type_b');
  }
  public set enableRadioTypeB(value: boolean | cdktf.IResolvable) {
    this._enableRadioTypeB = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRadioTypeBInput() {
    return this._enableRadioTypeB;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // radio_type_a_channel_width - computed: false, optional: true, required: false
  private _radioTypeAChannelWidth?: string; 
  public get radioTypeAChannelWidth() {
    return this.getStringAttribute('radio_type_a_channel_width');
  }
  public set radioTypeAChannelWidth(value: string) {
    this._radioTypeAChannelWidth = value;
  }
  public resetRadioTypeAChannelWidth() {
    this._radioTypeAChannelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAChannelWidthInput() {
    return this._radioTypeAChannelWidth;
  }

  // radio_type_a_coverage_hole_detection_properties_chd_client_level - computed: false, optional: true, required: false
  private _radioTypeACoverageHoleDetectionPropertiesChdClientLevel?: number; 
  public get radioTypeACoverageHoleDetectionPropertiesChdClientLevel() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_client_level');
  }
  public set radioTypeACoverageHoleDetectionPropertiesChdClientLevel(value: number) {
    this._radioTypeACoverageHoleDetectionPropertiesChdClientLevel = value;
  }
  public resetRadioTypeACoverageHoleDetectionPropertiesChdClientLevel() {
    this._radioTypeACoverageHoleDetectionPropertiesChdClientLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeACoverageHoleDetectionPropertiesChdClientLevelInput() {
    return this._radioTypeACoverageHoleDetectionPropertiesChdClientLevel;
  }

  // radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold - computed: false, optional: true, required: false
  private _radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold?: number; 
  public get radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold');
  }
  public set radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold(value: number) {
    this._radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold = value;
  }
  public resetRadioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    this._radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeACoverageHoleDetectionPropertiesChdDataRssiThresholdInput() {
    return this._radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold;
  }

  // radio_type_a_coverage_hole_detection_properties_chd_exception_level - computed: false, optional: true, required: false
  private _radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel?: number; 
  public get radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_exception_level');
  }
  public set radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel(value: number) {
    this._radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel = value;
  }
  public resetRadioTypeACoverageHoleDetectionPropertiesChdExceptionLevel() {
    this._radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeACoverageHoleDetectionPropertiesChdExceptionLevelInput() {
    return this._radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel;
  }

  // radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold - computed: false, optional: true, required: false
  private _radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold?: number; 
  public get radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    return this.getNumberAttribute('radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold');
  }
  public set radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold(value: number) {
    this._radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold = value;
  }
  public resetRadioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    this._radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThresholdInput() {
    return this._radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold;
  }

  // radio_type_a_custom_rx_sop_threshold - computed: false, optional: true, required: false
  private _radioTypeACustomRxSopThreshold?: number; 
  public get radioTypeACustomRxSopThreshold() {
    return this.getNumberAttribute('radio_type_a_custom_rx_sop_threshold');
  }
  public set radioTypeACustomRxSopThreshold(value: number) {
    this._radioTypeACustomRxSopThreshold = value;
  }
  public resetRadioTypeACustomRxSopThreshold() {
    this._radioTypeACustomRxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeACustomRxSopThresholdInput() {
    return this._radioTypeACustomRxSopThreshold;
  }

  // radio_type_a_data_rates - computed: false, optional: true, required: false
  private _radioTypeADataRates?: string; 
  public get radioTypeADataRates() {
    return this.getStringAttribute('radio_type_a_data_rates');
  }
  public set radioTypeADataRates(value: string) {
    this._radioTypeADataRates = value;
  }
  public resetRadioTypeADataRates() {
    this._radioTypeADataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeADataRatesInput() {
    return this._radioTypeADataRates;
  }

  // radio_type_a_fra_properties_client_aware - computed: false, optional: true, required: false
  private _radioTypeAFraPropertiesClientAware?: boolean | cdktf.IResolvable; 
  public get radioTypeAFraPropertiesClientAware() {
    return this.getBooleanAttribute('radio_type_a_fra_properties_client_aware');
  }
  public set radioTypeAFraPropertiesClientAware(value: boolean | cdktf.IResolvable) {
    this._radioTypeAFraPropertiesClientAware = value;
  }
  public resetRadioTypeAFraPropertiesClientAware() {
    this._radioTypeAFraPropertiesClientAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAFraPropertiesClientAwareInput() {
    return this._radioTypeAFraPropertiesClientAware;
  }

  // radio_type_a_fra_properties_client_reset - computed: false, optional: true, required: false
  private _radioTypeAFraPropertiesClientReset?: number; 
  public get radioTypeAFraPropertiesClientReset() {
    return this.getNumberAttribute('radio_type_a_fra_properties_client_reset');
  }
  public set radioTypeAFraPropertiesClientReset(value: number) {
    this._radioTypeAFraPropertiesClientReset = value;
  }
  public resetRadioTypeAFraPropertiesClientReset() {
    this._radioTypeAFraPropertiesClientReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAFraPropertiesClientResetInput() {
    return this._radioTypeAFraPropertiesClientReset;
  }

  // radio_type_a_fra_properties_client_select - computed: false, optional: true, required: false
  private _radioTypeAFraPropertiesClientSelect?: number; 
  public get radioTypeAFraPropertiesClientSelect() {
    return this.getNumberAttribute('radio_type_a_fra_properties_client_select');
  }
  public set radioTypeAFraPropertiesClientSelect(value: number) {
    this._radioTypeAFraPropertiesClientSelect = value;
  }
  public resetRadioTypeAFraPropertiesClientSelect() {
    this._radioTypeAFraPropertiesClientSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAFraPropertiesClientSelectInput() {
    return this._radioTypeAFraPropertiesClientSelect;
  }

  // radio_type_a_mandatory_data_rates - computed: false, optional: true, required: false
  private _radioTypeAMandatoryDataRates?: string; 
  public get radioTypeAMandatoryDataRates() {
    return this.getStringAttribute('radio_type_a_mandatory_data_rates');
  }
  public set radioTypeAMandatoryDataRates(value: string) {
    this._radioTypeAMandatoryDataRates = value;
  }
  public resetRadioTypeAMandatoryDataRates() {
    this._radioTypeAMandatoryDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAMandatoryDataRatesInput() {
    return this._radioTypeAMandatoryDataRates;
  }

  // radio_type_a_max_power_level - computed: false, optional: true, required: false
  private _radioTypeAMaxPowerLevel?: number; 
  public get radioTypeAMaxPowerLevel() {
    return this.getNumberAttribute('radio_type_a_max_power_level');
  }
  public set radioTypeAMaxPowerLevel(value: number) {
    this._radioTypeAMaxPowerLevel = value;
  }
  public resetRadioTypeAMaxPowerLevel() {
    this._radioTypeAMaxPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAMaxPowerLevelInput() {
    return this._radioTypeAMaxPowerLevel;
  }

  // radio_type_a_max_radio_clients - computed: false, optional: true, required: false
  private _radioTypeAMaxRadioClients?: number; 
  public get radioTypeAMaxRadioClients() {
    return this.getNumberAttribute('radio_type_a_max_radio_clients');
  }
  public set radioTypeAMaxRadioClients(value: number) {
    this._radioTypeAMaxRadioClients = value;
  }
  public resetRadioTypeAMaxRadioClients() {
    this._radioTypeAMaxRadioClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAMaxRadioClientsInput() {
    return this._radioTypeAMaxRadioClients;
  }

  // radio_type_a_min_power_level - computed: false, optional: true, required: false
  private _radioTypeAMinPowerLevel?: number; 
  public get radioTypeAMinPowerLevel() {
    return this.getNumberAttribute('radio_type_a_min_power_level');
  }
  public set radioTypeAMinPowerLevel(value: number) {
    this._radioTypeAMinPowerLevel = value;
  }
  public resetRadioTypeAMinPowerLevel() {
    this._radioTypeAMinPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAMinPowerLevelInput() {
    return this._radioTypeAMinPowerLevel;
  }

  // radio_type_a_parent_profile - computed: false, optional: true, required: false
  private _radioTypeAParentProfile?: string; 
  public get radioTypeAParentProfile() {
    return this.getStringAttribute('radio_type_a_parent_profile');
  }
  public set radioTypeAParentProfile(value: string) {
    this._radioTypeAParentProfile = value;
  }
  public resetRadioTypeAParentProfile() {
    this._radioTypeAParentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAParentProfileInput() {
    return this._radioTypeAParentProfile;
  }

  // radio_type_a_power_threshold_v1 - computed: false, optional: true, required: false
  private _radioTypeAPowerThresholdV1?: number; 
  public get radioTypeAPowerThresholdV1() {
    return this.getNumberAttribute('radio_type_a_power_threshold_v1');
  }
  public set radioTypeAPowerThresholdV1(value: number) {
    this._radioTypeAPowerThresholdV1 = value;
  }
  public resetRadioTypeAPowerThresholdV1() {
    this._radioTypeAPowerThresholdV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAPowerThresholdV1Input() {
    return this._radioTypeAPowerThresholdV1;
  }

  // radio_type_a_preamble_puncture - computed: false, optional: true, required: false
  private _radioTypeAPreamblePuncture?: boolean | cdktf.IResolvable; 
  public get radioTypeAPreamblePuncture() {
    return this.getBooleanAttribute('radio_type_a_preamble_puncture');
  }
  public set radioTypeAPreamblePuncture(value: boolean | cdktf.IResolvable) {
    this._radioTypeAPreamblePuncture = value;
  }
  public resetRadioTypeAPreamblePuncture() {
    this._radioTypeAPreamblePuncture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAPreamblePunctureInput() {
    return this._radioTypeAPreamblePuncture;
  }

  // radio_type_a_radio_channels - computed: false, optional: true, required: false
  private _radioTypeARadioChannels?: string; 
  public get radioTypeARadioChannels() {
    return this.getStringAttribute('radio_type_a_radio_channels');
  }
  public set radioTypeARadioChannels(value: string) {
    this._radioTypeARadioChannels = value;
  }
  public resetRadioTypeARadioChannels() {
    this._radioTypeARadioChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeARadioChannelsInput() {
    return this._radioTypeARadioChannels;
  }

  // radio_type_a_rx_sop_threshold - computed: false, optional: true, required: false
  private _radioTypeARxSopThreshold?: string; 
  public get radioTypeARxSopThreshold() {
    return this.getStringAttribute('radio_type_a_rx_sop_threshold');
  }
  public set radioTypeARxSopThreshold(value: string) {
    this._radioTypeARxSopThreshold = value;
  }
  public resetRadioTypeARxSopThreshold() {
    this._radioTypeARxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeARxSopThresholdInput() {
    return this._radioTypeARxSopThreshold;
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect - computed: false, optional: true, required: false
  private _radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect?: boolean | cdktf.IResolvable; 
  public get radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect');
  }
  public set radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect(value: boolean | cdktf.IResolvable) {
    this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect = value;
  }
  public resetRadioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectInput() {
    return this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect;
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold - computed: false, optional: true, required: false
  private _radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold?: number; 
  public get radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold');
  }
  public set radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold(value: number) {
    this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = value;
  }
  public resetRadioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThresholdInput() {
    return this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold;
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect - computed: false, optional: true, required: false
  private _radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect?: boolean | cdktf.IResolvable; 
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect');
  }
  public set radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect(value: boolean | cdktf.IResolvable) {
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect = value;
  }
  public resetRadioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectInput() {
    return this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect;
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold - computed: false, optional: true, required: false
  private _radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold?: number; 
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold');
  }
  public set radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold(value: number) {
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = value;
  }
  public resetRadioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThresholdInput() {
    return this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold;
  }

  // radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold - computed: false, optional: true, required: false
  private _radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold?: number; 
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    return this.getNumberAttribute('radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold');
  }
  public set radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold(value: number) {
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = value;
  }
  public resetRadioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThresholdInput() {
    return this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold;
  }

  // radio_type_a_zero_wait_dfs_enable - computed: false, optional: true, required: false
  private _radioTypeAZeroWaitDfsEnable?: boolean | cdktf.IResolvable; 
  public get radioTypeAZeroWaitDfsEnable() {
    return this.getBooleanAttribute('radio_type_a_zero_wait_dfs_enable');
  }
  public set radioTypeAZeroWaitDfsEnable(value: boolean | cdktf.IResolvable) {
    this._radioTypeAZeroWaitDfsEnable = value;
  }
  public resetRadioTypeAZeroWaitDfsEnable() {
    this._radioTypeAZeroWaitDfsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeAZeroWaitDfsEnableInput() {
    return this._radioTypeAZeroWaitDfsEnable;
  }

  // radio_type_b_coverage_hole_detection_properties_chd_client_level - computed: false, optional: true, required: false
  private _radioTypeBCoverageHoleDetectionPropertiesChdClientLevel?: number; 
  public get radioTypeBCoverageHoleDetectionPropertiesChdClientLevel() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_client_level');
  }
  public set radioTypeBCoverageHoleDetectionPropertiesChdClientLevel(value: number) {
    this._radioTypeBCoverageHoleDetectionPropertiesChdClientLevel = value;
  }
  public resetRadioTypeBCoverageHoleDetectionPropertiesChdClientLevel() {
    this._radioTypeBCoverageHoleDetectionPropertiesChdClientLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBCoverageHoleDetectionPropertiesChdClientLevelInput() {
    return this._radioTypeBCoverageHoleDetectionPropertiesChdClientLevel;
  }

  // radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold - computed: false, optional: true, required: false
  private _radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold?: number; 
  public get radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold');
  }
  public set radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold(value: number) {
    this._radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold = value;
  }
  public resetRadioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    this._radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThresholdInput() {
    return this._radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold;
  }

  // radio_type_b_coverage_hole_detection_properties_chd_exception_level - computed: false, optional: true, required: false
  private _radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel?: number; 
  public get radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_exception_level');
  }
  public set radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel(value: number) {
    this._radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel = value;
  }
  public resetRadioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel() {
    this._radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevelInput() {
    return this._radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel;
  }

  // radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold - computed: false, optional: true, required: false
  private _radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold?: number; 
  public get radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    return this.getNumberAttribute('radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold');
  }
  public set radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold(value: number) {
    this._radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold = value;
  }
  public resetRadioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    this._radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThresholdInput() {
    return this._radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold;
  }

  // radio_type_b_custom_rx_sop_threshold - computed: false, optional: true, required: false
  private _radioTypeBCustomRxSopThreshold?: number; 
  public get radioTypeBCustomRxSopThreshold() {
    return this.getNumberAttribute('radio_type_b_custom_rx_sop_threshold');
  }
  public set radioTypeBCustomRxSopThreshold(value: number) {
    this._radioTypeBCustomRxSopThreshold = value;
  }
  public resetRadioTypeBCustomRxSopThreshold() {
    this._radioTypeBCustomRxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBCustomRxSopThresholdInput() {
    return this._radioTypeBCustomRxSopThreshold;
  }

  // radio_type_b_data_rates - computed: false, optional: true, required: false
  private _radioTypeBDataRates?: string; 
  public get radioTypeBDataRates() {
    return this.getStringAttribute('radio_type_b_data_rates');
  }
  public set radioTypeBDataRates(value: string) {
    this._radioTypeBDataRates = value;
  }
  public resetRadioTypeBDataRates() {
    this._radioTypeBDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBDataRatesInput() {
    return this._radioTypeBDataRates;
  }

  // radio_type_b_mandatory_data_rates - computed: false, optional: true, required: false
  private _radioTypeBMandatoryDataRates?: string; 
  public get radioTypeBMandatoryDataRates() {
    return this.getStringAttribute('radio_type_b_mandatory_data_rates');
  }
  public set radioTypeBMandatoryDataRates(value: string) {
    this._radioTypeBMandatoryDataRates = value;
  }
  public resetRadioTypeBMandatoryDataRates() {
    this._radioTypeBMandatoryDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBMandatoryDataRatesInput() {
    return this._radioTypeBMandatoryDataRates;
  }

  // radio_type_b_max_power_level - computed: false, optional: true, required: false
  private _radioTypeBMaxPowerLevel?: number; 
  public get radioTypeBMaxPowerLevel() {
    return this.getNumberAttribute('radio_type_b_max_power_level');
  }
  public set radioTypeBMaxPowerLevel(value: number) {
    this._radioTypeBMaxPowerLevel = value;
  }
  public resetRadioTypeBMaxPowerLevel() {
    this._radioTypeBMaxPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBMaxPowerLevelInput() {
    return this._radioTypeBMaxPowerLevel;
  }

  // radio_type_b_max_radio_clients - computed: false, optional: true, required: false
  private _radioTypeBMaxRadioClients?: number; 
  public get radioTypeBMaxRadioClients() {
    return this.getNumberAttribute('radio_type_b_max_radio_clients');
  }
  public set radioTypeBMaxRadioClients(value: number) {
    this._radioTypeBMaxRadioClients = value;
  }
  public resetRadioTypeBMaxRadioClients() {
    this._radioTypeBMaxRadioClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBMaxRadioClientsInput() {
    return this._radioTypeBMaxRadioClients;
  }

  // radio_type_b_min_power_level - computed: false, optional: true, required: false
  private _radioTypeBMinPowerLevel?: number; 
  public get radioTypeBMinPowerLevel() {
    return this.getNumberAttribute('radio_type_b_min_power_level');
  }
  public set radioTypeBMinPowerLevel(value: number) {
    this._radioTypeBMinPowerLevel = value;
  }
  public resetRadioTypeBMinPowerLevel() {
    this._radioTypeBMinPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBMinPowerLevelInput() {
    return this._radioTypeBMinPowerLevel;
  }

  // radio_type_b_parent_profile - computed: false, optional: true, required: false
  private _radioTypeBParentProfile?: string; 
  public get radioTypeBParentProfile() {
    return this.getStringAttribute('radio_type_b_parent_profile');
  }
  public set radioTypeBParentProfile(value: string) {
    this._radioTypeBParentProfile = value;
  }
  public resetRadioTypeBParentProfile() {
    this._radioTypeBParentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBParentProfileInput() {
    return this._radioTypeBParentProfile;
  }

  // radio_type_b_power_threshold_v1 - computed: false, optional: true, required: false
  private _radioTypeBPowerThresholdV1?: number; 
  public get radioTypeBPowerThresholdV1() {
    return this.getNumberAttribute('radio_type_b_power_threshold_v1');
  }
  public set radioTypeBPowerThresholdV1(value: number) {
    this._radioTypeBPowerThresholdV1 = value;
  }
  public resetRadioTypeBPowerThresholdV1() {
    this._radioTypeBPowerThresholdV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBPowerThresholdV1Input() {
    return this._radioTypeBPowerThresholdV1;
  }

  // radio_type_b_radio_channels - computed: false, optional: true, required: false
  private _radioTypeBRadioChannels?: string; 
  public get radioTypeBRadioChannels() {
    return this.getStringAttribute('radio_type_b_radio_channels');
  }
  public set radioTypeBRadioChannels(value: string) {
    this._radioTypeBRadioChannels = value;
  }
  public resetRadioTypeBRadioChannels() {
    this._radioTypeBRadioChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBRadioChannelsInput() {
    return this._radioTypeBRadioChannels;
  }

  // radio_type_b_rx_sop_threshold - computed: false, optional: true, required: false
  private _radioTypeBRxSopThreshold?: string; 
  public get radioTypeBRxSopThreshold() {
    return this.getStringAttribute('radio_type_b_rx_sop_threshold');
  }
  public set radioTypeBRxSopThreshold(value: string) {
    this._radioTypeBRxSopThreshold = value;
  }
  public resetRadioTypeBRxSopThreshold() {
    this._radioTypeBRxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBRxSopThresholdInput() {
    return this._radioTypeBRxSopThreshold;
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect - computed: false, optional: true, required: false
  private _radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect?: boolean | cdktf.IResolvable; 
  public get radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect');
  }
  public set radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect(value: boolean | cdktf.IResolvable) {
    this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect = value;
  }
  public resetRadioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectInput() {
    return this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect;
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold - computed: false, optional: true, required: false
  private _radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold?: number; 
  public get radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold');
  }
  public set radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold(value: number) {
    this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = value;
  }
  public resetRadioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThresholdInput() {
    return this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold;
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect - computed: false, optional: true, required: false
  private _radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect?: boolean | cdktf.IResolvable; 
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect');
  }
  public set radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect(value: boolean | cdktf.IResolvable) {
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect = value;
  }
  public resetRadioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectInput() {
    return this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect;
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold - computed: false, optional: true, required: false
  private _radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold?: number; 
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold');
  }
  public set radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold(value: number) {
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = value;
  }
  public resetRadioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThresholdInput() {
    return this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold;
  }

  // radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold - computed: false, optional: true, required: false
  private _radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold?: number; 
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    return this.getNumberAttribute('radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold');
  }
  public set radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold(value: number) {
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = value;
  }
  public resetRadioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThresholdInput() {
    return this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold;
  }

  // radio_type_c_broadcast_probe_response_interval - computed: false, optional: true, required: false
  private _radioTypeCBroadcastProbeResponseInterval?: number; 
  public get radioTypeCBroadcastProbeResponseInterval() {
    return this.getNumberAttribute('radio_type_c_broadcast_probe_response_interval');
  }
  public set radioTypeCBroadcastProbeResponseInterval(value: number) {
    this._radioTypeCBroadcastProbeResponseInterval = value;
  }
  public resetRadioTypeCBroadcastProbeResponseInterval() {
    this._radioTypeCBroadcastProbeResponseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCBroadcastProbeResponseIntervalInput() {
    return this._radioTypeCBroadcastProbeResponseInterval;
  }

  // radio_type_c_coverage_hole_detection_properties_chd_client_level - computed: false, optional: true, required: false
  private _radioTypeCCoverageHoleDetectionPropertiesChdClientLevel?: number; 
  public get radioTypeCCoverageHoleDetectionPropertiesChdClientLevel() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_client_level');
  }
  public set radioTypeCCoverageHoleDetectionPropertiesChdClientLevel(value: number) {
    this._radioTypeCCoverageHoleDetectionPropertiesChdClientLevel = value;
  }
  public resetRadioTypeCCoverageHoleDetectionPropertiesChdClientLevel() {
    this._radioTypeCCoverageHoleDetectionPropertiesChdClientLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCCoverageHoleDetectionPropertiesChdClientLevelInput() {
    return this._radioTypeCCoverageHoleDetectionPropertiesChdClientLevel;
  }

  // radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold - computed: false, optional: true, required: false
  private _radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold?: number; 
  public get radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold');
  }
  public set radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold(value: number) {
    this._radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold = value;
  }
  public resetRadioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold() {
    this._radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThresholdInput() {
    return this._radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold;
  }

  // radio_type_c_coverage_hole_detection_properties_chd_exception_level - computed: false, optional: true, required: false
  private _radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel?: number; 
  public get radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_exception_level');
  }
  public set radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel(value: number) {
    this._radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel = value;
  }
  public resetRadioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel() {
    this._radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevelInput() {
    return this._radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel;
  }

  // radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold - computed: false, optional: true, required: false
  private _radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold?: number; 
  public get radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    return this.getNumberAttribute('radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold');
  }
  public set radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold(value: number) {
    this._radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold = value;
  }
  public resetRadioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold() {
    this._radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThresholdInput() {
    return this._radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold;
  }

  // radio_type_c_custom_rx_sop_threshold - computed: false, optional: true, required: false
  private _radioTypeCCustomRxSopThreshold?: number; 
  public get radioTypeCCustomRxSopThreshold() {
    return this.getNumberAttribute('radio_type_c_custom_rx_sop_threshold');
  }
  public set radioTypeCCustomRxSopThreshold(value: number) {
    this._radioTypeCCustomRxSopThreshold = value;
  }
  public resetRadioTypeCCustomRxSopThreshold() {
    this._radioTypeCCustomRxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCCustomRxSopThresholdInput() {
    return this._radioTypeCCustomRxSopThreshold;
  }

  // radio_type_c_data_rates - computed: false, optional: true, required: false
  private _radioTypeCDataRates?: string; 
  public get radioTypeCDataRates() {
    return this.getStringAttribute('radio_type_c_data_rates');
  }
  public set radioTypeCDataRates(value: string) {
    this._radioTypeCDataRates = value;
  }
  public resetRadioTypeCDataRates() {
    this._radioTypeCDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCDataRatesInput() {
    return this._radioTypeCDataRates;
  }

  // radio_type_c_discovery_frames_6ghz - computed: false, optional: true, required: false
  private _radioTypeCDiscoveryFrames6Ghz?: string; 
  public get radioTypeCDiscoveryFrames6Ghz() {
    return this.getStringAttribute('radio_type_c_discovery_frames_6ghz');
  }
  public set radioTypeCDiscoveryFrames6Ghz(value: string) {
    this._radioTypeCDiscoveryFrames6Ghz = value;
  }
  public resetRadioTypeCDiscoveryFrames6Ghz() {
    this._radioTypeCDiscoveryFrames6Ghz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCDiscoveryFrames6GhzInput() {
    return this._radioTypeCDiscoveryFrames6Ghz;
  }

  // radio_type_c_enable_standard_power_service - computed: false, optional: true, required: false
  private _radioTypeCEnableStandardPowerService?: boolean | cdktf.IResolvable; 
  public get radioTypeCEnableStandardPowerService() {
    return this.getBooleanAttribute('radio_type_c_enable_standard_power_service');
  }
  public set radioTypeCEnableStandardPowerService(value: boolean | cdktf.IResolvable) {
    this._radioTypeCEnableStandardPowerService = value;
  }
  public resetRadioTypeCEnableStandardPowerService() {
    this._radioTypeCEnableStandardPowerService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCEnableStandardPowerServiceInput() {
    return this._radioTypeCEnableStandardPowerService;
  }

  // radio_type_c_fra_properties_client_reset_count - computed: false, optional: true, required: false
  private _radioTypeCFraPropertiesClientResetCount?: number; 
  public get radioTypeCFraPropertiesClientResetCount() {
    return this.getNumberAttribute('radio_type_c_fra_properties_client_reset_count');
  }
  public set radioTypeCFraPropertiesClientResetCount(value: number) {
    this._radioTypeCFraPropertiesClientResetCount = value;
  }
  public resetRadioTypeCFraPropertiesClientResetCount() {
    this._radioTypeCFraPropertiesClientResetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCFraPropertiesClientResetCountInput() {
    return this._radioTypeCFraPropertiesClientResetCount;
  }

  // radio_type_c_fra_properties_client_utilization_threshold - computed: false, optional: true, required: false
  private _radioTypeCFraPropertiesClientUtilizationThreshold?: number; 
  public get radioTypeCFraPropertiesClientUtilizationThreshold() {
    return this.getNumberAttribute('radio_type_c_fra_properties_client_utilization_threshold');
  }
  public set radioTypeCFraPropertiesClientUtilizationThreshold(value: number) {
    this._radioTypeCFraPropertiesClientUtilizationThreshold = value;
  }
  public resetRadioTypeCFraPropertiesClientUtilizationThreshold() {
    this._radioTypeCFraPropertiesClientUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCFraPropertiesClientUtilizationThresholdInput() {
    return this._radioTypeCFraPropertiesClientUtilizationThreshold;
  }

  // radio_type_c_mandatory_data_rates - computed: false, optional: true, required: false
  private _radioTypeCMandatoryDataRates?: string; 
  public get radioTypeCMandatoryDataRates() {
    return this.getStringAttribute('radio_type_c_mandatory_data_rates');
  }
  public set radioTypeCMandatoryDataRates(value: string) {
    this._radioTypeCMandatoryDataRates = value;
  }
  public resetRadioTypeCMandatoryDataRates() {
    this._radioTypeCMandatoryDataRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMandatoryDataRatesInput() {
    return this._radioTypeCMandatoryDataRates;
  }

  // radio_type_c_max_dbs_width - computed: false, optional: true, required: false
  private _radioTypeCMaxDbsWidth?: number; 
  public get radioTypeCMaxDbsWidth() {
    return this.getNumberAttribute('radio_type_c_max_dbs_width');
  }
  public set radioTypeCMaxDbsWidth(value: number) {
    this._radioTypeCMaxDbsWidth = value;
  }
  public resetRadioTypeCMaxDbsWidth() {
    this._radioTypeCMaxDbsWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMaxDbsWidthInput() {
    return this._radioTypeCMaxDbsWidth;
  }

  // radio_type_c_max_power_level - computed: false, optional: true, required: false
  private _radioTypeCMaxPowerLevel?: number; 
  public get radioTypeCMaxPowerLevel() {
    return this.getNumberAttribute('radio_type_c_max_power_level');
  }
  public set radioTypeCMaxPowerLevel(value: number) {
    this._radioTypeCMaxPowerLevel = value;
  }
  public resetRadioTypeCMaxPowerLevel() {
    this._radioTypeCMaxPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMaxPowerLevelInput() {
    return this._radioTypeCMaxPowerLevel;
  }

  // radio_type_c_max_radio_clients - computed: false, optional: true, required: false
  private _radioTypeCMaxRadioClients?: number; 
  public get radioTypeCMaxRadioClients() {
    return this.getNumberAttribute('radio_type_c_max_radio_clients');
  }
  public set radioTypeCMaxRadioClients(value: number) {
    this._radioTypeCMaxRadioClients = value;
  }
  public resetRadioTypeCMaxRadioClients() {
    this._radioTypeCMaxRadioClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMaxRadioClientsInput() {
    return this._radioTypeCMaxRadioClients;
  }

  // radio_type_c_min_dbs_width - computed: false, optional: true, required: false
  private _radioTypeCMinDbsWidth?: number; 
  public get radioTypeCMinDbsWidth() {
    return this.getNumberAttribute('radio_type_c_min_dbs_width');
  }
  public set radioTypeCMinDbsWidth(value: number) {
    this._radioTypeCMinDbsWidth = value;
  }
  public resetRadioTypeCMinDbsWidth() {
    this._radioTypeCMinDbsWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMinDbsWidthInput() {
    return this._radioTypeCMinDbsWidth;
  }

  // radio_type_c_min_power_level - computed: false, optional: true, required: false
  private _radioTypeCMinPowerLevel?: number; 
  public get radioTypeCMinPowerLevel() {
    return this.getNumberAttribute('radio_type_c_min_power_level');
  }
  public set radioTypeCMinPowerLevel(value: number) {
    this._radioTypeCMinPowerLevel = value;
  }
  public resetRadioTypeCMinPowerLevel() {
    this._radioTypeCMinPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMinPowerLevelInput() {
    return this._radioTypeCMinPowerLevel;
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink() {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink;
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink() {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink;
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink() {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink;
  }

  // radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink() {
    this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink;
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink() {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink;
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink() {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink;
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink() {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink;
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru');
  }
  public set radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu() {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRuInput() {
    return this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu;
  }

  // radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link');
  }
  public set radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink = value;
  }
  public resetRadioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink() {
    this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLinkInput() {
    return this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink;
  }

  // radio_type_c_multi_bssid_properties_target_wake_time - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesTargetWakeTime?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesTargetWakeTime() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_target_wake_time');
  }
  public set radioTypeCMultiBssidPropertiesTargetWakeTime(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesTargetWakeTime = value;
  }
  public resetRadioTypeCMultiBssidPropertiesTargetWakeTime() {
    this._radioTypeCMultiBssidPropertiesTargetWakeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesTargetWakeTimeInput() {
    return this._radioTypeCMultiBssidPropertiesTargetWakeTime;
  }

  // radio_type_c_multi_bssid_properties_twt_broadcast_support - computed: false, optional: true, required: false
  private _radioTypeCMultiBssidPropertiesTwtBroadcastSupport?: boolean | cdktf.IResolvable; 
  public get radioTypeCMultiBssidPropertiesTwtBroadcastSupport() {
    return this.getBooleanAttribute('radio_type_c_multi_bssid_properties_twt_broadcast_support');
  }
  public set radioTypeCMultiBssidPropertiesTwtBroadcastSupport(value: boolean | cdktf.IResolvable) {
    this._radioTypeCMultiBssidPropertiesTwtBroadcastSupport = value;
  }
  public resetRadioTypeCMultiBssidPropertiesTwtBroadcastSupport() {
    this._radioTypeCMultiBssidPropertiesTwtBroadcastSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCMultiBssidPropertiesTwtBroadcastSupportInput() {
    return this._radioTypeCMultiBssidPropertiesTwtBroadcastSupport;
  }

  // radio_type_c_parent_profile - computed: false, optional: true, required: false
  private _radioTypeCParentProfile?: string; 
  public get radioTypeCParentProfile() {
    return this.getStringAttribute('radio_type_c_parent_profile');
  }
  public set radioTypeCParentProfile(value: string) {
    this._radioTypeCParentProfile = value;
  }
  public resetRadioTypeCParentProfile() {
    this._radioTypeCParentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCParentProfileInput() {
    return this._radioTypeCParentProfile;
  }

  // radio_type_c_power_threshold_v1 - computed: false, optional: true, required: false
  private _radioTypeCPowerThresholdV1?: number; 
  public get radioTypeCPowerThresholdV1() {
    return this.getNumberAttribute('radio_type_c_power_threshold_v1');
  }
  public set radioTypeCPowerThresholdV1(value: number) {
    this._radioTypeCPowerThresholdV1 = value;
  }
  public resetRadioTypeCPowerThresholdV1() {
    this._radioTypeCPowerThresholdV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCPowerThresholdV1Input() {
    return this._radioTypeCPowerThresholdV1;
  }

  // radio_type_c_preamble_puncture - computed: false, optional: true, required: false
  private _radioTypeCPreamblePuncture?: boolean | cdktf.IResolvable; 
  public get radioTypeCPreamblePuncture() {
    return this.getBooleanAttribute('radio_type_c_preamble_puncture');
  }
  public set radioTypeCPreamblePuncture(value: boolean | cdktf.IResolvable) {
    this._radioTypeCPreamblePuncture = value;
  }
  public resetRadioTypeCPreamblePuncture() {
    this._radioTypeCPreamblePuncture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCPreamblePunctureInput() {
    return this._radioTypeCPreamblePuncture;
  }

  // radio_type_c_psc_enforcing_enabled - computed: false, optional: true, required: false
  private _radioTypeCPscEnforcingEnabled?: boolean | cdktf.IResolvable; 
  public get radioTypeCPscEnforcingEnabled() {
    return this.getBooleanAttribute('radio_type_c_psc_enforcing_enabled');
  }
  public set radioTypeCPscEnforcingEnabled(value: boolean | cdktf.IResolvable) {
    this._radioTypeCPscEnforcingEnabled = value;
  }
  public resetRadioTypeCPscEnforcingEnabled() {
    this._radioTypeCPscEnforcingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCPscEnforcingEnabledInput() {
    return this._radioTypeCPscEnforcingEnabled;
  }

  // radio_type_c_radio_channels - computed: false, optional: true, required: false
  private _radioTypeCRadioChannels?: string; 
  public get radioTypeCRadioChannels() {
    return this.getStringAttribute('radio_type_c_radio_channels');
  }
  public set radioTypeCRadioChannels(value: string) {
    this._radioTypeCRadioChannels = value;
  }
  public resetRadioTypeCRadioChannels() {
    this._radioTypeCRadioChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCRadioChannelsInput() {
    return this._radioTypeCRadioChannels;
  }

  // radio_type_c_rx_sop_threshold - computed: false, optional: true, required: false
  private _radioTypeCRxSopThreshold?: string; 
  public get radioTypeCRxSopThreshold() {
    return this.getStringAttribute('radio_type_c_rx_sop_threshold');
  }
  public set radioTypeCRxSopThreshold(value: string) {
    this._radioTypeCRxSopThreshold = value;
  }
  public resetRadioTypeCRxSopThreshold() {
    this._radioTypeCRxSopThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCRxSopThresholdInput() {
    return this._radioTypeCRxSopThreshold;
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect - computed: false, optional: true, required: false
  private _radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect?: boolean | cdktf.IResolvable; 
  public get radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect');
  }
  public set radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect(value: boolean | cdktf.IResolvable) {
    this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect = value;
  }
  public resetRadioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect() {
    this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectInput() {
    return this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect;
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold - computed: false, optional: true, required: false
  private _radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold?: number; 
  public get radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold');
  }
  public set radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold(value: number) {
    this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = value;
  }
  public resetRadioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold() {
    this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThresholdInput() {
    return this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold;
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect - computed: false, optional: true, required: false
  private _radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect?: boolean | cdktf.IResolvable; 
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    return this.getBooleanAttribute('radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect');
  }
  public set radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect(value: boolean | cdktf.IResolvable) {
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect = value;
  }
  public resetRadioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect() {
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectInput() {
    return this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect;
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold - computed: false, optional: true, required: false
  private _radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold?: number; 
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    return this.getNumberAttribute('radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold');
  }
  public set radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold(value: number) {
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = value;
  }
  public resetRadioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold() {
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThresholdInput() {
    return this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold;
  }

  // radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold - computed: false, optional: true, required: false
  private _radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold?: number; 
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    return this.getNumberAttribute('radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold');
  }
  public set radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold(value: number) {
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = value;
  }
  public resetRadioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold() {
    this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThresholdInput() {
    return this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold;
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
      default_rf_profile: cdktf.booleanToTerraform(this._defaultRfProfile),
      enable_radio_type6_g_hz: cdktf.booleanToTerraform(this._enableRadioType6GHz),
      enable_radio_type_a: cdktf.booleanToTerraform(this._enableRadioTypeA),
      enable_radio_type_b: cdktf.booleanToTerraform(this._enableRadioTypeB),
      radio_type_a_channel_width: cdktf.stringToTerraform(this._radioTypeAChannelWidth),
      radio_type_a_coverage_hole_detection_properties_chd_client_level: cdktf.numberToTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdClientLevel),
      radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold: cdktf.numberToTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold),
      radio_type_a_coverage_hole_detection_properties_chd_exception_level: cdktf.numberToTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel),
      radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold: cdktf.numberToTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold),
      radio_type_a_custom_rx_sop_threshold: cdktf.numberToTerraform(this._radioTypeACustomRxSopThreshold),
      radio_type_a_data_rates: cdktf.stringToTerraform(this._radioTypeADataRates),
      radio_type_a_fra_properties_client_aware: cdktf.booleanToTerraform(this._radioTypeAFraPropertiesClientAware),
      radio_type_a_fra_properties_client_reset: cdktf.numberToTerraform(this._radioTypeAFraPropertiesClientReset),
      radio_type_a_fra_properties_client_select: cdktf.numberToTerraform(this._radioTypeAFraPropertiesClientSelect),
      radio_type_a_mandatory_data_rates: cdktf.stringToTerraform(this._radioTypeAMandatoryDataRates),
      radio_type_a_max_power_level: cdktf.numberToTerraform(this._radioTypeAMaxPowerLevel),
      radio_type_a_max_radio_clients: cdktf.numberToTerraform(this._radioTypeAMaxRadioClients),
      radio_type_a_min_power_level: cdktf.numberToTerraform(this._radioTypeAMinPowerLevel),
      radio_type_a_parent_profile: cdktf.stringToTerraform(this._radioTypeAParentProfile),
      radio_type_a_power_threshold_v1: cdktf.numberToTerraform(this._radioTypeAPowerThresholdV1),
      radio_type_a_preamble_puncture: cdktf.booleanToTerraform(this._radioTypeAPreamblePuncture),
      radio_type_a_radio_channels: cdktf.stringToTerraform(this._radioTypeARadioChannels),
      radio_type_a_rx_sop_threshold: cdktf.stringToTerraform(this._radioTypeARxSopThreshold),
      radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect: cdktf.booleanToTerraform(this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect),
      radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold: cdktf.numberToTerraform(this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold),
      radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect: cdktf.booleanToTerraform(this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect),
      radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold: cdktf.numberToTerraform(this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold),
      radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold: cdktf.numberToTerraform(this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold),
      radio_type_a_zero_wait_dfs_enable: cdktf.booleanToTerraform(this._radioTypeAZeroWaitDfsEnable),
      radio_type_b_coverage_hole_detection_properties_chd_client_level: cdktf.numberToTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdClientLevel),
      radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold: cdktf.numberToTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold),
      radio_type_b_coverage_hole_detection_properties_chd_exception_level: cdktf.numberToTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel),
      radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold: cdktf.numberToTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold),
      radio_type_b_custom_rx_sop_threshold: cdktf.numberToTerraform(this._radioTypeBCustomRxSopThreshold),
      radio_type_b_data_rates: cdktf.stringToTerraform(this._radioTypeBDataRates),
      radio_type_b_mandatory_data_rates: cdktf.stringToTerraform(this._radioTypeBMandatoryDataRates),
      radio_type_b_max_power_level: cdktf.numberToTerraform(this._radioTypeBMaxPowerLevel),
      radio_type_b_max_radio_clients: cdktf.numberToTerraform(this._radioTypeBMaxRadioClients),
      radio_type_b_min_power_level: cdktf.numberToTerraform(this._radioTypeBMinPowerLevel),
      radio_type_b_parent_profile: cdktf.stringToTerraform(this._radioTypeBParentProfile),
      radio_type_b_power_threshold_v1: cdktf.numberToTerraform(this._radioTypeBPowerThresholdV1),
      radio_type_b_radio_channels: cdktf.stringToTerraform(this._radioTypeBRadioChannels),
      radio_type_b_rx_sop_threshold: cdktf.stringToTerraform(this._radioTypeBRxSopThreshold),
      radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect: cdktf.booleanToTerraform(this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect),
      radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold: cdktf.numberToTerraform(this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold),
      radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect: cdktf.booleanToTerraform(this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect),
      radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold: cdktf.numberToTerraform(this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold),
      radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold: cdktf.numberToTerraform(this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold),
      radio_type_c_broadcast_probe_response_interval: cdktf.numberToTerraform(this._radioTypeCBroadcastProbeResponseInterval),
      radio_type_c_coverage_hole_detection_properties_chd_client_level: cdktf.numberToTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdClientLevel),
      radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold: cdktf.numberToTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold),
      radio_type_c_coverage_hole_detection_properties_chd_exception_level: cdktf.numberToTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel),
      radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold: cdktf.numberToTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold),
      radio_type_c_custom_rx_sop_threshold: cdktf.numberToTerraform(this._radioTypeCCustomRxSopThreshold),
      radio_type_c_data_rates: cdktf.stringToTerraform(this._radioTypeCDataRates),
      radio_type_c_discovery_frames_6ghz: cdktf.stringToTerraform(this._radioTypeCDiscoveryFrames6Ghz),
      radio_type_c_enable_standard_power_service: cdktf.booleanToTerraform(this._radioTypeCEnableStandardPowerService),
      radio_type_c_fra_properties_client_reset_count: cdktf.numberToTerraform(this._radioTypeCFraPropertiesClientResetCount),
      radio_type_c_fra_properties_client_utilization_threshold: cdktf.numberToTerraform(this._radioTypeCFraPropertiesClientUtilizationThreshold),
      radio_type_c_mandatory_data_rates: cdktf.stringToTerraform(this._radioTypeCMandatoryDataRates),
      radio_type_c_max_dbs_width: cdktf.numberToTerraform(this._radioTypeCMaxDbsWidth),
      radio_type_c_max_power_level: cdktf.numberToTerraform(this._radioTypeCMaxPowerLevel),
      radio_type_c_max_radio_clients: cdktf.numberToTerraform(this._radioTypeCMaxRadioClients),
      radio_type_c_min_dbs_width: cdktf.numberToTerraform(this._radioTypeCMinDbsWidth),
      radio_type_c_min_power_level: cdktf.numberToTerraform(this._radioTypeCMinPowerLevel),
      radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink),
      radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink),
      radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink),
      radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink),
      radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink),
      radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink),
      radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink),
      radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu),
      radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink),
      radio_type_c_multi_bssid_properties_target_wake_time: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesTargetWakeTime),
      radio_type_c_multi_bssid_properties_twt_broadcast_support: cdktf.booleanToTerraform(this._radioTypeCMultiBssidPropertiesTwtBroadcastSupport),
      radio_type_c_parent_profile: cdktf.stringToTerraform(this._radioTypeCParentProfile),
      radio_type_c_power_threshold_v1: cdktf.numberToTerraform(this._radioTypeCPowerThresholdV1),
      radio_type_c_preamble_puncture: cdktf.booleanToTerraform(this._radioTypeCPreamblePuncture),
      radio_type_c_psc_enforcing_enabled: cdktf.booleanToTerraform(this._radioTypeCPscEnforcingEnabled),
      radio_type_c_radio_channels: cdktf.stringToTerraform(this._radioTypeCRadioChannels),
      radio_type_c_rx_sop_threshold: cdktf.stringToTerraform(this._radioTypeCRxSopThreshold),
      radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect: cdktf.booleanToTerraform(this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect),
      radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold: cdktf.numberToTerraform(this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold),
      radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect: cdktf.booleanToTerraform(this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect),
      radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold: cdktf.numberToTerraform(this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold),
      radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold: cdktf.numberToTerraform(this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold),
      rf_profile_name: cdktf.stringToTerraform(this._rfProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_rf_profile: {
        value: cdktf.booleanToHclTerraform(this._defaultRfProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_radio_type6_g_hz: {
        value: cdktf.booleanToHclTerraform(this._enableRadioType6GHz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_radio_type_a: {
        value: cdktf.booleanToHclTerraform(this._enableRadioTypeA),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_radio_type_b: {
        value: cdktf.booleanToHclTerraform(this._enableRadioTypeB),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_a_channel_width: {
        value: cdktf.stringToHclTerraform(this._radioTypeAChannelWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_a_coverage_hole_detection_properties_chd_client_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdClientLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_coverage_hole_detection_properties_chd_data_rssi_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdDataRssiThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_coverage_hole_detection_properties_chd_exception_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdExceptionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_coverage_hole_detection_properties_chd_voice_rssi_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeACoverageHoleDetectionPropertiesChdVoiceRssiThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_custom_rx_sop_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeACustomRxSopThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_data_rates: {
        value: cdktf.stringToHclTerraform(this._radioTypeADataRates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_a_fra_properties_client_aware: {
        value: cdktf.booleanToHclTerraform(this._radioTypeAFraPropertiesClientAware),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_a_fra_properties_client_reset: {
        value: cdktf.numberToHclTerraform(this._radioTypeAFraPropertiesClientReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_fra_properties_client_select: {
        value: cdktf.numberToHclTerraform(this._radioTypeAFraPropertiesClientSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_mandatory_data_rates: {
        value: cdktf.stringToHclTerraform(this._radioTypeAMandatoryDataRates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_a_max_power_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeAMaxPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_max_radio_clients: {
        value: cdktf.numberToHclTerraform(this._radioTypeAMaxRadioClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_min_power_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeAMinPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_parent_profile: {
        value: cdktf.stringToHclTerraform(this._radioTypeAParentProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_a_power_threshold_v1: {
        value: cdktf.numberToHclTerraform(this._radioTypeAPowerThresholdV1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_preamble_puncture: {
        value: cdktf.booleanToHclTerraform(this._radioTypeAPreamblePuncture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_a_radio_channels: {
        value: cdktf.stringToHclTerraform(this._radioTypeARadioChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_a_rx_sop_threshold: {
        value: cdktf.stringToHclTerraform(this._radioTypeARxSopThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect: {
        value: cdktf.booleanToHclTerraform(this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_a_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeASpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect: {
        value: cdktf.booleanToHclTerraform(this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeASpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_a_zero_wait_dfs_enable: {
        value: cdktf.booleanToHclTerraform(this._radioTypeAZeroWaitDfsEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_b_coverage_hole_detection_properties_chd_client_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdClientLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_coverage_hole_detection_properties_chd_data_rssi_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdDataRssiThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_coverage_hole_detection_properties_chd_exception_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdExceptionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_coverage_hole_detection_properties_chd_voice_rssi_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeBCoverageHoleDetectionPropertiesChdVoiceRssiThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_custom_rx_sop_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeBCustomRxSopThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_data_rates: {
        value: cdktf.stringToHclTerraform(this._radioTypeBDataRates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_b_mandatory_data_rates: {
        value: cdktf.stringToHclTerraform(this._radioTypeBMandatoryDataRates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_b_max_power_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeBMaxPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_max_radio_clients: {
        value: cdktf.numberToHclTerraform(this._radioTypeBMaxRadioClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_min_power_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeBMinPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_parent_profile: {
        value: cdktf.stringToHclTerraform(this._radioTypeBParentProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_b_power_threshold_v1: {
        value: cdktf.numberToHclTerraform(this._radioTypeBPowerThresholdV1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_radio_channels: {
        value: cdktf.stringToHclTerraform(this._radioTypeBRadioChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_b_rx_sop_threshold: {
        value: cdktf.stringToHclTerraform(this._radioTypeBRxSopThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect: {
        value: cdktf.booleanToHclTerraform(this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_b_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeBSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect: {
        value: cdktf.booleanToHclTerraform(this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_b_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeBSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_broadcast_probe_response_interval: {
        value: cdktf.numberToHclTerraform(this._radioTypeCBroadcastProbeResponseInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_coverage_hole_detection_properties_chd_client_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdClientLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_coverage_hole_detection_properties_chd_data_rssi_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdDataRssiThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_coverage_hole_detection_properties_chd_exception_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdExceptionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_coverage_hole_detection_properties_chd_voice_rssi_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeCCoverageHoleDetectionPropertiesChdVoiceRssiThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_custom_rx_sop_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeCCustomRxSopThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_data_rates: {
        value: cdktf.stringToHclTerraform(this._radioTypeCDataRates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_c_discovery_frames_6ghz: {
        value: cdktf.stringToHclTerraform(this._radioTypeCDiscoveryFrames6Ghz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_c_enable_standard_power_service: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCEnableStandardPowerService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_fra_properties_client_reset_count: {
        value: cdktf.numberToHclTerraform(this._radioTypeCFraPropertiesClientResetCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_fra_properties_client_utilization_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeCFraPropertiesClientUtilizationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_mandatory_data_rates: {
        value: cdktf.stringToHclTerraform(this._radioTypeCMandatoryDataRates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_c_max_dbs_width: {
        value: cdktf.numberToHclTerraform(this._radioTypeCMaxDbsWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_max_power_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeCMaxPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_max_radio_clients: {
        value: cdktf.numberToHclTerraform(this._radioTypeCMaxRadioClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_min_dbs_width: {
        value: cdktf.numberToHclTerraform(this._radioTypeCMinDbsWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_min_power_level: {
        value: cdktf.numberToHclTerraform(this._radioTypeCMinPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_down_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoDownLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11ax_parameters_mu_mimo_up_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersMuMimoUpLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_down_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaDownLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11ax_parameters_ofdma_up_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11AxParametersOfdmaUpLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_down_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoDownLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11be_parameters_mu_mimo_up_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersMuMimoUpLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_down_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaDownLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_multi_ru: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaMultiRu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_dot11be_parameters_ofdma_up_link: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesDot11BeParametersOfdmaUpLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_target_wake_time: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesTargetWakeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_multi_bssid_properties_twt_broadcast_support: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCMultiBssidPropertiesTwtBroadcastSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_parent_profile: {
        value: cdktf.stringToHclTerraform(this._radioTypeCParentProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_c_power_threshold_v1: {
        value: cdktf.numberToHclTerraform(this._radioTypeCPowerThresholdV1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_preamble_puncture: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCPreamblePuncture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_psc_enforcing_enabled: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCPscEnforcingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_radio_channels: {
        value: cdktf.stringToHclTerraform(this._radioTypeCRadioChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_c_rx_sop_threshold: {
        value: cdktf.stringToHclTerraform(this._radioTypeCRxSopThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_spatial_reuse_properties_dot11ax_non_srg_obss_packet_detect_max_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeCSpatialReusePropertiesDot11AxNonSrgObssPacketDetectMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect: {
        value: cdktf.booleanToHclTerraform(this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_max_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radio_type_c_spatial_reuse_properties_dot11ax_srg_obss_packet_detect_min_threshold: {
        value: cdktf.numberToHclTerraform(this._radioTypeCSpatialReusePropertiesDot11AxSrgObssPacketDetectMinThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
