// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlsScheduledSqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#description SlsScheduledSql#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#display_name SlsScheduledSql#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#id SlsScheduledSql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#project SlsScheduledSql#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#scheduled_sql_name SlsScheduledSql#scheduled_sql_name}
  */
  readonly scheduledSqlName: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#schedule SlsScheduledSql#schedule}
  */
  readonly schedule: SlsScheduledSqlSchedule;
  /**
  * scheduled_sql_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#scheduled_sql_configuration SlsScheduledSql#scheduled_sql_configuration}
  */
  readonly scheduledSqlConfiguration: SlsScheduledSqlScheduledSqlConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#timeouts SlsScheduledSql#timeouts}
  */
  readonly timeouts?: SlsScheduledSqlTimeouts;
}
export interface SlsScheduledSqlSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#cron_expression SlsScheduledSql#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#delay SlsScheduledSql#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#interval SlsScheduledSql#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#run_immediately SlsScheduledSql#run_immediately}
  */
  readonly runImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#time_zone SlsScheduledSql#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#type SlsScheduledSql#type}
  */
  readonly type?: string;
}

export function slsScheduledSqlScheduleToTerraform(struct?: SlsScheduledSqlScheduleOutputReference | SlsScheduledSqlSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    delay: cdktf.numberToTerraform(struct!.delay),
    interval: cdktf.stringToTerraform(struct!.interval),
    run_immediately: cdktf.booleanToTerraform(struct!.runImmediately),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function slsScheduledSqlScheduleToHclTerraform(struct?: SlsScheduledSqlScheduleOutputReference | SlsScheduledSqlSchedule): any {
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
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_immediately: {
      value: cdktf.booleanToHclTerraform(struct!.runImmediately),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
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

export class SlsScheduledSqlScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsScheduledSqlSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._runImmediately !== undefined) {
      hasAnyValues = true;
      internalValueResult.runImmediately = this._runImmediately;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsScheduledSqlSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._delay = undefined;
      this._interval = undefined;
      this._runImmediately = undefined;
      this._timeZone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._delay = value.delay;
      this._interval = value.interval;
      this._runImmediately = value.runImmediately;
      this._timeZone = value.timeZone;
      this._type = value.type;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // run_immediately - computed: false, optional: true, required: false
  private _runImmediately?: boolean | cdktf.IResolvable; 
  public get runImmediately() {
    return this.getBooleanAttribute('run_immediately');
  }
  public set runImmediately(value: boolean | cdktf.IResolvable) {
    this._runImmediately = value;
  }
  public resetRunImmediately() {
    this._runImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runImmediatelyInput() {
    return this._runImmediately;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
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
export interface SlsScheduledSqlScheduledSqlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#data_format SlsScheduledSql#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#dest_endpoint SlsScheduledSql#dest_endpoint}
  */
  readonly destEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#dest_logstore SlsScheduledSql#dest_logstore}
  */
  readonly destLogstore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#dest_project SlsScheduledSql#dest_project}
  */
  readonly destProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#dest_role_arn SlsScheduledSql#dest_role_arn}
  */
  readonly destRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#from_time SlsScheduledSql#from_time}
  */
  readonly fromTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#from_time_expr SlsScheduledSql#from_time_expr}
  */
  readonly fromTimeExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#max_retries SlsScheduledSql#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#max_run_time_in_seconds SlsScheduledSql#max_run_time_in_seconds}
  */
  readonly maxRunTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#parameters SlsScheduledSql#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#resource_pool SlsScheduledSql#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#role_arn SlsScheduledSql#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#script SlsScheduledSql#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#source_logstore SlsScheduledSql#source_logstore}
  */
  readonly sourceLogstore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#sql_type SlsScheduledSql#sql_type}
  */
  readonly sqlType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#to_time SlsScheduledSql#to_time}
  */
  readonly toTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#to_time_expr SlsScheduledSql#to_time_expr}
  */
  readonly toTimeExpr?: string;
}

export function slsScheduledSqlScheduledSqlConfigurationToTerraform(struct?: SlsScheduledSqlScheduledSqlConfigurationOutputReference | SlsScheduledSqlScheduledSqlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
    dest_endpoint: cdktf.stringToTerraform(struct!.destEndpoint),
    dest_logstore: cdktf.stringToTerraform(struct!.destLogstore),
    dest_project: cdktf.stringToTerraform(struct!.destProject),
    dest_role_arn: cdktf.stringToTerraform(struct!.destRoleArn),
    from_time: cdktf.numberToTerraform(struct!.fromTime),
    from_time_expr: cdktf.stringToTerraform(struct!.fromTimeExpr),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    max_run_time_in_seconds: cdktf.numberToTerraform(struct!.maxRunTimeInSeconds),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    script: cdktf.stringToTerraform(struct!.script),
    source_logstore: cdktf.stringToTerraform(struct!.sourceLogstore),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
    to_time: cdktf.numberToTerraform(struct!.toTime),
    to_time_expr: cdktf.stringToTerraform(struct!.toTimeExpr),
  }
}


export function slsScheduledSqlScheduledSqlConfigurationToHclTerraform(struct?: SlsScheduledSqlScheduledSqlConfigurationOutputReference | SlsScheduledSqlScheduledSqlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_format: {
      value: cdktf.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.destEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_logstore: {
      value: cdktf.stringToHclTerraform(struct!.destLogstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_project: {
      value: cdktf.stringToHclTerraform(struct!.destProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.destRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_time: {
      value: cdktf.numberToHclTerraform(struct!.fromTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    from_time_expr: {
      value: cdktf.stringToHclTerraform(struct!.fromTimeExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_run_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxRunTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_logstore: {
      value: cdktf.stringToHclTerraform(struct!.sourceLogstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_type: {
      value: cdktf.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_time: {
      value: cdktf.numberToHclTerraform(struct!.toTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_time_expr: {
      value: cdktf.stringToHclTerraform(struct!.toTimeExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsScheduledSqlScheduledSqlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsScheduledSqlScheduledSqlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._destEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.destEndpoint = this._destEndpoint;
    }
    if (this._destLogstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.destLogstore = this._destLogstore;
    }
    if (this._destProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.destProject = this._destProject;
    }
    if (this._destRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRoleArn = this._destRoleArn;
    }
    if (this._fromTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromTime = this._fromTime;
    }
    if (this._fromTimeExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromTimeExpr = this._fromTimeExpr;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._maxRunTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunTimeInSeconds = this._maxRunTimeInSeconds;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._sourceLogstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLogstore = this._sourceLogstore;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    if (this._toTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.toTime = this._toTime;
    }
    if (this._toTimeExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.toTimeExpr = this._toTimeExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsScheduledSqlScheduledSqlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFormat = undefined;
      this._destEndpoint = undefined;
      this._destLogstore = undefined;
      this._destProject = undefined;
      this._destRoleArn = undefined;
      this._fromTime = undefined;
      this._fromTimeExpr = undefined;
      this._maxRetries = undefined;
      this._maxRunTimeInSeconds = undefined;
      this._parameters = undefined;
      this._resourcePool = undefined;
      this._roleArn = undefined;
      this._script = undefined;
      this._sourceLogstore = undefined;
      this._sqlType = undefined;
      this._toTime = undefined;
      this._toTimeExpr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFormat = value.dataFormat;
      this._destEndpoint = value.destEndpoint;
      this._destLogstore = value.destLogstore;
      this._destProject = value.destProject;
      this._destRoleArn = value.destRoleArn;
      this._fromTime = value.fromTime;
      this._fromTimeExpr = value.fromTimeExpr;
      this._maxRetries = value.maxRetries;
      this._maxRunTimeInSeconds = value.maxRunTimeInSeconds;
      this._parameters = value.parameters;
      this._resourcePool = value.resourcePool;
      this._roleArn = value.roleArn;
      this._script = value.script;
      this._sourceLogstore = value.sourceLogstore;
      this._sqlType = value.sqlType;
      this._toTime = value.toTime;
      this._toTimeExpr = value.toTimeExpr;
    }
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // dest_endpoint - computed: false, optional: true, required: false
  private _destEndpoint?: string; 
  public get destEndpoint() {
    return this.getStringAttribute('dest_endpoint');
  }
  public set destEndpoint(value: string) {
    this._destEndpoint = value;
  }
  public resetDestEndpoint() {
    this._destEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destEndpointInput() {
    return this._destEndpoint;
  }

  // dest_logstore - computed: false, optional: true, required: false
  private _destLogstore?: string; 
  public get destLogstore() {
    return this.getStringAttribute('dest_logstore');
  }
  public set destLogstore(value: string) {
    this._destLogstore = value;
  }
  public resetDestLogstore() {
    this._destLogstore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destLogstoreInput() {
    return this._destLogstore;
  }

  // dest_project - computed: false, optional: true, required: false
  private _destProject?: string; 
  public get destProject() {
    return this.getStringAttribute('dest_project');
  }
  public set destProject(value: string) {
    this._destProject = value;
  }
  public resetDestProject() {
    this._destProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destProjectInput() {
    return this._destProject;
  }

  // dest_role_arn - computed: false, optional: true, required: false
  private _destRoleArn?: string; 
  public get destRoleArn() {
    return this.getStringAttribute('dest_role_arn');
  }
  public set destRoleArn(value: string) {
    this._destRoleArn = value;
  }
  public resetDestRoleArn() {
    this._destRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRoleArnInput() {
    return this._destRoleArn;
  }

  // from_time - computed: false, optional: true, required: false
  private _fromTime?: number; 
  public get fromTime() {
    return this.getNumberAttribute('from_time');
  }
  public set fromTime(value: number) {
    this._fromTime = value;
  }
  public resetFromTime() {
    this._fromTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeInput() {
    return this._fromTime;
  }

  // from_time_expr - computed: false, optional: true, required: false
  private _fromTimeExpr?: string; 
  public get fromTimeExpr() {
    return this.getStringAttribute('from_time_expr');
  }
  public set fromTimeExpr(value: string) {
    this._fromTimeExpr = value;
  }
  public resetFromTimeExpr() {
    this._fromTimeExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeExprInput() {
    return this._fromTimeExpr;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_run_time_in_seconds - computed: false, optional: true, required: false
  private _maxRunTimeInSeconds?: number; 
  public get maxRunTimeInSeconds() {
    return this.getNumberAttribute('max_run_time_in_seconds');
  }
  public set maxRunTimeInSeconds(value: number) {
    this._maxRunTimeInSeconds = value;
  }
  public resetMaxRunTimeInSeconds() {
    this._maxRunTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunTimeInSecondsInput() {
    return this._maxRunTimeInSeconds;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // source_logstore - computed: false, optional: true, required: false
  private _sourceLogstore?: string; 
  public get sourceLogstore() {
    return this.getStringAttribute('source_logstore');
  }
  public set sourceLogstore(value: string) {
    this._sourceLogstore = value;
  }
  public resetSourceLogstore() {
    this._sourceLogstore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLogstoreInput() {
    return this._sourceLogstore;
  }

  // sql_type - computed: false, optional: true, required: false
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  public resetSqlType() {
    this._sqlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }

  // to_time - computed: false, optional: true, required: false
  private _toTime?: number; 
  public get toTime() {
    return this.getNumberAttribute('to_time');
  }
  public set toTime(value: number) {
    this._toTime = value;
  }
  public resetToTime() {
    this._toTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toTimeInput() {
    return this._toTime;
  }

  // to_time_expr - computed: false, optional: true, required: false
  private _toTimeExpr?: string; 
  public get toTimeExpr() {
    return this.getStringAttribute('to_time_expr');
  }
  public set toTimeExpr(value: string) {
    this._toTimeExpr = value;
  }
  public resetToTimeExpr() {
    this._toTimeExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toTimeExprInput() {
    return this._toTimeExpr;
  }
}
export interface SlsScheduledSqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#create SlsScheduledSql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#delete SlsScheduledSql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#update SlsScheduledSql#update}
  */
  readonly update?: string;
}

export function slsScheduledSqlTimeoutsToTerraform(struct?: SlsScheduledSqlTimeouts | cdktf.IResolvable): any {
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


export function slsScheduledSqlTimeoutsToHclTerraform(struct?: SlsScheduledSqlTimeouts | cdktf.IResolvable): any {
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

export class SlsScheduledSqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SlsScheduledSqlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlsScheduledSqlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql alicloud_sls_scheduled_sql}
*/
export class SlsScheduledSql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sls_scheduled_sql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlsScheduledSql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlsScheduledSql to import
  * @param importFromId The id of the existing SlsScheduledSql that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlsScheduledSql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sls_scheduled_sql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/sls_scheduled_sql alicloud_sls_scheduled_sql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlsScheduledSqlConfig
  */
  public constructor(scope: Construct, id: string, config: SlsScheduledSqlConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sls_scheduled_sql',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._scheduledSqlName = config.scheduledSqlName;
    this._schedule.internalValue = config.schedule;
    this._scheduledSqlConfiguration.internalValue = config.scheduledSqlConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // scheduled_sql_name - computed: false, optional: false, required: true
  private _scheduledSqlName?: string; 
  public get scheduledSqlName() {
    return this.getStringAttribute('scheduled_sql_name');
  }
  public set scheduledSqlName(value: string) {
    this._scheduledSqlName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledSqlNameInput() {
    return this._scheduledSqlName;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new SlsScheduledSqlScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SlsScheduledSqlSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // scheduled_sql_configuration - computed: false, optional: false, required: true
  private _scheduledSqlConfiguration = new SlsScheduledSqlScheduledSqlConfigurationOutputReference(this, "scheduled_sql_configuration");
  public get scheduledSqlConfiguration() {
    return this._scheduledSqlConfiguration;
  }
  public putScheduledSqlConfiguration(value: SlsScheduledSqlScheduledSqlConfiguration) {
    this._scheduledSqlConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledSqlConfigurationInput() {
    return this._scheduledSqlConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SlsScheduledSqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SlsScheduledSqlTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      scheduled_sql_name: cdktf.stringToTerraform(this._scheduledSqlName),
      schedule: slsScheduledSqlScheduleToTerraform(this._schedule.internalValue),
      scheduled_sql_configuration: slsScheduledSqlScheduledSqlConfigurationToTerraform(this._scheduledSqlConfiguration.internalValue),
      timeouts: slsScheduledSqlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_sql_name: {
        value: cdktf.stringToHclTerraform(this._scheduledSqlName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: slsScheduledSqlScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsScheduledSqlScheduleList",
      },
      scheduled_sql_configuration: {
        value: slsScheduledSqlScheduledSqlConfigurationToHclTerraform(this._scheduledSqlConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsScheduledSqlScheduledSqlConfigurationList",
      },
      timeouts: {
        value: slsScheduledSqlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SlsScheduledSqlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
