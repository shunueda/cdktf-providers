// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviWafapplicationsignatureproviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider#id DataAviWafapplicationsignatureprovider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider#name DataAviWafapplicationsignatureprovider#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider#tenant_ref DataAviWafapplicationsignatureprovider#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider#uuid DataAviWafapplicationsignatureprovider#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviWafapplicationsignatureproviderAvailableApplications {
}

export function dataAviWafapplicationsignatureproviderAvailableApplicationsToTerraform(struct?: DataAviWafapplicationsignatureproviderAvailableApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderAvailableApplicationsToHclTerraform(struct?: DataAviWafapplicationsignatureproviderAvailableApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderAvailableApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderAvailableApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderAvailableApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // last_changed_ruleset_version - computed: true, optional: false, required: false
  public get lastChangedRulesetVersion() {
    return this.getStringAttribute('last_changed_ruleset_version');
  }

  // number_of_rules - computed: true, optional: false, required: false
  public get numberOfRules() {
    return this.getStringAttribute('number_of_rules');
  }
}

export class DataAviWafapplicationsignatureproviderAvailableApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderAvailableApplicationsOutputReference {
    return new DataAviWafapplicationsignatureproviderAvailableApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderConfigpbAttributes {
}

export function dataAviWafapplicationsignatureproviderConfigpbAttributesToTerraform(struct?: DataAviWafapplicationsignatureproviderConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderConfigpbAttributesToHclTerraform(struct?: DataAviWafapplicationsignatureproviderConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviWafapplicationsignatureproviderConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderConfigpbAttributesOutputReference {
    return new DataAviWafapplicationsignatureproviderConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck {
}

export function dataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckToTerraform(struct?: DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckToHclTerraform(struct?: DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheck | undefined) {
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

export class DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckOutputReference {
    return new DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp {
}

export function dataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampToTerraform(struct?: DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampToHclTerraform(struct?: DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestamp | undefined) {
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

export class DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampOutputReference {
    return new DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderServiceStatus {
}

export function dataAviWafapplicationsignatureproviderServiceStatusToTerraform(struct?: DataAviWafapplicationsignatureproviderServiceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderServiceStatusToHclTerraform(struct?: DataAviWafapplicationsignatureproviderServiceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderServiceStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderServiceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderServiceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // last_successful_update_check - computed: true, optional: false, required: false
  private _lastSuccessfulUpdateCheck = new DataAviWafapplicationsignatureproviderServiceStatusLastSuccessfulUpdateCheckList(this, "last_successful_update_check", true);
  public get lastSuccessfulUpdateCheck() {
    return this._lastSuccessfulUpdateCheck;
  }

  // upstream_sync_timestamp - computed: true, optional: false, required: false
  private _upstreamSyncTimestamp = new DataAviWafapplicationsignatureproviderServiceStatusUpstreamSyncTimestampList(this, "upstream_sync_timestamp", true);
  public get upstreamSyncTimestamp() {
    return this._upstreamSyncTimestamp;
  }
}

export class DataAviWafapplicationsignatureproviderServiceStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderServiceStatusOutputReference {
    return new DataAviWafapplicationsignatureproviderServiceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr {
}

export function dataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrToTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrToHclTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrOutputReference {
    return new DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnet {
}

export function dataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetToTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetToHclTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetOutputReference {
    return new DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria {
}

export function dataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaToTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaToHclTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_case - computed: true, optional: false, required: false
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }

  // match_op - computed: true, optional: false, required: false
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaOutputReference {
    return new DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria {
}

export function dataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaToTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaToHclTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_case - computed: true, optional: false, required: false
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }

  // match_op - computed: true, optional: false, required: false
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaOutputReference {
    return new DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderSignaturesExcludeListStruct {
}

export function dataAviWafapplicationsignatureproviderSignaturesExcludeListStructToTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderSignaturesExcludeListStructToHclTerraform(struct?: DataAviWafapplicationsignatureproviderSignaturesExcludeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderSignaturesExcludeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderSignaturesExcludeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_subnet - computed: true, optional: false, required: false
  private _clientSubnet = new DataAviWafapplicationsignatureproviderSignaturesExcludeListClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // match_element - computed: true, optional: false, required: false
  public get matchElement() {
    return this.getStringAttribute('match_element');
  }

  // match_element_criteria - computed: true, optional: false, required: false
  private _matchElementCriteria = new DataAviWafapplicationsignatureproviderSignaturesExcludeListMatchElementCriteriaList(this, "match_element_criteria", true);
  public get matchElementCriteria() {
    return this._matchElementCriteria;
  }

  // uri_match_criteria - computed: true, optional: false, required: false
  private _uriMatchCriteria = new DataAviWafapplicationsignatureproviderSignaturesExcludeListUriMatchCriteriaList(this, "uri_match_criteria", true);
  public get uriMatchCriteria() {
    return this._uriMatchCriteria;
  }

  // uri_path - computed: true, optional: false, required: false
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
}

export class DataAviWafapplicationsignatureproviderSignaturesExcludeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderSignaturesExcludeListStructOutputReference {
    return new DataAviWafapplicationsignatureproviderSignaturesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWafapplicationsignatureproviderSignatures {
}

export function dataAviWafapplicationsignatureproviderSignaturesToTerraform(struct?: DataAviWafapplicationsignatureproviderSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWafapplicationsignatureproviderSignaturesToHclTerraform(struct?: DataAviWafapplicationsignatureproviderSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWafapplicationsignatureproviderSignaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWafapplicationsignatureproviderSignatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWafapplicationsignatureproviderSignatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getStringAttribute('enable');
  }

  // exclude_list - computed: true, optional: false, required: false
  private _excludeList = new DataAviWafapplicationsignatureproviderSignaturesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // is_sensitive - computed: true, optional: false, required: false
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // paranoia_level - computed: true, optional: false, required: false
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    return this.getStringAttribute('rule');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAviWafapplicationsignatureproviderSignaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWafapplicationsignatureproviderSignaturesOutputReference {
    return new DataAviWafapplicationsignatureproviderSignaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider avi_wafapplicationsignatureprovider}
*/
export class DataAviWafapplicationsignatureprovider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_wafapplicationsignatureprovider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviWafapplicationsignatureprovider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviWafapplicationsignatureprovider to import
  * @param importFromId The id of the existing DataAviWafapplicationsignatureprovider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviWafapplicationsignatureprovider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_wafapplicationsignatureprovider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/wafapplicationsignatureprovider avi_wafapplicationsignatureprovider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviWafapplicationsignatureproviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviWafapplicationsignatureproviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_wafapplicationsignatureprovider',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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

  // available_applications - computed: true, optional: false, required: false
  private _availableApplications = new DataAviWafapplicationsignatureproviderAvailableApplicationsList(this, "available_applications", false);
  public get availableApplications() {
    return this._availableApplications;
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviWafapplicationsignatureproviderConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // filter_rules_on_import - computed: true, optional: false, required: false
  public get filterRulesOnImport() {
    return this.getStringAttribute('filter_rules_on_import');
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

  // ruleset_version - computed: true, optional: false, required: false
  public get rulesetVersion() {
    return this.getStringAttribute('ruleset_version');
  }

  // service_status - computed: true, optional: false, required: false
  private _serviceStatus = new DataAviWafapplicationsignatureproviderServiceStatusList(this, "service_status", true);
  public get serviceStatus() {
    return this._serviceStatus;
  }

  // signatures - computed: true, optional: false, required: false
  private _signatures = new DataAviWafapplicationsignatureproviderSignaturesList(this, "signatures", false);
  public get signatures() {
    return this._signatures;
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
