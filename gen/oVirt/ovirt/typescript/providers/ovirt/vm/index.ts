// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the VM is cloned from the template instead of linked. As a result, the template can be removed and the VM still exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#clone Vm#clone}
  */
  readonly clone?: boolean | cdktf.IResolvable;
  /**
  * Cluster to create this VM on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#cluster_id Vm#cluster_id}
  */
  readonly clusterId: string;
  /**
  * User-provided comment for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#comment Vm#comment}
  */
  readonly comment?: string;
  /**
  * Number of CPU cores to allocate to the VM. If set, cpu_threads and cpu_sockets must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#cpu_cores Vm#cpu_cores}
  */
  readonly cpuCores?: number;
  /**
  * Sets the CPU mode for the VM. Can be one of: custom, host_model, host_passthrough
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#cpu_mode Vm#cpu_mode}
  */
  readonly cpuMode?: string;
  /**
  * Number of CPU sockets to allocate to the VM. If set, cpu_cores and cpu_threads must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#cpu_sockets Vm#cpu_sockets}
  */
  readonly cpuSockets?: number;
  /**
  * Number of CPU threads to allocate to the VM. If set, cpu_cores and cpu_sockets must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#cpu_threads Vm#cpu_threads}
  */
  readonly cpuThreads?: number;
  /**
  * Sets the HugePages setting for the VM. Must be one of: 2048, 1048576
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#huge_pages Vm#huge_pages}
  */
  readonly hugePages?: number;
  /**
  * Custom script that passed to VM during initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#initialization_custom_script Vm#initialization_custom_script}
  */
  readonly initializationCustomScript?: string;
  /**
  * hostname that is set during initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#initialization_hostname Vm#initialization_hostname}
  */
  readonly initializationHostname?: string;
  /**
  * Defines the VM instance type ID overrides the hardware parameters of the created VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#instance_type_id Vm#instance_type_id}
  */
  readonly instanceTypeId?: string;
  /**
  * Maximum memory to assign to the VM in the memory policy in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#maximum_memory Vm#maximum_memory}
  */
  readonly maximumMemory?: number;
  /**
  * Memory to assign to the VM in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#memory Vm#memory}
  */
  readonly memory?: number;
  /**
  * Turn memory ballooning on or off for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#memory_ballooning Vm#memory_ballooning}
  */
  readonly memoryBallooning?: boolean | cdktf.IResolvable;
  /**
  * User-provided name for the VM. Must only consist of lower- and uppercase letters, numbers, dash, underscore and dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
  /**
  * Operating system type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#os_type Vm#os_type}
  */
  readonly osType?: string;
  /**
  * Affinity for placement policies. Must be one of: migratable, pinned, user_migratable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#placement_policy_affinity Vm#placement_policy_affinity}
  */
  readonly placementPolicyAffinity?: string;
  /**
  * List of hosts to pin the VM to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#placement_policy_host_ids Vm#placement_policy_host_ids}
  */
  readonly placementPolicyHostIds?: string[];
  /**
  * Enable or disable the serial console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#serial_console Vm#serial_console}
  */
  readonly serialConsole?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the soundcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#soundcard_enabled Vm#soundcard_enabled}
  */
  readonly soundcardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Base template for this VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#template_id Vm#template_id}
  */
  readonly templateId: string;
  /**
  * Virtual machine type. Must be one of: desktop, server, high_performance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#vm_type Vm#vm_type}
  */
  readonly vmType?: string;
  /**
  * template_disk_attachment_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#template_disk_attachment_override Vm#template_disk_attachment_override}
  */
  readonly templateDiskAttachmentOverride?: VmTemplateDiskAttachmentOverride[] | cdktf.IResolvable;
}
export interface VmTemplateDiskAttachmentOverride {
  /**
  * ID of the disk to be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#disk_id Vm#disk_id}
  */
  readonly diskId: string;
  /**
  * Disk format for the override. Can be 'raw' or 'cow'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#format Vm#format}
  */
  readonly format?: string;
  /**
  * Provisioning the disk. Must be one of sparse,non-sparse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#provisioning Vm#provisioning}
  */
  readonly provisioning?: string;
}

export function vmTemplateDiskAttachmentOverrideToTerraform(struct?: VmTemplateDiskAttachmentOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    format: cdktf.stringToTerraform(struct!.format),
    provisioning: cdktf.stringToTerraform(struct!.provisioning),
  }
}


export function vmTemplateDiskAttachmentOverrideToHclTerraform(struct?: VmTemplateDiskAttachmentOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning: {
      value: cdktf.stringToHclTerraform(struct!.provisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmTemplateDiskAttachmentOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmTemplateDiskAttachmentOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._provisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioning = this._provisioning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmTemplateDiskAttachmentOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskId = undefined;
      this._format = undefined;
      this._provisioning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskId = value.diskId;
      this._format = value.format;
      this._provisioning = value.provisioning;
    }
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // provisioning - computed: false, optional: true, required: false
  private _provisioning?: string; 
  public get provisioning() {
    return this.getStringAttribute('provisioning');
  }
  public set provisioning(value: string) {
    this._provisioning = value;
  }
  public resetProvisioning() {
    this._provisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningInput() {
    return this._provisioning;
  }
}

export class VmTemplateDiskAttachmentOverrideList extends cdktf.ComplexList {
  public internalValue? : VmTemplateDiskAttachmentOverride[] | cdktf.IResolvable

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
  public get(index: number): VmTemplateDiskAttachmentOverrideOutputReference {
    return new VmTemplateDiskAttachmentOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm ovirt_vm}
*/
export class Vm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vm to import
  * @param importFromId The id of the existing Vm that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm ovirt_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmConfig
  */
  public constructor(scope: Construct, id: string, config: VmConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_vm',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clone = config.clone;
    this._clusterId = config.clusterId;
    this._comment = config.comment;
    this._cpuCores = config.cpuCores;
    this._cpuMode = config.cpuMode;
    this._cpuSockets = config.cpuSockets;
    this._cpuThreads = config.cpuThreads;
    this._hugePages = config.hugePages;
    this._initializationCustomScript = config.initializationCustomScript;
    this._initializationHostname = config.initializationHostname;
    this._instanceTypeId = config.instanceTypeId;
    this._maximumMemory = config.maximumMemory;
    this._memory = config.memory;
    this._memoryBallooning = config.memoryBallooning;
    this._name = config.name;
    this._osType = config.osType;
    this._placementPolicyAffinity = config.placementPolicyAffinity;
    this._placementPolicyHostIds = config.placementPolicyHostIds;
    this._serialConsole = config.serialConsole;
    this._soundcardEnabled = config.soundcardEnabled;
    this._templateId = config.templateId;
    this._vmType = config.vmType;
    this._templateDiskAttachmentOverride.internalValue = config.templateDiskAttachmentOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clone - computed: false, optional: true, required: false
  private _clone?: boolean | cdktf.IResolvable; 
  public get clone() {
    return this.getBooleanAttribute('clone');
  }
  public set clone(value: boolean | cdktf.IResolvable) {
    this._clone = value;
  }
  public resetClone() {
    this._clone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cpu_cores - computed: false, optional: true, required: false
  private _cpuCores?: number; 
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }
  public set cpuCores(value: number) {
    this._cpuCores = value;
  }
  public resetCpuCores() {
    this._cpuCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoresInput() {
    return this._cpuCores;
  }

  // cpu_mode - computed: false, optional: true, required: false
  private _cpuMode?: string; 
  public get cpuMode() {
    return this.getStringAttribute('cpu_mode');
  }
  public set cpuMode(value: string) {
    this._cpuMode = value;
  }
  public resetCpuMode() {
    this._cpuMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuModeInput() {
    return this._cpuMode;
  }

  // cpu_sockets - computed: false, optional: true, required: false
  private _cpuSockets?: number; 
  public get cpuSockets() {
    return this.getNumberAttribute('cpu_sockets');
  }
  public set cpuSockets(value: number) {
    this._cpuSockets = value;
  }
  public resetCpuSockets() {
    this._cpuSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSocketsInput() {
    return this._cpuSockets;
  }

  // cpu_threads - computed: false, optional: true, required: false
  private _cpuThreads?: number; 
  public get cpuThreads() {
    return this.getNumberAttribute('cpu_threads');
  }
  public set cpuThreads(value: number) {
    this._cpuThreads = value;
  }
  public resetCpuThreads() {
    this._cpuThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThreadsInput() {
    return this._cpuThreads;
  }

  // effective_template_id - computed: true, optional: false, required: false
  public get effectiveTemplateId() {
    return this.getStringAttribute('effective_template_id');
  }

  // huge_pages - computed: false, optional: true, required: false
  private _hugePages?: number; 
  public get hugePages() {
    return this.getNumberAttribute('huge_pages');
  }
  public set hugePages(value: number) {
    this._hugePages = value;
  }
  public resetHugePages() {
    this._hugePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugePagesInput() {
    return this._hugePages;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initialization_custom_script - computed: false, optional: true, required: false
  private _initializationCustomScript?: string; 
  public get initializationCustomScript() {
    return this.getStringAttribute('initialization_custom_script');
  }
  public set initializationCustomScript(value: string) {
    this._initializationCustomScript = value;
  }
  public resetInitializationCustomScript() {
    this._initializationCustomScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationCustomScriptInput() {
    return this._initializationCustomScript;
  }

  // initialization_hostname - computed: false, optional: true, required: false
  private _initializationHostname?: string; 
  public get initializationHostname() {
    return this.getStringAttribute('initialization_hostname');
  }
  public set initializationHostname(value: string) {
    this._initializationHostname = value;
  }
  public resetInitializationHostname() {
    this._initializationHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationHostnameInput() {
    return this._initializationHostname;
  }

  // instance_type_id - computed: false, optional: true, required: false
  private _instanceTypeId?: string; 
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }
  public set instanceTypeId(value: string) {
    this._instanceTypeId = value;
  }
  public resetInstanceTypeId() {
    this._instanceTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeIdInput() {
    return this._instanceTypeId;
  }

  // maximum_memory - computed: false, optional: true, required: false
  private _maximumMemory?: number; 
  public get maximumMemory() {
    return this.getNumberAttribute('maximum_memory');
  }
  public set maximumMemory(value: number) {
    this._maximumMemory = value;
  }
  public resetMaximumMemory() {
    this._maximumMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMemoryInput() {
    return this._maximumMemory;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_ballooning - computed: false, optional: true, required: false
  private _memoryBallooning?: boolean | cdktf.IResolvable; 
  public get memoryBallooning() {
    return this.getBooleanAttribute('memory_ballooning');
  }
  public set memoryBallooning(value: boolean | cdktf.IResolvable) {
    this._memoryBallooning = value;
  }
  public resetMemoryBallooning() {
    this._memoryBallooning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBallooningInput() {
    return this._memoryBallooning;
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // placement_policy_affinity - computed: false, optional: true, required: false
  private _placementPolicyAffinity?: string; 
  public get placementPolicyAffinity() {
    return this.getStringAttribute('placement_policy_affinity');
  }
  public set placementPolicyAffinity(value: string) {
    this._placementPolicyAffinity = value;
  }
  public resetPlacementPolicyAffinity() {
    this._placementPolicyAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyAffinityInput() {
    return this._placementPolicyAffinity;
  }

  // placement_policy_host_ids - computed: false, optional: true, required: false
  private _placementPolicyHostIds?: string[]; 
  public get placementPolicyHostIds() {
    return cdktf.Fn.tolist(this.getListAttribute('placement_policy_host_ids'));
  }
  public set placementPolicyHostIds(value: string[]) {
    this._placementPolicyHostIds = value;
  }
  public resetPlacementPolicyHostIds() {
    this._placementPolicyHostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyHostIdsInput() {
    return this._placementPolicyHostIds;
  }

  // serial_console - computed: false, optional: true, required: false
  private _serialConsole?: boolean | cdktf.IResolvable; 
  public get serialConsole() {
    return this.getBooleanAttribute('serial_console');
  }
  public set serialConsole(value: boolean | cdktf.IResolvable) {
    this._serialConsole = value;
  }
  public resetSerialConsole() {
    this._serialConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialConsoleInput() {
    return this._serialConsole;
  }

  // soundcard_enabled - computed: false, optional: true, required: false
  private _soundcardEnabled?: boolean | cdktf.IResolvable; 
  public get soundcardEnabled() {
    return this.getBooleanAttribute('soundcard_enabled');
  }
  public set soundcardEnabled(value: boolean | cdktf.IResolvable) {
    this._soundcardEnabled = value;
  }
  public resetSoundcardEnabled() {
    this._soundcardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soundcardEnabledInput() {
    return this._soundcardEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // vm_type - computed: false, optional: true, required: false
  private _vmType?: string; 
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }
  public set vmType(value: string) {
    this._vmType = value;
  }
  public resetVmType() {
    this._vmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeInput() {
    return this._vmType;
  }

  // template_disk_attachment_override - computed: false, optional: true, required: false
  private _templateDiskAttachmentOverride = new VmTemplateDiskAttachmentOverrideList(this, "template_disk_attachment_override", true);
  public get templateDiskAttachmentOverride() {
    return this._templateDiskAttachmentOverride;
  }
  public putTemplateDiskAttachmentOverride(value: VmTemplateDiskAttachmentOverride[] | cdktf.IResolvable) {
    this._templateDiskAttachmentOverride.internalValue = value;
  }
  public resetTemplateDiskAttachmentOverride() {
    this._templateDiskAttachmentOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDiskAttachmentOverrideInput() {
    return this._templateDiskAttachmentOverride.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clone: cdktf.booleanToTerraform(this._clone),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      comment: cdktf.stringToTerraform(this._comment),
      cpu_cores: cdktf.numberToTerraform(this._cpuCores),
      cpu_mode: cdktf.stringToTerraform(this._cpuMode),
      cpu_sockets: cdktf.numberToTerraform(this._cpuSockets),
      cpu_threads: cdktf.numberToTerraform(this._cpuThreads),
      huge_pages: cdktf.numberToTerraform(this._hugePages),
      initialization_custom_script: cdktf.stringToTerraform(this._initializationCustomScript),
      initialization_hostname: cdktf.stringToTerraform(this._initializationHostname),
      instance_type_id: cdktf.stringToTerraform(this._instanceTypeId),
      maximum_memory: cdktf.numberToTerraform(this._maximumMemory),
      memory: cdktf.numberToTerraform(this._memory),
      memory_ballooning: cdktf.booleanToTerraform(this._memoryBallooning),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      placement_policy_affinity: cdktf.stringToTerraform(this._placementPolicyAffinity),
      placement_policy_host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._placementPolicyHostIds),
      serial_console: cdktf.booleanToTerraform(this._serialConsole),
      soundcard_enabled: cdktf.booleanToTerraform(this._soundcardEnabled),
      template_id: cdktf.stringToTerraform(this._templateId),
      vm_type: cdktf.stringToTerraform(this._vmType),
      template_disk_attachment_override: cdktf.listMapper(vmTemplateDiskAttachmentOverrideToTerraform, true)(this._templateDiskAttachmentOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clone: {
        value: cdktf.booleanToHclTerraform(this._clone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_cores: {
        value: cdktf.numberToHclTerraform(this._cpuCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_mode: {
        value: cdktf.stringToHclTerraform(this._cpuMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_sockets: {
        value: cdktf.numberToHclTerraform(this._cpuSockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_threads: {
        value: cdktf.numberToHclTerraform(this._cpuThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      huge_pages: {
        value: cdktf.numberToHclTerraform(this._hugePages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initialization_custom_script: {
        value: cdktf.stringToHclTerraform(this._initializationCustomScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initialization_hostname: {
        value: cdktf.stringToHclTerraform(this._initializationHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type_id: {
        value: cdktf.stringToHclTerraform(this._instanceTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_memory: {
        value: cdktf.numberToHclTerraform(this._maximumMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_ballooning: {
        value: cdktf.booleanToHclTerraform(this._memoryBallooning),
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
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_policy_affinity: {
        value: cdktf.stringToHclTerraform(this._placementPolicyAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_policy_host_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._placementPolicyHostIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      serial_console: {
        value: cdktf.booleanToHclTerraform(this._serialConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soundcard_enabled: {
        value: cdktf.booleanToHclTerraform(this._soundcardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_type: {
        value: cdktf.stringToHclTerraform(this._vmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_disk_attachment_override: {
        value: cdktf.listMapperHcl(vmTemplateDiskAttachmentOverrideToHclTerraform, true)(this._templateDiskAttachmentOverride.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmTemplateDiskAttachmentOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
