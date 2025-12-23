// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviGslbhsmruntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime#id DataAviGslbhsmruntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime#name DataAviGslbhsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime#tenant_ref DataAviGslbhsmruntime#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime#uuid DataAviGslbhsmruntime#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviGslbhsmruntimeEventsTimestamp {
}

export function dataAviGslbhsmruntimeEventsTimestampToTerraform(struct?: DataAviGslbhsmruntimeEventsTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeEventsTimestampToHclTerraform(struct?: DataAviGslbhsmruntimeEventsTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeEventsTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeEventsTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeEventsTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeEventsTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeEventsTimestampOutputReference {
    return new DataAviGslbhsmruntimeEventsTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeEvents {
}

export function dataAviGslbhsmruntimeEventsToTerraform(struct?: DataAviGslbhsmruntimeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeEventsToHclTerraform(struct?: DataAviGslbhsmruntimeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getListAttribute('msg');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAviGslbhsmruntimeEventsTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataAviGslbhsmruntimeEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeEventsOutputReference {
    return new DataAviGslbhsmruntimeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTime {
}

export function dataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTimeToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTimeToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTimeOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGsStatus {
}

export function dataAviGslbhsmruntimeLocalInfoGsStatusToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGsStatusToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGsStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbhsmruntimeLocalInfoGsStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // num_partial_updates - computed: true, optional: false, required: false
  public get numPartialUpdates() {
    return this.getStringAttribute('num_partial_updates');
  }

  // partial_update_threshold - computed: true, optional: false, required: false
  public get partialUpdateThreshold() {
    return this.getStringAttribute('partial_update_threshold');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviGslbhsmruntimeLocalInfoGsStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGsStatusOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGsStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime {
}

export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
}

export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo {
}

export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnsvs_uuid - computed: true, optional: false, required: false
  public get dnsvsUuid() {
    return this.getStringAttribute('dnsvs_uuid');
  }

  // ops - computed: true, optional: false, required: false
  public get ops() {
    return this.getStringAttribute('ops');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig {
}

export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vsgs_info - computed: true, optional: false, required: false
  private _vsgsInfo = new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGslbInfoReplState {
}

export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGslbInfoReplStateToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfoReplState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGslbInfoReplState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGslbInfoReplState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cfg_version - computed: true, optional: false, required: false
  public get cfgVersion() {
    return this.getStringAttribute('cfg_version');
  }

  // cfg_version_in_flight - computed: true, optional: false, required: false
  public get cfgVersionInFlight() {
    return this.getStringAttribute('cfg_version_in_flight');
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // local_config - computed: true, optional: false, required: false
  private _localConfig = new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
  public get localConfig() {
    return this._localConfig;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // site_uuid - computed: true, optional: false, required: false
  public get siteUuid() {
    return this.getStringAttribute('site_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfoGslbInfo {
}

export function dataAviGslbhsmruntimeLocalInfoGslbInfoToTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoGslbInfoToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfoGslbInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfoGslbInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfoGslbInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repl_state - computed: true, optional: false, required: false
  private _replState = new DataAviGslbhsmruntimeLocalInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
}

export class DataAviGslbhsmruntimeLocalInfoGslbInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoGslbInfoOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeLocalInfo {
}

export function dataAviGslbhsmruntimeLocalInfoToTerraform(struct?: DataAviGslbhsmruntimeLocalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeLocalInfoToHclTerraform(struct?: DataAviGslbhsmruntimeLocalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeLocalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeLocalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeLocalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gs_status - computed: true, optional: false, required: false
  private _gsStatus = new DataAviGslbhsmruntimeLocalInfoGsStatusList(this, "gs_status", true);
  public get gsStatus() {
    return this._gsStatus;
  }

  // gslb_info - computed: true, optional: false, required: false
  private _gslbInfo = new DataAviGslbhsmruntimeLocalInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }
}

export class DataAviGslbhsmruntimeLocalInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeLocalInfoOutputReference {
    return new DataAviGslbhsmruntimeLocalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeOperStatusLastChangedTime {
}

export function dataAviGslbhsmruntimeOperStatusLastChangedTimeToTerraform(struct?: DataAviGslbhsmruntimeOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeOperStatusLastChangedTimeToHclTerraform(struct?: DataAviGslbhsmruntimeOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeOperStatusLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeOperStatusLastChangedTimeOutputReference {
    return new DataAviGslbhsmruntimeOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeOperStatus {
}

export function dataAviGslbhsmruntimeOperStatusToTerraform(struct?: DataAviGslbhsmruntimeOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeOperStatusToHclTerraform(struct?: DataAviGslbhsmruntimeOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbhsmruntimeOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // num_vs_completed - computed: true, optional: false, required: false
  public get numVsCompleted() {
    return this.getStringAttribute('num_vs_completed');
  }

  // num_vs_failed - computed: true, optional: false, required: false
  public get numVsFailed() {
    return this.getStringAttribute('num_vs_failed');
  }

  // num_vs_total - computed: true, optional: false, required: false
  public get numVsTotal() {
    return this.getStringAttribute('num_vs_total');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }

  // reason_code_string - computed: true, optional: false, required: false
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviGslbhsmruntimeOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeOperStatusOutputReference {
    return new DataAviGslbhsmruntimeOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime {
}

export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
}

export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo {
}

export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnsvs_uuid - computed: true, optional: false, required: false
  public get dnsvsUuid() {
    return this.getStringAttribute('dnsvs_uuid');
  }

  // ops - computed: true, optional: false, required: false
  public get ops() {
    return this.getStringAttribute('ops');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig {
}

export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vsgs_info - computed: true, optional: false, required: false
  private _vsgsInfo = new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoGslbInfoReplState {
}

export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoGslbInfoReplState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cfg_version - computed: true, optional: false, required: false
  public get cfgVersion() {
    return this.getStringAttribute('cfg_version');
  }

  // cfg_version_in_flight - computed: true, optional: false, required: false
  public get cfgVersionInFlight() {
    return this.getStringAttribute('cfg_version_in_flight');
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // local_config - computed: true, optional: false, required: false
  private _localConfig = new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
  public get localConfig() {
    return this._localConfig;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // site_uuid - computed: true, optional: false, required: false
  public get siteUuid() {
    return this.getStringAttribute('site_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoGslbInfo {
}

export function dataAviGslbhsmruntimeRemoteInfoGslbInfoToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoGslbInfoToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoGslbInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoGslbInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoGslbInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repl_state - computed: true, optional: false, required: false
  private _replState = new DataAviGslbhsmruntimeRemoteInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
}

export class DataAviGslbhsmruntimeRemoteInfoGslbInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoGslbInfoOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoOpsInfo {
}

export function dataAviGslbhsmruntimeRemoteInfoOpsInfoToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoOpsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoOpsInfoToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoOpsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoOpsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoOpsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoOpsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rrtoken - computed: true, optional: false, required: false
  public get rrtoken() {
    return this.getListAttribute('rrtoken');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoOpsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoOpsInfoOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoOpsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjects {
}

export function dataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ds_name - computed: true, optional: false, required: false
  public get dsName() {
    return this.getStringAttribute('ds_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ops - computed: true, optional: false, required: false
  public get ops() {
    return this.getStringAttribute('ops');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTime {
}

export function dataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObj {
}

export function dataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObjToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObj | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObj | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // obj_name - computed: true, optional: false, required: false
  public get objName() {
    return this.getStringAttribute('obj_name');
  }

  // obj_uuid - computed: true, optional: false, required: false
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObjList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoSyncInfo {
}

export function dataAviGslbhsmruntimeRemoteInfoSyncInfoToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoSyncInfoToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoSyncInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoSyncInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errored_objects - computed: true, optional: false, required: false
  private _erroredObjects = new DataAviGslbhsmruntimeRemoteInfoSyncInfoErroredObjectsList(this, "errored_objects", false);
  public get erroredObjects() {
    return this._erroredObjects;
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbhsmruntimeRemoteInfoSyncInfoLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // last_fail_obj - computed: true, optional: false, required: false
  private _lastFailObj = new DataAviGslbhsmruntimeRemoteInfoSyncInfoLastFailObjList(this, "last_fail_obj", true);
  public get lastFailObj() {
    return this._lastFailObj;
  }

  // prev_target_version - computed: true, optional: false, required: false
  public get prevTargetVersion() {
    return this.getStringAttribute('prev_target_version');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // recommendation - computed: true, optional: false, required: false
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }

  // site_version - computed: true, optional: false, required: false
  public get siteVersion() {
    return this.getStringAttribute('site_version');
  }

  // sync_state - computed: true, optional: false, required: false
  public get syncState() {
    return this.getStringAttribute('sync_state');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoSyncInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoSyncInfoOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoSyncInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfoSyncStats {
}

export function dataAviGslbhsmruntimeRemoteInfoSyncStatsToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoSyncStatsToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfoSyncStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoSyncStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfoSyncStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfoSyncStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acknowledged_version - computed: true, optional: false, required: false
  public get acknowledgedVersion() {
    return this.getStringAttribute('acknowledged_version');
  }

  // pending_object_count - computed: true, optional: false, required: false
  public get pendingObjectCount() {
    return this.getStringAttribute('pending_object_count');
  }

  // received_version - computed: true, optional: false, required: false
  public get receivedVersion() {
    return this.getStringAttribute('received_version');
  }
}

export class DataAviGslbhsmruntimeRemoteInfoSyncStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoSyncStatsOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoSyncStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbhsmruntimeRemoteInfo {
}

export function dataAviGslbhsmruntimeRemoteInfoToTerraform(struct?: DataAviGslbhsmruntimeRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbhsmruntimeRemoteInfoToHclTerraform(struct?: DataAviGslbhsmruntimeRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbhsmruntimeRemoteInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbhsmruntimeRemoteInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbhsmruntimeRemoteInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gslb_info - computed: true, optional: false, required: false
  private _gslbInfo = new DataAviGslbhsmruntimeRemoteInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }

  // ops_info - computed: true, optional: false, required: false
  private _opsInfo = new DataAviGslbhsmruntimeRemoteInfoOpsInfoList(this, "ops_info", true);
  public get opsInfo() {
    return this._opsInfo;
  }

  // sync_info - computed: true, optional: false, required: false
  private _syncInfo = new DataAviGslbhsmruntimeRemoteInfoSyncInfoList(this, "sync_info", true);
  public get syncInfo() {
    return this._syncInfo;
  }

  // sync_stats - computed: true, optional: false, required: false
  private _syncStats = new DataAviGslbhsmruntimeRemoteInfoSyncStatsList(this, "sync_stats", true);
  public get syncStats() {
    return this._syncStats;
  }
}

export class DataAviGslbhsmruntimeRemoteInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbhsmruntimeRemoteInfoOutputReference {
    return new DataAviGslbhsmruntimeRemoteInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime avi_gslbhsmruntime}
*/
export class DataAviGslbhsmruntime extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_gslbhsmruntime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviGslbhsmruntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviGslbhsmruntime to import
  * @param importFromId The id of the existing DataAviGslbhsmruntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviGslbhsmruntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_gslbhsmruntime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbhsmruntime avi_gslbhsmruntime} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviGslbhsmruntimeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviGslbhsmruntimeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_gslbhsmruntime',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // events - computed: true, optional: false, required: false
  private _events = new DataAviGslbhsmruntimeEventsList(this, "events", false);
  public get events() {
    return this._events;
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

  // local_info - computed: true, optional: false, required: false
  private _localInfo = new DataAviGslbhsmruntimeLocalInfoList(this, "local_info", true);
  public get localInfo() {
    return this._localInfo;
  }

  // name - computed: true, optional: true, required: false
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

  // obj_uuid - computed: true, optional: false, required: false
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviGslbhsmruntimeOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }

  // remote_info - computed: true, optional: false, required: false
  private _remoteInfo = new DataAviGslbhsmruntimeRemoteInfoList(this, "remote_info", true);
  public get remoteInfo() {
    return this._remoteInfo;
  }

  // send_interval - computed: true, optional: false, required: false
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
