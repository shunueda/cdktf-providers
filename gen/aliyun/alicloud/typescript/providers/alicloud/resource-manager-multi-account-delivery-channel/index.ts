// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerMultiAccountDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#delivery_channel_description ResourceManagerMultiAccountDeliveryChannel#delivery_channel_description}
  */
  readonly deliveryChannelDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#id ResourceManagerMultiAccountDeliveryChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#multi_account_delivery_channel_name ResourceManagerMultiAccountDeliveryChannel#multi_account_delivery_channel_name}
  */
  readonly multiAccountDeliveryChannelName: string;
  /**
  * delivery_channel_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#delivery_channel_filter ResourceManagerMultiAccountDeliveryChannel#delivery_channel_filter}
  */
  readonly deliveryChannelFilter: ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilter;
  /**
  * resource_change_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#resource_change_delivery ResourceManagerMultiAccountDeliveryChannel#resource_change_delivery}
  */
  readonly resourceChangeDelivery?: ResourceManagerMultiAccountDeliveryChannelResourceChangeDelivery;
  /**
  * resource_snapshot_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#resource_snapshot_delivery ResourceManagerMultiAccountDeliveryChannel#resource_snapshot_delivery}
  */
  readonly resourceSnapshotDelivery?: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDelivery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#timeouts ResourceManagerMultiAccountDeliveryChannel#timeouts}
  */
  readonly timeouts?: ResourceManagerMultiAccountDeliveryChannelTimeouts;
}
export interface ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#account_scopes ResourceManagerMultiAccountDeliveryChannel#account_scopes}
  */
  readonly accountScopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#resource_types ResourceManagerMultiAccountDeliveryChannel#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function resourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterToTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterOutputReference | ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountScopes),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function resourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterToHclTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterOutputReference | ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountScopes = this._accountScopes;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountScopes = undefined;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountScopes = value.accountScopes;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // account_scopes - computed: false, optional: false, required: true
  private _accountScopes?: string[]; 
  public get accountScopes() {
    return this.getListAttribute('account_scopes');
  }
  public set accountScopes(value: string[]) {
    this._accountScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountScopesInput() {
    return this._accountScopes;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#oversized_data_oss_target_arn ResourceManagerMultiAccountDeliveryChannel#oversized_data_oss_target_arn}
  */
  readonly oversizedDataOssTargetArn?: string;
}

export function resourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesToTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_data_oss_target_arn: cdktf.stringToTerraform(struct!.oversizedDataOssTargetArn),
  }
}


export function resourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesToHclTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oversized_data_oss_target_arn: {
      value: cdktf.stringToHclTerraform(struct!.oversizedDataOssTargetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizedDataOssTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedDataOssTargetArn = this._oversizedDataOssTargetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizedDataOssTargetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizedDataOssTargetArn = value.oversizedDataOssTargetArn;
    }
  }

  // oversized_data_oss_target_arn - computed: false, optional: true, required: false
  private _oversizedDataOssTargetArn?: string; 
  public get oversizedDataOssTargetArn() {
    return this.getStringAttribute('oversized_data_oss_target_arn');
  }
  public set oversizedDataOssTargetArn(value: string) {
    this._oversizedDataOssTargetArn = value;
  }
  public resetOversizedDataOssTargetArn() {
    this._oversizedDataOssTargetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedDataOssTargetArnInput() {
    return this._oversizedDataOssTargetArn;
  }
}
export interface ResourceManagerMultiAccountDeliveryChannelResourceChangeDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#enabled ResourceManagerMultiAccountDeliveryChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#target_arn ResourceManagerMultiAccountDeliveryChannel#target_arn}
  */
  readonly targetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#target_type ResourceManagerMultiAccountDeliveryChannel#target_type}
  */
  readonly targetType?: string;
  /**
  * sls_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#sls_properties ResourceManagerMultiAccountDeliveryChannel#sls_properties}
  */
  readonly slsProperties?: ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsProperties;
}

export function resourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryToTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceChangeDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    sls_properties: resourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesToTerraform(struct!.slsProperties),
  }
}


export function resourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryToHclTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceChangeDelivery): any {
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
    target_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_properties: {
      value: resourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesToHclTerraform(struct!.slsProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerMultiAccountDeliveryChannelResourceChangeDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._slsProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsProperties = this._slsProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerMultiAccountDeliveryChannelResourceChangeDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._targetArn = undefined;
      this._targetType = undefined;
      this._slsProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._targetArn = value.targetArn;
      this._targetType = value.targetType;
      this._slsProperties.internalValue = value.slsProperties;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // target_arn - computed: false, optional: true, required: false
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  public resetTargetArn() {
    this._targetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // sls_properties - computed: false, optional: true, required: false
  private _slsProperties = new ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference(this, "sls_properties");
  public get slsProperties() {
    return this._slsProperties;
  }
  public putSlsProperties(value: ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliverySlsProperties) {
    this._slsProperties.internalValue = value;
  }
  public resetSlsProperties() {
    this._slsProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsPropertiesInput() {
    return this._slsProperties.internalValue;
  }
}
export interface ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#oversized_data_oss_target_arn ResourceManagerMultiAccountDeliveryChannel#oversized_data_oss_target_arn}
  */
  readonly oversizedDataOssTargetArn?: string;
}

export function resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesToTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_data_oss_target_arn: cdktf.stringToTerraform(struct!.oversizedDataOssTargetArn),
  }
}


export function resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesToHclTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oversized_data_oss_target_arn: {
      value: cdktf.stringToHclTerraform(struct!.oversizedDataOssTargetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizedDataOssTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedDataOssTargetArn = this._oversizedDataOssTargetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizedDataOssTargetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizedDataOssTargetArn = value.oversizedDataOssTargetArn;
    }
  }

  // oversized_data_oss_target_arn - computed: false, optional: true, required: false
  private _oversizedDataOssTargetArn?: string; 
  public get oversizedDataOssTargetArn() {
    return this.getStringAttribute('oversized_data_oss_target_arn');
  }
  public set oversizedDataOssTargetArn(value: string) {
    this._oversizedDataOssTargetArn = value;
  }
  public resetOversizedDataOssTargetArn() {
    this._oversizedDataOssTargetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedDataOssTargetArnInput() {
    return this._oversizedDataOssTargetArn;
  }
}
export interface ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#custom_expression ResourceManagerMultiAccountDeliveryChannel#custom_expression}
  */
  readonly customExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#delivery_time ResourceManagerMultiAccountDeliveryChannel#delivery_time}
  */
  readonly deliveryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#enabled ResourceManagerMultiAccountDeliveryChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#target_arn ResourceManagerMultiAccountDeliveryChannel#target_arn}
  */
  readonly targetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#target_type ResourceManagerMultiAccountDeliveryChannel#target_type}
  */
  readonly targetType?: string;
  /**
  * sls_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#sls_properties ResourceManagerMultiAccountDeliveryChannel#sls_properties}
  */
  readonly slsProperties?: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsProperties;
}

export function resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryToTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_expression: cdktf.stringToTerraform(struct!.customExpression),
    delivery_time: cdktf.stringToTerraform(struct!.deliveryTime),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    sls_properties: resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesToTerraform(struct!.slsProperties),
  }
}


export function resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryToHclTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryOutputReference | ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_expression: {
      value: cdktf.stringToHclTerraform(struct!.customExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delivery_time: {
      value: cdktf.stringToHclTerraform(struct!.deliveryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_properties: {
      value: resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesToHclTerraform(struct!.slsProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.customExpression = this._customExpression;
    }
    if (this._deliveryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryTime = this._deliveryTime;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._slsProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsProperties = this._slsProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customExpression = undefined;
      this._deliveryTime = undefined;
      this._enabled = undefined;
      this._targetArn = undefined;
      this._targetType = undefined;
      this._slsProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customExpression = value.customExpression;
      this._deliveryTime = value.deliveryTime;
      this._enabled = value.enabled;
      this._targetArn = value.targetArn;
      this._targetType = value.targetType;
      this._slsProperties.internalValue = value.slsProperties;
    }
  }

  // custom_expression - computed: false, optional: true, required: false
  private _customExpression?: string; 
  public get customExpression() {
    return this.getStringAttribute('custom_expression');
  }
  public set customExpression(value: string) {
    this._customExpression = value;
  }
  public resetCustomExpression() {
    this._customExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customExpressionInput() {
    return this._customExpression;
  }

  // delivery_time - computed: false, optional: true, required: false
  private _deliveryTime?: string; 
  public get deliveryTime() {
    return this.getStringAttribute('delivery_time');
  }
  public set deliveryTime(value: string) {
    this._deliveryTime = value;
  }
  public resetDeliveryTime() {
    this._deliveryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryTimeInput() {
    return this._deliveryTime;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // target_arn - computed: false, optional: true, required: false
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  public resetTargetArn() {
    this._targetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // sls_properties - computed: false, optional: true, required: false
  private _slsProperties = new ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference(this, "sls_properties");
  public get slsProperties() {
    return this._slsProperties;
  }
  public putSlsProperties(value: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliverySlsProperties) {
    this._slsProperties.internalValue = value;
  }
  public resetSlsProperties() {
    this._slsProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsPropertiesInput() {
    return this._slsProperties.internalValue;
  }
}
export interface ResourceManagerMultiAccountDeliveryChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#create ResourceManagerMultiAccountDeliveryChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#delete ResourceManagerMultiAccountDeliveryChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#update ResourceManagerMultiAccountDeliveryChannel#update}
  */
  readonly update?: string;
}

export function resourceManagerMultiAccountDeliveryChannelTimeoutsToTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelTimeouts | cdktf.IResolvable): any {
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


export function resourceManagerMultiAccountDeliveryChannelTimeoutsToHclTerraform(struct?: ResourceManagerMultiAccountDeliveryChannelTimeouts | cdktf.IResolvable): any {
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

export class ResourceManagerMultiAccountDeliveryChannelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceManagerMultiAccountDeliveryChannelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceManagerMultiAccountDeliveryChannelTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel alicloud_resource_manager_multi_account_delivery_channel}
*/
export class ResourceManagerMultiAccountDeliveryChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_resource_manager_multi_account_delivery_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerMultiAccountDeliveryChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerMultiAccountDeliveryChannel to import
  * @param importFromId The id of the existing ResourceManagerMultiAccountDeliveryChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerMultiAccountDeliveryChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_resource_manager_multi_account_delivery_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/resource_manager_multi_account_delivery_channel alicloud_resource_manager_multi_account_delivery_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerMultiAccountDeliveryChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerMultiAccountDeliveryChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_resource_manager_multi_account_delivery_channel',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deliveryChannelDescription = config.deliveryChannelDescription;
    this._id = config.id;
    this._multiAccountDeliveryChannelName = config.multiAccountDeliveryChannelName;
    this._deliveryChannelFilter.internalValue = config.deliveryChannelFilter;
    this._resourceChangeDelivery.internalValue = config.resourceChangeDelivery;
    this._resourceSnapshotDelivery.internalValue = config.resourceSnapshotDelivery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_channel_description - computed: false, optional: false, required: true
  private _deliveryChannelDescription?: string; 
  public get deliveryChannelDescription() {
    return this.getStringAttribute('delivery_channel_description');
  }
  public set deliveryChannelDescription(value: string) {
    this._deliveryChannelDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelDescriptionInput() {
    return this._deliveryChannelDescription;
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

  // multi_account_delivery_channel_name - computed: false, optional: false, required: true
  private _multiAccountDeliveryChannelName?: string; 
  public get multiAccountDeliveryChannelName() {
    return this.getStringAttribute('multi_account_delivery_channel_name');
  }
  public set multiAccountDeliveryChannelName(value: string) {
    this._multiAccountDeliveryChannelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAccountDeliveryChannelNameInput() {
    return this._multiAccountDeliveryChannelName;
  }

  // delivery_channel_filter - computed: false, optional: false, required: true
  private _deliveryChannelFilter = new ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterOutputReference(this, "delivery_channel_filter");
  public get deliveryChannelFilter() {
    return this._deliveryChannelFilter;
  }
  public putDeliveryChannelFilter(value: ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilter) {
    this._deliveryChannelFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelFilterInput() {
    return this._deliveryChannelFilter.internalValue;
  }

  // resource_change_delivery - computed: false, optional: true, required: false
  private _resourceChangeDelivery = new ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryOutputReference(this, "resource_change_delivery");
  public get resourceChangeDelivery() {
    return this._resourceChangeDelivery;
  }
  public putResourceChangeDelivery(value: ResourceManagerMultiAccountDeliveryChannelResourceChangeDelivery) {
    this._resourceChangeDelivery.internalValue = value;
  }
  public resetResourceChangeDelivery() {
    this._resourceChangeDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceChangeDeliveryInput() {
    return this._resourceChangeDelivery.internalValue;
  }

  // resource_snapshot_delivery - computed: false, optional: true, required: false
  private _resourceSnapshotDelivery = new ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryOutputReference(this, "resource_snapshot_delivery");
  public get resourceSnapshotDelivery() {
    return this._resourceSnapshotDelivery;
  }
  public putResourceSnapshotDelivery(value: ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDelivery) {
    this._resourceSnapshotDelivery.internalValue = value;
  }
  public resetResourceSnapshotDelivery() {
    this._resourceSnapshotDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSnapshotDeliveryInput() {
    return this._resourceSnapshotDelivery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceManagerMultiAccountDeliveryChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceManagerMultiAccountDeliveryChannelTimeouts) {
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
      delivery_channel_description: cdktf.stringToTerraform(this._deliveryChannelDescription),
      id: cdktf.stringToTerraform(this._id),
      multi_account_delivery_channel_name: cdktf.stringToTerraform(this._multiAccountDeliveryChannelName),
      delivery_channel_filter: resourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterToTerraform(this._deliveryChannelFilter.internalValue),
      resource_change_delivery: resourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryToTerraform(this._resourceChangeDelivery.internalValue),
      resource_snapshot_delivery: resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryToTerraform(this._resourceSnapshotDelivery.internalValue),
      timeouts: resourceManagerMultiAccountDeliveryChannelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_channel_description: {
        value: cdktf.stringToHclTerraform(this._deliveryChannelDescription),
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
      multi_account_delivery_channel_name: {
        value: cdktf.stringToHclTerraform(this._multiAccountDeliveryChannelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_channel_filter: {
        value: resourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterToHclTerraform(this._deliveryChannelFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerMultiAccountDeliveryChannelDeliveryChannelFilterList",
      },
      resource_change_delivery: {
        value: resourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryToHclTerraform(this._resourceChangeDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerMultiAccountDeliveryChannelResourceChangeDeliveryList",
      },
      resource_snapshot_delivery: {
        value: resourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryToHclTerraform(this._resourceSnapshotDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerMultiAccountDeliveryChannelResourceSnapshotDeliveryList",
      },
      timeouts: {
        value: resourceManagerMultiAccountDeliveryChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceManagerMultiAccountDeliveryChannelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
