// https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpuVirtualClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flavor name for the GPU cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#flavor GpuVirtualCluster#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#id GpuVirtualCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the GPU cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#name GpuVirtualCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#project_id GpuVirtualCluster#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#project_name GpuVirtualCluster#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#region_id GpuVirtualCluster#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#region_name GpuVirtualCluster#region_name}
  */
  readonly regionName?: string;
  /**
  * Number of servers in the GPU cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#servers_count GpuVirtualCluster#servers_count}
  */
  readonly serversCount: number;
  /**
  * Tags to associate with the GPU cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#tags GpuVirtualCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * servers_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#servers_settings GpuVirtualCluster#servers_settings}
  */
  readonly serversSettings: GpuVirtualClusterServersSettings;
}
export interface GpuVirtualClusterServersSettingsCredentials {
  /**
  * Password for the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#password GpuVirtualCluster#password}
  */
  readonly password?: string;
  /**
  * Name of the keypair to use for SSH access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#ssh_key_name GpuVirtualCluster#ssh_key_name}
  */
  readonly sshKeyName?: string;
  /**
  * Username for the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#username GpuVirtualCluster#username}
  */
  readonly username?: string;
}

export function gpuVirtualClusterServersSettingsCredentialsToTerraform(struct?: GpuVirtualClusterServersSettingsCredentialsOutputReference | GpuVirtualClusterServersSettingsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_key_name: cdktf.stringToTerraform(struct!.sshKeyName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gpuVirtualClusterServersSettingsCredentialsToHclTerraform(struct?: GpuVirtualClusterServersSettingsCredentialsOutputReference | GpuVirtualClusterServersSettingsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_name: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpuVirtualClusterServersSettingsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpuVirtualClusterServersSettingsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyName = this._sshKeyName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpuVirtualClusterServersSettingsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshKeyName = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshKeyName = value.sshKeyName;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
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

  // ssh_key_name - computed: false, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GpuVirtualClusterServersSettingsInterfaceFloatingIp {
  /**
  * Source of the floating IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#source GpuVirtualCluster#source}
  */
  readonly source: string;
}

export function gpuVirtualClusterServersSettingsInterfaceFloatingIpToTerraform(struct?: GpuVirtualClusterServersSettingsInterfaceFloatingIpOutputReference | GpuVirtualClusterServersSettingsInterfaceFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function gpuVirtualClusterServersSettingsInterfaceFloatingIpToHclTerraform(struct?: GpuVirtualClusterServersSettingsInterfaceFloatingIpOutputReference | GpuVirtualClusterServersSettingsInterfaceFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpuVirtualClusterServersSettingsInterfaceFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpuVirtualClusterServersSettingsInterfaceFloatingIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpuVirtualClusterServersSettingsInterfaceFloatingIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface GpuVirtualClusterServersSettingsInterface {
  /**
  * IP address for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#ip_address GpuVirtualCluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IP family for the interface (dual, ipv4, ipv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#ip_family GpuVirtualCluster#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Name of interface, should be unique for the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#name GpuVirtualCluster#name}
  */
  readonly name: string;
  /**
  * Required if type is 'subnet' or 'any_subnet'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#network_id GpuVirtualCluster#network_id}
  */
  readonly networkId?: string;
  /**
  * Required if type is 'subnet'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#subnet_id GpuVirtualCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Interface type (subnet, any_subnet, external)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#type GpuVirtualCluster#type}
  */
  readonly type: string;
  /**
  * floating_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#floating_ip GpuVirtualCluster#floating_ip}
  */
  readonly floatingIp?: GpuVirtualClusterServersSettingsInterfaceFloatingIp;
}

export function gpuVirtualClusterServersSettingsInterfaceToTerraform(struct?: GpuVirtualClusterServersSettingsInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
    floating_ip: gpuVirtualClusterServersSettingsInterfaceFloatingIpToTerraform(struct!.floatingIp),
  }
}


export function gpuVirtualClusterServersSettingsInterfaceToHclTerraform(struct?: GpuVirtualClusterServersSettingsInterface | cdktf.IResolvable): any {
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
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
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
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
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
    floating_ip: {
      value: gpuVirtualClusterServersSettingsInterfaceFloatingIpToHclTerraform(struct!.floatingIp),
      isBlock: true,
      type: "list",
      storageClassType: "GpuVirtualClusterServersSettingsInterfaceFloatingIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpuVirtualClusterServersSettingsInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GpuVirtualClusterServersSettingsInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._floatingIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpuVirtualClusterServersSettingsInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipFamily = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._subnetId = undefined;
      this._type = undefined;
      this._floatingIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipFamily = value.ipFamily;
      this._name = value.name;
      this._networkId = value.networkId;
      this._subnetId = value.subnetId;
      this._type = value.type;
      this._floatingIp.internalValue = value.floatingIp;
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

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp = new GpuVirtualClusterServersSettingsInterfaceFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: GpuVirtualClusterServersSettingsInterfaceFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }
}

export class GpuVirtualClusterServersSettingsInterfaceList extends cdktf.ComplexList {
  public internalValue? : GpuVirtualClusterServersSettingsInterface[] | cdktf.IResolvable

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
  public get(index: number): GpuVirtualClusterServersSettingsInterfaceOutputReference {
    return new GpuVirtualClusterServersSettingsInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpuVirtualClusterServersSettingsVolume {
  /**
  * Boot order for the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#boot_index GpuVirtualCluster#boot_index}
  */
  readonly bootIndex: number;
  /**
  * Whether to delete the volume when the cluster is terminated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#delete_on_termination GpuVirtualCluster#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * ID of the image to use (required if source is 'image')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#image_id GpuVirtualCluster#image_id}
  */
  readonly imageId?: string;
  /**
  * Name of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#name GpuVirtualCluster#name}
  */
  readonly name: string;
  /**
  * Size of the volume in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#size GpuVirtualCluster#size}
  */
  readonly size: number;
  /**
  * ID of the snapshot to use (required if source is 'snapshot')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#snapshot_id GpuVirtualCluster#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Volume source (new, image, snapshot)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#source GpuVirtualCluster#source}
  */
  readonly source: string;
  /**
  * Tags to associate with the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#tags GpuVirtualCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#type GpuVirtualCluster#type}
  */
  readonly type: string;
}

export function gpuVirtualClusterServersSettingsVolumeToTerraform(struct?: GpuVirtualClusterServersSettingsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_index: cdktf.numberToTerraform(struct!.bootIndex),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    source: cdktf.stringToTerraform(struct!.source),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gpuVirtualClusterServersSettingsVolumeToHclTerraform(struct?: GpuVirtualClusterServersSettingsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_index: {
      value: cdktf.numberToHclTerraform(struct!.bootIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GpuVirtualClusterServersSettingsVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GpuVirtualClusterServersSettingsVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootIndex = this._bootIndex;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpuVirtualClusterServersSettingsVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootIndex = undefined;
      this._deleteOnTermination = undefined;
      this._imageId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
      this._source = undefined;
      this._tags = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootIndex = value.bootIndex;
      this._deleteOnTermination = value.deleteOnTermination;
      this._imageId = value.imageId;
      this._name = value.name;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
      this._source = value.source;
      this._tags = value.tags;
      this._type = value.type;
    }
  }

  // boot_index - computed: false, optional: false, required: true
  private _bootIndex?: number; 
  public get bootIndex() {
    return this.getNumberAttribute('boot_index');
  }
  public set bootIndex(value: number) {
    this._bootIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootIndexInput() {
    return this._bootIndex;
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
}

export class GpuVirtualClusterServersSettingsVolumeList extends cdktf.ComplexList {
  public internalValue? : GpuVirtualClusterServersSettingsVolume[] | cdktf.IResolvable

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
  public get(index: number): GpuVirtualClusterServersSettingsVolumeOutputReference {
    return new GpuVirtualClusterServersSettingsVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpuVirtualClusterServersSettings {
  /**
  * List of security group IDs to associate with the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#security_groups GpuVirtualCluster#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * User data to provide to the instance for cloud-init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#user_data GpuVirtualCluster#user_data}
  */
  readonly userData?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#credentials GpuVirtualCluster#credentials}
  */
  readonly credentials?: GpuVirtualClusterServersSettingsCredentials;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#interface GpuVirtualCluster#interface}
  */
  readonly interface: GpuVirtualClusterServersSettingsInterface[] | cdktf.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#volume GpuVirtualCluster#volume}
  */
  readonly volume: GpuVirtualClusterServersSettingsVolume[] | cdktf.IResolvable;
}

export function gpuVirtualClusterServersSettingsToTerraform(struct?: GpuVirtualClusterServersSettingsOutputReference | GpuVirtualClusterServersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    user_data: cdktf.stringToTerraform(struct!.userData),
    credentials: gpuVirtualClusterServersSettingsCredentialsToTerraform(struct!.credentials),
    interface: cdktf.listMapper(gpuVirtualClusterServersSettingsInterfaceToTerraform, true)(struct!.interface),
    volume: cdktf.listMapper(gpuVirtualClusterServersSettingsVolumeToTerraform, true)(struct!.volume),
  }
}


export function gpuVirtualClusterServersSettingsToHclTerraform(struct?: GpuVirtualClusterServersSettingsOutputReference | GpuVirtualClusterServersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: gpuVirtualClusterServersSettingsCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "GpuVirtualClusterServersSettingsCredentialsList",
    },
    interface: {
      value: cdktf.listMapperHcl(gpuVirtualClusterServersSettingsInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "set",
      storageClassType: "GpuVirtualClusterServersSettingsInterfaceList",
    },
    volume: {
      value: cdktf.listMapperHcl(gpuVirtualClusterServersSettingsVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "list",
      storageClassType: "GpuVirtualClusterServersSettingsVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpuVirtualClusterServersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpuVirtualClusterServersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpuVirtualClusterServersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._userData = undefined;
      this._credentials.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._userData = value.userData;
      this._credentials.internalValue = value.credentials;
      this._interface.internalValue = value.interface;
      this._volume.internalValue = value.volume;
    }
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // user_data - computed: true, optional: true, required: false
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

  // credentials - computed: false, optional: true, required: false
  private _credentials = new GpuVirtualClusterServersSettingsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: GpuVirtualClusterServersSettingsCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new GpuVirtualClusterServersSettingsInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: GpuVirtualClusterServersSettingsInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new GpuVirtualClusterServersSettingsVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: GpuVirtualClusterServersSettingsVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster gcore_gpu_virtual_cluster}
*/
export class GpuVirtualCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_gpu_virtual_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpuVirtualCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpuVirtualCluster to import
  * @param importFromId The id of the existing GpuVirtualCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpuVirtualCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_gpu_virtual_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/gpu_virtual_cluster gcore_gpu_virtual_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpuVirtualClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GpuVirtualClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_gpu_virtual_cluster',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.4',
        providerVersionConstraint: '0.32.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flavor = config.flavor;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._serversCount = config.serversCount;
    this._tags = config.tags;
    this._serversSettings.internalValue = config.serversSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // servers_count - computed: false, optional: false, required: true
  private _serversCount?: number; 
  public get serversCount() {
    return this.getNumberAttribute('servers_count');
  }
  public set serversCount(value: number) {
    this._serversCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversCountInput() {
    return this._serversCount;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // servers_settings - computed: false, optional: false, required: true
  private _serversSettings = new GpuVirtualClusterServersSettingsOutputReference(this, "servers_settings");
  public get serversSettings() {
    return this._serversSettings;
  }
  public putServersSettings(value: GpuVirtualClusterServersSettings) {
    this._serversSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversSettingsInput() {
    return this._serversSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      servers_count: cdktf.numberToTerraform(this._serversCount),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      servers_settings: gpuVirtualClusterServersSettingsToTerraform(this._serversSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers_count: {
        value: cdktf.numberToHclTerraform(this._serversCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      servers_settings: {
        value: gpuVirtualClusterServersSettingsToHclTerraform(this._serversSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpuVirtualClusterServersSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
