// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostRuntimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#rule HostRuntimePolicy#rule}
  */
  readonly rule?: HostRuntimePolicyRule[] | cdktf.IResolvable;
}
export interface HostRuntimePolicyRuleActivities {
  /**
  * Whether or not to disable host activity collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#disabled HostRuntimePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to collect docker commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#docker_enabled HostRuntimePolicy#docker_enabled}
  */
  readonly dockerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to collect read-only docker commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#readonly_docker_enabled HostRuntimePolicy#readonly_docker_enabled}
  */
  readonly readonlyDockerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to collect activity from services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#service_activities_enabled HostRuntimePolicy#service_activities_enabled}
  */
  readonly serviceActivitiesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to collect new SSH sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#sshd_enabled HostRuntimePolicy#sshd_enabled}
  */
  readonly sshdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to collect commands ran with sudo or su.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#sudo_enabled HostRuntimePolicy#sudo_enabled}
  */
  readonly sudoEnabled?: boolean | cdktf.IResolvable;
}

export function hostRuntimePolicyRuleActivitiesToTerraform(struct?: HostRuntimePolicyRuleActivitiesOutputReference | HostRuntimePolicyRuleActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    docker_enabled: cdktf.booleanToTerraform(struct!.dockerEnabled),
    readonly_docker_enabled: cdktf.booleanToTerraform(struct!.readonlyDockerEnabled),
    service_activities_enabled: cdktf.booleanToTerraform(struct!.serviceActivitiesEnabled),
    sshd_enabled: cdktf.booleanToTerraform(struct!.sshdEnabled),
    sudo_enabled: cdktf.booleanToTerraform(struct!.sudoEnabled),
  }
}


export function hostRuntimePolicyRuleActivitiesToHclTerraform(struct?: HostRuntimePolicyRuleActivitiesOutputReference | HostRuntimePolicyRuleActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dockerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly_docker_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.readonlyDockerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_activities_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceActivitiesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sshd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sshdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sudo_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sudoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleActivitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostRuntimePolicyRuleActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dockerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerEnabled = this._dockerEnabled;
    }
    if (this._readonlyDockerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyDockerEnabled = this._readonlyDockerEnabled;
    }
    if (this._serviceActivitiesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceActivitiesEnabled = this._serviceActivitiesEnabled;
    }
    if (this._sshdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshdEnabled = this._sshdEnabled;
    }
    if (this._sudoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sudoEnabled = this._sudoEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleActivities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._dockerEnabled = undefined;
      this._readonlyDockerEnabled = undefined;
      this._serviceActivitiesEnabled = undefined;
      this._sshdEnabled = undefined;
      this._sudoEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._dockerEnabled = value.dockerEnabled;
      this._readonlyDockerEnabled = value.readonlyDockerEnabled;
      this._serviceActivitiesEnabled = value.serviceActivitiesEnabled;
      this._sshdEnabled = value.sshdEnabled;
      this._sudoEnabled = value.sudoEnabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // docker_enabled - computed: false, optional: true, required: false
  private _dockerEnabled?: boolean | cdktf.IResolvable; 
  public get dockerEnabled() {
    return this.getBooleanAttribute('docker_enabled');
  }
  public set dockerEnabled(value: boolean | cdktf.IResolvable) {
    this._dockerEnabled = value;
  }
  public resetDockerEnabled() {
    this._dockerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerEnabledInput() {
    return this._dockerEnabled;
  }

  // readonly_docker_enabled - computed: false, optional: true, required: false
  private _readonlyDockerEnabled?: boolean | cdktf.IResolvable; 
  public get readonlyDockerEnabled() {
    return this.getBooleanAttribute('readonly_docker_enabled');
  }
  public set readonlyDockerEnabled(value: boolean | cdktf.IResolvable) {
    this._readonlyDockerEnabled = value;
  }
  public resetReadonlyDockerEnabled() {
    this._readonlyDockerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyDockerEnabledInput() {
    return this._readonlyDockerEnabled;
  }

  // service_activities_enabled - computed: false, optional: true, required: false
  private _serviceActivitiesEnabled?: boolean | cdktf.IResolvable; 
  public get serviceActivitiesEnabled() {
    return this.getBooleanAttribute('service_activities_enabled');
  }
  public set serviceActivitiesEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceActivitiesEnabled = value;
  }
  public resetServiceActivitiesEnabled() {
    this._serviceActivitiesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceActivitiesEnabledInput() {
    return this._serviceActivitiesEnabled;
  }

  // sshd_enabled - computed: false, optional: true, required: false
  private _sshdEnabled?: boolean | cdktf.IResolvable; 
  public get sshdEnabled() {
    return this.getBooleanAttribute('sshd_enabled');
  }
  public set sshdEnabled(value: boolean | cdktf.IResolvable) {
    this._sshdEnabled = value;
  }
  public resetSshdEnabled() {
    this._sshdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshdEnabledInput() {
    return this._sshdEnabled;
  }

  // sudo_enabled - computed: false, optional: true, required: false
  private _sudoEnabled?: boolean | cdktf.IResolvable; 
  public get sudoEnabled() {
    return this.getBooleanAttribute('sudo_enabled');
  }
  public set sudoEnabled(value: boolean | cdktf.IResolvable) {
    this._sudoEnabled = value;
  }
  public resetSudoEnabled() {
    this._sudoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudoEnabledInput() {
    return this._sudoEnabled;
  }
}
export interface HostRuntimePolicyRuleAntimalwareDeniedProcesses {
  /**
  * The effect to be used. Can be set to 'prevent' or 'alert'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#effect HostRuntimePolicy#effect}
  */
  readonly effect?: string;
  /**
  * List of processes and files to deny during anti-malware checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#paths HostRuntimePolicy#paths}
  */
  readonly paths?: string[];
}

export function hostRuntimePolicyRuleAntimalwareDeniedProcessesToTerraform(struct?: HostRuntimePolicyRuleAntimalwareDeniedProcessesOutputReference | HostRuntimePolicyRuleAntimalwareDeniedProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function hostRuntimePolicyRuleAntimalwareDeniedProcessesToHclTerraform(struct?: HostRuntimePolicyRuleAntimalwareDeniedProcessesOutputReference | HostRuntimePolicyRuleAntimalwareDeniedProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleAntimalwareDeniedProcessesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostRuntimePolicyRuleAntimalwareDeniedProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleAntimalwareDeniedProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._effect = undefined;
      this._paths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._effect = value.effect;
      this._paths = value.paths;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface HostRuntimePolicyRuleAntimalware {
  /**
  * List of processes and files to allow during anti-malware checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#allowed_processes HostRuntimePolicy#allowed_processes}
  */
  readonly allowedProcesses?: string[];
  /**
  * The effect to be used when crypto miners are detected. Can be set to 'prevent', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#crypto_miners HostRuntimePolicy#crypto_miners}
  */
  readonly cryptoMiners?: string;
  /**
  * The effect to be used when malware from custom feeds is detected. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#custom_feed HostRuntimePolicy#custom_feed}
  */
  readonly customFeed?: string;
  /**
  * Whether or not to detect compiler-generated binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#detect_compiler_generated_binary HostRuntimePolicy#detect_compiler_generated_binary}
  */
  readonly detectCompilerGeneratedBinary?: boolean | cdktf.IResolvable;
  /**
  * The effect to be used when encrypted or packed binaries are detected. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#encrypted_binaries HostRuntimePolicy#encrypted_binaries}
  */
  readonly encryptedBinaries?: string;
  /**
  * The effect to be used when execution flow hijacking is detected. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#execution_flow_hijack HostRuntimePolicy#execution_flow_hijack}
  */
  readonly executionFlowHijack?: string;
  /**
  * The effect to be used when malware according to Prisma Cloud Compute is detected. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#intelligence_feed HostRuntimePolicy#intelligence_feed}
  */
  readonly intelligenceFeed?: string;
  /**
  * The effect to be used when reverse shell attacks are detected. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#reverse_shell HostRuntimePolicy#reverse_shell}
  */
  readonly reverseShell?: string;
  /**
  * The effect to be used when non-packaged binaries are created or ran by a service. Can be set to 'prevent', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#service_unknown_origin_binary HostRuntimePolicy#service_unknown_origin_binary}
  */
  readonly serviceUnknownOriginBinary?: string;
  /**
  * Whether or not to skip tracking of SSH events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#skip_ssh_tracking HostRuntimePolicy#skip_ssh_tracking}
  */
  readonly skipSshTracking?: boolean | cdktf.IResolvable;
  /**
  * The effect to be used when binaries with suspicious ELF headers are detected. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#suspicious_elf_headers HostRuntimePolicy#suspicious_elf_headers}
  */
  readonly suspiciousElfHeaders?: string;
  /**
  * The effect to be used when processes are ran from a temporary file system. Can be set to 'prevent', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#temp_filesystem_processes HostRuntimePolicy#temp_filesystem_processes}
  */
  readonly tempFilesystemProcesses?: string;
  /**
  * The effect to be used when non-packaged binaries are created or ran by a user. Can be set to 'prevent', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#user_unknown_origin_binary HostRuntimePolicy#user_unknown_origin_binary}
  */
  readonly userUnknownOriginBinary?: string;
  /**
  * The effect to be used when webshell attacks are detected. Can be set to 'prevent', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#webshell HostRuntimePolicy#webshell}
  */
  readonly webshell?: string;
  /**
  * The effect to be used when WildFire analysis is enabled. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#wildfire_analysis HostRuntimePolicy#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string;
  /**
  * denied_processes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#denied_processes HostRuntimePolicy#denied_processes}
  */
  readonly deniedProcesses?: HostRuntimePolicyRuleAntimalwareDeniedProcesses;
}

export function hostRuntimePolicyRuleAntimalwareToTerraform(struct?: HostRuntimePolicyRuleAntimalwareOutputReference | HostRuntimePolicyRuleAntimalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProcesses),
    crypto_miners: cdktf.stringToTerraform(struct!.cryptoMiners),
    custom_feed: cdktf.stringToTerraform(struct!.customFeed),
    detect_compiler_generated_binary: cdktf.booleanToTerraform(struct!.detectCompilerGeneratedBinary),
    encrypted_binaries: cdktf.stringToTerraform(struct!.encryptedBinaries),
    execution_flow_hijack: cdktf.stringToTerraform(struct!.executionFlowHijack),
    intelligence_feed: cdktf.stringToTerraform(struct!.intelligenceFeed),
    reverse_shell: cdktf.stringToTerraform(struct!.reverseShell),
    service_unknown_origin_binary: cdktf.stringToTerraform(struct!.serviceUnknownOriginBinary),
    skip_ssh_tracking: cdktf.booleanToTerraform(struct!.skipSshTracking),
    suspicious_elf_headers: cdktf.stringToTerraform(struct!.suspiciousElfHeaders),
    temp_filesystem_processes: cdktf.stringToTerraform(struct!.tempFilesystemProcesses),
    user_unknown_origin_binary: cdktf.stringToTerraform(struct!.userUnknownOriginBinary),
    webshell: cdktf.stringToTerraform(struct!.webshell),
    wildfire_analysis: cdktf.stringToTerraform(struct!.wildfireAnalysis),
    denied_processes: hostRuntimePolicyRuleAntimalwareDeniedProcessesToTerraform(struct!.deniedProcesses),
  }
}


export function hostRuntimePolicyRuleAntimalwareToHclTerraform(struct?: HostRuntimePolicyRuleAntimalwareOutputReference | HostRuntimePolicyRuleAntimalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    crypto_miners: {
      value: cdktf.stringToHclTerraform(struct!.cryptoMiners),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_feed: {
      value: cdktf.stringToHclTerraform(struct!.customFeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detect_compiler_generated_binary: {
      value: cdktf.booleanToHclTerraform(struct!.detectCompilerGeneratedBinary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted_binaries: {
      value: cdktf.stringToHclTerraform(struct!.encryptedBinaries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_flow_hijack: {
      value: cdktf.stringToHclTerraform(struct!.executionFlowHijack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intelligence_feed: {
      value: cdktf.stringToHclTerraform(struct!.intelligenceFeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reverse_shell: {
      value: cdktf.stringToHclTerraform(struct!.reverseShell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_unknown_origin_binary: {
      value: cdktf.stringToHclTerraform(struct!.serviceUnknownOriginBinary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_ssh_tracking: {
      value: cdktf.booleanToHclTerraform(struct!.skipSshTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspicious_elf_headers: {
      value: cdktf.stringToHclTerraform(struct!.suspiciousElfHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_filesystem_processes: {
      value: cdktf.stringToHclTerraform(struct!.tempFilesystemProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_unknown_origin_binary: {
      value: cdktf.stringToHclTerraform(struct!.userUnknownOriginBinary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webshell: {
      value: cdktf.stringToHclTerraform(struct!.webshell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_analysis: {
      value: cdktf.stringToHclTerraform(struct!.wildfireAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denied_processes: {
      value: hostRuntimePolicyRuleAntimalwareDeniedProcessesToHclTerraform(struct!.deniedProcesses),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleAntimalwareDeniedProcessesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleAntimalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostRuntimePolicyRuleAntimalware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProcesses = this._allowedProcesses;
    }
    if (this._cryptoMiners !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoMiners = this._cryptoMiners;
    }
    if (this._customFeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFeed = this._customFeed;
    }
    if (this._detectCompilerGeneratedBinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectCompilerGeneratedBinary = this._detectCompilerGeneratedBinary;
    }
    if (this._encryptedBinaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedBinaries = this._encryptedBinaries;
    }
    if (this._executionFlowHijack !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionFlowHijack = this._executionFlowHijack;
    }
    if (this._intelligenceFeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelligenceFeed = this._intelligenceFeed;
    }
    if (this._reverseShell !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseShell = this._reverseShell;
    }
    if (this._serviceUnknownOriginBinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUnknownOriginBinary = this._serviceUnknownOriginBinary;
    }
    if (this._skipSshTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSshTracking = this._skipSshTracking;
    }
    if (this._suspiciousElfHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspiciousElfHeaders = this._suspiciousElfHeaders;
    }
    if (this._tempFilesystemProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempFilesystemProcesses = this._tempFilesystemProcesses;
    }
    if (this._userUnknownOriginBinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.userUnknownOriginBinary = this._userUnknownOriginBinary;
    }
    if (this._webshell !== undefined) {
      hasAnyValues = true;
      internalValueResult.webshell = this._webshell;
    }
    if (this._wildfireAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysis = this._wildfireAnalysis;
    }
    if (this._deniedProcesses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedProcesses = this._deniedProcesses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleAntimalware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedProcesses = undefined;
      this._cryptoMiners = undefined;
      this._customFeed = undefined;
      this._detectCompilerGeneratedBinary = undefined;
      this._encryptedBinaries = undefined;
      this._executionFlowHijack = undefined;
      this._intelligenceFeed = undefined;
      this._reverseShell = undefined;
      this._serviceUnknownOriginBinary = undefined;
      this._skipSshTracking = undefined;
      this._suspiciousElfHeaders = undefined;
      this._tempFilesystemProcesses = undefined;
      this._userUnknownOriginBinary = undefined;
      this._webshell = undefined;
      this._wildfireAnalysis = undefined;
      this._deniedProcesses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedProcesses = value.allowedProcesses;
      this._cryptoMiners = value.cryptoMiners;
      this._customFeed = value.customFeed;
      this._detectCompilerGeneratedBinary = value.detectCompilerGeneratedBinary;
      this._encryptedBinaries = value.encryptedBinaries;
      this._executionFlowHijack = value.executionFlowHijack;
      this._intelligenceFeed = value.intelligenceFeed;
      this._reverseShell = value.reverseShell;
      this._serviceUnknownOriginBinary = value.serviceUnknownOriginBinary;
      this._skipSshTracking = value.skipSshTracking;
      this._suspiciousElfHeaders = value.suspiciousElfHeaders;
      this._tempFilesystemProcesses = value.tempFilesystemProcesses;
      this._userUnknownOriginBinary = value.userUnknownOriginBinary;
      this._webshell = value.webshell;
      this._wildfireAnalysis = value.wildfireAnalysis;
      this._deniedProcesses.internalValue = value.deniedProcesses;
    }
  }

  // allowed_processes - computed: false, optional: true, required: false
  private _allowedProcesses?: string[]; 
  public get allowedProcesses() {
    return this.getListAttribute('allowed_processes');
  }
  public set allowedProcesses(value: string[]) {
    this._allowedProcesses = value;
  }
  public resetAllowedProcesses() {
    this._allowedProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProcessesInput() {
    return this._allowedProcesses;
  }

  // crypto_miners - computed: false, optional: true, required: false
  private _cryptoMiners?: string; 
  public get cryptoMiners() {
    return this.getStringAttribute('crypto_miners');
  }
  public set cryptoMiners(value: string) {
    this._cryptoMiners = value;
  }
  public resetCryptoMiners() {
    this._cryptoMiners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMinersInput() {
    return this._cryptoMiners;
  }

  // custom_feed - computed: false, optional: true, required: false
  private _customFeed?: string; 
  public get customFeed() {
    return this.getStringAttribute('custom_feed');
  }
  public set customFeed(value: string) {
    this._customFeed = value;
  }
  public resetCustomFeed() {
    this._customFeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFeedInput() {
    return this._customFeed;
  }

  // detect_compiler_generated_binary - computed: false, optional: true, required: false
  private _detectCompilerGeneratedBinary?: boolean | cdktf.IResolvable; 
  public get detectCompilerGeneratedBinary() {
    return this.getBooleanAttribute('detect_compiler_generated_binary');
  }
  public set detectCompilerGeneratedBinary(value: boolean | cdktf.IResolvable) {
    this._detectCompilerGeneratedBinary = value;
  }
  public resetDetectCompilerGeneratedBinary() {
    this._detectCompilerGeneratedBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectCompilerGeneratedBinaryInput() {
    return this._detectCompilerGeneratedBinary;
  }

  // encrypted_binaries - computed: false, optional: true, required: false
  private _encryptedBinaries?: string; 
  public get encryptedBinaries() {
    return this.getStringAttribute('encrypted_binaries');
  }
  public set encryptedBinaries(value: string) {
    this._encryptedBinaries = value;
  }
  public resetEncryptedBinaries() {
    this._encryptedBinaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedBinariesInput() {
    return this._encryptedBinaries;
  }

  // execution_flow_hijack - computed: false, optional: true, required: false
  private _executionFlowHijack?: string; 
  public get executionFlowHijack() {
    return this.getStringAttribute('execution_flow_hijack');
  }
  public set executionFlowHijack(value: string) {
    this._executionFlowHijack = value;
  }
  public resetExecutionFlowHijack() {
    this._executionFlowHijack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionFlowHijackInput() {
    return this._executionFlowHijack;
  }

  // intelligence_feed - computed: false, optional: true, required: false
  private _intelligenceFeed?: string; 
  public get intelligenceFeed() {
    return this.getStringAttribute('intelligence_feed');
  }
  public set intelligenceFeed(value: string) {
    this._intelligenceFeed = value;
  }
  public resetIntelligenceFeed() {
    this._intelligenceFeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceFeedInput() {
    return this._intelligenceFeed;
  }

  // reverse_shell - computed: false, optional: true, required: false
  private _reverseShell?: string; 
  public get reverseShell() {
    return this.getStringAttribute('reverse_shell');
  }
  public set reverseShell(value: string) {
    this._reverseShell = value;
  }
  public resetReverseShell() {
    this._reverseShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShellInput() {
    return this._reverseShell;
  }

  // service_unknown_origin_binary - computed: false, optional: true, required: false
  private _serviceUnknownOriginBinary?: string; 
  public get serviceUnknownOriginBinary() {
    return this.getStringAttribute('service_unknown_origin_binary');
  }
  public set serviceUnknownOriginBinary(value: string) {
    this._serviceUnknownOriginBinary = value;
  }
  public resetServiceUnknownOriginBinary() {
    this._serviceUnknownOriginBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUnknownOriginBinaryInput() {
    return this._serviceUnknownOriginBinary;
  }

  // skip_ssh_tracking - computed: false, optional: true, required: false
  private _skipSshTracking?: boolean | cdktf.IResolvable; 
  public get skipSshTracking() {
    return this.getBooleanAttribute('skip_ssh_tracking');
  }
  public set skipSshTracking(value: boolean | cdktf.IResolvable) {
    this._skipSshTracking = value;
  }
  public resetSkipSshTracking() {
    this._skipSshTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSshTrackingInput() {
    return this._skipSshTracking;
  }

  // suspicious_elf_headers - computed: false, optional: true, required: false
  private _suspiciousElfHeaders?: string; 
  public get suspiciousElfHeaders() {
    return this.getStringAttribute('suspicious_elf_headers');
  }
  public set suspiciousElfHeaders(value: string) {
    this._suspiciousElfHeaders = value;
  }
  public resetSuspiciousElfHeaders() {
    this._suspiciousElfHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousElfHeadersInput() {
    return this._suspiciousElfHeaders;
  }

  // temp_filesystem_processes - computed: false, optional: true, required: false
  private _tempFilesystemProcesses?: string; 
  public get tempFilesystemProcesses() {
    return this.getStringAttribute('temp_filesystem_processes');
  }
  public set tempFilesystemProcesses(value: string) {
    this._tempFilesystemProcesses = value;
  }
  public resetTempFilesystemProcesses() {
    this._tempFilesystemProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempFilesystemProcessesInput() {
    return this._tempFilesystemProcesses;
  }

  // user_unknown_origin_binary - computed: false, optional: true, required: false
  private _userUnknownOriginBinary?: string; 
  public get userUnknownOriginBinary() {
    return this.getStringAttribute('user_unknown_origin_binary');
  }
  public set userUnknownOriginBinary(value: string) {
    this._userUnknownOriginBinary = value;
  }
  public resetUserUnknownOriginBinary() {
    this._userUnknownOriginBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userUnknownOriginBinaryInput() {
    return this._userUnknownOriginBinary;
  }

  // webshell - computed: false, optional: true, required: false
  private _webshell?: string; 
  public get webshell() {
    return this.getStringAttribute('webshell');
  }
  public set webshell(value: string) {
    this._webshell = value;
  }
  public resetWebshell() {
    this._webshell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webshellInput() {
    return this._webshell;
  }

  // wildfire_analysis - computed: false, optional: true, required: false
  private _wildfireAnalysis?: string; 
  public get wildfireAnalysis() {
    return this.getStringAttribute('wildfire_analysis');
  }
  public set wildfireAnalysis(value: string) {
    this._wildfireAnalysis = value;
  }
  public resetWildfireAnalysis() {
    this._wildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisInput() {
    return this._wildfireAnalysis;
  }

  // denied_processes - computed: false, optional: true, required: false
  private _deniedProcesses = new HostRuntimePolicyRuleAntimalwareDeniedProcessesOutputReference(this, "denied_processes");
  public get deniedProcesses() {
    return this._deniedProcesses;
  }
  public putDeniedProcesses(value: HostRuntimePolicyRuleAntimalwareDeniedProcesses) {
    this._deniedProcesses.internalValue = value;
  }
  public resetDeniedProcesses() {
    this._deniedProcesses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedProcessesInput() {
    return this._deniedProcesses.internalValue;
  }
}
export interface HostRuntimePolicyRuleCustomRule {
  /**
  * The action to perform if the custom rule applies. Can be set to 'audit' or 'incident'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#action HostRuntimePolicy#action}
  */
  readonly action?: string;
  /**
  * The effect to be used. Can be set to 'prevent', 'alert', or 'allow'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#effect HostRuntimePolicy#effect}
  */
  readonly effect?: string;
  /**
  * Custom rule number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#id HostRuntimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function hostRuntimePolicyRuleCustomRuleToTerraform(struct?: HostRuntimePolicyRuleCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function hostRuntimePolicyRuleCustomRuleToHclTerraform(struct?: HostRuntimePolicyRuleCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostRuntimePolicyRuleCustomRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._effect = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._effect = value.effect;
      this._id = value.id;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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
}

export class HostRuntimePolicyRuleCustomRuleList extends cdktf.ComplexList {
  public internalValue? : HostRuntimePolicyRuleCustomRule[] | cdktf.IResolvable

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
  public get(index: number): HostRuntimePolicyRuleCustomRuleOutputReference {
    return new HostRuntimePolicyRuleCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostRuntimePolicyRuleDns {
  /**
  * Allowed domains. Wildcard prefixes are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#allowed HostRuntimePolicy#allowed}
  */
  readonly allowed?: string[];
  /**
  * Denied domains. Wildcard prefixes are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#denied HostRuntimePolicy#denied}
  */
  readonly denied?: string[];
  /**
  * The effect to be used. Can be set to 'prevent', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#deny_effect HostRuntimePolicy#deny_effect}
  */
  readonly denyEffect?: string;
  /**
  * The effect to be used when resolving suspicious domains according to Prisma Cloud Compute. Can be set to 'prevent', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#intelligence_feed HostRuntimePolicy#intelligence_feed}
  */
  readonly intelligenceFeed?: string;
}

export function hostRuntimePolicyRuleDnsToTerraform(struct?: HostRuntimePolicyRuleDnsOutputReference | HostRuntimePolicyRuleDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    deny_effect: cdktf.stringToTerraform(struct!.denyEffect),
    intelligence_feed: cdktf.stringToTerraform(struct!.intelligenceFeed),
  }
}


export function hostRuntimePolicyRuleDnsToHclTerraform(struct?: HostRuntimePolicyRuleDnsOutputReference | HostRuntimePolicyRuleDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deny_effect: {
      value: cdktf.stringToHclTerraform(struct!.denyEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intelligence_feed: {
      value: cdktf.stringToHclTerraform(struct!.intelligenceFeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostRuntimePolicyRuleDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._denyEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyEffect = this._denyEffect;
    }
    if (this._intelligenceFeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelligenceFeed = this._intelligenceFeed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowed = undefined;
      this._denied = undefined;
      this._denyEffect = undefined;
      this._intelligenceFeed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowed = value.allowed;
      this._denied = value.denied;
      this._denyEffect = value.denyEffect;
      this._intelligenceFeed = value.intelligenceFeed;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // deny_effect - computed: false, optional: true, required: false
  private _denyEffect?: string; 
  public get denyEffect() {
    return this.getStringAttribute('deny_effect');
  }
  public set denyEffect(value: string) {
    this._denyEffect = value;
  }
  public resetDenyEffect() {
    this._denyEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyEffectInput() {
    return this._denyEffect;
  }

  // intelligence_feed - computed: false, optional: true, required: false
  private _intelligenceFeed?: string; 
  public get intelligenceFeed() {
    return this.getStringAttribute('intelligence_feed');
  }
  public set intelligenceFeed(value: string) {
    this._intelligenceFeed = value;
  }
  public resetIntelligenceFeed() {
    this._intelligenceFeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceFeedInput() {
    return this._intelligenceFeed;
  }
}
export interface HostRuntimePolicyRuleFileIntegrityRule {
  /**
  * List of processes allowed to generate file system events on monitored files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#allowed_processes HostRuntimePolicy#allowed_processes}
  */
  readonly allowedProcesses?: string[];
  /**
  * List of file names to ignore. Pattern matching is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#excluded_files HostRuntimePolicy#excluded_files}
  */
  readonly excludedFiles?: string[];
  /**
  * Whether or not to monitor file metadata changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#metadata HostRuntimePolicy#metadata}
  */
  readonly metadata?: boolean | cdktf.IResolvable;
  /**
  * Path to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#path HostRuntimePolicy#path}
  */
  readonly path?: string;
  /**
  * Whether or not to monitor file reads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#read HostRuntimePolicy#read}
  */
  readonly read?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to recursively monitor files starting at `path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#recursive HostRuntimePolicy#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to monitor file writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#write HostRuntimePolicy#write}
  */
  readonly write?: boolean | cdktf.IResolvable;
}

export function hostRuntimePolicyRuleFileIntegrityRuleToTerraform(struct?: HostRuntimePolicyRuleFileIntegrityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProcesses),
    excluded_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedFiles),
    metadata: cdktf.booleanToTerraform(struct!.metadata),
    path: cdktf.stringToTerraform(struct!.path),
    read: cdktf.booleanToTerraform(struct!.read),
    recursive: cdktf.booleanToTerraform(struct!.recursive),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function hostRuntimePolicyRuleFileIntegrityRuleToHclTerraform(struct?: HostRuntimePolicyRuleFileIntegrityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.booleanToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive: {
      value: cdktf.booleanToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleFileIntegrityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostRuntimePolicyRuleFileIntegrityRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProcesses = this._allowedProcesses;
    }
    if (this._excludedFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedFiles = this._excludedFiles;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._recursive !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursive = this._recursive;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleFileIntegrityRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedProcesses = undefined;
      this._excludedFiles = undefined;
      this._metadata = undefined;
      this._path = undefined;
      this._read = undefined;
      this._recursive = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedProcesses = value.allowedProcesses;
      this._excludedFiles = value.excludedFiles;
      this._metadata = value.metadata;
      this._path = value.path;
      this._read = value.read;
      this._recursive = value.recursive;
      this._write = value.write;
    }
  }

  // allowed_processes - computed: false, optional: true, required: false
  private _allowedProcesses?: string[]; 
  public get allowedProcesses() {
    return this.getListAttribute('allowed_processes');
  }
  public set allowedProcesses(value: string[]) {
    this._allowedProcesses = value;
  }
  public resetAllowedProcesses() {
    this._allowedProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProcessesInput() {
    return this._allowedProcesses;
  }

  // excluded_files - computed: false, optional: true, required: false
  private _excludedFiles?: string[]; 
  public get excludedFiles() {
    return this.getListAttribute('excluded_files');
  }
  public set excludedFiles(value: string[]) {
    this._excludedFiles = value;
  }
  public resetExcludedFiles() {
    this._excludedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedFilesInput() {
    return this._excludedFiles;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: boolean | cdktf.IResolvable; 
  public get metadata() {
    return this.getBooleanAttribute('metadata');
  }
  public set metadata(value: boolean | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read - computed: false, optional: true, required: false
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // write - computed: false, optional: true, required: false
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

export class HostRuntimePolicyRuleFileIntegrityRuleList extends cdktf.ComplexList {
  public internalValue? : HostRuntimePolicyRuleFileIntegrityRule[] | cdktf.IResolvable

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
  public get(index: number): HostRuntimePolicyRuleFileIntegrityRuleOutputReference {
    return new HostRuntimePolicyRuleFileIntegrityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostRuntimePolicyRuleLogInspectionRule {
  /**
  * Path to the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#path HostRuntimePolicy#path}
  */
  readonly path?: string;
  /**
  * List of regular expressions to use when inspecting the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#regex HostRuntimePolicy#regex}
  */
  readonly regex?: string[];
}

export function hostRuntimePolicyRuleLogInspectionRuleToTerraform(struct?: HostRuntimePolicyRuleLogInspectionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regex),
  }
}


export function hostRuntimePolicyRuleLogInspectionRuleToHclTerraform(struct?: HostRuntimePolicyRuleLogInspectionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleLogInspectionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostRuntimePolicyRuleLogInspectionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleLogInspectionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string[]; 
  public get regex() {
    return this.getListAttribute('regex');
  }
  public set regex(value: string[]) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class HostRuntimePolicyRuleLogInspectionRuleList extends cdktf.ComplexList {
  public internalValue? : HostRuntimePolicyRuleLogInspectionRule[] | cdktf.IResolvable

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
  public get(index: number): HostRuntimePolicyRuleLogInspectionRuleOutputReference {
    return new HostRuntimePolicyRuleLogInspectionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostRuntimePolicyRuleNetworkDeniedListeningPort {
  /**
  * Whether or not to deny the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#deny HostRuntimePolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * End of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#end HostRuntimePolicy#end}
  */
  readonly end?: number;
  /**
  * Start of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#start HostRuntimePolicy#start}
  */
  readonly start?: number;
}

export function hostRuntimePolicyRuleNetworkDeniedListeningPortToTerraform(struct?: HostRuntimePolicyRuleNetworkDeniedListeningPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.booleanToTerraform(struct!.deny),
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function hostRuntimePolicyRuleNetworkDeniedListeningPortToHclTerraform(struct?: HostRuntimePolicyRuleNetworkDeniedListeningPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleNetworkDeniedListeningPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostRuntimePolicyRuleNetworkDeniedListeningPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleNetworkDeniedListeningPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class HostRuntimePolicyRuleNetworkDeniedListeningPortList extends cdktf.ComplexList {
  public internalValue? : HostRuntimePolicyRuleNetworkDeniedListeningPort[] | cdktf.IResolvable

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
  public get(index: number): HostRuntimePolicyRuleNetworkDeniedListeningPortOutputReference {
    return new HostRuntimePolicyRuleNetworkDeniedListeningPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostRuntimePolicyRuleNetworkDeniedOutboundPort {
  /**
  * Whether or not to deny the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#deny HostRuntimePolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * End of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#end HostRuntimePolicy#end}
  */
  readonly end?: number;
  /**
  * Start of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#start HostRuntimePolicy#start}
  */
  readonly start?: number;
}

export function hostRuntimePolicyRuleNetworkDeniedOutboundPortToTerraform(struct?: HostRuntimePolicyRuleNetworkDeniedOutboundPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.booleanToTerraform(struct!.deny),
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function hostRuntimePolicyRuleNetworkDeniedOutboundPortToHclTerraform(struct?: HostRuntimePolicyRuleNetworkDeniedOutboundPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleNetworkDeniedOutboundPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostRuntimePolicyRuleNetworkDeniedOutboundPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleNetworkDeniedOutboundPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class HostRuntimePolicyRuleNetworkDeniedOutboundPortList extends cdktf.ComplexList {
  public internalValue? : HostRuntimePolicyRuleNetworkDeniedOutboundPort[] | cdktf.IResolvable

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
  public get(index: number): HostRuntimePolicyRuleNetworkDeniedOutboundPortOutputReference {
    return new HostRuntimePolicyRuleNetworkDeniedOutboundPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostRuntimePolicyRuleNetwork {
  /**
  * List of allowed outbound IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#allowed_outbound_ips HostRuntimePolicy#allowed_outbound_ips}
  */
  readonly allowedOutboundIps?: string[];
  /**
  * The effect to be used when connecting to suspicious IPs according to custom feeds. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#custom_feed HostRuntimePolicy#custom_feed}
  */
  readonly customFeed?: string;
  /**
  * List of denied outbound IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#denied_outbound_ips HostRuntimePolicy#denied_outbound_ips}
  */
  readonly deniedOutboundIps?: string[];
  /**
  * The effect to be used. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#deny_effect HostRuntimePolicy#deny_effect}
  */
  readonly denyEffect?: string;
  /**
  * The effect to be used when connecting to suspicious IPs according to Prisma Cloud Compute. Can be set to 'alert' or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#intelligence_feed HostRuntimePolicy#intelligence_feed}
  */
  readonly intelligenceFeed?: string;
  /**
  * denied_listening_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#denied_listening_port HostRuntimePolicy#denied_listening_port}
  */
  readonly deniedListeningPort?: HostRuntimePolicyRuleNetworkDeniedListeningPort[] | cdktf.IResolvable;
  /**
  * denied_outbound_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#denied_outbound_port HostRuntimePolicy#denied_outbound_port}
  */
  readonly deniedOutboundPort?: HostRuntimePolicyRuleNetworkDeniedOutboundPort[] | cdktf.IResolvable;
}

export function hostRuntimePolicyRuleNetworkToTerraform(struct?: HostRuntimePolicyRuleNetworkOutputReference | HostRuntimePolicyRuleNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_outbound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOutboundIps),
    custom_feed: cdktf.stringToTerraform(struct!.customFeed),
    denied_outbound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedOutboundIps),
    deny_effect: cdktf.stringToTerraform(struct!.denyEffect),
    intelligence_feed: cdktf.stringToTerraform(struct!.intelligenceFeed),
    denied_listening_port: cdktf.listMapper(hostRuntimePolicyRuleNetworkDeniedListeningPortToTerraform, true)(struct!.deniedListeningPort),
    denied_outbound_port: cdktf.listMapper(hostRuntimePolicyRuleNetworkDeniedOutboundPortToTerraform, true)(struct!.deniedOutboundPort),
  }
}


export function hostRuntimePolicyRuleNetworkToHclTerraform(struct?: HostRuntimePolicyRuleNetworkOutputReference | HostRuntimePolicyRuleNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_outbound_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOutboundIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_feed: {
      value: cdktf.stringToHclTerraform(struct!.customFeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denied_outbound_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedOutboundIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deny_effect: {
      value: cdktf.stringToHclTerraform(struct!.denyEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intelligence_feed: {
      value: cdktf.stringToHclTerraform(struct!.intelligenceFeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denied_listening_port: {
      value: cdktf.listMapperHcl(hostRuntimePolicyRuleNetworkDeniedListeningPortToHclTerraform, true)(struct!.deniedListeningPort),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleNetworkDeniedListeningPortList",
    },
    denied_outbound_port: {
      value: cdktf.listMapperHcl(hostRuntimePolicyRuleNetworkDeniedOutboundPortToHclTerraform, true)(struct!.deniedOutboundPort),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleNetworkDeniedOutboundPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostRuntimePolicyRuleNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOutboundIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOutboundIps = this._allowedOutboundIps;
    }
    if (this._customFeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFeed = this._customFeed;
    }
    if (this._deniedOutboundIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedOutboundIps = this._deniedOutboundIps;
    }
    if (this._denyEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyEffect = this._denyEffect;
    }
    if (this._intelligenceFeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelligenceFeed = this._intelligenceFeed;
    }
    if (this._deniedListeningPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedListeningPort = this._deniedListeningPort?.internalValue;
    }
    if (this._deniedOutboundPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedOutboundPort = this._deniedOutboundPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRuleNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedOutboundIps = undefined;
      this._customFeed = undefined;
      this._deniedOutboundIps = undefined;
      this._denyEffect = undefined;
      this._intelligenceFeed = undefined;
      this._deniedListeningPort.internalValue = undefined;
      this._deniedOutboundPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedOutboundIps = value.allowedOutboundIps;
      this._customFeed = value.customFeed;
      this._deniedOutboundIps = value.deniedOutboundIps;
      this._denyEffect = value.denyEffect;
      this._intelligenceFeed = value.intelligenceFeed;
      this._deniedListeningPort.internalValue = value.deniedListeningPort;
      this._deniedOutboundPort.internalValue = value.deniedOutboundPort;
    }
  }

  // allowed_outbound_ips - computed: false, optional: true, required: false
  private _allowedOutboundIps?: string[]; 
  public get allowedOutboundIps() {
    return this.getListAttribute('allowed_outbound_ips');
  }
  public set allowedOutboundIps(value: string[]) {
    this._allowedOutboundIps = value;
  }
  public resetAllowedOutboundIps() {
    this._allowedOutboundIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOutboundIpsInput() {
    return this._allowedOutboundIps;
  }

  // custom_feed - computed: false, optional: true, required: false
  private _customFeed?: string; 
  public get customFeed() {
    return this.getStringAttribute('custom_feed');
  }
  public set customFeed(value: string) {
    this._customFeed = value;
  }
  public resetCustomFeed() {
    this._customFeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFeedInput() {
    return this._customFeed;
  }

  // denied_outbound_ips - computed: false, optional: true, required: false
  private _deniedOutboundIps?: string[]; 
  public get deniedOutboundIps() {
    return this.getListAttribute('denied_outbound_ips');
  }
  public set deniedOutboundIps(value: string[]) {
    this._deniedOutboundIps = value;
  }
  public resetDeniedOutboundIps() {
    this._deniedOutboundIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedOutboundIpsInput() {
    return this._deniedOutboundIps;
  }

  // deny_effect - computed: false, optional: true, required: false
  private _denyEffect?: string; 
  public get denyEffect() {
    return this.getStringAttribute('deny_effect');
  }
  public set denyEffect(value: string) {
    this._denyEffect = value;
  }
  public resetDenyEffect() {
    this._denyEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyEffectInput() {
    return this._denyEffect;
  }

  // intelligence_feed - computed: false, optional: true, required: false
  private _intelligenceFeed?: string; 
  public get intelligenceFeed() {
    return this.getStringAttribute('intelligence_feed');
  }
  public set intelligenceFeed(value: string) {
    this._intelligenceFeed = value;
  }
  public resetIntelligenceFeed() {
    this._intelligenceFeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceFeedInput() {
    return this._intelligenceFeed;
  }

  // denied_listening_port - computed: false, optional: true, required: false
  private _deniedListeningPort = new HostRuntimePolicyRuleNetworkDeniedListeningPortList(this, "denied_listening_port", false);
  public get deniedListeningPort() {
    return this._deniedListeningPort;
  }
  public putDeniedListeningPort(value: HostRuntimePolicyRuleNetworkDeniedListeningPort[] | cdktf.IResolvable) {
    this._deniedListeningPort.internalValue = value;
  }
  public resetDeniedListeningPort() {
    this._deniedListeningPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedListeningPortInput() {
    return this._deniedListeningPort.internalValue;
  }

  // denied_outbound_port - computed: false, optional: true, required: false
  private _deniedOutboundPort = new HostRuntimePolicyRuleNetworkDeniedOutboundPortList(this, "denied_outbound_port", false);
  public get deniedOutboundPort() {
    return this._deniedOutboundPort;
  }
  public putDeniedOutboundPort(value: HostRuntimePolicyRuleNetworkDeniedOutboundPort[] | cdktf.IResolvable) {
    this._deniedOutboundPort.internalValue = value;
  }
  public resetDeniedOutboundPort() {
    this._deniedOutboundPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedOutboundPortInput() {
    return this._deniedOutboundPort.internalValue;
  }
}
export interface HostRuntimePolicyRule {
  /**
  * Collections used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#collections HostRuntimePolicy#collections}
  */
  readonly collections?: string[];
  /**
  * Whether or not to disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#disabled HostRuntimePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Unique name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#name HostRuntimePolicy#name}
  */
  readonly name?: string;
  /**
  * Free-form text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#notes HostRuntimePolicy#notes}
  */
  readonly notes?: string;
  /**
  * activities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#activities HostRuntimePolicy#activities}
  */
  readonly activities?: HostRuntimePolicyRuleActivities;
  /**
  * antimalware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#antimalware HostRuntimePolicy#antimalware}
  */
  readonly antimalware?: HostRuntimePolicyRuleAntimalware;
  /**
  * custom_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#custom_rule HostRuntimePolicy#custom_rule}
  */
  readonly customRule?: HostRuntimePolicyRuleCustomRule[] | cdktf.IResolvable;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#dns HostRuntimePolicy#dns}
  */
  readonly dns?: HostRuntimePolicyRuleDns;
  /**
  * file_integrity_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#file_integrity_rule HostRuntimePolicy#file_integrity_rule}
  */
  readonly fileIntegrityRule?: HostRuntimePolicyRuleFileIntegrityRule[] | cdktf.IResolvable;
  /**
  * log_inspection_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#log_inspection_rule HostRuntimePolicy#log_inspection_rule}
  */
  readonly logInspectionRule?: HostRuntimePolicyRuleLogInspectionRule[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#network HostRuntimePolicy#network}
  */
  readonly network?: HostRuntimePolicyRuleNetwork;
}

export function hostRuntimePolicyRuleToTerraform(struct?: HostRuntimePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collections),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    activities: hostRuntimePolicyRuleActivitiesToTerraform(struct!.activities),
    antimalware: hostRuntimePolicyRuleAntimalwareToTerraform(struct!.antimalware),
    custom_rule: cdktf.listMapper(hostRuntimePolicyRuleCustomRuleToTerraform, true)(struct!.customRule),
    dns: hostRuntimePolicyRuleDnsToTerraform(struct!.dns),
    file_integrity_rule: cdktf.listMapper(hostRuntimePolicyRuleFileIntegrityRuleToTerraform, true)(struct!.fileIntegrityRule),
    log_inspection_rule: cdktf.listMapper(hostRuntimePolicyRuleLogInspectionRuleToTerraform, true)(struct!.logInspectionRule),
    network: hostRuntimePolicyRuleNetworkToTerraform(struct!.network),
  }
}


export function hostRuntimePolicyRuleToHclTerraform(struct?: HostRuntimePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activities: {
      value: hostRuntimePolicyRuleActivitiesToHclTerraform(struct!.activities),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleActivitiesList",
    },
    antimalware: {
      value: hostRuntimePolicyRuleAntimalwareToHclTerraform(struct!.antimalware),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleAntimalwareList",
    },
    custom_rule: {
      value: cdktf.listMapperHcl(hostRuntimePolicyRuleCustomRuleToHclTerraform, true)(struct!.customRule),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleCustomRuleList",
    },
    dns: {
      value: hostRuntimePolicyRuleDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleDnsList",
    },
    file_integrity_rule: {
      value: cdktf.listMapperHcl(hostRuntimePolicyRuleFileIntegrityRuleToHclTerraform, true)(struct!.fileIntegrityRule),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleFileIntegrityRuleList",
    },
    log_inspection_rule: {
      value: cdktf.listMapperHcl(hostRuntimePolicyRuleLogInspectionRuleToHclTerraform, true)(struct!.logInspectionRule),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleLogInspectionRuleList",
    },
    network: {
      value: hostRuntimePolicyRuleNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "HostRuntimePolicyRuleNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostRuntimePolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostRuntimePolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collections !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._activities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activities = this._activities?.internalValue;
    }
    if (this._antimalware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antimalware = this._antimalware?.internalValue;
    }
    if (this._customRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRule = this._customRule?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._fileIntegrityRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileIntegrityRule = this._fileIntegrityRule?.internalValue;
    }
    if (this._logInspectionRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInspectionRule = this._logInspectionRule?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostRuntimePolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collections = undefined;
      this._disabled = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._activities.internalValue = undefined;
      this._antimalware.internalValue = undefined;
      this._customRule.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._fileIntegrityRule.internalValue = undefined;
      this._logInspectionRule.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collections = value.collections;
      this._disabled = value.disabled;
      this._name = value.name;
      this._notes = value.notes;
      this._activities.internalValue = value.activities;
      this._antimalware.internalValue = value.antimalware;
      this._customRule.internalValue = value.customRule;
      this._dns.internalValue = value.dns;
      this._fileIntegrityRule.internalValue = value.fileIntegrityRule;
      this._logInspectionRule.internalValue = value.logInspectionRule;
      this._network.internalValue = value.network;
    }
  }

  // collections - computed: false, optional: true, required: false
  private _collections?: string[]; 
  public get collections() {
    return this.getListAttribute('collections');
  }
  public set collections(value: string[]) {
    this._collections = value;
  }
  public resetCollections() {
    this._collections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // activities - computed: false, optional: true, required: false
  private _activities = new HostRuntimePolicyRuleActivitiesOutputReference(this, "activities");
  public get activities() {
    return this._activities;
  }
  public putActivities(value: HostRuntimePolicyRuleActivities) {
    this._activities.internalValue = value;
  }
  public resetActivities() {
    this._activities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitiesInput() {
    return this._activities.internalValue;
  }

  // antimalware - computed: false, optional: true, required: false
  private _antimalware = new HostRuntimePolicyRuleAntimalwareOutputReference(this, "antimalware");
  public get antimalware() {
    return this._antimalware;
  }
  public putAntimalware(value: HostRuntimePolicyRuleAntimalware) {
    this._antimalware.internalValue = value;
  }
  public resetAntimalware() {
    this._antimalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antimalwareInput() {
    return this._antimalware.internalValue;
  }

  // custom_rule - computed: false, optional: true, required: false
  private _customRule = new HostRuntimePolicyRuleCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }
  public putCustomRule(value: HostRuntimePolicyRuleCustomRule[] | cdktf.IResolvable) {
    this._customRule.internalValue = value;
  }
  public resetCustomRule() {
    this._customRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new HostRuntimePolicyRuleDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: HostRuntimePolicyRuleDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // file_integrity_rule - computed: false, optional: true, required: false
  private _fileIntegrityRule = new HostRuntimePolicyRuleFileIntegrityRuleList(this, "file_integrity_rule", false);
  public get fileIntegrityRule() {
    return this._fileIntegrityRule;
  }
  public putFileIntegrityRule(value: HostRuntimePolicyRuleFileIntegrityRule[] | cdktf.IResolvable) {
    this._fileIntegrityRule.internalValue = value;
  }
  public resetFileIntegrityRule() {
    this._fileIntegrityRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIntegrityRuleInput() {
    return this._fileIntegrityRule.internalValue;
  }

  // log_inspection_rule - computed: false, optional: true, required: false
  private _logInspectionRule = new HostRuntimePolicyRuleLogInspectionRuleList(this, "log_inspection_rule", false);
  public get logInspectionRule() {
    return this._logInspectionRule;
  }
  public putLogInspectionRule(value: HostRuntimePolicyRuleLogInspectionRule[] | cdktf.IResolvable) {
    this._logInspectionRule.internalValue = value;
  }
  public resetLogInspectionRule() {
    this._logInspectionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInspectionRuleInput() {
    return this._logInspectionRule.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new HostRuntimePolicyRuleNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: HostRuntimePolicyRuleNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}

export class HostRuntimePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : HostRuntimePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): HostRuntimePolicyRuleOutputReference {
    return new HostRuntimePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy prismacloudcompute_host_runtime_policy}
*/
export class HostRuntimePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_host_runtime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostRuntimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostRuntimePolicy to import
  * @param importFromId The id of the existing HostRuntimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostRuntimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_host_runtime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/host_runtime_policy prismacloudcompute_host_runtime_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostRuntimePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HostRuntimePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_host_runtime_policy',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new HostRuntimePolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: HostRuntimePolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule: cdktf.listMapper(hostRuntimePolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule: {
        value: cdktf.listMapperHcl(hostRuntimePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostRuntimePolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
