// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanInterfaceVrrpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#accept_mode ObjectFspVlanInterfaceVrrpA#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#adom ObjectFspVlanInterfaceVrrpA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#adv_interval ObjectFspVlanInterfaceVrrpA#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#dynamic_sort_subtable ObjectFspVlanInterfaceVrrpA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#id ObjectFspVlanInterfaceVrrpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#ignore_default_route ObjectFspVlanInterfaceVrrpA#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#preempt ObjectFspVlanInterfaceVrrpA#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#priority ObjectFspVlanInterfaceVrrpA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#scopetype ObjectFspVlanInterfaceVrrpA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#start_time ObjectFspVlanInterfaceVrrpA#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#status ObjectFspVlanInterfaceVrrpA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#version ObjectFspVlanInterfaceVrrpA#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#vlan ObjectFspVlanInterfaceVrrpA#vlan}
  */
  readonly vlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#vrdst ObjectFspVlanInterfaceVrrpA#vrdst}
  */
  readonly vrdst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#vrdst_priority ObjectFspVlanInterfaceVrrpA#vrdst_priority}
  */
  readonly vrdstPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#vrgrp ObjectFspVlanInterfaceVrrpA#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#vrid ObjectFspVlanInterfaceVrrpA#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#vrip ObjectFspVlanInterfaceVrrpA#vrip}
  */
  readonly vrip?: string;
  /**
  * proxy_arp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#proxy_arp ObjectFspVlanInterfaceVrrpA#proxy_arp}
  */
  readonly proxyArp?: ObjectFspVlanInterfaceVrrpProxyArpA[] | cdktf.IResolvable;
}
export interface ObjectFspVlanInterfaceVrrpProxyArpA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#id ObjectFspVlanInterfaceVrrpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#ip ObjectFspVlanInterfaceVrrpA#ip}
  */
  readonly ip?: string;
}

export function objectFspVlanInterfaceVrrpProxyArpAToTerraform(struct?: ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function objectFspVlanInterfaceVrrpProxyArpAToHclTerraform(struct?: ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceVrrpProxyArpAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanInterfaceVrrpProxyArpA | cdktf.IResolvable | undefined) {
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
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
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

export class ObjectFspVlanInterfaceVrrpProxyArpAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceVrrpProxyArpA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceVrrpProxyArpAOutputReference {
    return new ObjectFspVlanInterfaceVrrpProxyArpAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp fortimanager_object_fsp_vlan_interface_vrrp}
*/
export class ObjectFspVlanInterfaceVrrpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_interface_vrrp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanInterfaceVrrpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanInterfaceVrrpA to import
  * @param importFromId The id of the existing ObjectFspVlanInterfaceVrrpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanInterfaceVrrpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_interface_vrrp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_vrrp fortimanager_object_fsp_vlan_interface_vrrp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanInterfaceVrrpAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanInterfaceVrrpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_interface_vrrp',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._ignoreDefaultRoute = config.ignoreDefaultRoute;
    this._preempt = config.preempt;
    this._priority = config.priority;
    this._scopetype = config.scopetype;
    this._startTime = config.startTime;
    this._status = config.status;
    this._version = config.version;
    this._vlan = config.vlan;
    this._vrdst = config.vrdst;
    this._vrdstPriority = config.vrdstPriority;
    this._vrgrp = config.vrgrp;
    this._vrid = config.vrid;
    this._vrip = config.vrip;
    this._proxyArp.internalValue = config.proxyArp;
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

  // vrdst - computed: true, optional: true, required: false
  private _vrdst?: string[]; 
  public get vrdst() {
    return cdktf.Fn.tolist(this.getListAttribute('vrdst'));
  }
  public set vrdst(value: string[]) {
    this._vrdst = value;
  }
  public resetVrdst() {
    this._vrdst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstInput() {
    return this._vrdst;
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

  // vrip - computed: true, optional: true, required: false
  private _vrip?: string; 
  public get vrip() {
    return this.getStringAttribute('vrip');
  }
  public set vrip(value: string) {
    this._vrip = value;
  }
  public resetVrip() {
    this._vrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vripInput() {
    return this._vrip;
  }

  // proxy_arp - computed: false, optional: true, required: false
  private _proxyArp = new ObjectFspVlanInterfaceVrrpProxyArpAList(this, "proxy_arp", false);
  public get proxyArp() {
    return this._proxyArp;
  }
  public putProxyArp(value: ObjectFspVlanInterfaceVrrpProxyArpA[] | cdktf.IResolvable) {
    this._proxyArp.internalValue = value;
  }
  public resetProxyArp() {
    this._proxyArp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_mode: cdktf.stringToTerraform(this._acceptMode),
      adom: cdktf.stringToTerraform(this._adom),
      adv_interval: cdktf.numberToTerraform(this._advInterval),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      ignore_default_route: cdktf.stringToTerraform(this._ignoreDefaultRoute),
      preempt: cdktf.stringToTerraform(this._preempt),
      priority: cdktf.numberToTerraform(this._priority),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      start_time: cdktf.numberToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      version: cdktf.stringToTerraform(this._version),
      vlan: cdktf.stringToTerraform(this._vlan),
      vrdst: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vrdst),
      vrdst_priority: cdktf.numberToTerraform(this._vrdstPriority),
      vrgrp: cdktf.numberToTerraform(this._vrgrp),
      vrid: cdktf.numberToTerraform(this._vrid),
      vrip: cdktf.stringToTerraform(this._vrip),
      proxy_arp: cdktf.listMapper(objectFspVlanInterfaceVrrpProxyArpAToTerraform, true)(this._proxyArp.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
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
      vrdst: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vrdst),
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
      vrip: {
        value: cdktf.stringToHclTerraform(this._vrip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_arp: {
        value: cdktf.listMapperHcl(objectFspVlanInterfaceVrrpProxyArpAToHclTerraform, true)(this._proxyArp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceVrrpProxyArpAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
