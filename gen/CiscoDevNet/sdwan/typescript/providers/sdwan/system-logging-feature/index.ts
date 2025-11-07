// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLoggingFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#description SystemLoggingFeature#description}
  */
  readonly description?: string;
  /**
  * Enable logging to local disk
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#disk_enable SystemLoggingFeature#disk_enable}
  */
  readonly diskEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#disk_enable_variable SystemLoggingFeature#disk_enable_variable}
  */
  readonly diskEnableVariable?: string;
  /**
  * Set number of syslog files to create before discarding oldest files
  *   - Range: `1`-`10`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#disk_file_rotate SystemLoggingFeature#disk_file_rotate}
  */
  readonly diskFileRotate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#disk_file_rotate_variable SystemLoggingFeature#disk_file_rotate_variable}
  */
  readonly diskFileRotateVariable?: string;
  /**
  * Set maximum size of file before it is rotated
  *   - Range: `1`-`20`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#disk_file_size SystemLoggingFeature#disk_file_size}
  */
  readonly diskFileSize?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#disk_file_size_variable SystemLoggingFeature#disk_file_size_variable}
  */
  readonly diskFileSizeVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#feature_profile_id SystemLoggingFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Enable logging to remote server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#ipv4_servers SystemLoggingFeature#ipv4_servers}
  */
  readonly ipv4Servers?: SystemLoggingFeatureIpv4Servers[] | cdktf.IResolvable;
  /**
  * Enable logging to remote ipv6 server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#ipv6_servers SystemLoggingFeature#ipv6_servers}
  */
  readonly ipv6Servers?: SystemLoggingFeatureIpv6Servers[] | cdktf.IResolvable;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#name SystemLoggingFeature#name}
  */
  readonly name: string;
  /**
  * Configure a TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_profiles SystemLoggingFeature#tls_profiles}
  */
  readonly tlsProfiles?: SystemLoggingFeatureTlsProfiles[] | cdktf.IResolvable;
}
export interface SystemLoggingFeatureIpv4Servers {
  /**
  * Set hostname or IPv4 address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#hostname_ip SystemLoggingFeature#hostname_ip}
  */
  readonly hostnameIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#hostname_ip_variable SystemLoggingFeature#hostname_ip_variable}
  */
  readonly hostnameIpVariable?: string;
  /**
  * Set logging level for messages logged to server
  *   - Choices: `informational`, `debugging`, `notice`, `warn`, `error`, `critical`, `alert`, `emergency`
  *   - Default value: `informational`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#priority SystemLoggingFeature#priority}
  */
  readonly priority?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#priority_variable SystemLoggingFeature#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Set interface to use to reach syslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#source_interface SystemLoggingFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#source_interface_variable SystemLoggingFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Enable TLS Profile
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_enable SystemLoggingFeature#tls_enable}
  */
  readonly tlsEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_enable_variable SystemLoggingFeature#tls_enable_variable}
  */
  readonly tlsEnableVariable?: string;
  /**
  * Define custom profile
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_custom_profile SystemLoggingFeature#tls_properties_custom_profile}
  */
  readonly tlsPropertiesCustomProfile?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_custom_profile_variable SystemLoggingFeature#tls_properties_custom_profile_variable}
  */
  readonly tlsPropertiesCustomProfileVariable?: string;
  /**
  * Configure a TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_profile SystemLoggingFeature#tls_properties_profile}
  */
  readonly tlsPropertiesProfile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_profile_variable SystemLoggingFeature#tls_properties_profile_variable}
  */
  readonly tlsPropertiesProfileVariable?: string;
  /**
  * Set hostname or IPv4 address of server
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#vpn SystemLoggingFeature#vpn}
  */
  readonly vpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#vpn_variable SystemLoggingFeature#vpn_variable}
  */
  readonly vpnVariable?: string;
}

export function systemLoggingFeatureIpv4ServersToTerraform(struct?: SystemLoggingFeatureIpv4Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname_ip: cdktf.stringToTerraform(struct!.hostnameIp),
    hostname_ip_variable: cdktf.stringToTerraform(struct!.hostnameIpVariable),
    priority: cdktf.stringToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    tls_enable: cdktf.booleanToTerraform(struct!.tlsEnable),
    tls_enable_variable: cdktf.stringToTerraform(struct!.tlsEnableVariable),
    tls_properties_custom_profile: cdktf.booleanToTerraform(struct!.tlsPropertiesCustomProfile),
    tls_properties_custom_profile_variable: cdktf.stringToTerraform(struct!.tlsPropertiesCustomProfileVariable),
    tls_properties_profile: cdktf.stringToTerraform(struct!.tlsPropertiesProfile),
    tls_properties_profile_variable: cdktf.stringToTerraform(struct!.tlsPropertiesProfileVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
    vpn_variable: cdktf.stringToTerraform(struct!.vpnVariable),
  }
}


export function systemLoggingFeatureIpv4ServersToHclTerraform(struct?: SystemLoggingFeatureIpv4Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
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
    tls_enable: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_enable_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlsEnableVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_properties_custom_profile: {
      value: cdktf.booleanToHclTerraform(struct!.tlsPropertiesCustomProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_properties_custom_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlsPropertiesCustomProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_properties_profile: {
      value: cdktf.stringToHclTerraform(struct!.tlsPropertiesProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_properties_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlsPropertiesProfileVariable),
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

export class SystemLoggingFeatureIpv4ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLoggingFeatureIpv4Servers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnameIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIp = this._hostnameIp;
    }
    if (this._hostnameIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIpVariable = this._hostnameIpVariable;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._tlsEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnable = this._tlsEnable;
    }
    if (this._tlsEnableVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnableVariable = this._tlsEnableVariable;
    }
    if (this._tlsPropertiesCustomProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesCustomProfile = this._tlsPropertiesCustomProfile;
    }
    if (this._tlsPropertiesCustomProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesCustomProfileVariable = this._tlsPropertiesCustomProfileVariable;
    }
    if (this._tlsPropertiesProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesProfile = this._tlsPropertiesProfile;
    }
    if (this._tlsPropertiesProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesProfileVariable = this._tlsPropertiesProfileVariable;
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

  public set internalValue(value: SystemLoggingFeatureIpv4Servers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnameIp = undefined;
      this._hostnameIpVariable = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._tlsEnable = undefined;
      this._tlsEnableVariable = undefined;
      this._tlsPropertiesCustomProfile = undefined;
      this._tlsPropertiesCustomProfileVariable = undefined;
      this._tlsPropertiesProfile = undefined;
      this._tlsPropertiesProfileVariable = undefined;
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
      this._hostnameIp = value.hostnameIp;
      this._hostnameIpVariable = value.hostnameIpVariable;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._tlsEnable = value.tlsEnable;
      this._tlsEnableVariable = value.tlsEnableVariable;
      this._tlsPropertiesCustomProfile = value.tlsPropertiesCustomProfile;
      this._tlsPropertiesCustomProfileVariable = value.tlsPropertiesCustomProfileVariable;
      this._tlsPropertiesProfile = value.tlsPropertiesProfile;
      this._tlsPropertiesProfileVariable = value.tlsPropertiesProfileVariable;
      this._vpn = value.vpn;
      this._vpnVariable = value.vpnVariable;
    }
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
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

  // tls_enable - computed: false, optional: true, required: false
  private _tlsEnable?: boolean | cdktf.IResolvable; 
  public get tlsEnable() {
    return this.getBooleanAttribute('tls_enable');
  }
  public set tlsEnable(value: boolean | cdktf.IResolvable) {
    this._tlsEnable = value;
  }
  public resetTlsEnable() {
    this._tlsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnableInput() {
    return this._tlsEnable;
  }

  // tls_enable_variable - computed: false, optional: true, required: false
  private _tlsEnableVariable?: string; 
  public get tlsEnableVariable() {
    return this.getStringAttribute('tls_enable_variable');
  }
  public set tlsEnableVariable(value: string) {
    this._tlsEnableVariable = value;
  }
  public resetTlsEnableVariable() {
    this._tlsEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnableVariableInput() {
    return this._tlsEnableVariable;
  }

  // tls_properties_custom_profile - computed: false, optional: true, required: false
  private _tlsPropertiesCustomProfile?: boolean | cdktf.IResolvable; 
  public get tlsPropertiesCustomProfile() {
    return this.getBooleanAttribute('tls_properties_custom_profile');
  }
  public set tlsPropertiesCustomProfile(value: boolean | cdktf.IResolvable) {
    this._tlsPropertiesCustomProfile = value;
  }
  public resetTlsPropertiesCustomProfile() {
    this._tlsPropertiesCustomProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesCustomProfileInput() {
    return this._tlsPropertiesCustomProfile;
  }

  // tls_properties_custom_profile_variable - computed: false, optional: true, required: false
  private _tlsPropertiesCustomProfileVariable?: string; 
  public get tlsPropertiesCustomProfileVariable() {
    return this.getStringAttribute('tls_properties_custom_profile_variable');
  }
  public set tlsPropertiesCustomProfileVariable(value: string) {
    this._tlsPropertiesCustomProfileVariable = value;
  }
  public resetTlsPropertiesCustomProfileVariable() {
    this._tlsPropertiesCustomProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesCustomProfileVariableInput() {
    return this._tlsPropertiesCustomProfileVariable;
  }

  // tls_properties_profile - computed: false, optional: true, required: false
  private _tlsPropertiesProfile?: string; 
  public get tlsPropertiesProfile() {
    return this.getStringAttribute('tls_properties_profile');
  }
  public set tlsPropertiesProfile(value: string) {
    this._tlsPropertiesProfile = value;
  }
  public resetTlsPropertiesProfile() {
    this._tlsPropertiesProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesProfileInput() {
    return this._tlsPropertiesProfile;
  }

  // tls_properties_profile_variable - computed: false, optional: true, required: false
  private _tlsPropertiesProfileVariable?: string; 
  public get tlsPropertiesProfileVariable() {
    return this.getStringAttribute('tls_properties_profile_variable');
  }
  public set tlsPropertiesProfileVariable(value: string) {
    this._tlsPropertiesProfileVariable = value;
  }
  public resetTlsPropertiesProfileVariable() {
    this._tlsPropertiesProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesProfileVariableInput() {
    return this._tlsPropertiesProfileVariable;
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

export class SystemLoggingFeatureIpv4ServersList extends cdktf.ComplexList {
  public internalValue? : SystemLoggingFeatureIpv4Servers[] | cdktf.IResolvable

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
  public get(index: number): SystemLoggingFeatureIpv4ServersOutputReference {
    return new SystemLoggingFeatureIpv4ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLoggingFeatureIpv6Servers {
  /**
  * Set IPv6 hostname or IPv6 address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#hostname_ip SystemLoggingFeature#hostname_ip}
  */
  readonly hostnameIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#hostname_ip_variable SystemLoggingFeature#hostname_ip_variable}
  */
  readonly hostnameIpVariable?: string;
  /**
  * Set logging level for messages logged to server
  *   - Choices: `informational`, `debugging`, `notice`, `warn`, `error`, `critical`, `alert`, `emergency`
  *   - Default value: `informational`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#priority SystemLoggingFeature#priority}
  */
  readonly priority?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#priority_variable SystemLoggingFeature#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Set interface to use to reach syslog server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#source_interface SystemLoggingFeature#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#source_interface_variable SystemLoggingFeature#source_interface_variable}
  */
  readonly sourceInterfaceVariable?: string;
  /**
  * Enable TLS Profile
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_enable SystemLoggingFeature#tls_enable}
  */
  readonly tlsEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_enable_variable SystemLoggingFeature#tls_enable_variable}
  */
  readonly tlsEnableVariable?: string;
  /**
  * Define custom profile
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_custom_profile SystemLoggingFeature#tls_properties_custom_profile}
  */
  readonly tlsPropertiesCustomProfile?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_custom_profile_variable SystemLoggingFeature#tls_properties_custom_profile_variable}
  */
  readonly tlsPropertiesCustomProfileVariable?: string;
  /**
  * Configure a TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_profile SystemLoggingFeature#tls_properties_profile}
  */
  readonly tlsPropertiesProfile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_properties_profile_variable SystemLoggingFeature#tls_properties_profile_variable}
  */
  readonly tlsPropertiesProfileVariable?: string;
  /**
  * Set hostname or IPv4 address of server
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#vpn SystemLoggingFeature#vpn}
  */
  readonly vpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#vpn_variable SystemLoggingFeature#vpn_variable}
  */
  readonly vpnVariable?: string;
}

export function systemLoggingFeatureIpv6ServersToTerraform(struct?: SystemLoggingFeatureIpv6Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname_ip: cdktf.stringToTerraform(struct!.hostnameIp),
    hostname_ip_variable: cdktf.stringToTerraform(struct!.hostnameIpVariable),
    priority: cdktf.stringToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    source_interface_variable: cdktf.stringToTerraform(struct!.sourceInterfaceVariable),
    tls_enable: cdktf.booleanToTerraform(struct!.tlsEnable),
    tls_enable_variable: cdktf.stringToTerraform(struct!.tlsEnableVariable),
    tls_properties_custom_profile: cdktf.booleanToTerraform(struct!.tlsPropertiesCustomProfile),
    tls_properties_custom_profile_variable: cdktf.stringToTerraform(struct!.tlsPropertiesCustomProfileVariable),
    tls_properties_profile: cdktf.stringToTerraform(struct!.tlsPropertiesProfile),
    tls_properties_profile_variable: cdktf.stringToTerraform(struct!.tlsPropertiesProfileVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
    vpn_variable: cdktf.stringToTerraform(struct!.vpnVariable),
  }
}


export function systemLoggingFeatureIpv6ServersToHclTerraform(struct?: SystemLoggingFeatureIpv6Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
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
    tls_enable: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_enable_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlsEnableVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_properties_custom_profile: {
      value: cdktf.booleanToHclTerraform(struct!.tlsPropertiesCustomProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_properties_custom_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlsPropertiesCustomProfileVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_properties_profile: {
      value: cdktf.stringToHclTerraform(struct!.tlsPropertiesProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_properties_profile_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlsPropertiesProfileVariable),
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

export class SystemLoggingFeatureIpv6ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLoggingFeatureIpv6Servers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnameIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIp = this._hostnameIp;
    }
    if (this._hostnameIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameIpVariable = this._hostnameIpVariable;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._sourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterfaceVariable = this._sourceInterfaceVariable;
    }
    if (this._tlsEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnable = this._tlsEnable;
    }
    if (this._tlsEnableVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnableVariable = this._tlsEnableVariable;
    }
    if (this._tlsPropertiesCustomProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesCustomProfile = this._tlsPropertiesCustomProfile;
    }
    if (this._tlsPropertiesCustomProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesCustomProfileVariable = this._tlsPropertiesCustomProfileVariable;
    }
    if (this._tlsPropertiesProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesProfile = this._tlsPropertiesProfile;
    }
    if (this._tlsPropertiesProfileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPropertiesProfileVariable = this._tlsPropertiesProfileVariable;
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

  public set internalValue(value: SystemLoggingFeatureIpv6Servers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnameIp = undefined;
      this._hostnameIpVariable = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._sourceInterface = undefined;
      this._sourceInterfaceVariable = undefined;
      this._tlsEnable = undefined;
      this._tlsEnableVariable = undefined;
      this._tlsPropertiesCustomProfile = undefined;
      this._tlsPropertiesCustomProfileVariable = undefined;
      this._tlsPropertiesProfile = undefined;
      this._tlsPropertiesProfileVariable = undefined;
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
      this._hostnameIp = value.hostnameIp;
      this._hostnameIpVariable = value.hostnameIpVariable;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._sourceInterface = value.sourceInterface;
      this._sourceInterfaceVariable = value.sourceInterfaceVariable;
      this._tlsEnable = value.tlsEnable;
      this._tlsEnableVariable = value.tlsEnableVariable;
      this._tlsPropertiesCustomProfile = value.tlsPropertiesCustomProfile;
      this._tlsPropertiesCustomProfileVariable = value.tlsPropertiesCustomProfileVariable;
      this._tlsPropertiesProfile = value.tlsPropertiesProfile;
      this._tlsPropertiesProfileVariable = value.tlsPropertiesProfileVariable;
      this._vpn = value.vpn;
      this._vpnVariable = value.vpnVariable;
    }
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
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

  // tls_enable - computed: false, optional: true, required: false
  private _tlsEnable?: boolean | cdktf.IResolvable; 
  public get tlsEnable() {
    return this.getBooleanAttribute('tls_enable');
  }
  public set tlsEnable(value: boolean | cdktf.IResolvable) {
    this._tlsEnable = value;
  }
  public resetTlsEnable() {
    this._tlsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnableInput() {
    return this._tlsEnable;
  }

  // tls_enable_variable - computed: false, optional: true, required: false
  private _tlsEnableVariable?: string; 
  public get tlsEnableVariable() {
    return this.getStringAttribute('tls_enable_variable');
  }
  public set tlsEnableVariable(value: string) {
    this._tlsEnableVariable = value;
  }
  public resetTlsEnableVariable() {
    this._tlsEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnableVariableInput() {
    return this._tlsEnableVariable;
  }

  // tls_properties_custom_profile - computed: false, optional: true, required: false
  private _tlsPropertiesCustomProfile?: boolean | cdktf.IResolvable; 
  public get tlsPropertiesCustomProfile() {
    return this.getBooleanAttribute('tls_properties_custom_profile');
  }
  public set tlsPropertiesCustomProfile(value: boolean | cdktf.IResolvable) {
    this._tlsPropertiesCustomProfile = value;
  }
  public resetTlsPropertiesCustomProfile() {
    this._tlsPropertiesCustomProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesCustomProfileInput() {
    return this._tlsPropertiesCustomProfile;
  }

  // tls_properties_custom_profile_variable - computed: false, optional: true, required: false
  private _tlsPropertiesCustomProfileVariable?: string; 
  public get tlsPropertiesCustomProfileVariable() {
    return this.getStringAttribute('tls_properties_custom_profile_variable');
  }
  public set tlsPropertiesCustomProfileVariable(value: string) {
    this._tlsPropertiesCustomProfileVariable = value;
  }
  public resetTlsPropertiesCustomProfileVariable() {
    this._tlsPropertiesCustomProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesCustomProfileVariableInput() {
    return this._tlsPropertiesCustomProfileVariable;
  }

  // tls_properties_profile - computed: false, optional: true, required: false
  private _tlsPropertiesProfile?: string; 
  public get tlsPropertiesProfile() {
    return this.getStringAttribute('tls_properties_profile');
  }
  public set tlsPropertiesProfile(value: string) {
    this._tlsPropertiesProfile = value;
  }
  public resetTlsPropertiesProfile() {
    this._tlsPropertiesProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesProfileInput() {
    return this._tlsPropertiesProfile;
  }

  // tls_properties_profile_variable - computed: false, optional: true, required: false
  private _tlsPropertiesProfileVariable?: string; 
  public get tlsPropertiesProfileVariable() {
    return this.getStringAttribute('tls_properties_profile_variable');
  }
  public set tlsPropertiesProfileVariable(value: string) {
    this._tlsPropertiesProfileVariable = value;
  }
  public resetTlsPropertiesProfileVariable() {
    this._tlsPropertiesProfileVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPropertiesProfileVariableInput() {
    return this._tlsPropertiesProfileVariable;
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

export class SystemLoggingFeatureIpv6ServersList extends cdktf.ComplexList {
  public internalValue? : SystemLoggingFeatureIpv6Servers[] | cdktf.IResolvable

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
  public get(index: number): SystemLoggingFeatureIpv6ServersOutputReference {
    return new SystemLoggingFeatureIpv6ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLoggingFeatureTlsProfiles {
  /**
  * Syslog secure server ciphersuites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#cipher_suites SystemLoggingFeature#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#cipher_suites_variable SystemLoggingFeature#cipher_suites_variable}
  */
  readonly cipherSuitesVariable?: string;
  /**
  * Specify the name of the TLS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#profile SystemLoggingFeature#profile}
  */
  readonly profile?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#profile_variable SystemLoggingFeature#profile_variable}
  */
  readonly profileVariable?: string;
  /**
  * TLS Version
  *   - Choices: `TLSv1.1`, `TLSv1.2`
  *   - Default value: `TLSv1.1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_version SystemLoggingFeature#tls_version}
  */
  readonly tlsVersion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#tls_version_variable SystemLoggingFeature#tls_version_variable}
  */
  readonly tlsVersionVariable?: string;
}

export function systemLoggingFeatureTlsProfilesToTerraform(struct?: SystemLoggingFeatureTlsProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    cipher_suites_variable: cdktf.stringToTerraform(struct!.cipherSuitesVariable),
    profile: cdktf.stringToTerraform(struct!.profile),
    profile_variable: cdktf.stringToTerraform(struct!.profileVariable),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
    tls_version_variable: cdktf.stringToTerraform(struct!.tlsVersionVariable),
  }
}


export function systemLoggingFeatureTlsProfilesToHclTerraform(struct?: SystemLoggingFeatureTlsProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cipher_suites_variable: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuitesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_version_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLoggingFeatureTlsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLoggingFeatureTlsProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._cipherSuitesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuitesVariable = this._cipherSuitesVariable;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._profileVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileVariable = this._profileVariable;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    if (this._tlsVersionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersionVariable = this._tlsVersionVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLoggingFeatureTlsProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuites = undefined;
      this._cipherSuitesVariable = undefined;
      this._profile = undefined;
      this._profileVariable = undefined;
      this._tlsVersion = undefined;
      this._tlsVersionVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuites = value.cipherSuites;
      this._cipherSuitesVariable = value.cipherSuitesVariable;
      this._profile = value.profile;
      this._profileVariable = value.profileVariable;
      this._tlsVersion = value.tlsVersion;
      this._tlsVersionVariable = value.tlsVersionVariable;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return cdktf.Fn.tolist(this.getListAttribute('cipher_suites'));
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // cipher_suites_variable - computed: false, optional: true, required: false
  private _cipherSuitesVariable?: string; 
  public get cipherSuitesVariable() {
    return this.getStringAttribute('cipher_suites_variable');
  }
  public set cipherSuitesVariable(value: string) {
    this._cipherSuitesVariable = value;
  }
  public resetCipherSuitesVariable() {
    this._cipherSuitesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesVariableInput() {
    return this._cipherSuitesVariable;
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

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }

  // tls_version_variable - computed: false, optional: true, required: false
  private _tlsVersionVariable?: string; 
  public get tlsVersionVariable() {
    return this.getStringAttribute('tls_version_variable');
  }
  public set tlsVersionVariable(value: string) {
    this._tlsVersionVariable = value;
  }
  public resetTlsVersionVariable() {
    this._tlsVersionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionVariableInput() {
    return this._tlsVersionVariable;
  }
}

export class SystemLoggingFeatureTlsProfilesList extends cdktf.ComplexList {
  public internalValue? : SystemLoggingFeatureTlsProfiles[] | cdktf.IResolvable

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
  public get(index: number): SystemLoggingFeatureTlsProfilesOutputReference {
    return new SystemLoggingFeatureTlsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature sdwan_system_logging_feature}
*/
export class SystemLoggingFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_logging_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLoggingFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLoggingFeature to import
  * @param importFromId The id of the existing SystemLoggingFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLoggingFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_logging_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_logging_feature sdwan_system_logging_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLoggingFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemLoggingFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_logging_feature',
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
    this._description = config.description;
    this._diskEnable = config.diskEnable;
    this._diskEnableVariable = config.diskEnableVariable;
    this._diskFileRotate = config.diskFileRotate;
    this._diskFileRotateVariable = config.diskFileRotateVariable;
    this._diskFileSize = config.diskFileSize;
    this._diskFileSizeVariable = config.diskFileSizeVariable;
    this._featureProfileId = config.featureProfileId;
    this._ipv4Servers.internalValue = config.ipv4Servers;
    this._ipv6Servers.internalValue = config.ipv6Servers;
    this._name = config.name;
    this._tlsProfiles.internalValue = config.tlsProfiles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disk_enable - computed: false, optional: true, required: false
  private _diskEnable?: boolean | cdktf.IResolvable; 
  public get diskEnable() {
    return this.getBooleanAttribute('disk_enable');
  }
  public set diskEnable(value: boolean | cdktf.IResolvable) {
    this._diskEnable = value;
  }
  public resetDiskEnable() {
    this._diskEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEnableInput() {
    return this._diskEnable;
  }

  // disk_enable_variable - computed: false, optional: true, required: false
  private _diskEnableVariable?: string; 
  public get diskEnableVariable() {
    return this.getStringAttribute('disk_enable_variable');
  }
  public set diskEnableVariable(value: string) {
    this._diskEnableVariable = value;
  }
  public resetDiskEnableVariable() {
    this._diskEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEnableVariableInput() {
    return this._diskEnableVariable;
  }

  // disk_file_rotate - computed: false, optional: true, required: false
  private _diskFileRotate?: number; 
  public get diskFileRotate() {
    return this.getNumberAttribute('disk_file_rotate');
  }
  public set diskFileRotate(value: number) {
    this._diskFileRotate = value;
  }
  public resetDiskFileRotate() {
    this._diskFileRotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileRotateInput() {
    return this._diskFileRotate;
  }

  // disk_file_rotate_variable - computed: false, optional: true, required: false
  private _diskFileRotateVariable?: string; 
  public get diskFileRotateVariable() {
    return this.getStringAttribute('disk_file_rotate_variable');
  }
  public set diskFileRotateVariable(value: string) {
    this._diskFileRotateVariable = value;
  }
  public resetDiskFileRotateVariable() {
    this._diskFileRotateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileRotateVariableInput() {
    return this._diskFileRotateVariable;
  }

  // disk_file_size - computed: false, optional: true, required: false
  private _diskFileSize?: number; 
  public get diskFileSize() {
    return this.getNumberAttribute('disk_file_size');
  }
  public set diskFileSize(value: number) {
    this._diskFileSize = value;
  }
  public resetDiskFileSize() {
    this._diskFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileSizeInput() {
    return this._diskFileSize;
  }

  // disk_file_size_variable - computed: false, optional: true, required: false
  private _diskFileSizeVariable?: string; 
  public get diskFileSizeVariable() {
    return this.getStringAttribute('disk_file_size_variable');
  }
  public set diskFileSizeVariable(value: string) {
    this._diskFileSizeVariable = value;
  }
  public resetDiskFileSizeVariable() {
    this._diskFileSizeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileSizeVariableInput() {
    return this._diskFileSizeVariable;
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

  // ipv4_servers - computed: false, optional: true, required: false
  private _ipv4Servers = new SystemLoggingFeatureIpv4ServersList(this, "ipv4_servers", false);
  public get ipv4Servers() {
    return this._ipv4Servers;
  }
  public putIpv4Servers(value: SystemLoggingFeatureIpv4Servers[] | cdktf.IResolvable) {
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
  private _ipv6Servers = new SystemLoggingFeatureIpv6ServersList(this, "ipv6_servers", false);
  public get ipv6Servers() {
    return this._ipv6Servers;
  }
  public putIpv6Servers(value: SystemLoggingFeatureIpv6Servers[] | cdktf.IResolvable) {
    this._ipv6Servers.internalValue = value;
  }
  public resetIpv6Servers() {
    this._ipv6Servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServersInput() {
    return this._ipv6Servers.internalValue;
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

  // tls_profiles - computed: false, optional: true, required: false
  private _tlsProfiles = new SystemLoggingFeatureTlsProfilesList(this, "tls_profiles", false);
  public get tlsProfiles() {
    return this._tlsProfiles;
  }
  public putTlsProfiles(value: SystemLoggingFeatureTlsProfiles[] | cdktf.IResolvable) {
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
      disk_enable: cdktf.booleanToTerraform(this._diskEnable),
      disk_enable_variable: cdktf.stringToTerraform(this._diskEnableVariable),
      disk_file_rotate: cdktf.numberToTerraform(this._diskFileRotate),
      disk_file_rotate_variable: cdktf.stringToTerraform(this._diskFileRotateVariable),
      disk_file_size: cdktf.numberToTerraform(this._diskFileSize),
      disk_file_size_variable: cdktf.stringToTerraform(this._diskFileSizeVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      ipv4_servers: cdktf.listMapper(systemLoggingFeatureIpv4ServersToTerraform, false)(this._ipv4Servers.internalValue),
      ipv6_servers: cdktf.listMapper(systemLoggingFeatureIpv6ServersToTerraform, false)(this._ipv6Servers.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tls_profiles: cdktf.listMapper(systemLoggingFeatureTlsProfilesToTerraform, false)(this._tlsProfiles.internalValue),
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
      disk_enable: {
        value: cdktf.booleanToHclTerraform(this._diskEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_enable_variable: {
        value: cdktf.stringToHclTerraform(this._diskEnableVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_file_rotate: {
        value: cdktf.numberToHclTerraform(this._diskFileRotate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_file_rotate_variable: {
        value: cdktf.stringToHclTerraform(this._diskFileRotateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_file_size: {
        value: cdktf.numberToHclTerraform(this._diskFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_file_size_variable: {
        value: cdktf.stringToHclTerraform(this._diskFileSizeVariable),
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
      ipv4_servers: {
        value: cdktf.listMapperHcl(systemLoggingFeatureIpv4ServersToHclTerraform, false)(this._ipv4Servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLoggingFeatureIpv4ServersList",
      },
      ipv6_servers: {
        value: cdktf.listMapperHcl(systemLoggingFeatureIpv6ServersToHclTerraform, false)(this._ipv6Servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLoggingFeatureIpv6ServersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_profiles: {
        value: cdktf.listMapperHcl(systemLoggingFeatureTlsProfilesToHclTerraform, false)(this._tlsProfiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLoggingFeatureTlsProfilesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
