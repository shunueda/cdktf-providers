// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNtpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set MD5 authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#authentication_keys SystemNtpFeature#authentication_keys}
  */
  readonly authenticationKeys?: SystemNtpFeatureAuthenticationKeys[] | cdktf.IResolvable;
  /**
  * Enable device as NTP Leader
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#authoritative_ntp_server SystemNtpFeature#authoritative_ntp_server}
  */
  readonly authoritativeNtpServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#authoritative_ntp_server_variable SystemNtpFeature#authoritative_ntp_server_variable}
  */
  readonly authoritativeNtpServerVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#description SystemNtpFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#feature_profile_id SystemNtpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#name SystemNtpFeature#name}
  */
  readonly name: string;
  /**
  * Configure NTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#servers SystemNtpFeature#servers}
  */
  readonly servers?: SystemNtpFeatureServers[] | cdktf.IResolvable;
  /**
  * Enable device as NTP Leader
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#source_interface SystemNtpFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#source_interface_variable SystemNtpFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Enable device as NTP Leader
  *   - Range: `1`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#stratum SystemNtpFeature#stratum}
  */
  readonly stratum?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#stratum_variable SystemNtpFeature#stratum_variable}
  */
  readonly stratumVariable?: string;
  /**
  * Designate authentication key as trustworthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#trusted_keys SystemNtpFeature#trusted_keys}
  */
  readonly trustedKeys?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#trusted_keys_variable SystemNtpFeature#trusted_keys_variable}
  */
  readonly trustedKeysVariable?: string;
}
export interface SystemNtpFeatureAuthenticationKeys {
  /**
  * MD5 authentication key ID
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#key_id SystemNtpFeature#key_id}
  */
  readonly keyId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#key_id_variable SystemNtpFeature#key_id_variable}
  */
  readonly keyIdVariable?: string;
  /**
  * Enter cleartext or AES-encrypted MD5 authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#md5_value SystemNtpFeature#md5_value}
  */
  readonly md5Value?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#md5_value_variable SystemNtpFeature#md5_value_variable}
  */
  readonly md5ValueVariable?: string;
}

export function systemNtpFeatureAuthenticationKeysToTerraform(struct?: SystemNtpFeatureAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.numberToTerraform(struct!.keyId),
    key_id_variable: cdktf.stringToTerraform(struct!.keyIdVariable),
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
    md5_value_variable: cdktf.stringToTerraform(struct!.md5ValueVariable),
  }
}


export function systemNtpFeatureAuthenticationKeysToHclTerraform(struct?: SystemNtpFeatureAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.keyIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5_value_variable: {
      value: cdktf.stringToHclTerraform(struct!.md5ValueVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNtpFeatureAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemNtpFeatureAuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIdVariable = this._keyIdVariable;
    }
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    if (this._md5ValueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5ValueVariable = this._md5ValueVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNtpFeatureAuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyIdVariable = undefined;
      this._md5Value = undefined;
      this._md5ValueVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyIdVariable = value.keyIdVariable;
      this._md5Value = value.md5Value;
      this._md5ValueVariable = value.md5ValueVariable;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_id_variable - computed: false, optional: true, required: false
  private _keyIdVariable?: string; 
  public get keyIdVariable() {
    return this.getStringAttribute('key_id_variable');
  }
  public set keyIdVariable(value: string) {
    this._keyIdVariable = value;
  }
  public resetKeyIdVariable() {
    this._keyIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdVariableInput() {
    return this._keyIdVariable;
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }

  // md5_value_variable - computed: false, optional: true, required: false
  private _md5ValueVariable?: string; 
  public get md5ValueVariable() {
    return this.getStringAttribute('md5_value_variable');
  }
  public set md5ValueVariable(value: string) {
    this._md5ValueVariable = value;
  }
  public resetMd5ValueVariable() {
    this._md5ValueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueVariableInput() {
    return this._md5ValueVariable;
  }
}

export class SystemNtpFeatureAuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : SystemNtpFeatureAuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): SystemNtpFeatureAuthenticationKeysOutputReference {
    return new SystemNtpFeatureAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemNtpFeatureServers {
  /**
  * Set authentication key for the server
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#authentication_key SystemNtpFeature#authentication_key}
  */
  readonly authenticationKey?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#authentication_key_variable SystemNtpFeature#authentication_key_variable}
  */
  readonly authenticationKeyVariable?: string;
  /**
  * Set hostname or IP address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#hostname_ip_address SystemNtpFeature#hostname_ip_address}
  */
  readonly hostnameIpAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#hostname_ip_address_variable SystemNtpFeature#hostname_ip_address_variable}
  */
  readonly hostnameIpAddressVariable?: string;
  /**
  * Set NTP version
  *   - Range: `1`-`4`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#ntp_version SystemNtpFeature#ntp_version}
  */
  readonly ntpVersion?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#ntp_version_variable SystemNtpFeature#ntp_version_variable}
  */
  readonly ntpVersionVariable?: string;
  /**
  * Prefer this NTP server
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#prefer_this_ntp_server SystemNtpFeature#prefer_this_ntp_server}
  */
  readonly preferThisNtpServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#prefer_this_ntp_server_variable SystemNtpFeature#prefer_this_ntp_server_variable}
  */
  readonly preferThisNtpServerVariable?: string;
  /**
  * Set interface to use to reach NTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#source_interface SystemNtpFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#source_interface_variable SystemNtpFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set VPN in which NTP server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#vpn SystemNtpFeature#vpn}
  */
  readonly vpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#vpn_variable SystemNtpFeature#vpn_variable}
  */
  readonly vpnVariable?: string;
}

export function systemNtpFeatureServersToTerraform(struct?: SystemNtpFeatureServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.numberToTerraform(struct!.authenticationKey),
    authentication_key_variable: cdktf.stringToTerraform(struct!.authenticationKeyVariable),
    hostname_ip_address: cdktf.stringToTerraform(struct!.hostnameIpAddress),
    hostname_ip_address_variable: cdktf.stringToTerraform(struct!.hostnameIpAddressVariable),
    ntp_version: cdktf.numberToTerraform(struct!.ntpVersion),
    ntp_version_variable: cdktf.stringToTerraform(struct!.ntpVersionVariable),
    prefer_this_ntp_server: cdktf.booleanToTerraform(struct!.preferThisNtpServer),
    prefer_this_ntp_server_variable: cdktf.stringToTerraform(struct!.preferThisNtpServerVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
    vpn_variable: cdktf.stringToTerraform(struct!.vpnVariable),
  }
}


export function systemNtpFeatureServersToHclTerraform(struct?: SystemNtpFeatureServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.numberToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.hostnameIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_ip_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.hostnameIpAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_version: {
      value: cdktf.numberToHclTerraform(struct!.ntpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_version_variable: {
      value: cdktf.stringToHclTerraform(struct!.ntpVersionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_this_ntp_server: {
      value: cdktf.booleanToHclTerraform(struct!.preferThisNtpServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_this_ntp_server_variable: {
      value: cdktf.stringToHclTerraform(struct!.preferThisNtpServerVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.numberToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNtpFeatureServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemNtpFeatureServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._authenticationKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyVariable = this._authenticationKeyVariable;
    }
    if (this._hostnameIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIpAddress = this._hostnameIpAddress;
    }
    if (this._hostnameIpAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIpAddressVariable = this._hostnameIpAddressVariable;
    }
    if (this._ntpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpVersion = this._ntpVersion;
    }
    if (this._ntpVersionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpVersionVariable = this._ntpVersionVariable;
    }
    if (this._preferThisNtpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferThisNtpServer = this._preferThisNtpServer;
    }
    if (this._preferThisNtpServerVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferThisNtpServerVariable = this._preferThisNtpServerVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    if (this._vpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnVariable = this._vpnVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNtpFeatureServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
      this._authenticationKeyVariable = undefined;
      this._hostnameIpAddress = undefined;
      this._hostnameIpAddressVariable = undefined;
      this._ntpVersion = undefined;
      this._ntpVersionVariable = undefined;
      this._preferThisNtpServer = undefined;
      this._preferThisNtpServerVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._vpn = undefined;
      this._vpnVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
      this._authenticationKeyVariable = value.authenticationKeyVariable;
      this._hostnameIpAddress = value.hostnameIpAddress;
      this._hostnameIpAddressVariable = value.hostnameIpAddressVariable;
      this._ntpVersion = value.ntpVersion;
      this._ntpVersionVariable = value.ntpVersionVariable;
      this._preferThisNtpServer = value.preferThisNtpServer;
      this._preferThisNtpServerVariable = value.preferThisNtpServerVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._vpn = value.vpn;
      this._vpnVariable = value.vpnVariable;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: number; 
  public get authenticationKey() {
    return this.getNumberAttribute('authentication_key');
  }
  public set authenticationKey(value: number) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_variable - computed: false, optional: true, required: false
  private _authenticationKeyVariable?: string; 
  public get authenticationKeyVariable() {
    return this.getStringAttribute('authentication_key_variable');
  }
  public set authenticationKeyVariable(value: string) {
    this._authenticationKeyVariable = value;
  }
  public resetAuthenticationKeyVariable() {
    this._authenticationKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyVariableInput() {
    return this._authenticationKeyVariable;
  }

  // hostname_ip_address - computed: false, optional: true, required: false
  private _hostnameIpAddress?: string; 
  public get hostnameIpAddress() {
    return this.getStringAttribute('hostname_ip_address');
  }
  public set hostnameIpAddress(value: string) {
    this._hostnameIpAddress = value;
  }
  public resetHostnameIpAddress() {
    this._hostnameIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameIpAddressInput() {
    return this._hostnameIpAddress;
  }

  // hostname_ip_address_variable - computed: false, optional: true, required: false
  private _hostnameIpAddressVariable?: string; 
  public get hostnameIpAddressVariable() {
    return this.getStringAttribute('hostname_ip_address_variable');
  }
  public set hostnameIpAddressVariable(value: string) {
    this._hostnameIpAddressVariable = value;
  }
  public resetHostnameIpAddressVariable() {
    this._hostnameIpAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameIpAddressVariableInput() {
    return this._hostnameIpAddressVariable;
  }

  // ntp_version - computed: false, optional: true, required: false
  private _ntpVersion?: number; 
  public get ntpVersion() {
    return this.getNumberAttribute('ntp_version');
  }
  public set ntpVersion(value: number) {
    this._ntpVersion = value;
  }
  public resetNtpVersion() {
    this._ntpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpVersionInput() {
    return this._ntpVersion;
  }

  // ntp_version_variable - computed: false, optional: true, required: false
  private _ntpVersionVariable?: string; 
  public get ntpVersionVariable() {
    return this.getStringAttribute('ntp_version_variable');
  }
  public set ntpVersionVariable(value: string) {
    this._ntpVersionVariable = value;
  }
  public resetNtpVersionVariable() {
    this._ntpVersionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpVersionVariableInput() {
    return this._ntpVersionVariable;
  }

  // prefer_this_ntp_server - computed: false, optional: true, required: false
  private _preferThisNtpServer?: boolean | cdktf.IResolvable; 
  public get preferThisNtpServer() {
    return this.getBooleanAttribute('prefer_this_ntp_server');
  }
  public set preferThisNtpServer(value: boolean | cdktf.IResolvable) {
    this._preferThisNtpServer = value;
  }
  public resetPreferThisNtpServer() {
    this._preferThisNtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferThisNtpServerInput() {
    return this._preferThisNtpServer;
  }

  // prefer_this_ntp_server_variable - computed: false, optional: true, required: false
  private _preferThisNtpServerVariable?: string; 
  public get preferThisNtpServerVariable() {
    return this.getStringAttribute('prefer_this_ntp_server_variable');
  }
  public set preferThisNtpServerVariable(value: string) {
    this._preferThisNtpServerVariable = value;
  }
  public resetPreferThisNtpServerVariable() {
    this._preferThisNtpServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferThisNtpServerVariableInput() {
    return this._preferThisNtpServerVariable;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // vpn_variable - computed: false, optional: true, required: false
  private _vpnVariable?: string; 
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
  public set vpnVariable(value: string) {
    this._vpnVariable = value;
  }
  public resetVpnVariable() {
    this._vpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnVariableInput() {
    return this._vpnVariable;
  }
}

export class SystemNtpFeatureServersList extends cdktf.ComplexList {
  public internalValue? : SystemNtpFeatureServers[] | cdktf.IResolvable

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
  public get(index: number): SystemNtpFeatureServersOutputReference {
    return new SystemNtpFeatureServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature sdwan_system_ntp_feature}
*/
export class SystemNtpFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_ntp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNtpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNtpFeature to import
  * @param importFromId The id of the existing SystemNtpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNtpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_ntp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_ntp_feature sdwan_system_ntp_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNtpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemNtpFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_ntp_feature',
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
    this._authenticationKeys.internalValue = config.authenticationKeys;
    this._authoritativeNtpServer = config.authoritativeNtpServer;
    this._authoritativeNtpServerVariable = config.authoritativeNtpServerVariable;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._servers.internalValue = config.servers;
    this._sourceInterface = config.sourceInterface;
    this._sourceInterfaceVariable = config.sourceInterfaceVariable;
    this._stratum = config.stratum;
    this._stratumVariable = config.stratumVariable;
    this._trustedKeys = config.trustedKeys;
    this._trustedKeysVariable = config.trustedKeysVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_keys - computed: false, optional: true, required: false
  private _authenticationKeys = new SystemNtpFeatureAuthenticationKeysList(this, "authentication_keys", false);
  public get authenticationKeys() {
    return this._authenticationKeys;
  }
  public putAuthenticationKeys(value: SystemNtpFeatureAuthenticationKeys[] | cdktf.IResolvable) {
    this._authenticationKeys.internalValue = value;
  }
  public resetAuthenticationKeys() {
    this._authenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeysInput() {
    return this._authenticationKeys.internalValue;
  }

  // authoritative_ntp_server - computed: false, optional: true, required: false
  private _authoritativeNtpServer?: boolean | cdktf.IResolvable; 
  public get authoritativeNtpServer() {
    return this.getBooleanAttribute('authoritative_ntp_server');
  }
  public set authoritativeNtpServer(value: boolean | cdktf.IResolvable) {
    this._authoritativeNtpServer = value;
  }
  public resetAuthoritativeNtpServer() {
    this._authoritativeNtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeNtpServerInput() {
    return this._authoritativeNtpServer;
  }

  // authoritative_ntp_server_variable - computed: false, optional: true, required: false
  private _authoritativeNtpServerVariable?: string; 
  public get authoritativeNtpServerVariable() {
    return this.getStringAttribute('authoritative_ntp_server_variable');
  }
  public set authoritativeNtpServerVariable(value: string) {
    this._authoritativeNtpServerVariable = value;
  }
  public resetAuthoritativeNtpServerVariable() {
    this._authoritativeNtpServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeNtpServerVariableInput() {
    return this._authoritativeNtpServerVariable;
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

  // servers - computed: false, optional: true, required: false
  private _servers = new SystemNtpFeatureServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: SystemNtpFeatureServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // source_interface_variable - computed: false, optional: true, required: false
  private _sourceInterfaceVariable?: string; 
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
  public set sourceInterfaceVariable(value: string) {
    this._sourceInterfaceVariable = value;
  }
  public resetSourceInterfaceVariable() {
    this._sourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceVariableInput() {
    return this._sourceInterfaceVariable;
  }

  // stratum - computed: false, optional: true, required: false
  private _stratum?: number; 
  public get stratum() {
    return this.getNumberAttribute('stratum');
  }
  public set stratum(value: number) {
    this._stratum = value;
  }
  public resetStratum() {
    this._stratum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stratumInput() {
    return this._stratum;
  }

  // stratum_variable - computed: false, optional: true, required: false
  private _stratumVariable?: string; 
  public get stratumVariable() {
    return this.getStringAttribute('stratum_variable');
  }
  public set stratumVariable(value: string) {
    this._stratumVariable = value;
  }
  public resetStratumVariable() {
    this._stratumVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stratumVariableInput() {
    return this._stratumVariable;
  }

  // trusted_keys - computed: false, optional: true, required: false
  private _trustedKeys?: number[]; 
  public get trustedKeys() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('trusted_keys')));
  }
  public set trustedKeys(value: number[]) {
    this._trustedKeys = value;
  }
  public resetTrustedKeys() {
    this._trustedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeysInput() {
    return this._trustedKeys;
  }

  // trusted_keys_variable - computed: false, optional: true, required: false
  private _trustedKeysVariable?: string; 
  public get trustedKeysVariable() {
    return this.getStringAttribute('trusted_keys_variable');
  }
  public set trustedKeysVariable(value: string) {
    this._trustedKeysVariable = value;
  }
  public resetTrustedKeysVariable() {
    this._trustedKeysVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeysVariableInput() {
    return this._trustedKeysVariable;
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
      authentication_keys: cdktf.listMapper(systemNtpFeatureAuthenticationKeysToTerraform, false)(this._authenticationKeys.internalValue),
      authoritative_ntp_server: cdktf.booleanToTerraform(this._authoritativeNtpServer),
      authoritative_ntp_server_variable: cdktf.stringToTerraform(this._authoritativeNtpServerVariable),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      servers: cdktf.listMapper(systemNtpFeatureServersToTerraform, false)(this._servers.internalValue),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
      source_interface_variable: cdktf.stringToTerraform(this._sourceInterfaceVariable),
      stratum: cdktf.numberToTerraform(this._stratum),
      stratum_variable: cdktf.stringToTerraform(this._stratumVariable),
      trusted_keys: cdktf.listMapper(cdktf.numberToTerraform, false)(this._trustedKeys),
      trusted_keys_variable: cdktf.stringToTerraform(this._trustedKeysVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_keys: {
        value: cdktf.listMapperHcl(systemNtpFeatureAuthenticationKeysToHclTerraform, false)(this._authenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemNtpFeatureAuthenticationKeysList",
      },
      authoritative_ntp_server: {
        value: cdktf.booleanToHclTerraform(this._authoritativeNtpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authoritative_ntp_server_variable: {
        value: cdktf.stringToHclTerraform(this._authoritativeNtpServerVariable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.listMapperHcl(systemNtpFeatureServersToHclTerraform, false)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemNtpFeatureServersList",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface_variable: {
        value: cdktf.stringToHclTerraform(this._sourceInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stratum: {
        value: cdktf.numberToHclTerraform(this._stratum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stratum_variable: {
        value: cdktf.stringToHclTerraform(this._stratumVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_keys: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._trustedKeys),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      trusted_keys_variable: {
        value: cdktf.stringToHclTerraform(this._trustedKeysVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
