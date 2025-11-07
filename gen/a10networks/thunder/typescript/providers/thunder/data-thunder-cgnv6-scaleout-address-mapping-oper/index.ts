// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6ScaleoutAddressMappingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#id DataThunderCgnv6ScaleoutAddressMappingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#oper DataThunderCgnv6ScaleoutAddressMappingOper#oper}
  */
  readonly oper?: DataThunderCgnv6ScaleoutAddressMappingOperOper;
}
export interface DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#end_nat_ip DataThunderCgnv6ScaleoutAddressMappingOper#end_nat_ip}
  */
  readonly endNatIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#start_nat_ip DataThunderCgnv6ScaleoutAddressMappingOper#start_nat_ip}
  */
  readonly startNatIp?: string;
}

export function dataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructToTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_nat_ip: cdktf.stringToTerraform(struct!.endNatIp),
    start_nat_ip: cdktf.stringToTerraform(struct!.startNatIp),
  }
}


export function dataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructToHclTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.endNatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.startNatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endNatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endNatIp = this._endNatIp;
    }
    if (this._startNatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startNatIp = this._startNatIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endNatIp = undefined;
      this._startNatIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endNatIp = value.endNatIp;
      this._startNatIp = value.startNatIp;
    }
  }

  // end_nat_ip - computed: false, optional: true, required: false
  private _endNatIp?: string; 
  public get endNatIp() {
    return this.getStringAttribute('end_nat_ip');
  }
  public set endNatIp(value: string) {
    this._endNatIp = value;
  }
  public resetEndNatIp() {
    this._endNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endNatIpInput() {
    return this._endNatIp;
  }

  // start_nat_ip - computed: false, optional: true, required: false
  private _startNatIp?: string; 
  public get startNatIp() {
    return this.getStringAttribute('start_nat_ip');
  }
  public set startNatIp(value: string) {
    this._startNatIp = value;
  }
  public resetStartNatIp() {
    this._startNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startNatIpInput() {
    return this._startNatIp;
  }
}

export class DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructOutputReference {
    return new DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ScaleoutAddressMappingOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#active_node DataThunderCgnv6ScaleoutAddressMappingOper#active_node}
  */
  readonly activeNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#ip DataThunderCgnv6ScaleoutAddressMappingOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#ipv6 DataThunderCgnv6ScaleoutAddressMappingOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#nat_ip DataThunderCgnv6ScaleoutAddressMappingOper#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#nat_pool DataThunderCgnv6ScaleoutAddressMappingOper#nat_pool}
  */
  readonly natPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#standby_node DataThunderCgnv6ScaleoutAddressMappingOper#standby_node}
  */
  readonly standbyNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#user_group DataThunderCgnv6ScaleoutAddressMappingOper#user_group}
  */
  readonly userGroup?: number;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#ip_list DataThunderCgnv6ScaleoutAddressMappingOper#ip_list}
  */
  readonly ipList?: DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6ScaleoutAddressMappingOperOperToTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingOperOperOutputReference | DataThunderCgnv6ScaleoutAddressMappingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_node: cdktf.numberToTerraform(struct!.activeNode),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    standby_node: cdktf.numberToTerraform(struct!.standbyNode),
    user_group: cdktf.numberToTerraform(struct!.userGroup),
    ip_list: cdktf.listMapper(dataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructToTerraform, true)(struct!.ipList),
  }
}


export function dataThunderCgnv6ScaleoutAddressMappingOperOperToHclTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingOperOperOutputReference | DataThunderCgnv6ScaleoutAddressMappingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_node: {
      value: cdktf.numberToHclTerraform(struct!.activeNode),
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
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_node: {
      value: cdktf.numberToHclTerraform(struct!.standbyNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group: {
      value: cdktf.numberToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ScaleoutAddressMappingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ScaleoutAddressMappingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNode = this._activeNode;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._standbyNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyNode = this._standbyNode;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ScaleoutAddressMappingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeNode = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._natIp = undefined;
      this._natPool = undefined;
      this._standbyNode = undefined;
      this._userGroup = undefined;
      this._ipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeNode = value.activeNode;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._natIp = value.natIp;
      this._natPool = value.natPool;
      this._standbyNode = value.standbyNode;
      this._userGroup = value.userGroup;
      this._ipList.internalValue = value.ipList;
    }
  }

  // active_node - computed: false, optional: true, required: false
  private _activeNode?: number; 
  public get activeNode() {
    return this.getNumberAttribute('active_node');
  }
  public set activeNode(value: number) {
    this._activeNode = value;
  }
  public resetActiveNode() {
    this._activeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodeInput() {
    return this._activeNode;
  }

  // ip - computed: false, optional: true, required: false
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // nat_ip - computed: false, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
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

  // standby_node - computed: false, optional: true, required: false
  private _standbyNode?: number; 
  public get standbyNode() {
    return this.getNumberAttribute('standby_node');
  }
  public set standbyNode(value: number) {
    this._standbyNode = value;
  }
  public resetStandbyNode() {
    this._standbyNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNodeInput() {
    return this._standbyNode;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: number; 
  public get userGroup() {
    return this.getNumberAttribute('user_group');
  }
  public set userGroup(value: number) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: DataThunderCgnv6ScaleoutAddressMappingOperOperIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper thunder_cgnv6_scaleout_address_mapping_oper}
*/
export class DataThunderCgnv6ScaleoutAddressMappingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_scaleout_address_mapping_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6ScaleoutAddressMappingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6ScaleoutAddressMappingOper to import
  * @param importFromId The id of the existing DataThunderCgnv6ScaleoutAddressMappingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6ScaleoutAddressMappingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_scaleout_address_mapping_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_scaleout_address_mapping_oper thunder_cgnv6_scaleout_address_mapping_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6ScaleoutAddressMappingOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6ScaleoutAddressMappingOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_scaleout_address_mapping_oper',
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
  private _oper = new DataThunderCgnv6ScaleoutAddressMappingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6ScaleoutAddressMappingOperOper) {
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
      oper: dataThunderCgnv6ScaleoutAddressMappingOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6ScaleoutAddressMappingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ScaleoutAddressMappingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
