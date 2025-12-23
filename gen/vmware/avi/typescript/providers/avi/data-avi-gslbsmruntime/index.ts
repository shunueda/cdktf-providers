// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviGslbsmruntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime#id DataAviGslbsmruntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime#name DataAviGslbsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime#tenant_ref DataAviGslbsmruntime#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime#uuid DataAviGslbsmruntime#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviGslbsmruntimeDnsConfigs {
}

export function dataAviGslbsmruntimeDnsConfigsToTerraform(struct?: DataAviGslbsmruntimeDnsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsConfigsToHclTerraform(struct?: DataAviGslbsmruntimeDnsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
}

export class DataAviGslbsmruntimeDnsConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsConfigsOutputReference {
    return new DataAviGslbsmruntimeDnsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsSeResource {
}

export function dataAviGslbsmruntimeDnsInfoDnsSeResourceToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsSeResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsSeResourceToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsSeResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsSeResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsSeResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsSeResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cores_per_socket - computed: true, optional: false, required: false
  public get coresPerSocket() {
    return this.getStringAttribute('cores_per_socket');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getStringAttribute('disk');
  }

  // hyper_threading - computed: true, optional: false, required: false
  public get hyperThreading() {
    return this.getStringAttribute('hyper_threading');
  }

  // hypervisor_mode - computed: true, optional: false, required: false
  public get hypervisorMode() {
    return this.getStringAttribute('hypervisor_mode');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // num_datapath_processes - computed: true, optional: false, required: false
  public get numDatapathProcesses() {
    return this.getStringAttribute('num_datapath_processes');
  }

  // num_vcpus - computed: true, optional: false, required: false
  public get numVcpus() {
    return this.getStringAttribute('num_vcpus');
  }

  // qat_mode - computed: true, optional: false, required: false
  public get qatMode() {
    return this.getStringAttribute('qat_mode');
  }

  // sockets - computed: true, optional: false, required: false
  public get sockets() {
    return this.getStringAttribute('sockets');
  }
}

export class DataAviGslbsmruntimeDnsInfoDnsSeResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsSeResourceOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsSeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime | undefined) {
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

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownload {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime | undefined) {
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

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownload {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime | undefined) {
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

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatus {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeList(this, "last_changed_time", true);
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

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRules {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRulesToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRulesToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // placement_allowed - computed: true, optional: false, required: false
  public get placementAllowed() {
    return this.getStringAttribute('placement_allowed');
  }

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }

  // transition_ops - computed: true, optional: false, required: false
  public get transitionOps() {
    return this.getStringAttribute('transition_ops');
  }
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRulesOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfoDnsVsStates {
}

export function dataAviGslbsmruntimeDnsInfoDnsVsStatesToTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoDnsVsStatesToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfoDnsVsStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfoDnsVsStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfoDnsVsStates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_download - computed: true, optional: false, required: false
  private _geoDownload = new DataAviGslbsmruntimeDnsInfoDnsVsStatesGeoDownloadList(this, "geo_download", true);
  public get geoDownload() {
    return this._geoDownload;
  }

  // gslb_download - computed: true, optional: false, required: false
  private _gslbDownload = new DataAviGslbsmruntimeDnsInfoDnsVsStatesGslbDownloadList(this, "gslb_download", true);
  public get gslbDownload() {
    return this._gslbDownload;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviGslbsmruntimeDnsInfoDnsVsStatesOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }

  // placement_rules - computed: true, optional: false, required: false
  private _placementRules = new DataAviGslbsmruntimeDnsInfoDnsVsStatesPlacementRulesList(this, "placement_rules", false);
  public get placementRules() {
    return this._placementRules;
  }

  // se_list - computed: true, optional: false, required: false
  public get seList() {
    return this.getListAttribute('se_list');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // valid_dns_vs - computed: true, optional: false, required: false
  public get validDnsVs() {
    return this.getStringAttribute('valid_dns_vs');
  }
}

export class DataAviGslbsmruntimeDnsInfoDnsVsStatesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoDnsVsStatesOutputReference {
    return new DataAviGslbsmruntimeDnsInfoDnsVsStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeDnsInfo {
}

export function dataAviGslbsmruntimeDnsInfoToTerraform(struct?: DataAviGslbsmruntimeDnsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeDnsInfoToHclTerraform(struct?: DataAviGslbsmruntimeDnsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeDnsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeDnsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeDnsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_active - computed: true, optional: false, required: false
  public get dnsActive() {
    return this.getStringAttribute('dns_active');
  }

  // dns_se_resource - computed: true, optional: false, required: false
  private _dnsSeResource = new DataAviGslbsmruntimeDnsInfoDnsSeResourceList(this, "dns_se_resource", true);
  public get dnsSeResource() {
    return this._dnsSeResource;
  }

  // dns_vs_states - computed: true, optional: false, required: false
  private _dnsVsStates = new DataAviGslbsmruntimeDnsInfoDnsVsStatesList(this, "dns_vs_states", false);
  public get dnsVsStates() {
    return this._dnsVsStates;
  }
}

export class DataAviGslbsmruntimeDnsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeDnsInfoOutputReference {
    return new DataAviGslbsmruntimeDnsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeEventsTimestamp {
}

export function dataAviGslbsmruntimeEventsTimestampToTerraform(struct?: DataAviGslbsmruntimeEventsTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeEventsTimestampToHclTerraform(struct?: DataAviGslbsmruntimeEventsTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeEventsTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeEventsTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeEventsTimestamp | undefined) {
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

export class DataAviGslbsmruntimeEventsTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeEventsTimestampOutputReference {
    return new DataAviGslbsmruntimeEventsTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeEvents {
}

export function dataAviGslbsmruntimeEventsToTerraform(struct?: DataAviGslbsmruntimeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeEventsToHclTerraform(struct?: DataAviGslbsmruntimeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeEvents | undefined) {
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
  private _timestamp = new DataAviGslbsmruntimeEventsTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataAviGslbsmruntimeEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeEventsOutputReference {
    return new DataAviGslbsmruntimeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeOperStatusLastChangedTime {
}

export function dataAviGslbsmruntimeOperStatusLastChangedTimeToTerraform(struct?: DataAviGslbsmruntimeOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeOperStatusLastChangedTimeToHclTerraform(struct?: DataAviGslbsmruntimeOperStatusLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeOperStatusLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeOperStatusLastChangedTime | undefined) {
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

export class DataAviGslbsmruntimeOperStatusLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeOperStatusLastChangedTimeOutputReference {
    return new DataAviGslbsmruntimeOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeOperStatus {
}

export function dataAviGslbsmruntimeOperStatusToTerraform(struct?: DataAviGslbsmruntimeOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeOperStatusToHclTerraform(struct?: DataAviGslbsmruntimeOperStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeOperStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeOperStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbsmruntimeOperStatusLastChangedTimeList(this, "last_changed_time", true);
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

export class DataAviGslbsmruntimeOperStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeOperStatusOutputReference {
    return new DataAviGslbsmruntimeOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime {
}

export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | undefined) {
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

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
}

export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | undefined) {
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

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo {
}

export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | undefined) {
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
  private _timestamp = new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig {
}

export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vsgs_info - computed: true, optional: false, required: false
  private _vsgsInfo = new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoGslbInfoReplState {
}

export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoGslbInfoReplStateToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfoReplState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoGslbInfoReplState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoGslbInfoReplState | undefined) {
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
  private _lastChangedTime = new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // local_config - computed: true, optional: false, required: false
  private _localConfig = new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
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

export class DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoGslbInfo {
}

export function dataAviGslbsmruntimeRemoteInfoGslbInfoToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoGslbInfoToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoGslbInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoGslbInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoGslbInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repl_state - computed: true, optional: false, required: false
  private _replState = new DataAviGslbsmruntimeRemoteInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
}

export class DataAviGslbsmruntimeRemoteInfoGslbInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoGslbInfoOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoOpsInfo {
}

export function dataAviGslbsmruntimeRemoteInfoOpsInfoToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoOpsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoOpsInfoToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoOpsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoOpsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoOpsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoOpsInfo | undefined) {
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

export class DataAviGslbsmruntimeRemoteInfoOpsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoOpsInfoOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoOpsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjects {
}

export function dataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjects | undefined) {
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

export class DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTime {
}

export function dataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTime | undefined) {
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

export class DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObj {
}

export function dataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObjToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObj | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObj | undefined) {
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

export class DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObjList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoSyncInfo {
}

export function dataAviGslbsmruntimeRemoteInfoSyncInfoToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoSyncInfoToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoSyncInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoSyncInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoSyncInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errored_objects - computed: true, optional: false, required: false
  private _erroredObjects = new DataAviGslbsmruntimeRemoteInfoSyncInfoErroredObjectsList(this, "errored_objects", false);
  public get erroredObjects() {
    return this._erroredObjects;
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviGslbsmruntimeRemoteInfoSyncInfoLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // last_fail_obj - computed: true, optional: false, required: false
  private _lastFailObj = new DataAviGslbsmruntimeRemoteInfoSyncInfoLastFailObjList(this, "last_fail_obj", true);
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

export class DataAviGslbsmruntimeRemoteInfoSyncInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoSyncInfoOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoSyncInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfoSyncStats {
}

export function dataAviGslbsmruntimeRemoteInfoSyncStatsToTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoSyncStatsToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfoSyncStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoSyncStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfoSyncStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfoSyncStats | undefined) {
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

export class DataAviGslbsmruntimeRemoteInfoSyncStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoSyncStatsOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoSyncStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviGslbsmruntimeRemoteInfo {
}

export function dataAviGslbsmruntimeRemoteInfoToTerraform(struct?: DataAviGslbsmruntimeRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviGslbsmruntimeRemoteInfoToHclTerraform(struct?: DataAviGslbsmruntimeRemoteInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviGslbsmruntimeRemoteInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviGslbsmruntimeRemoteInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviGslbsmruntimeRemoteInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gslb_info - computed: true, optional: false, required: false
  private _gslbInfo = new DataAviGslbsmruntimeRemoteInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }

  // ops_info - computed: true, optional: false, required: false
  private _opsInfo = new DataAviGslbsmruntimeRemoteInfoOpsInfoList(this, "ops_info", true);
  public get opsInfo() {
    return this._opsInfo;
  }

  // sync_info - computed: true, optional: false, required: false
  private _syncInfo = new DataAviGslbsmruntimeRemoteInfoSyncInfoList(this, "sync_info", true);
  public get syncInfo() {
    return this._syncInfo;
  }

  // sync_stats - computed: true, optional: false, required: false
  private _syncStats = new DataAviGslbsmruntimeRemoteInfoSyncStatsList(this, "sync_stats", true);
  public get syncStats() {
    return this._syncStats;
  }
}

export class DataAviGslbsmruntimeRemoteInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviGslbsmruntimeRemoteInfoOutputReference {
    return new DataAviGslbsmruntimeRemoteInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime avi_gslbsmruntime}
*/
export class DataAviGslbsmruntime extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_gslbsmruntime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviGslbsmruntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviGslbsmruntime to import
  * @param importFromId The id of the existing DataAviGslbsmruntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviGslbsmruntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_gslbsmruntime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/gslbsmruntime avi_gslbsmruntime} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviGslbsmruntimeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviGslbsmruntimeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_gslbsmruntime',
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

  // cluster_leader - computed: true, optional: false, required: false
  public get clusterLeader() {
    return this.getStringAttribute('cluster_leader');
  }

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }

  // controller_flavor - computed: true, optional: false, required: false
  public get controllerFlavor() {
    return this.getStringAttribute('controller_flavor');
  }

  // dns_configs - computed: true, optional: false, required: false
  private _dnsConfigs = new DataAviGslbsmruntimeDnsConfigsList(this, "dns_configs", false);
  public get dnsConfigs() {
    return this._dnsConfigs;
  }

  // dns_info - computed: true, optional: false, required: false
  private _dnsInfo = new DataAviGslbsmruntimeDnsInfoList(this, "dns_info", true);
  public get dnsInfo() {
    return this._dnsInfo;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // events - computed: true, optional: false, required: false
  private _events = new DataAviGslbsmruntimeEventsList(this, "events", false);
  public get events() {
    return this._events;
  }

  // health_monitor_info - computed: true, optional: false, required: false
  public get healthMonitorInfo() {
    return this.getStringAttribute('health_monitor_info');
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

  // leader_cluster_uuid - computed: true, optional: false, required: false
  public get leaderClusterUuid() {
    return this.getStringAttribute('leader_cluster_uuid');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
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

  // node_uuid - computed: true, optional: false, required: false
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }

  // num_of_retries - computed: true, optional: false, required: false
  public get numOfRetries() {
    return this.getStringAttribute('num_of_retries');
  }

  // obj_uuid - computed: true, optional: false, required: false
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }

  // oper_status - computed: true, optional: false, required: false
  private _operStatus = new DataAviGslbsmruntimeOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }

  // remote_info - computed: true, optional: false, required: false
  private _remoteInfo = new DataAviGslbsmruntimeRemoteInfoList(this, "remote_info", true);
  public get remoteInfo() {
    return this._remoteInfo;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // site_type - computed: true, optional: false, required: false
  public get siteType() {
    return this.getStringAttribute('site_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sw_version - computed: true, optional: false, required: false
  public get swVersion() {
    return this.getStringAttribute('sw_version');
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

  // view_id - computed: true, optional: false, required: false
  public get viewId() {
    return this.getStringAttribute('view_id');
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
