// https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeStatuspageStatusHistoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by component ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history#component_id DataUptimeStatuspageStatusHistory#component_id}
  */
  readonly componentId?: number;
  /**
  * Filter entries from this date (ISO 8601 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history#date_from DataUptimeStatuspageStatusHistory#date_from}
  */
  readonly dateFrom?: string;
  /**
  * Filter entries until this date (ISO 8601 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history#date_to DataUptimeStatuspageStatusHistory#date_to}
  */
  readonly dateTo?: string;
  /**
  * Filter by status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history#status DataUptimeStatuspageStatusHistory#status}
  */
  readonly status?: string;
  /**
  * ID of the status page to retrieve status history for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history#statuspage_id DataUptimeStatuspageStatusHistory#statuspage_id}
  */
  readonly statuspageId: number;
}
export interface DataUptimeStatuspageStatusHistoryHistory {
}

export function dataUptimeStatuspageStatusHistoryHistoryToTerraform(struct?: DataUptimeStatuspageStatusHistoryHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeStatuspageStatusHistoryHistoryToHclTerraform(struct?: DataUptimeStatuspageStatusHistoryHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeStatuspageStatusHistoryHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUptimeStatuspageStatusHistoryHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeStatuspageStatusHistoryHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getNumberAttribute('component_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataUptimeStatuspageStatusHistoryHistoryList extends cdktf.ComplexList {

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
  public get(index: number): DataUptimeStatuspageStatusHistoryHistoryOutputReference {
    return new DataUptimeStatuspageStatusHistoryHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history uptime_statuspage_status_history}
*/
export class DataUptimeStatuspageStatusHistory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_status_history";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeStatuspageStatusHistory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeStatuspageStatusHistory to import
  * @param importFromId The id of the existing DataUptimeStatuspageStatusHistory that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeStatuspageStatusHistory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_status_history", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/data-sources/statuspage_status_history uptime_statuspage_status_history} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeStatuspageStatusHistoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataUptimeStatuspageStatusHistoryConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_status_history',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._componentId = config.componentId;
    this._dateFrom = config.dateFrom;
    this._dateTo = config.dateTo;
    this._status = config.status;
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // component_id - computed: false, optional: true, required: false
  private _componentId?: number; 
  public get componentId() {
    return this.getNumberAttribute('component_id');
  }
  public set componentId(value: number) {
    this._componentId = value;
  }
  public resetComponentId() {
    this._componentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId;
  }

  // date_from - computed: false, optional: true, required: false
  private _dateFrom?: string; 
  public get dateFrom() {
    return this.getStringAttribute('date_from');
  }
  public set dateFrom(value: string) {
    this._dateFrom = value;
  }
  public resetDateFrom() {
    this._dateFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFromInput() {
    return this._dateFrom;
  }

  // date_to - computed: false, optional: true, required: false
  private _dateTo?: string; 
  public get dateTo() {
    return this.getStringAttribute('date_to');
  }
  public set dateTo(value: string) {
    this._dateTo = value;
  }
  public resetDateTo() {
    this._dateTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateToInput() {
    return this._dateTo;
  }

  // history - computed: true, optional: false, required: false
  private _history = new DataUptimeStatuspageStatusHistoryHistoryList(this, "history", false);
  public get history() {
    return this._history;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      component_id: cdktf.numberToTerraform(this._componentId),
      date_from: cdktf.stringToTerraform(this._dateFrom),
      date_to: cdktf.stringToTerraform(this._dateTo),
      status: cdktf.stringToTerraform(this._status),
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      component_id: {
        value: cdktf.numberToHclTerraform(this._componentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      date_from: {
        value: cdktf.stringToHclTerraform(this._dateFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_to: {
        value: cdktf.stringToHclTerraform(this._dateTo),
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
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
