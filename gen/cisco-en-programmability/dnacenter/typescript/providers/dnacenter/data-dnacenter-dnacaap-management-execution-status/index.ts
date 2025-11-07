// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/dnacaap_management_execution_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDnacaapManagementExecutionStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * executionId path parameter. Execution Id of API
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/dnacaap_management_execution_status#execution_id DataDnacenterDnacaapManagementExecutionStatus#execution_id}
  */
  readonly executionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/dnacaap_management_execution_status#id DataDnacenterDnacaapManagementExecutionStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterDnacaapManagementExecutionStatusItem {
}

export function dataDnacenterDnacaapManagementExecutionStatusItemToTerraform(struct?: DataDnacenterDnacaapManagementExecutionStatusItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDnacaapManagementExecutionStatusItemToHclTerraform(struct?: DataDnacenterDnacaapManagementExecutionStatusItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDnacaapManagementExecutionStatusItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDnacaapManagementExecutionStatusItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDnacaapManagementExecutionStatusItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bapi_error - computed: true, optional: false, required: false
  public get bapiError() {
    return this.getStringAttribute('bapi_error');
  }

  // bapi_execution_id - computed: true, optional: false, required: false
  public get bapiExecutionId() {
    return this.getStringAttribute('bapi_execution_id');
  }

  // bapi_key - computed: true, optional: false, required: false
  public get bapiKey() {
    return this.getStringAttribute('bapi_key');
  }

  // bapi_name - computed: true, optional: false, required: false
  public get bapiName() {
    return this.getStringAttribute('bapi_name');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // end_time_epoch - computed: true, optional: false, required: false
  public get endTimeEpoch() {
    return this.getNumberAttribute('end_time_epoch');
  }

  // runtime_instance_id - computed: true, optional: false, required: false
  public get runtimeInstanceId() {
    return this.getStringAttribute('runtime_instance_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // start_time_epoch - computed: true, optional: false, required: false
  public get startTimeEpoch() {
    return this.getNumberAttribute('start_time_epoch');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_duration - computed: true, optional: false, required: false
  public get timeDuration() {
    return this.getNumberAttribute('time_duration');
  }
}

export class DataDnacenterDnacaapManagementExecutionStatusItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDnacaapManagementExecutionStatusItemOutputReference {
    return new DataDnacenterDnacaapManagementExecutionStatusItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/dnacaap_management_execution_status dnacenter_dnacaap_management_execution_status}
*/
export class DataDnacenterDnacaapManagementExecutionStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_dnacaap_management_execution_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDnacaapManagementExecutionStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDnacaapManagementExecutionStatus to import
  * @param importFromId The id of the existing DataDnacenterDnacaapManagementExecutionStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/dnacaap_management_execution_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDnacaapManagementExecutionStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_dnacaap_management_execution_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/dnacaap_management_execution_status dnacenter_dnacaap_management_execution_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDnacaapManagementExecutionStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDnacaapManagementExecutionStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_dnacaap_management_execution_status',
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
    this._executionId = config.executionId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execution_id - computed: false, optional: false, required: true
  private _executionId?: string; 
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }
  public set executionId(value: string) {
    this._executionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionIdInput() {
    return this._executionId;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterDnacaapManagementExecutionStatusItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_id: cdktf.stringToTerraform(this._executionId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_id: {
        value: cdktf.stringToHclTerraform(this._executionId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
