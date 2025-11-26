// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PreventionPolicyLinuxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use cloud-based machine learning informed by global analysis of executables to detect and prevent known malware for your online hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#cloud_anti_malware PreventionPolicyLinux#cloud_anti_malware}
  */
  readonly cloudAntiMalware?: PreventionPolicyLinuxCloudAntiMalware;
  /**
  * Whether to enable the setting. Block processes matching hashes that you add to IOC Management with the action set to "Block" or "Block, hide detection".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#custom_blocking PreventionPolicyLinux#custom_blocking}
  */
  readonly customBlocking?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor local D-Bus traffic for malicious patterns and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#dbus_visibility PreventionPolicyLinux#dbus_visibility}
  */
  readonly dbusVisibility?: boolean | cdktf.IResolvable;
  /**
  * Description of the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#description PreventionPolicyLinux#description}
  */
  readonly description?: string;
  /**
  * Whether to enable the setting. Block new processes originating from files written in a container. This prevents a container from drifting from its immutable runtime state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#drift_prevention PreventionPolicyLinux#drift_prevention}
  */
  readonly driftPrevention?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor SMTP, IMAP, and POP3 traffic for malicious patterns and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#email_protocol_visibility PreventionPolicyLinux#email_protocol_visibility}
  */
  readonly emailProtocolVisibility?: boolean | cdktf.IResolvable;
  /**
  * Enable the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#enabled PreventionPolicyLinux#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor an extended set of changes to environment variables in order to enhance visibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#enhance_environment_variable_visibility PreventionPolicyLinux#enhance_environment_variable_visibility}
  */
  readonly enhanceEnvironmentVariableVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor activities performed by PHP scripts to provide additional telemetry and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#enhance_php_visibility PreventionPolicyLinux#enhance_php_visibility}
  */
  readonly enhancePhpVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor full CLI commands that include pipes and redirects. This is applicable only for User mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#extended_command_line_visibility PreventionPolicyLinux#extended_command_line_visibility}
  */
  readonly extendedCommandLineVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor filesystem activity for additional telemetry and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#filesystem_visibility PreventionPolicyLinux#filesystem_visibility}
  */
  readonly filesystemVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor unencrypted FTP traffic for malicious patterns and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#ftp_visibility PreventionPolicyLinux#ftp_visibility}
  */
  readonly ftpVisibility?: boolean | cdktf.IResolvable;
  /**
  * Host Group ids to attach to the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#host_groups PreventionPolicyLinux#host_groups}
  */
  readonly hostGroups: string[];
  /**
  * Whether to enable the setting. Allows the sensor to monitor unencrypted HTTP traffic for malicious patterns and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#http_visibility PreventionPolicyLinux#http_visibility}
  */
  readonly httpVisibility?: boolean | cdktf.IResolvable;
  /**
  * IOA Rule Group to attach to the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#ioa_rule_groups PreventionPolicyLinux#ioa_rule_groups}
  */
  readonly ioaRuleGroups: string[];
  /**
  * Whether to enable the setting. When enabled, the sensor will inspect memory-related operations: mmap, mprotect, ptrace and reading/writing remote process memory and produce events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#memory_visibility PreventionPolicyLinux#memory_visibility}
  */
  readonly memoryVisibility?: boolean | cdktf.IResolvable;
  /**
  * Name of the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#name PreventionPolicyLinux#name}
  */
  readonly name: string;
  /**
  * Whether to enable the setting. Allows the sensor to monitor network activity for additional telemetry and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#network_visibility PreventionPolicyLinux#network_visibility}
  */
  readonly networkVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides improved visibility into various script files being written to disk in addition to clouding a portion of their content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#on_write_script_file_visibility PreventionPolicyLinux#on_write_script_file_visibility}
  */
  readonly onWriteScriptFileVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block processes that CrowdStrike analysts classify as suspicious. These are focused on dynamic IOAs, such as malware, exploits and other threats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#prevent_suspicious_processes PreventionPolicyLinux#prevent_suspicious_processes}
  */
  readonly preventSuspiciousProcesses?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Quarantine executable files after they’re prevented by NGAV. When this is enabled, we recommend setting anti-malware prevention levels to Moderate or higher and not using other antivirus solutions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#quarantine PreventionPolicyLinux#quarantine}
  */
  readonly quarantine?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides visibility into suspicious scripts, including shell and other scripting languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#script_based_execution_monitoring PreventionPolicyLinux#script_based_execution_monitoring}
  */
  readonly scriptBasedExecutionMonitoring?: boolean | cdktf.IResolvable;
  /**
  * For offline and online hosts, use sensor-based machine learning to identify and analyze unknown executables as they run to detect and prevent malware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#sensor_anti_malware PreventionPolicyLinux#sensor_anti_malware}
  */
  readonly sensorAntiMalware?: PreventionPolicyLinuxSensorAntiMalware;
  /**
  * Whether to enable the setting. Block attempts to tamper with the sensor by protecting critical components and resources. If disabled, the sensor still creates detections for tampering attempts but will not prevent the activity from occurring. Disabling is not recommended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#sensor_tampering_protection PreventionPolicyLinux#sensor_tampering_protection}
  */
  readonly sensorTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Upload suspicious files for advanced threat analysis with QuickScan Pro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#suspicious_file_analysis PreventionPolicyLinux#suspicious_file_analysis}
  */
  readonly suspiciousFileAnalysis?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows the sensor to monitor TLS traffic for malicious patterns and improved detections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#tls_visibility PreventionPolicyLinux#tls_visibility}
  */
  readonly tlsVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Upload all unknown detection-related executables for advanced analysis in the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#upload_unknown_detection_related_executables PreventionPolicyLinux#upload_unknown_detection_related_executables}
  */
  readonly uploadUnknownDetectionRelatedExecutables?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Upload all unknown executables for advanced analysis in the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#upload_unknown_executables PreventionPolicyLinux#upload_unknown_executables}
  */
  readonly uploadUnknownExecutables?: boolean | cdktf.IResolvable;
}
export interface PreventionPolicyLinuxCloudAntiMalware {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#detection PreventionPolicyLinux#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#prevention PreventionPolicyLinux#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyLinuxCloudAntiMalwareToTerraform(struct?: PreventionPolicyLinuxCloudAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyLinuxCloudAntiMalwareToHclTerraform(struct?: PreventionPolicyLinuxCloudAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyLinuxCloudAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyLinuxCloudAntiMalware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyLinuxCloudAntiMalware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}
export interface PreventionPolicyLinuxSensorAntiMalware {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#detection PreventionPolicyLinux#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#prevention PreventionPolicyLinux#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyLinuxSensorAntiMalwareToTerraform(struct?: PreventionPolicyLinuxSensorAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyLinuxSensorAntiMalwareToHclTerraform(struct?: PreventionPolicyLinuxSensorAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyLinuxSensorAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyLinuxSensorAntiMalware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyLinuxSensorAntiMalware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux crowdstrike_prevention_policy_linux}
*/
export class PreventionPolicyLinux extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_prevention_policy_linux";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PreventionPolicyLinux resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PreventionPolicyLinux to import
  * @param importFromId The id of the existing PreventionPolicyLinux that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PreventionPolicyLinux to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_prevention_policy_linux", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/resources/prevention_policy_linux crowdstrike_prevention_policy_linux} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PreventionPolicyLinuxConfig
  */
  public constructor(scope: Construct, id: string, config: PreventionPolicyLinuxConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_prevention_policy_linux',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.49',
        providerVersionConstraint: '0.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAntiMalware.internalValue = config.cloudAntiMalware;
    this._customBlocking = config.customBlocking;
    this._dbusVisibility = config.dbusVisibility;
    this._description = config.description;
    this._driftPrevention = config.driftPrevention;
    this._emailProtocolVisibility = config.emailProtocolVisibility;
    this._enabled = config.enabled;
    this._enhanceEnvironmentVariableVisibility = config.enhanceEnvironmentVariableVisibility;
    this._enhancePhpVisibility = config.enhancePhpVisibility;
    this._extendedCommandLineVisibility = config.extendedCommandLineVisibility;
    this._filesystemVisibility = config.filesystemVisibility;
    this._ftpVisibility = config.ftpVisibility;
    this._hostGroups = config.hostGroups;
    this._httpVisibility = config.httpVisibility;
    this._ioaRuleGroups = config.ioaRuleGroups;
    this._memoryVisibility = config.memoryVisibility;
    this._name = config.name;
    this._networkVisibility = config.networkVisibility;
    this._onWriteScriptFileVisibility = config.onWriteScriptFileVisibility;
    this._preventSuspiciousProcesses = config.preventSuspiciousProcesses;
    this._quarantine = config.quarantine;
    this._scriptBasedExecutionMonitoring = config.scriptBasedExecutionMonitoring;
    this._sensorAntiMalware.internalValue = config.sensorAntiMalware;
    this._sensorTamperingProtection = config.sensorTamperingProtection;
    this._suspiciousFileAnalysis = config.suspiciousFileAnalysis;
    this._tlsVisibility = config.tlsVisibility;
    this._uploadUnknownDetectionRelatedExecutables = config.uploadUnknownDetectionRelatedExecutables;
    this._uploadUnknownExecutables = config.uploadUnknownExecutables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_anti_malware - computed: true, optional: true, required: false
  private _cloudAntiMalware = new PreventionPolicyLinuxCloudAntiMalwareOutputReference(this, "cloud_anti_malware");
  public get cloudAntiMalware() {
    return this._cloudAntiMalware;
  }
  public putCloudAntiMalware(value: PreventionPolicyLinuxCloudAntiMalware) {
    this._cloudAntiMalware.internalValue = value;
  }
  public resetCloudAntiMalware() {
    this._cloudAntiMalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAntiMalwareInput() {
    return this._cloudAntiMalware.internalValue;
  }

  // custom_blocking - computed: true, optional: true, required: false
  private _customBlocking?: boolean | cdktf.IResolvable; 
  public get customBlocking() {
    return this.getBooleanAttribute('custom_blocking');
  }
  public set customBlocking(value: boolean | cdktf.IResolvable) {
    this._customBlocking = value;
  }
  public resetCustomBlocking() {
    this._customBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockingInput() {
    return this._customBlocking;
  }

  // dbus_visibility - computed: true, optional: true, required: false
  private _dbusVisibility?: boolean | cdktf.IResolvable; 
  public get dbusVisibility() {
    return this.getBooleanAttribute('dbus_visibility');
  }
  public set dbusVisibility(value: boolean | cdktf.IResolvable) {
    this._dbusVisibility = value;
  }
  public resetDbusVisibility() {
    this._dbusVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbusVisibilityInput() {
    return this._dbusVisibility;
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

  // drift_prevention - computed: true, optional: true, required: false
  private _driftPrevention?: boolean | cdktf.IResolvable; 
  public get driftPrevention() {
    return this.getBooleanAttribute('drift_prevention');
  }
  public set driftPrevention(value: boolean | cdktf.IResolvable) {
    this._driftPrevention = value;
  }
  public resetDriftPrevention() {
    this._driftPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftPreventionInput() {
    return this._driftPrevention;
  }

  // email_protocol_visibility - computed: true, optional: true, required: false
  private _emailProtocolVisibility?: boolean | cdktf.IResolvable; 
  public get emailProtocolVisibility() {
    return this.getBooleanAttribute('email_protocol_visibility');
  }
  public set emailProtocolVisibility(value: boolean | cdktf.IResolvable) {
    this._emailProtocolVisibility = value;
  }
  public resetEmailProtocolVisibility() {
    this._emailProtocolVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProtocolVisibilityInput() {
    return this._emailProtocolVisibility;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enhance_environment_variable_visibility - computed: true, optional: true, required: false
  private _enhanceEnvironmentVariableVisibility?: boolean | cdktf.IResolvable; 
  public get enhanceEnvironmentVariableVisibility() {
    return this.getBooleanAttribute('enhance_environment_variable_visibility');
  }
  public set enhanceEnvironmentVariableVisibility(value: boolean | cdktf.IResolvable) {
    this._enhanceEnvironmentVariableVisibility = value;
  }
  public resetEnhanceEnvironmentVariableVisibility() {
    this._enhanceEnvironmentVariableVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhanceEnvironmentVariableVisibilityInput() {
    return this._enhanceEnvironmentVariableVisibility;
  }

  // enhance_php_visibility - computed: true, optional: true, required: false
  private _enhancePhpVisibility?: boolean | cdktf.IResolvable; 
  public get enhancePhpVisibility() {
    return this.getBooleanAttribute('enhance_php_visibility');
  }
  public set enhancePhpVisibility(value: boolean | cdktf.IResolvable) {
    this._enhancePhpVisibility = value;
  }
  public resetEnhancePhpVisibility() {
    this._enhancePhpVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancePhpVisibilityInput() {
    return this._enhancePhpVisibility;
  }

  // extended_command_line_visibility - computed: true, optional: true, required: false
  private _extendedCommandLineVisibility?: boolean | cdktf.IResolvable; 
  public get extendedCommandLineVisibility() {
    return this.getBooleanAttribute('extended_command_line_visibility');
  }
  public set extendedCommandLineVisibility(value: boolean | cdktf.IResolvable) {
    this._extendedCommandLineVisibility = value;
  }
  public resetExtendedCommandLineVisibility() {
    this._extendedCommandLineVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommandLineVisibilityInput() {
    return this._extendedCommandLineVisibility;
  }

  // filesystem_visibility - computed: true, optional: true, required: false
  private _filesystemVisibility?: boolean | cdktf.IResolvable; 
  public get filesystemVisibility() {
    return this.getBooleanAttribute('filesystem_visibility');
  }
  public set filesystemVisibility(value: boolean | cdktf.IResolvable) {
    this._filesystemVisibility = value;
  }
  public resetFilesystemVisibility() {
    this._filesystemVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemVisibilityInput() {
    return this._filesystemVisibility;
  }

  // ftp_visibility - computed: true, optional: true, required: false
  private _ftpVisibility?: boolean | cdktf.IResolvable; 
  public get ftpVisibility() {
    return this.getBooleanAttribute('ftp_visibility');
  }
  public set ftpVisibility(value: boolean | cdktf.IResolvable) {
    this._ftpVisibility = value;
  }
  public resetFtpVisibility() {
    this._ftpVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpVisibilityInput() {
    return this._ftpVisibility;
  }

  // host_groups - computed: false, optional: false, required: true
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('host_groups'));
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // http_visibility - computed: true, optional: true, required: false
  private _httpVisibility?: boolean | cdktf.IResolvable; 
  public get httpVisibility() {
    return this.getBooleanAttribute('http_visibility');
  }
  public set httpVisibility(value: boolean | cdktf.IResolvable) {
    this._httpVisibility = value;
  }
  public resetHttpVisibility() {
    this._httpVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVisibilityInput() {
    return this._httpVisibility;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ioa_rule_groups - computed: false, optional: false, required: true
  private _ioaRuleGroups?: string[]; 
  public get ioaRuleGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ioa_rule_groups'));
  }
  public set ioaRuleGroups(value: string[]) {
    this._ioaRuleGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ioaRuleGroupsInput() {
    return this._ioaRuleGroups;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // memory_visibility - computed: true, optional: true, required: false
  private _memoryVisibility?: boolean | cdktf.IResolvable; 
  public get memoryVisibility() {
    return this.getBooleanAttribute('memory_visibility');
  }
  public set memoryVisibility(value: boolean | cdktf.IResolvable) {
    this._memoryVisibility = value;
  }
  public resetMemoryVisibility() {
    this._memoryVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryVisibilityInput() {
    return this._memoryVisibility;
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

  // network_visibility - computed: true, optional: true, required: false
  private _networkVisibility?: boolean | cdktf.IResolvable; 
  public get networkVisibility() {
    return this.getBooleanAttribute('network_visibility');
  }
  public set networkVisibility(value: boolean | cdktf.IResolvable) {
    this._networkVisibility = value;
  }
  public resetNetworkVisibility() {
    this._networkVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkVisibilityInput() {
    return this._networkVisibility;
  }

  // on_write_script_file_visibility - computed: true, optional: true, required: false
  private _onWriteScriptFileVisibility?: boolean | cdktf.IResolvable; 
  public get onWriteScriptFileVisibility() {
    return this.getBooleanAttribute('on_write_script_file_visibility');
  }
  public set onWriteScriptFileVisibility(value: boolean | cdktf.IResolvable) {
    this._onWriteScriptFileVisibility = value;
  }
  public resetOnWriteScriptFileVisibility() {
    this._onWriteScriptFileVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onWriteScriptFileVisibilityInput() {
    return this._onWriteScriptFileVisibility;
  }

  // prevent_suspicious_processes - computed: true, optional: true, required: false
  private _preventSuspiciousProcesses?: boolean | cdktf.IResolvable; 
  public get preventSuspiciousProcesses() {
    return this.getBooleanAttribute('prevent_suspicious_processes');
  }
  public set preventSuspiciousProcesses(value: boolean | cdktf.IResolvable) {
    this._preventSuspiciousProcesses = value;
  }
  public resetPreventSuspiciousProcesses() {
    this._preventSuspiciousProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventSuspiciousProcessesInput() {
    return this._preventSuspiciousProcesses;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: boolean | cdktf.IResolvable; 
  public get quarantine() {
    return this.getBooleanAttribute('quarantine');
  }
  public set quarantine(value: boolean | cdktf.IResolvable) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // script_based_execution_monitoring - computed: true, optional: true, required: false
  private _scriptBasedExecutionMonitoring?: boolean | cdktf.IResolvable; 
  public get scriptBasedExecutionMonitoring() {
    return this.getBooleanAttribute('script_based_execution_monitoring');
  }
  public set scriptBasedExecutionMonitoring(value: boolean | cdktf.IResolvable) {
    this._scriptBasedExecutionMonitoring = value;
  }
  public resetScriptBasedExecutionMonitoring() {
    this._scriptBasedExecutionMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptBasedExecutionMonitoringInput() {
    return this._scriptBasedExecutionMonitoring;
  }

  // sensor_anti_malware - computed: true, optional: true, required: false
  private _sensorAntiMalware = new PreventionPolicyLinuxSensorAntiMalwareOutputReference(this, "sensor_anti_malware");
  public get sensorAntiMalware() {
    return this._sensorAntiMalware;
  }
  public putSensorAntiMalware(value: PreventionPolicyLinuxSensorAntiMalware) {
    this._sensorAntiMalware.internalValue = value;
  }
  public resetSensorAntiMalware() {
    this._sensorAntiMalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorAntiMalwareInput() {
    return this._sensorAntiMalware.internalValue;
  }

  // sensor_tampering_protection - computed: true, optional: true, required: false
  private _sensorTamperingProtection?: boolean | cdktf.IResolvable; 
  public get sensorTamperingProtection() {
    return this.getBooleanAttribute('sensor_tampering_protection');
  }
  public set sensorTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._sensorTamperingProtection = value;
  }
  public resetSensorTamperingProtection() {
    this._sensorTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorTamperingProtectionInput() {
    return this._sensorTamperingProtection;
  }

  // suspicious_file_analysis - computed: true, optional: true, required: false
  private _suspiciousFileAnalysis?: boolean | cdktf.IResolvable; 
  public get suspiciousFileAnalysis() {
    return this.getBooleanAttribute('suspicious_file_analysis');
  }
  public set suspiciousFileAnalysis(value: boolean | cdktf.IResolvable) {
    this._suspiciousFileAnalysis = value;
  }
  public resetSuspiciousFileAnalysis() {
    this._suspiciousFileAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousFileAnalysisInput() {
    return this._suspiciousFileAnalysis;
  }

  // tls_visibility - computed: true, optional: true, required: false
  private _tlsVisibility?: boolean | cdktf.IResolvable; 
  public get tlsVisibility() {
    return this.getBooleanAttribute('tls_visibility');
  }
  public set tlsVisibility(value: boolean | cdktf.IResolvable) {
    this._tlsVisibility = value;
  }
  public resetTlsVisibility() {
    this._tlsVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVisibilityInput() {
    return this._tlsVisibility;
  }

  // upload_unknown_detection_related_executables - computed: true, optional: true, required: false
  private _uploadUnknownDetectionRelatedExecutables?: boolean | cdktf.IResolvable; 
  public get uploadUnknownDetectionRelatedExecutables() {
    return this.getBooleanAttribute('upload_unknown_detection_related_executables');
  }
  public set uploadUnknownDetectionRelatedExecutables(value: boolean | cdktf.IResolvable) {
    this._uploadUnknownDetectionRelatedExecutables = value;
  }
  public resetUploadUnknownDetectionRelatedExecutables() {
    this._uploadUnknownDetectionRelatedExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadUnknownDetectionRelatedExecutablesInput() {
    return this._uploadUnknownDetectionRelatedExecutables;
  }

  // upload_unknown_executables - computed: true, optional: true, required: false
  private _uploadUnknownExecutables?: boolean | cdktf.IResolvable; 
  public get uploadUnknownExecutables() {
    return this.getBooleanAttribute('upload_unknown_executables');
  }
  public set uploadUnknownExecutables(value: boolean | cdktf.IResolvable) {
    this._uploadUnknownExecutables = value;
  }
  public resetUploadUnknownExecutables() {
    this._uploadUnknownExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadUnknownExecutablesInput() {
    return this._uploadUnknownExecutables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_anti_malware: preventionPolicyLinuxCloudAntiMalwareToTerraform(this._cloudAntiMalware.internalValue),
      custom_blocking: cdktf.booleanToTerraform(this._customBlocking),
      dbus_visibility: cdktf.booleanToTerraform(this._dbusVisibility),
      description: cdktf.stringToTerraform(this._description),
      drift_prevention: cdktf.booleanToTerraform(this._driftPrevention),
      email_protocol_visibility: cdktf.booleanToTerraform(this._emailProtocolVisibility),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enhance_environment_variable_visibility: cdktf.booleanToTerraform(this._enhanceEnvironmentVariableVisibility),
      enhance_php_visibility: cdktf.booleanToTerraform(this._enhancePhpVisibility),
      extended_command_line_visibility: cdktf.booleanToTerraform(this._extendedCommandLineVisibility),
      filesystem_visibility: cdktf.booleanToTerraform(this._filesystemVisibility),
      ftp_visibility: cdktf.booleanToTerraform(this._ftpVisibility),
      host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroups),
      http_visibility: cdktf.booleanToTerraform(this._httpVisibility),
      ioa_rule_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ioaRuleGroups),
      memory_visibility: cdktf.booleanToTerraform(this._memoryVisibility),
      name: cdktf.stringToTerraform(this._name),
      network_visibility: cdktf.booleanToTerraform(this._networkVisibility),
      on_write_script_file_visibility: cdktf.booleanToTerraform(this._onWriteScriptFileVisibility),
      prevent_suspicious_processes: cdktf.booleanToTerraform(this._preventSuspiciousProcesses),
      quarantine: cdktf.booleanToTerraform(this._quarantine),
      script_based_execution_monitoring: cdktf.booleanToTerraform(this._scriptBasedExecutionMonitoring),
      sensor_anti_malware: preventionPolicyLinuxSensorAntiMalwareToTerraform(this._sensorAntiMalware.internalValue),
      sensor_tampering_protection: cdktf.booleanToTerraform(this._sensorTamperingProtection),
      suspicious_file_analysis: cdktf.booleanToTerraform(this._suspiciousFileAnalysis),
      tls_visibility: cdktf.booleanToTerraform(this._tlsVisibility),
      upload_unknown_detection_related_executables: cdktf.booleanToTerraform(this._uploadUnknownDetectionRelatedExecutables),
      upload_unknown_executables: cdktf.booleanToTerraform(this._uploadUnknownExecutables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_anti_malware: {
        value: preventionPolicyLinuxCloudAntiMalwareToHclTerraform(this._cloudAntiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyLinuxCloudAntiMalware",
      },
      custom_blocking: {
        value: cdktf.booleanToHclTerraform(this._customBlocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dbus_visibility: {
        value: cdktf.booleanToHclTerraform(this._dbusVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drift_prevention: {
        value: cdktf.booleanToHclTerraform(this._driftPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_protocol_visibility: {
        value: cdktf.booleanToHclTerraform(this._emailProtocolVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhance_environment_variable_visibility: {
        value: cdktf.booleanToHclTerraform(this._enhanceEnvironmentVariableVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhance_php_visibility: {
        value: cdktf.booleanToHclTerraform(this._enhancePhpVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extended_command_line_visibility: {
        value: cdktf.booleanToHclTerraform(this._extendedCommandLineVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filesystem_visibility: {
        value: cdktf.booleanToHclTerraform(this._filesystemVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ftp_visibility: {
        value: cdktf.booleanToHclTerraform(this._ftpVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_visibility: {
        value: cdktf.booleanToHclTerraform(this._httpVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ioa_rule_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ioaRuleGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      memory_visibility: {
        value: cdktf.booleanToHclTerraform(this._memoryVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_visibility: {
        value: cdktf.booleanToHclTerraform(this._networkVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_write_script_file_visibility: {
        value: cdktf.booleanToHclTerraform(this._onWriteScriptFileVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_suspicious_processes: {
        value: cdktf.booleanToHclTerraform(this._preventSuspiciousProcesses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quarantine: {
        value: cdktf.booleanToHclTerraform(this._quarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      script_based_execution_monitoring: {
        value: cdktf.booleanToHclTerraform(this._scriptBasedExecutionMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sensor_anti_malware: {
        value: preventionPolicyLinuxSensorAntiMalwareToHclTerraform(this._sensorAntiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyLinuxSensorAntiMalware",
      },
      sensor_tampering_protection: {
        value: cdktf.booleanToHclTerraform(this._sensorTamperingProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspicious_file_analysis: {
        value: cdktf.booleanToHclTerraform(this._suspiciousFileAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_visibility: {
        value: cdktf.booleanToHclTerraform(this._tlsVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_unknown_detection_related_executables: {
        value: cdktf.booleanToHclTerraform(this._uploadUnknownDetectionRelatedExecutables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_unknown_executables: {
        value: cdktf.booleanToHclTerraform(this._uploadUnknownExecutables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
