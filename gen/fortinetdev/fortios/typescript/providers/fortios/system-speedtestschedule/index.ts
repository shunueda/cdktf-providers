// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSpeedtestscheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#ctrl_port SystemSpeedtestschedule#ctrl_port}
  */
  readonly ctrlPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#diffserv SystemSpeedtestschedule#diffserv}
  */
  readonly diffserv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#dynamic_server SystemSpeedtestschedule#dynamic_server}
  */
  readonly dynamicServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#dynamic_sort_subtable SystemSpeedtestschedule#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#get_all_tables SystemSpeedtestschedule#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#id SystemSpeedtestschedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#interface SystemSpeedtestschedule#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#mode SystemSpeedtestschedule#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#server_name SystemSpeedtestschedule#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#server_port SystemSpeedtestschedule#server_port}
  */
  readonly serverPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#status SystemSpeedtestschedule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#update_inbandwidth SystemSpeedtestschedule#update_inbandwidth}
  */
  readonly updateInbandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#update_inbandwidth_maximum SystemSpeedtestschedule#update_inbandwidth_maximum}
  */
  readonly updateInbandwidthMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#update_inbandwidth_minimum SystemSpeedtestschedule#update_inbandwidth_minimum}
  */
  readonly updateInbandwidthMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#update_outbandwidth SystemSpeedtestschedule#update_outbandwidth}
  */
  readonly updateOutbandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#update_outbandwidth_maximum SystemSpeedtestschedule#update_outbandwidth_maximum}
  */
  readonly updateOutbandwidthMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#update_outbandwidth_minimum SystemSpeedtestschedule#update_outbandwidth_minimum}
  */
  readonly updateOutbandwidthMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#update_shaper SystemSpeedtestschedule#update_shaper}
  */
  readonly updateShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#vdomparam SystemSpeedtestschedule#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#schedules SystemSpeedtestschedule#schedules}
  */
  readonly schedules?: SystemSpeedtestscheduleSchedules[] | cdktf.IResolvable;
}
export interface SystemSpeedtestscheduleSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#name SystemSpeedtestschedule#name}
  */
  readonly name?: string;
}

export function systemSpeedtestscheduleSchedulesToTerraform(struct?: SystemSpeedtestscheduleSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemSpeedtestscheduleSchedulesToHclTerraform(struct?: SystemSpeedtestscheduleSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSpeedtestscheduleSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSpeedtestscheduleSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSpeedtestscheduleSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class SystemSpeedtestscheduleSchedulesList extends cdktf.ComplexList {
  public internalValue? : SystemSpeedtestscheduleSchedules[] | cdktf.IResolvable

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
  public get(index: number): SystemSpeedtestscheduleSchedulesOutputReference {
    return new SystemSpeedtestscheduleSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule fortios_system_speedtestschedule}
*/
export class SystemSpeedtestschedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_speedtestschedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSpeedtestschedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSpeedtestschedule to import
  * @param importFromId The id of the existing SystemSpeedtestschedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSpeedtestschedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_speedtestschedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_speedtestschedule fortios_system_speedtestschedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSpeedtestscheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSpeedtestscheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_speedtestschedule',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ctrlPort = config.ctrlPort;
    this._diffserv = config.diffserv;
    this._dynamicServer = config.dynamicServer;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._interface = config.interface;
    this._mode = config.mode;
    this._serverName = config.serverName;
    this._serverPort = config.serverPort;
    this._status = config.status;
    this._updateInbandwidth = config.updateInbandwidth;
    this._updateInbandwidthMaximum = config.updateInbandwidthMaximum;
    this._updateInbandwidthMinimum = config.updateInbandwidthMinimum;
    this._updateOutbandwidth = config.updateOutbandwidth;
    this._updateOutbandwidthMaximum = config.updateOutbandwidthMaximum;
    this._updateOutbandwidthMinimum = config.updateOutbandwidthMinimum;
    this._updateShaper = config.updateShaper;
    this._vdomparam = config.vdomparam;
    this._schedules.internalValue = config.schedules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ctrl_port - computed: true, optional: true, required: false
  private _ctrlPort?: number; 
  public get ctrlPort() {
    return this.getNumberAttribute('ctrl_port');
  }
  public set ctrlPort(value: number) {
    this._ctrlPort = value;
  }
  public resetCtrlPort() {
    this._ctrlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlPortInput() {
    return this._ctrlPort;
  }

  // diffserv - computed: true, optional: true, required: false
  private _diffserv?: string; 
  public get diffserv() {
    return this.getStringAttribute('diffserv');
  }
  public set diffserv(value: string) {
    this._diffserv = value;
  }
  public resetDiffserv() {
    this._diffserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservInput() {
    return this._diffserv;
  }

  // dynamic_server - computed: true, optional: true, required: false
  private _dynamicServer?: string; 
  public get dynamicServer() {
    return this.getStringAttribute('dynamic_server');
  }
  public set dynamicServer(value: string) {
    this._dynamicServer = value;
  }
  public resetDynamicServer() {
    this._dynamicServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicServerInput() {
    return this._dynamicServer;
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
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

  // update_inbandwidth - computed: true, optional: true, required: false
  private _updateInbandwidth?: string; 
  public get updateInbandwidth() {
    return this.getStringAttribute('update_inbandwidth');
  }
  public set updateInbandwidth(value: string) {
    this._updateInbandwidth = value;
  }
  public resetUpdateInbandwidth() {
    this._updateInbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInbandwidthInput() {
    return this._updateInbandwidth;
  }

  // update_inbandwidth_maximum - computed: false, optional: true, required: false
  private _updateInbandwidthMaximum?: number; 
  public get updateInbandwidthMaximum() {
    return this.getNumberAttribute('update_inbandwidth_maximum');
  }
  public set updateInbandwidthMaximum(value: number) {
    this._updateInbandwidthMaximum = value;
  }
  public resetUpdateInbandwidthMaximum() {
    this._updateInbandwidthMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInbandwidthMaximumInput() {
    return this._updateInbandwidthMaximum;
  }

  // update_inbandwidth_minimum - computed: false, optional: true, required: false
  private _updateInbandwidthMinimum?: number; 
  public get updateInbandwidthMinimum() {
    return this.getNumberAttribute('update_inbandwidth_minimum');
  }
  public set updateInbandwidthMinimum(value: number) {
    this._updateInbandwidthMinimum = value;
  }
  public resetUpdateInbandwidthMinimum() {
    this._updateInbandwidthMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInbandwidthMinimumInput() {
    return this._updateInbandwidthMinimum;
  }

  // update_outbandwidth - computed: true, optional: true, required: false
  private _updateOutbandwidth?: string; 
  public get updateOutbandwidth() {
    return this.getStringAttribute('update_outbandwidth');
  }
  public set updateOutbandwidth(value: string) {
    this._updateOutbandwidth = value;
  }
  public resetUpdateOutbandwidth() {
    this._updateOutbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOutbandwidthInput() {
    return this._updateOutbandwidth;
  }

  // update_outbandwidth_maximum - computed: false, optional: true, required: false
  private _updateOutbandwidthMaximum?: number; 
  public get updateOutbandwidthMaximum() {
    return this.getNumberAttribute('update_outbandwidth_maximum');
  }
  public set updateOutbandwidthMaximum(value: number) {
    this._updateOutbandwidthMaximum = value;
  }
  public resetUpdateOutbandwidthMaximum() {
    this._updateOutbandwidthMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOutbandwidthMaximumInput() {
    return this._updateOutbandwidthMaximum;
  }

  // update_outbandwidth_minimum - computed: false, optional: true, required: false
  private _updateOutbandwidthMinimum?: number; 
  public get updateOutbandwidthMinimum() {
    return this.getNumberAttribute('update_outbandwidth_minimum');
  }
  public set updateOutbandwidthMinimum(value: number) {
    this._updateOutbandwidthMinimum = value;
  }
  public resetUpdateOutbandwidthMinimum() {
    this._updateOutbandwidthMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOutbandwidthMinimumInput() {
    return this._updateOutbandwidthMinimum;
  }

  // update_shaper - computed: true, optional: true, required: false
  private _updateShaper?: string; 
  public get updateShaper() {
    return this.getStringAttribute('update_shaper');
  }
  public set updateShaper(value: string) {
    this._updateShaper = value;
  }
  public resetUpdateShaper() {
    this._updateShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateShaperInput() {
    return this._updateShaper;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new SystemSpeedtestscheduleSchedulesList(this, "schedules", true);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: SystemSpeedtestscheduleSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ctrl_port: cdktf.numberToTerraform(this._ctrlPort),
      diffserv: cdktf.stringToTerraform(this._diffserv),
      dynamic_server: cdktf.stringToTerraform(this._dynamicServer),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      mode: cdktf.stringToTerraform(this._mode),
      server_name: cdktf.stringToTerraform(this._serverName),
      server_port: cdktf.numberToTerraform(this._serverPort),
      status: cdktf.stringToTerraform(this._status),
      update_inbandwidth: cdktf.stringToTerraform(this._updateInbandwidth),
      update_inbandwidth_maximum: cdktf.numberToTerraform(this._updateInbandwidthMaximum),
      update_inbandwidth_minimum: cdktf.numberToTerraform(this._updateInbandwidthMinimum),
      update_outbandwidth: cdktf.stringToTerraform(this._updateOutbandwidth),
      update_outbandwidth_maximum: cdktf.numberToTerraform(this._updateOutbandwidthMaximum),
      update_outbandwidth_minimum: cdktf.numberToTerraform(this._updateOutbandwidthMinimum),
      update_shaper: cdktf.stringToTerraform(this._updateShaper),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      schedules: cdktf.listMapper(systemSpeedtestscheduleSchedulesToTerraform, true)(this._schedules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ctrl_port: {
        value: cdktf.numberToHclTerraform(this._ctrlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      diffserv: {
        value: cdktf.stringToHclTerraform(this._diffserv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_server: {
        value: cdktf.stringToHclTerraform(this._dynamicServer),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_inbandwidth: {
        value: cdktf.stringToHclTerraform(this._updateInbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_inbandwidth_maximum: {
        value: cdktf.numberToHclTerraform(this._updateInbandwidthMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_inbandwidth_minimum: {
        value: cdktf.numberToHclTerraform(this._updateInbandwidthMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_outbandwidth: {
        value: cdktf.stringToHclTerraform(this._updateOutbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_outbandwidth_maximum: {
        value: cdktf.numberToHclTerraform(this._updateOutbandwidthMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_outbandwidth_minimum: {
        value: cdktf.numberToHclTerraform(this._updateOutbandwidthMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_shaper: {
        value: cdktf.stringToHclTerraform(this._updateShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedules: {
        value: cdktf.listMapperHcl(systemSpeedtestscheduleSchedulesToHclTerraform, true)(this._schedules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemSpeedtestscheduleSchedulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
