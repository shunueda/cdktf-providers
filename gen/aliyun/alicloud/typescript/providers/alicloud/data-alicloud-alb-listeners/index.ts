// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudAlbListenersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#enable_details DataAlicloudAlbListeners#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#id DataAlicloudAlbListeners#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#ids DataAlicloudAlbListeners#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#listener_ids DataAlicloudAlbListeners#listener_ids}
  */
  readonly listenerIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#listener_protocol DataAlicloudAlbListeners#listener_protocol}
  */
  readonly listenerProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#load_balancer_ids DataAlicloudAlbListeners#load_balancer_ids}
  */
  readonly loadBalancerIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#output_file DataAlicloudAlbListeners#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#status DataAlicloudAlbListeners#status}
  */
  readonly status?: string;
}
export interface DataAlicloudAlbListenersListenersAccessLogTracingConfig {
}

export function dataAlicloudAlbListenersListenersAccessLogTracingConfigToTerraform(struct?: DataAlicloudAlbListenersListenersAccessLogTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersAccessLogTracingConfigToHclTerraform(struct?: DataAlicloudAlbListenersListenersAccessLogTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersAccessLogTracingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersAccessLogTracingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersAccessLogTracingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tracing_enabled - computed: true, optional: false, required: false
  public get tracingEnabled() {
    return this.getBooleanAttribute('tracing_enabled');
  }

  // tracing_sample - computed: true, optional: false, required: false
  public get tracingSample() {
    return this.getNumberAttribute('tracing_sample');
  }

  // tracing_type - computed: true, optional: false, required: false
  public get tracingType() {
    return this.getStringAttribute('tracing_type');
  }
}

export class DataAlicloudAlbListenersListenersAccessLogTracingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersAccessLogTracingConfigOutputReference {
    return new DataAlicloudAlbListenersListenersAccessLogTracingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersAclConfigAclRelations {
}

export function dataAlicloudAlbListenersListenersAclConfigAclRelationsToTerraform(struct?: DataAlicloudAlbListenersListenersAclConfigAclRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersAclConfigAclRelationsToHclTerraform(struct?: DataAlicloudAlbListenersListenersAclConfigAclRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersAclConfigAclRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersAclConfigAclRelations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersAclConfigAclRelations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_id - computed: true, optional: false, required: false
  public get aclId() {
    return this.getStringAttribute('acl_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudAlbListenersListenersAclConfigAclRelationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersAclConfigAclRelationsOutputReference {
    return new DataAlicloudAlbListenersListenersAclConfigAclRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersAclConfig {
}

export function dataAlicloudAlbListenersListenersAclConfigToTerraform(struct?: DataAlicloudAlbListenersListenersAclConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersAclConfigToHclTerraform(struct?: DataAlicloudAlbListenersListenersAclConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersAclConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersAclConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersAclConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_relations - computed: true, optional: false, required: false
  private _aclRelations = new DataAlicloudAlbListenersListenersAclConfigAclRelationsList(this, "acl_relations", false);
  public get aclRelations() {
    return this._aclRelations;
  }

  // acl_type - computed: true, optional: false, required: false
  public get aclType() {
    return this.getStringAttribute('acl_type');
  }
}

export class DataAlicloudAlbListenersListenersAclConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersAclConfigOutputReference {
    return new DataAlicloudAlbListenersListenersAclConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersCertificates {
}

export function dataAlicloudAlbListenersListenersCertificatesToTerraform(struct?: DataAlicloudAlbListenersListenersCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersCertificatesToHclTerraform(struct?: DataAlicloudAlbListenersListenersCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
}

export class DataAlicloudAlbListenersListenersCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersCertificatesOutputReference {
    return new DataAlicloudAlbListenersListenersCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuples {
}

export function dataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuplesToTerraform(struct?: DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuplesToHclTerraform(struct?: DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_group_id - computed: true, optional: false, required: false
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
}

export class DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuplesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuplesOutputReference {
    return new DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfig {
}

export function dataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigToTerraform(struct?: DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigToHclTerraform(struct?: DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_group_tuples - computed: true, optional: false, required: false
  private _serverGroupTuples = new DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigServerGroupTuplesList(this, "server_group_tuples", false);
  public get serverGroupTuples() {
    return this._serverGroupTuples;
  }
}

export class DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigOutputReference {
    return new DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersDefaultActions {
}

export function dataAlicloudAlbListenersListenersDefaultActionsToTerraform(struct?: DataAlicloudAlbListenersListenersDefaultActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersDefaultActionsToHclTerraform(struct?: DataAlicloudAlbListenersListenersDefaultActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersDefaultActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersDefaultActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersDefaultActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_group_config - computed: true, optional: false, required: false
  private _forwardGroupConfig = new DataAlicloudAlbListenersListenersDefaultActionsForwardGroupConfigList(this, "forward_group_config", false);
  public get forwardGroupConfig() {
    return this._forwardGroupConfig;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAlicloudAlbListenersListenersDefaultActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersDefaultActionsOutputReference {
    return new DataAlicloudAlbListenersListenersDefaultActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersQuicConfig {
}

export function dataAlicloudAlbListenersListenersQuicConfigToTerraform(struct?: DataAlicloudAlbListenersListenersQuicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersQuicConfigToHclTerraform(struct?: DataAlicloudAlbListenersListenersQuicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersQuicConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersQuicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersQuicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quic_listener_id - computed: true, optional: false, required: false
  public get quicListenerId() {
    return this.getStringAttribute('quic_listener_id');
  }

  // quic_upgrade_enabled - computed: true, optional: false, required: false
  public get quicUpgradeEnabled() {
    return this.getBooleanAttribute('quic_upgrade_enabled');
  }
}

export class DataAlicloudAlbListenersListenersQuicConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersQuicConfigOutputReference {
    return new DataAlicloudAlbListenersListenersQuicConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListenersXforwardedForConfig {
}

export function dataAlicloudAlbListenersListenersXforwardedForConfigToTerraform(struct?: DataAlicloudAlbListenersListenersXforwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersXforwardedForConfigToHclTerraform(struct?: DataAlicloudAlbListenersListenersXforwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersXforwardedForConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListenersXforwardedForConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListenersXforwardedForConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // xforwardedforclientcert_issuerdnalias - computed: true, optional: false, required: false
  public get xforwardedforclientcertIssuerdnalias() {
    return this.getStringAttribute('xforwardedforclientcert_issuerdnalias');
  }

  // xforwardedforclientcert_issuerdnenabled - computed: true, optional: false, required: false
  public get xforwardedforclientcertIssuerdnenabled() {
    return this.getBooleanAttribute('xforwardedforclientcert_issuerdnenabled');
  }

  // xforwardedforclientcertclientverifyalias - computed: true, optional: false, required: false
  public get xforwardedforclientcertclientverifyalias() {
    return this.getStringAttribute('xforwardedforclientcertclientverifyalias');
  }

  // xforwardedforclientcertclientverifyenabled - computed: true, optional: false, required: false
  public get xforwardedforclientcertclientverifyenabled() {
    return this.getBooleanAttribute('xforwardedforclientcertclientverifyenabled');
  }

  // xforwardedforclientcertfingerprintalias - computed: true, optional: false, required: false
  public get xforwardedforclientcertfingerprintalias() {
    return this.getStringAttribute('xforwardedforclientcertfingerprintalias');
  }

  // xforwardedforclientcertfingerprintenabled - computed: true, optional: false, required: false
  public get xforwardedforclientcertfingerprintenabled() {
    return this.getBooleanAttribute('xforwardedforclientcertfingerprintenabled');
  }

  // xforwardedforclientcertsubjectdnalias - computed: true, optional: false, required: false
  public get xforwardedforclientcertsubjectdnalias() {
    return this.getStringAttribute('xforwardedforclientcertsubjectdnalias');
  }

  // xforwardedforclientcertsubjectdnenabled - computed: true, optional: false, required: false
  public get xforwardedforclientcertsubjectdnenabled() {
    return this.getBooleanAttribute('xforwardedforclientcertsubjectdnenabled');
  }

  // xforwardedforclientsrcportenabled - computed: true, optional: false, required: false
  public get xforwardedforclientsrcportenabled() {
    return this.getBooleanAttribute('xforwardedforclientsrcportenabled');
  }

  // xforwardedforenabled - computed: true, optional: false, required: false
  public get xforwardedforenabled() {
    return this.getBooleanAttribute('xforwardedforenabled');
  }

  // xforwardedforprotoenabled - computed: true, optional: false, required: false
  public get xforwardedforprotoenabled() {
    return this.getBooleanAttribute('xforwardedforprotoenabled');
  }

  // xforwardedforslbidenabled - computed: true, optional: false, required: false
  public get xforwardedforslbidenabled() {
    return this.getBooleanAttribute('xforwardedforslbidenabled');
  }

  // xforwardedforslbportenabled - computed: true, optional: false, required: false
  public get xforwardedforslbportenabled() {
    return this.getBooleanAttribute('xforwardedforslbportenabled');
  }
}

export class DataAlicloudAlbListenersListenersXforwardedForConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersXforwardedForConfigOutputReference {
    return new DataAlicloudAlbListenersListenersXforwardedForConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlbListenersListeners {
}

export function dataAlicloudAlbListenersListenersToTerraform(struct?: DataAlicloudAlbListenersListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlbListenersListenersToHclTerraform(struct?: DataAlicloudAlbListenersListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlbListenersListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlbListenersListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlbListenersListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_log_record_customized_headers_enabled - computed: true, optional: false, required: false
  public get accessLogRecordCustomizedHeadersEnabled() {
    return this.getBooleanAttribute('access_log_record_customized_headers_enabled');
  }

  // access_log_tracing_config - computed: true, optional: false, required: false
  private _accessLogTracingConfig = new DataAlicloudAlbListenersListenersAccessLogTracingConfigList(this, "access_log_tracing_config", false);
  public get accessLogTracingConfig() {
    return this._accessLogTracingConfig;
  }

  // acl_config - computed: true, optional: false, required: false
  private _aclConfig = new DataAlicloudAlbListenersListenersAclConfigList(this, "acl_config", false);
  public get aclConfig() {
    return this._aclConfig;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataAlicloudAlbListenersListenersCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // default_actions - computed: true, optional: false, required: false
  private _defaultActions = new DataAlicloudAlbListenersListenersDefaultActionsList(this, "default_actions", false);
  public get defaultActions() {
    return this._defaultActions;
  }

  // gzip_enabled - computed: true, optional: false, required: false
  public get gzipEnabled() {
    return this.getBooleanAttribute('gzip_enabled');
  }

  // http2_enabled - computed: true, optional: false, required: false
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // listener_description - computed: true, optional: false, required: false
  public get listenerDescription() {
    return this.getStringAttribute('listener_description');
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // listener_protocol - computed: true, optional: false, required: false
  public get listenerProtocol() {
    return this.getStringAttribute('listener_protocol');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getStringAttribute('max_results');
  }

  // next_token - computed: true, optional: false, required: false
  public get nextToken() {
    return this.getStringAttribute('next_token');
  }

  // quic_config - computed: true, optional: false, required: false
  private _quicConfig = new DataAlicloudAlbListenersListenersQuicConfigList(this, "quic_config", false);
  public get quicConfig() {
    return this._quicConfig;
  }

  // request_timeout - computed: true, optional: false, required: false
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }

  // security_policy_id - computed: true, optional: false, required: false
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // xforwarded_for_config - computed: true, optional: false, required: false
  private _xforwardedForConfig = new DataAlicloudAlbListenersListenersXforwardedForConfigList(this, "xforwarded_for_config", false);
  public get xforwardedForConfig() {
    return this._xforwardedForConfig;
  }
}

export class DataAlicloudAlbListenersListenersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlbListenersListenersOutputReference {
    return new DataAlicloudAlbListenersListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners alicloud_alb_listeners}
*/
export class DataAlicloudAlbListeners extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alb_listeners";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudAlbListeners resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudAlbListeners to import
  * @param importFromId The id of the existing DataAlicloudAlbListeners that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudAlbListeners to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alb_listeners", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/alb_listeners alicloud_alb_listeners} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudAlbListenersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudAlbListenersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alb_listeners',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._listenerIds = config.listenerIds;
    this._listenerProtocol = config.listenerProtocol;
    this._loadBalancerIds = config.loadBalancerIds;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // listener_ids - computed: false, optional: true, required: false
  private _listenerIds?: string[]; 
  public get listenerIds() {
    return this.getListAttribute('listener_ids');
  }
  public set listenerIds(value: string[]) {
    this._listenerIds = value;
  }
  public resetListenerIds() {
    this._listenerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdsInput() {
    return this._listenerIds;
  }

  // listener_protocol - computed: false, optional: true, required: false
  private _listenerProtocol?: string; 
  public get listenerProtocol() {
    return this.getStringAttribute('listener_protocol');
  }
  public set listenerProtocol(value: string) {
    this._listenerProtocol = value;
  }
  public resetListenerProtocol() {
    this._listenerProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerProtocolInput() {
    return this._listenerProtocol;
  }

  // listeners - computed: true, optional: false, required: false
  private _listeners = new DataAlicloudAlbListenersListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }

  // load_balancer_ids - computed: false, optional: true, required: false
  private _loadBalancerIds?: string[]; 
  public get loadBalancerIds() {
    return this.getListAttribute('load_balancer_ids');
  }
  public set loadBalancerIds(value: string[]) {
    this._loadBalancerIds = value;
  }
  public resetLoadBalancerIds() {
    this._loadBalancerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdsInput() {
    return this._loadBalancerIds;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      listener_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._listenerIds),
      listener_protocol: cdktf.stringToTerraform(this._listenerProtocol),
      load_balancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancerIds),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      listener_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._listenerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      listener_protocol: {
        value: cdktf.stringToHclTerraform(this._listenerProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
