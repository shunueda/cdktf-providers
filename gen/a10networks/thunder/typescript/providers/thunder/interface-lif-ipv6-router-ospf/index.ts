// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceLifIpv6RouterOspfAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#id InterfaceLifIpv6RouterOspfA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#ifname InterfaceLifIpv6RouterOspfA#ifname}
  */
  readonly ifname: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#uuid InterfaceLifIpv6RouterOspfA#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#area_list InterfaceLifIpv6RouterOspfA#area_list}
  */
  readonly areaList?: InterfaceLifIpv6RouterOspfAreaListStructA[] | cdktf.IResolvable;
}
export interface InterfaceLifIpv6RouterOspfAreaListStructA {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#area_id_addr InterfaceLifIpv6RouterOspfA#area_id_addr}
  */
  readonly areaIdAddr?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#area_id_num InterfaceLifIpv6RouterOspfA#area_id_num}
  */
  readonly areaIdNum?: number;
  /**
  * Set the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#instance_id InterfaceLifIpv6RouterOspfA#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Set the OSPFv3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#tag InterfaceLifIpv6RouterOspfA#tag}
  */
  readonly tag?: string;
}

export function interfaceLifIpv6RouterOspfAreaListStructAToTerraform(struct?: InterfaceLifIpv6RouterOspfAreaListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id_addr: cdktf.stringToTerraform(struct!.areaIdAddr),
    area_id_num: cdktf.numberToTerraform(struct!.areaIdNum),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function interfaceLifIpv6RouterOspfAreaListStructAToHclTerraform(struct?: InterfaceLifIpv6RouterOspfAreaListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id_addr: {
      value: cdktf.stringToHclTerraform(struct!.areaIdAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_id_num: {
      value: cdktf.numberToHclTerraform(struct!.areaIdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceLifIpv6RouterOspfAreaListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceLifIpv6RouterOspfAreaListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIdAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdAddr = this._areaIdAddr;
    }
    if (this._areaIdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdNum = this._areaIdNum;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceLifIpv6RouterOspfAreaListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIdAddr = undefined;
      this._areaIdNum = undefined;
      this._instanceId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIdAddr = value.areaIdAddr;
      this._areaIdNum = value.areaIdNum;
      this._instanceId = value.instanceId;
      this._tag = value.tag;
    }
  }

  // area_id_addr - computed: false, optional: true, required: false
  private _areaIdAddr?: string; 
  public get areaIdAddr() {
    return this.getStringAttribute('area_id_addr');
  }
  public set areaIdAddr(value: string) {
    this._areaIdAddr = value;
  }
  public resetAreaIdAddr() {
    this._areaIdAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdAddrInput() {
    return this._areaIdAddr;
  }

  // area_id_num - computed: false, optional: true, required: false
  private _areaIdNum?: number; 
  public get areaIdNum() {
    return this.getNumberAttribute('area_id_num');
  }
  public set areaIdNum(value: number) {
    this._areaIdNum = value;
  }
  public resetAreaIdNum() {
    this._areaIdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdNumInput() {
    return this._areaIdNum;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class InterfaceLifIpv6RouterOspfAreaListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceLifIpv6RouterOspfAreaListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceLifIpv6RouterOspfAreaListStructAOutputReference {
    return new InterfaceLifIpv6RouterOspfAreaListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf thunder_interface_lif_ipv6_router_ospf}
*/
export class InterfaceLifIpv6RouterOspfA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_lif_ipv6_router_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceLifIpv6RouterOspfA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceLifIpv6RouterOspfA to import
  * @param importFromId The id of the existing InterfaceLifIpv6RouterOspfA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceLifIpv6RouterOspfA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_lif_ipv6_router_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_lif_ipv6_router_ospf thunder_interface_lif_ipv6_router_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceLifIpv6RouterOspfAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceLifIpv6RouterOspfAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_lif_ipv6_router_ospf',
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
    this._id = config.id;
    this._ifname = config.ifname;
    this._uuid = config.uuid;
    this._areaList.internalValue = config.areaList;
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

  // ifname - computed: false, optional: false, required: true
  private _ifname?: string; 
  public get ifname() {
    return this.getStringAttribute('ifname');
  }
  public set ifname(value: string) {
    this._ifname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
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

  // area_list - computed: false, optional: true, required: false
  private _areaList = new InterfaceLifIpv6RouterOspfAreaListStructAList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: InterfaceLifIpv6RouterOspfAreaListStructA[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifname: cdktf.stringToTerraform(this._ifname),
      uuid: cdktf.stringToTerraform(this._uuid),
      area_list: cdktf.listMapper(interfaceLifIpv6RouterOspfAreaListStructAToTerraform, true)(this._areaList.internalValue),
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
      ifname: {
        value: cdktf.stringToHclTerraform(this._ifname),
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
      area_list: {
        value: cdktf.listMapperHcl(interfaceLifIpv6RouterOspfAreaListStructAToHclTerraform, true)(this._areaList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceLifIpv6RouterOspfAreaListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
