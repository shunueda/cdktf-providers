// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSbercloudElbPoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#any_port_enable DataSbercloudElbPools#any_port_enable}
  */
  readonly anyPortEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#connection_drain DataSbercloudElbPools#connection_drain}
  */
  readonly connectionDrain?: string;
  /**
  * Specifies the description of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#description DataSbercloudElbPools#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#enterprise_project_id DataSbercloudElbPools#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Specifies the health monitor ID of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#healthmonitor_id DataSbercloudElbPools#healthmonitor_id}
  */
  readonly healthmonitorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#id DataSbercloudElbPools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#ip_version DataSbercloudElbPools#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Specifies the method of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#lb_method DataSbercloudElbPools#lb_method}
  */
  readonly lbMethod?: string;
  /**
  * Specifies the listener ID of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#listener_id DataSbercloudElbPools#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Specifies the loadbalancer ID of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#loadbalancer_id DataSbercloudElbPools#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#member_address DataSbercloudElbPools#member_address}
  */
  readonly memberAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#member_deletion_protection_enable DataSbercloudElbPools#member_deletion_protection_enable}
  */
  readonly memberDeletionProtectionEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#member_device_id DataSbercloudElbPools#member_device_id}
  */
  readonly memberDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#member_instance_id DataSbercloudElbPools#member_instance_id}
  */
  readonly memberInstanceId?: string;
  /**
  * Specifies the name of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#name DataSbercloudElbPools#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#pool_health DataSbercloudElbPools#pool_health}
  */
  readonly poolHealth?: string;
  /**
  * Specifies the ID of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#pool_id DataSbercloudElbPools#pool_id}
  */
  readonly poolId?: string;
  /**
  * Specifies the protection status for update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#protection_status DataSbercloudElbPools#protection_status}
  */
  readonly protectionStatus?: string;
  /**
  * Specifies the protocol of the ELB pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#protocol DataSbercloudElbPools#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#public_border_group DataSbercloudElbPools#public_border_group}
  */
  readonly publicBorderGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#quic_cid_len DataSbercloudElbPools#quic_cid_len}
  */
  readonly quicCidLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#quic_cid_offset DataSbercloudElbPools#quic_cid_offset}
  */
  readonly quicCidOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#region DataSbercloudElbPools#region}
  */
  readonly region?: string;
  /**
  * Specifies the type of the backend server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#type DataSbercloudElbPools#type}
  */
  readonly type?: string;
  /**
  * Specifies the ID of the VPC where the backend server group works.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#vpc_id DataSbercloudElbPools#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DataSbercloudElbPoolsPoolsListeners {
}

export function dataSbercloudElbPoolsPoolsListenersToTerraform(struct?: DataSbercloudElbPoolsPoolsListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudElbPoolsPoolsListenersToHclTerraform(struct?: DataSbercloudElbPoolsPoolsListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudElbPoolsPoolsListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudElbPoolsPoolsListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudElbPoolsPoolsListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataSbercloudElbPoolsPoolsListenersList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudElbPoolsPoolsListenersOutputReference {
    return new DataSbercloudElbPoolsPoolsListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudElbPoolsPoolsLoadbalancers {
}

export function dataSbercloudElbPoolsPoolsLoadbalancersToTerraform(struct?: DataSbercloudElbPoolsPoolsLoadbalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudElbPoolsPoolsLoadbalancersToHclTerraform(struct?: DataSbercloudElbPoolsPoolsLoadbalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudElbPoolsPoolsLoadbalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudElbPoolsPoolsLoadbalancers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudElbPoolsPoolsLoadbalancers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataSbercloudElbPoolsPoolsLoadbalancersList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudElbPoolsPoolsLoadbalancersOutputReference {
    return new DataSbercloudElbPoolsPoolsLoadbalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudElbPoolsPoolsMembers {
}

export function dataSbercloudElbPoolsPoolsMembersToTerraform(struct?: DataSbercloudElbPoolsPoolsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudElbPoolsPoolsMembersToHclTerraform(struct?: DataSbercloudElbPoolsPoolsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudElbPoolsPoolsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudElbPoolsPoolsMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudElbPoolsPoolsMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataSbercloudElbPoolsPoolsMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudElbPoolsPoolsMembersOutputReference {
    return new DataSbercloudElbPoolsPoolsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudElbPoolsPoolsPersistence {
}

export function dataSbercloudElbPoolsPoolsPersistenceToTerraform(struct?: DataSbercloudElbPoolsPoolsPersistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudElbPoolsPoolsPersistenceToHclTerraform(struct?: DataSbercloudElbPoolsPoolsPersistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudElbPoolsPoolsPersistenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudElbPoolsPoolsPersistence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudElbPoolsPoolsPersistence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie_name - computed: true, optional: false, required: false
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSbercloudElbPoolsPoolsPersistenceList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudElbPoolsPoolsPersistenceOutputReference {
    return new DataSbercloudElbPoolsPoolsPersistenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudElbPoolsPoolsQuicCidHashStrategy {
}

export function dataSbercloudElbPoolsPoolsQuicCidHashStrategyToTerraform(struct?: DataSbercloudElbPoolsPoolsQuicCidHashStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudElbPoolsPoolsQuicCidHashStrategyToHclTerraform(struct?: DataSbercloudElbPoolsPoolsQuicCidHashStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudElbPoolsPoolsQuicCidHashStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudElbPoolsPoolsQuicCidHashStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudElbPoolsPoolsQuicCidHashStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // len - computed: true, optional: false, required: false
  public get len() {
    return this.getNumberAttribute('len');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }
}

export class DataSbercloudElbPoolsPoolsQuicCidHashStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudElbPoolsPoolsQuicCidHashStrategyOutputReference {
    return new DataSbercloudElbPoolsPoolsQuicCidHashStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudElbPoolsPools {
}

export function dataSbercloudElbPoolsPoolsToTerraform(struct?: DataSbercloudElbPoolsPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudElbPoolsPoolsToHclTerraform(struct?: DataSbercloudElbPoolsPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudElbPoolsPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudElbPoolsPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudElbPoolsPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any_port_enable - computed: true, optional: false, required: false
  public get anyPortEnable() {
    return this.getBooleanAttribute('any_port_enable');
  }

  // connection_drain_enabled - computed: true, optional: false, required: false
  public get connectionDrainEnabled() {
    return this.getBooleanAttribute('connection_drain_enabled');
  }

  // connection_drain_timeout - computed: true, optional: false, required: false
  public get connectionDrainTimeout() {
    return this.getNumberAttribute('connection_drain_timeout');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // healthmonitor_id - computed: true, optional: false, required: false
  public get healthmonitorId() {
    return this.getStringAttribute('healthmonitor_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // lb_method - computed: true, optional: false, required: false
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }

  // listeners - computed: true, optional: false, required: false
  private _listeners = new DataSbercloudElbPoolsPoolsListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }

  // loadbalancers - computed: true, optional: false, required: false
  private _loadbalancers = new DataSbercloudElbPoolsPoolsLoadbalancersList(this, "loadbalancers", false);
  public get loadbalancers() {
    return this._loadbalancers;
  }

  // member_deletion_protection_enable - computed: true, optional: false, required: false
  public get memberDeletionProtectionEnable() {
    return this.getBooleanAttribute('member_deletion_protection_enable');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataSbercloudElbPoolsPoolsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // minimum_healthy_member_count - computed: true, optional: false, required: false
  public get minimumHealthyMemberCount() {
    return this.getNumberAttribute('minimum_healthy_member_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // persistence - computed: true, optional: false, required: false
  private _persistence = new DataSbercloudElbPoolsPoolsPersistenceList(this, "persistence", false);
  public get persistence() {
    return this._persistence;
  }

  // protection_reason - computed: true, optional: false, required: false
  public get protectionReason() {
    return this.getStringAttribute('protection_reason');
  }

  // protection_status - computed: true, optional: false, required: false
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // public_border_group - computed: true, optional: false, required: false
  public get publicBorderGroup() {
    return this.getStringAttribute('public_border_group');
  }

  // quic_cid_hash_strategy - computed: true, optional: false, required: false
  private _quicCidHashStrategy = new DataSbercloudElbPoolsPoolsQuicCidHashStrategyList(this, "quic_cid_hash_strategy", false);
  public get quicCidHashStrategy() {
    return this._quicCidHashStrategy;
  }

  // slow_start_duration - computed: true, optional: false, required: false
  public get slowStartDuration() {
    return this.getNumberAttribute('slow_start_duration');
  }

  // slow_start_enabled - computed: true, optional: false, required: false
  public get slowStartEnabled() {
    return this.getBooleanAttribute('slow_start_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataSbercloudElbPoolsPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudElbPoolsPoolsOutputReference {
    return new DataSbercloudElbPoolsPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools sbercloud_elb_pools}
*/
export class DataSbercloudElbPools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_elb_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSbercloudElbPools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSbercloudElbPools to import
  * @param importFromId The id of the existing DataSbercloudElbPools that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSbercloudElbPools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_elb_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/elb_pools sbercloud_elb_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSbercloudElbPoolsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSbercloudElbPoolsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_elb_pools',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anyPortEnable = config.anyPortEnable;
    this._connectionDrain = config.connectionDrain;
    this._description = config.description;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._healthmonitorId = config.healthmonitorId;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._lbMethod = config.lbMethod;
    this._listenerId = config.listenerId;
    this._loadbalancerId = config.loadbalancerId;
    this._memberAddress = config.memberAddress;
    this._memberDeletionProtectionEnable = config.memberDeletionProtectionEnable;
    this._memberDeviceId = config.memberDeviceId;
    this._memberInstanceId = config.memberInstanceId;
    this._name = config.name;
    this._poolHealth = config.poolHealth;
    this._poolId = config.poolId;
    this._protectionStatus = config.protectionStatus;
    this._protocol = config.protocol;
    this._publicBorderGroup = config.publicBorderGroup;
    this._quicCidLen = config.quicCidLen;
    this._quicCidOffset = config.quicCidOffset;
    this._region = config.region;
    this._type = config.type;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // any_port_enable - computed: false, optional: true, required: false
  private _anyPortEnable?: string; 
  public get anyPortEnable() {
    return this.getStringAttribute('any_port_enable');
  }
  public set anyPortEnable(value: string) {
    this._anyPortEnable = value;
  }
  public resetAnyPortEnable() {
    this._anyPortEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPortEnableInput() {
    return this._anyPortEnable;
  }

  // connection_drain - computed: false, optional: true, required: false
  private _connectionDrain?: string; 
  public get connectionDrain() {
    return this.getStringAttribute('connection_drain');
  }
  public set connectionDrain(value: string) {
    this._connectionDrain = value;
  }
  public resetConnectionDrain() {
    this._connectionDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainInput() {
    return this._connectionDrain;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // healthmonitor_id - computed: false, optional: true, required: false
  private _healthmonitorId?: string; 
  public get healthmonitorId() {
    return this.getStringAttribute('healthmonitor_id');
  }
  public set healthmonitorId(value: string) {
    this._healthmonitorId = value;
  }
  public resetHealthmonitorId() {
    this._healthmonitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthmonitorIdInput() {
    return this._healthmonitorId;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // lb_method - computed: false, optional: true, required: false
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  public resetLbMethod() {
    this._lbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
  }

  // listener_id - computed: false, optional: true, required: false
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // loadbalancer_id - computed: false, optional: true, required: false
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  public resetLoadbalancerId() {
    this._loadbalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
  }

  // member_address - computed: false, optional: true, required: false
  private _memberAddress?: string; 
  public get memberAddress() {
    return this.getStringAttribute('member_address');
  }
  public set memberAddress(value: string) {
    this._memberAddress = value;
  }
  public resetMemberAddress() {
    this._memberAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAddressInput() {
    return this._memberAddress;
  }

  // member_deletion_protection_enable - computed: false, optional: true, required: false
  private _memberDeletionProtectionEnable?: string; 
  public get memberDeletionProtectionEnable() {
    return this.getStringAttribute('member_deletion_protection_enable');
  }
  public set memberDeletionProtectionEnable(value: string) {
    this._memberDeletionProtectionEnable = value;
  }
  public resetMemberDeletionProtectionEnable() {
    this._memberDeletionProtectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDeletionProtectionEnableInput() {
    return this._memberDeletionProtectionEnable;
  }

  // member_device_id - computed: false, optional: true, required: false
  private _memberDeviceId?: string; 
  public get memberDeviceId() {
    return this.getStringAttribute('member_device_id');
  }
  public set memberDeviceId(value: string) {
    this._memberDeviceId = value;
  }
  public resetMemberDeviceId() {
    this._memberDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDeviceIdInput() {
    return this._memberDeviceId;
  }

  // member_instance_id - computed: false, optional: true, required: false
  private _memberInstanceId?: string; 
  public get memberInstanceId() {
    return this.getStringAttribute('member_instance_id');
  }
  public set memberInstanceId(value: string) {
    this._memberInstanceId = value;
  }
  public resetMemberInstanceId() {
    this._memberInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInstanceIdInput() {
    return this._memberInstanceId;
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

  // pool_health - computed: false, optional: true, required: false
  private _poolHealth?: string; 
  public get poolHealth() {
    return this.getStringAttribute('pool_health');
  }
  public set poolHealth(value: string) {
    this._poolHealth = value;
  }
  public resetPoolHealth() {
    this._poolHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolHealthInput() {
    return this._poolHealth;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // pools - computed: true, optional: false, required: false
  private _pools = new DataSbercloudElbPoolsPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }

  // protection_status - computed: false, optional: true, required: false
  private _protectionStatus?: string; 
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }
  public set protectionStatus(value: string) {
    this._protectionStatus = value;
  }
  public resetProtectionStatus() {
    this._protectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionStatusInput() {
    return this._protectionStatus;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_border_group - computed: false, optional: true, required: false
  private _publicBorderGroup?: string; 
  public get publicBorderGroup() {
    return this.getStringAttribute('public_border_group');
  }
  public set publicBorderGroup(value: string) {
    this._publicBorderGroup = value;
  }
  public resetPublicBorderGroup() {
    this._publicBorderGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicBorderGroupInput() {
    return this._publicBorderGroup;
  }

  // quic_cid_len - computed: false, optional: true, required: false
  private _quicCidLen?: number; 
  public get quicCidLen() {
    return this.getNumberAttribute('quic_cid_len');
  }
  public set quicCidLen(value: number) {
    this._quicCidLen = value;
  }
  public resetQuicCidLen() {
    this._quicCidLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicCidLenInput() {
    return this._quicCidLen;
  }

  // quic_cid_offset - computed: false, optional: true, required: false
  private _quicCidOffset?: number; 
  public get quicCidOffset() {
    return this.getNumberAttribute('quic_cid_offset');
  }
  public set quicCidOffset(value: number) {
    this._quicCidOffset = value;
  }
  public resetQuicCidOffset() {
    this._quicCidOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicCidOffsetInput() {
    return this._quicCidOffset;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      any_port_enable: cdktf.stringToTerraform(this._anyPortEnable),
      connection_drain: cdktf.stringToTerraform(this._connectionDrain),
      description: cdktf.stringToTerraform(this._description),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      healthmonitor_id: cdktf.stringToTerraform(this._healthmonitorId),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      lb_method: cdktf.stringToTerraform(this._lbMethod),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      member_address: cdktf.stringToTerraform(this._memberAddress),
      member_deletion_protection_enable: cdktf.stringToTerraform(this._memberDeletionProtectionEnable),
      member_device_id: cdktf.stringToTerraform(this._memberDeviceId),
      member_instance_id: cdktf.stringToTerraform(this._memberInstanceId),
      name: cdktf.stringToTerraform(this._name),
      pool_health: cdktf.stringToTerraform(this._poolHealth),
      pool_id: cdktf.stringToTerraform(this._poolId),
      protection_status: cdktf.stringToTerraform(this._protectionStatus),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_border_group: cdktf.stringToTerraform(this._publicBorderGroup),
      quic_cid_len: cdktf.numberToTerraform(this._quicCidLen),
      quic_cid_offset: cdktf.numberToTerraform(this._quicCidOffset),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      any_port_enable: {
        value: cdktf.stringToHclTerraform(this._anyPortEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_drain: {
        value: cdktf.stringToHclTerraform(this._connectionDrain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthmonitor_id: {
        value: cdktf.stringToHclTerraform(this._healthmonitorId),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_method: {
        value: cdktf.stringToHclTerraform(this._lbMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_address: {
        value: cdktf.stringToHclTerraform(this._memberAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_deletion_protection_enable: {
        value: cdktf.stringToHclTerraform(this._memberDeletionProtectionEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_device_id: {
        value: cdktf.stringToHclTerraform(this._memberDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_instance_id: {
        value: cdktf.stringToHclTerraform(this._memberInstanceId),
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
      pool_health: {
        value: cdktf.stringToHclTerraform(this._poolHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_status: {
        value: cdktf.stringToHclTerraform(this._protectionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_border_group: {
        value: cdktf.stringToHclTerraform(this._publicBorderGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quic_cid_len: {
        value: cdktf.numberToHclTerraform(this._quicCidLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quic_cid_offset: {
        value: cdktf.numberToHclTerraform(this._quicCidOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
