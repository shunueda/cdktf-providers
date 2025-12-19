// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityZbarTruplesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#id DataThunderVisibilityZbarTruplesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#oper DataThunderVisibilityZbarTruplesOper#oper}
  */
  readonly oper?: DataThunderVisibilityZbarTruplesOperOper;
}
export interface DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#second DataThunderVisibilityZbarTruplesOper#second}
  */
  readonly second?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#value DataThunderVisibilityZbarTruplesOper#value}
  */
  readonly value?: number;
}

export function dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructToTerraform(struct?: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    second: cdktf.stringToTerraform(struct!.second),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructToHclTerraform(struct?: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    second: {
      value: cdktf.stringToHclTerraform(struct!.second),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._second !== undefined) {
      hasAnyValues = true;
      internalValueResult.second = this._second;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._second = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._second = value.second;
      this._value = value.value;
    }
  }

  // second - computed: false, optional: true, required: false
  private _second?: string; 
  public get second() {
    return this.getStringAttribute('second');
  }
  public set second(value: string) {
    this._second = value;
  }
  public resetSecond() {
    this._second = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondInput() {
    return this._second;
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
}

export class DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructOutputReference {
    return new DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#ind_band_id DataThunderVisibilityZbarTruplesOper#ind_band_id}
  */
  readonly indBandId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#ind_name DataThunderVisibilityZbarTruplesOper#ind_name}
  */
  readonly indName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#ind_total_count DataThunderVisibilityZbarTruplesOper#ind_total_count}
  */
  readonly indTotalCount?: number;
  /**
  * zbar_ind_sec_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#zbar_ind_sec_list DataThunderVisibilityZbarTruplesOper#zbar_ind_sec_list}
  */
  readonly zbarIndSecList?: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructToTerraform(struct?: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ind_band_id: cdktf.numberToTerraform(struct!.indBandId),
    ind_name: cdktf.stringToTerraform(struct!.indName),
    ind_total_count: cdktf.numberToTerraform(struct!.indTotalCount),
    zbar_ind_sec_list: cdktf.listMapper(dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructToTerraform, true)(struct!.zbarIndSecList),
  }
}


export function dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructToHclTerraform(struct?: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ind_band_id: {
      value: cdktf.numberToHclTerraform(struct!.indBandId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    zbar_ind_sec_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructToHclTerraform, true)(struct!.zbarIndSecList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indBandId !== undefined) {
      hasAnyValues = true;
      internalValueResult.indBandId = this._indBandId;
    }
    if (this._indName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indName = this._indName;
    }
    if (this._indTotalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.indTotalCount = this._indTotalCount;
    }
    if (this._zbarIndSecList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zbarIndSecList = this._zbarIndSecList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indBandId = undefined;
      this._indName = undefined;
      this._indTotalCount = undefined;
      this._zbarIndSecList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indBandId = value.indBandId;
      this._indName = value.indName;
      this._indTotalCount = value.indTotalCount;
      this._zbarIndSecList.internalValue = value.zbarIndSecList;
    }
  }

  // ind_band_id - computed: false, optional: true, required: false
  private _indBandId?: number; 
  public get indBandId() {
    return this.getNumberAttribute('ind_band_id');
  }
  public set indBandId(value: number) {
    this._indBandId = value;
  }
  public resetIndBandId() {
    this._indBandId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indBandIdInput() {
    return this._indBandId;
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

  // zbar_ind_sec_list - computed: false, optional: true, required: false
  private _zbarIndSecList = new DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStructList(this, "zbar_ind_sec_list", false);
  public get zbarIndSecList() {
    return this._zbarIndSecList;
  }
  public putZbarIndSecList(value: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListZbarIndSecListStruct[] | cdktf.IResolvable) {
    this._zbarIndSecList.internalValue = value;
  }
  public resetZbarIndSecList() {
    this._zbarIndSecList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarIndSecListInput() {
    return this._zbarIndSecList.internalValue;
  }
}

export class DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructOutputReference {
    return new DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityZbarTruplesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#dest_ipv4_addr DataThunderVisibilityZbarTruplesOper#dest_ipv4_addr}
  */
  readonly destIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#dest_ipv6_addr DataThunderVisibilityZbarTruplesOper#dest_ipv6_addr}
  */
  readonly destIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#phase DataThunderVisibilityZbarTruplesOper#phase}
  */
  readonly phase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#port DataThunderVisibilityZbarTruplesOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#protocol DataThunderVisibilityZbarTruplesOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#src_ipv4_addr DataThunderVisibilityZbarTruplesOper#src_ipv4_addr}
  */
  readonly srcIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#src_ipv6_addr DataThunderVisibilityZbarTruplesOper#src_ipv6_addr}
  */
  readonly srcIpv6Addr?: string;
  /**
  * zbar_multi_ind_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#zbar_multi_ind_list DataThunderVisibilityZbarTruplesOper#zbar_multi_ind_list}
  */
  readonly zbarMultiIndList?: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityZbarTruplesOperOperToTerraform(struct?: DataThunderVisibilityZbarTruplesOperOperOutputReference | DataThunderVisibilityZbarTruplesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ipv4_addr: cdktf.stringToTerraform(struct!.destIpv4Addr),
    dest_ipv6_addr: cdktf.stringToTerraform(struct!.destIpv6Addr),
    phase: cdktf.stringToTerraform(struct!.phase),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_ipv4_addr: cdktf.stringToTerraform(struct!.srcIpv4Addr),
    src_ipv6_addr: cdktf.stringToTerraform(struct!.srcIpv6Addr),
    zbar_multi_ind_list: cdktf.listMapper(dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructToTerraform, true)(struct!.zbarMultiIndList),
  }
}


export function dataThunderVisibilityZbarTruplesOperOperToHclTerraform(struct?: DataThunderVisibilityZbarTruplesOperOperOutputReference | DataThunderVisibilityZbarTruplesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.destIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.destIpv6Addr),
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
    src_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zbar_multi_ind_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructToHclTerraform, true)(struct!.zbarMultiIndList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityZbarTruplesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityZbarTruplesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpv4Addr = this._destIpv4Addr;
    }
    if (this._destIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpv6Addr = this._destIpv6Addr;
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
    if (this._srcIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv4Addr = this._srcIpv4Addr;
    }
    if (this._srcIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6Addr = this._srcIpv6Addr;
    }
    if (this._zbarMultiIndList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zbarMultiIndList = this._zbarMultiIndList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityZbarTruplesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destIpv4Addr = undefined;
      this._destIpv6Addr = undefined;
      this._phase = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._srcIpv4Addr = undefined;
      this._srcIpv6Addr = undefined;
      this._zbarMultiIndList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destIpv4Addr = value.destIpv4Addr;
      this._destIpv6Addr = value.destIpv6Addr;
      this._phase = value.phase;
      this._port = value.port;
      this._protocol = value.protocol;
      this._srcIpv4Addr = value.srcIpv4Addr;
      this._srcIpv6Addr = value.srcIpv6Addr;
      this._zbarMultiIndList.internalValue = value.zbarMultiIndList;
    }
  }

  // dest_ipv4_addr - computed: false, optional: true, required: false
  private _destIpv4Addr?: string; 
  public get destIpv4Addr() {
    return this.getStringAttribute('dest_ipv4_addr');
  }
  public set destIpv4Addr(value: string) {
    this._destIpv4Addr = value;
  }
  public resetDestIpv4Addr() {
    this._destIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv4AddrInput() {
    return this._destIpv4Addr;
  }

  // dest_ipv6_addr - computed: false, optional: true, required: false
  private _destIpv6Addr?: string; 
  public get destIpv6Addr() {
    return this.getStringAttribute('dest_ipv6_addr');
  }
  public set destIpv6Addr(value: string) {
    this._destIpv6Addr = value;
  }
  public resetDestIpv6Addr() {
    this._destIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6AddrInput() {
    return this._destIpv6Addr;
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

  // src_ipv4_addr - computed: false, optional: true, required: false
  private _srcIpv4Addr?: string; 
  public get srcIpv4Addr() {
    return this.getStringAttribute('src_ipv4_addr');
  }
  public set srcIpv4Addr(value: string) {
    this._srcIpv4Addr = value;
  }
  public resetSrcIpv4Addr() {
    this._srcIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4AddrInput() {
    return this._srcIpv4Addr;
  }

  // src_ipv6_addr - computed: false, optional: true, required: false
  private _srcIpv6Addr?: string; 
  public get srcIpv6Addr() {
    return this.getStringAttribute('src_ipv6_addr');
  }
  public set srcIpv6Addr(value: string) {
    this._srcIpv6Addr = value;
  }
  public resetSrcIpv6Addr() {
    this._srcIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6AddrInput() {
    return this._srcIpv6Addr;
  }

  // zbar_multi_ind_list - computed: false, optional: true, required: false
  private _zbarMultiIndList = new DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStructList(this, "zbar_multi_ind_list", false);
  public get zbarMultiIndList() {
    return this._zbarMultiIndList;
  }
  public putZbarMultiIndList(value: DataThunderVisibilityZbarTruplesOperOperZbarMultiIndListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper thunder_visibility_zbar_truples_oper}
*/
export class DataThunderVisibilityZbarTruplesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_zbar_truples_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityZbarTruplesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityZbarTruplesOper to import
  * @param importFromId The id of the existing DataThunderVisibilityZbarTruplesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityZbarTruplesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_zbar_truples_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_zbar_truples_oper thunder_visibility_zbar_truples_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityZbarTruplesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityZbarTruplesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_zbar_truples_oper',
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
  private _oper = new DataThunderVisibilityZbarTruplesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityZbarTruplesOperOper) {
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
      oper: dataThunderVisibilityZbarTruplesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityZbarTruplesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityZbarTruplesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
