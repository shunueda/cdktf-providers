// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexLbNetworkLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer#folder_id DataYandexLbNetworkLoadBalancer#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer#id DataYandexLbNetworkLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer#name DataYandexLbNetworkLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * Network load balancer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer#network_load_balancer_id DataYandexLbNetworkLoadBalancer#network_load_balancer_id}
  */
  readonly networkLoadBalancerId?: string;
}
export interface DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptions {
}

export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptionsToTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptionsToHclTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptionsOutputReference {
    return new DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptions {
}

export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptionsToTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptionsToHclTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptionsOutputReference {
    return new DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheck {
}

export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckToTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckToHclTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // http_options - computed: true, optional: false, required: false
  private _httpOptions = new DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckHttpOptionsList(this, "http_options", false);
  public get httpOptions() {
    return this._httpOptions;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tcp_options - computed: true, optional: false, required: false
  private _tcpOptions = new DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckTcpOptionsList(this, "tcp_options", false);
  public get tcpOptions() {
    return this._tcpOptions;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckOutputReference {
    return new DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLbNetworkLoadBalancerAttachedTargetGroup {
}

export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupToTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLbNetworkLoadBalancerAttachedTargetGroupToHclTerraform(struct?: DataYandexLbNetworkLoadBalancerAttachedTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLbNetworkLoadBalancerAttachedTargetGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLbNetworkLoadBalancerAttachedTargetGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthcheck - computed: true, optional: false, required: false
  private _healthcheck = new DataYandexLbNetworkLoadBalancerAttachedTargetGroupHealthcheckList(this, "healthcheck", false);
  public get healthcheck() {
    return this._healthcheck;
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
}

export class DataYandexLbNetworkLoadBalancerAttachedTargetGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLbNetworkLoadBalancerAttachedTargetGroupOutputReference {
    return new DataYandexLbNetworkLoadBalancerAttachedTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLbNetworkLoadBalancerListenerExternalAddressSpec {
}

export function dataYandexLbNetworkLoadBalancerListenerExternalAddressSpecToTerraform(struct?: DataYandexLbNetworkLoadBalancerListenerExternalAddressSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLbNetworkLoadBalancerListenerExternalAddressSpecToHclTerraform(struct?: DataYandexLbNetworkLoadBalancerListenerExternalAddressSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLbNetworkLoadBalancerListenerExternalAddressSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLbNetworkLoadBalancerListenerExternalAddressSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLbNetworkLoadBalancerListenerExternalAddressSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
}

export class DataYandexLbNetworkLoadBalancerListenerExternalAddressSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLbNetworkLoadBalancerListenerExternalAddressSpecOutputReference {
    return new DataYandexLbNetworkLoadBalancerListenerExternalAddressSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLbNetworkLoadBalancerListenerInternalAddressSpec {
}

export function dataYandexLbNetworkLoadBalancerListenerInternalAddressSpecToTerraform(struct?: DataYandexLbNetworkLoadBalancerListenerInternalAddressSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLbNetworkLoadBalancerListenerInternalAddressSpecToHclTerraform(struct?: DataYandexLbNetworkLoadBalancerListenerInternalAddressSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLbNetworkLoadBalancerListenerInternalAddressSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLbNetworkLoadBalancerListenerInternalAddressSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLbNetworkLoadBalancerListenerInternalAddressSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataYandexLbNetworkLoadBalancerListenerInternalAddressSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLbNetworkLoadBalancerListenerInternalAddressSpecOutputReference {
    return new DataYandexLbNetworkLoadBalancerListenerInternalAddressSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLbNetworkLoadBalancerListener {
}

export function dataYandexLbNetworkLoadBalancerListenerToTerraform(struct?: DataYandexLbNetworkLoadBalancerListener): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLbNetworkLoadBalancerListenerToHclTerraform(struct?: DataYandexLbNetworkLoadBalancerListener): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLbNetworkLoadBalancerListenerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLbNetworkLoadBalancerListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLbNetworkLoadBalancerListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_address_spec - computed: true, optional: false, required: false
  private _externalAddressSpec = new DataYandexLbNetworkLoadBalancerListenerExternalAddressSpecList(this, "external_address_spec", true);
  public get externalAddressSpec() {
    return this._externalAddressSpec;
  }

  // internal_address_spec - computed: true, optional: false, required: false
  private _internalAddressSpec = new DataYandexLbNetworkLoadBalancerListenerInternalAddressSpecList(this, "internal_address_spec", true);
  public get internalAddressSpec() {
    return this._internalAddressSpec;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // target_port - computed: true, optional: false, required: false
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
}

export class DataYandexLbNetworkLoadBalancerListenerList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLbNetworkLoadBalancerListenerOutputReference {
    return new DataYandexLbNetworkLoadBalancerListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer yandex_lb_network_load_balancer}
*/
export class DataYandexLbNetworkLoadBalancer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_lb_network_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexLbNetworkLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexLbNetworkLoadBalancer to import
  * @param importFromId The id of the existing DataYandexLbNetworkLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexLbNetworkLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_lb_network_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/lb_network_load_balancer yandex_lb_network_load_balancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexLbNetworkLoadBalancerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexLbNetworkLoadBalancerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_lb_network_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._networkLoadBalancerId = config.networkLoadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_zonal_shift - computed: true, optional: false, required: false
  public get allowZonalShift() {
    return this.getBooleanAttribute('allow_zonal_shift');
  }

  // attached_target_group - computed: true, optional: false, required: false
  private _attachedTargetGroup = new DataYandexLbNetworkLoadBalancerAttachedTargetGroupList(this, "attached_target_group", true);
  public get attachedTargetGroup() {
    return this._attachedTargetGroup;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // listener - computed: true, optional: false, required: false
  private _listener = new DataYandexLbNetworkLoadBalancerListenerList(this, "listener", true);
  public get listener() {
    return this._listener;
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

  // network_load_balancer_id - computed: true, optional: true, required: false
  private _networkLoadBalancerId?: string; 
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }
  public set networkLoadBalancerId(value: string) {
    this._networkLoadBalancerId = value;
  }
  public resetNetworkLoadBalancerId() {
    this._networkLoadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerIdInput() {
    return this._networkLoadBalancerId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._networkLoadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
