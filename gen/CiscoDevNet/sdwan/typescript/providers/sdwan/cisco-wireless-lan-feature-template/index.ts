// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoWirelessLanFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set mobile express default gateway
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#controller_default_gateway CiscoWirelessLanFeatureTemplate#controller_default_gateway}
  */
  readonly controllerDefaultGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#controller_default_gateway_variable CiscoWirelessLanFeatureTemplate#controller_default_gateway_variable}
  */
  readonly controllerDefaultGatewayVariable?: string;
  /**
  * Set mobile express controller address
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#controller_ip_address CiscoWirelessLanFeatureTemplate#controller_ip_address}
  */
  readonly controllerIpAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#controller_ip_address_variable CiscoWirelessLanFeatureTemplate#controller_ip_address_variable}
  */
  readonly controllerIpAddressVariable?: string;
  /**
  * Set mobile express controller subnet mask
  *   - Default value: `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#controller_subnet_mask CiscoWirelessLanFeatureTemplate#controller_subnet_mask}
  */
  readonly controllerSubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#controller_subnet_mask_variable CiscoWirelessLanFeatureTemplate#controller_subnet_mask_variable}
  */
  readonly controllerSubnetMaskVariable?: string;
  /**
  * Select country
  *   - Choices: `AE`, `AR`, `AT`, `AU`, `BA`, `BB`, `BE`, `BG`, `BH`, `BN`, `BO`, `BR`, `BY`, `CA`, `CA2`, `CH`, `CL`, `CM`, `CN`, `CO`, `CR`, `CY`, `CZ`, `DE`, `DK`, `DO`, `DZ`, `EC`, `EE`, `EG`, `ES`, `FI`, `FJ`, `FR`, `GB`, `GH`, `GI`, `GR`, `HK`, `HR`, `HU`, `ID`, `IE`, `IL`, `IO`, `IN`, `IQ`, `IS`, `IT`, `J2`, `J4`, `JM`, `JO`, `KE`, `KN`, `KW`, `KZ`, `LB`, `LI`, `LK`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `ME`, `MK`, `MN`, `MO`, `MT`, `MX`, `MY`, `NL`, `NO`, `NZ`, `OM`, `PA`, `PE`, `PH`, `PH2`, `PK`, `PL`, `PR`, `PT`, `PY`, `QA`, `RO`, `RS`, `RU`, `SA`, `SE`, `SG`, `SI`, `SK`, `TH`, `TN`, `TR`, `TW`, `UA`, `US`, `UY`, `VE`, `VN`, `ZA`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#country CiscoWirelessLanFeatureTemplate#country}
  */
  readonly country?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#country_variable CiscoWirelessLanFeatureTemplate#country_variable}
  */
  readonly countryVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#description CiscoWirelessLanFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#device_types CiscoWirelessLanFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#name CiscoWirelessLanFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Set management password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#password CiscoWirelessLanFeatureTemplate#password}
  */
  readonly password?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#password_variable CiscoWirelessLanFeatureTemplate#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * 2.4GHz Shutdown
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#shutdown_2_4ghz CiscoWirelessLanFeatureTemplate#shutdown_2_4ghz}
  */
  readonly shutdown24Ghz?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#shutdown_2_4ghz_variable CiscoWirelessLanFeatureTemplate#shutdown_2_4ghz_variable}
  */
  readonly shutdown24GhzVariable?: string;
  /**
  * 5GHz Shutdown
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#shutdown_5ghz CiscoWirelessLanFeatureTemplate#shutdown_5ghz}
  */
  readonly shutdown5Ghz?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#shutdown_5ghz_variable CiscoWirelessLanFeatureTemplate#shutdown_5ghz_variable}
  */
  readonly shutdown5GhzVariable?: string;
  /**
  * Configure Wi-Fi SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#ssids CiscoWirelessLanFeatureTemplate#ssids}
  */
  readonly ssids?: CiscoWirelessLanFeatureTemplateSsids[] | cdktf.IResolvable;
  /**
  * Set management username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#username CiscoWirelessLanFeatureTemplate#username}
  */
  readonly username?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#username_variable CiscoWirelessLanFeatureTemplate#username_variable}
  */
  readonly usernameVariable?: string;
}
export interface CiscoWirelessLanFeatureTemplateSsids {
  /**
  * Set admin state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#admin_state CiscoWirelessLanFeatureTemplate#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#admin_state_variable CiscoWirelessLanFeatureTemplate#admin_state_variable}
  */
  readonly adminStateVariable?: string;
  /**
  * Enable broadcast SSID
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#broadcast_ssid CiscoWirelessLanFeatureTemplate#broadcast_ssid}
  */
  readonly broadcastSsid?: boolean | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#optional CiscoWirelessLanFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#passphrase CiscoWirelessLanFeatureTemplate#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#passphrase_variable CiscoWirelessLanFeatureTemplate#passphrase_variable}
  */
  readonly passphraseVariable?: string;
  /**
  * Select QoS profile
  *   - Choices: `platinum`, `gold`, `silver`, `bronze`
  *   - Default value: `silver`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#qos_profile CiscoWirelessLanFeatureTemplate#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#qos_profile_variable CiscoWirelessLanFeatureTemplate#qos_profile_variable}
  */
  readonly qosProfileVariable?: string;
  /**
  * Select radio type
  *   - Choices: `24ghz`, `5ghz`, `all`
  *   - Default value: `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radio_type CiscoWirelessLanFeatureTemplate#radio_type}
  */
  readonly radioType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radio_type_variable CiscoWirelessLanFeatureTemplate#radio_type_variable}
  */
  readonly radioTypeVariable?: string;
  /**
  * Set RADIUS server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radius_server_ip CiscoWirelessLanFeatureTemplate#radius_server_ip}
  */
  readonly radiusServerIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radius_server_ip_variable CiscoWirelessLanFeatureTemplate#radius_server_ip_variable}
  */
  readonly radiusServerIpVariable?: string;
  /**
  * Set RADIUS server authentication port
  *   - Range: `1`-`65535`
  *   - Default value: `1812`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radius_server_port CiscoWirelessLanFeatureTemplate#radius_server_port}
  */
  readonly radiusServerPort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radius_server_port_variable CiscoWirelessLanFeatureTemplate#radius_server_port_variable}
  */
  readonly radiusServerPortVariable?: string;
  /**
  * Set RADIUS server shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radius_server_secret CiscoWirelessLanFeatureTemplate#radius_server_secret}
  */
  readonly radiusServerSecret?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#radius_server_secret_variable CiscoWirelessLanFeatureTemplate#radius_server_secret_variable}
  */
  readonly radiusServerSecretVariable?: string;
  /**
  * Select security type
  *   - Choices: `enterprise`, `personal`, `open`
  *   - Default value: `personal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#security_type CiscoWirelessLanFeatureTemplate#security_type}
  */
  readonly securityType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#security_type_variable CiscoWirelessLanFeatureTemplate#security_type_variable}
  */
  readonly securityTypeVariable?: string;
  /**
  * Set VLAN ID
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#vlan_id CiscoWirelessLanFeatureTemplate#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#vlan_id_variable CiscoWirelessLanFeatureTemplate#vlan_id_variable}
  */
  readonly vlanIdVariable?: string;
  /**
  * Configure wlan SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#wireless_network_name CiscoWirelessLanFeatureTemplate#wireless_network_name}
  */
  readonly wirelessNetworkName?: string;
}

export function ciscoWirelessLanFeatureTemplateSsidsToTerraform(struct?: CiscoWirelessLanFeatureTemplateSsids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.booleanToTerraform(struct!.adminState),
    admin_state_variable: cdktf.stringToTerraform(struct!.adminStateVariable),
    broadcast_ssid: cdktf.booleanToTerraform(struct!.broadcastSsid),
    optional: cdktf.booleanToTerraform(struct!.optional),
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
    security_type_variable: cdktf.stringToTerraform(struct!.securityTypeVariable),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_id_variable: cdktf.stringToTerraform(struct!.vlanIdVariable),
    wireless_network_name: cdktf.stringToTerraform(struct!.wirelessNetworkName),
  }
}


export function ciscoWirelessLanFeatureTemplateSsidsToHclTerraform(struct?: CiscoWirelessLanFeatureTemplateSsids | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    security_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.securityTypeVariable),
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
    wireless_network_name: {
      value: cdktf.stringToHclTerraform(struct!.wirelessNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoWirelessLanFeatureTemplateSsidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoWirelessLanFeatureTemplateSsids | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._securityTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityTypeVariable = this._securityTypeVariable;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIdVariable = this._vlanIdVariable;
    }
    if (this._wirelessNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wirelessNetworkName = this._wirelessNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoWirelessLanFeatureTemplateSsids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._adminStateVariable = undefined;
      this._broadcastSsid = undefined;
      this._optional = undefined;
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
      this._securityTypeVariable = undefined;
      this._vlanId = undefined;
      this._vlanIdVariable = undefined;
      this._wirelessNetworkName = undefined;
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
      this._optional = value.optional;
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
      this._securityTypeVariable = value.securityTypeVariable;
      this._vlanId = value.vlanId;
      this._vlanIdVariable = value.vlanIdVariable;
      this._wirelessNetworkName = value.wirelessNetworkName;
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

  // security_type_variable - computed: false, optional: true, required: false
  private _securityTypeVariable?: string; 
  public get securityTypeVariable() {
    return this.getStringAttribute('security_type_variable');
  }
  public set securityTypeVariable(value: string) {
    this._securityTypeVariable = value;
  }
  public resetSecurityTypeVariable() {
    this._securityTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeVariableInput() {
    return this._securityTypeVariable;
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

  // wireless_network_name - computed: false, optional: true, required: false
  private _wirelessNetworkName?: string; 
  public get wirelessNetworkName() {
    return this.getStringAttribute('wireless_network_name');
  }
  public set wirelessNetworkName(value: string) {
    this._wirelessNetworkName = value;
  }
  public resetWirelessNetworkName() {
    this._wirelessNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessNetworkNameInput() {
    return this._wirelessNetworkName;
  }
}

export class CiscoWirelessLanFeatureTemplateSsidsList extends cdktf.ComplexList {
  public internalValue? : CiscoWirelessLanFeatureTemplateSsids[] | cdktf.IResolvable

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
  public get(index: number): CiscoWirelessLanFeatureTemplateSsidsOutputReference {
    return new CiscoWirelessLanFeatureTemplateSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template sdwan_cisco_wireless_lan_feature_template}
*/
export class CiscoWirelessLanFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_wireless_lan_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoWirelessLanFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoWirelessLanFeatureTemplate to import
  * @param importFromId The id of the existing CiscoWirelessLanFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoWirelessLanFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_wireless_lan_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_wireless_lan_feature_template sdwan_cisco_wireless_lan_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoWirelessLanFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoWirelessLanFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_wireless_lan_feature_template',
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
    this._controllerDefaultGateway = config.controllerDefaultGateway;
    this._controllerDefaultGatewayVariable = config.controllerDefaultGatewayVariable;
    this._controllerIpAddress = config.controllerIpAddress;
    this._controllerIpAddressVariable = config.controllerIpAddressVariable;
    this._controllerSubnetMask = config.controllerSubnetMask;
    this._controllerSubnetMaskVariable = config.controllerSubnetMaskVariable;
    this._country = config.country;
    this._countryVariable = config.countryVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._name = config.name;
    this._password = config.password;
    this._passwordVariable = config.passwordVariable;
    this._shutdown24Ghz = config.shutdown24Ghz;
    this._shutdown24GhzVariable = config.shutdown24GhzVariable;
    this._shutdown5Ghz = config.shutdown5Ghz;
    this._shutdown5GhzVariable = config.shutdown5GhzVariable;
    this._ssids.internalValue = config.ssids;
    this._username = config.username;
    this._usernameVariable = config.usernameVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controller_default_gateway - computed: false, optional: true, required: false
  private _controllerDefaultGateway?: string; 
  public get controllerDefaultGateway() {
    return this.getStringAttribute('controller_default_gateway');
  }
  public set controllerDefaultGateway(value: string) {
    this._controllerDefaultGateway = value;
  }
  public resetControllerDefaultGateway() {
    this._controllerDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerDefaultGatewayInput() {
    return this._controllerDefaultGateway;
  }

  // controller_default_gateway_variable - computed: false, optional: true, required: false
  private _controllerDefaultGatewayVariable?: string; 
  public get controllerDefaultGatewayVariable() {
    return this.getStringAttribute('controller_default_gateway_variable');
  }
  public set controllerDefaultGatewayVariable(value: string) {
    this._controllerDefaultGatewayVariable = value;
  }
  public resetControllerDefaultGatewayVariable() {
    this._controllerDefaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerDefaultGatewayVariableInput() {
    return this._controllerDefaultGatewayVariable;
  }

  // controller_ip_address - computed: false, optional: true, required: false
  private _controllerIpAddress?: string; 
  public get controllerIpAddress() {
    return this.getStringAttribute('controller_ip_address');
  }
  public set controllerIpAddress(value: string) {
    this._controllerIpAddress = value;
  }
  public resetControllerIpAddress() {
    this._controllerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIpAddressInput() {
    return this._controllerIpAddress;
  }

  // controller_ip_address_variable - computed: false, optional: true, required: false
  private _controllerIpAddressVariable?: string; 
  public get controllerIpAddressVariable() {
    return this.getStringAttribute('controller_ip_address_variable');
  }
  public set controllerIpAddressVariable(value: string) {
    this._controllerIpAddressVariable = value;
  }
  public resetControllerIpAddressVariable() {
    this._controllerIpAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIpAddressVariableInput() {
    return this._controllerIpAddressVariable;
  }

  // controller_subnet_mask - computed: false, optional: true, required: false
  private _controllerSubnetMask?: string; 
  public get controllerSubnetMask() {
    return this.getStringAttribute('controller_subnet_mask');
  }
  public set controllerSubnetMask(value: string) {
    this._controllerSubnetMask = value;
  }
  public resetControllerSubnetMask() {
    this._controllerSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerSubnetMaskInput() {
    return this._controllerSubnetMask;
  }

  // controller_subnet_mask_variable - computed: false, optional: true, required: false
  private _controllerSubnetMaskVariable?: string; 
  public get controllerSubnetMaskVariable() {
    return this.getStringAttribute('controller_subnet_mask_variable');
  }
  public set controllerSubnetMaskVariable(value: string) {
    this._controllerSubnetMaskVariable = value;
  }
  public resetControllerSubnetMaskVariable() {
    this._controllerSubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerSubnetMaskVariableInput() {
    return this._controllerSubnetMaskVariable;
  }

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

  // shutdown_2_4ghz - computed: false, optional: true, required: false
  private _shutdown24Ghz?: boolean | cdktf.IResolvable; 
  public get shutdown24Ghz() {
    return this.getBooleanAttribute('shutdown_2_4ghz');
  }
  public set shutdown24Ghz(value: boolean | cdktf.IResolvable) {
    this._shutdown24Ghz = value;
  }
  public resetShutdown24Ghz() {
    this._shutdown24Ghz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdown24GhzInput() {
    return this._shutdown24Ghz;
  }

  // shutdown_2_4ghz_variable - computed: false, optional: true, required: false
  private _shutdown24GhzVariable?: string; 
  public get shutdown24GhzVariable() {
    return this.getStringAttribute('shutdown_2_4ghz_variable');
  }
  public set shutdown24GhzVariable(value: string) {
    this._shutdown24GhzVariable = value;
  }
  public resetShutdown24GhzVariable() {
    this._shutdown24GhzVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdown24GhzVariableInput() {
    return this._shutdown24GhzVariable;
  }

  // shutdown_5ghz - computed: false, optional: true, required: false
  private _shutdown5Ghz?: boolean | cdktf.IResolvable; 
  public get shutdown5Ghz() {
    return this.getBooleanAttribute('shutdown_5ghz');
  }
  public set shutdown5Ghz(value: boolean | cdktf.IResolvable) {
    this._shutdown5Ghz = value;
  }
  public resetShutdown5Ghz() {
    this._shutdown5Ghz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdown5GhzInput() {
    return this._shutdown5Ghz;
  }

  // shutdown_5ghz_variable - computed: false, optional: true, required: false
  private _shutdown5GhzVariable?: string; 
  public get shutdown5GhzVariable() {
    return this.getStringAttribute('shutdown_5ghz_variable');
  }
  public set shutdown5GhzVariable(value: string) {
    this._shutdown5GhzVariable = value;
  }
  public resetShutdown5GhzVariable() {
    this._shutdown5GhzVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdown5GhzVariableInput() {
    return this._shutdown5GhzVariable;
  }

  // ssids - computed: false, optional: true, required: false
  private _ssids = new CiscoWirelessLanFeatureTemplateSsidsList(this, "ssids", false);
  public get ssids() {
    return this._ssids;
  }
  public putSsids(value: CiscoWirelessLanFeatureTemplateSsids[] | cdktf.IResolvable) {
    this._ssids.internalValue = value;
  }
  public resetSsids() {
    this._ssids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidsInput() {
    return this._ssids.internalValue;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      controller_default_gateway: cdktf.stringToTerraform(this._controllerDefaultGateway),
      controller_default_gateway_variable: cdktf.stringToTerraform(this._controllerDefaultGatewayVariable),
      controller_ip_address: cdktf.stringToTerraform(this._controllerIpAddress),
      controller_ip_address_variable: cdktf.stringToTerraform(this._controllerIpAddressVariable),
      controller_subnet_mask: cdktf.stringToTerraform(this._controllerSubnetMask),
      controller_subnet_mask_variable: cdktf.stringToTerraform(this._controllerSubnetMaskVariable),
      country: cdktf.stringToTerraform(this._country),
      country_variable: cdktf.stringToTerraform(this._countryVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_variable: cdktf.stringToTerraform(this._passwordVariable),
      shutdown_2_4ghz: cdktf.booleanToTerraform(this._shutdown24Ghz),
      shutdown_2_4ghz_variable: cdktf.stringToTerraform(this._shutdown24GhzVariable),
      shutdown_5ghz: cdktf.booleanToTerraform(this._shutdown5Ghz),
      shutdown_5ghz_variable: cdktf.stringToTerraform(this._shutdown5GhzVariable),
      ssids: cdktf.listMapper(ciscoWirelessLanFeatureTemplateSsidsToTerraform, false)(this._ssids.internalValue),
      username: cdktf.stringToTerraform(this._username),
      username_variable: cdktf.stringToTerraform(this._usernameVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      controller_default_gateway: {
        value: cdktf.stringToHclTerraform(this._controllerDefaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_default_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._controllerDefaultGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_ip_address: {
        value: cdktf.stringToHclTerraform(this._controllerIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_ip_address_variable: {
        value: cdktf.stringToHclTerraform(this._controllerIpAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._controllerSubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._controllerSubnetMaskVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      shutdown_2_4ghz: {
        value: cdktf.booleanToHclTerraform(this._shutdown24Ghz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_2_4ghz_variable: {
        value: cdktf.stringToHclTerraform(this._shutdown24GhzVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown_5ghz: {
        value: cdktf.booleanToHclTerraform(this._shutdown5Ghz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_5ghz_variable: {
        value: cdktf.stringToHclTerraform(this._shutdown5GhzVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssids: {
        value: cdktf.listMapperHcl(ciscoWirelessLanFeatureTemplateSsidsToHclTerraform, false)(this._ssids.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoWirelessLanFeatureTemplateSsidsList",
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
