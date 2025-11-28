// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#auto_pay RdsInstance#auto_pay}
  */
  readonly autoPay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#auto_renew RdsInstance#auto_renew}
  */
  readonly autoRenew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#availability_zone RdsInstance#availability_zone}
  */
  readonly availabilityZone: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#charging_mode RdsInstance#charging_mode}
  */
  readonly chargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#collation RdsInstance#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#description RdsInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#dss_pool_id RdsInstance#dss_pool_id}
  */
  readonly dssPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#enterprise_project_id RdsInstance#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#fixed_ip RdsInstance#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#flavor RdsInstance#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#ha_replication_mode RdsInstance#ha_replication_mode}
  */
  readonly haReplicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#id RdsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#lower_case_table_names RdsInstance#lower_case_table_names}
  */
  readonly lowerCaseTableNames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#name RdsInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#param_group_id RdsInstance#param_group_id}
  */
  readonly paramGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#period RdsInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#period_unit RdsInstance#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#region RdsInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#security_group_id RdsInstance#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#ssl_enable RdsInstance#ssl_enable}
  */
  readonly sslEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#subnet_id RdsInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#tags RdsInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#time_zone RdsInstance#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#vpc_id RdsInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backup_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#backup_strategy RdsInstance#backup_strategy}
  */
  readonly backupStrategy?: RdsInstanceBackupStrategy;
  /**
  * db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#db RdsInstance#db}
  */
  readonly db: RdsInstanceDb;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#parameters RdsInstance#parameters}
  */
  readonly parameters?: RdsInstanceParameters[] | cdktf.IResolvable;
  /**
  * restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#restore RdsInstance#restore}
  */
  readonly restore?: RdsInstanceRestore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#timeouts RdsInstance#timeouts}
  */
  readonly timeouts?: RdsInstanceTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#volume RdsInstance#volume}
  */
  readonly volume: RdsInstanceVolume;
}
export interface RdsInstanceNodes {
}

export function rdsInstanceNodesToTerraform(struct?: RdsInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rdsInstanceNodesToHclTerraform(struct?: RdsInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RdsInstanceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsInstanceNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class RdsInstanceNodesList extends cdktf.ComplexList {

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
  public get(index: number): RdsInstanceNodesOutputReference {
    return new RdsInstanceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsInstanceBackupStrategy {
  /**
  * schema: Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#keep_days RdsInstance#keep_days}
  */
  readonly keepDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#period RdsInstance#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#start_time RdsInstance#start_time}
  */
  readonly startTime: string;
}

export function rdsInstanceBackupStrategyToTerraform(struct?: RdsInstanceBackupStrategyOutputReference | RdsInstanceBackupStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_days: cdktf.numberToTerraform(struct!.keepDays),
    period: cdktf.stringToTerraform(struct!.period),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function rdsInstanceBackupStrategyToHclTerraform(struct?: RdsInstanceBackupStrategyOutputReference | RdsInstanceBackupStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_days: {
      value: cdktf.numberToHclTerraform(struct!.keepDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceBackupStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceBackupStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDays = this._keepDays;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceBackupStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepDays = undefined;
      this._period = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepDays = value.keepDays;
      this._period = value.period;
      this._startTime = value.startTime;
    }
  }

  // keep_days - computed: true, optional: true, required: false
  private _keepDays?: number; 
  public get keepDays() {
    return this.getNumberAttribute('keep_days');
  }
  public set keepDays(value: number) {
    this._keepDays = value;
  }
  public resetKeepDays() {
    this._keepDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDaysInput() {
    return this._keepDays;
  }

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface RdsInstanceDb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#password RdsInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#port RdsInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#type RdsInstance#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#version RdsInstance#version}
  */
  readonly version: string;
}

export function rdsInstanceDbToTerraform(struct?: RdsInstanceDbOutputReference | RdsInstanceDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function rdsInstanceDbToHclTerraform(struct?: RdsInstanceDbOutputReference | RdsInstanceDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._port = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._port = value.port;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RdsInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#name RdsInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#value RdsInstance#value}
  */
  readonly value: string;
}

export function rdsInstanceParametersToTerraform(struct?: RdsInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rdsInstanceParametersToHclTerraform(struct?: RdsInstanceParameters | cdktf.IResolvable): any {
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

export class RdsInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RdsInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : RdsInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): RdsInstanceParametersOutputReference {
    return new RdsInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsInstanceRestore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#backup_id RdsInstance#backup_id}
  */
  readonly backupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#database_name RdsInstance#database_name}
  */
  readonly databaseName?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#instance_id RdsInstance#instance_id}
  */
  readonly instanceId: string;
}

export function rdsInstanceRestoreToTerraform(struct?: RdsInstanceRestoreOutputReference | RdsInstanceRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    database_name: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.databaseName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
  }
}


export function rdsInstanceRestoreToHclTerraform(struct?: RdsInstanceRestoreOutputReference | RdsInstanceRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.databaseName),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsInstanceRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._databaseName = undefined;
      this._instanceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._databaseName = value.databaseName;
      this._instanceId = value.instanceId;
    }
  }

  // backup_id - computed: false, optional: false, required: true
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: { [key: string]: string }; 
  public get databaseName() {
    return this.getStringMapAttribute('database_name');
  }
  public set databaseName(value: { [key: string]: string }) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface RdsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#create RdsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#default RdsInstance#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#delete RdsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#update RdsInstance#update}
  */
  readonly update?: string;
}

export function rdsInstanceTimeoutsToTerraform(struct?: RdsInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function rdsInstanceTimeoutsToHclTerraform(struct?: RdsInstanceTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class RdsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: RdsInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface RdsInstanceVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#disk_encryption_id RdsInstance#disk_encryption_id}
  */
  readonly diskEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#limit_size RdsInstance#limit_size}
  */
  readonly limitSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#size RdsInstance#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#trigger_threshold RdsInstance#trigger_threshold}
  */
  readonly triggerThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#type RdsInstance#type}
  */
  readonly type: string;
}

export function rdsInstanceVolumeToTerraform(struct?: RdsInstanceVolumeOutputReference | RdsInstanceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_id: cdktf.stringToTerraform(struct!.diskEncryptionId),
    limit_size: cdktf.numberToTerraform(struct!.limitSize),
    size: cdktf.numberToTerraform(struct!.size),
    trigger_threshold: cdktf.numberToTerraform(struct!.triggerThreshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function rdsInstanceVolumeToHclTerraform(struct?: RdsInstanceVolumeOutputReference | RdsInstanceVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_id: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_size: {
      value: cdktf.numberToHclTerraform(struct!.limitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_threshold: {
      value: cdktf.numberToHclTerraform(struct!.triggerThreshold),
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

export class RdsInstanceVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsInstanceVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionId = this._diskEncryptionId;
    }
    if (this._limitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitSize = this._limitSize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._triggerThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerThreshold = this._triggerThreshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryptionId = undefined;
      this._limitSize = undefined;
      this._size = undefined;
      this._triggerThreshold = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryptionId = value.diskEncryptionId;
      this._limitSize = value.limitSize;
      this._size = value.size;
      this._triggerThreshold = value.triggerThreshold;
      this._type = value.type;
    }
  }

  // disk_encryption_id - computed: true, optional: true, required: false
  private _diskEncryptionId?: string; 
  public get diskEncryptionId() {
    return this.getStringAttribute('disk_encryption_id');
  }
  public set diskEncryptionId(value: string) {
    this._diskEncryptionId = value;
  }
  public resetDiskEncryptionId() {
    this._diskEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionIdInput() {
    return this._diskEncryptionId;
  }

  // limit_size - computed: false, optional: true, required: false
  private _limitSize?: number; 
  public get limitSize() {
    return this.getNumberAttribute('limit_size');
  }
  public set limitSize(value: number) {
    this._limitSize = value;
  }
  public resetLimitSize() {
    this._limitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitSizeInput() {
    return this._limitSize;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // trigger_threshold - computed: false, optional: true, required: false
  private _triggerThreshold?: number; 
  public get triggerThreshold() {
    return this.getNumberAttribute('trigger_threshold');
  }
  public set triggerThreshold(value: number) {
    this._triggerThreshold = value;
  }
  public resetTriggerThreshold() {
    this._triggerThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerThresholdInput() {
    return this._triggerThreshold;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance hcs_rds_instance}
*/
export class RdsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_rds_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsInstance to import
  * @param importFromId The id of the existing RdsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_rds_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/rds_instance hcs_rds_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RdsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_rds_instance',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPay = config.autoPay;
    this._autoRenew = config.autoRenew;
    this._availabilityZone = config.availabilityZone;
    this._chargingMode = config.chargingMode;
    this._collation = config.collation;
    this._description = config.description;
    this._dssPoolId = config.dssPoolId;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._fixedIp = config.fixedIp;
    this._flavor = config.flavor;
    this._haReplicationMode = config.haReplicationMode;
    this._id = config.id;
    this._lowerCaseTableNames = config.lowerCaseTableNames;
    this._name = config.name;
    this._paramGroupId = config.paramGroupId;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._sslEnable = config.sslEnable;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeZone = config.timeZone;
    this._vpcId = config.vpcId;
    this._backupStrategy.internalValue = config.backupStrategy;
    this._db.internalValue = config.db;
    this._parameters.internalValue = config.parameters;
    this._restore.internalValue = config.restore;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: string; 
  public get autoPay() {
    return this.getStringAttribute('auto_pay');
  }
  public set autoPay(value: string) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: string; 
  public get autoRenew() {
    return this.getStringAttribute('auto_renew');
  }
  public set autoRenew(value: string) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string[]; 
  public get availabilityZone() {
    return this.getListAttribute('availability_zone');
  }
  public set availabilityZone(value: string[]) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // charging_mode - computed: true, optional: true, required: false
  private _chargingMode?: string; 
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }
  public set chargingMode(value: string) {
    this._chargingMode = value;
  }
  public resetChargingMode() {
    this._chargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingModeInput() {
    return this._chargingMode;
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // dss_pool_id - computed: false, optional: true, required: false
  private _dssPoolId?: string; 
  public get dssPoolId() {
    return this.getStringAttribute('dss_pool_id');
  }
  public set dssPoolId(value: string) {
    this._dssPoolId = value;
  }
  public resetDssPoolId() {
    this._dssPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dssPoolIdInput() {
    return this._dssPoolId;
  }

  // enterprise_project_id - computed: true, optional: true, required: false
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

  // fixed_ip - computed: true, optional: true, required: false
  private _fixedIp?: string; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // ha_replication_mode - computed: true, optional: true, required: false
  private _haReplicationMode?: string; 
  public get haReplicationMode() {
    return this.getStringAttribute('ha_replication_mode');
  }
  public set haReplicationMode(value: string) {
    this._haReplicationMode = value;
  }
  public resetHaReplicationMode() {
    this._haReplicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haReplicationModeInput() {
    return this._haReplicationMode;
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

  // lower_case_table_names - computed: false, optional: true, required: false
  private _lowerCaseTableNames?: string; 
  public get lowerCaseTableNames() {
    return this.getStringAttribute('lower_case_table_names');
  }
  public set lowerCaseTableNames(value: string) {
    this._lowerCaseTableNames = value;
  }
  public resetLowerCaseTableNames() {
    this._lowerCaseTableNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerCaseTableNamesInput() {
    return this._lowerCaseTableNames;
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

  // nodes - computed: true, optional: false, required: false
  private _nodes = new RdsInstanceNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // param_group_id - computed: false, optional: true, required: false
  private _paramGroupId?: string; 
  public get paramGroupId() {
    return this.getStringAttribute('param_group_id');
  }
  public set paramGroupId(value: string) {
    this._paramGroupId = value;
  }
  public resetParamGroupId() {
    this._paramGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramGroupIdInput() {
    return this._paramGroupId;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }

  // public_ips - computed: true, optional: false, required: false
  public get publicIps() {
    return this.getListAttribute('public_ips');
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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // ssl_enable - computed: false, optional: true, required: false
  private _sslEnable?: boolean | cdktf.IResolvable; 
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }
  public set sslEnable(value: boolean | cdktf.IResolvable) {
    this._sslEnable = value;
  }
  public resetSslEnable() {
    this._sslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnableInput() {
    return this._sslEnable;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // time_zone - computed: true, optional: true, required: false
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // backup_strategy - computed: false, optional: true, required: false
  private _backupStrategy = new RdsInstanceBackupStrategyOutputReference(this, "backup_strategy");
  public get backupStrategy() {
    return this._backupStrategy;
  }
  public putBackupStrategy(value: RdsInstanceBackupStrategy) {
    this._backupStrategy.internalValue = value;
  }
  public resetBackupStrategy() {
    this._backupStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStrategyInput() {
    return this._backupStrategy.internalValue;
  }

  // db - computed: false, optional: false, required: true
  private _db = new RdsInstanceDbOutputReference(this, "db");
  public get db() {
    return this._db;
  }
  public putDb(value: RdsInstanceDb) {
    this._db.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new RdsInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RdsInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new RdsInstanceRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: RdsInstanceRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new RdsInstanceVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: RdsInstanceVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_pay: cdktf.stringToTerraform(this._autoPay),
      auto_renew: cdktf.stringToTerraform(this._autoRenew),
      availability_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZone),
      charging_mode: cdktf.stringToTerraform(this._chargingMode),
      collation: cdktf.stringToTerraform(this._collation),
      description: cdktf.stringToTerraform(this._description),
      dss_pool_id: cdktf.stringToTerraform(this._dssPoolId),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      fixed_ip: cdktf.stringToTerraform(this._fixedIp),
      flavor: cdktf.stringToTerraform(this._flavor),
      ha_replication_mode: cdktf.stringToTerraform(this._haReplicationMode),
      id: cdktf.stringToTerraform(this._id),
      lower_case_table_names: cdktf.stringToTerraform(this._lowerCaseTableNames),
      name: cdktf.stringToTerraform(this._name),
      param_group_id: cdktf.stringToTerraform(this._paramGroupId),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      ssl_enable: cdktf.booleanToTerraform(this._sslEnable),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backup_strategy: rdsInstanceBackupStrategyToTerraform(this._backupStrategy.internalValue),
      db: rdsInstanceDbToTerraform(this._db.internalValue),
      parameters: cdktf.listMapper(rdsInstanceParametersToTerraform, true)(this._parameters.internalValue),
      restore: rdsInstanceRestoreToTerraform(this._restore.internalValue),
      timeouts: rdsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      volume: rdsInstanceVolumeToTerraform(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_pay: {
        value: cdktf.stringToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.stringToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZone),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      charging_mode: {
        value: cdktf.stringToHclTerraform(this._chargingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collation: {
        value: cdktf.stringToHclTerraform(this._collation),
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
      dss_pool_id: {
        value: cdktf.stringToHclTerraform(this._dssPoolId),
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
      fixed_ip: {
        value: cdktf.stringToHclTerraform(this._fixedIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_replication_mode: {
        value: cdktf.stringToHclTerraform(this._haReplicationMode),
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
      lower_case_table_names: {
        value: cdktf.stringToHclTerraform(this._lowerCaseTableNames),
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
      param_group_id: {
        value: cdktf.stringToHclTerraform(this._paramGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enable: {
        value: cdktf.booleanToHclTerraform(this._sslEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
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
      backup_strategy: {
        value: rdsInstanceBackupStrategyToHclTerraform(this._backupStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceBackupStrategyList",
      },
      db: {
        value: rdsInstanceDbToHclTerraform(this._db.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceDbList",
      },
      parameters: {
        value: cdktf.listMapperHcl(rdsInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsInstanceParametersList",
      },
      restore: {
        value: rdsInstanceRestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceRestoreList",
      },
      timeouts: {
        value: rdsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsInstanceTimeouts",
      },
      volume: {
        value: rdsInstanceVolumeToHclTerraform(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsInstanceVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
