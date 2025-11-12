// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/accesspoint_configuration_details_by_task_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterAccesspointConfigurationDetailsByTaskIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/accesspoint_configuration_details_by_task_id#id DataDnacenterAccesspointConfigurationDetailsByTaskId#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * task_id path parameter. task id information of ap config
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/accesspoint_configuration_details_by_task_id#task_id DataDnacenterAccesspointConfigurationDetailsByTaskId#task_id}
  */
  readonly taskId: string;
}
export interface DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKey {
}

export function dataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKeyToTerraform(struct?: DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKeyToHclTerraform(struct?: DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKey | undefined) {
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

  // long_type - computed: true, optional: false, required: false
  public get longType() {
    return this.getStringAttribute('long_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKeyOutputReference {
    return new DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAccesspointConfigurationDetailsByTaskIdItems {
}

export function dataDnacenterAccesspointConfigurationDetailsByTaskIdItemsToTerraform(struct?: DataDnacenterAccesspointConfigurationDetailsByTaskIdItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAccesspointConfigurationDetailsByTaskIdItemsToHclTerraform(struct?: DataDnacenterAccesspointConfigurationDetailsByTaskIdItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAccesspointConfigurationDetailsByTaskIdItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAccesspointConfigurationDetailsByTaskIdItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_name - computed: true, optional: false, required: false
  public get apName() {
    return this.getStringAttribute('ap_name');
  }

  // auth_entity_class - computed: true, optional: false, required: false
  public get authEntityClass() {
    return this.getStringAttribute('auth_entity_class');
  }

  // auth_entity_id - computed: true, optional: false, required: false
  public get authEntityId() {
    return this.getStringAttribute('auth_entity_id');
  }

  // change_log_list - computed: true, optional: false, required: false
  public get changeLogList() {
    return this.getStringAttribute('change_log_list');
  }

  // controller_name - computed: true, optional: false, required: false
  public get controllerName() {
    return this.getStringAttribute('controller_name');
  }

  // creation_order_index - computed: true, optional: false, required: false
  public get creationOrderIndex() {
    return this.getNumberAttribute('creation_order_index');
  }

  // deploy_pending - computed: true, optional: false, required: false
  public get deployPending() {
    return this.getStringAttribute('deploy_pending');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getStringAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_origin - computed: true, optional: false, required: false
  public get instanceOrigin() {
    return this.getStringAttribute('instance_origin');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getStringAttribute('instance_updated_on');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // internal_key - computed: true, optional: false, required: false
  private _internalKey = new DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsInternalKeyList(this, "internal_key", false);
  public get internalKey() {
    return this._internalKey;
  }

  // is_being_changed - computed: true, optional: false, required: false
  public get isBeingChanged() {
    return this.getStringAttribute('is_being_changed');
  }

  // lazy_loaded_entities - computed: true, optional: false, required: false
  public get lazyLoadedEntities() {
    return this.getStringAttribute('lazy_loaded_entities');
  }

  // location_heirarchy - computed: true, optional: false, required: false
  public get locationHeirarchy() {
    return this.getStringAttribute('location_heirarchy');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // ordered_list_oeassoc_name - computed: true, optional: false, required: false
  public get orderedListOeassocName() {
    return this.getStringAttribute('ordered_list_oeassoc_name');
  }

  // ordered_list_oeindex - computed: true, optional: false, required: false
  public get orderedListOeindex() {
    return this.getNumberAttribute('ordered_list_oeindex');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: false
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
}

export class DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsOutputReference {
    return new DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/accesspoint_configuration_details_by_task_id dnacenter_accesspoint_configuration_details_by_task_id}
*/
export class DataDnacenterAccesspointConfigurationDetailsByTaskId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_accesspoint_configuration_details_by_task_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterAccesspointConfigurationDetailsByTaskId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterAccesspointConfigurationDetailsByTaskId to import
  * @param importFromId The id of the existing DataDnacenterAccesspointConfigurationDetailsByTaskId that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/accesspoint_configuration_details_by_task_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterAccesspointConfigurationDetailsByTaskId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_accesspoint_configuration_details_by_task_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/accesspoint_configuration_details_by_task_id dnacenter_accesspoint_configuration_details_by_task_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterAccesspointConfigurationDetailsByTaskIdConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterAccesspointConfigurationDetailsByTaskIdConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_accesspoint_configuration_details_by_task_id',
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
    this._id = config.id;
    this._taskId = config.taskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _items = new DataDnacenterAccesspointConfigurationDetailsByTaskIdItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
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
      id: cdktf.stringToTerraform(this._id),
      task_id: cdktf.stringToTerraform(this._taskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
