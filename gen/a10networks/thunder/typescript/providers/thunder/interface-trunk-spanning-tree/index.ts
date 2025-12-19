// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTrunkSpanningTreeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable admin-edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#admin_edge InterfaceTrunkSpanningTreeA#admin_edge}
  */
  readonly adminEdge?: number;
  /**
  * Enable auto-edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#auto_edge InterfaceTrunkSpanningTreeA#auto_edge}
  */
  readonly autoEdge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#id InterfaceTrunkSpanningTreeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#ifnum InterfaceTrunkSpanningTreeA#ifnum}
  */
  readonly ifnum: string;
  /**
  * Path cost (Limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#path_cost InterfaceTrunkSpanningTreeA#path_cost}
  */
  readonly pathCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#uuid InterfaceTrunkSpanningTreeA#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#instance_list InterfaceTrunkSpanningTreeA#instance_list}
  */
  readonly instanceList?: InterfaceTrunkSpanningTreeInstanceListStructA[] | cdktf.IResolvable;
}
export interface InterfaceTrunkSpanningTreeInstanceListStructA {
  /**
  * Instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#instance_start InterfaceTrunkSpanningTreeA#instance_start}
  */
  readonly instanceStart?: number;
  /**
  * Path cost (Limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#mstp_path_cost InterfaceTrunkSpanningTreeA#mstp_path_cost}
  */
  readonly mstpPathCost?: number;
}

export function interfaceTrunkSpanningTreeInstanceListStructAToTerraform(struct?: InterfaceTrunkSpanningTreeInstanceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_start: cdktf.numberToTerraform(struct!.instanceStart),
    mstp_path_cost: cdktf.numberToTerraform(struct!.mstpPathCost),
  }
}


export function interfaceTrunkSpanningTreeInstanceListStructAToHclTerraform(struct?: InterfaceTrunkSpanningTreeInstanceListStructA | cdktf.IResolvable): any {
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
    mstp_path_cost: {
      value: cdktf.numberToHclTerraform(struct!.mstpPathCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkSpanningTreeInstanceListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkSpanningTreeInstanceListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceStart = this._instanceStart;
    }
    if (this._mstpPathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.mstpPathCost = this._mstpPathCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkSpanningTreeInstanceListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceStart = undefined;
      this._mstpPathCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceStart = value.instanceStart;
      this._mstpPathCost = value.mstpPathCost;
    }
  }

  // instance_start - computed: false, optional: true, required: false
  private _instanceStart?: number; 
  public get instanceStart() {
    return this.getNumberAttribute('instance_start');
  }
  public set instanceStart(value: number) {
    this._instanceStart = value;
  }
  public resetInstanceStart() {
    this._instanceStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStartInput() {
    return this._instanceStart;
  }

  // mstp_path_cost - computed: false, optional: true, required: false
  private _mstpPathCost?: number; 
  public get mstpPathCost() {
    return this.getNumberAttribute('mstp_path_cost');
  }
  public set mstpPathCost(value: number) {
    this._mstpPathCost = value;
  }
  public resetMstpPathCost() {
    this._mstpPathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mstpPathCostInput() {
    return this._mstpPathCost;
  }
}

export class InterfaceTrunkSpanningTreeInstanceListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkSpanningTreeInstanceListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkSpanningTreeInstanceListStructAOutputReference {
    return new InterfaceTrunkSpanningTreeInstanceListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree thunder_interface_trunk_spanning_tree}
*/
export class InterfaceTrunkSpanningTreeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_trunk_spanning_tree";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTrunkSpanningTreeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTrunkSpanningTreeA to import
  * @param importFromId The id of the existing InterfaceTrunkSpanningTreeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTrunkSpanningTreeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_trunk_spanning_tree", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_spanning_tree thunder_interface_trunk_spanning_tree} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTrunkSpanningTreeAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTrunkSpanningTreeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_trunk_spanning_tree',
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
    this._adminEdge = config.adminEdge;
    this._autoEdge = config.autoEdge;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._pathCost = config.pathCost;
    this._uuid = config.uuid;
    this._instanceList.internalValue = config.instanceList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_edge - computed: false, optional: true, required: false
  private _adminEdge?: number; 
  public get adminEdge() {
    return this.getNumberAttribute('admin_edge');
  }
  public set adminEdge(value: number) {
    this._adminEdge = value;
  }
  public resetAdminEdge() {
    this._adminEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEdgeInput() {
    return this._adminEdge;
  }

  // auto_edge - computed: false, optional: true, required: false
  private _autoEdge?: number; 
  public get autoEdge() {
    return this.getNumberAttribute('auto_edge');
  }
  public set autoEdge(value: number) {
    this._autoEdge = value;
  }
  public resetAutoEdge() {
    this._autoEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEdgeInput() {
    return this._autoEdge;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // path_cost - computed: false, optional: true, required: false
  private _pathCost?: number; 
  public get pathCost() {
    return this.getNumberAttribute('path_cost');
  }
  public set pathCost(value: number) {
    this._pathCost = value;
  }
  public resetPathCost() {
    this._pathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathCostInput() {
    return this._pathCost;
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
  private _instanceList = new InterfaceTrunkSpanningTreeInstanceListStructAList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: InterfaceTrunkSpanningTreeInstanceListStructA[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_edge: cdktf.numberToTerraform(this._adminEdge),
      auto_edge: cdktf.numberToTerraform(this._autoEdge),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      path_cost: cdktf.numberToTerraform(this._pathCost),
      uuid: cdktf.stringToTerraform(this._uuid),
      instance_list: cdktf.listMapper(interfaceTrunkSpanningTreeInstanceListStructAToTerraform, true)(this._instanceList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_edge: {
        value: cdktf.numberToHclTerraform(this._adminEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_edge: {
        value: cdktf.numberToHclTerraform(this._autoEdge),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_cost: {
        value: cdktf.numberToHclTerraform(this._pathCost),
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
        value: cdktf.listMapperHcl(interfaceTrunkSpanningTreeInstanceListStructAToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkSpanningTreeInstanceListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
