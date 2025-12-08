// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#delivery_channel_description ResourceManagerDeliveryChannel#delivery_channel_description}
  */
  readonly deliveryChannelDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#delivery_channel_name ResourceManagerDeliveryChannel#delivery_channel_name}
  */
  readonly deliveryChannelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#id ResourceManagerDeliveryChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * delivery_channel_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#delivery_channel_filter ResourceManagerDeliveryChannel#delivery_channel_filter}
  */
  readonly deliveryChannelFilter: ResourceManagerDeliveryChannelDeliveryChannelFilter;
  /**
  * resource_change_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#resource_change_delivery ResourceManagerDeliveryChannel#resource_change_delivery}
  */
  readonly resourceChangeDelivery?: ResourceManagerDeliveryChannelResourceChangeDelivery;
  /**
  * resource_snapshot_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#resource_snapshot_delivery ResourceManagerDeliveryChannel#resource_snapshot_delivery}
  */
  readonly resourceSnapshotDelivery?: ResourceManagerDeliveryChannelResourceSnapshotDelivery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#timeouts ResourceManagerDeliveryChannel#timeouts}
  */
  readonly timeouts?: ResourceManagerDeliveryChannelTimeouts;
}
export interface ResourceManagerDeliveryChannelDeliveryChannelFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#resource_types ResourceManagerDeliveryChannel#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function resourceManagerDeliveryChannelDeliveryChannelFilterToTerraform(struct?: ResourceManagerDeliveryChannelDeliveryChannelFilterOutputReference | ResourceManagerDeliveryChannelDeliveryChannelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function resourceManagerDeliveryChannelDeliveryChannelFilterToHclTerraform(struct?: ResourceManagerDeliveryChannelDeliveryChannelFilterOutputReference | ResourceManagerDeliveryChannelDeliveryChannelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ResourceManagerDeliveryChannelDeliveryChannelFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerDeliveryChannelDeliveryChannelFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerDeliveryChannelDeliveryChannelFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceTypes = value.resourceTypes;
    }
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
export interface ResourceManagerDeliveryChannelResourceChangeDeliverySlsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#oversized_data_oss_target_arn ResourceManagerDeliveryChannel#oversized_data_oss_target_arn}
  */
  readonly oversizedDataOssTargetArn?: string;
}

export function resourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesToTerraform(struct?: ResourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference | ResourceManagerDeliveryChannelResourceChangeDeliverySlsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_data_oss_target_arn: cdktf.stringToTerraform(struct!.oversizedDataOssTargetArn),
  }
}


export function resourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesToHclTerraform(struct?: ResourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference | ResourceManagerDeliveryChannelResourceChangeDeliverySlsProperties): any {
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

export class ResourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerDeliveryChannelResourceChangeDeliverySlsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizedDataOssTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedDataOssTargetArn = this._oversizedDataOssTargetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerDeliveryChannelResourceChangeDeliverySlsProperties | undefined) {
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
export interface ResourceManagerDeliveryChannelResourceChangeDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#enabled ResourceManagerDeliveryChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#target_arn ResourceManagerDeliveryChannel#target_arn}
  */
  readonly targetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#target_type ResourceManagerDeliveryChannel#target_type}
  */
  readonly targetType?: string;
  /**
  * sls_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#sls_properties ResourceManagerDeliveryChannel#sls_properties}
  */
  readonly slsProperties?: ResourceManagerDeliveryChannelResourceChangeDeliverySlsProperties;
}

export function resourceManagerDeliveryChannelResourceChangeDeliveryToTerraform(struct?: ResourceManagerDeliveryChannelResourceChangeDeliveryOutputReference | ResourceManagerDeliveryChannelResourceChangeDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    sls_properties: resourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesToTerraform(struct!.slsProperties),
  }
}


export function resourceManagerDeliveryChannelResourceChangeDeliveryToHclTerraform(struct?: ResourceManagerDeliveryChannelResourceChangeDeliveryOutputReference | ResourceManagerDeliveryChannelResourceChangeDelivery): any {
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
      value: resourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesToHclTerraform(struct!.slsProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerDeliveryChannelResourceChangeDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerDeliveryChannelResourceChangeDelivery | undefined {
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

  public set internalValue(value: ResourceManagerDeliveryChannelResourceChangeDelivery | undefined) {
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
  private _slsProperties = new ResourceManagerDeliveryChannelResourceChangeDeliverySlsPropertiesOutputReference(this, "sls_properties");
  public get slsProperties() {
    return this._slsProperties;
  }
  public putSlsProperties(value: ResourceManagerDeliveryChannelResourceChangeDeliverySlsProperties) {
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
export interface ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#oversized_data_oss_target_arn ResourceManagerDeliveryChannel#oversized_data_oss_target_arn}
  */
  readonly oversizedDataOssTargetArn?: string;
}

export function resourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesToTerraform(struct?: ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference | ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_data_oss_target_arn: cdktf.stringToTerraform(struct!.oversizedDataOssTargetArn),
  }
}


export function resourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesToHclTerraform(struct?: ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference | ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsProperties): any {
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

export class ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizedDataOssTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedDataOssTargetArn = this._oversizedDataOssTargetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsProperties | undefined) {
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
export interface ResourceManagerDeliveryChannelResourceSnapshotDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#custom_expression ResourceManagerDeliveryChannel#custom_expression}
  */
  readonly customExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#delivery_time ResourceManagerDeliveryChannel#delivery_time}
  */
  readonly deliveryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#enabled ResourceManagerDeliveryChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#target_arn ResourceManagerDeliveryChannel#target_arn}
  */
  readonly targetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#target_type ResourceManagerDeliveryChannel#target_type}
  */
  readonly targetType?: string;
  /**
  * sls_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#sls_properties ResourceManagerDeliveryChannel#sls_properties}
  */
  readonly slsProperties?: ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsProperties;
}

export function resourceManagerDeliveryChannelResourceSnapshotDeliveryToTerraform(struct?: ResourceManagerDeliveryChannelResourceSnapshotDeliveryOutputReference | ResourceManagerDeliveryChannelResourceSnapshotDelivery): any {
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
    sls_properties: resourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesToTerraform(struct!.slsProperties),
  }
}


export function resourceManagerDeliveryChannelResourceSnapshotDeliveryToHclTerraform(struct?: ResourceManagerDeliveryChannelResourceSnapshotDeliveryOutputReference | ResourceManagerDeliveryChannelResourceSnapshotDelivery): any {
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
      value: resourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesToHclTerraform(struct!.slsProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerDeliveryChannelResourceSnapshotDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceManagerDeliveryChannelResourceSnapshotDelivery | undefined {
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

  public set internalValue(value: ResourceManagerDeliveryChannelResourceSnapshotDelivery | undefined) {
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
  private _slsProperties = new ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsPropertiesOutputReference(this, "sls_properties");
  public get slsProperties() {
    return this._slsProperties;
  }
  public putSlsProperties(value: ResourceManagerDeliveryChannelResourceSnapshotDeliverySlsProperties) {
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
export interface ResourceManagerDeliveryChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#create ResourceManagerDeliveryChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#delete ResourceManagerDeliveryChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#update ResourceManagerDeliveryChannel#update}
  */
  readonly update?: string;
}

export function resourceManagerDeliveryChannelTimeoutsToTerraform(struct?: ResourceManagerDeliveryChannelTimeouts | cdktf.IResolvable): any {
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


export function resourceManagerDeliveryChannelTimeoutsToHclTerraform(struct?: ResourceManagerDeliveryChannelTimeouts | cdktf.IResolvable): any {
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

export class ResourceManagerDeliveryChannelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceManagerDeliveryChannelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceManagerDeliveryChannelTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel alicloud_resource_manager_delivery_channel}
*/
export class ResourceManagerDeliveryChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_resource_manager_delivery_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerDeliveryChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerDeliveryChannel to import
  * @param importFromId The id of the existing ResourceManagerDeliveryChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerDeliveryChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_resource_manager_delivery_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_delivery_channel alicloud_resource_manager_delivery_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerDeliveryChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerDeliveryChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_resource_manager_delivery_channel',
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
    this._deliveryChannelDescription = config.deliveryChannelDescription;
    this._deliveryChannelName = config.deliveryChannelName;
    this._id = config.id;
    this._deliveryChannelFilter.internalValue = config.deliveryChannelFilter;
    this._resourceChangeDelivery.internalValue = config.resourceChangeDelivery;
    this._resourceSnapshotDelivery.internalValue = config.resourceSnapshotDelivery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_channel_description - computed: false, optional: true, required: false
  private _deliveryChannelDescription?: string; 
  public get deliveryChannelDescription() {
    return this.getStringAttribute('delivery_channel_description');
  }
  public set deliveryChannelDescription(value: string) {
    this._deliveryChannelDescription = value;
  }
  public resetDeliveryChannelDescription() {
    this._deliveryChannelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelDescriptionInput() {
    return this._deliveryChannelDescription;
  }

  // delivery_channel_name - computed: false, optional: false, required: true
  private _deliveryChannelName?: string; 
  public get deliveryChannelName() {
    return this.getStringAttribute('delivery_channel_name');
  }
  public set deliveryChannelName(value: string) {
    this._deliveryChannelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelNameInput() {
    return this._deliveryChannelName;
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

  // delivery_channel_filter - computed: false, optional: false, required: true
  private _deliveryChannelFilter = new ResourceManagerDeliveryChannelDeliveryChannelFilterOutputReference(this, "delivery_channel_filter");
  public get deliveryChannelFilter() {
    return this._deliveryChannelFilter;
  }
  public putDeliveryChannelFilter(value: ResourceManagerDeliveryChannelDeliveryChannelFilter) {
    this._deliveryChannelFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryChannelFilterInput() {
    return this._deliveryChannelFilter.internalValue;
  }

  // resource_change_delivery - computed: false, optional: true, required: false
  private _resourceChangeDelivery = new ResourceManagerDeliveryChannelResourceChangeDeliveryOutputReference(this, "resource_change_delivery");
  public get resourceChangeDelivery() {
    return this._resourceChangeDelivery;
  }
  public putResourceChangeDelivery(value: ResourceManagerDeliveryChannelResourceChangeDelivery) {
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
  private _resourceSnapshotDelivery = new ResourceManagerDeliveryChannelResourceSnapshotDeliveryOutputReference(this, "resource_snapshot_delivery");
  public get resourceSnapshotDelivery() {
    return this._resourceSnapshotDelivery;
  }
  public putResourceSnapshotDelivery(value: ResourceManagerDeliveryChannelResourceSnapshotDelivery) {
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
  private _timeouts = new ResourceManagerDeliveryChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceManagerDeliveryChannelTimeouts) {
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
      delivery_channel_name: cdktf.stringToTerraform(this._deliveryChannelName),
      id: cdktf.stringToTerraform(this._id),
      delivery_channel_filter: resourceManagerDeliveryChannelDeliveryChannelFilterToTerraform(this._deliveryChannelFilter.internalValue),
      resource_change_delivery: resourceManagerDeliveryChannelResourceChangeDeliveryToTerraform(this._resourceChangeDelivery.internalValue),
      resource_snapshot_delivery: resourceManagerDeliveryChannelResourceSnapshotDeliveryToTerraform(this._resourceSnapshotDelivery.internalValue),
      timeouts: resourceManagerDeliveryChannelTimeoutsToTerraform(this._timeouts.internalValue),
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
      delivery_channel_name: {
        value: cdktf.stringToHclTerraform(this._deliveryChannelName),
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
      delivery_channel_filter: {
        value: resourceManagerDeliveryChannelDeliveryChannelFilterToHclTerraform(this._deliveryChannelFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerDeliveryChannelDeliveryChannelFilterList",
      },
      resource_change_delivery: {
        value: resourceManagerDeliveryChannelResourceChangeDeliveryToHclTerraform(this._resourceChangeDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerDeliveryChannelResourceChangeDeliveryList",
      },
      resource_snapshot_delivery: {
        value: resourceManagerDeliveryChannelResourceSnapshotDeliveryToHclTerraform(this._resourceSnapshotDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerDeliveryChannelResourceSnapshotDeliveryList",
      },
      timeouts: {
        value: resourceManagerDeliveryChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceManagerDeliveryChannelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
