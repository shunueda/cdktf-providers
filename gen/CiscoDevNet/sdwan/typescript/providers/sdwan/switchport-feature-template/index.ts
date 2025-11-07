// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchportFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set when a MAC table entry ages out (0 to disable, 10-1000000 otherwise)
  *   - Range: `0`-`1000000`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#age_out_time SwitchportFeatureTemplate#age_out_time}
  */
  readonly ageOutTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#age_out_time_variable SwitchportFeatureTemplate#age_out_time_variable}
  */
  readonly ageOutTimeVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#description SwitchportFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#device_types SwitchportFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Interface name: GigabitEthernet0/<>/<> when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#interfaces SwitchportFeatureTemplate#interfaces}
  */
  readonly interfaces?: SwitchportFeatureTemplateInterfaces[] | cdktf.IResolvable;
  /**
  * Module type
  *   - Choices: `4`, `8`, `22`, `50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#module_type SwitchportFeatureTemplate#module_type}
  */
  readonly moduleType?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#name SwitchportFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Number of Slots
  *   - Range: `0`-`31`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#slot SwitchportFeatureTemplate#slot}
  */
  readonly slot?: number;
  /**
  * Add static MAC address entries for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#static_mac_addresses SwitchportFeatureTemplate#static_mac_addresses}
  */
  readonly staticMacAddresses?: SwitchportFeatureTemplateStaticMacAddresses[] | cdktf.IResolvable;
  /**
  * Number of Sub-Slots
  *   - Range: `0`-`31`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#sub_slot SwitchportFeatureTemplate#sub_slot}
  */
  readonly subSlot?: number;
}
export interface SwitchportFeatureTemplateInterfaces {
  /**
  * Specify authentication methods in the order of preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_authentication_order SwitchportFeatureTemplate#dot1x_authentication_order}
  */
  readonly dot1XAuthenticationOrder?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_authentication_order_variable SwitchportFeatureTemplate#dot1x_authentication_order_variable}
  */
  readonly dot1XAuthenticationOrderVariable?: string;
  /**
  * Set uni or bi directional authorization mode
  *   - Choices: `both`, `in`
  *   - Default value: `both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_control_direction SwitchportFeatureTemplate#dot1x_control_direction}
  */
  readonly dot1XControlDirection?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_control_direction_variable SwitchportFeatureTemplate#dot1x_control_direction_variable}
  */
  readonly dot1XControlDirectionVariable?: string;
  /**
  * Set Critical VLAN
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_critical_vlan SwitchportFeatureTemplate#dot1x_critical_vlan}
  */
  readonly dot1XCriticalVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_critical_vlan_variable SwitchportFeatureTemplate#dot1x_critical_vlan_variable}
  */
  readonly dot1XCriticalVlanVariable?: string;
  /**
  * Set 802.1x on off
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_enable SwitchportFeatureTemplate#dot1x_enable}
  */
  readonly dot1XEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable Critical Voice VLAN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_enable_criticial_voice_vlan SwitchportFeatureTemplate#dot1x_enable_criticial_voice_vlan}
  */
  readonly dot1XEnableCriticialVoiceVlan?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_enable_criticial_voice_vlan_variable SwitchportFeatureTemplate#dot1x_enable_criticial_voice_vlan_variable}
  */
  readonly dot1XEnableCriticialVoiceVlanVariable?: string;
  /**
  * Enable Periodic Reauthentication
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_enable_periodic_reauth SwitchportFeatureTemplate#dot1x_enable_periodic_reauth}
  */
  readonly dot1XEnablePeriodicReauth?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_enable_periodic_reauth_variable SwitchportFeatureTemplate#dot1x_enable_periodic_reauth_variable}
  */
  readonly dot1XEnablePeriodicReauthVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_enable_variable SwitchportFeatureTemplate#dot1x_enable_variable}
  */
  readonly dot1XEnableVariable?: string;
  /**
  * Set vlan to drop non-802.1x enabled clients into if client is not in MAB list
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_guest_vlan SwitchportFeatureTemplate#dot1x_guest_vlan}
  */
  readonly dot1XGuestVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_guest_vlan_variable SwitchportFeatureTemplate#dot1x_guest_vlan_variable}
  */
  readonly dot1XGuestVlanVariable?: string;
  /**
  * Set host mode
  *   - Choices: `single-host`, `multi-auth`, `multi-host`, `multi-domain`
  *   - Default value: `single-host`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_host_mode SwitchportFeatureTemplate#dot1x_host_mode}
  */
  readonly dot1XHostMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_host_mode_variable SwitchportFeatureTemplate#dot1x_host_mode_variable}
  */
  readonly dot1XHostModeVariable?: string;
  /**
  * MAC Authentication Bypass
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_mac_authentication_bypass SwitchportFeatureTemplate#dot1x_mac_authentication_bypass}
  */
  readonly dot1XMacAuthenticationBypass?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_mac_authentication_bypass_variable SwitchportFeatureTemplate#dot1x_mac_authentication_bypass_variable}
  */
  readonly dot1XMacAuthenticationBypassVariable?: string;
  /**
  * Set 802.1x Interface Pae Type
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_pae_enable SwitchportFeatureTemplate#dot1x_pae_enable}
  */
  readonly dot1XPaeEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_pae_enable_variable SwitchportFeatureTemplate#dot1x_pae_enable_variable}
  */
  readonly dot1XPaeEnableVariable?: string;
  /**
  * Periodic Reauthentication Inactivity Timeout (in seconds)
  *   - Range: `1`-`1440`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_periodic_reauth_inactivity_timeout SwitchportFeatureTemplate#dot1x_periodic_reauth_inactivity_timeout}
  */
  readonly dot1XPeriodicReauthInactivityTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_periodic_reauth_inactivity_timeout_variable SwitchportFeatureTemplate#dot1x_periodic_reauth_inactivity_timeout_variable}
  */
  readonly dot1XPeriodicReauthInactivityTimeoutVariable?: string;
  /**
  * Periodic Reauthentication Interval (in seconds)
  *   - Range: `0`-`1440`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_periodic_reauth_interval SwitchportFeatureTemplate#dot1x_periodic_reauth_interval}
  */
  readonly dot1XPeriodicReauthInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_periodic_reauth_interval_variable SwitchportFeatureTemplate#dot1x_periodic_reauth_interval_variable}
  */
  readonly dot1XPeriodicReauthIntervalVariable?: string;
  /**
  * Set Port-Control Mode
  *   - Choices: `auto`, `force-unauthorized`, `force-authorized`
  *   - Default value: `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_port_control SwitchportFeatureTemplate#dot1x_port_control}
  */
  readonly dot1XPortControl?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_port_control_variable SwitchportFeatureTemplate#dot1x_port_control_variable}
  */
  readonly dot1XPortControlVariable?: string;
  /**
  * Set Restricted VLAN ID
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_restricted_vlan SwitchportFeatureTemplate#dot1x_restricted_vlan}
  */
  readonly dot1XRestrictedVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#dot1x_restricted_vlan_variable SwitchportFeatureTemplate#dot1x_restricted_vlan_variable}
  */
  readonly dot1XRestrictedVlanVariable?: string;
  /**
  * Duplex mode
  *   - Choices: `full`, `half`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#duplex SwitchportFeatureTemplate#duplex}
  */
  readonly duplex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#duplex_variable SwitchportFeatureTemplate#duplex_variable}
  */
  readonly duplexVariable?: string;
  /**
  * Set Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#name SwitchportFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#name_variable SwitchportFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#optional SwitchportFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#shutdown SwitchportFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#shutdown_variable SwitchportFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set interface speed
  *   - Choices: `10`, `100`, `1000`, `2500`, `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#speed SwitchportFeatureTemplate#speed}
  */
  readonly speed?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#speed_variable SwitchportFeatureTemplate#speed_variable}
  */
  readonly speedVariable?: string;
  /**
  * Set VLAN identifier associated with bridging domain
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#switchport_access_vlan SwitchportFeatureTemplate#switchport_access_vlan}
  */
  readonly switchportAccessVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#switchport_access_vlan_variable SwitchportFeatureTemplate#switchport_access_vlan_variable}
  */
  readonly switchportAccessVlanVariable?: string;
  /**
  * Set type of switch port: access/trunk
  *   - Choices: `access`, `trunk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#switchport_mode SwitchportFeatureTemplate#switchport_mode}
  */
  readonly switchportMode?: string;
  /**
  * Configure VLAN IDs used with the trunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#switchport_trunk_allowed_vlans SwitchportFeatureTemplate#switchport_trunk_allowed_vlans}
  */
  readonly switchportTrunkAllowedVlans?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#switchport_trunk_allowed_vlans_variable SwitchportFeatureTemplate#switchport_trunk_allowed_vlans_variable}
  */
  readonly switchportTrunkAllowedVlansVariable?: string;
  /**
  * Configure VLAN ID used for native VLAN
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#switchport_trunk_native_vlan SwitchportFeatureTemplate#switchport_trunk_native_vlan}
  */
  readonly switchportTrunkNativeVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#switchport_trunk_native_vlan_variable SwitchportFeatureTemplate#switchport_trunk_native_vlan_variable}
  */
  readonly switchportTrunkNativeVlanVariable?: string;
  /**
  * Configure Voice Vlan
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#voice_vlan SwitchportFeatureTemplate#voice_vlan}
  */
  readonly voiceVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#voice_vlan_variable SwitchportFeatureTemplate#voice_vlan_variable}
  */
  readonly voiceVlanVariable?: string;
}

export function switchportFeatureTemplateInterfacesToTerraform(struct?: SwitchportFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dot1x_authentication_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dot1XAuthenticationOrder),
    dot1x_authentication_order_variable: cdktf.stringToTerraform(struct!.dot1XAuthenticationOrderVariable),
    dot1x_control_direction: cdktf.stringToTerraform(struct!.dot1XControlDirection),
    dot1x_control_direction_variable: cdktf.stringToTerraform(struct!.dot1XControlDirectionVariable),
    dot1x_critical_vlan: cdktf.numberToTerraform(struct!.dot1XCriticalVlan),
    dot1x_critical_vlan_variable: cdktf.stringToTerraform(struct!.dot1XCriticalVlanVariable),
    dot1x_enable: cdktf.booleanToTerraform(struct!.dot1XEnable),
    dot1x_enable_criticial_voice_vlan: cdktf.booleanToTerraform(struct!.dot1XEnableCriticialVoiceVlan),
    dot1x_enable_criticial_voice_vlan_variable: cdktf.stringToTerraform(struct!.dot1XEnableCriticialVoiceVlanVariable),
    dot1x_enable_periodic_reauth: cdktf.booleanToTerraform(struct!.dot1XEnablePeriodicReauth),
    dot1x_enable_periodic_reauth_variable: cdktf.stringToTerraform(struct!.dot1XEnablePeriodicReauthVariable),
    dot1x_enable_variable: cdktf.stringToTerraform(struct!.dot1XEnableVariable),
    dot1x_guest_vlan: cdktf.numberToTerraform(struct!.dot1XGuestVlan),
    dot1x_guest_vlan_variable: cdktf.stringToTerraform(struct!.dot1XGuestVlanVariable),
    dot1x_host_mode: cdktf.stringToTerraform(struct!.dot1XHostMode),
    dot1x_host_mode_variable: cdktf.stringToTerraform(struct!.dot1XHostModeVariable),
    dot1x_mac_authentication_bypass: cdktf.booleanToTerraform(struct!.dot1XMacAuthenticationBypass),
    dot1x_mac_authentication_bypass_variable: cdktf.stringToTerraform(struct!.dot1XMacAuthenticationBypassVariable),
    dot1x_pae_enable: cdktf.booleanToTerraform(struct!.dot1XPaeEnable),
    dot1x_pae_enable_variable: cdktf.stringToTerraform(struct!.dot1XPaeEnableVariable),
    dot1x_periodic_reauth_inactivity_timeout: cdktf.numberToTerraform(struct!.dot1XPeriodicReauthInactivityTimeout),
    dot1x_periodic_reauth_inactivity_timeout_variable: cdktf.stringToTerraform(struct!.dot1XPeriodicReauthInactivityTimeoutVariable),
    dot1x_periodic_reauth_interval: cdktf.numberToTerraform(struct!.dot1XPeriodicReauthInterval),
    dot1x_periodic_reauth_interval_variable: cdktf.stringToTerraform(struct!.dot1XPeriodicReauthIntervalVariable),
    dot1x_port_control: cdktf.stringToTerraform(struct!.dot1XPortControl),
    dot1x_port_control_variable: cdktf.stringToTerraform(struct!.dot1XPortControlVariable),
    dot1x_restricted_vlan: cdktf.numberToTerraform(struct!.dot1XRestrictedVlan),
    dot1x_restricted_vlan_variable: cdktf.stringToTerraform(struct!.dot1XRestrictedVlanVariable),
    duplex: cdktf.stringToTerraform(struct!.duplex),
    duplex_variable: cdktf.stringToTerraform(struct!.duplexVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    speed: cdktf.stringToTerraform(struct!.speed),
    speed_variable: cdktf.stringToTerraform(struct!.speedVariable),
    switchport_access_vlan: cdktf.numberToTerraform(struct!.switchportAccessVlan),
    switchport_access_vlan_variable: cdktf.stringToTerraform(struct!.switchportAccessVlanVariable),
    switchport_mode: cdktf.stringToTerraform(struct!.switchportMode),
    switchport_trunk_allowed_vlans: cdktf.stringToTerraform(struct!.switchportTrunkAllowedVlans),
    switchport_trunk_allowed_vlans_variable: cdktf.stringToTerraform(struct!.switchportTrunkAllowedVlansVariable),
    switchport_trunk_native_vlan: cdktf.numberToTerraform(struct!.switchportTrunkNativeVlan),
    switchport_trunk_native_vlan_variable: cdktf.stringToTerraform(struct!.switchportTrunkNativeVlanVariable),
    voice_vlan: cdktf.numberToTerraform(struct!.voiceVlan),
    voice_vlan_variable: cdktf.stringToTerraform(struct!.voiceVlanVariable),
  }
}


export function switchportFeatureTemplateInterfacesToHclTerraform(struct?: SwitchportFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dot1x_authentication_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dot1XAuthenticationOrder),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dot1x_authentication_order_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XAuthenticationOrderVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_control_direction: {
      value: cdktf.stringToHclTerraform(struct!.dot1XControlDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_control_direction_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XControlDirectionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_critical_vlan: {
      value: cdktf.numberToHclTerraform(struct!.dot1XCriticalVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dot1x_critical_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XCriticalVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_enable: {
      value: cdktf.booleanToHclTerraform(struct!.dot1XEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dot1x_enable_criticial_voice_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.dot1XEnableCriticialVoiceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dot1x_enable_criticial_voice_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XEnableCriticialVoiceVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_enable_periodic_reauth: {
      value: cdktf.booleanToHclTerraform(struct!.dot1XEnablePeriodicReauth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dot1x_enable_periodic_reauth_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XEnablePeriodicReauthVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_enable_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XEnableVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_guest_vlan: {
      value: cdktf.numberToHclTerraform(struct!.dot1XGuestVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dot1x_guest_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XGuestVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_host_mode: {
      value: cdktf.stringToHclTerraform(struct!.dot1XHostMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_host_mode_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XHostModeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_mac_authentication_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.dot1XMacAuthenticationBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dot1x_mac_authentication_bypass_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XMacAuthenticationBypassVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_pae_enable: {
      value: cdktf.booleanToHclTerraform(struct!.dot1XPaeEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dot1x_pae_enable_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XPaeEnableVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_periodic_reauth_inactivity_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dot1XPeriodicReauthInactivityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dot1x_periodic_reauth_inactivity_timeout_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XPeriodicReauthInactivityTimeoutVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_periodic_reauth_interval: {
      value: cdktf.numberToHclTerraform(struct!.dot1XPeriodicReauthInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dot1x_periodic_reauth_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XPeriodicReauthIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_port_control: {
      value: cdktf.stringToHclTerraform(struct!.dot1XPortControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_port_control_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XPortControlVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_restricted_vlan: {
      value: cdktf.numberToHclTerraform(struct!.dot1XRestrictedVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dot1x_restricted_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.dot1XRestrictedVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duplex: {
      value: cdktf.stringToHclTerraform(struct!.duplex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duplex_variable: {
      value: cdktf.stringToHclTerraform(struct!.duplexVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown_variable: {
      value: cdktf.stringToHclTerraform(struct!.shutdownVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed_variable: {
      value: cdktf.stringToHclTerraform(struct!.speedVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switchport_access_vlan: {
      value: cdktf.numberToHclTerraform(struct!.switchportAccessVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switchport_access_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.switchportAccessVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switchport_mode: {
      value: cdktf.stringToHclTerraform(struct!.switchportMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switchport_trunk_allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.switchportTrunkAllowedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switchport_trunk_allowed_vlans_variable: {
      value: cdktf.stringToHclTerraform(struct!.switchportTrunkAllowedVlansVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switchport_trunk_native_vlan: {
      value: cdktf.numberToHclTerraform(struct!.switchportTrunkNativeVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switchport_trunk_native_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.switchportTrunkNativeVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_vlan: {
      value: cdktf.numberToHclTerraform(struct!.voiceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    voice_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.voiceVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchportFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchportFeatureTemplateInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dot1XAuthenticationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XAuthenticationOrder = this._dot1XAuthenticationOrder;
    }
    if (this._dot1XAuthenticationOrderVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XAuthenticationOrderVariable = this._dot1XAuthenticationOrderVariable;
    }
    if (this._dot1XControlDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XControlDirection = this._dot1XControlDirection;
    }
    if (this._dot1XControlDirectionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XControlDirectionVariable = this._dot1XControlDirectionVariable;
    }
    if (this._dot1XCriticalVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XCriticalVlan = this._dot1XCriticalVlan;
    }
    if (this._dot1XCriticalVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XCriticalVlanVariable = this._dot1XCriticalVlanVariable;
    }
    if (this._dot1XEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XEnable = this._dot1XEnable;
    }
    if (this._dot1XEnableCriticialVoiceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XEnableCriticialVoiceVlan = this._dot1XEnableCriticialVoiceVlan;
    }
    if (this._dot1XEnableCriticialVoiceVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XEnableCriticialVoiceVlanVariable = this._dot1XEnableCriticialVoiceVlanVariable;
    }
    if (this._dot1XEnablePeriodicReauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XEnablePeriodicReauth = this._dot1XEnablePeriodicReauth;
    }
    if (this._dot1XEnablePeriodicReauthVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XEnablePeriodicReauthVariable = this._dot1XEnablePeriodicReauthVariable;
    }
    if (this._dot1XEnableVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XEnableVariable = this._dot1XEnableVariable;
    }
    if (this._dot1XGuestVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XGuestVlan = this._dot1XGuestVlan;
    }
    if (this._dot1XGuestVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XGuestVlanVariable = this._dot1XGuestVlanVariable;
    }
    if (this._dot1XHostMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XHostMode = this._dot1XHostMode;
    }
    if (this._dot1XHostModeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XHostModeVariable = this._dot1XHostModeVariable;
    }
    if (this._dot1XMacAuthenticationBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XMacAuthenticationBypass = this._dot1XMacAuthenticationBypass;
    }
    if (this._dot1XMacAuthenticationBypassVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XMacAuthenticationBypassVariable = this._dot1XMacAuthenticationBypassVariable;
    }
    if (this._dot1XPaeEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPaeEnable = this._dot1XPaeEnable;
    }
    if (this._dot1XPaeEnableVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPaeEnableVariable = this._dot1XPaeEnableVariable;
    }
    if (this._dot1XPeriodicReauthInactivityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPeriodicReauthInactivityTimeout = this._dot1XPeriodicReauthInactivityTimeout;
    }
    if (this._dot1XPeriodicReauthInactivityTimeoutVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPeriodicReauthInactivityTimeoutVariable = this._dot1XPeriodicReauthInactivityTimeoutVariable;
    }
    if (this._dot1XPeriodicReauthInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPeriodicReauthInterval = this._dot1XPeriodicReauthInterval;
    }
    if (this._dot1XPeriodicReauthIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPeriodicReauthIntervalVariable = this._dot1XPeriodicReauthIntervalVariable;
    }
    if (this._dot1XPortControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPortControl = this._dot1XPortControl;
    }
    if (this._dot1XPortControlVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XPortControlVariable = this._dot1XPortControlVariable;
    }
    if (this._dot1XRestrictedVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XRestrictedVlan = this._dot1XRestrictedVlan;
    }
    if (this._dot1XRestrictedVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XRestrictedVlanVariable = this._dot1XRestrictedVlanVariable;
    }
    if (this._duplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplex = this._duplex;
    }
    if (this._duplexVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplexVariable = this._duplexVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._shutdownVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownVariable = this._shutdownVariable;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._speedVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedVariable = this._speedVariable;
    }
    if (this._switchportAccessVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchportAccessVlan = this._switchportAccessVlan;
    }
    if (this._switchportAccessVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchportAccessVlanVariable = this._switchportAccessVlanVariable;
    }
    if (this._switchportMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchportMode = this._switchportMode;
    }
    if (this._switchportTrunkAllowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchportTrunkAllowedVlans = this._switchportTrunkAllowedVlans;
    }
    if (this._switchportTrunkAllowedVlansVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchportTrunkAllowedVlansVariable = this._switchportTrunkAllowedVlansVariable;
    }
    if (this._switchportTrunkNativeVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchportTrunkNativeVlan = this._switchportTrunkNativeVlan;
    }
    if (this._switchportTrunkNativeVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchportTrunkNativeVlanVariable = this._switchportTrunkNativeVlanVariable;
    }
    if (this._voiceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceVlan = this._voiceVlan;
    }
    if (this._voiceVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceVlanVariable = this._voiceVlanVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchportFeatureTemplateInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dot1XAuthenticationOrder = undefined;
      this._dot1XAuthenticationOrderVariable = undefined;
      this._dot1XControlDirection = undefined;
      this._dot1XControlDirectionVariable = undefined;
      this._dot1XCriticalVlan = undefined;
      this._dot1XCriticalVlanVariable = undefined;
      this._dot1XEnable = undefined;
      this._dot1XEnableCriticialVoiceVlan = undefined;
      this._dot1XEnableCriticialVoiceVlanVariable = undefined;
      this._dot1XEnablePeriodicReauth = undefined;
      this._dot1XEnablePeriodicReauthVariable = undefined;
      this._dot1XEnableVariable = undefined;
      this._dot1XGuestVlan = undefined;
      this._dot1XGuestVlanVariable = undefined;
      this._dot1XHostMode = undefined;
      this._dot1XHostModeVariable = undefined;
      this._dot1XMacAuthenticationBypass = undefined;
      this._dot1XMacAuthenticationBypassVariable = undefined;
      this._dot1XPaeEnable = undefined;
      this._dot1XPaeEnableVariable = undefined;
      this._dot1XPeriodicReauthInactivityTimeout = undefined;
      this._dot1XPeriodicReauthInactivityTimeoutVariable = undefined;
      this._dot1XPeriodicReauthInterval = undefined;
      this._dot1XPeriodicReauthIntervalVariable = undefined;
      this._dot1XPortControl = undefined;
      this._dot1XPortControlVariable = undefined;
      this._dot1XRestrictedVlan = undefined;
      this._dot1XRestrictedVlanVariable = undefined;
      this._duplex = undefined;
      this._duplexVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._shutdown = undefined;
      this._shutdownVariable = undefined;
      this._speed = undefined;
      this._speedVariable = undefined;
      this._switchportAccessVlan = undefined;
      this._switchportAccessVlanVariable = undefined;
      this._switchportMode = undefined;
      this._switchportTrunkAllowedVlans = undefined;
      this._switchportTrunkAllowedVlansVariable = undefined;
      this._switchportTrunkNativeVlan = undefined;
      this._switchportTrunkNativeVlanVariable = undefined;
      this._voiceVlan = undefined;
      this._voiceVlanVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dot1XAuthenticationOrder = value.dot1XAuthenticationOrder;
      this._dot1XAuthenticationOrderVariable = value.dot1XAuthenticationOrderVariable;
      this._dot1XControlDirection = value.dot1XControlDirection;
      this._dot1XControlDirectionVariable = value.dot1XControlDirectionVariable;
      this._dot1XCriticalVlan = value.dot1XCriticalVlan;
      this._dot1XCriticalVlanVariable = value.dot1XCriticalVlanVariable;
      this._dot1XEnable = value.dot1XEnable;
      this._dot1XEnableCriticialVoiceVlan = value.dot1XEnableCriticialVoiceVlan;
      this._dot1XEnableCriticialVoiceVlanVariable = value.dot1XEnableCriticialVoiceVlanVariable;
      this._dot1XEnablePeriodicReauth = value.dot1XEnablePeriodicReauth;
      this._dot1XEnablePeriodicReauthVariable = value.dot1XEnablePeriodicReauthVariable;
      this._dot1XEnableVariable = value.dot1XEnableVariable;
      this._dot1XGuestVlan = value.dot1XGuestVlan;
      this._dot1XGuestVlanVariable = value.dot1XGuestVlanVariable;
      this._dot1XHostMode = value.dot1XHostMode;
      this._dot1XHostModeVariable = value.dot1XHostModeVariable;
      this._dot1XMacAuthenticationBypass = value.dot1XMacAuthenticationBypass;
      this._dot1XMacAuthenticationBypassVariable = value.dot1XMacAuthenticationBypassVariable;
      this._dot1XPaeEnable = value.dot1XPaeEnable;
      this._dot1XPaeEnableVariable = value.dot1XPaeEnableVariable;
      this._dot1XPeriodicReauthInactivityTimeout = value.dot1XPeriodicReauthInactivityTimeout;
      this._dot1XPeriodicReauthInactivityTimeoutVariable = value.dot1XPeriodicReauthInactivityTimeoutVariable;
      this._dot1XPeriodicReauthInterval = value.dot1XPeriodicReauthInterval;
      this._dot1XPeriodicReauthIntervalVariable = value.dot1XPeriodicReauthIntervalVariable;
      this._dot1XPortControl = value.dot1XPortControl;
      this._dot1XPortControlVariable = value.dot1XPortControlVariable;
      this._dot1XRestrictedVlan = value.dot1XRestrictedVlan;
      this._dot1XRestrictedVlanVariable = value.dot1XRestrictedVlanVariable;
      this._duplex = value.duplex;
      this._duplexVariable = value.duplexVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._speed = value.speed;
      this._speedVariable = value.speedVariable;
      this._switchportAccessVlan = value.switchportAccessVlan;
      this._switchportAccessVlanVariable = value.switchportAccessVlanVariable;
      this._switchportMode = value.switchportMode;
      this._switchportTrunkAllowedVlans = value.switchportTrunkAllowedVlans;
      this._switchportTrunkAllowedVlansVariable = value.switchportTrunkAllowedVlansVariable;
      this._switchportTrunkNativeVlan = value.switchportTrunkNativeVlan;
      this._switchportTrunkNativeVlanVariable = value.switchportTrunkNativeVlanVariable;
      this._voiceVlan = value.voiceVlan;
      this._voiceVlanVariable = value.voiceVlanVariable;
    }
  }

  // dot1x_authentication_order - computed: false, optional: true, required: false
  private _dot1XAuthenticationOrder?: string[]; 
  public get dot1XAuthenticationOrder() {
    return cdktf.Fn.tolist(this.getListAttribute('dot1x_authentication_order'));
  }
  public set dot1XAuthenticationOrder(value: string[]) {
    this._dot1XAuthenticationOrder = value;
  }
  public resetDot1XAuthenticationOrder() {
    this._dot1XAuthenticationOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XAuthenticationOrderInput() {
    return this._dot1XAuthenticationOrder;
  }

  // dot1x_authentication_order_variable - computed: false, optional: true, required: false
  private _dot1XAuthenticationOrderVariable?: string; 
  public get dot1XAuthenticationOrderVariable() {
    return this.getStringAttribute('dot1x_authentication_order_variable');
  }
  public set dot1XAuthenticationOrderVariable(value: string) {
    this._dot1XAuthenticationOrderVariable = value;
  }
  public resetDot1XAuthenticationOrderVariable() {
    this._dot1XAuthenticationOrderVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XAuthenticationOrderVariableInput() {
    return this._dot1XAuthenticationOrderVariable;
  }

  // dot1x_control_direction - computed: false, optional: true, required: false
  private _dot1XControlDirection?: string; 
  public get dot1XControlDirection() {
    return this.getStringAttribute('dot1x_control_direction');
  }
  public set dot1XControlDirection(value: string) {
    this._dot1XControlDirection = value;
  }
  public resetDot1XControlDirection() {
    this._dot1XControlDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XControlDirectionInput() {
    return this._dot1XControlDirection;
  }

  // dot1x_control_direction_variable - computed: false, optional: true, required: false
  private _dot1XControlDirectionVariable?: string; 
  public get dot1XControlDirectionVariable() {
    return this.getStringAttribute('dot1x_control_direction_variable');
  }
  public set dot1XControlDirectionVariable(value: string) {
    this._dot1XControlDirectionVariable = value;
  }
  public resetDot1XControlDirectionVariable() {
    this._dot1XControlDirectionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XControlDirectionVariableInput() {
    return this._dot1XControlDirectionVariable;
  }

  // dot1x_critical_vlan - computed: false, optional: true, required: false
  private _dot1XCriticalVlan?: number; 
  public get dot1XCriticalVlan() {
    return this.getNumberAttribute('dot1x_critical_vlan');
  }
  public set dot1XCriticalVlan(value: number) {
    this._dot1XCriticalVlan = value;
  }
  public resetDot1XCriticalVlan() {
    this._dot1XCriticalVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XCriticalVlanInput() {
    return this._dot1XCriticalVlan;
  }

  // dot1x_critical_vlan_variable - computed: false, optional: true, required: false
  private _dot1XCriticalVlanVariable?: string; 
  public get dot1XCriticalVlanVariable() {
    return this.getStringAttribute('dot1x_critical_vlan_variable');
  }
  public set dot1XCriticalVlanVariable(value: string) {
    this._dot1XCriticalVlanVariable = value;
  }
  public resetDot1XCriticalVlanVariable() {
    this._dot1XCriticalVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XCriticalVlanVariableInput() {
    return this._dot1XCriticalVlanVariable;
  }

  // dot1x_enable - computed: false, optional: true, required: false
  private _dot1XEnable?: boolean | cdktf.IResolvable; 
  public get dot1XEnable() {
    return this.getBooleanAttribute('dot1x_enable');
  }
  public set dot1XEnable(value: boolean | cdktf.IResolvable) {
    this._dot1XEnable = value;
  }
  public resetDot1XEnable() {
    this._dot1XEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XEnableInput() {
    return this._dot1XEnable;
  }

  // dot1x_enable_criticial_voice_vlan - computed: false, optional: true, required: false
  private _dot1XEnableCriticialVoiceVlan?: boolean | cdktf.IResolvable; 
  public get dot1XEnableCriticialVoiceVlan() {
    return this.getBooleanAttribute('dot1x_enable_criticial_voice_vlan');
  }
  public set dot1XEnableCriticialVoiceVlan(value: boolean | cdktf.IResolvable) {
    this._dot1XEnableCriticialVoiceVlan = value;
  }
  public resetDot1XEnableCriticialVoiceVlan() {
    this._dot1XEnableCriticialVoiceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XEnableCriticialVoiceVlanInput() {
    return this._dot1XEnableCriticialVoiceVlan;
  }

  // dot1x_enable_criticial_voice_vlan_variable - computed: false, optional: true, required: false
  private _dot1XEnableCriticialVoiceVlanVariable?: string; 
  public get dot1XEnableCriticialVoiceVlanVariable() {
    return this.getStringAttribute('dot1x_enable_criticial_voice_vlan_variable');
  }
  public set dot1XEnableCriticialVoiceVlanVariable(value: string) {
    this._dot1XEnableCriticialVoiceVlanVariable = value;
  }
  public resetDot1XEnableCriticialVoiceVlanVariable() {
    this._dot1XEnableCriticialVoiceVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XEnableCriticialVoiceVlanVariableInput() {
    return this._dot1XEnableCriticialVoiceVlanVariable;
  }

  // dot1x_enable_periodic_reauth - computed: false, optional: true, required: false
  private _dot1XEnablePeriodicReauth?: boolean | cdktf.IResolvable; 
  public get dot1XEnablePeriodicReauth() {
    return this.getBooleanAttribute('dot1x_enable_periodic_reauth');
  }
  public set dot1XEnablePeriodicReauth(value: boolean | cdktf.IResolvable) {
    this._dot1XEnablePeriodicReauth = value;
  }
  public resetDot1XEnablePeriodicReauth() {
    this._dot1XEnablePeriodicReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XEnablePeriodicReauthInput() {
    return this._dot1XEnablePeriodicReauth;
  }

  // dot1x_enable_periodic_reauth_variable - computed: false, optional: true, required: false
  private _dot1XEnablePeriodicReauthVariable?: string; 
  public get dot1XEnablePeriodicReauthVariable() {
    return this.getStringAttribute('dot1x_enable_periodic_reauth_variable');
  }
  public set dot1XEnablePeriodicReauthVariable(value: string) {
    this._dot1XEnablePeriodicReauthVariable = value;
  }
  public resetDot1XEnablePeriodicReauthVariable() {
    this._dot1XEnablePeriodicReauthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XEnablePeriodicReauthVariableInput() {
    return this._dot1XEnablePeriodicReauthVariable;
  }

  // dot1x_enable_variable - computed: false, optional: true, required: false
  private _dot1XEnableVariable?: string; 
  public get dot1XEnableVariable() {
    return this.getStringAttribute('dot1x_enable_variable');
  }
  public set dot1XEnableVariable(value: string) {
    this._dot1XEnableVariable = value;
  }
  public resetDot1XEnableVariable() {
    this._dot1XEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XEnableVariableInput() {
    return this._dot1XEnableVariable;
  }

  // dot1x_guest_vlan - computed: false, optional: true, required: false
  private _dot1XGuestVlan?: number; 
  public get dot1XGuestVlan() {
    return this.getNumberAttribute('dot1x_guest_vlan');
  }
  public set dot1XGuestVlan(value: number) {
    this._dot1XGuestVlan = value;
  }
  public resetDot1XGuestVlan() {
    this._dot1XGuestVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XGuestVlanInput() {
    return this._dot1XGuestVlan;
  }

  // dot1x_guest_vlan_variable - computed: false, optional: true, required: false
  private _dot1XGuestVlanVariable?: string; 
  public get dot1XGuestVlanVariable() {
    return this.getStringAttribute('dot1x_guest_vlan_variable');
  }
  public set dot1XGuestVlanVariable(value: string) {
    this._dot1XGuestVlanVariable = value;
  }
  public resetDot1XGuestVlanVariable() {
    this._dot1XGuestVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XGuestVlanVariableInput() {
    return this._dot1XGuestVlanVariable;
  }

  // dot1x_host_mode - computed: false, optional: true, required: false
  private _dot1XHostMode?: string; 
  public get dot1XHostMode() {
    return this.getStringAttribute('dot1x_host_mode');
  }
  public set dot1XHostMode(value: string) {
    this._dot1XHostMode = value;
  }
  public resetDot1XHostMode() {
    this._dot1XHostMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XHostModeInput() {
    return this._dot1XHostMode;
  }

  // dot1x_host_mode_variable - computed: false, optional: true, required: false
  private _dot1XHostModeVariable?: string; 
  public get dot1XHostModeVariable() {
    return this.getStringAttribute('dot1x_host_mode_variable');
  }
  public set dot1XHostModeVariable(value: string) {
    this._dot1XHostModeVariable = value;
  }
  public resetDot1XHostModeVariable() {
    this._dot1XHostModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XHostModeVariableInput() {
    return this._dot1XHostModeVariable;
  }

  // dot1x_mac_authentication_bypass - computed: false, optional: true, required: false
  private _dot1XMacAuthenticationBypass?: boolean | cdktf.IResolvable; 
  public get dot1XMacAuthenticationBypass() {
    return this.getBooleanAttribute('dot1x_mac_authentication_bypass');
  }
  public set dot1XMacAuthenticationBypass(value: boolean | cdktf.IResolvable) {
    this._dot1XMacAuthenticationBypass = value;
  }
  public resetDot1XMacAuthenticationBypass() {
    this._dot1XMacAuthenticationBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XMacAuthenticationBypassInput() {
    return this._dot1XMacAuthenticationBypass;
  }

  // dot1x_mac_authentication_bypass_variable - computed: false, optional: true, required: false
  private _dot1XMacAuthenticationBypassVariable?: string; 
  public get dot1XMacAuthenticationBypassVariable() {
    return this.getStringAttribute('dot1x_mac_authentication_bypass_variable');
  }
  public set dot1XMacAuthenticationBypassVariable(value: string) {
    this._dot1XMacAuthenticationBypassVariable = value;
  }
  public resetDot1XMacAuthenticationBypassVariable() {
    this._dot1XMacAuthenticationBypassVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XMacAuthenticationBypassVariableInput() {
    return this._dot1XMacAuthenticationBypassVariable;
  }

  // dot1x_pae_enable - computed: false, optional: true, required: false
  private _dot1XPaeEnable?: boolean | cdktf.IResolvable; 
  public get dot1XPaeEnable() {
    return this.getBooleanAttribute('dot1x_pae_enable');
  }
  public set dot1XPaeEnable(value: boolean | cdktf.IResolvable) {
    this._dot1XPaeEnable = value;
  }
  public resetDot1XPaeEnable() {
    this._dot1XPaeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPaeEnableInput() {
    return this._dot1XPaeEnable;
  }

  // dot1x_pae_enable_variable - computed: false, optional: true, required: false
  private _dot1XPaeEnableVariable?: string; 
  public get dot1XPaeEnableVariable() {
    return this.getStringAttribute('dot1x_pae_enable_variable');
  }
  public set dot1XPaeEnableVariable(value: string) {
    this._dot1XPaeEnableVariable = value;
  }
  public resetDot1XPaeEnableVariable() {
    this._dot1XPaeEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPaeEnableVariableInput() {
    return this._dot1XPaeEnableVariable;
  }

  // dot1x_periodic_reauth_inactivity_timeout - computed: false, optional: true, required: false
  private _dot1XPeriodicReauthInactivityTimeout?: number; 
  public get dot1XPeriodicReauthInactivityTimeout() {
    return this.getNumberAttribute('dot1x_periodic_reauth_inactivity_timeout');
  }
  public set dot1XPeriodicReauthInactivityTimeout(value: number) {
    this._dot1XPeriodicReauthInactivityTimeout = value;
  }
  public resetDot1XPeriodicReauthInactivityTimeout() {
    this._dot1XPeriodicReauthInactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPeriodicReauthInactivityTimeoutInput() {
    return this._dot1XPeriodicReauthInactivityTimeout;
  }

  // dot1x_periodic_reauth_inactivity_timeout_variable - computed: false, optional: true, required: false
  private _dot1XPeriodicReauthInactivityTimeoutVariable?: string; 
  public get dot1XPeriodicReauthInactivityTimeoutVariable() {
    return this.getStringAttribute('dot1x_periodic_reauth_inactivity_timeout_variable');
  }
  public set dot1XPeriodicReauthInactivityTimeoutVariable(value: string) {
    this._dot1XPeriodicReauthInactivityTimeoutVariable = value;
  }
  public resetDot1XPeriodicReauthInactivityTimeoutVariable() {
    this._dot1XPeriodicReauthInactivityTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPeriodicReauthInactivityTimeoutVariableInput() {
    return this._dot1XPeriodicReauthInactivityTimeoutVariable;
  }

  // dot1x_periodic_reauth_interval - computed: false, optional: true, required: false
  private _dot1XPeriodicReauthInterval?: number; 
  public get dot1XPeriodicReauthInterval() {
    return this.getNumberAttribute('dot1x_periodic_reauth_interval');
  }
  public set dot1XPeriodicReauthInterval(value: number) {
    this._dot1XPeriodicReauthInterval = value;
  }
  public resetDot1XPeriodicReauthInterval() {
    this._dot1XPeriodicReauthInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPeriodicReauthIntervalInput() {
    return this._dot1XPeriodicReauthInterval;
  }

  // dot1x_periodic_reauth_interval_variable - computed: false, optional: true, required: false
  private _dot1XPeriodicReauthIntervalVariable?: string; 
  public get dot1XPeriodicReauthIntervalVariable() {
    return this.getStringAttribute('dot1x_periodic_reauth_interval_variable');
  }
  public set dot1XPeriodicReauthIntervalVariable(value: string) {
    this._dot1XPeriodicReauthIntervalVariable = value;
  }
  public resetDot1XPeriodicReauthIntervalVariable() {
    this._dot1XPeriodicReauthIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPeriodicReauthIntervalVariableInput() {
    return this._dot1XPeriodicReauthIntervalVariable;
  }

  // dot1x_port_control - computed: false, optional: true, required: false
  private _dot1XPortControl?: string; 
  public get dot1XPortControl() {
    return this.getStringAttribute('dot1x_port_control');
  }
  public set dot1XPortControl(value: string) {
    this._dot1XPortControl = value;
  }
  public resetDot1XPortControl() {
    this._dot1XPortControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPortControlInput() {
    return this._dot1XPortControl;
  }

  // dot1x_port_control_variable - computed: false, optional: true, required: false
  private _dot1XPortControlVariable?: string; 
  public get dot1XPortControlVariable() {
    return this.getStringAttribute('dot1x_port_control_variable');
  }
  public set dot1XPortControlVariable(value: string) {
    this._dot1XPortControlVariable = value;
  }
  public resetDot1XPortControlVariable() {
    this._dot1XPortControlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XPortControlVariableInput() {
    return this._dot1XPortControlVariable;
  }

  // dot1x_restricted_vlan - computed: false, optional: true, required: false
  private _dot1XRestrictedVlan?: number; 
  public get dot1XRestrictedVlan() {
    return this.getNumberAttribute('dot1x_restricted_vlan');
  }
  public set dot1XRestrictedVlan(value: number) {
    this._dot1XRestrictedVlan = value;
  }
  public resetDot1XRestrictedVlan() {
    this._dot1XRestrictedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XRestrictedVlanInput() {
    return this._dot1XRestrictedVlan;
  }

  // dot1x_restricted_vlan_variable - computed: false, optional: true, required: false
  private _dot1XRestrictedVlanVariable?: string; 
  public get dot1XRestrictedVlanVariable() {
    return this.getStringAttribute('dot1x_restricted_vlan_variable');
  }
  public set dot1XRestrictedVlanVariable(value: string) {
    this._dot1XRestrictedVlanVariable = value;
  }
  public resetDot1XRestrictedVlanVariable() {
    this._dot1XRestrictedVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XRestrictedVlanVariableInput() {
    return this._dot1XRestrictedVlanVariable;
  }

  // duplex - computed: false, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
  }

  // duplex_variable - computed: false, optional: true, required: false
  private _duplexVariable?: string; 
  public get duplexVariable() {
    return this.getStringAttribute('duplex_variable');
  }
  public set duplexVariable(value: string) {
    this._duplexVariable = value;
  }
  public resetDuplexVariable() {
    this._duplexVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexVariableInput() {
    return this._duplexVariable;
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

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // speed_variable - computed: false, optional: true, required: false
  private _speedVariable?: string; 
  public get speedVariable() {
    return this.getStringAttribute('speed_variable');
  }
  public set speedVariable(value: string) {
    this._speedVariable = value;
  }
  public resetSpeedVariable() {
    this._speedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedVariableInput() {
    return this._speedVariable;
  }

  // switchport_access_vlan - computed: false, optional: true, required: false
  private _switchportAccessVlan?: number; 
  public get switchportAccessVlan() {
    return this.getNumberAttribute('switchport_access_vlan');
  }
  public set switchportAccessVlan(value: number) {
    this._switchportAccessVlan = value;
  }
  public resetSwitchportAccessVlan() {
    this._switchportAccessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportAccessVlanInput() {
    return this._switchportAccessVlan;
  }

  // switchport_access_vlan_variable - computed: false, optional: true, required: false
  private _switchportAccessVlanVariable?: string; 
  public get switchportAccessVlanVariable() {
    return this.getStringAttribute('switchport_access_vlan_variable');
  }
  public set switchportAccessVlanVariable(value: string) {
    this._switchportAccessVlanVariable = value;
  }
  public resetSwitchportAccessVlanVariable() {
    this._switchportAccessVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportAccessVlanVariableInput() {
    return this._switchportAccessVlanVariable;
  }

  // switchport_mode - computed: false, optional: true, required: false
  private _switchportMode?: string; 
  public get switchportMode() {
    return this.getStringAttribute('switchport_mode');
  }
  public set switchportMode(value: string) {
    this._switchportMode = value;
  }
  public resetSwitchportMode() {
    this._switchportMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportModeInput() {
    return this._switchportMode;
  }

  // switchport_trunk_allowed_vlans - computed: false, optional: true, required: false
  private _switchportTrunkAllowedVlans?: string; 
  public get switchportTrunkAllowedVlans() {
    return this.getStringAttribute('switchport_trunk_allowed_vlans');
  }
  public set switchportTrunkAllowedVlans(value: string) {
    this._switchportTrunkAllowedVlans = value;
  }
  public resetSwitchportTrunkAllowedVlans() {
    this._switchportTrunkAllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkAllowedVlansInput() {
    return this._switchportTrunkAllowedVlans;
  }

  // switchport_trunk_allowed_vlans_variable - computed: false, optional: true, required: false
  private _switchportTrunkAllowedVlansVariable?: string; 
  public get switchportTrunkAllowedVlansVariable() {
    return this.getStringAttribute('switchport_trunk_allowed_vlans_variable');
  }
  public set switchportTrunkAllowedVlansVariable(value: string) {
    this._switchportTrunkAllowedVlansVariable = value;
  }
  public resetSwitchportTrunkAllowedVlansVariable() {
    this._switchportTrunkAllowedVlansVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkAllowedVlansVariableInput() {
    return this._switchportTrunkAllowedVlansVariable;
  }

  // switchport_trunk_native_vlan - computed: false, optional: true, required: false
  private _switchportTrunkNativeVlan?: number; 
  public get switchportTrunkNativeVlan() {
    return this.getNumberAttribute('switchport_trunk_native_vlan');
  }
  public set switchportTrunkNativeVlan(value: number) {
    this._switchportTrunkNativeVlan = value;
  }
  public resetSwitchportTrunkNativeVlan() {
    this._switchportTrunkNativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkNativeVlanInput() {
    return this._switchportTrunkNativeVlan;
  }

  // switchport_trunk_native_vlan_variable - computed: false, optional: true, required: false
  private _switchportTrunkNativeVlanVariable?: string; 
  public get switchportTrunkNativeVlanVariable() {
    return this.getStringAttribute('switchport_trunk_native_vlan_variable');
  }
  public set switchportTrunkNativeVlanVariable(value: string) {
    this._switchportTrunkNativeVlanVariable = value;
  }
  public resetSwitchportTrunkNativeVlanVariable() {
    this._switchportTrunkNativeVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchportTrunkNativeVlanVariableInput() {
    return this._switchportTrunkNativeVlanVariable;
  }

  // voice_vlan - computed: false, optional: true, required: false
  private _voiceVlan?: number; 
  public get voiceVlan() {
    return this.getNumberAttribute('voice_vlan');
  }
  public set voiceVlan(value: number) {
    this._voiceVlan = value;
  }
  public resetVoiceVlan() {
    this._voiceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceVlanInput() {
    return this._voiceVlan;
  }

  // voice_vlan_variable - computed: false, optional: true, required: false
  private _voiceVlanVariable?: string; 
  public get voiceVlanVariable() {
    return this.getStringAttribute('voice_vlan_variable');
  }
  public set voiceVlanVariable(value: string) {
    this._voiceVlanVariable = value;
  }
  public resetVoiceVlanVariable() {
    this._voiceVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceVlanVariableInput() {
    return this._voiceVlanVariable;
  }
}

export class SwitchportFeatureTemplateInterfacesList extends cdktf.ComplexList {
  public internalValue? : SwitchportFeatureTemplateInterfaces[] | cdktf.IResolvable

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
  public get(index: number): SwitchportFeatureTemplateInterfacesOutputReference {
    return new SwitchportFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchportFeatureTemplateStaticMacAddresses {
  /**
  * Interface name: GigabitEthernet0/<>/<>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#if_name SwitchportFeatureTemplate#if_name}
  */
  readonly ifName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#if_name_variable SwitchportFeatureTemplate#if_name_variable}
  */
  readonly ifNameVariable?: string;
  /**
  * Set MAC address in xxxx.xxxx.xxxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#mac_address SwitchportFeatureTemplate#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#mac_address_variable SwitchportFeatureTemplate#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#optional SwitchportFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure VLAN ID used with the mac and interface
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#vlan SwitchportFeatureTemplate#vlan}
  */
  readonly vlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#vlan_variable SwitchportFeatureTemplate#vlan_variable}
  */
  readonly vlanVariable?: string;
}

export function switchportFeatureTemplateStaticMacAddressesToTerraform(struct?: SwitchportFeatureTemplateStaticMacAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_name: cdktf.stringToTerraform(struct!.ifName),
    if_name_variable: cdktf.stringToTerraform(struct!.ifNameVariable),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_address_variable: cdktf.stringToTerraform(struct!.macAddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    vlan_variable: cdktf.stringToTerraform(struct!.vlanVariable),
  }
}


export function switchportFeatureTemplateStaticMacAddressesToHclTerraform(struct?: SwitchportFeatureTemplateStaticMacAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.ifNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.macAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.vlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchportFeatureTemplateStaticMacAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchportFeatureTemplateStaticMacAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._ifNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNameVariable = this._ifNameVariable;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._macAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressVariable = this._macAddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanVariable = this._vlanVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchportFeatureTemplateStaticMacAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifName = undefined;
      this._ifNameVariable = undefined;
      this._macAddress = undefined;
      this._macAddressVariable = undefined;
      this._optional = undefined;
      this._vlan = undefined;
      this._vlanVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifName = value.ifName;
      this._ifNameVariable = value.ifNameVariable;
      this._macAddress = value.macAddress;
      this._macAddressVariable = value.macAddressVariable;
      this._optional = value.optional;
      this._vlan = value.vlan;
      this._vlanVariable = value.vlanVariable;
    }
  }

  // if_name - computed: false, optional: true, required: false
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  public resetIfName() {
    this._ifName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // if_name_variable - computed: false, optional: true, required: false
  private _ifNameVariable?: string; 
  public get ifNameVariable() {
    return this.getStringAttribute('if_name_variable');
  }
  public set ifNameVariable(value: string) {
    this._ifNameVariable = value;
  }
  public resetIfNameVariable() {
    this._ifNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameVariableInput() {
    return this._ifNameVariable;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mac_address_variable - computed: false, optional: true, required: false
  private _macAddressVariable?: string; 
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }
  public set macAddressVariable(value: string) {
    this._macAddressVariable = value;
  }
  public resetMacAddressVariable() {
    this._macAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressVariableInput() {
    return this._macAddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // vlan_variable - computed: false, optional: true, required: false
  private _vlanVariable?: string; 
  public get vlanVariable() {
    return this.getStringAttribute('vlan_variable');
  }
  public set vlanVariable(value: string) {
    this._vlanVariable = value;
  }
  public resetVlanVariable() {
    this._vlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanVariableInput() {
    return this._vlanVariable;
  }
}

export class SwitchportFeatureTemplateStaticMacAddressesList extends cdktf.ComplexList {
  public internalValue? : SwitchportFeatureTemplateStaticMacAddresses[] | cdktf.IResolvable

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
  public get(index: number): SwitchportFeatureTemplateStaticMacAddressesOutputReference {
    return new SwitchportFeatureTemplateStaticMacAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template sdwan_switchport_feature_template}
*/
export class SwitchportFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_switchport_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchportFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchportFeatureTemplate to import
  * @param importFromId The id of the existing SwitchportFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchportFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_switchport_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/switchport_feature_template sdwan_switchport_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchportFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchportFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_switchport_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ageOutTime = config.ageOutTime;
    this._ageOutTimeVariable = config.ageOutTimeVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._interfaces.internalValue = config.interfaces;
    this._moduleType = config.moduleType;
    this._name = config.name;
    this._slot = config.slot;
    this._staticMacAddresses.internalValue = config.staticMacAddresses;
    this._subSlot = config.subSlot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age_out_time - computed: false, optional: true, required: false
  private _ageOutTime?: number; 
  public get ageOutTime() {
    return this.getNumberAttribute('age_out_time');
  }
  public set ageOutTime(value: number) {
    this._ageOutTime = value;
  }
  public resetAgeOutTime() {
    this._ageOutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageOutTimeInput() {
    return this._ageOutTime;
  }

  // age_out_time_variable - computed: false, optional: true, required: false
  private _ageOutTimeVariable?: string; 
  public get ageOutTimeVariable() {
    return this.getStringAttribute('age_out_time_variable');
  }
  public set ageOutTimeVariable(value: string) {
    this._ageOutTimeVariable = value;
  }
  public resetAgeOutTimeVariable() {
    this._ageOutTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageOutTimeVariableInput() {
    return this._ageOutTimeVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new SwitchportFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: SwitchportFeatureTemplateInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // module_type - computed: false, optional: true, required: false
  private _moduleType?: string; 
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }
  public set moduleType(value: string) {
    this._moduleType = value;
  }
  public resetModuleType() {
    this._moduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTypeInput() {
    return this._moduleType;
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

  // slot - computed: false, optional: true, required: false
  private _slot?: number; 
  public get slot() {
    return this.getNumberAttribute('slot');
  }
  public set slot(value: number) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // static_mac_addresses - computed: false, optional: true, required: false
  private _staticMacAddresses = new SwitchportFeatureTemplateStaticMacAddressesList(this, "static_mac_addresses", false);
  public get staticMacAddresses() {
    return this._staticMacAddresses;
  }
  public putStaticMacAddresses(value: SwitchportFeatureTemplateStaticMacAddresses[] | cdktf.IResolvable) {
    this._staticMacAddresses.internalValue = value;
  }
  public resetStaticMacAddresses() {
    this._staticMacAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacAddressesInput() {
    return this._staticMacAddresses.internalValue;
  }

  // sub_slot - computed: false, optional: true, required: false
  private _subSlot?: number; 
  public get subSlot() {
    return this.getNumberAttribute('sub_slot');
  }
  public set subSlot(value: number) {
    this._subSlot = value;
  }
  public resetSubSlot() {
    this._subSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSlotInput() {
    return this._subSlot;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age_out_time: cdktf.numberToTerraform(this._ageOutTime),
      age_out_time_variable: cdktf.stringToTerraform(this._ageOutTimeVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      interfaces: cdktf.listMapper(switchportFeatureTemplateInterfacesToTerraform, false)(this._interfaces.internalValue),
      module_type: cdktf.stringToTerraform(this._moduleType),
      name: cdktf.stringToTerraform(this._name),
      slot: cdktf.numberToTerraform(this._slot),
      static_mac_addresses: cdktf.listMapper(switchportFeatureTemplateStaticMacAddressesToTerraform, false)(this._staticMacAddresses.internalValue),
      sub_slot: cdktf.numberToTerraform(this._subSlot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age_out_time: {
        value: cdktf.numberToHclTerraform(this._ageOutTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      age_out_time_variable: {
        value: cdktf.stringToHclTerraform(this._ageOutTimeVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(switchportFeatureTemplateInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchportFeatureTemplateInterfacesList",
      },
      module_type: {
        value: cdktf.stringToHclTerraform(this._moduleType),
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
      slot: {
        value: cdktf.numberToHclTerraform(this._slot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static_mac_addresses: {
        value: cdktf.listMapperHcl(switchportFeatureTemplateStaticMacAddressesToHclTerraform, false)(this._staticMacAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchportFeatureTemplateStaticMacAddressesList",
      },
      sub_slot: {
        value: cdktf.numberToHclTerraform(this._subSlot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
