// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Gateway, for example, `gw-abc123`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/gateway#id DataConfluentGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/gateway#environment DataConfluentGateway#environment}
  */
  readonly environment: DataConfluentGatewayEnvironment;
}
export interface DataConfluentGatewayAwsEgressPrivateLinkGateway {
}

export function dataConfluentGatewayAwsEgressPrivateLinkGatewayToTerraform(struct?: DataConfluentGatewayAwsEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentGatewayAwsEgressPrivateLinkGatewayToHclTerraform(struct?: DataConfluentGatewayAwsEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentGatewayAwsEgressPrivateLinkGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentGatewayAwsEgressPrivateLinkGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayAwsEgressPrivateLinkGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principal_arn - computed: true, optional: false, required: false
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataConfluentGatewayAwsEgressPrivateLinkGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentGatewayAwsEgressPrivateLinkGatewayOutputReference {
    return new DataConfluentGatewayAwsEgressPrivateLinkGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentGatewayAwsPeeringGateway {
}

export function dataConfluentGatewayAwsPeeringGatewayToTerraform(struct?: DataConfluentGatewayAwsPeeringGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentGatewayAwsPeeringGatewayToHclTerraform(struct?: DataConfluentGatewayAwsPeeringGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentGatewayAwsPeeringGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentGatewayAwsPeeringGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayAwsPeeringGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataConfluentGatewayAwsPeeringGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentGatewayAwsPeeringGatewayOutputReference {
    return new DataConfluentGatewayAwsPeeringGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentGatewayAwsPrivateNetworkInterfaceGateway {
}

export function dataConfluentGatewayAwsPrivateNetworkInterfaceGatewayToTerraform(struct?: DataConfluentGatewayAwsPrivateNetworkInterfaceGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentGatewayAwsPrivateNetworkInterfaceGatewayToHclTerraform(struct?: DataConfluentGatewayAwsPrivateNetworkInterfaceGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentGatewayAwsPrivateNetworkInterfaceGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentGatewayAwsPrivateNetworkInterfaceGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayAwsPrivateNetworkInterfaceGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
}

export class DataConfluentGatewayAwsPrivateNetworkInterfaceGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentGatewayAwsPrivateNetworkInterfaceGatewayOutputReference {
    return new DataConfluentGatewayAwsPrivateNetworkInterfaceGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentGatewayAzureEgressPrivateLinkGateway {
}

export function dataConfluentGatewayAzureEgressPrivateLinkGatewayToTerraform(struct?: DataConfluentGatewayAzureEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentGatewayAzureEgressPrivateLinkGatewayToHclTerraform(struct?: DataConfluentGatewayAzureEgressPrivateLinkGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentGatewayAzureEgressPrivateLinkGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentGatewayAzureEgressPrivateLinkGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayAzureEgressPrivateLinkGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
}

export class DataConfluentGatewayAzureEgressPrivateLinkGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentGatewayAzureEgressPrivateLinkGatewayOutputReference {
    return new DataConfluentGatewayAzureEgressPrivateLinkGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentGatewayAzurePeeringGateway {
}

export function dataConfluentGatewayAzurePeeringGatewayToTerraform(struct?: DataConfluentGatewayAzurePeeringGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentGatewayAzurePeeringGatewayToHclTerraform(struct?: DataConfluentGatewayAzurePeeringGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentGatewayAzurePeeringGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentGatewayAzurePeeringGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayAzurePeeringGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataConfluentGatewayAzurePeeringGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentGatewayAzurePeeringGatewayOutputReference {
    return new DataConfluentGatewayAzurePeeringGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentGatewayGcpEgressPrivateServiceConnectGateway {
}

export function dataConfluentGatewayGcpEgressPrivateServiceConnectGatewayToTerraform(struct?: DataConfluentGatewayGcpEgressPrivateServiceConnectGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentGatewayGcpEgressPrivateServiceConnectGatewayToHclTerraform(struct?: DataConfluentGatewayGcpEgressPrivateServiceConnectGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentGatewayGcpEgressPrivateServiceConnectGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentGatewayGcpEgressPrivateServiceConnectGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayGcpEgressPrivateServiceConnectGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataConfluentGatewayGcpEgressPrivateServiceConnectGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentGatewayGcpEgressPrivateServiceConnectGatewayOutputReference {
    return new DataConfluentGatewayGcpEgressPrivateServiceConnectGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentGatewayGcpPeeringGateway {
}

export function dataConfluentGatewayGcpPeeringGatewayToTerraform(struct?: DataConfluentGatewayGcpPeeringGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentGatewayGcpPeeringGatewayToHclTerraform(struct?: DataConfluentGatewayGcpPeeringGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentGatewayGcpPeeringGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentGatewayGcpPeeringGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayGcpPeeringGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iam_principal - computed: true, optional: false, required: false
  public get iamPrincipal() {
    return this.getStringAttribute('iam_principal');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataConfluentGatewayGcpPeeringGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentGatewayGcpPeeringGatewayOutputReference {
    return new DataConfluentGatewayGcpPeeringGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentGatewayEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/gateway#id DataConfluentGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentGatewayEnvironmentToTerraform(struct?: DataConfluentGatewayEnvironmentOutputReference | DataConfluentGatewayEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentGatewayEnvironmentToHclTerraform(struct?: DataConfluentGatewayEnvironmentOutputReference | DataConfluentGatewayEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentGatewayEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentGatewayEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentGatewayEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/gateway confluent_gateway}
*/
export class DataConfluentGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentGateway to import
  * @param importFromId The id of the existing DataConfluentGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/gateway confluent_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfluentGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_gateway',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
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
    this._environment.internalValue = config.environment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_egress_private_link_gateway - computed: true, optional: false, required: false
  private _awsEgressPrivateLinkGateway = new DataConfluentGatewayAwsEgressPrivateLinkGatewayList(this, "aws_egress_private_link_gateway", false);
  public get awsEgressPrivateLinkGateway() {
    return this._awsEgressPrivateLinkGateway;
  }

  // aws_peering_gateway - computed: true, optional: false, required: false
  private _awsPeeringGateway = new DataConfluentGatewayAwsPeeringGatewayList(this, "aws_peering_gateway", false);
  public get awsPeeringGateway() {
    return this._awsPeeringGateway;
  }

  // aws_private_network_interface_gateway - computed: true, optional: false, required: false
  private _awsPrivateNetworkInterfaceGateway = new DataConfluentGatewayAwsPrivateNetworkInterfaceGatewayList(this, "aws_private_network_interface_gateway", false);
  public get awsPrivateNetworkInterfaceGateway() {
    return this._awsPrivateNetworkInterfaceGateway;
  }

  // azure_egress_private_link_gateway - computed: true, optional: false, required: false
  private _azureEgressPrivateLinkGateway = new DataConfluentGatewayAzureEgressPrivateLinkGatewayList(this, "azure_egress_private_link_gateway", false);
  public get azureEgressPrivateLinkGateway() {
    return this._azureEgressPrivateLinkGateway;
  }

  // azure_peering_gateway - computed: true, optional: false, required: false
  private _azurePeeringGateway = new DataConfluentGatewayAzurePeeringGatewayList(this, "azure_peering_gateway", false);
  public get azurePeeringGateway() {
    return this._azurePeeringGateway;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // gcp_egress_private_service_connect_gateway - computed: true, optional: false, required: false
  private _gcpEgressPrivateServiceConnectGateway = new DataConfluentGatewayGcpEgressPrivateServiceConnectGatewayList(this, "gcp_egress_private_service_connect_gateway", false);
  public get gcpEgressPrivateServiceConnectGateway() {
    return this._gcpEgressPrivateServiceConnectGateway;
  }

  // gcp_peering_gateway - computed: true, optional: false, required: false
  private _gcpPeeringGateway = new DataConfluentGatewayGcpPeeringGatewayList(this, "gcp_peering_gateway", false);
  public get gcpPeeringGateway() {
    return this._gcpPeeringGateway;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new DataConfluentGatewayEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataConfluentGatewayEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      environment: dataConfluentGatewayEnvironmentToTerraform(this._environment.internalValue),
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
      environment: {
        value: dataConfluentGatewayEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentGatewayEnvironmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
