// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerSnmpcommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#device_name SwitchcontrollerSnmpcommunity#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#device_vdom SwitchcontrollerSnmpcommunity#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#dynamic_sort_subtable SwitchcontrollerSnmpcommunity#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#events SwitchcontrollerSnmpcommunity#events}
  */
  readonly events?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#fosid SwitchcontrollerSnmpcommunity#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#id SwitchcontrollerSnmpcommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#name SwitchcontrollerSnmpcommunity#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#query_v1_port SwitchcontrollerSnmpcommunity#query_v1_port}
  */
  readonly queryV1Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#query_v1_status SwitchcontrollerSnmpcommunity#query_v1_status}
  */
  readonly queryV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#query_v2c_port SwitchcontrollerSnmpcommunity#query_v2c_port}
  */
  readonly queryV2CPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#query_v2c_status SwitchcontrollerSnmpcommunity#query_v2c_status}
  */
  readonly queryV2CStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#status SwitchcontrollerSnmpcommunity#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#trap_v1_lport SwitchcontrollerSnmpcommunity#trap_v1_lport}
  */
  readonly trapV1Lport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#trap_v1_rport SwitchcontrollerSnmpcommunity#trap_v1_rport}
  */
  readonly trapV1Rport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#trap_v1_status SwitchcontrollerSnmpcommunity#trap_v1_status}
  */
  readonly trapV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#trap_v2c_lport SwitchcontrollerSnmpcommunity#trap_v2c_lport}
  */
  readonly trapV2CLport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#trap_v2c_rport SwitchcontrollerSnmpcommunity#trap_v2c_rport}
  */
  readonly trapV2CRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#trap_v2c_status SwitchcontrollerSnmpcommunity#trap_v2c_status}
  */
  readonly trapV2CStatus?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#hosts SwitchcontrollerSnmpcommunity#hosts}
  */
  readonly hosts?: SwitchcontrollerSnmpcommunityHosts[] | cdktf.IResolvable;
}
export interface SwitchcontrollerSnmpcommunityHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#id SwitchcontrollerSnmpcommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#ip SwitchcontrollerSnmpcommunity#ip}
  */
  readonly ip?: string[];
}

export function switchcontrollerSnmpcommunityHostsToTerraform(struct?: SwitchcontrollerSnmpcommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
  }
}


export function switchcontrollerSnmpcommunityHostsToHclTerraform(struct?: SwitchcontrollerSnmpcommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerSnmpcommunityHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SwitchcontrollerSnmpcommunityHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerSnmpcommunityHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class SwitchcontrollerSnmpcommunityHostsList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerSnmpcommunityHosts[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerSnmpcommunityHostsOutputReference {
    return new SwitchcontrollerSnmpcommunityHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity fmgdevice_switchcontroller_snmpcommunity}
*/
export class SwitchcontrollerSnmpcommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_snmpcommunity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerSnmpcommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerSnmpcommunity to import
  * @param importFromId The id of the existing SwitchcontrollerSnmpcommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerSnmpcommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_snmpcommunity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_snmpcommunity fmgdevice_switchcontroller_snmpcommunity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerSnmpcommunityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerSnmpcommunityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_snmpcommunity',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._events = config.events;
    this._fosid = config.fosid;
    this._id = config.id;
    this._name = config.name;
    this._queryV1Port = config.queryV1Port;
    this._queryV1Status = config.queryV1Status;
    this._queryV2CPort = config.queryV2CPort;
    this._queryV2CStatus = config.queryV2CStatus;
    this._status = config.status;
    this._trapV1Lport = config.trapV1Lport;
    this._trapV1Rport = config.trapV1Rport;
    this._trapV1Status = config.trapV1Status;
    this._trapV2CLport = config.trapV2CLport;
    this._trapV2CRport = config.trapV2CRport;
    this._trapV2CStatus = config.trapV2CStatus;
    this._hosts.internalValue = config.hosts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query_v1_port - computed: true, optional: true, required: false
  private _queryV1Port?: number; 
  public get queryV1Port() {
    return this.getNumberAttribute('query_v1_port');
  }
  public set queryV1Port(value: number) {
    this._queryV1Port = value;
  }
  public resetQueryV1Port() {
    this._queryV1Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1PortInput() {
    return this._queryV1Port;
  }

  // query_v1_status - computed: true, optional: true, required: false
  private _queryV1Status?: string; 
  public get queryV1Status() {
    return this.getStringAttribute('query_v1_status');
  }
  public set queryV1Status(value: string) {
    this._queryV1Status = value;
  }
  public resetQueryV1Status() {
    this._queryV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1StatusInput() {
    return this._queryV1Status;
  }

  // query_v2c_port - computed: true, optional: true, required: false
  private _queryV2CPort?: number; 
  public get queryV2CPort() {
    return this.getNumberAttribute('query_v2c_port');
  }
  public set queryV2CPort(value: number) {
    this._queryV2CPort = value;
  }
  public resetQueryV2CPort() {
    this._queryV2CPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CPortInput() {
    return this._queryV2CPort;
  }

  // query_v2c_status - computed: true, optional: true, required: false
  private _queryV2CStatus?: string; 
  public get queryV2CStatus() {
    return this.getStringAttribute('query_v2c_status');
  }
  public set queryV2CStatus(value: string) {
    this._queryV2CStatus = value;
  }
  public resetQueryV2CStatus() {
    this._queryV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CStatusInput() {
    return this._queryV2CStatus;
  }

  // status - computed: true, optional: true, required: false
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

  // trap_v1_lport - computed: true, optional: true, required: false
  private _trapV1Lport?: number; 
  public get trapV1Lport() {
    return this.getNumberAttribute('trap_v1_lport');
  }
  public set trapV1Lport(value: number) {
    this._trapV1Lport = value;
  }
  public resetTrapV1Lport() {
    this._trapV1Lport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1LportInput() {
    return this._trapV1Lport;
  }

  // trap_v1_rport - computed: true, optional: true, required: false
  private _trapV1Rport?: number; 
  public get trapV1Rport() {
    return this.getNumberAttribute('trap_v1_rport');
  }
  public set trapV1Rport(value: number) {
    this._trapV1Rport = value;
  }
  public resetTrapV1Rport() {
    this._trapV1Rport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1RportInput() {
    return this._trapV1Rport;
  }

  // trap_v1_status - computed: true, optional: true, required: false
  private _trapV1Status?: string; 
  public get trapV1Status() {
    return this.getStringAttribute('trap_v1_status');
  }
  public set trapV1Status(value: string) {
    this._trapV1Status = value;
  }
  public resetTrapV1Status() {
    this._trapV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1StatusInput() {
    return this._trapV1Status;
  }

  // trap_v2c_lport - computed: true, optional: true, required: false
  private _trapV2CLport?: number; 
  public get trapV2CLport() {
    return this.getNumberAttribute('trap_v2c_lport');
  }
  public set trapV2CLport(value: number) {
    this._trapV2CLport = value;
  }
  public resetTrapV2CLport() {
    this._trapV2CLport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CLportInput() {
    return this._trapV2CLport;
  }

  // trap_v2c_rport - computed: true, optional: true, required: false
  private _trapV2CRport?: number; 
  public get trapV2CRport() {
    return this.getNumberAttribute('trap_v2c_rport');
  }
  public set trapV2CRport(value: number) {
    this._trapV2CRport = value;
  }
  public resetTrapV2CRport() {
    this._trapV2CRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CRportInput() {
    return this._trapV2CRport;
  }

  // trap_v2c_status - computed: true, optional: true, required: false
  private _trapV2CStatus?: string; 
  public get trapV2CStatus() {
    return this.getStringAttribute('trap_v2c_status');
  }
  public set trapV2CStatus(value: string) {
    this._trapV2CStatus = value;
  }
  public resetTrapV2CStatus() {
    this._trapV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CStatusInput() {
    return this._trapV2CStatus;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new SwitchcontrollerSnmpcommunityHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: SwitchcontrollerSnmpcommunityHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query_v1_port: cdktf.numberToTerraform(this._queryV1Port),
      query_v1_status: cdktf.stringToTerraform(this._queryV1Status),
      query_v2c_port: cdktf.numberToTerraform(this._queryV2CPort),
      query_v2c_status: cdktf.stringToTerraform(this._queryV2CStatus),
      status: cdktf.stringToTerraform(this._status),
      trap_v1_lport: cdktf.numberToTerraform(this._trapV1Lport),
      trap_v1_rport: cdktf.numberToTerraform(this._trapV1Rport),
      trap_v1_status: cdktf.stringToTerraform(this._trapV1Status),
      trap_v2c_lport: cdktf.numberToTerraform(this._trapV2CLport),
      trap_v2c_rport: cdktf.numberToTerraform(this._trapV2CRport),
      trap_v2c_status: cdktf.stringToTerraform(this._trapV2CStatus),
      hosts: cdktf.listMapper(switchcontrollerSnmpcommunityHostsToTerraform, true)(this._hosts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_v1_port: {
        value: cdktf.numberToHclTerraform(this._queryV1Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_v1_status: {
        value: cdktf.stringToHclTerraform(this._queryV1Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_v2c_port: {
        value: cdktf.numberToHclTerraform(this._queryV2CPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_v2c_status: {
        value: cdktf.stringToHclTerraform(this._queryV2CStatus),
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
      trap_v1_lport: {
        value: cdktf.numberToHclTerraform(this._trapV1Lport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v1_rport: {
        value: cdktf.numberToHclTerraform(this._trapV1Rport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v1_status: {
        value: cdktf.stringToHclTerraform(this._trapV1Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_v2c_lport: {
        value: cdktf.numberToHclTerraform(this._trapV2CLport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v2c_rport: {
        value: cdktf.numberToHclTerraform(this._trapV2CRport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v2c_status: {
        value: cdktf.stringToHclTerraform(this._trapV2CStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(switchcontrollerSnmpcommunityHostsToHclTerraform, true)(this._hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerSnmpcommunityHostsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
