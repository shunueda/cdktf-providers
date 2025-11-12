// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceWirelessLanFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Select country
  *   - Choices: `AE`, `AR`, `AT`, `AU`, `BA`, `BB`, `BE`, `BG`, `BH`, `BN`, `BO`, `BR`, `BY`, `CA`, `CA2`, `CH`, `CL`, `CM`, `CN`, `CO`, `CR`, `CY`, `CZ`, `DE`, `DK`, `DO`, `DZ`, `EC`, `EE`, `EG`, `ES`, `FI`, `FJ`, `FR`, `GB`, `GH`, `GI`, `GR`, `HK`, `HR`, `HU`, `ID`, `IE`, `IL`, `IO`, `IN`, `IQ`, `IS`, `IT`, `J2`, `J4`, `JM`, `JO`, `KE`, `KN`, `KW`, `KZ`, `LB`, `LI`, `LK`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `ME`, `MK`, `MN`, `MO`, `MT`, `MX`, `MY`, `NL`, `NO`, `NZ`, `OM`, `PA`, `PE`, `PH`, `PH2`, `PK`, `PL`, `PR`, `PT`, `PY`, `QA`, `RO`, `RS`, `RU`, `SA`, `SE`, `SG`, `SI`, `SK`, `TH`, `TN`, `TR`, `TW`, `UA`, `US`, `UY`, `VE`, `VN`, `ZA`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#country ServiceWirelessLanFeature#country}
  */
  readonly country?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#country_variable ServiceWirelessLanFeature#country_variable}
  */
  readonly countryVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#description ServiceWirelessLanFeature#description}
  */
  readonly description?: string;
  /**
  * 2.4GHz Enabled
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#enable_24g ServiceWirelessLanFeature#enable_24g}
  */
  readonly enable24G?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#enable_24g_variable ServiceWirelessLanFeature#enable_24g_variable}
  */
  readonly enable24GVariable?: string;
  /**
  * 5GHz Enabled
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#enable_5g ServiceWirelessLanFeature#enable_5g}
  */
  readonly enable5G?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#enable_5g_variable ServiceWirelessLanFeature#enable_5g_variable}
  */
  readonly enable5GVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#feature_profile_id ServiceWirelessLanFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Set mobile express default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#me_default_gateway ServiceWirelessLanFeature#me_default_gateway}
  */
  readonly meDefaultGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#me_default_gateway_variable ServiceWirelessLanFeature#me_default_gateway_variable}
  */
  readonly meDefaultGatewayVariable?: string;
  /**
  * ME management IP dynamic allocated by DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#me_dynamic_ip_enabled ServiceWirelessLanFeature#me_dynamic_ip_enabled}
  */
  readonly meDynamicIpEnabled: boolean | cdktf.IResolvable;
  /**
  * Set mobile express controller address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#me_ipv4_address ServiceWirelessLanFeature#me_ipv4_address}
  */
  readonly meIpv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#me_ipv4_address_variable ServiceWirelessLanFeature#me_ipv4_address_variable}
  */
  readonly meIpv4AddressVariable?: string;
  /**
  * Set mobile express controller subnet mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#me_subnet_mask ServiceWirelessLanFeature#me_subnet_mask}
  */
  readonly meSubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#me_subnet_mask_variable ServiceWirelessLanFeature#me_subnet_mask_variable}
  */
  readonly meSubnetMaskVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#name ServiceWirelessLanFeature#name}
  */
  readonly name: string;
  /**
  * Set management password,the password must contains characters from all of the following classes,lowercase letters,uppercase letters,digits,and special characters. No character in the password can be repeated more than three times consecutively. The password must not be the same as the associated username or the username reversed. The password must not be cisco,ocsic,or any variant obtained by changing the capitalization of the letters in word cisco. In addition,you can't substitute 1,l,or ! for i,0 for o,$ for s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#password ServiceWirelessLanFeature#password}
  */
  readonly password?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#password_variable ServiceWirelessLanFeature#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Configure Wi-Fi SSID profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#ssids ServiceWirelessLanFeature#ssids}
  */
  readonly ssids: ServiceWirelessLanFeatureSsids[] | cdktf.IResolvable;
  /**
  * Set management username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#username ServiceWirelessLanFeature#username}
  */
  readonly username?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#username_variable ServiceWirelessLanFeature#username_variable}
  */
  readonly usernameVariable?: string;
}
export interface ServiceWirelessLanFeatureSsids {
  /**
  * Set admin state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#admin_state ServiceWirelessLanFeature#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#admin_state_variable ServiceWirelessLanFeature#admin_state_variable}
  */
  readonly adminStateVariable?: string;
  /**
  * Enable broadcast SSID
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#broadcast_ssid ServiceWirelessLanFeature#broadcast_ssid}
  */
  readonly broadcastSsid?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#broadcast_ssid_variable ServiceWirelessLanFeature#broadcast_ssid_variable}
  */
  readonly broadcastSsidVariable?: string;
  /**
  * Set passphrase, Attribute conditional on `security_type` being equal to `personal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#passphrase ServiceWirelessLanFeature#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Variable name, Attribute conditional on `security_type` being equal to `personal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#passphrase_variable ServiceWirelessLanFeature#passphrase_variable}
  */
  readonly passphraseVariable?: string;
  /**
  * Select QoS profile
  *   - Choices: `platinum`, `gold`, `silver`, `bronze`
  *   - Default value: `silver`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#qos_profile ServiceWirelessLanFeature#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#qos_profile_variable ServiceWirelessLanFeature#qos_profile_variable}
  */
  readonly qosProfileVariable?: string;
  /**
  * Select radio type
  *   - Choices: `24ghz`, `5ghz`, `all`
  *   - Default value: `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radio_type ServiceWirelessLanFeature#radio_type}
  */
  readonly radioType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radio_type_variable ServiceWirelessLanFeature#radio_type_variable}
  */
  readonly radioTypeVariable?: string;
  /**
  * Set RADIUS server IP, Attribute conditional on `security_type` being equal to `enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radius_server_ip ServiceWirelessLanFeature#radius_server_ip}
  */
  readonly radiusServerIp?: string;
  /**
  * Variable name, Attribute conditional on `security_type` being equal to `enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radius_server_ip_variable ServiceWirelessLanFeature#radius_server_ip_variable}
  */
  readonly radiusServerIpVariable?: string;
  /**
  * Set RADIUS server authentication port, Attribute conditional on `security_type` being equal to `enterprise`
  *   - Range: `1`-`65535`
  *   - Default value: `1812`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radius_server_port ServiceWirelessLanFeature#radius_server_port}
  */
  readonly radiusServerPort?: number;
  /**
  * Variable name, Attribute conditional on `security_type` being equal to `enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radius_server_port_variable ServiceWirelessLanFeature#radius_server_port_variable}
  */
  readonly radiusServerPortVariable?: string;
  /**
  * Set RADIUS server shared secret, Attribute conditional on `security_type` being equal to `enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radius_server_secret ServiceWirelessLanFeature#radius_server_secret}
  */
  readonly radiusServerSecret?: string;
  /**
  * Variable name, Attribute conditional on `security_type` being equal to `enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#radius_server_secret_variable ServiceWirelessLanFeature#radius_server_secret_variable}
  */
  readonly radiusServerSecretVariable?: string;
  /**
  * Select security type
  *   - Choices: `enterprise`, `personal`, `open`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#security_type ServiceWirelessLanFeature#security_type}
  */
  readonly securityType?: string;
  /**
  * Configure wlan SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#ssid_name ServiceWirelessLanFeature#ssid_name}
  */
  readonly ssidName?: string;
  /**
  * Set VLAN ID
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#vlan_id ServiceWirelessLanFeature#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#vlan_id_variable ServiceWirelessLanFeature#vlan_id_variable}
  */
  readonly vlanIdVariable?: string;
}

export function serviceWirelessLanFeatureSsidsToTerraform(struct?: ServiceWirelessLanFeatureSsids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.booleanToTerraform(struct!.adminState),
    admin_state_variable: cdktf.stringToTerraform(struct!.adminStateVariable),
    broadcast_ssid: cdktf.booleanToTerraform(struct!.broadcastSsid),
    broadcast_ssid_variable: cdktf.stringToTerraform(struct!.broadcastSsidVariable),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    passphrase_variable: cdktf.stringToTerraform(struct!.passphraseVariable),
    qos_profile: cdktf.stringToTerraform(struct!.qosProfile),
    qos_profile_variable: cdktf.stringToTerraform(struct!.qosProfileVariable),
    radio_type: cdktf.stringToTerraform(struct!.radioType),
    radio_type_variable: cdktf.stringToTerraform(struct!.radioTypeVariable),
    radius_server_ip: cdktf.stringToTerraform(struct!.radiusServerIp),
    radius_server_ip_variable: cdktf.stringToTerraform(struct!.radiusServerIpVariable),
    radius_server_port: cdktf.numberToTerraform(struct!.radiusServerPort),
    radius_server_port_variable: cdktf.stringToTerraform(struct!.radiusServerPortVariable),
    radius_server_secret: cdktf.stringToTerraform(struct!.radiusServerSecret),
    radius_server_secret_variable: cdktf.stringToTerraform(struct!.radiusServerSecretVariable),
    security_type: cdktf.stringToTerraform(struct!.securityType),
    ssid_name: cdktf.stringToTerraform(struct!.ssidName),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_id_variable: cdktf.stringToTerraform(struct!.vlanIdVariable),
  }
}


export function serviceWirelessLanFeatureSsidsToHclTerraform(struct?: ServiceWirelessLanFeatureSsids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.booleanToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_state_variable: {
      value: cdktf.stringToHclTerraform(struct!.adminStateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadcast_ssid: {
      value: cdktf.booleanToHclTerraform(struct!.broadcastSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    broadcast_ssid_variable: {
      value: cdktf.stringToHclTerraform(struct!.broadcastSsidVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_variable: {
      value: cdktf.stringToHclTerraform(struct!.passphraseVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_profile: {
      value: cdktf.stringToHclTerraform(struct!.qosProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.qosProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_type: {
      value: cdktf.stringToHclTerraform(struct!.radioType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.radioTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_server_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_server_port: {
      value: cdktf.numberToHclTerraform(struct!.radiusServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_server_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerPortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_server_secret: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_server_secret_variable: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerSecretVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_type: {
      value: cdktf.stringToHclTerraform(struct!.securityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid_name: {
      value: cdktf.stringToHclTerraform(struct!.ssidName),
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

export class ServiceWirelessLanFeatureSsidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceWirelessLanFeatureSsids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._adminStateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminStateVariable = this._adminStateVariable;
    }
    if (this._broadcastSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastSsid = this._broadcastSsid;
    }
    if (this._broadcastSsidVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastSsidVariable = this._broadcastSsidVariable;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._passphraseVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseVariable = this._passphraseVariable;
    }
    if (this._qosProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosProfile = this._qosProfile;
    }
    if (this._qosProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosProfileVariable = this._qosProfileVariable;
    }
    if (this._radioType !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioType = this._radioType;
    }
    if (this._radioTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioTypeVariable = this._radioTypeVariable;
    }
    if (this._radiusServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerIp = this._radiusServerIp;
    }
    if (this._radiusServerIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerIpVariable = this._radiusServerIpVariable;
    }
    if (this._radiusServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerPort = this._radiusServerPort;
    }
    if (this._radiusServerPortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerPortVariable = this._radiusServerPortVariable;
    }
    if (this._radiusServerSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerSecret = this._radiusServerSecret;
    }
    if (this._radiusServerSecretVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerSecretVariable = this._radiusServerSecretVariable;
    }
    if (this._securityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityType = this._securityType;
    }
    if (this._ssidName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidName = this._ssidName;
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

  public set internalValue(value: ServiceWirelessLanFeatureSsids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._adminStateVariable = undefined;
      this._broadcastSsid = undefined;
      this._broadcastSsidVariable = undefined;
      this._passphrase = undefined;
      this._passphraseVariable = undefined;
      this._qosProfile = undefined;
      this._qosProfileVariable = undefined;
      this._radioType = undefined;
      this._radioTypeVariable = undefined;
      this._radiusServerIp = undefined;
      this._radiusServerIpVariable = undefined;
      this._radiusServerPort = undefined;
      this._radiusServerPortVariable = undefined;
      this._radiusServerSecret = undefined;
      this._radiusServerSecretVariable = undefined;
      this._securityType = undefined;
      this._ssidName = undefined;
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
      this._adminState = value.adminState;
      this._adminStateVariable = value.adminStateVariable;
      this._broadcastSsid = value.broadcastSsid;
      this._broadcastSsidVariable = value.broadcastSsidVariable;
      this._passphrase = value.passphrase;
      this._passphraseVariable = value.passphraseVariable;
      this._qosProfile = value.qosProfile;
      this._qosProfileVariable = value.qosProfileVariable;
      this._radioType = value.radioType;
      this._radioTypeVariable = value.radioTypeVariable;
      this._radiusServerIp = value.radiusServerIp;
      this._radiusServerIpVariable = value.radiusServerIpVariable;
      this._radiusServerPort = value.radiusServerPort;
      this._radiusServerPortVariable = value.radiusServerPortVariable;
      this._radiusServerSecret = value.radiusServerSecret;
      this._radiusServerSecretVariable = value.radiusServerSecretVariable;
      this._securityType = value.securityType;
      this._ssidName = value.ssidName;
      this._vlanId = value.vlanId;
      this._vlanIdVariable = value.vlanIdVariable;
    }
  }

  // admin_state - computed: false, optional: true, required: false
  private _adminState?: boolean | cdktf.IResolvable; 
  public get adminState() {
    return this.getBooleanAttribute('admin_state');
  }
  public set adminState(value: boolean | cdktf.IResolvable) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // admin_state_variable - computed: false, optional: true, required: false
  private _adminStateVariable?: string; 
  public get adminStateVariable() {
    return this.getStringAttribute('admin_state_variable');
  }
  public set adminStateVariable(value: string) {
    this._adminStateVariable = value;
  }
  public resetAdminStateVariable() {
    this._adminStateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateVariableInput() {
    return this._adminStateVariable;
  }

  // broadcast_ssid - computed: false, optional: true, required: false
  private _broadcastSsid?: boolean | cdktf.IResolvable; 
  public get broadcastSsid() {
    return this.getBooleanAttribute('broadcast_ssid');
  }
  public set broadcastSsid(value: boolean | cdktf.IResolvable) {
    this._broadcastSsid = value;
  }
  public resetBroadcastSsid() {
    this._broadcastSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastSsidInput() {
    return this._broadcastSsid;
  }

  // broadcast_ssid_variable - computed: false, optional: true, required: false
  private _broadcastSsidVariable?: string; 
  public get broadcastSsidVariable() {
    return this.getStringAttribute('broadcast_ssid_variable');
  }
  public set broadcastSsidVariable(value: string) {
    this._broadcastSsidVariable = value;
  }
  public resetBroadcastSsidVariable() {
    this._broadcastSsidVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastSsidVariableInput() {
    return this._broadcastSsidVariable;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // passphrase_variable - computed: false, optional: true, required: false
  private _passphraseVariable?: string; 
  public get passphraseVariable() {
    return this.getStringAttribute('passphrase_variable');
  }
  public set passphraseVariable(value: string) {
    this._passphraseVariable = value;
  }
  public resetPassphraseVariable() {
    this._passphraseVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseVariableInput() {
    return this._passphraseVariable;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile?: string; 
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
  public set qosProfile(value: string) {
    this._qosProfile = value;
  }
  public resetQosProfile() {
    this._qosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile;
  }

  // qos_profile_variable - computed: false, optional: true, required: false
  private _qosProfileVariable?: string; 
  public get qosProfileVariable() {
    return this.getStringAttribute('qos_profile_variable');
  }
  public set qosProfileVariable(value: string) {
    this._qosProfileVariable = value;
  }
  public resetQosProfileVariable() {
    this._qosProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileVariableInput() {
    return this._qosProfileVariable;
  }

  // radio_type - computed: false, optional: true, required: false
  private _radioType?: string; 
  public get radioType() {
    return this.getStringAttribute('radio_type');
  }
  public set radioType(value: string) {
    this._radioType = value;
  }
  public resetRadioType() {
    this._radioType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeInput() {
    return this._radioType;
  }

  // radio_type_variable - computed: false, optional: true, required: false
  private _radioTypeVariable?: string; 
  public get radioTypeVariable() {
    return this.getStringAttribute('radio_type_variable');
  }
  public set radioTypeVariable(value: string) {
    this._radioTypeVariable = value;
  }
  public resetRadioTypeVariable() {
    this._radioTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioTypeVariableInput() {
    return this._radioTypeVariable;
  }

  // radius_server_ip - computed: false, optional: true, required: false
  private _radiusServerIp?: string; 
  public get radiusServerIp() {
    return this.getStringAttribute('radius_server_ip');
  }
  public set radiusServerIp(value: string) {
    this._radiusServerIp = value;
  }
  public resetRadiusServerIp() {
    this._radiusServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerIpInput() {
    return this._radiusServerIp;
  }

  // radius_server_ip_variable - computed: false, optional: true, required: false
  private _radiusServerIpVariable?: string; 
  public get radiusServerIpVariable() {
    return this.getStringAttribute('radius_server_ip_variable');
  }
  public set radiusServerIpVariable(value: string) {
    this._radiusServerIpVariable = value;
  }
  public resetRadiusServerIpVariable() {
    this._radiusServerIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerIpVariableInput() {
    return this._radiusServerIpVariable;
  }

  // radius_server_port - computed: false, optional: true, required: false
  private _radiusServerPort?: number; 
  public get radiusServerPort() {
    return this.getNumberAttribute('radius_server_port');
  }
  public set radiusServerPort(value: number) {
    this._radiusServerPort = value;
  }
  public resetRadiusServerPort() {
    this._radiusServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerPortInput() {
    return this._radiusServerPort;
  }

  // radius_server_port_variable - computed: false, optional: true, required: false
  private _radiusServerPortVariable?: string; 
  public get radiusServerPortVariable() {
    return this.getStringAttribute('radius_server_port_variable');
  }
  public set radiusServerPortVariable(value: string) {
    this._radiusServerPortVariable = value;
  }
  public resetRadiusServerPortVariable() {
    this._radiusServerPortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerPortVariableInput() {
    return this._radiusServerPortVariable;
  }

  // radius_server_secret - computed: false, optional: true, required: false
  private _radiusServerSecret?: string; 
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }
  public set radiusServerSecret(value: string) {
    this._radiusServerSecret = value;
  }
  public resetRadiusServerSecret() {
    this._radiusServerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerSecretInput() {
    return this._radiusServerSecret;
  }

  // radius_server_secret_variable - computed: false, optional: true, required: false
  private _radiusServerSecretVariable?: string; 
  public get radiusServerSecretVariable() {
    return this.getStringAttribute('radius_server_secret_variable');
  }
  public set radiusServerSecretVariable(value: string) {
    this._radiusServerSecretVariable = value;
  }
  public resetRadiusServerSecretVariable() {
    this._radiusServerSecretVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerSecretVariableInput() {
    return this._radiusServerSecretVariable;
  }

  // security_type - computed: false, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
  }

  // ssid_name - computed: false, optional: true, required: false
  private _ssidName?: string; 
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }
  public set ssidName(value: string) {
    this._ssidName = value;
  }
  public resetSsidName() {
    this._ssidName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNameInput() {
    return this._ssidName;
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

export class ServiceWirelessLanFeatureSsidsList extends cdktf.ComplexList {
  public internalValue? : ServiceWirelessLanFeatureSsids[] | cdktf.IResolvable

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
  public get(index: number): ServiceWirelessLanFeatureSsidsOutputReference {
    return new ServiceWirelessLanFeatureSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature sdwan_service_wireless_lan_feature}
*/
export class ServiceWirelessLanFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_wireless_lan_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceWirelessLanFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceWirelessLanFeature to import
  * @param importFromId The id of the existing ServiceWirelessLanFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceWirelessLanFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_wireless_lan_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_wireless_lan_feature sdwan_service_wireless_lan_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceWirelessLanFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceWirelessLanFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_wireless_lan_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._country = config.country;
    this._countryVariable = config.countryVariable;
    this._description = config.description;
    this._enable24G = config.enable24G;
    this._enable24GVariable = config.enable24GVariable;
    this._enable5G = config.enable5G;
    this._enable5GVariable = config.enable5GVariable;
    this._featureProfileId = config.featureProfileId;
    this._meDefaultGateway = config.meDefaultGateway;
    this._meDefaultGatewayVariable = config.meDefaultGatewayVariable;
    this._meDynamicIpEnabled = config.meDynamicIpEnabled;
    this._meIpv4Address = config.meIpv4Address;
    this._meIpv4AddressVariable = config.meIpv4AddressVariable;
    this._meSubnetMask = config.meSubnetMask;
    this._meSubnetMaskVariable = config.meSubnetMaskVariable;
    this._name = config.name;
    this._password = config.password;
    this._passwordVariable = config.passwordVariable;
    this._ssids.internalValue = config.ssids;
    this._username = config.username;
    this._usernameVariable = config.usernameVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // country_variable - computed: false, optional: true, required: false
  private _countryVariable?: string; 
  public get countryVariable() {
    return this.getStringAttribute('country_variable');
  }
  public set countryVariable(value: string) {
    this._countryVariable = value;
  }
  public resetCountryVariable() {
    this._countryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryVariableInput() {
    return this._countryVariable;
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

  // enable_24g - computed: false, optional: true, required: false
  private _enable24G?: boolean | cdktf.IResolvable; 
  public get enable24G() {
    return this.getBooleanAttribute('enable_24g');
  }
  public set enable24G(value: boolean | cdktf.IResolvable) {
    this._enable24G = value;
  }
  public resetEnable24G() {
    this._enable24G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enable24GInput() {
    return this._enable24G;
  }

  // enable_24g_variable - computed: false, optional: true, required: false
  private _enable24GVariable?: string; 
  public get enable24GVariable() {
    return this.getStringAttribute('enable_24g_variable');
  }
  public set enable24GVariable(value: string) {
    this._enable24GVariable = value;
  }
  public resetEnable24GVariable() {
    this._enable24GVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enable24GVariableInput() {
    return this._enable24GVariable;
  }

  // enable_5g - computed: false, optional: true, required: false
  private _enable5G?: boolean | cdktf.IResolvable; 
  public get enable5G() {
    return this.getBooleanAttribute('enable_5g');
  }
  public set enable5G(value: boolean | cdktf.IResolvable) {
    this._enable5G = value;
  }
  public resetEnable5G() {
    this._enable5G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enable5GInput() {
    return this._enable5G;
  }

  // enable_5g_variable - computed: false, optional: true, required: false
  private _enable5GVariable?: string; 
  public get enable5GVariable() {
    return this.getStringAttribute('enable_5g_variable');
  }
  public set enable5GVariable(value: string) {
    this._enable5GVariable = value;
  }
  public resetEnable5GVariable() {
    this._enable5GVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enable5GVariableInput() {
    return this._enable5GVariable;
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

  // me_default_gateway - computed: false, optional: true, required: false
  private _meDefaultGateway?: string; 
  public get meDefaultGateway() {
    return this.getStringAttribute('me_default_gateway');
  }
  public set meDefaultGateway(value: string) {
    this._meDefaultGateway = value;
  }
  public resetMeDefaultGateway() {
    this._meDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meDefaultGatewayInput() {
    return this._meDefaultGateway;
  }

  // me_default_gateway_variable - computed: false, optional: true, required: false
  private _meDefaultGatewayVariable?: string; 
  public get meDefaultGatewayVariable() {
    return this.getStringAttribute('me_default_gateway_variable');
  }
  public set meDefaultGatewayVariable(value: string) {
    this._meDefaultGatewayVariable = value;
  }
  public resetMeDefaultGatewayVariable() {
    this._meDefaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meDefaultGatewayVariableInput() {
    return this._meDefaultGatewayVariable;
  }

  // me_dynamic_ip_enabled - computed: false, optional: false, required: true
  private _meDynamicIpEnabled?: boolean | cdktf.IResolvable; 
  public get meDynamicIpEnabled() {
    return this.getBooleanAttribute('me_dynamic_ip_enabled');
  }
  public set meDynamicIpEnabled(value: boolean | cdktf.IResolvable) {
    this._meDynamicIpEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meDynamicIpEnabledInput() {
    return this._meDynamicIpEnabled;
  }

  // me_ipv4_address - computed: false, optional: true, required: false
  private _meIpv4Address?: string; 
  public get meIpv4Address() {
    return this.getStringAttribute('me_ipv4_address');
  }
  public set meIpv4Address(value: string) {
    this._meIpv4Address = value;
  }
  public resetMeIpv4Address() {
    this._meIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meIpv4AddressInput() {
    return this._meIpv4Address;
  }

  // me_ipv4_address_variable - computed: false, optional: true, required: false
  private _meIpv4AddressVariable?: string; 
  public get meIpv4AddressVariable() {
    return this.getStringAttribute('me_ipv4_address_variable');
  }
  public set meIpv4AddressVariable(value: string) {
    this._meIpv4AddressVariable = value;
  }
  public resetMeIpv4AddressVariable() {
    this._meIpv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meIpv4AddressVariableInput() {
    return this._meIpv4AddressVariable;
  }

  // me_subnet_mask - computed: false, optional: true, required: false
  private _meSubnetMask?: string; 
  public get meSubnetMask() {
    return this.getStringAttribute('me_subnet_mask');
  }
  public set meSubnetMask(value: string) {
    this._meSubnetMask = value;
  }
  public resetMeSubnetMask() {
    this._meSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meSubnetMaskInput() {
    return this._meSubnetMask;
  }

  // me_subnet_mask_variable - computed: false, optional: true, required: false
  private _meSubnetMaskVariable?: string; 
  public get meSubnetMaskVariable() {
    return this.getStringAttribute('me_subnet_mask_variable');
  }
  public set meSubnetMaskVariable(value: string) {
    this._meSubnetMaskVariable = value;
  }
  public resetMeSubnetMaskVariable() {
    this._meSubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meSubnetMaskVariableInput() {
    return this._meSubnetMaskVariable;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // ssids - computed: false, optional: false, required: true
  private _ssids = new ServiceWirelessLanFeatureSsidsList(this, "ssids", false);
  public get ssids() {
    return this._ssids;
  }
  public putSsids(value: ServiceWirelessLanFeatureSsids[] | cdktf.IResolvable) {
    this._ssids.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidsInput() {
    return this._ssids.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_variable - computed: false, optional: true, required: false
  private _usernameVariable?: string; 
  public get usernameVariable() {
    return this.getStringAttribute('username_variable');
  }
  public set usernameVariable(value: string) {
    this._usernameVariable = value;
  }
  public resetUsernameVariable() {
    this._usernameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameVariableInput() {
    return this._usernameVariable;
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
      country: cdktf.stringToTerraform(this._country),
      country_variable: cdktf.stringToTerraform(this._countryVariable),
      description: cdktf.stringToTerraform(this._description),
      enable_24g: cdktf.booleanToTerraform(this._enable24G),
      enable_24g_variable: cdktf.stringToTerraform(this._enable24GVariable),
      enable_5g: cdktf.booleanToTerraform(this._enable5G),
      enable_5g_variable: cdktf.stringToTerraform(this._enable5GVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      me_default_gateway: cdktf.stringToTerraform(this._meDefaultGateway),
      me_default_gateway_variable: cdktf.stringToTerraform(this._meDefaultGatewayVariable),
      me_dynamic_ip_enabled: cdktf.booleanToTerraform(this._meDynamicIpEnabled),
      me_ipv4_address: cdktf.stringToTerraform(this._meIpv4Address),
      me_ipv4_address_variable: cdktf.stringToTerraform(this._meIpv4AddressVariable),
      me_subnet_mask: cdktf.stringToTerraform(this._meSubnetMask),
      me_subnet_mask_variable: cdktf.stringToTerraform(this._meSubnetMaskVariable),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_variable: cdktf.stringToTerraform(this._passwordVariable),
      ssids: cdktf.listMapper(serviceWirelessLanFeatureSsidsToTerraform, false)(this._ssids.internalValue),
      username: cdktf.stringToTerraform(this._username),
      username_variable: cdktf.stringToTerraform(this._usernameVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_variable: {
        value: cdktf.stringToHclTerraform(this._countryVariable),
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
      enable_24g: {
        value: cdktf.booleanToHclTerraform(this._enable24G),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_24g_variable: {
        value: cdktf.stringToHclTerraform(this._enable24GVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_5g: {
        value: cdktf.booleanToHclTerraform(this._enable5G),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_5g_variable: {
        value: cdktf.stringToHclTerraform(this._enable5GVariable),
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
      me_default_gateway: {
        value: cdktf.stringToHclTerraform(this._meDefaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      me_default_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._meDefaultGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      me_dynamic_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._meDynamicIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      me_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._meIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      me_ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._meIpv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      me_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._meSubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      me_subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._meSubnetMaskVariable),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_variable: {
        value: cdktf.stringToHclTerraform(this._passwordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssids: {
        value: cdktf.listMapperHcl(serviceWirelessLanFeatureSsidsToHclTerraform, false)(this._ssids.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceWirelessLanFeatureSsidsList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_variable: {
        value: cdktf.stringToHclTerraform(this._usernameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
