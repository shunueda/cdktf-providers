// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceIpv6Vrrp6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#accept_mode SystemInterfaceIpv6Vrrp6A#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#adv_interval SystemInterfaceIpv6Vrrp6A#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#device_name SystemInterfaceIpv6Vrrp6A#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#id SystemInterfaceIpv6Vrrp6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#ignore_default_route SystemInterfaceIpv6Vrrp6A#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#interface SystemInterfaceIpv6Vrrp6A#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#preempt SystemInterfaceIpv6Vrrp6A#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#priority SystemInterfaceIpv6Vrrp6A#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#start_time SystemInterfaceIpv6Vrrp6A#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#status SystemInterfaceIpv6Vrrp6A#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#vrdst6 SystemInterfaceIpv6Vrrp6A#vrdst6}
  */
  readonly vrdst6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#vrdst_priority SystemInterfaceIpv6Vrrp6A#vrdst_priority}
  */
  readonly vrdstPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#vrgrp SystemInterfaceIpv6Vrrp6A#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#vrid SystemInterfaceIpv6Vrrp6A#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#vrip6 SystemInterfaceIpv6Vrrp6A#vrip6}
  */
  readonly vrip6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6 fmgdevice_system_interface_ipv6_vrrp6}
*/
export class SystemInterfaceIpv6Vrrp6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_interface_ipv6_vrrp6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterfaceIpv6Vrrp6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterfaceIpv6Vrrp6A to import
  * @param importFromId The id of the existing SystemInterfaceIpv6Vrrp6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterfaceIpv6Vrrp6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_interface_ipv6_vrrp6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_interface_ipv6_vrrp6 fmgdevice_system_interface_ipv6_vrrp6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceIpv6Vrrp6AConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceIpv6Vrrp6AConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_interface_ipv6_vrrp6',
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
    this._acceptMode = config.acceptMode;
    this._advInterval = config.advInterval;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._ignoreDefaultRoute = config.ignoreDefaultRoute;
    this._interface = config.interface;
    this._preempt = config.preempt;
    this._priority = config.priority;
    this._startTime = config.startTime;
    this._status = config.status;
    this._vrdst6 = config.vrdst6;
    this._vrdstPriority = config.vrdstPriority;
    this._vrgrp = config.vrgrp;
    this._vrid = config.vrid;
    this._vrip6 = config.vrip6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_mode - computed: true, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: true, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
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

  // ignore_default_route - computed: true, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
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

  // preempt - computed: true, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // vrdst6 - computed: true, optional: true, required: false
  private _vrdst6?: string[]; 
  public get vrdst6() {
    return cdktf.Fn.tolist(this.getListAttribute('vrdst6'));
  }
  public set vrdst6(value: string[]) {
    this._vrdst6 = value;
  }
  public resetVrdst6() {
    this._vrdst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdst6Input() {
    return this._vrdst6;
  }

  // vrdst_priority - computed: false, optional: true, required: false
  private _vrdstPriority?: number; 
  public get vrdstPriority() {
    return this.getNumberAttribute('vrdst_priority');
  }
  public set vrdstPriority(value: number) {
    this._vrdstPriority = value;
  }
  public resetVrdstPriority() {
    this._vrdstPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstPriorityInput() {
    return this._vrdstPriority;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip6 - computed: true, optional: true, required: false
  private _vrip6?: string; 
  public get vrip6() {
    return this.getStringAttribute('vrip6');
  }
  public set vrip6(value: string) {
    this._vrip6 = value;
  }
  public resetVrip6() {
    this._vrip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6Input() {
    return this._vrip6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_mode: cdktf.stringToTerraform(this._acceptMode),
      adv_interval: cdktf.numberToTerraform(this._advInterval),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      ignore_default_route: cdktf.stringToTerraform(this._ignoreDefaultRoute),
      interface: cdktf.stringToTerraform(this._interface),
      preempt: cdktf.stringToTerraform(this._preempt),
      priority: cdktf.numberToTerraform(this._priority),
      start_time: cdktf.numberToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      vrdst6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vrdst6),
      vrdst_priority: cdktf.numberToTerraform(this._vrdstPriority),
      vrgrp: cdktf.numberToTerraform(this._vrgrp),
      vrid: cdktf.numberToTerraform(this._vrid),
      vrip6: cdktf.stringToTerraform(this._vrip6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_mode: {
        value: cdktf.stringToHclTerraform(this._acceptMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adv_interval: {
        value: cdktf.numberToHclTerraform(this._advInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      ignore_default_route: {
        value: cdktf.stringToHclTerraform(this._ignoreDefaultRoute),
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
      preempt: {
        value: cdktf.stringToHclTerraform(this._preempt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
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
      vrdst6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vrdst6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vrdst_priority: {
        value: cdktf.numberToHclTerraform(this._vrdstPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrgrp: {
        value: cdktf.numberToHclTerraform(this._vrgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrip6: {
        value: cdktf.stringToHclTerraform(this._vrip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
