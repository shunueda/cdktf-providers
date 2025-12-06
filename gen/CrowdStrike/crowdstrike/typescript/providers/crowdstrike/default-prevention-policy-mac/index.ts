// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPreventionPolicyMacConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable the setting. Execution of a command shell was blocked and is indicative of the system hosting a Chopper web page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#chopper_webshell DefaultPreventionPolicyMac#chopper_webshell}
  */
  readonly chopperWebshell?: boolean | cdktf.IResolvable;
  /**
  * Use cloud-based machine learning informed by global analysis of executables to detect and prevent adware and potentially unwanted programs (PUP) for your online hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#cloud_adware_and_pup DefaultPreventionPolicyMac#cloud_adware_and_pup}
  */
  readonly cloudAdwareAndPup?: DefaultPreventionPolicyMacCloudAdwareAndPup;
  /**
  * Use cloud-based machine learning informed by global analysis of executables to detect and prevent known malware for your online hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#cloud_anti_malware DefaultPreventionPolicyMac#cloud_anti_malware}
  */
  readonly cloudAntiMalware?: DefaultPreventionPolicyMacCloudAntiMalware;
  /**
  * Whether to enable the setting. Block processes matching hashes that you add to IOC Management with the action set to "Block" or "Block, hide detection".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#custom_blocking DefaultPreventionPolicyMac#custom_blocking}
  */
  readonly customBlocking?: boolean | cdktf.IResolvable;
  /**
  * Description of the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#description DefaultPreventionPolicyMac#description}
  */
  readonly description?: string;
  /**
  * Whether to enable the setting. Use machine learning to analyze suspicious files when they're written to disk. To adjust detection sensitivity, change Anti-malware Detection levels in Sensor Machine Learning and Cloud Machine Learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#detect_on_write DefaultPreventionPolicyMac#detect_on_write}
  */
  readonly detectOnWrite?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A process with behaviors indicative of the Empyre Backdoor was terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#empyre_backdoor DefaultPreventionPolicyMac#empyre_backdoor}
  */
  readonly empyreBackdoor?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. An attempt to dump a user’s hashed password was blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#hash_collector DefaultPreventionPolicyMac#hash_collector}
  */
  readonly hashCollector?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block processes that CrowdStrike Intelligence analysts classify as malicious. These are focused on static hash-based IOCs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#intelligence_sourced_threats DefaultPreventionPolicyMac#intelligence_sourced_threats}
  */
  readonly intelligenceSourcedThreats?: boolean | cdktf.IResolvable;
  /**
  * IOA Rule Group to attach to the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#ioa_rule_groups DefaultPreventionPolicyMac#ioa_rule_groups}
  */
  readonly ioaRuleGroups: string[];
  /**
  * Whether to enable the setting. An attempt to recover a plaintext password via the kcpassword file was blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#kc_password_decoded DefaultPreventionPolicyMac#kc_password_decoded}
  */
  readonly kcPasswordDecoded?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Show a pop-up notification to the end user when the Falcon sensor blocks, kills, or quarantines. See these messages in Console.app by searching for Process: Falcon Notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#notify_end_users DefaultPreventionPolicyMac#notify_end_users}
  */
  readonly notifyEndUsers?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block processes that CrowdStrike analysts classify as suspicious. These are focused on dynamic IOAs, such as malware, exploits and other threats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#prevent_suspicious_processes DefaultPreventionPolicyMac#prevent_suspicious_processes}
  */
  readonly preventSuspiciousProcesses?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Quarantine executable files after they’re prevented by NGAV. When this is enabled, we recommend setting anti-malware prevention levels to Moderate or higher and not using other antivirus solutions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#quarantine DefaultPreventionPolicyMac#quarantine}
  */
  readonly quarantine?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Use machine learning to quarantine suspicious files when they're written to disk. To adjust quarantine sensitivity, change Anti-malware Prevention levels in Sensor Machine Learning and Cloud Machine Learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#quarantine_on_write DefaultPreventionPolicyMac#quarantine_on_write}
  */
  readonly quarantineOnWrite?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides visibility into suspicious scripts, including shell and other scripting languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#script_based_execution_monitoring DefaultPreventionPolicyMac#script_based_execution_monitoring}
  */
  readonly scriptBasedExecutionMonitoring?: boolean | cdktf.IResolvable;
  /**
  * For offline and online hosts, use sensor-based machine learning to identify and analyze unknown executables as they run to detect and prevent adware and potentially unwanted programs (PUP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#sensor_adware_and_pup DefaultPreventionPolicyMac#sensor_adware_and_pup}
  */
  readonly sensorAdwareAndPup?: DefaultPreventionPolicyMacSensorAdwareAndPup;
  /**
  * For offline and online hosts, use sensor-based machine learning to identify and analyze unknown executables as they run to detect and prevent malware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#sensor_anti_malware DefaultPreventionPolicyMac#sensor_anti_malware}
  */
  readonly sensorAntiMalware?: DefaultPreventionPolicyMacSensorAntiMalware;
  /**
  * Whether to enable the setting. Blocks attempts to tamper with the sensor. If disabled, the sensor still creates detections for tampering attempts but doesn’t block them. Disabling not recommended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#sensor_tampering_protection DefaultPreventionPolicyMac#sensor_tampering_protection}
  */
  readonly sensorTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Upload all unknown detection-related executables for advanced analysis in the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#upload_unknown_detection_related_executables DefaultPreventionPolicyMac#upload_unknown_detection_related_executables}
  */
  readonly uploadUnknownDetectionRelatedExecutables?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Upload all unknown executables for advanced analysis in the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#upload_unknown_executables DefaultPreventionPolicyMac#upload_unknown_executables}
  */
  readonly uploadUnknownExecutables?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. The execution of an XPCOM shell was blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#xpcom_shell DefaultPreventionPolicyMac#xpcom_shell}
  */
  readonly xpcomShell?: boolean | cdktf.IResolvable;
}
export interface DefaultPreventionPolicyMacCloudAdwareAndPup {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#detection DefaultPreventionPolicyMac#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#prevention DefaultPreventionPolicyMac#prevention}
  */
  readonly prevention: string;
}

export function defaultPreventionPolicyMacCloudAdwareAndPupToTerraform(struct?: DefaultPreventionPolicyMacCloudAdwareAndPup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function defaultPreventionPolicyMacCloudAdwareAndPupToHclTerraform(struct?: DefaultPreventionPolicyMacCloudAdwareAndPup | cdktf.IResolvable): any {
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

export class DefaultPreventionPolicyMacCloudAdwareAndPupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultPreventionPolicyMacCloudAdwareAndPup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DefaultPreventionPolicyMacCloudAdwareAndPup | cdktf.IResolvable | undefined) {
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
export interface DefaultPreventionPolicyMacCloudAntiMalware {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#detection DefaultPreventionPolicyMac#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#prevention DefaultPreventionPolicyMac#prevention}
  */
  readonly prevention: string;
}

export function defaultPreventionPolicyMacCloudAntiMalwareToTerraform(struct?: DefaultPreventionPolicyMacCloudAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function defaultPreventionPolicyMacCloudAntiMalwareToHclTerraform(struct?: DefaultPreventionPolicyMacCloudAntiMalware | cdktf.IResolvable): any {
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

export class DefaultPreventionPolicyMacCloudAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultPreventionPolicyMacCloudAntiMalware | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DefaultPreventionPolicyMacCloudAntiMalware | cdktf.IResolvable | undefined) {
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
export interface DefaultPreventionPolicyMacSensorAdwareAndPup {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#detection DefaultPreventionPolicyMac#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#prevention DefaultPreventionPolicyMac#prevention}
  */
  readonly prevention: string;
}

export function defaultPreventionPolicyMacSensorAdwareAndPupToTerraform(struct?: DefaultPreventionPolicyMacSensorAdwareAndPup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function defaultPreventionPolicyMacSensorAdwareAndPupToHclTerraform(struct?: DefaultPreventionPolicyMacSensorAdwareAndPup | cdktf.IResolvable): any {
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

export class DefaultPreventionPolicyMacSensorAdwareAndPupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultPreventionPolicyMacSensorAdwareAndPup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DefaultPreventionPolicyMacSensorAdwareAndPup | cdktf.IResolvable | undefined) {
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
export interface DefaultPreventionPolicyMacSensorAntiMalware {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#detection DefaultPreventionPolicyMac#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#prevention DefaultPreventionPolicyMac#prevention}
  */
  readonly prevention: string;
}

export function defaultPreventionPolicyMacSensorAntiMalwareToTerraform(struct?: DefaultPreventionPolicyMacSensorAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function defaultPreventionPolicyMacSensorAntiMalwareToHclTerraform(struct?: DefaultPreventionPolicyMacSensorAntiMalware | cdktf.IResolvable): any {
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

export class DefaultPreventionPolicyMacSensorAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultPreventionPolicyMacSensorAntiMalware | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DefaultPreventionPolicyMacSensorAntiMalware | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac crowdstrike_default_prevention_policy_mac}
*/
export class DefaultPreventionPolicyMac extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_default_prevention_policy_mac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPreventionPolicyMac resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPreventionPolicyMac to import
  * @param importFromId The id of the existing DefaultPreventionPolicyMac that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPreventionPolicyMac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_default_prevention_policy_mac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.50/docs/resources/default_prevention_policy_mac crowdstrike_default_prevention_policy_mac} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPreventionPolicyMacConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultPreventionPolicyMacConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_default_prevention_policy_mac',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.50',
        providerVersionConstraint: '0.0.50'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chopperWebshell = config.chopperWebshell;
    this._cloudAdwareAndPup.internalValue = config.cloudAdwareAndPup;
    this._cloudAntiMalware.internalValue = config.cloudAntiMalware;
    this._customBlocking = config.customBlocking;
    this._description = config.description;
    this._detectOnWrite = config.detectOnWrite;
    this._empyreBackdoor = config.empyreBackdoor;
    this._hashCollector = config.hashCollector;
    this._intelligenceSourcedThreats = config.intelligenceSourcedThreats;
    this._ioaRuleGroups = config.ioaRuleGroups;
    this._kcPasswordDecoded = config.kcPasswordDecoded;
    this._notifyEndUsers = config.notifyEndUsers;
    this._preventSuspiciousProcesses = config.preventSuspiciousProcesses;
    this._quarantine = config.quarantine;
    this._quarantineOnWrite = config.quarantineOnWrite;
    this._scriptBasedExecutionMonitoring = config.scriptBasedExecutionMonitoring;
    this._sensorAdwareAndPup.internalValue = config.sensorAdwareAndPup;
    this._sensorAntiMalware.internalValue = config.sensorAntiMalware;
    this._sensorTamperingProtection = config.sensorTamperingProtection;
    this._uploadUnknownDetectionRelatedExecutables = config.uploadUnknownDetectionRelatedExecutables;
    this._uploadUnknownExecutables = config.uploadUnknownExecutables;
    this._xpcomShell = config.xpcomShell;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chopper_webshell - computed: true, optional: true, required: false
  private _chopperWebshell?: boolean | cdktf.IResolvable; 
  public get chopperWebshell() {
    return this.getBooleanAttribute('chopper_webshell');
  }
  public set chopperWebshell(value: boolean | cdktf.IResolvable) {
    this._chopperWebshell = value;
  }
  public resetChopperWebshell() {
    this._chopperWebshell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chopperWebshellInput() {
    return this._chopperWebshell;
  }

  // cloud_adware_and_pup - computed: true, optional: true, required: false
  private _cloudAdwareAndPup = new DefaultPreventionPolicyMacCloudAdwareAndPupOutputReference(this, "cloud_adware_and_pup");
  public get cloudAdwareAndPup() {
    return this._cloudAdwareAndPup;
  }
  public putCloudAdwareAndPup(value: DefaultPreventionPolicyMacCloudAdwareAndPup) {
    this._cloudAdwareAndPup.internalValue = value;
  }
  public resetCloudAdwareAndPup() {
    this._cloudAdwareAndPup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAdwareAndPupInput() {
    return this._cloudAdwareAndPup.internalValue;
  }

  // cloud_anti_malware - computed: true, optional: true, required: false
  private _cloudAntiMalware = new DefaultPreventionPolicyMacCloudAntiMalwareOutputReference(this, "cloud_anti_malware");
  public get cloudAntiMalware() {
    return this._cloudAntiMalware;
  }
  public putCloudAntiMalware(value: DefaultPreventionPolicyMacCloudAntiMalware) {
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

  // detect_on_write - computed: true, optional: true, required: false
  private _detectOnWrite?: boolean | cdktf.IResolvable; 
  public get detectOnWrite() {
    return this.getBooleanAttribute('detect_on_write');
  }
  public set detectOnWrite(value: boolean | cdktf.IResolvable) {
    this._detectOnWrite = value;
  }
  public resetDetectOnWrite() {
    this._detectOnWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectOnWriteInput() {
    return this._detectOnWrite;
  }

  // empyre_backdoor - computed: true, optional: true, required: false
  private _empyreBackdoor?: boolean | cdktf.IResolvable; 
  public get empyreBackdoor() {
    return this.getBooleanAttribute('empyre_backdoor');
  }
  public set empyreBackdoor(value: boolean | cdktf.IResolvable) {
    this._empyreBackdoor = value;
  }
  public resetEmpyreBackdoor() {
    this._empyreBackdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get empyreBackdoorInput() {
    return this._empyreBackdoor;
  }

  // hash_collector - computed: true, optional: true, required: false
  private _hashCollector?: boolean | cdktf.IResolvable; 
  public get hashCollector() {
    return this.getBooleanAttribute('hash_collector');
  }
  public set hashCollector(value: boolean | cdktf.IResolvable) {
    this._hashCollector = value;
  }
  public resetHashCollector() {
    this._hashCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashCollectorInput() {
    return this._hashCollector;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intelligence_sourced_threats - computed: true, optional: true, required: false
  private _intelligenceSourcedThreats?: boolean | cdktf.IResolvable; 
  public get intelligenceSourcedThreats() {
    return this.getBooleanAttribute('intelligence_sourced_threats');
  }
  public set intelligenceSourcedThreats(value: boolean | cdktf.IResolvable) {
    this._intelligenceSourcedThreats = value;
  }
  public resetIntelligenceSourcedThreats() {
    this._intelligenceSourcedThreats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceSourcedThreatsInput() {
    return this._intelligenceSourcedThreats;
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

  // kc_password_decoded - computed: true, optional: true, required: false
  private _kcPasswordDecoded?: boolean | cdktf.IResolvable; 
  public get kcPasswordDecoded() {
    return this.getBooleanAttribute('kc_password_decoded');
  }
  public set kcPasswordDecoded(value: boolean | cdktf.IResolvable) {
    this._kcPasswordDecoded = value;
  }
  public resetKcPasswordDecoded() {
    this._kcPasswordDecoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kcPasswordDecodedInput() {
    return this._kcPasswordDecoded;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // notify_end_users - computed: true, optional: true, required: false
  private _notifyEndUsers?: boolean | cdktf.IResolvable; 
  public get notifyEndUsers() {
    return this.getBooleanAttribute('notify_end_users');
  }
  public set notifyEndUsers(value: boolean | cdktf.IResolvable) {
    this._notifyEndUsers = value;
  }
  public resetNotifyEndUsers() {
    this._notifyEndUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEndUsersInput() {
    return this._notifyEndUsers;
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

  // quarantine_on_write - computed: true, optional: true, required: false
  private _quarantineOnWrite?: boolean | cdktf.IResolvable; 
  public get quarantineOnWrite() {
    return this.getBooleanAttribute('quarantine_on_write');
  }
  public set quarantineOnWrite(value: boolean | cdktf.IResolvable) {
    this._quarantineOnWrite = value;
  }
  public resetQuarantineOnWrite() {
    this._quarantineOnWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineOnWriteInput() {
    return this._quarantineOnWrite;
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

  // sensor_adware_and_pup - computed: true, optional: true, required: false
  private _sensorAdwareAndPup = new DefaultPreventionPolicyMacSensorAdwareAndPupOutputReference(this, "sensor_adware_and_pup");
  public get sensorAdwareAndPup() {
    return this._sensorAdwareAndPup;
  }
  public putSensorAdwareAndPup(value: DefaultPreventionPolicyMacSensorAdwareAndPup) {
    this._sensorAdwareAndPup.internalValue = value;
  }
  public resetSensorAdwareAndPup() {
    this._sensorAdwareAndPup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorAdwareAndPupInput() {
    return this._sensorAdwareAndPup.internalValue;
  }

  // sensor_anti_malware - computed: true, optional: true, required: false
  private _sensorAntiMalware = new DefaultPreventionPolicyMacSensorAntiMalwareOutputReference(this, "sensor_anti_malware");
  public get sensorAntiMalware() {
    return this._sensorAntiMalware;
  }
  public putSensorAntiMalware(value: DefaultPreventionPolicyMacSensorAntiMalware) {
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

  // xpcom_shell - computed: true, optional: true, required: false
  private _xpcomShell?: boolean | cdktf.IResolvable; 
  public get xpcomShell() {
    return this.getBooleanAttribute('xpcom_shell');
  }
  public set xpcomShell(value: boolean | cdktf.IResolvable) {
    this._xpcomShell = value;
  }
  public resetXpcomShell() {
    this._xpcomShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xpcomShellInput() {
    return this._xpcomShell;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chopper_webshell: cdktf.booleanToTerraform(this._chopperWebshell),
      cloud_adware_and_pup: defaultPreventionPolicyMacCloudAdwareAndPupToTerraform(this._cloudAdwareAndPup.internalValue),
      cloud_anti_malware: defaultPreventionPolicyMacCloudAntiMalwareToTerraform(this._cloudAntiMalware.internalValue),
      custom_blocking: cdktf.booleanToTerraform(this._customBlocking),
      description: cdktf.stringToTerraform(this._description),
      detect_on_write: cdktf.booleanToTerraform(this._detectOnWrite),
      empyre_backdoor: cdktf.booleanToTerraform(this._empyreBackdoor),
      hash_collector: cdktf.booleanToTerraform(this._hashCollector),
      intelligence_sourced_threats: cdktf.booleanToTerraform(this._intelligenceSourcedThreats),
      ioa_rule_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ioaRuleGroups),
      kc_password_decoded: cdktf.booleanToTerraform(this._kcPasswordDecoded),
      notify_end_users: cdktf.booleanToTerraform(this._notifyEndUsers),
      prevent_suspicious_processes: cdktf.booleanToTerraform(this._preventSuspiciousProcesses),
      quarantine: cdktf.booleanToTerraform(this._quarantine),
      quarantine_on_write: cdktf.booleanToTerraform(this._quarantineOnWrite),
      script_based_execution_monitoring: cdktf.booleanToTerraform(this._scriptBasedExecutionMonitoring),
      sensor_adware_and_pup: defaultPreventionPolicyMacSensorAdwareAndPupToTerraform(this._sensorAdwareAndPup.internalValue),
      sensor_anti_malware: defaultPreventionPolicyMacSensorAntiMalwareToTerraform(this._sensorAntiMalware.internalValue),
      sensor_tampering_protection: cdktf.booleanToTerraform(this._sensorTamperingProtection),
      upload_unknown_detection_related_executables: cdktf.booleanToTerraform(this._uploadUnknownDetectionRelatedExecutables),
      upload_unknown_executables: cdktf.booleanToTerraform(this._uploadUnknownExecutables),
      xpcom_shell: cdktf.booleanToTerraform(this._xpcomShell),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chopper_webshell: {
        value: cdktf.booleanToHclTerraform(this._chopperWebshell),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_adware_and_pup: {
        value: defaultPreventionPolicyMacCloudAdwareAndPupToHclTerraform(this._cloudAdwareAndPup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultPreventionPolicyMacCloudAdwareAndPup",
      },
      cloud_anti_malware: {
        value: defaultPreventionPolicyMacCloudAntiMalwareToHclTerraform(this._cloudAntiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultPreventionPolicyMacCloudAntiMalware",
      },
      custom_blocking: {
        value: cdktf.booleanToHclTerraform(this._customBlocking),
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
      detect_on_write: {
        value: cdktf.booleanToHclTerraform(this._detectOnWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      empyre_backdoor: {
        value: cdktf.booleanToHclTerraform(this._empyreBackdoor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_collector: {
        value: cdktf.booleanToHclTerraform(this._hashCollector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      intelligence_sourced_threats: {
        value: cdktf.booleanToHclTerraform(this._intelligenceSourcedThreats),
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
      kc_password_decoded: {
        value: cdktf.booleanToHclTerraform(this._kcPasswordDecoded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_end_users: {
        value: cdktf.booleanToHclTerraform(this._notifyEndUsers),
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
      quarantine_on_write: {
        value: cdktf.booleanToHclTerraform(this._quarantineOnWrite),
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
      sensor_adware_and_pup: {
        value: defaultPreventionPolicyMacSensorAdwareAndPupToHclTerraform(this._sensorAdwareAndPup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultPreventionPolicyMacSensorAdwareAndPup",
      },
      sensor_anti_malware: {
        value: defaultPreventionPolicyMacSensorAntiMalwareToHclTerraform(this._sensorAntiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultPreventionPolicyMacSensorAntiMalware",
      },
      sensor_tampering_protection: {
        value: cdktf.booleanToHclTerraform(this._sensorTamperingProtection),
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
      xpcom_shell: {
        value: cdktf.booleanToHclTerraform(this._xpcomShell),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
