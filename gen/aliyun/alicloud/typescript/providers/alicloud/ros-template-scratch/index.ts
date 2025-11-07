// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RosTemplateScratchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#description RosTemplateScratch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#execution_mode RosTemplateScratch#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#id RosTemplateScratch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#logical_id_strategy RosTemplateScratch#logical_id_strategy}
  */
  readonly logicalIdStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#template_scratch_type RosTemplateScratch#template_scratch_type}
  */
  readonly templateScratchType: string;
  /**
  * preference_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#preference_parameters RosTemplateScratch#preference_parameters}
  */
  readonly preferenceParameters?: RosTemplateScratchPreferenceParameters[] | cdktf.IResolvable;
  /**
  * source_resource_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#source_resource_group RosTemplateScratch#source_resource_group}
  */
  readonly sourceResourceGroup?: RosTemplateScratchSourceResourceGroup;
  /**
  * source_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#source_resources RosTemplateScratch#source_resources}
  */
  readonly sourceResources?: RosTemplateScratchSourceResources[] | cdktf.IResolvable;
  /**
  * source_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#source_tag RosTemplateScratch#source_tag}
  */
  readonly sourceTag?: RosTemplateScratchSourceTag;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#timeouts RosTemplateScratch#timeouts}
  */
  readonly timeouts?: RosTemplateScratchTimeouts;
}
export interface RosTemplateScratchPreferenceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#parameter_key RosTemplateScratch#parameter_key}
  */
  readonly parameterKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#parameter_value RosTemplateScratch#parameter_value}
  */
  readonly parameterValue: string;
}

export function rosTemplateScratchPreferenceParametersToTerraform(struct?: RosTemplateScratchPreferenceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function rosTemplateScratchPreferenceParametersToHclTerraform(struct?: RosTemplateScratchPreferenceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_key: {
      value: cdktf.stringToHclTerraform(struct!.parameterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RosTemplateScratchPreferenceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RosTemplateScratchPreferenceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterKey = this._parameterKey;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RosTemplateScratchPreferenceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterKey = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterKey = value.parameterKey;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_key - computed: false, optional: false, required: true
  private _parameterKey?: string; 
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }
  public set parameterKey(value: string) {
    this._parameterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterKeyInput() {
    return this._parameterKey;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class RosTemplateScratchPreferenceParametersList extends cdktf.ComplexList {
  public internalValue? : RosTemplateScratchPreferenceParameters[] | cdktf.IResolvable

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
  public get(index: number): RosTemplateScratchPreferenceParametersOutputReference {
    return new RosTemplateScratchPreferenceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RosTemplateScratchSourceResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#resource_group_id RosTemplateScratch#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#resource_type_filter RosTemplateScratch#resource_type_filter}
  */
  readonly resourceTypeFilter?: string[];
}

export function rosTemplateScratchSourceResourceGroupToTerraform(struct?: RosTemplateScratchSourceResourceGroupOutputReference | RosTemplateScratchSourceResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_id: cdktf.stringToTerraform(struct!.resourceGroupId),
    resource_type_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypeFilter),
  }
}


export function rosTemplateScratchSourceResourceGroupToHclTerraform(struct?: RosTemplateScratchSourceResourceGroupOutputReference | RosTemplateScratchSourceResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypeFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RosTemplateScratchSourceResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RosTemplateScratchSourceResourceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupId = this._resourceGroupId;
    }
    if (this._resourceTypeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeFilter = this._resourceTypeFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RosTemplateScratchSourceResourceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupId = undefined;
      this._resourceTypeFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupId = value.resourceGroupId;
      this._resourceTypeFilter = value.resourceTypeFilter;
    }
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_type_filter - computed: false, optional: true, required: false
  private _resourceTypeFilter?: string[]; 
  public get resourceTypeFilter() {
    return this.getListAttribute('resource_type_filter');
  }
  public set resourceTypeFilter(value: string[]) {
    this._resourceTypeFilter = value;
  }
  public resetResourceTypeFilter() {
    this._resourceTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFilterInput() {
    return this._resourceTypeFilter;
  }
}
export interface RosTemplateScratchSourceResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#resource_id RosTemplateScratch#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#resource_type RosTemplateScratch#resource_type}
  */
  readonly resourceType: string;
}

export function rosTemplateScratchSourceResourcesToTerraform(struct?: RosTemplateScratchSourceResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function rosTemplateScratchSourceResourcesToHclTerraform(struct?: RosTemplateScratchSourceResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RosTemplateScratchSourceResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RosTemplateScratchSourceResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RosTemplateScratchSourceResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class RosTemplateScratchSourceResourcesList extends cdktf.ComplexList {
  public internalValue? : RosTemplateScratchSourceResources[] | cdktf.IResolvable

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
  public get(index: number): RosTemplateScratchSourceResourcesOutputReference {
    return new RosTemplateScratchSourceResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RosTemplateScratchSourceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#resource_tags RosTemplateScratch#resource_tags}
  */
  readonly resourceTags: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#resource_type_filter RosTemplateScratch#resource_type_filter}
  */
  readonly resourceTypeFilter?: string[];
}

export function rosTemplateScratchSourceTagToTerraform(struct?: RosTemplateScratchSourceTagOutputReference | RosTemplateScratchSourceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceTags),
    resource_type_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypeFilter),
  }
}


export function rosTemplateScratchSourceTagToHclTerraform(struct?: RosTemplateScratchSourceTagOutputReference | RosTemplateScratchSourceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_type_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypeFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RosTemplateScratchSourceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RosTemplateScratchSourceTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags;
    }
    if (this._resourceTypeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeFilter = this._resourceTypeFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RosTemplateScratchSourceTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceTags = undefined;
      this._resourceTypeFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceTags = value.resourceTags;
      this._resourceTypeFilter = value.resourceTypeFilter;
    }
  }

  // resource_tags - computed: false, optional: false, required: true
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // resource_type_filter - computed: false, optional: true, required: false
  private _resourceTypeFilter?: string[]; 
  public get resourceTypeFilter() {
    return this.getListAttribute('resource_type_filter');
  }
  public set resourceTypeFilter(value: string[]) {
    this._resourceTypeFilter = value;
  }
  public resetResourceTypeFilter() {
    this._resourceTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFilterInput() {
    return this._resourceTypeFilter;
  }
}
export interface RosTemplateScratchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#create RosTemplateScratch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#delete RosTemplateScratch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#update RosTemplateScratch#update}
  */
  readonly update?: string;
}

export function rosTemplateScratchTimeoutsToTerraform(struct?: RosTemplateScratchTimeouts | cdktf.IResolvable): any {
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


export function rosTemplateScratchTimeoutsToHclTerraform(struct?: RosTemplateScratchTimeouts | cdktf.IResolvable): any {
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

export class RosTemplateScratchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RosTemplateScratchTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RosTemplateScratchTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch alicloud_ros_template_scratch}
*/
export class RosTemplateScratch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ros_template_scratch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RosTemplateScratch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RosTemplateScratch to import
  * @param importFromId The id of the existing RosTemplateScratch that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RosTemplateScratch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ros_template_scratch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_template_scratch alicloud_ros_template_scratch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RosTemplateScratchConfig
  */
  public constructor(scope: Construct, id: string, config: RosTemplateScratchConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ros_template_scratch',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
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
    this._executionMode = config.executionMode;
    this._id = config.id;
    this._logicalIdStrategy = config.logicalIdStrategy;
    this._templateScratchType = config.templateScratchType;
    this._preferenceParameters.internalValue = config.preferenceParameters;
    this._sourceResourceGroup.internalValue = config.sourceResourceGroup;
    this._sourceResources.internalValue = config.sourceResources;
    this._sourceTag.internalValue = config.sourceTag;
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

  // execution_mode - computed: false, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
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

  // logical_id_strategy - computed: true, optional: true, required: false
  private _logicalIdStrategy?: string; 
  public get logicalIdStrategy() {
    return this.getStringAttribute('logical_id_strategy');
  }
  public set logicalIdStrategy(value: string) {
    this._logicalIdStrategy = value;
  }
  public resetLogicalIdStrategy() {
    this._logicalIdStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalIdStrategyInput() {
    return this._logicalIdStrategy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // template_scratch_type - computed: false, optional: false, required: true
  private _templateScratchType?: string; 
  public get templateScratchType() {
    return this.getStringAttribute('template_scratch_type');
  }
  public set templateScratchType(value: string) {
    this._templateScratchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateScratchTypeInput() {
    return this._templateScratchType;
  }

  // preference_parameters - computed: false, optional: true, required: false
  private _preferenceParameters = new RosTemplateScratchPreferenceParametersList(this, "preference_parameters", true);
  public get preferenceParameters() {
    return this._preferenceParameters;
  }
  public putPreferenceParameters(value: RosTemplateScratchPreferenceParameters[] | cdktf.IResolvable) {
    this._preferenceParameters.internalValue = value;
  }
  public resetPreferenceParameters() {
    this._preferenceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceParametersInput() {
    return this._preferenceParameters.internalValue;
  }

  // source_resource_group - computed: false, optional: true, required: false
  private _sourceResourceGroup = new RosTemplateScratchSourceResourceGroupOutputReference(this, "source_resource_group");
  public get sourceResourceGroup() {
    return this._sourceResourceGroup;
  }
  public putSourceResourceGroup(value: RosTemplateScratchSourceResourceGroup) {
    this._sourceResourceGroup.internalValue = value;
  }
  public resetSourceResourceGroup() {
    this._sourceResourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceGroupInput() {
    return this._sourceResourceGroup.internalValue;
  }

  // source_resources - computed: false, optional: true, required: false
  private _sourceResources = new RosTemplateScratchSourceResourcesList(this, "source_resources", true);
  public get sourceResources() {
    return this._sourceResources;
  }
  public putSourceResources(value: RosTemplateScratchSourceResources[] | cdktf.IResolvable) {
    this._sourceResources.internalValue = value;
  }
  public resetSourceResources() {
    this._sourceResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourcesInput() {
    return this._sourceResources.internalValue;
  }

  // source_tag - computed: false, optional: true, required: false
  private _sourceTag = new RosTemplateScratchSourceTagOutputReference(this, "source_tag");
  public get sourceTag() {
    return this._sourceTag;
  }
  public putSourceTag(value: RosTemplateScratchSourceTag) {
    this._sourceTag.internalValue = value;
  }
  public resetSourceTag() {
    this._sourceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTagInput() {
    return this._sourceTag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RosTemplateScratchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RosTemplateScratchTimeouts) {
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
      execution_mode: cdktf.stringToTerraform(this._executionMode),
      id: cdktf.stringToTerraform(this._id),
      logical_id_strategy: cdktf.stringToTerraform(this._logicalIdStrategy),
      template_scratch_type: cdktf.stringToTerraform(this._templateScratchType),
      preference_parameters: cdktf.listMapper(rosTemplateScratchPreferenceParametersToTerraform, true)(this._preferenceParameters.internalValue),
      source_resource_group: rosTemplateScratchSourceResourceGroupToTerraform(this._sourceResourceGroup.internalValue),
      source_resources: cdktf.listMapper(rosTemplateScratchSourceResourcesToTerraform, true)(this._sourceResources.internalValue),
      source_tag: rosTemplateScratchSourceTagToTerraform(this._sourceTag.internalValue),
      timeouts: rosTemplateScratchTimeoutsToTerraform(this._timeouts.internalValue),
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
      execution_mode: {
        value: cdktf.stringToHclTerraform(this._executionMode),
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
      logical_id_strategy: {
        value: cdktf.stringToHclTerraform(this._logicalIdStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_scratch_type: {
        value: cdktf.stringToHclTerraform(this._templateScratchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preference_parameters: {
        value: cdktf.listMapperHcl(rosTemplateScratchPreferenceParametersToHclTerraform, true)(this._preferenceParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RosTemplateScratchPreferenceParametersList",
      },
      source_resource_group: {
        value: rosTemplateScratchSourceResourceGroupToHclTerraform(this._sourceResourceGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RosTemplateScratchSourceResourceGroupList",
      },
      source_resources: {
        value: cdktf.listMapperHcl(rosTemplateScratchSourceResourcesToHclTerraform, true)(this._sourceResources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RosTemplateScratchSourceResourcesList",
      },
      source_tag: {
        value: rosTemplateScratchSourceTagToHclTerraform(this._sourceTag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RosTemplateScratchSourceTagList",
      },
      timeouts: {
        value: rosTemplateScratchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RosTemplateScratchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
