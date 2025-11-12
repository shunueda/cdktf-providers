// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVcsVcsSummaryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#id DataThunderVcsVcsSummaryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#oper DataThunderVcsVcsSummaryOper#oper}
  */
  readonly oper?: DataThunderVcsVcsSummaryOperOper;
}
export interface DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#floating_ipv4 DataThunderVcsVcsSummaryOper#floating_ipv4}
  */
  readonly floatingIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#floating_ipv4_mask DataThunderVcsVcsSummaryOper#floating_ipv4_mask}
  */
  readonly floatingIpv4Mask?: string;
}

export function dataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructToTerraform(struct?: DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ipv4: cdktf.stringToTerraform(struct!.floatingIpv4),
    floating_ipv4_mask: cdktf.stringToTerraform(struct!.floatingIpv4Mask),
  }
}


export function dataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructToHclTerraform(struct?: DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpv4 = this._floatingIpv4;
    }
    if (this._floatingIpv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpv4Mask = this._floatingIpv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIpv4 = undefined;
      this._floatingIpv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIpv4 = value.floatingIpv4;
      this._floatingIpv4Mask = value.floatingIpv4Mask;
    }
  }

  // floating_ipv4 - computed: false, optional: true, required: false
  private _floatingIpv4?: string; 
  public get floatingIpv4() {
    return this.getStringAttribute('floating_ipv4');
  }
  public set floatingIpv4(value: string) {
    this._floatingIpv4 = value;
  }
  public resetFloatingIpv4() {
    this._floatingIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv4Input() {
    return this._floatingIpv4;
  }

  // floating_ipv4_mask - computed: false, optional: true, required: false
  private _floatingIpv4Mask?: string; 
  public get floatingIpv4Mask() {
    return this.getStringAttribute('floating_ipv4_mask');
  }
  public set floatingIpv4Mask(value: string) {
    this._floatingIpv4Mask = value;
  }
  public resetFloatingIpv4Mask() {
    this._floatingIpv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv4MaskInput() {
    return this._floatingIpv4Mask;
  }
}

export class DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructOutputReference {
    return new DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#floating_ipv6 DataThunderVcsVcsSummaryOper#floating_ipv6}
  */
  readonly floatingIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#floating_ipv6_prefix DataThunderVcsVcsSummaryOper#floating_ipv6_prefix}
  */
  readonly floatingIpv6Prefix?: number;
}

export function dataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructToTerraform(struct?: DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ipv6: cdktf.stringToTerraform(struct!.floatingIpv6),
    floating_ipv6_prefix: cdktf.numberToTerraform(struct!.floatingIpv6Prefix),
  }
}


export function dataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructToHclTerraform(struct?: DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ipv6_prefix: {
      value: cdktf.numberToHclTerraform(struct!.floatingIpv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpv6 = this._floatingIpv6;
    }
    if (this._floatingIpv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpv6Prefix = this._floatingIpv6Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIpv6 = undefined;
      this._floatingIpv6Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIpv6 = value.floatingIpv6;
      this._floatingIpv6Prefix = value.floatingIpv6Prefix;
    }
  }

  // floating_ipv6 - computed: false, optional: true, required: false
  private _floatingIpv6?: string; 
  public get floatingIpv6() {
    return this.getStringAttribute('floating_ipv6');
  }
  public set floatingIpv6(value: string) {
    this._floatingIpv6 = value;
  }
  public resetFloatingIpv6() {
    this._floatingIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv6Input() {
    return this._floatingIpv6;
  }

  // floating_ipv6_prefix - computed: false, optional: true, required: false
  private _floatingIpv6Prefix?: number; 
  public get floatingIpv6Prefix() {
    return this.getNumberAttribute('floating_ipv6_prefix');
  }
  public set floatingIpv6Prefix(value: number) {
    this._floatingIpv6Prefix = value;
  }
  public resetFloatingIpv6Prefix() {
    this._floatingIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv6PrefixInput() {
    return this._floatingIpv6Prefix;
  }
}

export class DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructOutputReference {
    return new DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVcsVcsSummaryOperOperMemberListIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#ip DataThunderVcsVcsSummaryOper#ip}
  */
  readonly ip?: string;
}

export function dataThunderVcsVcsSummaryOperOperMemberListIpListStructToTerraform(struct?: DataThunderVcsVcsSummaryOperOperMemberListIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataThunderVcsVcsSummaryOperOperMemberListIpListStructToHclTerraform(struct?: DataThunderVcsVcsSummaryOperOperMemberListIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsVcsSummaryOperOperMemberListIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVcsVcsSummaryOperOperMemberListIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsVcsSummaryOperOperMemberListIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
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
}

export class DataThunderVcsVcsSummaryOperOperMemberListIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVcsVcsSummaryOperOperMemberListIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVcsVcsSummaryOperOperMemberListIpListStructOutputReference {
    return new DataThunderVcsVcsSummaryOperOperMemberListIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVcsVcsSummaryOperOperMemberListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#id1 DataThunderVcsVcsSummaryOper#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#location DataThunderVcsVcsSummaryOper#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#port DataThunderVcsVcsSummaryOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#priority DataThunderVcsVcsSummaryOper#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#state DataThunderVcsVcsSummaryOper#state}
  */
  readonly state?: string;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#ip_list DataThunderVcsVcsSummaryOper#ip_list}
  */
  readonly ipList?: DataThunderVcsVcsSummaryOperOperMemberListIpListStruct[] | cdktf.IResolvable;
}

export function dataThunderVcsVcsSummaryOperOperMemberListStructToTerraform(struct?: DataThunderVcsVcsSummaryOperOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id1: cdktf.numberToTerraform(struct!.id1),
    location: cdktf.stringToTerraform(struct!.location),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    state: cdktf.stringToTerraform(struct!.state),
    ip_list: cdktf.listMapper(dataThunderVcsVcsSummaryOperOperMemberListIpListStructToTerraform, true)(struct!.ipList),
  }
}


export function dataThunderVcsVcsSummaryOperOperMemberListStructToHclTerraform(struct?: DataThunderVcsVcsSummaryOperOperMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list: {
      value: cdktf.listMapperHcl(dataThunderVcsVcsSummaryOperOperMemberListIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVcsVcsSummaryOperOperMemberListIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsVcsSummaryOperOperMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVcsVcsSummaryOperOperMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsVcsSummaryOperOperMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id1 = undefined;
      this._location = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._state = undefined;
      this._ipList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id1 = value.id1;
      this._location = value.location;
      this._port = value.port;
      this._priority = value.priority;
      this._state = value.state;
      this._ipList.internalValue = value.ipList;
    }
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new DataThunderVcsVcsSummaryOperOperMemberListIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: DataThunderVcsVcsSummaryOperOperMemberListIpListStruct[] | cdktf.IResolvable) {
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

export class DataThunderVcsVcsSummaryOperOperMemberListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVcsVcsSummaryOperOperMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVcsVcsSummaryOperOperMemberListStructOutputReference {
    return new DataThunderVcsVcsSummaryOperOperMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#vcs_handshake_completed DataThunderVcsVcsSummaryOper#vcs_handshake_completed}
  */
  readonly vcsHandshakeCompleted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#vcs_handshake_completed_id DataThunderVcsVcsSummaryOper#vcs_handshake_completed_id}
  */
  readonly vcsHandshakeCompletedId?: number;
}

export function dataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructToTerraform(struct?: DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vcs_handshake_completed: cdktf.numberToTerraform(struct!.vcsHandshakeCompleted),
    vcs_handshake_completed_id: cdktf.numberToTerraform(struct!.vcsHandshakeCompletedId),
  }
}


export function dataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructToHclTerraform(struct?: DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vcs_handshake_completed: {
      value: cdktf.numberToHclTerraform(struct!.vcsHandshakeCompleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcs_handshake_completed_id: {
      value: cdktf.numberToHclTerraform(struct!.vcsHandshakeCompletedId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vcsHandshakeCompleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsHandshakeCompleted = this._vcsHandshakeCompleted;
    }
    if (this._vcsHandshakeCompletedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsHandshakeCompletedId = this._vcsHandshakeCompletedId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vcsHandshakeCompleted = undefined;
      this._vcsHandshakeCompletedId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vcsHandshakeCompleted = value.vcsHandshakeCompleted;
      this._vcsHandshakeCompletedId = value.vcsHandshakeCompletedId;
    }
  }

  // vcs_handshake_completed - computed: false, optional: true, required: false
  private _vcsHandshakeCompleted?: number; 
  public get vcsHandshakeCompleted() {
    return this.getNumberAttribute('vcs_handshake_completed');
  }
  public set vcsHandshakeCompleted(value: number) {
    this._vcsHandshakeCompleted = value;
  }
  public resetVcsHandshakeCompleted() {
    this._vcsHandshakeCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsHandshakeCompletedInput() {
    return this._vcsHandshakeCompleted;
  }

  // vcs_handshake_completed_id - computed: false, optional: true, required: false
  private _vcsHandshakeCompletedId?: number; 
  public get vcsHandshakeCompletedId() {
    return this.getNumberAttribute('vcs_handshake_completed_id');
  }
  public set vcsHandshakeCompletedId(value: number) {
    this._vcsHandshakeCompletedId = value;
  }
  public resetVcsHandshakeCompletedId() {
    this._vcsHandshakeCompletedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsHandshakeCompletedIdInput() {
    return this._vcsHandshakeCompletedId;
  }
}

export class DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructOutputReference {
    return new DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVcsVcsSummaryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#chassis_id DataThunderVcsVcsSummaryOper#chassis_id}
  */
  readonly chassisId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#multicast_addr DataThunderVcsVcsSummaryOper#multicast_addr}
  */
  readonly multicastAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#multicast_port DataThunderVcsVcsSummaryOper#multicast_port}
  */
  readonly multicastPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#vcs_enabled DataThunderVcsVcsSummaryOper#vcs_enabled}
  */
  readonly vcsEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#version DataThunderVcsVcsSummaryOper#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#vmaster_maintenance_interval DataThunderVcsVcsSummaryOper#vmaster_maintenance_interval}
  */
  readonly vmasterMaintenanceInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#vmaster_maintenance_left DataThunderVcsVcsSummaryOper#vmaster_maintenance_left}
  */
  readonly vmasterMaintenanceLeft?: number;
  /**
  * floating_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#floating_ipv4_list DataThunderVcsVcsSummaryOper#floating_ipv4_list}
  */
  readonly floatingIpv4List?: DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * floating_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#floating_ipv6_list DataThunderVcsVcsSummaryOper#floating_ipv6_list}
  */
  readonly floatingIpv6List?: DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#member_list DataThunderVcsVcsSummaryOper#member_list}
  */
  readonly memberList?: DataThunderVcsVcsSummaryOperOperMemberListStruct[] | cdktf.IResolvable;
  /**
  * vcs_handshake_completed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#vcs_handshake_completed_list DataThunderVcsVcsSummaryOper#vcs_handshake_completed_list}
  */
  readonly vcsHandshakeCompletedList?: DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct[] | cdktf.IResolvable;
}

export function dataThunderVcsVcsSummaryOperOperToTerraform(struct?: DataThunderVcsVcsSummaryOperOperOutputReference | DataThunderVcsVcsSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chassis_id: cdktf.numberToTerraform(struct!.chassisId),
    multicast_addr: cdktf.stringToTerraform(struct!.multicastAddr),
    multicast_port: cdktf.numberToTerraform(struct!.multicastPort),
    vcs_enabled: cdktf.stringToTerraform(struct!.vcsEnabled),
    version: cdktf.stringToTerraform(struct!.version),
    vmaster_maintenance_interval: cdktf.numberToTerraform(struct!.vmasterMaintenanceInterval),
    vmaster_maintenance_left: cdktf.numberToTerraform(struct!.vmasterMaintenanceLeft),
    floating_ipv4_list: cdktf.listMapper(dataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructToTerraform, true)(struct!.floatingIpv4List),
    floating_ipv6_list: cdktf.listMapper(dataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructToTerraform, true)(struct!.floatingIpv6List),
    member_list: cdktf.listMapper(dataThunderVcsVcsSummaryOperOperMemberListStructToTerraform, true)(struct!.memberList),
    vcs_handshake_completed_list: cdktf.listMapper(dataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructToTerraform, true)(struct!.vcsHandshakeCompletedList),
  }
}


export function dataThunderVcsVcsSummaryOperOperToHclTerraform(struct?: DataThunderVcsVcsSummaryOperOperOutputReference | DataThunderVcsVcsSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chassis_id: {
      value: cdktf.numberToHclTerraform(struct!.chassisId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_addr: {
      value: cdktf.stringToHclTerraform(struct!.multicastAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_port: {
      value: cdktf.numberToHclTerraform(struct!.multicastPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcs_enabled: {
      value: cdktf.stringToHclTerraform(struct!.vcsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmaster_maintenance_interval: {
      value: cdktf.numberToHclTerraform(struct!.vmasterMaintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vmaster_maintenance_left: {
      value: cdktf.numberToHclTerraform(struct!.vmasterMaintenanceLeft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floating_ipv4_list: {
      value: cdktf.listMapperHcl(dataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructToHclTerraform, true)(struct!.floatingIpv4List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructList",
    },
    floating_ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructToHclTerraform, true)(struct!.floatingIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructList",
    },
    member_list: {
      value: cdktf.listMapperHcl(dataThunderVcsVcsSummaryOperOperMemberListStructToHclTerraform, true)(struct!.memberList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVcsVcsSummaryOperOperMemberListStructList",
    },
    vcs_handshake_completed_list: {
      value: cdktf.listMapperHcl(dataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructToHclTerraform, true)(struct!.vcsHandshakeCompletedList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVcsVcsSummaryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVcsVcsSummaryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chassisId !== undefined) {
      hasAnyValues = true;
      internalValueResult.chassisId = this._chassisId;
    }
    if (this._multicastAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastAddr = this._multicastAddr;
    }
    if (this._multicastPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastPort = this._multicastPort;
    }
    if (this._vcsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsEnabled = this._vcsEnabled;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vmasterMaintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmasterMaintenanceInterval = this._vmasterMaintenanceInterval;
    }
    if (this._vmasterMaintenanceLeft !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmasterMaintenanceLeft = this._vmasterMaintenanceLeft;
    }
    if (this._floatingIpv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpv4List = this._floatingIpv4List?.internalValue;
    }
    if (this._floatingIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpv6List = this._floatingIpv6List?.internalValue;
    }
    if (this._memberList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberList = this._memberList?.internalValue;
    }
    if (this._vcsHandshakeCompletedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcsHandshakeCompletedList = this._vcsHandshakeCompletedList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVcsVcsSummaryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chassisId = undefined;
      this._multicastAddr = undefined;
      this._multicastPort = undefined;
      this._vcsEnabled = undefined;
      this._version = undefined;
      this._vmasterMaintenanceInterval = undefined;
      this._vmasterMaintenanceLeft = undefined;
      this._floatingIpv4List.internalValue = undefined;
      this._floatingIpv6List.internalValue = undefined;
      this._memberList.internalValue = undefined;
      this._vcsHandshakeCompletedList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chassisId = value.chassisId;
      this._multicastAddr = value.multicastAddr;
      this._multicastPort = value.multicastPort;
      this._vcsEnabled = value.vcsEnabled;
      this._version = value.version;
      this._vmasterMaintenanceInterval = value.vmasterMaintenanceInterval;
      this._vmasterMaintenanceLeft = value.vmasterMaintenanceLeft;
      this._floatingIpv4List.internalValue = value.floatingIpv4List;
      this._floatingIpv6List.internalValue = value.floatingIpv6List;
      this._memberList.internalValue = value.memberList;
      this._vcsHandshakeCompletedList.internalValue = value.vcsHandshakeCompletedList;
    }
  }

  // chassis_id - computed: false, optional: true, required: false
  private _chassisId?: number; 
  public get chassisId() {
    return this.getNumberAttribute('chassis_id');
  }
  public set chassisId(value: number) {
    this._chassisId = value;
  }
  public resetChassisId() {
    this._chassisId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisIdInput() {
    return this._chassisId;
  }

  // multicast_addr - computed: false, optional: true, required: false
  private _multicastAddr?: string; 
  public get multicastAddr() {
    return this.getStringAttribute('multicast_addr');
  }
  public set multicastAddr(value: string) {
    this._multicastAddr = value;
  }
  public resetMulticastAddr() {
    this._multicastAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastAddrInput() {
    return this._multicastAddr;
  }

  // multicast_port - computed: false, optional: true, required: false
  private _multicastPort?: number; 
  public get multicastPort() {
    return this.getNumberAttribute('multicast_port');
  }
  public set multicastPort(value: number) {
    this._multicastPort = value;
  }
  public resetMulticastPort() {
    this._multicastPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastPortInput() {
    return this._multicastPort;
  }

  // vcs_enabled - computed: false, optional: true, required: false
  private _vcsEnabled?: string; 
  public get vcsEnabled() {
    return this.getStringAttribute('vcs_enabled');
  }
  public set vcsEnabled(value: string) {
    this._vcsEnabled = value;
  }
  public resetVcsEnabled() {
    this._vcsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsEnabledInput() {
    return this._vcsEnabled;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vmaster_maintenance_interval - computed: false, optional: true, required: false
  private _vmasterMaintenanceInterval?: number; 
  public get vmasterMaintenanceInterval() {
    return this.getNumberAttribute('vmaster_maintenance_interval');
  }
  public set vmasterMaintenanceInterval(value: number) {
    this._vmasterMaintenanceInterval = value;
  }
  public resetVmasterMaintenanceInterval() {
    this._vmasterMaintenanceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmasterMaintenanceIntervalInput() {
    return this._vmasterMaintenanceInterval;
  }

  // vmaster_maintenance_left - computed: false, optional: true, required: false
  private _vmasterMaintenanceLeft?: number; 
  public get vmasterMaintenanceLeft() {
    return this.getNumberAttribute('vmaster_maintenance_left');
  }
  public set vmasterMaintenanceLeft(value: number) {
    this._vmasterMaintenanceLeft = value;
  }
  public resetVmasterMaintenanceLeft() {
    this._vmasterMaintenanceLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmasterMaintenanceLeftInput() {
    return this._vmasterMaintenanceLeft;
  }

  // floating_ipv4_list - computed: false, optional: true, required: false
  private _floatingIpv4List = new DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStructList(this, "floating_ipv4_list", false);
  public get floatingIpv4List() {
    return this._floatingIpv4List;
  }
  public putFloatingIpv4List(value: DataThunderVcsVcsSummaryOperOperFloatingIpv4ListStruct[] | cdktf.IResolvable) {
    this._floatingIpv4List.internalValue = value;
  }
  public resetFloatingIpv4List() {
    this._floatingIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv4ListInput() {
    return this._floatingIpv4List.internalValue;
  }

  // floating_ipv6_list - computed: false, optional: true, required: false
  private _floatingIpv6List = new DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStructList(this, "floating_ipv6_list", false);
  public get floatingIpv6List() {
    return this._floatingIpv6List;
  }
  public putFloatingIpv6List(value: DataThunderVcsVcsSummaryOperOperFloatingIpv6ListStruct[] | cdktf.IResolvable) {
    this._floatingIpv6List.internalValue = value;
  }
  public resetFloatingIpv6List() {
    this._floatingIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv6ListInput() {
    return this._floatingIpv6List.internalValue;
  }

  // member_list - computed: false, optional: true, required: false
  private _memberList = new DataThunderVcsVcsSummaryOperOperMemberListStructList(this, "member_list", false);
  public get memberList() {
    return this._memberList;
  }
  public putMemberList(value: DataThunderVcsVcsSummaryOperOperMemberListStruct[] | cdktf.IResolvable) {
    this._memberList.internalValue = value;
  }
  public resetMemberList() {
    this._memberList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberListInput() {
    return this._memberList.internalValue;
  }

  // vcs_handshake_completed_list - computed: false, optional: true, required: false
  private _vcsHandshakeCompletedList = new DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStructList(this, "vcs_handshake_completed_list", false);
  public get vcsHandshakeCompletedList() {
    return this._vcsHandshakeCompletedList;
  }
  public putVcsHandshakeCompletedList(value: DataThunderVcsVcsSummaryOperOperVcsHandshakeCompletedListStruct[] | cdktf.IResolvable) {
    this._vcsHandshakeCompletedList.internalValue = value;
  }
  public resetVcsHandshakeCompletedList() {
    this._vcsHandshakeCompletedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsHandshakeCompletedListInput() {
    return this._vcsHandshakeCompletedList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper thunder_vcs_vcs_summary_oper}
*/
export class DataThunderVcsVcsSummaryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_vcs_summary_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVcsVcsSummaryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVcsVcsSummaryOper to import
  * @param importFromId The id of the existing DataThunderVcsVcsSummaryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVcsVcsSummaryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_vcs_summary_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vcs_vcs_summary_oper thunder_vcs_vcs_summary_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVcsVcsSummaryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVcsVcsSummaryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_vcs_summary_oper',
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
  private _oper = new DataThunderVcsVcsSummaryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVcsVcsSummaryOperOper) {
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
      oper: dataThunderVcsVcsSummaryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVcsVcsSummaryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVcsVcsSummaryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
