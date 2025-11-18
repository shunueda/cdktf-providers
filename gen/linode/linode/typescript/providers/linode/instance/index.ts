// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of SSH public keys to deploy for the root user on the newly created Linode. Only accepted if 'image' is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#authorized_keys Instance#authorized_keys}
  */
  readonly authorizedKeys?: string[];
  /**
  * A list of Linode usernames. If the usernames have associated SSH keys, the keys will be appended to the `root` user's `~/.ssh/authorized_keys` file automatically. Only accepted if 'image' is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#authorized_users Instance#authorized_users}
  */
  readonly authorizedUsers?: string[];
  /**
  * A Backup ID from another Linode's available backups. Your User must have read_write access to that Linode, the Backup must have a status of successful, and the Linode must be deployed to the same region as the Backup. See /linode/instances/{linodeId}/backups for a Linode's available backups. This field and the image field are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#backup_id Instance#backup_id}
  */
  readonly backupId?: number;
  /**
  * If this field is set to true, the created Linode will automatically be enrolled in the Linode Backup service. This will incur an additional charge. The cost for the Backup service is dependent on the Type of Linode deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#backups_enabled Instance#backups_enabled}
  */
  readonly backupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Label of the Instance Config that should be used to boot the Linode instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#boot_config_label Instance#boot_config_label}
  */
  readonly bootConfigLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#booted Instance#booted}
  */
  readonly booted?: boolean | cdktf.IResolvable;
  /**
  * The disk encryption policy for this Instance. NOTE: Disk encryption may not currently be available to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_encryption Instance#disk_encryption}
  */
  readonly diskEncryption?: string;
  /**
  * The ID of the firewall applied to the Linode instance during creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#firewall_id Instance#firewall_id}
  */
  readonly firewallId?: number;
  /**
  * The display group of the Linode instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#group Instance#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An Image ID to deploy the Disk from. Official Linode Images start with linode/, while your Images start with private/. See /images for more information on the Images available for you to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#image Instance#image}
  */
  readonly image?: string;
  /**
  * Specifies the interface type for the Linode. The default value is determined by the interfaces_for_new_linodes setting in the account settings. If the interface_generation option is set to linode, legacy configuration interfaces can no longer be used on the Linode. NOTE: Linode Interfaces may not currently be available to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#interface_generation Instance#interface_generation}
  */
  readonly interfaceGeneration?: string;
  /**
  * This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address upon creation, and may get a single private IPv4 address if needed. You could pass a reserved IPv4 address here to create a linode with a particular reserved IP address. You may need to open a support ticket to get additional IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ipv4 Instance#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * The Linode's label is for display purposes only. If no label is provided for a Linode, a default will be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#label Instance#label}
  */
  readonly label?: string;
  /**
  * This is the maintenance type of the Linode instance. If not provided, the default policy of the account will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#maintenance_policy Instance#maintenance_policy}
  */
  readonly maintenancePolicy?: string;
  /**
  * The type of migration to use for resize and migration operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#migration_type Instance#migration_type}
  */
  readonly migrationType?: string;
  /**
  * Whether Network Helper should be enabled for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#network_helper Instance#network_helper}
  */
  readonly networkHelper?: boolean | cdktf.IResolvable;
  /**
  * If true, this placement group's assignment is externally managed and will NOT be updated by this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#placement_group_externally_managed Instance#placement_group_externally_managed}
  */
  readonly placementGroupExternallyManaged?: boolean | cdktf.IResolvable;
  /**
  * If true, the created Linode will have private networking enabled, allowing use of the 192.168.128.0/17 network within the Linode's region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#private_ip Instance#private_ip}
  */
  readonly privateIp?: boolean | cdktf.IResolvable;
  /**
  * This is the location where the Linode was deployed. This cannot be changed without opening a support ticket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#region Instance#region}
  */
  readonly region: string;
  /**
  * If true, changes in Linode type will attempt to upsize or downsize implicitly created disks. This must be false if explicit disks are defined. This is an irreversible action as Linode disks cannot be automatically downsized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#resize_disk Instance#resize_disk}
  */
  readonly resizeDisk?: boolean | cdktf.IResolvable;
  /**
  * The password that will be initially assigned to the 'root' user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#root_pass Instance#root_pass}
  */
  readonly rootPass?: string;
  /**
  * A set of IPv4 addresses to share with this Linode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#shared_ipv4 Instance#shared_ipv4}
  */
  readonly sharedIpv4?: string[];
  /**
  * An object containing responses to any User Defined Fields present in the StackScript being deployed to this Linode. Only accepted if 'stackscript_id' is given. The required values depend on the StackScript being deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#stackscript_data Instance#stackscript_data}
  */
  readonly stackscriptData?: { [key: string]: string };
  /**
  * The StackScript to deploy to the newly created Linode. If provided, 'image' must also be provided, and must be an Image that is compatible with this StackScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#stackscript_id Instance#stackscript_id}
  */
  readonly stackscriptId?: number;
  /**
  * When deploying from an Image, this field is optional with a Linode API default of 512mb, otherwise it is ignored. This is used to set the swap disk size for the newly-created Linode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#swap_size Instance#swap_size}
  */
  readonly swapSize?: number;
  /**
  * An array of tags applied to this object. Tags are for organizational purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#tags Instance#tags}
  */
  readonly tags?: string[];
  /**
  * The type of instance to be deployed, determining the price and size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#type Instance#type}
  */
  readonly type?: string;
  /**
  * The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and will reboot it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible. To prevent a loop, Lassie will give up if there have been more than 5 boot jobs issued within 15 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#watchdog_enabled Instance#watchdog_enabled}
  */
  readonly watchdogEnabled?: boolean | cdktf.IResolvable;
  /**
  * alerts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#alerts Instance#alerts}
  */
  readonly alerts?: InstanceAlerts;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#config Instance#config}
  */
  readonly config?: InstanceConfigA[] | cdktf.IResolvable;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk Instance#disk}
  */
  readonly disk?: InstanceDisk[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#interface Instance#interface}
  */
  readonly interface?: InstanceInterface[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#metadata Instance#metadata}
  */
  readonly metadata?: InstanceMetadata[] | cdktf.IResolvable;
  /**
  * placement_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#placement_group Instance#placement_group}
  */
  readonly placementGroup?: InstancePlacementGroup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
}
export interface InstanceBackupsSchedule {
}

export function instanceBackupsScheduleToTerraform(struct?: InstanceBackupsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function instanceBackupsScheduleToHclTerraform(struct?: InstanceBackupsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InstanceBackupsScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceBackupsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceBackupsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // window - computed: true, optional: false, required: false
  public get window() {
    return this.getStringAttribute('window');
  }
}

export class InstanceBackupsScheduleList extends cdktf.ComplexList {

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
  public get(index: number): InstanceBackupsScheduleOutputReference {
    return new InstanceBackupsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceBackups {
}

export function instanceBackupsToTerraform(struct?: InstanceBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function instanceBackupsToHclTerraform(struct?: InstanceBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InstanceBackupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new InstanceBackupsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
}

export class InstanceBackupsList extends cdktf.ComplexList {

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
  public get(index: number): InstanceBackupsOutputReference {
    return new InstanceBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceSpecs {
}

export function instanceSpecsToTerraform(struct?: InstanceSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function instanceSpecsToHclTerraform(struct?: InstanceSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InstanceSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerated_devices - computed: true, optional: false, required: false
  public get acceleratedDevices() {
    return this.getNumberAttribute('accelerated_devices');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // gpus - computed: true, optional: false, required: false
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // transfer - computed: true, optional: false, required: false
  public get transfer() {
    return this.getNumberAttribute('transfer');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}

export class InstanceSpecsList extends cdktf.ComplexList {

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
  public get(index: number): InstanceSpecsOutputReference {
    return new InstanceSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceAlerts {
  /**
  * The percentage of CPU usage required to trigger an alert. If the average CPU usage over two hours exceeds this value, we'll send you an alert. If this is set to 0, the alert is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#cpu Instance#cpu}
  */
  readonly cpu?: number;
  /**
  * The amount of disk IO operation per second required to trigger an alert. If the average disk IO over two hours exceeds this value, we'll send you an alert. If set to 0, this alert is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#io Instance#io}
  */
  readonly io?: number;
  /**
  * The amount of incoming traffic, in Mbit/s, required to trigger an alert. If the average incoming traffic over two hours exceeds this value, we'll send you an alert. If this is set to 0 (zero), the alert is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#network_in Instance#network_in}
  */
  readonly networkIn?: number;
  /**
  * The amount of outbound traffic, in Mbit/s, required to trigger an alert. If the average outbound traffic over two hours exceeds this value, we'll send you an alert. If this is set to 0 (zero), the alert is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#network_out Instance#network_out}
  */
  readonly networkOut?: number;
  /**
  * The percentage of network transfer that may be used before an alert is triggered. When this value is exceeded, we'll alert you. If this is set to 0 (zero), the alert is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#transfer_quota Instance#transfer_quota}
  */
  readonly transferQuota?: number;
}

export function instanceAlertsToTerraform(struct?: InstanceAlertsOutputReference | InstanceAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    io: cdktf.numberToTerraform(struct!.io),
    network_in: cdktf.numberToTerraform(struct!.networkIn),
    network_out: cdktf.numberToTerraform(struct!.networkOut),
    transfer_quota: cdktf.numberToTerraform(struct!.transferQuota),
  }
}


export function instanceAlertsToHclTerraform(struct?: InstanceAlertsOutputReference | InstanceAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io: {
      value: cdktf.numberToHclTerraform(struct!.io),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_in: {
      value: cdktf.numberToHclTerraform(struct!.networkIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_out: {
      value: cdktf.numberToHclTerraform(struct!.networkOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transfer_quota: {
      value: cdktf.numberToHclTerraform(struct!.transferQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceAlertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceAlerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._io !== undefined) {
      hasAnyValues = true;
      internalValueResult.io = this._io;
    }
    if (this._networkIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIn = this._networkIn;
    }
    if (this._networkOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOut = this._networkOut;
    }
    if (this._transferQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferQuota = this._transferQuota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceAlerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._io = undefined;
      this._networkIn = undefined;
      this._networkOut = undefined;
      this._transferQuota = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._io = value.io;
      this._networkIn = value.networkIn;
      this._networkOut = value.networkOut;
      this._transferQuota = value.transferQuota;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // io - computed: true, optional: true, required: false
  private _io?: number; 
  public get io() {
    return this.getNumberAttribute('io');
  }
  public set io(value: number) {
    this._io = value;
  }
  public resetIo() {
    this._io = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioInput() {
    return this._io;
  }

  // network_in - computed: true, optional: true, required: false
  private _networkIn?: number; 
  public get networkIn() {
    return this.getNumberAttribute('network_in');
  }
  public set networkIn(value: number) {
    this._networkIn = value;
  }
  public resetNetworkIn() {
    this._networkIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInInput() {
    return this._networkIn;
  }

  // network_out - computed: true, optional: true, required: false
  private _networkOut?: number; 
  public get networkOut() {
    return this.getNumberAttribute('network_out');
  }
  public set networkOut(value: number) {
    this._networkOut = value;
  }
  public resetNetworkOut() {
    this._networkOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOutInput() {
    return this._networkOut;
  }

  // transfer_quota - computed: true, optional: true, required: false
  private _transferQuota?: number; 
  public get transferQuota() {
    return this.getNumberAttribute('transfer_quota');
  }
  public set transferQuota(value: number) {
    this._transferQuota = value;
  }
  public resetTransferQuota() {
    this._transferQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferQuotaInput() {
    return this._transferQuota;
  }
}
export interface InstanceConfigDevicesSda {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdaToTerraform(struct?: InstanceConfigDevicesSdaOutputReference | InstanceConfigDevicesSda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdaToHclTerraform(struct?: InstanceConfigDevicesSdaOutputReference | InstanceConfigDevicesSda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdb {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdbToTerraform(struct?: InstanceConfigDevicesSdbOutputReference | InstanceConfigDevicesSdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdbToHclTerraform(struct?: InstanceConfigDevicesSdbOutputReference | InstanceConfigDevicesSdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdc {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdcToTerraform(struct?: InstanceConfigDevicesSdcOutputReference | InstanceConfigDevicesSdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdcToHclTerraform(struct?: InstanceConfigDevicesSdcOutputReference | InstanceConfigDevicesSdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdd {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSddToTerraform(struct?: InstanceConfigDevicesSddOutputReference | InstanceConfigDevicesSdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSddToHclTerraform(struct?: InstanceConfigDevicesSddOutputReference | InstanceConfigDevicesSdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSde {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdeToTerraform(struct?: InstanceConfigDevicesSdeOutputReference | InstanceConfigDevicesSde): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdeToHclTerraform(struct?: InstanceConfigDevicesSdeOutputReference | InstanceConfigDevicesSde): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSde | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSde | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdf {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdfToTerraform(struct?: InstanceConfigDevicesSdfOutputReference | InstanceConfigDevicesSdf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdfToHclTerraform(struct?: InstanceConfigDevicesSdfOutputReference | InstanceConfigDevicesSdf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdg {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdgToTerraform(struct?: InstanceConfigDevicesSdgOutputReference | InstanceConfigDevicesSdg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdgToHclTerraform(struct?: InstanceConfigDevicesSdgOutputReference | InstanceConfigDevicesSdg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdh {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_id Instance#disk_id}
  */
  readonly diskId?: number;
  /**
  * The `label` of the `disk` to map to this `device` slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#disk_label Instance#disk_label}
  */
  readonly diskLabel?: string;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#volume_id Instance#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdhToTerraform(struct?: InstanceConfigDevicesSdhOutputReference | InstanceConfigDevicesSdh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    disk_label: cdktf.stringToTerraform(struct!.diskLabel),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdhToHclTerraform(struct?: InstanceConfigDevicesSdhOutputReference | InstanceConfigDevicesSdh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_label: {
      value: cdktf.stringToHclTerraform(struct!.diskLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._diskLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLabel = this._diskLabel;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._diskLabel = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._diskLabel = value.diskLabel;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_label - computed: false, optional: true, required: false
  private _diskLabel?: string; 
  public get diskLabel() {
    return this.getStringAttribute('disk_label');
  }
  public set diskLabel(value: string) {
    this._diskLabel = value;
  }
  public resetDiskLabel() {
    this._diskLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLabelInput() {
    return this._diskLabel;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevices {
  /**
  * sda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sda Instance#sda}
  */
  readonly sda?: InstanceConfigDevicesSda;
  /**
  * sdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sdb Instance#sdb}
  */
  readonly sdb?: InstanceConfigDevicesSdb;
  /**
  * sdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sdc Instance#sdc}
  */
  readonly sdc?: InstanceConfigDevicesSdc;
  /**
  * sdd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sdd Instance#sdd}
  */
  readonly sdd?: InstanceConfigDevicesSdd;
  /**
  * sde block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sde Instance#sde}
  */
  readonly sde?: InstanceConfigDevicesSde;
  /**
  * sdf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sdf Instance#sdf}
  */
  readonly sdf?: InstanceConfigDevicesSdf;
  /**
  * sdg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sdg Instance#sdg}
  */
  readonly sdg?: InstanceConfigDevicesSdg;
  /**
  * sdh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#sdh Instance#sdh}
  */
  readonly sdh?: InstanceConfigDevicesSdh;
}

export function instanceConfigDevicesToTerraform(struct?: InstanceConfigDevicesOutputReference | InstanceConfigDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sda: instanceConfigDevicesSdaToTerraform(struct!.sda),
    sdb: instanceConfigDevicesSdbToTerraform(struct!.sdb),
    sdc: instanceConfigDevicesSdcToTerraform(struct!.sdc),
    sdd: instanceConfigDevicesSddToTerraform(struct!.sdd),
    sde: instanceConfigDevicesSdeToTerraform(struct!.sde),
    sdf: instanceConfigDevicesSdfToTerraform(struct!.sdf),
    sdg: instanceConfigDevicesSdgToTerraform(struct!.sdg),
    sdh: instanceConfigDevicesSdhToTerraform(struct!.sdh),
  }
}


export function instanceConfigDevicesToHclTerraform(struct?: InstanceConfigDevicesOutputReference | InstanceConfigDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sda: {
      value: instanceConfigDevicesSdaToHclTerraform(struct!.sda),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdaList",
    },
    sdb: {
      value: instanceConfigDevicesSdbToHclTerraform(struct!.sdb),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdbList",
    },
    sdc: {
      value: instanceConfigDevicesSdcToHclTerraform(struct!.sdc),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdcList",
    },
    sdd: {
      value: instanceConfigDevicesSddToHclTerraform(struct!.sdd),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSddList",
    },
    sde: {
      value: instanceConfigDevicesSdeToHclTerraform(struct!.sde),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdeList",
    },
    sdf: {
      value: instanceConfigDevicesSdfToHclTerraform(struct!.sdf),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdfList",
    },
    sdg: {
      value: instanceConfigDevicesSdgToHclTerraform(struct!.sdg),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdgList",
    },
    sdh: {
      value: instanceConfigDevicesSdhToHclTerraform(struct!.sdh),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdhList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sda = this._sda?.internalValue;
    }
    if (this._sdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdb = this._sdb?.internalValue;
    }
    if (this._sdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdc = this._sdc?.internalValue;
    }
    if (this._sdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdd = this._sdd?.internalValue;
    }
    if (this._sde?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sde = this._sde?.internalValue;
    }
    if (this._sdf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdf = this._sdf?.internalValue;
    }
    if (this._sdg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdg = this._sdg?.internalValue;
    }
    if (this._sdh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdh = this._sdh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sda.internalValue = undefined;
      this._sdb.internalValue = undefined;
      this._sdc.internalValue = undefined;
      this._sdd.internalValue = undefined;
      this._sde.internalValue = undefined;
      this._sdf.internalValue = undefined;
      this._sdg.internalValue = undefined;
      this._sdh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sda.internalValue = value.sda;
      this._sdb.internalValue = value.sdb;
      this._sdc.internalValue = value.sdc;
      this._sdd.internalValue = value.sdd;
      this._sde.internalValue = value.sde;
      this._sdf.internalValue = value.sdf;
      this._sdg.internalValue = value.sdg;
      this._sdh.internalValue = value.sdh;
    }
  }

  // sda - computed: false, optional: true, required: false
  private _sda = new InstanceConfigDevicesSdaOutputReference(this, "sda");
  public get sda() {
    return this._sda;
  }
  public putSda(value: InstanceConfigDevicesSda) {
    this._sda.internalValue = value;
  }
  public resetSda() {
    this._sda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdaInput() {
    return this._sda.internalValue;
  }

  // sdb - computed: false, optional: true, required: false
  private _sdb = new InstanceConfigDevicesSdbOutputReference(this, "sdb");
  public get sdb() {
    return this._sdb;
  }
  public putSdb(value: InstanceConfigDevicesSdb) {
    this._sdb.internalValue = value;
  }
  public resetSdb() {
    this._sdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbInput() {
    return this._sdb.internalValue;
  }

  // sdc - computed: false, optional: true, required: false
  private _sdc = new InstanceConfigDevicesSdcOutputReference(this, "sdc");
  public get sdc() {
    return this._sdc;
  }
  public putSdc(value: InstanceConfigDevicesSdc) {
    this._sdc.internalValue = value;
  }
  public resetSdc() {
    this._sdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcInput() {
    return this._sdc.internalValue;
  }

  // sdd - computed: false, optional: true, required: false
  private _sdd = new InstanceConfigDevicesSddOutputReference(this, "sdd");
  public get sdd() {
    return this._sdd;
  }
  public putSdd(value: InstanceConfigDevicesSdd) {
    this._sdd.internalValue = value;
  }
  public resetSdd() {
    this._sdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddInput() {
    return this._sdd.internalValue;
  }

  // sde - computed: false, optional: true, required: false
  private _sde = new InstanceConfigDevicesSdeOutputReference(this, "sde");
  public get sde() {
    return this._sde;
  }
  public putSde(value: InstanceConfigDevicesSde) {
    this._sde.internalValue = value;
  }
  public resetSde() {
    this._sde.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdeInput() {
    return this._sde.internalValue;
  }

  // sdf - computed: false, optional: true, required: false
  private _sdf = new InstanceConfigDevicesSdfOutputReference(this, "sdf");
  public get sdf() {
    return this._sdf;
  }
  public putSdf(value: InstanceConfigDevicesSdf) {
    this._sdf.internalValue = value;
  }
  public resetSdf() {
    this._sdf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdfInput() {
    return this._sdf.internalValue;
  }

  // sdg - computed: false, optional: true, required: false
  private _sdg = new InstanceConfigDevicesSdgOutputReference(this, "sdg");
  public get sdg() {
    return this._sdg;
  }
  public putSdg(value: InstanceConfigDevicesSdg) {
    this._sdg.internalValue = value;
  }
  public resetSdg() {
    this._sdg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdgInput() {
    return this._sdg.internalValue;
  }

  // sdh - computed: false, optional: true, required: false
  private _sdh = new InstanceConfigDevicesSdhOutputReference(this, "sdh");
  public get sdh() {
    return this._sdh;
  }
  public putSdh(value: InstanceConfigDevicesSdh) {
    this._sdh.internalValue = value;
  }
  public resetSdh() {
    this._sdh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdhInput() {
    return this._sdh.internalValue;
  }
}
export interface InstanceConfigHelpers {
  /**
  * Populates the /dev directory early during boot without udev. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#devtmpfs_automount Instance#devtmpfs_automount}
  */
  readonly devtmpfsAutomount?: boolean | cdktf.IResolvable;
  /**
  * Controls the behavior of the Linode Config's Distribution Helper setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#distro Instance#distro}
  */
  readonly distro?: boolean | cdktf.IResolvable;
  /**
  * Creates a modules dependency file for the Kernel you run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#modules_dep Instance#modules_dep}
  */
  readonly modulesDep?: boolean | cdktf.IResolvable;
  /**
  * Controls the behavior of the Linode Config's Network Helper setting, used to automatically configure additional IP addresses assigned to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#network Instance#network}
  */
  readonly network?: boolean | cdktf.IResolvable;
  /**
  * Disables updatedb cron job to avoid disk thrashing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#updatedb_disabled Instance#updatedb_disabled}
  */
  readonly updatedbDisabled?: boolean | cdktf.IResolvable;
}

export function instanceConfigHelpersToTerraform(struct?: InstanceConfigHelpersOutputReference | InstanceConfigHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devtmpfs_automount: cdktf.booleanToTerraform(struct!.devtmpfsAutomount),
    distro: cdktf.booleanToTerraform(struct!.distro),
    modules_dep: cdktf.booleanToTerraform(struct!.modulesDep),
    network: cdktf.booleanToTerraform(struct!.network),
    updatedb_disabled: cdktf.booleanToTerraform(struct!.updatedbDisabled),
  }
}


export function instanceConfigHelpersToHclTerraform(struct?: InstanceConfigHelpersOutputReference | InstanceConfigHelpers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devtmpfs_automount: {
      value: cdktf.booleanToHclTerraform(struct!.devtmpfsAutomount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distro: {
      value: cdktf.booleanToHclTerraform(struct!.distro),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modules_dep: {
      value: cdktf.booleanToHclTerraform(struct!.modulesDep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.booleanToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    updatedb_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.updatedbDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigHelpersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigHelpers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devtmpfsAutomount !== undefined) {
      hasAnyValues = true;
      internalValueResult.devtmpfsAutomount = this._devtmpfsAutomount;
    }
    if (this._distro !== undefined) {
      hasAnyValues = true;
      internalValueResult.distro = this._distro;
    }
    if (this._modulesDep !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulesDep = this._modulesDep;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._updatedbDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedbDisabled = this._updatedbDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigHelpers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devtmpfsAutomount = undefined;
      this._distro = undefined;
      this._modulesDep = undefined;
      this._network = undefined;
      this._updatedbDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devtmpfsAutomount = value.devtmpfsAutomount;
      this._distro = value.distro;
      this._modulesDep = value.modulesDep;
      this._network = value.network;
      this._updatedbDisabled = value.updatedbDisabled;
    }
  }

  // devtmpfs_automount - computed: false, optional: true, required: false
  private _devtmpfsAutomount?: boolean | cdktf.IResolvable; 
  public get devtmpfsAutomount() {
    return this.getBooleanAttribute('devtmpfs_automount');
  }
  public set devtmpfsAutomount(value: boolean | cdktf.IResolvable) {
    this._devtmpfsAutomount = value;
  }
  public resetDevtmpfsAutomount() {
    this._devtmpfsAutomount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devtmpfsAutomountInput() {
    return this._devtmpfsAutomount;
  }

  // distro - computed: false, optional: true, required: false
  private _distro?: boolean | cdktf.IResolvable; 
  public get distro() {
    return this.getBooleanAttribute('distro');
  }
  public set distro(value: boolean | cdktf.IResolvable) {
    this._distro = value;
  }
  public resetDistro() {
    this._distro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroInput() {
    return this._distro;
  }

  // modules_dep - computed: false, optional: true, required: false
  private _modulesDep?: boolean | cdktf.IResolvable; 
  public get modulesDep() {
    return this.getBooleanAttribute('modules_dep');
  }
  public set modulesDep(value: boolean | cdktf.IResolvable) {
    this._modulesDep = value;
  }
  public resetModulesDep() {
    this._modulesDep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesDepInput() {
    return this._modulesDep;
  }

  // network - computed: false, optional: true, required: false
  private _network?: boolean | cdktf.IResolvable; 
  public get network() {
    return this.getBooleanAttribute('network');
  }
  public set network(value: boolean | cdktf.IResolvable) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // updatedb_disabled - computed: false, optional: true, required: false
  private _updatedbDisabled?: boolean | cdktf.IResolvable; 
  public get updatedbDisabled() {
    return this.getBooleanAttribute('updatedb_disabled');
  }
  public set updatedbDisabled(value: boolean | cdktf.IResolvable) {
    this._updatedbDisabled = value;
  }
  public resetUpdatedbDisabled() {
    this._updatedbDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedbDisabledInput() {
    return this._updatedbDisabled;
  }
}
export interface InstanceConfigInterfaceIpv4 {
  /**
  * The public IP that will be used for the one-to-one NAT purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#nat_1_1 Instance#nat_1_1}
  */
  readonly nat11?: string;
  /**
  * The IP from the VPC subnet to use for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#vpc Instance#vpc}
  */
  readonly vpc?: string;
}

export function instanceConfigInterfaceIpv4ToTerraform(struct?: InstanceConfigInterfaceIpv4OutputReference | InstanceConfigInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_1_1: cdktf.stringToTerraform(struct!.nat11),
    vpc: cdktf.stringToTerraform(struct!.vpc),
  }
}


export function instanceConfigInterfaceIpv4ToHclTerraform(struct?: InstanceConfigInterfaceIpv4OutputReference | InstanceConfigInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_1_1: {
      value: cdktf.stringToHclTerraform(struct!.nat11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigInterfaceIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nat11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat11 = this._nat11;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nat11 = undefined;
      this._vpc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nat11 = value.nat11;
      this._vpc = value.vpc;
    }
  }

  // nat_1_1 - computed: true, optional: true, required: false
  private _nat11?: string; 
  public get nat11() {
    return this.getStringAttribute('nat_1_1');
  }
  public set nat11(value: string) {
    this._nat11 = value;
  }
  public resetNat11() {
    this._nat11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat11Input() {
    return this._nat11;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }
}
export interface InstanceConfigInterfaceIpv6Range {
  /**
  * A prefix to add to this interface, or `auto` for a new IPv6 prefix to be automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#range Instance#range}
  */
  readonly range?: string;
}

export function instanceConfigInterfaceIpv6RangeToTerraform(struct?: InstanceConfigInterfaceIpv6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function instanceConfigInterfaceIpv6RangeToHclTerraform(struct?: InstanceConfigInterfaceIpv6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv6RangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigInterfaceIpv6Range | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv6Range | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // assigned_range - computed: true, optional: false, required: false
  public get assignedRange() {
    return this.getStringAttribute('assigned_range');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InstanceConfigInterfaceIpv6RangeList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigInterfaceIpv6Range[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigInterfaceIpv6RangeOutputReference {
    return new InstanceConfigInterfaceIpv6RangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceConfigInterfaceIpv6Slaac {
  /**
  * A SLAAC prefix to add to this interface, or `auto` for a new IPv6 prefix to be automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#range Instance#range}
  */
  readonly range?: string;
}

export function instanceConfigInterfaceIpv6SlaacToTerraform(struct?: InstanceConfigInterfaceIpv6Slaac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function instanceConfigInterfaceIpv6SlaacToHclTerraform(struct?: InstanceConfigInterfaceIpv6Slaac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv6SlaacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigInterfaceIpv6Slaac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv6Slaac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // assigned_range - computed: true, optional: false, required: false
  public get assignedRange() {
    return this.getStringAttribute('assigned_range');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InstanceConfigInterfaceIpv6SlaacList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigInterfaceIpv6Slaac[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigInterfaceIpv6SlaacOutputReference {
    return new InstanceConfigInterfaceIpv6SlaacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceConfigInterfaceIpv6 {
  /**
  * If true, connections from the interface to IPv6 addresses outside the VPC, and connections from IPv6 addresses outside the VPC to the interface will be permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#is_public Instance#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#range Instance#range}
  */
  readonly range?: InstanceConfigInterfaceIpv6Range[] | cdktf.IResolvable;
  /**
  * slaac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#slaac Instance#slaac}
  */
  readonly slaac?: InstanceConfigInterfaceIpv6Slaac[] | cdktf.IResolvable;
}

export function instanceConfigInterfaceIpv6ToTerraform(struct?: InstanceConfigInterfaceIpv6OutputReference | InstanceConfigInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    range: cdktf.listMapper(instanceConfigInterfaceIpv6RangeToTerraform, true)(struct!.range),
    slaac: cdktf.listMapper(instanceConfigInterfaceIpv6SlaacToTerraform, true)(struct!.slaac),
  }
}


export function instanceConfigInterfaceIpv6ToHclTerraform(struct?: InstanceConfigInterfaceIpv6OutputReference | InstanceConfigInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range: {
      value: cdktf.listMapperHcl(instanceConfigInterfaceIpv6RangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv6RangeList",
    },
    slaac: {
      value: cdktf.listMapperHcl(instanceConfigInterfaceIpv6SlaacToHclTerraform, true)(struct!.slaac),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv6SlaacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._slaac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaac = this._slaac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPublic = undefined;
      this._range.internalValue = undefined;
      this._slaac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPublic = value.isPublic;
      this._range.internalValue = value.range;
      this._slaac.internalValue = value.slaac;
    }
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // range - computed: false, optional: true, required: false
  private _range = new InstanceConfigInterfaceIpv6RangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: InstanceConfigInterfaceIpv6Range[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // slaac - computed: false, optional: true, required: false
  private _slaac = new InstanceConfigInterfaceIpv6SlaacList(this, "slaac", false);
  public get slaac() {
    return this._slaac;
  }
  public putSlaac(value: InstanceConfigInterfaceIpv6Slaac[] | cdktf.IResolvable) {
    this._slaac.internalValue = value;
  }
  public resetSlaac() {
    this._slaac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaacInput() {
    return this._slaac.internalValue;
  }
}
export interface InstanceConfigInterface {
  /**
  * List of VPC IPs or IP ranges inside the VPC subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ip_ranges Instance#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * This Network Interface's private IP address in Classless Inter-Domain Routing (CIDR) notation.This attribute is only allowed for VLAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ipam_address Instance#ipam_address}
  */
  readonly ipamAddress?: string;
  /**
  * The name of the VALN. This attribute is required for VLAN interfaces. This attribute is only allowed for VLAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#label Instance#label}
  */
  readonly label?: string;
  /**
  * Whether the interface is the primary interface that should have the default route for this Linode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#primary Instance#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The type of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#purpose Instance#purpose}
  */
  readonly purpose: string;
  /**
  * The ID of the subnet which the VPC interface is connected to.This attribute is required for VPC interfaces.This attribute is only allowed for VPC interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#subnet_id Instance#subnet_id}
  */
  readonly subnetId?: number;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ipv4 Instance#ipv4}
  */
  readonly ipv4?: InstanceConfigInterfaceIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ipv6 Instance#ipv6}
  */
  readonly ipv6?: InstanceConfigInterfaceIpv6;
}

export function instanceConfigInterfaceToTerraform(struct?: InstanceConfigInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    ipam_address: cdktf.stringToTerraform(struct!.ipamAddress),
    label: cdktf.stringToTerraform(struct!.label),
    primary: cdktf.booleanToTerraform(struct!.primary),
    purpose: cdktf.stringToTerraform(struct!.purpose),
    subnet_id: cdktf.numberToTerraform(struct!.subnetId),
    ipv4: instanceConfigInterfaceIpv4ToTerraform(struct!.ipv4),
    ipv6: instanceConfigInterfaceIpv6ToTerraform(struct!.ipv6),
  }
}


export function instanceConfigInterfaceToHclTerraform(struct?: InstanceConfigInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipam_address: {
      value: cdktf.stringToHclTerraform(struct!.ipamAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purpose: {
      value: cdktf.stringToHclTerraform(struct!.purpose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.numberToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4: {
      value: instanceConfigInterfaceIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv4List",
    },
    ipv6: {
      value: instanceConfigInterfaceIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._ipamAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamAddress = this._ipamAddress;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._purpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.purpose = this._purpose;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
      this._ipamAddress = undefined;
      this._label = undefined;
      this._primary = undefined;
      this._purpose = undefined;
      this._subnetId = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
      this._ipamAddress = value.ipamAddress;
      this._label = value.label;
      this._primary = value.primary;
      this._purpose = value.purpose;
      this._subnetId = value.subnetId;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // ipam_address - computed: false, optional: true, required: false
  private _ipamAddress?: string; 
  public get ipamAddress() {
    return this.getStringAttribute('ipam_address');
  }
  public set ipamAddress(value: string) {
    this._ipamAddress = value;
  }
  public resetIpamAddress() {
    this._ipamAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamAddressInput() {
    return this._ipamAddress;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new InstanceConfigInterfaceIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: InstanceConfigInterfaceIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new InstanceConfigInterfaceIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InstanceConfigInterfaceIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class InstanceConfigInterfaceList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigInterface[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigInterfaceOutputReference {
    return new InstanceConfigInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceConfigA {
  /**
  * Optional field for arbitrary User comments on this Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#comments Instance#comments}
  */
  readonly comments?: string;
  /**
  * A Kernel ID to boot a Linode with. Default is based on image choice. (examples: linode/latest-64bit, linode/grub2, linode/direct-disk)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#kernel Instance#kernel}
  */
  readonly kernel?: string;
  /**
  * The Config's label for display purposes.  Also used by `boot_config_label`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#label Instance#label}
  */
  readonly label: string;
  /**
  * Defaults to the total RAM of the Linode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#memory_limit Instance#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * The root device to boot. The corresponding disk must be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#root_device Instance#root_device}
  */
  readonly rootDevice?: string;
  /**
  * Defines the state of your Linode after booting. Defaults to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#run_level Instance#run_level}
  */
  readonly runLevel?: string;
  /**
  * Controls the virtualization mode. Defaults to paravirt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#virt_mode Instance#virt_mode}
  */
  readonly virtMode?: string;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#devices Instance#devices}
  */
  readonly devices?: InstanceConfigDevices;
  /**
  * helpers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#helpers Instance#helpers}
  */
  readonly helpers?: InstanceConfigHelpers;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#interface Instance#interface}
  */
  readonly interface?: InstanceConfigInterface[] | cdktf.IResolvable;
}

export function instanceConfigAToTerraform(struct?: InstanceConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    kernel: cdktf.stringToTerraform(struct!.kernel),
    label: cdktf.stringToTerraform(struct!.label),
    memory_limit: cdktf.numberToTerraform(struct!.memoryLimit),
    root_device: cdktf.stringToTerraform(struct!.rootDevice),
    run_level: cdktf.stringToTerraform(struct!.runLevel),
    virt_mode: cdktf.stringToTerraform(struct!.virtMode),
    devices: instanceConfigDevicesToTerraform(struct!.devices),
    helpers: instanceConfigHelpersToTerraform(struct!.helpers),
    interface: cdktf.listMapper(instanceConfigInterfaceToTerraform, true)(struct!.interface),
  }
}


export function instanceConfigAToHclTerraform(struct?: InstanceConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel: {
      value: cdktf.stringToHclTerraform(struct!.kernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_device: {
      value: cdktf.stringToHclTerraform(struct!.rootDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_level: {
      value: cdktf.stringToHclTerraform(struct!.runLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virt_mode: {
      value: cdktf.stringToHclTerraform(struct!.virtMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devices: {
      value: instanceConfigDevicesToHclTerraform(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesList",
    },
    helpers: {
      value: instanceConfigHelpersToHclTerraform(struct!.helpers),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigHelpersList",
    },
    interface: {
      value: cdktf.listMapperHcl(instanceConfigInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._rootDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDevice = this._rootDevice;
    }
    if (this._runLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.runLevel = this._runLevel;
    }
    if (this._virtMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtMode = this._virtMode;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._helpers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpers = this._helpers?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._kernel = undefined;
      this._label = undefined;
      this._memoryLimit = undefined;
      this._rootDevice = undefined;
      this._runLevel = undefined;
      this._virtMode = undefined;
      this._devices.internalValue = undefined;
      this._helpers.internalValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._kernel = value.kernel;
      this._label = value.label;
      this._memoryLimit = value.memoryLimit;
      this._rootDevice = value.rootDevice;
      this._runLevel = value.runLevel;
      this._virtMode = value.virtMode;
      this._devices.internalValue = value.devices;
      this._helpers.internalValue = value.helpers;
      this._interface.internalValue = value.interface;
    }
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // kernel - computed: true, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // root_device - computed: true, optional: true, required: false
  private _rootDevice?: string; 
  public get rootDevice() {
    return this.getStringAttribute('root_device');
  }
  public set rootDevice(value: string) {
    this._rootDevice = value;
  }
  public resetRootDevice() {
    this._rootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceInput() {
    return this._rootDevice;
  }

  // run_level - computed: false, optional: true, required: false
  private _runLevel?: string; 
  public get runLevel() {
    return this.getStringAttribute('run_level');
  }
  public set runLevel(value: string) {
    this._runLevel = value;
  }
  public resetRunLevel() {
    this._runLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLevelInput() {
    return this._runLevel;
  }

  // virt_mode - computed: false, optional: true, required: false
  private _virtMode?: string; 
  public get virtMode() {
    return this.getStringAttribute('virt_mode');
  }
  public set virtMode(value: string) {
    this._virtMode = value;
  }
  public resetVirtMode() {
    this._virtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtModeInput() {
    return this._virtMode;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new InstanceConfigDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: InstanceConfigDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // helpers - computed: false, optional: true, required: false
  private _helpers = new InstanceConfigHelpersOutputReference(this, "helpers");
  public get helpers() {
    return this._helpers;
  }
  public putHelpers(value: InstanceConfigHelpers) {
    this._helpers.internalValue = value;
  }
  public resetHelpers() {
    this._helpers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpersInput() {
    return this._helpers.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new InstanceConfigInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: InstanceConfigInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class InstanceConfigAList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigA[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigAOutputReference {
    return new InstanceConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceDisk {
  /**
  * A list of SSH public keys to deploy for the root user on the newly created Linode. Only accepted if 'image' is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#authorized_keys Instance#authorized_keys}
  */
  readonly authorizedKeys?: string[];
  /**
  * A list of Linode usernames. If the usernames have associated SSH keys, the keys will be appended to the `root` user's `~/.ssh/authorized_keys` file automatically. Only accepted if 'image' is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#authorized_users Instance#authorized_users}
  */
  readonly authorizedUsers?: string[];
  /**
  * The Disk filesystem can be one of: raw, swap, ext3, ext4, initrd (max 32mb)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#filesystem Instance#filesystem}
  */
  readonly filesystem?: string;
  /**
  * An Image ID to deploy the Disk from. Official Linode Images start with linode/, while your Images start with private/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#image Instance#image}
  */
  readonly image?: string;
  /**
  * The disks label, which acts as an identifier in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#label Instance#label}
  */
  readonly label: string;
  /**
  * If true, this Disk is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#read_only Instance#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The password that will be initialially assigned to the 'root' user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#root_pass Instance#root_pass}
  */
  readonly rootPass?: string;
  /**
  * The size of the Disk in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#size Instance#size}
  */
  readonly size: number;
  /**
  * An object containing responses to any User Defined Fields present in the StackScript being deployed to this Linode. Only accepted if 'stackscript_id' is given. The required values depend on the StackScript being deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#stackscript_data Instance#stackscript_data}
  */
  readonly stackscriptData?: { [key: string]: string };
  /**
  * The StackScript to deploy to the newly created Linode. If provided, 'image' must also be provided, and must be an Image that is compatible with this StackScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#stackscript_id Instance#stackscript_id}
  */
  readonly stackscriptId?: number;
}

export function instanceDiskToTerraform(struct?: InstanceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedKeys),
    authorized_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedUsers),
    filesystem: cdktf.stringToTerraform(struct!.filesystem),
    image: cdktf.stringToTerraform(struct!.image),
    label: cdktf.stringToTerraform(struct!.label),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    root_pass: cdktf.stringToTerraform(struct!.rootPass),
    size: cdktf.numberToTerraform(struct!.size),
    stackscript_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.stackscriptData),
    stackscript_id: cdktf.numberToTerraform(struct!.stackscriptId),
  }
}


export function instanceDiskToHclTerraform(struct?: InstanceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authorized_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filesystem: {
      value: cdktf.stringToHclTerraform(struct!.filesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    root_pass: {
      value: cdktf.stringToHclTerraform(struct!.rootPass),
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
    stackscript_data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.stackscriptData),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    stackscript_id: {
      value: cdktf.numberToHclTerraform(struct!.stackscriptId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKeys = this._authorizedKeys;
    }
    if (this._authorizedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedUsers = this._authorizedUsers;
    }
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._rootPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPass = this._rootPass;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._stackscriptData !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackscriptData = this._stackscriptData;
    }
    if (this._stackscriptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackscriptId = this._stackscriptId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedKeys = undefined;
      this._authorizedUsers = undefined;
      this._filesystem = undefined;
      this._image = undefined;
      this._label = undefined;
      this._readOnly = undefined;
      this._rootPass = undefined;
      this._size = undefined;
      this._stackscriptData = undefined;
      this._stackscriptId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedKeys = value.authorizedKeys;
      this._authorizedUsers = value.authorizedUsers;
      this._filesystem = value.filesystem;
      this._image = value.image;
      this._label = value.label;
      this._readOnly = value.readOnly;
      this._rootPass = value.rootPass;
      this._size = value.size;
      this._stackscriptData = value.stackscriptData;
      this._stackscriptId = value.stackscriptId;
    }
  }

  // authorized_keys - computed: false, optional: true, required: false
  private _authorizedKeys?: string[]; 
  public get authorizedKeys() {
    return this.getListAttribute('authorized_keys');
  }
  public set authorizedKeys(value: string[]) {
    this._authorizedKeys = value;
  }
  public resetAuthorizedKeys() {
    this._authorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysInput() {
    return this._authorizedKeys;
  }

  // authorized_users - computed: false, optional: true, required: false
  private _authorizedUsers?: string[]; 
  public get authorizedUsers() {
    return this.getListAttribute('authorized_users');
  }
  public set authorizedUsers(value: string[]) {
    this._authorizedUsers = value;
  }
  public resetAuthorizedUsers() {
    this._authorizedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUsersInput() {
    return this._authorizedUsers;
  }

  // filesystem - computed: true, optional: true, required: false
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  public resetFilesystem() {
    this._filesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // root_pass - computed: false, optional: true, required: false
  private _rootPass?: string; 
  public get rootPass() {
    return this.getStringAttribute('root_pass');
  }
  public set rootPass(value: string) {
    this._rootPass = value;
  }
  public resetRootPass() {
    this._rootPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPassInput() {
    return this._rootPass;
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

  // stackscript_data - computed: true, optional: true, required: false
  private _stackscriptData?: { [key: string]: string }; 
  public get stackscriptData() {
    return this.getStringMapAttribute('stackscript_data');
  }
  public set stackscriptData(value: { [key: string]: string }) {
    this._stackscriptData = value;
  }
  public resetStackscriptData() {
    this._stackscriptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptDataInput() {
    return this._stackscriptData;
  }

  // stackscript_id - computed: true, optional: true, required: false
  private _stackscriptId?: number; 
  public get stackscriptId() {
    return this.getNumberAttribute('stackscript_id');
  }
  public set stackscriptId(value: number) {
    this._stackscriptId = value;
  }
  public resetStackscriptId() {
    this._stackscriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptIdInput() {
    return this._stackscriptId;
  }
}

export class InstanceDiskList extends cdktf.ComplexList {
  public internalValue? : InstanceDisk[] | cdktf.IResolvable

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
  public get(index: number): InstanceDiskOutputReference {
    return new InstanceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceInterfaceIpv4 {
  /**
  * The public IP that will be used for the one-to-one NAT purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#nat_1_1 Instance#nat_1_1}
  */
  readonly nat11?: string;
  /**
  * The IP from the VPC subnet to use for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#vpc Instance#vpc}
  */
  readonly vpc?: string;
}

export function instanceInterfaceIpv4ToTerraform(struct?: InstanceInterfaceIpv4OutputReference | InstanceInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_1_1: cdktf.stringToTerraform(struct!.nat11),
    vpc: cdktf.stringToTerraform(struct!.vpc),
  }
}


export function instanceInterfaceIpv4ToHclTerraform(struct?: InstanceInterfaceIpv4OutputReference | InstanceInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_1_1: {
      value: cdktf.stringToHclTerraform(struct!.nat11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceInterfaceIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceInterfaceIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nat11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat11 = this._nat11;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceInterfaceIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nat11 = undefined;
      this._vpc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nat11 = value.nat11;
      this._vpc = value.vpc;
    }
  }

  // nat_1_1 - computed: true, optional: true, required: false
  private _nat11?: string; 
  public get nat11() {
    return this.getStringAttribute('nat_1_1');
  }
  public set nat11(value: string) {
    this._nat11 = value;
  }
  public resetNat11() {
    this._nat11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat11Input() {
    return this._nat11;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }
}
export interface InstanceInterfaceIpv6Range {
  /**
  * A prefix to add to this interface, or `auto` for a new IPv6 prefix to be automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#range Instance#range}
  */
  readonly range?: string;
}

export function instanceInterfaceIpv6RangeToTerraform(struct?: InstanceInterfaceIpv6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function instanceInterfaceIpv6RangeToHclTerraform(struct?: InstanceInterfaceIpv6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceInterfaceIpv6RangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceInterfaceIpv6Range | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceInterfaceIpv6Range | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // assigned_range - computed: true, optional: false, required: false
  public get assignedRange() {
    return this.getStringAttribute('assigned_range');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InstanceInterfaceIpv6RangeList extends cdktf.ComplexList {
  public internalValue? : InstanceInterfaceIpv6Range[] | cdktf.IResolvable

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
  public get(index: number): InstanceInterfaceIpv6RangeOutputReference {
    return new InstanceInterfaceIpv6RangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceInterfaceIpv6Slaac {
  /**
  * A SLAAC prefix to add to this interface, or `auto` for a new IPv6 prefix to be automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#range Instance#range}
  */
  readonly range?: string;
}

export function instanceInterfaceIpv6SlaacToTerraform(struct?: InstanceInterfaceIpv6Slaac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function instanceInterfaceIpv6SlaacToHclTerraform(struct?: InstanceInterfaceIpv6Slaac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceInterfaceIpv6SlaacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceInterfaceIpv6Slaac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceInterfaceIpv6Slaac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // assigned_range - computed: true, optional: false, required: false
  public get assignedRange() {
    return this.getStringAttribute('assigned_range');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InstanceInterfaceIpv6SlaacList extends cdktf.ComplexList {
  public internalValue? : InstanceInterfaceIpv6Slaac[] | cdktf.IResolvable

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
  public get(index: number): InstanceInterfaceIpv6SlaacOutputReference {
    return new InstanceInterfaceIpv6SlaacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceInterfaceIpv6 {
  /**
  * If true, connections from the interface to IPv6 addresses outside the VPC, and connections from IPv6 addresses outside the VPC to the interface will be permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#is_public Instance#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#range Instance#range}
  */
  readonly range?: InstanceInterfaceIpv6Range[] | cdktf.IResolvable;
  /**
  * slaac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#slaac Instance#slaac}
  */
  readonly slaac?: InstanceInterfaceIpv6Slaac[] | cdktf.IResolvable;
}

export function instanceInterfaceIpv6ToTerraform(struct?: InstanceInterfaceIpv6OutputReference | InstanceInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    range: cdktf.listMapper(instanceInterfaceIpv6RangeToTerraform, true)(struct!.range),
    slaac: cdktf.listMapper(instanceInterfaceIpv6SlaacToTerraform, true)(struct!.slaac),
  }
}


export function instanceInterfaceIpv6ToHclTerraform(struct?: InstanceInterfaceIpv6OutputReference | InstanceInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range: {
      value: cdktf.listMapperHcl(instanceInterfaceIpv6RangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceInterfaceIpv6RangeList",
    },
    slaac: {
      value: cdktf.listMapperHcl(instanceInterfaceIpv6SlaacToHclTerraform, true)(struct!.slaac),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceInterfaceIpv6SlaacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._slaac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaac = this._slaac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPublic = undefined;
      this._range.internalValue = undefined;
      this._slaac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPublic = value.isPublic;
      this._range.internalValue = value.range;
      this._slaac.internalValue = value.slaac;
    }
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // range - computed: false, optional: true, required: false
  private _range = new InstanceInterfaceIpv6RangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: InstanceInterfaceIpv6Range[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // slaac - computed: false, optional: true, required: false
  private _slaac = new InstanceInterfaceIpv6SlaacList(this, "slaac", false);
  public get slaac() {
    return this._slaac;
  }
  public putSlaac(value: InstanceInterfaceIpv6Slaac[] | cdktf.IResolvable) {
    this._slaac.internalValue = value;
  }
  public resetSlaac() {
    this._slaac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaacInput() {
    return this._slaac.internalValue;
  }
}
export interface InstanceInterface {
  /**
  * List of VPC IPs or IP ranges inside the VPC subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ip_ranges Instance#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * This Network Interface's private IP address in Classless Inter-Domain Routing (CIDR) notation.This attribute is only allowed for VLAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ipam_address Instance#ipam_address}
  */
  readonly ipamAddress?: string;
  /**
  * The name of the VALN. This attribute is required for VLAN interfaces. This attribute is only allowed for VLAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#label Instance#label}
  */
  readonly label?: string;
  /**
  * Whether the interface is the primary interface that should have the default route for this Linode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#primary Instance#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The type of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#purpose Instance#purpose}
  */
  readonly purpose: string;
  /**
  * The ID of the subnet which the VPC interface is connected to.This attribute is required for VPC interfaces.This attribute is only allowed for VPC interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#subnet_id Instance#subnet_id}
  */
  readonly subnetId?: number;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ipv4 Instance#ipv4}
  */
  readonly ipv4?: InstanceInterfaceIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#ipv6 Instance#ipv6}
  */
  readonly ipv6?: InstanceInterfaceIpv6;
}

export function instanceInterfaceToTerraform(struct?: InstanceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    ipam_address: cdktf.stringToTerraform(struct!.ipamAddress),
    label: cdktf.stringToTerraform(struct!.label),
    primary: cdktf.booleanToTerraform(struct!.primary),
    purpose: cdktf.stringToTerraform(struct!.purpose),
    subnet_id: cdktf.numberToTerraform(struct!.subnetId),
    ipv4: instanceInterfaceIpv4ToTerraform(struct!.ipv4),
    ipv6: instanceInterfaceIpv6ToTerraform(struct!.ipv6),
  }
}


export function instanceInterfaceToHclTerraform(struct?: InstanceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipam_address: {
      value: cdktf.stringToHclTerraform(struct!.ipamAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purpose: {
      value: cdktf.stringToHclTerraform(struct!.purpose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.numberToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4: {
      value: instanceInterfaceIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceInterfaceIpv4List",
    },
    ipv6: {
      value: instanceInterfaceIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceInterfaceIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._ipamAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamAddress = this._ipamAddress;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._purpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.purpose = this._purpose;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
      this._ipamAddress = undefined;
      this._label = undefined;
      this._primary = undefined;
      this._purpose = undefined;
      this._subnetId = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRanges = value.ipRanges;
      this._ipamAddress = value.ipamAddress;
      this._label = value.label;
      this._primary = value.primary;
      this._purpose = value.purpose;
      this._subnetId = value.subnetId;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // ipam_address - computed: false, optional: true, required: false
  private _ipamAddress?: string; 
  public get ipamAddress() {
    return this.getStringAttribute('ipam_address');
  }
  public set ipamAddress(value: string) {
    this._ipamAddress = value;
  }
  public resetIpamAddress() {
    this._ipamAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamAddressInput() {
    return this._ipamAddress;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new InstanceInterfaceIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: InstanceInterfaceIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new InstanceInterfaceIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InstanceInterfaceIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class InstanceInterfaceList extends cdktf.ComplexList {
  public internalValue? : InstanceInterface[] | cdktf.IResolvable

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
  public get(index: number): InstanceInterfaceOutputReference {
    return new InstanceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceMetadata {
  /**
  * The base64-encoded user-defined data exposed to this instance through the Linode Metadata service. Refer to the base64encode(...) function for information on encoding content for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#user_data Instance#user_data}
  */
  readonly userData?: string;
}

export function instanceMetadataToTerraform(struct?: InstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function instanceMetadataToHclTerraform(struct?: InstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class InstanceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userData = value.userData;
    }
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

export class InstanceMetadataList extends cdktf.ComplexList {
  public internalValue? : InstanceMetadata[] | cdktf.IResolvable

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
  public get(index: number): InstanceMetadataOutputReference {
    return new InstanceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstancePlacementGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#compliant_only Instance#compliant_only}
  */
  readonly compliantOnly?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Placement Group to assign this Linode to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Whether compliance is strictly enforced by this Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#placement_group_policy Instance#placement_group_policy}
  */
  readonly placementGroupPolicy?: string;
}

export function instancePlacementGroupToTerraform(struct?: InstancePlacementGroupOutputReference | InstancePlacementGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliant_only: cdktf.booleanToTerraform(struct!.compliantOnly),
    id: cdktf.numberToTerraform(struct!.id),
    placement_group_policy: cdktf.stringToTerraform(struct!.placementGroupPolicy),
  }
}


export function instancePlacementGroupToHclTerraform(struct?: InstancePlacementGroupOutputReference | InstancePlacementGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliant_only: {
      value: cdktf.booleanToHclTerraform(struct!.compliantOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    placement_group_policy: {
      value: cdktf.stringToHclTerraform(struct!.placementGroupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePlacementGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstancePlacementGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compliantOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.compliantOnly = this._compliantOnly;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._placementGroupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroupPolicy = this._placementGroupPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePlacementGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compliantOnly = undefined;
      this._id = undefined;
      this._placementGroupPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compliantOnly = value.compliantOnly;
      this._id = value.id;
      this._placementGroupPolicy = value.placementGroupPolicy;
    }
  }

  // compliant_only - computed: false, optional: true, required: false
  private _compliantOnly?: boolean | cdktf.IResolvable; 
  public get compliantOnly() {
    return this.getBooleanAttribute('compliant_only');
  }
  public set compliantOnly(value: boolean | cdktf.IResolvable) {
    this._compliantOnly = value;
  }
  public resetCompliantOnly() {
    this._compliantOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliantOnlyInput() {
    return this._compliantOnly;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // placement_group_policy - computed: true, optional: true, required: false
  private _placementGroupPolicy?: string; 
  public get placementGroupPolicy() {
    return this.getStringAttribute('placement_group_policy');
  }
  public set placementGroupPolicy(value: string) {
    this._placementGroupPolicy = value;
  }
  public resetPlacementGroupPolicy() {
    this._placementGroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupPolicyInput() {
    return this._placementGroupPolicy;
  }

  // placement_group_type - computed: true, optional: false, required: false
  public get placementGroupType() {
    return this.getStringAttribute('placement_group_type');
  }
}
export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#delete Instance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#update Instance#update}
  */
  readonly update?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance linode_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/instance linode_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_instance',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedKeys = config.authorizedKeys;
    this._authorizedUsers = config.authorizedUsers;
    this._backupId = config.backupId;
    this._backupsEnabled = config.backupsEnabled;
    this._bootConfigLabel = config.bootConfigLabel;
    this._booted = config.booted;
    this._diskEncryption = config.diskEncryption;
    this._firewallId = config.firewallId;
    this._group = config.group;
    this._id = config.id;
    this._image = config.image;
    this._interfaceGeneration = config.interfaceGeneration;
    this._ipv4 = config.ipv4;
    this._label = config.label;
    this._maintenancePolicy = config.maintenancePolicy;
    this._migrationType = config.migrationType;
    this._networkHelper = config.networkHelper;
    this._placementGroupExternallyManaged = config.placementGroupExternallyManaged;
    this._privateIp = config.privateIp;
    this._region = config.region;
    this._resizeDisk = config.resizeDisk;
    this._rootPass = config.rootPass;
    this._sharedIpv4 = config.sharedIpv4;
    this._stackscriptData = config.stackscriptData;
    this._stackscriptId = config.stackscriptId;
    this._swapSize = config.swapSize;
    this._tags = config.tags;
    this._type = config.type;
    this._watchdogEnabled = config.watchdogEnabled;
    this._alerts.internalValue = config.alerts;
    this._config.internalValue = config.config;
    this._disk.internalValue = config.disk;
    this._interface.internalValue = config.interface;
    this._metadata.internalValue = config.metadata;
    this._placementGroup.internalValue = config.placementGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_keys - computed: false, optional: true, required: false
  private _authorizedKeys?: string[]; 
  public get authorizedKeys() {
    return this.getListAttribute('authorized_keys');
  }
  public set authorizedKeys(value: string[]) {
    this._authorizedKeys = value;
  }
  public resetAuthorizedKeys() {
    this._authorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysInput() {
    return this._authorizedKeys;
  }

  // authorized_users - computed: false, optional: true, required: false
  private _authorizedUsers?: string[]; 
  public get authorizedUsers() {
    return this.getListAttribute('authorized_users');
  }
  public set authorizedUsers(value: string[]) {
    this._authorizedUsers = value;
  }
  public resetAuthorizedUsers() {
    this._authorizedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUsersInput() {
    return this._authorizedUsers;
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: number; 
  public get backupId() {
    return this.getNumberAttribute('backup_id');
  }
  public set backupId(value: number) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backups - computed: true, optional: false, required: false
  private _backups = new InstanceBackupsList(this, "backups", false);
  public get backups() {
    return this._backups;
  }

  // backups_enabled - computed: true, optional: true, required: false
  private _backupsEnabled?: boolean | cdktf.IResolvable; 
  public get backupsEnabled() {
    return this.getBooleanAttribute('backups_enabled');
  }
  public set backupsEnabled(value: boolean | cdktf.IResolvable) {
    this._backupsEnabled = value;
  }
  public resetBackupsEnabled() {
    this._backupsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsEnabledInput() {
    return this._backupsEnabled;
  }

  // boot_config_label - computed: true, optional: true, required: false
  private _bootConfigLabel?: string; 
  public get bootConfigLabel() {
    return this.getStringAttribute('boot_config_label');
  }
  public set bootConfigLabel(value: string) {
    this._bootConfigLabel = value;
  }
  public resetBootConfigLabel() {
    this._bootConfigLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootConfigLabelInput() {
    return this._bootConfigLabel;
  }

  // booted - computed: true, optional: true, required: false
  private _booted?: boolean | cdktf.IResolvable; 
  public get booted() {
    return this.getBooleanAttribute('booted');
  }
  public set booted(value: boolean | cdktf.IResolvable) {
    this._booted = value;
  }
  public resetBooted() {
    this._booted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootedInput() {
    return this._booted;
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // disk_encryption - computed: true, optional: true, required: false
  private _diskEncryption?: string; 
  public get diskEncryption() {
    return this.getStringAttribute('disk_encryption');
  }
  public set diskEncryption(value: string) {
    this._diskEncryption = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption;
  }

  // firewall_id - computed: false, optional: true, required: false
  private _firewallId?: number; 
  public get firewallId() {
    return this.getNumberAttribute('firewall_id');
  }
  public set firewallId(value: number) {
    this._firewallId = value;
  }
  public resetFirewallId() {
    this._firewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // has_user_data - computed: true, optional: false, required: false
  public get hasUserData() {
    return this.getBooleanAttribute('has_user_data');
  }

  // host_uuid - computed: true, optional: false, required: false
  public get hostUuid() {
    return this.getStringAttribute('host_uuid');
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // interface_generation - computed: true, optional: true, required: false
  private _interfaceGeneration?: string; 
  public get interfaceGeneration() {
    return this.getStringAttribute('interface_generation');
  }
  public set interfaceGeneration(value: string) {
    this._interfaceGeneration = value;
  }
  public resetInterfaceGeneration() {
    this._interfaceGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceGenerationInput() {
    return this._interfaceGeneration;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string[]; 
  public get ipv4() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4'));
  }
  public set ipv4(value: string[]) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // lke_cluster_id - computed: true, optional: false, required: false
  public get lkeClusterId() {
    return this.getNumberAttribute('lke_cluster_id');
  }

  // maintenance_policy - computed: true, optional: true, required: false
  private _maintenancePolicy?: string; 
  public get maintenancePolicy() {
    return this.getStringAttribute('maintenance_policy');
  }
  public set maintenancePolicy(value: string) {
    this._maintenancePolicy = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy;
  }

  // migration_type - computed: false, optional: true, required: false
  private _migrationType?: string; 
  public get migrationType() {
    return this.getStringAttribute('migration_type');
  }
  public set migrationType(value: string) {
    this._migrationType = value;
  }
  public resetMigrationType() {
    this._migrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationTypeInput() {
    return this._migrationType;
  }

  // network_helper - computed: false, optional: true, required: false
  private _networkHelper?: boolean | cdktf.IResolvable; 
  public get networkHelper() {
    return this.getBooleanAttribute('network_helper');
  }
  public set networkHelper(value: boolean | cdktf.IResolvable) {
    this._networkHelper = value;
  }
  public resetNetworkHelper() {
    this._networkHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkHelperInput() {
    return this._networkHelper;
  }

  // placement_group_externally_managed - computed: false, optional: true, required: false
  private _placementGroupExternallyManaged?: boolean | cdktf.IResolvable; 
  public get placementGroupExternallyManaged() {
    return this.getBooleanAttribute('placement_group_externally_managed');
  }
  public set placementGroupExternallyManaged(value: boolean | cdktf.IResolvable) {
    this._placementGroupExternallyManaged = value;
  }
  public resetPlacementGroupExternallyManaged() {
    this._placementGroupExternallyManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupExternallyManagedInput() {
    return this._placementGroupExternallyManaged;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: boolean | cdktf.IResolvable; 
  public get privateIp() {
    return this.getBooleanAttribute('private_ip');
  }
  public set privateIp(value: boolean | cdktf.IResolvable) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resize_disk - computed: false, optional: true, required: false
  private _resizeDisk?: boolean | cdktf.IResolvable; 
  public get resizeDisk() {
    return this.getBooleanAttribute('resize_disk');
  }
  public set resizeDisk(value: boolean | cdktf.IResolvable) {
    this._resizeDisk = value;
  }
  public resetResizeDisk() {
    this._resizeDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeDiskInput() {
    return this._resizeDisk;
  }

  // root_pass - computed: false, optional: true, required: false
  private _rootPass?: string; 
  public get rootPass() {
    return this.getStringAttribute('root_pass');
  }
  public set rootPass(value: string) {
    this._rootPass = value;
  }
  public resetRootPass() {
    this._rootPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPassInput() {
    return this._rootPass;
  }

  // shared_ipv4 - computed: true, optional: true, required: false
  private _sharedIpv4?: string[]; 
  public get sharedIpv4() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_ipv4'));
  }
  public set sharedIpv4(value: string[]) {
    this._sharedIpv4 = value;
  }
  public resetSharedIpv4() {
    this._sharedIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedIpv4Input() {
    return this._sharedIpv4;
  }

  // specs - computed: true, optional: false, required: false
  private _specs = new InstanceSpecsList(this, "specs", false);
  public get specs() {
    return this._specs;
  }

  // stackscript_data - computed: false, optional: true, required: false
  private _stackscriptData?: { [key: string]: string }; 
  public get stackscriptData() {
    return this.getStringMapAttribute('stackscript_data');
  }
  public set stackscriptData(value: { [key: string]: string }) {
    this._stackscriptData = value;
  }
  public resetStackscriptData() {
    this._stackscriptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptDataInput() {
    return this._stackscriptData;
  }

  // stackscript_id - computed: false, optional: true, required: false
  private _stackscriptId?: number; 
  public get stackscriptId() {
    return this.getNumberAttribute('stackscript_id');
  }
  public set stackscriptId(value: number) {
    this._stackscriptId = value;
  }
  public resetStackscriptId() {
    this._stackscriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptIdInput() {
    return this._stackscriptId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // swap_size - computed: true, optional: true, required: false
  private _swapSize?: number; 
  public get swapSize() {
    return this.getNumberAttribute('swap_size');
  }
  public set swapSize(value: number) {
    this._swapSize = value;
  }
  public resetSwapSize() {
    this._swapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeInput() {
    return this._swapSize;
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

  // watchdog_enabled - computed: false, optional: true, required: false
  private _watchdogEnabled?: boolean | cdktf.IResolvable; 
  public get watchdogEnabled() {
    return this.getBooleanAttribute('watchdog_enabled');
  }
  public set watchdogEnabled(value: boolean | cdktf.IResolvable) {
    this._watchdogEnabled = value;
  }
  public resetWatchdogEnabled() {
    this._watchdogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogEnabledInput() {
    return this._watchdogEnabled;
  }

  // alerts - computed: false, optional: true, required: false
  private _alerts = new InstanceAlertsOutputReference(this, "alerts");
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: InstanceAlerts) {
    this._alerts.internalValue = value;
  }
  public resetAlerts() {
    this._alerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new InstanceConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: InstanceConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new InstanceDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: InstanceDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new InstanceInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: InstanceInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new InstanceMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: InstanceMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // placement_group - computed: false, optional: true, required: false
  private _placementGroup = new InstancePlacementGroupOutputReference(this, "placement_group");
  public get placementGroup() {
    return this._placementGroup;
  }
  public putPlacementGroup(value: InstancePlacementGroup) {
    this._placementGroup.internalValue = value;
  }
  public resetPlacementGroup() {
    this._placementGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup.internalValue;
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
      authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedKeys),
      authorized_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedUsers),
      backup_id: cdktf.numberToTerraform(this._backupId),
      backups_enabled: cdktf.booleanToTerraform(this._backupsEnabled),
      boot_config_label: cdktf.stringToTerraform(this._bootConfigLabel),
      booted: cdktf.booleanToTerraform(this._booted),
      disk_encryption: cdktf.stringToTerraform(this._diskEncryption),
      firewall_id: cdktf.numberToTerraform(this._firewallId),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      interface_generation: cdktf.stringToTerraform(this._interfaceGeneration),
      ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4),
      label: cdktf.stringToTerraform(this._label),
      maintenance_policy: cdktf.stringToTerraform(this._maintenancePolicy),
      migration_type: cdktf.stringToTerraform(this._migrationType),
      network_helper: cdktf.booleanToTerraform(this._networkHelper),
      placement_group_externally_managed: cdktf.booleanToTerraform(this._placementGroupExternallyManaged),
      private_ip: cdktf.booleanToTerraform(this._privateIp),
      region: cdktf.stringToTerraform(this._region),
      resize_disk: cdktf.booleanToTerraform(this._resizeDisk),
      root_pass: cdktf.stringToTerraform(this._rootPass),
      shared_ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedIpv4),
      stackscript_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._stackscriptData),
      stackscript_id: cdktf.numberToTerraform(this._stackscriptId),
      swap_size: cdktf.numberToTerraform(this._swapSize),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      watchdog_enabled: cdktf.booleanToTerraform(this._watchdogEnabled),
      alerts: instanceAlertsToTerraform(this._alerts.internalValue),
      config: cdktf.listMapper(instanceConfigAToTerraform, true)(this._config.internalValue),
      disk: cdktf.listMapper(instanceDiskToTerraform, true)(this._disk.internalValue),
      interface: cdktf.listMapper(instanceInterfaceToTerraform, true)(this._interface.internalValue),
      metadata: cdktf.listMapper(instanceMetadataToTerraform, true)(this._metadata.internalValue),
      placement_group: instancePlacementGroupToTerraform(this._placementGroup.internalValue),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      authorized_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backup_id: {
        value: cdktf.numberToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backups_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_config_label: {
        value: cdktf.stringToHclTerraform(this._bootConfigLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      booted: {
        value: cdktf.booleanToHclTerraform(this._booted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_encryption: {
        value: cdktf.stringToHclTerraform(this._diskEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_id: {
        value: cdktf.numberToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_generation: {
        value: cdktf.stringToHclTerraform(this._interfaceGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_policy: {
        value: cdktf.stringToHclTerraform(this._maintenancePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_type: {
        value: cdktf.stringToHclTerraform(this._migrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_helper: {
        value: cdktf.booleanToHclTerraform(this._networkHelper),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      placement_group_externally_managed: {
        value: cdktf.booleanToHclTerraform(this._placementGroupExternallyManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_ip: {
        value: cdktf.booleanToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resize_disk: {
        value: cdktf.booleanToHclTerraform(this._resizeDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_pass: {
        value: cdktf.stringToHclTerraform(this._rootPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_ipv4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedIpv4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      stackscript_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._stackscriptData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      stackscript_id: {
        value: cdktf.numberToHclTerraform(this._stackscriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      swap_size: {
        value: cdktf.numberToHclTerraform(this._swapSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      watchdog_enabled: {
        value: cdktf.booleanToHclTerraform(this._watchdogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alerts: {
        value: instanceAlertsToHclTerraform(this._alerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceAlertsList",
      },
      config: {
        value: cdktf.listMapperHcl(instanceConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceConfigAList",
      },
      disk: {
        value: cdktf.listMapperHcl(instanceDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceDiskList",
      },
      interface: {
        value: cdktf.listMapperHcl(instanceInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceInterfaceList",
      },
      metadata: {
        value: cdktf.listMapperHcl(instanceMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceMetadataList",
      },
      placement_group: {
        value: instancePlacementGroupToHclTerraform(this._placementGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstancePlacementGroupList",
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
