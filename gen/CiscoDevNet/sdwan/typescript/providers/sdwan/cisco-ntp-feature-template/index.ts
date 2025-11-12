// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoNtpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set MD5 authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#authentication_keys CiscoNtpFeatureTemplate#authentication_keys}
  */
  readonly authenticationKeys?: CiscoNtpFeatureTemplateAuthenticationKeys[] | cdktf.IResolvable;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#description CiscoNtpFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#device_types CiscoNtpFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Configure device as NTP master
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#master CiscoNtpFeatureTemplate#master}
  */
  readonly master?: boolean | cdktf.IResolvable;
  /**
  * Set interface for NTP Master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#master_source_interface CiscoNtpFeatureTemplate#master_source_interface}
  */
  readonly masterSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#master_source_interface_variable CiscoNtpFeatureTemplate#master_source_interface_variable}
  */
  readonly masterSourceInterfaceVariable?: string;
  /**
  * Master Stratum <1..15>
  *   - Range: `1`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#master_stratum CiscoNtpFeatureTemplate#master_stratum}
  */
  readonly masterStratum?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#master_stratum_variable CiscoNtpFeatureTemplate#master_stratum_variable}
  */
  readonly masterStratumVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#master_variable CiscoNtpFeatureTemplate#master_variable}
  */
  readonly masterVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#name CiscoNtpFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Configure NTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#servers CiscoNtpFeatureTemplate#servers}
  */
  readonly servers?: CiscoNtpFeatureTemplateServers[] | cdktf.IResolvable;
  /**
  * Designate authentication key as trustworthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#trusted_keys CiscoNtpFeatureTemplate#trusted_keys}
  */
  readonly trustedKeys?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#trusted_keys_variable CiscoNtpFeatureTemplate#trusted_keys_variable}
  */
  readonly trustedKeysVariable?: string;
}
export interface CiscoNtpFeatureTemplateAuthenticationKeys {
  /**
  * MD5 authentication key ID
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#id CiscoNtpFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#id_variable CiscoNtpFeatureTemplate#id_variable}
  */
  readonly idVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#optional CiscoNtpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Enter cleartext or AES-encrypted MD5 authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#value CiscoNtpFeatureTemplate#value}
  */
  readonly value?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#value_variable CiscoNtpFeatureTemplate#value_variable}
  */
  readonly valueVariable?: string;
}

export function ciscoNtpFeatureTemplateAuthenticationKeysToTerraform(struct?: CiscoNtpFeatureTemplateAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    id_variable: cdktf.stringToTerraform(struct!.idVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    value: cdktf.stringToTerraform(struct!.value),
    value_variable: cdktf.stringToTerraform(struct!.valueVariable),
  }
}


export function ciscoNtpFeatureTemplateAuthenticationKeysToHclTerraform(struct?: CiscoNtpFeatureTemplateAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id_variable: {
      value: cdktf.stringToHclTerraform(struct!.idVariable),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_variable: {
      value: cdktf.stringToHclTerraform(struct!.valueVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoNtpFeatureTemplateAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoNtpFeatureTemplateAuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.idVariable = this._idVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueVariable = this._valueVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoNtpFeatureTemplateAuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._idVariable = undefined;
      this._optional = undefined;
      this._value = undefined;
      this._valueVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._idVariable = value.idVariable;
      this._optional = value.optional;
      this._value = value.value;
      this._valueVariable = value.valueVariable;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // id_variable - computed: false, optional: true, required: false
  private _idVariable?: string; 
  public get idVariable() {
    return this.getStringAttribute('id_variable');
  }
  public set idVariable(value: string) {
    this._idVariable = value;
  }
  public resetIdVariable() {
    this._idVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idVariableInput() {
    return this._idVariable;
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

  // value_variable - computed: false, optional: true, required: false
  private _valueVariable?: string; 
  public get valueVariable() {
    return this.getStringAttribute('value_variable');
  }
  public set valueVariable(value: string) {
    this._valueVariable = value;
  }
  public resetValueVariable() {
    this._valueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueVariableInput() {
    return this._valueVariable;
  }
}

export class CiscoNtpFeatureTemplateAuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : CiscoNtpFeatureTemplateAuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): CiscoNtpFeatureTemplateAuthenticationKeysOutputReference {
    return new CiscoNtpFeatureTemplateAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoNtpFeatureTemplateServers {
  /**
  * Set authentication key for the server
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#authentication_key_id CiscoNtpFeatureTemplate#authentication_key_id}
  */
  readonly authenticationKeyId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#authentication_key_id_variable CiscoNtpFeatureTemplate#authentication_key_id_variable}
  */
  readonly authenticationKeyIdVariable?: string;
  /**
  * Set hostname or IP address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#hostname_ip CiscoNtpFeatureTemplate#hostname_ip}
  */
  readonly hostnameIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#hostname_ip_variable CiscoNtpFeatureTemplate#hostname_ip_variable}
  */
  readonly hostnameIpVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#optional CiscoNtpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefer this NTP server
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#prefer CiscoNtpFeatureTemplate#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#prefer_variable CiscoNtpFeatureTemplate#prefer_variable}
  */
  readonly preferVariable?: string;
  /**
  * Set interface to use to reach NTP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#source_interface CiscoNtpFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#source_interface_variable CiscoNtpFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set NTP version
  *   - Range: `1`-`4`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#version CiscoNtpFeatureTemplate#version}
  */
  readonly version?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#version_variable CiscoNtpFeatureTemplate#version_variable}
  */
  readonly versionVariable?: string;
  /**
  * Set VPN in which NTP server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#vpn_id CiscoNtpFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#vpn_id_variable CiscoNtpFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoNtpFeatureTemplateServersToTerraform(struct?: CiscoNtpFeatureTemplateServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key_id: cdktf.numberToTerraform(struct!.authenticationKeyId),
    authentication_key_id_variable: cdktf.stringToTerraform(struct!.authenticationKeyIdVariable),
    hostname_ip: cdktf.stringToTerraform(struct!.hostnameIp),
    hostname_ip_variable: cdktf.stringToTerraform(struct!.hostnameIpVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefer: cdktf.booleanToTerraform(struct!.prefer),
    prefer_variable: cdktf.stringToTerraform(struct!.preferVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    version: cdktf.numberToTerraform(struct!.version),
    version_variable: cdktf.stringToTerraform(struct!.versionVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoNtpFeatureTemplateServersToHclTerraform(struct?: CiscoNtpFeatureTemplateServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key_id: {
      value: cdktf.numberToHclTerraform(struct!.authenticationKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_key_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostnameIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.hostnameIpVariable),
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
    prefer: {
      value: cdktf.booleanToHclTerraform(struct!.prefer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_variable: {
      value: cdktf.stringToHclTerraform(struct!.preferVariable),
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
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_variable: {
      value: cdktf.stringToHclTerraform(struct!.versionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoNtpFeatureTemplateServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoNtpFeatureTemplateServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyId = this._authenticationKeyId;
    }
    if (this._authenticationKeyIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyIdVariable = this._authenticationKeyIdVariable;
    }
    if (this._hostnameIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIp = this._hostnameIp;
    }
    if (this._hostnameIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIpVariable = this._hostnameIpVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer;
    }
    if (this._preferVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferVariable = this._preferVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionVariable = this._versionVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoNtpFeatureTemplateServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKeyId = undefined;
      this._authenticationKeyIdVariable = undefined;
      this._hostnameIp = undefined;
      this._hostnameIpVariable = undefined;
      this._optional = undefined;
      this._prefer = undefined;
      this._preferVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._version = undefined;
      this._versionVariable = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKeyId = value.authenticationKeyId;
      this._authenticationKeyIdVariable = value.authenticationKeyIdVariable;
      this._hostnameIp = value.hostnameIp;
      this._hostnameIpVariable = value.hostnameIpVariable;
      this._optional = value.optional;
      this._prefer = value.prefer;
      this._preferVariable = value.preferVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._version = value.version;
      this._versionVariable = value.versionVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // authentication_key_id - computed: false, optional: true, required: false
  private _authenticationKeyId?: number; 
  public get authenticationKeyId() {
    return this.getNumberAttribute('authentication_key_id');
  }
  public set authenticationKeyId(value: number) {
    this._authenticationKeyId = value;
  }
  public resetAuthenticationKeyId() {
    this._authenticationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyIdInput() {
    return this._authenticationKeyId;
  }

  // authentication_key_id_variable - computed: false, optional: true, required: false
  private _authenticationKeyIdVariable?: string; 
  public get authenticationKeyIdVariable() {
    return this.getStringAttribute('authentication_key_id_variable');
  }
  public set authenticationKeyIdVariable(value: string) {
    this._authenticationKeyIdVariable = value;
  }
  public resetAuthenticationKeyIdVariable() {
    this._authenticationKeyIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyIdVariableInput() {
    return this._authenticationKeyIdVariable;
  }

  // hostname_ip - computed: false, optional: true, required: false
  private _hostnameIp?: string; 
  public get hostnameIp() {
    return this.getStringAttribute('hostname_ip');
  }
  public set hostnameIp(value: string) {
    this._hostnameIp = value;
  }
  public resetHostnameIp() {
    this._hostnameIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameIpInput() {
    return this._hostnameIp;
  }

  // hostname_ip_variable - computed: false, optional: true, required: false
  private _hostnameIpVariable?: string; 
  public get hostnameIpVariable() {
    return this.getStringAttribute('hostname_ip_variable');
  }
  public set hostnameIpVariable(value: string) {
    this._hostnameIpVariable = value;
  }
  public resetHostnameIpVariable() {
    this._hostnameIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameIpVariableInput() {
    return this._hostnameIpVariable;
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

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
  }

  // prefer_variable - computed: false, optional: true, required: false
  private _preferVariable?: string; 
  public get preferVariable() {
    return this.getStringAttribute('prefer_variable');
  }
  public set preferVariable(value: string) {
    this._preferVariable = value;
  }
  public resetPreferVariable() {
    this._preferVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferVariableInput() {
    return this._preferVariable;
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_variable - computed: false, optional: true, required: false
  private _versionVariable?: string; 
  public get versionVariable() {
    return this.getStringAttribute('version_variable');
  }
  public set versionVariable(value: string) {
    this._versionVariable = value;
  }
  public resetVersionVariable() {
    this._versionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionVariableInput() {
    return this._versionVariable;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CiscoNtpFeatureTemplateServersList extends cdktf.ComplexList {
  public internalValue? : CiscoNtpFeatureTemplateServers[] | cdktf.IResolvable

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
  public get(index: number): CiscoNtpFeatureTemplateServersOutputReference {
    return new CiscoNtpFeatureTemplateServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template sdwan_cisco_ntp_feature_template}
*/
export class CiscoNtpFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_ntp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoNtpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoNtpFeatureTemplate to import
  * @param importFromId The id of the existing CiscoNtpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoNtpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_ntp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_ntp_feature_template sdwan_cisco_ntp_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoNtpFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoNtpFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_ntp_feature_template',
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
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._master = config.master;
    this._masterSourceInterface = config.masterSourceInterface;
    this._masterSourceInterfaceVariable = config.masterSourceInterfaceVariable;
    this._masterStratum = config.masterStratum;
    this._masterStratumVariable = config.masterStratumVariable;
    this._masterVariable = config.masterVariable;
    this._name = config.name;
    this._servers.internalValue = config.servers;
    this._trustedKeys = config.trustedKeys;
    this._trustedKeysVariable = config.trustedKeysVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_keys - computed: false, optional: true, required: false
  private _authenticationKeys = new CiscoNtpFeatureTemplateAuthenticationKeysList(this, "authentication_keys", false);
  public get authenticationKeys() {
    return this._authenticationKeys;
  }
  public putAuthenticationKeys(value: CiscoNtpFeatureTemplateAuthenticationKeys[] | cdktf.IResolvable) {
    this._authenticationKeys.internalValue = value;
  }
  public resetAuthenticationKeys() {
    this._authenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeysInput() {
    return this._authenticationKeys.internalValue;
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

  // master - computed: false, optional: true, required: false
  private _master?: boolean | cdktf.IResolvable; 
  public get master() {
    return this.getBooleanAttribute('master');
  }
  public set master(value: boolean | cdktf.IResolvable) {
    this._master = value;
  }
  public resetMaster() {
    this._master = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // master_source_interface - computed: false, optional: true, required: false
  private _masterSourceInterface?: string; 
  public get masterSourceInterface() {
    return this.getStringAttribute('master_source_interface');
  }
  public set masterSourceInterface(value: string) {
    this._masterSourceInterface = value;
  }
  public resetMasterSourceInterface() {
    this._masterSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSourceInterfaceInput() {
    return this._masterSourceInterface;
  }

  // master_source_interface_variable - computed: false, optional: true, required: false
  private _masterSourceInterfaceVariable?: string; 
  public get masterSourceInterfaceVariable() {
    return this.getStringAttribute('master_source_interface_variable');
  }
  public set masterSourceInterfaceVariable(value: string) {
    this._masterSourceInterfaceVariable = value;
  }
  public resetMasterSourceInterfaceVariable() {
    this._masterSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSourceInterfaceVariableInput() {
    return this._masterSourceInterfaceVariable;
  }

  // master_stratum - computed: false, optional: true, required: false
  private _masterStratum?: number; 
  public get masterStratum() {
    return this.getNumberAttribute('master_stratum');
  }
  public set masterStratum(value: number) {
    this._masterStratum = value;
  }
  public resetMasterStratum() {
    this._masterStratum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterStratumInput() {
    return this._masterStratum;
  }

  // master_stratum_variable - computed: false, optional: true, required: false
  private _masterStratumVariable?: string; 
  public get masterStratumVariable() {
    return this.getStringAttribute('master_stratum_variable');
  }
  public set masterStratumVariable(value: string) {
    this._masterStratumVariable = value;
  }
  public resetMasterStratumVariable() {
    this._masterStratumVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterStratumVariableInput() {
    return this._masterStratumVariable;
  }

  // master_variable - computed: false, optional: true, required: false
  private _masterVariable?: string; 
  public get masterVariable() {
    return this.getStringAttribute('master_variable');
  }
  public set masterVariable(value: string) {
    this._masterVariable = value;
  }
  public resetMasterVariable() {
    this._masterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterVariableInput() {
    return this._masterVariable;
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
  private _servers = new CiscoNtpFeatureTemplateServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: CiscoNtpFeatureTemplateServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      authentication_keys: cdktf.listMapper(ciscoNtpFeatureTemplateAuthenticationKeysToTerraform, false)(this._authenticationKeys.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      master: cdktf.booleanToTerraform(this._master),
      master_source_interface: cdktf.stringToTerraform(this._masterSourceInterface),
      master_source_interface_variable: cdktf.stringToTerraform(this._masterSourceInterfaceVariable),
      master_stratum: cdktf.numberToTerraform(this._masterStratum),
      master_stratum_variable: cdktf.stringToTerraform(this._masterStratumVariable),
      master_variable: cdktf.stringToTerraform(this._masterVariable),
      name: cdktf.stringToTerraform(this._name),
      servers: cdktf.listMapper(ciscoNtpFeatureTemplateServersToTerraform, false)(this._servers.internalValue),
      trusted_keys: cdktf.listMapper(cdktf.numberToTerraform, false)(this._trustedKeys),
      trusted_keys_variable: cdktf.stringToTerraform(this._trustedKeysVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_keys: {
        value: cdktf.listMapperHcl(ciscoNtpFeatureTemplateAuthenticationKeysToHclTerraform, false)(this._authenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoNtpFeatureTemplateAuthenticationKeysList",
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
      master: {
        value: cdktf.booleanToHclTerraform(this._master),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_source_interface: {
        value: cdktf.stringToHclTerraform(this._masterSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_source_interface_variable: {
        value: cdktf.stringToHclTerraform(this._masterSourceInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_stratum: {
        value: cdktf.numberToHclTerraform(this._masterStratum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_stratum_variable: {
        value: cdktf.stringToHclTerraform(this._masterStratumVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_variable: {
        value: cdktf.stringToHclTerraform(this._masterVariable),
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
        value: cdktf.listMapperHcl(ciscoNtpFeatureTemplateServersToHclTerraform, false)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoNtpFeatureTemplateServersList",
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
