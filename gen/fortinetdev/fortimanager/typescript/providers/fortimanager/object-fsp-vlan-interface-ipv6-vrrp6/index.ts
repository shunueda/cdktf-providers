// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanInterfaceIpv6Vrrp6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#accept_mode ObjectFspVlanInterfaceIpv6Vrrp6A#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#adom ObjectFspVlanInterfaceIpv6Vrrp6A#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#adv_interval ObjectFspVlanInterfaceIpv6Vrrp6A#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#id ObjectFspVlanInterfaceIpv6Vrrp6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#ignore_default_route ObjectFspVlanInterfaceIpv6Vrrp6A#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#preempt ObjectFspVlanInterfaceIpv6Vrrp6A#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#priority ObjectFspVlanInterfaceIpv6Vrrp6A#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#scopetype ObjectFspVlanInterfaceIpv6Vrrp6A#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#start_time ObjectFspVlanInterfaceIpv6Vrrp6A#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#status ObjectFspVlanInterfaceIpv6Vrrp6A#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#vlan ObjectFspVlanInterfaceIpv6Vrrp6A#vlan}
  */
  readonly vlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#vrdst6 ObjectFspVlanInterfaceIpv6Vrrp6A#vrdst6}
  */
  readonly vrdst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#vrgrp ObjectFspVlanInterfaceIpv6Vrrp6A#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#vrid ObjectFspVlanInterfaceIpv6Vrrp6A#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#vrip6 ObjectFspVlanInterfaceIpv6Vrrp6A#vrip6}
  */
  readonly vrip6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6 fortimanager_object_fsp_vlan_interface_ipv6_vrrp6}
*/
export class ObjectFspVlanInterfaceIpv6Vrrp6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_interface_ipv6_vrrp6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanInterfaceIpv6Vrrp6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanInterfaceIpv6Vrrp6A to import
  * @param importFromId The id of the existing ObjectFspVlanInterfaceIpv6Vrrp6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanInterfaceIpv6Vrrp6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_interface_ipv6_vrrp6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6_vrrp6 fortimanager_object_fsp_vlan_interface_ipv6_vrrp6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanInterfaceIpv6Vrrp6AConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanInterfaceIpv6Vrrp6AConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_interface_ipv6_vrrp6',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._adom = config.adom;
    this._advInterval = config.advInterval;
    this._id = config.id;
    this._ignoreDefaultRoute = config.ignoreDefaultRoute;
    this._preempt = config.preempt;
    this._priority = config.priority;
    this._scopetype = config.scopetype;
    this._startTime = config.startTime;
    this._status = config.status;
    this._vlan = config.vlan;
    this._vrdst6 = config.vrdst6;
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vrdst6 - computed: false, optional: true, required: false
  private _vrdst6?: string; 
  public get vrdst6() {
    return this.getStringAttribute('vrdst6');
  }
  public set vrdst6(value: string) {
    this._vrdst6 = value;
  }
  public resetVrdst6() {
    this._vrdst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdst6Input() {
    return this._vrdst6;
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
      adom: cdktf.stringToTerraform(this._adom),
      adv_interval: cdktf.numberToTerraform(this._advInterval),
      id: cdktf.stringToTerraform(this._id),
      ignore_default_route: cdktf.stringToTerraform(this._ignoreDefaultRoute),
      preempt: cdktf.stringToTerraform(this._preempt),
      priority: cdktf.numberToTerraform(this._priority),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      start_time: cdktf.numberToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      vlan: cdktf.stringToTerraform(this._vlan),
      vrdst6: cdktf.stringToTerraform(this._vrdst6),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrdst6: {
        value: cdktf.stringToHclTerraform(this._vrdst6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
