// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDiscoverySummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * cliStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#cli_status DataDnacenterDiscoverySummary#cli_status}
  */
  readonly cliStatus?: string[];
  /**
  * httpStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#http_status DataDnacenterDiscoverySummary#http_status}
  */
  readonly httpStatus?: string[];
  /**
  * id path parameter. Discovery ID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#id DataDnacenterDiscoverySummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * ipAddress query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#ip_address DataDnacenterDiscoverySummary#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * netconfStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#netconf_status DataDnacenterDiscoverySummary#netconf_status}
  */
  readonly netconfStatus?: string[];
  /**
  * pingStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#ping_status DataDnacenterDiscoverySummary#ping_status}
  */
  readonly pingStatus?: string[];
  /**
  * snmpStatus query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#snmp_status DataDnacenterDiscoverySummary#snmp_status}
  */
  readonly snmpStatus?: string[];
  /**
  * sortBy query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#sort_by DataDnacenterDiscoverySummary#sort_by}
  */
  readonly sortBy?: string;
  /**
  * sortOrder query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#sort_order DataDnacenterDiscoverySummary#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * taskId query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#task_id DataDnacenterDiscoverySummary#task_id}
  */
  readonly taskId?: string;
}
export interface DataDnacenterDiscoverySummaryItem {
}

export function dataDnacenterDiscoverySummaryItemToTerraform(struct?: DataDnacenterDiscoverySummaryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDiscoverySummaryItemToHclTerraform(struct?: DataDnacenterDiscoverySummaryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDiscoverySummaryItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDiscoverySummaryItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDiscoverySummaryItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getNumberAttribute('response');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataDnacenterDiscoverySummaryItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDiscoverySummaryItemOutputReference {
    return new DataDnacenterDiscoverySummaryItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary dnacenter_discovery_summary}
*/
export class DataDnacenterDiscoverySummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_discovery_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDiscoverySummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDiscoverySummary to import
  * @param importFromId The id of the existing DataDnacenterDiscoverySummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDiscoverySummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_discovery_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/discovery_summary dnacenter_discovery_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDiscoverySummaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDiscoverySummaryConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_discovery_summary',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cliStatus = config.cliStatus;
    this._httpStatus = config.httpStatus;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._netconfStatus = config.netconfStatus;
    this._pingStatus = config.pingStatus;
    this._snmpStatus = config.snmpStatus;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._taskId = config.taskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_status - computed: false, optional: true, required: false
  private _cliStatus?: string[]; 
  public get cliStatus() {
    return this.getListAttribute('cli_status');
  }
  public set cliStatus(value: string[]) {
    this._cliStatus = value;
  }
  public resetCliStatus() {
    this._cliStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliStatusInput() {
    return this._cliStatus;
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: string[]; 
  public get httpStatus() {
    return this.getListAttribute('http_status');
  }
  public set httpStatus(value: string[]) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterDiscoverySummaryItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // netconf_status - computed: false, optional: true, required: false
  private _netconfStatus?: string[]; 
  public get netconfStatus() {
    return this.getListAttribute('netconf_status');
  }
  public set netconfStatus(value: string[]) {
    this._netconfStatus = value;
  }
  public resetNetconfStatus() {
    this._netconfStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netconfStatusInput() {
    return this._netconfStatus;
  }

  // ping_status - computed: false, optional: true, required: false
  private _pingStatus?: string[]; 
  public get pingStatus() {
    return this.getListAttribute('ping_status');
  }
  public set pingStatus(value: string[]) {
    this._pingStatus = value;
  }
  public resetPingStatus() {
    this._pingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingStatusInput() {
    return this._pingStatus;
  }

  // snmp_status - computed: false, optional: true, required: false
  private _snmpStatus?: string[]; 
  public get snmpStatus() {
    return this.getListAttribute('snmp_status');
  }
  public set snmpStatus(value: string[]) {
    this._snmpStatus = value;
  }
  public resetSnmpStatus() {
    this._snmpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpStatusInput() {
    return this._snmpStatus;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // task_id - computed: false, optional: true, required: false
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  public resetTaskId() {
    this._taskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cliStatus),
      http_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpStatus),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddress),
      netconf_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._netconfStatus),
      ping_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pingStatus),
      snmp_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snmpStatus),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      task_id: cdktf.stringToTerraform(this._taskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cliStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      http_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      netconf_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._netconfStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ping_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pingStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snmp_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snmpStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
