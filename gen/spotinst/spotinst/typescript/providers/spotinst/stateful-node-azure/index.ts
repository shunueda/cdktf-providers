// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatefulNodeAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}
  */
  readonly dataDisksPersistenceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#description StatefulNodeAzure#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#id StatefulNodeAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#license_type StatefulNodeAzure#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#os StatefulNodeAzure#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}
  */
  readonly osDiskPersistenceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#preferred_zone StatefulNodeAzure#preferred_zone}
  */
  readonly preferredZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#region StatefulNodeAzure#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}
  */
  readonly shouldPersistDataDisks: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}
  */
  readonly shouldPersistNetwork: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}
  */
  readonly shouldPersistOsDisk: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#user_data StatefulNodeAzure#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#vm_name StatefulNodeAzure#vm_name}
  */
  readonly vmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#vm_name_prefix StatefulNodeAzure#vm_name_prefix}
  */
  readonly vmNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#zones StatefulNodeAzure#zones}
  */
  readonly zones?: string[];
  /**
  * attach_data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#attach_data_disk StatefulNodeAzure#attach_data_disk}
  */
  readonly attachDataDisk?: StatefulNodeAzureAttachDataDisk[] | cdktf.IResolvable;
  /**
  * boot_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#boot_diagnostics StatefulNodeAzure#boot_diagnostics}
  */
  readonly bootDiagnostics?: StatefulNodeAzureBootDiagnostics[] | cdktf.IResolvable;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#data_disk StatefulNodeAzure#data_disk}
  */
  readonly dataDisk?: StatefulNodeAzureDataDisk[] | cdktf.IResolvable;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#delete StatefulNodeAzure#delete}
  */
  readonly delete?: StatefulNodeAzureDelete[] | cdktf.IResolvable;
  /**
  * detach_data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#detach_data_disk StatefulNodeAzure#detach_data_disk}
  */
  readonly detachDataDisk?: StatefulNodeAzureDetachDataDisk[] | cdktf.IResolvable;
  /**
  * extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#extension StatefulNodeAzure#extension}
  */
  readonly extension?: StatefulNodeAzureExtension[] | cdktf.IResolvable;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#health StatefulNodeAzure#health}
  */
  readonly health?: StatefulNodeAzureHealth;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#image StatefulNodeAzure#image}
  */
  readonly image?: StatefulNodeAzureImage;
  /**
  * import_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#import_vm StatefulNodeAzure#import_vm}
  */
  readonly importVm?: StatefulNodeAzureImportVm[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#load_balancer StatefulNodeAzure#load_balancer}
  */
  readonly loadBalancer?: StatefulNodeAzureLoadBalancer[] | cdktf.IResolvable;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#login StatefulNodeAzure#login}
  */
  readonly login?: StatefulNodeAzureLogin;
  /**
  * managed_service_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#managed_service_identities StatefulNodeAzure#managed_service_identities}
  */
  readonly managedServiceIdentities?: StatefulNodeAzureManagedServiceIdentities[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network StatefulNodeAzure#network}
  */
  readonly network?: StatefulNodeAzureNetwork;
  /**
  * os_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#os_disk StatefulNodeAzure#os_disk}
  */
  readonly osDisk?: StatefulNodeAzureOsDisk;
  /**
  * proximity_placement_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#proximity_placement_groups StatefulNodeAzure#proximity_placement_groups}
  */
  readonly proximityPlacementGroups?: StatefulNodeAzureProximityPlacementGroups[] | cdktf.IResolvable;
  /**
  * scheduling_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#scheduling_task StatefulNodeAzure#scheduling_task}
  */
  readonly schedulingTask?: StatefulNodeAzureSchedulingTask[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#secret StatefulNodeAzure#secret}
  */
  readonly secret?: StatefulNodeAzureSecret[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#security StatefulNodeAzure#security}
  */
  readonly security?: StatefulNodeAzureSecurity;
  /**
  * signal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#signal StatefulNodeAzure#signal}
  */
  readonly signal?: StatefulNodeAzureSignal[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#strategy StatefulNodeAzure#strategy}
  */
  readonly strategy: StatefulNodeAzureStrategy;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#tag StatefulNodeAzure#tag}
  */
  readonly tag?: StatefulNodeAzureTag[] | cdktf.IResolvable;
  /**
  * update_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#update_state StatefulNodeAzure#update_state}
  */
  readonly updateState?: StatefulNodeAzureUpdateState[] | cdktf.IResolvable;
  /**
  * vm_sizes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#vm_sizes StatefulNodeAzure#vm_sizes}
  */
  readonly vmSizes: StatefulNodeAzureVmSizes;
}
export interface StatefulNodeAzureAttachDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}
  */
  readonly dataDiskName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}
  */
  readonly dataDiskResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#lun StatefulNodeAzure#lun}
  */
  readonly lun?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#zone StatefulNodeAzure#zone}
  */
  readonly zone?: string;
}

export function statefulNodeAzureAttachDataDiskToTerraform(struct?: StatefulNodeAzureAttachDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_name: cdktf.stringToTerraform(struct!.dataDiskName),
    data_disk_resource_group_name: cdktf.stringToTerraform(struct!.dataDiskResourceGroupName),
    lun: cdktf.numberToTerraform(struct!.lun),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function statefulNodeAzureAttachDataDiskToHclTerraform(struct?: StatefulNodeAzureAttachDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_disk_name: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_account_type: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class StatefulNodeAzureAttachDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureAttachDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataDiskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskName = this._dataDiskName;
    }
    if (this._dataDiskResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskResourceGroupName = this._dataDiskResourceGroupName;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureAttachDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataDiskName = undefined;
      this._dataDiskResourceGroupName = undefined;
      this._lun = undefined;
      this._sizeGb = undefined;
      this._storageAccountType = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataDiskName = value.dataDiskName;
      this._dataDiskResourceGroupName = value.dataDiskResourceGroupName;
      this._lun = value.lun;
      this._sizeGb = value.sizeGb;
      this._storageAccountType = value.storageAccountType;
      this._zone = value.zone;
    }
  }

  // data_disk_name - computed: false, optional: false, required: true
  private _dataDiskName?: string; 
  public get dataDiskName() {
    return this.getStringAttribute('data_disk_name');
  }
  public set dataDiskName(value: string) {
    this._dataDiskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskNameInput() {
    return this._dataDiskName;
  }

  // data_disk_resource_group_name - computed: false, optional: false, required: true
  private _dataDiskResourceGroupName?: string; 
  public get dataDiskResourceGroupName() {
    return this.getStringAttribute('data_disk_resource_group_name');
  }
  public set dataDiskResourceGroupName(value: string) {
    this._dataDiskResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskResourceGroupNameInput() {
    return this._dataDiskResourceGroupName;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
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

export class StatefulNodeAzureAttachDataDiskList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureAttachDataDisk[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureAttachDataDiskOutputReference {
    return new StatefulNodeAzureAttachDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}
  */
  readonly storageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type?: string;
}

export function statefulNodeAzureBootDiagnosticsToTerraform(struct?: StatefulNodeAzureBootDiagnostics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    storage_url: cdktf.stringToTerraform(struct!.storageUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statefulNodeAzureBootDiagnosticsToHclTerraform(struct?: StatefulNodeAzureBootDiagnostics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_url: {
      value: cdktf.stringToHclTerraform(struct!.storageUrl),
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

export class StatefulNodeAzureBootDiagnosticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureBootDiagnostics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._storageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUrl = this._storageUrl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureBootDiagnostics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._storageUrl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._storageUrl = value.storageUrl;
      this._type = value.type;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // storage_url - computed: true, optional: true, required: false
  private _storageUrl?: string; 
  public get storageUrl() {
    return this.getStringAttribute('storage_url');
  }
  public set storageUrl(value: string) {
    this._storageUrl = value;
  }
  public resetStorageUrl() {
    this._storageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUrlInput() {
    return this._storageUrl;
  }

  // type - computed: true, optional: true, required: false
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
}

export class StatefulNodeAzureBootDiagnosticsList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureBootDiagnostics[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureBootDiagnosticsOutputReference {
    return new StatefulNodeAzureBootDiagnosticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#lun StatefulNodeAzure#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureDataDiskToTerraform(struct?: StatefulNodeAzureDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lun: cdktf.numberToTerraform(struct!.lun),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statefulNodeAzureDataDiskToHclTerraform(struct?: StatefulNodeAzureDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class StatefulNodeAzureDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lun = undefined;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lun = value.lun;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
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

export class StatefulNodeAzureDataDiskList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureDataDisk[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureDataDiskOutputReference {
    return new StatefulNodeAzureDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureDelete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}
  */
  readonly diskShouldDeallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}
  */
  readonly diskTtlInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}
  */
  readonly networkShouldDeallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}
  */
  readonly networkTtlInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}
  */
  readonly publicIpShouldDeallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}
  */
  readonly publicIpTtlInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_deregister_from_lb StatefulNodeAzure#should_deregister_from_lb}
  */
  readonly shouldDeregisterFromLb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_revert_to_od StatefulNodeAzure#should_revert_to_od}
  */
  readonly shouldRevertToOd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}
  */
  readonly shouldTerminateVm: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}
  */
  readonly snapshotShouldDeallocate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}
  */
  readonly snapshotTtlInHours?: number;
}

export function statefulNodeAzureDeleteToTerraform(struct?: StatefulNodeAzureDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_should_deallocate: cdktf.booleanToTerraform(struct!.diskShouldDeallocate),
    disk_ttl_in_hours: cdktf.numberToTerraform(struct!.diskTtlInHours),
    network_should_deallocate: cdktf.booleanToTerraform(struct!.networkShouldDeallocate),
    network_ttl_in_hours: cdktf.numberToTerraform(struct!.networkTtlInHours),
    public_ip_should_deallocate: cdktf.booleanToTerraform(struct!.publicIpShouldDeallocate),
    public_ip_ttl_in_hours: cdktf.numberToTerraform(struct!.publicIpTtlInHours),
    should_deregister_from_lb: cdktf.booleanToTerraform(struct!.shouldDeregisterFromLb),
    should_revert_to_od: cdktf.booleanToTerraform(struct!.shouldRevertToOd),
    should_terminate_vm: cdktf.booleanToTerraform(struct!.shouldTerminateVm),
    snapshot_should_deallocate: cdktf.booleanToTerraform(struct!.snapshotShouldDeallocate),
    snapshot_ttl_in_hours: cdktf.numberToTerraform(struct!.snapshotTtlInHours),
  }
}


export function statefulNodeAzureDeleteToHclTerraform(struct?: StatefulNodeAzureDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_should_deallocate: {
      value: cdktf.booleanToHclTerraform(struct!.diskShouldDeallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_ttl_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.diskTtlInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_should_deallocate: {
      value: cdktf.booleanToHclTerraform(struct!.networkShouldDeallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_ttl_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.networkTtlInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip_should_deallocate: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpShouldDeallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_ip_ttl_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.publicIpTtlInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_deregister_from_lb: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDeregisterFromLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_revert_to_od: {
      value: cdktf.booleanToHclTerraform(struct!.shouldRevertToOd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_terminate_vm: {
      value: cdktf.booleanToHclTerraform(struct!.shouldTerminateVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_should_deallocate: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotShouldDeallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_ttl_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.snapshotTtlInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskShouldDeallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskShouldDeallocate = this._diskShouldDeallocate;
    }
    if (this._diskTtlInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTtlInHours = this._diskTtlInHours;
    }
    if (this._networkShouldDeallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkShouldDeallocate = this._networkShouldDeallocate;
    }
    if (this._networkTtlInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTtlInHours = this._networkTtlInHours;
    }
    if (this._publicIpShouldDeallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpShouldDeallocate = this._publicIpShouldDeallocate;
    }
    if (this._publicIpTtlInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpTtlInHours = this._publicIpTtlInHours;
    }
    if (this._shouldDeregisterFromLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeregisterFromLb = this._shouldDeregisterFromLb;
    }
    if (this._shouldRevertToOd !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRevertToOd = this._shouldRevertToOd;
    }
    if (this._shouldTerminateVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTerminateVm = this._shouldTerminateVm;
    }
    if (this._snapshotShouldDeallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotShouldDeallocate = this._snapshotShouldDeallocate;
    }
    if (this._snapshotTtlInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotTtlInHours = this._snapshotTtlInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskShouldDeallocate = undefined;
      this._diskTtlInHours = undefined;
      this._networkShouldDeallocate = undefined;
      this._networkTtlInHours = undefined;
      this._publicIpShouldDeallocate = undefined;
      this._publicIpTtlInHours = undefined;
      this._shouldDeregisterFromLb = undefined;
      this._shouldRevertToOd = undefined;
      this._shouldTerminateVm = undefined;
      this._snapshotShouldDeallocate = undefined;
      this._snapshotTtlInHours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskShouldDeallocate = value.diskShouldDeallocate;
      this._diskTtlInHours = value.diskTtlInHours;
      this._networkShouldDeallocate = value.networkShouldDeallocate;
      this._networkTtlInHours = value.networkTtlInHours;
      this._publicIpShouldDeallocate = value.publicIpShouldDeallocate;
      this._publicIpTtlInHours = value.publicIpTtlInHours;
      this._shouldDeregisterFromLb = value.shouldDeregisterFromLb;
      this._shouldRevertToOd = value.shouldRevertToOd;
      this._shouldTerminateVm = value.shouldTerminateVm;
      this._snapshotShouldDeallocate = value.snapshotShouldDeallocate;
      this._snapshotTtlInHours = value.snapshotTtlInHours;
    }
  }

  // disk_should_deallocate - computed: false, optional: true, required: false
  private _diskShouldDeallocate?: boolean | cdktf.IResolvable; 
  public get diskShouldDeallocate() {
    return this.getBooleanAttribute('disk_should_deallocate');
  }
  public set diskShouldDeallocate(value: boolean | cdktf.IResolvable) {
    this._diskShouldDeallocate = value;
  }
  public resetDiskShouldDeallocate() {
    this._diskShouldDeallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskShouldDeallocateInput() {
    return this._diskShouldDeallocate;
  }

  // disk_ttl_in_hours - computed: false, optional: true, required: false
  private _diskTtlInHours?: number; 
  public get diskTtlInHours() {
    return this.getNumberAttribute('disk_ttl_in_hours');
  }
  public set diskTtlInHours(value: number) {
    this._diskTtlInHours = value;
  }
  public resetDiskTtlInHours() {
    this._diskTtlInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTtlInHoursInput() {
    return this._diskTtlInHours;
  }

  // network_should_deallocate - computed: false, optional: true, required: false
  private _networkShouldDeallocate?: boolean | cdktf.IResolvable; 
  public get networkShouldDeallocate() {
    return this.getBooleanAttribute('network_should_deallocate');
  }
  public set networkShouldDeallocate(value: boolean | cdktf.IResolvable) {
    this._networkShouldDeallocate = value;
  }
  public resetNetworkShouldDeallocate() {
    this._networkShouldDeallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkShouldDeallocateInput() {
    return this._networkShouldDeallocate;
  }

  // network_ttl_in_hours - computed: false, optional: true, required: false
  private _networkTtlInHours?: number; 
  public get networkTtlInHours() {
    return this.getNumberAttribute('network_ttl_in_hours');
  }
  public set networkTtlInHours(value: number) {
    this._networkTtlInHours = value;
  }
  public resetNetworkTtlInHours() {
    this._networkTtlInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTtlInHoursInput() {
    return this._networkTtlInHours;
  }

  // public_ip_should_deallocate - computed: false, optional: true, required: false
  private _publicIpShouldDeallocate?: boolean | cdktf.IResolvable; 
  public get publicIpShouldDeallocate() {
    return this.getBooleanAttribute('public_ip_should_deallocate');
  }
  public set publicIpShouldDeallocate(value: boolean | cdktf.IResolvable) {
    this._publicIpShouldDeallocate = value;
  }
  public resetPublicIpShouldDeallocate() {
    this._publicIpShouldDeallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpShouldDeallocateInput() {
    return this._publicIpShouldDeallocate;
  }

  // public_ip_ttl_in_hours - computed: false, optional: true, required: false
  private _publicIpTtlInHours?: number; 
  public get publicIpTtlInHours() {
    return this.getNumberAttribute('public_ip_ttl_in_hours');
  }
  public set publicIpTtlInHours(value: number) {
    this._publicIpTtlInHours = value;
  }
  public resetPublicIpTtlInHours() {
    this._publicIpTtlInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpTtlInHoursInput() {
    return this._publicIpTtlInHours;
  }

  // should_deregister_from_lb - computed: false, optional: true, required: false
  private _shouldDeregisterFromLb?: boolean | cdktf.IResolvable; 
  public get shouldDeregisterFromLb() {
    return this.getBooleanAttribute('should_deregister_from_lb');
  }
  public set shouldDeregisterFromLb(value: boolean | cdktf.IResolvable) {
    this._shouldDeregisterFromLb = value;
  }
  public resetShouldDeregisterFromLb() {
    this._shouldDeregisterFromLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeregisterFromLbInput() {
    return this._shouldDeregisterFromLb;
  }

  // should_revert_to_od - computed: false, optional: true, required: false
  private _shouldRevertToOd?: boolean | cdktf.IResolvable; 
  public get shouldRevertToOd() {
    return this.getBooleanAttribute('should_revert_to_od');
  }
  public set shouldRevertToOd(value: boolean | cdktf.IResolvable) {
    this._shouldRevertToOd = value;
  }
  public resetShouldRevertToOd() {
    this._shouldRevertToOd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRevertToOdInput() {
    return this._shouldRevertToOd;
  }

  // should_terminate_vm - computed: false, optional: false, required: true
  private _shouldTerminateVm?: boolean | cdktf.IResolvable; 
  public get shouldTerminateVm() {
    return this.getBooleanAttribute('should_terminate_vm');
  }
  public set shouldTerminateVm(value: boolean | cdktf.IResolvable) {
    this._shouldTerminateVm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTerminateVmInput() {
    return this._shouldTerminateVm;
  }

  // snapshot_should_deallocate - computed: false, optional: true, required: false
  private _snapshotShouldDeallocate?: boolean | cdktf.IResolvable; 
  public get snapshotShouldDeallocate() {
    return this.getBooleanAttribute('snapshot_should_deallocate');
  }
  public set snapshotShouldDeallocate(value: boolean | cdktf.IResolvable) {
    this._snapshotShouldDeallocate = value;
  }
  public resetSnapshotShouldDeallocate() {
    this._snapshotShouldDeallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotShouldDeallocateInput() {
    return this._snapshotShouldDeallocate;
  }

  // snapshot_ttl_in_hours - computed: false, optional: true, required: false
  private _snapshotTtlInHours?: number; 
  public get snapshotTtlInHours() {
    return this.getNumberAttribute('snapshot_ttl_in_hours');
  }
  public set snapshotTtlInHours(value: number) {
    this._snapshotTtlInHours = value;
  }
  public resetSnapshotTtlInHours() {
    this._snapshotTtlInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTtlInHoursInput() {
    return this._snapshotTtlInHours;
  }
}

export class StatefulNodeAzureDeleteList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureDelete[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureDeleteOutputReference {
    return new StatefulNodeAzureDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureDetachDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}
  */
  readonly dataDiskName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}
  */
  readonly dataDiskResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}
  */
  readonly shouldDeallocate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}
  */
  readonly ttlInHours?: number;
}

export function statefulNodeAzureDetachDataDiskToTerraform(struct?: StatefulNodeAzureDetachDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_name: cdktf.stringToTerraform(struct!.dataDiskName),
    data_disk_resource_group_name: cdktf.stringToTerraform(struct!.dataDiskResourceGroupName),
    should_deallocate: cdktf.booleanToTerraform(struct!.shouldDeallocate),
    ttl_in_hours: cdktf.numberToTerraform(struct!.ttlInHours),
  }
}


export function statefulNodeAzureDetachDataDiskToHclTerraform(struct?: StatefulNodeAzureDetachDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_disk_name: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_deallocate: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDeallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.ttlInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureDetachDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureDetachDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataDiskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskName = this._dataDiskName;
    }
    if (this._dataDiskResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskResourceGroupName = this._dataDiskResourceGroupName;
    }
    if (this._shouldDeallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeallocate = this._shouldDeallocate;
    }
    if (this._ttlInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlInHours = this._ttlInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureDetachDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataDiskName = undefined;
      this._dataDiskResourceGroupName = undefined;
      this._shouldDeallocate = undefined;
      this._ttlInHours = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataDiskName = value.dataDiskName;
      this._dataDiskResourceGroupName = value.dataDiskResourceGroupName;
      this._shouldDeallocate = value.shouldDeallocate;
      this._ttlInHours = value.ttlInHours;
    }
  }

  // data_disk_name - computed: false, optional: false, required: true
  private _dataDiskName?: string; 
  public get dataDiskName() {
    return this.getStringAttribute('data_disk_name');
  }
  public set dataDiskName(value: string) {
    this._dataDiskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskNameInput() {
    return this._dataDiskName;
  }

  // data_disk_resource_group_name - computed: false, optional: false, required: true
  private _dataDiskResourceGroupName?: string; 
  public get dataDiskResourceGroupName() {
    return this.getStringAttribute('data_disk_resource_group_name');
  }
  public set dataDiskResourceGroupName(value: string) {
    this._dataDiskResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskResourceGroupNameInput() {
    return this._dataDiskResourceGroupName;
  }

  // should_deallocate - computed: false, optional: false, required: true
  private _shouldDeallocate?: boolean | cdktf.IResolvable; 
  public get shouldDeallocate() {
    return this.getBooleanAttribute('should_deallocate');
  }
  public set shouldDeallocate(value: boolean | cdktf.IResolvable) {
    this._shouldDeallocate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeallocateInput() {
    return this._shouldDeallocate;
  }

  // ttl_in_hours - computed: false, optional: true, required: false
  private _ttlInHours?: number; 
  public get ttlInHours() {
    return this.getNumberAttribute('ttl_in_hours');
  }
  public set ttlInHours(value: number) {
    this._ttlInHours = value;
  }
  public resetTtlInHours() {
    this._ttlInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInHoursInput() {
    return this._ttlInHours;
  }
}

export class StatefulNodeAzureDetachDataDiskList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureDetachDataDisk[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureDetachDataDiskOutputReference {
    return new StatefulNodeAzureDetachDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#api_version StatefulNodeAzure#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}
  */
  readonly minorVersionAutoUpgrade: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}
  */
  readonly protectedSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}
  */
  readonly publicSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#publisher StatefulNodeAzure#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureExtensionToTerraform(struct?: StatefulNodeAzureExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    minor_version_auto_upgrade: cdktf.booleanToTerraform(struct!.minorVersionAutoUpgrade),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.protectedSettings),
    public_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.publicSettings),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statefulNodeAzureExtensionToHclTerraform(struct?: StatefulNodeAzureExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minor_version_auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.minorVersionAutoUpgrade),
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
    protected_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.protectedSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    public_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.publicSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
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

export class StatefulNodeAzureExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._minorVersionAutoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersionAutoUpgrade = this._minorVersionAutoUpgrade;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectedSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedSettings = this._protectedSettings;
    }
    if (this._publicSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSettings = this._publicSettings;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._minorVersionAutoUpgrade = undefined;
      this._name = undefined;
      this._protectedSettings = undefined;
      this._publicSettings = undefined;
      this._publisher = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._minorVersionAutoUpgrade = value.minorVersionAutoUpgrade;
      this._name = value.name;
      this._protectedSettings = value.protectedSettings;
      this._publicSettings = value.publicSettings;
      this._publisher = value.publisher;
      this._type = value.type;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // minor_version_auto_upgrade - computed: false, optional: false, required: true
  private _minorVersionAutoUpgrade?: boolean | cdktf.IResolvable; 
  public get minorVersionAutoUpgrade() {
    return this.getBooleanAttribute('minor_version_auto_upgrade');
  }
  public set minorVersionAutoUpgrade(value: boolean | cdktf.IResolvable) {
    this._minorVersionAutoUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionAutoUpgradeInput() {
    return this._minorVersionAutoUpgrade;
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

  // protected_settings - computed: true, optional: true, required: false
  private _protectedSettings?: { [key: string]: string }; 
  public get protectedSettings() {
    return this.getStringMapAttribute('protected_settings');
  }
  public set protectedSettings(value: { [key: string]: string }) {
    this._protectedSettings = value;
  }
  public resetProtectedSettings() {
    this._protectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsInput() {
    return this._protectedSettings;
  }

  // public_settings - computed: true, optional: true, required: false
  private _publicSettings?: { [key: string]: string }; 
  public get publicSettings() {
    return this.getStringMapAttribute('public_settings');
  }
  public set publicSettings(value: { [key: string]: string }) {
    this._publicSettings = value;
  }
  public resetPublicSettings() {
    this._publicSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSettingsInput() {
    return this._publicSettings;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
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

export class StatefulNodeAzureExtensionList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureExtension[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureExtensionOutputReference {
    return new StatefulNodeAzureExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureHealth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}
  */
  readonly autoHealing: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}
  */
  readonly healthCheckTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}
  */
  readonly unhealthyDuration?: number;
}

export function statefulNodeAzureHealthToTerraform(struct?: StatefulNodeAzureHealthOutputReference | StatefulNodeAzureHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_healing: cdktf.booleanToTerraform(struct!.autoHealing),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    health_check_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheckTypes),
    unhealthy_duration: cdktf.numberToTerraform(struct!.unhealthyDuration),
  }
}


export function statefulNodeAzureHealthToHclTerraform(struct?: StatefulNodeAzureHealthOutputReference | StatefulNodeAzureHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_healing: {
      value: cdktf.booleanToHclTerraform(struct!.autoHealing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheckTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unhealthy_duration: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHealing !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHealing = this._autoHealing;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._healthCheckTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTypes = this._healthCheckTypes;
    }
    if (this._unhealthyDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyDuration = this._unhealthyDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHealing = undefined;
      this._gracePeriod = undefined;
      this._healthCheckTypes = undefined;
      this._unhealthyDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHealing = value.autoHealing;
      this._gracePeriod = value.gracePeriod;
      this._healthCheckTypes = value.healthCheckTypes;
      this._unhealthyDuration = value.unhealthyDuration;
    }
  }

  // auto_healing - computed: false, optional: false, required: true
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // health_check_types - computed: false, optional: false, required: true
  private _healthCheckTypes?: string[]; 
  public get healthCheckTypes() {
    return this.getListAttribute('health_check_types');
  }
  public set healthCheckTypes(value: string[]) {
    this._healthCheckTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypesInput() {
    return this._healthCheckTypes;
  }

  // unhealthy_duration - computed: true, optional: true, required: false
  private _unhealthyDuration?: number; 
  public get unhealthyDuration() {
    return this.getNumberAttribute('unhealthy_duration');
  }
  public set unhealthyDuration(value: number) {
    this._unhealthyDuration = value;
  }
  public resetUnhealthyDuration() {
    this._unhealthyDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyDurationInput() {
    return this._unhealthyDuration;
  }
}
export interface StatefulNodeAzureImageCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}
  */
  readonly customImageResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
}

export function statefulNodeAzureImageCustomImageToTerraform(struct?: StatefulNodeAzureImageCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_image_resource_group_name: cdktf.stringToTerraform(struct!.customImageResourceGroupName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function statefulNodeAzureImageCustomImageToHclTerraform(struct?: StatefulNodeAzureImageCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_image_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.customImageResourceGroupName),
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

export class StatefulNodeAzureImageCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureImageCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImageResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImageResourceGroupName = this._customImageResourceGroupName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureImageCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImageResourceGroupName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customImageResourceGroupName = value.customImageResourceGroupName;
      this._name = value.name;
    }
  }

  // custom_image_resource_group_name - computed: false, optional: false, required: true
  private _customImageResourceGroupName?: string; 
  public get customImageResourceGroupName() {
    return this.getStringAttribute('custom_image_resource_group_name');
  }
  public set customImageResourceGroupName(value: string) {
    this._customImageResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageResourceGroupNameInput() {
    return this._customImageResourceGroupName;
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

export class StatefulNodeAzureImageCustomImageList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureImageCustomImage[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureImageCustomImageOutputReference {
    return new StatefulNodeAzureImageCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureImageGallery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}
  */
  readonly galleryResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#image_name StatefulNodeAzure#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#spot_account_id StatefulNodeAzure#spot_account_id}
  */
  readonly spotAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#version_name StatefulNodeAzure#version_name}
  */
  readonly versionName: string;
}

export function statefulNodeAzureImageGalleryToTerraform(struct?: StatefulNodeAzureImageGallery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gallery_name: cdktf.stringToTerraform(struct!.galleryName),
    gallery_resource_group_name: cdktf.stringToTerraform(struct!.galleryResourceGroupName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    spot_account_id: cdktf.stringToTerraform(struct!.spotAccountId),
    version_name: cdktf.stringToTerraform(struct!.versionName),
  }
}


export function statefulNodeAzureImageGalleryToHclTerraform(struct?: StatefulNodeAzureImageGallery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gallery_name: {
      value: cdktf.stringToHclTerraform(struct!.galleryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gallery_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.galleryResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_account_id: {
      value: cdktf.stringToHclTerraform(struct!.spotAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_name: {
      value: cdktf.stringToHclTerraform(struct!.versionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureImageGalleryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureImageGallery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._galleryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.galleryName = this._galleryName;
    }
    if (this._galleryResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.galleryResourceGroupName = this._galleryResourceGroupName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._spotAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAccountId = this._spotAccountId;
    }
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureImageGallery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._galleryName = undefined;
      this._galleryResourceGroupName = undefined;
      this._imageName = undefined;
      this._spotAccountId = undefined;
      this._versionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._galleryName = value.galleryName;
      this._galleryResourceGroupName = value.galleryResourceGroupName;
      this._imageName = value.imageName;
      this._spotAccountId = value.spotAccountId;
      this._versionName = value.versionName;
    }
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName?: string; 
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName;
  }

  // gallery_resource_group_name - computed: false, optional: false, required: true
  private _galleryResourceGroupName?: string; 
  public get galleryResourceGroupName() {
    return this.getStringAttribute('gallery_resource_group_name');
  }
  public set galleryResourceGroupName(value: string) {
    this._galleryResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryResourceGroupNameInput() {
    return this._galleryResourceGroupName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // spot_account_id - computed: false, optional: true, required: false
  private _spotAccountId?: string; 
  public get spotAccountId() {
    return this.getStringAttribute('spot_account_id');
  }
  public set spotAccountId(value: string) {
    this._spotAccountId = value;
  }
  public resetSpotAccountId() {
    this._spotAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAccountIdInput() {
    return this._spotAccountId;
  }

  // version_name - computed: false, optional: false, required: true
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }
}

export class StatefulNodeAzureImageGalleryList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureImageGallery[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureImageGalleryOutputReference {
    return new StatefulNodeAzureImageGalleryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureImageMarketplaceImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#offer StatefulNodeAzure#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#publisher StatefulNodeAzure#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#sku StatefulNodeAzure#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#version StatefulNodeAzure#version}
  */
  readonly version: string;
}

export function statefulNodeAzureImageMarketplaceImageToTerraform(struct?: StatefulNodeAzureImageMarketplaceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function statefulNodeAzureImageMarketplaceImageToHclTerraform(struct?: StatefulNodeAzureImageMarketplaceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureImageMarketplaceImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureImageMarketplaceImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureImageMarketplaceImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class StatefulNodeAzureImageMarketplaceImageList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureImageMarketplaceImage[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureImageMarketplaceImageOutputReference {
    return new StatefulNodeAzureImageMarketplaceImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureImage {
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#custom_image StatefulNodeAzure#custom_image}
  */
  readonly customImage?: StatefulNodeAzureImageCustomImage[] | cdktf.IResolvable;
  /**
  * gallery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#gallery StatefulNodeAzure#gallery}
  */
  readonly gallery?: StatefulNodeAzureImageGallery[] | cdktf.IResolvable;
  /**
  * marketplace_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#marketplace_image StatefulNodeAzure#marketplace_image}
  */
  readonly marketplaceImage?: StatefulNodeAzureImageMarketplaceImage[] | cdktf.IResolvable;
}

export function statefulNodeAzureImageToTerraform(struct?: StatefulNodeAzureImageOutputReference | StatefulNodeAzureImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_image: cdktf.listMapper(statefulNodeAzureImageCustomImageToTerraform, true)(struct!.customImage),
    gallery: cdktf.listMapper(statefulNodeAzureImageGalleryToTerraform, true)(struct!.gallery),
    marketplace_image: cdktf.listMapper(statefulNodeAzureImageMarketplaceImageToTerraform, true)(struct!.marketplaceImage),
  }
}


export function statefulNodeAzureImageToHclTerraform(struct?: StatefulNodeAzureImageOutputReference | StatefulNodeAzureImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_image: {
      value: cdktf.listMapperHcl(statefulNodeAzureImageCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureImageCustomImageList",
    },
    gallery: {
      value: cdktf.listMapperHcl(statefulNodeAzureImageGalleryToHclTerraform, true)(struct!.gallery),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureImageGalleryList",
    },
    marketplace_image: {
      value: cdktf.listMapperHcl(statefulNodeAzureImageMarketplaceImageToHclTerraform, true)(struct!.marketplaceImage),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureImageMarketplaceImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._gallery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gallery = this._gallery?.internalValue;
    }
    if (this._marketplaceImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketplaceImage = this._marketplaceImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customImage.internalValue = undefined;
      this._gallery.internalValue = undefined;
      this._marketplaceImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customImage.internalValue = value.customImage;
      this._gallery.internalValue = value.gallery;
      this._marketplaceImage.internalValue = value.marketplaceImage;
    }
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new StatefulNodeAzureImageCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: StatefulNodeAzureImageCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // gallery - computed: false, optional: true, required: false
  private _gallery = new StatefulNodeAzureImageGalleryList(this, "gallery", false);
  public get gallery() {
    return this._gallery;
  }
  public putGallery(value: StatefulNodeAzureImageGallery[] | cdktf.IResolvable) {
    this._gallery.internalValue = value;
  }
  public resetGallery() {
    this._gallery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryInput() {
    return this._gallery.internalValue;
  }

  // marketplace_image - computed: false, optional: true, required: false
  private _marketplaceImage = new StatefulNodeAzureImageMarketplaceImageList(this, "marketplace_image", false);
  public get marketplaceImage() {
    return this._marketplaceImage;
  }
  public putMarketplaceImage(value: StatefulNodeAzureImageMarketplaceImage[] | cdktf.IResolvable) {
    this._marketplaceImage.internalValue = value;
  }
  public resetMarketplaceImage() {
    this._marketplaceImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceImageInput() {
    return this._marketplaceImage.internalValue;
  }
}
export interface StatefulNodeAzureImportVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}
  */
  readonly originalVmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}
  */
  readonly resourcesRetentionTime?: number;
}

export function statefulNodeAzureImportVmToTerraform(struct?: StatefulNodeAzureImportVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    original_vm_name: cdktf.stringToTerraform(struct!.originalVmName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    resources_retention_time: cdktf.numberToTerraform(struct!.resourcesRetentionTime),
  }
}


export function statefulNodeAzureImportVmToHclTerraform(struct?: StatefulNodeAzureImportVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    draining_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    original_vm_name: {
      value: cdktf.stringToHclTerraform(struct!.originalVmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.resourcesRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureImportVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureImportVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._originalVmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalVmName = this._originalVmName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._resourcesRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesRetentionTime = this._resourcesRetentionTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureImportVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drainingTimeout = undefined;
      this._originalVmName = undefined;
      this._resourceGroupName = undefined;
      this._resourcesRetentionTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drainingTimeout = value.drainingTimeout;
      this._originalVmName = value.originalVmName;
      this._resourceGroupName = value.resourceGroupName;
      this._resourcesRetentionTime = value.resourcesRetentionTime;
    }
  }

  // draining_timeout - computed: false, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // original_vm_name - computed: false, optional: false, required: true
  private _originalVmName?: string; 
  public get originalVmName() {
    return this.getStringAttribute('original_vm_name');
  }
  public set originalVmName(value: string) {
    this._originalVmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalVmNameInput() {
    return this._originalVmName;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // resources_retention_time - computed: false, optional: true, required: false
  private _resourcesRetentionTime?: number; 
  public get resourcesRetentionTime() {
    return this.getNumberAttribute('resources_retention_time');
  }
  public set resourcesRetentionTime(value: number) {
    this._resourcesRetentionTime = value;
  }
  public resetResourcesRetentionTime() {
    this._resourcesRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesRetentionTimeInput() {
    return this._resourcesRetentionTime;
  }
}

export class StatefulNodeAzureImportVmList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureImportVm[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureImportVmOutputReference {
    return new StatefulNodeAzureImportVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}
  */
  readonly backendPoolNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#sku StatefulNodeAzure#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureLoadBalancerToTerraform(struct?: StatefulNodeAzureLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendPoolNames),
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    sku: cdktf.stringToTerraform(struct!.sku),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statefulNodeAzureLoadBalancerToHclTerraform(struct?: StatefulNodeAzureLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_pool_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendPoolNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
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

export class StatefulNodeAzureLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPoolNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPoolNames = this._backendPoolNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPoolNames = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
      this._sku = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPoolNames = value.backendPoolNames;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
      this._sku = value.sku;
      this._type = value.type;
    }
  }

  // backend_pool_names - computed: false, optional: false, required: true
  private _backendPoolNames?: string[]; 
  public get backendPoolNames() {
    return this.getListAttribute('backend_pool_names');
  }
  public set backendPoolNames(value: string[]) {
    this._backendPoolNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolNamesInput() {
    return this._backendPoolNames;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sku - computed: true, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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

export class StatefulNodeAzureLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureLoadBalancerOutputReference {
    return new StatefulNodeAzureLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#password StatefulNodeAzure#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#user_name StatefulNodeAzure#user_name}
  */
  readonly userName: string;
}

export function statefulNodeAzureLoginToTerraform(struct?: StatefulNodeAzureLoginOutputReference | StatefulNodeAzureLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function statefulNodeAzureLoginToHclTerraform(struct?: StatefulNodeAzureLoginOutputReference | StatefulNodeAzureLogin): any {
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
    ssh_public_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshPublicKey = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshPublicKey = value.sshPublicKey;
      this._userName = value.userName;
    }
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

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface StatefulNodeAzureManagedServiceIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#subscription_id StatefulNodeAzure#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function statefulNodeAzureManagedServiceIdentitiesToTerraform(struct?: StatefulNodeAzureManagedServiceIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function statefulNodeAzureManagedServiceIdentitiesToHclTerraform(struct?: StatefulNodeAzureManagedServiceIdentities | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureManagedServiceIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureManagedServiceIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureManagedServiceIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}

export class StatefulNodeAzureManagedServiceIdentitiesList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureManagedServiceIdentities[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureManagedServiceIdentitiesOutputReference {
    return new StatefulNodeAzureManagedServiceIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}
  */
  readonly privateIpAddressVersion: string;
}

export function statefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address_version: cdktf.stringToTerraform(struct!.privateIpAddressVersion),
  }
}


export function statefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsToHclTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations | cdktf.IResolvable): any {
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
    private_ip_address_version: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIpAddressVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressVersion = this._privateIpAddressVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._privateIpAddressVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._privateIpAddressVersion = value.privateIpAddressVersion;
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

  // private_ip_address_version - computed: false, optional: false, required: true
  private _privateIpAddressVersion?: string; 
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
  }
  public set privateIpAddressVersion(value: string) {
    this._privateIpAddressVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressVersionInput() {
    return this._privateIpAddressVersion;
  }
}

export class StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference {
    return new StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName: string;
}

export function statefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
  }
}


export function statefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsToHclTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups | cdktf.IResolvable): any {
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
    network_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.networkResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResourceGroupName = this._networkResourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._networkResourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._networkResourceGroupName = value.networkResourceGroupName;
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

  // network_resource_group_name - computed: false, optional: false, required: true
  private _networkResourceGroupName?: string; 
  public get networkResourceGroupName() {
    return this.getStringAttribute('network_resource_group_name');
  }
  public set networkResourceGroupName(value: string) {
    this._networkResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceGroupNameInput() {
    return this._networkResourceGroupName;
  }
}

export class StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference {
    return new StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName?: string;
}

export function statefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
  }
}


export function statefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupToHclTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup | cdktf.IResolvable): any {
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
    network_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.networkResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResourceGroupName = this._networkResourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._networkResourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._networkResourceGroupName = value.networkResourceGroupName;
    }
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

  // network_resource_group_name - computed: false, optional: true, required: false
  private _networkResourceGroupName?: string; 
  public get networkResourceGroupName() {
    return this.getStringAttribute('network_resource_group_name');
  }
  public set networkResourceGroupName(value: string) {
    this._networkResourceGroupName = value;
  }
  public resetNetworkResourceGroupName() {
    this._networkResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceGroupNameInput() {
    return this._networkResourceGroupName;
  }
}

export class StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference {
    return new StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureNetworkNetworkInterfacePublicIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName: string;
}

export function statefulNodeAzureNetworkNetworkInterfacePublicIpsToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfacePublicIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
  }
}


export function statefulNodeAzureNetworkNetworkInterfacePublicIpsToHclTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfacePublicIps | cdktf.IResolvable): any {
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
    network_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.networkResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureNetworkNetworkInterfacePublicIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResourceGroupName = this._networkResourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureNetworkNetworkInterfacePublicIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._networkResourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._networkResourceGroupName = value.networkResourceGroupName;
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

  // network_resource_group_name - computed: false, optional: false, required: true
  private _networkResourceGroupName?: string; 
  public get networkResourceGroupName() {
    return this.getStringAttribute('network_resource_group_name');
  }
  public set networkResourceGroupName(value: string) {
    this._networkResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceGroupNameInput() {
    return this._networkResourceGroupName;
  }
}

export class StatefulNodeAzureNetworkNetworkInterfacePublicIpsList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureNetworkNetworkInterfacePublicIps[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference {
    return new StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureNetworkNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}
  */
  readonly publicIpSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}
  */
  readonly subnetName: string;
  /**
  * additional_ip_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#additional_ip_configurations StatefulNodeAzure#additional_ip_configurations}
  */
  readonly additionalIpConfigurations?: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[] | cdktf.IResolvable;
  /**
  * application_security_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#application_security_groups StatefulNodeAzure#application_security_groups}
  */
  readonly applicationSecurityGroups?: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[] | cdktf.IResolvable;
  /**
  * network_security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_security_group StatefulNodeAzure#network_security_group}
  */
  readonly networkSecurityGroup?: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[] | cdktf.IResolvable;
  /**
  * public_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#public_ips StatefulNodeAzure#public_ips}
  */
  readonly publicIps?: StatefulNodeAzureNetworkNetworkInterfacePublicIps[] | cdktf.IResolvable;
}

export function statefulNodeAzureNetworkNetworkInterfaceToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateIpAddresses),
    public_ip_sku: cdktf.stringToTerraform(struct!.publicIpSku),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    additional_ip_configurations: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsToTerraform, true)(struct!.additionalIpConfigurations),
    application_security_groups: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsToTerraform, true)(struct!.applicationSecurityGroups),
    network_security_group: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupToTerraform, true)(struct!.networkSecurityGroup),
    public_ips: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfacePublicIpsToTerraform, true)(struct!.publicIps),
  }
}


export function statefulNodeAzureNetworkNetworkInterfaceToHclTerraform(struct?: StatefulNodeAzureNetworkNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ip_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    public_ip_sku: {
      value: cdktf.stringToHclTerraform(struct!.publicIpSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_ip_configurations: {
      value: cdktf.listMapperHcl(statefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsToHclTerraform, true)(struct!.additionalIpConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList",
    },
    application_security_groups: {
      value: cdktf.listMapperHcl(statefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsToHclTerraform, true)(struct!.applicationSecurityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList",
    },
    network_security_group: {
      value: cdktf.listMapperHcl(statefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupToHclTerraform, true)(struct!.networkSecurityGroup),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList",
    },
    public_ips: {
      value: cdktf.listMapperHcl(statefulNodeAzureNetworkNetworkInterfacePublicIpsToHclTerraform, true)(struct!.publicIps),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureNetworkNetworkInterfacePublicIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureNetworkNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureNetworkNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._enableIpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpForwarding = this._enableIpForwarding;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._privateIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses;
    }
    if (this._publicIpSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpSku = this._publicIpSku;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._additionalIpConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalIpConfigurations = this._additionalIpConfigurations?.internalValue;
    }
    if (this._applicationSecurityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecurityGroups = this._applicationSecurityGroups?.internalValue;
    }
    if (this._networkSecurityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroup = this._networkSecurityGroup?.internalValue;
    }
    if (this._publicIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIps = this._publicIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureNetworkNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._enableIpForwarding = undefined;
      this._isPrimary = undefined;
      this._privateIpAddresses = undefined;
      this._publicIpSku = undefined;
      this._subnetName = undefined;
      this._additionalIpConfigurations.internalValue = undefined;
      this._applicationSecurityGroups.internalValue = undefined;
      this._networkSecurityGroup.internalValue = undefined;
      this._publicIps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._enableIpForwarding = value.enableIpForwarding;
      this._isPrimary = value.isPrimary;
      this._privateIpAddresses = value.privateIpAddresses;
      this._publicIpSku = value.publicIpSku;
      this._subnetName = value.subnetName;
      this._additionalIpConfigurations.internalValue = value.additionalIpConfigurations;
      this._applicationSecurityGroups.internalValue = value.applicationSecurityGroups;
      this._networkSecurityGroup.internalValue = value.networkSecurityGroup;
      this._publicIps.internalValue = value.publicIps;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // enable_ip_forwarding - computed: false, optional: true, required: false
  private _enableIpForwarding?: boolean | cdktf.IResolvable; 
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }
  public set enableIpForwarding(value: boolean | cdktf.IResolvable) {
    this._enableIpForwarding = value;
  }
  public resetEnableIpForwarding() {
    this._enableIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpForwardingInput() {
    return this._enableIpForwarding;
  }

  // is_primary - computed: false, optional: false, required: true
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // private_ip_addresses - computed: false, optional: true, required: false
  private _privateIpAddresses?: string[]; 
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }
  public set privateIpAddresses(value: string[]) {
    this._privateIpAddresses = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses;
  }

  // public_ip_sku - computed: false, optional: true, required: false
  private _publicIpSku?: string; 
  public get publicIpSku() {
    return this.getStringAttribute('public_ip_sku');
  }
  public set publicIpSku(value: string) {
    this._publicIpSku = value;
  }
  public resetPublicIpSku() {
    this._publicIpSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpSkuInput() {
    return this._publicIpSku;
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // additional_ip_configurations - computed: false, optional: true, required: false
  private _additionalIpConfigurations = new StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList(this, "additional_ip_configurations", false);
  public get additionalIpConfigurations() {
    return this._additionalIpConfigurations;
  }
  public putAdditionalIpConfigurations(value: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[] | cdktf.IResolvable) {
    this._additionalIpConfigurations.internalValue = value;
  }
  public resetAdditionalIpConfigurations() {
    this._additionalIpConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalIpConfigurationsInput() {
    return this._additionalIpConfigurations.internalValue;
  }

  // application_security_groups - computed: false, optional: true, required: false
  private _applicationSecurityGroups = new StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList(this, "application_security_groups", false);
  public get applicationSecurityGroups() {
    return this._applicationSecurityGroups;
  }
  public putApplicationSecurityGroups(value: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[] | cdktf.IResolvable) {
    this._applicationSecurityGroups.internalValue = value;
  }
  public resetApplicationSecurityGroups() {
    this._applicationSecurityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupsInput() {
    return this._applicationSecurityGroups.internalValue;
  }

  // network_security_group - computed: false, optional: true, required: false
  private _networkSecurityGroup = new StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList(this, "network_security_group", false);
  public get networkSecurityGroup() {
    return this._networkSecurityGroup;
  }
  public putNetworkSecurityGroup(value: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[] | cdktf.IResolvable) {
    this._networkSecurityGroup.internalValue = value;
  }
  public resetNetworkSecurityGroup() {
    this._networkSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupInput() {
    return this._networkSecurityGroup.internalValue;
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps = new StatefulNodeAzureNetworkNetworkInterfacePublicIpsList(this, "public_ips", false);
  public get publicIps() {
    return this._publicIps;
  }
  public putPublicIps(value: StatefulNodeAzureNetworkNetworkInterfacePublicIps[] | cdktf.IResolvable) {
    this._publicIps.internalValue = value;
  }
  public resetPublicIps() {
    this._publicIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps.internalValue;
  }
}

export class StatefulNodeAzureNetworkNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureNetworkNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureNetworkNetworkInterfaceOutputReference {
    return new StatefulNodeAzureNetworkNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#network_interface StatefulNodeAzure#network_interface}
  */
  readonly networkInterface: StatefulNodeAzureNetworkNetworkInterface[] | cdktf.IResolvable;
}

export function statefulNodeAzureNetworkToTerraform(struct?: StatefulNodeAzureNetworkOutputReference | StatefulNodeAzureNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    network_interface: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceToTerraform, true)(struct!.networkInterface),
  }
}


export function statefulNodeAzureNetworkToHclTerraform(struct?: StatefulNodeAzureNetworkOutputReference | StatefulNodeAzureNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.networkResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface: {
      value: cdktf.listMapperHcl(statefulNodeAzureNetworkNetworkInterfaceToHclTerraform, true)(struct!.networkInterface),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureNetworkNetworkInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResourceGroupName = this._networkResourceGroupName;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._networkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkResourceGroupName = undefined;
      this._virtualNetworkName = undefined;
      this._networkInterface.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkResourceGroupName = value.networkResourceGroupName;
      this._virtualNetworkName = value.virtualNetworkName;
      this._networkInterface.internalValue = value.networkInterface;
    }
  }

  // network_resource_group_name - computed: false, optional: false, required: true
  private _networkResourceGroupName?: string; 
  public get networkResourceGroupName() {
    return this.getStringAttribute('network_resource_group_name');
  }
  public set networkResourceGroupName(value: string) {
    this._networkResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceGroupNameInput() {
    return this._networkResourceGroupName;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new StatefulNodeAzureNetworkNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: StatefulNodeAzureNetworkNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }
}
export interface StatefulNodeAzureOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#caching StatefulNodeAzure#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureOsDiskToTerraform(struct?: StatefulNodeAzureOsDiskOutputReference | StatefulNodeAzureOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statefulNodeAzureOsDiskToHclTerraform(struct?: StatefulNodeAzureOsDiskOutputReference | StatefulNodeAzureOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching: {
      value: cdktf.stringToHclTerraform(struct!.caching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class StatefulNodeAzureOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // caching - computed: false, optional: true, required: false
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // size_gb - computed: false, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
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
export interface StatefulNodeAzureProximityPlacementGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function statefulNodeAzureProximityPlacementGroupsToTerraform(struct?: StatefulNodeAzureProximityPlacementGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function statefulNodeAzureProximityPlacementGroupsToHclTerraform(struct?: StatefulNodeAzureProximityPlacementGroups | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureProximityPlacementGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureProximityPlacementGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureProximityPlacementGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class StatefulNodeAzureProximityPlacementGroupsList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureProximityPlacementGroups[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureProximityPlacementGroupsOutputReference {
    return new StatefulNodeAzureProximityPlacementGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureSchedulingTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureSchedulingTaskToTerraform(struct?: StatefulNodeAzureSchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statefulNodeAzureSchedulingTaskToHclTerraform(struct?: StatefulNodeAzureSchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class StatefulNodeAzureSchedulingTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureSchedulingTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureSchedulingTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._isEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._isEnabled = value.isEnabled;
      this._type = value.type;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

export class StatefulNodeAzureSchedulingTaskList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureSchedulingTask[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureSchedulingTaskOutputReference {
    return new StatefulNodeAzureSchedulingTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureSecretSourceVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function statefulNodeAzureSecretSourceVaultToTerraform(struct?: StatefulNodeAzureSecretSourceVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function statefulNodeAzureSecretSourceVaultToHclTerraform(struct?: StatefulNodeAzureSecretSourceVault | cdktf.IResolvable): any {
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
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureSecretSourceVaultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureSecretSourceVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureSecretSourceVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}

export class StatefulNodeAzureSecretSourceVaultList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureSecretSourceVault[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureSecretSourceVaultOutputReference {
    return new StatefulNodeAzureSecretSourceVaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureSecretVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}
  */
  readonly certificateStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}
  */
  readonly certificateUrl?: string;
}

export function statefulNodeAzureSecretVaultCertificatesToTerraform(struct?: StatefulNodeAzureSecretVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}


export function statefulNodeAzureSecretVaultCertificatesToHclTerraform(struct?: StatefulNodeAzureSecretVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_store: {
      value: cdktf.stringToHclTerraform(struct!.certificateStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureSecretVaultCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureSecretVaultCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStore = this._certificateStore;
    }
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureSecretVaultCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateStore = undefined;
      this._certificateUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateStore = value.certificateStore;
      this._certificateUrl = value.certificateUrl;
    }
  }

  // certificate_store - computed: false, optional: true, required: false
  private _certificateStore?: string; 
  public get certificateStore() {
    return this.getStringAttribute('certificate_store');
  }
  public set certificateStore(value: string) {
    this._certificateStore = value;
  }
  public resetCertificateStore() {
    this._certificateStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreInput() {
    return this._certificateStore;
  }

  // certificate_url - computed: false, optional: true, required: false
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  public resetCertificateUrl() {
    this._certificateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
  }
}

export class StatefulNodeAzureSecretVaultCertificatesList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureSecretVaultCertificates[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureSecretVaultCertificatesOutputReference {
    return new StatefulNodeAzureSecretVaultCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureSecret {
  /**
  * source_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#source_vault StatefulNodeAzure#source_vault}
  */
  readonly sourceVault: StatefulNodeAzureSecretSourceVault[] | cdktf.IResolvable;
  /**
  * vault_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#vault_certificates StatefulNodeAzure#vault_certificates}
  */
  readonly vaultCertificates: StatefulNodeAzureSecretVaultCertificates[] | cdktf.IResolvable;
}

export function statefulNodeAzureSecretToTerraform(struct?: StatefulNodeAzureSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_vault: cdktf.listMapper(statefulNodeAzureSecretSourceVaultToTerraform, true)(struct!.sourceVault),
    vault_certificates: cdktf.listMapper(statefulNodeAzureSecretVaultCertificatesToTerraform, true)(struct!.vaultCertificates),
  }
}


export function statefulNodeAzureSecretToHclTerraform(struct?: StatefulNodeAzureSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_vault: {
      value: cdktf.listMapperHcl(statefulNodeAzureSecretSourceVaultToHclTerraform, true)(struct!.sourceVault),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureSecretSourceVaultList",
    },
    vault_certificates: {
      value: cdktf.listMapperHcl(statefulNodeAzureSecretVaultCertificatesToHclTerraform, true)(struct!.vaultCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureSecretVaultCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVault = this._sourceVault?.internalValue;
    }
    if (this._vaultCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultCertificates = this._vaultCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceVault.internalValue = undefined;
      this._vaultCertificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceVault.internalValue = value.sourceVault;
      this._vaultCertificates.internalValue = value.vaultCertificates;
    }
  }

  // source_vault - computed: false, optional: false, required: true
  private _sourceVault = new StatefulNodeAzureSecretSourceVaultList(this, "source_vault", false);
  public get sourceVault() {
    return this._sourceVault;
  }
  public putSourceVault(value: StatefulNodeAzureSecretSourceVault[] | cdktf.IResolvable) {
    this._sourceVault.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultInput() {
    return this._sourceVault.internalValue;
  }

  // vault_certificates - computed: false, optional: false, required: true
  private _vaultCertificates = new StatefulNodeAzureSecretVaultCertificatesList(this, "vault_certificates", false);
  public get vaultCertificates() {
    return this._vaultCertificates;
  }
  public putVaultCertificates(value: StatefulNodeAzureSecretVaultCertificates[] | cdktf.IResolvable) {
    this._vaultCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultCertificatesInput() {
    return this._vaultCertificates.internalValue;
  }
}

export class StatefulNodeAzureSecretList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureSecret[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureSecretOutputReference {
    return new StatefulNodeAzureSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#confidential_os_disk_encryption StatefulNodeAzure#confidential_os_disk_encryption}
  */
  readonly confidentialOsDiskEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#encryption_at_host StatefulNodeAzure#encryption_at_host}
  */
  readonly encryptionAtHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#secure_boot_enabled StatefulNodeAzure#secure_boot_enabled}
  */
  readonly secureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#security_type StatefulNodeAzure#security_type}
  */
  readonly securityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#vtpm_enabled StatefulNodeAzure#vtpm_enabled}
  */
  readonly vtpmEnabled?: boolean | cdktf.IResolvable;
}

export function statefulNodeAzureSecurityToTerraform(struct?: StatefulNodeAzureSecurityOutputReference | StatefulNodeAzureSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_os_disk_encryption: cdktf.stringToTerraform(struct!.confidentialOsDiskEncryption),
    encryption_at_host: cdktf.booleanToTerraform(struct!.encryptionAtHost),
    secure_boot_enabled: cdktf.booleanToTerraform(struct!.secureBootEnabled),
    security_type: cdktf.stringToTerraform(struct!.securityType),
    vtpm_enabled: cdktf.booleanToTerraform(struct!.vtpmEnabled),
  }
}


export function statefulNodeAzureSecurityToHclTerraform(struct?: StatefulNodeAzureSecurityOutputReference | StatefulNodeAzureSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_os_disk_encryption: {
      value: cdktf.stringToHclTerraform(struct!.confidentialOsDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_at_host: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionAtHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.secureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_type: {
      value: cdktf.stringToHclTerraform(struct!.securityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vtpm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vtpmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialOsDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialOsDiskEncryption = this._confidentialOsDiskEncryption;
    }
    if (this._encryptionAtHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtHost = this._encryptionAtHost;
    }
    if (this._secureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureBootEnabled = this._secureBootEnabled;
    }
    if (this._securityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityType = this._securityType;
    }
    if (this._vtpmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtpmEnabled = this._vtpmEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialOsDiskEncryption = undefined;
      this._encryptionAtHost = undefined;
      this._secureBootEnabled = undefined;
      this._securityType = undefined;
      this._vtpmEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialOsDiskEncryption = value.confidentialOsDiskEncryption;
      this._encryptionAtHost = value.encryptionAtHost;
      this._secureBootEnabled = value.secureBootEnabled;
      this._securityType = value.securityType;
      this._vtpmEnabled = value.vtpmEnabled;
    }
  }

  // confidential_os_disk_encryption - computed: false, optional: true, required: false
  private _confidentialOsDiskEncryption?: string; 
  public get confidentialOsDiskEncryption() {
    return this.getStringAttribute('confidential_os_disk_encryption');
  }
  public set confidentialOsDiskEncryption(value: string) {
    this._confidentialOsDiskEncryption = value;
  }
  public resetConfidentialOsDiskEncryption() {
    this._confidentialOsDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialOsDiskEncryptionInput() {
    return this._confidentialOsDiskEncryption;
  }

  // encryption_at_host - computed: true, optional: true, required: false
  private _encryptionAtHost?: boolean | cdktf.IResolvable; 
  public get encryptionAtHost() {
    return this.getBooleanAttribute('encryption_at_host');
  }
  public set encryptionAtHost(value: boolean | cdktf.IResolvable) {
    this._encryptionAtHost = value;
  }
  public resetEncryptionAtHost() {
    this._encryptionAtHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostInput() {
    return this._encryptionAtHost;
  }

  // secure_boot_enabled - computed: true, optional: true, required: false
  private _secureBootEnabled?: boolean | cdktf.IResolvable; 
  public get secureBootEnabled() {
    return this.getBooleanAttribute('secure_boot_enabled');
  }
  public set secureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._secureBootEnabled = value;
  }
  public resetSecureBootEnabled() {
    this._secureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootEnabledInput() {
    return this._secureBootEnabled;
  }

  // security_type - computed: false, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
  }

  // vtpm_enabled - computed: true, optional: true, required: false
  private _vtpmEnabled?: boolean | cdktf.IResolvable; 
  public get vtpmEnabled() {
    return this.getBooleanAttribute('vtpm_enabled');
  }
  public set vtpmEnabled(value: boolean | cdktf.IResolvable) {
    this._vtpmEnabled = value;
  }
  public resetVtpmEnabled() {
    this._vtpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpmEnabledInput() {
    return this._vtpmEnabled;
  }
}
export interface StatefulNodeAzureSignal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#timeout StatefulNodeAzure#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureSignalToTerraform(struct?: StatefulNodeAzureSignal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statefulNodeAzureSignalToHclTerraform(struct?: StatefulNodeAzureSignal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class StatefulNodeAzureSignalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureSignal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureSignal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

export class StatefulNodeAzureSignalList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureSignal[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureSignalOutputReference {
    return new StatefulNodeAzureSignalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#crg_name StatefulNodeAzure#crg_name}
  */
  readonly crgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#crg_resource_group_name StatefulNodeAzure#crg_resource_group_name}
  */
  readonly crgResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#crg_should_prioritize StatefulNodeAzure#crg_should_prioritize}
  */
  readonly crgShouldPrioritize?: boolean | cdktf.IResolvable;
}

export function statefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsToTerraform(struct?: StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crg_name: cdktf.stringToTerraform(struct!.crgName),
    crg_resource_group_name: cdktf.stringToTerraform(struct!.crgResourceGroupName),
    crg_should_prioritize: cdktf.booleanToTerraform(struct!.crgShouldPrioritize),
  }
}


export function statefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsToHclTerraform(struct?: StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crg_name: {
      value: cdktf.stringToHclTerraform(struct!.crgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crg_resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.crgResourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crg_should_prioritize: {
      value: cdktf.booleanToHclTerraform(struct!.crgShouldPrioritize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.crgName = this._crgName;
    }
    if (this._crgResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.crgResourceGroupName = this._crgResourceGroupName;
    }
    if (this._crgShouldPrioritize !== undefined) {
      hasAnyValues = true;
      internalValueResult.crgShouldPrioritize = this._crgShouldPrioritize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crgName = undefined;
      this._crgResourceGroupName = undefined;
      this._crgShouldPrioritize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crgName = value.crgName;
      this._crgResourceGroupName = value.crgResourceGroupName;
      this._crgShouldPrioritize = value.crgShouldPrioritize;
    }
  }

  // crg_name - computed: false, optional: false, required: true
  private _crgName?: string; 
  public get crgName() {
    return this.getStringAttribute('crg_name');
  }
  public set crgName(value: string) {
    this._crgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crgNameInput() {
    return this._crgName;
  }

  // crg_resource_group_name - computed: false, optional: false, required: true
  private _crgResourceGroupName?: string; 
  public get crgResourceGroupName() {
    return this.getStringAttribute('crg_resource_group_name');
  }
  public set crgResourceGroupName(value: string) {
    this._crgResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crgResourceGroupNameInput() {
    return this._crgResourceGroupName;
  }

  // crg_should_prioritize - computed: false, optional: true, required: false
  private _crgShouldPrioritize?: boolean | cdktf.IResolvable; 
  public get crgShouldPrioritize() {
    return this.getBooleanAttribute('crg_should_prioritize');
  }
  public set crgShouldPrioritize(value: boolean | cdktf.IResolvable) {
    this._crgShouldPrioritize = value;
  }
  public resetCrgShouldPrioritize() {
    this._crgShouldPrioritize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crgShouldPrioritizeInput() {
    return this._crgShouldPrioritize;
  }
}

export class StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsOutputReference {
    return new StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureStrategyCapacityReservation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#should_utilize StatefulNodeAzure#should_utilize}
  */
  readonly shouldUtilize: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#utilization_strategy StatefulNodeAzure#utilization_strategy}
  */
  readonly utilizationStrategy: string;
  /**
  * capacity_reservation_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#capacity_reservation_groups StatefulNodeAzure#capacity_reservation_groups}
  */
  readonly capacityReservationGroups?: StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups[] | cdktf.IResolvable;
}

export function statefulNodeAzureStrategyCapacityReservationToTerraform(struct?: StatefulNodeAzureStrategyCapacityReservation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_utilize: cdktf.booleanToTerraform(struct!.shouldUtilize),
    utilization_strategy: cdktf.stringToTerraform(struct!.utilizationStrategy),
    capacity_reservation_groups: cdktf.listMapper(statefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsToTerraform, true)(struct!.capacityReservationGroups),
  }
}


export function statefulNodeAzureStrategyCapacityReservationToHclTerraform(struct?: StatefulNodeAzureStrategyCapacityReservation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_utilize: {
      value: cdktf.booleanToHclTerraform(struct!.shouldUtilize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    utilization_strategy: {
      value: cdktf.stringToHclTerraform(struct!.utilizationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_groups: {
      value: cdktf.listMapperHcl(statefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsToHclTerraform, true)(struct!.capacityReservationGroups),
      isBlock: true,
      type: "set",
      storageClassType: "StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureStrategyCapacityReservationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureStrategyCapacityReservation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldUtilize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldUtilize = this._shouldUtilize;
    }
    if (this._utilizationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilizationStrategy = this._utilizationStrategy;
    }
    if (this._capacityReservationGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationGroups = this._capacityReservationGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureStrategyCapacityReservation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldUtilize = undefined;
      this._utilizationStrategy = undefined;
      this._capacityReservationGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldUtilize = value.shouldUtilize;
      this._utilizationStrategy = value.utilizationStrategy;
      this._capacityReservationGroups.internalValue = value.capacityReservationGroups;
    }
  }

  // should_utilize - computed: false, optional: false, required: true
  private _shouldUtilize?: boolean | cdktf.IResolvable; 
  public get shouldUtilize() {
    return this.getBooleanAttribute('should_utilize');
  }
  public set shouldUtilize(value: boolean | cdktf.IResolvable) {
    this._shouldUtilize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUtilizeInput() {
    return this._shouldUtilize;
  }

  // utilization_strategy - computed: false, optional: false, required: true
  private _utilizationStrategy?: string; 
  public get utilizationStrategy() {
    return this.getStringAttribute('utilization_strategy');
  }
  public set utilizationStrategy(value: string) {
    this._utilizationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationStrategyInput() {
    return this._utilizationStrategy;
  }

  // capacity_reservation_groups - computed: false, optional: true, required: false
  private _capacityReservationGroups = new StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroupsList(this, "capacity_reservation_groups", true);
  public get capacityReservationGroups() {
    return this._capacityReservationGroups;
  }
  public putCapacityReservationGroups(value: StatefulNodeAzureStrategyCapacityReservationCapacityReservationGroups[] | cdktf.IResolvable) {
    this._capacityReservationGroups.internalValue = value;
  }
  public resetCapacityReservationGroups() {
    this._capacityReservationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationGroupsInput() {
    return this._capacityReservationGroups.internalValue;
  }
}

export class StatefulNodeAzureStrategyCapacityReservationList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureStrategyCapacityReservation[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureStrategyCapacityReservationOutputReference {
    return new StatefulNodeAzureStrategyCapacityReservationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureStrategyRevertToSpot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}
  */
  readonly performAt: string;
}

export function statefulNodeAzureStrategyRevertToSpotToTerraform(struct?: StatefulNodeAzureStrategyRevertToSpotOutputReference | StatefulNodeAzureStrategyRevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
  }
}


export function statefulNodeAzureStrategyRevertToSpotToHclTerraform(struct?: StatefulNodeAzureStrategyRevertToSpotOutputReference | StatefulNodeAzureStrategyRevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perform_at: {
      value: cdktf.stringToHclTerraform(struct!.performAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureStrategyRevertToSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureStrategyRevertToSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureStrategyRevertToSpot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
    }
  }

  // perform_at - computed: false, optional: false, required: true
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }
}
export interface StatefulNodeAzureStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#availability_vs_cost StatefulNodeAzure#availability_vs_cost}
  */
  readonly availabilityVsCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}
  */
  readonly fallbackToOnDemand: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#od_windows StatefulNodeAzure#od_windows}
  */
  readonly odWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}
  */
  readonly optimizationWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}
  */
  readonly preferredLifeCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#vm_admins StatefulNodeAzure#vm_admins}
  */
  readonly vmAdmins?: string[];
  /**
  * capacity_reservation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#capacity_reservation StatefulNodeAzure#capacity_reservation}
  */
  readonly capacityReservation?: StatefulNodeAzureStrategyCapacityReservation[] | cdktf.IResolvable;
  /**
  * revert_to_spot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#revert_to_spot StatefulNodeAzure#revert_to_spot}
  */
  readonly revertToSpot?: StatefulNodeAzureStrategyRevertToSpot;
}

export function statefulNodeAzureStrategyToTerraform(struct?: StatefulNodeAzureStrategyOutputReference | StatefulNodeAzureStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_vs_cost: cdktf.numberToTerraform(struct!.availabilityVsCost),
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    fallback_to_on_demand: cdktf.booleanToTerraform(struct!.fallbackToOnDemand),
    od_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.odWindows),
    optimization_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optimizationWindows),
    preferred_life_cycle: cdktf.stringToTerraform(struct!.preferredLifeCycle),
    vm_admins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmAdmins),
    capacity_reservation: cdktf.listMapper(statefulNodeAzureStrategyCapacityReservationToTerraform, true)(struct!.capacityReservation),
    revert_to_spot: statefulNodeAzureStrategyRevertToSpotToTerraform(struct!.revertToSpot),
  }
}


export function statefulNodeAzureStrategyToHclTerraform(struct?: StatefulNodeAzureStrategyOutputReference | StatefulNodeAzureStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_vs_cost: {
      value: cdktf.numberToHclTerraform(struct!.availabilityVsCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    draining_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fallback_to_on_demand: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    od_windows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.odWindows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    optimization_windows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optimizationWindows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_life_cycle: {
      value: cdktf.stringToHclTerraform(struct!.preferredLifeCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_admins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmAdmins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    capacity_reservation: {
      value: cdktf.listMapperHcl(statefulNodeAzureStrategyCapacityReservationToHclTerraform, true)(struct!.capacityReservation),
      isBlock: true,
      type: "set",
      storageClassType: "StatefulNodeAzureStrategyCapacityReservationList",
    },
    revert_to_spot: {
      value: statefulNodeAzureStrategyRevertToSpotToHclTerraform(struct!.revertToSpot),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureStrategyRevertToSpotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityVsCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityVsCost = this._availabilityVsCost;
    }
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._fallbackToOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToOnDemand = this._fallbackToOnDemand;
    }
    if (this._odWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.odWindows = this._odWindows;
    }
    if (this._optimizationWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationWindows = this._optimizationWindows;
    }
    if (this._preferredLifeCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifeCycle = this._preferredLifeCycle;
    }
    if (this._vmAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmAdmins = this._vmAdmins;
    }
    if (this._capacityReservation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservation = this._capacityReservation?.internalValue;
    }
    if (this._revertToSpot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revertToSpot = this._revertToSpot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityVsCost = undefined;
      this._drainingTimeout = undefined;
      this._fallbackToOnDemand = undefined;
      this._odWindows = undefined;
      this._optimizationWindows = undefined;
      this._preferredLifeCycle = undefined;
      this._vmAdmins = undefined;
      this._capacityReservation.internalValue = undefined;
      this._revertToSpot.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityVsCost = value.availabilityVsCost;
      this._drainingTimeout = value.drainingTimeout;
      this._fallbackToOnDemand = value.fallbackToOnDemand;
      this._odWindows = value.odWindows;
      this._optimizationWindows = value.optimizationWindows;
      this._preferredLifeCycle = value.preferredLifeCycle;
      this._vmAdmins = value.vmAdmins;
      this._capacityReservation.internalValue = value.capacityReservation;
      this._revertToSpot.internalValue = value.revertToSpot;
    }
  }

  // availability_vs_cost - computed: false, optional: true, required: false
  private _availabilityVsCost?: number; 
  public get availabilityVsCost() {
    return this.getNumberAttribute('availability_vs_cost');
  }
  public set availabilityVsCost(value: number) {
    this._availabilityVsCost = value;
  }
  public resetAvailabilityVsCost() {
    this._availabilityVsCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityVsCostInput() {
    return this._availabilityVsCost;
  }

  // draining_timeout - computed: true, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // fallback_to_on_demand - computed: false, optional: false, required: true
  private _fallbackToOnDemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOnDemand() {
    return this.getBooleanAttribute('fallback_to_on_demand');
  }
  public set fallbackToOnDemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOnDemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOnDemandInput() {
    return this._fallbackToOnDemand;
  }

  // od_windows - computed: false, optional: true, required: false
  private _odWindows?: string[]; 
  public get odWindows() {
    return this.getListAttribute('od_windows');
  }
  public set odWindows(value: string[]) {
    this._odWindows = value;
  }
  public resetOdWindows() {
    this._odWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odWindowsInput() {
    return this._odWindows;
  }

  // optimization_windows - computed: false, optional: true, required: false
  private _optimizationWindows?: string[]; 
  public get optimizationWindows() {
    return this.getListAttribute('optimization_windows');
  }
  public set optimizationWindows(value: string[]) {
    this._optimizationWindows = value;
  }
  public resetOptimizationWindows() {
    this._optimizationWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationWindowsInput() {
    return this._optimizationWindows;
  }

  // preferred_life_cycle - computed: true, optional: true, required: false
  private _preferredLifeCycle?: string; 
  public get preferredLifeCycle() {
    return this.getStringAttribute('preferred_life_cycle');
  }
  public set preferredLifeCycle(value: string) {
    this._preferredLifeCycle = value;
  }
  public resetPreferredLifeCycle() {
    this._preferredLifeCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifeCycleInput() {
    return this._preferredLifeCycle;
  }

  // vm_admins - computed: false, optional: true, required: false
  private _vmAdmins?: string[]; 
  public get vmAdmins() {
    return this.getListAttribute('vm_admins');
  }
  public set vmAdmins(value: string[]) {
    this._vmAdmins = value;
  }
  public resetVmAdmins() {
    this._vmAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmAdminsInput() {
    return this._vmAdmins;
  }

  // capacity_reservation - computed: false, optional: true, required: false
  private _capacityReservation = new StatefulNodeAzureStrategyCapacityReservationList(this, "capacity_reservation", true);
  public get capacityReservation() {
    return this._capacityReservation;
  }
  public putCapacityReservation(value: StatefulNodeAzureStrategyCapacityReservation[] | cdktf.IResolvable) {
    this._capacityReservation.internalValue = value;
  }
  public resetCapacityReservation() {
    this._capacityReservation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationInput() {
    return this._capacityReservation.internalValue;
  }

  // revert_to_spot - computed: false, optional: true, required: false
  private _revertToSpot = new StatefulNodeAzureStrategyRevertToSpotOutputReference(this, "revert_to_spot");
  public get revertToSpot() {
    return this._revertToSpot;
  }
  public putRevertToSpot(value: StatefulNodeAzureStrategyRevertToSpot) {
    this._revertToSpot.internalValue = value;
  }
  public resetRevertToSpot() {
    this._revertToSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToSpotInput() {
    return this._revertToSpot.internalValue;
  }
}
export interface StatefulNodeAzureTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}
  */
  readonly tagValue?: string;
}

export function statefulNodeAzureTagToTerraform(struct?: StatefulNodeAzureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function statefulNodeAzureTagToHclTerraform(struct?: StatefulNodeAzureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class StatefulNodeAzureTagList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureTag[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureTagOutputReference {
    return new StatefulNodeAzureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureUpdateState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#state StatefulNodeAzure#state}
  */
  readonly state: string;
}

export function statefulNodeAzureUpdateStateToTerraform(struct?: StatefulNodeAzureUpdateState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function statefulNodeAzureUpdateStateToHclTerraform(struct?: StatefulNodeAzureUpdateState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureUpdateStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatefulNodeAzureUpdateState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureUpdateState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class StatefulNodeAzureUpdateStateList extends cdktf.ComplexList {
  public internalValue? : StatefulNodeAzureUpdateState[] | cdktf.IResolvable

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
  public get(index: number): StatefulNodeAzureUpdateStateOutputReference {
    return new StatefulNodeAzureUpdateStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatefulNodeAzureVmSizesSpotSizeAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#max_cpu StatefulNodeAzure#max_cpu}
  */
  readonly maxCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#max_memory StatefulNodeAzure#max_memory}
  */
  readonly maxMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#max_storage StatefulNodeAzure#max_storage}
  */
  readonly maxStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#min_cpu StatefulNodeAzure#min_cpu}
  */
  readonly minCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#min_memory StatefulNodeAzure#min_memory}
  */
  readonly minMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#min_storage StatefulNodeAzure#min_storage}
  */
  readonly minStorage?: number;
}

export function statefulNodeAzureVmSizesSpotSizeAttributesToTerraform(struct?: StatefulNodeAzureVmSizesSpotSizeAttributesOutputReference | StatefulNodeAzureVmSizesSpotSizeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.numberToTerraform(struct!.maxCpu),
    max_memory: cdktf.numberToTerraform(struct!.maxMemory),
    max_storage: cdktf.numberToTerraform(struct!.maxStorage),
    min_cpu: cdktf.numberToTerraform(struct!.minCpu),
    min_memory: cdktf.numberToTerraform(struct!.minMemory),
    min_storage: cdktf.numberToTerraform(struct!.minStorage),
  }
}


export function statefulNodeAzureVmSizesSpotSizeAttributesToHclTerraform(struct?: StatefulNodeAzureVmSizesSpotSizeAttributesOutputReference | StatefulNodeAzureVmSizesSpotSizeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.numberToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory: {
      value: cdktf.numberToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_storage: {
      value: cdktf.numberToHclTerraform(struct!.maxStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cpu: {
      value: cdktf.numberToHclTerraform(struct!.minCpu),
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
    min_storage: {
      value: cdktf.numberToHclTerraform(struct!.minStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureVmSizesSpotSizeAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureVmSizesSpotSizeAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._maxStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStorage = this._maxStorage;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._minStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minStorage = this._minStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureVmSizesSpotSizeAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._maxStorage = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._minStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._maxStorage = value.maxStorage;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._minStorage = value.minStorage;
    }
  }

  // max_cpu - computed: false, optional: true, required: false
  private _maxCpu?: number; 
  public get maxCpu() {
    return this.getNumberAttribute('max_cpu');
  }
  public set maxCpu(value: number) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: false, optional: true, required: false
  private _maxMemory?: number; 
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }
  public set maxMemory(value: number) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // max_storage - computed: false, optional: true, required: false
  private _maxStorage?: number; 
  public get maxStorage() {
    return this.getNumberAttribute('max_storage');
  }
  public set maxStorage(value: number) {
    this._maxStorage = value;
  }
  public resetMaxStorage() {
    this._maxStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStorageInput() {
    return this._maxStorage;
  }

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: number; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
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

  // min_storage - computed: false, optional: true, required: false
  private _minStorage?: number; 
  public get minStorage() {
    return this.getNumberAttribute('min_storage');
  }
  public set minStorage(value: number) {
    this._minStorage = value;
  }
  public resetMinStorage() {
    this._minStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStorageInput() {
    return this._minStorage;
  }
}
export interface StatefulNodeAzureVmSizes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#excluded_vm_sizes StatefulNodeAzure#excluded_vm_sizes}
  */
  readonly excludedVmSizes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}
  */
  readonly odSizes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}
  */
  readonly preferredSpotSizes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}
  */
  readonly spotSizes?: string[];
  /**
  * spot_size_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#spot_size_attributes StatefulNodeAzure#spot_size_attributes}
  */
  readonly spotSizeAttributes?: StatefulNodeAzureVmSizesSpotSizeAttributes;
}

export function statefulNodeAzureVmSizesToTerraform(struct?: StatefulNodeAzureVmSizesOutputReference | StatefulNodeAzureVmSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_vm_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedVmSizes),
    od_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.odSizes),
    preferred_spot_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredSpotSizes),
    spot_sizes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spotSizes),
    spot_size_attributes: statefulNodeAzureVmSizesSpotSizeAttributesToTerraform(struct!.spotSizeAttributes),
  }
}


export function statefulNodeAzureVmSizesToHclTerraform(struct?: StatefulNodeAzureVmSizesOutputReference | StatefulNodeAzureVmSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_vm_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedVmSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    od_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.odSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_spot_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredSpotSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spot_sizes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spotSizes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spot_size_attributes: {
      value: statefulNodeAzureVmSizesSpotSizeAttributesToHclTerraform(struct!.spotSizeAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "StatefulNodeAzureVmSizesSpotSizeAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatefulNodeAzureVmSizesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureVmSizes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedVmSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedVmSizes = this._excludedVmSizes;
    }
    if (this._odSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.odSizes = this._odSizes;
    }
    if (this._preferredSpotSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredSpotSizes = this._preferredSpotSizes;
    }
    if (this._spotSizes !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSizes = this._spotSizes;
    }
    if (this._spotSizeAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotSizeAttributes = this._spotSizeAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureVmSizes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedVmSizes = undefined;
      this._odSizes = undefined;
      this._preferredSpotSizes = undefined;
      this._spotSizes = undefined;
      this._spotSizeAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedVmSizes = value.excludedVmSizes;
      this._odSizes = value.odSizes;
      this._preferredSpotSizes = value.preferredSpotSizes;
      this._spotSizes = value.spotSizes;
      this._spotSizeAttributes.internalValue = value.spotSizeAttributes;
    }
  }

  // excluded_vm_sizes - computed: false, optional: true, required: false
  private _excludedVmSizes?: string[]; 
  public get excludedVmSizes() {
    return this.getListAttribute('excluded_vm_sizes');
  }
  public set excludedVmSizes(value: string[]) {
    this._excludedVmSizes = value;
  }
  public resetExcludedVmSizes() {
    this._excludedVmSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedVmSizesInput() {
    return this._excludedVmSizes;
  }

  // od_sizes - computed: false, optional: false, required: true
  private _odSizes?: string[]; 
  public get odSizes() {
    return this.getListAttribute('od_sizes');
  }
  public set odSizes(value: string[]) {
    this._odSizes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odSizesInput() {
    return this._odSizes;
  }

  // preferred_spot_sizes - computed: false, optional: true, required: false
  private _preferredSpotSizes?: string[]; 
  public get preferredSpotSizes() {
    return this.getListAttribute('preferred_spot_sizes');
  }
  public set preferredSpotSizes(value: string[]) {
    this._preferredSpotSizes = value;
  }
  public resetPreferredSpotSizes() {
    this._preferredSpotSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSpotSizesInput() {
    return this._preferredSpotSizes;
  }

  // spot_sizes - computed: false, optional: true, required: false
  private _spotSizes?: string[]; 
  public get spotSizes() {
    return this.getListAttribute('spot_sizes');
  }
  public set spotSizes(value: string[]) {
    this._spotSizes = value;
  }
  public resetSpotSizes() {
    this._spotSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSizesInput() {
    return this._spotSizes;
  }

  // spot_size_attributes - computed: false, optional: true, required: false
  private _spotSizeAttributes = new StatefulNodeAzureVmSizesSpotSizeAttributesOutputReference(this, "spot_size_attributes");
  public get spotSizeAttributes() {
    return this._spotSizeAttributes;
  }
  public putSpotSizeAttributes(value: StatefulNodeAzureVmSizesSpotSizeAttributes) {
    this._spotSizeAttributes.internalValue = value;
  }
  public resetSpotSizeAttributes() {
    this._spotSizeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSizeAttributesInput() {
    return this._spotSizeAttributes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure spotinst_stateful_node_azure}
*/
export class StatefulNodeAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_stateful_node_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatefulNodeAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatefulNodeAzure to import
  * @param importFromId The id of the existing StatefulNodeAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatefulNodeAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_stateful_node_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/stateful_node_azure spotinst_stateful_node_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatefulNodeAzureConfig
  */
  public constructor(scope: Construct, id: string, config: StatefulNodeAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_stateful_node_azure',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customData = config.customData;
    this._dataDisksPersistenceMode = config.dataDisksPersistenceMode;
    this._description = config.description;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._name = config.name;
    this._os = config.os;
    this._osDiskPersistenceMode = config.osDiskPersistenceMode;
    this._preferredZone = config.preferredZone;
    this._region = config.region;
    this._resourceGroupName = config.resourceGroupName;
    this._shouldPersistDataDisks = config.shouldPersistDataDisks;
    this._shouldPersistNetwork = config.shouldPersistNetwork;
    this._shouldPersistOsDisk = config.shouldPersistOsDisk;
    this._shutdownScript = config.shutdownScript;
    this._userData = config.userData;
    this._vmName = config.vmName;
    this._vmNamePrefix = config.vmNamePrefix;
    this._zones = config.zones;
    this._attachDataDisk.internalValue = config.attachDataDisk;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._dataDisk.internalValue = config.dataDisk;
    this._delete.internalValue = config.delete;
    this._detachDataDisk.internalValue = config.detachDataDisk;
    this._extension.internalValue = config.extension;
    this._health.internalValue = config.health;
    this._image.internalValue = config.image;
    this._importVm.internalValue = config.importVm;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._login.internalValue = config.login;
    this._managedServiceIdentities.internalValue = config.managedServiceIdentities;
    this._network.internalValue = config.network;
    this._osDisk.internalValue = config.osDisk;
    this._proximityPlacementGroups.internalValue = config.proximityPlacementGroups;
    this._schedulingTask.internalValue = config.schedulingTask;
    this._secret.internalValue = config.secret;
    this._security.internalValue = config.security;
    this._signal.internalValue = config.signal;
    this._strategy.internalValue = config.strategy;
    this._tag.internalValue = config.tag;
    this._updateState.internalValue = config.updateState;
    this._vmSizes.internalValue = config.vmSizes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_data - computed: true, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // data_disks_persistence_mode - computed: true, optional: true, required: false
  private _dataDisksPersistenceMode?: string; 
  public get dataDisksPersistenceMode() {
    return this.getStringAttribute('data_disks_persistence_mode');
  }
  public set dataDisksPersistenceMode(value: string) {
    this._dataDisksPersistenceMode = value;
  }
  public resetDataDisksPersistenceMode() {
    this._dataDisksPersistenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksPersistenceModeInput() {
    return this._dataDisksPersistenceMode;
  }

  // description - computed: true, optional: true, required: false
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

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // os_disk_persistence_mode - computed: true, optional: true, required: false
  private _osDiskPersistenceMode?: string; 
  public get osDiskPersistenceMode() {
    return this.getStringAttribute('os_disk_persistence_mode');
  }
  public set osDiskPersistenceMode(value: string) {
    this._osDiskPersistenceMode = value;
  }
  public resetOsDiskPersistenceMode() {
    this._osDiskPersistenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskPersistenceModeInput() {
    return this._osDiskPersistenceMode;
  }

  // preferred_zone - computed: true, optional: true, required: false
  private _preferredZone?: string; 
  public get preferredZone() {
    return this.getStringAttribute('preferred_zone');
  }
  public set preferredZone(value: string) {
    this._preferredZone = value;
  }
  public resetPreferredZone() {
    this._preferredZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredZoneInput() {
    return this._preferredZone;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // should_persist_data_disks - computed: false, optional: false, required: true
  private _shouldPersistDataDisks?: boolean | cdktf.IResolvable; 
  public get shouldPersistDataDisks() {
    return this.getBooleanAttribute('should_persist_data_disks');
  }
  public set shouldPersistDataDisks(value: boolean | cdktf.IResolvable) {
    this._shouldPersistDataDisks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPersistDataDisksInput() {
    return this._shouldPersistDataDisks;
  }

  // should_persist_network - computed: false, optional: false, required: true
  private _shouldPersistNetwork?: boolean | cdktf.IResolvable; 
  public get shouldPersistNetwork() {
    return this.getBooleanAttribute('should_persist_network');
  }
  public set shouldPersistNetwork(value: boolean | cdktf.IResolvable) {
    this._shouldPersistNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPersistNetworkInput() {
    return this._shouldPersistNetwork;
  }

  // should_persist_os_disk - computed: false, optional: false, required: true
  private _shouldPersistOsDisk?: boolean | cdktf.IResolvable; 
  public get shouldPersistOsDisk() {
    return this.getBooleanAttribute('should_persist_os_disk');
  }
  public set shouldPersistOsDisk(value: boolean | cdktf.IResolvable) {
    this._shouldPersistOsDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPersistOsDiskInput() {
    return this._shouldPersistOsDisk;
  }

  // shutdown_script - computed: true, optional: true, required: false
  private _shutdownScript?: string; 
  public get shutdownScript() {
    return this.getStringAttribute('shutdown_script');
  }
  public set shutdownScript(value: string) {
    this._shutdownScript = value;
  }
  public resetShutdownScript() {
    this._shutdownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptInput() {
    return this._shutdownScript;
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

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // vm_name_prefix - computed: false, optional: true, required: false
  private _vmNamePrefix?: string; 
  public get vmNamePrefix() {
    return this.getStringAttribute('vm_name_prefix');
  }
  public set vmNamePrefix(value: string) {
    this._vmNamePrefix = value;
  }
  public resetVmNamePrefix() {
    this._vmNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNamePrefixInput() {
    return this._vmNamePrefix;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // attach_data_disk - computed: false, optional: true, required: false
  private _attachDataDisk = new StatefulNodeAzureAttachDataDiskList(this, "attach_data_disk", false);
  public get attachDataDisk() {
    return this._attachDataDisk;
  }
  public putAttachDataDisk(value: StatefulNodeAzureAttachDataDisk[] | cdktf.IResolvable) {
    this._attachDataDisk.internalValue = value;
  }
  public resetAttachDataDisk() {
    this._attachDataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachDataDiskInput() {
    return this._attachDataDisk.internalValue;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new StatefulNodeAzureBootDiagnosticsList(this, "boot_diagnostics", false);
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: StatefulNodeAzureBootDiagnostics[] | cdktf.IResolvable) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new StatefulNodeAzureDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: StatefulNodeAzureDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new StatefulNodeAzureDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: StatefulNodeAzureDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // detach_data_disk - computed: false, optional: true, required: false
  private _detachDataDisk = new StatefulNodeAzureDetachDataDiskList(this, "detach_data_disk", false);
  public get detachDataDisk() {
    return this._detachDataDisk;
  }
  public putDetachDataDisk(value: StatefulNodeAzureDetachDataDisk[] | cdktf.IResolvable) {
    this._detachDataDisk.internalValue = value;
  }
  public resetDetachDataDisk() {
    this._detachDataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachDataDiskInput() {
    return this._detachDataDisk.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new StatefulNodeAzureExtensionList(this, "extension", true);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: StatefulNodeAzureExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new StatefulNodeAzureHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: StatefulNodeAzureHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new StatefulNodeAzureImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: StatefulNodeAzureImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // import_vm - computed: false, optional: true, required: false
  private _importVm = new StatefulNodeAzureImportVmList(this, "import_vm", false);
  public get importVm() {
    return this._importVm;
  }
  public putImportVm(value: StatefulNodeAzureImportVm[] | cdktf.IResolvable) {
    this._importVm.internalValue = value;
  }
  public resetImportVm() {
    this._importVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importVmInput() {
    return this._importVm.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new StatefulNodeAzureLoadBalancerList(this, "load_balancer", true);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: StatefulNodeAzureLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // login - computed: false, optional: true, required: false
  private _login = new StatefulNodeAzureLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: StatefulNodeAzureLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // managed_service_identities - computed: false, optional: true, required: false
  private _managedServiceIdentities = new StatefulNodeAzureManagedServiceIdentitiesList(this, "managed_service_identities", true);
  public get managedServiceIdentities() {
    return this._managedServiceIdentities;
  }
  public putManagedServiceIdentities(value: StatefulNodeAzureManagedServiceIdentities[] | cdktf.IResolvable) {
    this._managedServiceIdentities.internalValue = value;
  }
  public resetManagedServiceIdentities() {
    this._managedServiceIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceIdentitiesInput() {
    return this._managedServiceIdentities.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new StatefulNodeAzureNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: StatefulNodeAzureNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk = new StatefulNodeAzureOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: StatefulNodeAzureOsDisk) {
    this._osDisk.internalValue = value;
  }
  public resetOsDisk() {
    this._osDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // proximity_placement_groups - computed: false, optional: true, required: false
  private _proximityPlacementGroups = new StatefulNodeAzureProximityPlacementGroupsList(this, "proximity_placement_groups", true);
  public get proximityPlacementGroups() {
    return this._proximityPlacementGroups;
  }
  public putProximityPlacementGroups(value: StatefulNodeAzureProximityPlacementGroups[] | cdktf.IResolvable) {
    this._proximityPlacementGroups.internalValue = value;
  }
  public resetProximityPlacementGroups() {
    this._proximityPlacementGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupsInput() {
    return this._proximityPlacementGroups.internalValue;
  }

  // scheduling_task - computed: false, optional: true, required: false
  private _schedulingTask = new StatefulNodeAzureSchedulingTaskList(this, "scheduling_task", true);
  public get schedulingTask() {
    return this._schedulingTask;
  }
  public putSchedulingTask(value: StatefulNodeAzureSchedulingTask[] | cdktf.IResolvable) {
    this._schedulingTask.internalValue = value;
  }
  public resetSchedulingTask() {
    this._schedulingTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTaskInput() {
    return this._schedulingTask.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new StatefulNodeAzureSecretList(this, "secret", true);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: StatefulNodeAzureSecret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new StatefulNodeAzureSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: StatefulNodeAzureSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // signal - computed: false, optional: true, required: false
  private _signal = new StatefulNodeAzureSignalList(this, "signal", false);
  public get signal() {
    return this._signal;
  }
  public putSignal(value: StatefulNodeAzureSignal[] | cdktf.IResolvable) {
    this._signal.internalValue = value;
  }
  public resetSignal() {
    this._signal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new StatefulNodeAzureStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: StatefulNodeAzureStrategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new StatefulNodeAzureTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: StatefulNodeAzureTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // update_state - computed: false, optional: true, required: false
  private _updateState = new StatefulNodeAzureUpdateStateList(this, "update_state", false);
  public get updateState() {
    return this._updateState;
  }
  public putUpdateState(value: StatefulNodeAzureUpdateState[] | cdktf.IResolvable) {
    this._updateState.internalValue = value;
  }
  public resetUpdateState() {
    this._updateState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStateInput() {
    return this._updateState.internalValue;
  }

  // vm_sizes - computed: false, optional: false, required: true
  private _vmSizes = new StatefulNodeAzureVmSizesOutputReference(this, "vm_sizes");
  public get vmSizes() {
    return this._vmSizes;
  }
  public putVmSizes(value: StatefulNodeAzureVmSizes) {
    this._vmSizes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizesInput() {
    return this._vmSizes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data: cdktf.stringToTerraform(this._customData),
      data_disks_persistence_mode: cdktf.stringToTerraform(this._dataDisksPersistenceMode),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      os_disk_persistence_mode: cdktf.stringToTerraform(this._osDiskPersistenceMode),
      preferred_zone: cdktf.stringToTerraform(this._preferredZone),
      region: cdktf.stringToTerraform(this._region),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      should_persist_data_disks: cdktf.booleanToTerraform(this._shouldPersistDataDisks),
      should_persist_network: cdktf.booleanToTerraform(this._shouldPersistNetwork),
      should_persist_os_disk: cdktf.booleanToTerraform(this._shouldPersistOsDisk),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      user_data: cdktf.stringToTerraform(this._userData),
      vm_name: cdktf.stringToTerraform(this._vmName),
      vm_name_prefix: cdktf.stringToTerraform(this._vmNamePrefix),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      attach_data_disk: cdktf.listMapper(statefulNodeAzureAttachDataDiskToTerraform, true)(this._attachDataDisk.internalValue),
      boot_diagnostics: cdktf.listMapper(statefulNodeAzureBootDiagnosticsToTerraform, true)(this._bootDiagnostics.internalValue),
      data_disk: cdktf.listMapper(statefulNodeAzureDataDiskToTerraform, true)(this._dataDisk.internalValue),
      delete: cdktf.listMapper(statefulNodeAzureDeleteToTerraform, true)(this._delete.internalValue),
      detach_data_disk: cdktf.listMapper(statefulNodeAzureDetachDataDiskToTerraform, true)(this._detachDataDisk.internalValue),
      extension: cdktf.listMapper(statefulNodeAzureExtensionToTerraform, true)(this._extension.internalValue),
      health: statefulNodeAzureHealthToTerraform(this._health.internalValue),
      image: statefulNodeAzureImageToTerraform(this._image.internalValue),
      import_vm: cdktf.listMapper(statefulNodeAzureImportVmToTerraform, true)(this._importVm.internalValue),
      load_balancer: cdktf.listMapper(statefulNodeAzureLoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      login: statefulNodeAzureLoginToTerraform(this._login.internalValue),
      managed_service_identities: cdktf.listMapper(statefulNodeAzureManagedServiceIdentitiesToTerraform, true)(this._managedServiceIdentities.internalValue),
      network: statefulNodeAzureNetworkToTerraform(this._network.internalValue),
      os_disk: statefulNodeAzureOsDiskToTerraform(this._osDisk.internalValue),
      proximity_placement_groups: cdktf.listMapper(statefulNodeAzureProximityPlacementGroupsToTerraform, true)(this._proximityPlacementGroups.internalValue),
      scheduling_task: cdktf.listMapper(statefulNodeAzureSchedulingTaskToTerraform, true)(this._schedulingTask.internalValue),
      secret: cdktf.listMapper(statefulNodeAzureSecretToTerraform, true)(this._secret.internalValue),
      security: statefulNodeAzureSecurityToTerraform(this._security.internalValue),
      signal: cdktf.listMapper(statefulNodeAzureSignalToTerraform, true)(this._signal.internalValue),
      strategy: statefulNodeAzureStrategyToTerraform(this._strategy.internalValue),
      tag: cdktf.listMapper(statefulNodeAzureTagToTerraform, true)(this._tag.internalValue),
      update_state: cdktf.listMapper(statefulNodeAzureUpdateStateToTerraform, true)(this._updateState.internalValue),
      vm_sizes: statefulNodeAzureVmSizesToTerraform(this._vmSizes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_data: {
        value: cdktf.stringToHclTerraform(this._customData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_disks_persistence_mode: {
        value: cdktf.stringToHclTerraform(this._dataDisksPersistenceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
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
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_disk_persistence_mode: {
        value: cdktf.stringToHclTerraform(this._osDiskPersistenceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_zone: {
        value: cdktf.stringToHclTerraform(this._preferredZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_persist_data_disks: {
        value: cdktf.booleanToHclTerraform(this._shouldPersistDataDisks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_persist_network: {
        value: cdktf.booleanToHclTerraform(this._shouldPersistNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_persist_os_disk: {
        value: cdktf.booleanToHclTerraform(this._shouldPersistOsDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_script: {
        value: cdktf.stringToHclTerraform(this._shutdownScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_name: {
        value: cdktf.stringToHclTerraform(this._vmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_name_prefix: {
        value: cdktf.stringToHclTerraform(this._vmNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attach_data_disk: {
        value: cdktf.listMapperHcl(statefulNodeAzureAttachDataDiskToHclTerraform, true)(this._attachDataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureAttachDataDiskList",
      },
      boot_diagnostics: {
        value: cdktf.listMapperHcl(statefulNodeAzureBootDiagnosticsToHclTerraform, true)(this._bootDiagnostics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureBootDiagnosticsList",
      },
      data_disk: {
        value: cdktf.listMapperHcl(statefulNodeAzureDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureDataDiskList",
      },
      delete: {
        value: cdktf.listMapperHcl(statefulNodeAzureDeleteToHclTerraform, true)(this._delete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureDeleteList",
      },
      detach_data_disk: {
        value: cdktf.listMapperHcl(statefulNodeAzureDetachDataDiskToHclTerraform, true)(this._detachDataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureDetachDataDiskList",
      },
      extension: {
        value: cdktf.listMapperHcl(statefulNodeAzureExtensionToHclTerraform, true)(this._extension.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureExtensionList",
      },
      health: {
        value: statefulNodeAzureHealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureHealthList",
      },
      image: {
        value: statefulNodeAzureImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureImageList",
      },
      import_vm: {
        value: cdktf.listMapperHcl(statefulNodeAzureImportVmToHclTerraform, true)(this._importVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureImportVmList",
      },
      load_balancer: {
        value: cdktf.listMapperHcl(statefulNodeAzureLoadBalancerToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureLoadBalancerList",
      },
      login: {
        value: statefulNodeAzureLoginToHclTerraform(this._login.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureLoginList",
      },
      managed_service_identities: {
        value: cdktf.listMapperHcl(statefulNodeAzureManagedServiceIdentitiesToHclTerraform, true)(this._managedServiceIdentities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureManagedServiceIdentitiesList",
      },
      network: {
        value: statefulNodeAzureNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureNetworkList",
      },
      os_disk: {
        value: statefulNodeAzureOsDiskToHclTerraform(this._osDisk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureOsDiskList",
      },
      proximity_placement_groups: {
        value: cdktf.listMapperHcl(statefulNodeAzureProximityPlacementGroupsToHclTerraform, true)(this._proximityPlacementGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureProximityPlacementGroupsList",
      },
      scheduling_task: {
        value: cdktf.listMapperHcl(statefulNodeAzureSchedulingTaskToHclTerraform, true)(this._schedulingTask.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureSchedulingTaskList",
      },
      secret: {
        value: cdktf.listMapperHcl(statefulNodeAzureSecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureSecretList",
      },
      security: {
        value: statefulNodeAzureSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureSecurityList",
      },
      signal: {
        value: cdktf.listMapperHcl(statefulNodeAzureSignalToHclTerraform, true)(this._signal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureSignalList",
      },
      strategy: {
        value: statefulNodeAzureStrategyToHclTerraform(this._strategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureStrategyList",
      },
      tag: {
        value: cdktf.listMapperHcl(statefulNodeAzureTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatefulNodeAzureTagList",
      },
      update_state: {
        value: cdktf.listMapperHcl(statefulNodeAzureUpdateStateToHclTerraform, true)(this._updateState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureUpdateStateList",
      },
      vm_sizes: {
        value: statefulNodeAzureVmSizesToHclTerraform(this._vmSizes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatefulNodeAzureVmSizesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
