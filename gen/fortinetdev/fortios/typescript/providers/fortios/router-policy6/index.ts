// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterPolicy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#action RouterPolicy6#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#comments RouterPolicy6#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#dst RouterPolicy6#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#dst_negate RouterPolicy6#dst_negate}
  */
  readonly dstNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#dynamic_sort_subtable RouterPolicy6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#end_port RouterPolicy6#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#end_source_port RouterPolicy6#end_source_port}
  */
  readonly endSourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#gateway RouterPolicy6#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#get_all_tables RouterPolicy6#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#id RouterPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#input_device RouterPolicy6#input_device}
  */
  readonly inputDevice: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#input_device_negate RouterPolicy6#input_device_negate}
  */
  readonly inputDeviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#output_device RouterPolicy6#output_device}
  */
  readonly outputDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#protocol RouterPolicy6#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#seq_num RouterPolicy6#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#src RouterPolicy6#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#src_negate RouterPolicy6#src_negate}
  */
  readonly srcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#start_port RouterPolicy6#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#start_source_port RouterPolicy6#start_source_port}
  */
  readonly startSourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#status RouterPolicy6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#tos RouterPolicy6#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#tos_mask RouterPolicy6#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#vdomparam RouterPolicy6#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#dstaddr RouterPolicy6#dstaddr}
  */
  readonly dstaddr?: RouterPolicy6Dstaddr[] | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#groups RouterPolicy6#groups}
  */
  readonly groups?: RouterPolicy6Groups[] | cdktf.IResolvable;
  /**
  * internet_service_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#internet_service_custom RouterPolicy6#internet_service_custom}
  */
  readonly internetServiceCustom?: RouterPolicy6InternetServiceCustom[] | cdktf.IResolvable;
  /**
  * internet_service_fortiguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#internet_service_fortiguard RouterPolicy6#internet_service_fortiguard}
  */
  readonly internetServiceFortiguard?: RouterPolicy6InternetServiceFortiguard[] | cdktf.IResolvable;
  /**
  * internet_service_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#internet_service_id RouterPolicy6#internet_service_id}
  */
  readonly internetServiceId?: RouterPolicy6InternetServiceId[] | cdktf.IResolvable;
  /**
  * srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#srcaddr RouterPolicy6#srcaddr}
  */
  readonly srcaddr?: RouterPolicy6Srcaddr[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#users RouterPolicy6#users}
  */
  readonly users?: RouterPolicy6Users[] | cdktf.IResolvable;
}
export interface RouterPolicy6Dstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#name RouterPolicy6#name}
  */
  readonly name?: string;
}

export function routerPolicy6DstaddrToTerraform(struct?: RouterPolicy6Dstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerPolicy6DstaddrToHclTerraform(struct?: RouterPolicy6Dstaddr | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicy6DstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicy6Dstaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicy6Dstaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RouterPolicy6DstaddrList extends cdktf.ComplexList {
  public internalValue? : RouterPolicy6Dstaddr[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicy6DstaddrOutputReference {
    return new RouterPolicy6DstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicy6Groups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#name RouterPolicy6#name}
  */
  readonly name?: string;
}

export function routerPolicy6GroupsToTerraform(struct?: RouterPolicy6Groups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerPolicy6GroupsToHclTerraform(struct?: RouterPolicy6Groups | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicy6GroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicy6Groups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicy6Groups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RouterPolicy6GroupsList extends cdktf.ComplexList {
  public internalValue? : RouterPolicy6Groups[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicy6GroupsOutputReference {
    return new RouterPolicy6GroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicy6InternetServiceCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#name RouterPolicy6#name}
  */
  readonly name?: string;
}

export function routerPolicy6InternetServiceCustomToTerraform(struct?: RouterPolicy6InternetServiceCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerPolicy6InternetServiceCustomToHclTerraform(struct?: RouterPolicy6InternetServiceCustom | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicy6InternetServiceCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicy6InternetServiceCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicy6InternetServiceCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RouterPolicy6InternetServiceCustomList extends cdktf.ComplexList {
  public internalValue? : RouterPolicy6InternetServiceCustom[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicy6InternetServiceCustomOutputReference {
    return new RouterPolicy6InternetServiceCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicy6InternetServiceFortiguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#name RouterPolicy6#name}
  */
  readonly name?: string;
}

export function routerPolicy6InternetServiceFortiguardToTerraform(struct?: RouterPolicy6InternetServiceFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerPolicy6InternetServiceFortiguardToHclTerraform(struct?: RouterPolicy6InternetServiceFortiguard | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicy6InternetServiceFortiguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicy6InternetServiceFortiguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicy6InternetServiceFortiguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RouterPolicy6InternetServiceFortiguardList extends cdktf.ComplexList {
  public internalValue? : RouterPolicy6InternetServiceFortiguard[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicy6InternetServiceFortiguardOutputReference {
    return new RouterPolicy6InternetServiceFortiguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicy6InternetServiceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#id RouterPolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function routerPolicy6InternetServiceIdToTerraform(struct?: RouterPolicy6InternetServiceId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function routerPolicy6InternetServiceIdToHclTerraform(struct?: RouterPolicy6InternetServiceId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicy6InternetServiceIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicy6InternetServiceId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicy6InternetServiceId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class RouterPolicy6InternetServiceIdList extends cdktf.ComplexList {
  public internalValue? : RouterPolicy6InternetServiceId[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicy6InternetServiceIdOutputReference {
    return new RouterPolicy6InternetServiceIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicy6Srcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#name RouterPolicy6#name}
  */
  readonly name?: string;
}

export function routerPolicy6SrcaddrToTerraform(struct?: RouterPolicy6Srcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerPolicy6SrcaddrToHclTerraform(struct?: RouterPolicy6Srcaddr | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicy6SrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicy6Srcaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicy6Srcaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RouterPolicy6SrcaddrList extends cdktf.ComplexList {
  public internalValue? : RouterPolicy6Srcaddr[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicy6SrcaddrOutputReference {
    return new RouterPolicy6SrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicy6Users {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#name RouterPolicy6#name}
  */
  readonly name?: string;
}

export function routerPolicy6UsersToTerraform(struct?: RouterPolicy6Users | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerPolicy6UsersToHclTerraform(struct?: RouterPolicy6Users | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicy6UsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicy6Users | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicy6Users | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RouterPolicy6UsersList extends cdktf.ComplexList {
  public internalValue? : RouterPolicy6Users[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicy6UsersOutputReference {
    return new RouterPolicy6UsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6 fortios_router_policy6}
*/
export class RouterPolicy6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_policy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterPolicy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterPolicy6 to import
  * @param importFromId The id of the existing RouterPolicy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterPolicy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_policy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_policy6 fortios_router_policy6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterPolicy6Config
  */
  public constructor(scope: Construct, id: string, config: RouterPolicy6Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_policy6',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._comments = config.comments;
    this._dst = config.dst;
    this._dstNegate = config.dstNegate;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endPort = config.endPort;
    this._endSourcePort = config.endSourcePort;
    this._gateway = config.gateway;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._inputDevice = config.inputDevice;
    this._inputDeviceNegate = config.inputDeviceNegate;
    this._outputDevice = config.outputDevice;
    this._protocol = config.protocol;
    this._seqNum = config.seqNum;
    this._src = config.src;
    this._srcNegate = config.srcNegate;
    this._startPort = config.startPort;
    this._startSourcePort = config.startSourcePort;
    this._status = config.status;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._vdomparam = config.vdomparam;
    this._dstaddr.internalValue = config.dstaddr;
    this._groups.internalValue = config.groups;
    this._internetServiceCustom.internalValue = config.internetServiceCustom;
    this._internetServiceFortiguard.internalValue = config.internetServiceFortiguard;
    this._internetServiceId.internalValue = config.internetServiceId;
    this._srcaddr.internalValue = config.srcaddr;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst_negate - computed: true, optional: true, required: false
  private _dstNegate?: string; 
  public get dstNegate() {
    return this.getStringAttribute('dst_negate');
  }
  public set dstNegate(value: string) {
    this._dstNegate = value;
  }
  public resetDstNegate() {
    this._dstNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNegateInput() {
    return this._dstNegate;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // end_source_port - computed: true, optional: true, required: false
  private _endSourcePort?: number; 
  public get endSourcePort() {
    return this.getNumberAttribute('end_source_port');
  }
  public set endSourcePort(value: number) {
    this._endSourcePort = value;
  }
  public resetEndSourcePort() {
    this._endSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSourcePortInput() {
    return this._endSourcePort;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // input_device - computed: false, optional: false, required: true
  private _inputDevice?: string; 
  public get inputDevice() {
    return this.getStringAttribute('input_device');
  }
  public set inputDevice(value: string) {
    this._inputDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceInput() {
    return this._inputDevice;
  }

  // input_device_negate - computed: true, optional: true, required: false
  private _inputDeviceNegate?: string; 
  public get inputDeviceNegate() {
    return this.getStringAttribute('input_device_negate');
  }
  public set inputDeviceNegate(value: string) {
    this._inputDeviceNegate = value;
  }
  public resetInputDeviceNegate() {
    this._inputDeviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceNegateInput() {
    return this._inputDeviceNegate;
  }

  // output_device - computed: false, optional: true, required: false
  private _outputDevice?: string; 
  public get outputDevice() {
    return this.getStringAttribute('output_device');
  }
  public set outputDevice(value: string) {
    this._outputDevice = value;
  }
  public resetOutputDevice() {
    this._outputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDeviceInput() {
    return this._outputDevice;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // seq_num - computed: true, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src_negate - computed: true, optional: true, required: false
  private _srcNegate?: string; 
  public get srcNegate() {
    return this.getStringAttribute('src_negate');
  }
  public set srcNegate(value: string) {
    this._srcNegate = value;
  }
  public resetSrcNegate() {
    this._srcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNegateInput() {
    return this._srcNegate;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // start_source_port - computed: true, optional: true, required: false
  private _startSourcePort?: number; 
  public get startSourcePort() {
    return this.getNumberAttribute('start_source_port');
  }
  public set startSourcePort(value: number) {
    this._startSourcePort = value;
  }
  public resetStartSourcePort() {
    this._startSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSourcePortInput() {
    return this._startSourcePort;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_mask - computed: false, optional: true, required: false
  private _tosMask?: string; 
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }
  public set tosMask(value: string) {
    this._tosMask = value;
  }
  public resetTosMask() {
    this._tosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMaskInput() {
    return this._tosMask;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr = new RouterPolicy6DstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: RouterPolicy6Dstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  public resetDstaddr() {
    this._dstaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new RouterPolicy6GroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: RouterPolicy6Groups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // internet_service_custom - computed: false, optional: true, required: false
  private _internetServiceCustom = new RouterPolicy6InternetServiceCustomList(this, "internet_service_custom", true);
  public get internetServiceCustom() {
    return this._internetServiceCustom;
  }
  public putInternetServiceCustom(value: RouterPolicy6InternetServiceCustom[] | cdktf.IResolvable) {
    this._internetServiceCustom.internalValue = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom.internalValue;
  }

  // internet_service_fortiguard - computed: false, optional: true, required: false
  private _internetServiceFortiguard = new RouterPolicy6InternetServiceFortiguardList(this, "internet_service_fortiguard", true);
  public get internetServiceFortiguard() {
    return this._internetServiceFortiguard;
  }
  public putInternetServiceFortiguard(value: RouterPolicy6InternetServiceFortiguard[] | cdktf.IResolvable) {
    this._internetServiceFortiguard.internalValue = value;
  }
  public resetInternetServiceFortiguard() {
    this._internetServiceFortiguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceFortiguardInput() {
    return this._internetServiceFortiguard.internalValue;
  }

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId = new RouterPolicy6InternetServiceIdList(this, "internet_service_id", true);
  public get internetServiceId() {
    return this._internetServiceId;
  }
  public putInternetServiceId(value: RouterPolicy6InternetServiceId[] | cdktf.IResolvable) {
    this._internetServiceId.internalValue = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId.internalValue;
  }

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr = new RouterPolicy6SrcaddrList(this, "srcaddr", true);
  public get srcaddr() {
    return this._srcaddr;
  }
  public putSrcaddr(value: RouterPolicy6Srcaddr[] | cdktf.IResolvable) {
    this._srcaddr.internalValue = value;
  }
  public resetSrcaddr() {
    this._srcaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new RouterPolicy6UsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: RouterPolicy6Users[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      comments: cdktf.stringToTerraform(this._comments),
      dst: cdktf.stringToTerraform(this._dst),
      dst_negate: cdktf.stringToTerraform(this._dstNegate),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_port: cdktf.numberToTerraform(this._endPort),
      end_source_port: cdktf.numberToTerraform(this._endSourcePort),
      gateway: cdktf.stringToTerraform(this._gateway),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      input_device: cdktf.stringToTerraform(this._inputDevice),
      input_device_negate: cdktf.stringToTerraform(this._inputDeviceNegate),
      output_device: cdktf.stringToTerraform(this._outputDevice),
      protocol: cdktf.numberToTerraform(this._protocol),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      src: cdktf.stringToTerraform(this._src),
      src_negate: cdktf.stringToTerraform(this._srcNegate),
      start_port: cdktf.numberToTerraform(this._startPort),
      start_source_port: cdktf.numberToTerraform(this._startSourcePort),
      status: cdktf.stringToTerraform(this._status),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      dstaddr: cdktf.listMapper(routerPolicy6DstaddrToTerraform, true)(this._dstaddr.internalValue),
      groups: cdktf.listMapper(routerPolicy6GroupsToTerraform, true)(this._groups.internalValue),
      internet_service_custom: cdktf.listMapper(routerPolicy6InternetServiceCustomToTerraform, true)(this._internetServiceCustom.internalValue),
      internet_service_fortiguard: cdktf.listMapper(routerPolicy6InternetServiceFortiguardToTerraform, true)(this._internetServiceFortiguard.internalValue),
      internet_service_id: cdktf.listMapper(routerPolicy6InternetServiceIdToTerraform, true)(this._internetServiceId.internalValue),
      srcaddr: cdktf.listMapper(routerPolicy6SrcaddrToTerraform, true)(this._srcaddr.internalValue),
      users: cdktf.listMapper(routerPolicy6UsersToTerraform, true)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_negate: {
        value: cdktf.stringToHclTerraform(this._dstNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_port: {
        value: cdktf.numberToHclTerraform(this._endPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_source_port: {
        value: cdktf.numberToHclTerraform(this._endSourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_device: {
        value: cdktf.stringToHclTerraform(this._inputDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_device_negate: {
        value: cdktf.stringToHclTerraform(this._inputDeviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_device: {
        value: cdktf.stringToHclTerraform(this._outputDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_negate: {
        value: cdktf.stringToHclTerraform(this._srcNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_port: {
        value: cdktf.numberToHclTerraform(this._startPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_source_port: {
        value: cdktf.numberToHclTerraform(this._startSourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_mask: {
        value: cdktf.stringToHclTerraform(this._tosMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(routerPolicy6DstaddrToHclTerraform, true)(this._dstaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterPolicy6DstaddrList",
      },
      groups: {
        value: cdktf.listMapperHcl(routerPolicy6GroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterPolicy6GroupsList",
      },
      internet_service_custom: {
        value: cdktf.listMapperHcl(routerPolicy6InternetServiceCustomToHclTerraform, true)(this._internetServiceCustom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterPolicy6InternetServiceCustomList",
      },
      internet_service_fortiguard: {
        value: cdktf.listMapperHcl(routerPolicy6InternetServiceFortiguardToHclTerraform, true)(this._internetServiceFortiguard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterPolicy6InternetServiceFortiguardList",
      },
      internet_service_id: {
        value: cdktf.listMapperHcl(routerPolicy6InternetServiceIdToHclTerraform, true)(this._internetServiceId.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterPolicy6InternetServiceIdList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(routerPolicy6SrcaddrToHclTerraform, true)(this._srcaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterPolicy6SrcaddrList",
      },
      users: {
        value: cdktf.listMapperHcl(routerPolicy6UsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterPolicy6UsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
