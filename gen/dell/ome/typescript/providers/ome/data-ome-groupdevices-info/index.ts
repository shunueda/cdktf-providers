// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/groupdevices_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeGroupdevicesInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of the device group names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/groupdevices_info#device_group_names DataOmeGroupdevicesInfo#device_group_names}
  */
  readonly deviceGroupNames: string[];
  /**
  * ID for group devices data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/groupdevices_info#id DataOmeGroupdevicesInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOmeGroupdevicesInfoDeviceGroupsDevices {
}

export function dataOmeGroupdevicesInfoDeviceGroupsDevicesToTerraform(struct?: DataOmeGroupdevicesInfoDeviceGroupsDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeGroupdevicesInfoDeviceGroupsDevicesToHclTerraform(struct?: DataOmeGroupdevicesInfoDeviceGroupsDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeGroupdevicesInfoDeviceGroupsDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeGroupdevicesInfoDeviceGroupsDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeGroupdevicesInfoDeviceGroupsDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // servicetag - computed: true, optional: false, required: false
  public get servicetag() {
    return this.getStringAttribute('servicetag');
  }
}

export class DataOmeGroupdevicesInfoDeviceGroupsDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeGroupdevicesInfoDeviceGroupsDevicesOutputReference {
    return new DataOmeGroupdevicesInfoDeviceGroupsDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeGroupdevicesInfoDeviceGroupsSubGroups {
}

export function dataOmeGroupdevicesInfoDeviceGroupsSubGroupsToTerraform(struct?: DataOmeGroupdevicesInfoDeviceGroupsSubGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeGroupdevicesInfoDeviceGroupsSubGroupsToHclTerraform(struct?: DataOmeGroupdevicesInfoDeviceGroupsSubGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeGroupdevicesInfoDeviceGroupsSubGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeGroupdevicesInfoDeviceGroupsSubGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeGroupdevicesInfoDeviceGroupsSubGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOmeGroupdevicesInfoDeviceGroupsSubGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeGroupdevicesInfoDeviceGroupsSubGroupsOutputReference {
    return new DataOmeGroupdevicesInfoDeviceGroupsSubGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOmeGroupdevicesInfoDeviceGroups {
}

export function dataOmeGroupdevicesInfoDeviceGroupsToTerraform(struct?: DataOmeGroupdevicesInfoDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeGroupdevicesInfoDeviceGroupsToHclTerraform(struct?: DataOmeGroupdevicesInfoDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeGroupdevicesInfoDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataOmeGroupdevicesInfoDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeGroupdevicesInfoDeviceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // definition_description - computed: true, optional: false, required: false
  public get definitionDescription() {
    return this.getStringAttribute('definition_description');
  }

  // definition_id - computed: true, optional: false, required: false
  public get definitionId() {
    return this.getNumberAttribute('definition_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataOmeGroupdevicesInfoDeviceGroupsDevicesList(this, "devices", true);
  public get devices() {
    return this._devices;
  }

  // global_status - computed: true, optional: false, required: false
  public get globalStatus() {
    return this.getNumberAttribute('global_status');
  }

  // has_attributes - computed: true, optional: false, required: false
  public get hasAttributes() {
    return this.getBooleanAttribute('has_attributes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // id_owner - computed: true, optional: false, required: false
  public get idOwner() {
    return this.getNumberAttribute('id_owner');
  }

  // is_access_allowed - computed: true, optional: false, required: false
  public get isAccessAllowed() {
    return this.getBooleanAttribute('is_access_allowed');
  }

  // membership_type_id - computed: true, optional: false, required: false
  public get membershipTypeId() {
    return this.getNumberAttribute('membership_type_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }

  // sub_groups - computed: true, optional: false, required: false
  private _subGroups = new DataOmeGroupdevicesInfoDeviceGroupsSubGroupsList(this, "sub_groups", true);
  public get subGroups() {
    return this._subGroups;
  }

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
}

export class DataOmeGroupdevicesInfoDeviceGroupsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataOmeGroupdevicesInfoDeviceGroupsOutputReference {
    return new DataOmeGroupdevicesInfoDeviceGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/groupdevices_info ome_groupdevices_info}
*/
export class DataOmeGroupdevicesInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_groupdevices_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeGroupdevicesInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeGroupdevicesInfo to import
  * @param importFromId The id of the existing DataOmeGroupdevicesInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/groupdevices_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeGroupdevicesInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_groupdevices_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/groupdevices_info ome_groupdevices_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeGroupdevicesInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataOmeGroupdevicesInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_groupdevices_info',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceGroupNames = config.deviceGroupNames;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_group_names - computed: false, optional: false, required: true
  private _deviceGroupNames?: string[]; 
  public get deviceGroupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('device_group_names'));
  }
  public set deviceGroupNames(value: string[]) {
    this._deviceGroupNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupNamesInput() {
    return this._deviceGroupNames;
  }

  // device_groups - computed: true, optional: false, required: false
  private _deviceGroups = new DataOmeGroupdevicesInfoDeviceGroupsMap(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }

  // device_ids - computed: true, optional: false, required: false
  public get deviceIds() {
    return this.getNumberListAttribute('device_ids');
  }

  // device_servicetags - computed: true, optional: false, required: false
  public get deviceServicetags() {
    return this.getListAttribute('device_servicetags');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceGroupNames),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceGroupNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
