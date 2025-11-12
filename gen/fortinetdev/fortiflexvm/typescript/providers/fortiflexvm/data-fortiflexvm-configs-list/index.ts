// https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/data-sources/configs_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiflexvmConfigsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/data-sources/configs_list#account_id DataFortiflexvmConfigsList#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/data-sources/configs_list#id DataFortiflexvmConfigsList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/data-sources/configs_list#program_serial_number DataFortiflexvmConfigsList#program_serial_number}
  */
  readonly programSerialNumber: string;
}
export interface DataFortiflexvmConfigsListConfigsFadVm {
}

export function dataFortiflexvmConfigsListConfigsFadVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFadVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFadVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFadVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFadVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFadVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFadVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_size - computed: true, optional: false, required: false
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFadVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFadVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFadVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFapHw {
}

export function dataFortiflexvmConfigsListConfigsFapHwToTerraform(struct?: DataFortiflexvmConfigsListConfigsFapHw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFapHwToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFapHw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFapHwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFapHw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFapHw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFapHwList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFapHwOutputReference {
    return new DataFortiflexvmConfigsListConfigsFapHwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFazVm {
}

export function dataFortiflexvmConfigsListConfigsFazVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFazVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFazVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFazVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFazVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFazVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFazVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // adom_num - computed: true, optional: false, required: false
  public get adomNum() {
    return this.getNumberAttribute('adom_num');
  }

  // daily_storage - computed: true, optional: false, required: false
  public get dailyStorage() {
    return this.getNumberAttribute('daily_storage');
  }

  // support_service - computed: true, optional: false, required: false
  public get supportService() {
    return this.getStringAttribute('support_service');
  }
}

export class DataFortiflexvmConfigsListConfigsFazVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFazVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFazVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFcEmsCloud {
}

export function dataFortiflexvmConfigsListConfigsFcEmsCloudToTerraform(struct?: DataFortiflexvmConfigsListConfigsFcEmsCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFcEmsCloudToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFcEmsCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFcEmsCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFcEmsCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFcEmsCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // chromebook - computed: true, optional: false, required: false
  public get chromebook() {
    return this.getNumberAttribute('chromebook');
  }

  // epp_ztna_fgf_num - computed: true, optional: false, required: false
  public get eppZtnaFgfNum() {
    return this.getNumberAttribute('epp_ztna_fgf_num');
  }

  // epp_ztna_num - computed: true, optional: false, required: false
  public get eppZtnaNum() {
    return this.getNumberAttribute('epp_ztna_num');
  }

  // ztna_fgf_num - computed: true, optional: false, required: false
  public get ztnaFgfNum() {
    return this.getNumberAttribute('ztna_fgf_num');
  }

  // ztna_num - computed: true, optional: false, required: false
  public get ztnaNum() {
    return this.getNumberAttribute('ztna_num');
  }
}

export class DataFortiflexvmConfigsListConfigsFcEmsCloudList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFcEmsCloudOutputReference {
    return new DataFortiflexvmConfigsListConfigsFcEmsCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFcEmsOp {
}

export function dataFortiflexvmConfigsListConfigsFcEmsOpToTerraform(struct?: DataFortiflexvmConfigsListConfigsFcEmsOp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFcEmsOpToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFcEmsOp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFcEmsOpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFcEmsOp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFcEmsOp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // chromebook - computed: true, optional: false, required: false
  public get chromebook() {
    return this.getNumberAttribute('chromebook');
  }

  // epp_ztna_num - computed: true, optional: false, required: false
  public get eppZtnaNum() {
    return this.getNumberAttribute('epp_ztna_num');
  }

  // support_service - computed: true, optional: false, required: false
  public get supportService() {
    return this.getStringAttribute('support_service');
  }

  // ztna_num - computed: true, optional: false, required: false
  public get ztnaNum() {
    return this.getNumberAttribute('ztna_num');
  }
}

export class DataFortiflexvmConfigsListConfigsFcEmsOpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFcEmsOpOutputReference {
    return new DataFortiflexvmConfigsListConfigsFcEmsOpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFgtHw {
}

export function dataFortiflexvmConfigsListConfigsFgtHwToTerraform(struct?: DataFortiflexvmConfigsListConfigsFgtHw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFgtHwToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFgtHw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFgtHwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFgtHw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFgtHw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFgtHwList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFgtHwOutputReference {
    return new DataFortiflexvmConfigsListConfigsFgtHwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFgtVmBundle {
}

export function dataFortiflexvmConfigsListConfigsFgtVmBundleToTerraform(struct?: DataFortiflexvmConfigsListConfigsFgtVmBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFgtVmBundleToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFgtVmBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFgtVmBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFgtVmBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFgtVmBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_services - computed: true, optional: false, required: false
  public get cloudServices() {
    return this.getListAttribute('cloud_services');
  }

  // cpu_size - computed: true, optional: false, required: false
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }

  // fortiguard_services - computed: true, optional: false, required: false
  public get fortiguardServices() {
    return this.getListAttribute('fortiguard_services');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }

  // support_service - computed: true, optional: false, required: false
  public get supportService() {
    return this.getStringAttribute('support_service');
  }

  // vdom_num - computed: true, optional: false, required: false
  public get vdomNum() {
    return this.getNumberAttribute('vdom_num');
  }
}

export class DataFortiflexvmConfigsListConfigsFgtVmBundleList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFgtVmBundleOutputReference {
    return new DataFortiflexvmConfigsListConfigsFgtVmBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFgtVmLcs {
}

export function dataFortiflexvmConfigsListConfigsFgtVmLcsToTerraform(struct?: DataFortiflexvmConfigsListConfigsFgtVmLcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFgtVmLcsToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFgtVmLcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFgtVmLcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFgtVmLcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFgtVmLcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_services - computed: true, optional: false, required: false
  public get cloudServices() {
    return this.getListAttribute('cloud_services');
  }

  // cpu_size - computed: true, optional: false, required: false
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }

  // fortiguard_services - computed: true, optional: false, required: false
  public get fortiguardServices() {
    return this.getListAttribute('fortiguard_services');
  }

  // support_service - computed: true, optional: false, required: false
  public get supportService() {
    return this.getStringAttribute('support_service');
  }

  // vdom_num - computed: true, optional: false, required: false
  public get vdomNum() {
    return this.getNumberAttribute('vdom_num');
  }
}

export class DataFortiflexvmConfigsListConfigsFgtVmLcsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFgtVmLcsOutputReference {
    return new DataFortiflexvmConfigsListConfigsFgtVmLcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFmgVm {
}

export function dataFortiflexvmConfigsListConfigsFmgVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFmgVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFmgVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFmgVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFmgVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFmgVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFmgVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adom_num - computed: true, optional: false, required: false
  public get adomNum() {
    return this.getNumberAttribute('adom_num');
  }

  // managed_dev - computed: true, optional: false, required: false
  public get managedDev() {
    return this.getNumberAttribute('managed_dev');
  }
}

export class DataFortiflexvmConfigsListConfigsFmgVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFmgVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFmgVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortiappsec {
}

export function dataFortiflexvmConfigsListConfigsFortiappsecToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortiappsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortiappsecToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortiappsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortiappsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortiappsec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortiappsec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return this.getNumberAttribute('applications');
  }

  // health_checks - computed: true, optional: false, required: false
  public get healthChecks() {
    return this.getNumberAttribute('health_checks');
  }

  // qps - computed: true, optional: false, required: false
  public get qps() {
    return this.getNumberAttribute('qps');
  }

  // service_types - computed: true, optional: false, required: false
  public get serviceTypes() {
    return this.getListAttribute('service_types');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // waf_addons - computed: true, optional: false, required: false
  public get wafAddons() {
    return this.getListAttribute('waf_addons');
  }

  // waf_service_pkg - computed: true, optional: false, required: false
  public get wafServicePkg() {
    return this.getStringAttribute('waf_service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFortiappsecList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortiappsecOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortiappsecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortidlp {
}

export function dataFortiflexvmConfigsListConfigsFortidlpToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortidlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortidlpToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortidlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortidlpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortidlp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortidlp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getNumberAttribute('endpoints');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFortidlpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortidlpOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortidlpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortiedr {
}

export function dataFortiflexvmConfigsListConfigsFortiedrToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortiedr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortiedrToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortiedr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortiedrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortiedr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortiedr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getNumberAttribute('endpoints');
  }

  // repository_storage - computed: true, optional: false, required: false
  public get repositoryStorage() {
    return this.getNumberAttribute('repository_storage');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFortiedrList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortiedrOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortiedrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortimailVm {
}

export function dataFortiflexvmConfigsListConfigsFortimailVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortimailVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortimailVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortimailVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortimailVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortimailVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortimailVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // cpu_size - computed: true, optional: false, required: false
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFortimailVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortimailVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortimailVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortinacVm {
}

export function dataFortiflexvmConfigsListConfigsFortinacVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortinacVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortinacVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortinacVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortinacVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortinacVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortinacVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getNumberAttribute('endpoints');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }

  // support_service - computed: true, optional: false, required: false
  public get supportService() {
    return this.getStringAttribute('support_service');
  }
}

export class DataFortiflexvmConfigsListConfigsFortinacVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortinacVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortinacVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortindrCloud {
}

export function dataFortiflexvmConfigsListConfigsFortindrCloudToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortindrCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortindrCloudToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortindrCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortindrCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortindrCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortindrCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metered_usage - computed: true, optional: false, required: false
  public get meteredUsage() {
    return this.getNumberAttribute('metered_usage');
  }
}

export class DataFortiflexvmConfigsListConfigsFortindrCloudList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortindrCloudOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortindrCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortirecon {
}

export function dataFortiflexvmConfigsListConfigsFortireconToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortirecon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortireconToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortirecon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortireconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortirecon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortirecon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_num - computed: true, optional: false, required: false
  public get assetNum() {
    return this.getNumberAttribute('asset_num');
  }

  // executive_num - computed: true, optional: false, required: false
  public get executiveNum() {
    return this.getNumberAttribute('executive_num');
  }

  // network_num - computed: true, optional: false, required: false
  public get networkNum() {
    return this.getNumberAttribute('network_num');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }

  // vendor_num - computed: true, optional: false, required: false
  public get vendorNum() {
    return this.getNumberAttribute('vendor_num');
  }
}

export class DataFortiflexvmConfigsListConfigsFortireconList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortireconOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortireconOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortisase {
}

export function dataFortiflexvmConfigsListConfigsFortisaseToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortisase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortisaseToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortisase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortisaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortisase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortisase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_compute_region - computed: true, optional: false, required: false
  public get additionalComputeRegion() {
    return this.getNumberAttribute('additional_compute_region');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // dedicated_ips - computed: true, optional: false, required: false
  public get dedicatedIps() {
    return this.getNumberAttribute('dedicated_ips');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getNumberAttribute('locations');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getNumberAttribute('users');
  }
}

export class DataFortiflexvmConfigsListConfigsFortisaseList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortisaseOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortisaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFortisoarVm {
}

export function dataFortiflexvmConfigsListConfigsFortisoarVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFortisoarVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFortisoarVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFortisoarVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFortisoarVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFortisoarVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFortisoarVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_users_license - computed: true, optional: false, required: false
  public get additionalUsersLicense() {
    return this.getNumberAttribute('additional_users_license');
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getListAttribute('addons');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFortisoarVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFortisoarVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFortisoarVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFpcVm {
}

export function dataFortiflexvmConfigsListConfigsFpcVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFpcVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFpcVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFpcVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFpcVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFpcVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFpcVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_dev - computed: true, optional: false, required: false
  public get managedDev() {
    return this.getNumberAttribute('managed_dev');
  }
}

export class DataFortiflexvmConfigsListConfigsFpcVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFpcVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFpcVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFswHw {
}

export function dataFortiflexvmConfigsListConfigsFswHwToTerraform(struct?: DataFortiflexvmConfigsListConfigsFswHw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFswHwToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFswHw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFswHwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFswHw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFswHw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFswHwList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFswHwOutputReference {
    return new DataFortiflexvmConfigsListConfigsFswHwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFwbVm {
}

export function dataFortiflexvmConfigsListConfigsFwbVmToTerraform(struct?: DataFortiflexvmConfigsListConfigsFwbVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFwbVmToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFwbVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFwbVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFwbVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFwbVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_size - computed: true, optional: false, required: false
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }

  // service_pkg - computed: true, optional: false, required: false
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
}

export class DataFortiflexvmConfigsListConfigsFwbVmList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFwbVmOutputReference {
    return new DataFortiflexvmConfigsListConfigsFwbVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFwbcPrivate {
}

export function dataFortiflexvmConfigsListConfigsFwbcPrivateToTerraform(struct?: DataFortiflexvmConfigsListConfigsFwbcPrivate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFwbcPrivateToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFwbcPrivate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFwbcPrivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFwbcPrivate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFwbcPrivate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // average_throughput - computed: true, optional: false, required: false
  public get averageThroughput() {
    return this.getNumberAttribute('average_throughput');
  }

  // web_applications - computed: true, optional: false, required: false
  public get webApplications() {
    return this.getNumberAttribute('web_applications');
  }
}

export class DataFortiflexvmConfigsListConfigsFwbcPrivateList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFwbcPrivateOutputReference {
    return new DataFortiflexvmConfigsListConfigsFwbcPrivateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsFwbcPublic {
}

export function dataFortiflexvmConfigsListConfigsFwbcPublicToTerraform(struct?: DataFortiflexvmConfigsListConfigsFwbcPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsFwbcPublicToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsFwbcPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsFwbcPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsFwbcPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsFwbcPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // average_throughput - computed: true, optional: false, required: false
  public get averageThroughput() {
    return this.getNumberAttribute('average_throughput');
  }

  // web_applications - computed: true, optional: false, required: false
  public get webApplications() {
    return this.getNumberAttribute('web_applications');
  }
}

export class DataFortiflexvmConfigsListConfigsFwbcPublicList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsFwbcPublicOutputReference {
    return new DataFortiflexvmConfigsListConfigsFwbcPublicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigsSiemCloud {
}

export function dataFortiflexvmConfigsListConfigsSiemCloudToTerraform(struct?: DataFortiflexvmConfigsListConfigsSiemCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsSiemCloudToHclTerraform(struct?: DataFortiflexvmConfigsListConfigsSiemCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsSiemCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigsSiemCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigsSiemCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_online_storage - computed: true, optional: false, required: false
  public get additionalOnlineStorage() {
    return this.getNumberAttribute('additional_online_storage');
  }

  // archive_storage - computed: true, optional: false, required: false
  public get archiveStorage() {
    return this.getNumberAttribute('archive_storage');
  }

  // compute_units - computed: true, optional: false, required: false
  public get computeUnits() {
    return this.getNumberAttribute('compute_units');
  }
}

export class DataFortiflexvmConfigsListConfigsSiemCloudList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsSiemCloudOutputReference {
    return new DataFortiflexvmConfigsListConfigsSiemCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiflexvmConfigsListConfigs {
}

export function dataFortiflexvmConfigsListConfigsToTerraform(struct?: DataFortiflexvmConfigsListConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiflexvmConfigsListConfigsToHclTerraform(struct?: DataFortiflexvmConfigsListConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiflexvmConfigsListConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiflexvmConfigsListConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiflexvmConfigsListConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // fad_vm - computed: true, optional: false, required: false
  private _fadVm = new DataFortiflexvmConfigsListConfigsFadVmList(this, "fad_vm", false);
  public get fadVm() {
    return this._fadVm;
  }

  // fap_hw - computed: true, optional: false, required: false
  private _fapHw = new DataFortiflexvmConfigsListConfigsFapHwList(this, "fap_hw", false);
  public get fapHw() {
    return this._fapHw;
  }

  // faz_vm - computed: true, optional: false, required: false
  private _fazVm = new DataFortiflexvmConfigsListConfigsFazVmList(this, "faz_vm", false);
  public get fazVm() {
    return this._fazVm;
  }

  // fc_ems_cloud - computed: true, optional: false, required: false
  private _fcEmsCloud = new DataFortiflexvmConfigsListConfigsFcEmsCloudList(this, "fc_ems_cloud", false);
  public get fcEmsCloud() {
    return this._fcEmsCloud;
  }

  // fc_ems_op - computed: true, optional: false, required: false
  private _fcEmsOp = new DataFortiflexvmConfigsListConfigsFcEmsOpList(this, "fc_ems_op", false);
  public get fcEmsOp() {
    return this._fcEmsOp;
  }

  // fgt_hw - computed: true, optional: false, required: false
  private _fgtHw = new DataFortiflexvmConfigsListConfigsFgtHwList(this, "fgt_hw", false);
  public get fgtHw() {
    return this._fgtHw;
  }

  // fgt_vm_bundle - computed: true, optional: false, required: false
  private _fgtVmBundle = new DataFortiflexvmConfigsListConfigsFgtVmBundleList(this, "fgt_vm_bundle", false);
  public get fgtVmBundle() {
    return this._fgtVmBundle;
  }

  // fgt_vm_lcs - computed: true, optional: false, required: false
  private _fgtVmLcs = new DataFortiflexvmConfigsListConfigsFgtVmLcsList(this, "fgt_vm_lcs", false);
  public get fgtVmLcs() {
    return this._fgtVmLcs;
  }

  // fmg_vm - computed: true, optional: false, required: false
  private _fmgVm = new DataFortiflexvmConfigsListConfigsFmgVmList(this, "fmg_vm", false);
  public get fmgVm() {
    return this._fmgVm;
  }

  // fortiappsec - computed: true, optional: false, required: false
  private _fortiappsec = new DataFortiflexvmConfigsListConfigsFortiappsecList(this, "fortiappsec", false);
  public get fortiappsec() {
    return this._fortiappsec;
  }

  // fortidlp - computed: true, optional: false, required: false
  private _fortidlp = new DataFortiflexvmConfigsListConfigsFortidlpList(this, "fortidlp", false);
  public get fortidlp() {
    return this._fortidlp;
  }

  // fortiedr - computed: true, optional: false, required: false
  private _fortiedr = new DataFortiflexvmConfigsListConfigsFortiedrList(this, "fortiedr", false);
  public get fortiedr() {
    return this._fortiedr;
  }

  // fortimail_vm - computed: true, optional: false, required: false
  private _fortimailVm = new DataFortiflexvmConfigsListConfigsFortimailVmList(this, "fortimail_vm", false);
  public get fortimailVm() {
    return this._fortimailVm;
  }

  // fortinac_vm - computed: true, optional: false, required: false
  private _fortinacVm = new DataFortiflexvmConfigsListConfigsFortinacVmList(this, "fortinac_vm", false);
  public get fortinacVm() {
    return this._fortinacVm;
  }

  // fortindr_cloud - computed: true, optional: false, required: false
  private _fortindrCloud = new DataFortiflexvmConfigsListConfigsFortindrCloudList(this, "fortindr_cloud", false);
  public get fortindrCloud() {
    return this._fortindrCloud;
  }

  // fortirecon - computed: true, optional: false, required: false
  private _fortirecon = new DataFortiflexvmConfigsListConfigsFortireconList(this, "fortirecon", false);
  public get fortirecon() {
    return this._fortirecon;
  }

  // fortisase - computed: true, optional: false, required: false
  private _fortisase = new DataFortiflexvmConfigsListConfigsFortisaseList(this, "fortisase", false);
  public get fortisase() {
    return this._fortisase;
  }

  // fortisoar_vm - computed: true, optional: false, required: false
  private _fortisoarVm = new DataFortiflexvmConfigsListConfigsFortisoarVmList(this, "fortisoar_vm", false);
  public get fortisoarVm() {
    return this._fortisoarVm;
  }

  // fpc_vm - computed: true, optional: false, required: false
  private _fpcVm = new DataFortiflexvmConfigsListConfigsFpcVmList(this, "fpc_vm", false);
  public get fpcVm() {
    return this._fpcVm;
  }

  // fsw_hw - computed: true, optional: false, required: false
  private _fswHw = new DataFortiflexvmConfigsListConfigsFswHwList(this, "fsw_hw", false);
  public get fswHw() {
    return this._fswHw;
  }

  // fwb_vm - computed: true, optional: false, required: false
  private _fwbVm = new DataFortiflexvmConfigsListConfigsFwbVmList(this, "fwb_vm", false);
  public get fwbVm() {
    return this._fwbVm;
  }

  // fwbc_private - computed: true, optional: false, required: false
  private _fwbcPrivate = new DataFortiflexvmConfigsListConfigsFwbcPrivateList(this, "fwbc_private", false);
  public get fwbcPrivate() {
    return this._fwbcPrivate;
  }

  // fwbc_public - computed: true, optional: false, required: false
  private _fwbcPublic = new DataFortiflexvmConfigsListConfigsFwbcPublicList(this, "fwbc_public", false);
  public get fwbcPublic() {
    return this._fwbcPublic;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // program_serial_number - computed: true, optional: false, required: false
  public get programSerialNumber() {
    return this.getStringAttribute('program_serial_number');
  }

  // siem_cloud - computed: true, optional: false, required: false
  private _siemCloud = new DataFortiflexvmConfigsListConfigsSiemCloudList(this, "siem_cloud", false);
  public get siemCloud() {
    return this._siemCloud;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataFortiflexvmConfigsListConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiflexvmConfigsListConfigsOutputReference {
    return new DataFortiflexvmConfigsListConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/data-sources/configs_list fortiflexvm_configs_list}
*/
export class DataFortiflexvmConfigsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiflexvm_configs_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiflexvmConfigsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiflexvmConfigsList to import
  * @param importFromId The id of the existing DataFortiflexvmConfigsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/data-sources/configs_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiflexvmConfigsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiflexvm_configs_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.3/docs/data-sources/configs_list fortiflexvm_configs_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiflexvmConfigsListConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiflexvmConfigsListConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiflexvm_configs_list',
      terraformGeneratorMetadata: {
        providerName: 'fortiflexvm',
        providerVersion: '2.4.3',
        providerVersionConstraint: '2.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._programSerialNumber = config.programSerialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // configs - computed: true, optional: false, required: false
  private _configs = new DataFortiflexvmConfigsListConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
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

  // program_serial_number - computed: false, optional: false, required: true
  private _programSerialNumber?: string; 
  public get programSerialNumber() {
    return this.getStringAttribute('program_serial_number');
  }
  public set programSerialNumber(value: string) {
    this._programSerialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programSerialNumberInput() {
    return this._programSerialNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      program_serial_number: cdktf.stringToTerraform(this._programSerialNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
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
      program_serial_number: {
        value: cdktf.stringToHclTerraform(this._programSerialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
