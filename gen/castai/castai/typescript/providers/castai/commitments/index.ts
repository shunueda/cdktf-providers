// https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommitmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * CSV file containing reservations exported from Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#azure_reservations_csv Commitments#azure_reservations_csv}
  */
  readonly azureReservationsCsv?: string;
  /**
  * JSON file containing CUDs exported from GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#gcp_cuds_json Commitments#gcp_cuds_json}
  */
  readonly gcpCudsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#id Commitments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * commitment_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#commitment_configs Commitments#commitment_configs}
  */
  readonly commitmentConfigs?: CommitmentsCommitmentConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#timeouts Commitments#timeouts}
  */
  readonly timeouts?: CommitmentsTimeouts;
}
export interface CommitmentsAzureReservationsAssignments {
}

export function commitmentsAzureReservationsAssignmentsToTerraform(struct?: CommitmentsAzureReservationsAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function commitmentsAzureReservationsAssignmentsToHclTerraform(struct?: CommitmentsAzureReservationsAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CommitmentsAzureReservationsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommitmentsAzureReservationsAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsAzureReservationsAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class CommitmentsAzureReservationsAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): CommitmentsAzureReservationsAssignmentsOutputReference {
    return new CommitmentsAzureReservationsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommitmentsAzureReservations {
}

export function commitmentsAzureReservationsToTerraform(struct?: CommitmentsAzureReservations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function commitmentsAzureReservationsToHclTerraform(struct?: CommitmentsAzureReservations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CommitmentsAzureReservationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommitmentsAzureReservations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsAzureReservations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_usage - computed: true, optional: false, required: false
  public get allowedUsage() {
    return this.getNumberAttribute('allowed_usage');
  }

  // assignments - computed: true, optional: false, required: false
  private _assignments = new CommitmentsAzureReservationsAssignmentsList(this, "assignments", false);
  public get assignments() {
    return this._assignments;
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // end_timestamp - computed: true, optional: false, required: false
  public get endTimestamp() {
    return this.getStringAttribute('end_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // prioritization - computed: true, optional: false, required: false
  public get prioritization() {
    return this.getBooleanAttribute('prioritization');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // reservation_id - computed: true, optional: false, required: false
  public get reservationId() {
    return this.getStringAttribute('reservation_id');
  }

  // reservation_status - computed: true, optional: false, required: false
  public get reservationStatus() {
    return this.getStringAttribute('reservation_status');
  }

  // scaling_strategy - computed: true, optional: false, required: false
  public get scalingStrategy() {
    return this.getStringAttribute('scaling_strategy');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // scope_resource_group - computed: true, optional: false, required: false
  public get scopeResourceGroup() {
    return this.getStringAttribute('scope_resource_group');
  }

  // scope_subscription - computed: true, optional: false, required: false
  public get scopeSubscription() {
    return this.getStringAttribute('scope_subscription');
  }

  // start_timestamp - computed: true, optional: false, required: false
  public get startTimestamp() {
    return this.getStringAttribute('start_timestamp');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class CommitmentsAzureReservationsList extends cdktf.ComplexList {

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
  public get(index: number): CommitmentsAzureReservationsOutputReference {
    return new CommitmentsAzureReservationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommitmentsGcpCudsAssignments {
}

export function commitmentsGcpCudsAssignmentsToTerraform(struct?: CommitmentsGcpCudsAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function commitmentsGcpCudsAssignmentsToHclTerraform(struct?: CommitmentsGcpCudsAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CommitmentsGcpCudsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommitmentsGcpCudsAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsGcpCudsAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class CommitmentsGcpCudsAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): CommitmentsGcpCudsAssignmentsOutputReference {
    return new CommitmentsGcpCudsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommitmentsGcpCuds {
}

export function commitmentsGcpCudsToTerraform(struct?: CommitmentsGcpCuds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function commitmentsGcpCudsToHclTerraform(struct?: CommitmentsGcpCuds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CommitmentsGcpCudsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommitmentsGcpCuds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsGcpCuds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_usage - computed: true, optional: false, required: false
  public get allowedUsage() {
    return this.getNumberAttribute('allowed_usage');
  }

  // assignments - computed: true, optional: false, required: false
  private _assignments = new CommitmentsGcpCudsAssignmentsList(this, "assignments", false);
  public get assignments() {
    return this._assignments;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // cud_id - computed: true, optional: false, required: false
  public get cudId() {
    return this.getStringAttribute('cud_id');
  }

  // cud_status - computed: true, optional: false, required: false
  public get cudStatus() {
    return this.getStringAttribute('cud_status');
  }

  // end_timestamp - computed: true, optional: false, required: false
  public get endTimestamp() {
    return this.getStringAttribute('end_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_mb - computed: true, optional: false, required: false
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // prioritization - computed: true, optional: false, required: false
  public get prioritization() {
    return this.getBooleanAttribute('prioritization');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // scaling_strategy - computed: true, optional: false, required: false
  public get scalingStrategy() {
    return this.getStringAttribute('scaling_strategy');
  }

  // start_timestamp - computed: true, optional: false, required: false
  public get startTimestamp() {
    return this.getStringAttribute('start_timestamp');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CommitmentsGcpCudsList extends cdktf.ComplexList {

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
  public get(index: number): CommitmentsGcpCudsOutputReference {
    return new CommitmentsGcpCudsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommitmentsCommitmentConfigsAssignments {
  /**
  * ID of the cluster to assign the commitment to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#cluster_id Commitments#cluster_id}
  */
  readonly clusterId: string;
}

export function commitmentsCommitmentConfigsAssignmentsToTerraform(struct?: CommitmentsCommitmentConfigsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
  }
}


export function commitmentsCommitmentConfigsAssignmentsToHclTerraform(struct?: CommitmentsCommitmentConfigsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommitmentsCommitmentConfigsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommitmentsCommitmentConfigsAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsCommitmentConfigsAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class CommitmentsCommitmentConfigsAssignmentsList extends cdktf.ComplexList {
  public internalValue? : CommitmentsCommitmentConfigsAssignments[] | cdktf.IResolvable

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
  public get(index: number): CommitmentsCommitmentConfigsAssignmentsOutputReference {
    return new CommitmentsCommitmentConfigsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommitmentsCommitmentConfigsMatcher {
  /**
  * Name of the commitment to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#name Commitments#name}
  */
  readonly name: string;
  /**
  * Region of the commitment to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#region Commitments#region}
  */
  readonly region: string;
  /**
  * Type of the commitment to match. For compute resources, it's the type of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#type Commitments#type}
  */
  readonly type?: string;
}

export function commitmentsCommitmentConfigsMatcherToTerraform(struct?: CommitmentsCommitmentConfigsMatcherOutputReference | CommitmentsCommitmentConfigsMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function commitmentsCommitmentConfigsMatcherToHclTerraform(struct?: CommitmentsCommitmentConfigsMatcherOutputReference | CommitmentsCommitmentConfigsMatcher): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommitmentsCommitmentConfigsMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CommitmentsCommitmentConfigsMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsCommitmentConfigsMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._region = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._region = value.region;
      this._type = value.type;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
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
}
export interface CommitmentsCommitmentConfigs {
  /**
  * Allowed usage of the commitment. The value is between 0 (0%) and 1 (100%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#allowed_usage Commitments#allowed_usage}
  */
  readonly allowedUsage?: number;
  /**
  * If enabled, it's possible to assign priorities to the assigned clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#prioritization Commitments#prioritization}
  */
  readonly prioritization?: boolean | cdktf.IResolvable;
  /**
  * Scaling strategy of the commitment in CAST AI. One of: Default, CPUBased, RamBased
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#scaling_strategy Commitments#scaling_strategy}
  */
  readonly scalingStrategy?: string;
  /**
  * Status of the commitment in CAST AI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#status Commitments#status}
  */
  readonly status?: string;
  /**
  * assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#assignments Commitments#assignments}
  */
  readonly assignments?: CommitmentsCommitmentConfigsAssignments[] | cdktf.IResolvable;
  /**
  * matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#matcher Commitments#matcher}
  */
  readonly matcher: CommitmentsCommitmentConfigsMatcher;
}

export function commitmentsCommitmentConfigsToTerraform(struct?: CommitmentsCommitmentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_usage: cdktf.numberToTerraform(struct!.allowedUsage),
    prioritization: cdktf.booleanToTerraform(struct!.prioritization),
    scaling_strategy: cdktf.stringToTerraform(struct!.scalingStrategy),
    status: cdktf.stringToTerraform(struct!.status),
    assignments: cdktf.listMapper(commitmentsCommitmentConfigsAssignmentsToTerraform, true)(struct!.assignments),
    matcher: commitmentsCommitmentConfigsMatcherToTerraform(struct!.matcher),
  }
}


export function commitmentsCommitmentConfigsToHclTerraform(struct?: CommitmentsCommitmentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_usage: {
      value: cdktf.numberToHclTerraform(struct!.allowedUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prioritization: {
      value: cdktf.booleanToHclTerraform(struct!.prioritization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scaling_strategy: {
      value: cdktf.stringToHclTerraform(struct!.scalingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assignments: {
      value: cdktf.listMapperHcl(commitmentsCommitmentConfigsAssignmentsToHclTerraform, true)(struct!.assignments),
      isBlock: true,
      type: "list",
      storageClassType: "CommitmentsCommitmentConfigsAssignmentsList",
    },
    matcher: {
      value: commitmentsCommitmentConfigsMatcherToHclTerraform(struct!.matcher),
      isBlock: true,
      type: "list",
      storageClassType: "CommitmentsCommitmentConfigsMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommitmentsCommitmentConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CommitmentsCommitmentConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUsage = this._allowedUsage;
    }
    if (this._prioritization !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioritization = this._prioritization;
    }
    if (this._scalingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingStrategy = this._scalingStrategy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._assignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignments = this._assignments?.internalValue;
    }
    if (this._matcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsCommitmentConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedUsage = undefined;
      this._prioritization = undefined;
      this._scalingStrategy = undefined;
      this._status = undefined;
      this._assignments.internalValue = undefined;
      this._matcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedUsage = value.allowedUsage;
      this._prioritization = value.prioritization;
      this._scalingStrategy = value.scalingStrategy;
      this._status = value.status;
      this._assignments.internalValue = value.assignments;
      this._matcher.internalValue = value.matcher;
    }
  }

  // allowed_usage - computed: false, optional: true, required: false
  private _allowedUsage?: number; 
  public get allowedUsage() {
    return this.getNumberAttribute('allowed_usage');
  }
  public set allowedUsage(value: number) {
    this._allowedUsage = value;
  }
  public resetAllowedUsage() {
    this._allowedUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsageInput() {
    return this._allowedUsage;
  }

  // prioritization - computed: false, optional: true, required: false
  private _prioritization?: boolean | cdktf.IResolvable; 
  public get prioritization() {
    return this.getBooleanAttribute('prioritization');
  }
  public set prioritization(value: boolean | cdktf.IResolvable) {
    this._prioritization = value;
  }
  public resetPrioritization() {
    this._prioritization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritizationInput() {
    return this._prioritization;
  }

  // scaling_strategy - computed: false, optional: true, required: false
  private _scalingStrategy?: string; 
  public get scalingStrategy() {
    return this.getStringAttribute('scaling_strategy');
  }
  public set scalingStrategy(value: string) {
    this._scalingStrategy = value;
  }
  public resetScalingStrategy() {
    this._scalingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingStrategyInput() {
    return this._scalingStrategy;
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

  // assignments - computed: false, optional: true, required: false
  private _assignments = new CommitmentsCommitmentConfigsAssignmentsList(this, "assignments", false);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: CommitmentsCommitmentConfigsAssignments[] | cdktf.IResolvable) {
    this._assignments.internalValue = value;
  }
  public resetAssignments() {
    this._assignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments.internalValue;
  }

  // matcher - computed: false, optional: false, required: true
  private _matcher = new CommitmentsCommitmentConfigsMatcherOutputReference(this, "matcher");
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: CommitmentsCommitmentConfigsMatcher) {
    this._matcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }
}

export class CommitmentsCommitmentConfigsList extends cdktf.ComplexList {
  public internalValue? : CommitmentsCommitmentConfigs[] | cdktf.IResolvable

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
  public get(index: number): CommitmentsCommitmentConfigsOutputReference {
    return new CommitmentsCommitmentConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CommitmentsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#create Commitments#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#update Commitments#update}
  */
  readonly update?: string;
}

export function commitmentsTimeoutsToTerraform(struct?: CommitmentsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function commitmentsTimeoutsToHclTerraform(struct?: CommitmentsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommitmentsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CommitmentsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitmentsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments castai_commitments}
*/
export class Commitments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_commitments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Commitments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Commitments to import
  * @param importFromId The id of the existing Commitments that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Commitments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_commitments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/commitments castai_commitments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommitmentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CommitmentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'castai_commitments',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.3.0',
        providerVersionConstraint: '8.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureReservationsCsv = config.azureReservationsCsv;
    this._gcpCudsJson = config.gcpCudsJson;
    this._id = config.id;
    this._commitmentConfigs.internalValue = config.commitmentConfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_reservations - computed: true, optional: false, required: false
  private _azureReservations = new CommitmentsAzureReservationsList(this, "azure_reservations", false);
  public get azureReservations() {
    return this._azureReservations;
  }

  // azure_reservations_csv - computed: false, optional: true, required: false
  private _azureReservationsCsv?: string; 
  public get azureReservationsCsv() {
    return this.getStringAttribute('azure_reservations_csv');
  }
  public set azureReservationsCsv(value: string) {
    this._azureReservationsCsv = value;
  }
  public resetAzureReservationsCsv() {
    this._azureReservationsCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureReservationsCsvInput() {
    return this._azureReservationsCsv;
  }

  // gcp_cuds - computed: true, optional: false, required: false
  private _gcpCuds = new CommitmentsGcpCudsList(this, "gcp_cuds", false);
  public get gcpCuds() {
    return this._gcpCuds;
  }

  // gcp_cuds_json - computed: false, optional: true, required: false
  private _gcpCudsJson?: string; 
  public get gcpCudsJson() {
    return this.getStringAttribute('gcp_cuds_json');
  }
  public set gcpCudsJson(value: string) {
    this._gcpCudsJson = value;
  }
  public resetGcpCudsJson() {
    this._gcpCudsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCudsJsonInput() {
    return this._gcpCudsJson;
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

  // commitment_configs - computed: false, optional: true, required: false
  private _commitmentConfigs = new CommitmentsCommitmentConfigsList(this, "commitment_configs", false);
  public get commitmentConfigs() {
    return this._commitmentConfigs;
  }
  public putCommitmentConfigs(value: CommitmentsCommitmentConfigs[] | cdktf.IResolvable) {
    this._commitmentConfigs.internalValue = value;
  }
  public resetCommitmentConfigs() {
    this._commitmentConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentConfigsInput() {
    return this._commitmentConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CommitmentsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CommitmentsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_reservations_csv: cdktf.stringToTerraform(this._azureReservationsCsv),
      gcp_cuds_json: cdktf.stringToTerraform(this._gcpCudsJson),
      id: cdktf.stringToTerraform(this._id),
      commitment_configs: cdktf.listMapper(commitmentsCommitmentConfigsToTerraform, true)(this._commitmentConfigs.internalValue),
      timeouts: commitmentsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_reservations_csv: {
        value: cdktf.stringToHclTerraform(this._azureReservationsCsv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_cuds_json: {
        value: cdktf.stringToHclTerraform(this._gcpCudsJson),
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
      commitment_configs: {
        value: cdktf.listMapperHcl(commitmentsCommitmentConfigsToHclTerraform, true)(this._commitmentConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CommitmentsCommitmentConfigsList",
      },
      timeouts: {
        value: commitmentsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CommitmentsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
