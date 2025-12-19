// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityZbarDestOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#id DataThunderVisibilityZbarDestOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * bad_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#bad_sources DataThunderVisibilityZbarDestOper#bad_sources}
  */
  readonly badSources?: DataThunderVisibilityZbarDestOperBadSources;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#oper DataThunderVisibilityZbarDestOper#oper}
  */
  readonly oper?: DataThunderVisibilityZbarDestOperOper;
}
export interface DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#drop_cnt DataThunderVisibilityZbarDestOper#drop_cnt}
  */
  readonly dropCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#ind_value DataThunderVisibilityZbarDestOper#ind_value}
  */
  readonly indValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#src_ip DataThunderVisibilityZbarDestOper#src_ip}
  */
  readonly srcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#state DataThunderVisibilityZbarDestOper#state}
  */
  readonly state?: string;
}

export function dataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructToTerraform(struct?: DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct | cdktf.IResolvable): any {
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


export function dataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructToHclTerraform(struct?: DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct | cdktf.IResolvable): any {
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

export class DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructOutputReference {
    return new DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityZbarDestOperBadSourcesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#ipv4_addr DataThunderVisibilityZbarDestOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#ipv6_addr DataThunderVisibilityZbarDestOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#port DataThunderVisibilityZbarDestOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#protocol DataThunderVisibilityZbarDestOper#protocol}
  */
  readonly protocol?: string;
  /**
  * multi_bad_src_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#multi_bad_src_list DataThunderVisibilityZbarDestOper#multi_bad_src_list}
  */
  readonly multiBadSrcList?: DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityZbarDestOperBadSourcesOperToTerraform(struct?: DataThunderVisibilityZbarDestOperBadSourcesOperOutputReference | DataThunderVisibilityZbarDestOperBadSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    multi_bad_src_list: cdktf.listMapper(dataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructToTerraform, true)(struct!.multiBadSrcList),
  }
}


export function dataThunderVisibilityZbarDestOperBadSourcesOperToHclTerraform(struct?: DataThunderVisibilityZbarDestOperBadSourcesOperOutputReference | DataThunderVisibilityZbarDestOperBadSourcesOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructToHclTerraform, true)(struct!.multiBadSrcList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestOperBadSourcesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityZbarDestOperBadSourcesOper | undefined {
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

  public set internalValue(value: DataThunderVisibilityZbarDestOperBadSourcesOper | undefined) {
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
  private _multiBadSrcList = new DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStructList(this, "multi_bad_src_list", false);
  public get multiBadSrcList() {
    return this._multiBadSrcList;
  }
  public putMultiBadSrcList(value: DataThunderVisibilityZbarDestOperBadSourcesOperMultiBadSrcListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderVisibilityZbarDestOperBadSources {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#oper DataThunderVisibilityZbarDestOper#oper}
  */
  readonly oper?: DataThunderVisibilityZbarDestOperBadSourcesOper;
}

export function dataThunderVisibilityZbarDestOperBadSourcesToTerraform(struct?: DataThunderVisibilityZbarDestOperBadSourcesOutputReference | DataThunderVisibilityZbarDestOperBadSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVisibilityZbarDestOperBadSourcesOperToTerraform(struct!.oper),
  }
}


export function dataThunderVisibilityZbarDestOperBadSourcesToHclTerraform(struct?: DataThunderVisibilityZbarDestOperBadSourcesOutputReference | DataThunderVisibilityZbarDestOperBadSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVisibilityZbarDestOperBadSourcesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarDestOperBadSourcesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestOperBadSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityZbarDestOperBadSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarDestOperBadSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityZbarDestOperBadSourcesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityZbarDestOperBadSourcesOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#src_ind_value DataThunderVisibilityZbarDestOper#src_ind_value}
  */
  readonly srcIndValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#src_ip DataThunderVisibilityZbarDestOper#src_ip}
  */
  readonly srcIp?: string;
}

export function dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructToTerraform(struct?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ind_value: cdktf.numberToTerraform(struct!.srcIndValue),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
  }
}


export function dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructToHclTerraform(struct?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ind_value: {
      value: cdktf.numberToHclTerraform(struct!.srcIndValue),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIndValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIndValue = this._srcIndValue;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcIndValue = undefined;
      this._srcIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcIndValue = value.srcIndValue;
      this._srcIp = value.srcIp;
    }
  }

  // src_ind_value - computed: false, optional: true, required: false
  private _srcIndValue?: number; 
  public get srcIndValue() {
    return this.getNumberAttribute('src_ind_value');
  }
  public set srcIndValue(value: number) {
    this._srcIndValue = value;
  }
  public resetSrcIndValue() {
    this._srcIndValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIndValueInput() {
    return this._srcIndValue;
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
}

export class DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructOutputReference {
    return new DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#agg DataThunderVisibilityZbarDestOper#agg}
  */
  readonly agg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#avg DataThunderVisibilityZbarDestOper#avg}
  */
  readonly avg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#end DataThunderVisibilityZbarDestOper#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#slot_id DataThunderVisibilityZbarDestOper#slot_id}
  */
  readonly slotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#src_count DataThunderVisibilityZbarDestOper#src_count}
  */
  readonly srcCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#start DataThunderVisibilityZbarDestOper#start}
  */
  readonly start?: number;
  /**
  * zbar_slot_src_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#zbar_slot_src_list DataThunderVisibilityZbarDestOper#zbar_slot_src_list}
  */
  readonly zbarSlotSrcList?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructToTerraform(struct?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agg: cdktf.numberToTerraform(struct!.agg),
    avg: cdktf.numberToTerraform(struct!.avg),
    end: cdktf.numberToTerraform(struct!.end),
    slot_id: cdktf.numberToTerraform(struct!.slotId),
    src_count: cdktf.numberToTerraform(struct!.srcCount),
    start: cdktf.numberToTerraform(struct!.start),
    zbar_slot_src_list: cdktf.listMapper(dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructToTerraform, true)(struct!.zbarSlotSrcList),
  }
}


export function dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructToHclTerraform(struct?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agg: {
      value: cdktf.numberToHclTerraform(struct!.agg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avg: {
      value: cdktf.numberToHclTerraform(struct!.avg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot_id: {
      value: cdktf.numberToHclTerraform(struct!.slotId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_count: {
      value: cdktf.numberToHclTerraform(struct!.srcCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zbar_slot_src_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructToHclTerraform, true)(struct!.zbarSlotSrcList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agg !== undefined) {
      hasAnyValues = true;
      internalValueResult.agg = this._agg;
    }
    if (this._avg !== undefined) {
      hasAnyValues = true;
      internalValueResult.avg = this._avg;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._slotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotId = this._slotId;
    }
    if (this._srcCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCount = this._srcCount;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._zbarSlotSrcList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zbarSlotSrcList = this._zbarSlotSrcList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agg = undefined;
      this._avg = undefined;
      this._end = undefined;
      this._slotId = undefined;
      this._srcCount = undefined;
      this._start = undefined;
      this._zbarSlotSrcList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agg = value.agg;
      this._avg = value.avg;
      this._end = value.end;
      this._slotId = value.slotId;
      this._srcCount = value.srcCount;
      this._start = value.start;
      this._zbarSlotSrcList.internalValue = value.zbarSlotSrcList;
    }
  }

  // agg - computed: false, optional: true, required: false
  private _agg?: number; 
  public get agg() {
    return this.getNumberAttribute('agg');
  }
  public set agg(value: number) {
    this._agg = value;
  }
  public resetAgg() {
    this._agg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggInput() {
    return this._agg;
  }

  // avg - computed: false, optional: true, required: false
  private _avg?: number; 
  public get avg() {
    return this.getNumberAttribute('avg');
  }
  public set avg(value: number) {
    this._avg = value;
  }
  public resetAvg() {
    this._avg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgInput() {
    return this._avg;
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // slot_id - computed: false, optional: true, required: false
  private _slotId?: number; 
  public get slotId() {
    return this.getNumberAttribute('slot_id');
  }
  public set slotId(value: number) {
    this._slotId = value;
  }
  public resetSlotId() {
    this._slotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotIdInput() {
    return this._slotId;
  }

  // src_count - computed: false, optional: true, required: false
  private _srcCount?: number; 
  public get srcCount() {
    return this.getNumberAttribute('src_count');
  }
  public set srcCount(value: number) {
    this._srcCount = value;
  }
  public resetSrcCount() {
    this._srcCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCountInput() {
    return this._srcCount;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // zbar_slot_src_list - computed: false, optional: true, required: false
  private _zbarSlotSrcList = new DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStructList(this, "zbar_slot_src_list", false);
  public get zbarSlotSrcList() {
    return this._zbarSlotSrcList;
  }
  public putZbarSlotSrcList(value: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListZbarSlotSrcListStruct[] | cdktf.IResolvable) {
    this._zbarSlotSrcList.internalValue = value;
  }
  public resetZbarSlotSrcList() {
    this._zbarSlotSrcList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarSlotSrcListInput() {
    return this._zbarSlotSrcList.internalValue;
  }
}

export class DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructOutputReference {
    return new DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#ind_name DataThunderVisibilityZbarDestOper#ind_name}
  */
  readonly indName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#ind_total_count DataThunderVisibilityZbarDestOper#ind_total_count}
  */
  readonly indTotalCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#zbar_ind_max DataThunderVisibilityZbarDestOper#zbar_ind_max}
  */
  readonly zbarIndMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#zbar_ind_min DataThunderVisibilityZbarDestOper#zbar_ind_min}
  */
  readonly zbarIndMin?: number;
  /**
  * zbar_ind_slot_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#zbar_ind_slot_list DataThunderVisibilityZbarDestOper#zbar_ind_slot_list}
  */
  readonly zbarIndSlotList?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityZbarDestOperOperZbarMultiIndListStructToTerraform(struct?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ind_name: cdktf.stringToTerraform(struct!.indName),
    ind_total_count: cdktf.numberToTerraform(struct!.indTotalCount),
    zbar_ind_max: cdktf.numberToTerraform(struct!.zbarIndMax),
    zbar_ind_min: cdktf.numberToTerraform(struct!.zbarIndMin),
    zbar_ind_slot_list: cdktf.listMapper(dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructToTerraform, true)(struct!.zbarIndSlotList),
  }
}


export function dataThunderVisibilityZbarDestOperOperZbarMultiIndListStructToHclTerraform(struct?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ind_name: {
      value: cdktf.stringToHclTerraform(struct!.indName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ind_total_count: {
      value: cdktf.numberToHclTerraform(struct!.indTotalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zbar_ind_max: {
      value: cdktf.numberToHclTerraform(struct!.zbarIndMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zbar_ind_min: {
      value: cdktf.numberToHclTerraform(struct!.zbarIndMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zbar_ind_slot_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructToHclTerraform, true)(struct!.zbarIndSlotList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestOperOperZbarMultiIndListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indName = this._indName;
    }
    if (this._indTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.indTotalCount = this._indTotalCount;
    }
    if (this._zbarIndMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.zbarIndMax = this._zbarIndMax;
    }
    if (this._zbarIndMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.zbarIndMin = this._zbarIndMin;
    }
    if (this._zbarIndSlotList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zbarIndSlotList = this._zbarIndSlotList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indName = undefined;
      this._indTotalCount = undefined;
      this._zbarIndMax = undefined;
      this._zbarIndMin = undefined;
      this._zbarIndSlotList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indName = value.indName;
      this._indTotalCount = value.indTotalCount;
      this._zbarIndMax = value.zbarIndMax;
      this._zbarIndMin = value.zbarIndMin;
      this._zbarIndSlotList.internalValue = value.zbarIndSlotList;
    }
  }

  // ind_name - computed: false, optional: true, required: false
  private _indName?: string; 
  public get indName() {
    return this.getStringAttribute('ind_name');
  }
  public set indName(value: string) {
    this._indName = value;
  }
  public resetIndName() {
    this._indName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indNameInput() {
    return this._indName;
  }

  // ind_total_count - computed: false, optional: true, required: false
  private _indTotalCount?: number; 
  public get indTotalCount() {
    return this.getNumberAttribute('ind_total_count');
  }
  public set indTotalCount(value: number) {
    this._indTotalCount = value;
  }
  public resetIndTotalCount() {
    this._indTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indTotalCountInput() {
    return this._indTotalCount;
  }

  // zbar_ind_max - computed: false, optional: true, required: false
  private _zbarIndMax?: number; 
  public get zbarIndMax() {
    return this.getNumberAttribute('zbar_ind_max');
  }
  public set zbarIndMax(value: number) {
    this._zbarIndMax = value;
  }
  public resetZbarIndMax() {
    this._zbarIndMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarIndMaxInput() {
    return this._zbarIndMax;
  }

  // zbar_ind_min - computed: false, optional: true, required: false
  private _zbarIndMin?: number; 
  public get zbarIndMin() {
    return this.getNumberAttribute('zbar_ind_min');
  }
  public set zbarIndMin(value: number) {
    this._zbarIndMin = value;
  }
  public resetZbarIndMin() {
    this._zbarIndMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarIndMinInput() {
    return this._zbarIndMin;
  }

  // zbar_ind_slot_list - computed: false, optional: true, required: false
  private _zbarIndSlotList = new DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStructList(this, "zbar_ind_slot_list", false);
  public get zbarIndSlotList() {
    return this._zbarIndSlotList;
  }
  public putZbarIndSlotList(value: DataThunderVisibilityZbarDestOperOperZbarMultiIndListZbarIndSlotListStruct[] | cdktf.IResolvable) {
    this._zbarIndSlotList.internalValue = value;
  }
  public resetZbarIndSlotList() {
    this._zbarIndSlotList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarIndSlotListInput() {
    return this._zbarIndSlotList.internalValue;
  }
}

export class DataThunderVisibilityZbarDestOperOperZbarMultiIndListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityZbarDestOperOperZbarMultiIndListStructOutputReference {
    return new DataThunderVisibilityZbarDestOperOperZbarMultiIndListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityZbarDestOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#ipv4_addr DataThunderVisibilityZbarDestOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#ipv6_addr DataThunderVisibilityZbarDestOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#phase DataThunderVisibilityZbarDestOper#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#port DataThunderVisibilityZbarDestOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#protocol DataThunderVisibilityZbarDestOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#tuple_count DataThunderVisibilityZbarDestOper#tuple_count}
  */
  readonly tupleCount?: number;
  /**
  * zbar_multi_ind_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#zbar_multi_ind_list DataThunderVisibilityZbarDestOper#zbar_multi_ind_list}
  */
  readonly zbarMultiIndList?: DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityZbarDestOperOperToTerraform(struct?: DataThunderVisibilityZbarDestOperOperOutputReference | DataThunderVisibilityZbarDestOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    phase: cdktf.stringToTerraform(struct!.phase),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    tuple_count: cdktf.numberToTerraform(struct!.tupleCount),
    zbar_multi_ind_list: cdktf.listMapper(dataThunderVisibilityZbarDestOperOperZbarMultiIndListStructToTerraform, true)(struct!.zbarMultiIndList),
  }
}


export function dataThunderVisibilityZbarDestOperOperToHclTerraform(struct?: DataThunderVisibilityZbarDestOperOperOutputReference | DataThunderVisibilityZbarDestOperOper): any {
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
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
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
    tuple_count: {
      value: cdktf.numberToHclTerraform(struct!.tupleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zbar_multi_ind_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityZbarDestOperOperZbarMultiIndListStructToHclTerraform, true)(struct!.zbarMultiIndList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarDestOperOperZbarMultiIndListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarDestOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityZbarDestOperOper | undefined {
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
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tupleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tupleCount = this._tupleCount;
    }
    if (this._zbarMultiIndList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zbarMultiIndList = this._zbarMultiIndList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarDestOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._phase = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._tupleCount = undefined;
      this._zbarMultiIndList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._phase = value.phase;
      this._port = value.port;
      this._protocol = value.protocol;
      this._tupleCount = value.tupleCount;
      this._zbarMultiIndList.internalValue = value.zbarMultiIndList;
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

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
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

  // tuple_count - computed: false, optional: true, required: false
  private _tupleCount?: number; 
  public get tupleCount() {
    return this.getNumberAttribute('tuple_count');
  }
  public set tupleCount(value: number) {
    this._tupleCount = value;
  }
  public resetTupleCount() {
    this._tupleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tupleCountInput() {
    return this._tupleCount;
  }

  // zbar_multi_ind_list - computed: false, optional: true, required: false
  private _zbarMultiIndList = new DataThunderVisibilityZbarDestOperOperZbarMultiIndListStructList(this, "zbar_multi_ind_list", false);
  public get zbarMultiIndList() {
    return this._zbarMultiIndList;
  }
  public putZbarMultiIndList(value: DataThunderVisibilityZbarDestOperOperZbarMultiIndListStruct[] | cdktf.IResolvable) {
    this._zbarMultiIndList.internalValue = value;
  }
  public resetZbarMultiIndList() {
    this._zbarMultiIndList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarMultiIndListInput() {
    return this._zbarMultiIndList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper thunder_visibility_zbar_dest_oper}
*/
export class DataThunderVisibilityZbarDestOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_zbar_dest_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityZbarDestOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityZbarDestOper to import
  * @param importFromId The id of the existing DataThunderVisibilityZbarDestOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityZbarDestOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_zbar_dest_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_dest_oper thunder_visibility_zbar_dest_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityZbarDestOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityZbarDestOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_zbar_dest_oper',
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
    this._badSources.internalValue = config.badSources;
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

  // bad_sources - computed: false, optional: true, required: false
  private _badSources = new DataThunderVisibilityZbarDestOperBadSourcesOutputReference(this, "bad_sources");
  public get badSources() {
    return this._badSources;
  }
  public putBadSources(value: DataThunderVisibilityZbarDestOperBadSources) {
    this._badSources.internalValue = value;
  }
  public resetBadSources() {
    this._badSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSourcesInput() {
    return this._badSources.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVisibilityZbarDestOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityZbarDestOperOper) {
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
      bad_sources: dataThunderVisibilityZbarDestOperBadSourcesToTerraform(this._badSources.internalValue),
      oper: dataThunderVisibilityZbarDestOperOperToTerraform(this._oper.internalValue),
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
      bad_sources: {
        value: dataThunderVisibilityZbarDestOperBadSourcesToHclTerraform(this._badSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityZbarDestOperBadSourcesList",
      },
      oper: {
        value: dataThunderVisibilityZbarDestOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityZbarDestOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
