// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceModuleCountConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceId query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count#device_id DataDnacenterNetworkDeviceModuleCount#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count#id DataDnacenterNetworkDeviceModuleCount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * nameList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count#name_list DataDnacenterNetworkDeviceModuleCount#name_list}
  */
  readonly nameList?: string[];
  /**
  * operationalStateCodeList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count#operational_state_code_list DataDnacenterNetworkDeviceModuleCount#operational_state_code_list}
  */
  readonly operationalStateCodeList?: string[];
  /**
  * partNumberList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count#part_number_list DataDnacenterNetworkDeviceModuleCount#part_number_list}
  */
  readonly partNumberList?: string[];
  /**
  * vendorEquipmentTypeList query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count#vendor_equipment_type_list DataDnacenterNetworkDeviceModuleCount#vendor_equipment_type_list}
  */
  readonly vendorEquipmentTypeList?: string[];
}
export interface DataDnacenterNetworkDeviceModuleCountItem {
}

export function dataDnacenterNetworkDeviceModuleCountItemToTerraform(struct?: DataDnacenterNetworkDeviceModuleCountItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceModuleCountItemToHclTerraform(struct?: DataDnacenterNetworkDeviceModuleCountItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceModuleCountItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceModuleCountItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceModuleCountItem | undefined) {
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

export class DataDnacenterNetworkDeviceModuleCountItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceModuleCountItemOutputReference {
    return new DataDnacenterNetworkDeviceModuleCountItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count dnacenter_network_device_module_count}
*/
export class DataDnacenterNetworkDeviceModuleCount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_module_count";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceModuleCount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceModuleCount to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceModuleCount that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceModuleCount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_module_count", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_module_count dnacenter_network_device_module_count} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceModuleCountConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceModuleCountConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_module_count',
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
    this._deviceId = config.deviceId;
    this._id = config.id;
    this._nameList = config.nameList;
    this._operationalStateCodeList = config.operationalStateCodeList;
    this._partNumberList = config.partNumberList;
    this._vendorEquipmentTypeList = config.vendorEquipmentTypeList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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
  private _item = new DataDnacenterNetworkDeviceModuleCountItemList(this, "item", false);
  public get item() {
    return this._item;
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
      name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameList),
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
      name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
