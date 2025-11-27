// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_specifications_hardware
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDedicatedServerSpecificationsHardwareConfig extends cdktf.TerraformMetaArguments {
  /**
  * The internal name of your dedicated server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_specifications_hardware#service_name DataOvhDedicatedServerSpecificationsHardware#service_name}
  */
  readonly serviceName: string;
}
export interface DataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSize {
}

export function dataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSizeToTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSizeToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSize {
}

export function dataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSizeToTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSizeToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSize {
}

export function dataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSizeToTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSizeToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsHardwareDiskGroups {
}

export function dataOvhDedicatedServerSpecificationsHardwareDiskGroupsToTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDiskGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsHardwareDiskGroupsToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareDiskGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsHardwareDiskGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhDedicatedServerSpecificationsHardwareDiskGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsHardwareDiskGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_hardware_raid_size - computed: true, optional: false, required: false
  private _defaultHardwareRaidSize = new DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDefaultHardwareRaidSizeOutputReference(this, "default_hardware_raid_size");
  public get defaultHardwareRaidSize() {
    return this._defaultHardwareRaidSize;
  }

  // default_hardware_raid_type - computed: true, optional: false, required: false
  public get defaultHardwareRaidType() {
    return this.getStringAttribute('default_hardware_raid_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_group_id - computed: true, optional: false, required: false
  public get diskGroupId() {
    return this.getNumberAttribute('disk_group_id');
  }

  // disk_size - computed: true, optional: false, required: false
  private _diskSize = new DataOvhDedicatedServerSpecificationsHardwareDiskGroupsDiskSizeOutputReference(this, "disk_size");
  public get diskSize() {
    return this._diskSize;
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // number_of_disks - computed: true, optional: false, required: false
  public get numberOfDisks() {
    return this.getNumberAttribute('number_of_disks');
  }

  // raid_controller - computed: true, optional: false, required: false
  public get raidController() {
    return this.getStringAttribute('raid_controller');
  }
}

export class DataOvhDedicatedServerSpecificationsHardwareDiskGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhDedicatedServerSpecificationsHardwareDiskGroupsOutputReference {
    return new DataOvhDedicatedServerSpecificationsHardwareDiskGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhDedicatedServerSpecificationsHardwareExpansionCards {
}

export function dataOvhDedicatedServerSpecificationsHardwareExpansionCardsToTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareExpansionCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsHardwareExpansionCardsToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareExpansionCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsHardwareExpansionCardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhDedicatedServerSpecificationsHardwareExpansionCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsHardwareExpansionCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOvhDedicatedServerSpecificationsHardwareExpansionCardsList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhDedicatedServerSpecificationsHardwareExpansionCardsOutputReference {
    return new DataOvhDedicatedServerSpecificationsHardwareExpansionCardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhDedicatedServerSpecificationsHardwareMemorySize {
}

export function dataOvhDedicatedServerSpecificationsHardwareMemorySizeToTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareMemorySize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsHardwareMemorySizeToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareMemorySize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsHardwareMemorySizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhDedicatedServerSpecificationsHardwareMemorySize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsHardwareMemorySize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataOvhDedicatedServerSpecificationsHardwareUsbKeys {
}

export function dataOvhDedicatedServerSpecificationsHardwareUsbKeysToTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareUsbKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhDedicatedServerSpecificationsHardwareUsbKeysToHclTerraform(struct?: DataOvhDedicatedServerSpecificationsHardwareUsbKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhDedicatedServerSpecificationsHardwareUsbKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhDedicatedServerSpecificationsHardwareUsbKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhDedicatedServerSpecificationsHardwareUsbKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataOvhDedicatedServerSpecificationsHardwareUsbKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhDedicatedServerSpecificationsHardwareUsbKeysOutputReference {
    return new DataOvhDedicatedServerSpecificationsHardwareUsbKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_specifications_hardware ovh_dedicated_server_specifications_hardware}
*/
export class DataOvhDedicatedServerSpecificationsHardware extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_server_specifications_hardware";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDedicatedServerSpecificationsHardware resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDedicatedServerSpecificationsHardware to import
  * @param importFromId The id of the existing DataOvhDedicatedServerSpecificationsHardware that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_specifications_hardware#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDedicatedServerSpecificationsHardware to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_server_specifications_hardware", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/dedicated_server_specifications_hardware ovh_dedicated_server_specifications_hardware} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDedicatedServerSpecificationsHardwareConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDedicatedServerSpecificationsHardwareConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_server_specifications_hardware',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_mode - computed: true, optional: false, required: false
  public get bootMode() {
    return this.getStringAttribute('boot_mode');
  }

  // cores_per_processor - computed: true, optional: false, required: false
  public get coresPerProcessor() {
    return this.getNumberAttribute('cores_per_processor');
  }

  // default_hardware_raid_size - computed: true, optional: false, required: false
  private _defaultHardwareRaidSize = new DataOvhDedicatedServerSpecificationsHardwareDefaultHardwareRaidSizeOutputReference(this, "default_hardware_raid_size");
  public get defaultHardwareRaidSize() {
    return this._defaultHardwareRaidSize;
  }

  // default_hardware_raid_type - computed: true, optional: false, required: false
  public get defaultHardwareRaidType() {
    return this.getStringAttribute('default_hardware_raid_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_groups - computed: true, optional: false, required: false
  private _diskGroups = new DataOvhDedicatedServerSpecificationsHardwareDiskGroupsList(this, "disk_groups", false);
  public get diskGroups() {
    return this._diskGroups;
  }

  // expansion_cards - computed: true, optional: false, required: false
  private _expansionCards = new DataOvhDedicatedServerSpecificationsHardwareExpansionCardsList(this, "expansion_cards", false);
  public get expansionCards() {
    return this._expansionCards;
  }

  // form_factor - computed: true, optional: false, required: false
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }

  // memory_size - computed: true, optional: false, required: false
  private _memorySize = new DataOvhDedicatedServerSpecificationsHardwareMemorySizeOutputReference(this, "memory_size");
  public get memorySize() {
    return this._memorySize;
  }

  // motherboard - computed: true, optional: false, required: false
  public get motherboard() {
    return this.getStringAttribute('motherboard');
  }

  // number_of_processors - computed: true, optional: false, required: false
  public get numberOfProcessors() {
    return this.getNumberAttribute('number_of_processors');
  }

  // processor_architecture - computed: true, optional: false, required: false
  public get processorArchitecture() {
    return this.getStringAttribute('processor_architecture');
  }

  // processor_name - computed: true, optional: false, required: false
  public get processorName() {
    return this.getStringAttribute('processor_name');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // threads_per_processor - computed: true, optional: false, required: false
  public get threadsPerProcessor() {
    return this.getNumberAttribute('threads_per_processor');
  }

  // usb_keys - computed: true, optional: false, required: false
  private _usbKeys = new DataOvhDedicatedServerSpecificationsHardwareUsbKeysList(this, "usb_keys", false);
  public get usbKeys() {
    return this._usbKeys;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
