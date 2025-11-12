// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerManagedswitchIgmpsnoopingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#aging_time SwitchcontrollerManagedswitchIgmpsnooping#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#device_name SwitchcontrollerManagedswitchIgmpsnooping#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#device_vdom SwitchcontrollerManagedswitchIgmpsnooping#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#dynamic_sort_subtable SwitchcontrollerManagedswitchIgmpsnooping#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#flood_unknown_multicast SwitchcontrollerManagedswitchIgmpsnooping#flood_unknown_multicast}
  */
  readonly floodUnknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#id SwitchcontrollerManagedswitchIgmpsnooping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#local_override SwitchcontrollerManagedswitchIgmpsnooping#local_override}
  */
  readonly localOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#managed_switch SwitchcontrollerManagedswitchIgmpsnooping#managed_switch}
  */
  readonly managedSwitch: string;
  /**
  * vlans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#vlans SwitchcontrollerManagedswitchIgmpsnooping#vlans}
  */
  readonly vlans?: SwitchcontrollerManagedswitchIgmpsnoopingVlans[] | cdktf.IResolvable;
}
export interface SwitchcontrollerManagedswitchIgmpsnoopingVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#proxy SwitchcontrollerManagedswitchIgmpsnooping#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#querier SwitchcontrollerManagedswitchIgmpsnooping#querier}
  */
  readonly querier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#querier_addr SwitchcontrollerManagedswitchIgmpsnooping#querier_addr}
  */
  readonly querierAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#version SwitchcontrollerManagedswitchIgmpsnooping#version}
  */
  readonly version?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#vlan_name SwitchcontrollerManagedswitchIgmpsnooping#vlan_name}
  */
  readonly vlanName?: string[];
}

export function switchcontrollerManagedswitchIgmpsnoopingVlansToTerraform(struct?: SwitchcontrollerManagedswitchIgmpsnoopingVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy: cdktf.stringToTerraform(struct!.proxy),
    querier: cdktf.stringToTerraform(struct!.querier),
    querier_addr: cdktf.stringToTerraform(struct!.querierAddr),
    version: cdktf.numberToTerraform(struct!.version),
    vlan_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanName),
  }
}


export function switchcontrollerManagedswitchIgmpsnoopingVlansToHclTerraform(struct?: SwitchcontrollerManagedswitchIgmpsnoopingVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    querier: {
      value: cdktf.stringToHclTerraform(struct!.querier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    querier_addr: {
      value: cdktf.stringToHclTerraform(struct!.querierAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerManagedswitchIgmpsnoopingVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerManagedswitchIgmpsnoopingVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._querier !== undefined) {
      hasAnyValues = true;
      internalValueResult.querier = this._querier;
    }
    if (this._querierAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.querierAddr = this._querierAddr;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerManagedswitchIgmpsnoopingVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxy = undefined;
      this._querier = undefined;
      this._querierAddr = undefined;
      this._version = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxy = value.proxy;
      this._querier = value.querier;
      this._querierAddr = value.querierAddr;
      this._version = value.version;
      this._vlanName = value.vlanName;
    }
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // querier - computed: true, optional: true, required: false
  private _querier?: string; 
  public get querier() {
    return this.getStringAttribute('querier');
  }
  public set querier(value: string) {
    this._querier = value;
  }
  public resetQuerier() {
    this._querier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier;
  }

  // querier_addr - computed: true, optional: true, required: false
  private _querierAddr?: string; 
  public get querierAddr() {
    return this.getStringAttribute('querier_addr');
  }
  public set querierAddr(value: string) {
    this._querierAddr = value;
  }
  public resetQuerierAddr() {
    this._querierAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierAddrInput() {
    return this._querierAddr;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vlan_name - computed: true, optional: true, required: false
  private _vlanName?: string[]; 
  public get vlanName() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan_name'));
  }
  public set vlanName(value: string[]) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class SwitchcontrollerManagedswitchIgmpsnoopingVlansList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerManagedswitchIgmpsnoopingVlans[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerManagedswitchIgmpsnoopingVlansOutputReference {
    return new SwitchcontrollerManagedswitchIgmpsnoopingVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping fmgdevice_switchcontroller_managedswitch_igmpsnooping}
*/
export class SwitchcontrollerManagedswitchIgmpsnooping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_managedswitch_igmpsnooping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerManagedswitchIgmpsnooping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerManagedswitchIgmpsnooping to import
  * @param importFromId The id of the existing SwitchcontrollerManagedswitchIgmpsnooping that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerManagedswitchIgmpsnooping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_managedswitch_igmpsnooping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_managedswitch_igmpsnooping fmgdevice_switchcontroller_managedswitch_igmpsnooping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerManagedswitchIgmpsnoopingConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerManagedswitchIgmpsnoopingConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_managedswitch_igmpsnooping',
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
    this._agingTime = config.agingTime;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._floodUnknownMulticast = config.floodUnknownMulticast;
    this._id = config.id;
    this._localOverride = config.localOverride;
    this._managedSwitch = config.managedSwitch;
    this._vlans.internalValue = config.vlans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aging_time - computed: true, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
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

  // flood_unknown_multicast - computed: true, optional: true, required: false
  private _floodUnknownMulticast?: string; 
  public get floodUnknownMulticast() {
    return this.getStringAttribute('flood_unknown_multicast');
  }
  public set floodUnknownMulticast(value: string) {
    this._floodUnknownMulticast = value;
  }
  public resetFloodUnknownMulticast() {
    this._floodUnknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodUnknownMulticastInput() {
    return this._floodUnknownMulticast;
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

  // local_override - computed: true, optional: true, required: false
  private _localOverride?: string; 
  public get localOverride() {
    return this.getStringAttribute('local_override');
  }
  public set localOverride(value: string) {
    this._localOverride = value;
  }
  public resetLocalOverride() {
    this._localOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOverrideInput() {
    return this._localOverride;
  }

  // managed_switch - computed: false, optional: false, required: true
  private _managedSwitch?: string; 
  public get managedSwitch() {
    return this.getStringAttribute('managed_switch');
  }
  public set managedSwitch(value: string) {
    this._managedSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSwitchInput() {
    return this._managedSwitch;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans = new SwitchcontrollerManagedswitchIgmpsnoopingVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: SwitchcontrollerManagedswitchIgmpsnoopingVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aging_time: cdktf.numberToTerraform(this._agingTime),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      flood_unknown_multicast: cdktf.stringToTerraform(this._floodUnknownMulticast),
      id: cdktf.stringToTerraform(this._id),
      local_override: cdktf.stringToTerraform(this._localOverride),
      managed_switch: cdktf.stringToTerraform(this._managedSwitch),
      vlans: cdktf.listMapper(switchcontrollerManagedswitchIgmpsnoopingVlansToTerraform, true)(this._vlans.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aging_time: {
        value: cdktf.numberToHclTerraform(this._agingTime),
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
      flood_unknown_multicast: {
        value: cdktf.stringToHclTerraform(this._floodUnknownMulticast),
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
      local_override: {
        value: cdktf.stringToHclTerraform(this._localOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_switch: {
        value: cdktf.stringToHclTerraform(this._managedSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlans: {
        value: cdktf.listMapperHcl(switchcontrollerManagedswitchIgmpsnoopingVlansToHclTerraform, true)(this._vlans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerManagedswitchIgmpsnoopingVlansList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
