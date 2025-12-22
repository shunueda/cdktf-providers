import * as cdktf from 'cdktf';
import { DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilities,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilitiesToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilitiesToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilitiesOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptions,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptionsToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptionsToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptionsOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfile,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfileToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfileToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfileOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContext,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContextToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContextToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContextOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContext,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContextToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContextToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContextOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContext,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContextToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContextToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContextOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContext,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContextToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContextToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContextOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptions,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptionsToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptionsToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptionsOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptions,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptionsToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptionsToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptionsOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplates,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplatesToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplatesToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplatesList,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptions,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptionsToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptionsToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptionsOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadata,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadataToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadataToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadataOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptions,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptionsToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptionsToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptionsOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResources,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResourcesToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResourcesToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResourcesOutputReference,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptions,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptionsToTerraform,
dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptionsToHclTerraform,
DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptionsOutputReference } from './structs0'
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#host_process DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#allow_privilege_escalation DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#capabilities DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#capabilities}
  */
  readonly capabilities?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilities;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#privileged DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#proc_mount DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#read_only_root_filesystem DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_group DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_non_root DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#se_linux_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#seccomp_profile DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfile;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#windows_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities {
  /**
  * Added capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#add DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#drop DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilitiesToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#level DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#role DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#user DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#localhost_profile DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfileToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#host_process DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#allow_privilege_escalation DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#capabilities DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#capabilities}
  */
  readonly capabilities?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#privileged DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#proc_mount DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#read_only_root_filesystem DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_group DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_non_root DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#se_linux_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#seccomp_profile DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#windows_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#level DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#role DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#user DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#localhost_profile DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfileToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#value DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsOutputReference {
    return new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#host_process DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#fs_group DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#fs_group_change_policy DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_group DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_non_root DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#se_linux_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#seccomp_profile DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#supplemental_groups DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#sysctls DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#sysctls}
  */
  readonly sysctls?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#windows_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities {
  /**
  * Added capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#add DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#drop DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilitiesToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#level DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#role DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#user DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#localhost_profile DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfileToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#gmsa_credential_spec_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#host_process DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#allow_privilege_escalation DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#capabilities DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#capabilities}
  */
  readonly capabilities?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#privileged DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#proc_mount DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#read_only_root_filesystem DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_group DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_non_root DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#run_as_user DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#se_linux_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#seccomp_profile DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#windows_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions {
  /**
  * Security Context to apply to the agent proxy container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#agent_proxy_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#agent_proxy_security_context}
  */
  readonly agentProxySecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContext;
  /**
  * Security Context to apply to the auth proxy container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#auth_proxy_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#auth_proxy_security_context}
  */
  readonly authProxySecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContext;
  /**
  * Security Context to apply to the Cryostat application container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#core_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#core_security_context}
  */
  readonly coreSecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContext;
  /**
  * Security Context to apply to the JFR Data Source container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#data_source_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#data_source_security_context}
  */
  readonly dataSourceSecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContext;
  /**
  * Security Context to apply to the database container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#database_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#database_security_context}
  */
  readonly databaseSecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext;
  /**
  * Security Context to apply to the Grafana container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#grafana_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#grafana_security_context}
  */
  readonly grafanaSecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext;
  /**
  * Security Context to apply to the Cryostat pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#pod_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext;
  /**
  * Security Context to apply to the storage container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#storage_security_context DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#storage_security_context}
  */
  readonly storageSecurityContext?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_proxy_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContextToTerraform(struct!.agentProxySecurityContext),
    auth_proxy_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContextToTerraform(struct!.authProxySecurityContext),
    core_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContextToTerraform(struct!.coreSecurityContext),
    data_source_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContextToTerraform(struct!.dataSourceSecurityContext),
    database_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextToTerraform(struct!.databaseSecurityContext),
    grafana_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextToTerraform(struct!.grafanaSecurityContext),
    pod_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextToTerraform(struct!.podSecurityContext),
    storage_security_context: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextToTerraform(struct!.storageSecurityContext),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_proxy_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContextToHclTerraform(struct!.agentProxySecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContext",
    },
    auth_proxy_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContextToHclTerraform(struct!.authProxySecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContext",
    },
    core_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContextToHclTerraform(struct!.coreSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContext",
    },
    data_source_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContextToHclTerraform(struct!.dataSourceSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContext",
    },
    database_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextToHclTerraform(struct!.databaseSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext",
    },
    grafana_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextToHclTerraform(struct!.grafanaSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext",
    },
    pod_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext",
    },
    storage_security_context: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextToHclTerraform(struct!.storageSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentProxySecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentProxySecurityContext = this._agentProxySecurityContext?.internalValue;
    }
    if (this._authProxySecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProxySecurityContext = this._authProxySecurityContext?.internalValue;
    }
    if (this._coreSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreSecurityContext = this._coreSecurityContext?.internalValue;
    }
    if (this._dataSourceSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceSecurityContext = this._dataSourceSecurityContext?.internalValue;
    }
    if (this._databaseSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSecurityContext = this._databaseSecurityContext?.internalValue;
    }
    if (this._grafanaSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaSecurityContext = this._grafanaSecurityContext?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._storageSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSecurityContext = this._storageSecurityContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentProxySecurityContext.internalValue = undefined;
      this._authProxySecurityContext.internalValue = undefined;
      this._coreSecurityContext.internalValue = undefined;
      this._dataSourceSecurityContext.internalValue = undefined;
      this._databaseSecurityContext.internalValue = undefined;
      this._grafanaSecurityContext.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._storageSecurityContext.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentProxySecurityContext.internalValue = value.agentProxySecurityContext;
      this._authProxySecurityContext.internalValue = value.authProxySecurityContext;
      this._coreSecurityContext.internalValue = value.coreSecurityContext;
      this._dataSourceSecurityContext.internalValue = value.dataSourceSecurityContext;
      this._databaseSecurityContext.internalValue = value.databaseSecurityContext;
      this._grafanaSecurityContext.internalValue = value.grafanaSecurityContext;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._storageSecurityContext.internalValue = value.storageSecurityContext;
    }
  }

  // agent_proxy_security_context - computed: false, optional: true, required: false
  private _agentProxySecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContextOutputReference(this, "agent_proxy_security_context");
  public get agentProxySecurityContext() {
    return this._agentProxySecurityContext;
  }
  public putAgentProxySecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAgentProxySecurityContext) {
    this._agentProxySecurityContext.internalValue = value;
  }
  public resetAgentProxySecurityContext() {
    this._agentProxySecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentProxySecurityContextInput() {
    return this._agentProxySecurityContext.internalValue;
  }

  // auth_proxy_security_context - computed: false, optional: true, required: false
  private _authProxySecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContextOutputReference(this, "auth_proxy_security_context");
  public get authProxySecurityContext() {
    return this._authProxySecurityContext;
  }
  public putAuthProxySecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsAuthProxySecurityContext) {
    this._authProxySecurityContext.internalValue = value;
  }
  public resetAuthProxySecurityContext() {
    this._authProxySecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProxySecurityContextInput() {
    return this._authProxySecurityContext.internalValue;
  }

  // core_security_context - computed: false, optional: true, required: false
  private _coreSecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContextOutputReference(this, "core_security_context");
  public get coreSecurityContext() {
    return this._coreSecurityContext;
  }
  public putCoreSecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsCoreSecurityContext) {
    this._coreSecurityContext.internalValue = value;
  }
  public resetCoreSecurityContext() {
    this._coreSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSecurityContextInput() {
    return this._coreSecurityContext.internalValue;
  }

  // data_source_security_context - computed: false, optional: true, required: false
  private _dataSourceSecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContextOutputReference(this, "data_source_security_context");
  public get dataSourceSecurityContext() {
    return this._dataSourceSecurityContext;
  }
  public putDataSourceSecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDataSourceSecurityContext) {
    this._dataSourceSecurityContext.internalValue = value;
  }
  public resetDataSourceSecurityContext() {
    this._dataSourceSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceSecurityContextInput() {
    return this._dataSourceSecurityContext.internalValue;
  }

  // database_security_context - computed: false, optional: true, required: false
  private _databaseSecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContextOutputReference(this, "database_security_context");
  public get databaseSecurityContext() {
    return this._databaseSecurityContext;
  }
  public putDatabaseSecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsDatabaseSecurityContext) {
    this._databaseSecurityContext.internalValue = value;
  }
  public resetDatabaseSecurityContext() {
    this._databaseSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSecurityContextInput() {
    return this._databaseSecurityContext.internalValue;
  }

  // grafana_security_context - computed: false, optional: true, required: false
  private _grafanaSecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContextOutputReference(this, "grafana_security_context");
  public get grafanaSecurityContext() {
    return this._grafanaSecurityContext;
  }
  public putGrafanaSecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsGrafanaSecurityContext) {
    this._grafanaSecurityContext.internalValue = value;
  }
  public resetGrafanaSecurityContext() {
    this._grafanaSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaSecurityContextInput() {
    return this._grafanaSecurityContext.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // storage_security_context - computed: false, optional: true, required: false
  private _storageSecurityContext = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContextOutputReference(this, "storage_security_context");
  public get storageSecurityContext() {
    return this._storageSecurityContext;
  }
  public putStorageSecurityContext(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsStorageSecurityContext) {
    this._storageSecurityContext.internalValue = value;
  }
  public resetStorageSecurityContext() {
    this._storageSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSecurityContextInput() {
    return this._storageSecurityContext.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig {
  /**
  * Annotations to add to the service during its creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#annotations DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * HTTP port number for the Cryostat agent API service. Defaults to 8282.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#http_port DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#http_port}
  */
  readonly httpPort?: number;
  /**
  * Labels to add to the service during its creation. The labels with keys 'app' and 'component' are reserved for use by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#labels DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Type of service to create. Defaults to 'ClusterIP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#service_type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfigToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfigToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._httpPort = undefined;
      this._labels = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._httpPort = value.httpPort;
      this._labels = value.labels;
      this._serviceType = value.serviceType;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig {
  /**
  * Annotations to add to the service during its creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#annotations DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * HTTP port number for the Cryostat application service. Defaults to 8181.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#http_port DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#http_port}
  */
  readonly httpPort?: number;
  /**
  * Labels to add to the service during its creation. The labels with keys 'app' and 'component' are reserved for use by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#labels DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Type of service to create. Defaults to 'ClusterIP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#service_type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfigToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfigToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._httpPort = undefined;
      this._labels = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._httpPort = value.httpPort;
      this._labels = value.labels;
      this._serviceType = value.serviceType;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig {
  /**
  * Annotations to add to the service during its creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#annotations DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * HTTP port number for the cryostat-reports service. Defaults to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#http_port DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#http_port}
  */
  readonly httpPort?: number;
  /**
  * Labels to add to the service during its creation. The labels with keys 'app' and 'component' are reserved for use by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#labels DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Type of service to create. Defaults to 'ClusterIP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#service_type DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfigToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfigToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._httpPort = undefined;
      this._labels = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._httpPort = value.httpPort;
      this._labels = value.labels;
      this._serviceType = value.serviceType;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions {
  /**
  * Specification for the service responsible for agents to communicate with Cryostat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#agent_config DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#agent_config}
  */
  readonly agentConfig?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig;
  /**
  * Specification for the service responsible for the Cryostat application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#core_config DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#core_config}
  */
  readonly coreConfig?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig;
  /**
  * Specification for the service responsible for the cryostat-reports sidecars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#reports_config DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#reports_config}
  */
  readonly reportsConfig?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_config: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfigToTerraform(struct!.agentConfig),
    core_config: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfigToTerraform(struct!.coreConfig),
    reports_config: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfigToTerraform(struct!.reportsConfig),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_config: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfigToHclTerraform(struct!.agentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig",
    },
    core_config: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfigToHclTerraform(struct!.coreConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig",
    },
    reports_config: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfigToHclTerraform(struct!.reportsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfig = this._agentConfig?.internalValue;
    }
    if (this._coreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreConfig = this._coreConfig?.internalValue;
    }
    if (this._reportsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportsConfig = this._reportsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentConfig.internalValue = undefined;
      this._coreConfig.internalValue = undefined;
      this._reportsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentConfig.internalValue = value.agentConfig;
      this._coreConfig.internalValue = value.coreConfig;
      this._reportsConfig.internalValue = value.reportsConfig;
    }
  }

  // agent_config - computed: false, optional: true, required: false
  private _agentConfig = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfigOutputReference(this, "agent_config");
  public get agentConfig() {
    return this._agentConfig;
  }
  public putAgentConfig(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsAgentConfig) {
    this._agentConfig.internalValue = value;
  }
  public resetAgentConfig() {
    this._agentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigInput() {
    return this._agentConfig.internalValue;
  }

  // core_config - computed: false, optional: true, required: false
  private _coreConfig = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfigOutputReference(this, "core_config");
  public get coreConfig() {
    return this._coreConfig;
  }
  public putCoreConfig(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsCoreConfig) {
    this._coreConfig.internalValue = value;
  }
  public resetCoreConfig() {
    this._coreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreConfigInput() {
    return this._coreConfig.internalValue;
  }

  // reports_config - computed: false, optional: true, required: false
  private _reportsConfig = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfigOutputReference(this, "reports_config");
  public get reportsConfig() {
    return this._reportsConfig;
  }
  public putReportsConfig(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsReportsConfig) {
    this._reportsConfig.internalValue = value;
  }
  public resetReportsConfig() {
    this._reportsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportsConfigInput() {
    return this._reportsConfig.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir {
  /**
  * When enabled, Cryostat will use EmptyDir volumes instead of a Persistent Volume Claim. Any PVC configurations will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#enabled DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Unless specified, the emptyDir volume will be mounted on the same storage medium backing the node. Setting this field to 'Memory' will mount the emptyDir on a tmpfs (RAM-backed filesystem).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#medium DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#medium}
  */
  readonly medium?: string;
  /**
  * The maximum memory limit for the emptyDir. Default is unbounded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#size_limit DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDirToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDirToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#api_group DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#kind DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#api_group DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#kind DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#namespace DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRefToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRefToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsOutputReference {
    return new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#claims DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#claims}
  */
  readonly claims?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#limits DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#requests DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#key DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#operator DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#values DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#match_expressions DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#match_labels DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#access_modes DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#data_source DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#data_source}
  */
  readonly dataSource?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#data_source_ref DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#resources DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#resources}
  */
  readonly resources?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#selector DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#selector}
  */
  readonly selector?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#storage_class_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#volume_mode DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#volume_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef",
    },
    resources: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources",
    },
    selector: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc {
  /**
  * Annotations to add to the Persistent Volume Claim during its creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#annotations DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to add to the Persistent Volume Claim during its creation. The label with key 'app' is reserved for use by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#labels DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Spec for a Persistent Volume Claim, whose options will override the defaults used by the operator. Unless overriden, the PVC will be created with the default Storage Class and 500MiB of storage. Once the operator has created the PVC, changes to this field have no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#spec DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    spec: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._spec.internalValue = value.spec;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions {
  /**
  * Configuration for an EmptyDir to be created by the operator instead of a PVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#empty_dir DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir;
  /**
  * Configuration for the Persistent Volume Claim to be created by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#pvc DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#pvc}
  */
  readonly pvc?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    empty_dir: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDirToTerraform(struct!.emptyDir),
    pvc: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcToTerraform(struct!.pvc),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    empty_dir: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir",
    },
    pvc: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcToHclTerraform(struct!.pvc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._pvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._pvc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emptyDir.internalValue = value.emptyDir;
      this._pvc.internalValue = value.pvc;
    }
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // pvc - computed: false, optional: true, required: false
  private _pvc = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvcOutputReference(this, "pvc");
  public get pvc() {
    return this._pvc;
  }
  public putPvc(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsPvc) {
    this._pvc.internalValue = value;
  }
  public resetPvc() {
    this._pvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc.internalValue;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions {
  /**
  * The maximum number of target connections to cache. Use '-1' for an unlimited cache size (TTL expiration only). Defaults to '-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#target_cache_size DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#target_cache_size}
  */
  readonly targetCacheSize?: number;
  /**
  * The time to live (in seconds) for cached target connections. Defaults to '10'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#target_cache_ttl DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#target_cache_ttl}
  */
  readonly targetCacheTtl?: number;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_cache_size: cdktf.numberToTerraform(struct!.targetCacheSize),
    target_cache_ttl: cdktf.numberToTerraform(struct!.targetCacheTtl),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.targetCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.targetCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCacheSize = this._targetCacheSize;
    }
    if (this._targetCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCacheTtl = this._targetCacheTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetCacheSize = undefined;
      this._targetCacheTtl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetCacheSize = value.targetCacheSize;
      this._targetCacheTtl = value.targetCacheTtl;
    }
  }

  // target_cache_size - computed: false, optional: true, required: false
  private _targetCacheSize?: number; 
  public get targetCacheSize() {
    return this.getNumberAttribute('target_cache_size');
  }
  public set targetCacheSize(value: number) {
    this._targetCacheSize = value;
  }
  public resetTargetCacheSize() {
    this._targetCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCacheSizeInput() {
    return this._targetCacheSize;
  }

  // target_cache_ttl - computed: false, optional: true, required: false
  private _targetCacheTtl?: number; 
  public get targetCacheTtl() {
    return this.getNumberAttribute('target_cache_ttl');
  }
  public set targetCacheTtl(value: number) {
    this._targetCacheTtl = value;
  }
  public resetTargetCacheTtl() {
    this._targetCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCacheTtlInput() {
    return this._targetCacheTtl;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions {
  /**
  * When true, the Cryostat application will disable the built-in discovery mechanisms. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#disable_built_in_discovery DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#disable_built_in_discovery}
  */
  readonly disableBuiltInDiscovery?: boolean | cdktf.IResolvable;
  /**
  * When false and discoveryPortNames is empty, the Cryostat application will use the default port name jfr-jmx to look for JMX connectable targets. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#disable_built_in_port_names DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#disable_built_in_port_names}
  */
  readonly disableBuiltInPortNames?: boolean | cdktf.IResolvable;
  /**
  * When false and discoveryPortNumbers is empty, the Cryostat application will use the default port number 9091 to look for JMX connectable targets. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#disable_built_in_port_numbers DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#disable_built_in_port_numbers}
  */
  readonly disableBuiltInPortNumbers?: boolean | cdktf.IResolvable;
  /**
  * List of port names that the Cryostat application should look for in order to consider a target as JMX connectable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#discovery_port_names DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#discovery_port_names}
  */
  readonly discoveryPortNames?: string[];
  /**
  * List of port numbers that the Cryostat application should look for in order to consider a target as JMX connectable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#discovery_port_numbers DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#discovery_port_numbers}
  */
  readonly discoveryPortNumbers?: string[];
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptionsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_built_in_discovery: cdktf.booleanToTerraform(struct!.disableBuiltInDiscovery),
    disable_built_in_port_names: cdktf.booleanToTerraform(struct!.disableBuiltInPortNames),
    disable_built_in_port_numbers: cdktf.booleanToTerraform(struct!.disableBuiltInPortNumbers),
    discovery_port_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.discoveryPortNames),
    discovery_port_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.discoveryPortNumbers),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptionsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_built_in_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.disableBuiltInDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_built_in_port_names: {
      value: cdktf.booleanToHclTerraform(struct!.disableBuiltInPortNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_built_in_port_numbers: {
      value: cdktf.booleanToHclTerraform(struct!.disableBuiltInPortNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_port_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.discoveryPortNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    discovery_port_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.discoveryPortNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableBuiltInDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBuiltInDiscovery = this._disableBuiltInDiscovery;
    }
    if (this._disableBuiltInPortNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBuiltInPortNames = this._disableBuiltInPortNames;
    }
    if (this._disableBuiltInPortNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBuiltInPortNumbers = this._disableBuiltInPortNumbers;
    }
    if (this._discoveryPortNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryPortNames = this._discoveryPortNames;
    }
    if (this._discoveryPortNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryPortNumbers = this._discoveryPortNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableBuiltInDiscovery = undefined;
      this._disableBuiltInPortNames = undefined;
      this._disableBuiltInPortNumbers = undefined;
      this._discoveryPortNames = undefined;
      this._discoveryPortNumbers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableBuiltInDiscovery = value.disableBuiltInDiscovery;
      this._disableBuiltInPortNames = value.disableBuiltInPortNames;
      this._disableBuiltInPortNumbers = value.disableBuiltInPortNumbers;
      this._discoveryPortNames = value.discoveryPortNames;
      this._discoveryPortNumbers = value.discoveryPortNumbers;
    }
  }

  // disable_built_in_discovery - computed: false, optional: true, required: false
  private _disableBuiltInDiscovery?: boolean | cdktf.IResolvable; 
  public get disableBuiltInDiscovery() {
    return this.getBooleanAttribute('disable_built_in_discovery');
  }
  public set disableBuiltInDiscovery(value: boolean | cdktf.IResolvable) {
    this._disableBuiltInDiscovery = value;
  }
  public resetDisableBuiltInDiscovery() {
    this._disableBuiltInDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBuiltInDiscoveryInput() {
    return this._disableBuiltInDiscovery;
  }

  // disable_built_in_port_names - computed: false, optional: true, required: false
  private _disableBuiltInPortNames?: boolean | cdktf.IResolvable; 
  public get disableBuiltInPortNames() {
    return this.getBooleanAttribute('disable_built_in_port_names');
  }
  public set disableBuiltInPortNames(value: boolean | cdktf.IResolvable) {
    this._disableBuiltInPortNames = value;
  }
  public resetDisableBuiltInPortNames() {
    this._disableBuiltInPortNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBuiltInPortNamesInput() {
    return this._disableBuiltInPortNames;
  }

  // disable_built_in_port_numbers - computed: false, optional: true, required: false
  private _disableBuiltInPortNumbers?: boolean | cdktf.IResolvable; 
  public get disableBuiltInPortNumbers() {
    return this.getBooleanAttribute('disable_built_in_port_numbers');
  }
  public set disableBuiltInPortNumbers(value: boolean | cdktf.IResolvable) {
    this._disableBuiltInPortNumbers = value;
  }
  public resetDisableBuiltInPortNumbers() {
    this._disableBuiltInPortNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBuiltInPortNumbersInput() {
    return this._disableBuiltInPortNumbers;
  }

  // discovery_port_names - computed: false, optional: true, required: false
  private _discoveryPortNames?: string[]; 
  public get discoveryPortNames() {
    return this.getListAttribute('discovery_port_names');
  }
  public set discoveryPortNames(value: string[]) {
    this._discoveryPortNames = value;
  }
  public resetDiscoveryPortNames() {
    this._discoveryPortNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryPortNamesInput() {
    return this._discoveryPortNames;
  }

  // discovery_port_numbers - computed: false, optional: true, required: false
  private _discoveryPortNumbers?: string[]; 
  public get discoveryPortNumbers() {
    return this.getListAttribute('discovery_port_numbers');
  }
  public set discoveryPortNumbers(value: string[]) {
    this._discoveryPortNumbers = value;
  }
  public resetDiscoveryPortNumbers() {
    this._discoveryPortNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryPortNumbersInput() {
    return this._discoveryPortNumbers;
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets {
  /**
  * Key within secret containing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#certificate_key DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#certificate_key}
  */
  readonly certificateKey?: string;
  /**
  * Name of secret in the local namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#secret_name DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_key: cdktf.stringToTerraform(struct!.certificateKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_key: {
      value: cdktf.stringToHclTerraform(struct!.certificateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateKey = this._certificateKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateKey = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateKey = value.certificateKey;
      this._secretName = value.secretName;
    }
  }

  // certificate_key - computed: false, optional: true, required: false
  private _certificateKey?: string; 
  public get certificateKey() {
    return this.getStringAttribute('certificate_key');
  }
  public set certificateKey(value: string) {
    this._certificateKey = value;
  }
  public resetCertificateKey() {
    this._certificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateKeyInput() {
    return this._certificateKey;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsOutputReference {
    return new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpec {
  /**
  * Additional configuration options for the authorization proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#authorization_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#authorization_options}
  */
  readonly authorizationOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptions;
  /**
  * Options to configure the Cryostat application's database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#database_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#database_options}
  */
  readonly databaseOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptions;
  /**
  * Use cert-manager to secure in-cluster communication between Cryostat components. Requires cert-manager to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#enable_cert_manager DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#enable_cert_manager}
  */
  readonly enableCertManager?: boolean | cdktf.IResolvable;
  /**
  * List of Flight Recorder Event Templates to preconfigure in Cryostat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#event_templates DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#event_templates}
  */
  readonly eventTemplates?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplates[] | cdktf.IResolvable;
  /**
  * Options to control how the operator exposes the application outside of the cluster, such as using an Ingress or Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#network_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#network_options}
  */
  readonly networkOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptions;
  /**
  * Options to configure the Cryostat deployments and pods metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#operand_metadata DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#operand_metadata}
  */
  readonly operandMetadata?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadata;
  /**
  * Options to configure Cryostat Automated Report Analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#report_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#report_options}
  */
  readonly reportOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptions;
  /**
  * Resource requirements for the Cryostat deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#resources DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#resources}
  */
  readonly resources?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResources;
  /**
  * Options to configure scheduling for the Cryostat deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#scheduling_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#scheduling_options}
  */
  readonly schedulingOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptions;
  /**
  * Options to configure the Security Contexts for the Cryostat application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#security_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#security_options}
  */
  readonly securityOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions;
  /**
  * Options to customize the services created for the Cryostat application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#service_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#service_options}
  */
  readonly serviceOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions;
  /**
  * Options to customize the storage provisioned for the database and object storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#storage_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#storage_options}
  */
  readonly storageOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions;
  /**
  * Options to customize the target connections cache for the Cryostat application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#target_connection_cache_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#target_connection_cache_options}
  */
  readonly targetConnectionCacheOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions;
  /**
  * Options to configure the Cryostat application's target discovery mechanisms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#target_discovery_options DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#target_discovery_options}
  */
  readonly targetDiscoveryOptions?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions;
  /**
  * List of namespaces whose workloads Cryostat should be permitted to access and profile. Defaults to this Cryostat's namespace. Warning: All Cryostat users will be able to create and manage recordings for workloads in the listed namespaces. More details: https://github.com/cryostatio/cryostat-operator/blob/v3.0.0/docs/config.md#data-isolation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#target_namespaces DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#target_namespaces}
  */
  readonly targetNamespaces?: string[];
  /**
  * List of TLS certificates to trust when connecting to targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_cryostat_io_cryostat_v1beta2_manifest#trusted_cert_secrets DataK8SOperatorCryostatIoCryostatV1Beta2Manifest#trusted_cert_secrets}
  */
  readonly trustedCertSecrets?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets[] | cdktf.IResolvable;
}

export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecToTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptionsToTerraform(struct!.authorizationOptions),
    database_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptionsToTerraform(struct!.databaseOptions),
    enable_cert_manager: cdktf.booleanToTerraform(struct!.enableCertManager),
    event_templates: cdktf.listMapper(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplatesToTerraform, false)(struct!.eventTemplates),
    network_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptionsToTerraform(struct!.networkOptions),
    operand_metadata: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadataToTerraform(struct!.operandMetadata),
    report_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptionsToTerraform(struct!.reportOptions),
    resources: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResourcesToTerraform(struct!.resources),
    scheduling_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptionsToTerraform(struct!.schedulingOptions),
    security_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsToTerraform(struct!.securityOptions),
    service_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsToTerraform(struct!.serviceOptions),
    storage_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsToTerraform(struct!.storageOptions),
    target_connection_cache_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptionsToTerraform(struct!.targetConnectionCacheOptions),
    target_discovery_options: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptionsToTerraform(struct!.targetDiscoveryOptions),
    target_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetNamespaces),
    trusted_cert_secrets: cdktf.listMapper(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsToTerraform, false)(struct!.trustedCertSecrets),
  }
}


export function dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptionsToHclTerraform(struct!.authorizationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptions",
    },
    database_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptionsToHclTerraform(struct!.databaseOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptions",
    },
    enable_cert_manager: {
      value: cdktf.booleanToHclTerraform(struct!.enableCertManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_templates: {
      value: cdktf.listMapperHcl(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplatesToHclTerraform, false)(struct!.eventTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplatesList",
    },
    network_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptionsToHclTerraform(struct!.networkOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptions",
    },
    operand_metadata: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadataToHclTerraform(struct!.operandMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadata",
    },
    report_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptionsToHclTerraform(struct!.reportOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptions",
    },
    resources: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResources",
    },
    scheduling_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptionsToHclTerraform(struct!.schedulingOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptions",
    },
    security_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsToHclTerraform(struct!.securityOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions",
    },
    service_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsToHclTerraform(struct!.serviceOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions",
    },
    storage_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsToHclTerraform(struct!.storageOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions",
    },
    target_connection_cache_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptionsToHclTerraform(struct!.targetConnectionCacheOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions",
    },
    target_discovery_options: {
      value: dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptionsToHclTerraform(struct!.targetDiscoveryOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions",
    },
    target_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_cert_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsToHclTerraform, false)(struct!.trustedCertSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationOptions = this._authorizationOptions?.internalValue;
    }
    if (this._databaseOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseOptions = this._databaseOptions?.internalValue;
    }
    if (this._enableCertManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertManager = this._enableCertManager;
    }
    if (this._eventTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTemplates = this._eventTemplates?.internalValue;
    }
    if (this._networkOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOptions = this._networkOptions?.internalValue;
    }
    if (this._operandMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operandMetadata = this._operandMetadata?.internalValue;
    }
    if (this._reportOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportOptions = this._reportOptions?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingOptions = this._schedulingOptions?.internalValue;
    }
    if (this._securityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityOptions = this._securityOptions?.internalValue;
    }
    if (this._serviceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOptions = this._serviceOptions?.internalValue;
    }
    if (this._storageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageOptions = this._storageOptions?.internalValue;
    }
    if (this._targetConnectionCacheOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetConnectionCacheOptions = this._targetConnectionCacheOptions?.internalValue;
    }
    if (this._targetDiscoveryOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDiscoveryOptions = this._targetDiscoveryOptions?.internalValue;
    }
    if (this._targetNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespaces = this._targetNamespaces;
    }
    if (this._trustedCertSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertSecrets = this._trustedCertSecrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationOptions.internalValue = undefined;
      this._databaseOptions.internalValue = undefined;
      this._enableCertManager = undefined;
      this._eventTemplates.internalValue = undefined;
      this._networkOptions.internalValue = undefined;
      this._operandMetadata.internalValue = undefined;
      this._reportOptions.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._schedulingOptions.internalValue = undefined;
      this._securityOptions.internalValue = undefined;
      this._serviceOptions.internalValue = undefined;
      this._storageOptions.internalValue = undefined;
      this._targetConnectionCacheOptions.internalValue = undefined;
      this._targetDiscoveryOptions.internalValue = undefined;
      this._targetNamespaces = undefined;
      this._trustedCertSecrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationOptions.internalValue = value.authorizationOptions;
      this._databaseOptions.internalValue = value.databaseOptions;
      this._enableCertManager = value.enableCertManager;
      this._eventTemplates.internalValue = value.eventTemplates;
      this._networkOptions.internalValue = value.networkOptions;
      this._operandMetadata.internalValue = value.operandMetadata;
      this._reportOptions.internalValue = value.reportOptions;
      this._resources.internalValue = value.resources;
      this._schedulingOptions.internalValue = value.schedulingOptions;
      this._securityOptions.internalValue = value.securityOptions;
      this._serviceOptions.internalValue = value.serviceOptions;
      this._storageOptions.internalValue = value.storageOptions;
      this._targetConnectionCacheOptions.internalValue = value.targetConnectionCacheOptions;
      this._targetDiscoveryOptions.internalValue = value.targetDiscoveryOptions;
      this._targetNamespaces = value.targetNamespaces;
      this._trustedCertSecrets.internalValue = value.trustedCertSecrets;
    }
  }

  // authorization_options - computed: false, optional: true, required: false
  private _authorizationOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptionsOutputReference(this, "authorization_options");
  public get authorizationOptions() {
    return this._authorizationOptions;
  }
  public putAuthorizationOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecAuthorizationOptions) {
    this._authorizationOptions.internalValue = value;
  }
  public resetAuthorizationOptions() {
    this._authorizationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationOptionsInput() {
    return this._authorizationOptions.internalValue;
  }

  // database_options - computed: false, optional: true, required: false
  private _databaseOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptionsOutputReference(this, "database_options");
  public get databaseOptions() {
    return this._databaseOptions;
  }
  public putDatabaseOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecDatabaseOptions) {
    this._databaseOptions.internalValue = value;
  }
  public resetDatabaseOptions() {
    this._databaseOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseOptionsInput() {
    return this._databaseOptions.internalValue;
  }

  // enable_cert_manager - computed: false, optional: true, required: false
  private _enableCertManager?: boolean | cdktf.IResolvable; 
  public get enableCertManager() {
    return this.getBooleanAttribute('enable_cert_manager');
  }
  public set enableCertManager(value: boolean | cdktf.IResolvable) {
    this._enableCertManager = value;
  }
  public resetEnableCertManager() {
    this._enableCertManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertManagerInput() {
    return this._enableCertManager;
  }

  // event_templates - computed: false, optional: true, required: false
  private _eventTemplates = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplatesList(this, "event_templates", false);
  public get eventTemplates() {
    return this._eventTemplates;
  }
  public putEventTemplates(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecEventTemplates[] | cdktf.IResolvable) {
    this._eventTemplates.internalValue = value;
  }
  public resetEventTemplates() {
    this._eventTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTemplatesInput() {
    return this._eventTemplates.internalValue;
  }

  // network_options - computed: false, optional: true, required: false
  private _networkOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptionsOutputReference(this, "network_options");
  public get networkOptions() {
    return this._networkOptions;
  }
  public putNetworkOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecNetworkOptions) {
    this._networkOptions.internalValue = value;
  }
  public resetNetworkOptions() {
    this._networkOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionsInput() {
    return this._networkOptions.internalValue;
  }

  // operand_metadata - computed: false, optional: true, required: false
  private _operandMetadata = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadataOutputReference(this, "operand_metadata");
  public get operandMetadata() {
    return this._operandMetadata;
  }
  public putOperandMetadata(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecOperandMetadata) {
    this._operandMetadata.internalValue = value;
  }
  public resetOperandMetadata() {
    this._operandMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandMetadataInput() {
    return this._operandMetadata.internalValue;
  }

  // report_options - computed: false, optional: true, required: false
  private _reportOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptionsOutputReference(this, "report_options");
  public get reportOptions() {
    return this._reportOptions;
  }
  public putReportOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecReportOptions) {
    this._reportOptions.internalValue = value;
  }
  public resetReportOptions() {
    this._reportOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOptionsInput() {
    return this._reportOptions.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduling_options - computed: false, optional: true, required: false
  private _schedulingOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptionsOutputReference(this, "scheduling_options");
  public get schedulingOptions() {
    return this._schedulingOptions;
  }
  public putSchedulingOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSchedulingOptions) {
    this._schedulingOptions.internalValue = value;
  }
  public resetSchedulingOptions() {
    this._schedulingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingOptionsInput() {
    return this._schedulingOptions.internalValue;
  }

  // security_options - computed: false, optional: true, required: false
  private _securityOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptionsOutputReference(this, "security_options");
  public get securityOptions() {
    return this._securityOptions;
  }
  public putSecurityOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecSecurityOptions) {
    this._securityOptions.internalValue = value;
  }
  public resetSecurityOptions() {
    this._securityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOptionsInput() {
    return this._securityOptions.internalValue;
  }

  // service_options - computed: false, optional: true, required: false
  private _serviceOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptionsOutputReference(this, "service_options");
  public get serviceOptions() {
    return this._serviceOptions;
  }
  public putServiceOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecServiceOptions) {
    this._serviceOptions.internalValue = value;
  }
  public resetServiceOptions() {
    this._serviceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOptionsInput() {
    return this._serviceOptions.internalValue;
  }

  // storage_options - computed: false, optional: true, required: false
  private _storageOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptionsOutputReference(this, "storage_options");
  public get storageOptions() {
    return this._storageOptions;
  }
  public putStorageOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecStorageOptions) {
    this._storageOptions.internalValue = value;
  }
  public resetStorageOptions() {
    this._storageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOptionsInput() {
    return this._storageOptions.internalValue;
  }

  // target_connection_cache_options - computed: false, optional: true, required: false
  private _targetConnectionCacheOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptionsOutputReference(this, "target_connection_cache_options");
  public get targetConnectionCacheOptions() {
    return this._targetConnectionCacheOptions;
  }
  public putTargetConnectionCacheOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetConnectionCacheOptions) {
    this._targetConnectionCacheOptions.internalValue = value;
  }
  public resetTargetConnectionCacheOptions() {
    this._targetConnectionCacheOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConnectionCacheOptionsInput() {
    return this._targetConnectionCacheOptions.internalValue;
  }

  // target_discovery_options - computed: false, optional: true, required: false
  private _targetDiscoveryOptions = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptionsOutputReference(this, "target_discovery_options");
  public get targetDiscoveryOptions() {
    return this._targetDiscoveryOptions;
  }
  public putTargetDiscoveryOptions(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTargetDiscoveryOptions) {
    this._targetDiscoveryOptions.internalValue = value;
  }
  public resetTargetDiscoveryOptions() {
    this._targetDiscoveryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDiscoveryOptionsInput() {
    return this._targetDiscoveryOptions.internalValue;
  }

  // target_namespaces - computed: false, optional: true, required: false
  private _targetNamespaces?: string[]; 
  public get targetNamespaces() {
    return this.getListAttribute('target_namespaces');
  }
  public set targetNamespaces(value: string[]) {
    this._targetNamespaces = value;
  }
  public resetTargetNamespaces() {
    this._targetNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespacesInput() {
    return this._targetNamespaces;
  }

  // trusted_cert_secrets - computed: false, optional: true, required: false
  private _trustedCertSecrets = new DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecretsList(this, "trusted_cert_secrets", false);
  public get trustedCertSecrets() {
    return this._trustedCertSecrets;
  }
  public putTrustedCertSecrets(value: DataK8SOperatorCryostatIoCryostatV1Beta2ManifestSpecTrustedCertSecrets[] | cdktf.IResolvable) {
    this._trustedCertSecrets.internalValue = value;
  }
  public resetTrustedCertSecrets() {
    this._trustedCertSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertSecretsInput() {
    return this._trustedCertSecrets.internalValue;
  }
}
