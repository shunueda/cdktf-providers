// https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CourierAlbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#address CourierAlb#address}
  */
  readonly address?: string;
  /**
  * HttpHeaderConfig values of ALB listener rule condition "http-header" field.
  * 
  * Example:
  * 
  * headers = {
  *  Cookie = "condition=foobar"
  * }
  * 
  * produces:
  * 
  * [
  *   {
  *       "Field": "http-header",
  *       "HttpHeaderConfig": {
  *           "HttpHeaderName": "Cookie",
  *           "Values": ["condition=foobar"]
  *       }
  *   }
  * ]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#headers CourierAlb#headers}
  */
  readonly headers?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * ALB listener rule condition values for host-header condition, e.g. hosts = ["example.com", "*.example.com"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#hosts CourierAlb#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#id CourierAlb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#listener_arn CourierAlb#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * ALB listener rule condition values for http-request-method condition, e.g. methods = ["get"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#methods CourierAlb#methods}
  */
  readonly methods?: string[];
  /**
  * 
  * PAthPatternConfig values of ALB listener rule condition "path-pattern" field.
  * 
  * Example:
  * 
  * path_patterns = ["/prefix/*"]
  * 
  * produces:
  * 
  * [
  *   {
  *       "Field": "path-pattern",
  *       "PathPatternConfig": {
  *           "Values": ["/prefix/*"]
  *       }
  *   }
  * ]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#path_patterns CourierAlb#path_patterns}
  */
  readonly pathPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#priority CourierAlb#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#profile CourierAlb#profile}
  */
  readonly profile?: string;
  /**
  * QueryStringConfig values of ALB listener rule condition "query-string" field.
  * 
  * Example:
  * 
  * querystrings = {
  *  foo = "bar"
  * }
  * 
  * produces:
  * 
  * {
  *      "Field": "query-string",
  *      "QueryStringConfig": {
  *          "Values": [
  *            {
  *                "Key": "foo",
  *                "Value": "bar"
  *            }
  *          ]
  *      }
  *  }
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#querystrings CourierAlb#querystrings}
  */
  readonly querystrings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#region CourierAlb#region}
  */
  readonly region?: string;
  /**
  * 
  * SourceIpConfig values of ALB listener rule condition "source-ip" field.
  * 
  * Example:
  * 
  * headers = ["MYIPD/CIDR"]
  * 
  * produces:
  * 
  * [
  *   {
  *       "Field": "source-ip",
  *       "SourceIpConfig": {
  *           "Values": ["MYIP/CIDR"]
  *       }
  *   }
  * ]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#source_ips CourierAlb#source_ips}
  */
  readonly sourceIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#step_interval CourierAlb#step_interval}
  */
  readonly stepInterval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#step_weight CourierAlb#step_weight}
  */
  readonly stepWeight: number;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#assume_role CourierAlb#assume_role}
  */
  readonly assumeRole?: CourierAlbAssumeRole;
  /**
  * cloudwatch_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#cloudwatch_metric CourierAlb#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: CourierAlbCloudwatchMetric[] | cdktf.IResolvable;
  /**
  * datadog_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#datadog_metric CourierAlb#datadog_metric}
  */
  readonly datadogMetric?: CourierAlbDatadogMetric[] | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#destination CourierAlb#destination}
  */
  readonly destination?: CourierAlbDestination[] | cdktf.IResolvable;
}
export interface CourierAlbAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#duration_seconds CourierAlb#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#external_id CourierAlb#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#policy CourierAlb#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#policy_arns CourierAlb#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#role_arn CourierAlb#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#session_name CourierAlb#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#tags CourierAlb#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#transitive_tag_keys CourierAlb#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function courierAlbAssumeRoleToTerraform(struct?: CourierAlbAssumeRoleOutputReference | CourierAlbAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


export function courierAlbAssumeRoleToHclTerraform(struct?: CourierAlbAssumeRoleOutputReference | CourierAlbAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transitive_tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transitiveTagKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CourierAlbAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CourierAlbAssumeRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._policyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyArns = this._policyArns;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._transitiveTagKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitiveTagKeys = this._transitiveTagKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CourierAlbAssumeRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationSeconds = undefined;
      this._externalId = undefined;
      this._policy = undefined;
      this._policyArns = undefined;
      this._roleArn = undefined;
      this._sessionName = undefined;
      this._tags = undefined;
      this._transitiveTagKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationSeconds = value.durationSeconds;
      this._externalId = value.externalId;
      this._policy = value.policy;
      this._policyArns = value.policyArns;
      this._roleArn = value.roleArn;
      this._sessionName = value.sessionName;
      this._tags = value.tags;
      this._transitiveTagKeys = value.transitiveTagKeys;
    }
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_arns - computed: false, optional: true, required: false
  private _policyArns?: string[]; 
  public get policyArns() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_arns'));
  }
  public set policyArns(value: string[]) {
    this._policyArns = value;
  }
  public resetPolicyArns() {
    this._policyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns;
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

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
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

  // transitive_tag_keys - computed: false, optional: true, required: false
  private _transitiveTagKeys?: string[]; 
  public get transitiveTagKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('transitive_tag_keys'));
  }
  public set transitiveTagKeys(value: string[]) {
    this._transitiveTagKeys = value;
  }
  public resetTransitiveTagKeys() {
    this._transitiveTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitiveTagKeysInput() {
    return this._transitiveTagKeys;
  }
}
export interface CourierAlbCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#address CourierAlb#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#aws_profile CourierAlb#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#aws_region CourierAlb#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#interval CourierAlb#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#max CourierAlb#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#min CourierAlb#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#name CourierAlb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#query CourierAlb#query}
  */
  readonly query: string;
}

export function courierAlbCloudwatchMetricToTerraform(struct?: CourierAlbCloudwatchMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    aws_profile: cdktf.stringToTerraform(struct!.awsProfile),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    interval: cdktf.stringToTerraform(struct!.interval),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function courierAlbCloudwatchMetricToHclTerraform(struct?: CourierAlbCloudwatchMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_profile: {
      value: cdktf.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CourierAlbCloudwatchMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CourierAlbCloudwatchMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._awsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsProfile = this._awsProfile;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CourierAlbCloudwatchMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._awsProfile = undefined;
      this._awsRegion = undefined;
      this._interval = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._awsProfile = value.awsProfile;
      this._awsRegion = value.awsRegion;
      this._interval = value.interval;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile?: string; 
  public get awsProfile() {
    return this.getStringAttribute('aws_profile');
  }
  public set awsProfile(value: string) {
    this._awsProfile = value;
  }
  public resetAwsProfile() {
    this._awsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
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

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class CourierAlbCloudwatchMetricList extends cdktf.ComplexList {
  public internalValue? : CourierAlbCloudwatchMetric[] | cdktf.IResolvable

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
  public get(index: number): CourierAlbCloudwatchMetricOutputReference {
    return new CourierAlbCloudwatchMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CourierAlbDatadogMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#address CourierAlb#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#aws_profile CourierAlb#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#aws_region CourierAlb#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#interval CourierAlb#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#max CourierAlb#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#min CourierAlb#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#name CourierAlb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#query CourierAlb#query}
  */
  readonly query: string;
}

export function courierAlbDatadogMetricToTerraform(struct?: CourierAlbDatadogMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    aws_profile: cdktf.stringToTerraform(struct!.awsProfile),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    interval: cdktf.stringToTerraform(struct!.interval),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function courierAlbDatadogMetricToHclTerraform(struct?: CourierAlbDatadogMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_profile: {
      value: cdktf.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CourierAlbDatadogMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CourierAlbDatadogMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._awsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsProfile = this._awsProfile;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CourierAlbDatadogMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._awsProfile = undefined;
      this._awsRegion = undefined;
      this._interval = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._awsProfile = value.awsProfile;
      this._awsRegion = value.awsRegion;
      this._interval = value.interval;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile?: string; 
  public get awsProfile() {
    return this.getStringAttribute('aws_profile');
  }
  public set awsProfile(value: string) {
    this._awsProfile = value;
  }
  public resetAwsProfile() {
    this._awsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
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

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class CourierAlbDatadogMetricList extends cdktf.ComplexList {
  public internalValue? : CourierAlbDatadogMetric[] | cdktf.IResolvable

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
  public get(index: number): CourierAlbDatadogMetricOutputReference {
    return new CourierAlbDatadogMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CourierAlbDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#target_group_arn CourierAlb#target_group_arn}
  */
  readonly targetGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#weight CourierAlb#weight}
  */
  readonly weight: number;
}

export function courierAlbDestinationToTerraform(struct?: CourierAlbDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function courierAlbDestinationToHclTerraform(struct?: CourierAlbDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CourierAlbDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CourierAlbDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CourierAlbDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetGroupArn = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetGroupArn = value.targetGroupArn;
      this._weight = value.weight;
    }
  }

  // target_group_arn - computed: false, optional: false, required: true
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class CourierAlbDestinationList extends cdktf.ComplexList {
  public internalValue? : CourierAlbDestination[] | cdktf.IResolvable

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
  public get(index: number): CourierAlbDestinationOutputReference {
    return new CourierAlbDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb eksctl_courier_alb}
*/
export class CourierAlb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eksctl_courier_alb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CourierAlb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CourierAlb to import
  * @param importFromId The id of the existing CourierAlb that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CourierAlb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eksctl_courier_alb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/courier_alb eksctl_courier_alb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CourierAlbConfig
  */
  public constructor(scope: Construct, id: string, config: CourierAlbConfig) {
    super(scope, id, {
      terraformResourceType: 'eksctl_courier_alb',
      terraformGeneratorMetadata: {
        providerName: 'eksctl',
        providerVersion: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._headers = config.headers;
    this._hosts = config.hosts;
    this._id = config.id;
    this._listenerArn = config.listenerArn;
    this._methods = config.methods;
    this._pathPatterns = config.pathPatterns;
    this._priority = config.priority;
    this._profile = config.profile;
    this._querystrings = config.querystrings;
    this._region = config.region;
    this._sourceIps = config.sourceIps;
    this._stepInterval = config.stepInterval;
    this._stepWeight = config.stepWeight;
    this._assumeRole.internalValue = config.assumeRole;
    this._cloudwatchMetric.internalValue = config.cloudwatchMetric;
    this._datadogMetric.internalValue = config.datadogMetric;
    this._destination.internalValue = config.destination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get headers() {
    return this.interpolationForAttribute('headers');
  }
  public set headers(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path_patterns - computed: false, optional: true, required: false
  private _pathPatterns?: string[]; 
  public get pathPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('path_patterns'));
  }
  public set pathPatterns(value: string[]) {
    this._pathPatterns = value;
  }
  public resetPathPatterns() {
    this._pathPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternsInput() {
    return this._pathPatterns;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // querystrings - computed: false, optional: true, required: false
  private _querystrings?: { [key: string]: string }; 
  public get querystrings() {
    return this.getStringMapAttribute('querystrings');
  }
  public set querystrings(value: { [key: string]: string }) {
    this._querystrings = value;
  }
  public resetQuerystrings() {
    this._querystrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querystringsInput() {
    return this._querystrings;
  }

  // region - computed: false, optional: true, required: false
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

  // source_ips - computed: false, optional: true, required: false
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  public resetSourceIps() {
    this._sourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }

  // step_interval - computed: false, optional: false, required: true
  private _stepInterval?: string; 
  public get stepInterval() {
    return this.getStringAttribute('step_interval');
  }
  public set stepInterval(value: string) {
    this._stepInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepIntervalInput() {
    return this._stepInterval;
  }

  // step_weight - computed: false, optional: false, required: true
  private _stepWeight?: number; 
  public get stepWeight() {
    return this.getNumberAttribute('step_weight');
  }
  public set stepWeight(value: number) {
    this._stepWeight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepWeightInput() {
    return this._stepWeight;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole = new CourierAlbAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: CourierAlbAssumeRole) {
    this._assumeRole.internalValue = value;
  }
  public resetAssumeRole() {
    this._assumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole.internalValue;
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric = new CourierAlbCloudwatchMetricList(this, "cloudwatch_metric", false);
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public putCloudwatchMetric(value: CourierAlbCloudwatchMetric[] | cdktf.IResolvable) {
    this._cloudwatchMetric.internalValue = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric.internalValue;
  }

  // datadog_metric - computed: false, optional: true, required: false
  private _datadogMetric = new CourierAlbDatadogMetricList(this, "datadog_metric", false);
  public get datadogMetric() {
    return this._datadogMetric;
  }
  public putDatadogMetric(value: CourierAlbDatadogMetric[] | cdktf.IResolvable) {
    this._datadogMetric.internalValue = value;
  }
  public resetDatadogMetric() {
    this._datadogMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogMetricInput() {
    return this._datadogMetric.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new CourierAlbDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: CourierAlbDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._headers),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
      methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._methods),
      path_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pathPatterns),
      priority: cdktf.numberToTerraform(this._priority),
      profile: cdktf.stringToTerraform(this._profile),
      querystrings: cdktf.hashMapper(cdktf.stringToTerraform)(this._querystrings),
      region: cdktf.stringToTerraform(this._region),
      source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIps),
      step_interval: cdktf.stringToTerraform(this._stepInterval),
      step_weight: cdktf.numberToTerraform(this._stepWeight),
      assume_role: courierAlbAssumeRoleToTerraform(this._assumeRole.internalValue),
      cloudwatch_metric: cdktf.listMapper(courierAlbCloudwatchMetricToTerraform, true)(this._cloudwatchMetric.internalValue),
      datadog_metric: cdktf.listMapper(courierAlbDatadogMetricToTerraform, true)(this._datadogMetric.internalValue),
      destination: cdktf.listMapper(courierAlbDestinationToTerraform, true)(this._destination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_arn: {
        value: cdktf.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      path_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pathPatterns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      querystrings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._querystrings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      step_interval: {
        value: cdktf.stringToHclTerraform(this._stepInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      step_weight: {
        value: cdktf.numberToHclTerraform(this._stepWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assume_role: {
        value: courierAlbAssumeRoleToHclTerraform(this._assumeRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CourierAlbAssumeRoleList",
      },
      cloudwatch_metric: {
        value: cdktf.listMapperHcl(courierAlbCloudwatchMetricToHclTerraform, true)(this._cloudwatchMetric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CourierAlbCloudwatchMetricList",
      },
      datadog_metric: {
        value: cdktf.listMapperHcl(courierAlbDatadogMetricToHclTerraform, true)(this._datadogMetric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CourierAlbDatadogMetricList",
      },
      destination: {
        value: cdktf.listMapperHcl(courierAlbDestinationToHclTerraform, true)(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CourierAlbDestinationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
