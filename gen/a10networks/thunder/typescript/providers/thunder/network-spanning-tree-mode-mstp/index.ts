// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSpanningTreeModeMstpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable spanning tree MSTP mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#action NetworkSpanningTreeModeMstp#action}
  */
  readonly action?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#id NetworkSpanningTreeModeMstp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set bridge priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#priority NetworkSpanningTreeModeMstp#priority}
  */
  readonly priority?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#uuid NetworkSpanningTreeModeMstp#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#instance_list NetworkSpanningTreeModeMstp#instance_list}
  */
  readonly instanceList?: NetworkSpanningTreeModeMstpInstanceListStruct[] | cdktf.IResolvable;
  /**
  * revision_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#revision_cfg NetworkSpanningTreeModeMstp#revision_cfg}
  */
  readonly revisionCfg?: NetworkSpanningTreeModeMstpRevisionCfg;
}
export interface NetworkSpanningTreeModeMstpInstanceListVlanListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#vlan_end NetworkSpanningTreeModeMstp#vlan_end}
  */
  readonly vlanEnd?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#vlan_start NetworkSpanningTreeModeMstp#vlan_start}
  */
  readonly vlanStart?: number;
}

export function networkSpanningTreeModeMstpInstanceListVlanListStructToTerraform(struct?: NetworkSpanningTreeModeMstpInstanceListVlanListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_end: cdktf.numberToTerraform(struct!.vlanEnd),
    vlan_start: cdktf.numberToTerraform(struct!.vlanStart),
  }
}


export function networkSpanningTreeModeMstpInstanceListVlanListStructToHclTerraform(struct?: NetworkSpanningTreeModeMstpInstanceListVlanListStruct | cdktf.IResolvable): any {
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

export class NetworkSpanningTreeModeMstpInstanceListVlanListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSpanningTreeModeMstpInstanceListVlanListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSpanningTreeModeMstpInstanceListVlanListStruct | cdktf.IResolvable | undefined) {
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

export class NetworkSpanningTreeModeMstpInstanceListVlanListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSpanningTreeModeMstpInstanceListVlanListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSpanningTreeModeMstpInstanceListVlanListStructOutputReference {
    return new NetworkSpanningTreeModeMstpInstanceListVlanListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSpanningTreeModeMstpInstanceListStruct {
  /**
  * Instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#instance_start NetworkSpanningTreeModeMstp#instance_start}
  */
  readonly instanceStart: number;
  /**
  * Set instance priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#priority NetworkSpanningTreeModeMstp#priority}
  */
  readonly priority?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#user_tag NetworkSpanningTreeModeMstp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#uuid NetworkSpanningTreeModeMstp#uuid}
  */
  readonly uuid?: string;
  /**
  * vlan_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#vlan_list NetworkSpanningTreeModeMstp#vlan_list}
  */
  readonly vlanList?: NetworkSpanningTreeModeMstpInstanceListVlanListStruct[] | cdktf.IResolvable;
}

export function networkSpanningTreeModeMstpInstanceListStructToTerraform(struct?: NetworkSpanningTreeModeMstpInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_start: cdktf.numberToTerraform(struct!.instanceStart),
    priority: cdktf.numberToTerraform(struct!.priority),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vlan_list: cdktf.listMapper(networkSpanningTreeModeMstpInstanceListVlanListStructToTerraform, true)(struct!.vlanList),
  }
}


export function networkSpanningTreeModeMstpInstanceListStructToHclTerraform(struct?: NetworkSpanningTreeModeMstpInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_start: {
      value: cdktf.numberToHclTerraform(struct!.instanceStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_list: {
      value: cdktf.listMapperHcl(networkSpanningTreeModeMstpInstanceListVlanListStructToHclTerraform, true)(struct!.vlanList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSpanningTreeModeMstpInstanceListVlanListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSpanningTreeModeMstpInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSpanningTreeModeMstpInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceStart = this._instanceStart;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vlanList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanList = this._vlanList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSpanningTreeModeMstpInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceStart = undefined;
      this._priority = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._vlanList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceStart = value.instanceStart;
      this._priority = value.priority;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._vlanList.internalValue = value.vlanList;
    }
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
  private _vlanList = new NetworkSpanningTreeModeMstpInstanceListVlanListStructList(this, "vlan_list", false);
  public get vlanList() {
    return this._vlanList;
  }
  public putVlanList(value: NetworkSpanningTreeModeMstpInstanceListVlanListStruct[] | cdktf.IResolvable) {
    this._vlanList.internalValue = value;
  }
  public resetVlanList() {
    this._vlanList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanListInput() {
    return this._vlanList.internalValue;
  }
}

export class NetworkSpanningTreeModeMstpInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkSpanningTreeModeMstpInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkSpanningTreeModeMstpInstanceListStructOutputReference {
    return new NetworkSpanningTreeModeMstpInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSpanningTreeModeMstpRevisionCfg {
  /**
  * Set MSTP revision name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#name NetworkSpanningTreeModeMstp#name}
  */
  readonly name?: string;
  /**
  * Set MSTP revision level and name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#revision NetworkSpanningTreeModeMstp#revision}
  */
  readonly revision?: number;
}

export function networkSpanningTreeModeMstpRevisionCfgToTerraform(struct?: NetworkSpanningTreeModeMstpRevisionCfgOutputReference | NetworkSpanningTreeModeMstpRevisionCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}


export function networkSpanningTreeModeMstpRevisionCfgToHclTerraform(struct?: NetworkSpanningTreeModeMstpRevisionCfgOutputReference | NetworkSpanningTreeModeMstpRevisionCfg): any {
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
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSpanningTreeModeMstpRevisionCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSpanningTreeModeMstpRevisionCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSpanningTreeModeMstpRevisionCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._revision = value.revision;
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

  // revision - computed: false, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp thunder_network_spanning_tree_mode_mstp}
*/
export class NetworkSpanningTreeModeMstp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_spanning_tree_mode_mstp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSpanningTreeModeMstp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSpanningTreeModeMstp to import
  * @param importFromId The id of the existing NetworkSpanningTreeModeMstp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSpanningTreeModeMstp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_spanning_tree_mode_mstp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_spanning_tree_mode_mstp thunder_network_spanning_tree_mode_mstp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSpanningTreeModeMstpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkSpanningTreeModeMstpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_spanning_tree_mode_mstp',
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
    this._action = config.action;
    this._id = config.id;
    this._priority = config.priority;
    this._uuid = config.uuid;
    this._instanceList.internalValue = config.instanceList;
    this._revisionCfg.internalValue = config.revisionCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: number; 
  public get action() {
    return this.getNumberAttribute('action');
  }
  public set action(value: number) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new NetworkSpanningTreeModeMstpInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: NetworkSpanningTreeModeMstpInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // revision_cfg - computed: false, optional: true, required: false
  private _revisionCfg = new NetworkSpanningTreeModeMstpRevisionCfgOutputReference(this, "revision_cfg");
  public get revisionCfg() {
    return this._revisionCfg;
  }
  public putRevisionCfg(value: NetworkSpanningTreeModeMstpRevisionCfg) {
    this._revisionCfg.internalValue = value;
  }
  public resetRevisionCfg() {
    this._revisionCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionCfgInput() {
    return this._revisionCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.numberToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      uuid: cdktf.stringToTerraform(this._uuid),
      instance_list: cdktf.listMapper(networkSpanningTreeModeMstpInstanceListStructToTerraform, true)(this._instanceList.internalValue),
      revision_cfg: networkSpanningTreeModeMstpRevisionCfgToTerraform(this._revisionCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.numberToHclTerraform(this._action),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_list: {
        value: cdktf.listMapperHcl(networkSpanningTreeModeMstpInstanceListStructToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSpanningTreeModeMstpInstanceListStructList",
      },
      revision_cfg: {
        value: networkSpanningTreeModeMstpRevisionCfgToHclTerraform(this._revisionCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSpanningTreeModeMstpRevisionCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
