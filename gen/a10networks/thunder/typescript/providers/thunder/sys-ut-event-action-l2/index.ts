// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtEventActionL2AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#direction SysUtEventActionL2A#direction}
  */
  readonly direction: string;
  /**
  * L2 frame type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#ethertype SysUtEventActionL2A#ethertype}
  */
  readonly ethertype?: number;
  /**
  * EventNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#event_number SysUtEventActionL2A#event_number}
  */
  readonly eventNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#id SysUtEventActionL2A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'arp': arp; 'ipv4': ipv4; 'ipv6': ipv6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#protocol SysUtEventActionL2A#protocol}
  */
  readonly protocol?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#uuid SysUtEventActionL2A#uuid}
  */
  readonly uuid?: string;
  /**
  * ethertype number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#value SysUtEventActionL2A#value}
  */
  readonly value?: number;
  /**
  * Vlan ID on the packet. 0 is untagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#vlan SysUtEventActionL2A#vlan}
  */
  readonly vlan?: number;
  /**
  * mac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#mac_list SysUtEventActionL2A#mac_list}
  */
  readonly macList?: SysUtEventActionL2MacListStructA[] | cdktf.IResolvable;
}
export interface SysUtEventActionL2MacListStructA {
  /**
  * 'broadcast': broadcast; 'multicast': multicast;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#address_type SysUtEventActionL2A#address_type}
  */
  readonly addressType?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#ethernet SysUtEventActionL2A#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#nat_pool SysUtEventActionL2A#nat_pool}
  */
  readonly natPool?: string;
  /**
  * 'dest': dest; 'src': src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#src_dst SysUtEventActionL2A#src_dst}
  */
  readonly srcDst: string;
  /**
  * Trunk number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#trunk SysUtEventActionL2A#trunk}
  */
  readonly trunk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#uuid SysUtEventActionL2A#uuid}
  */
  readonly uuid?: string;
  /**
  * Mac Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#value SysUtEventActionL2A#value}
  */
  readonly value?: string;
  /**
  * Virtual Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#ve SysUtEventActionL2A#ve}
  */
  readonly ve?: number;
  /**
  * vip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#virtual_server SysUtEventActionL2A#virtual_server}
  */
  readonly virtualServer?: string;
}

export function sysUtEventActionL2MacListStructAToTerraform(struct?: SysUtEventActionL2MacListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    src_dst: cdktf.stringToTerraform(struct!.srcDst),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.stringToTerraform(struct!.value),
    ve: cdktf.numberToTerraform(struct!.ve),
    virtual_server: cdktf.stringToTerraform(struct!.virtualServer),
  }
}


export function sysUtEventActionL2MacListStructAToHclTerraform(struct?: SysUtEventActionL2MacListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_dst: {
      value: cdktf.stringToHclTerraform(struct!.srcDst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.stringToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionL2MacListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SysUtEventActionL2MacListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._srcDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDst = this._srcDst;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionL2MacListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._ethernet = undefined;
      this._natPool = undefined;
      this._srcDst = undefined;
      this._trunk = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._ve = undefined;
      this._virtualServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._ethernet = value.ethernet;
      this._natPool = value.natPool;
      this._srcDst = value.srcDst;
      this._trunk = value.trunk;
      this._uuid = value.uuid;
      this._value = value.value;
      this._ve = value.ve;
      this._virtualServer = value.virtualServer;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // src_dst - computed: false, optional: false, required: true
  private _srcDst?: string; 
  public get srcDst() {
    return this.getStringAttribute('src_dst');
  }
  public set srcDst(value: string) {
    this._srcDst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstInput() {
    return this._srcDst;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }
}

export class SysUtEventActionL2MacListStructAList extends cdktf.ComplexList {
  public internalValue? : SysUtEventActionL2MacListStructA[] | cdktf.IResolvable

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
  public get(index: number): SysUtEventActionL2MacListStructAOutputReference {
    return new SysUtEventActionL2MacListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2 thunder_sys_ut_event_action_l2}
*/
export class SysUtEventActionL2A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_event_action_l2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtEventActionL2A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtEventActionL2A to import
  * @param importFromId The id of the existing SysUtEventActionL2A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtEventActionL2A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_event_action_l2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sys_ut_event_action_l2 thunder_sys_ut_event_action_l2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtEventActionL2AConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtEventActionL2AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_event_action_l2',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._ethertype = config.ethertype;
    this._eventNumber = config.eventNumber;
    this._id = config.id;
    this._protocol = config.protocol;
    this._uuid = config.uuid;
    this._value = config.value;
    this._vlan = config.vlan;
    this._macList.internalValue = config.macList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ethertype - computed: false, optional: true, required: false
  private _ethertype?: number; 
  public get ethertype() {
    return this.getNumberAttribute('ethertype');
  }
  public set ethertype(value: number) {
    this._ethertype = value;
  }
  public resetEthertype() {
    this._ethertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // event_number - computed: false, optional: false, required: true
  private _eventNumber?: string; 
  public get eventNumber() {
    return this.getStringAttribute('event_number');
  }
  public set eventNumber(value: string) {
    this._eventNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNumberInput() {
    return this._eventNumber;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // mac_list - computed: false, optional: true, required: false
  private _macList = new SysUtEventActionL2MacListStructAList(this, "mac_list", false);
  public get macList() {
    return this._macList;
  }
  public putMacList(value: SysUtEventActionL2MacListStructA[] | cdktf.IResolvable) {
    this._macList.internalValue = value;
  }
  public resetMacList() {
    this._macList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macListInput() {
    return this._macList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      ethertype: cdktf.numberToTerraform(this._ethertype),
      event_number: cdktf.stringToTerraform(this._eventNumber),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      uuid: cdktf.stringToTerraform(this._uuid),
      value: cdktf.numberToTerraform(this._value),
      vlan: cdktf.numberToTerraform(this._vlan),
      mac_list: cdktf.listMapper(sysUtEventActionL2MacListStructAToTerraform, true)(this._macList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethertype: {
        value: cdktf.numberToHclTerraform(this._ethertype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_number: {
        value: cdktf.stringToHclTerraform(this._eventNumber),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.numberToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_list: {
        value: cdktf.listMapperHcl(sysUtEventActionL2MacListStructAToHclTerraform, true)(this._macList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionL2MacListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
