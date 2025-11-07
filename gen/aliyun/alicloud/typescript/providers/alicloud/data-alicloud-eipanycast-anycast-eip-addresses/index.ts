// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEipanycastAnycastEipAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#anycast_eip_address_name DataAlicloudEipanycastAnycastEipAddresses#anycast_eip_address_name}
  */
  readonly anycastEipAddressName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#bind_instance_ids DataAlicloudEipanycastAnycastEipAddresses#bind_instance_ids}
  */
  readonly bindInstanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#business_status DataAlicloudEipanycastAnycastEipAddresses#business_status}
  */
  readonly businessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#id DataAlicloudEipanycastAnycastEipAddresses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#ids DataAlicloudEipanycastAnycastEipAddresses#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#internet_charge_type DataAlicloudEipanycastAnycastEipAddresses#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#ip_address DataAlicloudEipanycastAnycastEipAddresses#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#name_regex DataAlicloudEipanycastAnycastEipAddresses#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#output_file DataAlicloudEipanycastAnycastEipAddresses#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#payment_type DataAlicloudEipanycastAnycastEipAddresses#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#service_location DataAlicloudEipanycastAnycastEipAddresses#service_location}
  */
  readonly serviceLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#status DataAlicloudEipanycastAnycastEipAddresses#status}
  */
  readonly status?: string;
}
export interface DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStruct {
}

export function dataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStructToTerraform(struct?: DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStructToHclTerraform(struct?: DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_instance_id - computed: true, optional: false, required: false
  public get bindInstanceId() {
    return this.getStringAttribute('bind_instance_id');
  }

  // bind_instance_region_id - computed: true, optional: false, required: false
  public get bindInstanceRegionId() {
    return this.getStringAttribute('bind_instance_region_id');
  }

  // bind_instance_type - computed: true, optional: false, required: false
  public get bindInstanceType() {
    return this.getStringAttribute('bind_instance_type');
  }

  // bind_time - computed: true, optional: false, required: false
  public get bindTime() {
    return this.getStringAttribute('bind_time');
  }
}

export class DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStructOutputReference {
    return new DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudEipanycastAnycastEipAddressesAddresses {
}

export function dataAlicloudEipanycastAnycastEipAddressesAddressesToTerraform(struct?: DataAlicloudEipanycastAnycastEipAddressesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEipanycastAnycastEipAddressesAddressesToHclTerraform(struct?: DataAlicloudEipanycastAnycastEipAddressesAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEipanycastAnycastEipAddressesAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEipanycastAnycastEipAddressesAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEipanycastAnycastEipAddressesAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ali_uid - computed: true, optional: false, required: false
  public get aliUid() {
    return this.getNumberAttribute('ali_uid');
  }

  // anycast_eip_address_name - computed: true, optional: false, required: false
  public get anycastEipAddressName() {
    return this.getStringAttribute('anycast_eip_address_name');
  }

  // anycast_eip_bind_info_list - computed: true, optional: false, required: false
  private _anycastEipBindInfoList = new DataAlicloudEipanycastAnycastEipAddressesAddressesAnycastEipBindInfoListStructList(this, "anycast_eip_bind_info_list", false);
  public get anycastEipBindInfoList() {
    return this._anycastEipBindInfoList;
  }

  // anycast_id - computed: true, optional: false, required: false
  public get anycastId() {
    return this.getStringAttribute('anycast_id');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // bid - computed: true, optional: false, required: false
  public get bid() {
    return this.getStringAttribute('bid');
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // service_location - computed: true, optional: false, required: false
  public get serviceLocation() {
    return this.getStringAttribute('service_location');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudEipanycastAnycastEipAddressesAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEipanycastAnycastEipAddressesAddressesOutputReference {
    return new DataAlicloudEipanycastAnycastEipAddressesAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses alicloud_eipanycast_anycast_eip_addresses}
*/
export class DataAlicloudEipanycastAnycastEipAddresses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eipanycast_anycast_eip_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEipanycastAnycastEipAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEipanycastAnycastEipAddresses to import
  * @param importFromId The id of the existing DataAlicloudEipanycastAnycastEipAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEipanycastAnycastEipAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eipanycast_anycast_eip_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/eipanycast_anycast_eip_addresses alicloud_eipanycast_anycast_eip_addresses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEipanycastAnycastEipAddressesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEipanycastAnycastEipAddressesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eipanycast_anycast_eip_addresses',
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
    this._anycastEipAddressName = config.anycastEipAddressName;
    this._bindInstanceIds = config.bindInstanceIds;
    this._businessStatus = config.businessStatus;
    this._id = config.id;
    this._ids = config.ids;
    this._internetChargeType = config.internetChargeType;
    this._ipAddress = config.ipAddress;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._paymentType = config.paymentType;
    this._serviceLocation = config.serviceLocation;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataAlicloudEipanycastAnycastEipAddressesAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // anycast_eip_address_name - computed: false, optional: true, required: false
  private _anycastEipAddressName?: string; 
  public get anycastEipAddressName() {
    return this.getStringAttribute('anycast_eip_address_name');
  }
  public set anycastEipAddressName(value: string) {
    this._anycastEipAddressName = value;
  }
  public resetAnycastEipAddressName() {
    this._anycastEipAddressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastEipAddressNameInput() {
    return this._anycastEipAddressName;
  }

  // bind_instance_ids - computed: false, optional: true, required: false
  private _bindInstanceIds?: string[]; 
  public get bindInstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('bind_instance_ids'));
  }
  public set bindInstanceIds(value: string[]) {
    this._bindInstanceIds = value;
  }
  public resetBindInstanceIds() {
    this._bindInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInstanceIdsInput() {
    return this._bindInstanceIds;
  }

  // business_status - computed: false, optional: true, required: false
  private _businessStatus?: string; 
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }
  public set businessStatus(value: string) {
    this._businessStatus = value;
  }
  public resetBusinessStatus() {
    this._businessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessStatusInput() {
    return this._businessStatus;
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

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
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

  // service_location - computed: false, optional: true, required: false
  private _serviceLocation?: string; 
  public get serviceLocation() {
    return this.getStringAttribute('service_location');
  }
  public set serviceLocation(value: string) {
    this._serviceLocation = value;
  }
  public resetServiceLocation() {
    this._serviceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLocationInput() {
    return this._serviceLocation;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anycast_eip_address_name: cdktf.stringToTerraform(this._anycastEipAddressName),
      bind_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bindInstanceIds),
      business_status: cdktf.stringToTerraform(this._businessStatus),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      service_location: cdktf.stringToTerraform(this._serviceLocation),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycast_eip_address_name: {
        value: cdktf.stringToHclTerraform(this._anycastEipAddressName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bindInstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      business_status: {
        value: cdktf.stringToHclTerraform(this._businessStatus),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
      service_location: {
        value: cdktf.stringToHclTerraform(this._serviceLocation),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
