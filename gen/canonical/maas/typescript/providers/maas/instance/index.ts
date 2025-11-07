// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allocate_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#allocate_params Instance#allocate_params}
  */
  readonly allocateParams?: InstanceAllocateParams;
  /**
  * deploy_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#deploy_params Instance#deploy_params}
  */
  readonly deployParams?: InstanceDeployParams;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#network_interfaces Instance#network_interfaces}
  */
  readonly networkInterfaces?: InstanceNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * release_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#release_params Instance#release_params}
  */
  readonly releaseParams?: InstanceReleaseParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceAllocateParams {
  /**
  * The hostname of the MAAS machine to be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
  /**
  * The minimum number of cores used to allocate the MAAS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#min_cpu_count Instance#min_cpu_count}
  */
  readonly minCpuCount?: number;
  /**
  * The minimum RAM memory size (in MB) used to allocate the MAAS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#min_memory Instance#min_memory}
  */
  readonly minMemory?: number;
  /**
  * The pool name of the MAAS machine to be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#pool Instance#pool}
  */
  readonly pool?: string;
  /**
  * The system_id of the MAAS machine to be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#system_id Instance#system_id}
  */
  readonly systemId?: string;
  /**
  * A set of tag names that must be assigned on the MAAS machine to be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#tags Instance#tags}
  */
  readonly tags?: string[];
  /**
  * The zone name of the MAAS machine to be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#zone Instance#zone}
  */
  readonly zone?: string;
}

export function instanceAllocateParamsToTerraform(struct?: InstanceAllocateParamsOutputReference | InstanceAllocateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    min_cpu_count: cdktf.numberToTerraform(struct!.minCpuCount),
    min_memory: cdktf.numberToTerraform(struct!.minMemory),
    pool: cdktf.stringToTerraform(struct!.pool),
    system_id: cdktf.stringToTerraform(struct!.systemId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function instanceAllocateParamsToHclTerraform(struct?: InstanceAllocateParamsOutputReference | InstanceAllocateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.minCpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory: {
      value: cdktf.numberToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceAllocateParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceAllocateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._minCpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuCount = this._minCpuCount;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceAllocateParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._minCpuCount = undefined;
      this._minMemory = undefined;
      this._pool = undefined;
      this._systemId = undefined;
      this._tags = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._minCpuCount = value.minCpuCount;
      this._minMemory = value.minMemory;
      this._pool = value.pool;
      this._systemId = value.systemId;
      this._tags = value.tags;
      this._zone = value.zone;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // min_cpu_count - computed: false, optional: true, required: false
  private _minCpuCount?: number; 
  public get minCpuCount() {
    return this.getNumberAttribute('min_cpu_count');
  }
  public set minCpuCount(value: number) {
    this._minCpuCount = value;
  }
  public resetMinCpuCount() {
    this._minCpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuCountInput() {
    return this._minCpuCount;
  }

  // min_memory - computed: false, optional: true, required: false
  private _minMemory?: number; 
  public get minMemory() {
    return this.getNumberAttribute('min_memory');
  }
  public set minMemory(value: number) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // pool - computed: false, optional: true, required: false
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

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // tags - computed: false, optional: true, required: false
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

  // zone - computed: false, optional: true, required: false
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
}
export interface InstanceDeployParams {
  /**
  * The distro series used to deploy the allocated MAAS machine. If it's not given, the MAAS server default value is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#distro_series Instance#distro_series}
  */
  readonly distroSeries?: string;
  /**
  * Periodically sync hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#enable_hw_sync Instance#enable_hw_sync}
  */
  readonly enableHwSync?: boolean | cdktf.IResolvable;
  /**
  * Deploy machine in memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#ephemeral Instance#ephemeral}
  */
  readonly ephemeral?: boolean | cdktf.IResolvable;
  /**
  * Hardware enablement kernel to use with the image. Only used when deploying Ubuntu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#hwe_kernel Instance#hwe_kernel}
  */
  readonly hweKernel?: string;
  /**
  * Cloud-init user data script that gets run on the machine once it has deployed. A good practice is to set this with `file("/tmp/user-data.txt")`, where `/tmp/user-data.txt` is a cloud-init script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#user_data Instance#user_data}
  */
  readonly userData?: string;
}

export function instanceDeployParamsToTerraform(struct?: InstanceDeployParamsOutputReference | InstanceDeployParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distro_series: cdktf.stringToTerraform(struct!.distroSeries),
    enable_hw_sync: cdktf.booleanToTerraform(struct!.enableHwSync),
    ephemeral: cdktf.booleanToTerraform(struct!.ephemeral),
    hwe_kernel: cdktf.stringToTerraform(struct!.hweKernel),
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function instanceDeployParamsToHclTerraform(struct?: InstanceDeployParamsOutputReference | InstanceDeployParams): any {
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
    ephemeral: {
      value: cdktf.booleanToHclTerraform(struct!.ephemeral),
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

export class InstanceDeployParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceDeployParams | undefined {
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
    if (this._ephemeral !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral;
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

  public set internalValue(value: InstanceDeployParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distroSeries = undefined;
      this._enableHwSync = undefined;
      this._ephemeral = undefined;
      this._hweKernel = undefined;
      this._userData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distroSeries = value.distroSeries;
      this._enableHwSync = value.enableHwSync;
      this._ephemeral = value.ephemeral;
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

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral?: boolean | cdktf.IResolvable; 
  public get ephemeral() {
    return this.getBooleanAttribute('ephemeral');
  }
  public set ephemeral(value: boolean | cdktf.IResolvable) {
    this._ephemeral = value;
  }
  public resetEphemeral() {
    this._ephemeral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral;
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
export interface InstanceNetworkInterfaces {
  /**
  * Static IP address to be configured on the network interface. If this is set, the `subnet_cidr` is required.
  * 
  * **NOTE:** If both `subnet_cidr` and `ip_address` are not defined, the interface will not be configured on the allocated machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#ip_address Instance#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The name of the network interface to be configured on the allocated machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * An existing subnet CIDR used to configure the network interface. Unless `ip_address` is defined, a free IP address is allocated from the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#subnet_cidr Instance#subnet_cidr}
  */
  readonly subnetCidr?: string;
}

export function instanceNetworkInterfacesToTerraform(struct?: InstanceNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
  }
}


export function instanceNetworkInterfacesToHclTerraform(struct?: InstanceNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._subnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._subnetCidr = value.subnetCidr;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }
}

export class InstanceNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : InstanceNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): InstanceNetworkInterfacesOutputReference {
    return new InstanceNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceReleaseParams {
  /**
  * A comment to be added to the event log when the machine is released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#comment Instance#comment}
  */
  readonly comment?: string;
  /**
  * Erase the disk when releasing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#erase Instance#erase}
  */
  readonly erase?: boolean | cdktf.IResolvable;
  /**
  * Force the release of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#force Instance#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Use quick erase. Wipe 2MiB at the start and at the end of the drive to make data recovery inconvenient and unlikely to happen by accident. This is not secure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#quick_erase Instance#quick_erase}
  */
  readonly quickErase?: boolean | cdktf.IResolvable;
  /**
  * Use the drive's secure erase feature if available.  In some cases, this can be much faster than overwriting the drive. Some drives implement secure erasure by overwriting themselves so this could still be slow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#secure_erase Instance#secure_erase}
  */
  readonly secureErase?: boolean | cdktf.IResolvable;
}

export function instanceReleaseParamsToTerraform(struct?: InstanceReleaseParamsOutputReference | InstanceReleaseParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    erase: cdktf.booleanToTerraform(struct!.erase),
    force: cdktf.booleanToTerraform(struct!.force),
    quick_erase: cdktf.booleanToTerraform(struct!.quickErase),
    secure_erase: cdktf.booleanToTerraform(struct!.secureErase),
  }
}


export function instanceReleaseParamsToHclTerraform(struct?: InstanceReleaseParamsOutputReference | InstanceReleaseParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    erase: {
      value: cdktf.booleanToHclTerraform(struct!.erase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quick_erase: {
      value: cdktf.booleanToHclTerraform(struct!.quickErase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secure_erase: {
      value: cdktf.booleanToHclTerraform(struct!.secureErase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceReleaseParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceReleaseParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._erase !== undefined) {
      hasAnyValues = true;
      internalValueResult.erase = this._erase;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._quickErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickErase = this._quickErase;
    }
    if (this._secureErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureErase = this._secureErase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceReleaseParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._erase = undefined;
      this._force = undefined;
      this._quickErase = undefined;
      this._secureErase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._erase = value.erase;
      this._force = value.force;
      this._quickErase = value.quickErase;
      this._secureErase = value.secureErase;
    }
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

  // erase - computed: false, optional: true, required: false
  private _erase?: boolean | cdktf.IResolvable; 
  public get erase() {
    return this.getBooleanAttribute('erase');
  }
  public set erase(value: boolean | cdktf.IResolvable) {
    this._erase = value;
  }
  public resetErase() {
    this._erase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eraseInput() {
    return this._erase;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // quick_erase - computed: false, optional: true, required: false
  private _quickErase?: boolean | cdktf.IResolvable; 
  public get quickErase() {
    return this.getBooleanAttribute('quick_erase');
  }
  public set quickErase(value: boolean | cdktf.IResolvable) {
    this._quickErase = value;
  }
  public resetQuickErase() {
    this._quickErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickEraseInput() {
    return this._quickErase;
  }

  // secure_erase - computed: false, optional: true, required: false
  private _secureErase?: boolean | cdktf.IResolvable; 
  public get secureErase() {
    return this.getBooleanAttribute('secure_erase');
  }
  public set secureErase(value: boolean | cdktf.IResolvable) {
    this._secureErase = value;
  }
  public resetSecureErase() {
    this._secureErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureEraseInput() {
    return this._secureErase;
  }
}
export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#delete Instance#delete}
  */
  readonly delete?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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

export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance maas_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/instance maas_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'maas_instance',
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
    this._id = config.id;
    this._allocateParams.internalValue = config.allocateParams;
    this._deployParams.internalValue = config.deployParams;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._releaseParams.internalValue = config.releaseParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // allocate_params - computed: false, optional: true, required: false
  private _allocateParams = new InstanceAllocateParamsOutputReference(this, "allocate_params");
  public get allocateParams() {
    return this._allocateParams;
  }
  public putAllocateParams(value: InstanceAllocateParams) {
    this._allocateParams.internalValue = value;
  }
  public resetAllocateParams() {
    this._allocateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateParamsInput() {
    return this._allocateParams.internalValue;
  }

  // deploy_params - computed: false, optional: true, required: false
  private _deployParams = new InstanceDeployParamsOutputReference(this, "deploy_params");
  public get deployParams() {
    return this._deployParams;
  }
  public putDeployParams(value: InstanceDeployParams) {
    this._deployParams.internalValue = value;
  }
  public resetDeployParams() {
    this._deployParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParamsInput() {
    return this._deployParams.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new InstanceNetworkInterfacesList(this, "network_interfaces", true);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: InstanceNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // release_params - computed: false, optional: true, required: false
  private _releaseParams = new InstanceReleaseParamsOutputReference(this, "release_params");
  public get releaseParams() {
    return this._releaseParams;
  }
  public putReleaseParams(value: InstanceReleaseParams) {
    this._releaseParams.internalValue = value;
  }
  public resetReleaseParams() {
    this._releaseParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseParamsInput() {
    return this._releaseParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      allocate_params: instanceAllocateParamsToTerraform(this._allocateParams.internalValue),
      deploy_params: instanceDeployParamsToTerraform(this._deployParams.internalValue),
      network_interfaces: cdktf.listMapper(instanceNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      release_params: instanceReleaseParamsToTerraform(this._releaseParams.internalValue),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocate_params: {
        value: instanceAllocateParamsToHclTerraform(this._allocateParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceAllocateParamsList",
      },
      deploy_params: {
        value: instanceDeployParamsToHclTerraform(this._deployParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceDeployParamsList",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(instanceNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceNetworkInterfacesList",
      },
      release_params: {
        value: instanceReleaseParamsToHclTerraform(this._releaseParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceReleaseParamsList",
      },
      timeouts: {
        value: instanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
