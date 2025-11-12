// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterApplicationsHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * applicationHealth query parameter. Application health category (POOR, FAIR, or GOOD.  Optionally use with siteId only)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#application_health DataDnacenterApplicationsHealth#application_health}
  */
  readonly applicationHealth?: string;
  /**
  * applicationName query parameter. The name of the application to get information on
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#application_name DataDnacenterApplicationsHealth#application_name}
  */
  readonly applicationName?: string;
  /**
  * deviceId query parameter. Assurance device UUID value (Cannot be submitted together with siteId and clientMac)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#device_id DataDnacenterApplicationsHealth#device_id}
  */
  readonly deviceId?: string;
  /**
  * endTime query parameter. Ending epoch time in milliseconds of time window
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#end_time DataDnacenterApplicationsHealth#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#id DataDnacenterApplicationsHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter. The max number of application entries in returned data [1, 1000] (optionally used with siteId only)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#limit DataDnacenterApplicationsHealth#limit}
  */
  readonly limit?: number;
  /**
  * macAddress query parameter. Client device's MAC address (Cannot be submitted together with siteId and deviceId)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#mac_address DataDnacenterApplicationsHealth#mac_address}
  */
  readonly macAddress?: string;
  /**
  * offset query parameter. The offset of the first application in the returned data (optionally used with siteId only)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#offset DataDnacenterApplicationsHealth#offset}
  */
  readonly offset?: number;
  /**
  * siteId query parameter. Assurance site UUID value (Cannot be submitted together with deviceId and clientMac)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#site_id DataDnacenterApplicationsHealth#site_id}
  */
  readonly siteId?: string;
  /**
  * startTime query parameter. Starting epoch time in milliseconds of time window
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#start_time DataDnacenterApplicationsHealth#start_time}
  */
  readonly startTime?: number;
}
export interface DataDnacenterApplicationsHealthItems {
}

export function dataDnacenterApplicationsHealthItemsToTerraform(struct?: DataDnacenterApplicationsHealthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterApplicationsHealthItemsToHclTerraform(struct?: DataDnacenterApplicationsHealthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterApplicationsHealthItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterApplicationsHealthItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterApplicationsHealthItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // application_server_latency - computed: true, optional: false, required: false
  public get applicationServerLatency() {
    return this.getStringAttribute('application_server_latency');
  }

  // average_throughput - computed: true, optional: false, required: false
  public get averageThroughput() {
    return this.getNumberAttribute('average_throughput');
  }

  // business_relevance - computed: true, optional: false, required: false
  public get businessRelevance() {
    return this.getStringAttribute('business_relevance');
  }

  // client_ip - computed: true, optional: false, required: false
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }

  // client_mac_address - computed: true, optional: false, required: false
  public get clientMacAddress() {
    return this.getStringAttribute('client_mac_address');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_network_latency - computed: true, optional: false, required: false
  public get clientNetworkLatency() {
    return this.getStringAttribute('client_network_latency');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // exporter_family - computed: true, optional: false, required: false
  public get exporterFamily() {
    return this.getStringAttribute('exporter_family');
  }

  // exporter_ip_address - computed: true, optional: false, required: false
  public get exporterIpAddress() {
    return this.getStringAttribute('exporter_ip_address');
  }

  // exporter_name - computed: true, optional: false, required: false
  public get exporterName() {
    return this.getStringAttribute('exporter_name');
  }

  // exporter_uui_d - computed: true, optional: false, required: false
  public get exporterUuiD() {
    return this.getStringAttribute('exporter_uui_d');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getNumberAttribute('health');
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getStringAttribute('issue_id');
  }

  // issue_name - computed: true, optional: false, required: false
  public get issueName() {
    return this.getStringAttribute('issue_name');
  }

  // jitter - computed: true, optional: false, required: false
  public get jitter() {
    return this.getStringAttribute('jitter');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_latency - computed: true, optional: false, required: false
  public get networkLatency() {
    return this.getStringAttribute('network_latency');
  }

  // occurrences - computed: true, optional: false, required: false
  public get occurrences() {
    return this.getNumberAttribute('occurrences');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // packet_loss_percent - computed: true, optional: false, required: false
  public get packetLossPercent() {
    return this.getStringAttribute('packet_loss_percent');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // root_cause - computed: true, optional: false, required: false
  public get rootCause() {
    return this.getStringAttribute('root_cause');
  }

  // server_network_latency - computed: true, optional: false, required: false
  public get serverNetworkLatency() {
    return this.getStringAttribute('server_network_latency');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // traffic_class - computed: true, optional: false, required: false
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }

  // usage_bytes - computed: true, optional: false, required: false
  public get usageBytes() {
    return this.getNumberAttribute('usage_bytes');
  }
}

export class DataDnacenterApplicationsHealthItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterApplicationsHealthItemsOutputReference {
    return new DataDnacenterApplicationsHealthItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health dnacenter_applications_health}
*/
export class DataDnacenterApplicationsHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_applications_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterApplicationsHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterApplicationsHealth to import
  * @param importFromId The id of the existing DataDnacenterApplicationsHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterApplicationsHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_applications_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/applications_health dnacenter_applications_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterApplicationsHealthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterApplicationsHealthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_applications_health',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationHealth = config.applicationHealth;
    this._applicationName = config.applicationName;
    this._deviceId = config.deviceId;
    this._endTime = config.endTime;
    this._id = config.id;
    this._limit = config.limit;
    this._macAddress = config.macAddress;
    this._offset = config.offset;
    this._siteId = config.siteId;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_health - computed: false, optional: true, required: false
  private _applicationHealth?: string; 
  public get applicationHealth() {
    return this.getStringAttribute('application_health');
  }
  public set applicationHealth(value: string) {
    this._applicationHealth = value;
  }
  public resetApplicationHealth() {
    this._applicationHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationHealthInput() {
    return this._applicationHealth;
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterApplicationsHealthItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_health: cdktf.stringToTerraform(this._applicationHealth),
      application_name: cdktf.stringToTerraform(this._applicationName),
      device_id: cdktf.stringToTerraform(this._deviceId),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      offset: cdktf.numberToTerraform(this._offset),
      site_id: cdktf.stringToTerraform(this._siteId),
      start_time: cdktf.numberToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_health: {
        value: cdktf.stringToHclTerraform(this._applicationHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
