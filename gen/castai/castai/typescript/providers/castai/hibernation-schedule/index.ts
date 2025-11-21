// https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HibernationScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables or disables the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#enabled HibernationSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#id HibernationSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#name HibernationSchedule#name}
  */
  readonly name: string;
  /**
  * ID of the organization. If not provided, then will attempt to infer it using CAST AI API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#organization_id HibernationSchedule#organization_id}
  */
  readonly organizationId?: string;
  /**
  * cluster_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#cluster_assignments HibernationSchedule#cluster_assignments}
  */
  readonly clusterAssignments?: HibernationScheduleClusterAssignments;
  /**
  * pause_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#pause_config HibernationSchedule#pause_config}
  */
  readonly pauseConfig: HibernationSchedulePauseConfig;
  /**
  * resume_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#resume_config HibernationSchedule#resume_config}
  */
  readonly resumeConfig: HibernationScheduleResumeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#timeouts HibernationSchedule#timeouts}
  */
  readonly timeouts?: HibernationScheduleTimeouts;
}
export interface HibernationScheduleClusterAssignmentsAssignment {
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#cluster_id HibernationSchedule#cluster_id}
  */
  readonly clusterId: string;
}

export function hibernationScheduleClusterAssignmentsAssignmentToTerraform(struct?: HibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
  }
}


export function hibernationScheduleClusterAssignmentsAssignmentToHclTerraform(struct?: HibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable): any {
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

export class HibernationScheduleClusterAssignmentsAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HibernationScheduleClusterAssignmentsAssignment | cdktf.IResolvable | undefined) {
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

export class HibernationScheduleClusterAssignmentsAssignmentList extends cdktf.ComplexList {
  public internalValue? : HibernationScheduleClusterAssignmentsAssignment[] | cdktf.IResolvable

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
  public get(index: number): HibernationScheduleClusterAssignmentsAssignmentOutputReference {
    return new HibernationScheduleClusterAssignmentsAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HibernationScheduleClusterAssignments {
  /**
  * assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#assignment HibernationSchedule#assignment}
  */
  readonly assignment?: HibernationScheduleClusterAssignmentsAssignment[] | cdktf.IResolvable;
}

export function hibernationScheduleClusterAssignmentsToTerraform(struct?: HibernationScheduleClusterAssignmentsOutputReference | HibernationScheduleClusterAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment: cdktf.listMapper(hibernationScheduleClusterAssignmentsAssignmentToTerraform, true)(struct!.assignment),
  }
}


export function hibernationScheduleClusterAssignmentsToHclTerraform(struct?: HibernationScheduleClusterAssignmentsOutputReference | HibernationScheduleClusterAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment: {
      value: cdktf.listMapperHcl(hibernationScheduleClusterAssignmentsAssignmentToHclTerraform, true)(struct!.assignment),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleClusterAssignmentsAssignmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleClusterAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationScheduleClusterAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignment = this._assignment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleClusterAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignment.internalValue = value.assignment;
    }
  }

  // assignment - computed: false, optional: true, required: false
  private _assignment = new HibernationScheduleClusterAssignmentsAssignmentList(this, "assignment", false);
  public get assignment() {
    return this._assignment;
  }
  public putAssignment(value: HibernationScheduleClusterAssignmentsAssignment[] | cdktf.IResolvable) {
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
export interface HibernationSchedulePauseConfigSchedule {
  /**
  * Cron expression defining when the schedule should trigger.
  * 
  *   The `cron` expression can optionally include the `CRON_TZ` variable at the beginning to specify the timezone in which the schedule should be interpreted.
  * 
  *   Example:
  *   ```plaintext
  *   CRON_TZ=America/New_York 0 12 * * ?
  *   ```
  *   In the example above, the `CRON_TZ` variable is set to "America/New_York" indicating that the cron expression should be interpreted in the Eastern Time (ET) timezone.
  * 
  *   To retrieve a list of available timezone values, you can use the following API endpoint:
  * 
  *   GET https://api.cast.ai/v1/time-zones
  * 
  *   When using the `CRON_TZ` variable, ensure that the specified timezone is valid and supported by checking the list of available timezones from the API endpoint.  If the `CRON_TZ` variable is not specified, the cron expression will be interpreted in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#cron_expression HibernationSchedule#cron_expression}
  */
  readonly cronExpression: string;
}

export function hibernationSchedulePauseConfigScheduleToTerraform(struct?: HibernationSchedulePauseConfigScheduleOutputReference | HibernationSchedulePauseConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
  }
}


export function hibernationSchedulePauseConfigScheduleToHclTerraform(struct?: HibernationSchedulePauseConfigScheduleOutputReference | HibernationSchedulePauseConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationSchedulePauseConfigScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationSchedulePauseConfigSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationSchedulePauseConfigSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }
}
export interface HibernationSchedulePauseConfig {
  /**
  * Enables or disables the pause configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#enabled HibernationSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#schedule HibernationSchedule#schedule}
  */
  readonly schedule: HibernationSchedulePauseConfigSchedule;
}

export function hibernationSchedulePauseConfigToTerraform(struct?: HibernationSchedulePauseConfigOutputReference | HibernationSchedulePauseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    schedule: hibernationSchedulePauseConfigScheduleToTerraform(struct!.schedule),
  }
}


export function hibernationSchedulePauseConfigToHclTerraform(struct?: HibernationSchedulePauseConfigOutputReference | HibernationSchedulePauseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: hibernationSchedulePauseConfigScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationSchedulePauseConfigScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationSchedulePauseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationSchedulePauseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationSchedulePauseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._schedule.internalValue = value.schedule;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new HibernationSchedulePauseConfigScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: HibernationSchedulePauseConfigSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig {
  /**
  * Number of GPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#count HibernationSchedule#count}
  */
  readonly count: number;
  /**
  * GPU type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#type HibernationSchedule#type}
  */
  readonly type?: string;
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigOutputReference | HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigOutputReference | HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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
export interface HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints {
  /**
  * Effect of a taint to be added to nodes created from this template, the default is NoSchedule. Allowed values: NoSchedule, NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#effect HibernationSchedule#effect}
  */
  readonly effect?: string;
  /**
  * Key of a taint to be added to nodes created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#key HibernationSchedule#key}
  */
  readonly key: string;
  /**
  * Value of a taint to be added to nodes created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#value HibernationSchedule#value}
  */
  readonly value?: string;
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsList extends cdktf.ComplexList {
  public internalValue? : HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints[] | cdktf.IResolvable

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
  public get(index: number): HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsOutputReference {
    return new HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity {
  /**
  * Key of the node affinity selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#key HibernationSchedule#key}
  */
  readonly key: string;
  /**
  * Operator of the node affinity selector. Allowed values: DOES_NOT_EXIST, EXISTS, GT, IN, LT, NOT_IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#operator HibernationSchedule#operator}
  */
  readonly operator: string;
  /**
  * Values of the node affinity selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#values HibernationSchedule#values}
  */
  readonly values: string[];
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityList extends cdktf.ComplexList {
  public internalValue? : HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity[] | cdktf.IResolvable

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
  public get(index: number): HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityOutputReference {
    return new HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity {
  /**
  * Key of a taint to be added to nodes created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#dedicated_group HibernationSchedule#dedicated_group}
  */
  readonly dedicatedGroup: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#affinity HibernationSchedule#affinity}
  */
  readonly affinity?: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity[] | cdktf.IResolvable;
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_group: cdktf.stringToTerraform(struct!.dedicatedGroup),
    affinity: cdktf.listMapper(hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityToTerraform, true)(struct!.affinity),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated_group: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: cdktf.listMapperHcl(hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityToHclTerraform, true)(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedGroup = this._dedicatedGroup;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedicatedGroup = undefined;
      this._affinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedicatedGroup = value.dedicatedGroup;
      this._affinity.internalValue = value.affinity;
    }
  }

  // dedicated_group - computed: false, optional: false, required: true
  private _dedicatedGroup?: string; 
  public get dedicatedGroup() {
    return this.getStringAttribute('dedicated_group');
  }
  public set dedicatedGroup(value: string) {
    this._dedicatedGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedGroupInput() {
    return this._dedicatedGroup;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinityList(this, "affinity", false);
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityAffinity[] | cdktf.IResolvable) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityOutputReference {
    return new HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig {
  /**
  * Spot instance price. Applicable only for AWS nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#price_hourly HibernationSchedule#price_hourly}
  */
  readonly priceHourly?: string;
  /**
  * Whether node should be created as spot instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#spot HibernationSchedule#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    price_hourly: cdktf.stringToTerraform(struct!.priceHourly),
    spot: cdktf.booleanToTerraform(struct!.spot),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    price_hourly: {
      value: cdktf.stringToHclTerraform(struct!.priceHourly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priceHourly !== undefined) {
      hasAnyValues = true;
      internalValueResult.priceHourly = this._priceHourly;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priceHourly = undefined;
      this._spot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priceHourly = value.priceHourly;
      this._spot = value.spot;
    }
  }

  // price_hourly - computed: false, optional: true, required: false
  private _priceHourly?: string; 
  public get priceHourly() {
    return this.getStringAttribute('price_hourly');
  }
  public set priceHourly(value: string) {
    this._priceHourly = value;
  }
  public resetPriceHourly() {
    this._priceHourly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceHourlyInput() {
    return this._priceHourly;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigList extends cdktf.ComplexList {
  public internalValue? : HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig[] | cdktf.IResolvable

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
  public get(index: number): HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigOutputReference {
    return new HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig {
  /**
  * Specify the RAID0 chunk size in kilobytes, this parameter affects the read/write in the disk array and must be tailored for the type of data written by the workloads in the node. If not provided it will default to 64KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#chunk_size_kb HibernationSchedule#chunk_size_kb}
  */
  readonly chunkSizeKb?: number;
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_size_kb: cdktf.numberToTerraform(struct!.chunkSizeKb),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.chunkSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSizeKb = this._chunkSizeKb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkSizeKb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkSizeKb = value.chunkSizeKb;
    }
  }

  // chunk_size_kb - computed: false, optional: true, required: false
  private _chunkSizeKb?: number; 
  public get chunkSizeKb() {
    return this.getNumberAttribute('chunk_size_kb');
  }
  public set chunkSizeKb(value: number) {
    this._chunkSizeKb = value;
  }
  public resetChunkSizeKb() {
    this._chunkSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeKbInput() {
    return this._chunkSizeKb;
  }
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigList extends cdktf.ComplexList {
  public internalValue? : HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig[] | cdktf.IResolvable

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
  public get(index: number): HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigOutputReference {
    return new HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HibernationScheduleResumeConfigJobConfigNodeConfigVolume {
  /**
  * Volume size in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#size_gib HibernationSchedule#size_gib}
  */
  readonly sizeGib?: number;
  /**
  * raid_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#raid_config HibernationSchedule#raid_config}
  */
  readonly raidConfig?: HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig[] | cdktf.IResolvable;
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigVolumeToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
    raid_config: cdktf.listMapper(hibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigToTerraform, true)(struct!.raidConfig),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigVolumeToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_gib: {
      value: cdktf.numberToHclTerraform(struct!.sizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raid_config: {
      value: cdktf.listMapperHcl(hibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigToHclTerraform, true)(struct!.raidConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfigVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    if (this._raidConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidConfig = this._raidConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfigVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sizeGib = undefined;
      this._raidConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sizeGib = value.sizeGib;
      this._raidConfig.internalValue = value.raidConfig;
    }
  }

  // size_gib - computed: false, optional: true, required: false
  private _sizeGib?: number; 
  public get sizeGib() {
    return this.getNumberAttribute('size_gib');
  }
  public set sizeGib(value: number) {
    this._sizeGib = value;
  }
  public resetSizeGib() {
    this._sizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGibInput() {
    return this._sizeGib;
  }

  // raid_config - computed: false, optional: true, required: false
  private _raidConfig = new HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfigList(this, "raid_config", false);
  public get raidConfig() {
    return this._raidConfig;
  }
  public putRaidConfig(value: HibernationScheduleResumeConfigJobConfigNodeConfigVolumeRaidConfig[] | cdktf.IResolvable) {
    this._raidConfig.internalValue = value;
  }
  public resetRaidConfig() {
    this._raidConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidConfigInput() {
    return this._raidConfig.internalValue;
  }
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigVolumeList extends cdktf.ComplexList {
  public internalValue? : HibernationScheduleResumeConfigJobConfigNodeConfigVolume[] | cdktf.IResolvable

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
  public get(index: number): HibernationScheduleResumeConfigJobConfigNodeConfigVolumeOutputReference {
    return new HibernationScheduleResumeConfigJobConfigNodeConfigVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HibernationScheduleResumeConfigJobConfigNodeConfig {
  /**
  * ID reference of Node Configuration to be used for node creation. Supersedes 'config_name' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#config_id HibernationSchedule#config_id}
  */
  readonly configId?: string;
  /**
  * Name reference of Node Configuration to be used for node creation. Superseded if 'config_id' parameter is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#config_name HibernationSchedule#config_name}
  */
  readonly configName?: string;
  /**
  * Instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#instance_type HibernationSchedule#instance_type}
  */
  readonly instanceType: string;
  /**
  * Custom labels to be added to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#kubernetes_labels HibernationSchedule#kubernetes_labels}
  */
  readonly kubernetesLabels?: { [key: string]: string };
  /**
  * Node subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#subnet_id HibernationSchedule#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Zone of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#zone HibernationSchedule#zone}
  */
  readonly zone?: string;
  /**
  * gpu_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#gpu_config HibernationSchedule#gpu_config}
  */
  readonly gpuConfig?: HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig;
  /**
  * kubernetes_taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#kubernetes_taints HibernationSchedule#kubernetes_taints}
  */
  readonly kubernetesTaints?: HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints[] | cdktf.IResolvable;
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#node_affinity HibernationSchedule#node_affinity}
  */
  readonly nodeAffinity?: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity[] | cdktf.IResolvable;
  /**
  * spot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#spot_config HibernationSchedule#spot_config}
  */
  readonly spotConfig?: HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig[] | cdktf.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#volume HibernationSchedule#volume}
  */
  readonly volume?: HibernationScheduleResumeConfigJobConfigNodeConfigVolume[] | cdktf.IResolvable;
}

export function hibernationScheduleResumeConfigJobConfigNodeConfigToTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigOutputReference | HibernationScheduleResumeConfigJobConfigNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    config_name: cdktf.stringToTerraform(struct!.configName),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    kubernetes_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubernetesLabels),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
    gpu_config: hibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigToTerraform(struct!.gpuConfig),
    kubernetes_taints: cdktf.listMapper(hibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsToTerraform, true)(struct!.kubernetesTaints),
    node_affinity: cdktf.listMapper(hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
    spot_config: cdktf.listMapper(hibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigToTerraform, true)(struct!.spotConfig),
    volume: cdktf.listMapper(hibernationScheduleResumeConfigJobConfigNodeConfigVolumeToTerraform, true)(struct!.volume),
  }
}


export function hibernationScheduleResumeConfigJobConfigNodeConfigToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigNodeConfigOutputReference | HibernationScheduleResumeConfigJobConfigNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_name: {
      value: cdktf.stringToHclTerraform(struct!.configName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubernetesLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_config: {
      value: hibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigToHclTerraform(struct!.gpuConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigList",
    },
    kubernetes_taints: {
      value: cdktf.listMapperHcl(hibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsToHclTerraform, true)(struct!.kubernetesTaints),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsList",
    },
    node_affinity: {
      value: cdktf.listMapperHcl(hibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityList",
    },
    spot_config: {
      value: cdktf.listMapperHcl(hibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigToHclTerraform, true)(struct!.spotConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigList",
    },
    volume: {
      value: cdktf.listMapperHcl(hibernationScheduleResumeConfigJobConfigNodeConfigVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigJobConfigNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationScheduleResumeConfigJobConfigNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._configName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configName = this._configName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._kubernetesLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesLabels = this._kubernetesLabels;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._gpuConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuConfig = this._gpuConfig?.internalValue;
    }
    if (this._kubernetesTaints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesTaints = this._kubernetesTaints?.internalValue;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._spotConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotConfig = this._spotConfig?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfigNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configId = undefined;
      this._configName = undefined;
      this._instanceType = undefined;
      this._kubernetesLabels = undefined;
      this._subnetId = undefined;
      this._zone = undefined;
      this._gpuConfig.internalValue = undefined;
      this._kubernetesTaints.internalValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._spotConfig.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configId = value.configId;
      this._configName = value.configName;
      this._instanceType = value.instanceType;
      this._kubernetesLabels = value.kubernetesLabels;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
      this._gpuConfig.internalValue = value.gpuConfig;
      this._kubernetesTaints.internalValue = value.kubernetesTaints;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._spotConfig.internalValue = value.spotConfig;
      this._volume.internalValue = value.volume;
    }
  }

  // config_id - computed: false, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // config_name - computed: false, optional: true, required: false
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  public resetConfigName() {
    this._configName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // kubernetes_labels - computed: false, optional: true, required: false
  private _kubernetesLabels?: { [key: string]: string }; 
  public get kubernetesLabels() {
    return this.getStringMapAttribute('kubernetes_labels');
  }
  public set kubernetesLabels(value: { [key: string]: string }) {
    this._kubernetesLabels = value;
  }
  public resetKubernetesLabels() {
    this._kubernetesLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesLabelsInput() {
    return this._kubernetesLabels;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // gpu_config - computed: false, optional: true, required: false
  private _gpuConfig = new HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfigOutputReference(this, "gpu_config");
  public get gpuConfig() {
    return this._gpuConfig;
  }
  public putGpuConfig(value: HibernationScheduleResumeConfigJobConfigNodeConfigGpuConfig) {
    this._gpuConfig.internalValue = value;
  }
  public resetGpuConfig() {
    this._gpuConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuConfigInput() {
    return this._gpuConfig.internalValue;
  }

  // kubernetes_taints - computed: false, optional: true, required: false
  private _kubernetesTaints = new HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaintsList(this, "kubernetes_taints", false);
  public get kubernetesTaints() {
    return this._kubernetesTaints;
  }
  public putKubernetesTaints(value: HibernationScheduleResumeConfigJobConfigNodeConfigKubernetesTaints[] | cdktf.IResolvable) {
    this._kubernetesTaints.internalValue = value;
  }
  public resetKubernetesTaints() {
    this._kubernetesTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesTaintsInput() {
    return this._kubernetesTaints.internalValue;
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinityList(this, "node_affinity", false);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: HibernationScheduleResumeConfigJobConfigNodeConfigNodeAffinity[] | cdktf.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // spot_config - computed: false, optional: true, required: false
  private _spotConfig = new HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfigList(this, "spot_config", false);
  public get spotConfig() {
    return this._spotConfig;
  }
  public putSpotConfig(value: HibernationScheduleResumeConfigJobConfigNodeConfigSpotConfig[] | cdktf.IResolvable) {
    this._spotConfig.internalValue = value;
  }
  public resetSpotConfig() {
    this._spotConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotConfigInput() {
    return this._spotConfig.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new HibernationScheduleResumeConfigJobConfigNodeConfigVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: HibernationScheduleResumeConfigJobConfigNodeConfigVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}
export interface HibernationScheduleResumeConfigJobConfig {
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#node_config HibernationSchedule#node_config}
  */
  readonly nodeConfig: HibernationScheduleResumeConfigJobConfigNodeConfig;
}

export function hibernationScheduleResumeConfigJobConfigToTerraform(struct?: HibernationScheduleResumeConfigJobConfigOutputReference | HibernationScheduleResumeConfigJobConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_config: hibernationScheduleResumeConfigJobConfigNodeConfigToTerraform(struct!.nodeConfig),
  }
}


export function hibernationScheduleResumeConfigJobConfigToHclTerraform(struct?: HibernationScheduleResumeConfigJobConfigOutputReference | HibernationScheduleResumeConfigJobConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_config: {
      value: hibernationScheduleResumeConfigJobConfigNodeConfigToHclTerraform(struct!.nodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigNodeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigJobConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationScheduleResumeConfigJobConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigJobConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeConfig.internalValue = value.nodeConfig;
    }
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig = new HibernationScheduleResumeConfigJobConfigNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: HibernationScheduleResumeConfigJobConfigNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }
}
export interface HibernationScheduleResumeConfigSchedule {
  /**
  * Cron expression defining when the schedule should trigger.
  * 
  *   The `cron` expression can optionally include the `CRON_TZ` variable at the beginning to specify the timezone in which the schedule should be interpreted.
  * 
  *   Example:
  *   ```plaintext
  *   CRON_TZ=America/New_York 0 12 * * ?
  *   ```
  *   In the example above, the `CRON_TZ` variable is set to "America/New_York" indicating that the cron expression should be interpreted in the Eastern Time (ET) timezone.
  * 
  *   To retrieve a list of available timezone values, you can use the following API endpoint:
  * 
  *   GET https://api.cast.ai/v1/time-zones
  * 
  *   When using the `CRON_TZ` variable, ensure that the specified timezone is valid and supported by checking the list of available timezones from the API endpoint.  If the `CRON_TZ` variable is not specified, the cron expression will be interpreted in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#cron_expression HibernationSchedule#cron_expression}
  */
  readonly cronExpression: string;
}

export function hibernationScheduleResumeConfigScheduleToTerraform(struct?: HibernationScheduleResumeConfigScheduleOutputReference | HibernationScheduleResumeConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
  }
}


export function hibernationScheduleResumeConfigScheduleToHclTerraform(struct?: HibernationScheduleResumeConfigScheduleOutputReference | HibernationScheduleResumeConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationScheduleResumeConfigSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfigSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }
}
export interface HibernationScheduleResumeConfig {
  /**
  * Enables or disables the pause configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#enabled HibernationSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * job_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#job_config HibernationSchedule#job_config}
  */
  readonly jobConfig: HibernationScheduleResumeConfigJobConfig;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#schedule HibernationSchedule#schedule}
  */
  readonly schedule: HibernationScheduleResumeConfigSchedule;
}

export function hibernationScheduleResumeConfigToTerraform(struct?: HibernationScheduleResumeConfigOutputReference | HibernationScheduleResumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    job_config: hibernationScheduleResumeConfigJobConfigToTerraform(struct!.jobConfig),
    schedule: hibernationScheduleResumeConfigScheduleToTerraform(struct!.schedule),
  }
}


export function hibernationScheduleResumeConfigToHclTerraform(struct?: HibernationScheduleResumeConfigOutputReference | HibernationScheduleResumeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_config: {
      value: hibernationScheduleResumeConfigJobConfigToHclTerraform(struct!.jobConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigJobConfigList",
    },
    schedule: {
      value: hibernationScheduleResumeConfigScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "HibernationScheduleResumeConfigScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HibernationScheduleResumeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HibernationScheduleResumeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._jobConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobConfig = this._jobConfig?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleResumeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._jobConfig.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._jobConfig.internalValue = value.jobConfig;
      this._schedule.internalValue = value.schedule;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // job_config - computed: false, optional: false, required: true
  private _jobConfig = new HibernationScheduleResumeConfigJobConfigOutputReference(this, "job_config");
  public get jobConfig() {
    return this._jobConfig;
  }
  public putJobConfig(value: HibernationScheduleResumeConfigJobConfig) {
    this._jobConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigInput() {
    return this._jobConfig.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new HibernationScheduleResumeConfigScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: HibernationScheduleResumeConfigSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface HibernationScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#create HibernationSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#delete HibernationSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#read HibernationSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#update HibernationSchedule#update}
  */
  readonly update?: string;
}

export function hibernationScheduleTimeoutsToTerraform(struct?: HibernationScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function hibernationScheduleTimeoutsToHclTerraform(struct?: HibernationScheduleTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class HibernationScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HibernationScheduleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HibernationScheduleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._delete = value.delete;
      this._read = value.read;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule castai_hibernation_schedule}
*/
export class HibernationSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_hibernation_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HibernationSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HibernationSchedule to import
  * @param importFromId The id of the existing HibernationSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HibernationSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_hibernation_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.3.0/docs/resources/hibernation_schedule castai_hibernation_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HibernationScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: HibernationScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_hibernation_schedule',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._clusterAssignments.internalValue = config.clusterAssignments;
    this._pauseConfig.internalValue = config.pauseConfig;
    this._resumeConfig.internalValue = config.resumeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // cluster_assignments - computed: false, optional: true, required: false
  private _clusterAssignments = new HibernationScheduleClusterAssignmentsOutputReference(this, "cluster_assignments");
  public get clusterAssignments() {
    return this._clusterAssignments;
  }
  public putClusterAssignments(value: HibernationScheduleClusterAssignments) {
    this._clusterAssignments.internalValue = value;
  }
  public resetClusterAssignments() {
    this._clusterAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAssignmentsInput() {
    return this._clusterAssignments.internalValue;
  }

  // pause_config - computed: false, optional: false, required: true
  private _pauseConfig = new HibernationSchedulePauseConfigOutputReference(this, "pause_config");
  public get pauseConfig() {
    return this._pauseConfig;
  }
  public putPauseConfig(value: HibernationSchedulePauseConfig) {
    this._pauseConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseConfigInput() {
    return this._pauseConfig.internalValue;
  }

  // resume_config - computed: false, optional: false, required: true
  private _resumeConfig = new HibernationScheduleResumeConfigOutputReference(this, "resume_config");
  public get resumeConfig() {
    return this._resumeConfig;
  }
  public putResumeConfig(value: HibernationScheduleResumeConfig) {
    this._resumeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeConfigInput() {
    return this._resumeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HibernationScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HibernationScheduleTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      cluster_assignments: hibernationScheduleClusterAssignmentsToTerraform(this._clusterAssignments.internalValue),
      pause_config: hibernationSchedulePauseConfigToTerraform(this._pauseConfig.internalValue),
      resume_config: hibernationScheduleResumeConfigToTerraform(this._resumeConfig.internalValue),
      timeouts: hibernationScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
        value: hibernationScheduleClusterAssignmentsToHclTerraform(this._clusterAssignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HibernationScheduleClusterAssignmentsList",
      },
      pause_config: {
        value: hibernationSchedulePauseConfigToHclTerraform(this._pauseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HibernationSchedulePauseConfigList",
      },
      resume_config: {
        value: hibernationScheduleResumeConfigToHclTerraform(this._resumeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HibernationScheduleResumeConfigList",
      },
      timeouts: {
        value: hibernationScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HibernationScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
