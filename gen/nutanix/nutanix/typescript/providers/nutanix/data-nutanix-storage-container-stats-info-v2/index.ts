// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixStorageContainerStatsInfoV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2#end_time DataNutanixStorageContainerStatsInfoV2#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2#ext_id DataNutanixStorageContainerStatsInfoV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2#id DataNutanixStorageContainerStatsInfoV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2#sampling_interval DataNutanixStorageContainerStatsInfoV2#sampling_interval}
  */
  readonly samplingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2#start_time DataNutanixStorageContainerStatsInfoV2#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2#stat_type DataNutanixStorageContainerStatsInfoV2#stat_type}
  */
  readonly statType?: string;
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecs {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecs {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecs {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbps {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbpsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbpsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbpsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbpsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerNumIops {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerNumIopsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerNumIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerNumIopsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerNumIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerNumIopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerNumIops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerNumIops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerNumIopsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerNumIopsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerNumIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerNumReadIops {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerNumReadIopsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerNumReadIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerNumReadIopsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerNumReadIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerNumReadIopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerNumReadIops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerNumReadIops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerNumReadIopsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerNumReadIopsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerNumReadIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIops {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerNumWriteIopsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerNumWriteIopsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIopsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIopsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbps {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbpsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbpsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbpsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbpsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbps {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbpsToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbpsToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbpsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbpsOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytes {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytes {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytes {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionSavedBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionSavedBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpm {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpmToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpmToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpmList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpmOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytes {
}

export function dataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2Health {
}

export function dataNutanixStorageContainerStatsInfoV2HealthToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2Health): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2HealthToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2Health): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2HealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2Health | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2Health | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2HealthList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2HealthOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2HealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2Links {
}

export function dataNutanixStorageContainerStatsInfoV2LinksToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2LinksToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixStorageContainerStatsInfoV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2LinksOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytes {
}

export function dataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageCapacityBytes {
}

export function dataNutanixStorageContainerStatsInfoV2StorageCapacityBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageCapacityBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageCapacityBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageCapacityBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageCapacityBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageCapacityBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageCapacityBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageCapacityBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageCapacityBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageCapacityBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageFreeBytes {
}

export function dataNutanixStorageContainerStatsInfoV2StorageFreeBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageFreeBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageFreeBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageFreeBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageFreeBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageFreeBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageFreeBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageFreeBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageFreeBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageFreeBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageReplicationFactor {
}

export function dataNutanixStorageContainerStatsInfoV2StorageReplicationFactorToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageReplicationFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageReplicationFactorToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageReplicationFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageReplicationFactorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageReplicationFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageReplicationFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageReplicationFactorList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageReplicationFactorOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageReplicationFactorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytes {
}

export function dataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytes {
}

export function dataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytes {
}

export function dataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStorageContainerStatsInfoV2StorageUsageBytes {
}

export function dataNutanixStorageContainerStatsInfoV2StorageUsageBytesToTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStorageContainerStatsInfoV2StorageUsageBytesToHclTerraform(struct?: DataNutanixStorageContainerStatsInfoV2StorageUsageBytes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStorageContainerStatsInfoV2StorageUsageBytesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStorageContainerStatsInfoV2StorageUsageBytes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStorageContainerStatsInfoV2StorageUsageBytes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataNutanixStorageContainerStatsInfoV2StorageUsageBytesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStorageContainerStatsInfoV2StorageUsageBytesOutputReference {
    return new DataNutanixStorageContainerStatsInfoV2StorageUsageBytesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2 nutanix_storage_container_stats_info_v2}
*/
export class DataNutanixStorageContainerStatsInfoV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_storage_container_stats_info_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixStorageContainerStatsInfoV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixStorageContainerStatsInfoV2 to import
  * @param importFromId The id of the existing DataNutanixStorageContainerStatsInfoV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixStorageContainerStatsInfoV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_storage_container_stats_info_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/storage_container_stats_info_v2 nutanix_storage_container_stats_info_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixStorageContainerStatsInfoV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixStorageContainerStatsInfoV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_storage_container_stats_info_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTime = config.endTime;
    this._extId = config.extId;
    this._id = config.id;
    this._samplingInterval = config.samplingInterval;
    this._startTime = config.startTime;
    this._statType = config.statType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_ext_id - computed: true, optional: false, required: false
  public get containerExtId() {
    return this.getStringAttribute('container_ext_id');
  }

  // controller_avg_io_latencyu_secs - computed: true, optional: false, required: false
  private _controllerAvgIoLatencyuSecs = new DataNutanixStorageContainerStatsInfoV2ControllerAvgIoLatencyuSecsList(this, "controller_avg_io_latencyu_secs", false);
  public get controllerAvgIoLatencyuSecs() {
    return this._controllerAvgIoLatencyuSecs;
  }

  // controller_avg_read_io_latencyu_secs - computed: true, optional: false, required: false
  private _controllerAvgReadIoLatencyuSecs = new DataNutanixStorageContainerStatsInfoV2ControllerAvgReadIoLatencyuSecsList(this, "controller_avg_read_io_latencyu_secs", false);
  public get controllerAvgReadIoLatencyuSecs() {
    return this._controllerAvgReadIoLatencyuSecs;
  }

  // controller_avg_write_io_latencyu_secs - computed: true, optional: false, required: false
  private _controllerAvgWriteIoLatencyuSecs = new DataNutanixStorageContainerStatsInfoV2ControllerAvgWriteIoLatencyuSecsList(this, "controller_avg_write_io_latencyu_secs", false);
  public get controllerAvgWriteIoLatencyuSecs() {
    return this._controllerAvgWriteIoLatencyuSecs;
  }

  // controller_io_bandwidth_kbps - computed: true, optional: false, required: false
  private _controllerIoBandwidthKbps = new DataNutanixStorageContainerStatsInfoV2ControllerIoBandwidthKbpsList(this, "controller_io_bandwidth_kbps", false);
  public get controllerIoBandwidthKbps() {
    return this._controllerIoBandwidthKbps;
  }

  // controller_num_iops - computed: true, optional: false, required: false
  private _controllerNumIops = new DataNutanixStorageContainerStatsInfoV2ControllerNumIopsList(this, "controller_num_iops", false);
  public get controllerNumIops() {
    return this._controllerNumIops;
  }

  // controller_num_read_iops - computed: true, optional: false, required: false
  private _controllerNumReadIops = new DataNutanixStorageContainerStatsInfoV2ControllerNumReadIopsList(this, "controller_num_read_iops", false);
  public get controllerNumReadIops() {
    return this._controllerNumReadIops;
  }

  // controller_num_write_iops - computed: true, optional: false, required: false
  private _controllerNumWriteIops = new DataNutanixStorageContainerStatsInfoV2ControllerNumWriteIopsList(this, "controller_num_write_iops", false);
  public get controllerNumWriteIops() {
    return this._controllerNumWriteIops;
  }

  // controller_read_io_bandwidth_kbps - computed: true, optional: false, required: false
  private _controllerReadIoBandwidthKbps = new DataNutanixStorageContainerStatsInfoV2ControllerReadIoBandwidthKbpsList(this, "controller_read_io_bandwidth_kbps", false);
  public get controllerReadIoBandwidthKbps() {
    return this._controllerReadIoBandwidthKbps;
  }

  // controller_read_io_ratio_ppm - computed: true, optional: false, required: false
  private _controllerReadIoRatioPpm = new DataNutanixStorageContainerStatsInfoV2ControllerReadIoRatioPpmList(this, "controller_read_io_ratio_ppm", false);
  public get controllerReadIoRatioPpm() {
    return this._controllerReadIoRatioPpm;
  }

  // controller_write_io_bandwidth_kbps - computed: true, optional: false, required: false
  private _controllerWriteIoBandwidthKbps = new DataNutanixStorageContainerStatsInfoV2ControllerWriteIoBandwidthKbpsList(this, "controller_write_io_bandwidth_kbps", false);
  public get controllerWriteIoBandwidthKbps() {
    return this._controllerWriteIoBandwidthKbps;
  }

  // controller_write_io_ratio_ppm - computed: true, optional: false, required: false
  private _controllerWriteIoRatioPpm = new DataNutanixStorageContainerStatsInfoV2ControllerWriteIoRatioPpmList(this, "controller_write_io_ratio_ppm", false);
  public get controllerWriteIoRatioPpm() {
    return this._controllerWriteIoRatioPpm;
  }

  // data_reduction_clone_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionCloneSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionCloneSavingRatioPpmList(this, "data_reduction_clone_saving_ratio_ppm", false);
  public get dataReductionCloneSavingRatioPpm() {
    return this._dataReductionCloneSavingRatioPpm;
  }

  // data_reduction_compression_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionCompressionSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionCompressionSavingRatioPpmList(this, "data_reduction_compression_saving_ratio_ppm", false);
  public get dataReductionCompressionSavingRatioPpm() {
    return this._dataReductionCompressionSavingRatioPpm;
  }

  // data_reduction_dedup_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionDedupSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionDedupSavingRatioPpmList(this, "data_reduction_dedup_saving_ratio_ppm", false);
  public get dataReductionDedupSavingRatioPpm() {
    return this._dataReductionDedupSavingRatioPpm;
  }

  // data_reduction_erasure_coding_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionErasureCodingSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionErasureCodingSavingRatioPpmList(this, "data_reduction_erasure_coding_saving_ratio_ppm", false);
  public get dataReductionErasureCodingSavingRatioPpm() {
    return this._dataReductionErasureCodingSavingRatioPpm;
  }

  // data_reduction_overall_post_reduction_bytes - computed: true, optional: false, required: false
  private _dataReductionOverallPostReductionBytes = new DataNutanixStorageContainerStatsInfoV2DataReductionOverallPostReductionBytesList(this, "data_reduction_overall_post_reduction_bytes", false);
  public get dataReductionOverallPostReductionBytes() {
    return this._dataReductionOverallPostReductionBytes;
  }

  // data_reduction_overall_pre_reduction_bytes - computed: true, optional: false, required: false
  private _dataReductionOverallPreReductionBytes = new DataNutanixStorageContainerStatsInfoV2DataReductionOverallPreReductionBytesList(this, "data_reduction_overall_pre_reduction_bytes", false);
  public get dataReductionOverallPreReductionBytes() {
    return this._dataReductionOverallPreReductionBytes;
  }

  // data_reduction_saved_bytes - computed: true, optional: false, required: false
  private _dataReductionSavedBytes = new DataNutanixStorageContainerStatsInfoV2DataReductionSavedBytesList(this, "data_reduction_saved_bytes", false);
  public get dataReductionSavedBytes() {
    return this._dataReductionSavedBytes;
  }

  // data_reduction_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionSavingRatioPpmList(this, "data_reduction_saving_ratio_ppm", false);
  public get dataReductionSavingRatioPpm() {
    return this._dataReductionSavingRatioPpm;
  }

  // data_reduction_snapshot_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionSnapshotSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionSnapshotSavingRatioPpmList(this, "data_reduction_snapshot_saving_ratio_ppm", false);
  public get dataReductionSnapshotSavingRatioPpm() {
    return this._dataReductionSnapshotSavingRatioPpm;
  }

  // data_reduction_thin_provision_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionThinProvisionSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionThinProvisionSavingRatioPpmList(this, "data_reduction_thin_provision_saving_ratio_ppm", false);
  public get dataReductionThinProvisionSavingRatioPpm() {
    return this._dataReductionThinProvisionSavingRatioPpm;
  }

  // data_reduction_total_saving_ratio_ppm - computed: true, optional: false, required: false
  private _dataReductionTotalSavingRatioPpm = new DataNutanixStorageContainerStatsInfoV2DataReductionTotalSavingRatioPpmList(this, "data_reduction_total_saving_ratio_ppm", false);
  public get dataReductionTotalSavingRatioPpm() {
    return this._dataReductionTotalSavingRatioPpm;
  }

  // data_reduction_zero_write_savings_bytes - computed: true, optional: false, required: false
  private _dataReductionZeroWriteSavingsBytes = new DataNutanixStorageContainerStatsInfoV2DataReductionZeroWriteSavingsBytesList(this, "data_reduction_zero_write_savings_bytes", false);
  public get dataReductionZeroWriteSavingsBytes() {
    return this._dataReductionZeroWriteSavingsBytes;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // health - computed: true, optional: false, required: false
  private _health = new DataNutanixStorageContainerStatsInfoV2HealthList(this, "health", false);
  public get health() {
    return this._health;
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

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixStorageContainerStatsInfoV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // sampling_interval - computed: false, optional: true, required: false
  private _samplingInterval?: number; 
  public get samplingInterval() {
    return this.getNumberAttribute('sampling_interval');
  }
  public set samplingInterval(value: number) {
    this._samplingInterval = value;
  }
  public resetSamplingInterval() {
    this._samplingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingIntervalInput() {
    return this._samplingInterval;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // stat_type - computed: false, optional: true, required: false
  private _statType?: string; 
  public get statType() {
    return this.getStringAttribute('stat_type');
  }
  public set statType(value: string) {
    this._statType = value;
  }
  public resetStatType() {
    this._statType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statTypeInput() {
    return this._statType;
  }

  // storage_actual_physical_usage_bytes - computed: true, optional: false, required: false
  private _storageActualPhysicalUsageBytes = new DataNutanixStorageContainerStatsInfoV2StorageActualPhysicalUsageBytesList(this, "storage_actual_physical_usage_bytes", false);
  public get storageActualPhysicalUsageBytes() {
    return this._storageActualPhysicalUsageBytes;
  }

  // storage_capacity_bytes - computed: true, optional: false, required: false
  private _storageCapacityBytes = new DataNutanixStorageContainerStatsInfoV2StorageCapacityBytesList(this, "storage_capacity_bytes", false);
  public get storageCapacityBytes() {
    return this._storageCapacityBytes;
  }

  // storage_free_bytes - computed: true, optional: false, required: false
  private _storageFreeBytes = new DataNutanixStorageContainerStatsInfoV2StorageFreeBytesList(this, "storage_free_bytes", false);
  public get storageFreeBytes() {
    return this._storageFreeBytes;
  }

  // storage_replication_factor - computed: true, optional: false, required: false
  private _storageReplicationFactor = new DataNutanixStorageContainerStatsInfoV2StorageReplicationFactorList(this, "storage_replication_factor", false);
  public get storageReplicationFactor() {
    return this._storageReplicationFactor;
  }

  // storage_reserved_capacity_bytes - computed: true, optional: false, required: false
  private _storageReservedCapacityBytes = new DataNutanixStorageContainerStatsInfoV2StorageReservedCapacityBytesList(this, "storage_reserved_capacity_bytes", false);
  public get storageReservedCapacityBytes() {
    return this._storageReservedCapacityBytes;
  }

  // storage_tier_das_sata_usage_bytes - computed: true, optional: false, required: false
  private _storageTierDasSataUsageBytes = new DataNutanixStorageContainerStatsInfoV2StorageTierDasSataUsageBytesList(this, "storage_tier_das_sata_usage_bytes", false);
  public get storageTierDasSataUsageBytes() {
    return this._storageTierDasSataUsageBytes;
  }

  // storage_tier_ssd_usage_bytes - computed: true, optional: false, required: false
  private _storageTierSsdUsageBytes = new DataNutanixStorageContainerStatsInfoV2StorageTierSsdUsageBytesList(this, "storage_tier_ssd_usage_bytes", false);
  public get storageTierSsdUsageBytes() {
    return this._storageTierSsdUsageBytes;
  }

  // storage_usage_bytes - computed: true, optional: false, required: false
  private _storageUsageBytes = new DataNutanixStorageContainerStatsInfoV2StorageUsageBytesList(this, "storage_usage_bytes", false);
  public get storageUsageBytes() {
    return this._storageUsageBytes;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      sampling_interval: cdktf.numberToTerraform(this._samplingInterval),
      start_time: cdktf.stringToTerraform(this._startTime),
      stat_type: cdktf.stringToTerraform(this._statType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      sampling_interval: {
        value: cdktf.numberToHclTerraform(this._samplingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stat_type: {
        value: cdktf.stringToHclTerraform(this._statType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
