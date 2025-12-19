// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsManualConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the AWS account to be linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#account_id AwsManualConnection#account_id}
  */
  readonly accountId: string;
  /**
  * Assets enabled for the connection. Note that `mssql` is only available for legacy connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#assets_enabled AwsManualConnection#assets_enabled}
  */
  readonly assetsEnabled: AwsManualConnectionAssetsEnabled;
  /**
  * Region of the AWS account to be linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#aws_region AwsManualConnection#aws_region}
  */
  readonly awsRegion: string;
  /**
  * An object containing the ARNs of the resources created for the manual AWS connection. Please refer to this guide for instructions on how to create them. - https://documentation.commvault.com/clumio/manual_setup_for_aws_account_integration.html. If any of the ARNs are not applicable to the manual connection, provide an empty string "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#resources AwsManualConnection#resources}
  */
  readonly resources: AwsManualConnectionResources;
}
export interface AwsManualConnectionAssetsEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#ddb AwsManualConnection#ddb}
  */
  readonly ddb: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#ebs AwsManualConnection#ebs}
  */
  readonly ebs: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#mssql AwsManualConnection#mssql}
  */
  readonly mssql: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#rds AwsManualConnection#rds}
  */
  readonly rds: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#s3 AwsManualConnection#s3}
  */
  readonly s3: boolean | cdktf.IResolvable;
}

export function awsManualConnectionAssetsEnabledToTerraform(struct?: AwsManualConnectionAssetsEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddb: cdktf.booleanToTerraform(struct!.ddb),
    ebs: cdktf.booleanToTerraform(struct!.ebs),
    mssql: cdktf.booleanToTerraform(struct!.mssql),
    rds: cdktf.booleanToTerraform(struct!.rds),
    s3: cdktf.booleanToTerraform(struct!.s3),
  }
}


export function awsManualConnectionAssetsEnabledToHclTerraform(struct?: AwsManualConnectionAssetsEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddb: {
      value: cdktf.booleanToHclTerraform(struct!.ddb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs: {
      value: cdktf.booleanToHclTerraform(struct!.ebs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mssql: {
      value: cdktf.booleanToHclTerraform(struct!.mssql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rds: {
      value: cdktf.booleanToHclTerraform(struct!.rds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3: {
      value: cdktf.booleanToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsManualConnectionAssetsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsManualConnectionAssetsEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddb = this._ddb;
    }
    if (this._ebs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs;
    }
    if (this._mssql !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssql = this._mssql;
    }
    if (this._rds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rds = this._rds;
    }
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManualConnectionAssetsEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddb = undefined;
      this._ebs = undefined;
      this._mssql = undefined;
      this._rds = undefined;
      this._s3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddb = value.ddb;
      this._ebs = value.ebs;
      this._mssql = value.mssql;
      this._rds = value.rds;
      this._s3 = value.s3;
    }
  }

  // ddb - computed: false, optional: false, required: true
  private _ddb?: boolean | cdktf.IResolvable; 
  public get ddb() {
    return this.getBooleanAttribute('ddb');
  }
  public set ddb(value: boolean | cdktf.IResolvable) {
    this._ddb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddbInput() {
    return this._ddb;
  }

  // ebs - computed: false, optional: false, required: true
  private _ebs?: boolean | cdktf.IResolvable; 
  public get ebs() {
    return this.getBooleanAttribute('ebs');
  }
  public set ebs(value: boolean | cdktf.IResolvable) {
    this._ebs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs;
  }

  // mssql - computed: false, optional: false, required: true
  private _mssql?: boolean | cdktf.IResolvable; 
  public get mssql() {
    return this.getBooleanAttribute('mssql');
  }
  public set mssql(value: boolean | cdktf.IResolvable) {
    this._mssql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlInput() {
    return this._mssql;
  }

  // rds - computed: false, optional: false, required: true
  private _rds?: boolean | cdktf.IResolvable; 
  public get rds() {
    return this.getBooleanAttribute('rds');
  }
  public set rds(value: boolean | cdktf.IResolvable) {
    this._rds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInput() {
    return this._rds;
  }

  // s3 - computed: false, optional: false, required: true
  private _s3?: boolean | cdktf.IResolvable; 
  public get s3() {
    return this.getBooleanAttribute('s3');
  }
  public set s3(value: boolean | cdktf.IResolvable) {
    this._s3 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }
}
export interface AwsManualConnectionResourcesEventRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#cloudtrail_rule_arn AwsManualConnection#cloudtrail_rule_arn}
  */
  readonly cloudtrailRuleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#cloudwatch_rule_arn AwsManualConnection#cloudwatch_rule_arn}
  */
  readonly cloudwatchRuleArn: string;
}

export function awsManualConnectionResourcesEventRulesToTerraform(struct?: AwsManualConnectionResourcesEventRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudtrail_rule_arn: cdktf.stringToTerraform(struct!.cloudtrailRuleArn),
    cloudwatch_rule_arn: cdktf.stringToTerraform(struct!.cloudwatchRuleArn),
  }
}


export function awsManualConnectionResourcesEventRulesToHclTerraform(struct?: AwsManualConnectionResourcesEventRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudtrail_rule_arn: {
      value: cdktf.stringToHclTerraform(struct!.cloudtrailRuleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_rule_arn: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchRuleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsManualConnectionResourcesEventRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsManualConnectionResourcesEventRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudtrailRuleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudtrailRuleArn = this._cloudtrailRuleArn;
    }
    if (this._cloudwatchRuleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchRuleArn = this._cloudwatchRuleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManualConnectionResourcesEventRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudtrailRuleArn = undefined;
      this._cloudwatchRuleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudtrailRuleArn = value.cloudtrailRuleArn;
      this._cloudwatchRuleArn = value.cloudwatchRuleArn;
    }
  }

  // cloudtrail_rule_arn - computed: false, optional: false, required: true
  private _cloudtrailRuleArn?: string; 
  public get cloudtrailRuleArn() {
    return this.getStringAttribute('cloudtrail_rule_arn');
  }
  public set cloudtrailRuleArn(value: string) {
    this._cloudtrailRuleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudtrailRuleArnInput() {
    return this._cloudtrailRuleArn;
  }

  // cloudwatch_rule_arn - computed: false, optional: false, required: true
  private _cloudwatchRuleArn?: string; 
  public get cloudwatchRuleArn() {
    return this.getStringAttribute('cloudwatch_rule_arn');
  }
  public set cloudwatchRuleArn(value: string) {
    this._cloudwatchRuleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchRuleArnInput() {
    return this._cloudwatchRuleArn;
  }
}
export interface AwsManualConnectionResourcesServiceRolesMssql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#ec2_ssm_instance_profile_arn AwsManualConnection#ec2_ssm_instance_profile_arn}
  */
  readonly ec2SsmInstanceProfileArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#ssm_notification_role_arn AwsManualConnection#ssm_notification_role_arn}
  */
  readonly ssmNotificationRoleArn: string;
}

export function awsManualConnectionResourcesServiceRolesMssqlToTerraform(struct?: AwsManualConnectionResourcesServiceRolesMssql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2_ssm_instance_profile_arn: cdktf.stringToTerraform(struct!.ec2SsmInstanceProfileArn),
    ssm_notification_role_arn: cdktf.stringToTerraform(struct!.ssmNotificationRoleArn),
  }
}


export function awsManualConnectionResourcesServiceRolesMssqlToHclTerraform(struct?: AwsManualConnectionResourcesServiceRolesMssql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ec2_ssm_instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.ec2SsmInstanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm_notification_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.ssmNotificationRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsManualConnectionResourcesServiceRolesMssqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsManualConnectionResourcesServiceRolesMssql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2SsmInstanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2SsmInstanceProfileArn = this._ec2SsmInstanceProfileArn;
    }
    if (this._ssmNotificationRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmNotificationRoleArn = this._ssmNotificationRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManualConnectionResourcesServiceRolesMssql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ec2SsmInstanceProfileArn = undefined;
      this._ssmNotificationRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ec2SsmInstanceProfileArn = value.ec2SsmInstanceProfileArn;
      this._ssmNotificationRoleArn = value.ssmNotificationRoleArn;
    }
  }

  // ec2_ssm_instance_profile_arn - computed: false, optional: false, required: true
  private _ec2SsmInstanceProfileArn?: string; 
  public get ec2SsmInstanceProfileArn() {
    return this.getStringAttribute('ec2_ssm_instance_profile_arn');
  }
  public set ec2SsmInstanceProfileArn(value: string) {
    this._ec2SsmInstanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2SsmInstanceProfileArnInput() {
    return this._ec2SsmInstanceProfileArn;
  }

  // ssm_notification_role_arn - computed: false, optional: false, required: true
  private _ssmNotificationRoleArn?: string; 
  public get ssmNotificationRoleArn() {
    return this.getStringAttribute('ssm_notification_role_arn');
  }
  public set ssmNotificationRoleArn(value: string) {
    this._ssmNotificationRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmNotificationRoleArnInput() {
    return this._ssmNotificationRoleArn;
  }
}
export interface AwsManualConnectionResourcesServiceRolesS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#continuous_backups_role_arn AwsManualConnection#continuous_backups_role_arn}
  */
  readonly continuousBackupsRoleArn: string;
}

export function awsManualConnectionResourcesServiceRolesS3ToTerraform(struct?: AwsManualConnectionResourcesServiceRolesS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous_backups_role_arn: cdktf.stringToTerraform(struct!.continuousBackupsRoleArn),
  }
}


export function awsManualConnectionResourcesServiceRolesS3ToHclTerraform(struct?: AwsManualConnectionResourcesServiceRolesS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous_backups_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.continuousBackupsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsManualConnectionResourcesServiceRolesS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsManualConnectionResourcesServiceRolesS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuousBackupsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousBackupsRoleArn = this._continuousBackupsRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManualConnectionResourcesServiceRolesS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continuousBackupsRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continuousBackupsRoleArn = value.continuousBackupsRoleArn;
    }
  }

  // continuous_backups_role_arn - computed: false, optional: false, required: true
  private _continuousBackupsRoleArn?: string; 
  public get continuousBackupsRoleArn() {
    return this.getStringAttribute('continuous_backups_role_arn');
  }
  public set continuousBackupsRoleArn(value: string) {
    this._continuousBackupsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousBackupsRoleArnInput() {
    return this._continuousBackupsRoleArn;
  }
}
export interface AwsManualConnectionResourcesServiceRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#mssql AwsManualConnection#mssql}
  */
  readonly mssql: AwsManualConnectionResourcesServiceRolesMssql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#s3 AwsManualConnection#s3}
  */
  readonly s3: AwsManualConnectionResourcesServiceRolesS3;
}

export function awsManualConnectionResourcesServiceRolesToTerraform(struct?: AwsManualConnectionResourcesServiceRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mssql: awsManualConnectionResourcesServiceRolesMssqlToTerraform(struct!.mssql),
    s3: awsManualConnectionResourcesServiceRolesS3ToTerraform(struct!.s3),
  }
}


export function awsManualConnectionResourcesServiceRolesToHclTerraform(struct?: AwsManualConnectionResourcesServiceRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mssql: {
      value: awsManualConnectionResourcesServiceRolesMssqlToHclTerraform(struct!.mssql),
      isBlock: true,
      type: "struct",
      storageClassType: "AwsManualConnectionResourcesServiceRolesMssql",
    },
    s3: {
      value: awsManualConnectionResourcesServiceRolesS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "AwsManualConnectionResourcesServiceRolesS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsManualConnectionResourcesServiceRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsManualConnectionResourcesServiceRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mssql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssql = this._mssql?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManualConnectionResourcesServiceRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mssql.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mssql.internalValue = value.mssql;
      this._s3.internalValue = value.s3;
    }
  }

  // mssql - computed: false, optional: false, required: true
  private _mssql = new AwsManualConnectionResourcesServiceRolesMssqlOutputReference(this, "mssql");
  public get mssql() {
    return this._mssql;
  }
  public putMssql(value: AwsManualConnectionResourcesServiceRolesMssql) {
    this._mssql.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlInput() {
    return this._mssql.internalValue;
  }

  // s3 - computed: false, optional: false, required: true
  private _s3 = new AwsManualConnectionResourcesServiceRolesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: AwsManualConnectionResourcesServiceRolesS3) {
    this._s3.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface AwsManualConnectionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#clumio_event_pub_arn AwsManualConnection#clumio_event_pub_arn}
  */
  readonly clumioEventPubArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#clumio_iam_role_arn AwsManualConnection#clumio_iam_role_arn}
  */
  readonly clumioIamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#clumio_support_role_arn AwsManualConnection#clumio_support_role_arn}
  */
  readonly clumioSupportRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#event_rules AwsManualConnection#event_rules}
  */
  readonly eventRules: AwsManualConnectionResourcesEventRules;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#service_roles AwsManualConnection#service_roles}
  */
  readonly serviceRoles: AwsManualConnectionResourcesServiceRoles;
}

export function awsManualConnectionResourcesToTerraform(struct?: AwsManualConnectionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clumio_event_pub_arn: cdktf.stringToTerraform(struct!.clumioEventPubArn),
    clumio_iam_role_arn: cdktf.stringToTerraform(struct!.clumioIamRoleArn),
    clumio_support_role_arn: cdktf.stringToTerraform(struct!.clumioSupportRoleArn),
    event_rules: awsManualConnectionResourcesEventRulesToTerraform(struct!.eventRules),
    service_roles: awsManualConnectionResourcesServiceRolesToTerraform(struct!.serviceRoles),
  }
}


export function awsManualConnectionResourcesToHclTerraform(struct?: AwsManualConnectionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clumio_event_pub_arn: {
      value: cdktf.stringToHclTerraform(struct!.clumioEventPubArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clumio_iam_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.clumioIamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clumio_support_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.clumioSupportRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_rules: {
      value: awsManualConnectionResourcesEventRulesToHclTerraform(struct!.eventRules),
      isBlock: true,
      type: "struct",
      storageClassType: "AwsManualConnectionResourcesEventRules",
    },
    service_roles: {
      value: awsManualConnectionResourcesServiceRolesToHclTerraform(struct!.serviceRoles),
      isBlock: true,
      type: "struct",
      storageClassType: "AwsManualConnectionResourcesServiceRoles",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsManualConnectionResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsManualConnectionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clumioEventPubArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clumioEventPubArn = this._clumioEventPubArn;
    }
    if (this._clumioIamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clumioIamRoleArn = this._clumioIamRoleArn;
    }
    if (this._clumioSupportRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clumioSupportRoleArn = this._clumioSupportRoleArn;
    }
    if (this._eventRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRules = this._eventRules?.internalValue;
    }
    if (this._serviceRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRoles = this._serviceRoles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsManualConnectionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clumioEventPubArn = undefined;
      this._clumioIamRoleArn = undefined;
      this._clumioSupportRoleArn = undefined;
      this._eventRules.internalValue = undefined;
      this._serviceRoles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clumioEventPubArn = value.clumioEventPubArn;
      this._clumioIamRoleArn = value.clumioIamRoleArn;
      this._clumioSupportRoleArn = value.clumioSupportRoleArn;
      this._eventRules.internalValue = value.eventRules;
      this._serviceRoles.internalValue = value.serviceRoles;
    }
  }

  // clumio_event_pub_arn - computed: false, optional: false, required: true
  private _clumioEventPubArn?: string; 
  public get clumioEventPubArn() {
    return this.getStringAttribute('clumio_event_pub_arn');
  }
  public set clumioEventPubArn(value: string) {
    this._clumioEventPubArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioEventPubArnInput() {
    return this._clumioEventPubArn;
  }

  // clumio_iam_role_arn - computed: false, optional: false, required: true
  private _clumioIamRoleArn?: string; 
  public get clumioIamRoleArn() {
    return this.getStringAttribute('clumio_iam_role_arn');
  }
  public set clumioIamRoleArn(value: string) {
    this._clumioIamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioIamRoleArnInput() {
    return this._clumioIamRoleArn;
  }

  // clumio_support_role_arn - computed: false, optional: false, required: true
  private _clumioSupportRoleArn?: string; 
  public get clumioSupportRoleArn() {
    return this.getStringAttribute('clumio_support_role_arn');
  }
  public set clumioSupportRoleArn(value: string) {
    this._clumioSupportRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioSupportRoleArnInput() {
    return this._clumioSupportRoleArn;
  }

  // event_rules - computed: false, optional: false, required: true
  private _eventRules = new AwsManualConnectionResourcesEventRulesOutputReference(this, "event_rules");
  public get eventRules() {
    return this._eventRules;
  }
  public putEventRules(value: AwsManualConnectionResourcesEventRules) {
    this._eventRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRulesInput() {
    return this._eventRules.internalValue;
  }

  // service_roles - computed: false, optional: false, required: true
  private _serviceRoles = new AwsManualConnectionResourcesServiceRolesOutputReference(this, "service_roles");
  public get serviceRoles() {
    return this._serviceRoles;
  }
  public putServiceRoles(value: AwsManualConnectionResourcesServiceRoles) {
    this._serviceRoles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRolesInput() {
    return this._serviceRoles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection clumio_aws_manual_connection}
*/
export class AwsManualConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_aws_manual_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsManualConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsManualConnection to import
  * @param importFromId The id of the existing AwsManualConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsManualConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_aws_manual_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/aws_manual_connection clumio_aws_manual_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsManualConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsManualConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_aws_manual_connection',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._assetsEnabled.internalValue = config.assetsEnabled;
    this._awsRegion = config.awsRegion;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // assets_enabled - computed: false, optional: false, required: true
  private _assetsEnabled = new AwsManualConnectionAssetsEnabledOutputReference(this, "assets_enabled");
  public get assetsEnabled() {
    return this._assetsEnabled;
  }
  public putAssetsEnabled(value: AwsManualConnectionAssetsEnabled) {
    this._assetsEnabled.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsEnabledInput() {
    return this._assetsEnabled.internalValue;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new AwsManualConnectionResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: AwsManualConnectionResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      assets_enabled: awsManualConnectionAssetsEnabledToTerraform(this._assetsEnabled.internalValue),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      resources: awsManualConnectionResourcesToTerraform(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assets_enabled: {
        value: awsManualConnectionAssetsEnabledToHclTerraform(this._assetsEnabled.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsManualConnectionAssetsEnabled",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: awsManualConnectionResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsManualConnectionResources",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
