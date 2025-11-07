// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDeviceReplacementConfig extends cdktf.TerraformMetaArguments {
  /**
  * family query parameter. List of families[Routers, Switches and Hubs, AP]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#family DataDnacenterDeviceReplacement#family}
  */
  readonly family?: string[];
  /**
  * faultyDeviceName query parameter. Faulty Device Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#faulty_device_name DataDnacenterDeviceReplacement#faulty_device_name}
  */
  readonly faultyDeviceName?: string;
  /**
  * faultyDevicePlatform query parameter. Faulty Device Platform
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#faulty_device_platform DataDnacenterDeviceReplacement#faulty_device_platform}
  */
  readonly faultyDevicePlatform?: string;
  /**
  * faultyDeviceSerialNumber query parameter. Faulty Device Serial Number
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#faulty_device_serial_number DataDnacenterDeviceReplacement#faulty_device_serial_number}
  */
  readonly faultyDeviceSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#id DataDnacenterDeviceReplacement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#limit DataDnacenterDeviceReplacement#limit}
  */
  readonly limit?: number;
  /**
  * offset query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#offset DataDnacenterDeviceReplacement#offset}
  */
  readonly offset?: number;
  /**
  * replacementDevicePlatform query parameter. Replacement Device Platform
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#replacement_device_platform DataDnacenterDeviceReplacement#replacement_device_platform}
  */
  readonly replacementDevicePlatform?: string;
  /**
  * replacementDeviceSerialNumber query parameter. Replacement Device Serial Number
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#replacement_device_serial_number DataDnacenterDeviceReplacement#replacement_device_serial_number}
  */
  readonly replacementDeviceSerialNumber?: string;
  /**
  * replacementStatus query parameter. Device Replacement status [READY-FOR-REPLACEMENT, REPLACEMENT-IN-PROGRESS, REPLACEMENT-SCHEDULED, REPLACED, ERROR, NETWORK_READINESS_REQUESTED, NETWORK_READINESS_FAILED]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#replacement_status DataDnacenterDeviceReplacement#replacement_status}
  */
  readonly replacementStatus?: string[];
  /**
  * sortBy query parameter. SortBy this field. SortBy is mandatory when order is used.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#sort_by DataDnacenterDeviceReplacement#sort_by}
  */
  readonly sortBy?: string;
  /**
  * sortOrder query parameter. Order on displayName[ASC,DESC]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#sort_order DataDnacenterDeviceReplacement#sort_order}
  */
  readonly sortOrder?: string;
}
export interface DataDnacenterDeviceReplacementItems {
}

export function dataDnacenterDeviceReplacementItemsToTerraform(struct?: DataDnacenterDeviceReplacementItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceReplacementItemsToHclTerraform(struct?: DataDnacenterDeviceReplacementItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceReplacementItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceReplacementItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceReplacementItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // faulty_device_id - computed: true, optional: false, required: false
  public get faultyDeviceId() {
    return this.getStringAttribute('faulty_device_id');
  }

  // faulty_device_name - computed: true, optional: false, required: false
  public get faultyDeviceName() {
    return this.getStringAttribute('faulty_device_name');
  }

  // faulty_device_platform - computed: true, optional: false, required: false
  public get faultyDevicePlatform() {
    return this.getStringAttribute('faulty_device_platform');
  }

  // faulty_device_serial_number - computed: true, optional: false, required: false
  public get faultyDeviceSerialNumber() {
    return this.getStringAttribute('faulty_device_serial_number');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // neighbour_device_id - computed: true, optional: false, required: false
  public get neighbourDeviceId() {
    return this.getStringAttribute('neighbour_device_id');
  }

  // network_readiness_task_id - computed: true, optional: false, required: false
  public get networkReadinessTaskId() {
    return this.getStringAttribute('network_readiness_task_id');
  }

  // replacement_device_platform - computed: true, optional: false, required: false
  public get replacementDevicePlatform() {
    return this.getStringAttribute('replacement_device_platform');
  }

  // replacement_device_serial_number - computed: true, optional: false, required: false
  public get replacementDeviceSerialNumber() {
    return this.getStringAttribute('replacement_device_serial_number');
  }

  // replacement_status - computed: true, optional: false, required: false
  public get replacementStatus() {
    return this.getStringAttribute('replacement_status');
  }

  // replacement_time - computed: true, optional: false, required: false
  public get replacementTime() {
    return this.getNumberAttribute('replacement_time');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
}

export class DataDnacenterDeviceReplacementItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceReplacementItemsOutputReference {
    return new DataDnacenterDeviceReplacementItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement dnacenter_device_replacement}
*/
export class DataDnacenterDeviceReplacement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_device_replacement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDeviceReplacement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDeviceReplacement to import
  * @param importFromId The id of the existing DataDnacenterDeviceReplacement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDeviceReplacement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_device_replacement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_replacement dnacenter_device_replacement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDeviceReplacementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDeviceReplacementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_device_replacement',
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
    this._family = config.family;
    this._faultyDeviceName = config.faultyDeviceName;
    this._faultyDevicePlatform = config.faultyDevicePlatform;
    this._faultyDeviceSerialNumber = config.faultyDeviceSerialNumber;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._replacementDevicePlatform = config.replacementDevicePlatform;
    this._replacementDeviceSerialNumber = config.replacementDeviceSerialNumber;
    this._replacementStatus = config.replacementStatus;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // family - computed: false, optional: true, required: false
  private _family?: string[]; 
  public get family() {
    return this.getListAttribute('family');
  }
  public set family(value: string[]) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // faulty_device_name - computed: false, optional: true, required: false
  private _faultyDeviceName?: string; 
  public get faultyDeviceName() {
    return this.getStringAttribute('faulty_device_name');
  }
  public set faultyDeviceName(value: string) {
    this._faultyDeviceName = value;
  }
  public resetFaultyDeviceName() {
    this._faultyDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyDeviceNameInput() {
    return this._faultyDeviceName;
  }

  // faulty_device_platform - computed: false, optional: true, required: false
  private _faultyDevicePlatform?: string; 
  public get faultyDevicePlatform() {
    return this.getStringAttribute('faulty_device_platform');
  }
  public set faultyDevicePlatform(value: string) {
    this._faultyDevicePlatform = value;
  }
  public resetFaultyDevicePlatform() {
    this._faultyDevicePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyDevicePlatformInput() {
    return this._faultyDevicePlatform;
  }

  // faulty_device_serial_number - computed: false, optional: true, required: false
  private _faultyDeviceSerialNumber?: string; 
  public get faultyDeviceSerialNumber() {
    return this.getStringAttribute('faulty_device_serial_number');
  }
  public set faultyDeviceSerialNumber(value: string) {
    this._faultyDeviceSerialNumber = value;
  }
  public resetFaultyDeviceSerialNumber() {
    this._faultyDeviceSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyDeviceSerialNumberInput() {
    return this._faultyDeviceSerialNumber;
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
  private _items = new DataDnacenterDeviceReplacementItemsList(this, "items", false);
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

  // replacement_device_platform - computed: false, optional: true, required: false
  private _replacementDevicePlatform?: string; 
  public get replacementDevicePlatform() {
    return this.getStringAttribute('replacement_device_platform');
  }
  public set replacementDevicePlatform(value: string) {
    this._replacementDevicePlatform = value;
  }
  public resetReplacementDevicePlatform() {
    this._replacementDevicePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementDevicePlatformInput() {
    return this._replacementDevicePlatform;
  }

  // replacement_device_serial_number - computed: false, optional: true, required: false
  private _replacementDeviceSerialNumber?: string; 
  public get replacementDeviceSerialNumber() {
    return this.getStringAttribute('replacement_device_serial_number');
  }
  public set replacementDeviceSerialNumber(value: string) {
    this._replacementDeviceSerialNumber = value;
  }
  public resetReplacementDeviceSerialNumber() {
    this._replacementDeviceSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementDeviceSerialNumberInput() {
    return this._replacementDeviceSerialNumber;
  }

  // replacement_status - computed: false, optional: true, required: false
  private _replacementStatus?: string[]; 
  public get replacementStatus() {
    return this.getListAttribute('replacement_status');
  }
  public set replacementStatus(value: string[]) {
    this._replacementStatus = value;
  }
  public resetReplacementStatus() {
    this._replacementStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStatusInput() {
    return this._replacementStatus;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      family: cdktf.listMapper(cdktf.stringToTerraform, false)(this._family),
      faulty_device_name: cdktf.stringToTerraform(this._faultyDeviceName),
      faulty_device_platform: cdktf.stringToTerraform(this._faultyDevicePlatform),
      faulty_device_serial_number: cdktf.stringToTerraform(this._faultyDeviceSerialNumber),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      replacement_device_platform: cdktf.stringToTerraform(this._replacementDevicePlatform),
      replacement_device_serial_number: cdktf.stringToTerraform(this._replacementDeviceSerialNumber),
      replacement_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replacementStatus),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      family: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._family),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      faulty_device_name: {
        value: cdktf.stringToHclTerraform(this._faultyDeviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faulty_device_platform: {
        value: cdktf.stringToHclTerraform(this._faultyDevicePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faulty_device_serial_number: {
        value: cdktf.stringToHclTerraform(this._faultyDeviceSerialNumber),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replacement_device_platform: {
        value: cdktf.stringToHclTerraform(this._replacementDevicePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement_device_serial_number: {
        value: cdktf.stringToHclTerraform(this._replacementDeviceSerialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replacementStatus),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
