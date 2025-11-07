// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceId query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#device_id DataDnacenterNetworkDeviceModule#device_id}
  */
  readonly deviceId?: string;
  /**
  * id path parameter. Module id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#id DataDnacenterNetworkDeviceModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#limit DataDnacenterNetworkDeviceModule#limit}
  */
  readonly limit?: number;
  /**
  * nameList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#name_list DataDnacenterNetworkDeviceModule#name_list}
  */
  readonly nameList?: string[];
  /**
  * offset query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#offset DataDnacenterNetworkDeviceModule#offset}
  */
  readonly offset?: number;
  /**
  * operationalStateCodeList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#operational_state_code_list DataDnacenterNetworkDeviceModule#operational_state_code_list}
  */
  readonly operationalStateCodeList?: string[];
  /**
  * partNumberList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#part_number_list DataDnacenterNetworkDeviceModule#part_number_list}
  */
  readonly partNumberList?: string[];
  /**
  * vendorEquipmentTypeList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#vendor_equipment_type_list DataDnacenterNetworkDeviceModule#vendor_equipment_type_list}
  */
  readonly vendorEquipmentTypeList?: string[];
}
export interface DataDnacenterNetworkDeviceModuleItem {
}

export function dataDnacenterNetworkDeviceModuleItemToTerraform(struct?: DataDnacenterNetworkDeviceModuleItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceModuleItemToHclTerraform(struct?: DataDnacenterNetworkDeviceModuleItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceModuleItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceModuleItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceModuleItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assembly_number - computed: true, optional: false, required: false
  public get assemblyNumber() {
    return this.getStringAttribute('assembly_number');
  }

  // assembly_revision - computed: true, optional: false, required: false
  public get assemblyRevision() {
    return this.getStringAttribute('assembly_revision');
  }

  // attribute_info - computed: true, optional: false, required: false
  public get attributeInfo() {
    return this.getStringAttribute('attribute_info');
  }

  // containment_entity - computed: true, optional: false, required: false
  public get containmentEntity() {
    return this.getStringAttribute('containment_entity');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entity_physical_index - computed: true, optional: false, required: false
  public get entityPhysicalIndex() {
    return this.getStringAttribute('entity_physical_index');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_field_replaceable - computed: true, optional: false, required: false
  public get isFieldReplaceable() {
    return this.getStringAttribute('is_field_replaceable');
  }

  // is_reporting_alarms_allowed - computed: true, optional: false, required: false
  public get isReportingAlarmsAllowed() {
    return this.getStringAttribute('is_reporting_alarms_allowed');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // module_index - computed: true, optional: false, required: false
  public get moduleIndex() {
    return this.getNumberAttribute('module_index');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_state_code - computed: true, optional: false, required: false
  public get operationalStateCode() {
    return this.getStringAttribute('operational_state_code');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // vendor_equipment_type - computed: true, optional: false, required: false
  public get vendorEquipmentType() {
    return this.getStringAttribute('vendor_equipment_type');
  }
}

export class DataDnacenterNetworkDeviceModuleItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceModuleItemOutputReference {
    return new DataDnacenterNetworkDeviceModuleItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterNetworkDeviceModuleItems {
}

export function dataDnacenterNetworkDeviceModuleItemsToTerraform(struct?: DataDnacenterNetworkDeviceModuleItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceModuleItemsToHclTerraform(struct?: DataDnacenterNetworkDeviceModuleItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceModuleItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceModuleItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceModuleItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assembly_number - computed: true, optional: false, required: false
  public get assemblyNumber() {
    return this.getStringAttribute('assembly_number');
  }

  // assembly_revision - computed: true, optional: false, required: false
  public get assemblyRevision() {
    return this.getStringAttribute('assembly_revision');
  }

  // attribute_info - computed: true, optional: false, required: false
  public get attributeInfo() {
    return this.getStringAttribute('attribute_info');
  }

  // containment_entity - computed: true, optional: false, required: false
  public get containmentEntity() {
    return this.getStringAttribute('containment_entity');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entity_physical_index - computed: true, optional: false, required: false
  public get entityPhysicalIndex() {
    return this.getStringAttribute('entity_physical_index');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_field_replaceable - computed: true, optional: false, required: false
  public get isFieldReplaceable() {
    return this.getStringAttribute('is_field_replaceable');
  }

  // is_reporting_alarms_allowed - computed: true, optional: false, required: false
  public get isReportingAlarmsAllowed() {
    return this.getStringAttribute('is_reporting_alarms_allowed');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // module_index - computed: true, optional: false, required: false
  public get moduleIndex() {
    return this.getNumberAttribute('module_index');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_state_code - computed: true, optional: false, required: false
  public get operationalStateCode() {
    return this.getStringAttribute('operational_state_code');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // vendor_equipment_type - computed: true, optional: false, required: false
  public get vendorEquipmentType() {
    return this.getStringAttribute('vendor_equipment_type');
  }
}

export class DataDnacenterNetworkDeviceModuleItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceModuleItemsOutputReference {
    return new DataDnacenterNetworkDeviceModuleItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module dnacenter_network_device_module}
*/
export class DataDnacenterNetworkDeviceModule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceModule to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module dnacenter_network_device_module} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceModuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceModuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_module',
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
    this._deviceId = config.deviceId;
    this._id = config.id;
    this._limit = config.limit;
    this._nameList = config.nameList;
    this._offset = config.offset;
    this._operationalStateCodeList = config.operationalStateCodeList;
    this._partNumberList = config.partNumberList;
    this._vendorEquipmentTypeList = config.vendorEquipmentTypeList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: true, required: false
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
  private _item = new DataDnacenterNetworkDeviceModuleItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterNetworkDeviceModuleItemsList(this, "items", false);
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

  // name_list - computed: false, optional: true, required: false
  private _nameList?: string[]; 
  public get nameList() {
    return this.getListAttribute('name_list');
  }
  public set nameList(value: string[]) {
    this._nameList = value;
  }
  public resetNameList() {
    this._nameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameListInput() {
    return this._nameList;
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

  // operational_state_code_list - computed: false, optional: true, required: false
  private _operationalStateCodeList?: string[]; 
  public get operationalStateCodeList() {
    return this.getListAttribute('operational_state_code_list');
  }
  public set operationalStateCodeList(value: string[]) {
    this._operationalStateCodeList = value;
  }
  public resetOperationalStateCodeList() {
    this._operationalStateCodeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalStateCodeListInput() {
    return this._operationalStateCodeList;
  }

  // part_number_list - computed: false, optional: true, required: false
  private _partNumberList?: string[]; 
  public get partNumberList() {
    return this.getListAttribute('part_number_list');
  }
  public set partNumberList(value: string[]) {
    this._partNumberList = value;
  }
  public resetPartNumberList() {
    this._partNumberList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partNumberListInput() {
    return this._partNumberList;
  }

  // vendor_equipment_type_list - computed: false, optional: true, required: false
  private _vendorEquipmentTypeList?: string[]; 
  public get vendorEquipmentTypeList() {
    return this.getListAttribute('vendor_equipment_type_list');
  }
  public set vendorEquipmentTypeList(value: string[]) {
    this._vendorEquipmentTypeList = value;
  }
  public resetVendorEquipmentTypeList() {
    this._vendorEquipmentTypeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorEquipmentTypeListInput() {
    return this._vendorEquipmentTypeList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameList),
      offset: cdktf.numberToTerraform(this._offset),
      operational_state_code_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operationalStateCodeList),
      part_number_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partNumberList),
      vendor_equipment_type_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vendorEquipmentTypeList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
      name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operational_state_code_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operationalStateCodeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      part_number_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._partNumberList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vendor_equipment_type_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vendorEquipmentTypeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
