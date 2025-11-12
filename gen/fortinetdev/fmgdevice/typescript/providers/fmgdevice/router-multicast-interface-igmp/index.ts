// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastInterfaceIgmpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#access_group RouterMulticastInterfaceIgmpA#access_group}
  */
  readonly accessGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#device_name RouterMulticastInterfaceIgmpA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#device_vdom RouterMulticastInterfaceIgmpA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#id RouterMulticastInterfaceIgmpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#immediate_leave_group RouterMulticastInterfaceIgmpA#immediate_leave_group}
  */
  readonly immediateLeaveGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#interface RouterMulticastInterfaceIgmpA#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#last_member_query_count RouterMulticastInterfaceIgmpA#last_member_query_count}
  */
  readonly lastMemberQueryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#last_member_query_interval RouterMulticastInterfaceIgmpA#last_member_query_interval}
  */
  readonly lastMemberQueryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#query_interval RouterMulticastInterfaceIgmpA#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#query_max_response_time RouterMulticastInterfaceIgmpA#query_max_response_time}
  */
  readonly queryMaxResponseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#query_timeout RouterMulticastInterfaceIgmpA#query_timeout}
  */
  readonly queryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#router_alert_check RouterMulticastInterfaceIgmpA#router_alert_check}
  */
  readonly routerAlertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#version RouterMulticastInterfaceIgmpA#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp fmgdevice_router_multicast_interface_igmp}
*/
export class RouterMulticastInterfaceIgmpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_multicast_interface_igmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticastInterfaceIgmpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticastInterfaceIgmpA to import
  * @param importFromId The id of the existing RouterMulticastInterfaceIgmpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticastInterfaceIgmpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_multicast_interface_igmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_interface_igmp fmgdevice_router_multicast_interface_igmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastInterfaceIgmpAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastInterfaceIgmpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_multicast_interface_igmp',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroup = config.accessGroup;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._immediateLeaveGroup = config.immediateLeaveGroup;
    this._interface = config.interface;
    this._lastMemberQueryCount = config.lastMemberQueryCount;
    this._lastMemberQueryInterval = config.lastMemberQueryInterval;
    this._queryInterval = config.queryInterval;
    this._queryMaxResponseTime = config.queryMaxResponseTime;
    this._queryTimeout = config.queryTimeout;
    this._routerAlertCheck = config.routerAlertCheck;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group - computed: true, optional: true, required: false
  private _accessGroup?: string[]; 
  public get accessGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('access_group'));
  }
  public set accessGroup(value: string[]) {
    this._accessGroup = value;
  }
  public resetAccessGroup() {
    this._accessGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupInput() {
    return this._accessGroup;
  }

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

  // immediate_leave_group - computed: true, optional: true, required: false
  private _immediateLeaveGroup?: string[]; 
  public get immediateLeaveGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('immediate_leave_group'));
  }
  public set immediateLeaveGroup(value: string[]) {
    this._immediateLeaveGroup = value;
  }
  public resetImmediateLeaveGroup() {
    this._immediateLeaveGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateLeaveGroupInput() {
    return this._immediateLeaveGroup;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // last_member_query_count - computed: false, optional: true, required: false
  private _lastMemberQueryCount?: number; 
  public get lastMemberQueryCount() {
    return this.getNumberAttribute('last_member_query_count');
  }
  public set lastMemberQueryCount(value: number) {
    this._lastMemberQueryCount = value;
  }
  public resetLastMemberQueryCount() {
    this._lastMemberQueryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberQueryCountInput() {
    return this._lastMemberQueryCount;
  }

  // last_member_query_interval - computed: false, optional: true, required: false
  private _lastMemberQueryInterval?: number; 
  public get lastMemberQueryInterval() {
    return this.getNumberAttribute('last_member_query_interval');
  }
  public set lastMemberQueryInterval(value: number) {
    this._lastMemberQueryInterval = value;
  }
  public resetLastMemberQueryInterval() {
    this._lastMemberQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberQueryIntervalInput() {
    return this._lastMemberQueryInterval;
  }

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // query_max_response_time - computed: true, optional: true, required: false
  private _queryMaxResponseTime?: number; 
  public get queryMaxResponseTime() {
    return this.getNumberAttribute('query_max_response_time');
  }
  public set queryMaxResponseTime(value: number) {
    this._queryMaxResponseTime = value;
  }
  public resetQueryMaxResponseTime() {
    this._queryMaxResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryMaxResponseTimeInput() {
    return this._queryMaxResponseTime;
  }

  // query_timeout - computed: true, optional: true, required: false
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // router_alert_check - computed: true, optional: true, required: false
  private _routerAlertCheck?: string; 
  public get routerAlertCheck() {
    return this.getStringAttribute('router_alert_check');
  }
  public set routerAlertCheck(value: string) {
    this._routerAlertCheck = value;
  }
  public resetRouterAlertCheck() {
    this._routerAlertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAlertCheckInput() {
    return this._routerAlertCheck;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessGroup),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      immediate_leave_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._immediateLeaveGroup),
      interface: cdktf.stringToTerraform(this._interface),
      last_member_query_count: cdktf.numberToTerraform(this._lastMemberQueryCount),
      last_member_query_interval: cdktf.numberToTerraform(this._lastMemberQueryInterval),
      query_interval: cdktf.numberToTerraform(this._queryInterval),
      query_max_response_time: cdktf.numberToTerraform(this._queryMaxResponseTime),
      query_timeout: cdktf.numberToTerraform(this._queryTimeout),
      router_alert_check: cdktf.stringToTerraform(this._routerAlertCheck),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      immediate_leave_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._immediateLeaveGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_member_query_count: {
        value: cdktf.numberToHclTerraform(this._lastMemberQueryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_member_query_interval: {
        value: cdktf.numberToHclTerraform(this._lastMemberQueryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_interval: {
        value: cdktf.numberToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_max_response_time: {
        value: cdktf.numberToHclTerraform(this._queryMaxResponseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_timeout: {
        value: cdktf.numberToHclTerraform(this._queryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_alert_check: {
        value: cdktf.stringToHclTerraform(this._routerAlertCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
