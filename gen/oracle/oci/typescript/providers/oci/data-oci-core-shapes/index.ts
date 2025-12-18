// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreShapesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#shape DataOciCoreShapes#shape}
  */
  readonly shape?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#filter DataOciCoreShapes#filter}
  */
  readonly filter?: DataOciCoreShapesFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreShapesShapesMaxVnicAttachmentOptions {
}

export function dataOciCoreShapesShapesMaxVnicAttachmentOptionsToTerraform(struct?: DataOciCoreShapesShapesMaxVnicAttachmentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesMaxVnicAttachmentOptionsToHclTerraform(struct?: DataOciCoreShapesShapesMaxVnicAttachmentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesMaxVnicAttachmentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesMaxVnicAttachmentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_per_ocpu - computed: true, optional: false, required: false
  public get defaultPerOcpu() {
    return this.getNumberAttribute('default_per_ocpu');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreShapesShapesMaxVnicAttachmentOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference {
    return new DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesMemoryOptions {
}

export function dataOciCoreShapesShapesMemoryOptionsToTerraform(struct?: DataOciCoreShapesShapesMemoryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesMemoryOptionsToHclTerraform(struct?: DataOciCoreShapesShapesMemoryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesMemoryOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesMemoryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesMemoryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_per_ocpu_in_gbs - computed: true, optional: false, required: false
  public get defaultPerOcpuInGbs() {
    return this.getNumberAttribute('default_per_ocpu_in_gbs');
  }

  // max_in_gbs - computed: true, optional: false, required: false
  public get maxInGbs() {
    return this.getNumberAttribute('max_in_gbs');
  }

  // max_per_numa_node_in_gbs - computed: true, optional: false, required: false
  public get maxPerNumaNodeInGbs() {
    return this.getNumberAttribute('max_per_numa_node_in_gbs');
  }

  // max_per_ocpu_in_gbs - computed: true, optional: false, required: false
  public get maxPerOcpuInGbs() {
    return this.getNumberAttribute('max_per_ocpu_in_gbs');
  }

  // min_in_gbs - computed: true, optional: false, required: false
  public get minInGbs() {
    return this.getNumberAttribute('min_in_gbs');
  }

  // min_per_ocpu_in_gbs - computed: true, optional: false, required: false
  public get minPerOcpuInGbs() {
    return this.getNumberAttribute('min_per_ocpu_in_gbs');
  }
}

export class DataOciCoreShapesShapesMemoryOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesMemoryOptionsOutputReference {
    return new DataOciCoreShapesShapesMemoryOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesNetworkingBandwidthOptions {
}

export function dataOciCoreShapesShapesNetworkingBandwidthOptionsToTerraform(struct?: DataOciCoreShapesShapesNetworkingBandwidthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesNetworkingBandwidthOptionsToHclTerraform(struct?: DataOciCoreShapesShapesNetworkingBandwidthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesNetworkingBandwidthOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesNetworkingBandwidthOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_per_ocpu_in_gbps - computed: true, optional: false, required: false
  public get defaultPerOcpuInGbps() {
    return this.getNumberAttribute('default_per_ocpu_in_gbps');
  }

  // max_in_gbps - computed: true, optional: false, required: false
  public get maxInGbps() {
    return this.getNumberAttribute('max_in_gbps');
  }

  // min_in_gbps - computed: true, optional: false, required: false
  public get minInGbps() {
    return this.getNumberAttribute('min_in_gbps');
  }
}

export class DataOciCoreShapesShapesNetworkingBandwidthOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference {
    return new DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesOcpuOptions {
}

export function dataOciCoreShapesShapesOcpuOptionsToTerraform(struct?: DataOciCoreShapesShapesOcpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesOcpuOptionsToHclTerraform(struct?: DataOciCoreShapesShapesOcpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesOcpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesOcpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesOcpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // max_per_numa_node - computed: true, optional: false, required: false
  public get maxPerNumaNode() {
    return this.getNumberAttribute('max_per_numa_node');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreShapesShapesOcpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesOcpuOptionsOutputReference {
    return new DataOciCoreShapesShapesOcpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new cdktf.BooleanList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // is_default_enabled - computed: true, optional: false, required: false
  public get isDefaultEnabled() {
    return this.getBooleanAttribute('is_default_enabled');
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesPlatformConfigOptions {
}

export function dataOciCoreShapesShapesPlatformConfigOptionsToTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesPlatformConfigOptionsToHclTerraform(struct?: DataOciCoreShapesShapesPlatformConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesPlatformConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesPlatformConfigOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesPlatformConfigOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_service_options - computed: true, optional: false, required: false
  private _accessControlServiceOptions = new DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList(this, "access_control_service_options", false);
  public get accessControlServiceOptions() {
    return this._accessControlServiceOptions;
  }

  // input_output_memory_management_unit_options - computed: true, optional: false, required: false
  private _inputOutputMemoryManagementUnitOptions = new DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList(this, "input_output_memory_management_unit_options", false);
  public get inputOutputMemoryManagementUnitOptions() {
    return this._inputOutputMemoryManagementUnitOptions;
  }

  // measured_boot_options - computed: true, optional: false, required: false
  private _measuredBootOptions = new DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList(this, "measured_boot_options", false);
  public get measuredBootOptions() {
    return this._measuredBootOptions;
  }

  // memory_encryption_options - computed: true, optional: false, required: false
  private _memoryEncryptionOptions = new DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList(this, "memory_encryption_options", false);
  public get memoryEncryptionOptions() {
    return this._memoryEncryptionOptions;
  }

  // numa_nodes_per_socket_platform_options - computed: true, optional: false, required: false
  private _numaNodesPerSocketPlatformOptions = new DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList(this, "numa_nodes_per_socket_platform_options", false);
  public get numaNodesPerSocketPlatformOptions() {
    return this._numaNodesPerSocketPlatformOptions;
  }

  // percentage_of_cores_enabled_options - computed: true, optional: false, required: false
  private _percentageOfCoresEnabledOptions = new DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList(this, "percentage_of_cores_enabled_options", false);
  public get percentageOfCoresEnabledOptions() {
    return this._percentageOfCoresEnabledOptions;
  }

  // secure_boot_options - computed: true, optional: false, required: false
  private _secureBootOptions = new DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList(this, "secure_boot_options", false);
  public get secureBootOptions() {
    return this._secureBootOptions;
  }

  // symmetric_multi_threading_options - computed: true, optional: false, required: false
  private _symmetricMultiThreadingOptions = new DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList(this, "symmetric_multi_threading_options", false);
  public get symmetricMultiThreadingOptions() {
    return this._symmetricMultiThreadingOptions;
  }

  // trusted_platform_module_options - computed: true, optional: false, required: false
  private _trustedPlatformModuleOptions = new DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList(this, "trusted_platform_module_options", false);
  public get trustedPlatformModuleOptions() {
    return this._trustedPlatformModuleOptions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // virtual_instructions_options - computed: true, optional: false, required: false
  private _virtualInstructionsOptions = new DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList(this, "virtual_instructions_options", false);
  public get virtualInstructionsOptions() {
    return this._virtualInstructionsOptions;
  }
}

export class DataOciCoreShapesShapesPlatformConfigOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesPlatformConfigOptionsOutputReference {
    return new DataOciCoreShapesShapesPlatformConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapesRecommendedAlternatives {
}

export function dataOciCoreShapesShapesRecommendedAlternativesToTerraform(struct?: DataOciCoreShapesShapesRecommendedAlternatives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesRecommendedAlternativesToHclTerraform(struct?: DataOciCoreShapesShapesRecommendedAlternatives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesRecommendedAlternativesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapesRecommendedAlternatives | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapesRecommendedAlternatives | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
}

export class DataOciCoreShapesShapesRecommendedAlternativesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesRecommendedAlternativesOutputReference {
    return new DataOciCoreShapesShapesRecommendedAlternativesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesShapes {
}

export function dataOciCoreShapesShapesToTerraform(struct?: DataOciCoreShapesShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreShapesShapesToHclTerraform(struct?: DataOciCoreShapesShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreShapesShapesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesShapes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesShapes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_ocpu_utilizations - computed: true, optional: false, required: false
  public get baselineOcpuUtilizations() {
    return this.getListAttribute('baseline_ocpu_utilizations');
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // gpu_description - computed: true, optional: false, required: false
  public get gpuDescription() {
    return this.getStringAttribute('gpu_description');
  }

  // gpus - computed: true, optional: false, required: false
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // is_billed_for_stopped_instance - computed: true, optional: false, required: false
  public get isBilledForStoppedInstance() {
    return this.getBooleanAttribute('is_billed_for_stopped_instance');
  }

  // is_flexible - computed: true, optional: false, required: false
  public get isFlexible() {
    return this.getBooleanAttribute('is_flexible');
  }

  // is_live_migration_supported - computed: true, optional: false, required: false
  public get isLiveMigrationSupported() {
    return this.getBooleanAttribute('is_live_migration_supported');
  }

  // is_subcore - computed: true, optional: false, required: false
  public get isSubcore() {
    return this.getBooleanAttribute('is_subcore');
  }

  // local_disk_description - computed: true, optional: false, required: false
  public get localDiskDescription() {
    return this.getStringAttribute('local_disk_description');
  }

  // local_disks - computed: true, optional: false, required: false
  public get localDisks() {
    return this.getNumberAttribute('local_disks');
  }

  // local_disks_total_size_in_gbs - computed: true, optional: false, required: false
  public get localDisksTotalSizeInGbs() {
    return this.getNumberAttribute('local_disks_total_size_in_gbs');
  }

  // max_vnic_attachment_options - computed: true, optional: false, required: false
  private _maxVnicAttachmentOptions = new DataOciCoreShapesShapesMaxVnicAttachmentOptionsList(this, "max_vnic_attachment_options", false);
  public get maxVnicAttachmentOptions() {
    return this._maxVnicAttachmentOptions;
  }

  // max_vnic_attachments - computed: true, optional: false, required: false
  public get maxVnicAttachments() {
    return this.getNumberAttribute('max_vnic_attachments');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // memory_options - computed: true, optional: false, required: false
  private _memoryOptions = new DataOciCoreShapesShapesMemoryOptionsList(this, "memory_options", false);
  public get memoryOptions() {
    return this._memoryOptions;
  }

  // min_total_baseline_ocpus_required - computed: true, optional: false, required: false
  public get minTotalBaselineOcpusRequired() {
    return this.getNumberAttribute('min_total_baseline_ocpus_required');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_ports - computed: true, optional: false, required: false
  public get networkPorts() {
    return this.getNumberAttribute('network_ports');
  }

  // networking_bandwidth_in_gbps - computed: true, optional: false, required: false
  public get networkingBandwidthInGbps() {
    return this.getNumberAttribute('networking_bandwidth_in_gbps');
  }

  // networking_bandwidth_options - computed: true, optional: false, required: false
  private _networkingBandwidthOptions = new DataOciCoreShapesShapesNetworkingBandwidthOptionsList(this, "networking_bandwidth_options", false);
  public get networkingBandwidthOptions() {
    return this._networkingBandwidthOptions;
  }

  // ocpu_options - computed: true, optional: false, required: false
  private _ocpuOptions = new DataOciCoreShapesShapesOcpuOptionsList(this, "ocpu_options", false);
  public get ocpuOptions() {
    return this._ocpuOptions;
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // platform_config_options - computed: true, optional: false, required: false
  private _platformConfigOptions = new DataOciCoreShapesShapesPlatformConfigOptionsList(this, "platform_config_options", false);
  public get platformConfigOptions() {
    return this._platformConfigOptions;
  }

  // platform_names - computed: true, optional: false, required: false
  public get platformNames() {
    return this.getListAttribute('platform_names');
  }

  // processor_description - computed: true, optional: false, required: false
  public get processorDescription() {
    return this.getStringAttribute('processor_description');
  }

  // quota_names - computed: true, optional: false, required: false
  public get quotaNames() {
    return this.getListAttribute('quota_names');
  }

  // rdma_bandwidth_in_gbps - computed: true, optional: false, required: false
  public get rdmaBandwidthInGbps() {
    return this.getNumberAttribute('rdma_bandwidth_in_gbps');
  }

  // rdma_ports - computed: true, optional: false, required: false
  public get rdmaPorts() {
    return this.getNumberAttribute('rdma_ports');
  }

  // recommended_alternatives - computed: true, optional: false, required: false
  private _recommendedAlternatives = new DataOciCoreShapesShapesRecommendedAlternativesList(this, "recommended_alternatives", false);
  public get recommendedAlternatives() {
    return this._recommendedAlternatives;
  }

  // resize_compatible_shapes - computed: true, optional: false, required: false
  public get resizeCompatibleShapes() {
    return this.getListAttribute('resize_compatible_shapes');
  }
}

export class DataOciCoreShapesShapesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreShapesShapesOutputReference {
    return new DataOciCoreShapesShapesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreShapesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}
  */
  readonly values: string[];
}

export function dataOciCoreShapesFilterToTerraform(struct?: DataOciCoreShapesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCoreShapesFilterToHclTerraform(struct?: DataOciCoreShapesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciCoreShapesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreShapesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreShapesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciCoreShapesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreShapesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreShapesFilterOutputReference {
    return new DataOciCoreShapesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes oci_core_shapes}
*/
export class DataOciCoreShapes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_shapes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreShapes to import
  * @param importFromId The id of the existing DataOciCoreShapes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreShapes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_shapes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_shapes oci_core_shapes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreShapesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._imageId = config.imageId;
    this._shape = config.shape;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // shapes - computed: true, optional: false, required: false
  private _shapes = new DataOciCoreShapesShapesList(this, "shapes", false);
  public get shapes() {
    return this._shapes;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreShapesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreShapesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      shape: cdktf.stringToTerraform(this._shape),
      filter: cdktf.listMapper(dataOciCoreShapesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreShapesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreShapesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
