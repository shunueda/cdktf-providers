// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterPnpDeviceCountConfig extends cdktf.TerraformMetaArguments {
  /**
  * cmState query parameter. Device Connection Manager State
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#cm_state DataDnacenterPnpDeviceCount#cm_state}
  */
  readonly cmState?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#id DataDnacenterPnpDeviceCount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lastContact query parameter. Device Has Contacted lastContact > 0
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#last_contact DataDnacenterPnpDeviceCount#last_contact}
  */
  readonly lastContact?: boolean | cdktf.IResolvable;
  /**
  * name query parameter. Device Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#name DataDnacenterPnpDeviceCount#name}
  */
  readonly name?: string[];
  /**
  * onbState query parameter. Device Onboarding State
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#onb_state DataDnacenterPnpDeviceCount#onb_state}
  */
  readonly onbState?: string[];
  /**
  * pid query parameter. Device ProductId
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#pid DataDnacenterPnpDeviceCount#pid}
  */
  readonly pid?: string[];
  /**
  * projectId query parameter. Device Project Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#project_id DataDnacenterPnpDeviceCount#project_id}
  */
  readonly projectId?: string[];
  /**
  * projectName query parameter. Device Project Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#project_name DataDnacenterPnpDeviceCount#project_name}
  */
  readonly projectName?: string[];
  /**
  * serialNumber query parameter. Device Serial Number
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#serial_number DataDnacenterPnpDeviceCount#serial_number}
  */
  readonly serialNumber?: string[];
  /**
  * smartAccountId query parameter. Device Smart Account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#smart_account_id DataDnacenterPnpDeviceCount#smart_account_id}
  */
  readonly smartAccountId?: string[];
  /**
  * source query parameter. Device Source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#source DataDnacenterPnpDeviceCount#source}
  */
  readonly source?: string[];
  /**
  * state query parameter. Device State
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#state DataDnacenterPnpDeviceCount#state}
  */
  readonly state?: string[];
  /**
  * virtualAccountId query parameter. Device Virtual Account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#virtual_account_id DataDnacenterPnpDeviceCount#virtual_account_id}
  */
  readonly virtualAccountId?: string[];
  /**
  * workflowId query parameter. Device Workflow Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#workflow_id DataDnacenterPnpDeviceCount#workflow_id}
  */
  readonly workflowId?: string[];
  /**
  * workflowName query parameter. Device Workflow Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#workflow_name DataDnacenterPnpDeviceCount#workflow_name}
  */
  readonly workflowName?: string[];
}
export interface DataDnacenterPnpDeviceCountItem {
}

export function dataDnacenterPnpDeviceCountItemToTerraform(struct?: DataDnacenterPnpDeviceCountItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterPnpDeviceCountItemToHclTerraform(struct?: DataDnacenterPnpDeviceCountItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterPnpDeviceCountItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterPnpDeviceCountItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterPnpDeviceCountItem | undefined) {
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
}

export class DataDnacenterPnpDeviceCountItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterPnpDeviceCountItemOutputReference {
    return new DataDnacenterPnpDeviceCountItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count dnacenter_pnp_device_count}
*/
export class DataDnacenterPnpDeviceCount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_device_count";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterPnpDeviceCount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterPnpDeviceCount to import
  * @param importFromId The id of the existing DataDnacenterPnpDeviceCount that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterPnpDeviceCount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_device_count", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/pnp_device_count dnacenter_pnp_device_count} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterPnpDeviceCountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterPnpDeviceCountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_device_count',
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
    this._cmState = config.cmState;
    this._id = config.id;
    this._lastContact = config.lastContact;
    this._name = config.name;
    this._onbState = config.onbState;
    this._pid = config.pid;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._serialNumber = config.serialNumber;
    this._smartAccountId = config.smartAccountId;
    this._source = config.source;
    this._state = config.state;
    this._virtualAccountId = config.virtualAccountId;
    this._workflowId = config.workflowId;
    this._workflowName = config.workflowName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cm_state - computed: false, optional: true, required: false
  private _cmState?: string[]; 
  public get cmState() {
    return this.getListAttribute('cm_state');
  }
  public set cmState(value: string[]) {
    this._cmState = value;
  }
  public resetCmState() {
    this._cmState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmStateInput() {
    return this._cmState;
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
  private _item = new DataDnacenterPnpDeviceCountItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_contact - computed: false, optional: true, required: false
  private _lastContact?: boolean | cdktf.IResolvable; 
  public get lastContact() {
    return this.getBooleanAttribute('last_contact');
  }
  public set lastContact(value: boolean | cdktf.IResolvable) {
    this._lastContact = value;
  }
  public resetLastContact() {
    this._lastContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastContactInput() {
    return this._lastContact;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // onb_state - computed: false, optional: true, required: false
  private _onbState?: string[]; 
  public get onbState() {
    return this.getListAttribute('onb_state');
  }
  public set onbState(value: string[]) {
    this._onbState = value;
  }
  public resetOnbState() {
    this._onbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onbStateInput() {
    return this._onbState;
  }

  // pid - computed: false, optional: true, required: false
  private _pid?: string[]; 
  public get pid() {
    return this.getListAttribute('pid');
  }
  public set pid(value: string[]) {
    this._pid = value;
  }
  public resetPid() {
    this._pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidInput() {
    return this._pid;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string[]; 
  public get projectId() {
    return this.getListAttribute('project_id');
  }
  public set projectId(value: string[]) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string[]; 
  public get projectName() {
    return this.getListAttribute('project_name');
  }
  public set projectName(value: string[]) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string[]; 
  public get serialNumber() {
    return this.getListAttribute('serial_number');
  }
  public set serialNumber(value: string[]) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // smart_account_id - computed: false, optional: true, required: false
  private _smartAccountId?: string[]; 
  public get smartAccountId() {
    return this.getListAttribute('smart_account_id');
  }
  public set smartAccountId(value: string[]) {
    this._smartAccountId = value;
  }
  public resetSmartAccountId() {
    this._smartAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // virtual_account_id - computed: false, optional: true, required: false
  private _virtualAccountId?: string[]; 
  public get virtualAccountId() {
    return this.getListAttribute('virtual_account_id');
  }
  public set virtualAccountId(value: string[]) {
    this._virtualAccountId = value;
  }
  public resetVirtualAccountId() {
    this._virtualAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountIdInput() {
    return this._virtualAccountId;
  }

  // workflow_id - computed: false, optional: true, required: false
  private _workflowId?: string[]; 
  public get workflowId() {
    return this.getListAttribute('workflow_id');
  }
  public set workflowId(value: string[]) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // workflow_name - computed: false, optional: true, required: false
  private _workflowName?: string[]; 
  public get workflowName() {
    return this.getListAttribute('workflow_name');
  }
  public set workflowName(value: string[]) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cm_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cmState),
      id: cdktf.stringToTerraform(this._id),
      last_contact: cdktf.booleanToTerraform(this._lastContact),
      name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._name),
      onb_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onbState),
      pid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pid),
      project_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectId),
      project_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectName),
      serial_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumber),
      smart_account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smartAccountId),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._state),
      virtual_account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualAccountId),
      workflow_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workflowId),
      workflow_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workflowName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cm_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cmState),
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
      last_contact: {
        value: cdktf.booleanToHclTerraform(this._lastContact),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._name),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      onb_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onbState),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pid),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      serial_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumber),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      smart_account_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smartAccountId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._state),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual_account_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualAccountId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workflow_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workflowId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workflow_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workflowName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
