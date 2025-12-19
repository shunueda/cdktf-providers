// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#id DataThunderScaleoutStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#oper DataThunderScaleoutStatusOper#oper}
  */
  readonly oper?: DataThunderScaleoutStatusOperOper;
}
export interface DataThunderScaleoutStatusOperOperActiveInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#interface DataThunderScaleoutStatusOper#interface}
  */
  readonly interface?: string;
}

export function dataThunderScaleoutStatusOperOperActiveInterfaceListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperActiveInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function dataThunderScaleoutStatusOperOperActiveInterfaceListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperActiveInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperActiveInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperActiveInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperActiveInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }
}

export class DataThunderScaleoutStatusOperOperActiveInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperActiveInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperActiveInterfaceListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperActiveInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ip DataThunderScaleoutStatusOper#ip}
  */
  readonly ip?: string;
}

export function dataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct | cdktf.IResolvable): any {
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

export class DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ipv6 DataThunderScaleoutStatusOper#ipv6}
  */
  readonly ipv6?: string;
}

export function dataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
    }
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
}

export class DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ip DataThunderScaleoutStatusOper#ip}
  */
  readonly ip?: string;
}

export function dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct | cdktf.IResolvable): any {
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

export class DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ipv6 DataThunderScaleoutStatusOper#ipv6}
  */
  readonly ipv6?: string;
}

export function dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
    }
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
}

export class DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperDestRedirectIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#device_id DataThunderScaleoutStatusOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#direction DataThunderScaleoutStatusOper#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ip DataThunderScaleoutStatusOper#ip}
  */
  readonly ip?: string;
}

export function dataThunderScaleoutStatusOperOperDestRedirectIpListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperDestRedirectIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    direction: cdktf.stringToTerraform(struct!.direction),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataThunderScaleoutStatusOperOperDestRedirectIpListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperDestRedirectIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataThunderScaleoutStatusOperOperDestRedirectIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperDestRedirectIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperDestRedirectIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._direction = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._direction = value.direction;
      this._ip = value.ip;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

export class DataThunderScaleoutStatusOperOperDestRedirectIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperDestRedirectIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperDestRedirectIpListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperDestRedirectIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#device_id DataThunderScaleoutStatusOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#direction DataThunderScaleoutStatusOper#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ipv6 DataThunderScaleoutStatusOper#ipv6}
  */
  readonly ipv6?: string;
}

export function dataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    direction: cdktf.stringToTerraform(struct!.direction),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._direction = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._direction = value.direction;
      this._ipv6 = value.ipv6;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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
}

export class DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#device_id DataThunderScaleoutStatusOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ip DataThunderScaleoutStatusOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ipv6 DataThunderScaleoutStatusOper#ipv6}
  */
  readonly ipv6?: string;
}

export function dataThunderScaleoutStatusOperOperDestSessionSyncIpListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataThunderScaleoutStatusOperOperDestSessionSyncIpListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperDestSessionSyncIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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
}

export class DataThunderScaleoutStatusOperOperDestSessionSyncIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperDestSessionSyncIpListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperDestSessionSyncIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperDeviceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#id1 DataThunderScaleoutStatusOper#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#is_local DataThunderScaleoutStatusOper#is_local}
  */
  readonly isLocal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#is_master DataThunderScaleoutStatusOper#is_master}
  */
  readonly isMaster?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#state DataThunderScaleoutStatusOper#state}
  */
  readonly state?: string;
}

export function dataThunderScaleoutStatusOperOperDeviceListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperDeviceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id1: cdktf.numberToTerraform(struct!.id1),
    is_local: cdktf.numberToTerraform(struct!.isLocal),
    is_master: cdktf.numberToTerraform(struct!.isMaster),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataThunderScaleoutStatusOperOperDeviceListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperDeviceListStruct | cdktf.IResolvable): any {
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
    is_local: {
      value: cdktf.numberToHclTerraform(struct!.isLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_master: {
      value: cdktf.numberToHclTerraform(struct!.isMaster),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperDeviceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperDeviceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._isLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLocal = this._isLocal;
    }
    if (this._isMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaster = this._isMaster;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperDeviceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id1 = undefined;
      this._isLocal = undefined;
      this._isMaster = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id1 = value.id1;
      this._isLocal = value.isLocal;
      this._isMaster = value.isMaster;
      this._state = value.state;
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

  // is_local - computed: false, optional: true, required: false
  private _isLocal?: number; 
  public get isLocal() {
    return this.getNumberAttribute('is_local');
  }
  public set isLocal(value: number) {
    this._isLocal = value;
  }
  public resetIsLocal() {
    this._isLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLocalInput() {
    return this._isLocal;
  }

  // is_master - computed: false, optional: true, required: false
  private _isMaster?: number; 
  public get isMaster() {
    return this.getNumberAttribute('is_master');
  }
  public set isMaster(value: number) {
    this._isMaster = value;
  }
  public resetIsMaster() {
    this._isMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMasterInput() {
    return this._isMaster;
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

export class DataThunderScaleoutStatusOperOperDeviceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperDeviceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperDeviceListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperDeviceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ip DataThunderScaleoutStatusOper#ip}
  */
  readonly ip?: string;
}

export function dataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct | cdktf.IResolvable): any {
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

export class DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#ipv6 DataThunderScaleoutStatusOper#ipv6}
  */
  readonly ipv6?: string;
}

export function dataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructToTerraform(struct?: DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructToHclTerraform(struct?: DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
    }
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
}

export class DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructOutputReference {
    return new DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutStatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#cluster_mode DataThunderScaleoutStatusOper#cluster_mode}
  */
  readonly clusterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#db_role DataThunderScaleoutStatusOper#db_role}
  */
  readonly dbRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#follow_shared_redirection DataThunderScaleoutStatusOper#follow_shared_redirection}
  */
  readonly followSharedRedirection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#follow_shared_session_sync DataThunderScaleoutStatusOper#follow_shared_session_sync}
  */
  readonly followSharedSessionSync?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#l2redirect DataThunderScaleoutStatusOper#l2redirect}
  */
  readonly l2Redirect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#l2redirect_eth DataThunderScaleoutStatusOper#l2redirect_eth}
  */
  readonly l2RedirectEth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#l2redirect_operational DataThunderScaleoutStatusOper#l2redirect_operational}
  */
  readonly l2RedirectOperational?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#l2redirect_trunk DataThunderScaleoutStatusOper#l2redirect_trunk}
  */
  readonly l2RedirectTrunk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#l2redirect_valid DataThunderScaleoutStatusOper#l2redirect_valid}
  */
  readonly l2RedirectValid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#l2redirect_vlan DataThunderScaleoutStatusOper#l2redirect_vlan}
  */
  readonly l2RedirectVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#role DataThunderScaleoutStatusOper#role}
  */
  readonly role?: string;
  /**
  * active_interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#active_interface_list DataThunderScaleoutStatusOper#active_interface_list}
  */
  readonly activeInterfaceList?: DataThunderScaleoutStatusOperOperActiveInterfaceListStruct[] | cdktf.IResolvable;
  /**
  * advertised_redirect_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#advertised_redirect_ip_list DataThunderScaleoutStatusOper#advertised_redirect_ip_list}
  */
  readonly advertisedRedirectIpList?: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct[] | cdktf.IResolvable;
  /**
  * advertised_redirect_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#advertised_redirect_ipv6_list DataThunderScaleoutStatusOper#advertised_redirect_ipv6_list}
  */
  readonly advertisedRedirectIpv6List?: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * advertised_session_sync_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#advertised_session_sync_ip_list DataThunderScaleoutStatusOper#advertised_session_sync_ip_list}
  */
  readonly advertisedSessionSyncIpList?: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct[] | cdktf.IResolvable;
  /**
  * advertised_session_sync_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#advertised_session_sync_ipv6_list DataThunderScaleoutStatusOper#advertised_session_sync_ipv6_list}
  */
  readonly advertisedSessionSyncIpv6List?: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * dest_redirect_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#dest_redirect_ip_list DataThunderScaleoutStatusOper#dest_redirect_ip_list}
  */
  readonly destRedirectIpList?: DataThunderScaleoutStatusOperOperDestRedirectIpListStruct[] | cdktf.IResolvable;
  /**
  * dest_redirect_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#dest_redirect_ipv6_list DataThunderScaleoutStatusOper#dest_redirect_ipv6_list}
  */
  readonly destRedirectIpv6List?: DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * dest_session_sync_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#dest_session_sync_ip_list DataThunderScaleoutStatusOper#dest_session_sync_ip_list}
  */
  readonly destSessionSyncIpList?: DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct[] | cdktf.IResolvable;
  /**
  * device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#device_list DataThunderScaleoutStatusOper#device_list}
  */
  readonly deviceList?: DataThunderScaleoutStatusOperOperDeviceListStruct[] | cdktf.IResolvable;
  /**
  * exclude_interface_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#exclude_interface_ip_list DataThunderScaleoutStatusOper#exclude_interface_ip_list}
  */
  readonly excludeInterfaceIpList?: DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct[] | cdktf.IResolvable;
  /**
  * exclude_interface_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#exclude_interface_ipv6_list DataThunderScaleoutStatusOper#exclude_interface_ipv6_list}
  */
  readonly excludeInterfaceIpv6List?: DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutStatusOperOperToTerraform(struct?: DataThunderScaleoutStatusOperOperOutputReference | DataThunderScaleoutStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_mode: cdktf.stringToTerraform(struct!.clusterMode),
    db_role: cdktf.stringToTerraform(struct!.dbRole),
    follow_shared_redirection: cdktf.numberToTerraform(struct!.followSharedRedirection),
    follow_shared_session_sync: cdktf.numberToTerraform(struct!.followSharedSessionSync),
    l2redirect: cdktf.numberToTerraform(struct!.l2Redirect),
    l2redirect_eth: cdktf.numberToTerraform(struct!.l2RedirectEth),
    l2redirect_operational: cdktf.numberToTerraform(struct!.l2RedirectOperational),
    l2redirect_trunk: cdktf.numberToTerraform(struct!.l2RedirectTrunk),
    l2redirect_valid: cdktf.numberToTerraform(struct!.l2RedirectValid),
    l2redirect_vlan: cdktf.numberToTerraform(struct!.l2RedirectVlan),
    role: cdktf.stringToTerraform(struct!.role),
    active_interface_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperActiveInterfaceListStructToTerraform, true)(struct!.activeInterfaceList),
    advertised_redirect_ip_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructToTerraform, true)(struct!.advertisedRedirectIpList),
    advertised_redirect_ipv6_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructToTerraform, true)(struct!.advertisedRedirectIpv6List),
    advertised_session_sync_ip_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructToTerraform, true)(struct!.advertisedSessionSyncIpList),
    advertised_session_sync_ipv6_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructToTerraform, true)(struct!.advertisedSessionSyncIpv6List),
    dest_redirect_ip_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperDestRedirectIpListStructToTerraform, true)(struct!.destRedirectIpList),
    dest_redirect_ipv6_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructToTerraform, true)(struct!.destRedirectIpv6List),
    dest_session_sync_ip_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperDestSessionSyncIpListStructToTerraform, true)(struct!.destSessionSyncIpList),
    device_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperDeviceListStructToTerraform, true)(struct!.deviceList),
    exclude_interface_ip_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructToTerraform, true)(struct!.excludeInterfaceIpList),
    exclude_interface_ipv6_list: cdktf.listMapper(dataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructToTerraform, true)(struct!.excludeInterfaceIpv6List),
  }
}


export function dataThunderScaleoutStatusOperOperToHclTerraform(struct?: DataThunderScaleoutStatusOperOperOutputReference | DataThunderScaleoutStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_mode: {
      value: cdktf.stringToHclTerraform(struct!.clusterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_role: {
      value: cdktf.stringToHclTerraform(struct!.dbRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_shared_redirection: {
      value: cdktf.numberToHclTerraform(struct!.followSharedRedirection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_shared_session_sync: {
      value: cdktf.numberToHclTerraform(struct!.followSharedSessionSync),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2redirect: {
      value: cdktf.numberToHclTerraform(struct!.l2Redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2redirect_eth: {
      value: cdktf.numberToHclTerraform(struct!.l2RedirectEth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2redirect_operational: {
      value: cdktf.numberToHclTerraform(struct!.l2RedirectOperational),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2redirect_trunk: {
      value: cdktf.numberToHclTerraform(struct!.l2RedirectTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2redirect_valid: {
      value: cdktf.numberToHclTerraform(struct!.l2RedirectValid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2redirect_vlan: {
      value: cdktf.numberToHclTerraform(struct!.l2RedirectVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_interface_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperActiveInterfaceListStructToHclTerraform, true)(struct!.activeInterfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperActiveInterfaceListStructList",
    },
    advertised_redirect_ip_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructToHclTerraform, true)(struct!.advertisedRedirectIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructList",
    },
    advertised_redirect_ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructToHclTerraform, true)(struct!.advertisedRedirectIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructList",
    },
    advertised_session_sync_ip_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructToHclTerraform, true)(struct!.advertisedSessionSyncIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructList",
    },
    advertised_session_sync_ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructToHclTerraform, true)(struct!.advertisedSessionSyncIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructList",
    },
    dest_redirect_ip_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperDestRedirectIpListStructToHclTerraform, true)(struct!.destRedirectIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperDestRedirectIpListStructList",
    },
    dest_redirect_ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructToHclTerraform, true)(struct!.destRedirectIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructList",
    },
    dest_session_sync_ip_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperDestSessionSyncIpListStructToHclTerraform, true)(struct!.destSessionSyncIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperDestSessionSyncIpListStructList",
    },
    device_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperDeviceListStructToHclTerraform, true)(struct!.deviceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperDeviceListStructList",
    },
    exclude_interface_ip_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructToHclTerraform, true)(struct!.excludeInterfaceIpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructList",
    },
    exclude_interface_ipv6_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructToHclTerraform, true)(struct!.excludeInterfaceIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMode = this._clusterMode;
    }
    if (this._dbRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbRole = this._dbRole;
    }
    if (this._followSharedRedirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.followSharedRedirection = this._followSharedRedirection;
    }
    if (this._followSharedSessionSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.followSharedSessionSync = this._followSharedSessionSync;
    }
    if (this._l2Redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Redirect = this._l2Redirect;
    }
    if (this._l2RedirectEth !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2RedirectEth = this._l2RedirectEth;
    }
    if (this._l2RedirectOperational !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2RedirectOperational = this._l2RedirectOperational;
    }
    if (this._l2RedirectTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2RedirectTrunk = this._l2RedirectTrunk;
    }
    if (this._l2RedirectValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2RedirectValid = this._l2RedirectValid;
    }
    if (this._l2RedirectVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2RedirectVlan = this._l2RedirectVlan;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._activeInterfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeInterfaceList = this._activeInterfaceList?.internalValue;
    }
    if (this._advertisedRedirectIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedRedirectIpList = this._advertisedRedirectIpList?.internalValue;
    }
    if (this._advertisedRedirectIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedRedirectIpv6List = this._advertisedRedirectIpv6List?.internalValue;
    }
    if (this._advertisedSessionSyncIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedSessionSyncIpList = this._advertisedSessionSyncIpList?.internalValue;
    }
    if (this._advertisedSessionSyncIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedSessionSyncIpv6List = this._advertisedSessionSyncIpv6List?.internalValue;
    }
    if (this._destRedirectIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRedirectIpList = this._destRedirectIpList?.internalValue;
    }
    if (this._destRedirectIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRedirectIpv6List = this._destRedirectIpv6List?.internalValue;
    }
    if (this._destSessionSyncIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destSessionSyncIpList = this._destSessionSyncIpList?.internalValue;
    }
    if (this._deviceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceList = this._deviceList?.internalValue;
    }
    if (this._excludeInterfaceIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInterfaceIpList = this._excludeInterfaceIpList?.internalValue;
    }
    if (this._excludeInterfaceIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInterfaceIpv6List = this._excludeInterfaceIpv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterMode = undefined;
      this._dbRole = undefined;
      this._followSharedRedirection = undefined;
      this._followSharedSessionSync = undefined;
      this._l2Redirect = undefined;
      this._l2RedirectEth = undefined;
      this._l2RedirectOperational = undefined;
      this._l2RedirectTrunk = undefined;
      this._l2RedirectValid = undefined;
      this._l2RedirectVlan = undefined;
      this._role = undefined;
      this._activeInterfaceList.internalValue = undefined;
      this._advertisedRedirectIpList.internalValue = undefined;
      this._advertisedRedirectIpv6List.internalValue = undefined;
      this._advertisedSessionSyncIpList.internalValue = undefined;
      this._advertisedSessionSyncIpv6List.internalValue = undefined;
      this._destRedirectIpList.internalValue = undefined;
      this._destRedirectIpv6List.internalValue = undefined;
      this._destSessionSyncIpList.internalValue = undefined;
      this._deviceList.internalValue = undefined;
      this._excludeInterfaceIpList.internalValue = undefined;
      this._excludeInterfaceIpv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterMode = value.clusterMode;
      this._dbRole = value.dbRole;
      this._followSharedRedirection = value.followSharedRedirection;
      this._followSharedSessionSync = value.followSharedSessionSync;
      this._l2Redirect = value.l2Redirect;
      this._l2RedirectEth = value.l2RedirectEth;
      this._l2RedirectOperational = value.l2RedirectOperational;
      this._l2RedirectTrunk = value.l2RedirectTrunk;
      this._l2RedirectValid = value.l2RedirectValid;
      this._l2RedirectVlan = value.l2RedirectVlan;
      this._role = value.role;
      this._activeInterfaceList.internalValue = value.activeInterfaceList;
      this._advertisedRedirectIpList.internalValue = value.advertisedRedirectIpList;
      this._advertisedRedirectIpv6List.internalValue = value.advertisedRedirectIpv6List;
      this._advertisedSessionSyncIpList.internalValue = value.advertisedSessionSyncIpList;
      this._advertisedSessionSyncIpv6List.internalValue = value.advertisedSessionSyncIpv6List;
      this._destRedirectIpList.internalValue = value.destRedirectIpList;
      this._destRedirectIpv6List.internalValue = value.destRedirectIpv6List;
      this._destSessionSyncIpList.internalValue = value.destSessionSyncIpList;
      this._deviceList.internalValue = value.deviceList;
      this._excludeInterfaceIpList.internalValue = value.excludeInterfaceIpList;
      this._excludeInterfaceIpv6List.internalValue = value.excludeInterfaceIpv6List;
    }
  }

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // db_role - computed: false, optional: true, required: false
  private _dbRole?: string; 
  public get dbRole() {
    return this.getStringAttribute('db_role');
  }
  public set dbRole(value: string) {
    this._dbRole = value;
  }
  public resetDbRole() {
    this._dbRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRoleInput() {
    return this._dbRole;
  }

  // follow_shared_redirection - computed: false, optional: true, required: false
  private _followSharedRedirection?: number; 
  public get followSharedRedirection() {
    return this.getNumberAttribute('follow_shared_redirection');
  }
  public set followSharedRedirection(value: number) {
    this._followSharedRedirection = value;
  }
  public resetFollowSharedRedirection() {
    this._followSharedRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedRedirectionInput() {
    return this._followSharedRedirection;
  }

  // follow_shared_session_sync - computed: false, optional: true, required: false
  private _followSharedSessionSync?: number; 
  public get followSharedSessionSync() {
    return this.getNumberAttribute('follow_shared_session_sync');
  }
  public set followSharedSessionSync(value: number) {
    this._followSharedSessionSync = value;
  }
  public resetFollowSharedSessionSync() {
    this._followSharedSessionSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedSessionSyncInput() {
    return this._followSharedSessionSync;
  }

  // l2redirect - computed: false, optional: true, required: false
  private _l2Redirect?: number; 
  public get l2Redirect() {
    return this.getNumberAttribute('l2redirect');
  }
  public set l2Redirect(value: number) {
    this._l2Redirect = value;
  }
  public resetL2Redirect() {
    this._l2Redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectInput() {
    return this._l2Redirect;
  }

  // l2redirect_eth - computed: false, optional: true, required: false
  private _l2RedirectEth?: number; 
  public get l2RedirectEth() {
    return this.getNumberAttribute('l2redirect_eth');
  }
  public set l2RedirectEth(value: number) {
    this._l2RedirectEth = value;
  }
  public resetL2RedirectEth() {
    this._l2RedirectEth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectEthInput() {
    return this._l2RedirectEth;
  }

  // l2redirect_operational - computed: false, optional: true, required: false
  private _l2RedirectOperational?: number; 
  public get l2RedirectOperational() {
    return this.getNumberAttribute('l2redirect_operational');
  }
  public set l2RedirectOperational(value: number) {
    this._l2RedirectOperational = value;
  }
  public resetL2RedirectOperational() {
    this._l2RedirectOperational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectOperationalInput() {
    return this._l2RedirectOperational;
  }

  // l2redirect_trunk - computed: false, optional: true, required: false
  private _l2RedirectTrunk?: number; 
  public get l2RedirectTrunk() {
    return this.getNumberAttribute('l2redirect_trunk');
  }
  public set l2RedirectTrunk(value: number) {
    this._l2RedirectTrunk = value;
  }
  public resetL2RedirectTrunk() {
    this._l2RedirectTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectTrunkInput() {
    return this._l2RedirectTrunk;
  }

  // l2redirect_valid - computed: false, optional: true, required: false
  private _l2RedirectValid?: number; 
  public get l2RedirectValid() {
    return this.getNumberAttribute('l2redirect_valid');
  }
  public set l2RedirectValid(value: number) {
    this._l2RedirectValid = value;
  }
  public resetL2RedirectValid() {
    this._l2RedirectValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectValidInput() {
    return this._l2RedirectValid;
  }

  // l2redirect_vlan - computed: false, optional: true, required: false
  private _l2RedirectVlan?: number; 
  public get l2RedirectVlan() {
    return this.getNumberAttribute('l2redirect_vlan');
  }
  public set l2RedirectVlan(value: number) {
    this._l2RedirectVlan = value;
  }
  public resetL2RedirectVlan() {
    this._l2RedirectVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectVlanInput() {
    return this._l2RedirectVlan;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // active_interface_list - computed: false, optional: true, required: false
  private _activeInterfaceList = new DataThunderScaleoutStatusOperOperActiveInterfaceListStructList(this, "active_interface_list", false);
  public get activeInterfaceList() {
    return this._activeInterfaceList;
  }
  public putActiveInterfaceList(value: DataThunderScaleoutStatusOperOperActiveInterfaceListStruct[] | cdktf.IResolvable) {
    this._activeInterfaceList.internalValue = value;
  }
  public resetActiveInterfaceList() {
    this._activeInterfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInterfaceListInput() {
    return this._activeInterfaceList.internalValue;
  }

  // advertised_redirect_ip_list - computed: false, optional: true, required: false
  private _advertisedRedirectIpList = new DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStructList(this, "advertised_redirect_ip_list", false);
  public get advertisedRedirectIpList() {
    return this._advertisedRedirectIpList;
  }
  public putAdvertisedRedirectIpList(value: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpListStruct[] | cdktf.IResolvable) {
    this._advertisedRedirectIpList.internalValue = value;
  }
  public resetAdvertisedRedirectIpList() {
    this._advertisedRedirectIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedRedirectIpListInput() {
    return this._advertisedRedirectIpList.internalValue;
  }

  // advertised_redirect_ipv6_list - computed: false, optional: true, required: false
  private _advertisedRedirectIpv6List = new DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStructList(this, "advertised_redirect_ipv6_list", false);
  public get advertisedRedirectIpv6List() {
    return this._advertisedRedirectIpv6List;
  }
  public putAdvertisedRedirectIpv6List(value: DataThunderScaleoutStatusOperOperAdvertisedRedirectIpv6ListStruct[] | cdktf.IResolvable) {
    this._advertisedRedirectIpv6List.internalValue = value;
  }
  public resetAdvertisedRedirectIpv6List() {
    this._advertisedRedirectIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedRedirectIpv6ListInput() {
    return this._advertisedRedirectIpv6List.internalValue;
  }

  // advertised_session_sync_ip_list - computed: false, optional: true, required: false
  private _advertisedSessionSyncIpList = new DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStructList(this, "advertised_session_sync_ip_list", false);
  public get advertisedSessionSyncIpList() {
    return this._advertisedSessionSyncIpList;
  }
  public putAdvertisedSessionSyncIpList(value: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpListStruct[] | cdktf.IResolvable) {
    this._advertisedSessionSyncIpList.internalValue = value;
  }
  public resetAdvertisedSessionSyncIpList() {
    this._advertisedSessionSyncIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedSessionSyncIpListInput() {
    return this._advertisedSessionSyncIpList.internalValue;
  }

  // advertised_session_sync_ipv6_list - computed: false, optional: true, required: false
  private _advertisedSessionSyncIpv6List = new DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStructList(this, "advertised_session_sync_ipv6_list", false);
  public get advertisedSessionSyncIpv6List() {
    return this._advertisedSessionSyncIpv6List;
  }
  public putAdvertisedSessionSyncIpv6List(value: DataThunderScaleoutStatusOperOperAdvertisedSessionSyncIpv6ListStruct[] | cdktf.IResolvable) {
    this._advertisedSessionSyncIpv6List.internalValue = value;
  }
  public resetAdvertisedSessionSyncIpv6List() {
    this._advertisedSessionSyncIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedSessionSyncIpv6ListInput() {
    return this._advertisedSessionSyncIpv6List.internalValue;
  }

  // dest_redirect_ip_list - computed: false, optional: true, required: false
  private _destRedirectIpList = new DataThunderScaleoutStatusOperOperDestRedirectIpListStructList(this, "dest_redirect_ip_list", false);
  public get destRedirectIpList() {
    return this._destRedirectIpList;
  }
  public putDestRedirectIpList(value: DataThunderScaleoutStatusOperOperDestRedirectIpListStruct[] | cdktf.IResolvable) {
    this._destRedirectIpList.internalValue = value;
  }
  public resetDestRedirectIpList() {
    this._destRedirectIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRedirectIpListInput() {
    return this._destRedirectIpList.internalValue;
  }

  // dest_redirect_ipv6_list - computed: false, optional: true, required: false
  private _destRedirectIpv6List = new DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStructList(this, "dest_redirect_ipv6_list", false);
  public get destRedirectIpv6List() {
    return this._destRedirectIpv6List;
  }
  public putDestRedirectIpv6List(value: DataThunderScaleoutStatusOperOperDestRedirectIpv6ListStruct[] | cdktf.IResolvable) {
    this._destRedirectIpv6List.internalValue = value;
  }
  public resetDestRedirectIpv6List() {
    this._destRedirectIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRedirectIpv6ListInput() {
    return this._destRedirectIpv6List.internalValue;
  }

  // dest_session_sync_ip_list - computed: false, optional: true, required: false
  private _destSessionSyncIpList = new DataThunderScaleoutStatusOperOperDestSessionSyncIpListStructList(this, "dest_session_sync_ip_list", false);
  public get destSessionSyncIpList() {
    return this._destSessionSyncIpList;
  }
  public putDestSessionSyncIpList(value: DataThunderScaleoutStatusOperOperDestSessionSyncIpListStruct[] | cdktf.IResolvable) {
    this._destSessionSyncIpList.internalValue = value;
  }
  public resetDestSessionSyncIpList() {
    this._destSessionSyncIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destSessionSyncIpListInput() {
    return this._destSessionSyncIpList.internalValue;
  }

  // device_list - computed: false, optional: true, required: false
  private _deviceList = new DataThunderScaleoutStatusOperOperDeviceListStructList(this, "device_list", false);
  public get deviceList() {
    return this._deviceList;
  }
  public putDeviceList(value: DataThunderScaleoutStatusOperOperDeviceListStruct[] | cdktf.IResolvable) {
    this._deviceList.internalValue = value;
  }
  public resetDeviceList() {
    this._deviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceListInput() {
    return this._deviceList.internalValue;
  }

  // exclude_interface_ip_list - computed: false, optional: true, required: false
  private _excludeInterfaceIpList = new DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStructList(this, "exclude_interface_ip_list", false);
  public get excludeInterfaceIpList() {
    return this._excludeInterfaceIpList;
  }
  public putExcludeInterfaceIpList(value: DataThunderScaleoutStatusOperOperExcludeInterfaceIpListStruct[] | cdktf.IResolvable) {
    this._excludeInterfaceIpList.internalValue = value;
  }
  public resetExcludeInterfaceIpList() {
    this._excludeInterfaceIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInterfaceIpListInput() {
    return this._excludeInterfaceIpList.internalValue;
  }

  // exclude_interface_ipv6_list - computed: false, optional: true, required: false
  private _excludeInterfaceIpv6List = new DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStructList(this, "exclude_interface_ipv6_list", false);
  public get excludeInterfaceIpv6List() {
    return this._excludeInterfaceIpv6List;
  }
  public putExcludeInterfaceIpv6List(value: DataThunderScaleoutStatusOperOperExcludeInterfaceIpv6ListStruct[] | cdktf.IResolvable) {
    this._excludeInterfaceIpv6List.internalValue = value;
  }
  public resetExcludeInterfaceIpv6List() {
    this._excludeInterfaceIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInterfaceIpv6ListInput() {
    return this._excludeInterfaceIpv6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper thunder_scaleout_status_oper}
*/
export class DataThunderScaleoutStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutStatusOper to import
  * @param importFromId The id of the existing DataThunderScaleoutStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_status_oper thunder_scaleout_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_status_oper',
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
  private _oper = new DataThunderScaleoutStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutStatusOperOper) {
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
      oper: dataThunderScaleoutStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
