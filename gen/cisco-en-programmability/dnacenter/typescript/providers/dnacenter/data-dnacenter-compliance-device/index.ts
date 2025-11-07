// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterComplianceDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * complianceStatus query parameter. Compliance status can be have value among 'COMPLIANT','NON_COMPLIANT','IN_PROGRESS', 'ERROR'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device#compliance_status DataDnacenterComplianceDevice#compliance_status}
  */
  readonly complianceStatus?: string;
  /**
  * deviceUuid query parameter. Comma separated deviceUuids
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device#device_uuid DataDnacenterComplianceDevice#device_uuid}
  */
  readonly deviceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device#id DataDnacenterComplianceDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter. Number of records to be retrieved
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device#limit DataDnacenterComplianceDevice#limit}
  */
  readonly limit?: number;
  /**
  * offset query parameter. offset/starting row
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device#offset DataDnacenterComplianceDevice#offset}
  */
  readonly offset?: number;
}
export interface DataDnacenterComplianceDeviceItems {
}

export function dataDnacenterComplianceDeviceItemsToTerraform(struct?: DataDnacenterComplianceDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterComplianceDeviceItemsToHclTerraform(struct?: DataDnacenterComplianceDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterComplianceDeviceItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterComplianceDeviceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterComplianceDeviceItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }

  // device_uuid - computed: true, optional: false, required: false
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // schedule_time - computed: true, optional: false, required: false
  public get scheduleTime() {
    return this.getNumberAttribute('schedule_time');
  }
}

export class DataDnacenterComplianceDeviceItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterComplianceDeviceItemsOutputReference {
    return new DataDnacenterComplianceDeviceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device dnacenter_compliance_device}
*/
export class DataDnacenterComplianceDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_compliance_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterComplianceDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterComplianceDevice to import
  * @param importFromId The id of the existing DataDnacenterComplianceDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterComplianceDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_compliance_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device dnacenter_compliance_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterComplianceDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterComplianceDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_compliance_device',
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
    this._complianceStatus = config.complianceStatus;
    this._deviceUuid = config.deviceUuid;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus?: string; 
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }
  public set complianceStatus(value: string) {
    this._complianceStatus = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus;
  }

  // device_uuid - computed: false, optional: true, required: false
  private _deviceUuid?: string; 
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }
  public set deviceUuid(value: string) {
    this._deviceUuid = value;
  }
  public resetDeviceUuid() {
    this._deviceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidInput() {
    return this._deviceUuid;
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
  private _items = new DataDnacenterComplianceDeviceItemsList(this, "items", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_status: cdktf.stringToTerraform(this._complianceStatus),
      device_uuid: cdktf.stringToTerraform(this._deviceUuid),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_status: {
        value: cdktf.stringToHclTerraform(this._complianceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_uuid: {
        value: cdktf.stringToHclTerraform(this._deviceUuid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
