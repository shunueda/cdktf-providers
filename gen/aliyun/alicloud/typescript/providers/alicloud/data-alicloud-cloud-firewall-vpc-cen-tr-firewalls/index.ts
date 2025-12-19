// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudFirewallVpcCenTrFirewallsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#cen_id DataAlicloudCloudFirewallVpcCenTrFirewalls#cen_id}
  */
  readonly cenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#current_page DataAlicloudCloudFirewallVpcCenTrFirewalls#current_page}
  */
  readonly currentPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#firewall_id DataAlicloudCloudFirewallVpcCenTrFirewalls#firewall_id}
  */
  readonly firewallId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#firewall_name DataAlicloudCloudFirewallVpcCenTrFirewalls#firewall_name}
  */
  readonly firewallName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#firewall_switch_status DataAlicloudCloudFirewallVpcCenTrFirewalls#firewall_switch_status}
  */
  readonly firewallSwitchStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#id DataAlicloudCloudFirewallVpcCenTrFirewalls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#ids DataAlicloudCloudFirewallVpcCenTrFirewalls#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#output_file DataAlicloudCloudFirewallVpcCenTrFirewalls#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#page_number DataAlicloudCloudFirewallVpcCenTrFirewalls#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#page_size DataAlicloudCloudFirewallVpcCenTrFirewalls#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#region_no DataAlicloudCloudFirewallVpcCenTrFirewalls#region_no}
  */
  readonly regionNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#route_mode DataAlicloudCloudFirewallVpcCenTrFirewalls#route_mode}
  */
  readonly routeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#transit_router_id DataAlicloudCloudFirewallVpcCenTrFirewalls#transit_router_id}
  */
  readonly transitRouterId?: string;
}
export interface DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfig {
}

export function dataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfigToTerraform(struct?: DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfigToHclTerraform(struct?: DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_rules - computed: true, optional: false, required: false
  public get basicRules() {
    return this.getNumberAttribute('basic_rules');
  }

  // enable_all_patch - computed: true, optional: false, required: false
  public get enableAllPatch() {
    return this.getNumberAttribute('enable_all_patch');
  }

  // run_mode - computed: true, optional: false, required: false
  public get runMode() {
    return this.getNumberAttribute('run_mode');
  }
}

export class DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfigOutputReference {
    return new DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcCenTrFirewallsFirewalls {
}

export function dataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsToTerraform(struct?: DataAlicloudCloudFirewallVpcCenTrFirewallsFirewalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsToHclTerraform(struct?: DataAlicloudCloudFirewallVpcCenTrFirewallsFirewalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcCenTrFirewallsFirewalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcCenTrFirewallsFirewalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cen_id - computed: true, optional: false, required: false
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }

  // cen_name - computed: true, optional: false, required: false
  public get cenName() {
    return this.getStringAttribute('cen_name');
  }

  // firewall_id - computed: true, optional: false, required: false
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }

  // firewall_name - computed: true, optional: false, required: false
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }

  // firewall_switch_status - computed: true, optional: false, required: false
  public get firewallSwitchStatus() {
    return this.getStringAttribute('firewall_switch_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips_config - computed: true, optional: false, required: false
  private _ipsConfig = new DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsIpsConfigList(this, "ips_config", false);
  public get ipsConfig() {
    return this._ipsConfig;
  }

  // precheck_status - computed: true, optional: false, required: false
  public get precheckStatus() {
    return this.getStringAttribute('precheck_status');
  }

  // region_no - computed: true, optional: false, required: false
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }

  // region_status - computed: true, optional: false, required: false
  public get regionStatus() {
    return this.getStringAttribute('region_status');
  }

  // result_code - computed: true, optional: false, required: false
  public get resultCode() {
    return this.getStringAttribute('result_code');
  }

  // route_mode - computed: true, optional: false, required: false
  public get routeMode() {
    return this.getStringAttribute('route_mode');
  }

  // transit_router_id - computed: true, optional: false, required: false
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
}

export class DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsOutputReference {
    return new DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls alicloud_cloud_firewall_vpc_cen_tr_firewalls}
*/
export class DataAlicloudCloudFirewallVpcCenTrFirewalls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_cen_tr_firewalls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudFirewallVpcCenTrFirewalls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudFirewallVpcCenTrFirewalls to import
  * @param importFromId The id of the existing DataAlicloudCloudFirewallVpcCenTrFirewalls that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudFirewallVpcCenTrFirewalls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_cen_tr_firewalls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/cloud_firewall_vpc_cen_tr_firewalls alicloud_cloud_firewall_vpc_cen_tr_firewalls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudFirewallVpcCenTrFirewallsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudFirewallVpcCenTrFirewallsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_cen_tr_firewalls',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenId = config.cenId;
    this._currentPage = config.currentPage;
    this._firewallId = config.firewallId;
    this._firewallName = config.firewallName;
    this._firewallSwitchStatus = config.firewallSwitchStatus;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._regionNo = config.regionNo;
    this._routeMode = config.routeMode;
    this._transitRouterId = config.transitRouterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: true, required: false
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  public resetCenId() {
    this._cenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // current_page - computed: false, optional: true, required: false
  private _currentPage?: number; 
  public get currentPage() {
    return this.getNumberAttribute('current_page');
  }
  public set currentPage(value: number) {
    this._currentPage = value;
  }
  public resetCurrentPage() {
    this._currentPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPageInput() {
    return this._currentPage;
  }

  // firewall_id - computed: false, optional: true, required: false
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  public resetFirewallId() {
    this._firewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // firewall_name - computed: false, optional: true, required: false
  private _firewallName?: string; 
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  public resetFirewallName() {
    this._firewallName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName;
  }

  // firewall_switch_status - computed: false, optional: true, required: false
  private _firewallSwitchStatus?: string; 
  public get firewallSwitchStatus() {
    return this.getStringAttribute('firewall_switch_status');
  }
  public set firewallSwitchStatus(value: string) {
    this._firewallSwitchStatus = value;
  }
  public resetFirewallSwitchStatus() {
    this._firewallSwitchStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSwitchStatusInput() {
    return this._firewallSwitchStatus;
  }

  // firewalls - computed: true, optional: false, required: false
  private _firewalls = new DataAlicloudCloudFirewallVpcCenTrFirewallsFirewallsList(this, "firewalls", false);
  public get firewalls() {
    return this._firewalls;
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

  // region_no - computed: false, optional: true, required: false
  private _regionNo?: string; 
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }
  public set regionNo(value: string) {
    this._regionNo = value;
  }
  public resetRegionNo() {
    this._regionNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNoInput() {
    return this._regionNo;
  }

  // route_mode - computed: false, optional: true, required: false
  private _routeMode?: string; 
  public get routeMode() {
    return this.getStringAttribute('route_mode');
  }
  public set routeMode(value: string) {
    this._routeMode = value;
  }
  public resetRouteMode() {
    this._routeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeModeInput() {
    return this._routeMode;
  }

  // transit_router_id - computed: false, optional: true, required: false
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  public resetTransitRouterId() {
    this._transitRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_id: cdktf.stringToTerraform(this._cenId),
      current_page: cdktf.numberToTerraform(this._currentPage),
      firewall_id: cdktf.stringToTerraform(this._firewallId),
      firewall_name: cdktf.stringToTerraform(this._firewallName),
      firewall_switch_status: cdktf.stringToTerraform(this._firewallSwitchStatus),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      region_no: cdktf.stringToTerraform(this._regionNo),
      route_mode: cdktf.stringToTerraform(this._routeMode),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_page: {
        value: cdktf.numberToHclTerraform(this._currentPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firewall_id: {
        value: cdktf.stringToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_name: {
        value: cdktf.stringToHclTerraform(this._firewallName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_switch_status: {
        value: cdktf.stringToHclTerraform(this._firewallSwitchStatus),
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
      region_no: {
        value: cdktf.stringToHclTerraform(this._regionNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_mode: {
        value: cdktf.stringToHclTerraform(this._routeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
