// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbDbInstancePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#db_instance_id GpdbDbInstancePlan#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#db_instance_plan_name GpdbDbInstancePlan#db_instance_plan_name}
  */
  readonly dbInstancePlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#id GpdbDbInstancePlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_desc GpdbDbInstancePlan#plan_desc}
  */
  readonly planDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_end_date GpdbDbInstancePlan#plan_end_date}
  */
  readonly planEndDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_schedule_type GpdbDbInstancePlan#plan_schedule_type}
  */
  readonly planScheduleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_start_date GpdbDbInstancePlan#plan_start_date}
  */
  readonly planStartDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_type GpdbDbInstancePlan#plan_type}
  */
  readonly planType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#status GpdbDbInstancePlan#status}
  */
  readonly status?: string;
  /**
  * plan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_config GpdbDbInstancePlan#plan_config}
  */
  readonly planConfig: GpdbDbInstancePlanPlanConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#timeouts GpdbDbInstancePlan#timeouts}
  */
  readonly timeouts?: GpdbDbInstancePlanTimeouts;
}
export interface GpdbDbInstancePlanPlanConfigPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#execute_time GpdbDbInstancePlan#execute_time}
  */
  readonly executeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_cron_time GpdbDbInstancePlan#plan_cron_time}
  */
  readonly planCronTime?: string;
}

export function gpdbDbInstancePlanPlanConfigPauseToTerraform(struct?: GpdbDbInstancePlanPlanConfigPauseOutputReference | GpdbDbInstancePlanPlanConfigPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
    plan_cron_time: cdktf.stringToTerraform(struct!.planCronTime),
  }
}


export function gpdbDbInstancePlanPlanConfigPauseToHclTerraform(struct?: GpdbDbInstancePlanPlanConfigPauseOutputReference | GpdbDbInstancePlanPlanConfigPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_time: {
      value: cdktf.stringToHclTerraform(struct!.executeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_cron_time: {
      value: cdktf.stringToHclTerraform(struct!.planCronTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstancePlanPlanConfigPauseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpdbDbInstancePlanPlanConfigPause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    if (this._planCronTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCronTime = this._planCronTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanPlanConfigPause | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
      this._planCronTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
      this._planCronTime = value.planCronTime;
    }
  }

  // execute_time - computed: true, optional: true, required: false
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  public resetExecuteTime() {
    this._executeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }

  // plan_cron_time - computed: false, optional: true, required: false
  private _planCronTime?: string; 
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }
  public set planCronTime(value: string) {
    this._planCronTime = value;
  }
  public resetPlanCronTime() {
    this._planCronTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planCronTimeInput() {
    return this._planCronTime;
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }
}
export interface GpdbDbInstancePlanPlanConfigResume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#execute_time GpdbDbInstancePlan#execute_time}
  */
  readonly executeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_cron_time GpdbDbInstancePlan#plan_cron_time}
  */
  readonly planCronTime?: string;
}

export function gpdbDbInstancePlanPlanConfigResumeToTerraform(struct?: GpdbDbInstancePlanPlanConfigResumeOutputReference | GpdbDbInstancePlanPlanConfigResume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
    plan_cron_time: cdktf.stringToTerraform(struct!.planCronTime),
  }
}


export function gpdbDbInstancePlanPlanConfigResumeToHclTerraform(struct?: GpdbDbInstancePlanPlanConfigResumeOutputReference | GpdbDbInstancePlanPlanConfigResume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_time: {
      value: cdktf.stringToHclTerraform(struct!.executeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_cron_time: {
      value: cdktf.stringToHclTerraform(struct!.planCronTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstancePlanPlanConfigResumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpdbDbInstancePlanPlanConfigResume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    if (this._planCronTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCronTime = this._planCronTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanPlanConfigResume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
      this._planCronTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
      this._planCronTime = value.planCronTime;
    }
  }

  // execute_time - computed: true, optional: true, required: false
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  public resetExecuteTime() {
    this._executeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }

  // plan_cron_time - computed: false, optional: true, required: false
  private _planCronTime?: string; 
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }
  public set planCronTime(value: string) {
    this._planCronTime = value;
  }
  public resetPlanCronTime() {
    this._planCronTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planCronTimeInput() {
    return this._planCronTime;
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }
}
export interface GpdbDbInstancePlanPlanConfigScaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#execute_time GpdbDbInstancePlan#execute_time}
  */
  readonly executeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#instance_spec GpdbDbInstancePlan#instance_spec}
  */
  readonly instanceSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_cron_time GpdbDbInstancePlan#plan_cron_time}
  */
  readonly planCronTime?: string;
}

export function gpdbDbInstancePlanPlanConfigScaleDownToTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleDownOutputReference | GpdbDbInstancePlanPlanConfigScaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
    instance_spec: cdktf.stringToTerraform(struct!.instanceSpec),
    plan_cron_time: cdktf.stringToTerraform(struct!.planCronTime),
  }
}


export function gpdbDbInstancePlanPlanConfigScaleDownToHclTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleDownOutputReference | GpdbDbInstancePlanPlanConfigScaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_time: {
      value: cdktf.stringToHclTerraform(struct!.executeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_spec: {
      value: cdktf.stringToHclTerraform(struct!.instanceSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_cron_time: {
      value: cdktf.stringToHclTerraform(struct!.planCronTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstancePlanPlanConfigScaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpdbDbInstancePlanPlanConfigScaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    if (this._instanceSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSpec = this._instanceSpec;
    }
    if (this._planCronTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCronTime = this._planCronTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanPlanConfigScaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
      this._instanceSpec = undefined;
      this._planCronTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
      this._instanceSpec = value.instanceSpec;
      this._planCronTime = value.planCronTime;
    }
  }

  // execute_time - computed: true, optional: true, required: false
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  public resetExecuteTime() {
    this._executeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }

  // instance_spec - computed: false, optional: true, required: false
  private _instanceSpec?: string; 
  public get instanceSpec() {
    return this.getStringAttribute('instance_spec');
  }
  public set instanceSpec(value: string) {
    this._instanceSpec = value;
  }
  public resetInstanceSpec() {
    this._instanceSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSpecInput() {
    return this._instanceSpec;
  }

  // plan_cron_time - computed: false, optional: true, required: false
  private _planCronTime?: string; 
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }
  public set planCronTime(value: string) {
    this._planCronTime = value;
  }
  public resetPlanCronTime() {
    this._planCronTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planCronTimeInput() {
    return this._planCronTime;
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }
}
export interface GpdbDbInstancePlanPlanConfigScaleIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#execute_time GpdbDbInstancePlan#execute_time}
  */
  readonly executeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_cron_time GpdbDbInstancePlan#plan_cron_time}
  */
  readonly planCronTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#segment_node_num GpdbDbInstancePlan#segment_node_num}
  */
  readonly segmentNodeNum?: string;
}

export function gpdbDbInstancePlanPlanConfigScaleInToTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleInOutputReference | GpdbDbInstancePlanPlanConfigScaleIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
    plan_cron_time: cdktf.stringToTerraform(struct!.planCronTime),
    segment_node_num: cdktf.stringToTerraform(struct!.segmentNodeNum),
  }
}


export function gpdbDbInstancePlanPlanConfigScaleInToHclTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleInOutputReference | GpdbDbInstancePlanPlanConfigScaleIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_time: {
      value: cdktf.stringToHclTerraform(struct!.executeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_cron_time: {
      value: cdktf.stringToHclTerraform(struct!.planCronTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_node_num: {
      value: cdktf.stringToHclTerraform(struct!.segmentNodeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstancePlanPlanConfigScaleInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpdbDbInstancePlanPlanConfigScaleIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    if (this._planCronTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCronTime = this._planCronTime;
    }
    if (this._segmentNodeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNodeNum = this._segmentNodeNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanPlanConfigScaleIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
      this._planCronTime = undefined;
      this._segmentNodeNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
      this._planCronTime = value.planCronTime;
      this._segmentNodeNum = value.segmentNodeNum;
    }
  }

  // execute_time - computed: true, optional: true, required: false
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  public resetExecuteTime() {
    this._executeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }

  // plan_cron_time - computed: false, optional: true, required: false
  private _planCronTime?: string; 
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }
  public set planCronTime(value: string) {
    this._planCronTime = value;
  }
  public resetPlanCronTime() {
    this._planCronTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planCronTimeInput() {
    return this._planCronTime;
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }

  // segment_node_num - computed: false, optional: true, required: false
  private _segmentNodeNum?: string; 
  public get segmentNodeNum() {
    return this.getStringAttribute('segment_node_num');
  }
  public set segmentNodeNum(value: string) {
    this._segmentNodeNum = value;
  }
  public resetSegmentNodeNum() {
    this._segmentNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNodeNumInput() {
    return this._segmentNodeNum;
  }
}
export interface GpdbDbInstancePlanPlanConfigScaleOut {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#execute_time GpdbDbInstancePlan#execute_time}
  */
  readonly executeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_cron_time GpdbDbInstancePlan#plan_cron_time}
  */
  readonly planCronTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#segment_node_num GpdbDbInstancePlan#segment_node_num}
  */
  readonly segmentNodeNum?: string;
}

export function gpdbDbInstancePlanPlanConfigScaleOutToTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleOutOutputReference | GpdbDbInstancePlanPlanConfigScaleOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
    plan_cron_time: cdktf.stringToTerraform(struct!.planCronTime),
    segment_node_num: cdktf.stringToTerraform(struct!.segmentNodeNum),
  }
}


export function gpdbDbInstancePlanPlanConfigScaleOutToHclTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleOutOutputReference | GpdbDbInstancePlanPlanConfigScaleOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_time: {
      value: cdktf.stringToHclTerraform(struct!.executeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_cron_time: {
      value: cdktf.stringToHclTerraform(struct!.planCronTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_node_num: {
      value: cdktf.stringToHclTerraform(struct!.segmentNodeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstancePlanPlanConfigScaleOutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpdbDbInstancePlanPlanConfigScaleOut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    if (this._planCronTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCronTime = this._planCronTime;
    }
    if (this._segmentNodeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNodeNum = this._segmentNodeNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanPlanConfigScaleOut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
      this._planCronTime = undefined;
      this._segmentNodeNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
      this._planCronTime = value.planCronTime;
      this._segmentNodeNum = value.segmentNodeNum;
    }
  }

  // execute_time - computed: true, optional: true, required: false
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  public resetExecuteTime() {
    this._executeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }

  // plan_cron_time - computed: false, optional: true, required: false
  private _planCronTime?: string; 
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }
  public set planCronTime(value: string) {
    this._planCronTime = value;
  }
  public resetPlanCronTime() {
    this._planCronTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planCronTimeInput() {
    return this._planCronTime;
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }

  // segment_node_num - computed: false, optional: true, required: false
  private _segmentNodeNum?: string; 
  public get segmentNodeNum() {
    return this.getStringAttribute('segment_node_num');
  }
  public set segmentNodeNum(value: string) {
    this._segmentNodeNum = value;
  }
  public resetSegmentNodeNum() {
    this._segmentNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNodeNumInput() {
    return this._segmentNodeNum;
  }
}
export interface GpdbDbInstancePlanPlanConfigScaleUp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#execute_time GpdbDbInstancePlan#execute_time}
  */
  readonly executeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#instance_spec GpdbDbInstancePlan#instance_spec}
  */
  readonly instanceSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#plan_cron_time GpdbDbInstancePlan#plan_cron_time}
  */
  readonly planCronTime?: string;
}

export function gpdbDbInstancePlanPlanConfigScaleUpToTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleUpOutputReference | GpdbDbInstancePlanPlanConfigScaleUp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
    instance_spec: cdktf.stringToTerraform(struct!.instanceSpec),
    plan_cron_time: cdktf.stringToTerraform(struct!.planCronTime),
  }
}


export function gpdbDbInstancePlanPlanConfigScaleUpToHclTerraform(struct?: GpdbDbInstancePlanPlanConfigScaleUpOutputReference | GpdbDbInstancePlanPlanConfigScaleUp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_time: {
      value: cdktf.stringToHclTerraform(struct!.executeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_spec: {
      value: cdktf.stringToHclTerraform(struct!.instanceSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_cron_time: {
      value: cdktf.stringToHclTerraform(struct!.planCronTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstancePlanPlanConfigScaleUpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GpdbDbInstancePlanPlanConfigScaleUp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    if (this._instanceSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSpec = this._instanceSpec;
    }
    if (this._planCronTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCronTime = this._planCronTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanPlanConfigScaleUp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
      this._instanceSpec = undefined;
      this._planCronTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
      this._instanceSpec = value.instanceSpec;
      this._planCronTime = value.planCronTime;
    }
  }

  // execute_time - computed: true, optional: true, required: false
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  public resetExecuteTime() {
    this._executeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }

  // instance_spec - computed: false, optional: true, required: false
  private _instanceSpec?: string; 
  public get instanceSpec() {
    return this.getStringAttribute('instance_spec');
  }
  public set instanceSpec(value: string) {
    this._instanceSpec = value;
  }
  public resetInstanceSpec() {
    this._instanceSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSpecInput() {
    return this._instanceSpec;
  }

  // plan_cron_time - computed: false, optional: true, required: false
  private _planCronTime?: string; 
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }
  public set planCronTime(value: string) {
    this._planCronTime = value;
  }
  public resetPlanCronTime() {
    this._planCronTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planCronTimeInput() {
    return this._planCronTime;
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }
}
export interface GpdbDbInstancePlanPlanConfig {
  /**
  * pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#pause GpdbDbInstancePlan#pause}
  */
  readonly pause?: GpdbDbInstancePlanPlanConfigPause;
  /**
  * resume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#resume GpdbDbInstancePlan#resume}
  */
  readonly resume?: GpdbDbInstancePlanPlanConfigResume;
  /**
  * scale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#scale_down GpdbDbInstancePlan#scale_down}
  */
  readonly scaleDown?: GpdbDbInstancePlanPlanConfigScaleDown;
  /**
  * scale_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#scale_in GpdbDbInstancePlan#scale_in}
  */
  readonly scaleIn?: GpdbDbInstancePlanPlanConfigScaleIn;
  /**
  * scale_out block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#scale_out GpdbDbInstancePlan#scale_out}
  */
  readonly scaleOut?: GpdbDbInstancePlanPlanConfigScaleOut;
  /**
  * scale_up block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#scale_up GpdbDbInstancePlan#scale_up}
  */
  readonly scaleUp?: GpdbDbInstancePlanPlanConfigScaleUp;
}

export function gpdbDbInstancePlanPlanConfigToTerraform(struct?: GpdbDbInstancePlanPlanConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause: gpdbDbInstancePlanPlanConfigPauseToTerraform(struct!.pause),
    resume: gpdbDbInstancePlanPlanConfigResumeToTerraform(struct!.resume),
    scale_down: gpdbDbInstancePlanPlanConfigScaleDownToTerraform(struct!.scaleDown),
    scale_in: gpdbDbInstancePlanPlanConfigScaleInToTerraform(struct!.scaleIn),
    scale_out: gpdbDbInstancePlanPlanConfigScaleOutToTerraform(struct!.scaleOut),
    scale_up: gpdbDbInstancePlanPlanConfigScaleUpToTerraform(struct!.scaleUp),
  }
}


export function gpdbDbInstancePlanPlanConfigToHclTerraform(struct?: GpdbDbInstancePlanPlanConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pause: {
      value: gpdbDbInstancePlanPlanConfigPauseToHclTerraform(struct!.pause),
      isBlock: true,
      type: "list",
      storageClassType: "GpdbDbInstancePlanPlanConfigPauseList",
    },
    resume: {
      value: gpdbDbInstancePlanPlanConfigResumeToHclTerraform(struct!.resume),
      isBlock: true,
      type: "list",
      storageClassType: "GpdbDbInstancePlanPlanConfigResumeList",
    },
    scale_down: {
      value: gpdbDbInstancePlanPlanConfigScaleDownToHclTerraform(struct!.scaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "GpdbDbInstancePlanPlanConfigScaleDownList",
    },
    scale_in: {
      value: gpdbDbInstancePlanPlanConfigScaleInToHclTerraform(struct!.scaleIn),
      isBlock: true,
      type: "list",
      storageClassType: "GpdbDbInstancePlanPlanConfigScaleInList",
    },
    scale_out: {
      value: gpdbDbInstancePlanPlanConfigScaleOutToHclTerraform(struct!.scaleOut),
      isBlock: true,
      type: "list",
      storageClassType: "GpdbDbInstancePlanPlanConfigScaleOutList",
    },
    scale_up: {
      value: gpdbDbInstancePlanPlanConfigScaleUpToHclTerraform(struct!.scaleUp),
      isBlock: true,
      type: "list",
      storageClassType: "GpdbDbInstancePlanPlanConfigScaleUpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbDbInstancePlanPlanConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GpdbDbInstancePlanPlanConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause?.internalValue;
    }
    if (this._resume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resume = this._resume?.internalValue;
    }
    if (this._scaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDown = this._scaleDown?.internalValue;
    }
    if (this._scaleIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIn = this._scaleIn?.internalValue;
    }
    if (this._scaleOut?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOut = this._scaleOut?.internalValue;
    }
    if (this._scaleUp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUp = this._scaleUp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanPlanConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pause.internalValue = undefined;
      this._resume.internalValue = undefined;
      this._scaleDown.internalValue = undefined;
      this._scaleIn.internalValue = undefined;
      this._scaleOut.internalValue = undefined;
      this._scaleUp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pause.internalValue = value.pause;
      this._resume.internalValue = value.resume;
      this._scaleDown.internalValue = value.scaleDown;
      this._scaleIn.internalValue = value.scaleIn;
      this._scaleOut.internalValue = value.scaleOut;
      this._scaleUp.internalValue = value.scaleUp;
    }
  }

  // pause - computed: false, optional: true, required: false
  private _pause = new GpdbDbInstancePlanPlanConfigPauseOutputReference(this, "pause");
  public get pause() {
    return this._pause;
  }
  public putPause(value: GpdbDbInstancePlanPlanConfigPause) {
    this._pause.internalValue = value;
  }
  public resetPause() {
    this._pause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause.internalValue;
  }

  // resume - computed: false, optional: true, required: false
  private _resume = new GpdbDbInstancePlanPlanConfigResumeOutputReference(this, "resume");
  public get resume() {
    return this._resume;
  }
  public putResume(value: GpdbDbInstancePlanPlanConfigResume) {
    this._resume.internalValue = value;
  }
  public resetResume() {
    this._resume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeInput() {
    return this._resume.internalValue;
  }

  // scale_down - computed: false, optional: true, required: false
  private _scaleDown = new GpdbDbInstancePlanPlanConfigScaleDownOutputReference(this, "scale_down");
  public get scaleDown() {
    return this._scaleDown;
  }
  public putScaleDown(value: GpdbDbInstancePlanPlanConfigScaleDown) {
    this._scaleDown.internalValue = value;
  }
  public resetScaleDown() {
    this._scaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownInput() {
    return this._scaleDown.internalValue;
  }

  // scale_in - computed: false, optional: true, required: false
  private _scaleIn = new GpdbDbInstancePlanPlanConfigScaleInOutputReference(this, "scale_in");
  public get scaleIn() {
    return this._scaleIn;
  }
  public putScaleIn(value: GpdbDbInstancePlanPlanConfigScaleIn) {
    this._scaleIn.internalValue = value;
  }
  public resetScaleIn() {
    this._scaleIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInInput() {
    return this._scaleIn.internalValue;
  }

  // scale_out - computed: false, optional: true, required: false
  private _scaleOut = new GpdbDbInstancePlanPlanConfigScaleOutOutputReference(this, "scale_out");
  public get scaleOut() {
    return this._scaleOut;
  }
  public putScaleOut(value: GpdbDbInstancePlanPlanConfigScaleOut) {
    this._scaleOut.internalValue = value;
  }
  public resetScaleOut() {
    this._scaleOut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutInput() {
    return this._scaleOut.internalValue;
  }

  // scale_up - computed: false, optional: true, required: false
  private _scaleUp = new GpdbDbInstancePlanPlanConfigScaleUpOutputReference(this, "scale_up");
  public get scaleUp() {
    return this._scaleUp;
  }
  public putScaleUp(value: GpdbDbInstancePlanPlanConfigScaleUp) {
    this._scaleUp.internalValue = value;
  }
  public resetScaleUp() {
    this._scaleUp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpInput() {
    return this._scaleUp.internalValue;
  }
}

export class GpdbDbInstancePlanPlanConfigList extends cdktf.ComplexList {
  public internalValue? : GpdbDbInstancePlanPlanConfig[] | cdktf.IResolvable

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
  public get(index: number): GpdbDbInstancePlanPlanConfigOutputReference {
    return new GpdbDbInstancePlanPlanConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpdbDbInstancePlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#create GpdbDbInstancePlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#delete GpdbDbInstancePlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#update GpdbDbInstancePlan#update}
  */
  readonly update?: string;
}

export function gpdbDbInstancePlanTimeoutsToTerraform(struct?: GpdbDbInstancePlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gpdbDbInstancePlanTimeoutsToHclTerraform(struct?: GpdbDbInstancePlanTimeouts | cdktf.IResolvable): any {
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

export class GpdbDbInstancePlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbDbInstancePlanTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbDbInstancePlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan alicloud_gpdb_db_instance_plan}
*/
export class GpdbDbInstancePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_db_instance_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbDbInstancePlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbDbInstancePlan to import
  * @param importFromId The id of the existing GpdbDbInstancePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbDbInstancePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_db_instance_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/gpdb_db_instance_plan alicloud_gpdb_db_instance_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbDbInstancePlanConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbDbInstancePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_db_instance_plan',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._dbInstancePlanName = config.dbInstancePlanName;
    this._id = config.id;
    this._planDesc = config.planDesc;
    this._planEndDate = config.planEndDate;
    this._planScheduleType = config.planScheduleType;
    this._planStartDate = config.planStartDate;
    this._planType = config.planType;
    this._status = config.status;
    this._planConfig.internalValue = config.planConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // db_instance_plan_name - computed: false, optional: false, required: true
  private _dbInstancePlanName?: string; 
  public get dbInstancePlanName() {
    return this.getStringAttribute('db_instance_plan_name');
  }
  public set dbInstancePlanName(value: string) {
    this._dbInstancePlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstancePlanNameInput() {
    return this._dbInstancePlanName;
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

  // plan_desc - computed: false, optional: true, required: false
  private _planDesc?: string; 
  public get planDesc() {
    return this.getStringAttribute('plan_desc');
  }
  public set planDesc(value: string) {
    this._planDesc = value;
  }
  public resetPlanDesc() {
    this._planDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planDescInput() {
    return this._planDesc;
  }

  // plan_end_date - computed: false, optional: true, required: false
  private _planEndDate?: string; 
  public get planEndDate() {
    return this.getStringAttribute('plan_end_date');
  }
  public set planEndDate(value: string) {
    this._planEndDate = value;
  }
  public resetPlanEndDate() {
    this._planEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planEndDateInput() {
    return this._planEndDate;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_schedule_type - computed: false, optional: false, required: true
  private _planScheduleType?: string; 
  public get planScheduleType() {
    return this.getStringAttribute('plan_schedule_type');
  }
  public set planScheduleType(value: string) {
    this._planScheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planScheduleTypeInput() {
    return this._planScheduleType;
  }

  // plan_start_date - computed: true, optional: true, required: false
  private _planStartDate?: string; 
  public get planStartDate() {
    return this.getStringAttribute('plan_start_date');
  }
  public set planStartDate(value: string) {
    this._planStartDate = value;
  }
  public resetPlanStartDate() {
    this._planStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planStartDateInput() {
    return this._planStartDate;
  }

  // plan_type - computed: false, optional: false, required: true
  private _planType?: string; 
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
  public set planType(value: string) {
    this._planType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planTypeInput() {
    return this._planType;
  }

  // status - computed: true, optional: true, required: false
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

  // plan_config - computed: false, optional: false, required: true
  private _planConfig = new GpdbDbInstancePlanPlanConfigList(this, "plan_config", false);
  public get planConfig() {
    return this._planConfig;
  }
  public putPlanConfig(value: GpdbDbInstancePlanPlanConfig[] | cdktf.IResolvable) {
    this._planConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planConfigInput() {
    return this._planConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbDbInstancePlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbDbInstancePlanTimeouts) {
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
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      db_instance_plan_name: cdktf.stringToTerraform(this._dbInstancePlanName),
      id: cdktf.stringToTerraform(this._id),
      plan_desc: cdktf.stringToTerraform(this._planDesc),
      plan_end_date: cdktf.stringToTerraform(this._planEndDate),
      plan_schedule_type: cdktf.stringToTerraform(this._planScheduleType),
      plan_start_date: cdktf.stringToTerraform(this._planStartDate),
      plan_type: cdktf.stringToTerraform(this._planType),
      status: cdktf.stringToTerraform(this._status),
      plan_config: cdktf.listMapper(gpdbDbInstancePlanPlanConfigToTerraform, true)(this._planConfig.internalValue),
      timeouts: gpdbDbInstancePlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_plan_name: {
        value: cdktf.stringToHclTerraform(this._dbInstancePlanName),
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
      plan_desc: {
        value: cdktf.stringToHclTerraform(this._planDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_end_date: {
        value: cdktf.stringToHclTerraform(this._planEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_schedule_type: {
        value: cdktf.stringToHclTerraform(this._planScheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_start_date: {
        value: cdktf.stringToHclTerraform(this._planStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_type: {
        value: cdktf.stringToHclTerraform(this._planType),
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
      plan_config: {
        value: cdktf.listMapperHcl(gpdbDbInstancePlanPlanConfigToHclTerraform, true)(this._planConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpdbDbInstancePlanPlanConfigList",
      },
      timeouts: {
        value: gpdbDbInstancePlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbDbInstancePlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
