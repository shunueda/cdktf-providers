// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityZbarDestBadSourcesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#id DataThunderVisibilityZbarDestBadSourcesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#oper DataThunderVisibilityZbarDestBadSourcesOper#oper}
  */
  readonly oper?: DataThunderVisibilityZbarDestBadSourcesOperOper;
}
export interface DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#drop_cnt DataThunderVisibilityZbarDestBadSourcesOper#drop_cnt}
  */
  readonly dropCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#ind_value DataThunderVisibilityZbarDestBadSourcesOper#ind_value}
  */
  readonly indValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#src_ip DataThunderVisibilityZbarDestBadSourcesOper#src_ip}
  */
  readonly srcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#state DataThunderVisibilityZbarDestBadSourcesOper#state}
  */
  readonly state?: string;
}

export function dataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructToTerraform(struct?: DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_cnt: cdktf.numberToTerraform(struct!.dropCnt),
    ind_value: cdktf.numberToTerraform(struct!.indValue),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructToHclTerraform(struct?: DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_cnt: {
      value: cdktf.numberToHclTerraform(struct!.dropCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ind_value: {
      value: cdktf.numberToHclTerraform(struct!.indValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCnt = this._dropCnt;
    }
    if (this._indValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indValue = this._indValue;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropCnt = undefined;
      this._indValue = undefined;
      this._srcIp = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropCnt = value.dropCnt;
      this._indValue = value.indValue;
      this._srcIp = value.srcIp;
      this._state = value.state;
    }
  }

  // drop_cnt - computed: false, optional: true, required: false
  private _dropCnt?: number; 
  public get dropCnt() {
    return this.getNumberAttribute('drop_cnt');
  }
  public set dropCnt(value: number) {
    this._dropCnt = value;
  }
  public resetDropCnt() {
    this._dropCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCntInput() {
    return this._dropCnt;
  }

  // ind_value - computed: false, optional: true, required: false
  private _indValue?: number; 
  public get indValue() {
    return this.getNumberAttribute('ind_value');
  }
  public set indValue(value: number) {
    this._indValue = value;
  }
  public resetIndValue() {
    this._indValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indValueInput() {
    return this._indValue;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructOutputReference {
    return new DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityZbarDestBadSourcesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#ipv4_addr DataThunderVisibilityZbarDestBadSourcesOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#ipv6_addr DataThunderVisibilityZbarDestBadSourcesOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#port DataThunderVisibilityZbarDestBadSourcesOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#protocol DataThunderVisibilityZbarDestBadSourcesOper#protocol}
  */
  readonly protocol?: string;
  /**
  * multi_bad_src_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#multi_bad_src_list DataThunderVisibilityZbarDestBadSourcesOper#multi_bad_src_list}
  */
  readonly multiBadSrcList?: DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityZbarDestBadSourcesOperOperToTerraform(struct?: DataThunderVisibilityZbarDestBadSourcesOperOperOutputReference | DataThunderVisibilityZbarDestBadSourcesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    multi_bad_src_list: cdktf.listMapper(dataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructToTerraform, true)(struct!.multiBadSrcList),
  }
}


export function dataThunderVisibilityZbarDestBadSourcesOperOperToHclTerraform(struct?: DataThunderVisibilityZbarDestBadSourcesOperOperOutputReference | DataThunderVisibilityZbarDestBadSourcesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_bad_src_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructToHclTerraform, true)(struct!.multiBadSrcList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestBadSourcesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityZbarDestBadSourcesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._multiBadSrcList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiBadSrcList = this._multiBadSrcList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarDestBadSourcesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._multiBadSrcList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._port = value.port;
      this._protocol = value.protocol;
      this._multiBadSrcList.internalValue = value.multiBadSrcList;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // multi_bad_src_list - computed: false, optional: true, required: false
  private _multiBadSrcList = new DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStructList(this, "multi_bad_src_list", false);
  public get multiBadSrcList() {
    return this._multiBadSrcList;
  }
  public putMultiBadSrcList(value: DataThunderVisibilityZbarDestBadSourcesOperOperMultiBadSrcListStruct[] | cdktf.IResolvable) {
    this._multiBadSrcList.internalValue = value;
  }
  public resetMultiBadSrcList() {
    this._multiBadSrcList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiBadSrcListInput() {
    return this._multiBadSrcList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper thunder_visibility_zbar_dest_bad_sources_oper}
*/
export class DataThunderVisibilityZbarDestBadSourcesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_zbar_dest_bad_sources_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityZbarDestBadSourcesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityZbarDestBadSourcesOper to import
  * @param importFromId The id of the existing DataThunderVisibilityZbarDestBadSourcesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityZbarDestBadSourcesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_zbar_dest_bad_sources_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_bad_sources_oper thunder_visibility_zbar_dest_bad_sources_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityZbarDestBadSourcesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityZbarDestBadSourcesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_zbar_dest_bad_sources_oper',
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
  private _oper = new DataThunderVisibilityZbarDestBadSourcesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityZbarDestBadSourcesOperOper) {
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
      oper: dataThunderVisibilityZbarDestBadSourcesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityZbarDestBadSourcesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityZbarDestBadSourcesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
