// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceSwitchportFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set when a MAC table entry ages out (0 to disable, 10-1000000 otherwise)
  *   - Range: `0`-`1000000`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#age_out_time ServiceSwitchportFeature#age_out_time}
  */
  readonly ageOutTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#age_out_time_variable ServiceSwitchportFeature#age_out_time_variable}
  */
  readonly ageOutTimeVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#description ServiceSwitchportFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#feature_profile_id ServiceSwitchportFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Interface name: GigabitEthernet0/<>/<> when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#interfaces ServiceSwitchportFeature#interfaces}
  */
  readonly interfaces?: ServiceSwitchportFeatureInterfaces[] | cdktf.IResolvable;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#name ServiceSwitchportFeature#name}
  */
  readonly name: string;
  /**
  * Add static MAC address entries for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#static_mac_addresses ServiceSwitchportFeature#static_mac_addresses}
  */
  readonly staticMacAddresses?: ServiceSwitchportFeatureStaticMacAddresses[] | cdktf.IResolvable;
}
export interface ServiceSwitchportFeatureInterfaces {
  /**
  * Set uni or bi directional authorization mode
  *   - Choices: `both`, `in`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#control_direction ServiceSwitchportFeature#control_direction}
  */
  readonly controlDirection?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#control_direction_variable ServiceSwitchportFeature#control_direction_variable}
  */
  readonly controlDirectionVariable?: string;
  /**
  * Set Critical VLAN
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#critical_vlan ServiceSwitchportFeature#critical_vlan}
  */
  readonly criticalVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#critical_vlan_variable ServiceSwitchportFeature#critical_vlan_variable}
  */
  readonly criticalVlanVariable?: string;
  /**
  * Duplex mode
  *   - Choices: `full`, `half`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#duplex ServiceSwitchportFeature#duplex}
  */
  readonly duplex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#duplex_variable ServiceSwitchportFeature#duplex_variable}
  */
  readonly duplexVariable?: string;
  /**
  * Enable Periodic Reauthentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#enable_periodic_reauth ServiceSwitchportFeature#enable_periodic_reauth}
  */
  readonly enablePeriodicReauth?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#enable_periodic_reauth_variable ServiceSwitchportFeature#enable_periodic_reauth_variable}
  */
  readonly enablePeriodicReauthVariable?: string;
  /**
  * Enable Critical Voice VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#enable_voice ServiceSwitchportFeature#enable_voice}
  */
  readonly enableVoice?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#enable_voice_variable ServiceSwitchportFeature#enable_voice_variable}
  */
  readonly enableVoiceVariable?: string;
  /**
  * Set vlan to drop non-802.1x enabled clients into if client is not in MAB list
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#guest_vlan ServiceSwitchportFeature#guest_vlan}
  */
  readonly guestVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#guest_vlan_variable ServiceSwitchportFeature#guest_vlan_variable}
  */
  readonly guestVlanVariable?: string;
  /**
  * Set host mode
  *   - Choices: `single-host`, `multi-auth`, `multi-host`, `multi-domain`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#host_mode ServiceSwitchportFeature#host_mode}
  */
  readonly hostMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#host_mode_variable ServiceSwitchportFeature#host_mode_variable}
  */
  readonly hostModeVariable?: string;
  /**
  * Periodic Reauthentication Inactivity Timeout (in seconds)
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#inactivity ServiceSwitchportFeature#inactivity}
  */
  readonly inactivity?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#inactivity_variable ServiceSwitchportFeature#inactivity_variable}
  */
  readonly inactivityVariable?: string;
  /**
  * Set Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#interface_name ServiceSwitchportFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#interface_name_variable ServiceSwitchportFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * MAC Authentication Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#mac_authentication_bypass ServiceSwitchportFeature#mac_authentication_bypass}
  */
  readonly macAuthenticationBypass?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#mac_authentication_bypass_variable ServiceSwitchportFeature#mac_authentication_bypass_variable}
  */
  readonly macAuthenticationBypassVariable?: string;
  /**
  * Set type of switch port: access/trunk
  *   - Choices: `access`, `trunk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#mode ServiceSwitchportFeature#mode}
  */
  readonly mode?: string;
  /**
  * Set 802.1x Interface Pae Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#pae_enable ServiceSwitchportFeature#pae_enable}
  */
  readonly paeEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#pae_enable_variable ServiceSwitchportFeature#pae_enable_variable}
  */
  readonly paeEnableVariable?: string;
  /**
  * Set Port-Control Mode
  *   - Choices: `auto`, `force-unauthorized`, `force-authorized`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#port_control ServiceSwitchportFeature#port_control}
  */
  readonly portControl?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#port_control_variable ServiceSwitchportFeature#port_control_variable}
  */
  readonly portControlVariable?: string;
  /**
  * Periodic Reauthentication Interval (in seconds)
  *   - Range: `1`-`1073741823`
  *   - Default value: `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#reauthentication ServiceSwitchportFeature#reauthentication}
  */
  readonly reauthentication?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#reauthentication_variable ServiceSwitchportFeature#reauthentication_variable}
  */
  readonly reauthenticationVariable?: string;
  /**
  * Set Restricted VLAN ID
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#restricted_vlan ServiceSwitchportFeature#restricted_vlan}
  */
  readonly restrictedVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#restricted_vlan_variable ServiceSwitchportFeature#restricted_vlan_variable}
  */
  readonly restrictedVlanVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#shutdown ServiceSwitchportFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#shutdown_variable ServiceSwitchportFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set interface speed
  *   - Choices: `10`, `100`, `1000`, `2500`, `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#speed ServiceSwitchportFeature#speed}
  */
  readonly speed?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#speed_variable ServiceSwitchportFeature#speed_variable}
  */
  readonly speedVariable?: string;
  /**
  * Set VLAN identifier associated with bridging domain
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#switchport_access_vlan ServiceSwitchportFeature#switchport_access_vlan}
  */
  readonly switchportAccessVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#switchport_access_vlan_variable ServiceSwitchportFeature#switchport_access_vlan_variable}
  */
  readonly switchportAccessVlanVariable?: string;
  /**
  * Configure VLAN IDs used with the trunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#switchport_trunk_allowed_vlans ServiceSwitchportFeature#switchport_trunk_allowed_vlans}
  */
  readonly switchportTrunkAllowedVlans?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#switchport_trunk_allowed_vlans_variable ServiceSwitchportFeature#switchport_trunk_allowed_vlans_variable}
  */
  readonly switchportTrunkAllowedVlansVariable?: string;
  /**
  * Configure VLAN ID used for native VLAN
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#switchport_trunk_native_vlan ServiceSwitchportFeature#switchport_trunk_native_vlan}
  */
  readonly switchportTrunkNativeVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#switchport_trunk_native_vlan_variable ServiceSwitchportFeature#switchport_trunk_native_vlan_variable}
  */
  readonly switchportTrunkNativeVlanVariable?: string;
  /**
  * Configure Voice Vlan
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#voice_vlan ServiceSwitchportFeature#voice_vlan}
  */
  readonly voiceVlan?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#voice_vlan_variable ServiceSwitchportFeature#voice_vlan_variable}
  */
  readonly voiceVlanVariable?: string;
}

export function serviceSwitchportFeatureInterfacesToTerraform(struct?: ServiceSwitchportFeatureInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_direction: cdktf.stringToTerraform(struct!.controlDirection),
    control_direction_variable: cdktf.stringToTerraform(struct!.controlDirectionVariable),
    critical_vlan: cdktf.numberToTerraform(struct!.criticalVlan),
    critical_vlan_variable: cdktf.stringToTerraform(struct!.criticalVlanVariable),
    duplex: cdktf.stringToTerraform(struct!.duplex),
    duplex_variable: cdktf.stringToTerraform(struct!.duplexVariable),
    enable_periodic_reauth: cdktf.booleanToTerraform(struct!.enablePeriodicReauth),
    enable_periodic_reauth_variable: cdktf.stringToTerraform(struct!.enablePeriodicReauthVariable),
    enable_voice: cdktf.booleanToTerraform(struct!.enableVoice),
    enable_voice_variable: cdktf.stringToTerraform(struct!.enableVoiceVariable),
    guest_vlan: cdktf.numberToTerraform(struct!.guestVlan),
    guest_vlan_variable: cdktf.stringToTerraform(struct!.guestVlanVariable),
    host_mode: cdktf.stringToTerraform(struct!.hostMode),
    host_mode_variable: cdktf.stringToTerraform(struct!.hostModeVariable),
    inactivity: cdktf.numberToTerraform(struct!.inactivity),
    inactivity_variable: cdktf.stringToTerraform(struct!.inactivityVariable),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    mac_authentication_bypass: cdktf.booleanToTerraform(struct!.macAuthenticationBypass),
    mac_authentication_bypass_variable: cdktf.stringToTerraform(struct!.macAuthenticationBypassVariable),
    mode: cdktf.stringToTerraform(struct!.mode),
    pae_enable: cdktf.booleanToTerraform(struct!.paeEnable),
    pae_enable_variable: cdktf.stringToTerraform(struct!.paeEnableVariable),
    port_control: cdktf.stringToTerraform(struct!.portControl),
    port_control_variable: cdktf.stringToTerraform(struct!.portControlVariable),
    reauthentication: cdktf.numberToTerraform(struct!.reauthentication),
    reauthentication_variable: cdktf.stringToTerraform(struct!.reauthenticationVariable),
    restricted_vlan: cdktf.numberToTerraform(struct!.restrictedVlan),
    restricted_vlan_variable: cdktf.stringToTerraform(struct!.restrictedVlanVariable),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    speed: cdktf.stringToTerraform(struct!.speed),
    speed_variable: cdktf.stringToTerraform(struct!.speedVariable),
    switchport_access_vlan: cdktf.numberToTerraform(struct!.switchportAccessVlan),
    switchport_access_vlan_variable: cdktf.stringToTerraform(struct!.switchportAccessVlanVariable),
    switchport_trunk_allowed_vlans: cdktf.stringToTerraform(struct!.switchportTrunkAllowedVlans),
    switchport_trunk_allowed_vlans_variable: cdktf.stringToTerraform(struct!.switchportTrunkAllowedVlansVariable),
    switchport_trunk_native_vlan: cdktf.numberToTerraform(struct!.switchportTrunkNativeVlan),
    switchport_trunk_native_vlan_variable: cdktf.stringToTerraform(struct!.switchportTrunkNativeVlanVariable),
    voice_vlan: cdktf.numberToTerraform(struct!.voiceVlan),
    voice_vlan_variable: cdktf.stringToTerraform(struct!.voiceVlanVariable),
  }
}


export function serviceSwitchportFeatureInterfacesToHclTerraform(struct?: ServiceSwitchportFeatureInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_direction: {
      value: cdktf.stringToHclTerraform(struct!.controlDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_direction_variable: {
      value: cdktf.stringToHclTerraform(struct!.controlDirectionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_vlan: {
      value: cdktf.numberToHclTerraform(struct!.criticalVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    critical_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.criticalVlanVariable),
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
    enable_periodic_reauth: {
      value: cdktf.booleanToHclTerraform(struct!.enablePeriodicReauth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_periodic_reauth_variable: {
      value: cdktf.stringToHclTerraform(struct!.enablePeriodicReauthVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_voice: {
      value: cdktf.booleanToHclTerraform(struct!.enableVoice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_voice_variable: {
      value: cdktf.stringToHclTerraform(struct!.enableVoiceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_vlan: {
      value: cdktf.numberToHclTerraform(struct!.guestVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guest_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.guestVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_mode: {
      value: cdktf.stringToHclTerraform(struct!.hostMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_mode_variable: {
      value: cdktf.stringToHclTerraform(struct!.hostModeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity: {
      value: cdktf.numberToHclTerraform(struct!.inactivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactivity_variable: {
      value: cdktf.stringToHclTerraform(struct!.inactivityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_authentication_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.macAuthenticationBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_authentication_bypass_variable: {
      value: cdktf.stringToHclTerraform(struct!.macAuthenticationBypassVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pae_enable: {
      value: cdktf.booleanToHclTerraform(struct!.paeEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pae_enable_variable: {
      value: cdktf.stringToHclTerraform(struct!.paeEnableVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_control: {
      value: cdktf.stringToHclTerraform(struct!.portControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_control_variable: {
      value: cdktf.stringToHclTerraform(struct!.portControlVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reauthentication: {
      value: cdktf.numberToHclTerraform(struct!.reauthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reauthentication_variable: {
      value: cdktf.stringToHclTerraform(struct!.reauthenticationVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restricted_vlan: {
      value: cdktf.numberToHclTerraform(struct!.restrictedVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restricted_vlan_variable: {
      value: cdktf.stringToHclTerraform(struct!.restrictedVlanVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServiceSwitchportFeatureInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceSwitchportFeatureInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlDirection = this._controlDirection;
    }
    if (this._controlDirectionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlDirectionVariable = this._controlDirectionVariable;
    }
    if (this._criticalVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalVlan = this._criticalVlan;
    }
    if (this._criticalVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalVlanVariable = this._criticalVlanVariable;
    }
    if (this._duplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplex = this._duplex;
    }
    if (this._duplexVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplexVariable = this._duplexVariable;
    }
    if (this._enablePeriodicReauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePeriodicReauth = this._enablePeriodicReauth;
    }
    if (this._enablePeriodicReauthVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePeriodicReauthVariable = this._enablePeriodicReauthVariable;
    }
    if (this._enableVoice !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVoice = this._enableVoice;
    }
    if (this._enableVoiceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVoiceVariable = this._enableVoiceVariable;
    }
    if (this._guestVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestVlan = this._guestVlan;
    }
    if (this._guestVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestVlanVariable = this._guestVlanVariable;
    }
    if (this._hostMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMode = this._hostMode;
    }
    if (this._hostModeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostModeVariable = this._hostModeVariable;
    }
    if (this._inactivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivity = this._inactivity;
    }
    if (this._inactivityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityVariable = this._inactivityVariable;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    if (this._macAuthenticationBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthenticationBypass = this._macAuthenticationBypass;
    }
    if (this._macAuthenticationBypassVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthenticationBypassVariable = this._macAuthenticationBypassVariable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._paeEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.paeEnable = this._paeEnable;
    }
    if (this._paeEnableVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.paeEnableVariable = this._paeEnableVariable;
    }
    if (this._portControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.portControl = this._portControl;
    }
    if (this._portControlVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portControlVariable = this._portControlVariable;
    }
    if (this._reauthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthentication = this._reauthentication;
    }
    if (this._reauthenticationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthenticationVariable = this._reauthenticationVariable;
    }
    if (this._restrictedVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedVlan = this._restrictedVlan;
    }
    if (this._restrictedVlanVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedVlanVariable = this._restrictedVlanVariable;
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

  public set internalValue(value: ServiceSwitchportFeatureInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlDirection = undefined;
      this._controlDirectionVariable = undefined;
      this._criticalVlan = undefined;
      this._criticalVlanVariable = undefined;
      this._duplex = undefined;
      this._duplexVariable = undefined;
      this._enablePeriodicReauth = undefined;
      this._enablePeriodicReauthVariable = undefined;
      this._enableVoice = undefined;
      this._enableVoiceVariable = undefined;
      this._guestVlan = undefined;
      this._guestVlanVariable = undefined;
      this._hostMode = undefined;
      this._hostModeVariable = undefined;
      this._inactivity = undefined;
      this._inactivityVariable = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._macAuthenticationBypass = undefined;
      this._macAuthenticationBypassVariable = undefined;
      this._mode = undefined;
      this._paeEnable = undefined;
      this._paeEnableVariable = undefined;
      this._portControl = undefined;
      this._portControlVariable = undefined;
      this._reauthentication = undefined;
      this._reauthenticationVariable = undefined;
      this._restrictedVlan = undefined;
      this._restrictedVlanVariable = undefined;
      this._shutdown = undefined;
      this._shutdownVariable = undefined;
      this._speed = undefined;
      this._speedVariable = undefined;
      this._switchportAccessVlan = undefined;
      this._switchportAccessVlanVariable = undefined;
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
      this._controlDirection = value.controlDirection;
      this._controlDirectionVariable = value.controlDirectionVariable;
      this._criticalVlan = value.criticalVlan;
      this._criticalVlanVariable = value.criticalVlanVariable;
      this._duplex = value.duplex;
      this._duplexVariable = value.duplexVariable;
      this._enablePeriodicReauth = value.enablePeriodicReauth;
      this._enablePeriodicReauthVariable = value.enablePeriodicReauthVariable;
      this._enableVoice = value.enableVoice;
      this._enableVoiceVariable = value.enableVoiceVariable;
      this._guestVlan = value.guestVlan;
      this._guestVlanVariable = value.guestVlanVariable;
      this._hostMode = value.hostMode;
      this._hostModeVariable = value.hostModeVariable;
      this._inactivity = value.inactivity;
      this._inactivityVariable = value.inactivityVariable;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._macAuthenticationBypass = value.macAuthenticationBypass;
      this._macAuthenticationBypassVariable = value.macAuthenticationBypassVariable;
      this._mode = value.mode;
      this._paeEnable = value.paeEnable;
      this._paeEnableVariable = value.paeEnableVariable;
      this._portControl = value.portControl;
      this._portControlVariable = value.portControlVariable;
      this._reauthentication = value.reauthentication;
      this._reauthenticationVariable = value.reauthenticationVariable;
      this._restrictedVlan = value.restrictedVlan;
      this._restrictedVlanVariable = value.restrictedVlanVariable;
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._speed = value.speed;
      this._speedVariable = value.speedVariable;
      this._switchportAccessVlan = value.switchportAccessVlan;
      this._switchportAccessVlanVariable = value.switchportAccessVlanVariable;
      this._switchportTrunkAllowedVlans = value.switchportTrunkAllowedVlans;
      this._switchportTrunkAllowedVlansVariable = value.switchportTrunkAllowedVlansVariable;
      this._switchportTrunkNativeVlan = value.switchportTrunkNativeVlan;
      this._switchportTrunkNativeVlanVariable = value.switchportTrunkNativeVlanVariable;
      this._voiceVlan = value.voiceVlan;
      this._voiceVlanVariable = value.voiceVlanVariable;
    }
  }

  // control_direction - computed: false, optional: true, required: false
  private _controlDirection?: string; 
  public get controlDirection() {
    return this.getStringAttribute('control_direction');
  }
  public set controlDirection(value: string) {
    this._controlDirection = value;
  }
  public resetControlDirection() {
    this._controlDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlDirectionInput() {
    return this._controlDirection;
  }

  // control_direction_variable - computed: false, optional: true, required: false
  private _controlDirectionVariable?: string; 
  public get controlDirectionVariable() {
    return this.getStringAttribute('control_direction_variable');
  }
  public set controlDirectionVariable(value: string) {
    this._controlDirectionVariable = value;
  }
  public resetControlDirectionVariable() {
    this._controlDirectionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlDirectionVariableInput() {
    return this._controlDirectionVariable;
  }

  // critical_vlan - computed: false, optional: true, required: false
  private _criticalVlan?: number; 
  public get criticalVlan() {
    return this.getNumberAttribute('critical_vlan');
  }
  public set criticalVlan(value: number) {
    this._criticalVlan = value;
  }
  public resetCriticalVlan() {
    this._criticalVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalVlanInput() {
    return this._criticalVlan;
  }

  // critical_vlan_variable - computed: false, optional: true, required: false
  private _criticalVlanVariable?: string; 
  public get criticalVlanVariable() {
    return this.getStringAttribute('critical_vlan_variable');
  }
  public set criticalVlanVariable(value: string) {
    this._criticalVlanVariable = value;
  }
  public resetCriticalVlanVariable() {
    this._criticalVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalVlanVariableInput() {
    return this._criticalVlanVariable;
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

  // enable_periodic_reauth - computed: false, optional: true, required: false
  private _enablePeriodicReauth?: boolean | cdktf.IResolvable; 
  public get enablePeriodicReauth() {
    return this.getBooleanAttribute('enable_periodic_reauth');
  }
  public set enablePeriodicReauth(value: boolean | cdktf.IResolvable) {
    this._enablePeriodicReauth = value;
  }
  public resetEnablePeriodicReauth() {
    this._enablePeriodicReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeriodicReauthInput() {
    return this._enablePeriodicReauth;
  }

  // enable_periodic_reauth_variable - computed: false, optional: true, required: false
  private _enablePeriodicReauthVariable?: string; 
  public get enablePeriodicReauthVariable() {
    return this.getStringAttribute('enable_periodic_reauth_variable');
  }
  public set enablePeriodicReauthVariable(value: string) {
    this._enablePeriodicReauthVariable = value;
  }
  public resetEnablePeriodicReauthVariable() {
    this._enablePeriodicReauthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeriodicReauthVariableInput() {
    return this._enablePeriodicReauthVariable;
  }

  // enable_voice - computed: false, optional: true, required: false
  private _enableVoice?: boolean | cdktf.IResolvable; 
  public get enableVoice() {
    return this.getBooleanAttribute('enable_voice');
  }
  public set enableVoice(value: boolean | cdktf.IResolvable) {
    this._enableVoice = value;
  }
  public resetEnableVoice() {
    this._enableVoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVoiceInput() {
    return this._enableVoice;
  }

  // enable_voice_variable - computed: false, optional: true, required: false
  private _enableVoiceVariable?: string; 
  public get enableVoiceVariable() {
    return this.getStringAttribute('enable_voice_variable');
  }
  public set enableVoiceVariable(value: string) {
    this._enableVoiceVariable = value;
  }
  public resetEnableVoiceVariable() {
    this._enableVoiceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVoiceVariableInput() {
    return this._enableVoiceVariable;
  }

  // guest_vlan - computed: false, optional: true, required: false
  private _guestVlan?: number; 
  public get guestVlan() {
    return this.getNumberAttribute('guest_vlan');
  }
  public set guestVlan(value: number) {
    this._guestVlan = value;
  }
  public resetGuestVlan() {
    this._guestVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanInput() {
    return this._guestVlan;
  }

  // guest_vlan_variable - computed: false, optional: true, required: false
  private _guestVlanVariable?: string; 
  public get guestVlanVariable() {
    return this.getStringAttribute('guest_vlan_variable');
  }
  public set guestVlanVariable(value: string) {
    this._guestVlanVariable = value;
  }
  public resetGuestVlanVariable() {
    this._guestVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanVariableInput() {
    return this._guestVlanVariable;
  }

  // host_mode - computed: false, optional: true, required: false
  private _hostMode?: string; 
  public get hostMode() {
    return this.getStringAttribute('host_mode');
  }
  public set hostMode(value: string) {
    this._hostMode = value;
  }
  public resetHostMode() {
    this._hostMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostModeInput() {
    return this._hostMode;
  }

  // host_mode_variable - computed: false, optional: true, required: false
  private _hostModeVariable?: string; 
  public get hostModeVariable() {
    return this.getStringAttribute('host_mode_variable');
  }
  public set hostModeVariable(value: string) {
    this._hostModeVariable = value;
  }
  public resetHostModeVariable() {
    this._hostModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostModeVariableInput() {
    return this._hostModeVariable;
  }

  // inactivity - computed: false, optional: true, required: false
  private _inactivity?: number; 
  public get inactivity() {
    return this.getNumberAttribute('inactivity');
  }
  public set inactivity(value: number) {
    this._inactivity = value;
  }
  public resetInactivity() {
    this._inactivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityInput() {
    return this._inactivity;
  }

  // inactivity_variable - computed: false, optional: true, required: false
  private _inactivityVariable?: string; 
  public get inactivityVariable() {
    return this.getStringAttribute('inactivity_variable');
  }
  public set inactivityVariable(value: string) {
    this._inactivityVariable = value;
  }
  public resetInactivityVariable() {
    this._inactivityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityVariableInput() {
    return this._inactivityVariable;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // mac_authentication_bypass - computed: false, optional: true, required: false
  private _macAuthenticationBypass?: boolean | cdktf.IResolvable; 
  public get macAuthenticationBypass() {
    return this.getBooleanAttribute('mac_authentication_bypass');
  }
  public set macAuthenticationBypass(value: boolean | cdktf.IResolvable) {
    this._macAuthenticationBypass = value;
  }
  public resetMacAuthenticationBypass() {
    this._macAuthenticationBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthenticationBypassInput() {
    return this._macAuthenticationBypass;
  }

  // mac_authentication_bypass_variable - computed: false, optional: true, required: false
  private _macAuthenticationBypassVariable?: string; 
  public get macAuthenticationBypassVariable() {
    return this.getStringAttribute('mac_authentication_bypass_variable');
  }
  public set macAuthenticationBypassVariable(value: string) {
    this._macAuthenticationBypassVariable = value;
  }
  public resetMacAuthenticationBypassVariable() {
    this._macAuthenticationBypassVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthenticationBypassVariableInput() {
    return this._macAuthenticationBypassVariable;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // pae_enable - computed: false, optional: true, required: false
  private _paeEnable?: boolean | cdktf.IResolvable; 
  public get paeEnable() {
    return this.getBooleanAttribute('pae_enable');
  }
  public set paeEnable(value: boolean | cdktf.IResolvable) {
    this._paeEnable = value;
  }
  public resetPaeEnable() {
    this._paeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paeEnableInput() {
    return this._paeEnable;
  }

  // pae_enable_variable - computed: false, optional: true, required: false
  private _paeEnableVariable?: string; 
  public get paeEnableVariable() {
    return this.getStringAttribute('pae_enable_variable');
  }
  public set paeEnableVariable(value: string) {
    this._paeEnableVariable = value;
  }
  public resetPaeEnableVariable() {
    this._paeEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paeEnableVariableInput() {
    return this._paeEnableVariable;
  }

  // port_control - computed: false, optional: true, required: false
  private _portControl?: string; 
  public get portControl() {
    return this.getStringAttribute('port_control');
  }
  public set portControl(value: string) {
    this._portControl = value;
  }
  public resetPortControl() {
    this._portControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portControlInput() {
    return this._portControl;
  }

  // port_control_variable - computed: false, optional: true, required: false
  private _portControlVariable?: string; 
  public get portControlVariable() {
    return this.getStringAttribute('port_control_variable');
  }
  public set portControlVariable(value: string) {
    this._portControlVariable = value;
  }
  public resetPortControlVariable() {
    this._portControlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portControlVariableInput() {
    return this._portControlVariable;
  }

  // reauthentication - computed: false, optional: true, required: false
  private _reauthentication?: number; 
  public get reauthentication() {
    return this.getNumberAttribute('reauthentication');
  }
  public set reauthentication(value: number) {
    this._reauthentication = value;
  }
  public resetReauthentication() {
    this._reauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthenticationInput() {
    return this._reauthentication;
  }

  // reauthentication_variable - computed: false, optional: true, required: false
  private _reauthenticationVariable?: string; 
  public get reauthenticationVariable() {
    return this.getStringAttribute('reauthentication_variable');
  }
  public set reauthenticationVariable(value: string) {
    this._reauthenticationVariable = value;
  }
  public resetReauthenticationVariable() {
    this._reauthenticationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthenticationVariableInput() {
    return this._reauthenticationVariable;
  }

  // restricted_vlan - computed: false, optional: true, required: false
  private _restrictedVlan?: number; 
  public get restrictedVlan() {
    return this.getNumberAttribute('restricted_vlan');
  }
  public set restrictedVlan(value: number) {
    this._restrictedVlan = value;
  }
  public resetRestrictedVlan() {
    this._restrictedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVlanInput() {
    return this._restrictedVlan;
  }

  // restricted_vlan_variable - computed: false, optional: true, required: false
  private _restrictedVlanVariable?: string; 
  public get restrictedVlanVariable() {
    return this.getStringAttribute('restricted_vlan_variable');
  }
  public set restrictedVlanVariable(value: string) {
    this._restrictedVlanVariable = value;
  }
  public resetRestrictedVlanVariable() {
    this._restrictedVlanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVlanVariableInput() {
    return this._restrictedVlanVariable;
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

export class ServiceSwitchportFeatureInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServiceSwitchportFeatureInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServiceSwitchportFeatureInterfacesOutputReference {
    return new ServiceSwitchportFeatureInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceSwitchportFeatureStaticMacAddresses {
  /**
  * Interface name: GigabitEthernet0/<>/<>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#interface_name ServiceSwitchportFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#interface_name_variable ServiceSwitchportFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set MAC address in xxxx.xxxx.xxxx format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#mac_address ServiceSwitchportFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#mac_address_variable ServiceSwitchportFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Configure VLAN ID used with the mac and interface
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#vlan_id ServiceSwitchportFeature#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#vlan_id_variable ServiceSwitchportFeature#vlan_id_variable}
  */
  readonly vlanIdVariable?: string;
}

export function serviceSwitchportFeatureStaticMacAddressesToTerraform(struct?: ServiceSwitchportFeatureStaticMacAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_address_variable: cdktf.stringToTerraform(struct!.macAddressVariable),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_id_variable: cdktf.stringToTerraform(struct!.vlanIdVariable),
  }
}


export function serviceSwitchportFeatureStaticMacAddressesToHclTerraform(struct?: ServiceSwitchportFeatureStaticMacAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceNameVariable),
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
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vlanIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSwitchportFeatureStaticMacAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceSwitchportFeatureStaticMacAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._macAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressVariable = this._macAddressVariable;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIdVariable = this._vlanIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSwitchportFeatureStaticMacAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._macAddress = undefined;
      this._macAddressVariable = undefined;
      this._vlanId = undefined;
      this._vlanIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._macAddress = value.macAddress;
      this._macAddressVariable = value.macAddressVariable;
      this._vlanId = value.vlanId;
      this._vlanIdVariable = value.vlanIdVariable;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
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

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_id_variable - computed: false, optional: true, required: false
  private _vlanIdVariable?: string; 
  public get vlanIdVariable() {
    return this.getStringAttribute('vlan_id_variable');
  }
  public set vlanIdVariable(value: string) {
    this._vlanIdVariable = value;
  }
  public resetVlanIdVariable() {
    this._vlanIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdVariableInput() {
    return this._vlanIdVariable;
  }
}

export class ServiceSwitchportFeatureStaticMacAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceSwitchportFeatureStaticMacAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceSwitchportFeatureStaticMacAddressesOutputReference {
    return new ServiceSwitchportFeatureStaticMacAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature sdwan_service_switchport_feature}
*/
export class ServiceSwitchportFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_switchport_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceSwitchportFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceSwitchportFeature to import
  * @param importFromId The id of the existing ServiceSwitchportFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceSwitchportFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_switchport_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_switchport_feature sdwan_service_switchport_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceSwitchportFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceSwitchportFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_switchport_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._interfaces.internalValue = config.interfaces;
    this._name = config.name;
    this._staticMacAddresses.internalValue = config.staticMacAddresses;
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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ServiceSwitchportFeatureInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ServiceSwitchportFeatureInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
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

  // static_mac_addresses - computed: false, optional: true, required: false
  private _staticMacAddresses = new ServiceSwitchportFeatureStaticMacAddressesList(this, "static_mac_addresses", false);
  public get staticMacAddresses() {
    return this._staticMacAddresses;
  }
  public putStaticMacAddresses(value: ServiceSwitchportFeatureStaticMacAddresses[] | cdktf.IResolvable) {
    this._staticMacAddresses.internalValue = value;
  }
  public resetStaticMacAddresses() {
    this._staticMacAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacAddressesInput() {
    return this._staticMacAddresses.internalValue;
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      interfaces: cdktf.listMapper(serviceSwitchportFeatureInterfacesToTerraform, false)(this._interfaces.internalValue),
      name: cdktf.stringToTerraform(this._name),
      static_mac_addresses: cdktf.listMapper(serviceSwitchportFeatureStaticMacAddressesToTerraform, false)(this._staticMacAddresses.internalValue),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(serviceSwitchportFeatureInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceSwitchportFeatureInterfacesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_mac_addresses: {
        value: cdktf.listMapperHcl(serviceSwitchportFeatureStaticMacAddressesToHclTerraform, false)(this._staticMacAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceSwitchportFeatureStaticMacAddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
