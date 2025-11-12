// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boot delay in seconds. Example: (0, 1, …).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#boot_delay VirtualServer#boot_delay}
  */
  readonly bootDelay?: number;
  /**
  * CPU type. Example: (`best-effort`, `standard`, `enterprise`, `performance`), defaults to `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#cpu_performance_type VirtualServer#cpu_performance_type}
  */
  readonly cpuPerformanceType?: string;
  /**
  * Amount of CPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#cpus VirtualServer#cpus}
  */
  readonly cpus: number;
  /**
  * Confirms a critical operation (if needed). Potentially dangerous operations (e.g. resulting in data loss) require an additional confirmation. The parameter is used for VM UPDATE requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#critical_operation_confirmed VirtualServer#critical_operation_confirmed}
  */
  readonly criticalOperationConfirmed?: boolean | cdktf.IResolvable;
  /**
  * DNS configuration. Maximum items 4. Defaults to template settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#dns VirtualServer#dns}
  */
  readonly dns?: string[];
  /**
  * Start the VM into BIOS setup on next boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#enter_bios_setup VirtualServer#enter_bios_setup}
  */
  readonly enterBiosSetup?: boolean | cdktf.IResolvable;
  /**
  * Certain operations may only be performed in powered off state. Such as: shrinking memory, shrinking/adding CPU, removing disk and scaling a disk beyond 2 GB. Passing this value as true will always execute a power off and reboot request after completing all other operations. Without this flag set to true scaling operations requiring a reboot will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#force_restart_if_needed VirtualServer#force_restart_if_needed}
  */
  readonly forceRestartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * Virtual server hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#hostname VirtualServer#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#id VirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#location_id VirtualServer#location_id}
  */
  readonly locationId: string;
  /**
  * Memory in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#memory VirtualServer#memory}
  */
  readonly memory: number;
  /**
  * Plaintext password. Example: ('!anx123mySuperStrongPassword123anx!', 'go3ju0la1ro3', …). For systems that support it, we strongly recommend using a SSH key instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#password VirtualServer#password}
  */
  readonly password?: string;
  /**
  * Script to be executed after provisioning. Consider the corresponding shebang at the beginning of your script. If you want to use PowerShell, the first line should be: #ps1_sysnative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#script VirtualServer#script}
  */
  readonly script?: string;
  /**
  * Amount of CPU sockets Number of cores have to be a multiple of sockets, as they will be spread evenly across all sockets. Defaults to number of cores, i.e. one socket per CPU core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#sockets VirtualServer#sockets}
  */
  readonly sockets?: number;
  /**
  * Public key (instead of password, only for Linux systems). Recommended over providing a plaintext password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#ssh_key VirtualServer#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Set of tags attached to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#tags VirtualServer#tags}
  */
  readonly tags?: string[];
  /**
  * Named template. Can be used instead of the template_id to select a template. Example: (`Debian 11`, `Windows 2022`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#template VirtualServer#template}
  */
  readonly template?: string;
  /**
  * Template build identifier optionally used with `template`. Will default to latest build. Example: `b42`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#template_build VirtualServer#template_build}
  */
  readonly templateBuild?: string;
  /**
  * Template identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#template_id VirtualServer#template_id}
  */
  readonly templateId?: string;
  /**
  * OS template type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#template_type VirtualServer#template_type}
  */
  readonly templateType?: string;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#disk VirtualServer#disk}
  */
  readonly disk: VirtualServerDisk[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#network VirtualServer#network}
  */
  readonly network?: VirtualServerNetwork[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#timeouts VirtualServer#timeouts}
  */
  readonly timeouts?: VirtualServerTimeouts;
}
export interface VirtualServerInfoDisksInfo {
}

export function virtualServerInfoDisksInfoToTerraform(struct?: VirtualServerInfoDisksInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualServerInfoDisksInfoToHclTerraform(struct?: VirtualServerInfoDisksInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualServerInfoDisksInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualServerInfoDisksInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerInfoDisksInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // bus_type_label - computed: true, optional: false, required: false
  public get busTypeLabel() {
    return this.getStringAttribute('bus_type_label');
  }

  // disk_gb - computed: true, optional: false, required: false
  public get diskGb() {
    return this.getNumberAttribute('disk_gb');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // latency - computed: true, optional: false, required: false
  public get latency() {
    return this.getNumberAttribute('latency');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

export class VirtualServerInfoDisksInfoList extends cdktf.ComplexList {

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
  public get(index: number): VirtualServerInfoDisksInfoOutputReference {
    return new VirtualServerInfoDisksInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServerInfoNetwork {
}

export function virtualServerInfoNetworkToTerraform(struct?: VirtualServerInfoNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualServerInfoNetworkToHclTerraform(struct?: VirtualServerInfoNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualServerInfoNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualServerInfoNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerInfoNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_limit - computed: true, optional: false, required: false
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_v4 - computed: true, optional: false, required: false
  public get ipV4() {
    return this.getListAttribute('ip_v4');
  }

  // ip_v6 - computed: true, optional: false, required: false
  public get ipV6() {
    return this.getListAttribute('ip_v6');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nic - computed: true, optional: false, required: false
  public get nic() {
    return this.getNumberAttribute('nic');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
}

export class VirtualServerInfoNetworkList extends cdktf.ComplexList {

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
  public get(index: number): VirtualServerInfoNetworkOutputReference {
    return new VirtualServerInfoNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServerInfo {
}

export function virtualServerInfoToTerraform(struct?: VirtualServerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualServerInfoToHclTerraform(struct?: VirtualServerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualServerInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualServerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // custom_name - computed: true, optional: false, required: false
  public get customName() {
    return this.getStringAttribute('custom_name');
  }

  // disks_info - computed: true, optional: false, required: false
  private _disksInfo = new VirtualServerInfoDisksInfoList(this, "disks_info", false);
  public get disksInfo() {
    return this._disksInfo;
  }

  // disks_number - computed: true, optional: false, required: false
  public get disksNumber() {
    return this.getNumberAttribute('disks_number');
  }

  // guest_os - computed: true, optional: false, required: false
  public get guestOs() {
    return this.getStringAttribute('guest_os');
  }

  // guest_tools_status - computed: true, optional: false, required: false
  public get guestToolsStatus() {
    return this.getStringAttribute('guest_tools_status');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // location_code - computed: true, optional: false, required: false
  public get locationCode() {
    return this.getStringAttribute('location_code');
  }

  // location_country - computed: true, optional: false, required: false
  public get locationCountry() {
    return this.getStringAttribute('location_country');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  private _network = new VirtualServerInfoNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version_tools - computed: true, optional: false, required: false
  public get versionTools() {
    return this.getStringAttribute('version_tools');
  }
}

export class VirtualServerInfoList extends cdktf.ComplexList {

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
  public get(index: number): VirtualServerInfoOutputReference {
    return new VirtualServerInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServerDisk {
  /**
  * Disk capacity in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#disk_gb VirtualServer#disk_gb}
  */
  readonly diskGb: number;
  /**
  * Disk category (limits disk performance, e.g. IOPS). Default value depends on location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#disk_type VirtualServer#disk_type}
  */
  readonly diskType?: string;
}

export function virtualServerDiskToTerraform(struct?: VirtualServerDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_gb: cdktf.numberToTerraform(struct!.diskGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function virtualServerDiskToHclTerraform(struct?: VirtualServerDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServerDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualServerDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGb = this._diskGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskGb = undefined;
      this._diskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskGb = value.diskGb;
      this._diskType = value.diskType;
    }
  }

  // disk_exact - computed: true, optional: false, required: false
  public get diskExact() {
    return this.getNumberAttribute('disk_exact');
  }

  // disk_gb - computed: false, optional: false, required: true
  private _diskGb?: number; 
  public get diskGb() {
    return this.getNumberAttribute('disk_gb');
  }
  public set diskGb(value: number) {
    this._diskGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbInput() {
    return this._diskGb;
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}

export class VirtualServerDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualServerDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualServerDiskOutputReference {
    return new VirtualServerDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServerNetwork {
  /**
  * Network interface bandwidth limit in Megabit/s, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#bandwidth_limit VirtualServer#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Requested set of IPs and IPs identifiers. IPs are ignored when using template_type 'from_scratch'. Defaults to free IPs from IP pool attached to VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#ips VirtualServer#ips}
  */
  readonly ips?: string[];
  /**
  * Network interface card type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#nic_type VirtualServer#nic_type}
  */
  readonly nicType: string;
  /**
  * VLAN identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#vlan_id VirtualServer#vlan_id}
  */
  readonly vlanId: string;
}

export function virtualServerNetworkToTerraform(struct?: VirtualServerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_limit: cdktf.numberToTerraform(struct!.bandwidthLimit),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function virtualServerNetworkToHclTerraform(struct?: VirtualServerNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_limit: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServerNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualServerNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthLimit = undefined;
      this._ips = undefined;
      this._nicType = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthLimit = value.bandwidthLimit;
      this._ips = value.ips;
      this._nicType = value.nicType;
      this._vlanId = value.vlanId;
    }
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // nic_type - computed: false, optional: false, required: true
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class VirtualServerNetworkList extends cdktf.ComplexList {
  public internalValue? : VirtualServerNetwork[] | cdktf.IResolvable

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
  public get(index: number): VirtualServerNetworkOutputReference {
    return new VirtualServerNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#create VirtualServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#delete VirtualServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#read VirtualServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#update VirtualServer#update}
  */
  readonly update?: string;
}

export function virtualServerTimeoutsToTerraform(struct?: VirtualServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function virtualServerTimeoutsToHclTerraform(struct?: VirtualServerTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualServerTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._read = value.read;
      this._update = value.update;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server anxcloud_virtual_server}
*/
export class VirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualServer to import
  * @param importFromId The id of the existing VirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/virtual_server anxcloud_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'anxcloud_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'anxcloud',
        providerVersion: '0.7.4',
        providerVersionConstraint: '0.7.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootDelay = config.bootDelay;
    this._cpuPerformanceType = config.cpuPerformanceType;
    this._cpus = config.cpus;
    this._criticalOperationConfirmed = config.criticalOperationConfirmed;
    this._dns = config.dns;
    this._enterBiosSetup = config.enterBiosSetup;
    this._forceRestartIfNeeded = config.forceRestartIfNeeded;
    this._hostname = config.hostname;
    this._id = config.id;
    this._locationId = config.locationId;
    this._memory = config.memory;
    this._password = config.password;
    this._script = config.script;
    this._sockets = config.sockets;
    this._sshKey = config.sshKey;
    this._tags = config.tags;
    this._template = config.template;
    this._templateBuild = config.templateBuild;
    this._templateId = config.templateId;
    this._templateType = config.templateType;
    this._disk.internalValue = config.disk;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_delay - computed: false, optional: true, required: false
  private _bootDelay?: number; 
  public get bootDelay() {
    return this.getNumberAttribute('boot_delay');
  }
  public set bootDelay(value: number) {
    this._bootDelay = value;
  }
  public resetBootDelay() {
    this._bootDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDelayInput() {
    return this._bootDelay;
  }

  // cpu_performance_type - computed: false, optional: true, required: false
  private _cpuPerformanceType?: string; 
  public get cpuPerformanceType() {
    return this.getStringAttribute('cpu_performance_type');
  }
  public set cpuPerformanceType(value: string) {
    this._cpuPerformanceType = value;
  }
  public resetCpuPerformanceType() {
    this._cpuPerformanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPerformanceTypeInput() {
    return this._cpuPerformanceType;
  }

  // cpus - computed: false, optional: false, required: true
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // critical_operation_confirmed - computed: false, optional: true, required: false
  private _criticalOperationConfirmed?: boolean | cdktf.IResolvable; 
  public get criticalOperationConfirmed() {
    return this.getBooleanAttribute('critical_operation_confirmed');
  }
  public set criticalOperationConfirmed(value: boolean | cdktf.IResolvable) {
    this._criticalOperationConfirmed = value;
  }
  public resetCriticalOperationConfirmed() {
    this._criticalOperationConfirmed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalOperationConfirmedInput() {
    return this._criticalOperationConfirmed;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // enter_bios_setup - computed: false, optional: true, required: false
  private _enterBiosSetup?: boolean | cdktf.IResolvable; 
  public get enterBiosSetup() {
    return this.getBooleanAttribute('enter_bios_setup');
  }
  public set enterBiosSetup(value: boolean | cdktf.IResolvable) {
    this._enterBiosSetup = value;
  }
  public resetEnterBiosSetup() {
    this._enterBiosSetup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterBiosSetupInput() {
    return this._enterBiosSetup;
  }

  // force_restart_if_needed - computed: false, optional: true, required: false
  private _forceRestartIfNeeded?: boolean | cdktf.IResolvable; 
  public get forceRestartIfNeeded() {
    return this.getBooleanAttribute('force_restart_if_needed');
  }
  public set forceRestartIfNeeded(value: boolean | cdktf.IResolvable) {
    this._forceRestartIfNeeded = value;
  }
  public resetForceRestartIfNeeded() {
    this._forceRestartIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRestartIfNeededInput() {
    return this._forceRestartIfNeeded;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // info - computed: true, optional: false, required: false
  private _info = new VirtualServerInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // sockets - computed: true, optional: true, required: false
  private _sockets?: number; 
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
  public set sockets(value: number) {
    this._sockets = value;
  }
  public resetSockets() {
    this._sockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_build - computed: false, optional: true, required: false
  private _templateBuild?: string; 
  public get templateBuild() {
    return this.getStringAttribute('template_build');
  }
  public set templateBuild(value: string) {
    this._templateBuild = value;
  }
  public resetTemplateBuild() {
    this._templateBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBuildInput() {
    return this._templateBuild;
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_type - computed: false, optional: true, required: false
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  public resetTemplateType() {
    this._templateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // disk - computed: false, optional: false, required: true
  private _disk = new VirtualServerDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VirtualServerDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new VirtualServerNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: VirtualServerNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualServerTimeouts) {
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
      boot_delay: cdktf.numberToTerraform(this._bootDelay),
      cpu_performance_type: cdktf.stringToTerraform(this._cpuPerformanceType),
      cpus: cdktf.numberToTerraform(this._cpus),
      critical_operation_confirmed: cdktf.booleanToTerraform(this._criticalOperationConfirmed),
      dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
      enter_bios_setup: cdktf.booleanToTerraform(this._enterBiosSetup),
      force_restart_if_needed: cdktf.booleanToTerraform(this._forceRestartIfNeeded),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.stringToTerraform(this._locationId),
      memory: cdktf.numberToTerraform(this._memory),
      password: cdktf.stringToTerraform(this._password),
      script: cdktf.stringToTerraform(this._script),
      sockets: cdktf.numberToTerraform(this._sockets),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.stringToTerraform(this._template),
      template_build: cdktf.stringToTerraform(this._templateBuild),
      template_id: cdktf.stringToTerraform(this._templateId),
      template_type: cdktf.stringToTerraform(this._templateType),
      disk: cdktf.listMapper(virtualServerDiskToTerraform, true)(this._disk.internalValue),
      network: cdktf.listMapper(virtualServerNetworkToTerraform, true)(this._network.internalValue),
      timeouts: virtualServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_delay: {
        value: cdktf.numberToHclTerraform(this._bootDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_performance_type: {
        value: cdktf.stringToHclTerraform(this._cpuPerformanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpus: {
        value: cdktf.numberToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      critical_operation_confirmed: {
        value: cdktf.booleanToHclTerraform(this._criticalOperationConfirmed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enter_bios_setup: {
        value: cdktf.booleanToHclTerraform(this._enterBiosSetup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_restart_if_needed: {
        value: cdktf.booleanToHclTerraform(this._forceRestartIfNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sockets: {
        value: cdktf.numberToHclTerraform(this._sockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
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
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_build: {
        value: cdktf.stringToHclTerraform(this._templateBuild),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_type: {
        value: cdktf.stringToHclTerraform(this._templateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.listMapperHcl(virtualServerDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualServerDiskList",
      },
      network: {
        value: cdktf.listMapperHcl(virtualServerNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualServerNetworkList",
      },
      timeouts: {
        value: virtualServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
