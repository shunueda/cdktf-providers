// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoLoggingFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#description CiscoLoggingFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#device_types CiscoLoggingFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable logging to local disk
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#disk_logging CiscoLoggingFeatureTemplate#disk_logging}
  */
  readonly diskLogging?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#disk_logging_variable CiscoLoggingFeatureTemplate#disk_logging_variable}
  */
  readonly diskLoggingVariable?: string;
  /**
  * Enable logging to remote server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#ipv4_servers CiscoLoggingFeatureTemplate#ipv4_servers}
  */
  readonly ipv4Servers?: CiscoLoggingFeatureTemplateIpv4Servers[] | cdktf.IResolvable;
  /**
  * Enable logging to remote IPv6 server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#ipv6_servers CiscoLoggingFeatureTemplate#ipv6_servers}
  */
  readonly ipv6Servers?: CiscoLoggingFeatureTemplateIpv6Servers[] | cdktf.IResolvable;
  /**
  * Set number of syslog files to create before discarding oldest files
  *   - Range: `1`-`10`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#log_rotations CiscoLoggingFeatureTemplate#log_rotations}
  */
  readonly logRotations?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#log_rotations_variable CiscoLoggingFeatureTemplate#log_rotations_variable}
  */
  readonly logRotationsVariable?: string;
  /**
  * Set maximum size of file before it is rotated
  *   - Range: `1`-`20`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#max_size CiscoLoggingFeatureTemplate#max_size}
  */
  readonly maxSize?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#max_size_variable CiscoLoggingFeatureTemplate#max_size_variable}
  */
  readonly maxSizeVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#name CiscoLoggingFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Configure a TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#tls_profiles CiscoLoggingFeatureTemplate#tls_profiles}
  */
  readonly tlsProfiles?: CiscoLoggingFeatureTemplateTlsProfiles[] | cdktf.IResolvable;
}
export interface CiscoLoggingFeatureTemplateIpv4Servers {
  /**
  * Define custom profile
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#custom_profile CiscoLoggingFeatureTemplate#custom_profile}
  */
  readonly customProfile?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#custom_profile_variable CiscoLoggingFeatureTemplate#custom_profile_variable}
  */
  readonly customProfileVariable?: string;
  /**
  * Enable TLS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#enable_tls CiscoLoggingFeatureTemplate#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#enable_tls_variable CiscoLoggingFeatureTemplate#enable_tls_variable}
  */
  readonly enableTlsVariable?: string;
  /**
  * Set hostname or IPv4 address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#hostname_ip CiscoLoggingFeatureTemplate#hostname_ip}
  */
  readonly hostnameIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#hostname_ip_variable CiscoLoggingFeatureTemplate#hostname_ip_variable}
  */
  readonly hostnameIpVariable?: string;
  /**
  * Set logging level for messages logged to server
  *   - Choices: `information`, `debugging`, `notice`, `warn`, `error`, `critical`, `alert`, `emergency`
  *   - Default value: `information`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#logging_level CiscoLoggingFeatureTemplate#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#logging_level_variable CiscoLoggingFeatureTemplate#logging_level_variable}
  */
  readonly loggingLevelVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#optional CiscoLoggingFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure a TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#profile CiscoLoggingFeatureTemplate#profile}
  */
  readonly profile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#profile_variable CiscoLoggingFeatureTemplate#profile_variable}
  */
  readonly profileVariable?: string;
  /**
  * Set interface to use to reach syslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#source_interface CiscoLoggingFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#source_interface_variable CiscoLoggingFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set VPN in which syslog server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#vpn_id CiscoLoggingFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#vpn_id_variable CiscoLoggingFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoLoggingFeatureTemplateIpv4ServersToTerraform(struct?: CiscoLoggingFeatureTemplateIpv4Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_profile: cdktf.booleanToTerraform(struct!.customProfile),
    custom_profile_variable: cdktf.stringToTerraform(struct!.customProfileVariable),
    enable_tls: cdktf.booleanToTerraform(struct!.enableTls),
    enable_tls_variable: cdktf.stringToTerraform(struct!.enableTlsVariable),
    hostname_ip: cdktf.stringToTerraform(struct!.hostnameIp),
    hostname_ip_variable: cdktf.stringToTerraform(struct!.hostnameIpVariable),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    logging_level_variable: cdktf.stringToTerraform(struct!.loggingLevelVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    profile: cdktf.stringToTerraform(struct!.profile),
    profile_variable: cdktf.stringToTerraform(struct!.profileVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoLoggingFeatureTemplateIpv4ServersToHclTerraform(struct?: CiscoLoggingFeatureTemplateIpv4Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_profile: {
      value: cdktf.booleanToHclTerraform(struct!.customProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.customProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls: {
      value: cdktf.booleanToHclTerraform(struct!.enableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tls_variable: {
      value: cdktf.stringToHclTerraform(struct!.enableTlsVariable),
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
    logging_level: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_level_variable: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevelVariable),
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
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.profileVariable),
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

export class CiscoLoggingFeatureTemplateIpv4ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoLoggingFeatureTemplateIpv4Servers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProfile = this._customProfile;
    }
    if (this._customProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProfileVariable = this._customProfileVariable;
    }
    if (this._enableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls = this._enableTls;
    }
    if (this._enableTlsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsVariable = this._enableTlsVariable;
    }
    if (this._hostnameIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIp = this._hostnameIp;
    }
    if (this._hostnameIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIpVariable = this._hostnameIpVariable;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._loggingLevelVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevelVariable = this._loggingLevelVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._profileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileVariable = this._profileVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
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

  public set internalValue(value: CiscoLoggingFeatureTemplateIpv4Servers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customProfile = undefined;
      this._customProfileVariable = undefined;
      this._enableTls = undefined;
      this._enableTlsVariable = undefined;
      this._hostnameIp = undefined;
      this._hostnameIpVariable = undefined;
      this._loggingLevel = undefined;
      this._loggingLevelVariable = undefined;
      this._optional = undefined;
      this._profile = undefined;
      this._profileVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
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
      this._customProfile = value.customProfile;
      this._customProfileVariable = value.customProfileVariable;
      this._enableTls = value.enableTls;
      this._enableTlsVariable = value.enableTlsVariable;
      this._hostnameIp = value.hostnameIp;
      this._hostnameIpVariable = value.hostnameIpVariable;
      this._loggingLevel = value.loggingLevel;
      this._loggingLevelVariable = value.loggingLevelVariable;
      this._optional = value.optional;
      this._profile = value.profile;
      this._profileVariable = value.profileVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // custom_profile - computed: false, optional: true, required: false
  private _customProfile?: boolean | cdktf.IResolvable; 
  public get customProfile() {
    return this.getBooleanAttribute('custom_profile');
  }
  public set customProfile(value: boolean | cdktf.IResolvable) {
    this._customProfile = value;
  }
  public resetCustomProfile() {
    this._customProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileInput() {
    return this._customProfile;
  }

  // custom_profile_variable - computed: false, optional: true, required: false
  private _customProfileVariable?: string; 
  public get customProfileVariable() {
    return this.getStringAttribute('custom_profile_variable');
  }
  public set customProfileVariable(value: string) {
    this._customProfileVariable = value;
  }
  public resetCustomProfileVariable() {
    this._customProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileVariableInput() {
    return this._customProfileVariable;
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // enable_tls_variable - computed: false, optional: true, required: false
  private _enableTlsVariable?: string; 
  public get enableTlsVariable() {
    return this.getStringAttribute('enable_tls_variable');
  }
  public set enableTlsVariable(value: string) {
    this._enableTlsVariable = value;
  }
  public resetEnableTlsVariable() {
    this._enableTlsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsVariableInput() {
    return this._enableTlsVariable;
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

  // logging_level - computed: false, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // logging_level_variable - computed: false, optional: true, required: false
  private _loggingLevelVariable?: string; 
  public get loggingLevelVariable() {
    return this.getStringAttribute('logging_level_variable');
  }
  public set loggingLevelVariable(value: string) {
    this._loggingLevelVariable = value;
  }
  public resetLoggingLevelVariable() {
    this._loggingLevelVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelVariableInput() {
    return this._loggingLevelVariable;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // profile_variable - computed: false, optional: true, required: false
  private _profileVariable?: string; 
  public get profileVariable() {
    return this.getStringAttribute('profile_variable');
  }
  public set profileVariable(value: string) {
    this._profileVariable = value;
  }
  public resetProfileVariable() {
    this._profileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileVariableInput() {
    return this._profileVariable;
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

export class CiscoLoggingFeatureTemplateIpv4ServersList extends cdktf.ComplexList {
  public internalValue? : CiscoLoggingFeatureTemplateIpv4Servers[] | cdktf.IResolvable

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
  public get(index: number): CiscoLoggingFeatureTemplateIpv4ServersOutputReference {
    return new CiscoLoggingFeatureTemplateIpv4ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoLoggingFeatureTemplateIpv6Servers {
  /**
  * Define custom profile
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#custom_profile CiscoLoggingFeatureTemplate#custom_profile}
  */
  readonly customProfile?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#custom_profile_variable CiscoLoggingFeatureTemplate#custom_profile_variable}
  */
  readonly customProfileVariable?: string;
  /**
  * Enable TLS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#enable_tls CiscoLoggingFeatureTemplate#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#enable_tls_variable CiscoLoggingFeatureTemplate#enable_tls_variable}
  */
  readonly enableTlsVariable?: string;
  /**
  * Set IPv6 hostname or IPv6 address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#hostname_ip CiscoLoggingFeatureTemplate#hostname_ip}
  */
  readonly hostnameIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#hostname_ip_variable CiscoLoggingFeatureTemplate#hostname_ip_variable}
  */
  readonly hostnameIpVariable?: string;
  /**
  * Set logging level for messages logged to server
  *   - Choices: `information`, `debugging`, `notification`, `warn`, `error`, `critical`, `alert`, `emergency`
  *   - Default value: `information`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#logging_level CiscoLoggingFeatureTemplate#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#logging_level_variable CiscoLoggingFeatureTemplate#logging_level_variable}
  */
  readonly loggingLevelVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#optional CiscoLoggingFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure a TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#profile CiscoLoggingFeatureTemplate#profile}
  */
  readonly profile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#profile_variable CiscoLoggingFeatureTemplate#profile_variable}
  */
  readonly profileVariable?: string;
  /**
  * Set interface to use to reach syslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#source_interface CiscoLoggingFeatureTemplate#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#source_interface_variable CiscoLoggingFeatureTemplate#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Set VPN in which syslog server is located
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#vpn_id CiscoLoggingFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#vpn_id_variable CiscoLoggingFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoLoggingFeatureTemplateIpv6ServersToTerraform(struct?: CiscoLoggingFeatureTemplateIpv6Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_profile: cdktf.booleanToTerraform(struct!.customProfile),
    custom_profile_variable: cdktf.stringToTerraform(struct!.customProfileVariable),
    enable_tls: cdktf.booleanToTerraform(struct!.enableTls),
    enable_tls_variable: cdktf.stringToTerraform(struct!.enableTlsVariable),
    hostname_ip: cdktf.stringToTerraform(struct!.hostnameIp),
    hostname_ip_variable: cdktf.stringToTerraform(struct!.hostnameIpVariable),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    logging_level_variable: cdktf.stringToTerraform(struct!.loggingLevelVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    profile: cdktf.stringToTerraform(struct!.profile),
    profile_variable: cdktf.stringToTerraform(struct!.profileVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoLoggingFeatureTemplateIpv6ServersToHclTerraform(struct?: CiscoLoggingFeatureTemplateIpv6Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_profile: {
      value: cdktf.booleanToHclTerraform(struct!.customProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.customProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_tls: {
      value: cdktf.booleanToHclTerraform(struct!.enableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tls_variable: {
      value: cdktf.stringToHclTerraform(struct!.enableTlsVariable),
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
    logging_level: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_level_variable: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevelVariable),
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
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.profileVariable),
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

export class CiscoLoggingFeatureTemplateIpv6ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoLoggingFeatureTemplateIpv6Servers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProfile = this._customProfile;
    }
    if (this._customProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProfileVariable = this._customProfileVariable;
    }
    if (this._enableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls = this._enableTls;
    }
    if (this._enableTlsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsVariable = this._enableTlsVariable;
    }
    if (this._hostnameIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIp = this._hostnameIp;
    }
    if (this._hostnameIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIpVariable = this._hostnameIpVariable;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._loggingLevelVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevelVariable = this._loggingLevelVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._profileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileVariable = this._profileVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
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

  public set internalValue(value: CiscoLoggingFeatureTemplateIpv6Servers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customProfile = undefined;
      this._customProfileVariable = undefined;
      this._enableTls = undefined;
      this._enableTlsVariable = undefined;
      this._hostnameIp = undefined;
      this._hostnameIpVariable = undefined;
      this._loggingLevel = undefined;
      this._loggingLevelVariable = undefined;
      this._optional = undefined;
      this._profile = undefined;
      this._profileVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
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
      this._customProfile = value.customProfile;
      this._customProfileVariable = value.customProfileVariable;
      this._enableTls = value.enableTls;
      this._enableTlsVariable = value.enableTlsVariable;
      this._hostnameIp = value.hostnameIp;
      this._hostnameIpVariable = value.hostnameIpVariable;
      this._loggingLevel = value.loggingLevel;
      this._loggingLevelVariable = value.loggingLevelVariable;
      this._optional = value.optional;
      this._profile = value.profile;
      this._profileVariable = value.profileVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
  }

  // custom_profile - computed: false, optional: true, required: false
  private _customProfile?: boolean | cdktf.IResolvable; 
  public get customProfile() {
    return this.getBooleanAttribute('custom_profile');
  }
  public set customProfile(value: boolean | cdktf.IResolvable) {
    this._customProfile = value;
  }
  public resetCustomProfile() {
    this._customProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileInput() {
    return this._customProfile;
  }

  // custom_profile_variable - computed: false, optional: true, required: false
  private _customProfileVariable?: string; 
  public get customProfileVariable() {
    return this.getStringAttribute('custom_profile_variable');
  }
  public set customProfileVariable(value: string) {
    this._customProfileVariable = value;
  }
  public resetCustomProfileVariable() {
    this._customProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileVariableInput() {
    return this._customProfileVariable;
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // enable_tls_variable - computed: false, optional: true, required: false
  private _enableTlsVariable?: string; 
  public get enableTlsVariable() {
    return this.getStringAttribute('enable_tls_variable');
  }
  public set enableTlsVariable(value: string) {
    this._enableTlsVariable = value;
  }
  public resetEnableTlsVariable() {
    this._enableTlsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsVariableInput() {
    return this._enableTlsVariable;
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

  // logging_level - computed: false, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // logging_level_variable - computed: false, optional: true, required: false
  private _loggingLevelVariable?: string; 
  public get loggingLevelVariable() {
    return this.getStringAttribute('logging_level_variable');
  }
  public set loggingLevelVariable(value: string) {
    this._loggingLevelVariable = value;
  }
  public resetLoggingLevelVariable() {
    this._loggingLevelVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelVariableInput() {
    return this._loggingLevelVariable;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // profile_variable - computed: false, optional: true, required: false
  private _profileVariable?: string; 
  public get profileVariable() {
    return this.getStringAttribute('profile_variable');
  }
  public set profileVariable(value: string) {
    this._profileVariable = value;
  }
  public resetProfileVariable() {
    this._profileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileVariableInput() {
    return this._profileVariable;
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

export class CiscoLoggingFeatureTemplateIpv6ServersList extends cdktf.ComplexList {
  public internalValue? : CiscoLoggingFeatureTemplateIpv6Servers[] | cdktf.IResolvable

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
  public get(index: number): CiscoLoggingFeatureTemplateIpv6ServersOutputReference {
    return new CiscoLoggingFeatureTemplateIpv6ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoLoggingFeatureTemplateTlsProfiles {
  /**
  * Authentication Type
  *   - Choices: `Server`, `Mutual`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#authentication_type CiscoLoggingFeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Syslog secure server ciphersuites. Possible values: `aes-128-cbc-sha`, `aes-256-cbc-sha`, `dhe-aes-cbc-sha2`, `dhe-aes-gcm-sha2`, `ecdhe-ecdsa-aes-gcm-sha2`, `ecdhe-rsa-aes-cbc-sha2`, `ecdhe-rsa-aes-gcm-sha2`, `rsa-aes-cbc-sha2`, `rsa-aes-gcm-sha2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#ciphersuite_list CiscoLoggingFeatureTemplate#ciphersuite_list}
  */
  readonly ciphersuiteList?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#ciphersuite_list_variable CiscoLoggingFeatureTemplate#ciphersuite_list_variable}
  */
  readonly ciphersuiteListVariable?: string;
  /**
  * Specify the name of the TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#name CiscoLoggingFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#name_variable CiscoLoggingFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#optional CiscoLoggingFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * TLS Version
  *   - Choices: `TLSv1.1`, `TLSv1.2`
  *   - Default value: `TLSv1.1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#version CiscoLoggingFeatureTemplate#version}
  */
  readonly version?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#version_variable CiscoLoggingFeatureTemplate#version_variable}
  */
  readonly versionVariable?: string;
}

export function ciscoLoggingFeatureTemplateTlsProfilesToTerraform(struct?: CiscoLoggingFeatureTemplateTlsProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    ciphersuite_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphersuiteList),
    ciphersuite_list_variable: cdktf.stringToTerraform(struct!.ciphersuiteListVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    version: cdktf.stringToTerraform(struct!.version),
    version_variable: cdktf.stringToTerraform(struct!.versionVariable),
  }
}


export function ciscoLoggingFeatureTemplateTlsProfilesToHclTerraform(struct?: CiscoLoggingFeatureTemplateTlsProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ciphersuite_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ciphersuiteList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ciphersuite_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.ciphersuiteListVariable),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_variable: {
      value: cdktf.stringToHclTerraform(struct!.versionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoLoggingFeatureTemplateTlsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoLoggingFeatureTemplateTlsProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._ciphersuiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphersuiteList = this._ciphersuiteList;
    }
    if (this._ciphersuiteListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphersuiteListVariable = this._ciphersuiteListVariable;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionVariable = this._versionVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoLoggingFeatureTemplateTlsProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._ciphersuiteList = undefined;
      this._ciphersuiteListVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._version = undefined;
      this._versionVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._ciphersuiteList = value.ciphersuiteList;
      this._ciphersuiteListVariable = value.ciphersuiteListVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
      this._version = value.version;
      this._versionVariable = value.versionVariable;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // ciphersuite_list - computed: false, optional: true, required: false
  private _ciphersuiteList?: string[]; 
  public get ciphersuiteList() {
    return cdktf.Fn.tolist(this.getListAttribute('ciphersuite_list'));
  }
  public set ciphersuiteList(value: string[]) {
    this._ciphersuiteList = value;
  }
  public resetCiphersuiteList() {
    this._ciphersuiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuiteListInput() {
    return this._ciphersuiteList;
  }

  // ciphersuite_list_variable - computed: false, optional: true, required: false
  private _ciphersuiteListVariable?: string; 
  public get ciphersuiteListVariable() {
    return this.getStringAttribute('ciphersuite_list_variable');
  }
  public set ciphersuiteListVariable(value: string) {
    this._ciphersuiteListVariable = value;
  }
  public resetCiphersuiteListVariable() {
    this._ciphersuiteListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuiteListVariableInput() {
    return this._ciphersuiteListVariable;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
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
}

export class CiscoLoggingFeatureTemplateTlsProfilesList extends cdktf.ComplexList {
  public internalValue? : CiscoLoggingFeatureTemplateTlsProfiles[] | cdktf.IResolvable

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
  public get(index: number): CiscoLoggingFeatureTemplateTlsProfilesOutputReference {
    return new CiscoLoggingFeatureTemplateTlsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template sdwan_cisco_logging_feature_template}
*/
export class CiscoLoggingFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_logging_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoLoggingFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoLoggingFeatureTemplate to import
  * @param importFromId The id of the existing CiscoLoggingFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoLoggingFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_logging_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_logging_feature_template sdwan_cisco_logging_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoLoggingFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoLoggingFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_logging_feature_template',
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
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._diskLogging = config.diskLogging;
    this._diskLoggingVariable = config.diskLoggingVariable;
    this._ipv4Servers.internalValue = config.ipv4Servers;
    this._ipv6Servers.internalValue = config.ipv6Servers;
    this._logRotations = config.logRotations;
    this._logRotationsVariable = config.logRotationsVariable;
    this._maxSize = config.maxSize;
    this._maxSizeVariable = config.maxSizeVariable;
    this._name = config.name;
    this._tlsProfiles.internalValue = config.tlsProfiles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disk_logging - computed: false, optional: true, required: false
  private _diskLogging?: boolean | cdktf.IResolvable; 
  public get diskLogging() {
    return this.getBooleanAttribute('disk_logging');
  }
  public set diskLogging(value: boolean | cdktf.IResolvable) {
    this._diskLogging = value;
  }
  public resetDiskLogging() {
    this._diskLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLoggingInput() {
    return this._diskLogging;
  }

  // disk_logging_variable - computed: false, optional: true, required: false
  private _diskLoggingVariable?: string; 
  public get diskLoggingVariable() {
    return this.getStringAttribute('disk_logging_variable');
  }
  public set diskLoggingVariable(value: string) {
    this._diskLoggingVariable = value;
  }
  public resetDiskLoggingVariable() {
    this._diskLoggingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLoggingVariableInput() {
    return this._diskLoggingVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_servers - computed: false, optional: true, required: false
  private _ipv4Servers = new CiscoLoggingFeatureTemplateIpv4ServersList(this, "ipv4_servers", false);
  public get ipv4Servers() {
    return this._ipv4Servers;
  }
  public putIpv4Servers(value: CiscoLoggingFeatureTemplateIpv4Servers[] | cdktf.IResolvable) {
    this._ipv4Servers.internalValue = value;
  }
  public resetIpv4Servers() {
    this._ipv4Servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ServersInput() {
    return this._ipv4Servers.internalValue;
  }

  // ipv6_servers - computed: false, optional: true, required: false
  private _ipv6Servers = new CiscoLoggingFeatureTemplateIpv6ServersList(this, "ipv6_servers", false);
  public get ipv6Servers() {
    return this._ipv6Servers;
  }
  public putIpv6Servers(value: CiscoLoggingFeatureTemplateIpv6Servers[] | cdktf.IResolvable) {
    this._ipv6Servers.internalValue = value;
  }
  public resetIpv6Servers() {
    this._ipv6Servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServersInput() {
    return this._ipv6Servers.internalValue;
  }

  // log_rotations - computed: false, optional: true, required: false
  private _logRotations?: number; 
  public get logRotations() {
    return this.getNumberAttribute('log_rotations');
  }
  public set logRotations(value: number) {
    this._logRotations = value;
  }
  public resetLogRotations() {
    this._logRotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRotationsInput() {
    return this._logRotations;
  }

  // log_rotations_variable - computed: false, optional: true, required: false
  private _logRotationsVariable?: string; 
  public get logRotationsVariable() {
    return this.getStringAttribute('log_rotations_variable');
  }
  public set logRotationsVariable(value: string) {
    this._logRotationsVariable = value;
  }
  public resetLogRotationsVariable() {
    this._logRotationsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRotationsVariableInput() {
    return this._logRotationsVariable;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_variable - computed: false, optional: true, required: false
  private _maxSizeVariable?: string; 
  public get maxSizeVariable() {
    return this.getStringAttribute('max_size_variable');
  }
  public set maxSizeVariable(value: string) {
    this._maxSizeVariable = value;
  }
  public resetMaxSizeVariable() {
    this._maxSizeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeVariableInput() {
    return this._maxSizeVariable;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tls_profiles - computed: false, optional: true, required: false
  private _tlsProfiles = new CiscoLoggingFeatureTemplateTlsProfilesList(this, "tls_profiles", false);
  public get tlsProfiles() {
    return this._tlsProfiles;
  }
  public putTlsProfiles(value: CiscoLoggingFeatureTemplateTlsProfiles[] | cdktf.IResolvable) {
    this._tlsProfiles.internalValue = value;
  }
  public resetTlsProfiles() {
    this._tlsProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProfilesInput() {
    return this._tlsProfiles.internalValue;
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
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      disk_logging: cdktf.booleanToTerraform(this._diskLogging),
      disk_logging_variable: cdktf.stringToTerraform(this._diskLoggingVariable),
      ipv4_servers: cdktf.listMapper(ciscoLoggingFeatureTemplateIpv4ServersToTerraform, false)(this._ipv4Servers.internalValue),
      ipv6_servers: cdktf.listMapper(ciscoLoggingFeatureTemplateIpv6ServersToTerraform, false)(this._ipv6Servers.internalValue),
      log_rotations: cdktf.numberToTerraform(this._logRotations),
      log_rotations_variable: cdktf.stringToTerraform(this._logRotationsVariable),
      max_size: cdktf.numberToTerraform(this._maxSize),
      max_size_variable: cdktf.stringToTerraform(this._maxSizeVariable),
      name: cdktf.stringToTerraform(this._name),
      tls_profiles: cdktf.listMapper(ciscoLoggingFeatureTemplateTlsProfilesToTerraform, false)(this._tlsProfiles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      disk_logging: {
        value: cdktf.booleanToHclTerraform(this._diskLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_logging_variable: {
        value: cdktf.stringToHclTerraform(this._diskLoggingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_servers: {
        value: cdktf.listMapperHcl(ciscoLoggingFeatureTemplateIpv4ServersToHclTerraform, false)(this._ipv4Servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoLoggingFeatureTemplateIpv4ServersList",
      },
      ipv6_servers: {
        value: cdktf.listMapperHcl(ciscoLoggingFeatureTemplateIpv6ServersToHclTerraform, false)(this._ipv6Servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoLoggingFeatureTemplateIpv6ServersList",
      },
      log_rotations: {
        value: cdktf.numberToHclTerraform(this._logRotations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_rotations_variable: {
        value: cdktf.stringToHclTerraform(this._logRotationsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size_variable: {
        value: cdktf.stringToHclTerraform(this._maxSizeVariable),
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
      tls_profiles: {
        value: cdktf.listMapperHcl(ciscoLoggingFeatureTemplateTlsProfilesToHclTerraform, false)(this._tlsProfiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoLoggingFeatureTemplateTlsProfilesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
