// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightBiosPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#account_moid DataIntersightBiosPolicy#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * BIOS Token for setting ACPI SRAT Special Purpose Memory Flag configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acpi_srat_sp_flag_en DataIntersightBiosPolicy#acpi_srat_sp_flag_en}
  */
  readonly acpiSratSpFlagEn?: string;
  /**
  * BIOS Token for setting ACS Control GPU 1 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu1state DataIntersightBiosPolicy#acs_control_gpu1state}
  */
  readonly acsControlGpu1State?: string;
  /**
  * BIOS Token for setting ACS Control GPU 2 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu2state DataIntersightBiosPolicy#acs_control_gpu2state}
  */
  readonly acsControlGpu2State?: string;
  /**
  * BIOS Token for setting ACS Control GPU 3 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu3state DataIntersightBiosPolicy#acs_control_gpu3state}
  */
  readonly acsControlGpu3State?: string;
  /**
  * BIOS Token for setting ACS Control GPU 4 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu4state DataIntersightBiosPolicy#acs_control_gpu4state}
  */
  readonly acsControlGpu4State?: string;
  /**
  * BIOS Token for setting ACS Control GPU 5 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu5state DataIntersightBiosPolicy#acs_control_gpu5state}
  */
  readonly acsControlGpu5State?: string;
  /**
  * BIOS Token for setting ACS Control GPU 6 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu6state DataIntersightBiosPolicy#acs_control_gpu6state}
  */
  readonly acsControlGpu6State?: string;
  /**
  * BIOS Token for setting ACS Control GPU 7 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu7state DataIntersightBiosPolicy#acs_control_gpu7state}
  */
  readonly acsControlGpu7State?: string;
  /**
  * BIOS Token for setting ACS Control GPU 8 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_gpu8state DataIntersightBiosPolicy#acs_control_gpu8state}
  */
  readonly acsControlGpu8State?: string;
  /**
  * BIOS Token for setting ACS Control Slot 11 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_slot11state DataIntersightBiosPolicy#acs_control_slot11state}
  */
  readonly acsControlSlot11State?: string;
  /**
  * BIOS Token for setting ACS Control Slot 12 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_slot12state DataIntersightBiosPolicy#acs_control_slot12state}
  */
  readonly acsControlSlot12State?: string;
  /**
  * BIOS Token for setting ACS Control Slot 13 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_slot13state DataIntersightBiosPolicy#acs_control_slot13state}
  */
  readonly acsControlSlot13State?: string;
  /**
  * BIOS Token for setting ACS Control Slot 14 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#acs_control_slot14state DataIntersightBiosPolicy#acs_control_slot14state}
  */
  readonly acsControlSlot14State?: string;
  /**
  * BIOS Token for setting Adaptive Refresh Management Level configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Default` - Value - Default for configuring AdaptiveRefreshMgmtLevel token.
  * * `Level A` - Value - Level A for configuring AdaptiveRefreshMgmtLevel token.
  * * `Level B` - Value - Level B for configuring AdaptiveRefreshMgmtLevel token.
  * * `Level C` - Value - Level C for configuring AdaptiveRefreshMgmtLevel token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#adaptive_refresh_mgmt_level DataIntersightBiosPolicy#adaptive_refresh_mgmt_level}
  */
  readonly adaptiveRefreshMgmtLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * BIOS Token for setting Adjacent Cache Line Prefetcher configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#adjacent_cache_line_prefetch DataIntersightBiosPolicy#adjacent_cache_line_prefetch}
  */
  readonly adjacentCacheLinePrefetch?: string;
  /**
  * BIOS Token for setting Enhanced Memory Test configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring AdvancedMemTest token.
  * * `disabled` - Value - disabled for configuring AdvancedMemTest token.
  * * `enabled` - Value - enabled for configuring AdvancedMemTest token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#advanced_mem_test DataIntersightBiosPolicy#advanced_mem_test}
  */
  readonly advancedMemTest?: string;
  /**
  * BIOS Token for setting All USB Devices configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#all_usb_devices DataIntersightBiosPolicy#all_usb_devices}
  */
  readonly allUsbDevices?: string;
  /**
  * BIOS Token for setting Altitude configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `300-m` - Value - 300-m for configuring Altitude token.
  * * `900-m` - Value - 900-m for configuring Altitude token.
  * * `1500-m` - Value - 1500-m for configuring Altitude token.
  * * `3000-m` - Value - 3000-m for configuring Altitude token.
  * * `auto` - Value - auto for configuring Altitude token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#altitude DataIntersightBiosPolicy#altitude}
  */
  readonly altitude?: string;
  /**
  * BIOS Token for setting ASPM Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring AspmSupport token.
  * * `Disabled` - Value - Disabled for configuring AspmSupport token.
  * * `Force L0s` - Value - Force L0s for configuring AspmSupport token.
  * * `L1 Only` - Value - L1 Only for configuring AspmSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#aspm_support DataIntersightBiosPolicy#aspm_support}
  */
  readonly aspmSupport?: string;
  /**
  * BIOS Token for setting Assert NMI on PERR configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#assert_nmi_on_perr DataIntersightBiosPolicy#assert_nmi_on_perr}
  */
  readonly assertNmiOnPerr?: string;
  /**
  * BIOS Token for setting Assert NMI on SERR configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#assert_nmi_on_serr DataIntersightBiosPolicy#assert_nmi_on_serr}
  */
  readonly assertNmiOnSerr?: string;
  /**
  * BIOS Token for setting Autonomous Core C State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#auto_cc_state DataIntersightBiosPolicy#auto_cc_state}
  */
  readonly autoCcState?: string;
  /**
  * BIOS Token for setting CPU Autonomous C State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#autonumous_cstate_enable DataIntersightBiosPolicy#autonumous_cstate_enable}
  */
  readonly autonumousCstateEnable?: string;
  /**
  * BIOS Token for setting Baud Rate configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `9600` - Value - 9600 for configuring BaudRate token.
  * * `19200` - Value - 19200 for configuring BaudRate token.
  * * `38400` - Value - 38400 for configuring BaudRate token.
  * * `57600` - Value - 57600 for configuring BaudRate token.
  * * `115200` - Value - 115200 for configuring BaudRate token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#baud_rate DataIntersightBiosPolicy#baud_rate}
  */
  readonly baudRate?: string;
  /**
  * BIOS Token for setting BME DMA Mitigation configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#bme_dma_mitigation DataIntersightBiosPolicy#bme_dma_mitigation}
  */
  readonly bmeDmaMitigation?: string;
  /**
  * BIOS Token for setting Number of Retries configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `5` - Value - 5 for configuring BootOptionNumRetry token.
  * * `13` - Value - 13 for configuring BootOptionNumRetry token.
  * * `Infinite` - Value - Infinite for configuring BootOptionNumRetry token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#boot_option_num_retry DataIntersightBiosPolicy#boot_option_num_retry}
  */
  readonly bootOptionNumRetry?: string;
  /**
  * BIOS Token for setting Cool Down Time  (sec) configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `15` - Value - 15 for configuring BootOptionReCoolDown token.
  * * `45` - Value - 45 for configuring BootOptionReCoolDown token.
  * * `90` - Value - 90 for configuring BootOptionReCoolDown token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#boot_option_re_cool_down DataIntersightBiosPolicy#boot_option_re_cool_down}
  */
  readonly bootOptionReCoolDown?: string;
  /**
  * BIOS Token for setting Boot Option Retry configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#boot_option_retry DataIntersightBiosPolicy#boot_option_retry}
  */
  readonly bootOptionRetry?: string;
  /**
  * BIOS Token for setting Boot Performance Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Max Efficient` - Value - Max Efficient for configuring BootPerformanceMode token.
  * * `Max Performance` - Value - Max Performance for configuring BootPerformanceMode token.
  * * `Set by Intel NM` - Value - Set by Intel NM for configuring BootPerformanceMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#boot_performance_mode DataIntersightBiosPolicy#boot_performance_mode}
  */
  readonly bootPerformanceMode?: string;
  /**
  * BIOS Token for setting Burst and Postponed Refresh configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#burst_and_postponed_refresh DataIntersightBiosPolicy#burst_and_postponed_refresh}
  */
  readonly burstAndPostponedRefresh?: string;
  /**
  * BIOS Token for setting C1 Auto Demotion configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring C1autoDemotion token.
  * * `disabled` - Value - disabled for configuring C1autoDemotion token.
  * * `enabled` - Value - enabled for configuring C1autoDemotion token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#c1auto_demotion DataIntersightBiosPolicy#c1auto_demotion}
  */
  readonly c1AutoDemotion?: string;
  /**
  * BIOS Token for setting C1 Auto UnDemotion configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring C1autoUnDemotion token.
  * * `disabled` - Value - disabled for configuring C1autoUnDemotion token.
  * * `enabled` - Value - enabled for configuring C1autoUnDemotion token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#c1auto_un_demotion DataIntersightBiosPolicy#c1auto_un_demotion}
  */
  readonly c1AutoUnDemotion?: string;
  /**
  * BIOS Token for setting APBDIS configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `0` - Value - 0 for configuring CbsCmnApbdis token.
  * * `1` - Value - 1 for configuring CbsCmnApbdis token.
  * * `Auto` - Value - Auto for configuring CbsCmnApbdis token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_apbdis DataIntersightBiosPolicy#cbs_cmn_apbdis}
  */
  readonly cbsCmnApbdis?: string;
  /**
  * BIOS Token for setting Fixed SOC P-State SP5 F19h configuration (0 - 2 P State).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_apbdis_df_pstate_rs DataIntersightBiosPolicy#cbs_cmn_apbdis_df_pstate_rs}
  */
  readonly cbsCmnApbdisDfPstateRs?: string;
  /**
  * BIOS Token for setting AVX512 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuAvx512 token.
  * * `disabled` - Value - disabled for configuring CbsCmnCpuAvx512 token.
  * * `enabled` - Value - enabled for configuring CbsCmnCpuAvx512 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_avx512 DataIntersightBiosPolicy#cbs_cmn_cpu_avx512}
  */
  readonly cbsCmnCpuAvx512?: string;
  /**
  * BIOS Token for setting Core Performance Boost configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuCpb token.
  * * `disabled` - Value - disabled for configuring CbsCmnCpuCpb token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_cpb DataIntersightBiosPolicy#cbs_cmn_cpu_cpb}
  */
  readonly cbsCmnCpuCpb?: string;
  /**
  * BIOS Token for setting Downcore Control configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuGenDowncoreCtrl token.
  * * `TWO (1 + 1)` - Value - TWO (1 + 1) for configuring CbsCmnCpuGenDowncoreCtrl token.
  * * `FOUR (2 + 2)` - Value - FOUR (2 + 2) for configuring CbsCmnCpuGenDowncoreCtrl token.
  * * `TWO (2 + 0)` - Value - TWO (2 + 0) for configuring CbsCmnCpuGenDowncoreCtrl token.
  * * `SIX (3 + 3)` - Value - SIX (3 + 3) for configuring CbsCmnCpuGenDowncoreCtrl token.
  * * `THREE (3 + 0)` - Value - THREE (3 + 0) for configuring CbsCmnCpuGenDowncoreCtrl token.
  * * `FOUR (4 + 0)` - Value - FOUR (4 + 0) for configuring CbsCmnCpuGenDowncoreCtrl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_gen_downcore_ctrl DataIntersightBiosPolicy#cbs_cmn_cpu_gen_downcore_ctrl}
  */
  readonly cbsCmnCpuGenDowncoreCtrl?: string;
  /**
  * BIOS Token for setting Global C State Control configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuGlobalCstateCtrl token.
  * * `disabled` - Value - disabled for configuring CbsCmnCpuGlobalCstateCtrl token.
  * * `enabled` - Value - enabled for configuring CbsCmnCpuGlobalCstateCtrl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_global_cstate_ctrl DataIntersightBiosPolicy#cbs_cmn_cpu_global_cstate_ctrl}
  */
  readonly cbsCmnCpuGlobalCstateCtrl?: string;
  /**
  * BIOS Token for setting L1 Stream HW Prefetcher configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuL1streamHwPrefetcher token.
  * * `disabled` - Value - disabled for configuring CbsCmnCpuL1streamHwPrefetcher token.
  * * `enabled` - Value - enabled for configuring CbsCmnCpuL1streamHwPrefetcher token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_l1stream_hw_prefetcher DataIntersightBiosPolicy#cbs_cmn_cpu_l1stream_hw_prefetcher}
  */
  readonly cbsCmnCpuL1StreamHwPrefetcher?: string;
  /**
  * BIOS Token for setting L2 Stream HW Prefetcher configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuL2streamHwPrefetcher token.
  * * `disabled` - Value - disabled for configuring CbsCmnCpuL2streamHwPrefetcher token.
  * * `enabled` - Value - enabled for configuring CbsCmnCpuL2streamHwPrefetcher token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_l2stream_hw_prefetcher DataIntersightBiosPolicy#cbs_cmn_cpu_l2stream_hw_prefetcher}
  */
  readonly cbsCmnCpuL2StreamHwPrefetcher?: string;
  /**
  * BIOS Token for setting SEV-ES ASID Space Limit configuration (1 - 1007 ASIDs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_sev_asid_space_limit DataIntersightBiosPolicy#cbs_cmn_cpu_sev_asid_space_limit}
  */
  readonly cbsCmnCpuSevAsidSpaceLimit?: string;
  /**
  * BIOS Token for setting CPU SMEE configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuSmee token.
  * * `disabled` - Value - disabled for configuring CbsCmnCpuSmee token.
  * * `enabled` - Value - enabled for configuring CbsCmnCpuSmee token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_smee DataIntersightBiosPolicy#cbs_cmn_cpu_smee}
  */
  readonly cbsCmnCpuSmee?: string;
  /**
  * BIOS Token for setting Streaming Stores Control configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnCpuStreamingStoresCtrl token.
  * * `disabled` - Value - disabled for configuring CbsCmnCpuStreamingStoresCtrl token.
  * * `enabled` - Value - enabled for configuring CbsCmnCpuStreamingStoresCtrl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_cpu_streaming_stores_ctrl DataIntersightBiosPolicy#cbs_cmn_cpu_streaming_stores_ctrl}
  */
  readonly cbsCmnCpuStreamingStoresCtrl?: string;
  /**
  * BIOS Token for setting Determinism Slider configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnDeterminismSlider token.
  * * `Performance` - Value - Performance for configuring CbsCmnDeterminismSlider token.
  * * `Power` - Value - Power for configuring CbsCmnDeterminismSlider token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_determinism_slider DataIntersightBiosPolicy#cbs_cmn_determinism_slider}
  */
  readonly cbsCmnDeterminismSlider?: string;
  /**
  * BIOS Token for setting EDC Control Throttle configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnEdcControlThrottle token.
  * * `disabled` - Value - disabled for configuring CbsCmnEdcControlThrottle token.
  * * `enabled` - Value - enabled for configuring CbsCmnEdcControlThrottle token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_edc_control_throttle DataIntersightBiosPolicy#cbs_cmn_edc_control_throttle}
  */
  readonly cbsCmnEdcControlThrottle?: string;
  /**
  * BIOS Token for setting Efficiency Mode Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnEfficiencyModeEn token.
  * * `Enabled` - Value - Enabled for configuring CbsCmnEfficiencyModeEn token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_efficiency_mode_en DataIntersightBiosPolicy#cbs_cmn_efficiency_mode_en}
  */
  readonly cbsCmnEfficiencyModeEn?: string;
  /**
  * BIOS Token for setting Power Profile Selection F19h configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnEfficiencyModeEnRs token.
  * * `Balanced Core Memory Performance Mode` - Value - Balanced Core Memory Performance Mode for configuring CbsCmnEfficiencyModeEnRs token.
  * * `Balanced Core Performance Mode` - Value - Balanced Core Performance Mode for configuring CbsCmnEfficiencyModeEnRs token.
  * * `Balanced Memory Performance Mode` - Value - Balanced Memory Performance Mode for configuring CbsCmnEfficiencyModeEnRs token.
  * * `Efficiency Mode` - Value - Efficiency Mode for configuring CbsCmnEfficiencyModeEnRs token.
  * * `High Performance Mode` - Value - High Performance Mode for configuring CbsCmnEfficiencyModeEnRs token.
  * * `Maximum IO Performance Mode` - Value - Maximum IO Performance Mode for configuring CbsCmnEfficiencyModeEnRs token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_efficiency_mode_en_rs DataIntersightBiosPolicy#cbs_cmn_efficiency_mode_en_rs}
  */
  readonly cbsCmnEfficiencyModeEnRs?: string;
  /**
  * BIOS Token for setting Fixed SOC P-State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnFixedSocPstate token.
  * * `P0` - Value - P0 for configuring CbsCmnFixedSocPstate token.
  * * `P1` - Value - P1 for configuring CbsCmnFixedSocPstate token.
  * * `P2` - Value - P2 for configuring CbsCmnFixedSocPstate token.
  * * `P3` - Value - P3 for configuring CbsCmnFixedSocPstate token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_fixed_soc_pstate DataIntersightBiosPolicy#cbs_cmn_fixed_soc_pstate}
  */
  readonly cbsCmnFixedSocPstate?: string;
  /**
  * BIOS Token for setting IOMMU configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnGnbNbIommu token.
  * * `disabled` - Value - disabled for configuring CbsCmnGnbNbIommu token.
  * * `enabled` - Value - enabled for configuring CbsCmnGnbNbIommu token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_gnb_nb_iommu DataIntersightBiosPolicy#cbs_cmn_gnb_nb_iommu}
  */
  readonly cbsCmnGnbNbIommu?: string;
  /**
  * BIOS Token for setting DF C-States configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnGnbSmuDfCstates token.
  * * `disabled` - Value - disabled for configuring CbsCmnGnbSmuDfCstates token.
  * * `enabled` - Value - enabled for configuring CbsCmnGnbSmuDfCstates token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_gnb_smu_df_cstates DataIntersightBiosPolicy#cbs_cmn_gnb_smu_df_cstates}
  */
  readonly cbsCmnGnbSmuDfCstates?: string;
  /**
  * BIOS Token for setting DF PState Frequency Optimizer configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnGnbSmuDffoRs token.
  * * `disabled` - Value - disabled for configuring CbsCmnGnbSmuDffoRs token.
  * * `enabled` - Value - enabled for configuring CbsCmnGnbSmuDffoRs token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_gnb_smu_dffo_rs DataIntersightBiosPolicy#cbs_cmn_gnb_smu_dffo_rs}
  */
  readonly cbsCmnGnbSmuDffoRs?: string;
  /**
  * BIOS Token for setting DLWM Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnGnbSmuDlwmSupport token.
  * * `disabled` - Value - disabled for configuring CbsCmnGnbSmuDlwmSupport token.
  * * `enabled` - Value - enabled for configuring CbsCmnGnbSmuDlwmSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_gnb_smu_dlwm_support DataIntersightBiosPolicy#cbs_cmn_gnb_smu_dlwm_support}
  */
  readonly cbsCmnGnbSmuDlwmSupport?: string;
  /**
  * BIOS Token for setting CPPC configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnGnbSmucppc token.
  * * `disabled` - Value - disabled for configuring CbsCmnGnbSmucppc token.
  * * `enabled` - Value - enabled for configuring CbsCmnGnbSmucppc token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_gnb_smucppc DataIntersightBiosPolicy#cbs_cmn_gnb_smucppc}
  */
  readonly cbsCmnGnbSmucppc?: string;
  /**
  * BIOS Token for setting Bank Group Swap configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnMemCtrlBankGroupSwapDdr4 token.
  * * `disabled` - Value - disabled for configuring CbsCmnMemCtrlBankGroupSwapDdr4 token.
  * * `enabled` - Value - enabled for configuring CbsCmnMemCtrlBankGroupSwapDdr4 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_mem_ctrl_bank_group_swap_ddr4 DataIntersightBiosPolicy#cbs_cmn_mem_ctrl_bank_group_swap_ddr4}
  */
  readonly cbsCmnMemCtrlBankGroupSwapDdr4?: string;
  /**
  * BIOS Token for setting Power Down Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnMemCtrllerPwrDnEnDdr token.
  * * `disabled` - Value - disabled for configuring CbsCmnMemCtrllerPwrDnEnDdr token.
  * * `enabled` - Value - enabled for configuring CbsCmnMemCtrllerPwrDnEnDdr token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_mem_ctrller_pwr_dn_en_ddr DataIntersightBiosPolicy#cbs_cmn_mem_ctrller_pwr_dn_en_ddr}
  */
  readonly cbsCmnMemCtrllerPwrDnEnDdr?: string;
  /**
  * BIOS Token for setting Chipset Interleave configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnMemMapBankInterleaveDdr4 token.
  * * `disabled` - Value - disabled for configuring CbsCmnMemMapBankInterleaveDdr4 token.
  * * `Enabled` - Value - Enabled for configuring CbsCmnMemMapBankInterleaveDdr4 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_mem_map_bank_interleave_ddr4 DataIntersightBiosPolicy#cbs_cmn_mem_map_bank_interleave_ddr4}
  */
  readonly cbsCmnMemMapBankInterleaveDdr4?: string;
  /**
  * BIOS Token for setting Memory Clock Speed 7xx2 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `667MHz` - Value - 667MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `800MHz` - Value - 800MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `933MHz` - Value - 933MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `1067MHz` - Value - 1067MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `1200MHz` - Value - 1200MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `1333MHz` - Value - 1333MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `1467MHz` - Value - 1467MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `1600MHz` - Value - 1600MHz for configuring CbsCmnMemSpeedDdr47xx2 token.
  * * `Auto` - Value - Auto for configuring CbsCmnMemSpeedDdr47xx2 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_mem_speed_ddr47xx2 DataIntersightBiosPolicy#cbs_cmn_mem_speed_ddr47xx2}
  */
  readonly cbsCmnMemSpeedDdr47Xx2?: string;
  /**
  * BIOS Token for setting Memory Clock Speed 7xx3 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `400MHz` - Value - 400MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `800MHz` - Value - 800MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `933MHz` - Value - 933MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1067MHz` - Value - 1067MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1200MHz` - Value - 1200MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1333MHz` - Value - 1333MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1467MHz` - Value - 1467MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1600MHz` - Value - 1600MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1633MHz` - Value - 1633MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1667MHz` - Value - 1667MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1700MHz` - Value - 1700MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1733MHz` - Value - 1733MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1767MHz` - Value - 1767MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `1800MHz` - Value - 1800MHz for configuring CbsCmnMemSpeedDdr47xx3 token.
  * * `Auto` - Value - Auto for configuring CbsCmnMemSpeedDdr47xx3 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_mem_speed_ddr47xx3 DataIntersightBiosPolicy#cbs_cmn_mem_speed_ddr47xx3}
  */
  readonly cbsCmnMemSpeedDdr47Xx3?: string;
  /**
  * BIOS Token for setting Preferred IO 7xx2 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnPreferredIo7xx2 token.
  * * `Manual` - Value - Manual for configuring CbsCmnPreferredIo7xx2 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_preferred_io7xx2 DataIntersightBiosPolicy#cbs_cmn_preferred_io7xx2}
  */
  readonly cbsCmnPreferredIo7Xx2?: string;
  /**
  * BIOS Token for setting Preferred IO 7xx3 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmnPreferredIo7xx3 token.
  * * `Bus` - Value - Bus for configuring CbsCmnPreferredIo7xx3 token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmn_preferred_io7xx3 DataIntersightBiosPolicy#cbs_cmn_preferred_io7xx3}
  */
  readonly cbsCmnPreferredIo7Xx3?: string;
  /**
  * BIOS Token for setting cTDP Control configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCmncTdpCtl token.
  * * `Manual` - Value - Manual for configuring CbsCmncTdpCtl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmnc_tdp_ctl DataIntersightBiosPolicy#cbs_cmnc_tdp_ctl}
  */
  readonly cbsCmncTdpCtl?: string;
  /**
  * BIOS Token for setting xGMI Force Link Width configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `0` - Value - 0 for configuring CbsCmnxGmiForceLinkWidthRs token.
  * * `1` - Value - 1 for configuring CbsCmnxGmiForceLinkWidthRs token.
  * * `2` - Value - 2 for configuring CbsCmnxGmiForceLinkWidthRs token.
  * * `Auto` - Value - Auto for configuring CbsCmnxGmiForceLinkWidthRs token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cmnx_gmi_force_link_width_rs DataIntersightBiosPolicy#cbs_cmnx_gmi_force_link_width_rs}
  */
  readonly cbsCmnxGmiForceLinkWidthRs?: string;
  /**
  * BIOS Token for setting CCD Control configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `2 CCDs` - Value - 2 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `3 CCDs` - Value - 3 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `4 CCDs` - Value - 4 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `6 CCDs` - Value - 6 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `8 CCDs` - Value - 8 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `10 CCDs` - Value - 10 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `12 CCDs` - Value - 12 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `14 CCDs` - Value - 14 CCDs for configuring CbsCpuCcdCtrlSsp token.
  * * `Auto` - Value - Auto for configuring CbsCpuCcdCtrlSsp token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cpu_ccd_ctrl_ssp DataIntersightBiosPolicy#cbs_cpu_ccd_ctrl_ssp}
  */
  readonly cbsCpuCcdCtrlSsp?: string;
  /**
  * BIOS Token for setting CPU Downcore control 7xx3 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCpuCoreCtrl token.
  * * `ONE (1 + 0)` - Value - ONE (1 + 0) for configuring CbsCpuCoreCtrl token.
  * * `TWO (2 + 0)` - Value - TWO (2 + 0) for configuring CbsCpuCoreCtrl token.
  * * `THREE (3 + 0)` - Value - THREE (3 + 0) for configuring CbsCpuCoreCtrl token.
  * * `FOUR (4 + 0)` - Value - FOUR (4 + 0) for configuring CbsCpuCoreCtrl token.
  * * `FIVE (5 + 0)` - Value - FIVE (5 + 0) for configuring CbsCpuCoreCtrl token.
  * * `SIX (6 + 0)` - Value - SIX (6 + 0) for configuring CbsCpuCoreCtrl token.
  * * `SEVEN (7 + 0)` - Value - SEVEN (7 + 0) for configuring CbsCpuCoreCtrl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cpu_core_ctrl DataIntersightBiosPolicy#cbs_cpu_core_ctrl}
  */
  readonly cbsCpuCoreCtrl?: string;
  /**
  * BIOS Token for setting Downcore control F19 MA0h-AFh configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCpuDownCoreCtrlBergamo token.
  * * `TWO (1 + 1)` - Value - TWO (1 + 1) for configuring CbsCpuDownCoreCtrlBergamo token.
  * * `FOUR (2 + 2)` - Value - FOUR (2 + 2) for configuring CbsCpuDownCoreCtrlBergamo token.
  * * `SIX (3 + 3)` - Value - SIX (3 + 3) for configuring CbsCpuDownCoreCtrlBergamo token.
  * * `EIGHT (4 + 4)` - Value - EIGHT (4 + 4) for configuring CbsCpuDownCoreCtrlBergamo token.
  * * `TEN (5 + 5)` - Value - TEN (5 + 5) for configuring CbsCpuDownCoreCtrlBergamo token.
  * * `TWELVE (6 + 6)` - Value - TWELVE (6 + 6) for configuring CbsCpuDownCoreCtrlBergamo token.
  * * `FOURTEEN (7 + 7)` - Value - FOURTEEN (7 + 7) for configuring CbsCpuDownCoreCtrlBergamo token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cpu_down_core_ctrl_bergamo DataIntersightBiosPolicy#cbs_cpu_down_core_ctrl_bergamo}
  */
  readonly cbsCpuDownCoreCtrlBergamo?: string;
  /**
  * BIOS Token for setting CPU Downcore control F19 M10h-1Fh configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `ONE (1 + 0)` - Value - ONE (1 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `TWO (2 + 0)` - Value - TWO (2 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `THREE (3 + 0)` - Value - THREE (3 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `FOUR (4 + 0)` - Value - FOUR (4 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `FIVE (5 + 0)` - Value - FIVE (5 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `SIX (6 + 0)` - Value - SIX (6 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `SEVEN (7 + 0)` - Value - SEVEN (7 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `EIGHT (8 + 0)` - Value - EIGHT (8 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `NINE (9 + 0)` - Value - NINE (9 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `TEN (10 + 0)` - Value - TEN (10 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `ELEVEN (11 + 0)` - Value - ELEVEN (11 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `TWELVE (12 + 0)` - Value - TWELVE (12 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `THIRTEEN (13 + 0)` - Value - THIRTEEN (13 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `FOURTEEN (14 + 0)` - Value - FOURTEEN (14 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  * * `FIFTEEN (15 + 0)` - Value - FIFTEEN (15 + 0) for configuring CbsCpuDownCoreCtrlGenoa token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cpu_down_core_ctrl_genoa DataIntersightBiosPolicy#cbs_cpu_down_core_ctrl_genoa}
  */
  readonly cbsCpuDownCoreCtrlGenoa?: string;
  /**
  * BIOS Token for setting CPU SMT Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsCpuSmtCtrl token.
  * * `disabled` - Value - disabled for configuring CbsCpuSmtCtrl token.
  * * `enabled` - Value - enabled for configuring CbsCpuSmtCtrl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_cpu_smt_ctrl DataIntersightBiosPolicy#cbs_cpu_smt_ctrl}
  */
  readonly cbsCpuSmtCtrl?: string;
  /**
  * BIOS Token for setting Core Watchdog Timer Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsDbgCpuGenCpuWdt token.
  * * `disabled` - Value - disabled for configuring CbsDbgCpuGenCpuWdt token.
  * * `enabled` - Value - enabled for configuring CbsDbgCpuGenCpuWdt token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_dbg_cpu_gen_cpu_wdt DataIntersightBiosPolicy#cbs_dbg_cpu_gen_cpu_wdt}
  */
  readonly cbsDbgCpuGenCpuWdt?: string;
  /**
  * BIOS Token for setting Local APIC Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsDbgCpuLapicMode token.
  * * `Compatibility` - Value - Compatibility for configuring CbsDbgCpuLapicMode token.
  * * `X2APIC` - Value - X2APIC for configuring CbsDbgCpuLapicMode token.
  * * `XAPIC` - Value - XAPIC for configuring CbsDbgCpuLapicMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_dbg_cpu_lapic_mode DataIntersightBiosPolicy#cbs_dbg_cpu_lapic_mode}
  */
  readonly cbsDbgCpuLapicMode?: string;
  /**
  * BIOS Token for setting SNP Memory Coverage configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsDbgCpuSnpMemCover token.
  * * `Custom` - Value - Custom for configuring CbsDbgCpuSnpMemCover token.
  * * `disabled` - Value - disabled for configuring CbsDbgCpuSnpMemCover token.
  * * `enabled` - Value - enabled for configuring CbsDbgCpuSnpMemCover token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_dbg_cpu_snp_mem_cover DataIntersightBiosPolicy#cbs_dbg_cpu_snp_mem_cover}
  */
  readonly cbsDbgCpuSnpMemCover?: string;
  /**
  * BIOS Token for setting SNP Memory Size to Cover in MiB configuration (0 - 1048576 MiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_dbg_cpu_snp_mem_size_cover DataIntersightBiosPolicy#cbs_dbg_cpu_snp_mem_size_cover}
  */
  readonly cbsDbgCpuSnpMemSizeCover?: string;
  /**
  * BIOS Token for setting 4-link xGMI max speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `20Gbps` - Value - 20Gbps for configuring CbsDfCmn4linkMaxXgmiSpeed token.
  * * `25Gbps` - Value - 25Gbps for configuring CbsDfCmn4linkMaxXgmiSpeed token.
  * * `32Gbps` - Value - 32Gbps for configuring CbsDfCmn4linkMaxXgmiSpeed token.
  * * `Auto` - Value - Auto for configuring CbsDfCmn4linkMaxXgmiSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_cmn4link_max_xgmi_speed DataIntersightBiosPolicy#cbs_df_cmn4link_max_xgmi_speed}
  */
  readonly cbsDfCmn4LinkMaxXgmiSpeed?: string;
  /**
  * BIOS Token for setting ACPI SRAT L3 Cache As NUMA Domain configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsDfCmnAcpiSratL3numa token.
  * * `disabled` - Value - disabled for configuring CbsDfCmnAcpiSratL3numa token.
  * * `enabled` - Value - enabled for configuring CbsDfCmnAcpiSratL3numa token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_cmn_acpi_srat_l3numa DataIntersightBiosPolicy#cbs_df_cmn_acpi_srat_l3numa}
  */
  readonly cbsDfCmnAcpiSratL3Numa?: string;
  /**
  * BIOS Token for setting NUMA Nodes per Socket configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsDfCmnDramNps token.
  * * `NPS0` - Value - NPS0 for configuring CbsDfCmnDramNps token.
  * * `NPS1` - Value - NPS1 for configuring CbsDfCmnDramNps token.
  * * `NPS2` - Value - NPS2 for configuring CbsDfCmnDramNps token.
  * * `NPS4` - Value - NPS4 for configuring CbsDfCmnDramNps token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_cmn_dram_nps DataIntersightBiosPolicy#cbs_df_cmn_dram_nps}
  */
  readonly cbsDfCmnDramNps?: string;
  /**
  * BIOS Token for setting DRAM Scrub Time configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1 hour` - Value - 1 hour for configuring CbsDfCmnDramScrubTime token.
  * * `4 hours` - Value - 4 hours for configuring CbsDfCmnDramScrubTime token.
  * * `6 hours` - Value - 6 hours for configuring CbsDfCmnDramScrubTime token.
  * * `8 hours` - Value - 8 hours for configuring CbsDfCmnDramScrubTime token.
  * * `12 hours` - Value - 12 hours for configuring CbsDfCmnDramScrubTime token.
  * * `16 hours` - Value - 16 hours for configuring CbsDfCmnDramScrubTime token.
  * * `24 hours` - Value - 24 hours for configuring CbsDfCmnDramScrubTime token.
  * * `48 hours` - Value - 48 hours for configuring CbsDfCmnDramScrubTime token.
  * * `Auto` - Value - Auto for configuring CbsDfCmnDramScrubTime token.
  * * `Disabled` - Value - Disabled for configuring CbsDfCmnDramScrubTime token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_cmn_dram_scrub_time DataIntersightBiosPolicy#cbs_df_cmn_dram_scrub_time}
  */
  readonly cbsDfCmnDramScrubTime?: string;
  /**
  * BIOS Token for setting AMD Memory Interleaving configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsDfCmnMemIntlv token.
  * * `Channel` - Value - Channel for configuring CbsDfCmnMemIntlv token.
  * * `Die` - Value - Die for configuring CbsDfCmnMemIntlv token.
  * * `None` - Value - None for configuring CbsDfCmnMemIntlv token.
  * * `Socket` - Value - Socket for configuring CbsDfCmnMemIntlv token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_cmn_mem_intlv DataIntersightBiosPolicy#cbs_df_cmn_mem_intlv}
  */
  readonly cbsDfCmnMemIntlv?: string;
  /**
  * BIOS Token for setting Memory Interleaving configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsDfCmnMemIntlvControl token.
  * * `disabled` - Value - disabled for configuring CbsDfCmnMemIntlvControl token.
  * * `enabled` - Value - enabled for configuring CbsDfCmnMemIntlvControl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_cmn_mem_intlv_control DataIntersightBiosPolicy#cbs_df_cmn_mem_intlv_control}
  */
  readonly cbsDfCmnMemIntlvControl?: string;
  /**
  * BIOS Token for setting AMD Memory Interleaving Size configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `256 Bytes` - Value - 256 Bytes for configuring CbsDfCmnMemIntlvSize token.
  * * `512 Bytes` - Value - 512 Bytes for configuring CbsDfCmnMemIntlvSize token.
  * * `1 KB` - Value - 1 KiB for configuring CbsDfCmnMemIntlvSize token.
  * * `2 KB` - Value - 2 KiB for configuring CbsDfCmnMemIntlvSize token.
  * * `4 KB` - Value - 4 KiB for configuring CbsDfCmnMemIntlvSize token.
  * * `Auto` - Value - Auto for configuring CbsDfCmnMemIntlvSize token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_cmn_mem_intlv_size DataIntersightBiosPolicy#cbs_df_cmn_mem_intlv_size}
  */
  readonly cbsDfCmnMemIntlvSize?: string;
  /**
  * BIOS Token for setting xGMI Link Configuration configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `2 xGMI Links` - Value - 2 xGMI Links for configuring CbsDfDbgXgmiLinkCfg token.
  * * `3 xGMI Links` - Value - 3 xGMI Links for configuring CbsDfDbgXgmiLinkCfg token.
  * * `4 xGMI Links` - Value - 4 xGMI Links for configuring CbsDfDbgXgmiLinkCfg token.
  * * `Auto` - Value - Auto for configuring CbsDfDbgXgmiLinkCfg token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_df_dbg_xgmi_link_cfg DataIntersightBiosPolicy#cbs_df_dbg_xgmi_link_cfg}
  */
  readonly cbsDfDbgXgmiLinkCfg?: string;
  /**
  * BIOS Token for setting PCIe Ten Bit Tag Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsGnbDbgPcieTbtSupport token.
  * * `disabled` - Value - disabled for configuring CbsGnbDbgPcieTbtSupport token.
  * * `enabled` - Value - enabled for configuring CbsGnbDbgPcieTbtSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_gnb_dbg_pcie_tbt_support DataIntersightBiosPolicy#cbs_gnb_dbg_pcie_tbt_support}
  */
  readonly cbsGnbDbgPcieTbtSupport?: string;
  /**
  * BIOS Token for setting SEV-SNP Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CbsSevSnpSupport token.
  * * `disabled` - Value - disabled for configuring CbsSevSnpSupport token.
  * * `enabled` - Value - enabled for configuring CbsSevSnpSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cbs_sev_snp_support DataIntersightBiosPolicy#cbs_sev_snp_support}
  */
  readonly cbsSevSnpSupport?: string;
  /**
  * BIOS Token for setting Consistent Device Naming configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cdn_enable DataIntersightBiosPolicy#cdn_enable}
  */
  readonly cdnEnable?: string;
  /**
  * BIOS Token for setting CDN Support for LOM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring CdnSupport token.
  * * `enabled` - Value - enabled for configuring CdnSupport token.
  * * `LOMs Only` - Value - LOMs Only for configuring CdnSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cdn_support DataIntersightBiosPolicy#cdn_support}
  */
  readonly cdnSupport?: string;
  /**
  * BIOS Token for setting Channel Interleaving configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1-way` - Value - 1-way for configuring ChannelInterLeave token.
  * * `2-way` - Value - 2-way for configuring ChannelInterLeave token.
  * * `3-way` - Value - 3-way for configuring ChannelInterLeave token.
  * * `4-way` - Value - 4-way for configuring ChannelInterLeave token.
  * * `auto` - Value - auto for configuring ChannelInterLeave token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#channel_inter_leave DataIntersightBiosPolicy#channel_inter_leave}
  */
  readonly channelInterLeave?: string;
  /**
  * BIOS Token for setting Adaptive Memory Training configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cisco_adaptive_mem_training DataIntersightBiosPolicy#cisco_adaptive_mem_training}
  */
  readonly ciscoAdaptiveMemTraining?: string;
  /**
  * BIOS Token for setting BIOS Techlog Level configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Maximum` - Value - Maximum for configuring CiscoDebugLevel token.
  * * `Minimum` - Value - Minimum for configuring CiscoDebugLevel token.
  * * `Normal` - Value - Normal for configuring CiscoDebugLevel token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cisco_debug_level DataIntersightBiosPolicy#cisco_debug_level}
  */
  readonly ciscoDebugLevel?: string;
  /**
  * BIOS Token for setting OptionROM Launch Optimization configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cisco_oprom_launch_optimization DataIntersightBiosPolicy#cisco_oprom_launch_optimization}
  */
  readonly ciscoOpromLaunchOptimization?: string;
  /**
  * BIOS Token for setting Cisco xGMI Max Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cisco_xgmi_max_speed DataIntersightBiosPolicy#cisco_xgmi_max_speed}
  */
  readonly ciscoXgmiMaxSpeed?: string;
  /**
  * BIOS Token for setting CKE Low Policy configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `auto` - Value - auto for configuring CkeLowPolicy token.
  * * `disabled` - Value - disabled for configuring CkeLowPolicy token.
  * * `fast` - Value - fast for configuring CkeLowPolicy token.
  * * `slow` - Value - slow for configuring CkeLowPolicy token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cke_low_policy DataIntersightBiosPolicy#cke_low_policy}
  */
  readonly ckeLowPolicy?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * BIOS Token for setting Closed Loop Thermal Throttling configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#closed_loop_therm_throtl DataIntersightBiosPolicy#closed_loop_therm_throtl}
  */
  readonly closedLoopThermThrotl?: string;
  /**
  * BIOS Token for setting Processor CMCI configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cmci_enable DataIntersightBiosPolicy#cmci_enable}
  */
  readonly cmciEnable?: string;
  /**
  * BIOS Token for setting Config TDP configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#config_tdp DataIntersightBiosPolicy#config_tdp}
  */
  readonly configTdp?: string;
  /**
  * BIOS Token for setting Configurable TDP Level configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Level 1` - Value - Level 1 for configuring ConfigTdpLevel token.
  * * `Level 2` - Value - Level 2 for configuring ConfigTdpLevel token.
  * * `Normal` - Value - Normal for configuring ConfigTdpLevel token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#config_tdp_level DataIntersightBiosPolicy#config_tdp_level}
  */
  readonly configTdpLevel?: string;
  /**
  * BIOS Token for setting Console Redirection configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `com-0` - Value - com-0 for configuring ConsoleRedirection token.
  * * `com-1` - Value - com-1 for configuring ConsoleRedirection token.
  * * `disabled` - Value - disabled for configuring ConsoleRedirection token.
  * * `enabled` - Value - enabled for configuring ConsoleRedirection token.
  * * `serial-port-a` - Value - serial-port-a for configuring ConsoleRedirection token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#console_redirection DataIntersightBiosPolicy#console_redirection}
  */
  readonly consoleRedirection?: string;
  /**
  * BIOS Token for setting Core Multi Processing configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1` - Value - 1 for configuring CoreMultiProcessing token.
  * * `2` - Value - 2 for configuring CoreMultiProcessing token.
  * * `3` - Value - 3 for configuring CoreMultiProcessing token.
  * * `4` - Value - 4 for configuring CoreMultiProcessing token.
  * * `5` - Value - 5 for configuring CoreMultiProcessing token.
  * * `6` - Value - 6 for configuring CoreMultiProcessing token.
  * * `7` - Value - 7 for configuring CoreMultiProcessing token.
  * * `8` - Value - 8 for configuring CoreMultiProcessing token.
  * * `9` - Value - 9 for configuring CoreMultiProcessing token.
  * * `10` - Value - 10 for configuring CoreMultiProcessing token.
  * * `11` - Value - 11 for configuring CoreMultiProcessing token.
  * * `12` - Value - 12 for configuring CoreMultiProcessing token.
  * * `13` - Value - 13 for configuring CoreMultiProcessing token.
  * * `14` - Value - 14 for configuring CoreMultiProcessing token.
  * * `15` - Value - 15 for configuring CoreMultiProcessing token.
  * * `16` - Value - 16 for configuring CoreMultiProcessing token.
  * * `17` - Value - 17 for configuring CoreMultiProcessing token.
  * * `18` - Value - 18 for configuring CoreMultiProcessing token.
  * * `19` - Value - 19 for configuring CoreMultiProcessing token.
  * * `20` - Value - 20 for configuring CoreMultiProcessing token.
  * * `21` - Value - 21 for configuring CoreMultiProcessing token.
  * * `22` - Value - 22 for configuring CoreMultiProcessing token.
  * * `23` - Value - 23 for configuring CoreMultiProcessing token.
  * * `24` - Value - 24 for configuring CoreMultiProcessing token.
  * * `25` - Value - 25 for configuring CoreMultiProcessing token.
  * * `26` - Value - 26 for configuring CoreMultiProcessing token.
  * * `27` - Value - 27 for configuring CoreMultiProcessing token.
  * * `28` - Value - 28 for configuring CoreMultiProcessing token.
  * * `29` - Value - 29 for configuring CoreMultiProcessing token.
  * * `30` - Value - 30 for configuring CoreMultiProcessing token.
  * * `31` - Value - 31 for configuring CoreMultiProcessing token.
  * * `32` - Value - 32 for configuring CoreMultiProcessing token.
  * * `33` - Value - 33 for configuring CoreMultiProcessing token.
  * * `34` - Value - 34 for configuring CoreMultiProcessing token.
  * * `35` - Value - 35 for configuring CoreMultiProcessing token.
  * * `36` - Value - 36 for configuring CoreMultiProcessing token.
  * * `37` - Value - 37 for configuring CoreMultiProcessing token.
  * * `38` - Value - 38 for configuring CoreMultiProcessing token.
  * * `39` - Value - 39 for configuring CoreMultiProcessing token.
  * * `40` - Value - 40 for configuring CoreMultiProcessing token.
  * * `41` - Value - 41 for configuring CoreMultiProcessing token.
  * * `42` - Value - 42 for configuring CoreMultiProcessing token.
  * * `43` - Value - 43 for configuring CoreMultiProcessing token.
  * * `44` - Value - 44 for configuring CoreMultiProcessing token.
  * * `45` - Value - 45 for configuring CoreMultiProcessing token.
  * * `46` - Value - 46 for configuring CoreMultiProcessing token.
  * * `47` - Value - 47 for configuring CoreMultiProcessing token.
  * * `48` - Value - 48 for configuring CoreMultiProcessing token.
  * * `49` - Value - 49 for configuring CoreMultiProcessing token.
  * * `50` - Value - 50 for configuring CoreMultiProcessing token.
  * * `51` - Value - 51 for configuring CoreMultiProcessing token.
  * * `52` - Value - 52 for configuring CoreMultiProcessing token.
  * * `53` - Value - 53 for configuring CoreMultiProcessing token.
  * * `54` - Value - 54 for configuring CoreMultiProcessing token.
  * * `55` - Value - 55 for configuring CoreMultiProcessing token.
  * * `56` - Value - 56 for configuring CoreMultiProcessing token.
  * * `57` - Value - 57 for configuring CoreMultiProcessing token.
  * * `58` - Value - 58 for configuring CoreMultiProcessing token.
  * * `59` - Value - 59 for configuring CoreMultiProcessing token.
  * * `60` - Value - 60 for configuring CoreMultiProcessing token.
  * * `61` - Value - 61 for configuring CoreMultiProcessing token.
  * * `62` - Value - 62 for configuring CoreMultiProcessing token.
  * * `63` - Value - 63 for configuring CoreMultiProcessing token.
  * * `64` - Value - 64 for configuring CoreMultiProcessing token.
  * * `65` - Value - 65 for configuring CoreMultiProcessing token.
  * * `66` - Value - 66 for configuring CoreMultiProcessing token.
  * * `67` - Value - 67 for configuring CoreMultiProcessing token.
  * * `68` - Value - 68 for configuring CoreMultiProcessing token.
  * * `69` - Value - 69 for configuring CoreMultiProcessing token.
  * * `70` - Value - 70 for configuring CoreMultiProcessing token.
  * * `71` - Value - 71 for configuring CoreMultiProcessing token.
  * * `72` - Value - 72 for configuring CoreMultiProcessing token.
  * * `73` - Value - 73 for configuring CoreMultiProcessing token.
  * * `74` - Value - 74 for configuring CoreMultiProcessing token.
  * * `75` - Value - 75 for configuring CoreMultiProcessing token.
  * * `76` - Value - 76 for configuring CoreMultiProcessing token.
  * * `77` - Value - 77 for configuring CoreMultiProcessing token.
  * * `78` - Value - 78 for configuring CoreMultiProcessing token.
  * * `79` - Value - 79 for configuring CoreMultiProcessing token.
  * * `80` - Value - 80 for configuring CoreMultiProcessing token.
  * * `81` - Value - 81 for configuring CoreMultiProcessing token.
  * * `82` - Value - 82 for configuring CoreMultiProcessing token.
  * * `83` - Value - 83 for configuring CoreMultiProcessing token.
  * * `84` - Value - 84 for configuring CoreMultiProcessing token.
  * * `85` - Value - 85 for configuring CoreMultiProcessing token.
  * * `86` - Value - 86 for configuring CoreMultiProcessing token.
  * * `all` - Value - all for configuring CoreMultiProcessing token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#core_multi_processing DataIntersightBiosPolicy#core_multi_processing}
  */
  readonly coreMultiProcessing?: string;
  /**
  * BIOS Token for setting Energy Performance configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `balanced-energy` - Value - balanced-energy for configuring CpuEnergyPerformance token.
  * * `balanced-performance` - Value - balanced-performance for configuring CpuEnergyPerformance token.
  * * `balanced-power` - Value - balanced-power for configuring CpuEnergyPerformance token.
  * * `energy-efficient` - Value - energy-efficient for configuring CpuEnergyPerformance token.
  * * `performance` - Value - performance for configuring CpuEnergyPerformance token.
  * * `power` - Value - power for configuring CpuEnergyPerformance token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cpu_energy_performance DataIntersightBiosPolicy#cpu_energy_performance}
  */
  readonly cpuEnergyPerformance?: string;
  /**
  * BIOS Token for setting Frequency Floor Override configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cpu_frequency_floor DataIntersightBiosPolicy#cpu_frequency_floor}
  */
  readonly cpuFrequencyFloor?: string;
  /**
  * BIOS Token for setting Limit CPU PA to 46 Bits configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cpu_pa_limit DataIntersightBiosPolicy#cpu_pa_limit}
  */
  readonly cpuPaLimit?: string;
  /**
  * BIOS Token for setting Enhanced CPU Performance configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CpuPerfEnhancement token.
  * * `Disabled` - Value - Disabled for configuring CpuPerfEnhancement token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cpu_perf_enhancement DataIntersightBiosPolicy#cpu_perf_enhancement}
  */
  readonly cpuPerfEnhancement?: string;
  /**
  * BIOS Token for setting CPU Performance configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `custom` - Value - custom for configuring CpuPerformance token.
  * * `enterprise` - Value - enterprise for configuring CpuPerformance token.
  * * `high-throughput` - Value - high-throughput for configuring CpuPerformance token.
  * * `hpc` - Value - hpc for configuring CpuPerformance token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cpu_performance DataIntersightBiosPolicy#cpu_performance}
  */
  readonly cpuPerformance?: string;
  /**
  * BIOS Token for setting Power Technology configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `custom` - Value - custom for configuring CpuPowerManagement token.
  * * `disabled` - Value - disabled for configuring CpuPowerManagement token.
  * * `energy-efficient` - Value - energy-efficient for configuring CpuPowerManagement token.
  * * `performance` - Value - performance for configuring CpuPowerManagement token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cpu_power_management DataIntersightBiosPolicy#cpu_power_management}
  */
  readonly cpuPowerManagement?: string;
  /**
  * BIOS Token for setting CR QoS configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Disabled` - Value - Disabled for configuring CrQos token.
  * * `Mode 0 - Disable the PMem QoS Feature` - Value - Mode 0 - Disable the PMem QoS Feature for configuring CrQos token.
  * * `Mode 1 - M2M QoS Enable and CHA QoS Disable` - Value - Mode 1 - M2M QoS Enable and CHA QoS Disable for configuring CrQos token.
  * * `Mode 2 - M2M QoS Enable and CHA QoS Enable` - Value - Mode 2 - M2M QoS Enable and CHA QoS Enable for configuring CrQos token.
  * * `Profile 1` - Value - Profile 1 for configuring CrQos token.
  * * `Recipe 1` - Value - Recipe 1 for configuring CrQos token.
  * * `Recipe 2` - Value - Recipe 2 for configuring CrQos token.
  * * `Recipe 3` - Value - Recipe 3 for configuring CrQos token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#cr_qos DataIntersightBiosPolicy#cr_qos}
  */
  readonly crQos?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#create_time DataIntersightBiosPolicy#create_time}
  */
  readonly createTime?: string;
  /**
  * BIOS Token for setting CR FastGo Config configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring CrfastgoConfig token.
  * * `Default` - Value - Default for configuring CrfastgoConfig token.
  * * `Disable optimization` - Value - Disable optimization for configuring CrfastgoConfig token.
  * * `Enable optimization` - Value - Enable optimization for configuring CrfastgoConfig token.
  * * `Option 1` - Value - Option 1 for configuring CrfastgoConfig token.
  * * `Option 2` - Value - Option 2 for configuring CrfastgoConfig token.
  * * `Option 3` - Value - Option 3 for configuring CrfastgoConfig token.
  * * `Option 4` - Value - Option 4 for configuring CrfastgoConfig token.
  * * `Option 5` - Value - Option 5 for configuring CrfastgoConfig token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#crfastgo_config DataIntersightBiosPolicy#crfastgo_config}
  */
  readonly crfastgoConfig?: string;
  /**
  * BIOS Token for setting DCPMM Firmware Downgrade configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#dcpmm_firmware_downgrade DataIntersightBiosPolicy#dcpmm_firmware_downgrade}
  */
  readonly dcpmmFirmwareDowngrade?: string;
  /**
  * BIOS Token for setting Demand Scrub configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#demand_scrub DataIntersightBiosPolicy#demand_scrub}
  */
  readonly demandScrub?: string;
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#description DataIntersightBiosPolicy#description}
  */
  readonly description?: string;
  /**
  * BIOS Token for setting DFX OSB configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring DfxOsbEn token.
  * * `disabled` - Value - disabled for configuring DfxOsbEn token.
  * * `enabled` - Value - enabled for configuring DfxOsbEn token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#dfx_osb_en DataIntersightBiosPolicy#dfx_osb_en}
  */
  readonly dfxOsbEn?: string;
  /**
  * BIOS Token for setting Direct Cache Access Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `auto` - Value - auto for configuring DirectCacheAccess token.
  * * `disabled` - Value - disabled for configuring DirectCacheAccess token.
  * * `enabled` - Value - enabled for configuring DirectCacheAccess token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#direct_cache_access DataIntersightBiosPolicy#direct_cache_access}
  */
  readonly directCacheAccess?: string;
  /**
  * BIOS Token for setting DMA Control Opt-In Flag configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#dma_ctrl_opt_in DataIntersightBiosPolicy#dma_ctrl_opt_in}
  */
  readonly dmaCtrlOptIn?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#domain_group_moid DataIntersightBiosPolicy#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * BIOS Token for setting DRAM Clock Throttling configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring DramClockThrottling token.
  * * `Balanced` - Value - Balanced for configuring DramClockThrottling token.
  * * `Energy Efficient` - Value - Energy Efficient for configuring DramClockThrottling token.
  * * `Performance` - Value - Performance for configuring DramClockThrottling token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#dram_clock_throttling DataIntersightBiosPolicy#dram_clock_throttling}
  */
  readonly dramClockThrottling?: string;
  /**
  * BIOS Token for setting DRAM Refresh Rate configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1x` - Value - 1x for configuring DramRefreshRate token.
  * * `2x` - Value - 2x for configuring DramRefreshRate token.
  * * `3x` - Value - 3x for configuring DramRefreshRate token.
  * * `4x` - Value - 4x for configuring DramRefreshRate token.
  * * `Auto` - Value - Auto for configuring DramRefreshRate token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#dram_refresh_rate DataIntersightBiosPolicy#dram_refresh_rate}
  */
  readonly dramRefreshRate?: string;
  /**
  * BIOS Token for setting DRAM SW Thermal Throttling configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#dram_sw_thermal_throttling DataIntersightBiosPolicy#dram_sw_thermal_throttling}
  */
  readonly dramSwThermalThrottling?: string;
  /**
  * BIOS Token for setting eADR Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring EadrSupport token.
  * * `disabled` - Value - disabled for configuring EadrSupport token.
  * * `enabled` - Value - enabled for configuring EadrSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#eadr_support DataIntersightBiosPolicy#eadr_support}
  */
  readonly eadrSupport?: string;
  /**
  * BIOS Token for setting IIO eDPC Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Disabled` - Value - Disabled for configuring EdpcEn token.
  * * `On Fatal Error` - Value - On Fatal Error for configuring EdpcEn token.
  * * `On Fatal and Non-Fatal Errors` - Value - On Fatal and Non-Fatal Errors for configuring EdpcEn token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#edpc_en DataIntersightBiosPolicy#edpc_en}
  */
  readonly edpcEn?: string;
  /**
  * BIOS Token for setting External SSC Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `0P3_Percent` - Value - 0P3_Percent for configuring EnableClockSpreadSpec token.
  * * `0P5_Percent` - Value - 0P5_Percent for configuring EnableClockSpreadSpec token.
  * * `disabled` - Value - disabled for configuring EnableClockSpreadSpec token.
  * * `enabled` - Value - enabled for configuring EnableClockSpreadSpec token.
  * * `Hardware` - Value - Hardware for configuring EnableClockSpreadSpec token.
  * * `Off` - Value - Off for configuring EnableClockSpreadSpec token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enable_clock_spread_spec DataIntersightBiosPolicy#enable_clock_spread_spec}
  */
  readonly enableClockSpreadSpec?: string;
  /**
  * BIOS Token for setting Multikey Total Memory Encryption  (MK-TME) configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enable_mktme DataIntersightBiosPolicy#enable_mktme}
  */
  readonly enableMktme?: string;
  /**
  * BIOS Token for setting Rank Margin Tool configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enable_rmt DataIntersightBiosPolicy#enable_rmt}
  */
  readonly enableRmt?: string;
  /**
  * BIOS Token for setting Software Guard Extensions  (SGX) configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enable_sgx DataIntersightBiosPolicy#enable_sgx}
  */
  readonly enableSgx?: string;
  /**
  * BIOS Token for setting Trust Domain Extension  (TDX) configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enable_tdx DataIntersightBiosPolicy#enable_tdx}
  */
  readonly enableTdx?: string;
  /**
  * BIOS Token for setting TDX Secure Arbitration Mode  (SEAM) Loader configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enable_tdx_seamldr DataIntersightBiosPolicy#enable_tdx_seamldr}
  */
  readonly enableTdxSeamldr?: string;
  /**
  * BIOS Token for setting Total Memory Encryption  (TME) configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enable_tme DataIntersightBiosPolicy#enable_tme}
  */
  readonly enableTme?: string;
  /**
  * BIOS Token for setting Energy Efficient Turbo configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#energy_efficient_turbo DataIntersightBiosPolicy#energy_efficient_turbo}
  */
  readonly energyEfficientTurbo?: string;
  /**
  * BIOS Token for setting Energy Performance Tuning configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `BIOS` - Value - BIOS for configuring EngPerfTuning token.
  * * `OS` - Value - OS for configuring EngPerfTuning token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#eng_perf_tuning DataIntersightBiosPolicy#eng_perf_tuning}
  */
  readonly engPerfTuning?: string;
  /**
  * BIOS Token for setting Enhanced Intel Speedstep (R) Technology configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#enhanced_intel_speed_step_tech DataIntersightBiosPolicy#enhanced_intel_speed_step_tech}
  */
  readonly enhancedIntelSpeedStepTech?: string;
  /**
  * BIOS Token for setting Select Owner EPOCH Input Type configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Change to New Random Owner EPOCHs` - Value - Change to New Random Owner EPOCHs for configuring EpochUpdate token.
  * * `Manual User Defined Owner EPOCHs` - Value - Manual User Defined Owner EPOCHs for configuring EpochUpdate token.
  * * `SGX Owner EPOCH activated` - Value - SGX Owner EPOCH activated for configuring EpochUpdate token.
  * * `SGX Owner EPOCH deactivated` - Value - SGX Owner EPOCH deactivated for configuring EpochUpdate token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#epoch_update DataIntersightBiosPolicy#epoch_update}
  */
  readonly epochUpdate?: string;
  /**
  * BIOS Token for setting Processor EPP Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#epp_enable DataIntersightBiosPolicy#epp_enable}
  */
  readonly eppEnable?: string;
  /**
  * BIOS Token for setting EPP Profile configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Balanced Performance` - Value - Balanced Performance for configuring EppProfile token.
  * * `Balanced Power` - Value - Balanced Power for configuring EppProfile token.
  * * `Performance` - Value - Performance for configuring EppProfile token.
  * * `Power` - Value - Power for configuring EppProfile token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#epp_profile DataIntersightBiosPolicy#epp_profile}
  */
  readonly eppProfile?: string;
  /**
  * BIOS Token for setting Error Check Scrub configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Disabled` - Value - Disabled for configuring ErrorCheckScrub token.
  * * `Enabled with Result Collection` - Value - Enabled with Result Collection for configuring ErrorCheckScrub token.
  * * `Enabled without Result Collection` - Value - Enabled without Result Collection for configuring ErrorCheckScrub token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#error_check_scrub DataIntersightBiosPolicy#error_check_scrub}
  */
  readonly errorCheckScrub?: string;
  /**
  * BIOS Token for setting Execute Disable Bit configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#execute_disable_bit DataIntersightBiosPolicy#execute_disable_bit}
  */
  readonly executeDisableBit?: string;
  /**
  * BIOS Token for setting Local X2 Apic configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring ExtendedApic token.
  * * `enabled` - Value - enabled for configuring ExtendedApic token.
  * * `X2APIC` - Value - X2APIC for configuring ExtendedApic token.
  * * `XAPIC` - Value - XAPIC for configuring ExtendedApic token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#extended_apic DataIntersightBiosPolicy#extended_apic}
  */
  readonly extendedApic?: string;
  /**
  * BIOS Token for setting Flow Control configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `none` - Value - none for configuring FlowControl token.
  * * `rts-cts` - Value - rts-cts for configuring FlowControl token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#flow_control DataIntersightBiosPolicy#flow_control}
  */
  readonly flowControl?: string;
  /**
  * BIOS Token for setting FRB-2 Timer configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#frb2enable DataIntersightBiosPolicy#frb2enable}
  */
  readonly frb2Enable?: string;
  /**
  * BIOS Token for setting GPU Direct CPU1 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#gpu_direct_cpu1 DataIntersightBiosPolicy#gpu_direct_cpu1}
  */
  readonly gpuDirectCpu1?: string;
  /**
  * BIOS Token for setting GPU Direct CPU2 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#gpu_direct_cpu2 DataIntersightBiosPolicy#gpu_direct_cpu2}
  */
  readonly gpuDirectCpu2?: string;
  /**
  * BIOS Token for setting GPU Direct CPU3 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#gpu_direct_cpu3 DataIntersightBiosPolicy#gpu_direct_cpu3}
  */
  readonly gpuDirectCpu3?: string;
  /**
  * BIOS Token for setting GPU Direct CPU4 configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#gpu_direct_cpu4 DataIntersightBiosPolicy#gpu_direct_cpu4}
  */
  readonly gpuDirectCpu4?: string;
  /**
  * BIOS Token for setting Hardware Prefetcher configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#hardware_prefetch DataIntersightBiosPolicy#hardware_prefetch}
  */
  readonly hardwarePrefetch?: string;
  /**
  * BIOS Token for setting CPU Hardware Power Management configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Disabled` - Value - Disabled for configuring HwpmEnable token.
  * * `HWPM Native Mode` - Value - HWPM Native Mode for configuring HwpmEnable token.
  * * `HWPM OOB Mode` - Value - HWPM OOB Mode for configuring HwpmEnable token.
  * * `NATIVE MODE` - Value - NATIVE MODE for configuring HwpmEnable token.
  * * `Native Mode with no Legacy` - Value - Native Mode with no Legacy for configuring HwpmEnable token.
  * * `OOB MODE` - Value - OOB MODE for configuring HwpmEnable token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#hwpm_enable DataIntersightBiosPolicy#hwpm_enable}
  */
  readonly hwpmEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#id DataIntersightBiosPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * BIOS Token for setting IMC Interleaving configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1-way Interleave` - Value - 1-way Interleave for configuring ImcInterleave token.
  * * `2-way Interleave` - Value - 2-way Interleave for configuring ImcInterleave token.
  * * `Auto` - Value - Auto for configuring ImcInterleave token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#imc_interleave DataIntersightBiosPolicy#imc_interleave}
  */
  readonly imcInterleave?: string;
  /**
  * BIOS Token for setting Intel Dynamic Speed Select configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_dynamic_speed_select DataIntersightBiosPolicy#intel_dynamic_speed_select}
  */
  readonly intelDynamicSpeedSelect?: string;
  /**
  * BIOS Token for setting Intel HyperThreading Tech configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_hyper_threading_tech DataIntersightBiosPolicy#intel_hyper_threading_tech}
  */
  readonly intelHyperThreadingTech?: string;
  /**
  * BIOS Token for setting Intel Speed Select configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring IntelSpeedSelect token.
  * * `Base` - Value - Base for configuring IntelSpeedSelect token.
  * * `Config 1` - Value - Config 1 for configuring IntelSpeedSelect token.
  * * `Config 2` - Value - Config 2 for configuring IntelSpeedSelect token.
  * * `Config 3` - Value - Config 3 for configuring IntelSpeedSelect token.
  * * `Config 4` - Value - Config 4 for configuring IntelSpeedSelect token.
  * * `Level 0` - Value - Level 0 for configuring IntelSpeedSelect token.
  * * `Level 1` - Value - Level 1 for configuring IntelSpeedSelect token.
  * * `Level 2` - Value - Level 2 for configuring IntelSpeedSelect token.
  * * `Level 3` - Value - Level 3 for configuring IntelSpeedSelect token.
  * * `Level 4` - Value - Level 4 for configuring IntelSpeedSelect token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_speed_select DataIntersightBiosPolicy#intel_speed_select}
  */
  readonly intelSpeedSelect?: string;
  /**
  * BIOS Token for setting Intel Turbo Boost Tech configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_turbo_boost_tech DataIntersightBiosPolicy#intel_turbo_boost_tech}
  */
  readonly intelTurboBoostTech?: string;
  /**
  * BIOS Token for setting Intel (R) VT configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_virtualization_technology DataIntersightBiosPolicy#intel_virtualization_technology}
  */
  readonly intelVirtualizationTechnology?: string;
  /**
  * BIOS Token for setting Intel VT for Directed IO configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_vt_for_directed_io DataIntersightBiosPolicy#intel_vt_for_directed_io}
  */
  readonly intelVtForDirectedIo?: string;
  /**
  * BIOS Token for setting Intel (R) VT-d Coherency Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_vtd_coherency_support DataIntersightBiosPolicy#intel_vtd_coherency_support}
  */
  readonly intelVtdCoherencySupport?: string;
  /**
  * BIOS Token for setting Intel (R) VT-d Interrupt Remapping configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_vtd_interrupt_remapping DataIntersightBiosPolicy#intel_vtd_interrupt_remapping}
  */
  readonly intelVtdInterruptRemapping?: string;
  /**
  * BIOS Token for setting Intel (R) VT-d PassThrough DMA Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_vtd_pass_through_dma_support DataIntersightBiosPolicy#intel_vtd_pass_through_dma_support}
  */
  readonly intelVtdPassThroughDmaSupport?: string;
  /**
  * BIOS Token for setting Intel VTD ATS Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#intel_vtdats_support DataIntersightBiosPolicy#intel_vtdats_support}
  */
  readonly intelVtdatsSupport?: string;
  /**
  * BIOS Token for setting IOAT Configuration configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ioat_config_cpm DataIntersightBiosPolicy#ioat_config_cpm}
  */
  readonly ioatConfigCpm?: string;
  /**
  * BIOS Token for setting IIO Error Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `No` - Value - No for configuring IohErrorEnable token.
  * * `Yes` - Value - Yes for configuring IohErrorEnable token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ioh_error_enable DataIntersightBiosPolicy#ioh_error_enable}
  */
  readonly iohErrorEnable?: string;
  /**
  * BIOS Token for setting IOH Resource Allocation configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `IOH0 24k IOH1 40k` - Value - IOH0 24k IOH1 40k for configuring IohResource token.
  * * `IOH0 32k IOH1 32k` - Value - IOH0 32k IOH1 32k for configuring IohResource token.
  * * `IOH0 40k IOH1 24k` - Value - IOH0 40k IOH1 24k for configuring IohResource token.
  * * `IOH0 48k IOH1 16k` - Value - IOH0 48k IOH1 16k for configuring IohResource token.
  * * `IOH0 56k IOH1 8k` - Value - IOH0 56k IOH1 8k for configuring IohResource token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ioh_resource DataIntersightBiosPolicy#ioh_resource}
  */
  readonly iohResource?: string;
  /**
  * BIOS Token for setting DCU IP Prefetcher configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ip_prefetch DataIntersightBiosPolicy#ip_prefetch}
  */
  readonly ipPrefetch?: string;
  /**
  * BIOS Token for setting IPV4 HTTP Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ipv4http DataIntersightBiosPolicy#ipv4http}
  */
  readonly ipv4Http?: string;
  /**
  * BIOS Token for setting IPv4 PXE Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ipv4pxe DataIntersightBiosPolicy#ipv4pxe}
  */
  readonly ipv4Pxe?: string;
  /**
  * BIOS Token for setting IPV6 HTTP Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ipv6http DataIntersightBiosPolicy#ipv6http}
  */
  readonly ipv6Http?: string;
  /**
  * BIOS Token for setting IPV6 PXE Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ipv6pxe DataIntersightBiosPolicy#ipv6pxe}
  */
  readonly ipv6Pxe?: string;
  /**
  * BIOS Token for setting KTI Prefetch configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring KtiPrefetch token.
  * * `disabled` - Value - disabled for configuring KtiPrefetch token.
  * * `enabled` - Value - enabled for configuring KtiPrefetch token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#kti_prefetch DataIntersightBiosPolicy#kti_prefetch}
  */
  readonly ktiPrefetch?: string;
  /**
  * BIOS Token for setting Latency Optimized Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#latency_optimized_mode DataIntersightBiosPolicy#latency_optimized_mode}
  */
  readonly latencyOptimizedMode?: string;
  /**
  * BIOS Token for setting Legacy OS Redirection configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#legacy_os_redirection DataIntersightBiosPolicy#legacy_os_redirection}
  */
  readonly legacyOsRedirection?: string;
  /**
  * BIOS Token for setting Legacy USB Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `auto` - Value - auto for configuring LegacyUsbSupport token.
  * * `disabled` - Value - disabled for configuring LegacyUsbSupport token.
  * * `enabled` - Value - enabled for configuring LegacyUsbSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#legacy_usb_support DataIntersightBiosPolicy#legacy_usb_support}
  */
  readonly legacyUsbSupport?: string;
  /**
  * BIOS Token for setting LLC Dead Line configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring LlcAlloc token.
  * * `disabled` - Value - disabled for configuring LlcAlloc token.
  * * `enabled` - Value - enabled for configuring LlcAlloc token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#llc_alloc DataIntersightBiosPolicy#llc_alloc}
  */
  readonly llcAlloc?: string;
  /**
  * BIOS Token for setting LLC Prefetch configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#llc_prefetch DataIntersightBiosPolicy#llc_prefetch}
  */
  readonly llcPrefetch?: string;
  /**
  * BIOS Token for setting LOM Port 0 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring LomPort0state token.
  * * `enabled` - Value - enabled for configuring LomPort0state token.
  * * `Legacy Only` - Value - Legacy Only for configuring LomPort0state token.
  * * `UEFI Only` - Value - UEFI Only for configuring LomPort0state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#lom_port0state DataIntersightBiosPolicy#lom_port0state}
  */
  readonly lomPort0State?: string;
  /**
  * BIOS Token for setting LOM Port 1 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring LomPort1state token.
  * * `enabled` - Value - enabled for configuring LomPort1state token.
  * * `Legacy Only` - Value - Legacy Only for configuring LomPort1state token.
  * * `UEFI Only` - Value - UEFI Only for configuring LomPort1state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#lom_port1state DataIntersightBiosPolicy#lom_port1state}
  */
  readonly lomPort1State?: string;
  /**
  * BIOS Token for setting LOM Port 2 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring LomPort2state token.
  * * `enabled` - Value - enabled for configuring LomPort2state token.
  * * `Legacy Only` - Value - Legacy Only for configuring LomPort2state token.
  * * `UEFI Only` - Value - UEFI Only for configuring LomPort2state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#lom_port2state DataIntersightBiosPolicy#lom_port2state}
  */
  readonly lomPort2State?: string;
  /**
  * BIOS Token for setting LOM Port 3 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring LomPort3state token.
  * * `enabled` - Value - enabled for configuring LomPort3state token.
  * * `Legacy Only` - Value - Legacy Only for configuring LomPort3state token.
  * * `UEFI Only` - Value - UEFI Only for configuring LomPort3state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#lom_port3state DataIntersightBiosPolicy#lom_port3state}
  */
  readonly lomPort3State?: string;
  /**
  * BIOS Token for setting All Onboard LOM Ports configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#lom_ports_all_state DataIntersightBiosPolicy#lom_ports_all_state}
  */
  readonly lomPortsAllState?: string;
  /**
  * BIOS Token for setting Low Voltage DDR Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `auto` - Value - auto for configuring LvDdrMode token.
  * * `performance-mode` - Value - performance-mode for configuring LvDdrMode token.
  * * `power-saving-mode` - Value - power-saving-mode for configuring LvDdrMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#lv_ddr_mode DataIntersightBiosPolicy#lv_ddr_mode}
  */
  readonly lvDdrMode?: string;
  /**
  * BIOS Token for setting Make Device Non Bootable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#make_device_non_bootable DataIntersightBiosPolicy#make_device_non_bootable}
  */
  readonly makeDeviceNonBootable?: string;
  /**
  * BIOS Token for setting Memory Bandwidth Boost configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#memory_bandwidth_boost DataIntersightBiosPolicy#memory_bandwidth_boost}
  */
  readonly memoryBandwidthBoost?: string;
  /**
  * BIOS Token for setting Intel Memory Interleaving configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1 Way Node Interleave` - Value - 1 Way Node Interleave for configuring MemoryInterLeave token.
  * * `2 Way Node Interleave` - Value - 2 Way Node Interleave for configuring MemoryInterLeave token.
  * * `4 Way Node Interleave` - Value - 4 Way Node Interleave for configuring MemoryInterLeave token.
  * * `8 Way Node Interleave` - Value - 8 Way Node Interleave for configuring MemoryInterLeave token.
  * * `disabled` - Value - disabled for configuring MemoryInterLeave token.
  * * `enabled` - Value - enabled for configuring MemoryInterLeave token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#memory_inter_leave DataIntersightBiosPolicy#memory_inter_leave}
  */
  readonly memoryInterLeave?: string;
  /**
  * BIOS Token for setting Memory Mapped IO above 4GiB configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#memory_mapped_io_above4gb DataIntersightBiosPolicy#memory_mapped_io_above4gb}
  */
  readonly memoryMappedIoAbove4Gb?: string;
  /**
  * BIOS Token for setting Memory Refresh Rate configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1x Refresh` - Value - 1x Refresh for configuring MemoryRefreshRate token.
  * * `2x Refresh` - Value - 2x Refresh for configuring MemoryRefreshRate token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#memory_refresh_rate DataIntersightBiosPolicy#memory_refresh_rate}
  */
  readonly memoryRefreshRate?: string;
  /**
  * BIOS Token for setting Memory Size Limit in GiB configuration (0 - 65535 GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#memory_size_limit DataIntersightBiosPolicy#memory_size_limit}
  */
  readonly memorySizeLimit?: string;
  /**
  * BIOS Token for setting Memory Thermal Throttling Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `CLTT with PECI` - Value - CLTT with PECI for configuring MemoryThermalThrottling token.
  * * `Disabled` - Value - Disabled for configuring MemoryThermalThrottling token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#memory_thermal_throttling DataIntersightBiosPolicy#memory_thermal_throttling}
  */
  readonly memoryThermalThrottling?: string;
  /**
  * BIOS Token for setting Mirroring Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `inter-socket` - Value - inter-socket for configuring MirroringMode token.
  * * `intra-socket` - Value - intra-socket for configuring MirroringMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#mirroring_mode DataIntersightBiosPolicy#mirroring_mode}
  */
  readonly mirroringMode?: string;
  /**
  * BIOS Token for setting MMCFG BASE configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1 GB` - Value - 1 GiB for configuring MmcfgBase token.
  * * `2 GB` - Value - 2 GiB for configuring MmcfgBase token.
  * * `2.5 GB` - Value - 2.5 GiB for configuring MmcfgBase token.
  * * `3 GB` - Value - 3 GiB for configuring MmcfgBase token.
  * * `Auto` - Value - Auto for configuring MmcfgBase token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#mmcfg_base DataIntersightBiosPolicy#mmcfg_base}
  */
  readonly mmcfgBase?: string;
  /**
  * BIOS Token for setting MMIO High Base configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `512G` - Value - 512G for configuring MmiohBase token.
  * * `1T` - Value - 1T for configuring MmiohBase token.
  * * `2T` - Value - 2T for configuring MmiohBase token.
  * * `4T` - Value - 4T for configuring MmiohBase token.
  * * `16T` - Value - 16T for configuring MmiohBase token.
  * * `24T` - Value - 24T for configuring MmiohBase token.
  * * `32T` - Value - 32T for configuring MmiohBase token.
  * * `40T` - Value - 40T for configuring MmiohBase token.
  * * `56T` - Value - 56T for configuring MmiohBase token.
  * * `Auto` - Value - Auto for configuring MmiohBase token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#mmioh_base DataIntersightBiosPolicy#mmioh_base}
  */
  readonly mmiohBase?: string;
  /**
  * BIOS Token for setting MMIO High Granularity Size configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1G` - Value - 1G for configuring MmiohSize token.
  * * `4G` - Value - 4G for configuring MmiohSize token.
  * * `16G` - Value - 16G for configuring MmiohSize token.
  * * `32G` - Value - 32G for configuring MmiohSize token.
  * * `64G` - Value - 64G for configuring MmiohSize token.
  * * `256G` - Value - 256G for configuring MmiohSize token.
  * * `1024G` - Value - 1024G for configuring MmiohSize token.
  * * `Auto` - Value - Auto for configuring MmiohSize token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#mmioh_size DataIntersightBiosPolicy#mmioh_size}
  */
  readonly mmiohSize?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#mod_time DataIntersightBiosPolicy#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Name of the concrete policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#name DataIntersightBiosPolicy#name}
  */
  readonly name?: string;
  /**
  * BIOS Token for setting Network Stack configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#network_stack DataIntersightBiosPolicy#network_stack}
  */
  readonly networkStack?: string;
  /**
  * BIOS Token for setting NUMA Optimized configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#numa_optimized DataIntersightBiosPolicy#numa_optimized}
  */
  readonly numaOptimized?: string;
  /**
  * BIOS Token for setting NVM Performance Setting configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `BW Optimized` - Value - BW Optimized for configuring NvmdimmPerformConfig token.
  * * `Balanced Profile` - Value - Balanced Profile for configuring NvmdimmPerformConfig token.
  * * `Latency Optimized` - Value - Latency Optimized for configuring NvmdimmPerformConfig token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#nvmdimm_perform_config DataIntersightBiosPolicy#nvmdimm_perform_config}
  */
  readonly nvmdimmPerformConfig?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * BIOS Token for setting Onboard 10Gbit LOM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#onboard10gbit_lom DataIntersightBiosPolicy#onboard10gbit_lom}
  */
  readonly onboard10GbitLom?: string;
  /**
  * BIOS Token for setting Onboard Gbit LOM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#onboard_gbit_lom DataIntersightBiosPolicy#onboard_gbit_lom}
  */
  readonly onboardGbitLom?: string;
  /**
  * BIOS Token for setting Onboard SCU Storage Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#onboard_scu_storage_support DataIntersightBiosPolicy#onboard_scu_storage_support}
  */
  readonly onboardScuStorageSupport?: string;
  /**
  * BIOS Token for setting Onboard SCU Storage SW Stack configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Intel RSTe` - Value - Intel RSTe for configuring OnboardScuStorageSwStack token.
  * * `LSI SW RAID` - Value - LSI SW RAID for configuring OnboardScuStorageSwStack token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#onboard_scu_storage_sw_stack DataIntersightBiosPolicy#onboard_scu_storage_sw_stack}
  */
  readonly onboardScuStorageSwStack?: string;
  /**
  * BIOS Token for setting Operation Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Test Only` - Value - Test Only for configuring OperationMode token.
  * * `Test and Repair` - Value - Test and Repair for configuring OperationMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#operation_mode DataIntersightBiosPolicy#operation_mode}
  */
  readonly operationMode?: string;
  /**
  * BIOS Token for setting Optimized Power Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#optimized_power_mode DataIntersightBiosPolicy#optimized_power_mode}
  */
  readonly optimizedPowerMode?: string;
  /**
  * BIOS Token for setting OS Boot Watchdog Timer configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#os_boot_watchdog_timer DataIntersightBiosPolicy#os_boot_watchdog_timer}
  */
  readonly osBootWatchdogTimer?: string;
  /**
  * BIOS Token for setting OS Boot Watchdog Timer Policy configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `do-nothing` - Value - do-nothing for configuring OsBootWatchdogTimerPolicy token.
  * * `power-off` - Value - power-off for configuring OsBootWatchdogTimerPolicy token.
  * * `reset` - Value - reset for configuring OsBootWatchdogTimerPolicy token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#os_boot_watchdog_timer_policy DataIntersightBiosPolicy#os_boot_watchdog_timer_policy}
  */
  readonly osBootWatchdogTimerPolicy?: string;
  /**
  * BIOS Token for setting OS Boot Watchdog Timer Timeout configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `5-minutes` - Value - 5-minutes for configuring OsBootWatchdogTimerTimeout token.
  * * `10-minutes` - Value - 10-minutes for configuring OsBootWatchdogTimerTimeout token.
  * * `15-minutes` - Value - 15-minutes for configuring OsBootWatchdogTimerTimeout token.
  * * `20-minutes` - Value - 20-minutes for configuring OsBootWatchdogTimerTimeout token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#os_boot_watchdog_timer_timeout DataIntersightBiosPolicy#os_boot_watchdog_timer_timeout}
  */
  readonly osBootWatchdogTimerTimeout?: string;
  /**
  * BIOS Token for setting Out-of-Band Mgmt Port configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#out_of_band_mgmt_port DataIntersightBiosPolicy#out_of_band_mgmt_port}
  */
  readonly outOfBandMgmtPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#owners DataIntersightBiosPolicy#owners}
  */
  readonly owners?: string[];
  /**
  * BIOS Token for setting Package C State Limit configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PackageCstateLimit token.
  * * `C0 C1 State` - Value - C0 C1 State for configuring PackageCstateLimit token.
  * * `C0/C1` - Value - C0/C1 for configuring PackageCstateLimit token.
  * * `C2` - Value - C2 for configuring PackageCstateLimit token.
  * * `C6 Non Retention` - Value - C6 Non Retention for configuring PackageCstateLimit token.
  * * `C6 Retention` - Value - C6 Retention for configuring PackageCstateLimit token.
  * * `No Limit` - Value - No Limit for configuring PackageCstateLimit token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#package_cstate_limit DataIntersightBiosPolicy#package_cstate_limit}
  */
  readonly packageCstateLimit?: string;
  /**
  * BIOS Token for setting Panic and High Watermark configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `High` - Value - High for configuring PanicHighWatermark token.
  * * `Low` - Value - Low for configuring PanicHighWatermark token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#panic_high_watermark DataIntersightBiosPolicy#panic_high_watermark}
  */
  readonly panicHighWatermark?: string;
  /**
  * BIOS Token for setting Partial Cache Line Sparing configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#partial_cache_line_sparing DataIntersightBiosPolicy#partial_cache_line_sparing}
  */
  readonly partialCacheLineSparing?: string;
  /**
  * BIOS Token for setting Partial Memory Mirror Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring PartialMirrorModeConfig token.
  * * `Percentage` - Value - Percentage for configuring PartialMirrorModeConfig token.
  * * `Value in GB` - Value - Value in GiB for configuring PartialMirrorModeConfig token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#partial_mirror_mode_config DataIntersightBiosPolicy#partial_mirror_mode_config}
  */
  readonly partialMirrorModeConfig?: string;
  /**
  * BIOS Token for setting Partial Mirror Percentage configuration (0.00 - 50.00 Percentage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#partial_mirror_percent DataIntersightBiosPolicy#partial_mirror_percent}
  */
  readonly partialMirrorPercent?: string;
  /**
  * BIOS Token for setting Partial Mirror1 Size in GiB configuration (0 - 65535 GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#partial_mirror_value1 DataIntersightBiosPolicy#partial_mirror_value1}
  */
  readonly partialMirrorValue1?: string;
  /**
  * BIOS Token for setting Partial Mirror2 Size in GiB configuration (0 - 65535 GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#partial_mirror_value2 DataIntersightBiosPolicy#partial_mirror_value2}
  */
  readonly partialMirrorValue2?: string;
  /**
  * BIOS Token for setting Partial Mirror3 Size in GiB configuration (0 - 65535 GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#partial_mirror_value3 DataIntersightBiosPolicy#partial_mirror_value3}
  */
  readonly partialMirrorValue3?: string;
  /**
  * BIOS Token for setting Partial Mirror4 Size in GiB configuration (0 - 65535 GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#partial_mirror_value4 DataIntersightBiosPolicy#partial_mirror_value4}
  */
  readonly partialMirrorValue4?: string;
  /**
  * BIOS Token for setting Patrol Scrub configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring PatrolScrub token.
  * * `Enable at End of POST` - Value - Enable at End of POST for configuring PatrolScrub token.
  * * `enabled` - Value - enabled for configuring PatrolScrub token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#patrol_scrub DataIntersightBiosPolicy#patrol_scrub}
  */
  readonly patrolScrub?: string;
  /**
  * BIOS Token for setting Patrol Scrub Interval configuration (5 - 23 Hour).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#patrol_scrub_duration DataIntersightBiosPolicy#patrol_scrub_duration}
  */
  readonly patrolScrubDuration?: string;
  /**
  * BIOS Token for setting PCIe RAS Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pc_ie_ras_support DataIntersightBiosPolicy#pc_ie_ras_support}
  */
  readonly pcIeRasSupport?: string;
  /**
  * BIOS Token for setting NVMe SSD Hot-Plug Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pc_ie_ssd_hot_plug_support DataIntersightBiosPolicy#pc_ie_ssd_hot_plug_support}
  */
  readonly pcIeSsdHotPlugSupport?: string;
  /**
  * BIOS Token for setting PCIe PLL SSC Percent configuration (0 - 255 (n/10)%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pch_pcie_pll_ssc DataIntersightBiosPolicy#pch_pcie_pll_ssc}
  */
  readonly pchPciePllSsc?: string;
  /**
  * BIOS Token for setting xHCI Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pch_usb30mode DataIntersightBiosPolicy#pch_usb30mode}
  */
  readonly pchUsb30Mode?: string;
  /**
  * BIOS Token for setting All PCIe Slots OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring PciOptionRoMs token.
  * * `enabled` - Value - enabled for configuring PciOptionRoMs token.
  * * `Legacy Only` - Value - Legacy Only for configuring PciOptionRoMs token.
  * * `UEFI Only` - Value - UEFI Only for configuring PciOptionRoMs token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pci_option_ro_ms DataIntersightBiosPolicy#pci_option_ro_ms}
  */
  readonly pciOptionRoMs?: string;
  /**
  * BIOS Token for setting PCI ROM CLP configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pci_rom_clp DataIntersightBiosPolicy#pci_rom_clp}
  */
  readonly pciRomClp?: string;
  /**
  * BIOS Token for setting PCIe ARI Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieAriSupport token.
  * * `disabled` - Value - disabled for configuring PcieAriSupport token.
  * * `enabled` - Value - enabled for configuring PcieAriSupport token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_ari_support DataIntersightBiosPolicy#pcie_ari_support}
  */
  readonly pcieAriSupport?: string;
  /**
  * BIOS Token for setting PCIe PLL SSC configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PciePllSsc token.
  * * `Disabled` - Value - Disabled for configuring PciePllSsc token.
  * * `ZeroPointFive` - Value - ZeroPointFive for configuring PciePllSsc token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_pll_ssc DataIntersightBiosPolicy#pcie_pll_ssc}
  */
  readonly pciePllSsc?: string;
  /**
  * BIOS Token for setting MRAID1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotMraid1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotMraid1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotMraid1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotMraid1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotMraid1linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring PcieSlotMraid1linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring PcieSlotMraid1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_mraid1link_speed DataIntersightBiosPolicy#pcie_slot_mraid1link_speed}
  */
  readonly pcieSlotMraid1LinkSpeed?: string;
  /**
  * BIOS Token for setting MRAID1 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_mraid1option_rom DataIntersightBiosPolicy#pcie_slot_mraid1option_rom}
  */
  readonly pcieSlotMraid1OptionRom?: string;
  /**
  * BIOS Token for setting MRAID2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotMraid2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotMraid2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotMraid2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotMraid2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotMraid2linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring PcieSlotMraid2linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring PcieSlotMraid2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_mraid2link_speed DataIntersightBiosPolicy#pcie_slot_mraid2link_speed}
  */
  readonly pcieSlotMraid2LinkSpeed?: string;
  /**
  * BIOS Token for setting MRAID2 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_mraid2option_rom DataIntersightBiosPolicy#pcie_slot_mraid2option_rom}
  */
  readonly pcieSlotMraid2OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot MSTOR Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotMstorraidLinkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotMstorraidLinkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotMstorraidLinkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotMstorraidLinkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotMstorraidLinkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring PcieSlotMstorraidLinkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring PcieSlotMstorraidLinkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_mstorraid_link_speed DataIntersightBiosPolicy#pcie_slot_mstorraid_link_speed}
  */
  readonly pcieSlotMstorraidLinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot MSTOR RAID OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_mstorraid_option_rom DataIntersightBiosPolicy#pcie_slot_mstorraid_option_rom}
  */
  readonly pcieSlotMstorraidOptionRom?: string;
  /**
  * BIOS Token for setting NVME 1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotNvme1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotNvme1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotNvme1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotNvme1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotNvme1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme1link_speed DataIntersightBiosPolicy#pcie_slot_nvme1link_speed}
  */
  readonly pcieSlotNvme1LinkSpeed?: string;
  /**
  * BIOS Token for setting NVME 1 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme1option_rom DataIntersightBiosPolicy#pcie_slot_nvme1option_rom}
  */
  readonly pcieSlotNvme1OptionRom?: string;
  /**
  * BIOS Token for setting NVME 2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotNvme2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotNvme2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotNvme2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotNvme2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotNvme2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme2link_speed DataIntersightBiosPolicy#pcie_slot_nvme2link_speed}
  */
  readonly pcieSlotNvme2LinkSpeed?: string;
  /**
  * BIOS Token for setting NVME 2 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme2option_rom DataIntersightBiosPolicy#pcie_slot_nvme2option_rom}
  */
  readonly pcieSlotNvme2OptionRom?: string;
  /**
  * BIOS Token for setting NVME 3 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotNvme3linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotNvme3linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotNvme3linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotNvme3linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotNvme3linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme3link_speed DataIntersightBiosPolicy#pcie_slot_nvme3link_speed}
  */
  readonly pcieSlotNvme3LinkSpeed?: string;
  /**
  * BIOS Token for setting NVME 3 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme3option_rom DataIntersightBiosPolicy#pcie_slot_nvme3option_rom}
  */
  readonly pcieSlotNvme3OptionRom?: string;
  /**
  * BIOS Token for setting NVME 4 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotNvme4linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotNvme4linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotNvme4linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotNvme4linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotNvme4linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme4link_speed DataIntersightBiosPolicy#pcie_slot_nvme4link_speed}
  */
  readonly pcieSlotNvme4LinkSpeed?: string;
  /**
  * BIOS Token for setting NVME 4 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme4option_rom DataIntersightBiosPolicy#pcie_slot_nvme4option_rom}
  */
  readonly pcieSlotNvme4OptionRom?: string;
  /**
  * BIOS Token for setting NVME 5 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotNvme5linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotNvme5linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotNvme5linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotNvme5linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotNvme5linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme5link_speed DataIntersightBiosPolicy#pcie_slot_nvme5link_speed}
  */
  readonly pcieSlotNvme5LinkSpeed?: string;
  /**
  * BIOS Token for setting NVME 5 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme5option_rom DataIntersightBiosPolicy#pcie_slot_nvme5option_rom}
  */
  readonly pcieSlotNvme5OptionRom?: string;
  /**
  * BIOS Token for setting NVME 6 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring PcieSlotNvme6linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring PcieSlotNvme6linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring PcieSlotNvme6linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring PcieSlotNvme6linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring PcieSlotNvme6linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme6link_speed DataIntersightBiosPolicy#pcie_slot_nvme6link_speed}
  */
  readonly pcieSlotNvme6LinkSpeed?: string;
  /**
  * BIOS Token for setting NVME 6 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slot_nvme6option_rom DataIntersightBiosPolicy#pcie_slot_nvme6option_rom}
  */
  readonly pcieSlotNvme6OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slots CDN Control configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pcie_slots_cdn_enable DataIntersightBiosPolicy#pcie_slots_cdn_enable}
  */
  readonly pcieSlotsCdnEnable?: string;
  /**
  * BIOS Token for setting Power ON Password configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pop_support DataIntersightBiosPolicy#pop_support}
  */
  readonly popSupport?: string;
  /**
  * BIOS Token for setting POST Error Pause configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#post_error_pause DataIntersightBiosPolicy#post_error_pause}
  */
  readonly postErrorPause?: string;
  /**
  * BIOS Token for setting Post Package Repair configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Disabled` - Value - Disabled for configuring PostPackageRepair token.
  * * `Hard PPR` - Value - Hard PPR for configuring PostPackageRepair token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#post_package_repair DataIntersightBiosPolicy#post_package_repair}
  */
  readonly postPackageRepair?: string;
  /**
  * BIOS Token for setting PreBoot DMA Protection configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pre_boot_dma_protection DataIntersightBiosPolicy#pre_boot_dma_protection}
  */
  readonly preBootDmaProtection?: string;
  /**
  * BIOS Token for setting PRMRR Size configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1G` - Value - 1G for configuring PrmrrSize token.
  * * `2G` - Value - 2G for configuring PrmrrSize token.
  * * `4G` - Value - 4G for configuring PrmrrSize token.
  * * `8G` - Value - 8G for configuring PrmrrSize token.
  * * `16G` - Value - 16G for configuring PrmrrSize token.
  * * `32G` - Value - 32G for configuring PrmrrSize token.
  * * `64G` - Value - 64G for configuring PrmrrSize token.
  * * `128G` - Value - 128G for configuring PrmrrSize token.
  * * `256G` - Value - 256G for configuring PrmrrSize token.
  * * `512G` - Value - 512G for configuring PrmrrSize token.
  * * `128M` - Value - 128M for configuring PrmrrSize token.
  * * `256M` - Value - 256M for configuring PrmrrSize token.
  * * `512M` - Value - 512M for configuring PrmrrSize token.
  * * `Auto` - Value - Auto for configuring PrmrrSize token.
  * * `Invalid Config.` - Value - Invalid Config for configuring PrmrrSize token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#prmrr_size DataIntersightBiosPolicy#prmrr_size}
  */
  readonly prmrrSize?: string;
  /**
  * BIOS Token for setting Processor C1E configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#processor_c1e DataIntersightBiosPolicy#processor_c1e}
  */
  readonly processorC1E?: string;
  /**
  * BIOS Token for setting Processor C3 Report configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#processor_c3report DataIntersightBiosPolicy#processor_c3report}
  */
  readonly processorC3Report?: string;
  /**
  * BIOS Token for setting Processor C6 Report configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring ProcessorC6report token.
  * * `disabled` - Value - disabled for configuring ProcessorC6report token.
  * * `enabled` - Value - enabled for configuring ProcessorC6report token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#processor_c6report DataIntersightBiosPolicy#processor_c6report}
  */
  readonly processorC6Report?: string;
  /**
  * BIOS Token for setting CPU C State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#processor_cstate DataIntersightBiosPolicy#processor_cstate}
  */
  readonly processorCstate?: string;
  /**
  * BIOS Token for setting P-SATA Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `AHCI` - Value - AHCI for configuring Psata token.
  * * `Disabled` - Value - Disabled for configuring Psata token.
  * * `LSI SW RAID` - Value - LSI SW RAID for configuring Psata token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#psata DataIntersightBiosPolicy#psata}
  */
  readonly psata?: string;
  /**
  * BIOS Token for setting P-STATE Coordination configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `HW ALL` - Value - HW ALL for configuring PstateCoordType token.
  * * `SW ALL` - Value - SW ALL for configuring PstateCoordType token.
  * * `SW ANY` - Value - SW ANY for configuring PstateCoordType token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pstate_coord_type DataIntersightBiosPolicy#pstate_coord_type}
  */
  readonly pstateCoordType?: string;
  /**
  * BIOS Token for setting Putty KeyPad configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `ESCN` - Value - ESCN for configuring PuttyKeyPad token.
  * * `LINUX` - Value - LINUX for configuring PuttyKeyPad token.
  * * `SCO` - Value - SCO for configuring PuttyKeyPad token.
  * * `VT100` - Value - VT100 for configuring PuttyKeyPad token.
  * * `VT400` - Value - VT400 for configuring PuttyKeyPad token.
  * * `XTERMR6` - Value - XTERMR6 for configuring PuttyKeyPad token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#putty_key_pad DataIntersightBiosPolicy#putty_key_pad}
  */
  readonly puttyKeyPad?: string;
  /**
  * BIOS Token for setting Power Performance Tuning configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `bios` - Value - BIOS for configuring PwrPerfTuning token.
  * * `os` - Value - os for configuring PwrPerfTuning token.
  * * `peci` - Value - peci for configuring PwrPerfTuning token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#pwr_perf_tuning DataIntersightBiosPolicy#pwr_perf_tuning}
  */
  readonly pwrPerfTuning?: string;
  /**
  * BIOS Token for setting QPI Link Frequency Select configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `6.4-gt/s` - Value - 6.4-gt/s for configuring QpiLinkFrequency token.
  * * `7.2-gt/s` - Value - 7.2-gt/s for configuring QpiLinkFrequency token.
  * * `8.0-gt/s` - Value - 8.0-gt/s for configuring QpiLinkFrequency token.
  * * `9.6-gt/s` - Value - 9.6-gt/s for configuring QpiLinkFrequency token.
  * * `auto` - Value - auto for configuring QpiLinkFrequency token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#qpi_link_frequency DataIntersightBiosPolicy#qpi_link_frequency}
  */
  readonly qpiLinkFrequency?: string;
  /**
  * BIOS Token for setting UPI Link Frequency Select configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `10.4GT/s` - Value - 10.4GT/s for configuring QpiLinkSpeed token.
  * * `11.2GT/s` - Value - 11.2GT/s for configuring QpiLinkSpeed token.
  * * `12.8GT/s` - Value - 12.8GT/s for configuring QpiLinkSpeed token.
  * * `14.4GT/s` - Value - 14.4GT/s for configuring QpiLinkSpeed token.
  * * `16.0GT/s` - Value - 16.0GT/s for configuring QpiLinkSpeed token.
  * * `20.0GT/s` - Value - 20.0GT/s for configuring QpiLinkSpeed token.
  * * `24.0GT/s` - Value - 24.0GT/s for configuring QpiLinkSpeed token.
  * * `9.6GT/s` - Value - 9.6GT/s for configuring QpiLinkSpeed token.
  * * `Auto` - Value - Auto for configuring QpiLinkSpeed token.
  * * `Use Per Link Setting` - Value - Use Per Link Setting for configuring QpiLinkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#qpi_link_speed DataIntersightBiosPolicy#qpi_link_speed}
  */
  readonly qpiLinkSpeed?: string;
  /**
  * BIOS Token for setting QPI Snoop Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `auto` - Value - auto for configuring QpiSnoopMode token.
  * * `cluster-on-die` - Value - cluster-on-die for configuring QpiSnoopMode token.
  * * `early-snoop` - Value - early-snoop for configuring QpiSnoopMode token.
  * * `home-directory-snoop` - Value - home-directory-snoop for configuring QpiSnoopMode token.
  * * `home-directory-snoop-with-osb` - Value - home-directory-snoop-with-osb for configuring QpiSnoopMode token.
  * * `home-snoop` - Value - home-snoop for configuring QpiSnoopMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#qpi_snoop_mode DataIntersightBiosPolicy#qpi_snoop_mode}
  */
  readonly qpiSnoopMode?: string;
  /**
  * BIOS Token for setting Rank Interleaving configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1-way` - Value - 1-way for configuring RankInterLeave token.
  * * `2-way` - Value - 2-way for configuring RankInterLeave token.
  * * `4-way` - Value - 4-way for configuring RankInterLeave token.
  * * `8-way` - Value - 8-way for configuring RankInterLeave token.
  * * `auto` - Value - auto for configuring RankInterLeave token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#rank_inter_leave DataIntersightBiosPolicy#rank_inter_leave}
  */
  readonly rankInterLeave?: string;
  /**
  * BIOS Token for setting Redirection After BIOS POST configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Always Enable` - Value - Always Enable for configuring RedirectionAfterPost token.
  * * `Bootloader` - Value - Bootloader for configuring RedirectionAfterPost token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#redirection_after_post DataIntersightBiosPolicy#redirection_after_post}
  */
  readonly redirectionAfterPost?: string;
  /**
  * BIOS Token for setting Re-Size BAR Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#resize_bar_support DataIntersightBiosPolicy#resize_bar_support}
  */
  readonly resizeBarSupport?: string;
  /**
  * BIOS Token for setting Runtime Post Package Repair configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#runtime_post_package_repair DataIntersightBiosPolicy#runtime_post_package_repair}
  */
  readonly runtimePostPackageRepair?: string;
  /**
  * BIOS Token for setting SATA Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `AHCI` - Value - AHCI for configuring SataModeSelect token.
  * * `Disabled` - Value - Disabled for configuring SataModeSelect token.
  * * `LSI SW RAID` - Value - LSI SW RAID for configuring SataModeSelect token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sata_mode_select DataIntersightBiosPolicy#sata_mode_select}
  */
  readonly sataModeSelect?: string;
  /**
  * BIOS Token for setting Memory RAS Configuration configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `adddc-sparing` - Value - adddc-sparing for configuring SelectMemoryRasConfiguration token.
  * * `lockstep` - Value - lockstep for configuring SelectMemoryRasConfiguration token.
  * * `maximum-performance` - Value - maximum-performance for configuring SelectMemoryRasConfiguration token.
  * * `mirror-mode-1lm` - Value - mirror-mode-1lm for configuring SelectMemoryRasConfiguration token.
  * * `mirroring` - Value - mirroring for configuring SelectMemoryRasConfiguration token.
  * * `partial-mirror-mode-1lm` - Value - partial-mirror-mode-1lm for configuring SelectMemoryRasConfiguration token.
  * * `sparing` - Value - sparing for configuring SelectMemoryRasConfiguration token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#select_memory_ras_configuration DataIntersightBiosPolicy#select_memory_ras_configuration}
  */
  readonly selectMemoryRasConfiguration?: string;
  /**
  * BIOS Token for setting PPR Type configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring SelectPprType token.
  * * `Hard PPR` - Value - Hard PPR for configuring SelectPprType token.
  * * `Soft PPR` - Value - Soft PPR for configuring SelectPprType token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#select_ppr_type DataIntersightBiosPolicy#select_ppr_type}
  */
  readonly selectPprType?: string;
  /**
  * BIOS Token for setting Serial Mux configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#serial_mux DataIntersightBiosPolicy#serial_mux}
  */
  readonly serialMux?: string;
  /**
  * BIOS Token for setting Serial A Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#serial_port_aenable DataIntersightBiosPolicy#serial_port_aenable}
  */
  readonly serialPortAenable?: string;
  /**
  * BIOS Token for setting Secured Encrypted Virtualization configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `253 ASIDs` - Value - 253 ASIDs for configuring Sev token.
  * * `509 ASIDs` - Value - 509 ASIDs for configuring Sev token.
  * * `Auto` - Value - Auto for configuring Sev token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sev DataIntersightBiosPolicy#sev}
  */
  readonly sev?: string;
  /**
  * BIOS Token for setting SGX Auto MP Registration Agent configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_auto_registration_agent DataIntersightBiosPolicy#sgx_auto_registration_agent}
  */
  readonly sgxAutoRegistrationAgent?: string;
  /**
  * BIOS Token for setting SGX Epoch 0 configuration (0 - ffffffffffffffff Hash byte 7-0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_epoch0 DataIntersightBiosPolicy#sgx_epoch0}
  */
  readonly sgxEpoch0?: string;
  /**
  * BIOS Token for setting SGX Epoch 1 configuration (0 - ffffffffffffffff Hash byte 7-0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_epoch1 DataIntersightBiosPolicy#sgx_epoch1}
  */
  readonly sgxEpoch1?: string;
  /**
  * BIOS Token for setting SGX Factory Reset configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_factory_reset DataIntersightBiosPolicy#sgx_factory_reset}
  */
  readonly sgxFactoryReset?: string;
  /**
  * BIOS Token for setting SGX PubKey Hash0 configuration (0 - ffffffffffffffff Hash byte 7-0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_le_pub_key_hash0 DataIntersightBiosPolicy#sgx_le_pub_key_hash0}
  */
  readonly sgxLePubKeyHash0?: string;
  /**
  * BIOS Token for setting SGX PubKey Hash1 configuration (0 - ffffffffffffffff Hash byte 15-8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_le_pub_key_hash1 DataIntersightBiosPolicy#sgx_le_pub_key_hash1}
  */
  readonly sgxLePubKeyHash1?: string;
  /**
  * BIOS Token for setting SGX PubKey Hash2 configuration (0 - ffffffffffffffff Hash byte 23-16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_le_pub_key_hash2 DataIntersightBiosPolicy#sgx_le_pub_key_hash2}
  */
  readonly sgxLePubKeyHash2?: string;
  /**
  * BIOS Token for setting SGX PubKey Hash3 configuration (0 - ffffffffffffffff Hash byte 31-24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_le_pub_key_hash3 DataIntersightBiosPolicy#sgx_le_pub_key_hash3}
  */
  readonly sgxLePubKeyHash3?: string;
  /**
  * BIOS Token for setting SGX Write Enable configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_le_wr DataIntersightBiosPolicy#sgx_le_wr}
  */
  readonly sgxLeWr?: string;
  /**
  * BIOS Token for setting SGX Package Information In-Band Access configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_package_info_in_band_access DataIntersightBiosPolicy#sgx_package_info_in_band_access}
  */
  readonly sgxPackageInfoInBandAccess?: string;
  /**
  * BIOS Token for setting SGX QoS configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sgx_qos DataIntersightBiosPolicy#sgx_qos}
  */
  readonly sgxQos?: string;
  /**
  * BIOS Token for setting SHA-1 PCR Bank configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sha1pcr_bank DataIntersightBiosPolicy#sha1pcr_bank}
  */
  readonly sha1PcrBank?: string;
  /**
  * BIOS Token for setting SHA256 PCR Bank configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sha256pcr_bank DataIntersightBiosPolicy#sha256pcr_bank}
  */
  readonly sha256PcrBank?: string;
  /**
  * BIOS Token for setting SHA384 PCR Bank configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sha384pcr_bank DataIntersightBiosPolicy#sha384pcr_bank}
  */
  readonly sha384PcrBank?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#shared_scope DataIntersightBiosPolicy#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * BIOS Token for setting Single PCTL configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `No` - Value - No for configuring SinglePctlEnable token.
  * * `Yes` - Value - Yes for configuring SinglePctlEnable token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#single_pctl_enable DataIntersightBiosPolicy#single_pctl_enable}
  */
  readonly singlePctlEnable?: string;
  /**
  * BIOS Token for setting PCIe Slot:10 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot10linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot10linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot10linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot10linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot10linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot10link_speed DataIntersightBiosPolicy#slot10link_speed}
  */
  readonly slot10LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 10 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot10state token.
  * * `enabled` - Value - enabled for configuring Slot10state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot10state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot10state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot10state DataIntersightBiosPolicy#slot10state}
  */
  readonly slot10State?: string;
  /**
  * BIOS Token for setting PCIe Slot:11 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot11linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot11linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot11linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot11linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot11linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot11link_speed DataIntersightBiosPolicy#slot11link_speed}
  */
  readonly slot11LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 11 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot11state DataIntersightBiosPolicy#slot11state}
  */
  readonly slot11State?: string;
  /**
  * BIOS Token for setting PCIe Slot:12 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot12linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot12linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot12linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot12linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot12linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot12link_speed DataIntersightBiosPolicy#slot12link_speed}
  */
  readonly slot12LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 12 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot12state DataIntersightBiosPolicy#slot12state}
  */
  readonly slot12State?: string;
  /**
  * BIOS Token for setting Slot 13 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot13state DataIntersightBiosPolicy#slot13state}
  */
  readonly slot13State?: string;
  /**
  * BIOS Token for setting Slot 14 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot14state DataIntersightBiosPolicy#slot14state}
  */
  readonly slot14State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot1linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot1linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot1link_speed DataIntersightBiosPolicy#slot1link_speed}
  */
  readonly slot1LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 1 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot1state token.
  * * `enabled` - Value - enabled for configuring Slot1state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot1state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot1state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot1state DataIntersightBiosPolicy#slot1state}
  */
  readonly slot1State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot2linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot2linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot2link_speed DataIntersightBiosPolicy#slot2link_speed}
  */
  readonly slot2LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 2 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot2state token.
  * * `enabled` - Value - enabled for configuring Slot2state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot2state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot2state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot2state DataIntersightBiosPolicy#slot2state}
  */
  readonly slot2State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 3 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot3linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot3linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot3linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot3linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot3linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot3linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot3linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot3link_speed DataIntersightBiosPolicy#slot3link_speed}
  */
  readonly slot3LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 3 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot3state token.
  * * `enabled` - Value - enabled for configuring Slot3state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot3state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot3state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot3state DataIntersightBiosPolicy#slot3state}
  */
  readonly slot3State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 4 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot4linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot4linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot4linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot4linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot4linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot4linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot4linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot4link_speed DataIntersightBiosPolicy#slot4link_speed}
  */
  readonly slot4LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 4 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot4state token.
  * * `enabled` - Value - enabled for configuring Slot4state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot4state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot4state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot4state DataIntersightBiosPolicy#slot4state}
  */
  readonly slot4State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 5 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot5linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot5linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot5linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot5linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot5linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot5linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot5linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot5link_speed DataIntersightBiosPolicy#slot5link_speed}
  */
  readonly slot5LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 5 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot5state token.
  * * `enabled` - Value - enabled for configuring Slot5state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot5state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot5state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot5state DataIntersightBiosPolicy#slot5state}
  */
  readonly slot5State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 6 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot6linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot6linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot6linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot6linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot6linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot6linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot6linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot6link_speed DataIntersightBiosPolicy#slot6link_speed}
  */
  readonly slot6LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 6 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot6state token.
  * * `enabled` - Value - enabled for configuring Slot6state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot6state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot6state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot6state DataIntersightBiosPolicy#slot6state}
  */
  readonly slot6State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 7 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot7linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot7linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot7linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot7linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot7linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot7linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot7linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot7link_speed DataIntersightBiosPolicy#slot7link_speed}
  */
  readonly slot7LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 7 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot7state token.
  * * `enabled` - Value - enabled for configuring Slot7state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot7state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot7state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot7state DataIntersightBiosPolicy#slot7state}
  */
  readonly slot7State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 8 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot8linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot8linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot8linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot8linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot8linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot8linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring Slot8linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot8link_speed DataIntersightBiosPolicy#slot8link_speed}
  */
  readonly slot8LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 8 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot8state token.
  * * `enabled` - Value - enabled for configuring Slot8state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot8state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot8state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot8state DataIntersightBiosPolicy#slot8state}
  */
  readonly slot8State?: string;
  /**
  * BIOS Token for setting PCIe Slot: 9 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Slot9linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring Slot9linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring Slot9linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring Slot9linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring Slot9linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring Slot9linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot9link_speed DataIntersightBiosPolicy#slot9link_speed}
  */
  readonly slot9LinkSpeed?: string;
  /**
  * BIOS Token for setting Slot 9 State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring Slot9state token.
  * * `enabled` - Value - enabled for configuring Slot9state token.
  * * `Legacy Only` - Value - Legacy Only for configuring Slot9state token.
  * * `UEFI Only` - Value - UEFI Only for configuring Slot9state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot9state DataIntersightBiosPolicy#slot9state}
  */
  readonly slot9State?: string;
  /**
  * BIOS Token for setting PCIe Slot:FLOM Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFlomLinkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFlomLinkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFlomLinkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFlomLinkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFlomLinkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_flom_link_speed DataIntersightBiosPolicy#slot_flom_link_speed}
  */
  readonly slotFlomLinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 10 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme10linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme10linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme10linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme10linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme10linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme10linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme10linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme10link_speed DataIntersightBiosPolicy#slot_front_nvme10link_speed}
  */
  readonly slotFrontNvme10LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 10 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme10option_rom DataIntersightBiosPolicy#slot_front_nvme10option_rom}
  */
  readonly slotFrontNvme10OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 11 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme11linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme11linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme11linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme11linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme11linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme11linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme11linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme11link_speed DataIntersightBiosPolicy#slot_front_nvme11link_speed}
  */
  readonly slotFrontNvme11LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 11 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme11option_rom DataIntersightBiosPolicy#slot_front_nvme11option_rom}
  */
  readonly slotFrontNvme11OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 12 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme12linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme12linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme12linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme12linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme12linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme12linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme12linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme12link_speed DataIntersightBiosPolicy#slot_front_nvme12link_speed}
  */
  readonly slotFrontNvme12LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 12 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme12option_rom DataIntersightBiosPolicy#slot_front_nvme12option_rom}
  */
  readonly slotFrontNvme12OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 13 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme13linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme13linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme13linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme13linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme13linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme13linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme13linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme13link_speed DataIntersightBiosPolicy#slot_front_nvme13link_speed}
  */
  readonly slotFrontNvme13LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 13 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme13option_rom DataIntersightBiosPolicy#slot_front_nvme13option_rom}
  */
  readonly slotFrontNvme13OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 14 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme14linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme14linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme14linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme14linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme14linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme14linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme14linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme14link_speed DataIntersightBiosPolicy#slot_front_nvme14link_speed}
  */
  readonly slotFrontNvme14LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 14 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme14option_rom DataIntersightBiosPolicy#slot_front_nvme14option_rom}
  */
  readonly slotFrontNvme14OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 15 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme15linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme15linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme15linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme15linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme15linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme15linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme15linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme15link_speed DataIntersightBiosPolicy#slot_front_nvme15link_speed}
  */
  readonly slotFrontNvme15LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 15 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme15option_rom DataIntersightBiosPolicy#slot_front_nvme15option_rom}
  */
  readonly slotFrontNvme15OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 16 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme16linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme16linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme16linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme16linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme16linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme16linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme16linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme16link_speed DataIntersightBiosPolicy#slot_front_nvme16link_speed}
  */
  readonly slotFrontNvme16LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 16 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme16option_rom DataIntersightBiosPolicy#slot_front_nvme16option_rom}
  */
  readonly slotFrontNvme16OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 17 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme17linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme17linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme17linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme17linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme17linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme17linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme17linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme17link_speed DataIntersightBiosPolicy#slot_front_nvme17link_speed}
  */
  readonly slotFrontNvme17LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 17 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme17option_rom DataIntersightBiosPolicy#slot_front_nvme17option_rom}
  */
  readonly slotFrontNvme17OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 18 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme18linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme18linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme18linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme18linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme18linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme18linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme18linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme18link_speed DataIntersightBiosPolicy#slot_front_nvme18link_speed}
  */
  readonly slotFrontNvme18LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 18 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme18option_rom DataIntersightBiosPolicy#slot_front_nvme18option_rom}
  */
  readonly slotFrontNvme18OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 19 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme19linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme19linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme19linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme19linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme19linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme19linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme19linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme19link_speed DataIntersightBiosPolicy#slot_front_nvme19link_speed}
  */
  readonly slotFrontNvme19LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 19 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme19option_rom DataIntersightBiosPolicy#slot_front_nvme19option_rom}
  */
  readonly slotFrontNvme19OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme1linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme1linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme1link_speed DataIntersightBiosPolicy#slot_front_nvme1link_speed}
  */
  readonly slotFrontNvme1LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 1 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme1option_rom DataIntersightBiosPolicy#slot_front_nvme1option_rom}
  */
  readonly slotFrontNvme1OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 20 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme20linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme20linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme20linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme20linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme20linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme20linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme20linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme20link_speed DataIntersightBiosPolicy#slot_front_nvme20link_speed}
  */
  readonly slotFrontNvme20LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 20 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme20option_rom DataIntersightBiosPolicy#slot_front_nvme20option_rom}
  */
  readonly slotFrontNvme20OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 21 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme21linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme21linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme21linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme21linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme21linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme21linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme21linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme21link_speed DataIntersightBiosPolicy#slot_front_nvme21link_speed}
  */
  readonly slotFrontNvme21LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 21 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme21option_rom DataIntersightBiosPolicy#slot_front_nvme21option_rom}
  */
  readonly slotFrontNvme21OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 22 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme22linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme22linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme22linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme22linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme22linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme22linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme22linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme22link_speed DataIntersightBiosPolicy#slot_front_nvme22link_speed}
  */
  readonly slotFrontNvme22LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 22 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme22option_rom DataIntersightBiosPolicy#slot_front_nvme22option_rom}
  */
  readonly slotFrontNvme22OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 23 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme23linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme23linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme23linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme23linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme23linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme23linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme23linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme23link_speed DataIntersightBiosPolicy#slot_front_nvme23link_speed}
  */
  readonly slotFrontNvme23LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 23 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme23option_rom DataIntersightBiosPolicy#slot_front_nvme23option_rom}
  */
  readonly slotFrontNvme23OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 24 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme24linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme24linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme24linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme24linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme24linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme24linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme24linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme24link_speed DataIntersightBiosPolicy#slot_front_nvme24link_speed}
  */
  readonly slotFrontNvme24LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 24 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme24option_rom DataIntersightBiosPolicy#slot_front_nvme24option_rom}
  */
  readonly slotFrontNvme24OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 25 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme25linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme25linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme25linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme25linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme25linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme25linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme25linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme25link_speed DataIntersightBiosPolicy#slot_front_nvme25link_speed}
  */
  readonly slotFrontNvme25LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 25 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme25option_rom DataIntersightBiosPolicy#slot_front_nvme25option_rom}
  */
  readonly slotFrontNvme25OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 26 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme26linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme26linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme26linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme26linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme26linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme26linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme26linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme26link_speed DataIntersightBiosPolicy#slot_front_nvme26link_speed}
  */
  readonly slotFrontNvme26LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 26 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme26option_rom DataIntersightBiosPolicy#slot_front_nvme26option_rom}
  */
  readonly slotFrontNvme26OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 27 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme27linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme27linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme27linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme27linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme27linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme27linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme27linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme27link_speed DataIntersightBiosPolicy#slot_front_nvme27link_speed}
  */
  readonly slotFrontNvme27LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 27 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme27option_rom DataIntersightBiosPolicy#slot_front_nvme27option_rom}
  */
  readonly slotFrontNvme27OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 28 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme28linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme28linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme28linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme28linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme28linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme28linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme28linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme28link_speed DataIntersightBiosPolicy#slot_front_nvme28link_speed}
  */
  readonly slotFrontNvme28LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 28 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme28option_rom DataIntersightBiosPolicy#slot_front_nvme28option_rom}
  */
  readonly slotFrontNvme28OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 29 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme29linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme29linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme29linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme29linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme29linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme29linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme29linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme29link_speed DataIntersightBiosPolicy#slot_front_nvme29link_speed}
  */
  readonly slotFrontNvme29LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 29 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme29option_rom DataIntersightBiosPolicy#slot_front_nvme29option_rom}
  */
  readonly slotFrontNvme29OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme2linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme2linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme2link_speed DataIntersightBiosPolicy#slot_front_nvme2link_speed}
  */
  readonly slotFrontNvme2LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 2 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme2option_rom DataIntersightBiosPolicy#slot_front_nvme2option_rom}
  */
  readonly slotFrontNvme2OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 30 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme30linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme30linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme30linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme30linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme30linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme30linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme30linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme30link_speed DataIntersightBiosPolicy#slot_front_nvme30link_speed}
  */
  readonly slotFrontNvme30LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 30 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme30option_rom DataIntersightBiosPolicy#slot_front_nvme30option_rom}
  */
  readonly slotFrontNvme30OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 31 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme31linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme31linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme31linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme31linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme31linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme31linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme31linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme31link_speed DataIntersightBiosPolicy#slot_front_nvme31link_speed}
  */
  readonly slotFrontNvme31LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 31 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme31option_rom DataIntersightBiosPolicy#slot_front_nvme31option_rom}
  */
  readonly slotFrontNvme31OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front NVME 32 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme32linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme32linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme32linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme32linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme32linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme32linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme32linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme32link_speed DataIntersightBiosPolicy#slot_front_nvme32link_speed}
  */
  readonly slotFrontNvme32LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 32 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme32option_rom DataIntersightBiosPolicy#slot_front_nvme32option_rom}
  */
  readonly slotFrontNvme32OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 3 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme3linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme3linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme3linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme3linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme3linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme3linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme3linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme3link_speed DataIntersightBiosPolicy#slot_front_nvme3link_speed}
  */
  readonly slotFrontNvme3LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 3 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme3option_rom DataIntersightBiosPolicy#slot_front_nvme3option_rom}
  */
  readonly slotFrontNvme3OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 4 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme4linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme4linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme4linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme4linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme4linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme4linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme4linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme4link_speed DataIntersightBiosPolicy#slot_front_nvme4link_speed}
  */
  readonly slotFrontNvme4LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 4 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme4option_rom DataIntersightBiosPolicy#slot_front_nvme4option_rom}
  */
  readonly slotFrontNvme4OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 5 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme5linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme5linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme5linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme5linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme5linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme5linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme5linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme5link_speed DataIntersightBiosPolicy#slot_front_nvme5link_speed}
  */
  readonly slotFrontNvme5LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 5 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme5option_rom DataIntersightBiosPolicy#slot_front_nvme5option_rom}
  */
  readonly slotFrontNvme5OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 6 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme6linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme6linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme6linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme6linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme6linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme6linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme6linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme6link_speed DataIntersightBiosPolicy#slot_front_nvme6link_speed}
  */
  readonly slotFrontNvme6LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 6 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme6option_rom DataIntersightBiosPolicy#slot_front_nvme6option_rom}
  */
  readonly slotFrontNvme6OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 7 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme7linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme7linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme7linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme7linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme7linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme7linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme7linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme7link_speed DataIntersightBiosPolicy#slot_front_nvme7link_speed}
  */
  readonly slotFrontNvme7LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 7 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme7option_rom DataIntersightBiosPolicy#slot_front_nvme7option_rom}
  */
  readonly slotFrontNvme7OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 8 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme8linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme8linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme8linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme8linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme8linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme8linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme8linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme8link_speed DataIntersightBiosPolicy#slot_front_nvme8link_speed}
  */
  readonly slotFrontNvme8LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 8 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme8option_rom DataIntersightBiosPolicy#slot_front_nvme8option_rom}
  */
  readonly slotFrontNvme8OptionRom?: string;
  /**
  * BIOS Token for setting Front NVME 9 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontNvme9linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontNvme9linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontNvme9linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontNvme9linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontNvme9linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotFrontNvme9linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotFrontNvme9linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme9link_speed DataIntersightBiosPolicy#slot_front_nvme9link_speed}
  */
  readonly slotFrontNvme9LinkSpeed?: string;
  /**
  * BIOS Token for setting Front NVME 9 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_nvme9option_rom DataIntersightBiosPolicy#slot_front_nvme9option_rom}
  */
  readonly slotFrontNvme9OptionRom?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontSlot5linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontSlot5linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontSlot5linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontSlot5linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontSlot5linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_slot5link_speed DataIntersightBiosPolicy#slot_front_slot5link_speed}
  */
  readonly slotFrontSlot5LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Front2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotFrontSlot6linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotFrontSlot6linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotFrontSlot6linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotFrontSlot6linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotFrontSlot6linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_front_slot6link_speed DataIntersightBiosPolicy#slot_front_slot6link_speed}
  */
  readonly slotFrontSlot6LinkSpeed?: string;
  /**
  * BIOS Token for setting GPU 1 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu1state DataIntersightBiosPolicy#slot_gpu1state}
  */
  readonly slotGpu1State?: string;
  /**
  * BIOS Token for setting GPU 2 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu2state DataIntersightBiosPolicy#slot_gpu2state}
  */
  readonly slotGpu2State?: string;
  /**
  * BIOS Token for setting GPU 3 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu3state DataIntersightBiosPolicy#slot_gpu3state}
  */
  readonly slotGpu3State?: string;
  /**
  * BIOS Token for setting GPU 4 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu4state DataIntersightBiosPolicy#slot_gpu4state}
  */
  readonly slotGpu4State?: string;
  /**
  * BIOS Token for setting GPU 5 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu5state DataIntersightBiosPolicy#slot_gpu5state}
  */
  readonly slotGpu5State?: string;
  /**
  * BIOS Token for setting GPU 6 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu6state DataIntersightBiosPolicy#slot_gpu6state}
  */
  readonly slotGpu6State?: string;
  /**
  * BIOS Token for setting GPU 7 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu7state DataIntersightBiosPolicy#slot_gpu7state}
  */
  readonly slotGpu7State?: string;
  /**
  * BIOS Token for setting GPU 8 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_gpu8state DataIntersightBiosPolicy#slot_gpu8state}
  */
  readonly slotGpu8State?: string;
  /**
  * BIOS Token for setting PCIe Slot:HBA Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotHbaLinkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotHbaLinkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotHbaLinkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotHbaLinkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotHbaLinkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_hba_link_speed DataIntersightBiosPolicy#slot_hba_link_speed}
  */
  readonly slotHbaLinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:HBA OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring SlotHbaState token.
  * * `enabled` - Value - enabled for configuring SlotHbaState token.
  * * `Legacy Only` - Value - Legacy Only for configuring SlotHbaState token.
  * * `UEFI Only` - Value - UEFI Only for configuring SlotHbaState token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_hba_state DataIntersightBiosPolicy#slot_hba_state}
  */
  readonly slotHbaState?: string;
  /**
  * BIOS Token for setting PCIe LOM:1 Link configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_lom1link DataIntersightBiosPolicy#slot_lom1link}
  */
  readonly slotLom1Link?: string;
  /**
  * BIOS Token for setting PCIe LOM:2 Link configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_lom2link DataIntersightBiosPolicy#slot_lom2link}
  */
  readonly slotLom2Link?: string;
  /**
  * BIOS Token for setting Slot Mezz State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring SlotMezzState token.
  * * `enabled` - Value - enabled for configuring SlotMezzState token.
  * * `Legacy Only` - Value - Legacy Only for configuring SlotMezzState token.
  * * `UEFI Only` - Value - UEFI Only for configuring SlotMezzState token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_mezz_state DataIntersightBiosPolicy#slot_mezz_state}
  */
  readonly slotMezzState?: string;
  /**
  * BIOS Token for setting PCIe Slot:MLOM Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotMlomLinkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotMlomLinkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotMlomLinkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotMlomLinkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotMlomLinkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotMlomLinkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotMlomLinkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_mlom_link_speed DataIntersightBiosPolicy#slot_mlom_link_speed}
  */
  readonly slotMlomLinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot MLOM OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring SlotMlomState token.
  * * `enabled` - Value - enabled for configuring SlotMlomState token.
  * * `Legacy Only` - Value - Legacy Only for configuring SlotMlomState token.
  * * `UEFI Only` - Value - UEFI Only for configuring SlotMlomState token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_mlom_state DataIntersightBiosPolicy#slot_mlom_state}
  */
  readonly slotMlomState?: string;
  /**
  * BIOS Token for setting MRAID Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotMraidLinkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotMraidLinkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotMraidLinkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotMraidLinkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotMraidLinkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotMraidLinkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotMraidLinkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_mraid_link_speed DataIntersightBiosPolicy#slot_mraid_link_speed}
  */
  readonly slotMraidLinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot MRAID OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_mraid_state DataIntersightBiosPolicy#slot_mraid_state}
  */
  readonly slotMraidState?: string;
  /**
  * BIOS Token for setting PCIe Slot N10 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n10state DataIntersightBiosPolicy#slot_n10state}
  */
  readonly slotN10State?: string;
  /**
  * BIOS Token for setting PCIe Slot N11 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n11state DataIntersightBiosPolicy#slot_n11state}
  */
  readonly slotN11State?: string;
  /**
  * BIOS Token for setting PCIe Slot N12 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n12state DataIntersightBiosPolicy#slot_n12state}
  */
  readonly slotN12State?: string;
  /**
  * BIOS Token for setting PCIe Slot N13 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n13state DataIntersightBiosPolicy#slot_n13state}
  */
  readonly slotN13State?: string;
  /**
  * BIOS Token for setting PCIe Slot N14 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n14state DataIntersightBiosPolicy#slot_n14state}
  */
  readonly slotN14State?: string;
  /**
  * BIOS Token for setting PCIe Slot N15 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n15state DataIntersightBiosPolicy#slot_n15state}
  */
  readonly slotN15State?: string;
  /**
  * BIOS Token for setting PCIe Slot N16 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n16state DataIntersightBiosPolicy#slot_n16state}
  */
  readonly slotN16State?: string;
  /**
  * BIOS Token for setting PCIe Slot N17 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n17state DataIntersightBiosPolicy#slot_n17state}
  */
  readonly slotN17State?: string;
  /**
  * BIOS Token for setting PCIe Slot N18 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n18state DataIntersightBiosPolicy#slot_n18state}
  */
  readonly slotN18State?: string;
  /**
  * BIOS Token for setting PCIe Slot N19 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n19state DataIntersightBiosPolicy#slot_n19state}
  */
  readonly slotN19State?: string;
  /**
  * BIOS Token for setting PCIe Slot N1 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring SlotN1state token.
  * * `enabled` - Value - enabled for configuring SlotN1state token.
  * * `Legacy Only` - Value - Legacy Only for configuring SlotN1state token.
  * * `UEFI Only` - Value - UEFI Only for configuring SlotN1state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n1state DataIntersightBiosPolicy#slot_n1state}
  */
  readonly slotN1State?: string;
  /**
  * BIOS Token for setting PCIe Slot N20 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n20state DataIntersightBiosPolicy#slot_n20state}
  */
  readonly slotN20State?: string;
  /**
  * BIOS Token for setting PCIe Slot N21 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n21state DataIntersightBiosPolicy#slot_n21state}
  */
  readonly slotN21State?: string;
  /**
  * BIOS Token for setting PCIe Slot N22 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n22state DataIntersightBiosPolicy#slot_n22state}
  */
  readonly slotN22State?: string;
  /**
  * BIOS Token for setting PCIe Slot N23 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n23state DataIntersightBiosPolicy#slot_n23state}
  */
  readonly slotN23State?: string;
  /**
  * BIOS Token for setting PCIe Slot N24 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n24state DataIntersightBiosPolicy#slot_n24state}
  */
  readonly slotN24State?: string;
  /**
  * BIOS Token for setting PCIe Slot N2 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring SlotN2state token.
  * * `enabled` - Value - enabled for configuring SlotN2state token.
  * * `Legacy Only` - Value - Legacy Only for configuring SlotN2state token.
  * * `UEFI Only` - Value - UEFI Only for configuring SlotN2state token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n2state DataIntersightBiosPolicy#slot_n2state}
  */
  readonly slotN2State?: string;
  /**
  * BIOS Token for setting PCIe Slot N3 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n3state DataIntersightBiosPolicy#slot_n3state}
  */
  readonly slotN3State?: string;
  /**
  * BIOS Token for setting PCIe Slot N4 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n4state DataIntersightBiosPolicy#slot_n4state}
  */
  readonly slotN4State?: string;
  /**
  * BIOS Token for setting PCIe Slot N5 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n5state DataIntersightBiosPolicy#slot_n5state}
  */
  readonly slotN5State?: string;
  /**
  * BIOS Token for setting PCIe Slot N6 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n6state DataIntersightBiosPolicy#slot_n6state}
  */
  readonly slotN6State?: string;
  /**
  * BIOS Token for setting PCIe Slot N7 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n7state DataIntersightBiosPolicy#slot_n7state}
  */
  readonly slotN7State?: string;
  /**
  * BIOS Token for setting PCIe Slot N8 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n8state DataIntersightBiosPolicy#slot_n8state}
  */
  readonly slotN8State?: string;
  /**
  * BIOS Token for setting PCIe Slot N9 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_n9state DataIntersightBiosPolicy#slot_n9state}
  */
  readonly slotN9State?: string;
  /**
  * BIOS Token for setting RAID Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRaidLinkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRaidLinkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRaidLinkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRaidLinkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRaidLinkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_raid_link_speed DataIntersightBiosPolicy#slot_raid_link_speed}
  */
  readonly slotRaidLinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot RAID OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_raid_state DataIntersightBiosPolicy#slot_raid_state}
  */
  readonly slotRaidState?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRearNvme1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRearNvme1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRearNvme1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRearNvme1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRearNvme1linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotRearNvme1linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotRearNvme1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme1link_speed DataIntersightBiosPolicy#slot_rear_nvme1link_speed}
  */
  readonly slotRearNvme1LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 1 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme1state DataIntersightBiosPolicy#slot_rear_nvme1state}
  */
  readonly slotRearNvme1State?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRearNvme2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRearNvme2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRearNvme2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRearNvme2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRearNvme2linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotRearNvme2linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotRearNvme2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme2link_speed DataIntersightBiosPolicy#slot_rear_nvme2link_speed}
  */
  readonly slotRearNvme2LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 2 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme2state DataIntersightBiosPolicy#slot_rear_nvme2state}
  */
  readonly slotRearNvme2State?: string;
  /**
  * BIOS Token for setting Rear NVME 3 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRearNvme3linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRearNvme3linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRearNvme3linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRearNvme3linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRearNvme3linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotRearNvme3linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotRearNvme3linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme3link_speed DataIntersightBiosPolicy#slot_rear_nvme3link_speed}
  */
  readonly slotRearNvme3LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 3 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme3state DataIntersightBiosPolicy#slot_rear_nvme3state}
  */
  readonly slotRearNvme3State?: string;
  /**
  * BIOS Token for setting Rear NVME 4 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRearNvme4linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRearNvme4linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRearNvme4linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRearNvme4linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRearNvme4linkSpeed token.
  * * `GEN4` - Value - GEN4 for configuring SlotRearNvme4linkSpeed token.
  * * `GEN5` - Value - GEN5 for configuring SlotRearNvme4linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme4link_speed DataIntersightBiosPolicy#slot_rear_nvme4link_speed}
  */
  readonly slotRearNvme4LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 4 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme4state DataIntersightBiosPolicy#slot_rear_nvme4state}
  */
  readonly slotRearNvme4State?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 5 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme5state DataIntersightBiosPolicy#slot_rear_nvme5state}
  */
  readonly slotRearNvme5State?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 6 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme6state DataIntersightBiosPolicy#slot_rear_nvme6state}
  */
  readonly slotRearNvme6State?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 7 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme7state DataIntersightBiosPolicy#slot_rear_nvme7state}
  */
  readonly slotRearNvme7State?: string;
  /**
  * BIOS Token for setting PCIe Slot:Rear NVME 8 OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_rear_nvme8state DataIntersightBiosPolicy#slot_rear_nvme8state}
  */
  readonly slotRearNvme8State?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser1link_speed DataIntersightBiosPolicy#slot_riser1link_speed}
  */
  readonly slotRiser1LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser1 Slot1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser1slot1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser1slot1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser1slot1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser1slot1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser1slot1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser1slot1link_speed DataIntersightBiosPolicy#slot_riser1slot1link_speed}
  */
  readonly slotRiser1Slot1LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser1 Slot2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser1slot2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser1slot2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser1slot2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser1slot2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser1slot2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser1slot2link_speed DataIntersightBiosPolicy#slot_riser1slot2link_speed}
  */
  readonly slotRiser1Slot2LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser1 Slot3 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser1slot3linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser1slot3linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser1slot3linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser1slot3linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser1slot3linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser1slot3link_speed DataIntersightBiosPolicy#slot_riser1slot3link_speed}
  */
  readonly slotRiser1Slot3LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser2link_speed DataIntersightBiosPolicy#slot_riser2link_speed}
  */
  readonly slotRiser2LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser2 Slot4 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser2slot4linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser2slot4linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser2slot4linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser2slot4linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser2slot4linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser2slot4link_speed DataIntersightBiosPolicy#slot_riser2slot4link_speed}
  */
  readonly slotRiser2Slot4LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser2 Slot5 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser2slot5linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser2slot5linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser2slot5linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser2slot5linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser2slot5linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser2slot5link_speed DataIntersightBiosPolicy#slot_riser2slot5link_speed}
  */
  readonly slotRiser2Slot5LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:Riser2 Slot6 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotRiser2slot6linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotRiser2slot6linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotRiser2slot6linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotRiser2slot6linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotRiser2slot6linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_riser2slot6link_speed DataIntersightBiosPolicy#slot_riser2slot6link_speed}
  */
  readonly slotRiser2Slot6LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:SAS OptionROM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring SlotSasState token.
  * * `enabled` - Value - enabled for configuring SlotSasState token.
  * * `Legacy Only` - Value - Legacy Only for configuring SlotSasState token.
  * * `UEFI Only` - Value - UEFI Only for configuring SlotSasState token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_sas_state DataIntersightBiosPolicy#slot_sas_state}
  */
  readonly slotSasState?: string;
  /**
  * BIOS Token for setting PCIe Slot:FrontSSD1 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotSsdSlot1linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotSsdSlot1linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotSsdSlot1linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotSsdSlot1linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotSsdSlot1linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_ssd_slot1link_speed DataIntersightBiosPolicy#slot_ssd_slot1link_speed}
  */
  readonly slotSsdSlot1LinkSpeed?: string;
  /**
  * BIOS Token for setting PCIe Slot:FrontSSD2 Link Speed configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SlotSsdSlot2linkSpeed token.
  * * `Disabled` - Value - Disabled for configuring SlotSsdSlot2linkSpeed token.
  * * `GEN1` - Value - GEN1 for configuring SlotSsdSlot2linkSpeed token.
  * * `GEN2` - Value - GEN2 for configuring SlotSsdSlot2linkSpeed token.
  * * `GEN3` - Value - GEN3 for configuring SlotSsdSlot2linkSpeed token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#slot_ssd_slot2link_speed DataIntersightBiosPolicy#slot_ssd_slot2link_speed}
  */
  readonly slotSsdSlot2LinkSpeed?: string;
  /**
  * BIOS Token for setting SMEE configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#smee DataIntersightBiosPolicy#smee}
  */
  readonly smee?: string;
  /**
  * BIOS Token for setting SMT Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring SmtMode token.
  * * `Off` - Value - Off for configuring SmtMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#smt_mode DataIntersightBiosPolicy#smt_mode}
  */
  readonly smtMode?: string;
  /**
  * BIOS Token for setting Sub Numa Clustering configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Snc token.
  * * `disabled` - Value - disabled for configuring Snc token.
  * * `enabled` - Value - enabled for configuring Snc token.
  * * `SNC2` - Value - SNC2 for configuring Snc token.
  * * `SNC4` - Value - SNC4 for configuring Snc token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#snc DataIntersightBiosPolicy#snc}
  */
  readonly snc?: string;
  /**
  * BIOS Token for setting Snoopy Mode for 2LM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#snoopy_mode_for2lm DataIntersightBiosPolicy#snoopy_mode_for2lm}
  */
  readonly snoopyModeFor2Lm?: string;
  /**
  * BIOS Token for setting Snoopy Mode for AD configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#snoopy_mode_for_ad DataIntersightBiosPolicy#snoopy_mode_for_ad}
  */
  readonly snoopyModeForAd?: string;
  /**
  * BIOS Token for setting Sparing Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `dimm-sparing` - Value - dimm-sparing for configuring SparingMode token.
  * * `rank-sparing` - Value - rank-sparing for configuring SparingMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sparing_mode DataIntersightBiosPolicy#sparing_mode}
  */
  readonly sparingMode?: string;
  /**
  * BIOS Token for setting SR-IOV Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sr_iov DataIntersightBiosPolicy#sr_iov}
  */
  readonly srIov?: string;
  /**
  * BIOS Token for setting DCU Streamer Prefetch configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring StreamerPrefetch token.
  * * `disabled` - Value - disabled for configuring StreamerPrefetch token.
  * * `enabled` - Value - enabled for configuring StreamerPrefetch token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#streamer_prefetch DataIntersightBiosPolicy#streamer_prefetch}
  */
  readonly streamerPrefetch?: string;
  /**
  * BIOS Token for setting SVM Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#svm_mode DataIntersightBiosPolicy#svm_mode}
  */
  readonly svmMode?: string;
  /**
  * BIOS Token for setting Terminal Type configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `pc-ansi` - Value - pc-ansi for configuring TerminalType token.
  * * `vt100` - Value - vt100 for configuring TerminalType token.
  * * `vt100-plus` - Value - vt100-plus for configuring TerminalType token.
  * * `vt-utf8` - Value - vt-utf8 for configuring TerminalType token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#terminal_type DataIntersightBiosPolicy#terminal_type}
  */
  readonly terminalType?: string;
  /**
  * BIOS Token for setting Trusted Platform Module State configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#tpm_control DataIntersightBiosPolicy#tpm_control}
  */
  readonly tpmControl?: string;
  /**
  * BIOS Token for setting TPM Pending Operation configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `None` - Value - None for configuring TpmPendingOperation token.
  * * `TpmClear` - Value - TpmClear for configuring TpmPendingOperation token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#tpm_pending_operation DataIntersightBiosPolicy#tpm_pending_operation}
  */
  readonly tpmPendingOperation?: string;
  /**
  * BIOS Token for setting TPM Minimal Physical Presence configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#tpm_ppi_required DataIntersightBiosPolicy#tpm_ppi_required}
  */
  readonly tpmPpiRequired?: string;
  /**
  * BIOS Token for setting Security Device Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#tpm_support DataIntersightBiosPolicy#tpm_support}
  */
  readonly tpmSupport?: string;
  /**
  * BIOS Token for setting Transparent Secure Memory Encryption configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring Tsme token.
  * * `disabled` - Value - disabled for configuring Tsme token.
  * * `enabled` - Value - enabled for configuring Tsme token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#tsme DataIntersightBiosPolicy#tsme}
  */
  readonly tsme?: string;
  /**
  * BIOS Token for setting Intel Trusted Execution Technology Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#txt_support DataIntersightBiosPolicy#txt_support}
  */
  readonly txtSupport?: string;
  /**
  * BIOS Token for setting Boot Order Rules configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Loose` - Value - Loose for configuring UcsmBootOrderRule token.
  * * `Strict` - Value - Strict for configuring UcsmBootOrderRule token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ucsm_boot_order_rule DataIntersightBiosPolicy#ucsm_boot_order_rule}
  */
  readonly ucsmBootOrderRule?: string;
  /**
  * BIOS Token for setting UEFI Memory Map Special Purpose Memory Flag configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#uefi_mem_map_sp_flag_en DataIntersightBiosPolicy#uefi_mem_map_sp_flag_en}
  */
  readonly uefiMemMapSpFlagEn?: string;
  /**
  * BIOS Token for setting Uncore Frequency Scaling configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `disabled` - Value - disabled for configuring UfsDisable token.
  * * `enabled` - Value - enabled for configuring UfsDisable token.
  * * `Mode 0` - Value - Mode 0 for configuring UfsDisable token.
  * * `Mode 1` - Value - Mode 1 for configuring UfsDisable token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ufs_disable DataIntersightBiosPolicy#ufs_disable}
  */
  readonly ufsDisable?: string;
  /**
  * BIOS Token for setting UMA Based Clustering configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Disable (All2All)` - Value - Disable (All2All) for configuring UmaBasedClustering token.
  * * `Hemisphere (2-clusters)` - Value - Hemisphere (2-clusters) for configuring UmaBasedClustering token.
  * * `Quadrant (4-clusters)` - Value - Quadrant (4-clusters) for configuring UmaBasedClustering token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#uma_based_clustering DataIntersightBiosPolicy#uma_based_clustering}
  */
  readonly umaBasedClustering?: string;
  /**
  * BIOS Token for setting UPI Link Enablement configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1` - Value - 1 for configuring UpiLinkEnablement token.
  * * `2` - Value - 2 for configuring UpiLinkEnablement token.
  * * `3` - Value - 3 for configuring UpiLinkEnablement token.
  * * `Auto` - Value - Auto for configuring UpiLinkEnablement token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#upi_link_enablement DataIntersightBiosPolicy#upi_link_enablement}
  */
  readonly upiLinkEnablement?: string;
  /**
  * BIOS Token for setting UPI Power Manangement configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#upi_power_management DataIntersightBiosPolicy#upi_power_management}
  */
  readonly upiPowerManagement?: string;
  /**
  * BIOS Token for setting Port 60/64 Emulation configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_emul6064 DataIntersightBiosPolicy#usb_emul6064}
  */
  readonly usbEmul6064?: string;
  /**
  * BIOS Token for setting USB Port Front configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_port_front DataIntersightBiosPolicy#usb_port_front}
  */
  readonly usbPortFront?: string;
  /**
  * BIOS Token for setting USB Port Internal configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_port_internal DataIntersightBiosPolicy#usb_port_internal}
  */
  readonly usbPortInternal?: string;
  /**
  * BIOS Token for setting USB Port KVM configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_port_kvm DataIntersightBiosPolicy#usb_port_kvm}
  */
  readonly usbPortKvm?: string;
  /**
  * BIOS Token for setting USB Port Rear configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_port_rear DataIntersightBiosPolicy#usb_port_rear}
  */
  readonly usbPortRear?: string;
  /**
  * BIOS Token for setting USB Port SD Card configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_port_sd_card DataIntersightBiosPolicy#usb_port_sd_card}
  */
  readonly usbPortSdCard?: string;
  /**
  * BIOS Token for setting USB Port VMedia configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_port_vmedia DataIntersightBiosPolicy#usb_port_vmedia}
  */
  readonly usbPortVmedia?: string;
  /**
  * BIOS Token for setting XHCI Legacy Support configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#usb_xhci_support DataIntersightBiosPolicy#usb_xhci_support}
  */
  readonly usbXhciSupport?: string;
  /**
  * BIOS Token for setting VGA Priority configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Offboard` - Value - Offboard for configuring VgaPriority token.
  * * `Onboard` - Value - Onboard for configuring VgaPriority token.
  * * `Onboard VGA Disabled` - Value - Onboard VGA Disabled for configuring VgaPriority token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#vga_priority DataIntersightBiosPolicy#vga_priority}
  */
  readonly vgaPriority?: string;
  /**
  * BIOS Token for setting Virtual NUMA configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#virtual_numa DataIntersightBiosPolicy#virtual_numa}
  */
  readonly virtualNuma?: string;
  /**
  * BIOS Token for setting VMD Enablement configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#vmd_enable DataIntersightBiosPolicy#vmd_enable}
  */
  readonly vmdEnable?: string;
  /**
  * BIOS Token for setting Volatile Memory Mode configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `1LM` - Value - 1LM for configuring VolMemoryMode token.
  * * `2LM` - Value - 2LM for configuring VolMemoryMode token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#vol_memory_mode DataIntersightBiosPolicy#vol_memory_mode}
  */
  readonly volMemoryMode?: string;
  /**
  * BIOS Token for setting Workload Configuration configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Balanced` - Value - Balanced for configuring WorkLoadConfig token.
  * * `I/O Sensitive` - Value - I/O Sensitive for configuring WorkLoadConfig token.
  * * `NUMA` - Value - NUMA for configuring WorkLoadConfig token.
  * * `UMA` - Value - UMA for configuring WorkLoadConfig token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#work_load_config DataIntersightBiosPolicy#work_load_config}
  */
  readonly workLoadConfig?: string;
  /**
  * BIOS Token for setting X2APIC Opt-Out Flag configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `enabled` - Enables the BIOS setting.
  * * `disabled` - Disables the BIOS setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#x2apic_opt_out DataIntersightBiosPolicy#x2apic_opt_out}
  */
  readonly x2ApicOptOut?: string;
  /**
  * BIOS Token for setting XPT Prefetch configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring XptPrefetch token.
  * * `disabled` - Value - disabled for configuring XptPrefetch token.
  * * `enabled` - Value - enabled for configuring XptPrefetch token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#xpt_prefetch DataIntersightBiosPolicy#xpt_prefetch}
  */
  readonly xptPrefetch?: string;
  /**
  * BIOS Token for setting XPT Remote Prefetch configuration.
  * * `platform-default` - Default value used by the platform for the BIOS setting.
  * * `Auto` - Value - Auto for configuring XptRemotePrefetch token.
  * * `disabled` - Value - disabled for configuring XptRemotePrefetch token.
  * * `enabled` - Value - enabled for configuring XptRemotePrefetch token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#xpt_remote_prefetch DataIntersightBiosPolicy#xpt_remote_prefetch}
  */
  readonly xptRemotePrefetch?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ancestors DataIntersightBiosPolicy#ancestors}
  */
  readonly ancestors?: DataIntersightBiosPolicyAncestors[] | cdktf.IResolvable;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#organization DataIntersightBiosPolicy#organization}
  */
  readonly organization?: DataIntersightBiosPolicyOrganization;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#parent DataIntersightBiosPolicy#parent}
  */
  readonly parent?: DataIntersightBiosPolicyParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#permission_resources DataIntersightBiosPolicy#permission_resources}
  */
  readonly permissionResources?: DataIntersightBiosPolicyPermissionResources[] | cdktf.IResolvable;
  /**
  * profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#profiles DataIntersightBiosPolicy#profiles}
  */
  readonly profiles?: DataIntersightBiosPolicyProfiles[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#tags DataIntersightBiosPolicy#tags}
  */
  readonly tags?: DataIntersightBiosPolicyTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#version_context DataIntersightBiosPolicy#version_context}
  */
  readonly versionContext?: DataIntersightBiosPolicyVersionContext;
}
export interface DataIntersightBiosPolicyResultsAncestors {
}

export function dataIntersightBiosPolicyResultsAncestorsToTerraform(struct?: DataIntersightBiosPolicyResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsAncestorsToHclTerraform(struct?: DataIntersightBiosPolicyResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsAncestorsOutputReference {
    return new DataIntersightBiosPolicyResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsOrganization {
}

export function dataIntersightBiosPolicyResultsOrganizationToTerraform(struct?: DataIntersightBiosPolicyResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsOrganizationToHclTerraform(struct?: DataIntersightBiosPolicyResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsOrganizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsOrganizationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsOrganizationOutputReference {
    return new DataIntersightBiosPolicyResultsOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsParent {
}

export function dataIntersightBiosPolicyResultsParentToTerraform(struct?: DataIntersightBiosPolicyResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsParentToHclTerraform(struct?: DataIntersightBiosPolicyResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsParentOutputReference {
    return new DataIntersightBiosPolicyResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsPermissionResources {
}

export function dataIntersightBiosPolicyResultsPermissionResourcesToTerraform(struct?: DataIntersightBiosPolicyResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsPermissionResourcesToHclTerraform(struct?: DataIntersightBiosPolicyResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsPermissionResourcesOutputReference {
    return new DataIntersightBiosPolicyResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsProfiles {
}

export function dataIntersightBiosPolicyResultsProfilesToTerraform(struct?: DataIntersightBiosPolicyResultsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsProfilesToHclTerraform(struct?: DataIntersightBiosPolicyResultsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsProfilesOutputReference {
    return new DataIntersightBiosPolicyResultsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsTagsAncestorDefinitions {
}

export function dataIntersightBiosPolicyResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightBiosPolicyResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightBiosPolicyResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightBiosPolicyResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsTagsDefinition {
}

export function dataIntersightBiosPolicyResultsTagsDefinitionToTerraform(struct?: DataIntersightBiosPolicyResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsTagsDefinitionToHclTerraform(struct?: DataIntersightBiosPolicyResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsTagsDefinitionOutputReference {
    return new DataIntersightBiosPolicyResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsTags {
}

export function dataIntersightBiosPolicyResultsTagsToTerraform(struct?: DataIntersightBiosPolicyResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsTagsToHclTerraform(struct?: DataIntersightBiosPolicyResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightBiosPolicyResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightBiosPolicyResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // sys_tag - computed: true, optional: false, required: false
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightBiosPolicyResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsTagsOutputReference {
    return new DataIntersightBiosPolicyResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsVersionContextInterestedMos {
}

export function dataIntersightBiosPolicyResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightBiosPolicyResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightBiosPolicyResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightBiosPolicyResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsVersionContextRefMo {
}

export function dataIntersightBiosPolicyResultsVersionContextRefMoToTerraform(struct?: DataIntersightBiosPolicyResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightBiosPolicyResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightBiosPolicyResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsVersionContextRefMoOutputReference {
    return new DataIntersightBiosPolicyResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResultsVersionContext {
}

export function dataIntersightBiosPolicyResultsVersionContextToTerraform(struct?: DataIntersightBiosPolicyResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsVersionContextToHclTerraform(struct?: DataIntersightBiosPolicyResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightBiosPolicyResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightBiosPolicyResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightBiosPolicyResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsVersionContextOutputReference {
    return new DataIntersightBiosPolicyResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyResults {
}

export function dataIntersightBiosPolicyResultsToTerraform(struct?: DataIntersightBiosPolicyResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightBiosPolicyResultsToHclTerraform(struct?: DataIntersightBiosPolicyResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightBiosPolicyResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // acpi_srat_sp_flag_en - computed: true, optional: false, required: false
  public get acpiSratSpFlagEn() {
    return this.getStringAttribute('acpi_srat_sp_flag_en');
  }

  // acs_control_gpu1state - computed: true, optional: false, required: false
  public get acsControlGpu1State() {
    return this.getStringAttribute('acs_control_gpu1state');
  }

  // acs_control_gpu2state - computed: true, optional: false, required: false
  public get acsControlGpu2State() {
    return this.getStringAttribute('acs_control_gpu2state');
  }

  // acs_control_gpu3state - computed: true, optional: false, required: false
  public get acsControlGpu3State() {
    return this.getStringAttribute('acs_control_gpu3state');
  }

  // acs_control_gpu4state - computed: true, optional: false, required: false
  public get acsControlGpu4State() {
    return this.getStringAttribute('acs_control_gpu4state');
  }

  // acs_control_gpu5state - computed: true, optional: false, required: false
  public get acsControlGpu5State() {
    return this.getStringAttribute('acs_control_gpu5state');
  }

  // acs_control_gpu6state - computed: true, optional: false, required: false
  public get acsControlGpu6State() {
    return this.getStringAttribute('acs_control_gpu6state');
  }

  // acs_control_gpu7state - computed: true, optional: false, required: false
  public get acsControlGpu7State() {
    return this.getStringAttribute('acs_control_gpu7state');
  }

  // acs_control_gpu8state - computed: true, optional: false, required: false
  public get acsControlGpu8State() {
    return this.getStringAttribute('acs_control_gpu8state');
  }

  // acs_control_slot11state - computed: true, optional: false, required: false
  public get acsControlSlot11State() {
    return this.getStringAttribute('acs_control_slot11state');
  }

  // acs_control_slot12state - computed: true, optional: false, required: false
  public get acsControlSlot12State() {
    return this.getStringAttribute('acs_control_slot12state');
  }

  // acs_control_slot13state - computed: true, optional: false, required: false
  public get acsControlSlot13State() {
    return this.getStringAttribute('acs_control_slot13state');
  }

  // acs_control_slot14state - computed: true, optional: false, required: false
  public get acsControlSlot14State() {
    return this.getStringAttribute('acs_control_slot14state');
  }

  // adaptive_refresh_mgmt_level - computed: true, optional: false, required: false
  public get adaptiveRefreshMgmtLevel() {
    return this.getStringAttribute('adaptive_refresh_mgmt_level');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // adjacent_cache_line_prefetch - computed: true, optional: false, required: false
  public get adjacentCacheLinePrefetch() {
    return this.getStringAttribute('adjacent_cache_line_prefetch');
  }

  // advanced_mem_test - computed: true, optional: false, required: false
  public get advancedMemTest() {
    return this.getStringAttribute('advanced_mem_test');
  }

  // all_usb_devices - computed: true, optional: false, required: false
  public get allUsbDevices() {
    return this.getStringAttribute('all_usb_devices');
  }

  // altitude - computed: true, optional: false, required: false
  public get altitude() {
    return this.getStringAttribute('altitude');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightBiosPolicyResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // aspm_support - computed: true, optional: false, required: false
  public get aspmSupport() {
    return this.getStringAttribute('aspm_support');
  }

  // assert_nmi_on_perr - computed: true, optional: false, required: false
  public get assertNmiOnPerr() {
    return this.getStringAttribute('assert_nmi_on_perr');
  }

  // assert_nmi_on_serr - computed: true, optional: false, required: false
  public get assertNmiOnSerr() {
    return this.getStringAttribute('assert_nmi_on_serr');
  }

  // auto_cc_state - computed: true, optional: false, required: false
  public get autoCcState() {
    return this.getStringAttribute('auto_cc_state');
  }

  // autonumous_cstate_enable - computed: true, optional: false, required: false
  public get autonumousCstateEnable() {
    return this.getStringAttribute('autonumous_cstate_enable');
  }

  // baud_rate - computed: true, optional: false, required: false
  public get baudRate() {
    return this.getStringAttribute('baud_rate');
  }

  // bme_dma_mitigation - computed: true, optional: false, required: false
  public get bmeDmaMitigation() {
    return this.getStringAttribute('bme_dma_mitigation');
  }

  // boot_option_num_retry - computed: true, optional: false, required: false
  public get bootOptionNumRetry() {
    return this.getStringAttribute('boot_option_num_retry');
  }

  // boot_option_re_cool_down - computed: true, optional: false, required: false
  public get bootOptionReCoolDown() {
    return this.getStringAttribute('boot_option_re_cool_down');
  }

  // boot_option_retry - computed: true, optional: false, required: false
  public get bootOptionRetry() {
    return this.getStringAttribute('boot_option_retry');
  }

  // boot_performance_mode - computed: true, optional: false, required: false
  public get bootPerformanceMode() {
    return this.getStringAttribute('boot_performance_mode');
  }

  // burst_and_postponed_refresh - computed: true, optional: false, required: false
  public get burstAndPostponedRefresh() {
    return this.getStringAttribute('burst_and_postponed_refresh');
  }

  // c1auto_demotion - computed: true, optional: false, required: false
  public get c1AutoDemotion() {
    return this.getStringAttribute('c1auto_demotion');
  }

  // c1auto_un_demotion - computed: true, optional: false, required: false
  public get c1AutoUnDemotion() {
    return this.getStringAttribute('c1auto_un_demotion');
  }

  // cbs_cmn_apbdis - computed: true, optional: false, required: false
  public get cbsCmnApbdis() {
    return this.getStringAttribute('cbs_cmn_apbdis');
  }

  // cbs_cmn_apbdis_df_pstate_rs - computed: true, optional: false, required: false
  public get cbsCmnApbdisDfPstateRs() {
    return this.getStringAttribute('cbs_cmn_apbdis_df_pstate_rs');
  }

  // cbs_cmn_cpu_avx512 - computed: true, optional: false, required: false
  public get cbsCmnCpuAvx512() {
    return this.getStringAttribute('cbs_cmn_cpu_avx512');
  }

  // cbs_cmn_cpu_cpb - computed: true, optional: false, required: false
  public get cbsCmnCpuCpb() {
    return this.getStringAttribute('cbs_cmn_cpu_cpb');
  }

  // cbs_cmn_cpu_gen_downcore_ctrl - computed: true, optional: false, required: false
  public get cbsCmnCpuGenDowncoreCtrl() {
    return this.getStringAttribute('cbs_cmn_cpu_gen_downcore_ctrl');
  }

  // cbs_cmn_cpu_global_cstate_ctrl - computed: true, optional: false, required: false
  public get cbsCmnCpuGlobalCstateCtrl() {
    return this.getStringAttribute('cbs_cmn_cpu_global_cstate_ctrl');
  }

  // cbs_cmn_cpu_l1stream_hw_prefetcher - computed: true, optional: false, required: false
  public get cbsCmnCpuL1StreamHwPrefetcher() {
    return this.getStringAttribute('cbs_cmn_cpu_l1stream_hw_prefetcher');
  }

  // cbs_cmn_cpu_l2stream_hw_prefetcher - computed: true, optional: false, required: false
  public get cbsCmnCpuL2StreamHwPrefetcher() {
    return this.getStringAttribute('cbs_cmn_cpu_l2stream_hw_prefetcher');
  }

  // cbs_cmn_cpu_sev_asid_space_limit - computed: true, optional: false, required: false
  public get cbsCmnCpuSevAsidSpaceLimit() {
    return this.getStringAttribute('cbs_cmn_cpu_sev_asid_space_limit');
  }

  // cbs_cmn_cpu_smee - computed: true, optional: false, required: false
  public get cbsCmnCpuSmee() {
    return this.getStringAttribute('cbs_cmn_cpu_smee');
  }

  // cbs_cmn_cpu_streaming_stores_ctrl - computed: true, optional: false, required: false
  public get cbsCmnCpuStreamingStoresCtrl() {
    return this.getStringAttribute('cbs_cmn_cpu_streaming_stores_ctrl');
  }

  // cbs_cmn_determinism_slider - computed: true, optional: false, required: false
  public get cbsCmnDeterminismSlider() {
    return this.getStringAttribute('cbs_cmn_determinism_slider');
  }

  // cbs_cmn_edc_control_throttle - computed: true, optional: false, required: false
  public get cbsCmnEdcControlThrottle() {
    return this.getStringAttribute('cbs_cmn_edc_control_throttle');
  }

  // cbs_cmn_efficiency_mode_en - computed: true, optional: false, required: false
  public get cbsCmnEfficiencyModeEn() {
    return this.getStringAttribute('cbs_cmn_efficiency_mode_en');
  }

  // cbs_cmn_efficiency_mode_en_rs - computed: true, optional: false, required: false
  public get cbsCmnEfficiencyModeEnRs() {
    return this.getStringAttribute('cbs_cmn_efficiency_mode_en_rs');
  }

  // cbs_cmn_fixed_soc_pstate - computed: true, optional: false, required: false
  public get cbsCmnFixedSocPstate() {
    return this.getStringAttribute('cbs_cmn_fixed_soc_pstate');
  }

  // cbs_cmn_gnb_nb_iommu - computed: true, optional: false, required: false
  public get cbsCmnGnbNbIommu() {
    return this.getStringAttribute('cbs_cmn_gnb_nb_iommu');
  }

  // cbs_cmn_gnb_smu_df_cstates - computed: true, optional: false, required: false
  public get cbsCmnGnbSmuDfCstates() {
    return this.getStringAttribute('cbs_cmn_gnb_smu_df_cstates');
  }

  // cbs_cmn_gnb_smu_dffo_rs - computed: true, optional: false, required: false
  public get cbsCmnGnbSmuDffoRs() {
    return this.getStringAttribute('cbs_cmn_gnb_smu_dffo_rs');
  }

  // cbs_cmn_gnb_smu_dlwm_support - computed: true, optional: false, required: false
  public get cbsCmnGnbSmuDlwmSupport() {
    return this.getStringAttribute('cbs_cmn_gnb_smu_dlwm_support');
  }

  // cbs_cmn_gnb_smucppc - computed: true, optional: false, required: false
  public get cbsCmnGnbSmucppc() {
    return this.getStringAttribute('cbs_cmn_gnb_smucppc');
  }

  // cbs_cmn_mem_ctrl_bank_group_swap_ddr4 - computed: true, optional: false, required: false
  public get cbsCmnMemCtrlBankGroupSwapDdr4() {
    return this.getStringAttribute('cbs_cmn_mem_ctrl_bank_group_swap_ddr4');
  }

  // cbs_cmn_mem_ctrller_pwr_dn_en_ddr - computed: true, optional: false, required: false
  public get cbsCmnMemCtrllerPwrDnEnDdr() {
    return this.getStringAttribute('cbs_cmn_mem_ctrller_pwr_dn_en_ddr');
  }

  // cbs_cmn_mem_map_bank_interleave_ddr4 - computed: true, optional: false, required: false
  public get cbsCmnMemMapBankInterleaveDdr4() {
    return this.getStringAttribute('cbs_cmn_mem_map_bank_interleave_ddr4');
  }

  // cbs_cmn_mem_speed_ddr47xx2 - computed: true, optional: false, required: false
  public get cbsCmnMemSpeedDdr47Xx2() {
    return this.getStringAttribute('cbs_cmn_mem_speed_ddr47xx2');
  }

  // cbs_cmn_mem_speed_ddr47xx3 - computed: true, optional: false, required: false
  public get cbsCmnMemSpeedDdr47Xx3() {
    return this.getStringAttribute('cbs_cmn_mem_speed_ddr47xx3');
  }

  // cbs_cmn_preferred_io7xx2 - computed: true, optional: false, required: false
  public get cbsCmnPreferredIo7Xx2() {
    return this.getStringAttribute('cbs_cmn_preferred_io7xx2');
  }

  // cbs_cmn_preferred_io7xx3 - computed: true, optional: false, required: false
  public get cbsCmnPreferredIo7Xx3() {
    return this.getStringAttribute('cbs_cmn_preferred_io7xx3');
  }

  // cbs_cmnc_tdp_ctl - computed: true, optional: false, required: false
  public get cbsCmncTdpCtl() {
    return this.getStringAttribute('cbs_cmnc_tdp_ctl');
  }

  // cbs_cmnx_gmi_force_link_width_rs - computed: true, optional: false, required: false
  public get cbsCmnxGmiForceLinkWidthRs() {
    return this.getStringAttribute('cbs_cmnx_gmi_force_link_width_rs');
  }

  // cbs_cpu_ccd_ctrl_ssp - computed: true, optional: false, required: false
  public get cbsCpuCcdCtrlSsp() {
    return this.getStringAttribute('cbs_cpu_ccd_ctrl_ssp');
  }

  // cbs_cpu_core_ctrl - computed: true, optional: false, required: false
  public get cbsCpuCoreCtrl() {
    return this.getStringAttribute('cbs_cpu_core_ctrl');
  }

  // cbs_cpu_down_core_ctrl_bergamo - computed: true, optional: false, required: false
  public get cbsCpuDownCoreCtrlBergamo() {
    return this.getStringAttribute('cbs_cpu_down_core_ctrl_bergamo');
  }

  // cbs_cpu_down_core_ctrl_genoa - computed: true, optional: false, required: false
  public get cbsCpuDownCoreCtrlGenoa() {
    return this.getStringAttribute('cbs_cpu_down_core_ctrl_genoa');
  }

  // cbs_cpu_smt_ctrl - computed: true, optional: false, required: false
  public get cbsCpuSmtCtrl() {
    return this.getStringAttribute('cbs_cpu_smt_ctrl');
  }

  // cbs_dbg_cpu_gen_cpu_wdt - computed: true, optional: false, required: false
  public get cbsDbgCpuGenCpuWdt() {
    return this.getStringAttribute('cbs_dbg_cpu_gen_cpu_wdt');
  }

  // cbs_dbg_cpu_lapic_mode - computed: true, optional: false, required: false
  public get cbsDbgCpuLapicMode() {
    return this.getStringAttribute('cbs_dbg_cpu_lapic_mode');
  }

  // cbs_dbg_cpu_snp_mem_cover - computed: true, optional: false, required: false
  public get cbsDbgCpuSnpMemCover() {
    return this.getStringAttribute('cbs_dbg_cpu_snp_mem_cover');
  }

  // cbs_dbg_cpu_snp_mem_size_cover - computed: true, optional: false, required: false
  public get cbsDbgCpuSnpMemSizeCover() {
    return this.getStringAttribute('cbs_dbg_cpu_snp_mem_size_cover');
  }

  // cbs_df_cmn4link_max_xgmi_speed - computed: true, optional: false, required: false
  public get cbsDfCmn4LinkMaxXgmiSpeed() {
    return this.getStringAttribute('cbs_df_cmn4link_max_xgmi_speed');
  }

  // cbs_df_cmn_acpi_srat_l3numa - computed: true, optional: false, required: false
  public get cbsDfCmnAcpiSratL3Numa() {
    return this.getStringAttribute('cbs_df_cmn_acpi_srat_l3numa');
  }

  // cbs_df_cmn_dram_nps - computed: true, optional: false, required: false
  public get cbsDfCmnDramNps() {
    return this.getStringAttribute('cbs_df_cmn_dram_nps');
  }

  // cbs_df_cmn_dram_scrub_time - computed: true, optional: false, required: false
  public get cbsDfCmnDramScrubTime() {
    return this.getStringAttribute('cbs_df_cmn_dram_scrub_time');
  }

  // cbs_df_cmn_mem_intlv - computed: true, optional: false, required: false
  public get cbsDfCmnMemIntlv() {
    return this.getStringAttribute('cbs_df_cmn_mem_intlv');
  }

  // cbs_df_cmn_mem_intlv_control - computed: true, optional: false, required: false
  public get cbsDfCmnMemIntlvControl() {
    return this.getStringAttribute('cbs_df_cmn_mem_intlv_control');
  }

  // cbs_df_cmn_mem_intlv_size - computed: true, optional: false, required: false
  public get cbsDfCmnMemIntlvSize() {
    return this.getStringAttribute('cbs_df_cmn_mem_intlv_size');
  }

  // cbs_df_dbg_xgmi_link_cfg - computed: true, optional: false, required: false
  public get cbsDfDbgXgmiLinkCfg() {
    return this.getStringAttribute('cbs_df_dbg_xgmi_link_cfg');
  }

  // cbs_gnb_dbg_pcie_tbt_support - computed: true, optional: false, required: false
  public get cbsGnbDbgPcieTbtSupport() {
    return this.getStringAttribute('cbs_gnb_dbg_pcie_tbt_support');
  }

  // cbs_sev_snp_support - computed: true, optional: false, required: false
  public get cbsSevSnpSupport() {
    return this.getStringAttribute('cbs_sev_snp_support');
  }

  // cdn_enable - computed: true, optional: false, required: false
  public get cdnEnable() {
    return this.getStringAttribute('cdn_enable');
  }

  // cdn_support - computed: true, optional: false, required: false
  public get cdnSupport() {
    return this.getStringAttribute('cdn_support');
  }

  // channel_inter_leave - computed: true, optional: false, required: false
  public get channelInterLeave() {
    return this.getStringAttribute('channel_inter_leave');
  }

  // cisco_adaptive_mem_training - computed: true, optional: false, required: false
  public get ciscoAdaptiveMemTraining() {
    return this.getStringAttribute('cisco_adaptive_mem_training');
  }

  // cisco_debug_level - computed: true, optional: false, required: false
  public get ciscoDebugLevel() {
    return this.getStringAttribute('cisco_debug_level');
  }

  // cisco_oprom_launch_optimization - computed: true, optional: false, required: false
  public get ciscoOpromLaunchOptimization() {
    return this.getStringAttribute('cisco_oprom_launch_optimization');
  }

  // cisco_xgmi_max_speed - computed: true, optional: false, required: false
  public get ciscoXgmiMaxSpeed() {
    return this.getStringAttribute('cisco_xgmi_max_speed');
  }

  // cke_low_policy - computed: true, optional: false, required: false
  public get ckeLowPolicy() {
    return this.getStringAttribute('cke_low_policy');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // closed_loop_therm_throtl - computed: true, optional: false, required: false
  public get closedLoopThermThrotl() {
    return this.getStringAttribute('closed_loop_therm_throtl');
  }

  // cmci_enable - computed: true, optional: false, required: false
  public get cmciEnable() {
    return this.getStringAttribute('cmci_enable');
  }

  // config_tdp - computed: true, optional: false, required: false
  public get configTdp() {
    return this.getStringAttribute('config_tdp');
  }

  // config_tdp_level - computed: true, optional: false, required: false
  public get configTdpLevel() {
    return this.getStringAttribute('config_tdp_level');
  }

  // console_redirection - computed: true, optional: false, required: false
  public get consoleRedirection() {
    return this.getStringAttribute('console_redirection');
  }

  // core_multi_processing - computed: true, optional: false, required: false
  public get coreMultiProcessing() {
    return this.getStringAttribute('core_multi_processing');
  }

  // cpu_energy_performance - computed: true, optional: false, required: false
  public get cpuEnergyPerformance() {
    return this.getStringAttribute('cpu_energy_performance');
  }

  // cpu_frequency_floor - computed: true, optional: false, required: false
  public get cpuFrequencyFloor() {
    return this.getStringAttribute('cpu_frequency_floor');
  }

  // cpu_pa_limit - computed: true, optional: false, required: false
  public get cpuPaLimit() {
    return this.getStringAttribute('cpu_pa_limit');
  }

  // cpu_perf_enhancement - computed: true, optional: false, required: false
  public get cpuPerfEnhancement() {
    return this.getStringAttribute('cpu_perf_enhancement');
  }

  // cpu_performance - computed: true, optional: false, required: false
  public get cpuPerformance() {
    return this.getStringAttribute('cpu_performance');
  }

  // cpu_power_management - computed: true, optional: false, required: false
  public get cpuPowerManagement() {
    return this.getStringAttribute('cpu_power_management');
  }

  // cr_qos - computed: true, optional: false, required: false
  public get crQos() {
    return this.getStringAttribute('cr_qos');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // crfastgo_config - computed: true, optional: false, required: false
  public get crfastgoConfig() {
    return this.getStringAttribute('crfastgo_config');
  }

  // dcpmm_firmware_downgrade - computed: true, optional: false, required: false
  public get dcpmmFirmwareDowngrade() {
    return this.getStringAttribute('dcpmm_firmware_downgrade');
  }

  // demand_scrub - computed: true, optional: false, required: false
  public get demandScrub() {
    return this.getStringAttribute('demand_scrub');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dfx_osb_en - computed: true, optional: false, required: false
  public get dfxOsbEn() {
    return this.getStringAttribute('dfx_osb_en');
  }

  // direct_cache_access - computed: true, optional: false, required: false
  public get directCacheAccess() {
    return this.getStringAttribute('direct_cache_access');
  }

  // dma_ctrl_opt_in - computed: true, optional: false, required: false
  public get dmaCtrlOptIn() {
    return this.getStringAttribute('dma_ctrl_opt_in');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // dram_clock_throttling - computed: true, optional: false, required: false
  public get dramClockThrottling() {
    return this.getStringAttribute('dram_clock_throttling');
  }

  // dram_refresh_rate - computed: true, optional: false, required: false
  public get dramRefreshRate() {
    return this.getStringAttribute('dram_refresh_rate');
  }

  // dram_sw_thermal_throttling - computed: true, optional: false, required: false
  public get dramSwThermalThrottling() {
    return this.getStringAttribute('dram_sw_thermal_throttling');
  }

  // eadr_support - computed: true, optional: false, required: false
  public get eadrSupport() {
    return this.getStringAttribute('eadr_support');
  }

  // edpc_en - computed: true, optional: false, required: false
  public get edpcEn() {
    return this.getStringAttribute('edpc_en');
  }

  // enable_clock_spread_spec - computed: true, optional: false, required: false
  public get enableClockSpreadSpec() {
    return this.getStringAttribute('enable_clock_spread_spec');
  }

  // enable_mktme - computed: true, optional: false, required: false
  public get enableMktme() {
    return this.getStringAttribute('enable_mktme');
  }

  // enable_rmt - computed: true, optional: false, required: false
  public get enableRmt() {
    return this.getStringAttribute('enable_rmt');
  }

  // enable_sgx - computed: true, optional: false, required: false
  public get enableSgx() {
    return this.getStringAttribute('enable_sgx');
  }

  // enable_tdx - computed: true, optional: false, required: false
  public get enableTdx() {
    return this.getStringAttribute('enable_tdx');
  }

  // enable_tdx_seamldr - computed: true, optional: false, required: false
  public get enableTdxSeamldr() {
    return this.getStringAttribute('enable_tdx_seamldr');
  }

  // enable_tme - computed: true, optional: false, required: false
  public get enableTme() {
    return this.getStringAttribute('enable_tme');
  }

  // energy_efficient_turbo - computed: true, optional: false, required: false
  public get energyEfficientTurbo() {
    return this.getStringAttribute('energy_efficient_turbo');
  }

  // eng_perf_tuning - computed: true, optional: false, required: false
  public get engPerfTuning() {
    return this.getStringAttribute('eng_perf_tuning');
  }

  // enhanced_intel_speed_step_tech - computed: true, optional: false, required: false
  public get enhancedIntelSpeedStepTech() {
    return this.getStringAttribute('enhanced_intel_speed_step_tech');
  }

  // epoch_update - computed: true, optional: false, required: false
  public get epochUpdate() {
    return this.getStringAttribute('epoch_update');
  }

  // epp_enable - computed: true, optional: false, required: false
  public get eppEnable() {
    return this.getStringAttribute('epp_enable');
  }

  // epp_profile - computed: true, optional: false, required: false
  public get eppProfile() {
    return this.getStringAttribute('epp_profile');
  }

  // error_check_scrub - computed: true, optional: false, required: false
  public get errorCheckScrub() {
    return this.getStringAttribute('error_check_scrub');
  }

  // execute_disable_bit - computed: true, optional: false, required: false
  public get executeDisableBit() {
    return this.getStringAttribute('execute_disable_bit');
  }

  // extended_apic - computed: true, optional: false, required: false
  public get extendedApic() {
    return this.getStringAttribute('extended_apic');
  }

  // flow_control - computed: true, optional: false, required: false
  public get flowControl() {
    return this.getStringAttribute('flow_control');
  }

  // frb2enable - computed: true, optional: false, required: false
  public get frb2Enable() {
    return this.getStringAttribute('frb2enable');
  }

  // gpu_direct_cpu1 - computed: true, optional: false, required: false
  public get gpuDirectCpu1() {
    return this.getStringAttribute('gpu_direct_cpu1');
  }

  // gpu_direct_cpu2 - computed: true, optional: false, required: false
  public get gpuDirectCpu2() {
    return this.getStringAttribute('gpu_direct_cpu2');
  }

  // gpu_direct_cpu3 - computed: true, optional: false, required: false
  public get gpuDirectCpu3() {
    return this.getStringAttribute('gpu_direct_cpu3');
  }

  // gpu_direct_cpu4 - computed: true, optional: false, required: false
  public get gpuDirectCpu4() {
    return this.getStringAttribute('gpu_direct_cpu4');
  }

  // hardware_prefetch - computed: true, optional: false, required: false
  public get hardwarePrefetch() {
    return this.getStringAttribute('hardware_prefetch');
  }

  // hwpm_enable - computed: true, optional: false, required: false
  public get hwpmEnable() {
    return this.getStringAttribute('hwpm_enable');
  }

  // imc_interleave - computed: true, optional: false, required: false
  public get imcInterleave() {
    return this.getStringAttribute('imc_interleave');
  }

  // intel_dynamic_speed_select - computed: true, optional: false, required: false
  public get intelDynamicSpeedSelect() {
    return this.getStringAttribute('intel_dynamic_speed_select');
  }

  // intel_hyper_threading_tech - computed: true, optional: false, required: false
  public get intelHyperThreadingTech() {
    return this.getStringAttribute('intel_hyper_threading_tech');
  }

  // intel_speed_select - computed: true, optional: false, required: false
  public get intelSpeedSelect() {
    return this.getStringAttribute('intel_speed_select');
  }

  // intel_turbo_boost_tech - computed: true, optional: false, required: false
  public get intelTurboBoostTech() {
    return this.getStringAttribute('intel_turbo_boost_tech');
  }

  // intel_virtualization_technology - computed: true, optional: false, required: false
  public get intelVirtualizationTechnology() {
    return this.getStringAttribute('intel_virtualization_technology');
  }

  // intel_vt_for_directed_io - computed: true, optional: false, required: false
  public get intelVtForDirectedIo() {
    return this.getStringAttribute('intel_vt_for_directed_io');
  }

  // intel_vtd_coherency_support - computed: true, optional: false, required: false
  public get intelVtdCoherencySupport() {
    return this.getStringAttribute('intel_vtd_coherency_support');
  }

  // intel_vtd_interrupt_remapping - computed: true, optional: false, required: false
  public get intelVtdInterruptRemapping() {
    return this.getStringAttribute('intel_vtd_interrupt_remapping');
  }

  // intel_vtd_pass_through_dma_support - computed: true, optional: false, required: false
  public get intelVtdPassThroughDmaSupport() {
    return this.getStringAttribute('intel_vtd_pass_through_dma_support');
  }

  // intel_vtdats_support - computed: true, optional: false, required: false
  public get intelVtdatsSupport() {
    return this.getStringAttribute('intel_vtdats_support');
  }

  // ioat_config_cpm - computed: true, optional: false, required: false
  public get ioatConfigCpm() {
    return this.getStringAttribute('ioat_config_cpm');
  }

  // ioh_error_enable - computed: true, optional: false, required: false
  public get iohErrorEnable() {
    return this.getStringAttribute('ioh_error_enable');
  }

  // ioh_resource - computed: true, optional: false, required: false
  public get iohResource() {
    return this.getStringAttribute('ioh_resource');
  }

  // ip_prefetch - computed: true, optional: false, required: false
  public get ipPrefetch() {
    return this.getStringAttribute('ip_prefetch');
  }

  // ipv4http - computed: true, optional: false, required: false
  public get ipv4Http() {
    return this.getStringAttribute('ipv4http');
  }

  // ipv4pxe - computed: true, optional: false, required: false
  public get ipv4Pxe() {
    return this.getStringAttribute('ipv4pxe');
  }

  // ipv6http - computed: true, optional: false, required: false
  public get ipv6Http() {
    return this.getStringAttribute('ipv6http');
  }

  // ipv6pxe - computed: true, optional: false, required: false
  public get ipv6Pxe() {
    return this.getStringAttribute('ipv6pxe');
  }

  // kti_prefetch - computed: true, optional: false, required: false
  public get ktiPrefetch() {
    return this.getStringAttribute('kti_prefetch');
  }

  // latency_optimized_mode - computed: true, optional: false, required: false
  public get latencyOptimizedMode() {
    return this.getStringAttribute('latency_optimized_mode');
  }

  // legacy_os_redirection - computed: true, optional: false, required: false
  public get legacyOsRedirection() {
    return this.getStringAttribute('legacy_os_redirection');
  }

  // legacy_usb_support - computed: true, optional: false, required: false
  public get legacyUsbSupport() {
    return this.getStringAttribute('legacy_usb_support');
  }

  // llc_alloc - computed: true, optional: false, required: false
  public get llcAlloc() {
    return this.getStringAttribute('llc_alloc');
  }

  // llc_prefetch - computed: true, optional: false, required: false
  public get llcPrefetch() {
    return this.getStringAttribute('llc_prefetch');
  }

  // lom_port0state - computed: true, optional: false, required: false
  public get lomPort0State() {
    return this.getStringAttribute('lom_port0state');
  }

  // lom_port1state - computed: true, optional: false, required: false
  public get lomPort1State() {
    return this.getStringAttribute('lom_port1state');
  }

  // lom_port2state - computed: true, optional: false, required: false
  public get lomPort2State() {
    return this.getStringAttribute('lom_port2state');
  }

  // lom_port3state - computed: true, optional: false, required: false
  public get lomPort3State() {
    return this.getStringAttribute('lom_port3state');
  }

  // lom_ports_all_state - computed: true, optional: false, required: false
  public get lomPortsAllState() {
    return this.getStringAttribute('lom_ports_all_state');
  }

  // lv_ddr_mode - computed: true, optional: false, required: false
  public get lvDdrMode() {
    return this.getStringAttribute('lv_ddr_mode');
  }

  // make_device_non_bootable - computed: true, optional: false, required: false
  public get makeDeviceNonBootable() {
    return this.getStringAttribute('make_device_non_bootable');
  }

  // memory_bandwidth_boost - computed: true, optional: false, required: false
  public get memoryBandwidthBoost() {
    return this.getStringAttribute('memory_bandwidth_boost');
  }

  // memory_inter_leave - computed: true, optional: false, required: false
  public get memoryInterLeave() {
    return this.getStringAttribute('memory_inter_leave');
  }

  // memory_mapped_io_above4gb - computed: true, optional: false, required: false
  public get memoryMappedIoAbove4Gb() {
    return this.getStringAttribute('memory_mapped_io_above4gb');
  }

  // memory_refresh_rate - computed: true, optional: false, required: false
  public get memoryRefreshRate() {
    return this.getStringAttribute('memory_refresh_rate');
  }

  // memory_size_limit - computed: true, optional: false, required: false
  public get memorySizeLimit() {
    return this.getStringAttribute('memory_size_limit');
  }

  // memory_thermal_throttling - computed: true, optional: false, required: false
  public get memoryThermalThrottling() {
    return this.getStringAttribute('memory_thermal_throttling');
  }

  // mirroring_mode - computed: true, optional: false, required: false
  public get mirroringMode() {
    return this.getStringAttribute('mirroring_mode');
  }

  // mmcfg_base - computed: true, optional: false, required: false
  public get mmcfgBase() {
    return this.getStringAttribute('mmcfg_base');
  }

  // mmioh_base - computed: true, optional: false, required: false
  public get mmiohBase() {
    return this.getStringAttribute('mmioh_base');
  }

  // mmioh_size - computed: true, optional: false, required: false
  public get mmiohSize() {
    return this.getStringAttribute('mmioh_size');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_stack - computed: true, optional: false, required: false
  public get networkStack() {
    return this.getStringAttribute('network_stack');
  }

  // numa_optimized - computed: true, optional: false, required: false
  public get numaOptimized() {
    return this.getStringAttribute('numa_optimized');
  }

  // nvmdimm_perform_config - computed: true, optional: false, required: false
  public get nvmdimmPerformConfig() {
    return this.getStringAttribute('nvmdimm_perform_config');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // onboard10gbit_lom - computed: true, optional: false, required: false
  public get onboard10GbitLom() {
    return this.getStringAttribute('onboard10gbit_lom');
  }

  // onboard_gbit_lom - computed: true, optional: false, required: false
  public get onboardGbitLom() {
    return this.getStringAttribute('onboard_gbit_lom');
  }

  // onboard_scu_storage_support - computed: true, optional: false, required: false
  public get onboardScuStorageSupport() {
    return this.getStringAttribute('onboard_scu_storage_support');
  }

  // onboard_scu_storage_sw_stack - computed: true, optional: false, required: false
  public get onboardScuStorageSwStack() {
    return this.getStringAttribute('onboard_scu_storage_sw_stack');
  }

  // operation_mode - computed: true, optional: false, required: false
  public get operationMode() {
    return this.getStringAttribute('operation_mode');
  }

  // optimized_power_mode - computed: true, optional: false, required: false
  public get optimizedPowerMode() {
    return this.getStringAttribute('optimized_power_mode');
  }

  // organization - computed: true, optional: false, required: false
  private _organization = new DataIntersightBiosPolicyResultsOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }

  // os_boot_watchdog_timer - computed: true, optional: false, required: false
  public get osBootWatchdogTimer() {
    return this.getStringAttribute('os_boot_watchdog_timer');
  }

  // os_boot_watchdog_timer_policy - computed: true, optional: false, required: false
  public get osBootWatchdogTimerPolicy() {
    return this.getStringAttribute('os_boot_watchdog_timer_policy');
  }

  // os_boot_watchdog_timer_timeout - computed: true, optional: false, required: false
  public get osBootWatchdogTimerTimeout() {
    return this.getStringAttribute('os_boot_watchdog_timer_timeout');
  }

  // out_of_band_mgmt_port - computed: true, optional: false, required: false
  public get outOfBandMgmtPort() {
    return this.getStringAttribute('out_of_band_mgmt_port');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // package_cstate_limit - computed: true, optional: false, required: false
  public get packageCstateLimit() {
    return this.getStringAttribute('package_cstate_limit');
  }

  // panic_high_watermark - computed: true, optional: false, required: false
  public get panicHighWatermark() {
    return this.getStringAttribute('panic_high_watermark');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightBiosPolicyResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // partial_cache_line_sparing - computed: true, optional: false, required: false
  public get partialCacheLineSparing() {
    return this.getStringAttribute('partial_cache_line_sparing');
  }

  // partial_mirror_mode_config - computed: true, optional: false, required: false
  public get partialMirrorModeConfig() {
    return this.getStringAttribute('partial_mirror_mode_config');
  }

  // partial_mirror_percent - computed: true, optional: false, required: false
  public get partialMirrorPercent() {
    return this.getStringAttribute('partial_mirror_percent');
  }

  // partial_mirror_value1 - computed: true, optional: false, required: false
  public get partialMirrorValue1() {
    return this.getStringAttribute('partial_mirror_value1');
  }

  // partial_mirror_value2 - computed: true, optional: false, required: false
  public get partialMirrorValue2() {
    return this.getStringAttribute('partial_mirror_value2');
  }

  // partial_mirror_value3 - computed: true, optional: false, required: false
  public get partialMirrorValue3() {
    return this.getStringAttribute('partial_mirror_value3');
  }

  // partial_mirror_value4 - computed: true, optional: false, required: false
  public get partialMirrorValue4() {
    return this.getStringAttribute('partial_mirror_value4');
  }

  // patrol_scrub - computed: true, optional: false, required: false
  public get patrolScrub() {
    return this.getStringAttribute('patrol_scrub');
  }

  // patrol_scrub_duration - computed: true, optional: false, required: false
  public get patrolScrubDuration() {
    return this.getStringAttribute('patrol_scrub_duration');
  }

  // pc_ie_ras_support - computed: true, optional: false, required: false
  public get pcIeRasSupport() {
    return this.getStringAttribute('pc_ie_ras_support');
  }

  // pc_ie_ssd_hot_plug_support - computed: true, optional: false, required: false
  public get pcIeSsdHotPlugSupport() {
    return this.getStringAttribute('pc_ie_ssd_hot_plug_support');
  }

  // pch_pcie_pll_ssc - computed: true, optional: false, required: false
  public get pchPciePllSsc() {
    return this.getStringAttribute('pch_pcie_pll_ssc');
  }

  // pch_usb30mode - computed: true, optional: false, required: false
  public get pchUsb30Mode() {
    return this.getStringAttribute('pch_usb30mode');
  }

  // pci_option_ro_ms - computed: true, optional: false, required: false
  public get pciOptionRoMs() {
    return this.getStringAttribute('pci_option_ro_ms');
  }

  // pci_rom_clp - computed: true, optional: false, required: false
  public get pciRomClp() {
    return this.getStringAttribute('pci_rom_clp');
  }

  // pcie_ari_support - computed: true, optional: false, required: false
  public get pcieAriSupport() {
    return this.getStringAttribute('pcie_ari_support');
  }

  // pcie_pll_ssc - computed: true, optional: false, required: false
  public get pciePllSsc() {
    return this.getStringAttribute('pcie_pll_ssc');
  }

  // pcie_slot_mraid1link_speed - computed: true, optional: false, required: false
  public get pcieSlotMraid1LinkSpeed() {
    return this.getStringAttribute('pcie_slot_mraid1link_speed');
  }

  // pcie_slot_mraid1option_rom - computed: true, optional: false, required: false
  public get pcieSlotMraid1OptionRom() {
    return this.getStringAttribute('pcie_slot_mraid1option_rom');
  }

  // pcie_slot_mraid2link_speed - computed: true, optional: false, required: false
  public get pcieSlotMraid2LinkSpeed() {
    return this.getStringAttribute('pcie_slot_mraid2link_speed');
  }

  // pcie_slot_mraid2option_rom - computed: true, optional: false, required: false
  public get pcieSlotMraid2OptionRom() {
    return this.getStringAttribute('pcie_slot_mraid2option_rom');
  }

  // pcie_slot_mstorraid_link_speed - computed: true, optional: false, required: false
  public get pcieSlotMstorraidLinkSpeed() {
    return this.getStringAttribute('pcie_slot_mstorraid_link_speed');
  }

  // pcie_slot_mstorraid_option_rom - computed: true, optional: false, required: false
  public get pcieSlotMstorraidOptionRom() {
    return this.getStringAttribute('pcie_slot_mstorraid_option_rom');
  }

  // pcie_slot_nvme1link_speed - computed: true, optional: false, required: false
  public get pcieSlotNvme1LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme1link_speed');
  }

  // pcie_slot_nvme1option_rom - computed: true, optional: false, required: false
  public get pcieSlotNvme1OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme1option_rom');
  }

  // pcie_slot_nvme2link_speed - computed: true, optional: false, required: false
  public get pcieSlotNvme2LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme2link_speed');
  }

  // pcie_slot_nvme2option_rom - computed: true, optional: false, required: false
  public get pcieSlotNvme2OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme2option_rom');
  }

  // pcie_slot_nvme3link_speed - computed: true, optional: false, required: false
  public get pcieSlotNvme3LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme3link_speed');
  }

  // pcie_slot_nvme3option_rom - computed: true, optional: false, required: false
  public get pcieSlotNvme3OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme3option_rom');
  }

  // pcie_slot_nvme4link_speed - computed: true, optional: false, required: false
  public get pcieSlotNvme4LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme4link_speed');
  }

  // pcie_slot_nvme4option_rom - computed: true, optional: false, required: false
  public get pcieSlotNvme4OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme4option_rom');
  }

  // pcie_slot_nvme5link_speed - computed: true, optional: false, required: false
  public get pcieSlotNvme5LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme5link_speed');
  }

  // pcie_slot_nvme5option_rom - computed: true, optional: false, required: false
  public get pcieSlotNvme5OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme5option_rom');
  }

  // pcie_slot_nvme6link_speed - computed: true, optional: false, required: false
  public get pcieSlotNvme6LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme6link_speed');
  }

  // pcie_slot_nvme6option_rom - computed: true, optional: false, required: false
  public get pcieSlotNvme6OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme6option_rom');
  }

  // pcie_slots_cdn_enable - computed: true, optional: false, required: false
  public get pcieSlotsCdnEnable() {
    return this.getStringAttribute('pcie_slots_cdn_enable');
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightBiosPolicyResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // pop_support - computed: true, optional: false, required: false
  public get popSupport() {
    return this.getStringAttribute('pop_support');
  }

  // post_error_pause - computed: true, optional: false, required: false
  public get postErrorPause() {
    return this.getStringAttribute('post_error_pause');
  }

  // post_package_repair - computed: true, optional: false, required: false
  public get postPackageRepair() {
    return this.getStringAttribute('post_package_repair');
  }

  // pre_boot_dma_protection - computed: true, optional: false, required: false
  public get preBootDmaProtection() {
    return this.getStringAttribute('pre_boot_dma_protection');
  }

  // prmrr_size - computed: true, optional: false, required: false
  public get prmrrSize() {
    return this.getStringAttribute('prmrr_size');
  }

  // processor_c1e - computed: true, optional: false, required: false
  public get processorC1E() {
    return this.getStringAttribute('processor_c1e');
  }

  // processor_c3report - computed: true, optional: false, required: false
  public get processorC3Report() {
    return this.getStringAttribute('processor_c3report');
  }

  // processor_c6report - computed: true, optional: false, required: false
  public get processorC6Report() {
    return this.getStringAttribute('processor_c6report');
  }

  // processor_cstate - computed: true, optional: false, required: false
  public get processorCstate() {
    return this.getStringAttribute('processor_cstate');
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new DataIntersightBiosPolicyResultsProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }

  // psata - computed: true, optional: false, required: false
  public get psata() {
    return this.getStringAttribute('psata');
  }

  // pstate_coord_type - computed: true, optional: false, required: false
  public get pstateCoordType() {
    return this.getStringAttribute('pstate_coord_type');
  }

  // putty_key_pad - computed: true, optional: false, required: false
  public get puttyKeyPad() {
    return this.getStringAttribute('putty_key_pad');
  }

  // pwr_perf_tuning - computed: true, optional: false, required: false
  public get pwrPerfTuning() {
    return this.getStringAttribute('pwr_perf_tuning');
  }

  // qpi_link_frequency - computed: true, optional: false, required: false
  public get qpiLinkFrequency() {
    return this.getStringAttribute('qpi_link_frequency');
  }

  // qpi_link_speed - computed: true, optional: false, required: false
  public get qpiLinkSpeed() {
    return this.getStringAttribute('qpi_link_speed');
  }

  // qpi_snoop_mode - computed: true, optional: false, required: false
  public get qpiSnoopMode() {
    return this.getStringAttribute('qpi_snoop_mode');
  }

  // rank_inter_leave - computed: true, optional: false, required: false
  public get rankInterLeave() {
    return this.getStringAttribute('rank_inter_leave');
  }

  // redirection_after_post - computed: true, optional: false, required: false
  public get redirectionAfterPost() {
    return this.getStringAttribute('redirection_after_post');
  }

  // resize_bar_support - computed: true, optional: false, required: false
  public get resizeBarSupport() {
    return this.getStringAttribute('resize_bar_support');
  }

  // runtime_post_package_repair - computed: true, optional: false, required: false
  public get runtimePostPackageRepair() {
    return this.getStringAttribute('runtime_post_package_repair');
  }

  // sata_mode_select - computed: true, optional: false, required: false
  public get sataModeSelect() {
    return this.getStringAttribute('sata_mode_select');
  }

  // select_memory_ras_configuration - computed: true, optional: false, required: false
  public get selectMemoryRasConfiguration() {
    return this.getStringAttribute('select_memory_ras_configuration');
  }

  // select_ppr_type - computed: true, optional: false, required: false
  public get selectPprType() {
    return this.getStringAttribute('select_ppr_type');
  }

  // serial_mux - computed: true, optional: false, required: false
  public get serialMux() {
    return this.getStringAttribute('serial_mux');
  }

  // serial_port_aenable - computed: true, optional: false, required: false
  public get serialPortAenable() {
    return this.getStringAttribute('serial_port_aenable');
  }

  // sev - computed: true, optional: false, required: false
  public get sev() {
    return this.getStringAttribute('sev');
  }

  // sgx_auto_registration_agent - computed: true, optional: false, required: false
  public get sgxAutoRegistrationAgent() {
    return this.getStringAttribute('sgx_auto_registration_agent');
  }

  // sgx_epoch0 - computed: true, optional: false, required: false
  public get sgxEpoch0() {
    return this.getStringAttribute('sgx_epoch0');
  }

  // sgx_epoch1 - computed: true, optional: false, required: false
  public get sgxEpoch1() {
    return this.getStringAttribute('sgx_epoch1');
  }

  // sgx_factory_reset - computed: true, optional: false, required: false
  public get sgxFactoryReset() {
    return this.getStringAttribute('sgx_factory_reset');
  }

  // sgx_le_pub_key_hash0 - computed: true, optional: false, required: false
  public get sgxLePubKeyHash0() {
    return this.getStringAttribute('sgx_le_pub_key_hash0');
  }

  // sgx_le_pub_key_hash1 - computed: true, optional: false, required: false
  public get sgxLePubKeyHash1() {
    return this.getStringAttribute('sgx_le_pub_key_hash1');
  }

  // sgx_le_pub_key_hash2 - computed: true, optional: false, required: false
  public get sgxLePubKeyHash2() {
    return this.getStringAttribute('sgx_le_pub_key_hash2');
  }

  // sgx_le_pub_key_hash3 - computed: true, optional: false, required: false
  public get sgxLePubKeyHash3() {
    return this.getStringAttribute('sgx_le_pub_key_hash3');
  }

  // sgx_le_wr - computed: true, optional: false, required: false
  public get sgxLeWr() {
    return this.getStringAttribute('sgx_le_wr');
  }

  // sgx_package_info_in_band_access - computed: true, optional: false, required: false
  public get sgxPackageInfoInBandAccess() {
    return this.getStringAttribute('sgx_package_info_in_band_access');
  }

  // sgx_qos - computed: true, optional: false, required: false
  public get sgxQos() {
    return this.getStringAttribute('sgx_qos');
  }

  // sha1pcr_bank - computed: true, optional: false, required: false
  public get sha1PcrBank() {
    return this.getStringAttribute('sha1pcr_bank');
  }

  // sha256pcr_bank - computed: true, optional: false, required: false
  public get sha256PcrBank() {
    return this.getStringAttribute('sha256pcr_bank');
  }

  // sha384pcr_bank - computed: true, optional: false, required: false
  public get sha384PcrBank() {
    return this.getStringAttribute('sha384pcr_bank');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // single_pctl_enable - computed: true, optional: false, required: false
  public get singlePctlEnable() {
    return this.getStringAttribute('single_pctl_enable');
  }

  // slot10link_speed - computed: true, optional: false, required: false
  public get slot10LinkSpeed() {
    return this.getStringAttribute('slot10link_speed');
  }

  // slot10state - computed: true, optional: false, required: false
  public get slot10State() {
    return this.getStringAttribute('slot10state');
  }

  // slot11link_speed - computed: true, optional: false, required: false
  public get slot11LinkSpeed() {
    return this.getStringAttribute('slot11link_speed');
  }

  // slot11state - computed: true, optional: false, required: false
  public get slot11State() {
    return this.getStringAttribute('slot11state');
  }

  // slot12link_speed - computed: true, optional: false, required: false
  public get slot12LinkSpeed() {
    return this.getStringAttribute('slot12link_speed');
  }

  // slot12state - computed: true, optional: false, required: false
  public get slot12State() {
    return this.getStringAttribute('slot12state');
  }

  // slot13state - computed: true, optional: false, required: false
  public get slot13State() {
    return this.getStringAttribute('slot13state');
  }

  // slot14state - computed: true, optional: false, required: false
  public get slot14State() {
    return this.getStringAttribute('slot14state');
  }

  // slot1link_speed - computed: true, optional: false, required: false
  public get slot1LinkSpeed() {
    return this.getStringAttribute('slot1link_speed');
  }

  // slot1state - computed: true, optional: false, required: false
  public get slot1State() {
    return this.getStringAttribute('slot1state');
  }

  // slot2link_speed - computed: true, optional: false, required: false
  public get slot2LinkSpeed() {
    return this.getStringAttribute('slot2link_speed');
  }

  // slot2state - computed: true, optional: false, required: false
  public get slot2State() {
    return this.getStringAttribute('slot2state');
  }

  // slot3link_speed - computed: true, optional: false, required: false
  public get slot3LinkSpeed() {
    return this.getStringAttribute('slot3link_speed');
  }

  // slot3state - computed: true, optional: false, required: false
  public get slot3State() {
    return this.getStringAttribute('slot3state');
  }

  // slot4link_speed - computed: true, optional: false, required: false
  public get slot4LinkSpeed() {
    return this.getStringAttribute('slot4link_speed');
  }

  // slot4state - computed: true, optional: false, required: false
  public get slot4State() {
    return this.getStringAttribute('slot4state');
  }

  // slot5link_speed - computed: true, optional: false, required: false
  public get slot5LinkSpeed() {
    return this.getStringAttribute('slot5link_speed');
  }

  // slot5state - computed: true, optional: false, required: false
  public get slot5State() {
    return this.getStringAttribute('slot5state');
  }

  // slot6link_speed - computed: true, optional: false, required: false
  public get slot6LinkSpeed() {
    return this.getStringAttribute('slot6link_speed');
  }

  // slot6state - computed: true, optional: false, required: false
  public get slot6State() {
    return this.getStringAttribute('slot6state');
  }

  // slot7link_speed - computed: true, optional: false, required: false
  public get slot7LinkSpeed() {
    return this.getStringAttribute('slot7link_speed');
  }

  // slot7state - computed: true, optional: false, required: false
  public get slot7State() {
    return this.getStringAttribute('slot7state');
  }

  // slot8link_speed - computed: true, optional: false, required: false
  public get slot8LinkSpeed() {
    return this.getStringAttribute('slot8link_speed');
  }

  // slot8state - computed: true, optional: false, required: false
  public get slot8State() {
    return this.getStringAttribute('slot8state');
  }

  // slot9link_speed - computed: true, optional: false, required: false
  public get slot9LinkSpeed() {
    return this.getStringAttribute('slot9link_speed');
  }

  // slot9state - computed: true, optional: false, required: false
  public get slot9State() {
    return this.getStringAttribute('slot9state');
  }

  // slot_flom_link_speed - computed: true, optional: false, required: false
  public get slotFlomLinkSpeed() {
    return this.getStringAttribute('slot_flom_link_speed');
  }

  // slot_front_nvme10link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme10LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme10link_speed');
  }

  // slot_front_nvme10option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme10OptionRom() {
    return this.getStringAttribute('slot_front_nvme10option_rom');
  }

  // slot_front_nvme11link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme11LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme11link_speed');
  }

  // slot_front_nvme11option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme11OptionRom() {
    return this.getStringAttribute('slot_front_nvme11option_rom');
  }

  // slot_front_nvme12link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme12LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme12link_speed');
  }

  // slot_front_nvme12option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme12OptionRom() {
    return this.getStringAttribute('slot_front_nvme12option_rom');
  }

  // slot_front_nvme13link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme13LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme13link_speed');
  }

  // slot_front_nvme13option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme13OptionRom() {
    return this.getStringAttribute('slot_front_nvme13option_rom');
  }

  // slot_front_nvme14link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme14LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme14link_speed');
  }

  // slot_front_nvme14option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme14OptionRom() {
    return this.getStringAttribute('slot_front_nvme14option_rom');
  }

  // slot_front_nvme15link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme15LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme15link_speed');
  }

  // slot_front_nvme15option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme15OptionRom() {
    return this.getStringAttribute('slot_front_nvme15option_rom');
  }

  // slot_front_nvme16link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme16LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme16link_speed');
  }

  // slot_front_nvme16option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme16OptionRom() {
    return this.getStringAttribute('slot_front_nvme16option_rom');
  }

  // slot_front_nvme17link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme17LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme17link_speed');
  }

  // slot_front_nvme17option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme17OptionRom() {
    return this.getStringAttribute('slot_front_nvme17option_rom');
  }

  // slot_front_nvme18link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme18LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme18link_speed');
  }

  // slot_front_nvme18option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme18OptionRom() {
    return this.getStringAttribute('slot_front_nvme18option_rom');
  }

  // slot_front_nvme19link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme19LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme19link_speed');
  }

  // slot_front_nvme19option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme19OptionRom() {
    return this.getStringAttribute('slot_front_nvme19option_rom');
  }

  // slot_front_nvme1link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme1LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme1link_speed');
  }

  // slot_front_nvme1option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme1OptionRom() {
    return this.getStringAttribute('slot_front_nvme1option_rom');
  }

  // slot_front_nvme20link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme20LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme20link_speed');
  }

  // slot_front_nvme20option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme20OptionRom() {
    return this.getStringAttribute('slot_front_nvme20option_rom');
  }

  // slot_front_nvme21link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme21LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme21link_speed');
  }

  // slot_front_nvme21option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme21OptionRom() {
    return this.getStringAttribute('slot_front_nvme21option_rom');
  }

  // slot_front_nvme22link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme22LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme22link_speed');
  }

  // slot_front_nvme22option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme22OptionRom() {
    return this.getStringAttribute('slot_front_nvme22option_rom');
  }

  // slot_front_nvme23link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme23LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme23link_speed');
  }

  // slot_front_nvme23option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme23OptionRom() {
    return this.getStringAttribute('slot_front_nvme23option_rom');
  }

  // slot_front_nvme24link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme24LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme24link_speed');
  }

  // slot_front_nvme24option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme24OptionRom() {
    return this.getStringAttribute('slot_front_nvme24option_rom');
  }

  // slot_front_nvme25link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme25LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme25link_speed');
  }

  // slot_front_nvme25option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme25OptionRom() {
    return this.getStringAttribute('slot_front_nvme25option_rom');
  }

  // slot_front_nvme26link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme26LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme26link_speed');
  }

  // slot_front_nvme26option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme26OptionRom() {
    return this.getStringAttribute('slot_front_nvme26option_rom');
  }

  // slot_front_nvme27link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme27LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme27link_speed');
  }

  // slot_front_nvme27option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme27OptionRom() {
    return this.getStringAttribute('slot_front_nvme27option_rom');
  }

  // slot_front_nvme28link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme28LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme28link_speed');
  }

  // slot_front_nvme28option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme28OptionRom() {
    return this.getStringAttribute('slot_front_nvme28option_rom');
  }

  // slot_front_nvme29link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme29LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme29link_speed');
  }

  // slot_front_nvme29option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme29OptionRom() {
    return this.getStringAttribute('slot_front_nvme29option_rom');
  }

  // slot_front_nvme2link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme2LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme2link_speed');
  }

  // slot_front_nvme2option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme2OptionRom() {
    return this.getStringAttribute('slot_front_nvme2option_rom');
  }

  // slot_front_nvme30link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme30LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme30link_speed');
  }

  // slot_front_nvme30option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme30OptionRom() {
    return this.getStringAttribute('slot_front_nvme30option_rom');
  }

  // slot_front_nvme31link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme31LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme31link_speed');
  }

  // slot_front_nvme31option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme31OptionRom() {
    return this.getStringAttribute('slot_front_nvme31option_rom');
  }

  // slot_front_nvme32link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme32LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme32link_speed');
  }

  // slot_front_nvme32option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme32OptionRom() {
    return this.getStringAttribute('slot_front_nvme32option_rom');
  }

  // slot_front_nvme3link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme3LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme3link_speed');
  }

  // slot_front_nvme3option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme3OptionRom() {
    return this.getStringAttribute('slot_front_nvme3option_rom');
  }

  // slot_front_nvme4link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme4LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme4link_speed');
  }

  // slot_front_nvme4option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme4OptionRom() {
    return this.getStringAttribute('slot_front_nvme4option_rom');
  }

  // slot_front_nvme5link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme5LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme5link_speed');
  }

  // slot_front_nvme5option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme5OptionRom() {
    return this.getStringAttribute('slot_front_nvme5option_rom');
  }

  // slot_front_nvme6link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme6LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme6link_speed');
  }

  // slot_front_nvme6option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme6OptionRom() {
    return this.getStringAttribute('slot_front_nvme6option_rom');
  }

  // slot_front_nvme7link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme7LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme7link_speed');
  }

  // slot_front_nvme7option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme7OptionRom() {
    return this.getStringAttribute('slot_front_nvme7option_rom');
  }

  // slot_front_nvme8link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme8LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme8link_speed');
  }

  // slot_front_nvme8option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme8OptionRom() {
    return this.getStringAttribute('slot_front_nvme8option_rom');
  }

  // slot_front_nvme9link_speed - computed: true, optional: false, required: false
  public get slotFrontNvme9LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme9link_speed');
  }

  // slot_front_nvme9option_rom - computed: true, optional: false, required: false
  public get slotFrontNvme9OptionRom() {
    return this.getStringAttribute('slot_front_nvme9option_rom');
  }

  // slot_front_slot5link_speed - computed: true, optional: false, required: false
  public get slotFrontSlot5LinkSpeed() {
    return this.getStringAttribute('slot_front_slot5link_speed');
  }

  // slot_front_slot6link_speed - computed: true, optional: false, required: false
  public get slotFrontSlot6LinkSpeed() {
    return this.getStringAttribute('slot_front_slot6link_speed');
  }

  // slot_gpu1state - computed: true, optional: false, required: false
  public get slotGpu1State() {
    return this.getStringAttribute('slot_gpu1state');
  }

  // slot_gpu2state - computed: true, optional: false, required: false
  public get slotGpu2State() {
    return this.getStringAttribute('slot_gpu2state');
  }

  // slot_gpu3state - computed: true, optional: false, required: false
  public get slotGpu3State() {
    return this.getStringAttribute('slot_gpu3state');
  }

  // slot_gpu4state - computed: true, optional: false, required: false
  public get slotGpu4State() {
    return this.getStringAttribute('slot_gpu4state');
  }

  // slot_gpu5state - computed: true, optional: false, required: false
  public get slotGpu5State() {
    return this.getStringAttribute('slot_gpu5state');
  }

  // slot_gpu6state - computed: true, optional: false, required: false
  public get slotGpu6State() {
    return this.getStringAttribute('slot_gpu6state');
  }

  // slot_gpu7state - computed: true, optional: false, required: false
  public get slotGpu7State() {
    return this.getStringAttribute('slot_gpu7state');
  }

  // slot_gpu8state - computed: true, optional: false, required: false
  public get slotGpu8State() {
    return this.getStringAttribute('slot_gpu8state');
  }

  // slot_hba_link_speed - computed: true, optional: false, required: false
  public get slotHbaLinkSpeed() {
    return this.getStringAttribute('slot_hba_link_speed');
  }

  // slot_hba_state - computed: true, optional: false, required: false
  public get slotHbaState() {
    return this.getStringAttribute('slot_hba_state');
  }

  // slot_lom1link - computed: true, optional: false, required: false
  public get slotLom1Link() {
    return this.getStringAttribute('slot_lom1link');
  }

  // slot_lom2link - computed: true, optional: false, required: false
  public get slotLom2Link() {
    return this.getStringAttribute('slot_lom2link');
  }

  // slot_mezz_state - computed: true, optional: false, required: false
  public get slotMezzState() {
    return this.getStringAttribute('slot_mezz_state');
  }

  // slot_mlom_link_speed - computed: true, optional: false, required: false
  public get slotMlomLinkSpeed() {
    return this.getStringAttribute('slot_mlom_link_speed');
  }

  // slot_mlom_state - computed: true, optional: false, required: false
  public get slotMlomState() {
    return this.getStringAttribute('slot_mlom_state');
  }

  // slot_mraid_link_speed - computed: true, optional: false, required: false
  public get slotMraidLinkSpeed() {
    return this.getStringAttribute('slot_mraid_link_speed');
  }

  // slot_mraid_state - computed: true, optional: false, required: false
  public get slotMraidState() {
    return this.getStringAttribute('slot_mraid_state');
  }

  // slot_n10state - computed: true, optional: false, required: false
  public get slotN10State() {
    return this.getStringAttribute('slot_n10state');
  }

  // slot_n11state - computed: true, optional: false, required: false
  public get slotN11State() {
    return this.getStringAttribute('slot_n11state');
  }

  // slot_n12state - computed: true, optional: false, required: false
  public get slotN12State() {
    return this.getStringAttribute('slot_n12state');
  }

  // slot_n13state - computed: true, optional: false, required: false
  public get slotN13State() {
    return this.getStringAttribute('slot_n13state');
  }

  // slot_n14state - computed: true, optional: false, required: false
  public get slotN14State() {
    return this.getStringAttribute('slot_n14state');
  }

  // slot_n15state - computed: true, optional: false, required: false
  public get slotN15State() {
    return this.getStringAttribute('slot_n15state');
  }

  // slot_n16state - computed: true, optional: false, required: false
  public get slotN16State() {
    return this.getStringAttribute('slot_n16state');
  }

  // slot_n17state - computed: true, optional: false, required: false
  public get slotN17State() {
    return this.getStringAttribute('slot_n17state');
  }

  // slot_n18state - computed: true, optional: false, required: false
  public get slotN18State() {
    return this.getStringAttribute('slot_n18state');
  }

  // slot_n19state - computed: true, optional: false, required: false
  public get slotN19State() {
    return this.getStringAttribute('slot_n19state');
  }

  // slot_n1state - computed: true, optional: false, required: false
  public get slotN1State() {
    return this.getStringAttribute('slot_n1state');
  }

  // slot_n20state - computed: true, optional: false, required: false
  public get slotN20State() {
    return this.getStringAttribute('slot_n20state');
  }

  // slot_n21state - computed: true, optional: false, required: false
  public get slotN21State() {
    return this.getStringAttribute('slot_n21state');
  }

  // slot_n22state - computed: true, optional: false, required: false
  public get slotN22State() {
    return this.getStringAttribute('slot_n22state');
  }

  // slot_n23state - computed: true, optional: false, required: false
  public get slotN23State() {
    return this.getStringAttribute('slot_n23state');
  }

  // slot_n24state - computed: true, optional: false, required: false
  public get slotN24State() {
    return this.getStringAttribute('slot_n24state');
  }

  // slot_n2state - computed: true, optional: false, required: false
  public get slotN2State() {
    return this.getStringAttribute('slot_n2state');
  }

  // slot_n3state - computed: true, optional: false, required: false
  public get slotN3State() {
    return this.getStringAttribute('slot_n3state');
  }

  // slot_n4state - computed: true, optional: false, required: false
  public get slotN4State() {
    return this.getStringAttribute('slot_n4state');
  }

  // slot_n5state - computed: true, optional: false, required: false
  public get slotN5State() {
    return this.getStringAttribute('slot_n5state');
  }

  // slot_n6state - computed: true, optional: false, required: false
  public get slotN6State() {
    return this.getStringAttribute('slot_n6state');
  }

  // slot_n7state - computed: true, optional: false, required: false
  public get slotN7State() {
    return this.getStringAttribute('slot_n7state');
  }

  // slot_n8state - computed: true, optional: false, required: false
  public get slotN8State() {
    return this.getStringAttribute('slot_n8state');
  }

  // slot_n9state - computed: true, optional: false, required: false
  public get slotN9State() {
    return this.getStringAttribute('slot_n9state');
  }

  // slot_raid_link_speed - computed: true, optional: false, required: false
  public get slotRaidLinkSpeed() {
    return this.getStringAttribute('slot_raid_link_speed');
  }

  // slot_raid_state - computed: true, optional: false, required: false
  public get slotRaidState() {
    return this.getStringAttribute('slot_raid_state');
  }

  // slot_rear_nvme1link_speed - computed: true, optional: false, required: false
  public get slotRearNvme1LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme1link_speed');
  }

  // slot_rear_nvme1state - computed: true, optional: false, required: false
  public get slotRearNvme1State() {
    return this.getStringAttribute('slot_rear_nvme1state');
  }

  // slot_rear_nvme2link_speed - computed: true, optional: false, required: false
  public get slotRearNvme2LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme2link_speed');
  }

  // slot_rear_nvme2state - computed: true, optional: false, required: false
  public get slotRearNvme2State() {
    return this.getStringAttribute('slot_rear_nvme2state');
  }

  // slot_rear_nvme3link_speed - computed: true, optional: false, required: false
  public get slotRearNvme3LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme3link_speed');
  }

  // slot_rear_nvme3state - computed: true, optional: false, required: false
  public get slotRearNvme3State() {
    return this.getStringAttribute('slot_rear_nvme3state');
  }

  // slot_rear_nvme4link_speed - computed: true, optional: false, required: false
  public get slotRearNvme4LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme4link_speed');
  }

  // slot_rear_nvme4state - computed: true, optional: false, required: false
  public get slotRearNvme4State() {
    return this.getStringAttribute('slot_rear_nvme4state');
  }

  // slot_rear_nvme5state - computed: true, optional: false, required: false
  public get slotRearNvme5State() {
    return this.getStringAttribute('slot_rear_nvme5state');
  }

  // slot_rear_nvme6state - computed: true, optional: false, required: false
  public get slotRearNvme6State() {
    return this.getStringAttribute('slot_rear_nvme6state');
  }

  // slot_rear_nvme7state - computed: true, optional: false, required: false
  public get slotRearNvme7State() {
    return this.getStringAttribute('slot_rear_nvme7state');
  }

  // slot_rear_nvme8state - computed: true, optional: false, required: false
  public get slotRearNvme8State() {
    return this.getStringAttribute('slot_rear_nvme8state');
  }

  // slot_riser1link_speed - computed: true, optional: false, required: false
  public get slotRiser1LinkSpeed() {
    return this.getStringAttribute('slot_riser1link_speed');
  }

  // slot_riser1slot1link_speed - computed: true, optional: false, required: false
  public get slotRiser1Slot1LinkSpeed() {
    return this.getStringAttribute('slot_riser1slot1link_speed');
  }

  // slot_riser1slot2link_speed - computed: true, optional: false, required: false
  public get slotRiser1Slot2LinkSpeed() {
    return this.getStringAttribute('slot_riser1slot2link_speed');
  }

  // slot_riser1slot3link_speed - computed: true, optional: false, required: false
  public get slotRiser1Slot3LinkSpeed() {
    return this.getStringAttribute('slot_riser1slot3link_speed');
  }

  // slot_riser2link_speed - computed: true, optional: false, required: false
  public get slotRiser2LinkSpeed() {
    return this.getStringAttribute('slot_riser2link_speed');
  }

  // slot_riser2slot4link_speed - computed: true, optional: false, required: false
  public get slotRiser2Slot4LinkSpeed() {
    return this.getStringAttribute('slot_riser2slot4link_speed');
  }

  // slot_riser2slot5link_speed - computed: true, optional: false, required: false
  public get slotRiser2Slot5LinkSpeed() {
    return this.getStringAttribute('slot_riser2slot5link_speed');
  }

  // slot_riser2slot6link_speed - computed: true, optional: false, required: false
  public get slotRiser2Slot6LinkSpeed() {
    return this.getStringAttribute('slot_riser2slot6link_speed');
  }

  // slot_sas_state - computed: true, optional: false, required: false
  public get slotSasState() {
    return this.getStringAttribute('slot_sas_state');
  }

  // slot_ssd_slot1link_speed - computed: true, optional: false, required: false
  public get slotSsdSlot1LinkSpeed() {
    return this.getStringAttribute('slot_ssd_slot1link_speed');
  }

  // slot_ssd_slot2link_speed - computed: true, optional: false, required: false
  public get slotSsdSlot2LinkSpeed() {
    return this.getStringAttribute('slot_ssd_slot2link_speed');
  }

  // smee - computed: true, optional: false, required: false
  public get smee() {
    return this.getStringAttribute('smee');
  }

  // smt_mode - computed: true, optional: false, required: false
  public get smtMode() {
    return this.getStringAttribute('smt_mode');
  }

  // snc - computed: true, optional: false, required: false
  public get snc() {
    return this.getStringAttribute('snc');
  }

  // snoopy_mode_for2lm - computed: true, optional: false, required: false
  public get snoopyModeFor2Lm() {
    return this.getStringAttribute('snoopy_mode_for2lm');
  }

  // snoopy_mode_for_ad - computed: true, optional: false, required: false
  public get snoopyModeForAd() {
    return this.getStringAttribute('snoopy_mode_for_ad');
  }

  // sparing_mode - computed: true, optional: false, required: false
  public get sparingMode() {
    return this.getStringAttribute('sparing_mode');
  }

  // sr_iov - computed: true, optional: false, required: false
  public get srIov() {
    return this.getStringAttribute('sr_iov');
  }

  // streamer_prefetch - computed: true, optional: false, required: false
  public get streamerPrefetch() {
    return this.getStringAttribute('streamer_prefetch');
  }

  // svm_mode - computed: true, optional: false, required: false
  public get svmMode() {
    return this.getStringAttribute('svm_mode');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightBiosPolicyResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // terminal_type - computed: true, optional: false, required: false
  public get terminalType() {
    return this.getStringAttribute('terminal_type');
  }

  // tpm_control - computed: true, optional: false, required: false
  public get tpmControl() {
    return this.getStringAttribute('tpm_control');
  }

  // tpm_pending_operation - computed: true, optional: false, required: false
  public get tpmPendingOperation() {
    return this.getStringAttribute('tpm_pending_operation');
  }

  // tpm_ppi_required - computed: true, optional: false, required: false
  public get tpmPpiRequired() {
    return this.getStringAttribute('tpm_ppi_required');
  }

  // tpm_support - computed: true, optional: false, required: false
  public get tpmSupport() {
    return this.getStringAttribute('tpm_support');
  }

  // tsme - computed: true, optional: false, required: false
  public get tsme() {
    return this.getStringAttribute('tsme');
  }

  // txt_support - computed: true, optional: false, required: false
  public get txtSupport() {
    return this.getStringAttribute('txt_support');
  }

  // ucsm_boot_order_rule - computed: true, optional: false, required: false
  public get ucsmBootOrderRule() {
    return this.getStringAttribute('ucsm_boot_order_rule');
  }

  // uefi_mem_map_sp_flag_en - computed: true, optional: false, required: false
  public get uefiMemMapSpFlagEn() {
    return this.getStringAttribute('uefi_mem_map_sp_flag_en');
  }

  // ufs_disable - computed: true, optional: false, required: false
  public get ufsDisable() {
    return this.getStringAttribute('ufs_disable');
  }

  // uma_based_clustering - computed: true, optional: false, required: false
  public get umaBasedClustering() {
    return this.getStringAttribute('uma_based_clustering');
  }

  // upi_link_enablement - computed: true, optional: false, required: false
  public get upiLinkEnablement() {
    return this.getStringAttribute('upi_link_enablement');
  }

  // upi_power_management - computed: true, optional: false, required: false
  public get upiPowerManagement() {
    return this.getStringAttribute('upi_power_management');
  }

  // usb_emul6064 - computed: true, optional: false, required: false
  public get usbEmul6064() {
    return this.getStringAttribute('usb_emul6064');
  }

  // usb_port_front - computed: true, optional: false, required: false
  public get usbPortFront() {
    return this.getStringAttribute('usb_port_front');
  }

  // usb_port_internal - computed: true, optional: false, required: false
  public get usbPortInternal() {
    return this.getStringAttribute('usb_port_internal');
  }

  // usb_port_kvm - computed: true, optional: false, required: false
  public get usbPortKvm() {
    return this.getStringAttribute('usb_port_kvm');
  }

  // usb_port_rear - computed: true, optional: false, required: false
  public get usbPortRear() {
    return this.getStringAttribute('usb_port_rear');
  }

  // usb_port_sd_card - computed: true, optional: false, required: false
  public get usbPortSdCard() {
    return this.getStringAttribute('usb_port_sd_card');
  }

  // usb_port_vmedia - computed: true, optional: false, required: false
  public get usbPortVmedia() {
    return this.getStringAttribute('usb_port_vmedia');
  }

  // usb_xhci_support - computed: true, optional: false, required: false
  public get usbXhciSupport() {
    return this.getStringAttribute('usb_xhci_support');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightBiosPolicyResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vga_priority - computed: true, optional: false, required: false
  public get vgaPriority() {
    return this.getStringAttribute('vga_priority');
  }

  // virtual_numa - computed: true, optional: false, required: false
  public get virtualNuma() {
    return this.getStringAttribute('virtual_numa');
  }

  // vmd_enable - computed: true, optional: false, required: false
  public get vmdEnable() {
    return this.getStringAttribute('vmd_enable');
  }

  // vol_memory_mode - computed: true, optional: false, required: false
  public get volMemoryMode() {
    return this.getStringAttribute('vol_memory_mode');
  }

  // work_load_config - computed: true, optional: false, required: false
  public get workLoadConfig() {
    return this.getStringAttribute('work_load_config');
  }

  // x2apic_opt_out - computed: true, optional: false, required: false
  public get x2ApicOptOut() {
    return this.getStringAttribute('x2apic_opt_out');
  }

  // xpt_prefetch - computed: true, optional: false, required: false
  public get xptPrefetch() {
    return this.getStringAttribute('xpt_prefetch');
  }

  // xpt_remote_prefetch - computed: true, optional: false, required: false
  public get xptRemotePrefetch() {
    return this.getStringAttribute('xpt_remote_prefetch');
  }
}

export class DataIntersightBiosPolicyResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightBiosPolicyResultsOutputReference {
    return new DataIntersightBiosPolicyResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyAncestorsToTerraform(struct?: DataIntersightBiosPolicyAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyAncestorsToHclTerraform(struct?: DataIntersightBiosPolicyAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightBiosPolicyAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightBiosPolicyAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightBiosPolicyAncestorsOutputReference {
    return new DataIntersightBiosPolicyAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyOrganizationToTerraform(struct?: DataIntersightBiosPolicyOrganizationOutputReference | DataIntersightBiosPolicyOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyOrganizationToHclTerraform(struct?: DataIntersightBiosPolicyOrganizationOutputReference | DataIntersightBiosPolicyOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightBiosPolicyOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightBiosPolicyParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyParentToTerraform(struct?: DataIntersightBiosPolicyParentOutputReference | DataIntersightBiosPolicyParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyParentToHclTerraform(struct?: DataIntersightBiosPolicyParentOutputReference | DataIntersightBiosPolicyParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightBiosPolicyParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightBiosPolicyPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyPermissionResourcesToTerraform(struct?: DataIntersightBiosPolicyPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyPermissionResourcesToHclTerraform(struct?: DataIntersightBiosPolicyPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightBiosPolicyPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightBiosPolicyPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightBiosPolicyPermissionResourcesOutputReference {
    return new DataIntersightBiosPolicyPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyProfilesToTerraform(struct?: DataIntersightBiosPolicyProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyProfilesToHclTerraform(struct?: DataIntersightBiosPolicyProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightBiosPolicyProfilesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightBiosPolicyProfiles[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightBiosPolicyProfilesOutputReference {
    return new DataIntersightBiosPolicyProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyTagsAncestorDefinitionsToTerraform(struct?: DataIntersightBiosPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightBiosPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightBiosPolicyTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightBiosPolicyTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightBiosPolicyTagsAncestorDefinitionsOutputReference {
    return new DataIntersightBiosPolicyTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyTagsDefinitionToTerraform(struct?: DataIntersightBiosPolicyTagsDefinitionOutputReference | DataIntersightBiosPolicyTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyTagsDefinitionToHclTerraform(struct?: DataIntersightBiosPolicyTagsDefinitionOutputReference | DataIntersightBiosPolicyTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightBiosPolicyTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightBiosPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#key DataIntersightBiosPolicy#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#propagated DataIntersightBiosPolicy#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the tag is user-defined or owned by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#sys_tag DataIntersightBiosPolicy#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#type DataIntersightBiosPolicy#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#value DataIntersightBiosPolicy#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ancestor_definitions DataIntersightBiosPolicy#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightBiosPolicyTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#definition DataIntersightBiosPolicy#definition}
  */
  readonly definition?: DataIntersightBiosPolicyTagsDefinition;
}

export function dataIntersightBiosPolicyTagsToTerraform(struct?: DataIntersightBiosPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightBiosPolicyTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightBiosPolicyTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightBiosPolicyTagsToHclTerraform(struct?: DataIntersightBiosPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightBiosPolicyTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightBiosPolicyTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightBiosPolicyTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightBiosPolicyTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._sysTag = value.sysTag;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // sys_tag - computed: false, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightBiosPolicyTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightBiosPolicyTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightBiosPolicyTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightBiosPolicyTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightBiosPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightBiosPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightBiosPolicyTagsOutputReference {
    return new DataIntersightBiosPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyVersionContextInterestedMosToTerraform(struct?: DataIntersightBiosPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyVersionContextInterestedMosToHclTerraform(struct?: DataIntersightBiosPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightBiosPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightBiosPolicyVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightBiosPolicyVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightBiosPolicyVersionContextInterestedMosOutputReference {
    return new DataIntersightBiosPolicyVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightBiosPolicyVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#moid DataIntersightBiosPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#selector DataIntersightBiosPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightBiosPolicyVersionContextRefMoToTerraform(struct?: DataIntersightBiosPolicyVersionContextRefMoOutputReference | DataIntersightBiosPolicyVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightBiosPolicyVersionContextRefMoToHclTerraform(struct?: DataIntersightBiosPolicyVersionContextRefMoOutputReference | DataIntersightBiosPolicyVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightBiosPolicyVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightBiosPolicyVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#additional_properties DataIntersightBiosPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#class_id DataIntersightBiosPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#marked_for_deletion DataIntersightBiosPolicy#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#nr_version DataIntersightBiosPolicy#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#object_type DataIntersightBiosPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#timestamp DataIntersightBiosPolicy#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#version_type DataIntersightBiosPolicy#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#interested_mos DataIntersightBiosPolicy#interested_mos}
  */
  readonly interestedMos?: DataIntersightBiosPolicyVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#ref_mo DataIntersightBiosPolicy#ref_mo}
  */
  readonly refMo?: DataIntersightBiosPolicyVersionContextRefMo;
}

export function dataIntersightBiosPolicyVersionContextToTerraform(struct?: DataIntersightBiosPolicyVersionContextOutputReference | DataIntersightBiosPolicyVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightBiosPolicyVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightBiosPolicyVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightBiosPolicyVersionContextToHclTerraform(struct?: DataIntersightBiosPolicyVersionContextOutputReference | DataIntersightBiosPolicyVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightBiosPolicyVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightBiosPolicyVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightBiosPolicyVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightBiosPolicyVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightBiosPolicyVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightBiosPolicyVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightBiosPolicyVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightBiosPolicyVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightBiosPolicyVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightBiosPolicyVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightBiosPolicyVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy intersight_bios_policy}
*/
export class DataIntersightBiosPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_bios_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightBiosPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightBiosPolicy to import
  * @param importFromId The id of the existing DataIntersightBiosPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightBiosPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_bios_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/bios_policy intersight_bios_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightBiosPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightBiosPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_bios_policy',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.73',
        providerVersionConstraint: '1.0.73'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._acpiSratSpFlagEn = config.acpiSratSpFlagEn;
    this._acsControlGpu1State = config.acsControlGpu1State;
    this._acsControlGpu2State = config.acsControlGpu2State;
    this._acsControlGpu3State = config.acsControlGpu3State;
    this._acsControlGpu4State = config.acsControlGpu4State;
    this._acsControlGpu5State = config.acsControlGpu5State;
    this._acsControlGpu6State = config.acsControlGpu6State;
    this._acsControlGpu7State = config.acsControlGpu7State;
    this._acsControlGpu8State = config.acsControlGpu8State;
    this._acsControlSlot11State = config.acsControlSlot11State;
    this._acsControlSlot12State = config.acsControlSlot12State;
    this._acsControlSlot13State = config.acsControlSlot13State;
    this._acsControlSlot14State = config.acsControlSlot14State;
    this._adaptiveRefreshMgmtLevel = config.adaptiveRefreshMgmtLevel;
    this._additionalProperties = config.additionalProperties;
    this._adjacentCacheLinePrefetch = config.adjacentCacheLinePrefetch;
    this._advancedMemTest = config.advancedMemTest;
    this._allUsbDevices = config.allUsbDevices;
    this._altitude = config.altitude;
    this._aspmSupport = config.aspmSupport;
    this._assertNmiOnPerr = config.assertNmiOnPerr;
    this._assertNmiOnSerr = config.assertNmiOnSerr;
    this._autoCcState = config.autoCcState;
    this._autonumousCstateEnable = config.autonumousCstateEnable;
    this._baudRate = config.baudRate;
    this._bmeDmaMitigation = config.bmeDmaMitigation;
    this._bootOptionNumRetry = config.bootOptionNumRetry;
    this._bootOptionReCoolDown = config.bootOptionReCoolDown;
    this._bootOptionRetry = config.bootOptionRetry;
    this._bootPerformanceMode = config.bootPerformanceMode;
    this._burstAndPostponedRefresh = config.burstAndPostponedRefresh;
    this._c1AutoDemotion = config.c1AutoDemotion;
    this._c1AutoUnDemotion = config.c1AutoUnDemotion;
    this._cbsCmnApbdis = config.cbsCmnApbdis;
    this._cbsCmnApbdisDfPstateRs = config.cbsCmnApbdisDfPstateRs;
    this._cbsCmnCpuAvx512 = config.cbsCmnCpuAvx512;
    this._cbsCmnCpuCpb = config.cbsCmnCpuCpb;
    this._cbsCmnCpuGenDowncoreCtrl = config.cbsCmnCpuGenDowncoreCtrl;
    this._cbsCmnCpuGlobalCstateCtrl = config.cbsCmnCpuGlobalCstateCtrl;
    this._cbsCmnCpuL1StreamHwPrefetcher = config.cbsCmnCpuL1StreamHwPrefetcher;
    this._cbsCmnCpuL2StreamHwPrefetcher = config.cbsCmnCpuL2StreamHwPrefetcher;
    this._cbsCmnCpuSevAsidSpaceLimit = config.cbsCmnCpuSevAsidSpaceLimit;
    this._cbsCmnCpuSmee = config.cbsCmnCpuSmee;
    this._cbsCmnCpuStreamingStoresCtrl = config.cbsCmnCpuStreamingStoresCtrl;
    this._cbsCmnDeterminismSlider = config.cbsCmnDeterminismSlider;
    this._cbsCmnEdcControlThrottle = config.cbsCmnEdcControlThrottle;
    this._cbsCmnEfficiencyModeEn = config.cbsCmnEfficiencyModeEn;
    this._cbsCmnEfficiencyModeEnRs = config.cbsCmnEfficiencyModeEnRs;
    this._cbsCmnFixedSocPstate = config.cbsCmnFixedSocPstate;
    this._cbsCmnGnbNbIommu = config.cbsCmnGnbNbIommu;
    this._cbsCmnGnbSmuDfCstates = config.cbsCmnGnbSmuDfCstates;
    this._cbsCmnGnbSmuDffoRs = config.cbsCmnGnbSmuDffoRs;
    this._cbsCmnGnbSmuDlwmSupport = config.cbsCmnGnbSmuDlwmSupport;
    this._cbsCmnGnbSmucppc = config.cbsCmnGnbSmucppc;
    this._cbsCmnMemCtrlBankGroupSwapDdr4 = config.cbsCmnMemCtrlBankGroupSwapDdr4;
    this._cbsCmnMemCtrllerPwrDnEnDdr = config.cbsCmnMemCtrllerPwrDnEnDdr;
    this._cbsCmnMemMapBankInterleaveDdr4 = config.cbsCmnMemMapBankInterleaveDdr4;
    this._cbsCmnMemSpeedDdr47Xx2 = config.cbsCmnMemSpeedDdr47Xx2;
    this._cbsCmnMemSpeedDdr47Xx3 = config.cbsCmnMemSpeedDdr47Xx3;
    this._cbsCmnPreferredIo7Xx2 = config.cbsCmnPreferredIo7Xx2;
    this._cbsCmnPreferredIo7Xx3 = config.cbsCmnPreferredIo7Xx3;
    this._cbsCmncTdpCtl = config.cbsCmncTdpCtl;
    this._cbsCmnxGmiForceLinkWidthRs = config.cbsCmnxGmiForceLinkWidthRs;
    this._cbsCpuCcdCtrlSsp = config.cbsCpuCcdCtrlSsp;
    this._cbsCpuCoreCtrl = config.cbsCpuCoreCtrl;
    this._cbsCpuDownCoreCtrlBergamo = config.cbsCpuDownCoreCtrlBergamo;
    this._cbsCpuDownCoreCtrlGenoa = config.cbsCpuDownCoreCtrlGenoa;
    this._cbsCpuSmtCtrl = config.cbsCpuSmtCtrl;
    this._cbsDbgCpuGenCpuWdt = config.cbsDbgCpuGenCpuWdt;
    this._cbsDbgCpuLapicMode = config.cbsDbgCpuLapicMode;
    this._cbsDbgCpuSnpMemCover = config.cbsDbgCpuSnpMemCover;
    this._cbsDbgCpuSnpMemSizeCover = config.cbsDbgCpuSnpMemSizeCover;
    this._cbsDfCmn4LinkMaxXgmiSpeed = config.cbsDfCmn4LinkMaxXgmiSpeed;
    this._cbsDfCmnAcpiSratL3Numa = config.cbsDfCmnAcpiSratL3Numa;
    this._cbsDfCmnDramNps = config.cbsDfCmnDramNps;
    this._cbsDfCmnDramScrubTime = config.cbsDfCmnDramScrubTime;
    this._cbsDfCmnMemIntlv = config.cbsDfCmnMemIntlv;
    this._cbsDfCmnMemIntlvControl = config.cbsDfCmnMemIntlvControl;
    this._cbsDfCmnMemIntlvSize = config.cbsDfCmnMemIntlvSize;
    this._cbsDfDbgXgmiLinkCfg = config.cbsDfDbgXgmiLinkCfg;
    this._cbsGnbDbgPcieTbtSupport = config.cbsGnbDbgPcieTbtSupport;
    this._cbsSevSnpSupport = config.cbsSevSnpSupport;
    this._cdnEnable = config.cdnEnable;
    this._cdnSupport = config.cdnSupport;
    this._channelInterLeave = config.channelInterLeave;
    this._ciscoAdaptiveMemTraining = config.ciscoAdaptiveMemTraining;
    this._ciscoDebugLevel = config.ciscoDebugLevel;
    this._ciscoOpromLaunchOptimization = config.ciscoOpromLaunchOptimization;
    this._ciscoXgmiMaxSpeed = config.ciscoXgmiMaxSpeed;
    this._ckeLowPolicy = config.ckeLowPolicy;
    this._classId = config.classId;
    this._closedLoopThermThrotl = config.closedLoopThermThrotl;
    this._cmciEnable = config.cmciEnable;
    this._configTdp = config.configTdp;
    this._configTdpLevel = config.configTdpLevel;
    this._consoleRedirection = config.consoleRedirection;
    this._coreMultiProcessing = config.coreMultiProcessing;
    this._cpuEnergyPerformance = config.cpuEnergyPerformance;
    this._cpuFrequencyFloor = config.cpuFrequencyFloor;
    this._cpuPaLimit = config.cpuPaLimit;
    this._cpuPerfEnhancement = config.cpuPerfEnhancement;
    this._cpuPerformance = config.cpuPerformance;
    this._cpuPowerManagement = config.cpuPowerManagement;
    this._crQos = config.crQos;
    this._createTime = config.createTime;
    this._crfastgoConfig = config.crfastgoConfig;
    this._dcpmmFirmwareDowngrade = config.dcpmmFirmwareDowngrade;
    this._demandScrub = config.demandScrub;
    this._description = config.description;
    this._dfxOsbEn = config.dfxOsbEn;
    this._directCacheAccess = config.directCacheAccess;
    this._dmaCtrlOptIn = config.dmaCtrlOptIn;
    this._domainGroupMoid = config.domainGroupMoid;
    this._dramClockThrottling = config.dramClockThrottling;
    this._dramRefreshRate = config.dramRefreshRate;
    this._dramSwThermalThrottling = config.dramSwThermalThrottling;
    this._eadrSupport = config.eadrSupport;
    this._edpcEn = config.edpcEn;
    this._enableClockSpreadSpec = config.enableClockSpreadSpec;
    this._enableMktme = config.enableMktme;
    this._enableRmt = config.enableRmt;
    this._enableSgx = config.enableSgx;
    this._enableTdx = config.enableTdx;
    this._enableTdxSeamldr = config.enableTdxSeamldr;
    this._enableTme = config.enableTme;
    this._energyEfficientTurbo = config.energyEfficientTurbo;
    this._engPerfTuning = config.engPerfTuning;
    this._enhancedIntelSpeedStepTech = config.enhancedIntelSpeedStepTech;
    this._epochUpdate = config.epochUpdate;
    this._eppEnable = config.eppEnable;
    this._eppProfile = config.eppProfile;
    this._errorCheckScrub = config.errorCheckScrub;
    this._executeDisableBit = config.executeDisableBit;
    this._extendedApic = config.extendedApic;
    this._flowControl = config.flowControl;
    this._frb2Enable = config.frb2Enable;
    this._gpuDirectCpu1 = config.gpuDirectCpu1;
    this._gpuDirectCpu2 = config.gpuDirectCpu2;
    this._gpuDirectCpu3 = config.gpuDirectCpu3;
    this._gpuDirectCpu4 = config.gpuDirectCpu4;
    this._hardwarePrefetch = config.hardwarePrefetch;
    this._hwpmEnable = config.hwpmEnable;
    this._id = config.id;
    this._imcInterleave = config.imcInterleave;
    this._intelDynamicSpeedSelect = config.intelDynamicSpeedSelect;
    this._intelHyperThreadingTech = config.intelHyperThreadingTech;
    this._intelSpeedSelect = config.intelSpeedSelect;
    this._intelTurboBoostTech = config.intelTurboBoostTech;
    this._intelVirtualizationTechnology = config.intelVirtualizationTechnology;
    this._intelVtForDirectedIo = config.intelVtForDirectedIo;
    this._intelVtdCoherencySupport = config.intelVtdCoherencySupport;
    this._intelVtdInterruptRemapping = config.intelVtdInterruptRemapping;
    this._intelVtdPassThroughDmaSupport = config.intelVtdPassThroughDmaSupport;
    this._intelVtdatsSupport = config.intelVtdatsSupport;
    this._ioatConfigCpm = config.ioatConfigCpm;
    this._iohErrorEnable = config.iohErrorEnable;
    this._iohResource = config.iohResource;
    this._ipPrefetch = config.ipPrefetch;
    this._ipv4Http = config.ipv4Http;
    this._ipv4Pxe = config.ipv4Pxe;
    this._ipv6Http = config.ipv6Http;
    this._ipv6Pxe = config.ipv6Pxe;
    this._ktiPrefetch = config.ktiPrefetch;
    this._latencyOptimizedMode = config.latencyOptimizedMode;
    this._legacyOsRedirection = config.legacyOsRedirection;
    this._legacyUsbSupport = config.legacyUsbSupport;
    this._llcAlloc = config.llcAlloc;
    this._llcPrefetch = config.llcPrefetch;
    this._lomPort0State = config.lomPort0State;
    this._lomPort1State = config.lomPort1State;
    this._lomPort2State = config.lomPort2State;
    this._lomPort3State = config.lomPort3State;
    this._lomPortsAllState = config.lomPortsAllState;
    this._lvDdrMode = config.lvDdrMode;
    this._makeDeviceNonBootable = config.makeDeviceNonBootable;
    this._memoryBandwidthBoost = config.memoryBandwidthBoost;
    this._memoryInterLeave = config.memoryInterLeave;
    this._memoryMappedIoAbove4Gb = config.memoryMappedIoAbove4Gb;
    this._memoryRefreshRate = config.memoryRefreshRate;
    this._memorySizeLimit = config.memorySizeLimit;
    this._memoryThermalThrottling = config.memoryThermalThrottling;
    this._mirroringMode = config.mirroringMode;
    this._mmcfgBase = config.mmcfgBase;
    this._mmiohBase = config.mmiohBase;
    this._mmiohSize = config.mmiohSize;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._networkStack = config.networkStack;
    this._numaOptimized = config.numaOptimized;
    this._nvmdimmPerformConfig = config.nvmdimmPerformConfig;
    this._objectType = config.objectType;
    this._onboard10GbitLom = config.onboard10GbitLom;
    this._onboardGbitLom = config.onboardGbitLom;
    this._onboardScuStorageSupport = config.onboardScuStorageSupport;
    this._onboardScuStorageSwStack = config.onboardScuStorageSwStack;
    this._operationMode = config.operationMode;
    this._optimizedPowerMode = config.optimizedPowerMode;
    this._osBootWatchdogTimer = config.osBootWatchdogTimer;
    this._osBootWatchdogTimerPolicy = config.osBootWatchdogTimerPolicy;
    this._osBootWatchdogTimerTimeout = config.osBootWatchdogTimerTimeout;
    this._outOfBandMgmtPort = config.outOfBandMgmtPort;
    this._owners = config.owners;
    this._packageCstateLimit = config.packageCstateLimit;
    this._panicHighWatermark = config.panicHighWatermark;
    this._partialCacheLineSparing = config.partialCacheLineSparing;
    this._partialMirrorModeConfig = config.partialMirrorModeConfig;
    this._partialMirrorPercent = config.partialMirrorPercent;
    this._partialMirrorValue1 = config.partialMirrorValue1;
    this._partialMirrorValue2 = config.partialMirrorValue2;
    this._partialMirrorValue3 = config.partialMirrorValue3;
    this._partialMirrorValue4 = config.partialMirrorValue4;
    this._patrolScrub = config.patrolScrub;
    this._patrolScrubDuration = config.patrolScrubDuration;
    this._pcIeRasSupport = config.pcIeRasSupport;
    this._pcIeSsdHotPlugSupport = config.pcIeSsdHotPlugSupport;
    this._pchPciePllSsc = config.pchPciePllSsc;
    this._pchUsb30Mode = config.pchUsb30Mode;
    this._pciOptionRoMs = config.pciOptionRoMs;
    this._pciRomClp = config.pciRomClp;
    this._pcieAriSupport = config.pcieAriSupport;
    this._pciePllSsc = config.pciePllSsc;
    this._pcieSlotMraid1LinkSpeed = config.pcieSlotMraid1LinkSpeed;
    this._pcieSlotMraid1OptionRom = config.pcieSlotMraid1OptionRom;
    this._pcieSlotMraid2LinkSpeed = config.pcieSlotMraid2LinkSpeed;
    this._pcieSlotMraid2OptionRom = config.pcieSlotMraid2OptionRom;
    this._pcieSlotMstorraidLinkSpeed = config.pcieSlotMstorraidLinkSpeed;
    this._pcieSlotMstorraidOptionRom = config.pcieSlotMstorraidOptionRom;
    this._pcieSlotNvme1LinkSpeed = config.pcieSlotNvme1LinkSpeed;
    this._pcieSlotNvme1OptionRom = config.pcieSlotNvme1OptionRom;
    this._pcieSlotNvme2LinkSpeed = config.pcieSlotNvme2LinkSpeed;
    this._pcieSlotNvme2OptionRom = config.pcieSlotNvme2OptionRom;
    this._pcieSlotNvme3LinkSpeed = config.pcieSlotNvme3LinkSpeed;
    this._pcieSlotNvme3OptionRom = config.pcieSlotNvme3OptionRom;
    this._pcieSlotNvme4LinkSpeed = config.pcieSlotNvme4LinkSpeed;
    this._pcieSlotNvme4OptionRom = config.pcieSlotNvme4OptionRom;
    this._pcieSlotNvme5LinkSpeed = config.pcieSlotNvme5LinkSpeed;
    this._pcieSlotNvme5OptionRom = config.pcieSlotNvme5OptionRom;
    this._pcieSlotNvme6LinkSpeed = config.pcieSlotNvme6LinkSpeed;
    this._pcieSlotNvme6OptionRom = config.pcieSlotNvme6OptionRom;
    this._pcieSlotsCdnEnable = config.pcieSlotsCdnEnable;
    this._popSupport = config.popSupport;
    this._postErrorPause = config.postErrorPause;
    this._postPackageRepair = config.postPackageRepair;
    this._preBootDmaProtection = config.preBootDmaProtection;
    this._prmrrSize = config.prmrrSize;
    this._processorC1E = config.processorC1E;
    this._processorC3Report = config.processorC3Report;
    this._processorC6Report = config.processorC6Report;
    this._processorCstate = config.processorCstate;
    this._psata = config.psata;
    this._pstateCoordType = config.pstateCoordType;
    this._puttyKeyPad = config.puttyKeyPad;
    this._pwrPerfTuning = config.pwrPerfTuning;
    this._qpiLinkFrequency = config.qpiLinkFrequency;
    this._qpiLinkSpeed = config.qpiLinkSpeed;
    this._qpiSnoopMode = config.qpiSnoopMode;
    this._rankInterLeave = config.rankInterLeave;
    this._redirectionAfterPost = config.redirectionAfterPost;
    this._resizeBarSupport = config.resizeBarSupport;
    this._runtimePostPackageRepair = config.runtimePostPackageRepair;
    this._sataModeSelect = config.sataModeSelect;
    this._selectMemoryRasConfiguration = config.selectMemoryRasConfiguration;
    this._selectPprType = config.selectPprType;
    this._serialMux = config.serialMux;
    this._serialPortAenable = config.serialPortAenable;
    this._sev = config.sev;
    this._sgxAutoRegistrationAgent = config.sgxAutoRegistrationAgent;
    this._sgxEpoch0 = config.sgxEpoch0;
    this._sgxEpoch1 = config.sgxEpoch1;
    this._sgxFactoryReset = config.sgxFactoryReset;
    this._sgxLePubKeyHash0 = config.sgxLePubKeyHash0;
    this._sgxLePubKeyHash1 = config.sgxLePubKeyHash1;
    this._sgxLePubKeyHash2 = config.sgxLePubKeyHash2;
    this._sgxLePubKeyHash3 = config.sgxLePubKeyHash3;
    this._sgxLeWr = config.sgxLeWr;
    this._sgxPackageInfoInBandAccess = config.sgxPackageInfoInBandAccess;
    this._sgxQos = config.sgxQos;
    this._sha1PcrBank = config.sha1PcrBank;
    this._sha256PcrBank = config.sha256PcrBank;
    this._sha384PcrBank = config.sha384PcrBank;
    this._sharedScope = config.sharedScope;
    this._singlePctlEnable = config.singlePctlEnable;
    this._slot10LinkSpeed = config.slot10LinkSpeed;
    this._slot10State = config.slot10State;
    this._slot11LinkSpeed = config.slot11LinkSpeed;
    this._slot11State = config.slot11State;
    this._slot12LinkSpeed = config.slot12LinkSpeed;
    this._slot12State = config.slot12State;
    this._slot13State = config.slot13State;
    this._slot14State = config.slot14State;
    this._slot1LinkSpeed = config.slot1LinkSpeed;
    this._slot1State = config.slot1State;
    this._slot2LinkSpeed = config.slot2LinkSpeed;
    this._slot2State = config.slot2State;
    this._slot3LinkSpeed = config.slot3LinkSpeed;
    this._slot3State = config.slot3State;
    this._slot4LinkSpeed = config.slot4LinkSpeed;
    this._slot4State = config.slot4State;
    this._slot5LinkSpeed = config.slot5LinkSpeed;
    this._slot5State = config.slot5State;
    this._slot6LinkSpeed = config.slot6LinkSpeed;
    this._slot6State = config.slot6State;
    this._slot7LinkSpeed = config.slot7LinkSpeed;
    this._slot7State = config.slot7State;
    this._slot8LinkSpeed = config.slot8LinkSpeed;
    this._slot8State = config.slot8State;
    this._slot9LinkSpeed = config.slot9LinkSpeed;
    this._slot9State = config.slot9State;
    this._slotFlomLinkSpeed = config.slotFlomLinkSpeed;
    this._slotFrontNvme10LinkSpeed = config.slotFrontNvme10LinkSpeed;
    this._slotFrontNvme10OptionRom = config.slotFrontNvme10OptionRom;
    this._slotFrontNvme11LinkSpeed = config.slotFrontNvme11LinkSpeed;
    this._slotFrontNvme11OptionRom = config.slotFrontNvme11OptionRom;
    this._slotFrontNvme12LinkSpeed = config.slotFrontNvme12LinkSpeed;
    this._slotFrontNvme12OptionRom = config.slotFrontNvme12OptionRom;
    this._slotFrontNvme13LinkSpeed = config.slotFrontNvme13LinkSpeed;
    this._slotFrontNvme13OptionRom = config.slotFrontNvme13OptionRom;
    this._slotFrontNvme14LinkSpeed = config.slotFrontNvme14LinkSpeed;
    this._slotFrontNvme14OptionRom = config.slotFrontNvme14OptionRom;
    this._slotFrontNvme15LinkSpeed = config.slotFrontNvme15LinkSpeed;
    this._slotFrontNvme15OptionRom = config.slotFrontNvme15OptionRom;
    this._slotFrontNvme16LinkSpeed = config.slotFrontNvme16LinkSpeed;
    this._slotFrontNvme16OptionRom = config.slotFrontNvme16OptionRom;
    this._slotFrontNvme17LinkSpeed = config.slotFrontNvme17LinkSpeed;
    this._slotFrontNvme17OptionRom = config.slotFrontNvme17OptionRom;
    this._slotFrontNvme18LinkSpeed = config.slotFrontNvme18LinkSpeed;
    this._slotFrontNvme18OptionRom = config.slotFrontNvme18OptionRom;
    this._slotFrontNvme19LinkSpeed = config.slotFrontNvme19LinkSpeed;
    this._slotFrontNvme19OptionRom = config.slotFrontNvme19OptionRom;
    this._slotFrontNvme1LinkSpeed = config.slotFrontNvme1LinkSpeed;
    this._slotFrontNvme1OptionRom = config.slotFrontNvme1OptionRom;
    this._slotFrontNvme20LinkSpeed = config.slotFrontNvme20LinkSpeed;
    this._slotFrontNvme20OptionRom = config.slotFrontNvme20OptionRom;
    this._slotFrontNvme21LinkSpeed = config.slotFrontNvme21LinkSpeed;
    this._slotFrontNvme21OptionRom = config.slotFrontNvme21OptionRom;
    this._slotFrontNvme22LinkSpeed = config.slotFrontNvme22LinkSpeed;
    this._slotFrontNvme22OptionRom = config.slotFrontNvme22OptionRom;
    this._slotFrontNvme23LinkSpeed = config.slotFrontNvme23LinkSpeed;
    this._slotFrontNvme23OptionRom = config.slotFrontNvme23OptionRom;
    this._slotFrontNvme24LinkSpeed = config.slotFrontNvme24LinkSpeed;
    this._slotFrontNvme24OptionRom = config.slotFrontNvme24OptionRom;
    this._slotFrontNvme25LinkSpeed = config.slotFrontNvme25LinkSpeed;
    this._slotFrontNvme25OptionRom = config.slotFrontNvme25OptionRom;
    this._slotFrontNvme26LinkSpeed = config.slotFrontNvme26LinkSpeed;
    this._slotFrontNvme26OptionRom = config.slotFrontNvme26OptionRom;
    this._slotFrontNvme27LinkSpeed = config.slotFrontNvme27LinkSpeed;
    this._slotFrontNvme27OptionRom = config.slotFrontNvme27OptionRom;
    this._slotFrontNvme28LinkSpeed = config.slotFrontNvme28LinkSpeed;
    this._slotFrontNvme28OptionRom = config.slotFrontNvme28OptionRom;
    this._slotFrontNvme29LinkSpeed = config.slotFrontNvme29LinkSpeed;
    this._slotFrontNvme29OptionRom = config.slotFrontNvme29OptionRom;
    this._slotFrontNvme2LinkSpeed = config.slotFrontNvme2LinkSpeed;
    this._slotFrontNvme2OptionRom = config.slotFrontNvme2OptionRom;
    this._slotFrontNvme30LinkSpeed = config.slotFrontNvme30LinkSpeed;
    this._slotFrontNvme30OptionRom = config.slotFrontNvme30OptionRom;
    this._slotFrontNvme31LinkSpeed = config.slotFrontNvme31LinkSpeed;
    this._slotFrontNvme31OptionRom = config.slotFrontNvme31OptionRom;
    this._slotFrontNvme32LinkSpeed = config.slotFrontNvme32LinkSpeed;
    this._slotFrontNvme32OptionRom = config.slotFrontNvme32OptionRom;
    this._slotFrontNvme3LinkSpeed = config.slotFrontNvme3LinkSpeed;
    this._slotFrontNvme3OptionRom = config.slotFrontNvme3OptionRom;
    this._slotFrontNvme4LinkSpeed = config.slotFrontNvme4LinkSpeed;
    this._slotFrontNvme4OptionRom = config.slotFrontNvme4OptionRom;
    this._slotFrontNvme5LinkSpeed = config.slotFrontNvme5LinkSpeed;
    this._slotFrontNvme5OptionRom = config.slotFrontNvme5OptionRom;
    this._slotFrontNvme6LinkSpeed = config.slotFrontNvme6LinkSpeed;
    this._slotFrontNvme6OptionRom = config.slotFrontNvme6OptionRom;
    this._slotFrontNvme7LinkSpeed = config.slotFrontNvme7LinkSpeed;
    this._slotFrontNvme7OptionRom = config.slotFrontNvme7OptionRom;
    this._slotFrontNvme8LinkSpeed = config.slotFrontNvme8LinkSpeed;
    this._slotFrontNvme8OptionRom = config.slotFrontNvme8OptionRom;
    this._slotFrontNvme9LinkSpeed = config.slotFrontNvme9LinkSpeed;
    this._slotFrontNvme9OptionRom = config.slotFrontNvme9OptionRom;
    this._slotFrontSlot5LinkSpeed = config.slotFrontSlot5LinkSpeed;
    this._slotFrontSlot6LinkSpeed = config.slotFrontSlot6LinkSpeed;
    this._slotGpu1State = config.slotGpu1State;
    this._slotGpu2State = config.slotGpu2State;
    this._slotGpu3State = config.slotGpu3State;
    this._slotGpu4State = config.slotGpu4State;
    this._slotGpu5State = config.slotGpu5State;
    this._slotGpu6State = config.slotGpu6State;
    this._slotGpu7State = config.slotGpu7State;
    this._slotGpu8State = config.slotGpu8State;
    this._slotHbaLinkSpeed = config.slotHbaLinkSpeed;
    this._slotHbaState = config.slotHbaState;
    this._slotLom1Link = config.slotLom1Link;
    this._slotLom2Link = config.slotLom2Link;
    this._slotMezzState = config.slotMezzState;
    this._slotMlomLinkSpeed = config.slotMlomLinkSpeed;
    this._slotMlomState = config.slotMlomState;
    this._slotMraidLinkSpeed = config.slotMraidLinkSpeed;
    this._slotMraidState = config.slotMraidState;
    this._slotN10State = config.slotN10State;
    this._slotN11State = config.slotN11State;
    this._slotN12State = config.slotN12State;
    this._slotN13State = config.slotN13State;
    this._slotN14State = config.slotN14State;
    this._slotN15State = config.slotN15State;
    this._slotN16State = config.slotN16State;
    this._slotN17State = config.slotN17State;
    this._slotN18State = config.slotN18State;
    this._slotN19State = config.slotN19State;
    this._slotN1State = config.slotN1State;
    this._slotN20State = config.slotN20State;
    this._slotN21State = config.slotN21State;
    this._slotN22State = config.slotN22State;
    this._slotN23State = config.slotN23State;
    this._slotN24State = config.slotN24State;
    this._slotN2State = config.slotN2State;
    this._slotN3State = config.slotN3State;
    this._slotN4State = config.slotN4State;
    this._slotN5State = config.slotN5State;
    this._slotN6State = config.slotN6State;
    this._slotN7State = config.slotN7State;
    this._slotN8State = config.slotN8State;
    this._slotN9State = config.slotN9State;
    this._slotRaidLinkSpeed = config.slotRaidLinkSpeed;
    this._slotRaidState = config.slotRaidState;
    this._slotRearNvme1LinkSpeed = config.slotRearNvme1LinkSpeed;
    this._slotRearNvme1State = config.slotRearNvme1State;
    this._slotRearNvme2LinkSpeed = config.slotRearNvme2LinkSpeed;
    this._slotRearNvme2State = config.slotRearNvme2State;
    this._slotRearNvme3LinkSpeed = config.slotRearNvme3LinkSpeed;
    this._slotRearNvme3State = config.slotRearNvme3State;
    this._slotRearNvme4LinkSpeed = config.slotRearNvme4LinkSpeed;
    this._slotRearNvme4State = config.slotRearNvme4State;
    this._slotRearNvme5State = config.slotRearNvme5State;
    this._slotRearNvme6State = config.slotRearNvme6State;
    this._slotRearNvme7State = config.slotRearNvme7State;
    this._slotRearNvme8State = config.slotRearNvme8State;
    this._slotRiser1LinkSpeed = config.slotRiser1LinkSpeed;
    this._slotRiser1Slot1LinkSpeed = config.slotRiser1Slot1LinkSpeed;
    this._slotRiser1Slot2LinkSpeed = config.slotRiser1Slot2LinkSpeed;
    this._slotRiser1Slot3LinkSpeed = config.slotRiser1Slot3LinkSpeed;
    this._slotRiser2LinkSpeed = config.slotRiser2LinkSpeed;
    this._slotRiser2Slot4LinkSpeed = config.slotRiser2Slot4LinkSpeed;
    this._slotRiser2Slot5LinkSpeed = config.slotRiser2Slot5LinkSpeed;
    this._slotRiser2Slot6LinkSpeed = config.slotRiser2Slot6LinkSpeed;
    this._slotSasState = config.slotSasState;
    this._slotSsdSlot1LinkSpeed = config.slotSsdSlot1LinkSpeed;
    this._slotSsdSlot2LinkSpeed = config.slotSsdSlot2LinkSpeed;
    this._smee = config.smee;
    this._smtMode = config.smtMode;
    this._snc = config.snc;
    this._snoopyModeFor2Lm = config.snoopyModeFor2Lm;
    this._snoopyModeForAd = config.snoopyModeForAd;
    this._sparingMode = config.sparingMode;
    this._srIov = config.srIov;
    this._streamerPrefetch = config.streamerPrefetch;
    this._svmMode = config.svmMode;
    this._terminalType = config.terminalType;
    this._tpmControl = config.tpmControl;
    this._tpmPendingOperation = config.tpmPendingOperation;
    this._tpmPpiRequired = config.tpmPpiRequired;
    this._tpmSupport = config.tpmSupport;
    this._tsme = config.tsme;
    this._txtSupport = config.txtSupport;
    this._ucsmBootOrderRule = config.ucsmBootOrderRule;
    this._uefiMemMapSpFlagEn = config.uefiMemMapSpFlagEn;
    this._ufsDisable = config.ufsDisable;
    this._umaBasedClustering = config.umaBasedClustering;
    this._upiLinkEnablement = config.upiLinkEnablement;
    this._upiPowerManagement = config.upiPowerManagement;
    this._usbEmul6064 = config.usbEmul6064;
    this._usbPortFront = config.usbPortFront;
    this._usbPortInternal = config.usbPortInternal;
    this._usbPortKvm = config.usbPortKvm;
    this._usbPortRear = config.usbPortRear;
    this._usbPortSdCard = config.usbPortSdCard;
    this._usbPortVmedia = config.usbPortVmedia;
    this._usbXhciSupport = config.usbXhciSupport;
    this._vgaPriority = config.vgaPriority;
    this._virtualNuma = config.virtualNuma;
    this._vmdEnable = config.vmdEnable;
    this._volMemoryMode = config.volMemoryMode;
    this._workLoadConfig = config.workLoadConfig;
    this._x2ApicOptOut = config.x2ApicOptOut;
    this._xptPrefetch = config.xptPrefetch;
    this._xptRemotePrefetch = config.xptRemotePrefetch;
    this._ancestors.internalValue = config.ancestors;
    this._organization.internalValue = config.organization;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._profiles.internalValue = config.profiles;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // acpi_srat_sp_flag_en - computed: false, optional: true, required: false
  private _acpiSratSpFlagEn?: string; 
  public get acpiSratSpFlagEn() {
    return this.getStringAttribute('acpi_srat_sp_flag_en');
  }
  public set acpiSratSpFlagEn(value: string) {
    this._acpiSratSpFlagEn = value;
  }
  public resetAcpiSratSpFlagEn() {
    this._acpiSratSpFlagEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acpiSratSpFlagEnInput() {
    return this._acpiSratSpFlagEn;
  }

  // acs_control_gpu1state - computed: false, optional: true, required: false
  private _acsControlGpu1State?: string; 
  public get acsControlGpu1State() {
    return this.getStringAttribute('acs_control_gpu1state');
  }
  public set acsControlGpu1State(value: string) {
    this._acsControlGpu1State = value;
  }
  public resetAcsControlGpu1State() {
    this._acsControlGpu1State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu1StateInput() {
    return this._acsControlGpu1State;
  }

  // acs_control_gpu2state - computed: false, optional: true, required: false
  private _acsControlGpu2State?: string; 
  public get acsControlGpu2State() {
    return this.getStringAttribute('acs_control_gpu2state');
  }
  public set acsControlGpu2State(value: string) {
    this._acsControlGpu2State = value;
  }
  public resetAcsControlGpu2State() {
    this._acsControlGpu2State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu2StateInput() {
    return this._acsControlGpu2State;
  }

  // acs_control_gpu3state - computed: false, optional: true, required: false
  private _acsControlGpu3State?: string; 
  public get acsControlGpu3State() {
    return this.getStringAttribute('acs_control_gpu3state');
  }
  public set acsControlGpu3State(value: string) {
    this._acsControlGpu3State = value;
  }
  public resetAcsControlGpu3State() {
    this._acsControlGpu3State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu3StateInput() {
    return this._acsControlGpu3State;
  }

  // acs_control_gpu4state - computed: false, optional: true, required: false
  private _acsControlGpu4State?: string; 
  public get acsControlGpu4State() {
    return this.getStringAttribute('acs_control_gpu4state');
  }
  public set acsControlGpu4State(value: string) {
    this._acsControlGpu4State = value;
  }
  public resetAcsControlGpu4State() {
    this._acsControlGpu4State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu4StateInput() {
    return this._acsControlGpu4State;
  }

  // acs_control_gpu5state - computed: false, optional: true, required: false
  private _acsControlGpu5State?: string; 
  public get acsControlGpu5State() {
    return this.getStringAttribute('acs_control_gpu5state');
  }
  public set acsControlGpu5State(value: string) {
    this._acsControlGpu5State = value;
  }
  public resetAcsControlGpu5State() {
    this._acsControlGpu5State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu5StateInput() {
    return this._acsControlGpu5State;
  }

  // acs_control_gpu6state - computed: false, optional: true, required: false
  private _acsControlGpu6State?: string; 
  public get acsControlGpu6State() {
    return this.getStringAttribute('acs_control_gpu6state');
  }
  public set acsControlGpu6State(value: string) {
    this._acsControlGpu6State = value;
  }
  public resetAcsControlGpu6State() {
    this._acsControlGpu6State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu6StateInput() {
    return this._acsControlGpu6State;
  }

  // acs_control_gpu7state - computed: false, optional: true, required: false
  private _acsControlGpu7State?: string; 
  public get acsControlGpu7State() {
    return this.getStringAttribute('acs_control_gpu7state');
  }
  public set acsControlGpu7State(value: string) {
    this._acsControlGpu7State = value;
  }
  public resetAcsControlGpu7State() {
    this._acsControlGpu7State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu7StateInput() {
    return this._acsControlGpu7State;
  }

  // acs_control_gpu8state - computed: false, optional: true, required: false
  private _acsControlGpu8State?: string; 
  public get acsControlGpu8State() {
    return this.getStringAttribute('acs_control_gpu8state');
  }
  public set acsControlGpu8State(value: string) {
    this._acsControlGpu8State = value;
  }
  public resetAcsControlGpu8State() {
    this._acsControlGpu8State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlGpu8StateInput() {
    return this._acsControlGpu8State;
  }

  // acs_control_slot11state - computed: false, optional: true, required: false
  private _acsControlSlot11State?: string; 
  public get acsControlSlot11State() {
    return this.getStringAttribute('acs_control_slot11state');
  }
  public set acsControlSlot11State(value: string) {
    this._acsControlSlot11State = value;
  }
  public resetAcsControlSlot11State() {
    this._acsControlSlot11State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlSlot11StateInput() {
    return this._acsControlSlot11State;
  }

  // acs_control_slot12state - computed: false, optional: true, required: false
  private _acsControlSlot12State?: string; 
  public get acsControlSlot12State() {
    return this.getStringAttribute('acs_control_slot12state');
  }
  public set acsControlSlot12State(value: string) {
    this._acsControlSlot12State = value;
  }
  public resetAcsControlSlot12State() {
    this._acsControlSlot12State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlSlot12StateInput() {
    return this._acsControlSlot12State;
  }

  // acs_control_slot13state - computed: false, optional: true, required: false
  private _acsControlSlot13State?: string; 
  public get acsControlSlot13State() {
    return this.getStringAttribute('acs_control_slot13state');
  }
  public set acsControlSlot13State(value: string) {
    this._acsControlSlot13State = value;
  }
  public resetAcsControlSlot13State() {
    this._acsControlSlot13State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlSlot13StateInput() {
    return this._acsControlSlot13State;
  }

  // acs_control_slot14state - computed: false, optional: true, required: false
  private _acsControlSlot14State?: string; 
  public get acsControlSlot14State() {
    return this.getStringAttribute('acs_control_slot14state');
  }
  public set acsControlSlot14State(value: string) {
    this._acsControlSlot14State = value;
  }
  public resetAcsControlSlot14State() {
    this._acsControlSlot14State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsControlSlot14StateInput() {
    return this._acsControlSlot14State;
  }

  // adaptive_refresh_mgmt_level - computed: false, optional: true, required: false
  private _adaptiveRefreshMgmtLevel?: string; 
  public get adaptiveRefreshMgmtLevel() {
    return this.getStringAttribute('adaptive_refresh_mgmt_level');
  }
  public set adaptiveRefreshMgmtLevel(value: string) {
    this._adaptiveRefreshMgmtLevel = value;
  }
  public resetAdaptiveRefreshMgmtLevel() {
    this._adaptiveRefreshMgmtLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveRefreshMgmtLevelInput() {
    return this._adaptiveRefreshMgmtLevel;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // adjacent_cache_line_prefetch - computed: false, optional: true, required: false
  private _adjacentCacheLinePrefetch?: string; 
  public get adjacentCacheLinePrefetch() {
    return this.getStringAttribute('adjacent_cache_line_prefetch');
  }
  public set adjacentCacheLinePrefetch(value: string) {
    this._adjacentCacheLinePrefetch = value;
  }
  public resetAdjacentCacheLinePrefetch() {
    this._adjacentCacheLinePrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacentCacheLinePrefetchInput() {
    return this._adjacentCacheLinePrefetch;
  }

  // advanced_mem_test - computed: false, optional: true, required: false
  private _advancedMemTest?: string; 
  public get advancedMemTest() {
    return this.getStringAttribute('advanced_mem_test');
  }
  public set advancedMemTest(value: string) {
    this._advancedMemTest = value;
  }
  public resetAdvancedMemTest() {
    this._advancedMemTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMemTestInput() {
    return this._advancedMemTest;
  }

  // all_usb_devices - computed: false, optional: true, required: false
  private _allUsbDevices?: string; 
  public get allUsbDevices() {
    return this.getStringAttribute('all_usb_devices');
  }
  public set allUsbDevices(value: string) {
    this._allUsbDevices = value;
  }
  public resetAllUsbDevices() {
    this._allUsbDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUsbDevicesInput() {
    return this._allUsbDevices;
  }

  // altitude - computed: false, optional: true, required: false
  private _altitude?: string; 
  public get altitude() {
    return this.getStringAttribute('altitude');
  }
  public set altitude(value: string) {
    this._altitude = value;
  }
  public resetAltitude() {
    this._altitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altitudeInput() {
    return this._altitude;
  }

  // aspm_support - computed: false, optional: true, required: false
  private _aspmSupport?: string; 
  public get aspmSupport() {
    return this.getStringAttribute('aspm_support');
  }
  public set aspmSupport(value: string) {
    this._aspmSupport = value;
  }
  public resetAspmSupport() {
    this._aspmSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspmSupportInput() {
    return this._aspmSupport;
  }

  // assert_nmi_on_perr - computed: false, optional: true, required: false
  private _assertNmiOnPerr?: string; 
  public get assertNmiOnPerr() {
    return this.getStringAttribute('assert_nmi_on_perr');
  }
  public set assertNmiOnPerr(value: string) {
    this._assertNmiOnPerr = value;
  }
  public resetAssertNmiOnPerr() {
    this._assertNmiOnPerr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertNmiOnPerrInput() {
    return this._assertNmiOnPerr;
  }

  // assert_nmi_on_serr - computed: false, optional: true, required: false
  private _assertNmiOnSerr?: string; 
  public get assertNmiOnSerr() {
    return this.getStringAttribute('assert_nmi_on_serr');
  }
  public set assertNmiOnSerr(value: string) {
    this._assertNmiOnSerr = value;
  }
  public resetAssertNmiOnSerr() {
    this._assertNmiOnSerr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertNmiOnSerrInput() {
    return this._assertNmiOnSerr;
  }

  // auto_cc_state - computed: false, optional: true, required: false
  private _autoCcState?: string; 
  public get autoCcState() {
    return this.getStringAttribute('auto_cc_state');
  }
  public set autoCcState(value: string) {
    this._autoCcState = value;
  }
  public resetAutoCcState() {
    this._autoCcState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCcStateInput() {
    return this._autoCcState;
  }

  // autonumous_cstate_enable - computed: false, optional: true, required: false
  private _autonumousCstateEnable?: string; 
  public get autonumousCstateEnable() {
    return this.getStringAttribute('autonumous_cstate_enable');
  }
  public set autonumousCstateEnable(value: string) {
    this._autonumousCstateEnable = value;
  }
  public resetAutonumousCstateEnable() {
    this._autonumousCstateEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonumousCstateEnableInput() {
    return this._autonumousCstateEnable;
  }

  // baud_rate - computed: false, optional: true, required: false
  private _baudRate?: string; 
  public get baudRate() {
    return this.getStringAttribute('baud_rate');
  }
  public set baudRate(value: string) {
    this._baudRate = value;
  }
  public resetBaudRate() {
    this._baudRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baudRateInput() {
    return this._baudRate;
  }

  // bme_dma_mitigation - computed: false, optional: true, required: false
  private _bmeDmaMitigation?: string; 
  public get bmeDmaMitigation() {
    return this.getStringAttribute('bme_dma_mitigation');
  }
  public set bmeDmaMitigation(value: string) {
    this._bmeDmaMitigation = value;
  }
  public resetBmeDmaMitigation() {
    this._bmeDmaMitigation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmeDmaMitigationInput() {
    return this._bmeDmaMitigation;
  }

  // boot_option_num_retry - computed: false, optional: true, required: false
  private _bootOptionNumRetry?: string; 
  public get bootOptionNumRetry() {
    return this.getStringAttribute('boot_option_num_retry');
  }
  public set bootOptionNumRetry(value: string) {
    this._bootOptionNumRetry = value;
  }
  public resetBootOptionNumRetry() {
    this._bootOptionNumRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOptionNumRetryInput() {
    return this._bootOptionNumRetry;
  }

  // boot_option_re_cool_down - computed: false, optional: true, required: false
  private _bootOptionReCoolDown?: string; 
  public get bootOptionReCoolDown() {
    return this.getStringAttribute('boot_option_re_cool_down');
  }
  public set bootOptionReCoolDown(value: string) {
    this._bootOptionReCoolDown = value;
  }
  public resetBootOptionReCoolDown() {
    this._bootOptionReCoolDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOptionReCoolDownInput() {
    return this._bootOptionReCoolDown;
  }

  // boot_option_retry - computed: false, optional: true, required: false
  private _bootOptionRetry?: string; 
  public get bootOptionRetry() {
    return this.getStringAttribute('boot_option_retry');
  }
  public set bootOptionRetry(value: string) {
    this._bootOptionRetry = value;
  }
  public resetBootOptionRetry() {
    this._bootOptionRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOptionRetryInput() {
    return this._bootOptionRetry;
  }

  // boot_performance_mode - computed: false, optional: true, required: false
  private _bootPerformanceMode?: string; 
  public get bootPerformanceMode() {
    return this.getStringAttribute('boot_performance_mode');
  }
  public set bootPerformanceMode(value: string) {
    this._bootPerformanceMode = value;
  }
  public resetBootPerformanceMode() {
    this._bootPerformanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootPerformanceModeInput() {
    return this._bootPerformanceMode;
  }

  // burst_and_postponed_refresh - computed: false, optional: true, required: false
  private _burstAndPostponedRefresh?: string; 
  public get burstAndPostponedRefresh() {
    return this.getStringAttribute('burst_and_postponed_refresh');
  }
  public set burstAndPostponedRefresh(value: string) {
    this._burstAndPostponedRefresh = value;
  }
  public resetBurstAndPostponedRefresh() {
    this._burstAndPostponedRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstAndPostponedRefreshInput() {
    return this._burstAndPostponedRefresh;
  }

  // c1auto_demotion - computed: false, optional: true, required: false
  private _c1AutoDemotion?: string; 
  public get c1AutoDemotion() {
    return this.getStringAttribute('c1auto_demotion');
  }
  public set c1AutoDemotion(value: string) {
    this._c1AutoDemotion = value;
  }
  public resetC1AutoDemotion() {
    this._c1AutoDemotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c1AutoDemotionInput() {
    return this._c1AutoDemotion;
  }

  // c1auto_un_demotion - computed: false, optional: true, required: false
  private _c1AutoUnDemotion?: string; 
  public get c1AutoUnDemotion() {
    return this.getStringAttribute('c1auto_un_demotion');
  }
  public set c1AutoUnDemotion(value: string) {
    this._c1AutoUnDemotion = value;
  }
  public resetC1AutoUnDemotion() {
    this._c1AutoUnDemotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c1AutoUnDemotionInput() {
    return this._c1AutoUnDemotion;
  }

  // cbs_cmn_apbdis - computed: false, optional: true, required: false
  private _cbsCmnApbdis?: string; 
  public get cbsCmnApbdis() {
    return this.getStringAttribute('cbs_cmn_apbdis');
  }
  public set cbsCmnApbdis(value: string) {
    this._cbsCmnApbdis = value;
  }
  public resetCbsCmnApbdis() {
    this._cbsCmnApbdis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnApbdisInput() {
    return this._cbsCmnApbdis;
  }

  // cbs_cmn_apbdis_df_pstate_rs - computed: false, optional: true, required: false
  private _cbsCmnApbdisDfPstateRs?: string; 
  public get cbsCmnApbdisDfPstateRs() {
    return this.getStringAttribute('cbs_cmn_apbdis_df_pstate_rs');
  }
  public set cbsCmnApbdisDfPstateRs(value: string) {
    this._cbsCmnApbdisDfPstateRs = value;
  }
  public resetCbsCmnApbdisDfPstateRs() {
    this._cbsCmnApbdisDfPstateRs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnApbdisDfPstateRsInput() {
    return this._cbsCmnApbdisDfPstateRs;
  }

  // cbs_cmn_cpu_avx512 - computed: false, optional: true, required: false
  private _cbsCmnCpuAvx512?: string; 
  public get cbsCmnCpuAvx512() {
    return this.getStringAttribute('cbs_cmn_cpu_avx512');
  }
  public set cbsCmnCpuAvx512(value: string) {
    this._cbsCmnCpuAvx512 = value;
  }
  public resetCbsCmnCpuAvx512() {
    this._cbsCmnCpuAvx512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuAvx512Input() {
    return this._cbsCmnCpuAvx512;
  }

  // cbs_cmn_cpu_cpb - computed: false, optional: true, required: false
  private _cbsCmnCpuCpb?: string; 
  public get cbsCmnCpuCpb() {
    return this.getStringAttribute('cbs_cmn_cpu_cpb');
  }
  public set cbsCmnCpuCpb(value: string) {
    this._cbsCmnCpuCpb = value;
  }
  public resetCbsCmnCpuCpb() {
    this._cbsCmnCpuCpb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuCpbInput() {
    return this._cbsCmnCpuCpb;
  }

  // cbs_cmn_cpu_gen_downcore_ctrl - computed: false, optional: true, required: false
  private _cbsCmnCpuGenDowncoreCtrl?: string; 
  public get cbsCmnCpuGenDowncoreCtrl() {
    return this.getStringAttribute('cbs_cmn_cpu_gen_downcore_ctrl');
  }
  public set cbsCmnCpuGenDowncoreCtrl(value: string) {
    this._cbsCmnCpuGenDowncoreCtrl = value;
  }
  public resetCbsCmnCpuGenDowncoreCtrl() {
    this._cbsCmnCpuGenDowncoreCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuGenDowncoreCtrlInput() {
    return this._cbsCmnCpuGenDowncoreCtrl;
  }

  // cbs_cmn_cpu_global_cstate_ctrl - computed: false, optional: true, required: false
  private _cbsCmnCpuGlobalCstateCtrl?: string; 
  public get cbsCmnCpuGlobalCstateCtrl() {
    return this.getStringAttribute('cbs_cmn_cpu_global_cstate_ctrl');
  }
  public set cbsCmnCpuGlobalCstateCtrl(value: string) {
    this._cbsCmnCpuGlobalCstateCtrl = value;
  }
  public resetCbsCmnCpuGlobalCstateCtrl() {
    this._cbsCmnCpuGlobalCstateCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuGlobalCstateCtrlInput() {
    return this._cbsCmnCpuGlobalCstateCtrl;
  }

  // cbs_cmn_cpu_l1stream_hw_prefetcher - computed: false, optional: true, required: false
  private _cbsCmnCpuL1StreamHwPrefetcher?: string; 
  public get cbsCmnCpuL1StreamHwPrefetcher() {
    return this.getStringAttribute('cbs_cmn_cpu_l1stream_hw_prefetcher');
  }
  public set cbsCmnCpuL1StreamHwPrefetcher(value: string) {
    this._cbsCmnCpuL1StreamHwPrefetcher = value;
  }
  public resetCbsCmnCpuL1StreamHwPrefetcher() {
    this._cbsCmnCpuL1StreamHwPrefetcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuL1StreamHwPrefetcherInput() {
    return this._cbsCmnCpuL1StreamHwPrefetcher;
  }

  // cbs_cmn_cpu_l2stream_hw_prefetcher - computed: false, optional: true, required: false
  private _cbsCmnCpuL2StreamHwPrefetcher?: string; 
  public get cbsCmnCpuL2StreamHwPrefetcher() {
    return this.getStringAttribute('cbs_cmn_cpu_l2stream_hw_prefetcher');
  }
  public set cbsCmnCpuL2StreamHwPrefetcher(value: string) {
    this._cbsCmnCpuL2StreamHwPrefetcher = value;
  }
  public resetCbsCmnCpuL2StreamHwPrefetcher() {
    this._cbsCmnCpuL2StreamHwPrefetcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuL2StreamHwPrefetcherInput() {
    return this._cbsCmnCpuL2StreamHwPrefetcher;
  }

  // cbs_cmn_cpu_sev_asid_space_limit - computed: false, optional: true, required: false
  private _cbsCmnCpuSevAsidSpaceLimit?: string; 
  public get cbsCmnCpuSevAsidSpaceLimit() {
    return this.getStringAttribute('cbs_cmn_cpu_sev_asid_space_limit');
  }
  public set cbsCmnCpuSevAsidSpaceLimit(value: string) {
    this._cbsCmnCpuSevAsidSpaceLimit = value;
  }
  public resetCbsCmnCpuSevAsidSpaceLimit() {
    this._cbsCmnCpuSevAsidSpaceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuSevAsidSpaceLimitInput() {
    return this._cbsCmnCpuSevAsidSpaceLimit;
  }

  // cbs_cmn_cpu_smee - computed: false, optional: true, required: false
  private _cbsCmnCpuSmee?: string; 
  public get cbsCmnCpuSmee() {
    return this.getStringAttribute('cbs_cmn_cpu_smee');
  }
  public set cbsCmnCpuSmee(value: string) {
    this._cbsCmnCpuSmee = value;
  }
  public resetCbsCmnCpuSmee() {
    this._cbsCmnCpuSmee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuSmeeInput() {
    return this._cbsCmnCpuSmee;
  }

  // cbs_cmn_cpu_streaming_stores_ctrl - computed: false, optional: true, required: false
  private _cbsCmnCpuStreamingStoresCtrl?: string; 
  public get cbsCmnCpuStreamingStoresCtrl() {
    return this.getStringAttribute('cbs_cmn_cpu_streaming_stores_ctrl');
  }
  public set cbsCmnCpuStreamingStoresCtrl(value: string) {
    this._cbsCmnCpuStreamingStoresCtrl = value;
  }
  public resetCbsCmnCpuStreamingStoresCtrl() {
    this._cbsCmnCpuStreamingStoresCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnCpuStreamingStoresCtrlInput() {
    return this._cbsCmnCpuStreamingStoresCtrl;
  }

  // cbs_cmn_determinism_slider - computed: false, optional: true, required: false
  private _cbsCmnDeterminismSlider?: string; 
  public get cbsCmnDeterminismSlider() {
    return this.getStringAttribute('cbs_cmn_determinism_slider');
  }
  public set cbsCmnDeterminismSlider(value: string) {
    this._cbsCmnDeterminismSlider = value;
  }
  public resetCbsCmnDeterminismSlider() {
    this._cbsCmnDeterminismSlider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnDeterminismSliderInput() {
    return this._cbsCmnDeterminismSlider;
  }

  // cbs_cmn_edc_control_throttle - computed: false, optional: true, required: false
  private _cbsCmnEdcControlThrottle?: string; 
  public get cbsCmnEdcControlThrottle() {
    return this.getStringAttribute('cbs_cmn_edc_control_throttle');
  }
  public set cbsCmnEdcControlThrottle(value: string) {
    this._cbsCmnEdcControlThrottle = value;
  }
  public resetCbsCmnEdcControlThrottle() {
    this._cbsCmnEdcControlThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnEdcControlThrottleInput() {
    return this._cbsCmnEdcControlThrottle;
  }

  // cbs_cmn_efficiency_mode_en - computed: false, optional: true, required: false
  private _cbsCmnEfficiencyModeEn?: string; 
  public get cbsCmnEfficiencyModeEn() {
    return this.getStringAttribute('cbs_cmn_efficiency_mode_en');
  }
  public set cbsCmnEfficiencyModeEn(value: string) {
    this._cbsCmnEfficiencyModeEn = value;
  }
  public resetCbsCmnEfficiencyModeEn() {
    this._cbsCmnEfficiencyModeEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnEfficiencyModeEnInput() {
    return this._cbsCmnEfficiencyModeEn;
  }

  // cbs_cmn_efficiency_mode_en_rs - computed: false, optional: true, required: false
  private _cbsCmnEfficiencyModeEnRs?: string; 
  public get cbsCmnEfficiencyModeEnRs() {
    return this.getStringAttribute('cbs_cmn_efficiency_mode_en_rs');
  }
  public set cbsCmnEfficiencyModeEnRs(value: string) {
    this._cbsCmnEfficiencyModeEnRs = value;
  }
  public resetCbsCmnEfficiencyModeEnRs() {
    this._cbsCmnEfficiencyModeEnRs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnEfficiencyModeEnRsInput() {
    return this._cbsCmnEfficiencyModeEnRs;
  }

  // cbs_cmn_fixed_soc_pstate - computed: false, optional: true, required: false
  private _cbsCmnFixedSocPstate?: string; 
  public get cbsCmnFixedSocPstate() {
    return this.getStringAttribute('cbs_cmn_fixed_soc_pstate');
  }
  public set cbsCmnFixedSocPstate(value: string) {
    this._cbsCmnFixedSocPstate = value;
  }
  public resetCbsCmnFixedSocPstate() {
    this._cbsCmnFixedSocPstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnFixedSocPstateInput() {
    return this._cbsCmnFixedSocPstate;
  }

  // cbs_cmn_gnb_nb_iommu - computed: false, optional: true, required: false
  private _cbsCmnGnbNbIommu?: string; 
  public get cbsCmnGnbNbIommu() {
    return this.getStringAttribute('cbs_cmn_gnb_nb_iommu');
  }
  public set cbsCmnGnbNbIommu(value: string) {
    this._cbsCmnGnbNbIommu = value;
  }
  public resetCbsCmnGnbNbIommu() {
    this._cbsCmnGnbNbIommu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnGnbNbIommuInput() {
    return this._cbsCmnGnbNbIommu;
  }

  // cbs_cmn_gnb_smu_df_cstates - computed: false, optional: true, required: false
  private _cbsCmnGnbSmuDfCstates?: string; 
  public get cbsCmnGnbSmuDfCstates() {
    return this.getStringAttribute('cbs_cmn_gnb_smu_df_cstates');
  }
  public set cbsCmnGnbSmuDfCstates(value: string) {
    this._cbsCmnGnbSmuDfCstates = value;
  }
  public resetCbsCmnGnbSmuDfCstates() {
    this._cbsCmnGnbSmuDfCstates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnGnbSmuDfCstatesInput() {
    return this._cbsCmnGnbSmuDfCstates;
  }

  // cbs_cmn_gnb_smu_dffo_rs - computed: false, optional: true, required: false
  private _cbsCmnGnbSmuDffoRs?: string; 
  public get cbsCmnGnbSmuDffoRs() {
    return this.getStringAttribute('cbs_cmn_gnb_smu_dffo_rs');
  }
  public set cbsCmnGnbSmuDffoRs(value: string) {
    this._cbsCmnGnbSmuDffoRs = value;
  }
  public resetCbsCmnGnbSmuDffoRs() {
    this._cbsCmnGnbSmuDffoRs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnGnbSmuDffoRsInput() {
    return this._cbsCmnGnbSmuDffoRs;
  }

  // cbs_cmn_gnb_smu_dlwm_support - computed: false, optional: true, required: false
  private _cbsCmnGnbSmuDlwmSupport?: string; 
  public get cbsCmnGnbSmuDlwmSupport() {
    return this.getStringAttribute('cbs_cmn_gnb_smu_dlwm_support');
  }
  public set cbsCmnGnbSmuDlwmSupport(value: string) {
    this._cbsCmnGnbSmuDlwmSupport = value;
  }
  public resetCbsCmnGnbSmuDlwmSupport() {
    this._cbsCmnGnbSmuDlwmSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnGnbSmuDlwmSupportInput() {
    return this._cbsCmnGnbSmuDlwmSupport;
  }

  // cbs_cmn_gnb_smucppc - computed: false, optional: true, required: false
  private _cbsCmnGnbSmucppc?: string; 
  public get cbsCmnGnbSmucppc() {
    return this.getStringAttribute('cbs_cmn_gnb_smucppc');
  }
  public set cbsCmnGnbSmucppc(value: string) {
    this._cbsCmnGnbSmucppc = value;
  }
  public resetCbsCmnGnbSmucppc() {
    this._cbsCmnGnbSmucppc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnGnbSmucppcInput() {
    return this._cbsCmnGnbSmucppc;
  }

  // cbs_cmn_mem_ctrl_bank_group_swap_ddr4 - computed: false, optional: true, required: false
  private _cbsCmnMemCtrlBankGroupSwapDdr4?: string; 
  public get cbsCmnMemCtrlBankGroupSwapDdr4() {
    return this.getStringAttribute('cbs_cmn_mem_ctrl_bank_group_swap_ddr4');
  }
  public set cbsCmnMemCtrlBankGroupSwapDdr4(value: string) {
    this._cbsCmnMemCtrlBankGroupSwapDdr4 = value;
  }
  public resetCbsCmnMemCtrlBankGroupSwapDdr4() {
    this._cbsCmnMemCtrlBankGroupSwapDdr4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnMemCtrlBankGroupSwapDdr4Input() {
    return this._cbsCmnMemCtrlBankGroupSwapDdr4;
  }

  // cbs_cmn_mem_ctrller_pwr_dn_en_ddr - computed: false, optional: true, required: false
  private _cbsCmnMemCtrllerPwrDnEnDdr?: string; 
  public get cbsCmnMemCtrllerPwrDnEnDdr() {
    return this.getStringAttribute('cbs_cmn_mem_ctrller_pwr_dn_en_ddr');
  }
  public set cbsCmnMemCtrllerPwrDnEnDdr(value: string) {
    this._cbsCmnMemCtrllerPwrDnEnDdr = value;
  }
  public resetCbsCmnMemCtrllerPwrDnEnDdr() {
    this._cbsCmnMemCtrllerPwrDnEnDdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnMemCtrllerPwrDnEnDdrInput() {
    return this._cbsCmnMemCtrllerPwrDnEnDdr;
  }

  // cbs_cmn_mem_map_bank_interleave_ddr4 - computed: false, optional: true, required: false
  private _cbsCmnMemMapBankInterleaveDdr4?: string; 
  public get cbsCmnMemMapBankInterleaveDdr4() {
    return this.getStringAttribute('cbs_cmn_mem_map_bank_interleave_ddr4');
  }
  public set cbsCmnMemMapBankInterleaveDdr4(value: string) {
    this._cbsCmnMemMapBankInterleaveDdr4 = value;
  }
  public resetCbsCmnMemMapBankInterleaveDdr4() {
    this._cbsCmnMemMapBankInterleaveDdr4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnMemMapBankInterleaveDdr4Input() {
    return this._cbsCmnMemMapBankInterleaveDdr4;
  }

  // cbs_cmn_mem_speed_ddr47xx2 - computed: false, optional: true, required: false
  private _cbsCmnMemSpeedDdr47Xx2?: string; 
  public get cbsCmnMemSpeedDdr47Xx2() {
    return this.getStringAttribute('cbs_cmn_mem_speed_ddr47xx2');
  }
  public set cbsCmnMemSpeedDdr47Xx2(value: string) {
    this._cbsCmnMemSpeedDdr47Xx2 = value;
  }
  public resetCbsCmnMemSpeedDdr47Xx2() {
    this._cbsCmnMemSpeedDdr47Xx2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnMemSpeedDdr47Xx2Input() {
    return this._cbsCmnMemSpeedDdr47Xx2;
  }

  // cbs_cmn_mem_speed_ddr47xx3 - computed: false, optional: true, required: false
  private _cbsCmnMemSpeedDdr47Xx3?: string; 
  public get cbsCmnMemSpeedDdr47Xx3() {
    return this.getStringAttribute('cbs_cmn_mem_speed_ddr47xx3');
  }
  public set cbsCmnMemSpeedDdr47Xx3(value: string) {
    this._cbsCmnMemSpeedDdr47Xx3 = value;
  }
  public resetCbsCmnMemSpeedDdr47Xx3() {
    this._cbsCmnMemSpeedDdr47Xx3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnMemSpeedDdr47Xx3Input() {
    return this._cbsCmnMemSpeedDdr47Xx3;
  }

  // cbs_cmn_preferred_io7xx2 - computed: false, optional: true, required: false
  private _cbsCmnPreferredIo7Xx2?: string; 
  public get cbsCmnPreferredIo7Xx2() {
    return this.getStringAttribute('cbs_cmn_preferred_io7xx2');
  }
  public set cbsCmnPreferredIo7Xx2(value: string) {
    this._cbsCmnPreferredIo7Xx2 = value;
  }
  public resetCbsCmnPreferredIo7Xx2() {
    this._cbsCmnPreferredIo7Xx2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnPreferredIo7Xx2Input() {
    return this._cbsCmnPreferredIo7Xx2;
  }

  // cbs_cmn_preferred_io7xx3 - computed: false, optional: true, required: false
  private _cbsCmnPreferredIo7Xx3?: string; 
  public get cbsCmnPreferredIo7Xx3() {
    return this.getStringAttribute('cbs_cmn_preferred_io7xx3');
  }
  public set cbsCmnPreferredIo7Xx3(value: string) {
    this._cbsCmnPreferredIo7Xx3 = value;
  }
  public resetCbsCmnPreferredIo7Xx3() {
    this._cbsCmnPreferredIo7Xx3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnPreferredIo7Xx3Input() {
    return this._cbsCmnPreferredIo7Xx3;
  }

  // cbs_cmnc_tdp_ctl - computed: false, optional: true, required: false
  private _cbsCmncTdpCtl?: string; 
  public get cbsCmncTdpCtl() {
    return this.getStringAttribute('cbs_cmnc_tdp_ctl');
  }
  public set cbsCmncTdpCtl(value: string) {
    this._cbsCmncTdpCtl = value;
  }
  public resetCbsCmncTdpCtl() {
    this._cbsCmncTdpCtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmncTdpCtlInput() {
    return this._cbsCmncTdpCtl;
  }

  // cbs_cmnx_gmi_force_link_width_rs - computed: false, optional: true, required: false
  private _cbsCmnxGmiForceLinkWidthRs?: string; 
  public get cbsCmnxGmiForceLinkWidthRs() {
    return this.getStringAttribute('cbs_cmnx_gmi_force_link_width_rs');
  }
  public set cbsCmnxGmiForceLinkWidthRs(value: string) {
    this._cbsCmnxGmiForceLinkWidthRs = value;
  }
  public resetCbsCmnxGmiForceLinkWidthRs() {
    this._cbsCmnxGmiForceLinkWidthRs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCmnxGmiForceLinkWidthRsInput() {
    return this._cbsCmnxGmiForceLinkWidthRs;
  }

  // cbs_cpu_ccd_ctrl_ssp - computed: false, optional: true, required: false
  private _cbsCpuCcdCtrlSsp?: string; 
  public get cbsCpuCcdCtrlSsp() {
    return this.getStringAttribute('cbs_cpu_ccd_ctrl_ssp');
  }
  public set cbsCpuCcdCtrlSsp(value: string) {
    this._cbsCpuCcdCtrlSsp = value;
  }
  public resetCbsCpuCcdCtrlSsp() {
    this._cbsCpuCcdCtrlSsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCpuCcdCtrlSspInput() {
    return this._cbsCpuCcdCtrlSsp;
  }

  // cbs_cpu_core_ctrl - computed: false, optional: true, required: false
  private _cbsCpuCoreCtrl?: string; 
  public get cbsCpuCoreCtrl() {
    return this.getStringAttribute('cbs_cpu_core_ctrl');
  }
  public set cbsCpuCoreCtrl(value: string) {
    this._cbsCpuCoreCtrl = value;
  }
  public resetCbsCpuCoreCtrl() {
    this._cbsCpuCoreCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCpuCoreCtrlInput() {
    return this._cbsCpuCoreCtrl;
  }

  // cbs_cpu_down_core_ctrl_bergamo - computed: false, optional: true, required: false
  private _cbsCpuDownCoreCtrlBergamo?: string; 
  public get cbsCpuDownCoreCtrlBergamo() {
    return this.getStringAttribute('cbs_cpu_down_core_ctrl_bergamo');
  }
  public set cbsCpuDownCoreCtrlBergamo(value: string) {
    this._cbsCpuDownCoreCtrlBergamo = value;
  }
  public resetCbsCpuDownCoreCtrlBergamo() {
    this._cbsCpuDownCoreCtrlBergamo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCpuDownCoreCtrlBergamoInput() {
    return this._cbsCpuDownCoreCtrlBergamo;
  }

  // cbs_cpu_down_core_ctrl_genoa - computed: false, optional: true, required: false
  private _cbsCpuDownCoreCtrlGenoa?: string; 
  public get cbsCpuDownCoreCtrlGenoa() {
    return this.getStringAttribute('cbs_cpu_down_core_ctrl_genoa');
  }
  public set cbsCpuDownCoreCtrlGenoa(value: string) {
    this._cbsCpuDownCoreCtrlGenoa = value;
  }
  public resetCbsCpuDownCoreCtrlGenoa() {
    this._cbsCpuDownCoreCtrlGenoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCpuDownCoreCtrlGenoaInput() {
    return this._cbsCpuDownCoreCtrlGenoa;
  }

  // cbs_cpu_smt_ctrl - computed: false, optional: true, required: false
  private _cbsCpuSmtCtrl?: string; 
  public get cbsCpuSmtCtrl() {
    return this.getStringAttribute('cbs_cpu_smt_ctrl');
  }
  public set cbsCpuSmtCtrl(value: string) {
    this._cbsCpuSmtCtrl = value;
  }
  public resetCbsCpuSmtCtrl() {
    this._cbsCpuSmtCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsCpuSmtCtrlInput() {
    return this._cbsCpuSmtCtrl;
  }

  // cbs_dbg_cpu_gen_cpu_wdt - computed: false, optional: true, required: false
  private _cbsDbgCpuGenCpuWdt?: string; 
  public get cbsDbgCpuGenCpuWdt() {
    return this.getStringAttribute('cbs_dbg_cpu_gen_cpu_wdt');
  }
  public set cbsDbgCpuGenCpuWdt(value: string) {
    this._cbsDbgCpuGenCpuWdt = value;
  }
  public resetCbsDbgCpuGenCpuWdt() {
    this._cbsDbgCpuGenCpuWdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDbgCpuGenCpuWdtInput() {
    return this._cbsDbgCpuGenCpuWdt;
  }

  // cbs_dbg_cpu_lapic_mode - computed: false, optional: true, required: false
  private _cbsDbgCpuLapicMode?: string; 
  public get cbsDbgCpuLapicMode() {
    return this.getStringAttribute('cbs_dbg_cpu_lapic_mode');
  }
  public set cbsDbgCpuLapicMode(value: string) {
    this._cbsDbgCpuLapicMode = value;
  }
  public resetCbsDbgCpuLapicMode() {
    this._cbsDbgCpuLapicMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDbgCpuLapicModeInput() {
    return this._cbsDbgCpuLapicMode;
  }

  // cbs_dbg_cpu_snp_mem_cover - computed: false, optional: true, required: false
  private _cbsDbgCpuSnpMemCover?: string; 
  public get cbsDbgCpuSnpMemCover() {
    return this.getStringAttribute('cbs_dbg_cpu_snp_mem_cover');
  }
  public set cbsDbgCpuSnpMemCover(value: string) {
    this._cbsDbgCpuSnpMemCover = value;
  }
  public resetCbsDbgCpuSnpMemCover() {
    this._cbsDbgCpuSnpMemCover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDbgCpuSnpMemCoverInput() {
    return this._cbsDbgCpuSnpMemCover;
  }

  // cbs_dbg_cpu_snp_mem_size_cover - computed: false, optional: true, required: false
  private _cbsDbgCpuSnpMemSizeCover?: string; 
  public get cbsDbgCpuSnpMemSizeCover() {
    return this.getStringAttribute('cbs_dbg_cpu_snp_mem_size_cover');
  }
  public set cbsDbgCpuSnpMemSizeCover(value: string) {
    this._cbsDbgCpuSnpMemSizeCover = value;
  }
  public resetCbsDbgCpuSnpMemSizeCover() {
    this._cbsDbgCpuSnpMemSizeCover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDbgCpuSnpMemSizeCoverInput() {
    return this._cbsDbgCpuSnpMemSizeCover;
  }

  // cbs_df_cmn4link_max_xgmi_speed - computed: false, optional: true, required: false
  private _cbsDfCmn4LinkMaxXgmiSpeed?: string; 
  public get cbsDfCmn4LinkMaxXgmiSpeed() {
    return this.getStringAttribute('cbs_df_cmn4link_max_xgmi_speed');
  }
  public set cbsDfCmn4LinkMaxXgmiSpeed(value: string) {
    this._cbsDfCmn4LinkMaxXgmiSpeed = value;
  }
  public resetCbsDfCmn4LinkMaxXgmiSpeed() {
    this._cbsDfCmn4LinkMaxXgmiSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfCmn4LinkMaxXgmiSpeedInput() {
    return this._cbsDfCmn4LinkMaxXgmiSpeed;
  }

  // cbs_df_cmn_acpi_srat_l3numa - computed: false, optional: true, required: false
  private _cbsDfCmnAcpiSratL3Numa?: string; 
  public get cbsDfCmnAcpiSratL3Numa() {
    return this.getStringAttribute('cbs_df_cmn_acpi_srat_l3numa');
  }
  public set cbsDfCmnAcpiSratL3Numa(value: string) {
    this._cbsDfCmnAcpiSratL3Numa = value;
  }
  public resetCbsDfCmnAcpiSratL3Numa() {
    this._cbsDfCmnAcpiSratL3Numa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfCmnAcpiSratL3NumaInput() {
    return this._cbsDfCmnAcpiSratL3Numa;
  }

  // cbs_df_cmn_dram_nps - computed: false, optional: true, required: false
  private _cbsDfCmnDramNps?: string; 
  public get cbsDfCmnDramNps() {
    return this.getStringAttribute('cbs_df_cmn_dram_nps');
  }
  public set cbsDfCmnDramNps(value: string) {
    this._cbsDfCmnDramNps = value;
  }
  public resetCbsDfCmnDramNps() {
    this._cbsDfCmnDramNps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfCmnDramNpsInput() {
    return this._cbsDfCmnDramNps;
  }

  // cbs_df_cmn_dram_scrub_time - computed: false, optional: true, required: false
  private _cbsDfCmnDramScrubTime?: string; 
  public get cbsDfCmnDramScrubTime() {
    return this.getStringAttribute('cbs_df_cmn_dram_scrub_time');
  }
  public set cbsDfCmnDramScrubTime(value: string) {
    this._cbsDfCmnDramScrubTime = value;
  }
  public resetCbsDfCmnDramScrubTime() {
    this._cbsDfCmnDramScrubTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfCmnDramScrubTimeInput() {
    return this._cbsDfCmnDramScrubTime;
  }

  // cbs_df_cmn_mem_intlv - computed: false, optional: true, required: false
  private _cbsDfCmnMemIntlv?: string; 
  public get cbsDfCmnMemIntlv() {
    return this.getStringAttribute('cbs_df_cmn_mem_intlv');
  }
  public set cbsDfCmnMemIntlv(value: string) {
    this._cbsDfCmnMemIntlv = value;
  }
  public resetCbsDfCmnMemIntlv() {
    this._cbsDfCmnMemIntlv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfCmnMemIntlvInput() {
    return this._cbsDfCmnMemIntlv;
  }

  // cbs_df_cmn_mem_intlv_control - computed: false, optional: true, required: false
  private _cbsDfCmnMemIntlvControl?: string; 
  public get cbsDfCmnMemIntlvControl() {
    return this.getStringAttribute('cbs_df_cmn_mem_intlv_control');
  }
  public set cbsDfCmnMemIntlvControl(value: string) {
    this._cbsDfCmnMemIntlvControl = value;
  }
  public resetCbsDfCmnMemIntlvControl() {
    this._cbsDfCmnMemIntlvControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfCmnMemIntlvControlInput() {
    return this._cbsDfCmnMemIntlvControl;
  }

  // cbs_df_cmn_mem_intlv_size - computed: false, optional: true, required: false
  private _cbsDfCmnMemIntlvSize?: string; 
  public get cbsDfCmnMemIntlvSize() {
    return this.getStringAttribute('cbs_df_cmn_mem_intlv_size');
  }
  public set cbsDfCmnMemIntlvSize(value: string) {
    this._cbsDfCmnMemIntlvSize = value;
  }
  public resetCbsDfCmnMemIntlvSize() {
    this._cbsDfCmnMemIntlvSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfCmnMemIntlvSizeInput() {
    return this._cbsDfCmnMemIntlvSize;
  }

  // cbs_df_dbg_xgmi_link_cfg - computed: false, optional: true, required: false
  private _cbsDfDbgXgmiLinkCfg?: string; 
  public get cbsDfDbgXgmiLinkCfg() {
    return this.getStringAttribute('cbs_df_dbg_xgmi_link_cfg');
  }
  public set cbsDfDbgXgmiLinkCfg(value: string) {
    this._cbsDfDbgXgmiLinkCfg = value;
  }
  public resetCbsDfDbgXgmiLinkCfg() {
    this._cbsDfDbgXgmiLinkCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsDfDbgXgmiLinkCfgInput() {
    return this._cbsDfDbgXgmiLinkCfg;
  }

  // cbs_gnb_dbg_pcie_tbt_support - computed: false, optional: true, required: false
  private _cbsGnbDbgPcieTbtSupport?: string; 
  public get cbsGnbDbgPcieTbtSupport() {
    return this.getStringAttribute('cbs_gnb_dbg_pcie_tbt_support');
  }
  public set cbsGnbDbgPcieTbtSupport(value: string) {
    this._cbsGnbDbgPcieTbtSupport = value;
  }
  public resetCbsGnbDbgPcieTbtSupport() {
    this._cbsGnbDbgPcieTbtSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsGnbDbgPcieTbtSupportInput() {
    return this._cbsGnbDbgPcieTbtSupport;
  }

  // cbs_sev_snp_support - computed: false, optional: true, required: false
  private _cbsSevSnpSupport?: string; 
  public get cbsSevSnpSupport() {
    return this.getStringAttribute('cbs_sev_snp_support');
  }
  public set cbsSevSnpSupport(value: string) {
    this._cbsSevSnpSupport = value;
  }
  public resetCbsSevSnpSupport() {
    this._cbsSevSnpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbsSevSnpSupportInput() {
    return this._cbsSevSnpSupport;
  }

  // cdn_enable - computed: false, optional: true, required: false
  private _cdnEnable?: string; 
  public get cdnEnable() {
    return this.getStringAttribute('cdn_enable');
  }
  public set cdnEnable(value: string) {
    this._cdnEnable = value;
  }
  public resetCdnEnable() {
    this._cdnEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnEnableInput() {
    return this._cdnEnable;
  }

  // cdn_support - computed: false, optional: true, required: false
  private _cdnSupport?: string; 
  public get cdnSupport() {
    return this.getStringAttribute('cdn_support');
  }
  public set cdnSupport(value: string) {
    this._cdnSupport = value;
  }
  public resetCdnSupport() {
    this._cdnSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnSupportInput() {
    return this._cdnSupport;
  }

  // channel_inter_leave - computed: false, optional: true, required: false
  private _channelInterLeave?: string; 
  public get channelInterLeave() {
    return this.getStringAttribute('channel_inter_leave');
  }
  public set channelInterLeave(value: string) {
    this._channelInterLeave = value;
  }
  public resetChannelInterLeave() {
    this._channelInterLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInterLeaveInput() {
    return this._channelInterLeave;
  }

  // cisco_adaptive_mem_training - computed: false, optional: true, required: false
  private _ciscoAdaptiveMemTraining?: string; 
  public get ciscoAdaptiveMemTraining() {
    return this.getStringAttribute('cisco_adaptive_mem_training');
  }
  public set ciscoAdaptiveMemTraining(value: string) {
    this._ciscoAdaptiveMemTraining = value;
  }
  public resetCiscoAdaptiveMemTraining() {
    this._ciscoAdaptiveMemTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoAdaptiveMemTrainingInput() {
    return this._ciscoAdaptiveMemTraining;
  }

  // cisco_debug_level - computed: false, optional: true, required: false
  private _ciscoDebugLevel?: string; 
  public get ciscoDebugLevel() {
    return this.getStringAttribute('cisco_debug_level');
  }
  public set ciscoDebugLevel(value: string) {
    this._ciscoDebugLevel = value;
  }
  public resetCiscoDebugLevel() {
    this._ciscoDebugLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoDebugLevelInput() {
    return this._ciscoDebugLevel;
  }

  // cisco_oprom_launch_optimization - computed: false, optional: true, required: false
  private _ciscoOpromLaunchOptimization?: string; 
  public get ciscoOpromLaunchOptimization() {
    return this.getStringAttribute('cisco_oprom_launch_optimization');
  }
  public set ciscoOpromLaunchOptimization(value: string) {
    this._ciscoOpromLaunchOptimization = value;
  }
  public resetCiscoOpromLaunchOptimization() {
    this._ciscoOpromLaunchOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoOpromLaunchOptimizationInput() {
    return this._ciscoOpromLaunchOptimization;
  }

  // cisco_xgmi_max_speed - computed: false, optional: true, required: false
  private _ciscoXgmiMaxSpeed?: string; 
  public get ciscoXgmiMaxSpeed() {
    return this.getStringAttribute('cisco_xgmi_max_speed');
  }
  public set ciscoXgmiMaxSpeed(value: string) {
    this._ciscoXgmiMaxSpeed = value;
  }
  public resetCiscoXgmiMaxSpeed() {
    this._ciscoXgmiMaxSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoXgmiMaxSpeedInput() {
    return this._ciscoXgmiMaxSpeed;
  }

  // cke_low_policy - computed: false, optional: true, required: false
  private _ckeLowPolicy?: string; 
  public get ckeLowPolicy() {
    return this.getStringAttribute('cke_low_policy');
  }
  public set ckeLowPolicy(value: string) {
    this._ckeLowPolicy = value;
  }
  public resetCkeLowPolicy() {
    this._ckeLowPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckeLowPolicyInput() {
    return this._ckeLowPolicy;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // closed_loop_therm_throtl - computed: false, optional: true, required: false
  private _closedLoopThermThrotl?: string; 
  public get closedLoopThermThrotl() {
    return this.getStringAttribute('closed_loop_therm_throtl');
  }
  public set closedLoopThermThrotl(value: string) {
    this._closedLoopThermThrotl = value;
  }
  public resetClosedLoopThermThrotl() {
    this._closedLoopThermThrotl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedLoopThermThrotlInput() {
    return this._closedLoopThermThrotl;
  }

  // cmci_enable - computed: false, optional: true, required: false
  private _cmciEnable?: string; 
  public get cmciEnable() {
    return this.getStringAttribute('cmci_enable');
  }
  public set cmciEnable(value: string) {
    this._cmciEnable = value;
  }
  public resetCmciEnable() {
    this._cmciEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmciEnableInput() {
    return this._cmciEnable;
  }

  // config_tdp - computed: false, optional: true, required: false
  private _configTdp?: string; 
  public get configTdp() {
    return this.getStringAttribute('config_tdp');
  }
  public set configTdp(value: string) {
    this._configTdp = value;
  }
  public resetConfigTdp() {
    this._configTdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTdpInput() {
    return this._configTdp;
  }

  // config_tdp_level - computed: false, optional: true, required: false
  private _configTdpLevel?: string; 
  public get configTdpLevel() {
    return this.getStringAttribute('config_tdp_level');
  }
  public set configTdpLevel(value: string) {
    this._configTdpLevel = value;
  }
  public resetConfigTdpLevel() {
    this._configTdpLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTdpLevelInput() {
    return this._configTdpLevel;
  }

  // console_redirection - computed: false, optional: true, required: false
  private _consoleRedirection?: string; 
  public get consoleRedirection() {
    return this.getStringAttribute('console_redirection');
  }
  public set consoleRedirection(value: string) {
    this._consoleRedirection = value;
  }
  public resetConsoleRedirection() {
    this._consoleRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleRedirectionInput() {
    return this._consoleRedirection;
  }

  // core_multi_processing - computed: false, optional: true, required: false
  private _coreMultiProcessing?: string; 
  public get coreMultiProcessing() {
    return this.getStringAttribute('core_multi_processing');
  }
  public set coreMultiProcessing(value: string) {
    this._coreMultiProcessing = value;
  }
  public resetCoreMultiProcessing() {
    this._coreMultiProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreMultiProcessingInput() {
    return this._coreMultiProcessing;
  }

  // cpu_energy_performance - computed: false, optional: true, required: false
  private _cpuEnergyPerformance?: string; 
  public get cpuEnergyPerformance() {
    return this.getStringAttribute('cpu_energy_performance');
  }
  public set cpuEnergyPerformance(value: string) {
    this._cpuEnergyPerformance = value;
  }
  public resetCpuEnergyPerformance() {
    this._cpuEnergyPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuEnergyPerformanceInput() {
    return this._cpuEnergyPerformance;
  }

  // cpu_frequency_floor - computed: false, optional: true, required: false
  private _cpuFrequencyFloor?: string; 
  public get cpuFrequencyFloor() {
    return this.getStringAttribute('cpu_frequency_floor');
  }
  public set cpuFrequencyFloor(value: string) {
    this._cpuFrequencyFloor = value;
  }
  public resetCpuFrequencyFloor() {
    this._cpuFrequencyFloor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFrequencyFloorInput() {
    return this._cpuFrequencyFloor;
  }

  // cpu_pa_limit - computed: false, optional: true, required: false
  private _cpuPaLimit?: string; 
  public get cpuPaLimit() {
    return this.getStringAttribute('cpu_pa_limit');
  }
  public set cpuPaLimit(value: string) {
    this._cpuPaLimit = value;
  }
  public resetCpuPaLimit() {
    this._cpuPaLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPaLimitInput() {
    return this._cpuPaLimit;
  }

  // cpu_perf_enhancement - computed: false, optional: true, required: false
  private _cpuPerfEnhancement?: string; 
  public get cpuPerfEnhancement() {
    return this.getStringAttribute('cpu_perf_enhancement');
  }
  public set cpuPerfEnhancement(value: string) {
    this._cpuPerfEnhancement = value;
  }
  public resetCpuPerfEnhancement() {
    this._cpuPerfEnhancement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerfEnhancementInput() {
    return this._cpuPerfEnhancement;
  }

  // cpu_performance - computed: false, optional: true, required: false
  private _cpuPerformance?: string; 
  public get cpuPerformance() {
    return this.getStringAttribute('cpu_performance');
  }
  public set cpuPerformance(value: string) {
    this._cpuPerformance = value;
  }
  public resetCpuPerformance() {
    this._cpuPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerformanceInput() {
    return this._cpuPerformance;
  }

  // cpu_power_management - computed: false, optional: true, required: false
  private _cpuPowerManagement?: string; 
  public get cpuPowerManagement() {
    return this.getStringAttribute('cpu_power_management');
  }
  public set cpuPowerManagement(value: string) {
    this._cpuPowerManagement = value;
  }
  public resetCpuPowerManagement() {
    this._cpuPowerManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPowerManagementInput() {
    return this._cpuPowerManagement;
  }

  // cr_qos - computed: false, optional: true, required: false
  private _crQos?: string; 
  public get crQos() {
    return this.getStringAttribute('cr_qos');
  }
  public set crQos(value: string) {
    this._crQos = value;
  }
  public resetCrQos() {
    this._crQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crQosInput() {
    return this._crQos;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // crfastgo_config - computed: false, optional: true, required: false
  private _crfastgoConfig?: string; 
  public get crfastgoConfig() {
    return this.getStringAttribute('crfastgo_config');
  }
  public set crfastgoConfig(value: string) {
    this._crfastgoConfig = value;
  }
  public resetCrfastgoConfig() {
    this._crfastgoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crfastgoConfigInput() {
    return this._crfastgoConfig;
  }

  // dcpmm_firmware_downgrade - computed: false, optional: true, required: false
  private _dcpmmFirmwareDowngrade?: string; 
  public get dcpmmFirmwareDowngrade() {
    return this.getStringAttribute('dcpmm_firmware_downgrade');
  }
  public set dcpmmFirmwareDowngrade(value: string) {
    this._dcpmmFirmwareDowngrade = value;
  }
  public resetDcpmmFirmwareDowngrade() {
    this._dcpmmFirmwareDowngrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcpmmFirmwareDowngradeInput() {
    return this._dcpmmFirmwareDowngrade;
  }

  // demand_scrub - computed: false, optional: true, required: false
  private _demandScrub?: string; 
  public get demandScrub() {
    return this.getStringAttribute('demand_scrub');
  }
  public set demandScrub(value: string) {
    this._demandScrub = value;
  }
  public resetDemandScrub() {
    this._demandScrub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandScrubInput() {
    return this._demandScrub;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dfx_osb_en - computed: false, optional: true, required: false
  private _dfxOsbEn?: string; 
  public get dfxOsbEn() {
    return this.getStringAttribute('dfx_osb_en');
  }
  public set dfxOsbEn(value: string) {
    this._dfxOsbEn = value;
  }
  public resetDfxOsbEn() {
    this._dfxOsbEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfxOsbEnInput() {
    return this._dfxOsbEn;
  }

  // direct_cache_access - computed: false, optional: true, required: false
  private _directCacheAccess?: string; 
  public get directCacheAccess() {
    return this.getStringAttribute('direct_cache_access');
  }
  public set directCacheAccess(value: string) {
    this._directCacheAccess = value;
  }
  public resetDirectCacheAccess() {
    this._directCacheAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directCacheAccessInput() {
    return this._directCacheAccess;
  }

  // dma_ctrl_opt_in - computed: false, optional: true, required: false
  private _dmaCtrlOptIn?: string; 
  public get dmaCtrlOptIn() {
    return this.getStringAttribute('dma_ctrl_opt_in');
  }
  public set dmaCtrlOptIn(value: string) {
    this._dmaCtrlOptIn = value;
  }
  public resetDmaCtrlOptIn() {
    this._dmaCtrlOptIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmaCtrlOptInInput() {
    return this._dmaCtrlOptIn;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // dram_clock_throttling - computed: false, optional: true, required: false
  private _dramClockThrottling?: string; 
  public get dramClockThrottling() {
    return this.getStringAttribute('dram_clock_throttling');
  }
  public set dramClockThrottling(value: string) {
    this._dramClockThrottling = value;
  }
  public resetDramClockThrottling() {
    this._dramClockThrottling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dramClockThrottlingInput() {
    return this._dramClockThrottling;
  }

  // dram_refresh_rate - computed: false, optional: true, required: false
  private _dramRefreshRate?: string; 
  public get dramRefreshRate() {
    return this.getStringAttribute('dram_refresh_rate');
  }
  public set dramRefreshRate(value: string) {
    this._dramRefreshRate = value;
  }
  public resetDramRefreshRate() {
    this._dramRefreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dramRefreshRateInput() {
    return this._dramRefreshRate;
  }

  // dram_sw_thermal_throttling - computed: false, optional: true, required: false
  private _dramSwThermalThrottling?: string; 
  public get dramSwThermalThrottling() {
    return this.getStringAttribute('dram_sw_thermal_throttling');
  }
  public set dramSwThermalThrottling(value: string) {
    this._dramSwThermalThrottling = value;
  }
  public resetDramSwThermalThrottling() {
    this._dramSwThermalThrottling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dramSwThermalThrottlingInput() {
    return this._dramSwThermalThrottling;
  }

  // eadr_support - computed: false, optional: true, required: false
  private _eadrSupport?: string; 
  public get eadrSupport() {
    return this.getStringAttribute('eadr_support');
  }
  public set eadrSupport(value: string) {
    this._eadrSupport = value;
  }
  public resetEadrSupport() {
    this._eadrSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eadrSupportInput() {
    return this._eadrSupport;
  }

  // edpc_en - computed: false, optional: true, required: false
  private _edpcEn?: string; 
  public get edpcEn() {
    return this.getStringAttribute('edpc_en');
  }
  public set edpcEn(value: string) {
    this._edpcEn = value;
  }
  public resetEdpcEn() {
    this._edpcEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edpcEnInput() {
    return this._edpcEn;
  }

  // enable_clock_spread_spec - computed: false, optional: true, required: false
  private _enableClockSpreadSpec?: string; 
  public get enableClockSpreadSpec() {
    return this.getStringAttribute('enable_clock_spread_spec');
  }
  public set enableClockSpreadSpec(value: string) {
    this._enableClockSpreadSpec = value;
  }
  public resetEnableClockSpreadSpec() {
    this._enableClockSpreadSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClockSpreadSpecInput() {
    return this._enableClockSpreadSpec;
  }

  // enable_mktme - computed: false, optional: true, required: false
  private _enableMktme?: string; 
  public get enableMktme() {
    return this.getStringAttribute('enable_mktme');
  }
  public set enableMktme(value: string) {
    this._enableMktme = value;
  }
  public resetEnableMktme() {
    this._enableMktme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMktmeInput() {
    return this._enableMktme;
  }

  // enable_rmt - computed: false, optional: true, required: false
  private _enableRmt?: string; 
  public get enableRmt() {
    return this.getStringAttribute('enable_rmt');
  }
  public set enableRmt(value: string) {
    this._enableRmt = value;
  }
  public resetEnableRmt() {
    this._enableRmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRmtInput() {
    return this._enableRmt;
  }

  // enable_sgx - computed: false, optional: true, required: false
  private _enableSgx?: string; 
  public get enableSgx() {
    return this.getStringAttribute('enable_sgx');
  }
  public set enableSgx(value: string) {
    this._enableSgx = value;
  }
  public resetEnableSgx() {
    this._enableSgx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSgxInput() {
    return this._enableSgx;
  }

  // enable_tdx - computed: false, optional: true, required: false
  private _enableTdx?: string; 
  public get enableTdx() {
    return this.getStringAttribute('enable_tdx');
  }
  public set enableTdx(value: string) {
    this._enableTdx = value;
  }
  public resetEnableTdx() {
    this._enableTdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTdxInput() {
    return this._enableTdx;
  }

  // enable_tdx_seamldr - computed: false, optional: true, required: false
  private _enableTdxSeamldr?: string; 
  public get enableTdxSeamldr() {
    return this.getStringAttribute('enable_tdx_seamldr');
  }
  public set enableTdxSeamldr(value: string) {
    this._enableTdxSeamldr = value;
  }
  public resetEnableTdxSeamldr() {
    this._enableTdxSeamldr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTdxSeamldrInput() {
    return this._enableTdxSeamldr;
  }

  // enable_tme - computed: false, optional: true, required: false
  private _enableTme?: string; 
  public get enableTme() {
    return this.getStringAttribute('enable_tme');
  }
  public set enableTme(value: string) {
    this._enableTme = value;
  }
  public resetEnableTme() {
    this._enableTme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTmeInput() {
    return this._enableTme;
  }

  // energy_efficient_turbo - computed: false, optional: true, required: false
  private _energyEfficientTurbo?: string; 
  public get energyEfficientTurbo() {
    return this.getStringAttribute('energy_efficient_turbo');
  }
  public set energyEfficientTurbo(value: string) {
    this._energyEfficientTurbo = value;
  }
  public resetEnergyEfficientTurbo() {
    this._energyEfficientTurbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get energyEfficientTurboInput() {
    return this._energyEfficientTurbo;
  }

  // eng_perf_tuning - computed: false, optional: true, required: false
  private _engPerfTuning?: string; 
  public get engPerfTuning() {
    return this.getStringAttribute('eng_perf_tuning');
  }
  public set engPerfTuning(value: string) {
    this._engPerfTuning = value;
  }
  public resetEngPerfTuning() {
    this._engPerfTuning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engPerfTuningInput() {
    return this._engPerfTuning;
  }

  // enhanced_intel_speed_step_tech - computed: false, optional: true, required: false
  private _enhancedIntelSpeedStepTech?: string; 
  public get enhancedIntelSpeedStepTech() {
    return this.getStringAttribute('enhanced_intel_speed_step_tech');
  }
  public set enhancedIntelSpeedStepTech(value: string) {
    this._enhancedIntelSpeedStepTech = value;
  }
  public resetEnhancedIntelSpeedStepTech() {
    this._enhancedIntelSpeedStepTech = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedIntelSpeedStepTechInput() {
    return this._enhancedIntelSpeedStepTech;
  }

  // epoch_update - computed: false, optional: true, required: false
  private _epochUpdate?: string; 
  public get epochUpdate() {
    return this.getStringAttribute('epoch_update');
  }
  public set epochUpdate(value: string) {
    this._epochUpdate = value;
  }
  public resetEpochUpdate() {
    this._epochUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochUpdateInput() {
    return this._epochUpdate;
  }

  // epp_enable - computed: false, optional: true, required: false
  private _eppEnable?: string; 
  public get eppEnable() {
    return this.getStringAttribute('epp_enable');
  }
  public set eppEnable(value: string) {
    this._eppEnable = value;
  }
  public resetEppEnable() {
    this._eppEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eppEnableInput() {
    return this._eppEnable;
  }

  // epp_profile - computed: false, optional: true, required: false
  private _eppProfile?: string; 
  public get eppProfile() {
    return this.getStringAttribute('epp_profile');
  }
  public set eppProfile(value: string) {
    this._eppProfile = value;
  }
  public resetEppProfile() {
    this._eppProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eppProfileInput() {
    return this._eppProfile;
  }

  // error_check_scrub - computed: false, optional: true, required: false
  private _errorCheckScrub?: string; 
  public get errorCheckScrub() {
    return this.getStringAttribute('error_check_scrub');
  }
  public set errorCheckScrub(value: string) {
    this._errorCheckScrub = value;
  }
  public resetErrorCheckScrub() {
    this._errorCheckScrub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCheckScrubInput() {
    return this._errorCheckScrub;
  }

  // execute_disable_bit - computed: false, optional: true, required: false
  private _executeDisableBit?: string; 
  public get executeDisableBit() {
    return this.getStringAttribute('execute_disable_bit');
  }
  public set executeDisableBit(value: string) {
    this._executeDisableBit = value;
  }
  public resetExecuteDisableBit() {
    this._executeDisableBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeDisableBitInput() {
    return this._executeDisableBit;
  }

  // extended_apic - computed: false, optional: true, required: false
  private _extendedApic?: string; 
  public get extendedApic() {
    return this.getStringAttribute('extended_apic');
  }
  public set extendedApic(value: string) {
    this._extendedApic = value;
  }
  public resetExtendedApic() {
    this._extendedApic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedApicInput() {
    return this._extendedApic;
  }

  // flow_control - computed: false, optional: true, required: false
  private _flowControl?: string; 
  public get flowControl() {
    return this.getStringAttribute('flow_control');
  }
  public set flowControl(value: string) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // frb2enable - computed: false, optional: true, required: false
  private _frb2Enable?: string; 
  public get frb2Enable() {
    return this.getStringAttribute('frb2enable');
  }
  public set frb2Enable(value: string) {
    this._frb2Enable = value;
  }
  public resetFrb2Enable() {
    this._frb2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frb2EnableInput() {
    return this._frb2Enable;
  }

  // gpu_direct_cpu1 - computed: false, optional: true, required: false
  private _gpuDirectCpu1?: string; 
  public get gpuDirectCpu1() {
    return this.getStringAttribute('gpu_direct_cpu1');
  }
  public set gpuDirectCpu1(value: string) {
    this._gpuDirectCpu1 = value;
  }
  public resetGpuDirectCpu1() {
    this._gpuDirectCpu1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDirectCpu1Input() {
    return this._gpuDirectCpu1;
  }

  // gpu_direct_cpu2 - computed: false, optional: true, required: false
  private _gpuDirectCpu2?: string; 
  public get gpuDirectCpu2() {
    return this.getStringAttribute('gpu_direct_cpu2');
  }
  public set gpuDirectCpu2(value: string) {
    this._gpuDirectCpu2 = value;
  }
  public resetGpuDirectCpu2() {
    this._gpuDirectCpu2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDirectCpu2Input() {
    return this._gpuDirectCpu2;
  }

  // gpu_direct_cpu3 - computed: false, optional: true, required: false
  private _gpuDirectCpu3?: string; 
  public get gpuDirectCpu3() {
    return this.getStringAttribute('gpu_direct_cpu3');
  }
  public set gpuDirectCpu3(value: string) {
    this._gpuDirectCpu3 = value;
  }
  public resetGpuDirectCpu3() {
    this._gpuDirectCpu3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDirectCpu3Input() {
    return this._gpuDirectCpu3;
  }

  // gpu_direct_cpu4 - computed: false, optional: true, required: false
  private _gpuDirectCpu4?: string; 
  public get gpuDirectCpu4() {
    return this.getStringAttribute('gpu_direct_cpu4');
  }
  public set gpuDirectCpu4(value: string) {
    this._gpuDirectCpu4 = value;
  }
  public resetGpuDirectCpu4() {
    this._gpuDirectCpu4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDirectCpu4Input() {
    return this._gpuDirectCpu4;
  }

  // hardware_prefetch - computed: false, optional: true, required: false
  private _hardwarePrefetch?: string; 
  public get hardwarePrefetch() {
    return this.getStringAttribute('hardware_prefetch');
  }
  public set hardwarePrefetch(value: string) {
    this._hardwarePrefetch = value;
  }
  public resetHardwarePrefetch() {
    this._hardwarePrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwarePrefetchInput() {
    return this._hardwarePrefetch;
  }

  // hwpm_enable - computed: false, optional: true, required: false
  private _hwpmEnable?: string; 
  public get hwpmEnable() {
    return this.getStringAttribute('hwpm_enable');
  }
  public set hwpmEnable(value: string) {
    this._hwpmEnable = value;
  }
  public resetHwpmEnable() {
    this._hwpmEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwpmEnableInput() {
    return this._hwpmEnable;
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

  // imc_interleave - computed: false, optional: true, required: false
  private _imcInterleave?: string; 
  public get imcInterleave() {
    return this.getStringAttribute('imc_interleave');
  }
  public set imcInterleave(value: string) {
    this._imcInterleave = value;
  }
  public resetImcInterleave() {
    this._imcInterleave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imcInterleaveInput() {
    return this._imcInterleave;
  }

  // intel_dynamic_speed_select - computed: false, optional: true, required: false
  private _intelDynamicSpeedSelect?: string; 
  public get intelDynamicSpeedSelect() {
    return this.getStringAttribute('intel_dynamic_speed_select');
  }
  public set intelDynamicSpeedSelect(value: string) {
    this._intelDynamicSpeedSelect = value;
  }
  public resetIntelDynamicSpeedSelect() {
    this._intelDynamicSpeedSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelDynamicSpeedSelectInput() {
    return this._intelDynamicSpeedSelect;
  }

  // intel_hyper_threading_tech - computed: false, optional: true, required: false
  private _intelHyperThreadingTech?: string; 
  public get intelHyperThreadingTech() {
    return this.getStringAttribute('intel_hyper_threading_tech');
  }
  public set intelHyperThreadingTech(value: string) {
    this._intelHyperThreadingTech = value;
  }
  public resetIntelHyperThreadingTech() {
    this._intelHyperThreadingTech = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelHyperThreadingTechInput() {
    return this._intelHyperThreadingTech;
  }

  // intel_speed_select - computed: false, optional: true, required: false
  private _intelSpeedSelect?: string; 
  public get intelSpeedSelect() {
    return this.getStringAttribute('intel_speed_select');
  }
  public set intelSpeedSelect(value: string) {
    this._intelSpeedSelect = value;
  }
  public resetIntelSpeedSelect() {
    this._intelSpeedSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelSpeedSelectInput() {
    return this._intelSpeedSelect;
  }

  // intel_turbo_boost_tech - computed: false, optional: true, required: false
  private _intelTurboBoostTech?: string; 
  public get intelTurboBoostTech() {
    return this.getStringAttribute('intel_turbo_boost_tech');
  }
  public set intelTurboBoostTech(value: string) {
    this._intelTurboBoostTech = value;
  }
  public resetIntelTurboBoostTech() {
    this._intelTurboBoostTech = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelTurboBoostTechInput() {
    return this._intelTurboBoostTech;
  }

  // intel_virtualization_technology - computed: false, optional: true, required: false
  private _intelVirtualizationTechnology?: string; 
  public get intelVirtualizationTechnology() {
    return this.getStringAttribute('intel_virtualization_technology');
  }
  public set intelVirtualizationTechnology(value: string) {
    this._intelVirtualizationTechnology = value;
  }
  public resetIntelVirtualizationTechnology() {
    this._intelVirtualizationTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelVirtualizationTechnologyInput() {
    return this._intelVirtualizationTechnology;
  }

  // intel_vt_for_directed_io - computed: false, optional: true, required: false
  private _intelVtForDirectedIo?: string; 
  public get intelVtForDirectedIo() {
    return this.getStringAttribute('intel_vt_for_directed_io');
  }
  public set intelVtForDirectedIo(value: string) {
    this._intelVtForDirectedIo = value;
  }
  public resetIntelVtForDirectedIo() {
    this._intelVtForDirectedIo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelVtForDirectedIoInput() {
    return this._intelVtForDirectedIo;
  }

  // intel_vtd_coherency_support - computed: false, optional: true, required: false
  private _intelVtdCoherencySupport?: string; 
  public get intelVtdCoherencySupport() {
    return this.getStringAttribute('intel_vtd_coherency_support');
  }
  public set intelVtdCoherencySupport(value: string) {
    this._intelVtdCoherencySupport = value;
  }
  public resetIntelVtdCoherencySupport() {
    this._intelVtdCoherencySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelVtdCoherencySupportInput() {
    return this._intelVtdCoherencySupport;
  }

  // intel_vtd_interrupt_remapping - computed: false, optional: true, required: false
  private _intelVtdInterruptRemapping?: string; 
  public get intelVtdInterruptRemapping() {
    return this.getStringAttribute('intel_vtd_interrupt_remapping');
  }
  public set intelVtdInterruptRemapping(value: string) {
    this._intelVtdInterruptRemapping = value;
  }
  public resetIntelVtdInterruptRemapping() {
    this._intelVtdInterruptRemapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelVtdInterruptRemappingInput() {
    return this._intelVtdInterruptRemapping;
  }

  // intel_vtd_pass_through_dma_support - computed: false, optional: true, required: false
  private _intelVtdPassThroughDmaSupport?: string; 
  public get intelVtdPassThroughDmaSupport() {
    return this.getStringAttribute('intel_vtd_pass_through_dma_support');
  }
  public set intelVtdPassThroughDmaSupport(value: string) {
    this._intelVtdPassThroughDmaSupport = value;
  }
  public resetIntelVtdPassThroughDmaSupport() {
    this._intelVtdPassThroughDmaSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelVtdPassThroughDmaSupportInput() {
    return this._intelVtdPassThroughDmaSupport;
  }

  // intel_vtdats_support - computed: false, optional: true, required: false
  private _intelVtdatsSupport?: string; 
  public get intelVtdatsSupport() {
    return this.getStringAttribute('intel_vtdats_support');
  }
  public set intelVtdatsSupport(value: string) {
    this._intelVtdatsSupport = value;
  }
  public resetIntelVtdatsSupport() {
    this._intelVtdatsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelVtdatsSupportInput() {
    return this._intelVtdatsSupport;
  }

  // ioat_config_cpm - computed: false, optional: true, required: false
  private _ioatConfigCpm?: string; 
  public get ioatConfigCpm() {
    return this.getStringAttribute('ioat_config_cpm');
  }
  public set ioatConfigCpm(value: string) {
    this._ioatConfigCpm = value;
  }
  public resetIoatConfigCpm() {
    this._ioatConfigCpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioatConfigCpmInput() {
    return this._ioatConfigCpm;
  }

  // ioh_error_enable - computed: false, optional: true, required: false
  private _iohErrorEnable?: string; 
  public get iohErrorEnable() {
    return this.getStringAttribute('ioh_error_enable');
  }
  public set iohErrorEnable(value: string) {
    this._iohErrorEnable = value;
  }
  public resetIohErrorEnable() {
    this._iohErrorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iohErrorEnableInput() {
    return this._iohErrorEnable;
  }

  // ioh_resource - computed: false, optional: true, required: false
  private _iohResource?: string; 
  public get iohResource() {
    return this.getStringAttribute('ioh_resource');
  }
  public set iohResource(value: string) {
    this._iohResource = value;
  }
  public resetIohResource() {
    this._iohResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iohResourceInput() {
    return this._iohResource;
  }

  // ip_prefetch - computed: false, optional: true, required: false
  private _ipPrefetch?: string; 
  public get ipPrefetch() {
    return this.getStringAttribute('ip_prefetch');
  }
  public set ipPrefetch(value: string) {
    this._ipPrefetch = value;
  }
  public resetIpPrefetch() {
    this._ipPrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefetchInput() {
    return this._ipPrefetch;
  }

  // ipv4http - computed: false, optional: true, required: false
  private _ipv4Http?: string; 
  public get ipv4Http() {
    return this.getStringAttribute('ipv4http');
  }
  public set ipv4Http(value: string) {
    this._ipv4Http = value;
  }
  public resetIpv4Http() {
    this._ipv4Http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HttpInput() {
    return this._ipv4Http;
  }

  // ipv4pxe - computed: false, optional: true, required: false
  private _ipv4Pxe?: string; 
  public get ipv4Pxe() {
    return this.getStringAttribute('ipv4pxe');
  }
  public set ipv4Pxe(value: string) {
    this._ipv4Pxe = value;
  }
  public resetIpv4Pxe() {
    this._ipv4Pxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PxeInput() {
    return this._ipv4Pxe;
  }

  // ipv6http - computed: false, optional: true, required: false
  private _ipv6Http?: string; 
  public get ipv6Http() {
    return this.getStringAttribute('ipv6http');
  }
  public set ipv6Http(value: string) {
    this._ipv6Http = value;
  }
  public resetIpv6Http() {
    this._ipv6Http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HttpInput() {
    return this._ipv6Http;
  }

  // ipv6pxe - computed: false, optional: true, required: false
  private _ipv6Pxe?: string; 
  public get ipv6Pxe() {
    return this.getStringAttribute('ipv6pxe');
  }
  public set ipv6Pxe(value: string) {
    this._ipv6Pxe = value;
  }
  public resetIpv6Pxe() {
    this._ipv6Pxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PxeInput() {
    return this._ipv6Pxe;
  }

  // kti_prefetch - computed: false, optional: true, required: false
  private _ktiPrefetch?: string; 
  public get ktiPrefetch() {
    return this.getStringAttribute('kti_prefetch');
  }
  public set ktiPrefetch(value: string) {
    this._ktiPrefetch = value;
  }
  public resetKtiPrefetch() {
    this._ktiPrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ktiPrefetchInput() {
    return this._ktiPrefetch;
  }

  // latency_optimized_mode - computed: false, optional: true, required: false
  private _latencyOptimizedMode?: string; 
  public get latencyOptimizedMode() {
    return this.getStringAttribute('latency_optimized_mode');
  }
  public set latencyOptimizedMode(value: string) {
    this._latencyOptimizedMode = value;
  }
  public resetLatencyOptimizedMode() {
    this._latencyOptimizedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyOptimizedModeInput() {
    return this._latencyOptimizedMode;
  }

  // legacy_os_redirection - computed: false, optional: true, required: false
  private _legacyOsRedirection?: string; 
  public get legacyOsRedirection() {
    return this.getStringAttribute('legacy_os_redirection');
  }
  public set legacyOsRedirection(value: string) {
    this._legacyOsRedirection = value;
  }
  public resetLegacyOsRedirection() {
    this._legacyOsRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyOsRedirectionInput() {
    return this._legacyOsRedirection;
  }

  // legacy_usb_support - computed: false, optional: true, required: false
  private _legacyUsbSupport?: string; 
  public get legacyUsbSupport() {
    return this.getStringAttribute('legacy_usb_support');
  }
  public set legacyUsbSupport(value: string) {
    this._legacyUsbSupport = value;
  }
  public resetLegacyUsbSupport() {
    this._legacyUsbSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyUsbSupportInput() {
    return this._legacyUsbSupport;
  }

  // llc_alloc - computed: false, optional: true, required: false
  private _llcAlloc?: string; 
  public get llcAlloc() {
    return this.getStringAttribute('llc_alloc');
  }
  public set llcAlloc(value: string) {
    this._llcAlloc = value;
  }
  public resetLlcAlloc() {
    this._llcAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llcAllocInput() {
    return this._llcAlloc;
  }

  // llc_prefetch - computed: false, optional: true, required: false
  private _llcPrefetch?: string; 
  public get llcPrefetch() {
    return this.getStringAttribute('llc_prefetch');
  }
  public set llcPrefetch(value: string) {
    this._llcPrefetch = value;
  }
  public resetLlcPrefetch() {
    this._llcPrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llcPrefetchInput() {
    return this._llcPrefetch;
  }

  // lom_port0state - computed: false, optional: true, required: false
  private _lomPort0State?: string; 
  public get lomPort0State() {
    return this.getStringAttribute('lom_port0state');
  }
  public set lomPort0State(value: string) {
    this._lomPort0State = value;
  }
  public resetLomPort0State() {
    this._lomPort0State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lomPort0StateInput() {
    return this._lomPort0State;
  }

  // lom_port1state - computed: false, optional: true, required: false
  private _lomPort1State?: string; 
  public get lomPort1State() {
    return this.getStringAttribute('lom_port1state');
  }
  public set lomPort1State(value: string) {
    this._lomPort1State = value;
  }
  public resetLomPort1State() {
    this._lomPort1State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lomPort1StateInput() {
    return this._lomPort1State;
  }

  // lom_port2state - computed: false, optional: true, required: false
  private _lomPort2State?: string; 
  public get lomPort2State() {
    return this.getStringAttribute('lom_port2state');
  }
  public set lomPort2State(value: string) {
    this._lomPort2State = value;
  }
  public resetLomPort2State() {
    this._lomPort2State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lomPort2StateInput() {
    return this._lomPort2State;
  }

  // lom_port3state - computed: false, optional: true, required: false
  private _lomPort3State?: string; 
  public get lomPort3State() {
    return this.getStringAttribute('lom_port3state');
  }
  public set lomPort3State(value: string) {
    this._lomPort3State = value;
  }
  public resetLomPort3State() {
    this._lomPort3State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lomPort3StateInput() {
    return this._lomPort3State;
  }

  // lom_ports_all_state - computed: false, optional: true, required: false
  private _lomPortsAllState?: string; 
  public get lomPortsAllState() {
    return this.getStringAttribute('lom_ports_all_state');
  }
  public set lomPortsAllState(value: string) {
    this._lomPortsAllState = value;
  }
  public resetLomPortsAllState() {
    this._lomPortsAllState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lomPortsAllStateInput() {
    return this._lomPortsAllState;
  }

  // lv_ddr_mode - computed: false, optional: true, required: false
  private _lvDdrMode?: string; 
  public get lvDdrMode() {
    return this.getStringAttribute('lv_ddr_mode');
  }
  public set lvDdrMode(value: string) {
    this._lvDdrMode = value;
  }
  public resetLvDdrMode() {
    this._lvDdrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvDdrModeInput() {
    return this._lvDdrMode;
  }

  // make_device_non_bootable - computed: false, optional: true, required: false
  private _makeDeviceNonBootable?: string; 
  public get makeDeviceNonBootable() {
    return this.getStringAttribute('make_device_non_bootable');
  }
  public set makeDeviceNonBootable(value: string) {
    this._makeDeviceNonBootable = value;
  }
  public resetMakeDeviceNonBootable() {
    this._makeDeviceNonBootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeDeviceNonBootableInput() {
    return this._makeDeviceNonBootable;
  }

  // memory_bandwidth_boost - computed: false, optional: true, required: false
  private _memoryBandwidthBoost?: string; 
  public get memoryBandwidthBoost() {
    return this.getStringAttribute('memory_bandwidth_boost');
  }
  public set memoryBandwidthBoost(value: string) {
    this._memoryBandwidthBoost = value;
  }
  public resetMemoryBandwidthBoost() {
    this._memoryBandwidthBoost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBandwidthBoostInput() {
    return this._memoryBandwidthBoost;
  }

  // memory_inter_leave - computed: false, optional: true, required: false
  private _memoryInterLeave?: string; 
  public get memoryInterLeave() {
    return this.getStringAttribute('memory_inter_leave');
  }
  public set memoryInterLeave(value: string) {
    this._memoryInterLeave = value;
  }
  public resetMemoryInterLeave() {
    this._memoryInterLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInterLeaveInput() {
    return this._memoryInterLeave;
  }

  // memory_mapped_io_above4gb - computed: false, optional: true, required: false
  private _memoryMappedIoAbove4Gb?: string; 
  public get memoryMappedIoAbove4Gb() {
    return this.getStringAttribute('memory_mapped_io_above4gb');
  }
  public set memoryMappedIoAbove4Gb(value: string) {
    this._memoryMappedIoAbove4Gb = value;
  }
  public resetMemoryMappedIoAbove4Gb() {
    this._memoryMappedIoAbove4Gb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMappedIoAbove4GbInput() {
    return this._memoryMappedIoAbove4Gb;
  }

  // memory_refresh_rate - computed: false, optional: true, required: false
  private _memoryRefreshRate?: string; 
  public get memoryRefreshRate() {
    return this.getStringAttribute('memory_refresh_rate');
  }
  public set memoryRefreshRate(value: string) {
    this._memoryRefreshRate = value;
  }
  public resetMemoryRefreshRate() {
    this._memoryRefreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRefreshRateInput() {
    return this._memoryRefreshRate;
  }

  // memory_size_limit - computed: false, optional: true, required: false
  private _memorySizeLimit?: string; 
  public get memorySizeLimit() {
    return this.getStringAttribute('memory_size_limit');
  }
  public set memorySizeLimit(value: string) {
    this._memorySizeLimit = value;
  }
  public resetMemorySizeLimit() {
    this._memorySizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeLimitInput() {
    return this._memorySizeLimit;
  }

  // memory_thermal_throttling - computed: false, optional: true, required: false
  private _memoryThermalThrottling?: string; 
  public get memoryThermalThrottling() {
    return this.getStringAttribute('memory_thermal_throttling');
  }
  public set memoryThermalThrottling(value: string) {
    this._memoryThermalThrottling = value;
  }
  public resetMemoryThermalThrottling() {
    this._memoryThermalThrottling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryThermalThrottlingInput() {
    return this._memoryThermalThrottling;
  }

  // mirroring_mode - computed: false, optional: true, required: false
  private _mirroringMode?: string; 
  public get mirroringMode() {
    return this.getStringAttribute('mirroring_mode');
  }
  public set mirroringMode(value: string) {
    this._mirroringMode = value;
  }
  public resetMirroringMode() {
    this._mirroringMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringModeInput() {
    return this._mirroringMode;
  }

  // mmcfg_base - computed: false, optional: true, required: false
  private _mmcfgBase?: string; 
  public get mmcfgBase() {
    return this.getStringAttribute('mmcfg_base');
  }
  public set mmcfgBase(value: string) {
    this._mmcfgBase = value;
  }
  public resetMmcfgBase() {
    this._mmcfgBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmcfgBaseInput() {
    return this._mmcfgBase;
  }

  // mmioh_base - computed: false, optional: true, required: false
  private _mmiohBase?: string; 
  public get mmiohBase() {
    return this.getStringAttribute('mmioh_base');
  }
  public set mmiohBase(value: string) {
    this._mmiohBase = value;
  }
  public resetMmiohBase() {
    this._mmiohBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmiohBaseInput() {
    return this._mmiohBase;
  }

  // mmioh_size - computed: false, optional: true, required: false
  private _mmiohSize?: string; 
  public get mmiohSize() {
    return this.getStringAttribute('mmioh_size');
  }
  public set mmiohSize(value: string) {
    this._mmiohSize = value;
  }
  public resetMmiohSize() {
    this._mmiohSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmiohSizeInput() {
    return this._mmiohSize;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // name - computed: false, optional: true, required: false
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

  // network_stack - computed: false, optional: true, required: false
  private _networkStack?: string; 
  public get networkStack() {
    return this.getStringAttribute('network_stack');
  }
  public set networkStack(value: string) {
    this._networkStack = value;
  }
  public resetNetworkStack() {
    this._networkStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkStackInput() {
    return this._networkStack;
  }

  // numa_optimized - computed: false, optional: true, required: false
  private _numaOptimized?: string; 
  public get numaOptimized() {
    return this.getStringAttribute('numa_optimized');
  }
  public set numaOptimized(value: string) {
    this._numaOptimized = value;
  }
  public resetNumaOptimized() {
    this._numaOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaOptimizedInput() {
    return this._numaOptimized;
  }

  // nvmdimm_perform_config - computed: false, optional: true, required: false
  private _nvmdimmPerformConfig?: string; 
  public get nvmdimmPerformConfig() {
    return this.getStringAttribute('nvmdimm_perform_config');
  }
  public set nvmdimmPerformConfig(value: string) {
    this._nvmdimmPerformConfig = value;
  }
  public resetNvmdimmPerformConfig() {
    this._nvmdimmPerformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmdimmPerformConfigInput() {
    return this._nvmdimmPerformConfig;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // onboard10gbit_lom - computed: false, optional: true, required: false
  private _onboard10GbitLom?: string; 
  public get onboard10GbitLom() {
    return this.getStringAttribute('onboard10gbit_lom');
  }
  public set onboard10GbitLom(value: string) {
    this._onboard10GbitLom = value;
  }
  public resetOnboard10GbitLom() {
    this._onboard10GbitLom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboard10GbitLomInput() {
    return this._onboard10GbitLom;
  }

  // onboard_gbit_lom - computed: false, optional: true, required: false
  private _onboardGbitLom?: string; 
  public get onboardGbitLom() {
    return this.getStringAttribute('onboard_gbit_lom');
  }
  public set onboardGbitLom(value: string) {
    this._onboardGbitLom = value;
  }
  public resetOnboardGbitLom() {
    this._onboardGbitLom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardGbitLomInput() {
    return this._onboardGbitLom;
  }

  // onboard_scu_storage_support - computed: false, optional: true, required: false
  private _onboardScuStorageSupport?: string; 
  public get onboardScuStorageSupport() {
    return this.getStringAttribute('onboard_scu_storage_support');
  }
  public set onboardScuStorageSupport(value: string) {
    this._onboardScuStorageSupport = value;
  }
  public resetOnboardScuStorageSupport() {
    this._onboardScuStorageSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardScuStorageSupportInput() {
    return this._onboardScuStorageSupport;
  }

  // onboard_scu_storage_sw_stack - computed: false, optional: true, required: false
  private _onboardScuStorageSwStack?: string; 
  public get onboardScuStorageSwStack() {
    return this.getStringAttribute('onboard_scu_storage_sw_stack');
  }
  public set onboardScuStorageSwStack(value: string) {
    this._onboardScuStorageSwStack = value;
  }
  public resetOnboardScuStorageSwStack() {
    this._onboardScuStorageSwStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardScuStorageSwStackInput() {
    return this._onboardScuStorageSwStack;
  }

  // operation_mode - computed: false, optional: true, required: false
  private _operationMode?: string; 
  public get operationMode() {
    return this.getStringAttribute('operation_mode');
  }
  public set operationMode(value: string) {
    this._operationMode = value;
  }
  public resetOperationMode() {
    this._operationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationModeInput() {
    return this._operationMode;
  }

  // optimized_power_mode - computed: false, optional: true, required: false
  private _optimizedPowerMode?: string; 
  public get optimizedPowerMode() {
    return this.getStringAttribute('optimized_power_mode');
  }
  public set optimizedPowerMode(value: string) {
    this._optimizedPowerMode = value;
  }
  public resetOptimizedPowerMode() {
    this._optimizedPowerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedPowerModeInput() {
    return this._optimizedPowerMode;
  }

  // os_boot_watchdog_timer - computed: false, optional: true, required: false
  private _osBootWatchdogTimer?: string; 
  public get osBootWatchdogTimer() {
    return this.getStringAttribute('os_boot_watchdog_timer');
  }
  public set osBootWatchdogTimer(value: string) {
    this._osBootWatchdogTimer = value;
  }
  public resetOsBootWatchdogTimer() {
    this._osBootWatchdogTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osBootWatchdogTimerInput() {
    return this._osBootWatchdogTimer;
  }

  // os_boot_watchdog_timer_policy - computed: false, optional: true, required: false
  private _osBootWatchdogTimerPolicy?: string; 
  public get osBootWatchdogTimerPolicy() {
    return this.getStringAttribute('os_boot_watchdog_timer_policy');
  }
  public set osBootWatchdogTimerPolicy(value: string) {
    this._osBootWatchdogTimerPolicy = value;
  }
  public resetOsBootWatchdogTimerPolicy() {
    this._osBootWatchdogTimerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osBootWatchdogTimerPolicyInput() {
    return this._osBootWatchdogTimerPolicy;
  }

  // os_boot_watchdog_timer_timeout - computed: false, optional: true, required: false
  private _osBootWatchdogTimerTimeout?: string; 
  public get osBootWatchdogTimerTimeout() {
    return this.getStringAttribute('os_boot_watchdog_timer_timeout');
  }
  public set osBootWatchdogTimerTimeout(value: string) {
    this._osBootWatchdogTimerTimeout = value;
  }
  public resetOsBootWatchdogTimerTimeout() {
    this._osBootWatchdogTimerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osBootWatchdogTimerTimeoutInput() {
    return this._osBootWatchdogTimerTimeout;
  }

  // out_of_band_mgmt_port - computed: false, optional: true, required: false
  private _outOfBandMgmtPort?: string; 
  public get outOfBandMgmtPort() {
    return this.getStringAttribute('out_of_band_mgmt_port');
  }
  public set outOfBandMgmtPort(value: string) {
    this._outOfBandMgmtPort = value;
  }
  public resetOutOfBandMgmtPort() {
    this._outOfBandMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfBandMgmtPortInput() {
    return this._outOfBandMgmtPort;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // package_cstate_limit - computed: false, optional: true, required: false
  private _packageCstateLimit?: string; 
  public get packageCstateLimit() {
    return this.getStringAttribute('package_cstate_limit');
  }
  public set packageCstateLimit(value: string) {
    this._packageCstateLimit = value;
  }
  public resetPackageCstateLimit() {
    this._packageCstateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageCstateLimitInput() {
    return this._packageCstateLimit;
  }

  // panic_high_watermark - computed: false, optional: true, required: false
  private _panicHighWatermark?: string; 
  public get panicHighWatermark() {
    return this.getStringAttribute('panic_high_watermark');
  }
  public set panicHighWatermark(value: string) {
    this._panicHighWatermark = value;
  }
  public resetPanicHighWatermark() {
    this._panicHighWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicHighWatermarkInput() {
    return this._panicHighWatermark;
  }

  // partial_cache_line_sparing - computed: false, optional: true, required: false
  private _partialCacheLineSparing?: string; 
  public get partialCacheLineSparing() {
    return this.getStringAttribute('partial_cache_line_sparing');
  }
  public set partialCacheLineSparing(value: string) {
    this._partialCacheLineSparing = value;
  }
  public resetPartialCacheLineSparing() {
    this._partialCacheLineSparing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialCacheLineSparingInput() {
    return this._partialCacheLineSparing;
  }

  // partial_mirror_mode_config - computed: false, optional: true, required: false
  private _partialMirrorModeConfig?: string; 
  public get partialMirrorModeConfig() {
    return this.getStringAttribute('partial_mirror_mode_config');
  }
  public set partialMirrorModeConfig(value: string) {
    this._partialMirrorModeConfig = value;
  }
  public resetPartialMirrorModeConfig() {
    this._partialMirrorModeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMirrorModeConfigInput() {
    return this._partialMirrorModeConfig;
  }

  // partial_mirror_percent - computed: false, optional: true, required: false
  private _partialMirrorPercent?: string; 
  public get partialMirrorPercent() {
    return this.getStringAttribute('partial_mirror_percent');
  }
  public set partialMirrorPercent(value: string) {
    this._partialMirrorPercent = value;
  }
  public resetPartialMirrorPercent() {
    this._partialMirrorPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMirrorPercentInput() {
    return this._partialMirrorPercent;
  }

  // partial_mirror_value1 - computed: false, optional: true, required: false
  private _partialMirrorValue1?: string; 
  public get partialMirrorValue1() {
    return this.getStringAttribute('partial_mirror_value1');
  }
  public set partialMirrorValue1(value: string) {
    this._partialMirrorValue1 = value;
  }
  public resetPartialMirrorValue1() {
    this._partialMirrorValue1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMirrorValue1Input() {
    return this._partialMirrorValue1;
  }

  // partial_mirror_value2 - computed: false, optional: true, required: false
  private _partialMirrorValue2?: string; 
  public get partialMirrorValue2() {
    return this.getStringAttribute('partial_mirror_value2');
  }
  public set partialMirrorValue2(value: string) {
    this._partialMirrorValue2 = value;
  }
  public resetPartialMirrorValue2() {
    this._partialMirrorValue2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMirrorValue2Input() {
    return this._partialMirrorValue2;
  }

  // partial_mirror_value3 - computed: false, optional: true, required: false
  private _partialMirrorValue3?: string; 
  public get partialMirrorValue3() {
    return this.getStringAttribute('partial_mirror_value3');
  }
  public set partialMirrorValue3(value: string) {
    this._partialMirrorValue3 = value;
  }
  public resetPartialMirrorValue3() {
    this._partialMirrorValue3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMirrorValue3Input() {
    return this._partialMirrorValue3;
  }

  // partial_mirror_value4 - computed: false, optional: true, required: false
  private _partialMirrorValue4?: string; 
  public get partialMirrorValue4() {
    return this.getStringAttribute('partial_mirror_value4');
  }
  public set partialMirrorValue4(value: string) {
    this._partialMirrorValue4 = value;
  }
  public resetPartialMirrorValue4() {
    this._partialMirrorValue4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMirrorValue4Input() {
    return this._partialMirrorValue4;
  }

  // patrol_scrub - computed: false, optional: true, required: false
  private _patrolScrub?: string; 
  public get patrolScrub() {
    return this.getStringAttribute('patrol_scrub');
  }
  public set patrolScrub(value: string) {
    this._patrolScrub = value;
  }
  public resetPatrolScrub() {
    this._patrolScrub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patrolScrubInput() {
    return this._patrolScrub;
  }

  // patrol_scrub_duration - computed: false, optional: true, required: false
  private _patrolScrubDuration?: string; 
  public get patrolScrubDuration() {
    return this.getStringAttribute('patrol_scrub_duration');
  }
  public set patrolScrubDuration(value: string) {
    this._patrolScrubDuration = value;
  }
  public resetPatrolScrubDuration() {
    this._patrolScrubDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patrolScrubDurationInput() {
    return this._patrolScrubDuration;
  }

  // pc_ie_ras_support - computed: false, optional: true, required: false
  private _pcIeRasSupport?: string; 
  public get pcIeRasSupport() {
    return this.getStringAttribute('pc_ie_ras_support');
  }
  public set pcIeRasSupport(value: string) {
    this._pcIeRasSupport = value;
  }
  public resetPcIeRasSupport() {
    this._pcIeRasSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcIeRasSupportInput() {
    return this._pcIeRasSupport;
  }

  // pc_ie_ssd_hot_plug_support - computed: false, optional: true, required: false
  private _pcIeSsdHotPlugSupport?: string; 
  public get pcIeSsdHotPlugSupport() {
    return this.getStringAttribute('pc_ie_ssd_hot_plug_support');
  }
  public set pcIeSsdHotPlugSupport(value: string) {
    this._pcIeSsdHotPlugSupport = value;
  }
  public resetPcIeSsdHotPlugSupport() {
    this._pcIeSsdHotPlugSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcIeSsdHotPlugSupportInput() {
    return this._pcIeSsdHotPlugSupport;
  }

  // pch_pcie_pll_ssc - computed: false, optional: true, required: false
  private _pchPciePllSsc?: string; 
  public get pchPciePllSsc() {
    return this.getStringAttribute('pch_pcie_pll_ssc');
  }
  public set pchPciePllSsc(value: string) {
    this._pchPciePllSsc = value;
  }
  public resetPchPciePllSsc() {
    this._pchPciePllSsc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pchPciePllSscInput() {
    return this._pchPciePllSsc;
  }

  // pch_usb30mode - computed: false, optional: true, required: false
  private _pchUsb30Mode?: string; 
  public get pchUsb30Mode() {
    return this.getStringAttribute('pch_usb30mode');
  }
  public set pchUsb30Mode(value: string) {
    this._pchUsb30Mode = value;
  }
  public resetPchUsb30Mode() {
    this._pchUsb30Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pchUsb30ModeInput() {
    return this._pchUsb30Mode;
  }

  // pci_option_ro_ms - computed: false, optional: true, required: false
  private _pciOptionRoMs?: string; 
  public get pciOptionRoMs() {
    return this.getStringAttribute('pci_option_ro_ms');
  }
  public set pciOptionRoMs(value: string) {
    this._pciOptionRoMs = value;
  }
  public resetPciOptionRoMs() {
    this._pciOptionRoMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciOptionRoMsInput() {
    return this._pciOptionRoMs;
  }

  // pci_rom_clp - computed: false, optional: true, required: false
  private _pciRomClp?: string; 
  public get pciRomClp() {
    return this.getStringAttribute('pci_rom_clp');
  }
  public set pciRomClp(value: string) {
    this._pciRomClp = value;
  }
  public resetPciRomClp() {
    this._pciRomClp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciRomClpInput() {
    return this._pciRomClp;
  }

  // pcie_ari_support - computed: false, optional: true, required: false
  private _pcieAriSupport?: string; 
  public get pcieAriSupport() {
    return this.getStringAttribute('pcie_ari_support');
  }
  public set pcieAriSupport(value: string) {
    this._pcieAriSupport = value;
  }
  public resetPcieAriSupport() {
    this._pcieAriSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieAriSupportInput() {
    return this._pcieAriSupport;
  }

  // pcie_pll_ssc - computed: false, optional: true, required: false
  private _pciePllSsc?: string; 
  public get pciePllSsc() {
    return this.getStringAttribute('pcie_pll_ssc');
  }
  public set pciePllSsc(value: string) {
    this._pciePllSsc = value;
  }
  public resetPciePllSsc() {
    this._pciePllSsc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciePllSscInput() {
    return this._pciePllSsc;
  }

  // pcie_slot_mraid1link_speed - computed: false, optional: true, required: false
  private _pcieSlotMraid1LinkSpeed?: string; 
  public get pcieSlotMraid1LinkSpeed() {
    return this.getStringAttribute('pcie_slot_mraid1link_speed');
  }
  public set pcieSlotMraid1LinkSpeed(value: string) {
    this._pcieSlotMraid1LinkSpeed = value;
  }
  public resetPcieSlotMraid1LinkSpeed() {
    this._pcieSlotMraid1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotMraid1LinkSpeedInput() {
    return this._pcieSlotMraid1LinkSpeed;
  }

  // pcie_slot_mraid1option_rom - computed: false, optional: true, required: false
  private _pcieSlotMraid1OptionRom?: string; 
  public get pcieSlotMraid1OptionRom() {
    return this.getStringAttribute('pcie_slot_mraid1option_rom');
  }
  public set pcieSlotMraid1OptionRom(value: string) {
    this._pcieSlotMraid1OptionRom = value;
  }
  public resetPcieSlotMraid1OptionRom() {
    this._pcieSlotMraid1OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotMraid1OptionRomInput() {
    return this._pcieSlotMraid1OptionRom;
  }

  // pcie_slot_mraid2link_speed - computed: false, optional: true, required: false
  private _pcieSlotMraid2LinkSpeed?: string; 
  public get pcieSlotMraid2LinkSpeed() {
    return this.getStringAttribute('pcie_slot_mraid2link_speed');
  }
  public set pcieSlotMraid2LinkSpeed(value: string) {
    this._pcieSlotMraid2LinkSpeed = value;
  }
  public resetPcieSlotMraid2LinkSpeed() {
    this._pcieSlotMraid2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotMraid2LinkSpeedInput() {
    return this._pcieSlotMraid2LinkSpeed;
  }

  // pcie_slot_mraid2option_rom - computed: false, optional: true, required: false
  private _pcieSlotMraid2OptionRom?: string; 
  public get pcieSlotMraid2OptionRom() {
    return this.getStringAttribute('pcie_slot_mraid2option_rom');
  }
  public set pcieSlotMraid2OptionRom(value: string) {
    this._pcieSlotMraid2OptionRom = value;
  }
  public resetPcieSlotMraid2OptionRom() {
    this._pcieSlotMraid2OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotMraid2OptionRomInput() {
    return this._pcieSlotMraid2OptionRom;
  }

  // pcie_slot_mstorraid_link_speed - computed: false, optional: true, required: false
  private _pcieSlotMstorraidLinkSpeed?: string; 
  public get pcieSlotMstorraidLinkSpeed() {
    return this.getStringAttribute('pcie_slot_mstorraid_link_speed');
  }
  public set pcieSlotMstorraidLinkSpeed(value: string) {
    this._pcieSlotMstorraidLinkSpeed = value;
  }
  public resetPcieSlotMstorraidLinkSpeed() {
    this._pcieSlotMstorraidLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotMstorraidLinkSpeedInput() {
    return this._pcieSlotMstorraidLinkSpeed;
  }

  // pcie_slot_mstorraid_option_rom - computed: false, optional: true, required: false
  private _pcieSlotMstorraidOptionRom?: string; 
  public get pcieSlotMstorraidOptionRom() {
    return this.getStringAttribute('pcie_slot_mstorraid_option_rom');
  }
  public set pcieSlotMstorraidOptionRom(value: string) {
    this._pcieSlotMstorraidOptionRom = value;
  }
  public resetPcieSlotMstorraidOptionRom() {
    this._pcieSlotMstorraidOptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotMstorraidOptionRomInput() {
    return this._pcieSlotMstorraidOptionRom;
  }

  // pcie_slot_nvme1link_speed - computed: false, optional: true, required: false
  private _pcieSlotNvme1LinkSpeed?: string; 
  public get pcieSlotNvme1LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme1link_speed');
  }
  public set pcieSlotNvme1LinkSpeed(value: string) {
    this._pcieSlotNvme1LinkSpeed = value;
  }
  public resetPcieSlotNvme1LinkSpeed() {
    this._pcieSlotNvme1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme1LinkSpeedInput() {
    return this._pcieSlotNvme1LinkSpeed;
  }

  // pcie_slot_nvme1option_rom - computed: false, optional: true, required: false
  private _pcieSlotNvme1OptionRom?: string; 
  public get pcieSlotNvme1OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme1option_rom');
  }
  public set pcieSlotNvme1OptionRom(value: string) {
    this._pcieSlotNvme1OptionRom = value;
  }
  public resetPcieSlotNvme1OptionRom() {
    this._pcieSlotNvme1OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme1OptionRomInput() {
    return this._pcieSlotNvme1OptionRom;
  }

  // pcie_slot_nvme2link_speed - computed: false, optional: true, required: false
  private _pcieSlotNvme2LinkSpeed?: string; 
  public get pcieSlotNvme2LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme2link_speed');
  }
  public set pcieSlotNvme2LinkSpeed(value: string) {
    this._pcieSlotNvme2LinkSpeed = value;
  }
  public resetPcieSlotNvme2LinkSpeed() {
    this._pcieSlotNvme2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme2LinkSpeedInput() {
    return this._pcieSlotNvme2LinkSpeed;
  }

  // pcie_slot_nvme2option_rom - computed: false, optional: true, required: false
  private _pcieSlotNvme2OptionRom?: string; 
  public get pcieSlotNvme2OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme2option_rom');
  }
  public set pcieSlotNvme2OptionRom(value: string) {
    this._pcieSlotNvme2OptionRom = value;
  }
  public resetPcieSlotNvme2OptionRom() {
    this._pcieSlotNvme2OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme2OptionRomInput() {
    return this._pcieSlotNvme2OptionRom;
  }

  // pcie_slot_nvme3link_speed - computed: false, optional: true, required: false
  private _pcieSlotNvme3LinkSpeed?: string; 
  public get pcieSlotNvme3LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme3link_speed');
  }
  public set pcieSlotNvme3LinkSpeed(value: string) {
    this._pcieSlotNvme3LinkSpeed = value;
  }
  public resetPcieSlotNvme3LinkSpeed() {
    this._pcieSlotNvme3LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme3LinkSpeedInput() {
    return this._pcieSlotNvme3LinkSpeed;
  }

  // pcie_slot_nvme3option_rom - computed: false, optional: true, required: false
  private _pcieSlotNvme3OptionRom?: string; 
  public get pcieSlotNvme3OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme3option_rom');
  }
  public set pcieSlotNvme3OptionRom(value: string) {
    this._pcieSlotNvme3OptionRom = value;
  }
  public resetPcieSlotNvme3OptionRom() {
    this._pcieSlotNvme3OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme3OptionRomInput() {
    return this._pcieSlotNvme3OptionRom;
  }

  // pcie_slot_nvme4link_speed - computed: false, optional: true, required: false
  private _pcieSlotNvme4LinkSpeed?: string; 
  public get pcieSlotNvme4LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme4link_speed');
  }
  public set pcieSlotNvme4LinkSpeed(value: string) {
    this._pcieSlotNvme4LinkSpeed = value;
  }
  public resetPcieSlotNvme4LinkSpeed() {
    this._pcieSlotNvme4LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme4LinkSpeedInput() {
    return this._pcieSlotNvme4LinkSpeed;
  }

  // pcie_slot_nvme4option_rom - computed: false, optional: true, required: false
  private _pcieSlotNvme4OptionRom?: string; 
  public get pcieSlotNvme4OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme4option_rom');
  }
  public set pcieSlotNvme4OptionRom(value: string) {
    this._pcieSlotNvme4OptionRom = value;
  }
  public resetPcieSlotNvme4OptionRom() {
    this._pcieSlotNvme4OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme4OptionRomInput() {
    return this._pcieSlotNvme4OptionRom;
  }

  // pcie_slot_nvme5link_speed - computed: false, optional: true, required: false
  private _pcieSlotNvme5LinkSpeed?: string; 
  public get pcieSlotNvme5LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme5link_speed');
  }
  public set pcieSlotNvme5LinkSpeed(value: string) {
    this._pcieSlotNvme5LinkSpeed = value;
  }
  public resetPcieSlotNvme5LinkSpeed() {
    this._pcieSlotNvme5LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme5LinkSpeedInput() {
    return this._pcieSlotNvme5LinkSpeed;
  }

  // pcie_slot_nvme5option_rom - computed: false, optional: true, required: false
  private _pcieSlotNvme5OptionRom?: string; 
  public get pcieSlotNvme5OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme5option_rom');
  }
  public set pcieSlotNvme5OptionRom(value: string) {
    this._pcieSlotNvme5OptionRom = value;
  }
  public resetPcieSlotNvme5OptionRom() {
    this._pcieSlotNvme5OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme5OptionRomInput() {
    return this._pcieSlotNvme5OptionRom;
  }

  // pcie_slot_nvme6link_speed - computed: false, optional: true, required: false
  private _pcieSlotNvme6LinkSpeed?: string; 
  public get pcieSlotNvme6LinkSpeed() {
    return this.getStringAttribute('pcie_slot_nvme6link_speed');
  }
  public set pcieSlotNvme6LinkSpeed(value: string) {
    this._pcieSlotNvme6LinkSpeed = value;
  }
  public resetPcieSlotNvme6LinkSpeed() {
    this._pcieSlotNvme6LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme6LinkSpeedInput() {
    return this._pcieSlotNvme6LinkSpeed;
  }

  // pcie_slot_nvme6option_rom - computed: false, optional: true, required: false
  private _pcieSlotNvme6OptionRom?: string; 
  public get pcieSlotNvme6OptionRom() {
    return this.getStringAttribute('pcie_slot_nvme6option_rom');
  }
  public set pcieSlotNvme6OptionRom(value: string) {
    this._pcieSlotNvme6OptionRom = value;
  }
  public resetPcieSlotNvme6OptionRom() {
    this._pcieSlotNvme6OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotNvme6OptionRomInput() {
    return this._pcieSlotNvme6OptionRom;
  }

  // pcie_slots_cdn_enable - computed: false, optional: true, required: false
  private _pcieSlotsCdnEnable?: string; 
  public get pcieSlotsCdnEnable() {
    return this.getStringAttribute('pcie_slots_cdn_enable');
  }
  public set pcieSlotsCdnEnable(value: string) {
    this._pcieSlotsCdnEnable = value;
  }
  public resetPcieSlotsCdnEnable() {
    this._pcieSlotsCdnEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieSlotsCdnEnableInput() {
    return this._pcieSlotsCdnEnable;
  }

  // pop_support - computed: false, optional: true, required: false
  private _popSupport?: string; 
  public get popSupport() {
    return this.getStringAttribute('pop_support');
  }
  public set popSupport(value: string) {
    this._popSupport = value;
  }
  public resetPopSupport() {
    this._popSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popSupportInput() {
    return this._popSupport;
  }

  // post_error_pause - computed: false, optional: true, required: false
  private _postErrorPause?: string; 
  public get postErrorPause() {
    return this.getStringAttribute('post_error_pause');
  }
  public set postErrorPause(value: string) {
    this._postErrorPause = value;
  }
  public resetPostErrorPause() {
    this._postErrorPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postErrorPauseInput() {
    return this._postErrorPause;
  }

  // post_package_repair - computed: false, optional: true, required: false
  private _postPackageRepair?: string; 
  public get postPackageRepair() {
    return this.getStringAttribute('post_package_repair');
  }
  public set postPackageRepair(value: string) {
    this._postPackageRepair = value;
  }
  public resetPostPackageRepair() {
    this._postPackageRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postPackageRepairInput() {
    return this._postPackageRepair;
  }

  // pre_boot_dma_protection - computed: false, optional: true, required: false
  private _preBootDmaProtection?: string; 
  public get preBootDmaProtection() {
    return this.getStringAttribute('pre_boot_dma_protection');
  }
  public set preBootDmaProtection(value: string) {
    this._preBootDmaProtection = value;
  }
  public resetPreBootDmaProtection() {
    this._preBootDmaProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBootDmaProtectionInput() {
    return this._preBootDmaProtection;
  }

  // prmrr_size - computed: false, optional: true, required: false
  private _prmrrSize?: string; 
  public get prmrrSize() {
    return this.getStringAttribute('prmrr_size');
  }
  public set prmrrSize(value: string) {
    this._prmrrSize = value;
  }
  public resetPrmrrSize() {
    this._prmrrSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prmrrSizeInput() {
    return this._prmrrSize;
  }

  // processor_c1e - computed: false, optional: true, required: false
  private _processorC1E?: string; 
  public get processorC1E() {
    return this.getStringAttribute('processor_c1e');
  }
  public set processorC1E(value: string) {
    this._processorC1E = value;
  }
  public resetProcessorC1E() {
    this._processorC1E = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorC1EInput() {
    return this._processorC1E;
  }

  // processor_c3report - computed: false, optional: true, required: false
  private _processorC3Report?: string; 
  public get processorC3Report() {
    return this.getStringAttribute('processor_c3report');
  }
  public set processorC3Report(value: string) {
    this._processorC3Report = value;
  }
  public resetProcessorC3Report() {
    this._processorC3Report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorC3ReportInput() {
    return this._processorC3Report;
  }

  // processor_c6report - computed: false, optional: true, required: false
  private _processorC6Report?: string; 
  public get processorC6Report() {
    return this.getStringAttribute('processor_c6report');
  }
  public set processorC6Report(value: string) {
    this._processorC6Report = value;
  }
  public resetProcessorC6Report() {
    this._processorC6Report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorC6ReportInput() {
    return this._processorC6Report;
  }

  // processor_cstate - computed: false, optional: true, required: false
  private _processorCstate?: string; 
  public get processorCstate() {
    return this.getStringAttribute('processor_cstate');
  }
  public set processorCstate(value: string) {
    this._processorCstate = value;
  }
  public resetProcessorCstate() {
    this._processorCstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorCstateInput() {
    return this._processorCstate;
  }

  // psata - computed: false, optional: true, required: false
  private _psata?: string; 
  public get psata() {
    return this.getStringAttribute('psata');
  }
  public set psata(value: string) {
    this._psata = value;
  }
  public resetPsata() {
    this._psata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psataInput() {
    return this._psata;
  }

  // pstate_coord_type - computed: false, optional: true, required: false
  private _pstateCoordType?: string; 
  public get pstateCoordType() {
    return this.getStringAttribute('pstate_coord_type');
  }
  public set pstateCoordType(value: string) {
    this._pstateCoordType = value;
  }
  public resetPstateCoordType() {
    this._pstateCoordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pstateCoordTypeInput() {
    return this._pstateCoordType;
  }

  // putty_key_pad - computed: false, optional: true, required: false
  private _puttyKeyPad?: string; 
  public get puttyKeyPad() {
    return this.getStringAttribute('putty_key_pad');
  }
  public set puttyKeyPad(value: string) {
    this._puttyKeyPad = value;
  }
  public resetPuttyKeyPad() {
    this._puttyKeyPad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puttyKeyPadInput() {
    return this._puttyKeyPad;
  }

  // pwr_perf_tuning - computed: false, optional: true, required: false
  private _pwrPerfTuning?: string; 
  public get pwrPerfTuning() {
    return this.getStringAttribute('pwr_perf_tuning');
  }
  public set pwrPerfTuning(value: string) {
    this._pwrPerfTuning = value;
  }
  public resetPwrPerfTuning() {
    this._pwrPerfTuning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwrPerfTuningInput() {
    return this._pwrPerfTuning;
  }

  // qpi_link_frequency - computed: false, optional: true, required: false
  private _qpiLinkFrequency?: string; 
  public get qpiLinkFrequency() {
    return this.getStringAttribute('qpi_link_frequency');
  }
  public set qpiLinkFrequency(value: string) {
    this._qpiLinkFrequency = value;
  }
  public resetQpiLinkFrequency() {
    this._qpiLinkFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpiLinkFrequencyInput() {
    return this._qpiLinkFrequency;
  }

  // qpi_link_speed - computed: false, optional: true, required: false
  private _qpiLinkSpeed?: string; 
  public get qpiLinkSpeed() {
    return this.getStringAttribute('qpi_link_speed');
  }
  public set qpiLinkSpeed(value: string) {
    this._qpiLinkSpeed = value;
  }
  public resetQpiLinkSpeed() {
    this._qpiLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpiLinkSpeedInput() {
    return this._qpiLinkSpeed;
  }

  // qpi_snoop_mode - computed: false, optional: true, required: false
  private _qpiSnoopMode?: string; 
  public get qpiSnoopMode() {
    return this.getStringAttribute('qpi_snoop_mode');
  }
  public set qpiSnoopMode(value: string) {
    this._qpiSnoopMode = value;
  }
  public resetQpiSnoopMode() {
    this._qpiSnoopMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpiSnoopModeInput() {
    return this._qpiSnoopMode;
  }

  // rank_inter_leave - computed: false, optional: true, required: false
  private _rankInterLeave?: string; 
  public get rankInterLeave() {
    return this.getStringAttribute('rank_inter_leave');
  }
  public set rankInterLeave(value: string) {
    this._rankInterLeave = value;
  }
  public resetRankInterLeave() {
    this._rankInterLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInterLeaveInput() {
    return this._rankInterLeave;
  }

  // redirection_after_post - computed: false, optional: true, required: false
  private _redirectionAfterPost?: string; 
  public get redirectionAfterPost() {
    return this.getStringAttribute('redirection_after_post');
  }
  public set redirectionAfterPost(value: string) {
    this._redirectionAfterPost = value;
  }
  public resetRedirectionAfterPost() {
    this._redirectionAfterPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectionAfterPostInput() {
    return this._redirectionAfterPost;
  }

  // resize_bar_support - computed: false, optional: true, required: false
  private _resizeBarSupport?: string; 
  public get resizeBarSupport() {
    return this.getStringAttribute('resize_bar_support');
  }
  public set resizeBarSupport(value: string) {
    this._resizeBarSupport = value;
  }
  public resetResizeBarSupport() {
    this._resizeBarSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeBarSupportInput() {
    return this._resizeBarSupport;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightBiosPolicyResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // runtime_post_package_repair - computed: false, optional: true, required: false
  private _runtimePostPackageRepair?: string; 
  public get runtimePostPackageRepair() {
    return this.getStringAttribute('runtime_post_package_repair');
  }
  public set runtimePostPackageRepair(value: string) {
    this._runtimePostPackageRepair = value;
  }
  public resetRuntimePostPackageRepair() {
    this._runtimePostPackageRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimePostPackageRepairInput() {
    return this._runtimePostPackageRepair;
  }

  // sata_mode_select - computed: false, optional: true, required: false
  private _sataModeSelect?: string; 
  public get sataModeSelect() {
    return this.getStringAttribute('sata_mode_select');
  }
  public set sataModeSelect(value: string) {
    this._sataModeSelect = value;
  }
  public resetSataModeSelect() {
    this._sataModeSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sataModeSelectInput() {
    return this._sataModeSelect;
  }

  // select_memory_ras_configuration - computed: false, optional: true, required: false
  private _selectMemoryRasConfiguration?: string; 
  public get selectMemoryRasConfiguration() {
    return this.getStringAttribute('select_memory_ras_configuration');
  }
  public set selectMemoryRasConfiguration(value: string) {
    this._selectMemoryRasConfiguration = value;
  }
  public resetSelectMemoryRasConfiguration() {
    this._selectMemoryRasConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectMemoryRasConfigurationInput() {
    return this._selectMemoryRasConfiguration;
  }

  // select_ppr_type - computed: false, optional: true, required: false
  private _selectPprType?: string; 
  public get selectPprType() {
    return this.getStringAttribute('select_ppr_type');
  }
  public set selectPprType(value: string) {
    this._selectPprType = value;
  }
  public resetSelectPprType() {
    this._selectPprType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPprTypeInput() {
    return this._selectPprType;
  }

  // serial_mux - computed: false, optional: true, required: false
  private _serialMux?: string; 
  public get serialMux() {
    return this.getStringAttribute('serial_mux');
  }
  public set serialMux(value: string) {
    this._serialMux = value;
  }
  public resetSerialMux() {
    this._serialMux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialMuxInput() {
    return this._serialMux;
  }

  // serial_port_aenable - computed: false, optional: true, required: false
  private _serialPortAenable?: string; 
  public get serialPortAenable() {
    return this.getStringAttribute('serial_port_aenable');
  }
  public set serialPortAenable(value: string) {
    this._serialPortAenable = value;
  }
  public resetSerialPortAenable() {
    this._serialPortAenable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPortAenableInput() {
    return this._serialPortAenable;
  }

  // sev - computed: false, optional: true, required: false
  private _sev?: string; 
  public get sev() {
    return this.getStringAttribute('sev');
  }
  public set sev(value: string) {
    this._sev = value;
  }
  public resetSev() {
    this._sev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sevInput() {
    return this._sev;
  }

  // sgx_auto_registration_agent - computed: false, optional: true, required: false
  private _sgxAutoRegistrationAgent?: string; 
  public get sgxAutoRegistrationAgent() {
    return this.getStringAttribute('sgx_auto_registration_agent');
  }
  public set sgxAutoRegistrationAgent(value: string) {
    this._sgxAutoRegistrationAgent = value;
  }
  public resetSgxAutoRegistrationAgent() {
    this._sgxAutoRegistrationAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxAutoRegistrationAgentInput() {
    return this._sgxAutoRegistrationAgent;
  }

  // sgx_epoch0 - computed: false, optional: true, required: false
  private _sgxEpoch0?: string; 
  public get sgxEpoch0() {
    return this.getStringAttribute('sgx_epoch0');
  }
  public set sgxEpoch0(value: string) {
    this._sgxEpoch0 = value;
  }
  public resetSgxEpoch0() {
    this._sgxEpoch0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxEpoch0Input() {
    return this._sgxEpoch0;
  }

  // sgx_epoch1 - computed: false, optional: true, required: false
  private _sgxEpoch1?: string; 
  public get sgxEpoch1() {
    return this.getStringAttribute('sgx_epoch1');
  }
  public set sgxEpoch1(value: string) {
    this._sgxEpoch1 = value;
  }
  public resetSgxEpoch1() {
    this._sgxEpoch1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxEpoch1Input() {
    return this._sgxEpoch1;
  }

  // sgx_factory_reset - computed: false, optional: true, required: false
  private _sgxFactoryReset?: string; 
  public get sgxFactoryReset() {
    return this.getStringAttribute('sgx_factory_reset');
  }
  public set sgxFactoryReset(value: string) {
    this._sgxFactoryReset = value;
  }
  public resetSgxFactoryReset() {
    this._sgxFactoryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxFactoryResetInput() {
    return this._sgxFactoryReset;
  }

  // sgx_le_pub_key_hash0 - computed: false, optional: true, required: false
  private _sgxLePubKeyHash0?: string; 
  public get sgxLePubKeyHash0() {
    return this.getStringAttribute('sgx_le_pub_key_hash0');
  }
  public set sgxLePubKeyHash0(value: string) {
    this._sgxLePubKeyHash0 = value;
  }
  public resetSgxLePubKeyHash0() {
    this._sgxLePubKeyHash0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxLePubKeyHash0Input() {
    return this._sgxLePubKeyHash0;
  }

  // sgx_le_pub_key_hash1 - computed: false, optional: true, required: false
  private _sgxLePubKeyHash1?: string; 
  public get sgxLePubKeyHash1() {
    return this.getStringAttribute('sgx_le_pub_key_hash1');
  }
  public set sgxLePubKeyHash1(value: string) {
    this._sgxLePubKeyHash1 = value;
  }
  public resetSgxLePubKeyHash1() {
    this._sgxLePubKeyHash1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxLePubKeyHash1Input() {
    return this._sgxLePubKeyHash1;
  }

  // sgx_le_pub_key_hash2 - computed: false, optional: true, required: false
  private _sgxLePubKeyHash2?: string; 
  public get sgxLePubKeyHash2() {
    return this.getStringAttribute('sgx_le_pub_key_hash2');
  }
  public set sgxLePubKeyHash2(value: string) {
    this._sgxLePubKeyHash2 = value;
  }
  public resetSgxLePubKeyHash2() {
    this._sgxLePubKeyHash2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxLePubKeyHash2Input() {
    return this._sgxLePubKeyHash2;
  }

  // sgx_le_pub_key_hash3 - computed: false, optional: true, required: false
  private _sgxLePubKeyHash3?: string; 
  public get sgxLePubKeyHash3() {
    return this.getStringAttribute('sgx_le_pub_key_hash3');
  }
  public set sgxLePubKeyHash3(value: string) {
    this._sgxLePubKeyHash3 = value;
  }
  public resetSgxLePubKeyHash3() {
    this._sgxLePubKeyHash3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxLePubKeyHash3Input() {
    return this._sgxLePubKeyHash3;
  }

  // sgx_le_wr - computed: false, optional: true, required: false
  private _sgxLeWr?: string; 
  public get sgxLeWr() {
    return this.getStringAttribute('sgx_le_wr');
  }
  public set sgxLeWr(value: string) {
    this._sgxLeWr = value;
  }
  public resetSgxLeWr() {
    this._sgxLeWr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxLeWrInput() {
    return this._sgxLeWr;
  }

  // sgx_package_info_in_band_access - computed: false, optional: true, required: false
  private _sgxPackageInfoInBandAccess?: string; 
  public get sgxPackageInfoInBandAccess() {
    return this.getStringAttribute('sgx_package_info_in_band_access');
  }
  public set sgxPackageInfoInBandAccess(value: string) {
    this._sgxPackageInfoInBandAccess = value;
  }
  public resetSgxPackageInfoInBandAccess() {
    this._sgxPackageInfoInBandAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxPackageInfoInBandAccessInput() {
    return this._sgxPackageInfoInBandAccess;
  }

  // sgx_qos - computed: false, optional: true, required: false
  private _sgxQos?: string; 
  public get sgxQos() {
    return this.getStringAttribute('sgx_qos');
  }
  public set sgxQos(value: string) {
    this._sgxQos = value;
  }
  public resetSgxQos() {
    this._sgxQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxQosInput() {
    return this._sgxQos;
  }

  // sha1pcr_bank - computed: false, optional: true, required: false
  private _sha1PcrBank?: string; 
  public get sha1PcrBank() {
    return this.getStringAttribute('sha1pcr_bank');
  }
  public set sha1PcrBank(value: string) {
    this._sha1PcrBank = value;
  }
  public resetSha1PcrBank() {
    this._sha1PcrBank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1PcrBankInput() {
    return this._sha1PcrBank;
  }

  // sha256pcr_bank - computed: false, optional: true, required: false
  private _sha256PcrBank?: string; 
  public get sha256PcrBank() {
    return this.getStringAttribute('sha256pcr_bank');
  }
  public set sha256PcrBank(value: string) {
    this._sha256PcrBank = value;
  }
  public resetSha256PcrBank() {
    this._sha256PcrBank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256PcrBankInput() {
    return this._sha256PcrBank;
  }

  // sha384pcr_bank - computed: false, optional: true, required: false
  private _sha384PcrBank?: string; 
  public get sha384PcrBank() {
    return this.getStringAttribute('sha384pcr_bank');
  }
  public set sha384PcrBank(value: string) {
    this._sha384PcrBank = value;
  }
  public resetSha384PcrBank() {
    this._sha384PcrBank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha384PcrBankInput() {
    return this._sha384PcrBank;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // single_pctl_enable - computed: false, optional: true, required: false
  private _singlePctlEnable?: string; 
  public get singlePctlEnable() {
    return this.getStringAttribute('single_pctl_enable');
  }
  public set singlePctlEnable(value: string) {
    this._singlePctlEnable = value;
  }
  public resetSinglePctlEnable() {
    this._singlePctlEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePctlEnableInput() {
    return this._singlePctlEnable;
  }

  // slot10link_speed - computed: false, optional: true, required: false
  private _slot10LinkSpeed?: string; 
  public get slot10LinkSpeed() {
    return this.getStringAttribute('slot10link_speed');
  }
  public set slot10LinkSpeed(value: string) {
    this._slot10LinkSpeed = value;
  }
  public resetSlot10LinkSpeed() {
    this._slot10LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot10LinkSpeedInput() {
    return this._slot10LinkSpeed;
  }

  // slot10state - computed: false, optional: true, required: false
  private _slot10State?: string; 
  public get slot10State() {
    return this.getStringAttribute('slot10state');
  }
  public set slot10State(value: string) {
    this._slot10State = value;
  }
  public resetSlot10State() {
    this._slot10State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot10StateInput() {
    return this._slot10State;
  }

  // slot11link_speed - computed: false, optional: true, required: false
  private _slot11LinkSpeed?: string; 
  public get slot11LinkSpeed() {
    return this.getStringAttribute('slot11link_speed');
  }
  public set slot11LinkSpeed(value: string) {
    this._slot11LinkSpeed = value;
  }
  public resetSlot11LinkSpeed() {
    this._slot11LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot11LinkSpeedInput() {
    return this._slot11LinkSpeed;
  }

  // slot11state - computed: false, optional: true, required: false
  private _slot11State?: string; 
  public get slot11State() {
    return this.getStringAttribute('slot11state');
  }
  public set slot11State(value: string) {
    this._slot11State = value;
  }
  public resetSlot11State() {
    this._slot11State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot11StateInput() {
    return this._slot11State;
  }

  // slot12link_speed - computed: false, optional: true, required: false
  private _slot12LinkSpeed?: string; 
  public get slot12LinkSpeed() {
    return this.getStringAttribute('slot12link_speed');
  }
  public set slot12LinkSpeed(value: string) {
    this._slot12LinkSpeed = value;
  }
  public resetSlot12LinkSpeed() {
    this._slot12LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot12LinkSpeedInput() {
    return this._slot12LinkSpeed;
  }

  // slot12state - computed: false, optional: true, required: false
  private _slot12State?: string; 
  public get slot12State() {
    return this.getStringAttribute('slot12state');
  }
  public set slot12State(value: string) {
    this._slot12State = value;
  }
  public resetSlot12State() {
    this._slot12State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot12StateInput() {
    return this._slot12State;
  }

  // slot13state - computed: false, optional: true, required: false
  private _slot13State?: string; 
  public get slot13State() {
    return this.getStringAttribute('slot13state');
  }
  public set slot13State(value: string) {
    this._slot13State = value;
  }
  public resetSlot13State() {
    this._slot13State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot13StateInput() {
    return this._slot13State;
  }

  // slot14state - computed: false, optional: true, required: false
  private _slot14State?: string; 
  public get slot14State() {
    return this.getStringAttribute('slot14state');
  }
  public set slot14State(value: string) {
    this._slot14State = value;
  }
  public resetSlot14State() {
    this._slot14State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot14StateInput() {
    return this._slot14State;
  }

  // slot1link_speed - computed: false, optional: true, required: false
  private _slot1LinkSpeed?: string; 
  public get slot1LinkSpeed() {
    return this.getStringAttribute('slot1link_speed');
  }
  public set slot1LinkSpeed(value: string) {
    this._slot1LinkSpeed = value;
  }
  public resetSlot1LinkSpeed() {
    this._slot1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot1LinkSpeedInput() {
    return this._slot1LinkSpeed;
  }

  // slot1state - computed: false, optional: true, required: false
  private _slot1State?: string; 
  public get slot1State() {
    return this.getStringAttribute('slot1state');
  }
  public set slot1State(value: string) {
    this._slot1State = value;
  }
  public resetSlot1State() {
    this._slot1State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot1StateInput() {
    return this._slot1State;
  }

  // slot2link_speed - computed: false, optional: true, required: false
  private _slot2LinkSpeed?: string; 
  public get slot2LinkSpeed() {
    return this.getStringAttribute('slot2link_speed');
  }
  public set slot2LinkSpeed(value: string) {
    this._slot2LinkSpeed = value;
  }
  public resetSlot2LinkSpeed() {
    this._slot2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot2LinkSpeedInput() {
    return this._slot2LinkSpeed;
  }

  // slot2state - computed: false, optional: true, required: false
  private _slot2State?: string; 
  public get slot2State() {
    return this.getStringAttribute('slot2state');
  }
  public set slot2State(value: string) {
    this._slot2State = value;
  }
  public resetSlot2State() {
    this._slot2State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot2StateInput() {
    return this._slot2State;
  }

  // slot3link_speed - computed: false, optional: true, required: false
  private _slot3LinkSpeed?: string; 
  public get slot3LinkSpeed() {
    return this.getStringAttribute('slot3link_speed');
  }
  public set slot3LinkSpeed(value: string) {
    this._slot3LinkSpeed = value;
  }
  public resetSlot3LinkSpeed() {
    this._slot3LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot3LinkSpeedInput() {
    return this._slot3LinkSpeed;
  }

  // slot3state - computed: false, optional: true, required: false
  private _slot3State?: string; 
  public get slot3State() {
    return this.getStringAttribute('slot3state');
  }
  public set slot3State(value: string) {
    this._slot3State = value;
  }
  public resetSlot3State() {
    this._slot3State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot3StateInput() {
    return this._slot3State;
  }

  // slot4link_speed - computed: false, optional: true, required: false
  private _slot4LinkSpeed?: string; 
  public get slot4LinkSpeed() {
    return this.getStringAttribute('slot4link_speed');
  }
  public set slot4LinkSpeed(value: string) {
    this._slot4LinkSpeed = value;
  }
  public resetSlot4LinkSpeed() {
    this._slot4LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot4LinkSpeedInput() {
    return this._slot4LinkSpeed;
  }

  // slot4state - computed: false, optional: true, required: false
  private _slot4State?: string; 
  public get slot4State() {
    return this.getStringAttribute('slot4state');
  }
  public set slot4State(value: string) {
    this._slot4State = value;
  }
  public resetSlot4State() {
    this._slot4State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot4StateInput() {
    return this._slot4State;
  }

  // slot5link_speed - computed: false, optional: true, required: false
  private _slot5LinkSpeed?: string; 
  public get slot5LinkSpeed() {
    return this.getStringAttribute('slot5link_speed');
  }
  public set slot5LinkSpeed(value: string) {
    this._slot5LinkSpeed = value;
  }
  public resetSlot5LinkSpeed() {
    this._slot5LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot5LinkSpeedInput() {
    return this._slot5LinkSpeed;
  }

  // slot5state - computed: false, optional: true, required: false
  private _slot5State?: string; 
  public get slot5State() {
    return this.getStringAttribute('slot5state');
  }
  public set slot5State(value: string) {
    this._slot5State = value;
  }
  public resetSlot5State() {
    this._slot5State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot5StateInput() {
    return this._slot5State;
  }

  // slot6link_speed - computed: false, optional: true, required: false
  private _slot6LinkSpeed?: string; 
  public get slot6LinkSpeed() {
    return this.getStringAttribute('slot6link_speed');
  }
  public set slot6LinkSpeed(value: string) {
    this._slot6LinkSpeed = value;
  }
  public resetSlot6LinkSpeed() {
    this._slot6LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot6LinkSpeedInput() {
    return this._slot6LinkSpeed;
  }

  // slot6state - computed: false, optional: true, required: false
  private _slot6State?: string; 
  public get slot6State() {
    return this.getStringAttribute('slot6state');
  }
  public set slot6State(value: string) {
    this._slot6State = value;
  }
  public resetSlot6State() {
    this._slot6State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot6StateInput() {
    return this._slot6State;
  }

  // slot7link_speed - computed: false, optional: true, required: false
  private _slot7LinkSpeed?: string; 
  public get slot7LinkSpeed() {
    return this.getStringAttribute('slot7link_speed');
  }
  public set slot7LinkSpeed(value: string) {
    this._slot7LinkSpeed = value;
  }
  public resetSlot7LinkSpeed() {
    this._slot7LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot7LinkSpeedInput() {
    return this._slot7LinkSpeed;
  }

  // slot7state - computed: false, optional: true, required: false
  private _slot7State?: string; 
  public get slot7State() {
    return this.getStringAttribute('slot7state');
  }
  public set slot7State(value: string) {
    this._slot7State = value;
  }
  public resetSlot7State() {
    this._slot7State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot7StateInput() {
    return this._slot7State;
  }

  // slot8link_speed - computed: false, optional: true, required: false
  private _slot8LinkSpeed?: string; 
  public get slot8LinkSpeed() {
    return this.getStringAttribute('slot8link_speed');
  }
  public set slot8LinkSpeed(value: string) {
    this._slot8LinkSpeed = value;
  }
  public resetSlot8LinkSpeed() {
    this._slot8LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot8LinkSpeedInput() {
    return this._slot8LinkSpeed;
  }

  // slot8state - computed: false, optional: true, required: false
  private _slot8State?: string; 
  public get slot8State() {
    return this.getStringAttribute('slot8state');
  }
  public set slot8State(value: string) {
    this._slot8State = value;
  }
  public resetSlot8State() {
    this._slot8State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot8StateInput() {
    return this._slot8State;
  }

  // slot9link_speed - computed: false, optional: true, required: false
  private _slot9LinkSpeed?: string; 
  public get slot9LinkSpeed() {
    return this.getStringAttribute('slot9link_speed');
  }
  public set slot9LinkSpeed(value: string) {
    this._slot9LinkSpeed = value;
  }
  public resetSlot9LinkSpeed() {
    this._slot9LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot9LinkSpeedInput() {
    return this._slot9LinkSpeed;
  }

  // slot9state - computed: false, optional: true, required: false
  private _slot9State?: string; 
  public get slot9State() {
    return this.getStringAttribute('slot9state');
  }
  public set slot9State(value: string) {
    this._slot9State = value;
  }
  public resetSlot9State() {
    this._slot9State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slot9StateInput() {
    return this._slot9State;
  }

  // slot_flom_link_speed - computed: false, optional: true, required: false
  private _slotFlomLinkSpeed?: string; 
  public get slotFlomLinkSpeed() {
    return this.getStringAttribute('slot_flom_link_speed');
  }
  public set slotFlomLinkSpeed(value: string) {
    this._slotFlomLinkSpeed = value;
  }
  public resetSlotFlomLinkSpeed() {
    this._slotFlomLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFlomLinkSpeedInput() {
    return this._slotFlomLinkSpeed;
  }

  // slot_front_nvme10link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme10LinkSpeed?: string; 
  public get slotFrontNvme10LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme10link_speed');
  }
  public set slotFrontNvme10LinkSpeed(value: string) {
    this._slotFrontNvme10LinkSpeed = value;
  }
  public resetSlotFrontNvme10LinkSpeed() {
    this._slotFrontNvme10LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme10LinkSpeedInput() {
    return this._slotFrontNvme10LinkSpeed;
  }

  // slot_front_nvme10option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme10OptionRom?: string; 
  public get slotFrontNvme10OptionRom() {
    return this.getStringAttribute('slot_front_nvme10option_rom');
  }
  public set slotFrontNvme10OptionRom(value: string) {
    this._slotFrontNvme10OptionRom = value;
  }
  public resetSlotFrontNvme10OptionRom() {
    this._slotFrontNvme10OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme10OptionRomInput() {
    return this._slotFrontNvme10OptionRom;
  }

  // slot_front_nvme11link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme11LinkSpeed?: string; 
  public get slotFrontNvme11LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme11link_speed');
  }
  public set slotFrontNvme11LinkSpeed(value: string) {
    this._slotFrontNvme11LinkSpeed = value;
  }
  public resetSlotFrontNvme11LinkSpeed() {
    this._slotFrontNvme11LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme11LinkSpeedInput() {
    return this._slotFrontNvme11LinkSpeed;
  }

  // slot_front_nvme11option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme11OptionRom?: string; 
  public get slotFrontNvme11OptionRom() {
    return this.getStringAttribute('slot_front_nvme11option_rom');
  }
  public set slotFrontNvme11OptionRom(value: string) {
    this._slotFrontNvme11OptionRom = value;
  }
  public resetSlotFrontNvme11OptionRom() {
    this._slotFrontNvme11OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme11OptionRomInput() {
    return this._slotFrontNvme11OptionRom;
  }

  // slot_front_nvme12link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme12LinkSpeed?: string; 
  public get slotFrontNvme12LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme12link_speed');
  }
  public set slotFrontNvme12LinkSpeed(value: string) {
    this._slotFrontNvme12LinkSpeed = value;
  }
  public resetSlotFrontNvme12LinkSpeed() {
    this._slotFrontNvme12LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme12LinkSpeedInput() {
    return this._slotFrontNvme12LinkSpeed;
  }

  // slot_front_nvme12option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme12OptionRom?: string; 
  public get slotFrontNvme12OptionRom() {
    return this.getStringAttribute('slot_front_nvme12option_rom');
  }
  public set slotFrontNvme12OptionRom(value: string) {
    this._slotFrontNvme12OptionRom = value;
  }
  public resetSlotFrontNvme12OptionRom() {
    this._slotFrontNvme12OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme12OptionRomInput() {
    return this._slotFrontNvme12OptionRom;
  }

  // slot_front_nvme13link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme13LinkSpeed?: string; 
  public get slotFrontNvme13LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme13link_speed');
  }
  public set slotFrontNvme13LinkSpeed(value: string) {
    this._slotFrontNvme13LinkSpeed = value;
  }
  public resetSlotFrontNvme13LinkSpeed() {
    this._slotFrontNvme13LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme13LinkSpeedInput() {
    return this._slotFrontNvme13LinkSpeed;
  }

  // slot_front_nvme13option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme13OptionRom?: string; 
  public get slotFrontNvme13OptionRom() {
    return this.getStringAttribute('slot_front_nvme13option_rom');
  }
  public set slotFrontNvme13OptionRom(value: string) {
    this._slotFrontNvme13OptionRom = value;
  }
  public resetSlotFrontNvme13OptionRom() {
    this._slotFrontNvme13OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme13OptionRomInput() {
    return this._slotFrontNvme13OptionRom;
  }

  // slot_front_nvme14link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme14LinkSpeed?: string; 
  public get slotFrontNvme14LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme14link_speed');
  }
  public set slotFrontNvme14LinkSpeed(value: string) {
    this._slotFrontNvme14LinkSpeed = value;
  }
  public resetSlotFrontNvme14LinkSpeed() {
    this._slotFrontNvme14LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme14LinkSpeedInput() {
    return this._slotFrontNvme14LinkSpeed;
  }

  // slot_front_nvme14option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme14OptionRom?: string; 
  public get slotFrontNvme14OptionRom() {
    return this.getStringAttribute('slot_front_nvme14option_rom');
  }
  public set slotFrontNvme14OptionRom(value: string) {
    this._slotFrontNvme14OptionRom = value;
  }
  public resetSlotFrontNvme14OptionRom() {
    this._slotFrontNvme14OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme14OptionRomInput() {
    return this._slotFrontNvme14OptionRom;
  }

  // slot_front_nvme15link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme15LinkSpeed?: string; 
  public get slotFrontNvme15LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme15link_speed');
  }
  public set slotFrontNvme15LinkSpeed(value: string) {
    this._slotFrontNvme15LinkSpeed = value;
  }
  public resetSlotFrontNvme15LinkSpeed() {
    this._slotFrontNvme15LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme15LinkSpeedInput() {
    return this._slotFrontNvme15LinkSpeed;
  }

  // slot_front_nvme15option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme15OptionRom?: string; 
  public get slotFrontNvme15OptionRom() {
    return this.getStringAttribute('slot_front_nvme15option_rom');
  }
  public set slotFrontNvme15OptionRom(value: string) {
    this._slotFrontNvme15OptionRom = value;
  }
  public resetSlotFrontNvme15OptionRom() {
    this._slotFrontNvme15OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme15OptionRomInput() {
    return this._slotFrontNvme15OptionRom;
  }

  // slot_front_nvme16link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme16LinkSpeed?: string; 
  public get slotFrontNvme16LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme16link_speed');
  }
  public set slotFrontNvme16LinkSpeed(value: string) {
    this._slotFrontNvme16LinkSpeed = value;
  }
  public resetSlotFrontNvme16LinkSpeed() {
    this._slotFrontNvme16LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme16LinkSpeedInput() {
    return this._slotFrontNvme16LinkSpeed;
  }

  // slot_front_nvme16option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme16OptionRom?: string; 
  public get slotFrontNvme16OptionRom() {
    return this.getStringAttribute('slot_front_nvme16option_rom');
  }
  public set slotFrontNvme16OptionRom(value: string) {
    this._slotFrontNvme16OptionRom = value;
  }
  public resetSlotFrontNvme16OptionRom() {
    this._slotFrontNvme16OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme16OptionRomInput() {
    return this._slotFrontNvme16OptionRom;
  }

  // slot_front_nvme17link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme17LinkSpeed?: string; 
  public get slotFrontNvme17LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme17link_speed');
  }
  public set slotFrontNvme17LinkSpeed(value: string) {
    this._slotFrontNvme17LinkSpeed = value;
  }
  public resetSlotFrontNvme17LinkSpeed() {
    this._slotFrontNvme17LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme17LinkSpeedInput() {
    return this._slotFrontNvme17LinkSpeed;
  }

  // slot_front_nvme17option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme17OptionRom?: string; 
  public get slotFrontNvme17OptionRom() {
    return this.getStringAttribute('slot_front_nvme17option_rom');
  }
  public set slotFrontNvme17OptionRom(value: string) {
    this._slotFrontNvme17OptionRom = value;
  }
  public resetSlotFrontNvme17OptionRom() {
    this._slotFrontNvme17OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme17OptionRomInput() {
    return this._slotFrontNvme17OptionRom;
  }

  // slot_front_nvme18link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme18LinkSpeed?: string; 
  public get slotFrontNvme18LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme18link_speed');
  }
  public set slotFrontNvme18LinkSpeed(value: string) {
    this._slotFrontNvme18LinkSpeed = value;
  }
  public resetSlotFrontNvme18LinkSpeed() {
    this._slotFrontNvme18LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme18LinkSpeedInput() {
    return this._slotFrontNvme18LinkSpeed;
  }

  // slot_front_nvme18option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme18OptionRom?: string; 
  public get slotFrontNvme18OptionRom() {
    return this.getStringAttribute('slot_front_nvme18option_rom');
  }
  public set slotFrontNvme18OptionRom(value: string) {
    this._slotFrontNvme18OptionRom = value;
  }
  public resetSlotFrontNvme18OptionRom() {
    this._slotFrontNvme18OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme18OptionRomInput() {
    return this._slotFrontNvme18OptionRom;
  }

  // slot_front_nvme19link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme19LinkSpeed?: string; 
  public get slotFrontNvme19LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme19link_speed');
  }
  public set slotFrontNvme19LinkSpeed(value: string) {
    this._slotFrontNvme19LinkSpeed = value;
  }
  public resetSlotFrontNvme19LinkSpeed() {
    this._slotFrontNvme19LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme19LinkSpeedInput() {
    return this._slotFrontNvme19LinkSpeed;
  }

  // slot_front_nvme19option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme19OptionRom?: string; 
  public get slotFrontNvme19OptionRom() {
    return this.getStringAttribute('slot_front_nvme19option_rom');
  }
  public set slotFrontNvme19OptionRom(value: string) {
    this._slotFrontNvme19OptionRom = value;
  }
  public resetSlotFrontNvme19OptionRom() {
    this._slotFrontNvme19OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme19OptionRomInput() {
    return this._slotFrontNvme19OptionRom;
  }

  // slot_front_nvme1link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme1LinkSpeed?: string; 
  public get slotFrontNvme1LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme1link_speed');
  }
  public set slotFrontNvme1LinkSpeed(value: string) {
    this._slotFrontNvme1LinkSpeed = value;
  }
  public resetSlotFrontNvme1LinkSpeed() {
    this._slotFrontNvme1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme1LinkSpeedInput() {
    return this._slotFrontNvme1LinkSpeed;
  }

  // slot_front_nvme1option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme1OptionRom?: string; 
  public get slotFrontNvme1OptionRom() {
    return this.getStringAttribute('slot_front_nvme1option_rom');
  }
  public set slotFrontNvme1OptionRom(value: string) {
    this._slotFrontNvme1OptionRom = value;
  }
  public resetSlotFrontNvme1OptionRom() {
    this._slotFrontNvme1OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme1OptionRomInput() {
    return this._slotFrontNvme1OptionRom;
  }

  // slot_front_nvme20link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme20LinkSpeed?: string; 
  public get slotFrontNvme20LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme20link_speed');
  }
  public set slotFrontNvme20LinkSpeed(value: string) {
    this._slotFrontNvme20LinkSpeed = value;
  }
  public resetSlotFrontNvme20LinkSpeed() {
    this._slotFrontNvme20LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme20LinkSpeedInput() {
    return this._slotFrontNvme20LinkSpeed;
  }

  // slot_front_nvme20option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme20OptionRom?: string; 
  public get slotFrontNvme20OptionRom() {
    return this.getStringAttribute('slot_front_nvme20option_rom');
  }
  public set slotFrontNvme20OptionRom(value: string) {
    this._slotFrontNvme20OptionRom = value;
  }
  public resetSlotFrontNvme20OptionRom() {
    this._slotFrontNvme20OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme20OptionRomInput() {
    return this._slotFrontNvme20OptionRom;
  }

  // slot_front_nvme21link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme21LinkSpeed?: string; 
  public get slotFrontNvme21LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme21link_speed');
  }
  public set slotFrontNvme21LinkSpeed(value: string) {
    this._slotFrontNvme21LinkSpeed = value;
  }
  public resetSlotFrontNvme21LinkSpeed() {
    this._slotFrontNvme21LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme21LinkSpeedInput() {
    return this._slotFrontNvme21LinkSpeed;
  }

  // slot_front_nvme21option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme21OptionRom?: string; 
  public get slotFrontNvme21OptionRom() {
    return this.getStringAttribute('slot_front_nvme21option_rom');
  }
  public set slotFrontNvme21OptionRom(value: string) {
    this._slotFrontNvme21OptionRom = value;
  }
  public resetSlotFrontNvme21OptionRom() {
    this._slotFrontNvme21OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme21OptionRomInput() {
    return this._slotFrontNvme21OptionRom;
  }

  // slot_front_nvme22link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme22LinkSpeed?: string; 
  public get slotFrontNvme22LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme22link_speed');
  }
  public set slotFrontNvme22LinkSpeed(value: string) {
    this._slotFrontNvme22LinkSpeed = value;
  }
  public resetSlotFrontNvme22LinkSpeed() {
    this._slotFrontNvme22LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme22LinkSpeedInput() {
    return this._slotFrontNvme22LinkSpeed;
  }

  // slot_front_nvme22option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme22OptionRom?: string; 
  public get slotFrontNvme22OptionRom() {
    return this.getStringAttribute('slot_front_nvme22option_rom');
  }
  public set slotFrontNvme22OptionRom(value: string) {
    this._slotFrontNvme22OptionRom = value;
  }
  public resetSlotFrontNvme22OptionRom() {
    this._slotFrontNvme22OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme22OptionRomInput() {
    return this._slotFrontNvme22OptionRom;
  }

  // slot_front_nvme23link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme23LinkSpeed?: string; 
  public get slotFrontNvme23LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme23link_speed');
  }
  public set slotFrontNvme23LinkSpeed(value: string) {
    this._slotFrontNvme23LinkSpeed = value;
  }
  public resetSlotFrontNvme23LinkSpeed() {
    this._slotFrontNvme23LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme23LinkSpeedInput() {
    return this._slotFrontNvme23LinkSpeed;
  }

  // slot_front_nvme23option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme23OptionRom?: string; 
  public get slotFrontNvme23OptionRom() {
    return this.getStringAttribute('slot_front_nvme23option_rom');
  }
  public set slotFrontNvme23OptionRom(value: string) {
    this._slotFrontNvme23OptionRom = value;
  }
  public resetSlotFrontNvme23OptionRom() {
    this._slotFrontNvme23OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme23OptionRomInput() {
    return this._slotFrontNvme23OptionRom;
  }

  // slot_front_nvme24link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme24LinkSpeed?: string; 
  public get slotFrontNvme24LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme24link_speed');
  }
  public set slotFrontNvme24LinkSpeed(value: string) {
    this._slotFrontNvme24LinkSpeed = value;
  }
  public resetSlotFrontNvme24LinkSpeed() {
    this._slotFrontNvme24LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme24LinkSpeedInput() {
    return this._slotFrontNvme24LinkSpeed;
  }

  // slot_front_nvme24option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme24OptionRom?: string; 
  public get slotFrontNvme24OptionRom() {
    return this.getStringAttribute('slot_front_nvme24option_rom');
  }
  public set slotFrontNvme24OptionRom(value: string) {
    this._slotFrontNvme24OptionRom = value;
  }
  public resetSlotFrontNvme24OptionRom() {
    this._slotFrontNvme24OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme24OptionRomInput() {
    return this._slotFrontNvme24OptionRom;
  }

  // slot_front_nvme25link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme25LinkSpeed?: string; 
  public get slotFrontNvme25LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme25link_speed');
  }
  public set slotFrontNvme25LinkSpeed(value: string) {
    this._slotFrontNvme25LinkSpeed = value;
  }
  public resetSlotFrontNvme25LinkSpeed() {
    this._slotFrontNvme25LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme25LinkSpeedInput() {
    return this._slotFrontNvme25LinkSpeed;
  }

  // slot_front_nvme25option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme25OptionRom?: string; 
  public get slotFrontNvme25OptionRom() {
    return this.getStringAttribute('slot_front_nvme25option_rom');
  }
  public set slotFrontNvme25OptionRom(value: string) {
    this._slotFrontNvme25OptionRom = value;
  }
  public resetSlotFrontNvme25OptionRom() {
    this._slotFrontNvme25OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme25OptionRomInput() {
    return this._slotFrontNvme25OptionRom;
  }

  // slot_front_nvme26link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme26LinkSpeed?: string; 
  public get slotFrontNvme26LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme26link_speed');
  }
  public set slotFrontNvme26LinkSpeed(value: string) {
    this._slotFrontNvme26LinkSpeed = value;
  }
  public resetSlotFrontNvme26LinkSpeed() {
    this._slotFrontNvme26LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme26LinkSpeedInput() {
    return this._slotFrontNvme26LinkSpeed;
  }

  // slot_front_nvme26option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme26OptionRom?: string; 
  public get slotFrontNvme26OptionRom() {
    return this.getStringAttribute('slot_front_nvme26option_rom');
  }
  public set slotFrontNvme26OptionRom(value: string) {
    this._slotFrontNvme26OptionRom = value;
  }
  public resetSlotFrontNvme26OptionRom() {
    this._slotFrontNvme26OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme26OptionRomInput() {
    return this._slotFrontNvme26OptionRom;
  }

  // slot_front_nvme27link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme27LinkSpeed?: string; 
  public get slotFrontNvme27LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme27link_speed');
  }
  public set slotFrontNvme27LinkSpeed(value: string) {
    this._slotFrontNvme27LinkSpeed = value;
  }
  public resetSlotFrontNvme27LinkSpeed() {
    this._slotFrontNvme27LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme27LinkSpeedInput() {
    return this._slotFrontNvme27LinkSpeed;
  }

  // slot_front_nvme27option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme27OptionRom?: string; 
  public get slotFrontNvme27OptionRom() {
    return this.getStringAttribute('slot_front_nvme27option_rom');
  }
  public set slotFrontNvme27OptionRom(value: string) {
    this._slotFrontNvme27OptionRom = value;
  }
  public resetSlotFrontNvme27OptionRom() {
    this._slotFrontNvme27OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme27OptionRomInput() {
    return this._slotFrontNvme27OptionRom;
  }

  // slot_front_nvme28link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme28LinkSpeed?: string; 
  public get slotFrontNvme28LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme28link_speed');
  }
  public set slotFrontNvme28LinkSpeed(value: string) {
    this._slotFrontNvme28LinkSpeed = value;
  }
  public resetSlotFrontNvme28LinkSpeed() {
    this._slotFrontNvme28LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme28LinkSpeedInput() {
    return this._slotFrontNvme28LinkSpeed;
  }

  // slot_front_nvme28option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme28OptionRom?: string; 
  public get slotFrontNvme28OptionRom() {
    return this.getStringAttribute('slot_front_nvme28option_rom');
  }
  public set slotFrontNvme28OptionRom(value: string) {
    this._slotFrontNvme28OptionRom = value;
  }
  public resetSlotFrontNvme28OptionRom() {
    this._slotFrontNvme28OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme28OptionRomInput() {
    return this._slotFrontNvme28OptionRom;
  }

  // slot_front_nvme29link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme29LinkSpeed?: string; 
  public get slotFrontNvme29LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme29link_speed');
  }
  public set slotFrontNvme29LinkSpeed(value: string) {
    this._slotFrontNvme29LinkSpeed = value;
  }
  public resetSlotFrontNvme29LinkSpeed() {
    this._slotFrontNvme29LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme29LinkSpeedInput() {
    return this._slotFrontNvme29LinkSpeed;
  }

  // slot_front_nvme29option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme29OptionRom?: string; 
  public get slotFrontNvme29OptionRom() {
    return this.getStringAttribute('slot_front_nvme29option_rom');
  }
  public set slotFrontNvme29OptionRom(value: string) {
    this._slotFrontNvme29OptionRom = value;
  }
  public resetSlotFrontNvme29OptionRom() {
    this._slotFrontNvme29OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme29OptionRomInput() {
    return this._slotFrontNvme29OptionRom;
  }

  // slot_front_nvme2link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme2LinkSpeed?: string; 
  public get slotFrontNvme2LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme2link_speed');
  }
  public set slotFrontNvme2LinkSpeed(value: string) {
    this._slotFrontNvme2LinkSpeed = value;
  }
  public resetSlotFrontNvme2LinkSpeed() {
    this._slotFrontNvme2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme2LinkSpeedInput() {
    return this._slotFrontNvme2LinkSpeed;
  }

  // slot_front_nvme2option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme2OptionRom?: string; 
  public get slotFrontNvme2OptionRom() {
    return this.getStringAttribute('slot_front_nvme2option_rom');
  }
  public set slotFrontNvme2OptionRom(value: string) {
    this._slotFrontNvme2OptionRom = value;
  }
  public resetSlotFrontNvme2OptionRom() {
    this._slotFrontNvme2OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme2OptionRomInput() {
    return this._slotFrontNvme2OptionRom;
  }

  // slot_front_nvme30link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme30LinkSpeed?: string; 
  public get slotFrontNvme30LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme30link_speed');
  }
  public set slotFrontNvme30LinkSpeed(value: string) {
    this._slotFrontNvme30LinkSpeed = value;
  }
  public resetSlotFrontNvme30LinkSpeed() {
    this._slotFrontNvme30LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme30LinkSpeedInput() {
    return this._slotFrontNvme30LinkSpeed;
  }

  // slot_front_nvme30option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme30OptionRom?: string; 
  public get slotFrontNvme30OptionRom() {
    return this.getStringAttribute('slot_front_nvme30option_rom');
  }
  public set slotFrontNvme30OptionRom(value: string) {
    this._slotFrontNvme30OptionRom = value;
  }
  public resetSlotFrontNvme30OptionRom() {
    this._slotFrontNvme30OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme30OptionRomInput() {
    return this._slotFrontNvme30OptionRom;
  }

  // slot_front_nvme31link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme31LinkSpeed?: string; 
  public get slotFrontNvme31LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme31link_speed');
  }
  public set slotFrontNvme31LinkSpeed(value: string) {
    this._slotFrontNvme31LinkSpeed = value;
  }
  public resetSlotFrontNvme31LinkSpeed() {
    this._slotFrontNvme31LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme31LinkSpeedInput() {
    return this._slotFrontNvme31LinkSpeed;
  }

  // slot_front_nvme31option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme31OptionRom?: string; 
  public get slotFrontNvme31OptionRom() {
    return this.getStringAttribute('slot_front_nvme31option_rom');
  }
  public set slotFrontNvme31OptionRom(value: string) {
    this._slotFrontNvme31OptionRom = value;
  }
  public resetSlotFrontNvme31OptionRom() {
    this._slotFrontNvme31OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme31OptionRomInput() {
    return this._slotFrontNvme31OptionRom;
  }

  // slot_front_nvme32link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme32LinkSpeed?: string; 
  public get slotFrontNvme32LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme32link_speed');
  }
  public set slotFrontNvme32LinkSpeed(value: string) {
    this._slotFrontNvme32LinkSpeed = value;
  }
  public resetSlotFrontNvme32LinkSpeed() {
    this._slotFrontNvme32LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme32LinkSpeedInput() {
    return this._slotFrontNvme32LinkSpeed;
  }

  // slot_front_nvme32option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme32OptionRom?: string; 
  public get slotFrontNvme32OptionRom() {
    return this.getStringAttribute('slot_front_nvme32option_rom');
  }
  public set slotFrontNvme32OptionRom(value: string) {
    this._slotFrontNvme32OptionRom = value;
  }
  public resetSlotFrontNvme32OptionRom() {
    this._slotFrontNvme32OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme32OptionRomInput() {
    return this._slotFrontNvme32OptionRom;
  }

  // slot_front_nvme3link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme3LinkSpeed?: string; 
  public get slotFrontNvme3LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme3link_speed');
  }
  public set slotFrontNvme3LinkSpeed(value: string) {
    this._slotFrontNvme3LinkSpeed = value;
  }
  public resetSlotFrontNvme3LinkSpeed() {
    this._slotFrontNvme3LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme3LinkSpeedInput() {
    return this._slotFrontNvme3LinkSpeed;
  }

  // slot_front_nvme3option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme3OptionRom?: string; 
  public get slotFrontNvme3OptionRom() {
    return this.getStringAttribute('slot_front_nvme3option_rom');
  }
  public set slotFrontNvme3OptionRom(value: string) {
    this._slotFrontNvme3OptionRom = value;
  }
  public resetSlotFrontNvme3OptionRom() {
    this._slotFrontNvme3OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme3OptionRomInput() {
    return this._slotFrontNvme3OptionRom;
  }

  // slot_front_nvme4link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme4LinkSpeed?: string; 
  public get slotFrontNvme4LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme4link_speed');
  }
  public set slotFrontNvme4LinkSpeed(value: string) {
    this._slotFrontNvme4LinkSpeed = value;
  }
  public resetSlotFrontNvme4LinkSpeed() {
    this._slotFrontNvme4LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme4LinkSpeedInput() {
    return this._slotFrontNvme4LinkSpeed;
  }

  // slot_front_nvme4option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme4OptionRom?: string; 
  public get slotFrontNvme4OptionRom() {
    return this.getStringAttribute('slot_front_nvme4option_rom');
  }
  public set slotFrontNvme4OptionRom(value: string) {
    this._slotFrontNvme4OptionRom = value;
  }
  public resetSlotFrontNvme4OptionRom() {
    this._slotFrontNvme4OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme4OptionRomInput() {
    return this._slotFrontNvme4OptionRom;
  }

  // slot_front_nvme5link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme5LinkSpeed?: string; 
  public get slotFrontNvme5LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme5link_speed');
  }
  public set slotFrontNvme5LinkSpeed(value: string) {
    this._slotFrontNvme5LinkSpeed = value;
  }
  public resetSlotFrontNvme5LinkSpeed() {
    this._slotFrontNvme5LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme5LinkSpeedInput() {
    return this._slotFrontNvme5LinkSpeed;
  }

  // slot_front_nvme5option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme5OptionRom?: string; 
  public get slotFrontNvme5OptionRom() {
    return this.getStringAttribute('slot_front_nvme5option_rom');
  }
  public set slotFrontNvme5OptionRom(value: string) {
    this._slotFrontNvme5OptionRom = value;
  }
  public resetSlotFrontNvme5OptionRom() {
    this._slotFrontNvme5OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme5OptionRomInput() {
    return this._slotFrontNvme5OptionRom;
  }

  // slot_front_nvme6link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme6LinkSpeed?: string; 
  public get slotFrontNvme6LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme6link_speed');
  }
  public set slotFrontNvme6LinkSpeed(value: string) {
    this._slotFrontNvme6LinkSpeed = value;
  }
  public resetSlotFrontNvme6LinkSpeed() {
    this._slotFrontNvme6LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme6LinkSpeedInput() {
    return this._slotFrontNvme6LinkSpeed;
  }

  // slot_front_nvme6option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme6OptionRom?: string; 
  public get slotFrontNvme6OptionRom() {
    return this.getStringAttribute('slot_front_nvme6option_rom');
  }
  public set slotFrontNvme6OptionRom(value: string) {
    this._slotFrontNvme6OptionRom = value;
  }
  public resetSlotFrontNvme6OptionRom() {
    this._slotFrontNvme6OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme6OptionRomInput() {
    return this._slotFrontNvme6OptionRom;
  }

  // slot_front_nvme7link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme7LinkSpeed?: string; 
  public get slotFrontNvme7LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme7link_speed');
  }
  public set slotFrontNvme7LinkSpeed(value: string) {
    this._slotFrontNvme7LinkSpeed = value;
  }
  public resetSlotFrontNvme7LinkSpeed() {
    this._slotFrontNvme7LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme7LinkSpeedInput() {
    return this._slotFrontNvme7LinkSpeed;
  }

  // slot_front_nvme7option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme7OptionRom?: string; 
  public get slotFrontNvme7OptionRom() {
    return this.getStringAttribute('slot_front_nvme7option_rom');
  }
  public set slotFrontNvme7OptionRom(value: string) {
    this._slotFrontNvme7OptionRom = value;
  }
  public resetSlotFrontNvme7OptionRom() {
    this._slotFrontNvme7OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme7OptionRomInput() {
    return this._slotFrontNvme7OptionRom;
  }

  // slot_front_nvme8link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme8LinkSpeed?: string; 
  public get slotFrontNvme8LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme8link_speed');
  }
  public set slotFrontNvme8LinkSpeed(value: string) {
    this._slotFrontNvme8LinkSpeed = value;
  }
  public resetSlotFrontNvme8LinkSpeed() {
    this._slotFrontNvme8LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme8LinkSpeedInput() {
    return this._slotFrontNvme8LinkSpeed;
  }

  // slot_front_nvme8option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme8OptionRom?: string; 
  public get slotFrontNvme8OptionRom() {
    return this.getStringAttribute('slot_front_nvme8option_rom');
  }
  public set slotFrontNvme8OptionRom(value: string) {
    this._slotFrontNvme8OptionRom = value;
  }
  public resetSlotFrontNvme8OptionRom() {
    this._slotFrontNvme8OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme8OptionRomInput() {
    return this._slotFrontNvme8OptionRom;
  }

  // slot_front_nvme9link_speed - computed: false, optional: true, required: false
  private _slotFrontNvme9LinkSpeed?: string; 
  public get slotFrontNvme9LinkSpeed() {
    return this.getStringAttribute('slot_front_nvme9link_speed');
  }
  public set slotFrontNvme9LinkSpeed(value: string) {
    this._slotFrontNvme9LinkSpeed = value;
  }
  public resetSlotFrontNvme9LinkSpeed() {
    this._slotFrontNvme9LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme9LinkSpeedInput() {
    return this._slotFrontNvme9LinkSpeed;
  }

  // slot_front_nvme9option_rom - computed: false, optional: true, required: false
  private _slotFrontNvme9OptionRom?: string; 
  public get slotFrontNvme9OptionRom() {
    return this.getStringAttribute('slot_front_nvme9option_rom');
  }
  public set slotFrontNvme9OptionRom(value: string) {
    this._slotFrontNvme9OptionRom = value;
  }
  public resetSlotFrontNvme9OptionRom() {
    this._slotFrontNvme9OptionRom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontNvme9OptionRomInput() {
    return this._slotFrontNvme9OptionRom;
  }

  // slot_front_slot5link_speed - computed: false, optional: true, required: false
  private _slotFrontSlot5LinkSpeed?: string; 
  public get slotFrontSlot5LinkSpeed() {
    return this.getStringAttribute('slot_front_slot5link_speed');
  }
  public set slotFrontSlot5LinkSpeed(value: string) {
    this._slotFrontSlot5LinkSpeed = value;
  }
  public resetSlotFrontSlot5LinkSpeed() {
    this._slotFrontSlot5LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontSlot5LinkSpeedInput() {
    return this._slotFrontSlot5LinkSpeed;
  }

  // slot_front_slot6link_speed - computed: false, optional: true, required: false
  private _slotFrontSlot6LinkSpeed?: string; 
  public get slotFrontSlot6LinkSpeed() {
    return this.getStringAttribute('slot_front_slot6link_speed');
  }
  public set slotFrontSlot6LinkSpeed(value: string) {
    this._slotFrontSlot6LinkSpeed = value;
  }
  public resetSlotFrontSlot6LinkSpeed() {
    this._slotFrontSlot6LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotFrontSlot6LinkSpeedInput() {
    return this._slotFrontSlot6LinkSpeed;
  }

  // slot_gpu1state - computed: false, optional: true, required: false
  private _slotGpu1State?: string; 
  public get slotGpu1State() {
    return this.getStringAttribute('slot_gpu1state');
  }
  public set slotGpu1State(value: string) {
    this._slotGpu1State = value;
  }
  public resetSlotGpu1State() {
    this._slotGpu1State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu1StateInput() {
    return this._slotGpu1State;
  }

  // slot_gpu2state - computed: false, optional: true, required: false
  private _slotGpu2State?: string; 
  public get slotGpu2State() {
    return this.getStringAttribute('slot_gpu2state');
  }
  public set slotGpu2State(value: string) {
    this._slotGpu2State = value;
  }
  public resetSlotGpu2State() {
    this._slotGpu2State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu2StateInput() {
    return this._slotGpu2State;
  }

  // slot_gpu3state - computed: false, optional: true, required: false
  private _slotGpu3State?: string; 
  public get slotGpu3State() {
    return this.getStringAttribute('slot_gpu3state');
  }
  public set slotGpu3State(value: string) {
    this._slotGpu3State = value;
  }
  public resetSlotGpu3State() {
    this._slotGpu3State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu3StateInput() {
    return this._slotGpu3State;
  }

  // slot_gpu4state - computed: false, optional: true, required: false
  private _slotGpu4State?: string; 
  public get slotGpu4State() {
    return this.getStringAttribute('slot_gpu4state');
  }
  public set slotGpu4State(value: string) {
    this._slotGpu4State = value;
  }
  public resetSlotGpu4State() {
    this._slotGpu4State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu4StateInput() {
    return this._slotGpu4State;
  }

  // slot_gpu5state - computed: false, optional: true, required: false
  private _slotGpu5State?: string; 
  public get slotGpu5State() {
    return this.getStringAttribute('slot_gpu5state');
  }
  public set slotGpu5State(value: string) {
    this._slotGpu5State = value;
  }
  public resetSlotGpu5State() {
    this._slotGpu5State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu5StateInput() {
    return this._slotGpu5State;
  }

  // slot_gpu6state - computed: false, optional: true, required: false
  private _slotGpu6State?: string; 
  public get slotGpu6State() {
    return this.getStringAttribute('slot_gpu6state');
  }
  public set slotGpu6State(value: string) {
    this._slotGpu6State = value;
  }
  public resetSlotGpu6State() {
    this._slotGpu6State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu6StateInput() {
    return this._slotGpu6State;
  }

  // slot_gpu7state - computed: false, optional: true, required: false
  private _slotGpu7State?: string; 
  public get slotGpu7State() {
    return this.getStringAttribute('slot_gpu7state');
  }
  public set slotGpu7State(value: string) {
    this._slotGpu7State = value;
  }
  public resetSlotGpu7State() {
    this._slotGpu7State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu7StateInput() {
    return this._slotGpu7State;
  }

  // slot_gpu8state - computed: false, optional: true, required: false
  private _slotGpu8State?: string; 
  public get slotGpu8State() {
    return this.getStringAttribute('slot_gpu8state');
  }
  public set slotGpu8State(value: string) {
    this._slotGpu8State = value;
  }
  public resetSlotGpu8State() {
    this._slotGpu8State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGpu8StateInput() {
    return this._slotGpu8State;
  }

  // slot_hba_link_speed - computed: false, optional: true, required: false
  private _slotHbaLinkSpeed?: string; 
  public get slotHbaLinkSpeed() {
    return this.getStringAttribute('slot_hba_link_speed');
  }
  public set slotHbaLinkSpeed(value: string) {
    this._slotHbaLinkSpeed = value;
  }
  public resetSlotHbaLinkSpeed() {
    this._slotHbaLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotHbaLinkSpeedInput() {
    return this._slotHbaLinkSpeed;
  }

  // slot_hba_state - computed: false, optional: true, required: false
  private _slotHbaState?: string; 
  public get slotHbaState() {
    return this.getStringAttribute('slot_hba_state');
  }
  public set slotHbaState(value: string) {
    this._slotHbaState = value;
  }
  public resetSlotHbaState() {
    this._slotHbaState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotHbaStateInput() {
    return this._slotHbaState;
  }

  // slot_lom1link - computed: false, optional: true, required: false
  private _slotLom1Link?: string; 
  public get slotLom1Link() {
    return this.getStringAttribute('slot_lom1link');
  }
  public set slotLom1Link(value: string) {
    this._slotLom1Link = value;
  }
  public resetSlotLom1Link() {
    this._slotLom1Link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotLom1LinkInput() {
    return this._slotLom1Link;
  }

  // slot_lom2link - computed: false, optional: true, required: false
  private _slotLom2Link?: string; 
  public get slotLom2Link() {
    return this.getStringAttribute('slot_lom2link');
  }
  public set slotLom2Link(value: string) {
    this._slotLom2Link = value;
  }
  public resetSlotLom2Link() {
    this._slotLom2Link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotLom2LinkInput() {
    return this._slotLom2Link;
  }

  // slot_mezz_state - computed: false, optional: true, required: false
  private _slotMezzState?: string; 
  public get slotMezzState() {
    return this.getStringAttribute('slot_mezz_state');
  }
  public set slotMezzState(value: string) {
    this._slotMezzState = value;
  }
  public resetSlotMezzState() {
    this._slotMezzState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotMezzStateInput() {
    return this._slotMezzState;
  }

  // slot_mlom_link_speed - computed: false, optional: true, required: false
  private _slotMlomLinkSpeed?: string; 
  public get slotMlomLinkSpeed() {
    return this.getStringAttribute('slot_mlom_link_speed');
  }
  public set slotMlomLinkSpeed(value: string) {
    this._slotMlomLinkSpeed = value;
  }
  public resetSlotMlomLinkSpeed() {
    this._slotMlomLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotMlomLinkSpeedInput() {
    return this._slotMlomLinkSpeed;
  }

  // slot_mlom_state - computed: false, optional: true, required: false
  private _slotMlomState?: string; 
  public get slotMlomState() {
    return this.getStringAttribute('slot_mlom_state');
  }
  public set slotMlomState(value: string) {
    this._slotMlomState = value;
  }
  public resetSlotMlomState() {
    this._slotMlomState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotMlomStateInput() {
    return this._slotMlomState;
  }

  // slot_mraid_link_speed - computed: false, optional: true, required: false
  private _slotMraidLinkSpeed?: string; 
  public get slotMraidLinkSpeed() {
    return this.getStringAttribute('slot_mraid_link_speed');
  }
  public set slotMraidLinkSpeed(value: string) {
    this._slotMraidLinkSpeed = value;
  }
  public resetSlotMraidLinkSpeed() {
    this._slotMraidLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotMraidLinkSpeedInput() {
    return this._slotMraidLinkSpeed;
  }

  // slot_mraid_state - computed: false, optional: true, required: false
  private _slotMraidState?: string; 
  public get slotMraidState() {
    return this.getStringAttribute('slot_mraid_state');
  }
  public set slotMraidState(value: string) {
    this._slotMraidState = value;
  }
  public resetSlotMraidState() {
    this._slotMraidState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotMraidStateInput() {
    return this._slotMraidState;
  }

  // slot_n10state - computed: false, optional: true, required: false
  private _slotN10State?: string; 
  public get slotN10State() {
    return this.getStringAttribute('slot_n10state');
  }
  public set slotN10State(value: string) {
    this._slotN10State = value;
  }
  public resetSlotN10State() {
    this._slotN10State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN10StateInput() {
    return this._slotN10State;
  }

  // slot_n11state - computed: false, optional: true, required: false
  private _slotN11State?: string; 
  public get slotN11State() {
    return this.getStringAttribute('slot_n11state');
  }
  public set slotN11State(value: string) {
    this._slotN11State = value;
  }
  public resetSlotN11State() {
    this._slotN11State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN11StateInput() {
    return this._slotN11State;
  }

  // slot_n12state - computed: false, optional: true, required: false
  private _slotN12State?: string; 
  public get slotN12State() {
    return this.getStringAttribute('slot_n12state');
  }
  public set slotN12State(value: string) {
    this._slotN12State = value;
  }
  public resetSlotN12State() {
    this._slotN12State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN12StateInput() {
    return this._slotN12State;
  }

  // slot_n13state - computed: false, optional: true, required: false
  private _slotN13State?: string; 
  public get slotN13State() {
    return this.getStringAttribute('slot_n13state');
  }
  public set slotN13State(value: string) {
    this._slotN13State = value;
  }
  public resetSlotN13State() {
    this._slotN13State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN13StateInput() {
    return this._slotN13State;
  }

  // slot_n14state - computed: false, optional: true, required: false
  private _slotN14State?: string; 
  public get slotN14State() {
    return this.getStringAttribute('slot_n14state');
  }
  public set slotN14State(value: string) {
    this._slotN14State = value;
  }
  public resetSlotN14State() {
    this._slotN14State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN14StateInput() {
    return this._slotN14State;
  }

  // slot_n15state - computed: false, optional: true, required: false
  private _slotN15State?: string; 
  public get slotN15State() {
    return this.getStringAttribute('slot_n15state');
  }
  public set slotN15State(value: string) {
    this._slotN15State = value;
  }
  public resetSlotN15State() {
    this._slotN15State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN15StateInput() {
    return this._slotN15State;
  }

  // slot_n16state - computed: false, optional: true, required: false
  private _slotN16State?: string; 
  public get slotN16State() {
    return this.getStringAttribute('slot_n16state');
  }
  public set slotN16State(value: string) {
    this._slotN16State = value;
  }
  public resetSlotN16State() {
    this._slotN16State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN16StateInput() {
    return this._slotN16State;
  }

  // slot_n17state - computed: false, optional: true, required: false
  private _slotN17State?: string; 
  public get slotN17State() {
    return this.getStringAttribute('slot_n17state');
  }
  public set slotN17State(value: string) {
    this._slotN17State = value;
  }
  public resetSlotN17State() {
    this._slotN17State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN17StateInput() {
    return this._slotN17State;
  }

  // slot_n18state - computed: false, optional: true, required: false
  private _slotN18State?: string; 
  public get slotN18State() {
    return this.getStringAttribute('slot_n18state');
  }
  public set slotN18State(value: string) {
    this._slotN18State = value;
  }
  public resetSlotN18State() {
    this._slotN18State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN18StateInput() {
    return this._slotN18State;
  }

  // slot_n19state - computed: false, optional: true, required: false
  private _slotN19State?: string; 
  public get slotN19State() {
    return this.getStringAttribute('slot_n19state');
  }
  public set slotN19State(value: string) {
    this._slotN19State = value;
  }
  public resetSlotN19State() {
    this._slotN19State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN19StateInput() {
    return this._slotN19State;
  }

  // slot_n1state - computed: false, optional: true, required: false
  private _slotN1State?: string; 
  public get slotN1State() {
    return this.getStringAttribute('slot_n1state');
  }
  public set slotN1State(value: string) {
    this._slotN1State = value;
  }
  public resetSlotN1State() {
    this._slotN1State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN1StateInput() {
    return this._slotN1State;
  }

  // slot_n20state - computed: false, optional: true, required: false
  private _slotN20State?: string; 
  public get slotN20State() {
    return this.getStringAttribute('slot_n20state');
  }
  public set slotN20State(value: string) {
    this._slotN20State = value;
  }
  public resetSlotN20State() {
    this._slotN20State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN20StateInput() {
    return this._slotN20State;
  }

  // slot_n21state - computed: false, optional: true, required: false
  private _slotN21State?: string; 
  public get slotN21State() {
    return this.getStringAttribute('slot_n21state');
  }
  public set slotN21State(value: string) {
    this._slotN21State = value;
  }
  public resetSlotN21State() {
    this._slotN21State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN21StateInput() {
    return this._slotN21State;
  }

  // slot_n22state - computed: false, optional: true, required: false
  private _slotN22State?: string; 
  public get slotN22State() {
    return this.getStringAttribute('slot_n22state');
  }
  public set slotN22State(value: string) {
    this._slotN22State = value;
  }
  public resetSlotN22State() {
    this._slotN22State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN22StateInput() {
    return this._slotN22State;
  }

  // slot_n23state - computed: false, optional: true, required: false
  private _slotN23State?: string; 
  public get slotN23State() {
    return this.getStringAttribute('slot_n23state');
  }
  public set slotN23State(value: string) {
    this._slotN23State = value;
  }
  public resetSlotN23State() {
    this._slotN23State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN23StateInput() {
    return this._slotN23State;
  }

  // slot_n24state - computed: false, optional: true, required: false
  private _slotN24State?: string; 
  public get slotN24State() {
    return this.getStringAttribute('slot_n24state');
  }
  public set slotN24State(value: string) {
    this._slotN24State = value;
  }
  public resetSlotN24State() {
    this._slotN24State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN24StateInput() {
    return this._slotN24State;
  }

  // slot_n2state - computed: false, optional: true, required: false
  private _slotN2State?: string; 
  public get slotN2State() {
    return this.getStringAttribute('slot_n2state');
  }
  public set slotN2State(value: string) {
    this._slotN2State = value;
  }
  public resetSlotN2State() {
    this._slotN2State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN2StateInput() {
    return this._slotN2State;
  }

  // slot_n3state - computed: false, optional: true, required: false
  private _slotN3State?: string; 
  public get slotN3State() {
    return this.getStringAttribute('slot_n3state');
  }
  public set slotN3State(value: string) {
    this._slotN3State = value;
  }
  public resetSlotN3State() {
    this._slotN3State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN3StateInput() {
    return this._slotN3State;
  }

  // slot_n4state - computed: false, optional: true, required: false
  private _slotN4State?: string; 
  public get slotN4State() {
    return this.getStringAttribute('slot_n4state');
  }
  public set slotN4State(value: string) {
    this._slotN4State = value;
  }
  public resetSlotN4State() {
    this._slotN4State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN4StateInput() {
    return this._slotN4State;
  }

  // slot_n5state - computed: false, optional: true, required: false
  private _slotN5State?: string; 
  public get slotN5State() {
    return this.getStringAttribute('slot_n5state');
  }
  public set slotN5State(value: string) {
    this._slotN5State = value;
  }
  public resetSlotN5State() {
    this._slotN5State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN5StateInput() {
    return this._slotN5State;
  }

  // slot_n6state - computed: false, optional: true, required: false
  private _slotN6State?: string; 
  public get slotN6State() {
    return this.getStringAttribute('slot_n6state');
  }
  public set slotN6State(value: string) {
    this._slotN6State = value;
  }
  public resetSlotN6State() {
    this._slotN6State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN6StateInput() {
    return this._slotN6State;
  }

  // slot_n7state - computed: false, optional: true, required: false
  private _slotN7State?: string; 
  public get slotN7State() {
    return this.getStringAttribute('slot_n7state');
  }
  public set slotN7State(value: string) {
    this._slotN7State = value;
  }
  public resetSlotN7State() {
    this._slotN7State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN7StateInput() {
    return this._slotN7State;
  }

  // slot_n8state - computed: false, optional: true, required: false
  private _slotN8State?: string; 
  public get slotN8State() {
    return this.getStringAttribute('slot_n8state');
  }
  public set slotN8State(value: string) {
    this._slotN8State = value;
  }
  public resetSlotN8State() {
    this._slotN8State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN8StateInput() {
    return this._slotN8State;
  }

  // slot_n9state - computed: false, optional: true, required: false
  private _slotN9State?: string; 
  public get slotN9State() {
    return this.getStringAttribute('slot_n9state');
  }
  public set slotN9State(value: string) {
    this._slotN9State = value;
  }
  public resetSlotN9State() {
    this._slotN9State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotN9StateInput() {
    return this._slotN9State;
  }

  // slot_raid_link_speed - computed: false, optional: true, required: false
  private _slotRaidLinkSpeed?: string; 
  public get slotRaidLinkSpeed() {
    return this.getStringAttribute('slot_raid_link_speed');
  }
  public set slotRaidLinkSpeed(value: string) {
    this._slotRaidLinkSpeed = value;
  }
  public resetSlotRaidLinkSpeed() {
    this._slotRaidLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRaidLinkSpeedInput() {
    return this._slotRaidLinkSpeed;
  }

  // slot_raid_state - computed: false, optional: true, required: false
  private _slotRaidState?: string; 
  public get slotRaidState() {
    return this.getStringAttribute('slot_raid_state');
  }
  public set slotRaidState(value: string) {
    this._slotRaidState = value;
  }
  public resetSlotRaidState() {
    this._slotRaidState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRaidStateInput() {
    return this._slotRaidState;
  }

  // slot_rear_nvme1link_speed - computed: false, optional: true, required: false
  private _slotRearNvme1LinkSpeed?: string; 
  public get slotRearNvme1LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme1link_speed');
  }
  public set slotRearNvme1LinkSpeed(value: string) {
    this._slotRearNvme1LinkSpeed = value;
  }
  public resetSlotRearNvme1LinkSpeed() {
    this._slotRearNvme1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme1LinkSpeedInput() {
    return this._slotRearNvme1LinkSpeed;
  }

  // slot_rear_nvme1state - computed: false, optional: true, required: false
  private _slotRearNvme1State?: string; 
  public get slotRearNvme1State() {
    return this.getStringAttribute('slot_rear_nvme1state');
  }
  public set slotRearNvme1State(value: string) {
    this._slotRearNvme1State = value;
  }
  public resetSlotRearNvme1State() {
    this._slotRearNvme1State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme1StateInput() {
    return this._slotRearNvme1State;
  }

  // slot_rear_nvme2link_speed - computed: false, optional: true, required: false
  private _slotRearNvme2LinkSpeed?: string; 
  public get slotRearNvme2LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme2link_speed');
  }
  public set slotRearNvme2LinkSpeed(value: string) {
    this._slotRearNvme2LinkSpeed = value;
  }
  public resetSlotRearNvme2LinkSpeed() {
    this._slotRearNvme2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme2LinkSpeedInput() {
    return this._slotRearNvme2LinkSpeed;
  }

  // slot_rear_nvme2state - computed: false, optional: true, required: false
  private _slotRearNvme2State?: string; 
  public get slotRearNvme2State() {
    return this.getStringAttribute('slot_rear_nvme2state');
  }
  public set slotRearNvme2State(value: string) {
    this._slotRearNvme2State = value;
  }
  public resetSlotRearNvme2State() {
    this._slotRearNvme2State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme2StateInput() {
    return this._slotRearNvme2State;
  }

  // slot_rear_nvme3link_speed - computed: false, optional: true, required: false
  private _slotRearNvme3LinkSpeed?: string; 
  public get slotRearNvme3LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme3link_speed');
  }
  public set slotRearNvme3LinkSpeed(value: string) {
    this._slotRearNvme3LinkSpeed = value;
  }
  public resetSlotRearNvme3LinkSpeed() {
    this._slotRearNvme3LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme3LinkSpeedInput() {
    return this._slotRearNvme3LinkSpeed;
  }

  // slot_rear_nvme3state - computed: false, optional: true, required: false
  private _slotRearNvme3State?: string; 
  public get slotRearNvme3State() {
    return this.getStringAttribute('slot_rear_nvme3state');
  }
  public set slotRearNvme3State(value: string) {
    this._slotRearNvme3State = value;
  }
  public resetSlotRearNvme3State() {
    this._slotRearNvme3State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme3StateInput() {
    return this._slotRearNvme3State;
  }

  // slot_rear_nvme4link_speed - computed: false, optional: true, required: false
  private _slotRearNvme4LinkSpeed?: string; 
  public get slotRearNvme4LinkSpeed() {
    return this.getStringAttribute('slot_rear_nvme4link_speed');
  }
  public set slotRearNvme4LinkSpeed(value: string) {
    this._slotRearNvme4LinkSpeed = value;
  }
  public resetSlotRearNvme4LinkSpeed() {
    this._slotRearNvme4LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme4LinkSpeedInput() {
    return this._slotRearNvme4LinkSpeed;
  }

  // slot_rear_nvme4state - computed: false, optional: true, required: false
  private _slotRearNvme4State?: string; 
  public get slotRearNvme4State() {
    return this.getStringAttribute('slot_rear_nvme4state');
  }
  public set slotRearNvme4State(value: string) {
    this._slotRearNvme4State = value;
  }
  public resetSlotRearNvme4State() {
    this._slotRearNvme4State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme4StateInput() {
    return this._slotRearNvme4State;
  }

  // slot_rear_nvme5state - computed: false, optional: true, required: false
  private _slotRearNvme5State?: string; 
  public get slotRearNvme5State() {
    return this.getStringAttribute('slot_rear_nvme5state');
  }
  public set slotRearNvme5State(value: string) {
    this._slotRearNvme5State = value;
  }
  public resetSlotRearNvme5State() {
    this._slotRearNvme5State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme5StateInput() {
    return this._slotRearNvme5State;
  }

  // slot_rear_nvme6state - computed: false, optional: true, required: false
  private _slotRearNvme6State?: string; 
  public get slotRearNvme6State() {
    return this.getStringAttribute('slot_rear_nvme6state');
  }
  public set slotRearNvme6State(value: string) {
    this._slotRearNvme6State = value;
  }
  public resetSlotRearNvme6State() {
    this._slotRearNvme6State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme6StateInput() {
    return this._slotRearNvme6State;
  }

  // slot_rear_nvme7state - computed: false, optional: true, required: false
  private _slotRearNvme7State?: string; 
  public get slotRearNvme7State() {
    return this.getStringAttribute('slot_rear_nvme7state');
  }
  public set slotRearNvme7State(value: string) {
    this._slotRearNvme7State = value;
  }
  public resetSlotRearNvme7State() {
    this._slotRearNvme7State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme7StateInput() {
    return this._slotRearNvme7State;
  }

  // slot_rear_nvme8state - computed: false, optional: true, required: false
  private _slotRearNvme8State?: string; 
  public get slotRearNvme8State() {
    return this.getStringAttribute('slot_rear_nvme8state');
  }
  public set slotRearNvme8State(value: string) {
    this._slotRearNvme8State = value;
  }
  public resetSlotRearNvme8State() {
    this._slotRearNvme8State = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRearNvme8StateInput() {
    return this._slotRearNvme8State;
  }

  // slot_riser1link_speed - computed: false, optional: true, required: false
  private _slotRiser1LinkSpeed?: string; 
  public get slotRiser1LinkSpeed() {
    return this.getStringAttribute('slot_riser1link_speed');
  }
  public set slotRiser1LinkSpeed(value: string) {
    this._slotRiser1LinkSpeed = value;
  }
  public resetSlotRiser1LinkSpeed() {
    this._slotRiser1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser1LinkSpeedInput() {
    return this._slotRiser1LinkSpeed;
  }

  // slot_riser1slot1link_speed - computed: false, optional: true, required: false
  private _slotRiser1Slot1LinkSpeed?: string; 
  public get slotRiser1Slot1LinkSpeed() {
    return this.getStringAttribute('slot_riser1slot1link_speed');
  }
  public set slotRiser1Slot1LinkSpeed(value: string) {
    this._slotRiser1Slot1LinkSpeed = value;
  }
  public resetSlotRiser1Slot1LinkSpeed() {
    this._slotRiser1Slot1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser1Slot1LinkSpeedInput() {
    return this._slotRiser1Slot1LinkSpeed;
  }

  // slot_riser1slot2link_speed - computed: false, optional: true, required: false
  private _slotRiser1Slot2LinkSpeed?: string; 
  public get slotRiser1Slot2LinkSpeed() {
    return this.getStringAttribute('slot_riser1slot2link_speed');
  }
  public set slotRiser1Slot2LinkSpeed(value: string) {
    this._slotRiser1Slot2LinkSpeed = value;
  }
  public resetSlotRiser1Slot2LinkSpeed() {
    this._slotRiser1Slot2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser1Slot2LinkSpeedInput() {
    return this._slotRiser1Slot2LinkSpeed;
  }

  // slot_riser1slot3link_speed - computed: false, optional: true, required: false
  private _slotRiser1Slot3LinkSpeed?: string; 
  public get slotRiser1Slot3LinkSpeed() {
    return this.getStringAttribute('slot_riser1slot3link_speed');
  }
  public set slotRiser1Slot3LinkSpeed(value: string) {
    this._slotRiser1Slot3LinkSpeed = value;
  }
  public resetSlotRiser1Slot3LinkSpeed() {
    this._slotRiser1Slot3LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser1Slot3LinkSpeedInput() {
    return this._slotRiser1Slot3LinkSpeed;
  }

  // slot_riser2link_speed - computed: false, optional: true, required: false
  private _slotRiser2LinkSpeed?: string; 
  public get slotRiser2LinkSpeed() {
    return this.getStringAttribute('slot_riser2link_speed');
  }
  public set slotRiser2LinkSpeed(value: string) {
    this._slotRiser2LinkSpeed = value;
  }
  public resetSlotRiser2LinkSpeed() {
    this._slotRiser2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser2LinkSpeedInput() {
    return this._slotRiser2LinkSpeed;
  }

  // slot_riser2slot4link_speed - computed: false, optional: true, required: false
  private _slotRiser2Slot4LinkSpeed?: string; 
  public get slotRiser2Slot4LinkSpeed() {
    return this.getStringAttribute('slot_riser2slot4link_speed');
  }
  public set slotRiser2Slot4LinkSpeed(value: string) {
    this._slotRiser2Slot4LinkSpeed = value;
  }
  public resetSlotRiser2Slot4LinkSpeed() {
    this._slotRiser2Slot4LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser2Slot4LinkSpeedInput() {
    return this._slotRiser2Slot4LinkSpeed;
  }

  // slot_riser2slot5link_speed - computed: false, optional: true, required: false
  private _slotRiser2Slot5LinkSpeed?: string; 
  public get slotRiser2Slot5LinkSpeed() {
    return this.getStringAttribute('slot_riser2slot5link_speed');
  }
  public set slotRiser2Slot5LinkSpeed(value: string) {
    this._slotRiser2Slot5LinkSpeed = value;
  }
  public resetSlotRiser2Slot5LinkSpeed() {
    this._slotRiser2Slot5LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser2Slot5LinkSpeedInput() {
    return this._slotRiser2Slot5LinkSpeed;
  }

  // slot_riser2slot6link_speed - computed: false, optional: true, required: false
  private _slotRiser2Slot6LinkSpeed?: string; 
  public get slotRiser2Slot6LinkSpeed() {
    return this.getStringAttribute('slot_riser2slot6link_speed');
  }
  public set slotRiser2Slot6LinkSpeed(value: string) {
    this._slotRiser2Slot6LinkSpeed = value;
  }
  public resetSlotRiser2Slot6LinkSpeed() {
    this._slotRiser2Slot6LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotRiser2Slot6LinkSpeedInput() {
    return this._slotRiser2Slot6LinkSpeed;
  }

  // slot_sas_state - computed: false, optional: true, required: false
  private _slotSasState?: string; 
  public get slotSasState() {
    return this.getStringAttribute('slot_sas_state');
  }
  public set slotSasState(value: string) {
    this._slotSasState = value;
  }
  public resetSlotSasState() {
    this._slotSasState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotSasStateInput() {
    return this._slotSasState;
  }

  // slot_ssd_slot1link_speed - computed: false, optional: true, required: false
  private _slotSsdSlot1LinkSpeed?: string; 
  public get slotSsdSlot1LinkSpeed() {
    return this.getStringAttribute('slot_ssd_slot1link_speed');
  }
  public set slotSsdSlot1LinkSpeed(value: string) {
    this._slotSsdSlot1LinkSpeed = value;
  }
  public resetSlotSsdSlot1LinkSpeed() {
    this._slotSsdSlot1LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotSsdSlot1LinkSpeedInput() {
    return this._slotSsdSlot1LinkSpeed;
  }

  // slot_ssd_slot2link_speed - computed: false, optional: true, required: false
  private _slotSsdSlot2LinkSpeed?: string; 
  public get slotSsdSlot2LinkSpeed() {
    return this.getStringAttribute('slot_ssd_slot2link_speed');
  }
  public set slotSsdSlot2LinkSpeed(value: string) {
    this._slotSsdSlot2LinkSpeed = value;
  }
  public resetSlotSsdSlot2LinkSpeed() {
    this._slotSsdSlot2LinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotSsdSlot2LinkSpeedInput() {
    return this._slotSsdSlot2LinkSpeed;
  }

  // smee - computed: false, optional: true, required: false
  private _smee?: string; 
  public get smee() {
    return this.getStringAttribute('smee');
  }
  public set smee(value: string) {
    this._smee = value;
  }
  public resetSmee() {
    this._smee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smeeInput() {
    return this._smee;
  }

  // smt_mode - computed: false, optional: true, required: false
  private _smtMode?: string; 
  public get smtMode() {
    return this.getStringAttribute('smt_mode');
  }
  public set smtMode(value: string) {
    this._smtMode = value;
  }
  public resetSmtMode() {
    this._smtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtModeInput() {
    return this._smtMode;
  }

  // snc - computed: false, optional: true, required: false
  private _snc?: string; 
  public get snc() {
    return this.getStringAttribute('snc');
  }
  public set snc(value: string) {
    this._snc = value;
  }
  public resetSnc() {
    this._snc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sncInput() {
    return this._snc;
  }

  // snoopy_mode_for2lm - computed: false, optional: true, required: false
  private _snoopyModeFor2Lm?: string; 
  public get snoopyModeFor2Lm() {
    return this.getStringAttribute('snoopy_mode_for2lm');
  }
  public set snoopyModeFor2Lm(value: string) {
    this._snoopyModeFor2Lm = value;
  }
  public resetSnoopyModeFor2Lm() {
    this._snoopyModeFor2Lm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopyModeFor2LmInput() {
    return this._snoopyModeFor2Lm;
  }

  // snoopy_mode_for_ad - computed: false, optional: true, required: false
  private _snoopyModeForAd?: string; 
  public get snoopyModeForAd() {
    return this.getStringAttribute('snoopy_mode_for_ad');
  }
  public set snoopyModeForAd(value: string) {
    this._snoopyModeForAd = value;
  }
  public resetSnoopyModeForAd() {
    this._snoopyModeForAd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopyModeForAdInput() {
    return this._snoopyModeForAd;
  }

  // sparing_mode - computed: false, optional: true, required: false
  private _sparingMode?: string; 
  public get sparingMode() {
    return this.getStringAttribute('sparing_mode');
  }
  public set sparingMode(value: string) {
    this._sparingMode = value;
  }
  public resetSparingMode() {
    this._sparingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparingModeInput() {
    return this._sparingMode;
  }

  // sr_iov - computed: false, optional: true, required: false
  private _srIov?: string; 
  public get srIov() {
    return this.getStringAttribute('sr_iov');
  }
  public set srIov(value: string) {
    this._srIov = value;
  }
  public resetSrIov() {
    this._srIov = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srIovInput() {
    return this._srIov;
  }

  // streamer_prefetch - computed: false, optional: true, required: false
  private _streamerPrefetch?: string; 
  public get streamerPrefetch() {
    return this.getStringAttribute('streamer_prefetch');
  }
  public set streamerPrefetch(value: string) {
    this._streamerPrefetch = value;
  }
  public resetStreamerPrefetch() {
    this._streamerPrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamerPrefetchInput() {
    return this._streamerPrefetch;
  }

  // svm_mode - computed: false, optional: true, required: false
  private _svmMode?: string; 
  public get svmMode() {
    return this.getStringAttribute('svm_mode');
  }
  public set svmMode(value: string) {
    this._svmMode = value;
  }
  public resetSvmMode() {
    this._svmMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmModeInput() {
    return this._svmMode;
  }

  // terminal_type - computed: false, optional: true, required: false
  private _terminalType?: string; 
  public get terminalType() {
    return this.getStringAttribute('terminal_type');
  }
  public set terminalType(value: string) {
    this._terminalType = value;
  }
  public resetTerminalType() {
    this._terminalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalTypeInput() {
    return this._terminalType;
  }

  // tpm_control - computed: false, optional: true, required: false
  private _tpmControl?: string; 
  public get tpmControl() {
    return this.getStringAttribute('tpm_control');
  }
  public set tpmControl(value: string) {
    this._tpmControl = value;
  }
  public resetTpmControl() {
    this._tpmControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmControlInput() {
    return this._tpmControl;
  }

  // tpm_pending_operation - computed: false, optional: true, required: false
  private _tpmPendingOperation?: string; 
  public get tpmPendingOperation() {
    return this.getStringAttribute('tpm_pending_operation');
  }
  public set tpmPendingOperation(value: string) {
    this._tpmPendingOperation = value;
  }
  public resetTpmPendingOperation() {
    this._tpmPendingOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmPendingOperationInput() {
    return this._tpmPendingOperation;
  }

  // tpm_ppi_required - computed: false, optional: true, required: false
  private _tpmPpiRequired?: string; 
  public get tpmPpiRequired() {
    return this.getStringAttribute('tpm_ppi_required');
  }
  public set tpmPpiRequired(value: string) {
    this._tpmPpiRequired = value;
  }
  public resetTpmPpiRequired() {
    this._tpmPpiRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmPpiRequiredInput() {
    return this._tpmPpiRequired;
  }

  // tpm_support - computed: false, optional: true, required: false
  private _tpmSupport?: string; 
  public get tpmSupport() {
    return this.getStringAttribute('tpm_support');
  }
  public set tpmSupport(value: string) {
    this._tpmSupport = value;
  }
  public resetTpmSupport() {
    this._tpmSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmSupportInput() {
    return this._tpmSupport;
  }

  // tsme - computed: false, optional: true, required: false
  private _tsme?: string; 
  public get tsme() {
    return this.getStringAttribute('tsme');
  }
  public set tsme(value: string) {
    this._tsme = value;
  }
  public resetTsme() {
    this._tsme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsmeInput() {
    return this._tsme;
  }

  // txt_support - computed: false, optional: true, required: false
  private _txtSupport?: string; 
  public get txtSupport() {
    return this.getStringAttribute('txt_support');
  }
  public set txtSupport(value: string) {
    this._txtSupport = value;
  }
  public resetTxtSupport() {
    this._txtSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtSupportInput() {
    return this._txtSupport;
  }

  // ucsm_boot_order_rule - computed: false, optional: true, required: false
  private _ucsmBootOrderRule?: string; 
  public get ucsmBootOrderRule() {
    return this.getStringAttribute('ucsm_boot_order_rule');
  }
  public set ucsmBootOrderRule(value: string) {
    this._ucsmBootOrderRule = value;
  }
  public resetUcsmBootOrderRule() {
    this._ucsmBootOrderRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucsmBootOrderRuleInput() {
    return this._ucsmBootOrderRule;
  }

  // uefi_mem_map_sp_flag_en - computed: false, optional: true, required: false
  private _uefiMemMapSpFlagEn?: string; 
  public get uefiMemMapSpFlagEn() {
    return this.getStringAttribute('uefi_mem_map_sp_flag_en');
  }
  public set uefiMemMapSpFlagEn(value: string) {
    this._uefiMemMapSpFlagEn = value;
  }
  public resetUefiMemMapSpFlagEn() {
    this._uefiMemMapSpFlagEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiMemMapSpFlagEnInput() {
    return this._uefiMemMapSpFlagEn;
  }

  // ufs_disable - computed: false, optional: true, required: false
  private _ufsDisable?: string; 
  public get ufsDisable() {
    return this.getStringAttribute('ufs_disable');
  }
  public set ufsDisable(value: string) {
    this._ufsDisable = value;
  }
  public resetUfsDisable() {
    this._ufsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ufsDisableInput() {
    return this._ufsDisable;
  }

  // uma_based_clustering - computed: false, optional: true, required: false
  private _umaBasedClustering?: string; 
  public get umaBasedClustering() {
    return this.getStringAttribute('uma_based_clustering');
  }
  public set umaBasedClustering(value: string) {
    this._umaBasedClustering = value;
  }
  public resetUmaBasedClustering() {
    this._umaBasedClustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umaBasedClusteringInput() {
    return this._umaBasedClustering;
  }

  // upi_link_enablement - computed: false, optional: true, required: false
  private _upiLinkEnablement?: string; 
  public get upiLinkEnablement() {
    return this.getStringAttribute('upi_link_enablement');
  }
  public set upiLinkEnablement(value: string) {
    this._upiLinkEnablement = value;
  }
  public resetUpiLinkEnablement() {
    this._upiLinkEnablement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upiLinkEnablementInput() {
    return this._upiLinkEnablement;
  }

  // upi_power_management - computed: false, optional: true, required: false
  private _upiPowerManagement?: string; 
  public get upiPowerManagement() {
    return this.getStringAttribute('upi_power_management');
  }
  public set upiPowerManagement(value: string) {
    this._upiPowerManagement = value;
  }
  public resetUpiPowerManagement() {
    this._upiPowerManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upiPowerManagementInput() {
    return this._upiPowerManagement;
  }

  // usb_emul6064 - computed: false, optional: true, required: false
  private _usbEmul6064?: string; 
  public get usbEmul6064() {
    return this.getStringAttribute('usb_emul6064');
  }
  public set usbEmul6064(value: string) {
    this._usbEmul6064 = value;
  }
  public resetUsbEmul6064() {
    this._usbEmul6064 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbEmul6064Input() {
    return this._usbEmul6064;
  }

  // usb_port_front - computed: false, optional: true, required: false
  private _usbPortFront?: string; 
  public get usbPortFront() {
    return this.getStringAttribute('usb_port_front');
  }
  public set usbPortFront(value: string) {
    this._usbPortFront = value;
  }
  public resetUsbPortFront() {
    this._usbPortFront = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPortFrontInput() {
    return this._usbPortFront;
  }

  // usb_port_internal - computed: false, optional: true, required: false
  private _usbPortInternal?: string; 
  public get usbPortInternal() {
    return this.getStringAttribute('usb_port_internal');
  }
  public set usbPortInternal(value: string) {
    this._usbPortInternal = value;
  }
  public resetUsbPortInternal() {
    this._usbPortInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPortInternalInput() {
    return this._usbPortInternal;
  }

  // usb_port_kvm - computed: false, optional: true, required: false
  private _usbPortKvm?: string; 
  public get usbPortKvm() {
    return this.getStringAttribute('usb_port_kvm');
  }
  public set usbPortKvm(value: string) {
    this._usbPortKvm = value;
  }
  public resetUsbPortKvm() {
    this._usbPortKvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPortKvmInput() {
    return this._usbPortKvm;
  }

  // usb_port_rear - computed: false, optional: true, required: false
  private _usbPortRear?: string; 
  public get usbPortRear() {
    return this.getStringAttribute('usb_port_rear');
  }
  public set usbPortRear(value: string) {
    this._usbPortRear = value;
  }
  public resetUsbPortRear() {
    this._usbPortRear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPortRearInput() {
    return this._usbPortRear;
  }

  // usb_port_sd_card - computed: false, optional: true, required: false
  private _usbPortSdCard?: string; 
  public get usbPortSdCard() {
    return this.getStringAttribute('usb_port_sd_card');
  }
  public set usbPortSdCard(value: string) {
    this._usbPortSdCard = value;
  }
  public resetUsbPortSdCard() {
    this._usbPortSdCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPortSdCardInput() {
    return this._usbPortSdCard;
  }

  // usb_port_vmedia - computed: false, optional: true, required: false
  private _usbPortVmedia?: string; 
  public get usbPortVmedia() {
    return this.getStringAttribute('usb_port_vmedia');
  }
  public set usbPortVmedia(value: string) {
    this._usbPortVmedia = value;
  }
  public resetUsbPortVmedia() {
    this._usbPortVmedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPortVmediaInput() {
    return this._usbPortVmedia;
  }

  // usb_xhci_support - computed: false, optional: true, required: false
  private _usbXhciSupport?: string; 
  public get usbXhciSupport() {
    return this.getStringAttribute('usb_xhci_support');
  }
  public set usbXhciSupport(value: string) {
    this._usbXhciSupport = value;
  }
  public resetUsbXhciSupport() {
    this._usbXhciSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbXhciSupportInput() {
    return this._usbXhciSupport;
  }

  // vga_priority - computed: false, optional: true, required: false
  private _vgaPriority?: string; 
  public get vgaPriority() {
    return this.getStringAttribute('vga_priority');
  }
  public set vgaPriority(value: string) {
    this._vgaPriority = value;
  }
  public resetVgaPriority() {
    this._vgaPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgaPriorityInput() {
    return this._vgaPriority;
  }

  // virtual_numa - computed: false, optional: true, required: false
  private _virtualNuma?: string; 
  public get virtualNuma() {
    return this.getStringAttribute('virtual_numa');
  }
  public set virtualNuma(value: string) {
    this._virtualNuma = value;
  }
  public resetVirtualNuma() {
    this._virtualNuma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNumaInput() {
    return this._virtualNuma;
  }

  // vmd_enable - computed: false, optional: true, required: false
  private _vmdEnable?: string; 
  public get vmdEnable() {
    return this.getStringAttribute('vmd_enable');
  }
  public set vmdEnable(value: string) {
    this._vmdEnable = value;
  }
  public resetVmdEnable() {
    this._vmdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmdEnableInput() {
    return this._vmdEnable;
  }

  // vol_memory_mode - computed: false, optional: true, required: false
  private _volMemoryMode?: string; 
  public get volMemoryMode() {
    return this.getStringAttribute('vol_memory_mode');
  }
  public set volMemoryMode(value: string) {
    this._volMemoryMode = value;
  }
  public resetVolMemoryMode() {
    this._volMemoryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volMemoryModeInput() {
    return this._volMemoryMode;
  }

  // work_load_config - computed: false, optional: true, required: false
  private _workLoadConfig?: string; 
  public get workLoadConfig() {
    return this.getStringAttribute('work_load_config');
  }
  public set workLoadConfig(value: string) {
    this._workLoadConfig = value;
  }
  public resetWorkLoadConfig() {
    this._workLoadConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workLoadConfigInput() {
    return this._workLoadConfig;
  }

  // x2apic_opt_out - computed: false, optional: true, required: false
  private _x2ApicOptOut?: string; 
  public get x2ApicOptOut() {
    return this.getStringAttribute('x2apic_opt_out');
  }
  public set x2ApicOptOut(value: string) {
    this._x2ApicOptOut = value;
  }
  public resetX2ApicOptOut() {
    this._x2ApicOptOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x2ApicOptOutInput() {
    return this._x2ApicOptOut;
  }

  // xpt_prefetch - computed: false, optional: true, required: false
  private _xptPrefetch?: string; 
  public get xptPrefetch() {
    return this.getStringAttribute('xpt_prefetch');
  }
  public set xptPrefetch(value: string) {
    this._xptPrefetch = value;
  }
  public resetXptPrefetch() {
    this._xptPrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xptPrefetchInput() {
    return this._xptPrefetch;
  }

  // xpt_remote_prefetch - computed: false, optional: true, required: false
  private _xptRemotePrefetch?: string; 
  public get xptRemotePrefetch() {
    return this.getStringAttribute('xpt_remote_prefetch');
  }
  public set xptRemotePrefetch(value: string) {
    this._xptRemotePrefetch = value;
  }
  public resetXptRemotePrefetch() {
    this._xptRemotePrefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xptRemotePrefetchInput() {
    return this._xptRemotePrefetch;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightBiosPolicyAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightBiosPolicyAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new DataIntersightBiosPolicyOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: DataIntersightBiosPolicyOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightBiosPolicyParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightBiosPolicyParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightBiosPolicyPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightBiosPolicyPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles = new DataIntersightBiosPolicyProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
  public putProfiles(value: DataIntersightBiosPolicyProfiles[] | cdktf.IResolvable) {
    this._profiles.internalValue = value;
  }
  public resetProfiles() {
    this._profiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightBiosPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightBiosPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightBiosPolicyVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightBiosPolicyVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      acpi_srat_sp_flag_en: cdktf.stringToTerraform(this._acpiSratSpFlagEn),
      acs_control_gpu1state: cdktf.stringToTerraform(this._acsControlGpu1State),
      acs_control_gpu2state: cdktf.stringToTerraform(this._acsControlGpu2State),
      acs_control_gpu3state: cdktf.stringToTerraform(this._acsControlGpu3State),
      acs_control_gpu4state: cdktf.stringToTerraform(this._acsControlGpu4State),
      acs_control_gpu5state: cdktf.stringToTerraform(this._acsControlGpu5State),
      acs_control_gpu6state: cdktf.stringToTerraform(this._acsControlGpu6State),
      acs_control_gpu7state: cdktf.stringToTerraform(this._acsControlGpu7State),
      acs_control_gpu8state: cdktf.stringToTerraform(this._acsControlGpu8State),
      acs_control_slot11state: cdktf.stringToTerraform(this._acsControlSlot11State),
      acs_control_slot12state: cdktf.stringToTerraform(this._acsControlSlot12State),
      acs_control_slot13state: cdktf.stringToTerraform(this._acsControlSlot13State),
      acs_control_slot14state: cdktf.stringToTerraform(this._acsControlSlot14State),
      adaptive_refresh_mgmt_level: cdktf.stringToTerraform(this._adaptiveRefreshMgmtLevel),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      adjacent_cache_line_prefetch: cdktf.stringToTerraform(this._adjacentCacheLinePrefetch),
      advanced_mem_test: cdktf.stringToTerraform(this._advancedMemTest),
      all_usb_devices: cdktf.stringToTerraform(this._allUsbDevices),
      altitude: cdktf.stringToTerraform(this._altitude),
      aspm_support: cdktf.stringToTerraform(this._aspmSupport),
      assert_nmi_on_perr: cdktf.stringToTerraform(this._assertNmiOnPerr),
      assert_nmi_on_serr: cdktf.stringToTerraform(this._assertNmiOnSerr),
      auto_cc_state: cdktf.stringToTerraform(this._autoCcState),
      autonumous_cstate_enable: cdktf.stringToTerraform(this._autonumousCstateEnable),
      baud_rate: cdktf.stringToTerraform(this._baudRate),
      bme_dma_mitigation: cdktf.stringToTerraform(this._bmeDmaMitigation),
      boot_option_num_retry: cdktf.stringToTerraform(this._bootOptionNumRetry),
      boot_option_re_cool_down: cdktf.stringToTerraform(this._bootOptionReCoolDown),
      boot_option_retry: cdktf.stringToTerraform(this._bootOptionRetry),
      boot_performance_mode: cdktf.stringToTerraform(this._bootPerformanceMode),
      burst_and_postponed_refresh: cdktf.stringToTerraform(this._burstAndPostponedRefresh),
      c1auto_demotion: cdktf.stringToTerraform(this._c1AutoDemotion),
      c1auto_un_demotion: cdktf.stringToTerraform(this._c1AutoUnDemotion),
      cbs_cmn_apbdis: cdktf.stringToTerraform(this._cbsCmnApbdis),
      cbs_cmn_apbdis_df_pstate_rs: cdktf.stringToTerraform(this._cbsCmnApbdisDfPstateRs),
      cbs_cmn_cpu_avx512: cdktf.stringToTerraform(this._cbsCmnCpuAvx512),
      cbs_cmn_cpu_cpb: cdktf.stringToTerraform(this._cbsCmnCpuCpb),
      cbs_cmn_cpu_gen_downcore_ctrl: cdktf.stringToTerraform(this._cbsCmnCpuGenDowncoreCtrl),
      cbs_cmn_cpu_global_cstate_ctrl: cdktf.stringToTerraform(this._cbsCmnCpuGlobalCstateCtrl),
      cbs_cmn_cpu_l1stream_hw_prefetcher: cdktf.stringToTerraform(this._cbsCmnCpuL1StreamHwPrefetcher),
      cbs_cmn_cpu_l2stream_hw_prefetcher: cdktf.stringToTerraform(this._cbsCmnCpuL2StreamHwPrefetcher),
      cbs_cmn_cpu_sev_asid_space_limit: cdktf.stringToTerraform(this._cbsCmnCpuSevAsidSpaceLimit),
      cbs_cmn_cpu_smee: cdktf.stringToTerraform(this._cbsCmnCpuSmee),
      cbs_cmn_cpu_streaming_stores_ctrl: cdktf.stringToTerraform(this._cbsCmnCpuStreamingStoresCtrl),
      cbs_cmn_determinism_slider: cdktf.stringToTerraform(this._cbsCmnDeterminismSlider),
      cbs_cmn_edc_control_throttle: cdktf.stringToTerraform(this._cbsCmnEdcControlThrottle),
      cbs_cmn_efficiency_mode_en: cdktf.stringToTerraform(this._cbsCmnEfficiencyModeEn),
      cbs_cmn_efficiency_mode_en_rs: cdktf.stringToTerraform(this._cbsCmnEfficiencyModeEnRs),
      cbs_cmn_fixed_soc_pstate: cdktf.stringToTerraform(this._cbsCmnFixedSocPstate),
      cbs_cmn_gnb_nb_iommu: cdktf.stringToTerraform(this._cbsCmnGnbNbIommu),
      cbs_cmn_gnb_smu_df_cstates: cdktf.stringToTerraform(this._cbsCmnGnbSmuDfCstates),
      cbs_cmn_gnb_smu_dffo_rs: cdktf.stringToTerraform(this._cbsCmnGnbSmuDffoRs),
      cbs_cmn_gnb_smu_dlwm_support: cdktf.stringToTerraform(this._cbsCmnGnbSmuDlwmSupport),
      cbs_cmn_gnb_smucppc: cdktf.stringToTerraform(this._cbsCmnGnbSmucppc),
      cbs_cmn_mem_ctrl_bank_group_swap_ddr4: cdktf.stringToTerraform(this._cbsCmnMemCtrlBankGroupSwapDdr4),
      cbs_cmn_mem_ctrller_pwr_dn_en_ddr: cdktf.stringToTerraform(this._cbsCmnMemCtrllerPwrDnEnDdr),
      cbs_cmn_mem_map_bank_interleave_ddr4: cdktf.stringToTerraform(this._cbsCmnMemMapBankInterleaveDdr4),
      cbs_cmn_mem_speed_ddr47xx2: cdktf.stringToTerraform(this._cbsCmnMemSpeedDdr47Xx2),
      cbs_cmn_mem_speed_ddr47xx3: cdktf.stringToTerraform(this._cbsCmnMemSpeedDdr47Xx3),
      cbs_cmn_preferred_io7xx2: cdktf.stringToTerraform(this._cbsCmnPreferredIo7Xx2),
      cbs_cmn_preferred_io7xx3: cdktf.stringToTerraform(this._cbsCmnPreferredIo7Xx3),
      cbs_cmnc_tdp_ctl: cdktf.stringToTerraform(this._cbsCmncTdpCtl),
      cbs_cmnx_gmi_force_link_width_rs: cdktf.stringToTerraform(this._cbsCmnxGmiForceLinkWidthRs),
      cbs_cpu_ccd_ctrl_ssp: cdktf.stringToTerraform(this._cbsCpuCcdCtrlSsp),
      cbs_cpu_core_ctrl: cdktf.stringToTerraform(this._cbsCpuCoreCtrl),
      cbs_cpu_down_core_ctrl_bergamo: cdktf.stringToTerraform(this._cbsCpuDownCoreCtrlBergamo),
      cbs_cpu_down_core_ctrl_genoa: cdktf.stringToTerraform(this._cbsCpuDownCoreCtrlGenoa),
      cbs_cpu_smt_ctrl: cdktf.stringToTerraform(this._cbsCpuSmtCtrl),
      cbs_dbg_cpu_gen_cpu_wdt: cdktf.stringToTerraform(this._cbsDbgCpuGenCpuWdt),
      cbs_dbg_cpu_lapic_mode: cdktf.stringToTerraform(this._cbsDbgCpuLapicMode),
      cbs_dbg_cpu_snp_mem_cover: cdktf.stringToTerraform(this._cbsDbgCpuSnpMemCover),
      cbs_dbg_cpu_snp_mem_size_cover: cdktf.stringToTerraform(this._cbsDbgCpuSnpMemSizeCover),
      cbs_df_cmn4link_max_xgmi_speed: cdktf.stringToTerraform(this._cbsDfCmn4LinkMaxXgmiSpeed),
      cbs_df_cmn_acpi_srat_l3numa: cdktf.stringToTerraform(this._cbsDfCmnAcpiSratL3Numa),
      cbs_df_cmn_dram_nps: cdktf.stringToTerraform(this._cbsDfCmnDramNps),
      cbs_df_cmn_dram_scrub_time: cdktf.stringToTerraform(this._cbsDfCmnDramScrubTime),
      cbs_df_cmn_mem_intlv: cdktf.stringToTerraform(this._cbsDfCmnMemIntlv),
      cbs_df_cmn_mem_intlv_control: cdktf.stringToTerraform(this._cbsDfCmnMemIntlvControl),
      cbs_df_cmn_mem_intlv_size: cdktf.stringToTerraform(this._cbsDfCmnMemIntlvSize),
      cbs_df_dbg_xgmi_link_cfg: cdktf.stringToTerraform(this._cbsDfDbgXgmiLinkCfg),
      cbs_gnb_dbg_pcie_tbt_support: cdktf.stringToTerraform(this._cbsGnbDbgPcieTbtSupport),
      cbs_sev_snp_support: cdktf.stringToTerraform(this._cbsSevSnpSupport),
      cdn_enable: cdktf.stringToTerraform(this._cdnEnable),
      cdn_support: cdktf.stringToTerraform(this._cdnSupport),
      channel_inter_leave: cdktf.stringToTerraform(this._channelInterLeave),
      cisco_adaptive_mem_training: cdktf.stringToTerraform(this._ciscoAdaptiveMemTraining),
      cisco_debug_level: cdktf.stringToTerraform(this._ciscoDebugLevel),
      cisco_oprom_launch_optimization: cdktf.stringToTerraform(this._ciscoOpromLaunchOptimization),
      cisco_xgmi_max_speed: cdktf.stringToTerraform(this._ciscoXgmiMaxSpeed),
      cke_low_policy: cdktf.stringToTerraform(this._ckeLowPolicy),
      class_id: cdktf.stringToTerraform(this._classId),
      closed_loop_therm_throtl: cdktf.stringToTerraform(this._closedLoopThermThrotl),
      cmci_enable: cdktf.stringToTerraform(this._cmciEnable),
      config_tdp: cdktf.stringToTerraform(this._configTdp),
      config_tdp_level: cdktf.stringToTerraform(this._configTdpLevel),
      console_redirection: cdktf.stringToTerraform(this._consoleRedirection),
      core_multi_processing: cdktf.stringToTerraform(this._coreMultiProcessing),
      cpu_energy_performance: cdktf.stringToTerraform(this._cpuEnergyPerformance),
      cpu_frequency_floor: cdktf.stringToTerraform(this._cpuFrequencyFloor),
      cpu_pa_limit: cdktf.stringToTerraform(this._cpuPaLimit),
      cpu_perf_enhancement: cdktf.stringToTerraform(this._cpuPerfEnhancement),
      cpu_performance: cdktf.stringToTerraform(this._cpuPerformance),
      cpu_power_management: cdktf.stringToTerraform(this._cpuPowerManagement),
      cr_qos: cdktf.stringToTerraform(this._crQos),
      create_time: cdktf.stringToTerraform(this._createTime),
      crfastgo_config: cdktf.stringToTerraform(this._crfastgoConfig),
      dcpmm_firmware_downgrade: cdktf.stringToTerraform(this._dcpmmFirmwareDowngrade),
      demand_scrub: cdktf.stringToTerraform(this._demandScrub),
      description: cdktf.stringToTerraform(this._description),
      dfx_osb_en: cdktf.stringToTerraform(this._dfxOsbEn),
      direct_cache_access: cdktf.stringToTerraform(this._directCacheAccess),
      dma_ctrl_opt_in: cdktf.stringToTerraform(this._dmaCtrlOptIn),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      dram_clock_throttling: cdktf.stringToTerraform(this._dramClockThrottling),
      dram_refresh_rate: cdktf.stringToTerraform(this._dramRefreshRate),
      dram_sw_thermal_throttling: cdktf.stringToTerraform(this._dramSwThermalThrottling),
      eadr_support: cdktf.stringToTerraform(this._eadrSupport),
      edpc_en: cdktf.stringToTerraform(this._edpcEn),
      enable_clock_spread_spec: cdktf.stringToTerraform(this._enableClockSpreadSpec),
      enable_mktme: cdktf.stringToTerraform(this._enableMktme),
      enable_rmt: cdktf.stringToTerraform(this._enableRmt),
      enable_sgx: cdktf.stringToTerraform(this._enableSgx),
      enable_tdx: cdktf.stringToTerraform(this._enableTdx),
      enable_tdx_seamldr: cdktf.stringToTerraform(this._enableTdxSeamldr),
      enable_tme: cdktf.stringToTerraform(this._enableTme),
      energy_efficient_turbo: cdktf.stringToTerraform(this._energyEfficientTurbo),
      eng_perf_tuning: cdktf.stringToTerraform(this._engPerfTuning),
      enhanced_intel_speed_step_tech: cdktf.stringToTerraform(this._enhancedIntelSpeedStepTech),
      epoch_update: cdktf.stringToTerraform(this._epochUpdate),
      epp_enable: cdktf.stringToTerraform(this._eppEnable),
      epp_profile: cdktf.stringToTerraform(this._eppProfile),
      error_check_scrub: cdktf.stringToTerraform(this._errorCheckScrub),
      execute_disable_bit: cdktf.stringToTerraform(this._executeDisableBit),
      extended_apic: cdktf.stringToTerraform(this._extendedApic),
      flow_control: cdktf.stringToTerraform(this._flowControl),
      frb2enable: cdktf.stringToTerraform(this._frb2Enable),
      gpu_direct_cpu1: cdktf.stringToTerraform(this._gpuDirectCpu1),
      gpu_direct_cpu2: cdktf.stringToTerraform(this._gpuDirectCpu2),
      gpu_direct_cpu3: cdktf.stringToTerraform(this._gpuDirectCpu3),
      gpu_direct_cpu4: cdktf.stringToTerraform(this._gpuDirectCpu4),
      hardware_prefetch: cdktf.stringToTerraform(this._hardwarePrefetch),
      hwpm_enable: cdktf.stringToTerraform(this._hwpmEnable),
      id: cdktf.stringToTerraform(this._id),
      imc_interleave: cdktf.stringToTerraform(this._imcInterleave),
      intel_dynamic_speed_select: cdktf.stringToTerraform(this._intelDynamicSpeedSelect),
      intel_hyper_threading_tech: cdktf.stringToTerraform(this._intelHyperThreadingTech),
      intel_speed_select: cdktf.stringToTerraform(this._intelSpeedSelect),
      intel_turbo_boost_tech: cdktf.stringToTerraform(this._intelTurboBoostTech),
      intel_virtualization_technology: cdktf.stringToTerraform(this._intelVirtualizationTechnology),
      intel_vt_for_directed_io: cdktf.stringToTerraform(this._intelVtForDirectedIo),
      intel_vtd_coherency_support: cdktf.stringToTerraform(this._intelVtdCoherencySupport),
      intel_vtd_interrupt_remapping: cdktf.stringToTerraform(this._intelVtdInterruptRemapping),
      intel_vtd_pass_through_dma_support: cdktf.stringToTerraform(this._intelVtdPassThroughDmaSupport),
      intel_vtdats_support: cdktf.stringToTerraform(this._intelVtdatsSupport),
      ioat_config_cpm: cdktf.stringToTerraform(this._ioatConfigCpm),
      ioh_error_enable: cdktf.stringToTerraform(this._iohErrorEnable),
      ioh_resource: cdktf.stringToTerraform(this._iohResource),
      ip_prefetch: cdktf.stringToTerraform(this._ipPrefetch),
      ipv4http: cdktf.stringToTerraform(this._ipv4Http),
      ipv4pxe: cdktf.stringToTerraform(this._ipv4Pxe),
      ipv6http: cdktf.stringToTerraform(this._ipv6Http),
      ipv6pxe: cdktf.stringToTerraform(this._ipv6Pxe),
      kti_prefetch: cdktf.stringToTerraform(this._ktiPrefetch),
      latency_optimized_mode: cdktf.stringToTerraform(this._latencyOptimizedMode),
      legacy_os_redirection: cdktf.stringToTerraform(this._legacyOsRedirection),
      legacy_usb_support: cdktf.stringToTerraform(this._legacyUsbSupport),
      llc_alloc: cdktf.stringToTerraform(this._llcAlloc),
      llc_prefetch: cdktf.stringToTerraform(this._llcPrefetch),
      lom_port0state: cdktf.stringToTerraform(this._lomPort0State),
      lom_port1state: cdktf.stringToTerraform(this._lomPort1State),
      lom_port2state: cdktf.stringToTerraform(this._lomPort2State),
      lom_port3state: cdktf.stringToTerraform(this._lomPort3State),
      lom_ports_all_state: cdktf.stringToTerraform(this._lomPortsAllState),
      lv_ddr_mode: cdktf.stringToTerraform(this._lvDdrMode),
      make_device_non_bootable: cdktf.stringToTerraform(this._makeDeviceNonBootable),
      memory_bandwidth_boost: cdktf.stringToTerraform(this._memoryBandwidthBoost),
      memory_inter_leave: cdktf.stringToTerraform(this._memoryInterLeave),
      memory_mapped_io_above4gb: cdktf.stringToTerraform(this._memoryMappedIoAbove4Gb),
      memory_refresh_rate: cdktf.stringToTerraform(this._memoryRefreshRate),
      memory_size_limit: cdktf.stringToTerraform(this._memorySizeLimit),
      memory_thermal_throttling: cdktf.stringToTerraform(this._memoryThermalThrottling),
      mirroring_mode: cdktf.stringToTerraform(this._mirroringMode),
      mmcfg_base: cdktf.stringToTerraform(this._mmcfgBase),
      mmioh_base: cdktf.stringToTerraform(this._mmiohBase),
      mmioh_size: cdktf.stringToTerraform(this._mmiohSize),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      network_stack: cdktf.stringToTerraform(this._networkStack),
      numa_optimized: cdktf.stringToTerraform(this._numaOptimized),
      nvmdimm_perform_config: cdktf.stringToTerraform(this._nvmdimmPerformConfig),
      object_type: cdktf.stringToTerraform(this._objectType),
      onboard10gbit_lom: cdktf.stringToTerraform(this._onboard10GbitLom),
      onboard_gbit_lom: cdktf.stringToTerraform(this._onboardGbitLom),
      onboard_scu_storage_support: cdktf.stringToTerraform(this._onboardScuStorageSupport),
      onboard_scu_storage_sw_stack: cdktf.stringToTerraform(this._onboardScuStorageSwStack),
      operation_mode: cdktf.stringToTerraform(this._operationMode),
      optimized_power_mode: cdktf.stringToTerraform(this._optimizedPowerMode),
      os_boot_watchdog_timer: cdktf.stringToTerraform(this._osBootWatchdogTimer),
      os_boot_watchdog_timer_policy: cdktf.stringToTerraform(this._osBootWatchdogTimerPolicy),
      os_boot_watchdog_timer_timeout: cdktf.stringToTerraform(this._osBootWatchdogTimerTimeout),
      out_of_band_mgmt_port: cdktf.stringToTerraform(this._outOfBandMgmtPort),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      package_cstate_limit: cdktf.stringToTerraform(this._packageCstateLimit),
      panic_high_watermark: cdktf.stringToTerraform(this._panicHighWatermark),
      partial_cache_line_sparing: cdktf.stringToTerraform(this._partialCacheLineSparing),
      partial_mirror_mode_config: cdktf.stringToTerraform(this._partialMirrorModeConfig),
      partial_mirror_percent: cdktf.stringToTerraform(this._partialMirrorPercent),
      partial_mirror_value1: cdktf.stringToTerraform(this._partialMirrorValue1),
      partial_mirror_value2: cdktf.stringToTerraform(this._partialMirrorValue2),
      partial_mirror_value3: cdktf.stringToTerraform(this._partialMirrorValue3),
      partial_mirror_value4: cdktf.stringToTerraform(this._partialMirrorValue4),
      patrol_scrub: cdktf.stringToTerraform(this._patrolScrub),
      patrol_scrub_duration: cdktf.stringToTerraform(this._patrolScrubDuration),
      pc_ie_ras_support: cdktf.stringToTerraform(this._pcIeRasSupport),
      pc_ie_ssd_hot_plug_support: cdktf.stringToTerraform(this._pcIeSsdHotPlugSupport),
      pch_pcie_pll_ssc: cdktf.stringToTerraform(this._pchPciePllSsc),
      pch_usb30mode: cdktf.stringToTerraform(this._pchUsb30Mode),
      pci_option_ro_ms: cdktf.stringToTerraform(this._pciOptionRoMs),
      pci_rom_clp: cdktf.stringToTerraform(this._pciRomClp),
      pcie_ari_support: cdktf.stringToTerraform(this._pcieAriSupport),
      pcie_pll_ssc: cdktf.stringToTerraform(this._pciePllSsc),
      pcie_slot_mraid1link_speed: cdktf.stringToTerraform(this._pcieSlotMraid1LinkSpeed),
      pcie_slot_mraid1option_rom: cdktf.stringToTerraform(this._pcieSlotMraid1OptionRom),
      pcie_slot_mraid2link_speed: cdktf.stringToTerraform(this._pcieSlotMraid2LinkSpeed),
      pcie_slot_mraid2option_rom: cdktf.stringToTerraform(this._pcieSlotMraid2OptionRom),
      pcie_slot_mstorraid_link_speed: cdktf.stringToTerraform(this._pcieSlotMstorraidLinkSpeed),
      pcie_slot_mstorraid_option_rom: cdktf.stringToTerraform(this._pcieSlotMstorraidOptionRom),
      pcie_slot_nvme1link_speed: cdktf.stringToTerraform(this._pcieSlotNvme1LinkSpeed),
      pcie_slot_nvme1option_rom: cdktf.stringToTerraform(this._pcieSlotNvme1OptionRom),
      pcie_slot_nvme2link_speed: cdktf.stringToTerraform(this._pcieSlotNvme2LinkSpeed),
      pcie_slot_nvme2option_rom: cdktf.stringToTerraform(this._pcieSlotNvme2OptionRom),
      pcie_slot_nvme3link_speed: cdktf.stringToTerraform(this._pcieSlotNvme3LinkSpeed),
      pcie_slot_nvme3option_rom: cdktf.stringToTerraform(this._pcieSlotNvme3OptionRom),
      pcie_slot_nvme4link_speed: cdktf.stringToTerraform(this._pcieSlotNvme4LinkSpeed),
      pcie_slot_nvme4option_rom: cdktf.stringToTerraform(this._pcieSlotNvme4OptionRom),
      pcie_slot_nvme5link_speed: cdktf.stringToTerraform(this._pcieSlotNvme5LinkSpeed),
      pcie_slot_nvme5option_rom: cdktf.stringToTerraform(this._pcieSlotNvme5OptionRom),
      pcie_slot_nvme6link_speed: cdktf.stringToTerraform(this._pcieSlotNvme6LinkSpeed),
      pcie_slot_nvme6option_rom: cdktf.stringToTerraform(this._pcieSlotNvme6OptionRom),
      pcie_slots_cdn_enable: cdktf.stringToTerraform(this._pcieSlotsCdnEnable),
      pop_support: cdktf.stringToTerraform(this._popSupport),
      post_error_pause: cdktf.stringToTerraform(this._postErrorPause),
      post_package_repair: cdktf.stringToTerraform(this._postPackageRepair),
      pre_boot_dma_protection: cdktf.stringToTerraform(this._preBootDmaProtection),
      prmrr_size: cdktf.stringToTerraform(this._prmrrSize),
      processor_c1e: cdktf.stringToTerraform(this._processorC1E),
      processor_c3report: cdktf.stringToTerraform(this._processorC3Report),
      processor_c6report: cdktf.stringToTerraform(this._processorC6Report),
      processor_cstate: cdktf.stringToTerraform(this._processorCstate),
      psata: cdktf.stringToTerraform(this._psata),
      pstate_coord_type: cdktf.stringToTerraform(this._pstateCoordType),
      putty_key_pad: cdktf.stringToTerraform(this._puttyKeyPad),
      pwr_perf_tuning: cdktf.stringToTerraform(this._pwrPerfTuning),
      qpi_link_frequency: cdktf.stringToTerraform(this._qpiLinkFrequency),
      qpi_link_speed: cdktf.stringToTerraform(this._qpiLinkSpeed),
      qpi_snoop_mode: cdktf.stringToTerraform(this._qpiSnoopMode),
      rank_inter_leave: cdktf.stringToTerraform(this._rankInterLeave),
      redirection_after_post: cdktf.stringToTerraform(this._redirectionAfterPost),
      resize_bar_support: cdktf.stringToTerraform(this._resizeBarSupport),
      runtime_post_package_repair: cdktf.stringToTerraform(this._runtimePostPackageRepair),
      sata_mode_select: cdktf.stringToTerraform(this._sataModeSelect),
      select_memory_ras_configuration: cdktf.stringToTerraform(this._selectMemoryRasConfiguration),
      select_ppr_type: cdktf.stringToTerraform(this._selectPprType),
      serial_mux: cdktf.stringToTerraform(this._serialMux),
      serial_port_aenable: cdktf.stringToTerraform(this._serialPortAenable),
      sev: cdktf.stringToTerraform(this._sev),
      sgx_auto_registration_agent: cdktf.stringToTerraform(this._sgxAutoRegistrationAgent),
      sgx_epoch0: cdktf.stringToTerraform(this._sgxEpoch0),
      sgx_epoch1: cdktf.stringToTerraform(this._sgxEpoch1),
      sgx_factory_reset: cdktf.stringToTerraform(this._sgxFactoryReset),
      sgx_le_pub_key_hash0: cdktf.stringToTerraform(this._sgxLePubKeyHash0),
      sgx_le_pub_key_hash1: cdktf.stringToTerraform(this._sgxLePubKeyHash1),
      sgx_le_pub_key_hash2: cdktf.stringToTerraform(this._sgxLePubKeyHash2),
      sgx_le_pub_key_hash3: cdktf.stringToTerraform(this._sgxLePubKeyHash3),
      sgx_le_wr: cdktf.stringToTerraform(this._sgxLeWr),
      sgx_package_info_in_band_access: cdktf.stringToTerraform(this._sgxPackageInfoInBandAccess),
      sgx_qos: cdktf.stringToTerraform(this._sgxQos),
      sha1pcr_bank: cdktf.stringToTerraform(this._sha1PcrBank),
      sha256pcr_bank: cdktf.stringToTerraform(this._sha256PcrBank),
      sha384pcr_bank: cdktf.stringToTerraform(this._sha384PcrBank),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      single_pctl_enable: cdktf.stringToTerraform(this._singlePctlEnable),
      slot10link_speed: cdktf.stringToTerraform(this._slot10LinkSpeed),
      slot10state: cdktf.stringToTerraform(this._slot10State),
      slot11link_speed: cdktf.stringToTerraform(this._slot11LinkSpeed),
      slot11state: cdktf.stringToTerraform(this._slot11State),
      slot12link_speed: cdktf.stringToTerraform(this._slot12LinkSpeed),
      slot12state: cdktf.stringToTerraform(this._slot12State),
      slot13state: cdktf.stringToTerraform(this._slot13State),
      slot14state: cdktf.stringToTerraform(this._slot14State),
      slot1link_speed: cdktf.stringToTerraform(this._slot1LinkSpeed),
      slot1state: cdktf.stringToTerraform(this._slot1State),
      slot2link_speed: cdktf.stringToTerraform(this._slot2LinkSpeed),
      slot2state: cdktf.stringToTerraform(this._slot2State),
      slot3link_speed: cdktf.stringToTerraform(this._slot3LinkSpeed),
      slot3state: cdktf.stringToTerraform(this._slot3State),
      slot4link_speed: cdktf.stringToTerraform(this._slot4LinkSpeed),
      slot4state: cdktf.stringToTerraform(this._slot4State),
      slot5link_speed: cdktf.stringToTerraform(this._slot5LinkSpeed),
      slot5state: cdktf.stringToTerraform(this._slot5State),
      slot6link_speed: cdktf.stringToTerraform(this._slot6LinkSpeed),
      slot6state: cdktf.stringToTerraform(this._slot6State),
      slot7link_speed: cdktf.stringToTerraform(this._slot7LinkSpeed),
      slot7state: cdktf.stringToTerraform(this._slot7State),
      slot8link_speed: cdktf.stringToTerraform(this._slot8LinkSpeed),
      slot8state: cdktf.stringToTerraform(this._slot8State),
      slot9link_speed: cdktf.stringToTerraform(this._slot9LinkSpeed),
      slot9state: cdktf.stringToTerraform(this._slot9State),
      slot_flom_link_speed: cdktf.stringToTerraform(this._slotFlomLinkSpeed),
      slot_front_nvme10link_speed: cdktf.stringToTerraform(this._slotFrontNvme10LinkSpeed),
      slot_front_nvme10option_rom: cdktf.stringToTerraform(this._slotFrontNvme10OptionRom),
      slot_front_nvme11link_speed: cdktf.stringToTerraform(this._slotFrontNvme11LinkSpeed),
      slot_front_nvme11option_rom: cdktf.stringToTerraform(this._slotFrontNvme11OptionRom),
      slot_front_nvme12link_speed: cdktf.stringToTerraform(this._slotFrontNvme12LinkSpeed),
      slot_front_nvme12option_rom: cdktf.stringToTerraform(this._slotFrontNvme12OptionRom),
      slot_front_nvme13link_speed: cdktf.stringToTerraform(this._slotFrontNvme13LinkSpeed),
      slot_front_nvme13option_rom: cdktf.stringToTerraform(this._slotFrontNvme13OptionRom),
      slot_front_nvme14link_speed: cdktf.stringToTerraform(this._slotFrontNvme14LinkSpeed),
      slot_front_nvme14option_rom: cdktf.stringToTerraform(this._slotFrontNvme14OptionRom),
      slot_front_nvme15link_speed: cdktf.stringToTerraform(this._slotFrontNvme15LinkSpeed),
      slot_front_nvme15option_rom: cdktf.stringToTerraform(this._slotFrontNvme15OptionRom),
      slot_front_nvme16link_speed: cdktf.stringToTerraform(this._slotFrontNvme16LinkSpeed),
      slot_front_nvme16option_rom: cdktf.stringToTerraform(this._slotFrontNvme16OptionRom),
      slot_front_nvme17link_speed: cdktf.stringToTerraform(this._slotFrontNvme17LinkSpeed),
      slot_front_nvme17option_rom: cdktf.stringToTerraform(this._slotFrontNvme17OptionRom),
      slot_front_nvme18link_speed: cdktf.stringToTerraform(this._slotFrontNvme18LinkSpeed),
      slot_front_nvme18option_rom: cdktf.stringToTerraform(this._slotFrontNvme18OptionRom),
      slot_front_nvme19link_speed: cdktf.stringToTerraform(this._slotFrontNvme19LinkSpeed),
      slot_front_nvme19option_rom: cdktf.stringToTerraform(this._slotFrontNvme19OptionRom),
      slot_front_nvme1link_speed: cdktf.stringToTerraform(this._slotFrontNvme1LinkSpeed),
      slot_front_nvme1option_rom: cdktf.stringToTerraform(this._slotFrontNvme1OptionRom),
      slot_front_nvme20link_speed: cdktf.stringToTerraform(this._slotFrontNvme20LinkSpeed),
      slot_front_nvme20option_rom: cdktf.stringToTerraform(this._slotFrontNvme20OptionRom),
      slot_front_nvme21link_speed: cdktf.stringToTerraform(this._slotFrontNvme21LinkSpeed),
      slot_front_nvme21option_rom: cdktf.stringToTerraform(this._slotFrontNvme21OptionRom),
      slot_front_nvme22link_speed: cdktf.stringToTerraform(this._slotFrontNvme22LinkSpeed),
      slot_front_nvme22option_rom: cdktf.stringToTerraform(this._slotFrontNvme22OptionRom),
      slot_front_nvme23link_speed: cdktf.stringToTerraform(this._slotFrontNvme23LinkSpeed),
      slot_front_nvme23option_rom: cdktf.stringToTerraform(this._slotFrontNvme23OptionRom),
      slot_front_nvme24link_speed: cdktf.stringToTerraform(this._slotFrontNvme24LinkSpeed),
      slot_front_nvme24option_rom: cdktf.stringToTerraform(this._slotFrontNvme24OptionRom),
      slot_front_nvme25link_speed: cdktf.stringToTerraform(this._slotFrontNvme25LinkSpeed),
      slot_front_nvme25option_rom: cdktf.stringToTerraform(this._slotFrontNvme25OptionRom),
      slot_front_nvme26link_speed: cdktf.stringToTerraform(this._slotFrontNvme26LinkSpeed),
      slot_front_nvme26option_rom: cdktf.stringToTerraform(this._slotFrontNvme26OptionRom),
      slot_front_nvme27link_speed: cdktf.stringToTerraform(this._slotFrontNvme27LinkSpeed),
      slot_front_nvme27option_rom: cdktf.stringToTerraform(this._slotFrontNvme27OptionRom),
      slot_front_nvme28link_speed: cdktf.stringToTerraform(this._slotFrontNvme28LinkSpeed),
      slot_front_nvme28option_rom: cdktf.stringToTerraform(this._slotFrontNvme28OptionRom),
      slot_front_nvme29link_speed: cdktf.stringToTerraform(this._slotFrontNvme29LinkSpeed),
      slot_front_nvme29option_rom: cdktf.stringToTerraform(this._slotFrontNvme29OptionRom),
      slot_front_nvme2link_speed: cdktf.stringToTerraform(this._slotFrontNvme2LinkSpeed),
      slot_front_nvme2option_rom: cdktf.stringToTerraform(this._slotFrontNvme2OptionRom),
      slot_front_nvme30link_speed: cdktf.stringToTerraform(this._slotFrontNvme30LinkSpeed),
      slot_front_nvme30option_rom: cdktf.stringToTerraform(this._slotFrontNvme30OptionRom),
      slot_front_nvme31link_speed: cdktf.stringToTerraform(this._slotFrontNvme31LinkSpeed),
      slot_front_nvme31option_rom: cdktf.stringToTerraform(this._slotFrontNvme31OptionRom),
      slot_front_nvme32link_speed: cdktf.stringToTerraform(this._slotFrontNvme32LinkSpeed),
      slot_front_nvme32option_rom: cdktf.stringToTerraform(this._slotFrontNvme32OptionRom),
      slot_front_nvme3link_speed: cdktf.stringToTerraform(this._slotFrontNvme3LinkSpeed),
      slot_front_nvme3option_rom: cdktf.stringToTerraform(this._slotFrontNvme3OptionRom),
      slot_front_nvme4link_speed: cdktf.stringToTerraform(this._slotFrontNvme4LinkSpeed),
      slot_front_nvme4option_rom: cdktf.stringToTerraform(this._slotFrontNvme4OptionRom),
      slot_front_nvme5link_speed: cdktf.stringToTerraform(this._slotFrontNvme5LinkSpeed),
      slot_front_nvme5option_rom: cdktf.stringToTerraform(this._slotFrontNvme5OptionRom),
      slot_front_nvme6link_speed: cdktf.stringToTerraform(this._slotFrontNvme6LinkSpeed),
      slot_front_nvme6option_rom: cdktf.stringToTerraform(this._slotFrontNvme6OptionRom),
      slot_front_nvme7link_speed: cdktf.stringToTerraform(this._slotFrontNvme7LinkSpeed),
      slot_front_nvme7option_rom: cdktf.stringToTerraform(this._slotFrontNvme7OptionRom),
      slot_front_nvme8link_speed: cdktf.stringToTerraform(this._slotFrontNvme8LinkSpeed),
      slot_front_nvme8option_rom: cdktf.stringToTerraform(this._slotFrontNvme8OptionRom),
      slot_front_nvme9link_speed: cdktf.stringToTerraform(this._slotFrontNvme9LinkSpeed),
      slot_front_nvme9option_rom: cdktf.stringToTerraform(this._slotFrontNvme9OptionRom),
      slot_front_slot5link_speed: cdktf.stringToTerraform(this._slotFrontSlot5LinkSpeed),
      slot_front_slot6link_speed: cdktf.stringToTerraform(this._slotFrontSlot6LinkSpeed),
      slot_gpu1state: cdktf.stringToTerraform(this._slotGpu1State),
      slot_gpu2state: cdktf.stringToTerraform(this._slotGpu2State),
      slot_gpu3state: cdktf.stringToTerraform(this._slotGpu3State),
      slot_gpu4state: cdktf.stringToTerraform(this._slotGpu4State),
      slot_gpu5state: cdktf.stringToTerraform(this._slotGpu5State),
      slot_gpu6state: cdktf.stringToTerraform(this._slotGpu6State),
      slot_gpu7state: cdktf.stringToTerraform(this._slotGpu7State),
      slot_gpu8state: cdktf.stringToTerraform(this._slotGpu8State),
      slot_hba_link_speed: cdktf.stringToTerraform(this._slotHbaLinkSpeed),
      slot_hba_state: cdktf.stringToTerraform(this._slotHbaState),
      slot_lom1link: cdktf.stringToTerraform(this._slotLom1Link),
      slot_lom2link: cdktf.stringToTerraform(this._slotLom2Link),
      slot_mezz_state: cdktf.stringToTerraform(this._slotMezzState),
      slot_mlom_link_speed: cdktf.stringToTerraform(this._slotMlomLinkSpeed),
      slot_mlom_state: cdktf.stringToTerraform(this._slotMlomState),
      slot_mraid_link_speed: cdktf.stringToTerraform(this._slotMraidLinkSpeed),
      slot_mraid_state: cdktf.stringToTerraform(this._slotMraidState),
      slot_n10state: cdktf.stringToTerraform(this._slotN10State),
      slot_n11state: cdktf.stringToTerraform(this._slotN11State),
      slot_n12state: cdktf.stringToTerraform(this._slotN12State),
      slot_n13state: cdktf.stringToTerraform(this._slotN13State),
      slot_n14state: cdktf.stringToTerraform(this._slotN14State),
      slot_n15state: cdktf.stringToTerraform(this._slotN15State),
      slot_n16state: cdktf.stringToTerraform(this._slotN16State),
      slot_n17state: cdktf.stringToTerraform(this._slotN17State),
      slot_n18state: cdktf.stringToTerraform(this._slotN18State),
      slot_n19state: cdktf.stringToTerraform(this._slotN19State),
      slot_n1state: cdktf.stringToTerraform(this._slotN1State),
      slot_n20state: cdktf.stringToTerraform(this._slotN20State),
      slot_n21state: cdktf.stringToTerraform(this._slotN21State),
      slot_n22state: cdktf.stringToTerraform(this._slotN22State),
      slot_n23state: cdktf.stringToTerraform(this._slotN23State),
      slot_n24state: cdktf.stringToTerraform(this._slotN24State),
      slot_n2state: cdktf.stringToTerraform(this._slotN2State),
      slot_n3state: cdktf.stringToTerraform(this._slotN3State),
      slot_n4state: cdktf.stringToTerraform(this._slotN4State),
      slot_n5state: cdktf.stringToTerraform(this._slotN5State),
      slot_n6state: cdktf.stringToTerraform(this._slotN6State),
      slot_n7state: cdktf.stringToTerraform(this._slotN7State),
      slot_n8state: cdktf.stringToTerraform(this._slotN8State),
      slot_n9state: cdktf.stringToTerraform(this._slotN9State),
      slot_raid_link_speed: cdktf.stringToTerraform(this._slotRaidLinkSpeed),
      slot_raid_state: cdktf.stringToTerraform(this._slotRaidState),
      slot_rear_nvme1link_speed: cdktf.stringToTerraform(this._slotRearNvme1LinkSpeed),
      slot_rear_nvme1state: cdktf.stringToTerraform(this._slotRearNvme1State),
      slot_rear_nvme2link_speed: cdktf.stringToTerraform(this._slotRearNvme2LinkSpeed),
      slot_rear_nvme2state: cdktf.stringToTerraform(this._slotRearNvme2State),
      slot_rear_nvme3link_speed: cdktf.stringToTerraform(this._slotRearNvme3LinkSpeed),
      slot_rear_nvme3state: cdktf.stringToTerraform(this._slotRearNvme3State),
      slot_rear_nvme4link_speed: cdktf.stringToTerraform(this._slotRearNvme4LinkSpeed),
      slot_rear_nvme4state: cdktf.stringToTerraform(this._slotRearNvme4State),
      slot_rear_nvme5state: cdktf.stringToTerraform(this._slotRearNvme5State),
      slot_rear_nvme6state: cdktf.stringToTerraform(this._slotRearNvme6State),
      slot_rear_nvme7state: cdktf.stringToTerraform(this._slotRearNvme7State),
      slot_rear_nvme8state: cdktf.stringToTerraform(this._slotRearNvme8State),
      slot_riser1link_speed: cdktf.stringToTerraform(this._slotRiser1LinkSpeed),
      slot_riser1slot1link_speed: cdktf.stringToTerraform(this._slotRiser1Slot1LinkSpeed),
      slot_riser1slot2link_speed: cdktf.stringToTerraform(this._slotRiser1Slot2LinkSpeed),
      slot_riser1slot3link_speed: cdktf.stringToTerraform(this._slotRiser1Slot3LinkSpeed),
      slot_riser2link_speed: cdktf.stringToTerraform(this._slotRiser2LinkSpeed),
      slot_riser2slot4link_speed: cdktf.stringToTerraform(this._slotRiser2Slot4LinkSpeed),
      slot_riser2slot5link_speed: cdktf.stringToTerraform(this._slotRiser2Slot5LinkSpeed),
      slot_riser2slot6link_speed: cdktf.stringToTerraform(this._slotRiser2Slot6LinkSpeed),
      slot_sas_state: cdktf.stringToTerraform(this._slotSasState),
      slot_ssd_slot1link_speed: cdktf.stringToTerraform(this._slotSsdSlot1LinkSpeed),
      slot_ssd_slot2link_speed: cdktf.stringToTerraform(this._slotSsdSlot2LinkSpeed),
      smee: cdktf.stringToTerraform(this._smee),
      smt_mode: cdktf.stringToTerraform(this._smtMode),
      snc: cdktf.stringToTerraform(this._snc),
      snoopy_mode_for2lm: cdktf.stringToTerraform(this._snoopyModeFor2Lm),
      snoopy_mode_for_ad: cdktf.stringToTerraform(this._snoopyModeForAd),
      sparing_mode: cdktf.stringToTerraform(this._sparingMode),
      sr_iov: cdktf.stringToTerraform(this._srIov),
      streamer_prefetch: cdktf.stringToTerraform(this._streamerPrefetch),
      svm_mode: cdktf.stringToTerraform(this._svmMode),
      terminal_type: cdktf.stringToTerraform(this._terminalType),
      tpm_control: cdktf.stringToTerraform(this._tpmControl),
      tpm_pending_operation: cdktf.stringToTerraform(this._tpmPendingOperation),
      tpm_ppi_required: cdktf.stringToTerraform(this._tpmPpiRequired),
      tpm_support: cdktf.stringToTerraform(this._tpmSupport),
      tsme: cdktf.stringToTerraform(this._tsme),
      txt_support: cdktf.stringToTerraform(this._txtSupport),
      ucsm_boot_order_rule: cdktf.stringToTerraform(this._ucsmBootOrderRule),
      uefi_mem_map_sp_flag_en: cdktf.stringToTerraform(this._uefiMemMapSpFlagEn),
      ufs_disable: cdktf.stringToTerraform(this._ufsDisable),
      uma_based_clustering: cdktf.stringToTerraform(this._umaBasedClustering),
      upi_link_enablement: cdktf.stringToTerraform(this._upiLinkEnablement),
      upi_power_management: cdktf.stringToTerraform(this._upiPowerManagement),
      usb_emul6064: cdktf.stringToTerraform(this._usbEmul6064),
      usb_port_front: cdktf.stringToTerraform(this._usbPortFront),
      usb_port_internal: cdktf.stringToTerraform(this._usbPortInternal),
      usb_port_kvm: cdktf.stringToTerraform(this._usbPortKvm),
      usb_port_rear: cdktf.stringToTerraform(this._usbPortRear),
      usb_port_sd_card: cdktf.stringToTerraform(this._usbPortSdCard),
      usb_port_vmedia: cdktf.stringToTerraform(this._usbPortVmedia),
      usb_xhci_support: cdktf.stringToTerraform(this._usbXhciSupport),
      vga_priority: cdktf.stringToTerraform(this._vgaPriority),
      virtual_numa: cdktf.stringToTerraform(this._virtualNuma),
      vmd_enable: cdktf.stringToTerraform(this._vmdEnable),
      vol_memory_mode: cdktf.stringToTerraform(this._volMemoryMode),
      work_load_config: cdktf.stringToTerraform(this._workLoadConfig),
      x2apic_opt_out: cdktf.stringToTerraform(this._x2ApicOptOut),
      xpt_prefetch: cdktf.stringToTerraform(this._xptPrefetch),
      xpt_remote_prefetch: cdktf.stringToTerraform(this._xptRemotePrefetch),
      ancestors: cdktf.listMapper(dataIntersightBiosPolicyAncestorsToTerraform, true)(this._ancestors.internalValue),
      organization: dataIntersightBiosPolicyOrganizationToTerraform(this._organization.internalValue),
      parent: dataIntersightBiosPolicyParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightBiosPolicyPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      profiles: cdktf.listMapper(dataIntersightBiosPolicyProfilesToTerraform, true)(this._profiles.internalValue),
      tags: cdktf.listMapper(dataIntersightBiosPolicyTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightBiosPolicyVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acpi_srat_sp_flag_en: {
        value: cdktf.stringToHclTerraform(this._acpiSratSpFlagEn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu1state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu1State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu2state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu2State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu3state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu3State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu4state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu4State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu5state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu5State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu6state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu6State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu7state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu7State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_gpu8state: {
        value: cdktf.stringToHclTerraform(this._acsControlGpu8State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_slot11state: {
        value: cdktf.stringToHclTerraform(this._acsControlSlot11State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_slot12state: {
        value: cdktf.stringToHclTerraform(this._acsControlSlot12State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_slot13state: {
        value: cdktf.stringToHclTerraform(this._acsControlSlot13State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_control_slot14state: {
        value: cdktf.stringToHclTerraform(this._acsControlSlot14State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adaptive_refresh_mgmt_level: {
        value: cdktf.stringToHclTerraform(this._adaptiveRefreshMgmtLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adjacent_cache_line_prefetch: {
        value: cdktf.stringToHclTerraform(this._adjacentCacheLinePrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_mem_test: {
        value: cdktf.stringToHclTerraform(this._advancedMemTest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_usb_devices: {
        value: cdktf.stringToHclTerraform(this._allUsbDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      altitude: {
        value: cdktf.stringToHclTerraform(this._altitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aspm_support: {
        value: cdktf.stringToHclTerraform(this._aspmSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assert_nmi_on_perr: {
        value: cdktf.stringToHclTerraform(this._assertNmiOnPerr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assert_nmi_on_serr: {
        value: cdktf.stringToHclTerraform(this._assertNmiOnSerr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_cc_state: {
        value: cdktf.stringToHclTerraform(this._autoCcState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonumous_cstate_enable: {
        value: cdktf.stringToHclTerraform(this._autonumousCstateEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baud_rate: {
        value: cdktf.stringToHclTerraform(this._baudRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bme_dma_mitigation: {
        value: cdktf.stringToHclTerraform(this._bmeDmaMitigation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_option_num_retry: {
        value: cdktf.stringToHclTerraform(this._bootOptionNumRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_option_re_cool_down: {
        value: cdktf.stringToHclTerraform(this._bootOptionReCoolDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_option_retry: {
        value: cdktf.stringToHclTerraform(this._bootOptionRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_performance_mode: {
        value: cdktf.stringToHclTerraform(this._bootPerformanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_and_postponed_refresh: {
        value: cdktf.stringToHclTerraform(this._burstAndPostponedRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      c1auto_demotion: {
        value: cdktf.stringToHclTerraform(this._c1AutoDemotion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      c1auto_un_demotion: {
        value: cdktf.stringToHclTerraform(this._c1AutoUnDemotion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_apbdis: {
        value: cdktf.stringToHclTerraform(this._cbsCmnApbdis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_apbdis_df_pstate_rs: {
        value: cdktf.stringToHclTerraform(this._cbsCmnApbdisDfPstateRs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_avx512: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuAvx512),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_cpb: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuCpb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_gen_downcore_ctrl: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuGenDowncoreCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_global_cstate_ctrl: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuGlobalCstateCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_l1stream_hw_prefetcher: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuL1StreamHwPrefetcher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_l2stream_hw_prefetcher: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuL2StreamHwPrefetcher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_sev_asid_space_limit: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuSevAsidSpaceLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_smee: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuSmee),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_cpu_streaming_stores_ctrl: {
        value: cdktf.stringToHclTerraform(this._cbsCmnCpuStreamingStoresCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_determinism_slider: {
        value: cdktf.stringToHclTerraform(this._cbsCmnDeterminismSlider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_edc_control_throttle: {
        value: cdktf.stringToHclTerraform(this._cbsCmnEdcControlThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_efficiency_mode_en: {
        value: cdktf.stringToHclTerraform(this._cbsCmnEfficiencyModeEn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_efficiency_mode_en_rs: {
        value: cdktf.stringToHclTerraform(this._cbsCmnEfficiencyModeEnRs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_fixed_soc_pstate: {
        value: cdktf.stringToHclTerraform(this._cbsCmnFixedSocPstate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_gnb_nb_iommu: {
        value: cdktf.stringToHclTerraform(this._cbsCmnGnbNbIommu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_gnb_smu_df_cstates: {
        value: cdktf.stringToHclTerraform(this._cbsCmnGnbSmuDfCstates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_gnb_smu_dffo_rs: {
        value: cdktf.stringToHclTerraform(this._cbsCmnGnbSmuDffoRs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_gnb_smu_dlwm_support: {
        value: cdktf.stringToHclTerraform(this._cbsCmnGnbSmuDlwmSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_gnb_smucppc: {
        value: cdktf.stringToHclTerraform(this._cbsCmnGnbSmucppc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_mem_ctrl_bank_group_swap_ddr4: {
        value: cdktf.stringToHclTerraform(this._cbsCmnMemCtrlBankGroupSwapDdr4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_mem_ctrller_pwr_dn_en_ddr: {
        value: cdktf.stringToHclTerraform(this._cbsCmnMemCtrllerPwrDnEnDdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_mem_map_bank_interleave_ddr4: {
        value: cdktf.stringToHclTerraform(this._cbsCmnMemMapBankInterleaveDdr4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_mem_speed_ddr47xx2: {
        value: cdktf.stringToHclTerraform(this._cbsCmnMemSpeedDdr47Xx2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_mem_speed_ddr47xx3: {
        value: cdktf.stringToHclTerraform(this._cbsCmnMemSpeedDdr47Xx3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_preferred_io7xx2: {
        value: cdktf.stringToHclTerraform(this._cbsCmnPreferredIo7Xx2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmn_preferred_io7xx3: {
        value: cdktf.stringToHclTerraform(this._cbsCmnPreferredIo7Xx3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmnc_tdp_ctl: {
        value: cdktf.stringToHclTerraform(this._cbsCmncTdpCtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cmnx_gmi_force_link_width_rs: {
        value: cdktf.stringToHclTerraform(this._cbsCmnxGmiForceLinkWidthRs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cpu_ccd_ctrl_ssp: {
        value: cdktf.stringToHclTerraform(this._cbsCpuCcdCtrlSsp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cpu_core_ctrl: {
        value: cdktf.stringToHclTerraform(this._cbsCpuCoreCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cpu_down_core_ctrl_bergamo: {
        value: cdktf.stringToHclTerraform(this._cbsCpuDownCoreCtrlBergamo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cpu_down_core_ctrl_genoa: {
        value: cdktf.stringToHclTerraform(this._cbsCpuDownCoreCtrlGenoa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_cpu_smt_ctrl: {
        value: cdktf.stringToHclTerraform(this._cbsCpuSmtCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_dbg_cpu_gen_cpu_wdt: {
        value: cdktf.stringToHclTerraform(this._cbsDbgCpuGenCpuWdt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_dbg_cpu_lapic_mode: {
        value: cdktf.stringToHclTerraform(this._cbsDbgCpuLapicMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_dbg_cpu_snp_mem_cover: {
        value: cdktf.stringToHclTerraform(this._cbsDbgCpuSnpMemCover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_dbg_cpu_snp_mem_size_cover: {
        value: cdktf.stringToHclTerraform(this._cbsDbgCpuSnpMemSizeCover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_cmn4link_max_xgmi_speed: {
        value: cdktf.stringToHclTerraform(this._cbsDfCmn4LinkMaxXgmiSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_cmn_acpi_srat_l3numa: {
        value: cdktf.stringToHclTerraform(this._cbsDfCmnAcpiSratL3Numa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_cmn_dram_nps: {
        value: cdktf.stringToHclTerraform(this._cbsDfCmnDramNps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_cmn_dram_scrub_time: {
        value: cdktf.stringToHclTerraform(this._cbsDfCmnDramScrubTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_cmn_mem_intlv: {
        value: cdktf.stringToHclTerraform(this._cbsDfCmnMemIntlv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_cmn_mem_intlv_control: {
        value: cdktf.stringToHclTerraform(this._cbsDfCmnMemIntlvControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_cmn_mem_intlv_size: {
        value: cdktf.stringToHclTerraform(this._cbsDfCmnMemIntlvSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_df_dbg_xgmi_link_cfg: {
        value: cdktf.stringToHclTerraform(this._cbsDfDbgXgmiLinkCfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_gnb_dbg_pcie_tbt_support: {
        value: cdktf.stringToHclTerraform(this._cbsGnbDbgPcieTbtSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbs_sev_snp_support: {
        value: cdktf.stringToHclTerraform(this._cbsSevSnpSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_enable: {
        value: cdktf.stringToHclTerraform(this._cdnEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_support: {
        value: cdktf.stringToHclTerraform(this._cdnSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_inter_leave: {
        value: cdktf.stringToHclTerraform(this._channelInterLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_adaptive_mem_training: {
        value: cdktf.stringToHclTerraform(this._ciscoAdaptiveMemTraining),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_debug_level: {
        value: cdktf.stringToHclTerraform(this._ciscoDebugLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_oprom_launch_optimization: {
        value: cdktf.stringToHclTerraform(this._ciscoOpromLaunchOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cisco_xgmi_max_speed: {
        value: cdktf.stringToHclTerraform(this._ciscoXgmiMaxSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cke_low_policy: {
        value: cdktf.stringToHclTerraform(this._ckeLowPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      closed_loop_therm_throtl: {
        value: cdktf.stringToHclTerraform(this._closedLoopThermThrotl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmci_enable: {
        value: cdktf.stringToHclTerraform(this._cmciEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_tdp: {
        value: cdktf.stringToHclTerraform(this._configTdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_tdp_level: {
        value: cdktf.stringToHclTerraform(this._configTdpLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_redirection: {
        value: cdktf.stringToHclTerraform(this._consoleRedirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_multi_processing: {
        value: cdktf.stringToHclTerraform(this._coreMultiProcessing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_energy_performance: {
        value: cdktf.stringToHclTerraform(this._cpuEnergyPerformance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_frequency_floor: {
        value: cdktf.stringToHclTerraform(this._cpuFrequencyFloor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_pa_limit: {
        value: cdktf.stringToHclTerraform(this._cpuPaLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_perf_enhancement: {
        value: cdktf.stringToHclTerraform(this._cpuPerfEnhancement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_performance: {
        value: cdktf.stringToHclTerraform(this._cpuPerformance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_power_management: {
        value: cdktf.stringToHclTerraform(this._cpuPowerManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cr_qos: {
        value: cdktf.stringToHclTerraform(this._crQos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crfastgo_config: {
        value: cdktf.stringToHclTerraform(this._crfastgoConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcpmm_firmware_downgrade: {
        value: cdktf.stringToHclTerraform(this._dcpmmFirmwareDowngrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      demand_scrub: {
        value: cdktf.stringToHclTerraform(this._demandScrub),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfx_osb_en: {
        value: cdktf.stringToHclTerraform(this._dfxOsbEn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_cache_access: {
        value: cdktf.stringToHclTerraform(this._directCacheAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dma_ctrl_opt_in: {
        value: cdktf.stringToHclTerraform(this._dmaCtrlOptIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dram_clock_throttling: {
        value: cdktf.stringToHclTerraform(this._dramClockThrottling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dram_refresh_rate: {
        value: cdktf.stringToHclTerraform(this._dramRefreshRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dram_sw_thermal_throttling: {
        value: cdktf.stringToHclTerraform(this._dramSwThermalThrottling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eadr_support: {
        value: cdktf.stringToHclTerraform(this._eadrSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edpc_en: {
        value: cdktf.stringToHclTerraform(this._edpcEn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_clock_spread_spec: {
        value: cdktf.stringToHclTerraform(this._enableClockSpreadSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_mktme: {
        value: cdktf.stringToHclTerraform(this._enableMktme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rmt: {
        value: cdktf.stringToHclTerraform(this._enableRmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_sgx: {
        value: cdktf.stringToHclTerraform(this._enableSgx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_tdx: {
        value: cdktf.stringToHclTerraform(this._enableTdx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_tdx_seamldr: {
        value: cdktf.stringToHclTerraform(this._enableTdxSeamldr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_tme: {
        value: cdktf.stringToHclTerraform(this._enableTme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      energy_efficient_turbo: {
        value: cdktf.stringToHclTerraform(this._energyEfficientTurbo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eng_perf_tuning: {
        value: cdktf.stringToHclTerraform(this._engPerfTuning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_intel_speed_step_tech: {
        value: cdktf.stringToHclTerraform(this._enhancedIntelSpeedStepTech),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epoch_update: {
        value: cdktf.stringToHclTerraform(this._epochUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epp_enable: {
        value: cdktf.stringToHclTerraform(this._eppEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epp_profile: {
        value: cdktf.stringToHclTerraform(this._eppProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_check_scrub: {
        value: cdktf.stringToHclTerraform(this._errorCheckScrub),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_disable_bit: {
        value: cdktf.stringToHclTerraform(this._executeDisableBit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_apic: {
        value: cdktf.stringToHclTerraform(this._extendedApic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_control: {
        value: cdktf.stringToHclTerraform(this._flowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frb2enable: {
        value: cdktf.stringToHclTerraform(this._frb2Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_direct_cpu1: {
        value: cdktf.stringToHclTerraform(this._gpuDirectCpu1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_direct_cpu2: {
        value: cdktf.stringToHclTerraform(this._gpuDirectCpu2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_direct_cpu3: {
        value: cdktf.stringToHclTerraform(this._gpuDirectCpu3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_direct_cpu4: {
        value: cdktf.stringToHclTerraform(this._gpuDirectCpu4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_prefetch: {
        value: cdktf.stringToHclTerraform(this._hardwarePrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hwpm_enable: {
        value: cdktf.stringToHclTerraform(this._hwpmEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imc_interleave: {
        value: cdktf.stringToHclTerraform(this._imcInterleave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_dynamic_speed_select: {
        value: cdktf.stringToHclTerraform(this._intelDynamicSpeedSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_hyper_threading_tech: {
        value: cdktf.stringToHclTerraform(this._intelHyperThreadingTech),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_speed_select: {
        value: cdktf.stringToHclTerraform(this._intelSpeedSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_turbo_boost_tech: {
        value: cdktf.stringToHclTerraform(this._intelTurboBoostTech),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_virtualization_technology: {
        value: cdktf.stringToHclTerraform(this._intelVirtualizationTechnology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_vt_for_directed_io: {
        value: cdktf.stringToHclTerraform(this._intelVtForDirectedIo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_vtd_coherency_support: {
        value: cdktf.stringToHclTerraform(this._intelVtdCoherencySupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_vtd_interrupt_remapping: {
        value: cdktf.stringToHclTerraform(this._intelVtdInterruptRemapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_vtd_pass_through_dma_support: {
        value: cdktf.stringToHclTerraform(this._intelVtdPassThroughDmaSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intel_vtdats_support: {
        value: cdktf.stringToHclTerraform(this._intelVtdatsSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ioat_config_cpm: {
        value: cdktf.stringToHclTerraform(this._ioatConfigCpm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ioh_error_enable: {
        value: cdktf.stringToHclTerraform(this._iohErrorEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ioh_resource: {
        value: cdktf.stringToHclTerraform(this._iohResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_prefetch: {
        value: cdktf.stringToHclTerraform(this._ipPrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4http: {
        value: cdktf.stringToHclTerraform(this._ipv4Http),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4pxe: {
        value: cdktf.stringToHclTerraform(this._ipv4Pxe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6http: {
        value: cdktf.stringToHclTerraform(this._ipv6Http),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6pxe: {
        value: cdktf.stringToHclTerraform(this._ipv6Pxe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kti_prefetch: {
        value: cdktf.stringToHclTerraform(this._ktiPrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latency_optimized_mode: {
        value: cdktf.stringToHclTerraform(this._latencyOptimizedMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_os_redirection: {
        value: cdktf.stringToHclTerraform(this._legacyOsRedirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_usb_support: {
        value: cdktf.stringToHclTerraform(this._legacyUsbSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      llc_alloc: {
        value: cdktf.stringToHclTerraform(this._llcAlloc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      llc_prefetch: {
        value: cdktf.stringToHclTerraform(this._llcPrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lom_port0state: {
        value: cdktf.stringToHclTerraform(this._lomPort0State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lom_port1state: {
        value: cdktf.stringToHclTerraform(this._lomPort1State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lom_port2state: {
        value: cdktf.stringToHclTerraform(this._lomPort2State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lom_port3state: {
        value: cdktf.stringToHclTerraform(this._lomPort3State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lom_ports_all_state: {
        value: cdktf.stringToHclTerraform(this._lomPortsAllState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lv_ddr_mode: {
        value: cdktf.stringToHclTerraform(this._lvDdrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      make_device_non_bootable: {
        value: cdktf.stringToHclTerraform(this._makeDeviceNonBootable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_bandwidth_boost: {
        value: cdktf.stringToHclTerraform(this._memoryBandwidthBoost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_inter_leave: {
        value: cdktf.stringToHclTerraform(this._memoryInterLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_mapped_io_above4gb: {
        value: cdktf.stringToHclTerraform(this._memoryMappedIoAbove4Gb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_refresh_rate: {
        value: cdktf.stringToHclTerraform(this._memoryRefreshRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size_limit: {
        value: cdktf.stringToHclTerraform(this._memorySizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_thermal_throttling: {
        value: cdktf.stringToHclTerraform(this._memoryThermalThrottling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirroring_mode: {
        value: cdktf.stringToHclTerraform(this._mirroringMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mmcfg_base: {
        value: cdktf.stringToHclTerraform(this._mmcfgBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mmioh_base: {
        value: cdktf.stringToHclTerraform(this._mmiohBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mmioh_size: {
        value: cdktf.stringToHclTerraform(this._mmiohSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
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
      network_stack: {
        value: cdktf.stringToHclTerraform(this._networkStack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numa_optimized: {
        value: cdktf.stringToHclTerraform(this._numaOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nvmdimm_perform_config: {
        value: cdktf.stringToHclTerraform(this._nvmdimmPerformConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboard10gbit_lom: {
        value: cdktf.stringToHclTerraform(this._onboard10GbitLom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboard_gbit_lom: {
        value: cdktf.stringToHclTerraform(this._onboardGbitLom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboard_scu_storage_support: {
        value: cdktf.stringToHclTerraform(this._onboardScuStorageSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onboard_scu_storage_sw_stack: {
        value: cdktf.stringToHclTerraform(this._onboardScuStorageSwStack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_mode: {
        value: cdktf.stringToHclTerraform(this._operationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimized_power_mode: {
        value: cdktf.stringToHclTerraform(this._optimizedPowerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_boot_watchdog_timer: {
        value: cdktf.stringToHclTerraform(this._osBootWatchdogTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_boot_watchdog_timer_policy: {
        value: cdktf.stringToHclTerraform(this._osBootWatchdogTimerPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_boot_watchdog_timer_timeout: {
        value: cdktf.stringToHclTerraform(this._osBootWatchdogTimerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_band_mgmt_port: {
        value: cdktf.stringToHclTerraform(this._outOfBandMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      package_cstate_limit: {
        value: cdktf.stringToHclTerraform(this._packageCstateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      panic_high_watermark: {
        value: cdktf.stringToHclTerraform(this._panicHighWatermark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_cache_line_sparing: {
        value: cdktf.stringToHclTerraform(this._partialCacheLineSparing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_mirror_mode_config: {
        value: cdktf.stringToHclTerraform(this._partialMirrorModeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_mirror_percent: {
        value: cdktf.stringToHclTerraform(this._partialMirrorPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_mirror_value1: {
        value: cdktf.stringToHclTerraform(this._partialMirrorValue1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_mirror_value2: {
        value: cdktf.stringToHclTerraform(this._partialMirrorValue2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_mirror_value3: {
        value: cdktf.stringToHclTerraform(this._partialMirrorValue3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_mirror_value4: {
        value: cdktf.stringToHclTerraform(this._partialMirrorValue4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patrol_scrub: {
        value: cdktf.stringToHclTerraform(this._patrolScrub),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patrol_scrub_duration: {
        value: cdktf.stringToHclTerraform(this._patrolScrubDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pc_ie_ras_support: {
        value: cdktf.stringToHclTerraform(this._pcIeRasSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pc_ie_ssd_hot_plug_support: {
        value: cdktf.stringToHclTerraform(this._pcIeSsdHotPlugSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pch_pcie_pll_ssc: {
        value: cdktf.stringToHclTerraform(this._pchPciePllSsc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pch_usb30mode: {
        value: cdktf.stringToHclTerraform(this._pchUsb30Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pci_option_ro_ms: {
        value: cdktf.stringToHclTerraform(this._pciOptionRoMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pci_rom_clp: {
        value: cdktf.stringToHclTerraform(this._pciRomClp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_ari_support: {
        value: cdktf.stringToHclTerraform(this._pcieAriSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_pll_ssc: {
        value: cdktf.stringToHclTerraform(this._pciePllSsc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_mraid1link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotMraid1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_mraid1option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotMraid1OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_mraid2link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotMraid2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_mraid2option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotMraid2OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_mstorraid_link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotMstorraidLinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_mstorraid_option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotMstorraidOptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme1link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme1option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme1OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme2link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme2option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme2OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme3link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme3LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme3option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme3OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme4link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme4LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme4option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme4OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme5link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme5LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme5option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme5OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme6link_speed: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme6LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slot_nvme6option_rom: {
        value: cdktf.stringToHclTerraform(this._pcieSlotNvme6OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcie_slots_cdn_enable: {
        value: cdktf.stringToHclTerraform(this._pcieSlotsCdnEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop_support: {
        value: cdktf.stringToHclTerraform(this._popSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_error_pause: {
        value: cdktf.stringToHclTerraform(this._postErrorPause),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_package_repair: {
        value: cdktf.stringToHclTerraform(this._postPackageRepair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_boot_dma_protection: {
        value: cdktf.stringToHclTerraform(this._preBootDmaProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prmrr_size: {
        value: cdktf.stringToHclTerraform(this._prmrrSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processor_c1e: {
        value: cdktf.stringToHclTerraform(this._processorC1E),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processor_c3report: {
        value: cdktf.stringToHclTerraform(this._processorC3Report),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processor_c6report: {
        value: cdktf.stringToHclTerraform(this._processorC6Report),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processor_cstate: {
        value: cdktf.stringToHclTerraform(this._processorCstate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psata: {
        value: cdktf.stringToHclTerraform(this._psata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pstate_coord_type: {
        value: cdktf.stringToHclTerraform(this._pstateCoordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      putty_key_pad: {
        value: cdktf.stringToHclTerraform(this._puttyKeyPad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwr_perf_tuning: {
        value: cdktf.stringToHclTerraform(this._pwrPerfTuning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qpi_link_frequency: {
        value: cdktf.stringToHclTerraform(this._qpiLinkFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qpi_link_speed: {
        value: cdktf.stringToHclTerraform(this._qpiLinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qpi_snoop_mode: {
        value: cdktf.stringToHclTerraform(this._qpiSnoopMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rank_inter_leave: {
        value: cdktf.stringToHclTerraform(this._rankInterLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirection_after_post: {
        value: cdktf.stringToHclTerraform(this._redirectionAfterPost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resize_bar_support: {
        value: cdktf.stringToHclTerraform(this._resizeBarSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_post_package_repair: {
        value: cdktf.stringToHclTerraform(this._runtimePostPackageRepair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sata_mode_select: {
        value: cdktf.stringToHclTerraform(this._sataModeSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      select_memory_ras_configuration: {
        value: cdktf.stringToHclTerraform(this._selectMemoryRasConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      select_ppr_type: {
        value: cdktf.stringToHclTerraform(this._selectPprType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_mux: {
        value: cdktf.stringToHclTerraform(this._serialMux),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_port_aenable: {
        value: cdktf.stringToHclTerraform(this._serialPortAenable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sev: {
        value: cdktf.stringToHclTerraform(this._sev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_auto_registration_agent: {
        value: cdktf.stringToHclTerraform(this._sgxAutoRegistrationAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_epoch0: {
        value: cdktf.stringToHclTerraform(this._sgxEpoch0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_epoch1: {
        value: cdktf.stringToHclTerraform(this._sgxEpoch1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_factory_reset: {
        value: cdktf.stringToHclTerraform(this._sgxFactoryReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_le_pub_key_hash0: {
        value: cdktf.stringToHclTerraform(this._sgxLePubKeyHash0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_le_pub_key_hash1: {
        value: cdktf.stringToHclTerraform(this._sgxLePubKeyHash1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_le_pub_key_hash2: {
        value: cdktf.stringToHclTerraform(this._sgxLePubKeyHash2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_le_pub_key_hash3: {
        value: cdktf.stringToHclTerraform(this._sgxLePubKeyHash3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_le_wr: {
        value: cdktf.stringToHclTerraform(this._sgxLeWr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_package_info_in_band_access: {
        value: cdktf.stringToHclTerraform(this._sgxPackageInfoInBandAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_qos: {
        value: cdktf.stringToHclTerraform(this._sgxQos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sha1pcr_bank: {
        value: cdktf.stringToHclTerraform(this._sha1PcrBank),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sha256pcr_bank: {
        value: cdktf.stringToHclTerraform(this._sha256PcrBank),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sha384pcr_bank: {
        value: cdktf.stringToHclTerraform(this._sha384PcrBank),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_pctl_enable: {
        value: cdktf.stringToHclTerraform(this._singlePctlEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot10link_speed: {
        value: cdktf.stringToHclTerraform(this._slot10LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot10state: {
        value: cdktf.stringToHclTerraform(this._slot10State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot11link_speed: {
        value: cdktf.stringToHclTerraform(this._slot11LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot11state: {
        value: cdktf.stringToHclTerraform(this._slot11State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot12link_speed: {
        value: cdktf.stringToHclTerraform(this._slot12LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot12state: {
        value: cdktf.stringToHclTerraform(this._slot12State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot13state: {
        value: cdktf.stringToHclTerraform(this._slot13State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot14state: {
        value: cdktf.stringToHclTerraform(this._slot14State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot1link_speed: {
        value: cdktf.stringToHclTerraform(this._slot1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot1state: {
        value: cdktf.stringToHclTerraform(this._slot1State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot2link_speed: {
        value: cdktf.stringToHclTerraform(this._slot2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot2state: {
        value: cdktf.stringToHclTerraform(this._slot2State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot3link_speed: {
        value: cdktf.stringToHclTerraform(this._slot3LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot3state: {
        value: cdktf.stringToHclTerraform(this._slot3State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot4link_speed: {
        value: cdktf.stringToHclTerraform(this._slot4LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot4state: {
        value: cdktf.stringToHclTerraform(this._slot4State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot5link_speed: {
        value: cdktf.stringToHclTerraform(this._slot5LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot5state: {
        value: cdktf.stringToHclTerraform(this._slot5State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot6link_speed: {
        value: cdktf.stringToHclTerraform(this._slot6LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot6state: {
        value: cdktf.stringToHclTerraform(this._slot6State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot7link_speed: {
        value: cdktf.stringToHclTerraform(this._slot7LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot7state: {
        value: cdktf.stringToHclTerraform(this._slot7State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot8link_speed: {
        value: cdktf.stringToHclTerraform(this._slot8LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot8state: {
        value: cdktf.stringToHclTerraform(this._slot8State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot9link_speed: {
        value: cdktf.stringToHclTerraform(this._slot9LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot9state: {
        value: cdktf.stringToHclTerraform(this._slot9State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_flom_link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFlomLinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme10link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme10LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme10option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme10OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme11link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme11LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme11option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme11OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme12link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme12LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme12option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme12OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme13link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme13LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme13option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme13OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme14link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme14LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme14option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme14OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme15link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme15LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme15option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme15OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme16link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme16LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme16option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme16OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme17link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme17LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme17option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme17OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme18link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme18LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme18option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme18OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme19link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme19LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme19option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme19OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme1link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme1option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme1OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme20link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme20LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme20option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme20OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme21link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme21LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme21option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme21OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme22link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme22LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme22option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme22OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme23link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme23LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme23option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme23OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme24link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme24LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme24option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme24OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme25link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme25LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme25option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme25OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme26link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme26LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme26option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme26OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme27link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme27LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme27option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme27OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme28link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme28LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme28option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme28OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme29link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme29LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme29option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme29OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme2link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme2option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme2OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme30link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme30LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme30option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme30OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme31link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme31LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme31option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme31OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme32link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme32LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme32option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme32OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme3link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme3LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme3option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme3OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme4link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme4LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme4option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme4OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme5link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme5LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme5option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme5OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme6link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme6LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme6option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme6OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme7link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme7LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme7option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme7OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme8link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme8LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme8option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme8OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme9link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme9LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_nvme9option_rom: {
        value: cdktf.stringToHclTerraform(this._slotFrontNvme9OptionRom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_slot5link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontSlot5LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_front_slot6link_speed: {
        value: cdktf.stringToHclTerraform(this._slotFrontSlot6LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu1state: {
        value: cdktf.stringToHclTerraform(this._slotGpu1State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu2state: {
        value: cdktf.stringToHclTerraform(this._slotGpu2State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu3state: {
        value: cdktf.stringToHclTerraform(this._slotGpu3State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu4state: {
        value: cdktf.stringToHclTerraform(this._slotGpu4State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu5state: {
        value: cdktf.stringToHclTerraform(this._slotGpu5State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu6state: {
        value: cdktf.stringToHclTerraform(this._slotGpu6State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu7state: {
        value: cdktf.stringToHclTerraform(this._slotGpu7State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_gpu8state: {
        value: cdktf.stringToHclTerraform(this._slotGpu8State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_hba_link_speed: {
        value: cdktf.stringToHclTerraform(this._slotHbaLinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_hba_state: {
        value: cdktf.stringToHclTerraform(this._slotHbaState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_lom1link: {
        value: cdktf.stringToHclTerraform(this._slotLom1Link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_lom2link: {
        value: cdktf.stringToHclTerraform(this._slotLom2Link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_mezz_state: {
        value: cdktf.stringToHclTerraform(this._slotMezzState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_mlom_link_speed: {
        value: cdktf.stringToHclTerraform(this._slotMlomLinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_mlom_state: {
        value: cdktf.stringToHclTerraform(this._slotMlomState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_mraid_link_speed: {
        value: cdktf.stringToHclTerraform(this._slotMraidLinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_mraid_state: {
        value: cdktf.stringToHclTerraform(this._slotMraidState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n10state: {
        value: cdktf.stringToHclTerraform(this._slotN10State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n11state: {
        value: cdktf.stringToHclTerraform(this._slotN11State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n12state: {
        value: cdktf.stringToHclTerraform(this._slotN12State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n13state: {
        value: cdktf.stringToHclTerraform(this._slotN13State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n14state: {
        value: cdktf.stringToHclTerraform(this._slotN14State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n15state: {
        value: cdktf.stringToHclTerraform(this._slotN15State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n16state: {
        value: cdktf.stringToHclTerraform(this._slotN16State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n17state: {
        value: cdktf.stringToHclTerraform(this._slotN17State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n18state: {
        value: cdktf.stringToHclTerraform(this._slotN18State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n19state: {
        value: cdktf.stringToHclTerraform(this._slotN19State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n1state: {
        value: cdktf.stringToHclTerraform(this._slotN1State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n20state: {
        value: cdktf.stringToHclTerraform(this._slotN20State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n21state: {
        value: cdktf.stringToHclTerraform(this._slotN21State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n22state: {
        value: cdktf.stringToHclTerraform(this._slotN22State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n23state: {
        value: cdktf.stringToHclTerraform(this._slotN23State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n24state: {
        value: cdktf.stringToHclTerraform(this._slotN24State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n2state: {
        value: cdktf.stringToHclTerraform(this._slotN2State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n3state: {
        value: cdktf.stringToHclTerraform(this._slotN3State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n4state: {
        value: cdktf.stringToHclTerraform(this._slotN4State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n5state: {
        value: cdktf.stringToHclTerraform(this._slotN5State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n6state: {
        value: cdktf.stringToHclTerraform(this._slotN6State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n7state: {
        value: cdktf.stringToHclTerraform(this._slotN7State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n8state: {
        value: cdktf.stringToHclTerraform(this._slotN8State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_n9state: {
        value: cdktf.stringToHclTerraform(this._slotN9State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_raid_link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRaidLinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_raid_state: {
        value: cdktf.stringToHclTerraform(this._slotRaidState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme1link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme1state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme1State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme2link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme2state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme2State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme3link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme3LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme3state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme3State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme4link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme4LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme4state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme4State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme5state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme5State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme6state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme6State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme7state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme7State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_rear_nvme8state: {
        value: cdktf.stringToHclTerraform(this._slotRearNvme8State),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser1link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser1slot1link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser1Slot1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser1slot2link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser1Slot2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser1slot3link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser1Slot3LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser2link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser2slot4link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser2Slot4LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser2slot5link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser2Slot5LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_riser2slot6link_speed: {
        value: cdktf.stringToHclTerraform(this._slotRiser2Slot6LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_sas_state: {
        value: cdktf.stringToHclTerraform(this._slotSasState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_ssd_slot1link_speed: {
        value: cdktf.stringToHclTerraform(this._slotSsdSlot1LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_ssd_slot2link_speed: {
        value: cdktf.stringToHclTerraform(this._slotSsdSlot2LinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smee: {
        value: cdktf.stringToHclTerraform(this._smee),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smt_mode: {
        value: cdktf.stringToHclTerraform(this._smtMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snc: {
        value: cdktf.stringToHclTerraform(this._snc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snoopy_mode_for2lm: {
        value: cdktf.stringToHclTerraform(this._snoopyModeFor2Lm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snoopy_mode_for_ad: {
        value: cdktf.stringToHclTerraform(this._snoopyModeForAd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sparing_mode: {
        value: cdktf.stringToHclTerraform(this._sparingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sr_iov: {
        value: cdktf.stringToHclTerraform(this._srIov),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streamer_prefetch: {
        value: cdktf.stringToHclTerraform(this._streamerPrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_mode: {
        value: cdktf.stringToHclTerraform(this._svmMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminal_type: {
        value: cdktf.stringToHclTerraform(this._terminalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpm_control: {
        value: cdktf.stringToHclTerraform(this._tpmControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpm_pending_operation: {
        value: cdktf.stringToHclTerraform(this._tpmPendingOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpm_ppi_required: {
        value: cdktf.stringToHclTerraform(this._tpmPpiRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpm_support: {
        value: cdktf.stringToHclTerraform(this._tpmSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tsme: {
        value: cdktf.stringToHclTerraform(this._tsme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      txt_support: {
        value: cdktf.stringToHclTerraform(this._txtSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ucsm_boot_order_rule: {
        value: cdktf.stringToHclTerraform(this._ucsmBootOrderRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uefi_mem_map_sp_flag_en: {
        value: cdktf.stringToHclTerraform(this._uefiMemMapSpFlagEn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ufs_disable: {
        value: cdktf.stringToHclTerraform(this._ufsDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uma_based_clustering: {
        value: cdktf.stringToHclTerraform(this._umaBasedClustering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upi_link_enablement: {
        value: cdktf.stringToHclTerraform(this._upiLinkEnablement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upi_power_management: {
        value: cdktf.stringToHclTerraform(this._upiPowerManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_emul6064: {
        value: cdktf.stringToHclTerraform(this._usbEmul6064),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_port_front: {
        value: cdktf.stringToHclTerraform(this._usbPortFront),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_port_internal: {
        value: cdktf.stringToHclTerraform(this._usbPortInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_port_kvm: {
        value: cdktf.stringToHclTerraform(this._usbPortKvm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_port_rear: {
        value: cdktf.stringToHclTerraform(this._usbPortRear),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_port_sd_card: {
        value: cdktf.stringToHclTerraform(this._usbPortSdCard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_port_vmedia: {
        value: cdktf.stringToHclTerraform(this._usbPortVmedia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_xhci_support: {
        value: cdktf.stringToHclTerraform(this._usbXhciSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vga_priority: {
        value: cdktf.stringToHclTerraform(this._vgaPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_numa: {
        value: cdktf.stringToHclTerraform(this._virtualNuma),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmd_enable: {
        value: cdktf.stringToHclTerraform(this._vmdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vol_memory_mode: {
        value: cdktf.stringToHclTerraform(this._volMemoryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_load_config: {
        value: cdktf.stringToHclTerraform(this._workLoadConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x2apic_opt_out: {
        value: cdktf.stringToHclTerraform(this._x2ApicOptOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xpt_prefetch: {
        value: cdktf.stringToHclTerraform(this._xptPrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xpt_remote_prefetch: {
        value: cdktf.stringToHclTerraform(this._xptRemotePrefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightBiosPolicyAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightBiosPolicyAncestorsList",
      },
      organization: {
        value: dataIntersightBiosPolicyOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightBiosPolicyOrganizationList",
      },
      parent: {
        value: dataIntersightBiosPolicyParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightBiosPolicyParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightBiosPolicyPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightBiosPolicyPermissionResourcesList",
      },
      profiles: {
        value: cdktf.listMapperHcl(dataIntersightBiosPolicyProfilesToHclTerraform, true)(this._profiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightBiosPolicyProfilesList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightBiosPolicyTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightBiosPolicyTagsList",
      },
      version_context: {
        value: dataIntersightBiosPolicyVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightBiosPolicyVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
