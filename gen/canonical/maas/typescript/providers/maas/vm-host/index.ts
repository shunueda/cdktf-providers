// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate to use for power control of a LXD VM host. It can't be set if `machine`, `power_user` or `power_pass` parameters are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#certificate VmHost#certificate}
  */
  readonly certificate?: string;
  /**
  * The new VM host CPU overcommit ratio. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#cpu_over_commit_ratio VmHost#cpu_over_commit_ratio}
  */
  readonly cpuOverCommitRatio?: number;
  /**
  * The new VM host default macvlan mode. Supported values are: `bridge`, `passthru`, `private`, `vepa`. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#default_macvlan_mode VmHost#default_macvlan_mode}
  */
  readonly defaultMacvlanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#id VmHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Certificate key to use for power control of a LXD VM host. It can't be set if `machine`, `power_user`, or `power_pass` parameters are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#key VmHost#key}
  */
  readonly key?: string;
  /**
  * The identifier (hostname, FQDN or system ID) of a registered ready MAAS machine. This is going to be deployed and registered as a new VM host. This argument conflicts with: `power_address`, `power_user`, `power_pass`, `certificate`, `key` and `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#machine VmHost#machine}
  */
  readonly machine?: string;
  /**
  * The new VM host RAM memory overcommit ratio. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#memory_over_commit_ratio VmHost#memory_over_commit_ratio}
  */
  readonly memoryOverCommitRatio?: number;
  /**
  * The new VM host name. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#name VmHost#name}
  */
  readonly name?: string;
  /**
  * LXD trust password to use for power control of a LXD VM Host. If parameters `certificate` and `key` are used, the trust password will be used to trust the certificate-key pair. If no `certificate` and `key` are specified, MAAS will generate a trusted certificate and key for the VM host. It can't be set if `machine`, `power_user`, or `power_pass` parameters are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#password VmHost#password}
  */
  readonly password?: string;
  /**
  * The new VM host pool name. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#pool VmHost#pool}
  */
  readonly pool?: string;
  /**
  * Address that gives MAAS access to the VM host power control. For example: `qemu+ssh://172.16.99.2/system`. The address given here must reachable by the MAAS server. It can't be set if `machine` argument is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#power_address VmHost#power_address}
  */
  readonly powerAddress?: string;
  /**
  * User password to use for power control of a Virsh VM host. Cannot be set if `machine`, `certificate`, `key` or `password` parameters are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#power_pass VmHost#power_pass}
  */
  readonly powerPass?: string;
  /**
  * User name to use for power control of a Virsh VM host. Cannot be set if `machine`, `certificate`, `key` or `password` parameters are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#power_user VmHost#power_user}
  */
  readonly powerUser?: string;
  /**
  * LXD project to be used by VM host to deploy machines to. Cannot be set if `machine`, `power_user` or `power_pass` parameters are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#project VmHost#project}
  */
  readonly project?: string;
  /**
  * A set of tag names to assign to the new VM host. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#tags VmHost#tags}
  */
  readonly tags?: string[];
  /**
  * The VM host type. Supported values are: `lxd`, `virsh`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#type VmHost#type}
  */
  readonly type: string;
  /**
  * The new VM host zone name. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#zone VmHost#zone}
  */
  readonly zone?: string;
  /**
  * deploy_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#deploy_params VmHost#deploy_params}
  */
  readonly deployParams?: VmHostDeployParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#timeouts VmHost#timeouts}
  */
  readonly timeouts?: VmHostTimeouts;
}
export interface VmHostDeployParams {
  /**
  * The distro series used to deploy the specifed MAAS machine. If it's not given, the MAAS server default value is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#distro_series VmHost#distro_series}
  */
  readonly distroSeries?: string;
  /**
  * Periodically sync hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#enable_hw_sync VmHost#enable_hw_sync}
  */
  readonly enableHwSync?: boolean | cdktf.IResolvable;
  /**
  * Hardware enablement kernel to use with the image. Only used when deploying Ubuntu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#hwe_kernel VmHost#hwe_kernel}
  */
  readonly hweKernel?: string;
  /**
  * Cloud-init user data script that gets run on the machine once it has deployed. A good practice is to set this with `file("/tmp/user-data.txt")`, where `/tmp/user-data.txt` is a cloud-init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#user_data VmHost#user_data}
  */
  readonly userData?: string;
}

export function vmHostDeployParamsToTerraform(struct?: VmHostDeployParamsOutputReference | VmHostDeployParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distro_series: cdktf.stringToTerraform(struct!.distroSeries),
    enable_hw_sync: cdktf.booleanToTerraform(struct!.enableHwSync),
    hwe_kernel: cdktf.stringToTerraform(struct!.hweKernel),
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function vmHostDeployParamsToHclTerraform(struct?: VmHostDeployParamsOutputReference | VmHostDeployParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distro_series: {
      value: cdktf.stringToHclTerraform(struct!.distroSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_hw_sync: {
      value: cdktf.booleanToHclTerraform(struct!.enableHwSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hwe_kernel: {
      value: cdktf.stringToHclTerraform(struct!.hweKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmHostDeployParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmHostDeployParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distroSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.distroSeries = this._distroSeries;
    }
    if (this._enableHwSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHwSync = this._enableHwSync;
    }
    if (this._hweKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hweKernel = this._hweKernel;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmHostDeployParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distroSeries = undefined;
      this._enableHwSync = undefined;
      this._hweKernel = undefined;
      this._userData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distroSeries = value.distroSeries;
      this._enableHwSync = value.enableHwSync;
      this._hweKernel = value.hweKernel;
      this._userData = value.userData;
    }
  }

  // distro_series - computed: false, optional: true, required: false
  private _distroSeries?: string; 
  public get distroSeries() {
    return this.getStringAttribute('distro_series');
  }
  public set distroSeries(value: string) {
    this._distroSeries = value;
  }
  public resetDistroSeries() {
    this._distroSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroSeriesInput() {
    return this._distroSeries;
  }

  // enable_hw_sync - computed: false, optional: true, required: false
  private _enableHwSync?: boolean | cdktf.IResolvable; 
  public get enableHwSync() {
    return this.getBooleanAttribute('enable_hw_sync');
  }
  public set enableHwSync(value: boolean | cdktf.IResolvable) {
    this._enableHwSync = value;
  }
  public resetEnableHwSync() {
    this._enableHwSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHwSyncInput() {
    return this._enableHwSync;
  }

  // hwe_kernel - computed: false, optional: true, required: false
  private _hweKernel?: string; 
  public get hweKernel() {
    return this.getStringAttribute('hwe_kernel');
  }
  public set hweKernel(value: string) {
    this._hweKernel = value;
  }
  public resetHweKernel() {
    this._hweKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hweKernelInput() {
    return this._hweKernel;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }
}
export interface VmHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#create VmHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#delete VmHost#delete}
  */
  readonly delete?: string;
}

export function vmHostTimeoutsToTerraform(struct?: VmHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vmHostTimeoutsToHclTerraform(struct?: VmHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host maas_vm_host}
*/
export class VmHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_vm_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmHost to import
  * @param importFromId The id of the existing VmHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_vm_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host maas_vm_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmHostConfig
  */
  public constructor(scope: Construct, id: string, config: VmHostConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_vm_host',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._cpuOverCommitRatio = config.cpuOverCommitRatio;
    this._defaultMacvlanMode = config.defaultMacvlanMode;
    this._id = config.id;
    this._key = config.key;
    this._machine = config.machine;
    this._memoryOverCommitRatio = config.memoryOverCommitRatio;
    this._name = config.name;
    this._password = config.password;
    this._pool = config.pool;
    this._powerAddress = config.powerAddress;
    this._powerPass = config.powerPass;
    this._powerUser = config.powerUser;
    this._project = config.project;
    this._tags = config.tags;
    this._type = config.type;
    this._zone = config.zone;
    this._deployParams.internalValue = config.deployParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // cpu_over_commit_ratio - computed: true, optional: true, required: false
  private _cpuOverCommitRatio?: number; 
  public get cpuOverCommitRatio() {
    return this.getNumberAttribute('cpu_over_commit_ratio');
  }
  public set cpuOverCommitRatio(value: number) {
    this._cpuOverCommitRatio = value;
  }
  public resetCpuOverCommitRatio() {
    this._cpuOverCommitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOverCommitRatioInput() {
    return this._cpuOverCommitRatio;
  }

  // default_macvlan_mode - computed: true, optional: true, required: false
  private _defaultMacvlanMode?: string; 
  public get defaultMacvlanMode() {
    return this.getStringAttribute('default_macvlan_mode');
  }
  public set defaultMacvlanMode(value: string) {
    this._defaultMacvlanMode = value;
  }
  public resetDefaultMacvlanMode() {
    this._defaultMacvlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMacvlanModeInput() {
    return this._defaultMacvlanMode;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // machine - computed: false, optional: true, required: false
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // memory_over_commit_ratio - computed: true, optional: true, required: false
  private _memoryOverCommitRatio?: number; 
  public get memoryOverCommitRatio() {
    return this.getNumberAttribute('memory_over_commit_ratio');
  }
  public set memoryOverCommitRatio(value: number) {
    this._memoryOverCommitRatio = value;
  }
  public resetMemoryOverCommitRatio() {
    this._memoryOverCommitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOverCommitRatioInput() {
    return this._memoryOverCommitRatio;
  }

  // name - computed: true, optional: true, required: false
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

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // power_address - computed: true, optional: true, required: false
  private _powerAddress?: string; 
  public get powerAddress() {
    return this.getStringAttribute('power_address');
  }
  public set powerAddress(value: string) {
    this._powerAddress = value;
  }
  public resetPowerAddress() {
    this._powerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerAddressInput() {
    return this._powerAddress;
  }

  // power_pass - computed: true, optional: true, required: false
  private _powerPass?: string; 
  public get powerPass() {
    return this.getStringAttribute('power_pass');
  }
  public set powerPass(value: string) {
    this._powerPass = value;
  }
  public resetPowerPass() {
    this._powerPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerPassInput() {
    return this._powerPass;
  }

  // power_user - computed: false, optional: true, required: false
  private _powerUser?: string; 
  public get powerUser() {
    return this.getStringAttribute('power_user');
  }
  public set powerUser(value: string) {
    this._powerUser = value;
  }
  public resetPowerUser() {
    this._powerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerUserInput() {
    return this._powerUser;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // resources_cores_total - computed: true, optional: false, required: false
  public get resourcesCoresTotal() {
    return this.getNumberAttribute('resources_cores_total');
  }

  // resources_local_storage_total - computed: true, optional: false, required: false
  public get resourcesLocalStorageTotal() {
    return this.getNumberAttribute('resources_local_storage_total');
  }

  // resources_memory_total - computed: true, optional: false, required: false
  public get resourcesMemoryTotal() {
    return this.getNumberAttribute('resources_memory_total');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // deploy_params - computed: false, optional: true, required: false
  private _deployParams = new VmHostDeployParamsOutputReference(this, "deploy_params");
  public get deployParams() {
    return this._deployParams;
  }
  public putDeployParams(value: VmHostDeployParams) {
    this._deployParams.internalValue = value;
  }
  public resetDeployParams() {
    this._deployParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParamsInput() {
    return this._deployParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      cpu_over_commit_ratio: cdktf.numberToTerraform(this._cpuOverCommitRatio),
      default_macvlan_mode: cdktf.stringToTerraform(this._defaultMacvlanMode),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      machine: cdktf.stringToTerraform(this._machine),
      memory_over_commit_ratio: cdktf.numberToTerraform(this._memoryOverCommitRatio),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      pool: cdktf.stringToTerraform(this._pool),
      power_address: cdktf.stringToTerraform(this._powerAddress),
      power_pass: cdktf.stringToTerraform(this._powerPass),
      power_user: cdktf.stringToTerraform(this._powerUser),
      project: cdktf.stringToTerraform(this._project),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      deploy_params: vmHostDeployParamsToTerraform(this._deployParams.internalValue),
      timeouts: vmHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_over_commit_ratio: {
        value: cdktf.numberToHclTerraform(this._cpuOverCommitRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_macvlan_mode: {
        value: cdktf.stringToHclTerraform(this._defaultMacvlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_over_commit_ratio: {
        value: cdktf.numberToHclTerraform(this._memoryOverCommitRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_address: {
        value: cdktf.stringToHclTerraform(this._powerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_pass: {
        value: cdktf.stringToHclTerraform(this._powerPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_user: {
        value: cdktf.stringToHclTerraform(this._powerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_params: {
        value: vmHostDeployParamsToHclTerraform(this._deployParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmHostDeployParamsList",
      },
      timeouts: {
        value: vmHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
