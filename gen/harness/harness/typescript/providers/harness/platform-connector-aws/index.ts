// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#description PlatformConnectorAws#description}
  */
  readonly description?: string;
  /**
  * Enable this flag to execute on Delegate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#execute_on_delegate PlatformConnectorAws#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Enable this flag for force deletion of connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#force_delete PlatformConnectorAws#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#id PlatformConnectorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#identifier PlatformConnectorAws#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#name PlatformConnectorAws#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#org_id PlatformConnectorAws#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#project_id PlatformConnectorAws#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#tags PlatformConnectorAws#tags}
  */
  readonly tags?: string[];
  /**
  * cross_account_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#cross_account_access PlatformConnectorAws#cross_account_access}
  */
  readonly crossAccountAccess?: PlatformConnectorAwsCrossAccountAccess;
  /**
  * equal_jitter_backoff_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#equal_jitter_backoff_strategy PlatformConnectorAws#equal_jitter_backoff_strategy}
  */
  readonly equalJitterBackoffStrategy?: PlatformConnectorAwsEqualJitterBackoffStrategy;
  /**
  * fixed_delay_backoff_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#fixed_delay_backoff_strategy PlatformConnectorAws#fixed_delay_backoff_strategy}
  */
  readonly fixedDelayBackoffStrategy?: PlatformConnectorAwsFixedDelayBackoffStrategy;
  /**
  * full_jitter_backoff_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#full_jitter_backoff_strategy PlatformConnectorAws#full_jitter_backoff_strategy}
  */
  readonly fullJitterBackoffStrategy?: PlatformConnectorAwsFullJitterBackoffStrategy;
  /**
  * inherit_from_delegate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#inherit_from_delegate PlatformConnectorAws#inherit_from_delegate}
  */
  readonly inheritFromDelegate?: PlatformConnectorAwsInheritFromDelegate;
  /**
  * irsa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#irsa PlatformConnectorAws#irsa}
  */
  readonly irsa?: PlatformConnectorAwsIrsa;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#manual PlatformConnectorAws#manual}
  */
  readonly manual?: PlatformConnectorAwsManual;
  /**
  * oidc_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#oidc_authentication PlatformConnectorAws#oidc_authentication}
  */
  readonly oidcAuthentication?: PlatformConnectorAwsOidcAuthentication;
}
export interface PlatformConnectorAwsCrossAccountAccess {
  /**
  * If the administrator of the account to which the role belongs provided you with an external ID, then enter that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#external_id PlatformConnectorAws#external_id}
  */
  readonly externalId?: string;
  /**
  * The Amazon Resource Name (ARN) of the role that you want to assume. This is an IAM role in the target AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#role_arn PlatformConnectorAws#role_arn}
  */
  readonly roleArn: string;
}

export function platformConnectorAwsCrossAccountAccessToTerraform(struct?: PlatformConnectorAwsCrossAccountAccessOutputReference | PlatformConnectorAwsCrossAccountAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function platformConnectorAwsCrossAccountAccessToHclTerraform(struct?: PlatformConnectorAwsCrossAccountAccessOutputReference | PlatformConnectorAwsCrossAccountAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsCrossAccountAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsCrossAccountAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsCrossAccountAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface PlatformConnectorAwsEqualJitterBackoffStrategy {
  /**
  * Base delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#base_delay PlatformConnectorAws#base_delay}
  */
  readonly baseDelay?: number;
  /**
  * Max BackOff Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#max_backoff_time PlatformConnectorAws#max_backoff_time}
  */
  readonly maxBackoffTime?: number;
  /**
  * Retry Count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#retry_count PlatformConnectorAws#retry_count}
  */
  readonly retryCount?: number;
}

export function platformConnectorAwsEqualJitterBackoffStrategyToTerraform(struct?: PlatformConnectorAwsEqualJitterBackoffStrategyOutputReference | PlatformConnectorAwsEqualJitterBackoffStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_delay: cdktf.numberToTerraform(struct!.baseDelay),
    max_backoff_time: cdktf.numberToTerraform(struct!.maxBackoffTime),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
  }
}


export function platformConnectorAwsEqualJitterBackoffStrategyToHclTerraform(struct?: PlatformConnectorAwsEqualJitterBackoffStrategyOutputReference | PlatformConnectorAwsEqualJitterBackoffStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_delay: {
      value: cdktf.numberToHclTerraform(struct!.baseDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backoff_time: {
      value: cdktf.numberToHclTerraform(struct!.maxBackoffTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsEqualJitterBackoffStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsEqualJitterBackoffStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDelay = this._baseDelay;
    }
    if (this._maxBackoffTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoffTime = this._maxBackoffTime;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsEqualJitterBackoffStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseDelay = undefined;
      this._maxBackoffTime = undefined;
      this._retryCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseDelay = value.baseDelay;
      this._maxBackoffTime = value.maxBackoffTime;
      this._retryCount = value.retryCount;
    }
  }

  // base_delay - computed: false, optional: true, required: false
  private _baseDelay?: number; 
  public get baseDelay() {
    return this.getNumberAttribute('base_delay');
  }
  public set baseDelay(value: number) {
    this._baseDelay = value;
  }
  public resetBaseDelay() {
    this._baseDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDelayInput() {
    return this._baseDelay;
  }

  // max_backoff_time - computed: false, optional: true, required: false
  private _maxBackoffTime?: number; 
  public get maxBackoffTime() {
    return this.getNumberAttribute('max_backoff_time');
  }
  public set maxBackoffTime(value: number) {
    this._maxBackoffTime = value;
  }
  public resetMaxBackoffTime() {
    this._maxBackoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffTimeInput() {
    return this._maxBackoffTime;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }
}
export interface PlatformConnectorAwsFixedDelayBackoffStrategy {
  /**
  * Fixed Backoff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#fixed_backoff PlatformConnectorAws#fixed_backoff}
  */
  readonly fixedBackoff?: number;
  /**
  * Retry Count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#retry_count PlatformConnectorAws#retry_count}
  */
  readonly retryCount?: number;
}

export function platformConnectorAwsFixedDelayBackoffStrategyToTerraform(struct?: PlatformConnectorAwsFixedDelayBackoffStrategyOutputReference | PlatformConnectorAwsFixedDelayBackoffStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_backoff: cdktf.numberToTerraform(struct!.fixedBackoff),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
  }
}


export function platformConnectorAwsFixedDelayBackoffStrategyToHclTerraform(struct?: PlatformConnectorAwsFixedDelayBackoffStrategyOutputReference | PlatformConnectorAwsFixedDelayBackoffStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_backoff: {
      value: cdktf.numberToHclTerraform(struct!.fixedBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsFixedDelayBackoffStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsFixedDelayBackoffStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedBackoff = this._fixedBackoff;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsFixedDelayBackoffStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedBackoff = undefined;
      this._retryCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedBackoff = value.fixedBackoff;
      this._retryCount = value.retryCount;
    }
  }

  // fixed_backoff - computed: false, optional: true, required: false
  private _fixedBackoff?: number; 
  public get fixedBackoff() {
    return this.getNumberAttribute('fixed_backoff');
  }
  public set fixedBackoff(value: number) {
    this._fixedBackoff = value;
  }
  public resetFixedBackoff() {
    this._fixedBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedBackoffInput() {
    return this._fixedBackoff;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }
}
export interface PlatformConnectorAwsFullJitterBackoffStrategy {
  /**
  * Base delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#base_delay PlatformConnectorAws#base_delay}
  */
  readonly baseDelay?: number;
  /**
  * Max BackOff Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#max_backoff_time PlatformConnectorAws#max_backoff_time}
  */
  readonly maxBackoffTime?: number;
  /**
  * Retry Count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#retry_count PlatformConnectorAws#retry_count}
  */
  readonly retryCount?: number;
}

export function platformConnectorAwsFullJitterBackoffStrategyToTerraform(struct?: PlatformConnectorAwsFullJitterBackoffStrategyOutputReference | PlatformConnectorAwsFullJitterBackoffStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_delay: cdktf.numberToTerraform(struct!.baseDelay),
    max_backoff_time: cdktf.numberToTerraform(struct!.maxBackoffTime),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
  }
}


export function platformConnectorAwsFullJitterBackoffStrategyToHclTerraform(struct?: PlatformConnectorAwsFullJitterBackoffStrategyOutputReference | PlatformConnectorAwsFullJitterBackoffStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_delay: {
      value: cdktf.numberToHclTerraform(struct!.baseDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backoff_time: {
      value: cdktf.numberToHclTerraform(struct!.maxBackoffTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsFullJitterBackoffStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsFullJitterBackoffStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDelay = this._baseDelay;
    }
    if (this._maxBackoffTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoffTime = this._maxBackoffTime;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsFullJitterBackoffStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseDelay = undefined;
      this._maxBackoffTime = undefined;
      this._retryCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseDelay = value.baseDelay;
      this._maxBackoffTime = value.maxBackoffTime;
      this._retryCount = value.retryCount;
    }
  }

  // base_delay - computed: false, optional: true, required: false
  private _baseDelay?: number; 
  public get baseDelay() {
    return this.getNumberAttribute('base_delay');
  }
  public set baseDelay(value: number) {
    this._baseDelay = value;
  }
  public resetBaseDelay() {
    this._baseDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDelayInput() {
    return this._baseDelay;
  }

  // max_backoff_time - computed: false, optional: true, required: false
  private _maxBackoffTime?: number; 
  public get maxBackoffTime() {
    return this.getNumberAttribute('max_backoff_time');
  }
  public set maxBackoffTime(value: number) {
    this._maxBackoffTime = value;
  }
  public resetMaxBackoffTime() {
    this._maxBackoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffTimeInput() {
    return this._maxBackoffTime;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }
}
export interface PlatformConnectorAwsInheritFromDelegate {
  /**
  * The delegates to inherit the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#delegate_selectors PlatformConnectorAws#delegate_selectors}
  */
  readonly delegateSelectors: string[];
  /**
  * Test Region to perform Connection test of AWS Connector To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#region PlatformConnectorAws#region}
  */
  readonly region?: string;
}

export function platformConnectorAwsInheritFromDelegateToTerraform(struct?: PlatformConnectorAwsInheritFromDelegateOutputReference | PlatformConnectorAwsInheritFromDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function platformConnectorAwsInheritFromDelegateToHclTerraform(struct?: PlatformConnectorAwsInheritFromDelegateOutputReference | PlatformConnectorAwsInheritFromDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsInheritFromDelegateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsInheritFromDelegate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsInheritFromDelegate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delegateSelectors = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delegateSelectors = value.delegateSelectors;
      this._region = value.region;
    }
  }

  // delegate_selectors - computed: false, optional: false, required: true
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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
}
export interface PlatformConnectorAwsIrsa {
  /**
  * The delegates to inherit the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#delegate_selectors PlatformConnectorAws#delegate_selectors}
  */
  readonly delegateSelectors: string[];
  /**
  * Test Region to perform Connection test of AWS Connector To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#region PlatformConnectorAws#region}
  */
  readonly region?: string;
}

export function platformConnectorAwsIrsaToTerraform(struct?: PlatformConnectorAwsIrsaOutputReference | PlatformConnectorAwsIrsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function platformConnectorAwsIrsaToHclTerraform(struct?: PlatformConnectorAwsIrsaOutputReference | PlatformConnectorAwsIrsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsIrsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsIrsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsIrsa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delegateSelectors = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delegateSelectors = value.delegateSelectors;
      this._region = value.region;
    }
  }

  // delegate_selectors - computed: false, optional: false, required: true
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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
}
export interface PlatformConnectorAwsManual {
  /**
  * AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#access_key PlatformConnectorAws#access_key}
  */
  readonly accessKey?: string;
  /**
  * Reference to the Harness secret containing the aws access key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#access_key_ref PlatformConnectorAws#access_key_ref}
  */
  readonly accessKeyRef?: string;
  /**
  * Connect only use delegates with these tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#delegate_selectors PlatformConnectorAws#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Test Region to perform Connection test of AWS Connector To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#region PlatformConnectorAws#region}
  */
  readonly region?: string;
  /**
  * Reference to the Harness secret containing the aws secret key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#secret_key_ref PlatformConnectorAws#secret_key_ref}
  */
  readonly secretKeyRef: string;
  /**
  * Reference to the Harness secret containing the aws session token. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#session_token_ref PlatformConnectorAws#session_token_ref}
  */
  readonly sessionTokenRef?: string;
}

export function platformConnectorAwsManualToTerraform(struct?: PlatformConnectorAwsManualOutputReference | PlatformConnectorAwsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    access_key_ref: cdktf.stringToTerraform(struct!.accessKeyRef),
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key_ref: cdktf.stringToTerraform(struct!.secretKeyRef),
    session_token_ref: cdktf.stringToTerraform(struct!.sessionTokenRef),
  }
}


export function platformConnectorAwsManualToHclTerraform(struct?: PlatformConnectorAwsManualOutputReference | PlatformConnectorAwsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_token_ref: {
      value: cdktf.stringToHclTerraform(struct!.sessionTokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyRef = this._accessKeyRef;
    }
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef;
    }
    if (this._sessionTokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTokenRef = this._sessionTokenRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accessKeyRef = undefined;
      this._delegateSelectors = undefined;
      this._region = undefined;
      this._secretKeyRef = undefined;
      this._sessionTokenRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accessKeyRef = value.accessKeyRef;
      this._delegateSelectors = value.delegateSelectors;
      this._region = value.region;
      this._secretKeyRef = value.secretKeyRef;
      this._sessionTokenRef = value.sessionTokenRef;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_key_ref - computed: false, optional: true, required: false
  private _accessKeyRef?: string; 
  public get accessKeyRef() {
    return this.getStringAttribute('access_key_ref');
  }
  public set accessKeyRef(value: string) {
    this._accessKeyRef = value;
  }
  public resetAccessKeyRef() {
    this._accessKeyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyRefInput() {
    return this._accessKeyRef;
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef?: string; 
  public get secretKeyRef() {
    return this.getStringAttribute('secret_key_ref');
  }
  public set secretKeyRef(value: string) {
    this._secretKeyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef;
  }

  // session_token_ref - computed: false, optional: true, required: false
  private _sessionTokenRef?: string; 
  public get sessionTokenRef() {
    return this.getStringAttribute('session_token_ref');
  }
  public set sessionTokenRef(value: string) {
    this._sessionTokenRef = value;
  }
  public resetSessionTokenRef() {
    this._sessionTokenRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenRefInput() {
    return this._sessionTokenRef;
  }
}
export interface PlatformConnectorAwsOidcAuthentication {
  /**
  * The delegates to inherit the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#delegate_selectors PlatformConnectorAws#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * The IAM Role to assume the credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#iam_role_arn PlatformConnectorAws#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Test Region to perform Connection test of AWS Connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#region PlatformConnectorAws#region}
  */
  readonly region?: string;
}

export function platformConnectorAwsOidcAuthenticationToTerraform(struct?: PlatformConnectorAwsOidcAuthenticationOutputReference | PlatformConnectorAwsOidcAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function platformConnectorAwsOidcAuthenticationToHclTerraform(struct?: PlatformConnectorAwsOidcAuthenticationOutputReference | PlatformConnectorAwsOidcAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    iam_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.iamRoleArn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsOidcAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsOidcAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsOidcAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delegateSelectors = undefined;
      this._iamRoleArn = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delegateSelectors = value.delegateSelectors;
      this._iamRoleArn = value.iamRoleArn;
      this._region = value.region;
    }
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws harness_platform_connector_aws}
*/
export class PlatformConnectorAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorAws to import
  * @param importFromId The id of the existing PlatformConnectorAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_connector_aws harness_platform_connector_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorAwsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_aws',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
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
    this._executeOnDelegate = config.executeOnDelegate;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._crossAccountAccess.internalValue = config.crossAccountAccess;
    this._equalJitterBackoffStrategy.internalValue = config.equalJitterBackoffStrategy;
    this._fixedDelayBackoffStrategy.internalValue = config.fixedDelayBackoffStrategy;
    this._fullJitterBackoffStrategy.internalValue = config.fullJitterBackoffStrategy;
    this._inheritFromDelegate.internalValue = config.inheritFromDelegate;
    this._irsa.internalValue = config.irsa;
    this._manual.internalValue = config.manual;
    this._oidcAuthentication.internalValue = config.oidcAuthentication;
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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
  }

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // cross_account_access - computed: false, optional: true, required: false
  private _crossAccountAccess = new PlatformConnectorAwsCrossAccountAccessOutputReference(this, "cross_account_access");
  public get crossAccountAccess() {
    return this._crossAccountAccess;
  }
  public putCrossAccountAccess(value: PlatformConnectorAwsCrossAccountAccess) {
    this._crossAccountAccess.internalValue = value;
  }
  public resetCrossAccountAccess() {
    this._crossAccountAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountAccessInput() {
    return this._crossAccountAccess.internalValue;
  }

  // equal_jitter_backoff_strategy - computed: false, optional: true, required: false
  private _equalJitterBackoffStrategy = new PlatformConnectorAwsEqualJitterBackoffStrategyOutputReference(this, "equal_jitter_backoff_strategy");
  public get equalJitterBackoffStrategy() {
    return this._equalJitterBackoffStrategy;
  }
  public putEqualJitterBackoffStrategy(value: PlatformConnectorAwsEqualJitterBackoffStrategy) {
    this._equalJitterBackoffStrategy.internalValue = value;
  }
  public resetEqualJitterBackoffStrategy() {
    this._equalJitterBackoffStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalJitterBackoffStrategyInput() {
    return this._equalJitterBackoffStrategy.internalValue;
  }

  // fixed_delay_backoff_strategy - computed: false, optional: true, required: false
  private _fixedDelayBackoffStrategy = new PlatformConnectorAwsFixedDelayBackoffStrategyOutputReference(this, "fixed_delay_backoff_strategy");
  public get fixedDelayBackoffStrategy() {
    return this._fixedDelayBackoffStrategy;
  }
  public putFixedDelayBackoffStrategy(value: PlatformConnectorAwsFixedDelayBackoffStrategy) {
    this._fixedDelayBackoffStrategy.internalValue = value;
  }
  public resetFixedDelayBackoffStrategy() {
    this._fixedDelayBackoffStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayBackoffStrategyInput() {
    return this._fixedDelayBackoffStrategy.internalValue;
  }

  // full_jitter_backoff_strategy - computed: false, optional: true, required: false
  private _fullJitterBackoffStrategy = new PlatformConnectorAwsFullJitterBackoffStrategyOutputReference(this, "full_jitter_backoff_strategy");
  public get fullJitterBackoffStrategy() {
    return this._fullJitterBackoffStrategy;
  }
  public putFullJitterBackoffStrategy(value: PlatformConnectorAwsFullJitterBackoffStrategy) {
    this._fullJitterBackoffStrategy.internalValue = value;
  }
  public resetFullJitterBackoffStrategy() {
    this._fullJitterBackoffStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullJitterBackoffStrategyInput() {
    return this._fullJitterBackoffStrategy.internalValue;
  }

  // inherit_from_delegate - computed: false, optional: true, required: false
  private _inheritFromDelegate = new PlatformConnectorAwsInheritFromDelegateOutputReference(this, "inherit_from_delegate");
  public get inheritFromDelegate() {
    return this._inheritFromDelegate;
  }
  public putInheritFromDelegate(value: PlatformConnectorAwsInheritFromDelegate) {
    this._inheritFromDelegate.internalValue = value;
  }
  public resetInheritFromDelegate() {
    this._inheritFromDelegate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromDelegateInput() {
    return this._inheritFromDelegate.internalValue;
  }

  // irsa - computed: false, optional: true, required: false
  private _irsa = new PlatformConnectorAwsIrsaOutputReference(this, "irsa");
  public get irsa() {
    return this._irsa;
  }
  public putIrsa(value: PlatformConnectorAwsIrsa) {
    this._irsa.internalValue = value;
  }
  public resetIrsa() {
    this._irsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get irsaInput() {
    return this._irsa.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new PlatformConnectorAwsManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: PlatformConnectorAwsManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // oidc_authentication - computed: false, optional: true, required: false
  private _oidcAuthentication = new PlatformConnectorAwsOidcAuthenticationOutputReference(this, "oidc_authentication");
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: PlatformConnectorAwsOidcAuthentication) {
    this._oidcAuthentication.internalValue = value;
  }
  public resetOidcAuthentication() {
    this._oidcAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthenticationInput() {
    return this._oidcAuthentication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      cross_account_access: platformConnectorAwsCrossAccountAccessToTerraform(this._crossAccountAccess.internalValue),
      equal_jitter_backoff_strategy: platformConnectorAwsEqualJitterBackoffStrategyToTerraform(this._equalJitterBackoffStrategy.internalValue),
      fixed_delay_backoff_strategy: platformConnectorAwsFixedDelayBackoffStrategyToTerraform(this._fixedDelayBackoffStrategy.internalValue),
      full_jitter_backoff_strategy: platformConnectorAwsFullJitterBackoffStrategyToTerraform(this._fullJitterBackoffStrategy.internalValue),
      inherit_from_delegate: platformConnectorAwsInheritFromDelegateToTerraform(this._inheritFromDelegate.internalValue),
      irsa: platformConnectorAwsIrsaToTerraform(this._irsa.internalValue),
      manual: platformConnectorAwsManualToTerraform(this._manual.internalValue),
      oidc_authentication: platformConnectorAwsOidcAuthenticationToTerraform(this._oidcAuthentication.internalValue),
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
      execute_on_delegate: {
        value: cdktf.booleanToHclTerraform(this._executeOnDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cross_account_access: {
        value: platformConnectorAwsCrossAccountAccessToHclTerraform(this._crossAccountAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsCrossAccountAccessList",
      },
      equal_jitter_backoff_strategy: {
        value: platformConnectorAwsEqualJitterBackoffStrategyToHclTerraform(this._equalJitterBackoffStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsEqualJitterBackoffStrategyList",
      },
      fixed_delay_backoff_strategy: {
        value: platformConnectorAwsFixedDelayBackoffStrategyToHclTerraform(this._fixedDelayBackoffStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsFixedDelayBackoffStrategyList",
      },
      full_jitter_backoff_strategy: {
        value: platformConnectorAwsFullJitterBackoffStrategyToHclTerraform(this._fullJitterBackoffStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsFullJitterBackoffStrategyList",
      },
      inherit_from_delegate: {
        value: platformConnectorAwsInheritFromDelegateToHclTerraform(this._inheritFromDelegate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsInheritFromDelegateList",
      },
      irsa: {
        value: platformConnectorAwsIrsaToHclTerraform(this._irsa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsIrsaList",
      },
      manual: {
        value: platformConnectorAwsManualToHclTerraform(this._manual.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsManualList",
      },
      oidc_authentication: {
        value: platformConnectorAwsOidcAuthenticationToHclTerraform(this._oidcAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsOidcAuthenticationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
