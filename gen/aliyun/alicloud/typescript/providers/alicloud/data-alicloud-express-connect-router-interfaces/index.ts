// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudExpressConnectRouterInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#id DataAlicloudExpressConnectRouterInterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#ids DataAlicloudExpressConnectRouterInterfaces#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#include_reservation_data DataAlicloudExpressConnectRouterInterfaces#include_reservation_data}
  */
  readonly includeReservationData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#name_regex DataAlicloudExpressConnectRouterInterfaces#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#output_file DataAlicloudExpressConnectRouterInterfaces#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#page_number DataAlicloudExpressConnectRouterInterfaces#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#page_size DataAlicloudExpressConnectRouterInterfaces#page_size}
  */
  readonly pageSize?: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#filter DataAlicloudExpressConnectRouterInterfaces#filter}
  */
  readonly filter?: DataAlicloudExpressConnectRouterInterfacesFilter[] | cdktf.IResolvable;
}
export interface DataAlicloudExpressConnectRouterInterfacesInterfaces {
}

export function dataAlicloudExpressConnectRouterInterfacesInterfacesToTerraform(struct?: DataAlicloudExpressConnectRouterInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudExpressConnectRouterInterfacesInterfacesToHclTerraform(struct?: DataAlicloudExpressConnectRouterInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudExpressConnectRouterInterfacesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudExpressConnectRouterInterfacesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudExpressConnectRouterInterfacesInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // connected_time - computed: true, optional: false, required: false
  public get connectedTime() {
    return this.getStringAttribute('connected_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_border - computed: true, optional: false, required: false
  public get crossBorder() {
    return this.getBooleanAttribute('cross_border');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // has_reservation_data - computed: true, optional: false, required: false
  public get hasReservationData() {
    return this.getStringAttribute('has_reservation_data');
  }

  // hc_rate - computed: true, optional: false, required: false
  public get hcRate() {
    return this.getNumberAttribute('hc_rate');
  }

  // hc_threshold - computed: true, optional: false, required: false
  public get hcThreshold() {
    return this.getStringAttribute('hc_threshold');
  }

  // health_check_source_ip - computed: true, optional: false, required: false
  public get healthCheckSourceIp() {
    return this.getStringAttribute('health_check_source_ip');
  }

  // health_check_target_ip - computed: true, optional: false, required: false
  public get healthCheckTargetIp() {
    return this.getStringAttribute('health_check_target_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // opposite_access_point_id - computed: true, optional: false, required: false
  public get oppositeAccessPointId() {
    return this.getStringAttribute('opposite_access_point_id');
  }

  // opposite_bandwidth - computed: true, optional: false, required: false
  public get oppositeBandwidth() {
    return this.getNumberAttribute('opposite_bandwidth');
  }

  // opposite_interface_business_status - computed: true, optional: false, required: false
  public get oppositeInterfaceBusinessStatus() {
    return this.getStringAttribute('opposite_interface_business_status');
  }

  // opposite_interface_id - computed: true, optional: false, required: false
  public get oppositeInterfaceId() {
    return this.getStringAttribute('opposite_interface_id');
  }

  // opposite_interface_owner_id - computed: true, optional: false, required: false
  public get oppositeInterfaceOwnerId() {
    return this.getStringAttribute('opposite_interface_owner_id');
  }

  // opposite_interface_spec - computed: true, optional: false, required: false
  public get oppositeInterfaceSpec() {
    return this.getStringAttribute('opposite_interface_spec');
  }

  // opposite_interface_status - computed: true, optional: false, required: false
  public get oppositeInterfaceStatus() {
    return this.getStringAttribute('opposite_interface_status');
  }

  // opposite_region_id - computed: true, optional: false, required: false
  public get oppositeRegionId() {
    return this.getStringAttribute('opposite_region_id');
  }

  // opposite_router_id - computed: true, optional: false, required: false
  public get oppositeRouterId() {
    return this.getStringAttribute('opposite_router_id');
  }

  // opposite_router_type - computed: true, optional: false, required: false
  public get oppositeRouterType() {
    return this.getStringAttribute('opposite_router_type');
  }

  // opposite_vpc_instance_id - computed: true, optional: false, required: false
  public get oppositeVpcInstanceId() {
    return this.getStringAttribute('opposite_vpc_instance_id');
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

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // router_interface_id - computed: true, optional: false, required: false
  public get routerInterfaceId() {
    return this.getStringAttribute('router_interface_id');
  }

  // router_interface_name - computed: true, optional: false, required: false
  public get routerInterfaceName() {
    return this.getStringAttribute('router_interface_name');
  }

  // router_type - computed: true, optional: false, required: false
  public get routerType() {
    return this.getStringAttribute('router_type');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_instance_id - computed: true, optional: false, required: false
  public get vpcInstanceId() {
    return this.getStringAttribute('vpc_instance_id');
  }
}

export class DataAlicloudExpressConnectRouterInterfacesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudExpressConnectRouterInterfacesInterfacesOutputReference {
    return new DataAlicloudExpressConnectRouterInterfacesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudExpressConnectRouterInterfacesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#key DataAlicloudExpressConnectRouterInterfaces#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#value DataAlicloudExpressConnectRouterInterfaces#value}
  */
  readonly value?: string[];
}

export function dataAlicloudExpressConnectRouterInterfacesFilterToTerraform(struct?: DataAlicloudExpressConnectRouterInterfacesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataAlicloudExpressConnectRouterInterfacesFilterToHclTerraform(struct?: DataAlicloudExpressConnectRouterInterfacesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlicloudExpressConnectRouterInterfacesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudExpressConnectRouterInterfacesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudExpressConnectRouterInterfacesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAlicloudExpressConnectRouterInterfacesFilterList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudExpressConnectRouterInterfacesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudExpressConnectRouterInterfacesFilterOutputReference {
    return new DataAlicloudExpressConnectRouterInterfacesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces alicloud_express_connect_router_interfaces}
*/
export class DataAlicloudExpressConnectRouterInterfaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_express_connect_router_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudExpressConnectRouterInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudExpressConnectRouterInterfaces to import
  * @param importFromId The id of the existing DataAlicloudExpressConnectRouterInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudExpressConnectRouterInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_express_connect_router_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/express_connect_router_interfaces alicloud_express_connect_router_interfaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudExpressConnectRouterInterfacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudExpressConnectRouterInterfacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_express_connect_router_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._ids = config.ids;
    this._includeReservationData = config.includeReservationData;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_reservation_data - computed: false, optional: true, required: false
  private _includeReservationData?: string; 
  public get includeReservationData() {
    return this.getStringAttribute('include_reservation_data');
  }
  public set includeReservationData(value: string) {
    this._includeReservationData = value;
  }
  public resetIncludeReservationData() {
    this._includeReservationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReservationDataInput() {
    return this._includeReservationData;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataAlicloudExpressConnectRouterInterfacesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
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

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAlicloudExpressConnectRouterInterfacesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAlicloudExpressConnectRouterInterfacesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      include_reservation_data: cdktf.stringToTerraform(this._includeReservationData),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      filter: cdktf.listMapper(dataAlicloudExpressConnectRouterInterfacesFilterToTerraform, true)(this._filter.internalValue),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_reservation_data: {
        value: cdktf.stringToHclTerraform(this._includeReservationData),
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
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.listMapperHcl(dataAlicloudExpressConnectRouterInterfacesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAlicloudExpressConnectRouterInterfacesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
