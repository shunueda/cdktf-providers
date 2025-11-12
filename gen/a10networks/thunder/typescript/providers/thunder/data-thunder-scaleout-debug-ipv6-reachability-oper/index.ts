// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugIpv6ReachabilityOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#id DataThunderScaleoutDebugIpv6ReachabilityOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#oper DataThunderScaleoutDebugIpv6ReachabilityOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugIpv6ReachabilityOperOper;
}
export interface DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#ipv6_addr DataThunderScaleoutDebugIpv6ReachabilityOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#mac DataThunderScaleoutDebugIpv6ReachabilityOper#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#name DataThunderScaleoutDebugIpv6ReachabilityOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#node DataThunderScaleoutDebugIpv6ReachabilityOper#node}
  */
  readonly nodeAttribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#prefix_len DataThunderScaleoutDebugIpv6ReachabilityOper#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#real_port DataThunderScaleoutDebugIpv6ReachabilityOper#real_port}
  */
  readonly realPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#vlan_id DataThunderScaleoutDebugIpv6ReachabilityOper#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#vnp_id DataThunderScaleoutDebugIpv6ReachabilityOper#vnp_id}
  */
  readonly vnpId?: number;
}

export function dataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructToTerraform(struct?: DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    node: cdktf.numberToTerraform(struct!.nodeAttribute),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
    real_port: cdktf.numberToTerraform(struct!.realPort),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vnp_id: cdktf.numberToTerraform(struct!.vnpId),
  }
}


export function dataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructToHclTerraform(struct?: DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.numberToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_port: {
      value: cdktf.numberToHclTerraform(struct!.realPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vnp_id: {
      value: cdktf.numberToHclTerraform(struct!.vnpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    if (this._realPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPort = this._realPort;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vnpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnpId = this._vnpId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Addr = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._node = undefined;
      this._prefixLen = undefined;
      this._realPort = undefined;
      this._vlanId = undefined;
      this._vnpId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Addr = value.ipv6Addr;
      this._mac = value.mac;
      this._name = value.name;
      this._node = value.nodeAttribute;
      this._prefixLen = value.prefixLen;
      this._realPort = value.realPort;
      this._vlanId = value.vlanId;
      this._vnpId = value.vnpId;
    }
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // node - computed: false, optional: true, required: false
  private _node?: number; 
  public get nodeAttribute() {
    return this.getNumberAttribute('node');
  }
  public set nodeAttribute(value: number) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // prefix_len - computed: false, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
  }

  // real_port - computed: false, optional: true, required: false
  private _realPort?: number; 
  public get realPort() {
    return this.getNumberAttribute('real_port');
  }
  public set realPort(value: number) {
    this._realPort = value;
  }
  public resetRealPort() {
    this._realPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortInput() {
    return this._realPort;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vnp_id - computed: false, optional: true, required: false
  private _vnpId?: number; 
  public get vnpId() {
    return this.getNumberAttribute('vnp_id');
  }
  public set vnpId(value: number) {
    this._vnpId = value;
  }
  public resetVnpId() {
    this._vnpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnpIdInput() {
    return this._vnpId;
  }
}

export class DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructOutputReference {
    return new DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugIpv6ReachabilityOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#part_name DataThunderScaleoutDebugIpv6ReachabilityOper#part_name}
  */
  readonly partName?: string;
  /**
  * scaleout_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#scaleout_ipv6_list DataThunderScaleoutDebugIpv6ReachabilityOper#scaleout_ipv6_list}
  */
  readonly scaleoutIpv6List?: DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugIpv6ReachabilityOperOperToTerraform(struct?: DataThunderScaleoutDebugIpv6ReachabilityOperOperOutputReference | DataThunderScaleoutDebugIpv6ReachabilityOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    part_name: cdktf.stringToTerraform(struct!.partName),
    scaleout_ipv6_list: cdktf.listMapper(dataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructToTerraform, true)(struct!.scaleoutIpv6List),
  }
}


export function dataThunderScaleoutDebugIpv6ReachabilityOperOperToHclTerraform(struct?: DataThunderScaleoutDebugIpv6ReachabilityOperOperOutputReference | DataThunderScaleoutDebugIpv6ReachabilityOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    part_name: {
      value: cdktf.stringToHclTerraform(struct!.partName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaleout_ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructToHclTerraform, true)(struct!.scaleoutIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugIpv6ReachabilityOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugIpv6ReachabilityOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partName = this._partName;
    }
    if (this._scaleoutIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutIpv6List = this._scaleoutIpv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugIpv6ReachabilityOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partName = undefined;
      this._scaleoutIpv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partName = value.partName;
      this._scaleoutIpv6List.internalValue = value.scaleoutIpv6List;
    }
  }

  // part_name - computed: false, optional: true, required: false
  private _partName?: string; 
  public get partName() {
    return this.getStringAttribute('part_name');
  }
  public set partName(value: string) {
    this._partName = value;
  }
  public resetPartName() {
    this._partName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partNameInput() {
    return this._partName;
  }

  // scaleout_ipv6_list - computed: false, optional: true, required: false
  private _scaleoutIpv6List = new DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStructList(this, "scaleout_ipv6_list", false);
  public get scaleoutIpv6List() {
    return this._scaleoutIpv6List;
  }
  public putScaleoutIpv6List(value: DataThunderScaleoutDebugIpv6ReachabilityOperOperScaleoutIpv6ListStruct[] | cdktf.IResolvable) {
    this._scaleoutIpv6List.internalValue = value;
  }
  public resetScaleoutIpv6List() {
    this._scaleoutIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutIpv6ListInput() {
    return this._scaleoutIpv6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper thunder_scaleout_debug_ipv6_reachability_oper}
*/
export class DataThunderScaleoutDebugIpv6ReachabilityOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_ipv6_reachability_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugIpv6ReachabilityOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugIpv6ReachabilityOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugIpv6ReachabilityOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugIpv6ReachabilityOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_ipv6_reachability_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_ipv6_reachability_oper thunder_scaleout_debug_ipv6_reachability_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugIpv6ReachabilityOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugIpv6ReachabilityOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_ipv6_reachability_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderScaleoutDebugIpv6ReachabilityOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugIpv6ReachabilityOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderScaleoutDebugIpv6ReachabilityOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderScaleoutDebugIpv6ReachabilityOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugIpv6ReachabilityOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
