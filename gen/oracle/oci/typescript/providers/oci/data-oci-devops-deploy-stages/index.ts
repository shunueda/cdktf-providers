// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsDeployStagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}
  */
  readonly deployPipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#filter DataOciDevopsDeployStages#filter}
  */
  readonly filter?: DataOciDevopsDeployStagesFilter[] | cdktf.IResolvable;
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_policy_type - computed: true, optional: false, required: false
  public get approvalPolicyType() {
    return this.getStringAttribute('approval_policy_type');
  }

  // number_of_approvals_required - computed: true, optional: false, required: false
  public get numberOfApprovalsRequired() {
    return this.getNumberAttribute('number_of_approvals_required');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_name - computed: true, optional: false, required: false
  public get ingressName() {
    return this.getStringAttribute('ingress_name');
  }

  // namespace_a - computed: true, optional: false, required: false
  public get namespaceA() {
    return this.getStringAttribute('namespace_a');
  }

  // namespace_b - computed: true, optional: false, required: false
  public get namespaceB() {
    return this.getStringAttribute('namespace_b');
  }

  // strategy_type - computed: true, optional: false, required: false
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_name - computed: true, optional: false, required: false
  public get ingressName() {
    return this.getStringAttribute('ingress_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // strategy_type - computed: true, optional: false, required: false
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_channel_type - computed: true, optional: false, required: false
  public get networkChannelType() {
    return this.getStringAttribute('network_channel_type');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // container_config_type - computed: true, optional: false, required: false
  public get containerConfigType() {
    return this.getStringAttribute('container_config_type');
  }

  // network_channel - computed: true, optional: false, required: false
  private _networkChannel = new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList(this, "network_channel", false);
  public get networkChannel() {
    return this._networkChannel;
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems | undefined) {
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

export class DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_count - computed: true, optional: false, required: false
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }

  // failure_percentage - computed: true, optional: false, required: false
  public get failurePercentage() {
    return this.getNumberAttribute('failure_percentage');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }

  // listener_name - computed: true, optional: false, required: false
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }

  // listener_name - computed: true, optional: false, required: false
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_count - computed: true, optional: false, required: false
  public get batchCount() {
    return this.getNumberAttribute('batch_count');
  }

  // batch_delay_in_seconds - computed: true, optional: false, required: false
  public get batchDelayInSeconds() {
    return this.getNumberAttribute('batch_delay_in_seconds');
  }

  // batch_percentage - computed: true, optional: false, required: false
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // ramp_limit_percent - computed: true, optional: false, required: false
  public get rampLimitPercent() {
    return this.getNumberAttribute('ramp_limit_percent');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsSetString {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetStringToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetStringToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsSetString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }

  // listener_name - computed: true, optional: false, required: false
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // wait_duration - computed: true, optional: false, required: false
  public get waitDuration() {
    return this.getStringAttribute('wait_duration');
  }

  // wait_type - computed: true, optional: false, required: false
  public get waitType() {
    return this.getStringAttribute('wait_type');
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollectionItems {
}

export function dataOciDevopsDeployStagesDeployStageCollectionItemsToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionItemsToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_policy - computed: true, optional: false, required: false
  private _approvalPolicy = new DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList(this, "approval_policy", false);
  public get approvalPolicy() {
    return this._approvalPolicy;
  }

  // are_hooks_enabled - computed: true, optional: false, required: false
  public get areHooksEnabled() {
    return this.getBooleanAttribute('are_hooks_enabled');
  }

  // blue_backend_ips - computed: true, optional: false, required: false
  private _blueBackendIps = new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList(this, "blue_backend_ips", false);
  public get blueBackendIps() {
    return this._blueBackendIps;
  }

  // blue_green_strategy - computed: true, optional: false, required: false
  private _blueGreenStrategy = new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList(this, "blue_green_strategy", false);
  public get blueGreenStrategy() {
    return this._blueGreenStrategy;
  }

  // canary_strategy - computed: true, optional: false, required: false
  private _canaryStrategy = new DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList(this, "canary_strategy", false);
  public get canaryStrategy() {
    return this._canaryStrategy;
  }

  // command_spec_deploy_artifact_id - computed: true, optional: false, required: false
  public get commandSpecDeployArtifactId() {
    return this.getStringAttribute('command_spec_deploy_artifact_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_instance_group_blue_green_deployment_deploy_stage_id - computed: true, optional: false, required: false
  public get computeInstanceGroupBlueGreenDeploymentDeployStageId() {
    return this.getStringAttribute('compute_instance_group_blue_green_deployment_deploy_stage_id');
  }

  // compute_instance_group_canary_deploy_stage_id - computed: true, optional: false, required: false
  public get computeInstanceGroupCanaryDeployStageId() {
    return this.getStringAttribute('compute_instance_group_canary_deploy_stage_id');
  }

  // compute_instance_group_canary_traffic_shift_deploy_stage_id - computed: true, optional: false, required: false
  public get computeInstanceGroupCanaryTrafficShiftDeployStageId() {
    return this.getStringAttribute('compute_instance_group_canary_traffic_shift_deploy_stage_id');
  }

  // compute_instance_group_deploy_environment_id - computed: true, optional: false, required: false
  public get computeInstanceGroupDeployEnvironmentId() {
    return this.getStringAttribute('compute_instance_group_deploy_environment_id');
  }

  // config - computed: true, optional: false, required: false
  private _config = new cdktf.StringMap(this, "config");
  public get config() {
    return this._config;
  }

  // container_config - computed: true, optional: false, required: false
  private _containerConfig = new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList(this, "container_config", false);
  public get containerConfig() {
    return this._containerConfig;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deploy_artifact_id - computed: true, optional: false, required: false
  public get deployArtifactId() {
    return this.getStringAttribute('deploy_artifact_id');
  }

  // deploy_artifact_ids - computed: true, optional: false, required: false
  public get deployArtifactIds() {
    return this.getListAttribute('deploy_artifact_ids');
  }

  // deploy_environment_id_a - computed: true, optional: false, required: false
  public get deployEnvironmentIdA() {
    return this.getStringAttribute('deploy_environment_id_a');
  }

  // deploy_environment_id_b - computed: true, optional: false, required: false
  public get deployEnvironmentIdB() {
    return this.getStringAttribute('deploy_environment_id_b');
  }

  // deploy_pipeline_id - computed: true, optional: false, required: false
  public get deployPipelineId() {
    return this.getStringAttribute('deploy_pipeline_id');
  }

  // deploy_stage_predecessor_collection - computed: true, optional: false, required: false
  private _deployStagePredecessorCollection = new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList(this, "deploy_stage_predecessor_collection", false);
  public get deployStagePredecessorCollection() {
    return this._deployStagePredecessorCollection;
  }

  // deploy_stage_type - computed: true, optional: false, required: false
  public get deployStageType() {
    return this.getStringAttribute('deploy_stage_type');
  }

  // deployment_spec_deploy_artifact_id - computed: true, optional: false, required: false
  public get deploymentSpecDeployArtifactId() {
    return this.getStringAttribute('deployment_spec_deploy_artifact_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // docker_image_deploy_artifact_id - computed: true, optional: false, required: false
  public get dockerImageDeployArtifactId() {
    return this.getStringAttribute('docker_image_deploy_artifact_id');
  }

  // failure_policy - computed: true, optional: false, required: false
  private _failurePolicy = new DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList(this, "failure_policy", false);
  public get failurePolicy() {
    return this._failurePolicy;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // function_deploy_environment_id - computed: true, optional: false, required: false
  public get functionDeployEnvironmentId() {
    return this.getStringAttribute('function_deploy_environment_id');
  }

  // function_timeout_in_seconds - computed: true, optional: false, required: false
  public get functionTimeoutInSeconds() {
    return this.getNumberAttribute('function_timeout_in_seconds');
  }

  // green_backend_ips - computed: true, optional: false, required: false
  private _greenBackendIps = new DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList(this, "green_backend_ips", false);
  public get greenBackendIps() {
    return this._greenBackendIps;
  }

  // helm_chart_deploy_artifact_id - computed: true, optional: false, required: false
  public get helmChartDeployArtifactId() {
    return this.getStringAttribute('helm_chart_deploy_artifact_id');
  }

  // helm_command_artifact_ids - computed: true, optional: false, required: false
  public get helmCommandArtifactIds() {
    return this.getListAttribute('helm_command_artifact_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_async - computed: true, optional: false, required: false
  public get isAsync() {
    return this.getBooleanAttribute('is_async');
  }

  // is_debug_enabled - computed: true, optional: false, required: false
  public get isDebugEnabled() {
    return this.getBooleanAttribute('is_debug_enabled');
  }

  // is_force_enabled - computed: true, optional: false, required: false
  public get isForceEnabled() {
    return this.getBooleanAttribute('is_force_enabled');
  }

  // is_uninstall_on_stage_delete - computed: true, optional: false, required: false
  public get isUninstallOnStageDelete() {
    return this.getBooleanAttribute('is_uninstall_on_stage_delete');
  }

  // is_validation_enabled - computed: true, optional: false, required: false
  public get isValidationEnabled() {
    return this.getBooleanAttribute('is_validation_enabled');
  }

  // kubernetes_manifest_deploy_artifact_ids - computed: true, optional: false, required: false
  public get kubernetesManifestDeployArtifactIds() {
    return this.getListAttribute('kubernetes_manifest_deploy_artifact_ids');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // load_balancer_config - computed: true, optional: false, required: false
  private _loadBalancerConfig = new DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList(this, "load_balancer_config", false);
  public get loadBalancerConfig() {
    return this._loadBalancerConfig;
  }

  // max_history - computed: true, optional: false, required: false
  public get maxHistory() {
    return this.getNumberAttribute('max_history');
  }

  // max_memory_in_mbs - computed: true, optional: false, required: false
  public get maxMemoryInMbs() {
    return this.getStringAttribute('max_memory_in_mbs');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // oke_blue_green_deploy_stage_id - computed: true, optional: false, required: false
  public get okeBlueGreenDeployStageId() {
    return this.getStringAttribute('oke_blue_green_deploy_stage_id');
  }

  // oke_canary_deploy_stage_id - computed: true, optional: false, required: false
  public get okeCanaryDeployStageId() {
    return this.getStringAttribute('oke_canary_deploy_stage_id');
  }

  // oke_canary_traffic_shift_deploy_stage_id - computed: true, optional: false, required: false
  public get okeCanaryTrafficShiftDeployStageId() {
    return this.getStringAttribute('oke_canary_traffic_shift_deploy_stage_id');
  }

  // oke_cluster_deploy_environment_id - computed: true, optional: false, required: false
  public get okeClusterDeployEnvironmentId() {
    return this.getStringAttribute('oke_cluster_deploy_environment_id');
  }

  // production_load_balancer_config - computed: true, optional: false, required: false
  private _productionLoadBalancerConfig = new DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList(this, "production_load_balancer_config", false);
  public get productionLoadBalancerConfig() {
    return this._productionLoadBalancerConfig;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // release_name - computed: true, optional: false, required: false
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }

  // rollback_policy - computed: true, optional: false, required: false
  private _rollbackPolicy = new DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList(this, "rollback_policy", false);
  public get rollbackPolicy() {
    return this._rollbackPolicy;
  }

  // rollout_policy - computed: true, optional: false, required: false
  private _rolloutPolicy = new DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList(this, "rollout_policy", false);
  public get rolloutPolicy() {
    return this._rolloutPolicy;
  }

  // set_string - computed: true, optional: false, required: false
  private _setString = new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList(this, "set_string", false);
  public get setString() {
    return this._setString;
  }

  // set_values - computed: true, optional: false, required: false
  private _setValues = new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList(this, "set_values", false);
  public get setValues() {
    return this._setValues;
  }

  // should_cleanup_on_fail - computed: true, optional: false, required: false
  public get shouldCleanupOnFail() {
    return this.getBooleanAttribute('should_cleanup_on_fail');
  }

  // should_not_wait - computed: true, optional: false, required: false
  public get shouldNotWait() {
    return this.getBooleanAttribute('should_not_wait');
  }

  // should_reset_values - computed: true, optional: false, required: false
  public get shouldResetValues() {
    return this.getBooleanAttribute('should_reset_values');
  }

  // should_reuse_values - computed: true, optional: false, required: false
  public get shouldReuseValues() {
    return this.getBooleanAttribute('should_reuse_values');
  }

  // should_skip_crds - computed: true, optional: false, required: false
  public get shouldSkipCrds() {
    return this.getBooleanAttribute('should_skip_crds');
  }

  // should_skip_render_subchart_notes - computed: true, optional: false, required: false
  public get shouldSkipRenderSubchartNotes() {
    return this.getBooleanAttribute('should_skip_render_subchart_notes');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // test_load_balancer_config - computed: true, optional: false, required: false
  private _testLoadBalancerConfig = new DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList(this, "test_load_balancer_config", false);
  public get testLoadBalancerConfig() {
    return this._testLoadBalancerConfig;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // traffic_shift_target - computed: true, optional: false, required: false
  public get trafficShiftTarget() {
    return this.getStringAttribute('traffic_shift_target');
  }

  // values_artifact_ids - computed: true, optional: false, required: false
  public get valuesArtifactIds() {
    return this.getListAttribute('values_artifact_ids');
  }

  // wait_criteria - computed: true, optional: false, required: false
  private _waitCriteria = new DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList(this, "wait_criteria", false);
  public get waitCriteria() {
    return this._waitCriteria;
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesDeployStageCollection {
}

export function dataOciDevopsDeployStagesDeployStageCollectionToTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployStagesDeployStageCollectionToHclTerraform(struct?: DataOciDevopsDeployStagesDeployStageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployStagesDeployStageCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesDeployStageCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployStagesDeployStageCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsDeployStagesDeployStageCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsDeployStagesDeployStageCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsDeployStagesDeployStageCollectionOutputReference {
    return new DataOciDevopsDeployStagesDeployStageCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployStagesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}
  */
  readonly values: string[];
}

export function dataOciDevopsDeployStagesFilterToTerraform(struct?: DataOciDevopsDeployStagesFilter | cdktf.IResolvable): any {
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


export function dataOciDevopsDeployStagesFilterToHclTerraform(struct?: DataOciDevopsDeployStagesFilter | cdktf.IResolvable): any {
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

export class DataOciDevopsDeployStagesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsDeployStagesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDevopsDeployStagesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDevopsDeployStagesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDevopsDeployStagesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDevopsDeployStagesFilterOutputReference {
    return new DataOciDevopsDeployStagesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages oci_devops_deploy_stages}
*/
export class DataOciDevopsDeployStages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_deploy_stages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDevopsDeployStages to import
  * @param importFromId The id of the existing DataOciDevopsDeployStages that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDevopsDeployStages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_deploy_stages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_deploy_stages oci_devops_deploy_stages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsDeployStagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsDeployStagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_deploy_stages',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._deployPipelineId = config.deployPipelineId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // deploy_pipeline_id - computed: false, optional: true, required: false
  private _deployPipelineId?: string; 
  public get deployPipelineId() {
    return this.getStringAttribute('deploy_pipeline_id');
  }
  public set deployPipelineId(value: string) {
    this._deployPipelineId = value;
  }
  public resetDeployPipelineId() {
    this._deployPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPipelineIdInput() {
    return this._deployPipelineId;
  }

  // deploy_stage_collection - computed: true, optional: false, required: false
  private _deployStageCollection = new DataOciDevopsDeployStagesDeployStageCollectionList(this, "deploy_stage_collection", false);
  public get deployStageCollection() {
    return this._deployStageCollection;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDevopsDeployStagesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDevopsDeployStagesFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      deploy_pipeline_id: cdktf.stringToTerraform(this._deployPipelineId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDevopsDeployStagesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_pipeline_id: {
        value: cdktf.stringToHclTerraform(this._deployPipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDevopsDeployStagesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDevopsDeployStagesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
