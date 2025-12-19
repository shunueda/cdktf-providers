// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSpanningTreeModeMstpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#id NetworkSpanningTreeModeMstpInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#instance_start NetworkSpanningTreeModeMstpInstance#instance_start}
  */
  readonly instanceStart: number;
  /**
  * Set instance priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#priority NetworkSpanningTreeModeMstpInstance#priority}
  */
  readonly priority?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#user_tag NetworkSpanningTreeModeMstpInstance#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#uuid NetworkSpanningTreeModeMstpInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * vlan_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#vlan_list NetworkSpanningTreeModeMstpInstance#vlan_list}
  */
  readonly vlanList?: NetworkSpanningTreeModeMstpInstanceVlanListStruct[] | cdktf.IResolvable;
}
export interface NetworkSpanningTreeModeMstpInstanceVlanListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#vlan_end NetworkSpanningTreeModeMstpInstance#vlan_end}
  */
  readonly vlanEnd?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#vlan_start NetworkSpanningTreeModeMstpInstance#vlan_start}
  */
  readonly vlanStart?: number;
}

export function networkSpanningTreeModeMstpInstanceVlanListStructToTerraform(struct?: NetworkSpanningTreeModeMstpInstanceVlanListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_end: cdktf.numberToTerraform(struct!.vlanEnd),
    vlan_start: cdktf.numberToTerraform(struct!.vlanStart),
  }
}


export function networkSpanningTreeModeMstpInstanceVlanListStructToHclTerraform(struct?: NetworkSpanningTreeModeMstpInstanceVlanListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_end: {
      value: cdktf.numberToHclTerraform(struct!.vlanEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_start: {
      value: cdktf.numberToHclTerraform(struct!.vlanStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSpanningTreeModeMstpInstanceVlanListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSpanningTreeModeMstpInstanceVlanListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanEnd = this._vlanEnd;
    }
    if (this._vlanStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanStart = this._vlanStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSpanningTreeModeMstpInstanceVlanListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanEnd = undefined;
      this._vlanStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanEnd = value.vlanEnd;
      this._vlanStart = value.vlanStart;
    }
  }

  // vlan_end - computed: false, optional: true, required: false
  private _vlanEnd?: number; 
  public get vlanEnd() {
    return this.getNumberAttribute('vlan_end');
  }
  public set vlanEnd(value: number) {
    this._vlanEnd = value;
  }
  public resetVlanEnd() {
    this._vlanEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEndInput() {
    return this._vlanEnd;
  }

  // vlan_start - computed: false, optional: true, required: false
  private _vlanStart?: number; 
  public get vlanStart() {
    return this.getNumberAttribute('vlan_start');
  }
  public set vlanStart(value: number) {
    this._vlanStart = value;
  }
  public resetVlanStart() {
    this._vlanStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanStartInput() {
    return this._vlanStart;
  }
}

export class NetworkSpanningTreeModeMstpInstanceVlanListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSpanningTreeModeMstpInstanceVlanListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSpanningTreeModeMstpInstanceVlanListStructOutputReference {
    return new NetworkSpanningTreeModeMstpInstanceVlanListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance thunder_network_spanning_tree_mode_mstp_instance}
*/
export class NetworkSpanningTreeModeMstpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_spanning_tree_mode_mstp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSpanningTreeModeMstpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSpanningTreeModeMstpInstance to import
  * @param importFromId The id of the existing NetworkSpanningTreeModeMstpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSpanningTreeModeMstpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_spanning_tree_mode_mstp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp_instance thunder_network_spanning_tree_mode_mstp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSpanningTreeModeMstpInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSpanningTreeModeMstpInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_spanning_tree_mode_mstp_instance',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._instanceStart = config.instanceStart;
    this._priority = config.priority;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vlanList.internalValue = config.vlanList;
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

  // instance_start - computed: false, optional: false, required: true
  private _instanceStart?: number; 
  public get instanceStart() {
    return this.getNumberAttribute('instance_start');
  }
  public set instanceStart(value: number) {
    this._instanceStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStartInput() {
    return this._instanceStart;
  }

  // priority - computed: false, optional: true, required: false
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // vlan_list - computed: false, optional: true, required: false
  private _vlanList = new NetworkSpanningTreeModeMstpInstanceVlanListStructList(this, "vlan_list", false);
  public get vlanList() {
    return this._vlanList;
  }
  public putVlanList(value: NetworkSpanningTreeModeMstpInstanceVlanListStruct[] | cdktf.IResolvable) {
    this._vlanList.internalValue = value;
  }
  public resetVlanList() {
    this._vlanList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanListInput() {
    return this._vlanList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_start: cdktf.numberToTerraform(this._instanceStart),
      priority: cdktf.numberToTerraform(this._priority),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan_list: cdktf.listMapper(networkSpanningTreeModeMstpInstanceVlanListStructToTerraform, true)(this._vlanList.internalValue),
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
      instance_start: {
        value: cdktf.numberToHclTerraform(this._instanceStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      vlan_list: {
        value: cdktf.listMapperHcl(networkSpanningTreeModeMstpInstanceVlanListStructToHclTerraform, true)(this._vlanList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSpanningTreeModeMstpInstanceVlanListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
