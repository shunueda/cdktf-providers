// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#address_name DataAlicloudEips#address_name}
  */
  readonly addressName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#associated_instance_id DataAlicloudEips#associated_instance_id}
  */
  readonly associatedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#associated_instance_type DataAlicloudEips#associated_instance_type}
  */
  readonly associatedInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#dry_run DataAlicloudEips#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#enable_details DataAlicloudEips#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#id DataAlicloudEips#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#ids DataAlicloudEips#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#in_use DataAlicloudEips#in_use}
  */
  readonly inUse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#include_reservation_data DataAlicloudEips#include_reservation_data}
  */
  readonly includeReservationData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#ip_address DataAlicloudEips#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#ip_addresses DataAlicloudEips#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#isp DataAlicloudEips#isp}
  */
  readonly isp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#lock_reason DataAlicloudEips#lock_reason}
  */
  readonly lockReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#name_regex DataAlicloudEips#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#output_file DataAlicloudEips#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#payment_type DataAlicloudEips#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#resource_group_id DataAlicloudEips#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#segment_instance_id DataAlicloudEips#segment_instance_id}
  */
  readonly segmentInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#status DataAlicloudEips#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#tags DataAlicloudEips#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAlicloudEipsAddresses {
}

export function dataAlicloudEipsAddressesToTerraform(struct?: DataAlicloudEipsAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEipsAddressesToHclTerraform(struct?: DataAlicloudEipsAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEipsAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEipsAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEipsAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_name - computed: true, optional: false, required: false
  public get addressName() {
    return this.getStringAttribute('address_name');
  }

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // available_regions - computed: true, optional: false, required: false
  public get availableRegions() {
    return this.getListAttribute('available_regions');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // bandwidth_package_bandwidth - computed: true, optional: false, required: false
  public get bandwidthPackageBandwidth() {
    return this.getStringAttribute('bandwidth_package_bandwidth');
  }

  // bandwidth_package_id - computed: true, optional: false, required: false
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }

  // bandwidth_package_type - computed: true, optional: false, required: false
  public get bandwidthPackageType() {
    return this.getStringAttribute('bandwidth_package_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // has_reservation_data - computed: true, optional: false, required: false
  public get hasReservationData() {
    return this.getStringAttribute('has_reservation_data');
  }

  // hd_monitor_status - computed: true, optional: false, required: false
  public get hdMonitorStatus() {
    return this.getStringAttribute('hd_monitor_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_region_id - computed: true, optional: false, required: false
  public get instanceRegionId() {
    return this.getStringAttribute('instance_region_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // isp - computed: true, optional: false, required: false
  public get isp() {
    return this.getStringAttribute('isp');
  }

  // operation_locks - computed: true, optional: false, required: false
  public get operationLocks() {
    return this.getListAttribute('operation_locks');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // reservation_active_time - computed: true, optional: false, required: false
  public get reservationActiveTime() {
    return this.getStringAttribute('reservation_active_time');
  }

  // reservation_bandwidth - computed: true, optional: false, required: false
  public get reservationBandwidth() {
    return this.getStringAttribute('reservation_bandwidth');
  }

  // reservation_internet_charge_type - computed: true, optional: false, required: false
  public get reservationInternetChargeType() {
    return this.getStringAttribute('reservation_internet_charge_type');
  }

  // reservation_order_type - computed: true, optional: false, required: false
  public get reservationOrderType() {
    return this.getStringAttribute('reservation_order_type');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // second_limited - computed: true, optional: false, required: false
  public get secondLimited() {
    return this.getBooleanAttribute('second_limited');
  }

  // segment_instance_id - computed: true, optional: false, required: false
  public get segmentInstanceId() {
    return this.getStringAttribute('segment_instance_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataAlicloudEipsAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEipsAddressesOutputReference {
    return new DataAlicloudEipsAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudEipsEips {
}

export function dataAlicloudEipsEipsToTerraform(struct?: DataAlicloudEipsEips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEipsEipsToHclTerraform(struct?: DataAlicloudEipsEips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEipsEipsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEipsEips | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEipsEips | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudEipsEipsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEipsEipsOutputReference {
    return new DataAlicloudEipsEipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips alicloud_eips}
*/
export class DataAlicloudEips extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEips resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEips to import
  * @param importFromId The id of the existing DataAlicloudEips that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEips to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eips alicloud_eips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEipsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEipsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eips',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressName = config.addressName;
    this._associatedInstanceId = config.associatedInstanceId;
    this._associatedInstanceType = config.associatedInstanceType;
    this._dryRun = config.dryRun;
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._inUse = config.inUse;
    this._includeReservationData = config.includeReservationData;
    this._ipAddress = config.ipAddress;
    this._ipAddresses = config.ipAddresses;
    this._isp = config.isp;
    this._lockReason = config.lockReason;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._paymentType = config.paymentType;
    this._resourceGroupId = config.resourceGroupId;
    this._segmentInstanceId = config.segmentInstanceId;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_name - computed: false, optional: true, required: false
  private _addressName?: string; 
  public get addressName() {
    return this.getStringAttribute('address_name');
  }
  public set addressName(value: string) {
    this._addressName = value;
  }
  public resetAddressName() {
    this._addressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressNameInput() {
    return this._addressName;
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataAlicloudEipsAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // associated_instance_id - computed: false, optional: true, required: false
  private _associatedInstanceId?: string; 
  public get associatedInstanceId() {
    return this.getStringAttribute('associated_instance_id');
  }
  public set associatedInstanceId(value: string) {
    this._associatedInstanceId = value;
  }
  public resetAssociatedInstanceId() {
    this._associatedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInstanceIdInput() {
    return this._associatedInstanceId;
  }

  // associated_instance_type - computed: false, optional: true, required: false
  private _associatedInstanceType?: string; 
  public get associatedInstanceType() {
    return this.getStringAttribute('associated_instance_type');
  }
  public set associatedInstanceType(value: string) {
    this._associatedInstanceType = value;
  }
  public resetAssociatedInstanceType() {
    this._associatedInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInstanceTypeInput() {
    return this._associatedInstanceType;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // eips - computed: true, optional: false, required: false
  private _eips = new DataAlicloudEipsEipsList(this, "eips", false);
  public get eips() {
    return this._eips;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // in_use - computed: false, optional: true, required: false
  private _inUse?: boolean | cdktf.IResolvable; 
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }
  public set inUse(value: boolean | cdktf.IResolvable) {
    this._inUse = value;
  }
  public resetInUse() {
    this._inUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseInput() {
    return this._inUse;
  }

  // include_reservation_data - computed: false, optional: true, required: false
  private _includeReservationData?: boolean | cdktf.IResolvable; 
  public get includeReservationData() {
    return this.getBooleanAttribute('include_reservation_data');
  }
  public set includeReservationData(value: boolean | cdktf.IResolvable) {
    this._includeReservationData = value;
  }
  public resetIncludeReservationData() {
    this._includeReservationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReservationDataInput() {
    return this._includeReservationData;
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

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // isp - computed: false, optional: true, required: false
  private _isp?: string; 
  public get isp() {
    return this.getStringAttribute('isp');
  }
  public set isp(value: string) {
    this._isp = value;
  }
  public resetIsp() {
    this._isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }

  // lock_reason - computed: false, optional: true, required: false
  private _lockReason?: string; 
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }
  public set lockReason(value: string) {
    this._lockReason = value;
  }
  public resetLockReason() {
    this._lockReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockReasonInput() {
    return this._lockReason;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // payment_type - computed: false, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // segment_instance_id - computed: false, optional: true, required: false
  private _segmentInstanceId?: string; 
  public get segmentInstanceId() {
    return this.getStringAttribute('segment_instance_id');
  }
  public set segmentInstanceId(value: string) {
    this._segmentInstanceId = value;
  }
  public resetSegmentInstanceId() {
    this._segmentInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInstanceIdInput() {
    return this._segmentInstanceId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_name: cdktf.stringToTerraform(this._addressName),
      associated_instance_id: cdktf.stringToTerraform(this._associatedInstanceId),
      associated_instance_type: cdktf.stringToTerraform(this._associatedInstanceType),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      in_use: cdktf.booleanToTerraform(this._inUse),
      include_reservation_data: cdktf.booleanToTerraform(this._includeReservationData),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      isp: cdktf.stringToTerraform(this._isp),
      lock_reason: cdktf.stringToTerraform(this._lockReason),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      segment_instance_id: cdktf.stringToTerraform(this._segmentInstanceId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_name: {
        value: cdktf.stringToHclTerraform(this._addressName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_instance_id: {
        value: cdktf.stringToHclTerraform(this._associatedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_instance_type: {
        value: cdktf.stringToHclTerraform(this._associatedInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      in_use: {
        value: cdktf.booleanToHclTerraform(this._inUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_reservation_data: {
        value: cdktf.booleanToHclTerraform(this._includeReservationData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      isp: {
        value: cdktf.stringToHclTerraform(this._isp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_reason: {
        value: cdktf.stringToHclTerraform(this._lockReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_instance_id: {
        value: cdktf.stringToHclTerraform(this._segmentInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
