// https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCastaiHibernationScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule#id DataCastaiHibernationSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule#name DataCastaiHibernationSchedule#name}
  */
  readonly name: string;
  /**
  * ID of the organization. If not provided, then will attempt to infer it using CAST AI API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule#organization_id DataCastaiHibernationSchedule#organization_id}
  */
  readonly organizationId?: string;
  /**
  * cluster_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule#cluster_assignments DataCastaiHibernationSchedule#cluster_assignments}
  */
  readonly clusterAssignments?: DataCastaiHibernationScheduleClusterAssignments[] | cdktf.IResolvable;
}
export interface DataCastaiHibernationSchedulePauseConfigSchedule {
}

export function dataCastaiHibernationSchedulePauseConfigScheduleToTerraform(struct?: DataCastaiHibernationSchedulePauseConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationSchedulePauseConfigScheduleToHclTerraform(struct?: DataCastaiHibernationSchedulePauseConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationSchedulePauseConfigScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationSchedulePauseConfigSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationSchedulePauseConfigSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
}

export class DataCastaiHibernationSchedulePauseConfigScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationSchedulePauseConfigScheduleOutputReference {
    return new DataCastaiHibernationSchedulePauseConfigScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationSchedulePauseConfig {
}

export function dataCastaiHibernationSchedulePauseConfigToTerraform(struct?: DataCastaiHibernationSchedulePauseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationSchedulePauseConfigToHclTerraform(struct?: DataCastaiHibernationSchedulePauseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationSchedulePauseConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationSchedulePauseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationSchedulePauseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCastaiHibernationSchedulePauseConfigScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
}

export class DataCastaiHibernationSchedulePauseConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationSchedulePauseConfigOutputReference {
    return new DataCastaiHibernationSchedulePauseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // affinity - computed: true, optional: false, required: false
  private _affinity = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityList(this, "affinity", false);
  public get affinity() {
    return this._affinity;
  }

  // dedicated_group - computed: true, optional: false, required: false
  public get dedicatedGroup() {
    return this.getStringAttribute('dedicated_group');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // price_hourly - computed: true, optional: false, required: false
  public get priceHourly() {
    return this.getStringAttribute('price_hourly');
  }

  // spot - computed: true, optional: false, required: false
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunk_size_kb - computed: true, optional: false, required: false
  public get chunkSizeKb() {
    return this.getNumberAttribute('chunk_size_kb');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolume {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // raid_config - computed: true, optional: false, required: false
  private _raidConfig = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigList(this, "raid_config", false);
  public get raidConfig() {
    return this._raidConfig;
  }

  // size_gib - computed: true, optional: false, required: false
  public get sizeGib() {
    return this.getNumberAttribute('size_gib');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfig {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // config_name - computed: true, optional: false, required: false
  public get configName() {
    return this.getStringAttribute('config_name');
  }

  // gpu_config - computed: true, optional: false, required: false
  private _gpuConfig = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigList(this, "gpu_config", false);
  public get gpuConfig() {
    return this._gpuConfig;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // kubernetes_labels - computed: true, optional: false, required: false
  private _kubernetesLabels = new cdktf.StringMap(this, "kubernetes_labels");
  public get kubernetesLabels() {
    return this._kubernetesLabels;
  }

  // kubernetes_taints - computed: true, optional: false, required: false
  private _kubernetesTaints = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsList(this, "kubernetes_taints", false);
  public get kubernetesTaints() {
    return this._kubernetesTaints;
  }

  // node_affinity - computed: true, optional: false, required: false
  private _nodeAffinity = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityList(this, "node_affinity", false);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }

  // spot_config - computed: true, optional: false, required: false
  private _spotConfig = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigList(this, "spot_config", false);
  public get spotConfig() {
    return this._spotConfig;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // volume - computed: true, optional: false, required: false
  private _volume = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigJobConfig {
}

export function dataCastaiHibernationScheduleResumeConfigJobConfigToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigJobConfigToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigJobConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigJobConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigJobConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_config - computed: true, optional: false, required: false
  private _nodeConfig = new DataCastaiHibernationScheduleResumeConfigJobConfigNodeConfigList(this, "node_config", false);
  public get nodeConfig() {
    return this._nodeConfig;
  }
}

export class DataCastaiHibernationScheduleResumeConfigJobConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigJobConfigOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigJobConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfigSchedule {
}

export function dataCastaiHibernationScheduleResumeConfigScheduleToTerraform(struct?: DataCastaiHibernationScheduleResumeConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigScheduleToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfigSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfigSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
}

export class DataCastaiHibernationScheduleResumeConfigScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigScheduleOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleResumeConfig {
}

export function dataCastaiHibernationScheduleResumeConfigToTerraform(struct?: DataCastaiHibernationScheduleResumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCastaiHibernationScheduleResumeConfigToHclTerraform(struct?: DataCastaiHibernationScheduleResumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCastaiHibernationScheduleResumeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleResumeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleResumeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // job_config - computed: true, optional: false, required: false
  private _jobConfig = new DataCastaiHibernationScheduleResumeConfigJobConfigList(this, "job_config", false);
  public get jobConfig() {
    return this._jobConfig;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCastaiHibernationScheduleResumeConfigScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
}

export class DataCastaiHibernationScheduleResumeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataCastaiHibernationScheduleResumeConfigOutputReference {
    return new DataCastaiHibernationScheduleResumeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleClusterAssignmentsAssignment {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule#cluster_id DataCastaiHibernationSchedule#cluster_id}
  */
  readonly clusterId: string;
}

export function dataCastaiHibernationScheduleClusterAssignmentsAssignmentToTerraform(struct?: DataCastaiHibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
  }
}


export function dataCastaiHibernationScheduleClusterAssignmentsAssignmentToHclTerraform(struct?: DataCastaiHibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable): any {
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

export class DataCastaiHibernationScheduleClusterAssignmentsAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataCastaiHibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable | undefined) {
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
}

export class DataCastaiHibernationScheduleClusterAssignmentsAssignmentList extends cdktf.ComplexList {
  public internalValue? : DataCastaiHibernationScheduleClusterAssignmentsAssignment[] | cdktf.IResolvable

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
  public get(index: number): DataCastaiHibernationScheduleClusterAssignmentsAssignmentOutputReference {
    return new DataCastaiHibernationScheduleClusterAssignmentsAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCastaiHibernationScheduleClusterAssignments {
  /**
  * assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule#assignment DataCastaiHibernationSchedule#assignment}
  */
  readonly assignment?: DataCastaiHibernationScheduleClusterAssignmentsAssignment[] | cdktf.IResolvable;
}

export function dataCastaiHibernationScheduleClusterAssignmentsToTerraform(struct?: DataCastaiHibernationScheduleClusterAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment: cdktf.listMapper(dataCastaiHibernationScheduleClusterAssignmentsAssignmentToTerraform, true)(struct!.assignment),
  }
}


export function dataCastaiHibernationScheduleClusterAssignmentsToHclTerraform(struct?: DataCastaiHibernationScheduleClusterAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment: {
      value: cdktf.listMapperHcl(dataCastaiHibernationScheduleClusterAssignmentsAssignmentToHclTerraform, true)(struct!.assignment),
      isBlock: true,
      type: "list",
      storageClassType: "DataCastaiHibernationScheduleClusterAssignmentsAssignmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCastaiHibernationScheduleClusterAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCastaiHibernationScheduleClusterAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignment = this._assignment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCastaiHibernationScheduleClusterAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignment.internalValue = value.assignment;
    }
  }

  // assignment - computed: false, optional: true, required: false
  private _assignment = new DataCastaiHibernationScheduleClusterAssignmentsAssignmentList(this, "assignment", false);
  public get assignment() {
    return this._assignment;
  }
  public putAssignment(value: DataCastaiHibernationScheduleClusterAssignmentsAssignment[] | cdktf.IResolvable) {
    this._assignment.internalValue = value;
  }
  public resetAssignment() {
    this._assignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment.internalValue;
  }
}

export class DataCastaiHibernationScheduleClusterAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataCastaiHibernationScheduleClusterAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataCastaiHibernationScheduleClusterAssignmentsOutputReference {
    return new DataCastaiHibernationScheduleClusterAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule castai_hibernation_schedule}
*/
export class DataCastaiHibernationSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_hibernation_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCastaiHibernationSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCastaiHibernationSchedule to import
  * @param importFromId The id of the existing DataCastaiHibernationSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCastaiHibernationSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_hibernation_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/data-sources/hibernation_schedule castai_hibernation_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCastaiHibernationScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataCastaiHibernationScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_hibernation_schedule',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
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
    this._organizationId = config.organizationId;
    this._clusterAssignments.internalValue = config.clusterAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // pause_config - computed: true, optional: false, required: false
  private _pauseConfig = new DataCastaiHibernationSchedulePauseConfigList(this, "pause_config", false);
  public get pauseConfig() {
    return this._pauseConfig;
  }

  // resume_config - computed: true, optional: false, required: false
  private _resumeConfig = new DataCastaiHibernationScheduleResumeConfigList(this, "resume_config", false);
  public get resumeConfig() {
    return this._resumeConfig;
  }

  // cluster_assignments - computed: false, optional: true, required: false
  private _clusterAssignments = new DataCastaiHibernationScheduleClusterAssignmentsList(this, "cluster_assignments", false);
  public get clusterAssignments() {
    return this._clusterAssignments;
  }
  public putClusterAssignments(value: DataCastaiHibernationScheduleClusterAssignments[] | cdktf.IResolvable) {
    this._clusterAssignments.internalValue = value;
  }
  public resetClusterAssignments() {
    this._clusterAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAssignmentsInput() {
    return this._clusterAssignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      cluster_assignments: cdktf.listMapper(dataCastaiHibernationScheduleClusterAssignmentsToTerraform, true)(this._clusterAssignments.internalValue),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_assignments: {
        value: cdktf.listMapperHcl(dataCastaiHibernationScheduleClusterAssignmentsToHclTerraform, true)(this._clusterAssignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCastaiHibernationScheduleClusterAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
