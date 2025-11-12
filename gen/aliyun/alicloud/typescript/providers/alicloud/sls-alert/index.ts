// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlsAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#alert_name SlsAlert#alert_name}
  */
  readonly alertName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#description SlsAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#display_name SlsAlert#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#id SlsAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#project_name SlsAlert#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#status SlsAlert#status}
  */
  readonly status?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#configuration SlsAlert#configuration}
  */
  readonly configuration: SlsAlertConfiguration;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#schedule SlsAlert#schedule}
  */
  readonly schedule: SlsAlertSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#timeouts SlsAlert#timeouts}
  */
  readonly timeouts?: SlsAlertTimeouts;
}
export interface SlsAlertConfigurationAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#key SlsAlert#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#value SlsAlert#value}
  */
  readonly value?: string;
}

export function slsAlertConfigurationAnnotationsToTerraform(struct?: SlsAlertConfigurationAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function slsAlertConfigurationAnnotationsToHclTerraform(struct?: SlsAlertConfigurationAnnotations | cdktf.IResolvable): any {
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

export class SlsAlertConfigurationAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlsAlertConfigurationAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SlsAlertConfigurationAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

export class SlsAlertConfigurationAnnotationsList extends cdktf.ComplexList {
  public internalValue? : SlsAlertConfigurationAnnotations[] | cdktf.IResolvable

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
  public get(index: number): SlsAlertConfigurationAnnotationsOutputReference {
    return new SlsAlertConfigurationAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlsAlertConfigurationConditionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#condition SlsAlert#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#count_condition SlsAlert#count_condition}
  */
  readonly countCondition?: string;
}

export function slsAlertConfigurationConditionConfigurationToTerraform(struct?: SlsAlertConfigurationConditionConfigurationOutputReference | SlsAlertConfigurationConditionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    count_condition: cdktf.stringToTerraform(struct!.countCondition),
  }
}


export function slsAlertConfigurationConditionConfigurationToHclTerraform(struct?: SlsAlertConfigurationConditionConfigurationOutputReference | SlsAlertConfigurationConditionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count_condition: {
      value: cdktf.stringToHclTerraform(struct!.countCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationConditionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationConditionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._countCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.countCondition = this._countCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationConditionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._countCondition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._countCondition = value.countCondition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // count_condition - computed: false, optional: true, required: false
  private _countCondition?: string; 
  public get countCondition() {
    return this.getStringAttribute('count_condition');
  }
  public set countCondition(value: string) {
    this._countCondition = value;
  }
  public resetCountCondition() {
    this._countCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countConditionInput() {
    return this._countCondition;
  }
}
export interface SlsAlertConfigurationGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#fields SlsAlert#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#type SlsAlert#type}
  */
  readonly type?: string;
}

export function slsAlertConfigurationGroupConfigurationToTerraform(struct?: SlsAlertConfigurationGroupConfigurationOutputReference | SlsAlertConfigurationGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function slsAlertConfigurationGroupConfigurationToHclTerraform(struct?: SlsAlertConfigurationGroupConfigurationOutputReference | SlsAlertConfigurationGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SlsAlertConfigurationGroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._type = value.type;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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
export interface SlsAlertConfigurationJoinConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#condition SlsAlert#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#type SlsAlert#type}
  */
  readonly type?: string;
}

export function slsAlertConfigurationJoinConfigurationsToTerraform(struct?: SlsAlertConfigurationJoinConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function slsAlertConfigurationJoinConfigurationsToHclTerraform(struct?: SlsAlertConfigurationJoinConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
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

export class SlsAlertConfigurationJoinConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlsAlertConfigurationJoinConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationJoinConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._type = value.type;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

export class SlsAlertConfigurationJoinConfigurationsList extends cdktf.ComplexList {
  public internalValue? : SlsAlertConfigurationJoinConfigurations[] | cdktf.IResolvable

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
  public get(index: number): SlsAlertConfigurationJoinConfigurationsOutputReference {
    return new SlsAlertConfigurationJoinConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlsAlertConfigurationLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#key SlsAlert#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#value SlsAlert#value}
  */
  readonly value?: string;
}

export function slsAlertConfigurationLabelsToTerraform(struct?: SlsAlertConfigurationLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function slsAlertConfigurationLabelsToHclTerraform(struct?: SlsAlertConfigurationLabels | cdktf.IResolvable): any {
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

export class SlsAlertConfigurationLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlsAlertConfigurationLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SlsAlertConfigurationLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

export class SlsAlertConfigurationLabelsList extends cdktf.ComplexList {
  public internalValue? : SlsAlertConfigurationLabels[] | cdktf.IResolvable

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
  public get(index: number): SlsAlertConfigurationLabelsOutputReference {
    return new SlsAlertConfigurationLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlsAlertConfigurationPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#action_policy_id SlsAlert#action_policy_id}
  */
  readonly actionPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#alert_policy_id SlsAlert#alert_policy_id}
  */
  readonly alertPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#repeat_interval SlsAlert#repeat_interval}
  */
  readonly repeatInterval?: string;
}

export function slsAlertConfigurationPolicyConfigurationToTerraform(struct?: SlsAlertConfigurationPolicyConfigurationOutputReference | SlsAlertConfigurationPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_policy_id: cdktf.stringToTerraform(struct!.actionPolicyId),
    alert_policy_id: cdktf.stringToTerraform(struct!.alertPolicyId),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
  }
}


export function slsAlertConfigurationPolicyConfigurationToHclTerraform(struct?: SlsAlertConfigurationPolicyConfigurationOutputReference | SlsAlertConfigurationPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.actionPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.alertPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationPolicyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionPolicyId = this._actionPolicyId;
    }
    if (this._alertPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyId = this._alertPolicyId;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationPolicyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionPolicyId = undefined;
      this._alertPolicyId = undefined;
      this._repeatInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionPolicyId = value.actionPolicyId;
      this._alertPolicyId = value.alertPolicyId;
      this._repeatInterval = value.repeatInterval;
    }
  }

  // action_policy_id - computed: false, optional: true, required: false
  private _actionPolicyId?: string; 
  public get actionPolicyId() {
    return this.getStringAttribute('action_policy_id');
  }
  public set actionPolicyId(value: string) {
    this._actionPolicyId = value;
  }
  public resetActionPolicyId() {
    this._actionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPolicyIdInput() {
    return this._actionPolicyId;
  }

  // alert_policy_id - computed: false, optional: true, required: false
  private _alertPolicyId?: string; 
  public get alertPolicyId() {
    return this.getStringAttribute('alert_policy_id');
  }
  public set alertPolicyId(value: string) {
    this._alertPolicyId = value;
  }
  public resetAlertPolicyId() {
    this._alertPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyIdInput() {
    return this._alertPolicyId;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }
}
export interface SlsAlertConfigurationQueryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#chart_title SlsAlert#chart_title}
  */
  readonly chartTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#dashboard_id SlsAlert#dashboard_id}
  */
  readonly dashboardId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#end SlsAlert#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#power_sql_mode SlsAlert#power_sql_mode}
  */
  readonly powerSqlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#project SlsAlert#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#query SlsAlert#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#region SlsAlert#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#role_arn SlsAlert#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#start SlsAlert#start}
  */
  readonly start?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#store SlsAlert#store}
  */
  readonly store?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#store_type SlsAlert#store_type}
  */
  readonly storeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#time_span_type SlsAlert#time_span_type}
  */
  readonly timeSpanType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#ui SlsAlert#ui}
  */
  readonly ui?: string;
}

export function slsAlertConfigurationQueryListStructToTerraform(struct?: SlsAlertConfigurationQueryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_title: cdktf.stringToTerraform(struct!.chartTitle),
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    end: cdktf.stringToTerraform(struct!.end),
    power_sql_mode: cdktf.stringToTerraform(struct!.powerSqlMode),
    project: cdktf.stringToTerraform(struct!.project),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    start: cdktf.stringToTerraform(struct!.start),
    store: cdktf.stringToTerraform(struct!.store),
    store_type: cdktf.stringToTerraform(struct!.storeType),
    time_span_type: cdktf.stringToTerraform(struct!.timeSpanType),
    ui: cdktf.stringToTerraform(struct!.ui),
  }
}


export function slsAlertConfigurationQueryListStructToHclTerraform(struct?: SlsAlertConfigurationQueryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_title: {
      value: cdktf.stringToHclTerraform(struct!.chartTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_sql_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerSqlMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store: {
      value: cdktf.stringToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_type: {
      value: cdktf.stringToHclTerraform(struct!.storeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_span_type: {
      value: cdktf.stringToHclTerraform(struct!.timeSpanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ui: {
      value: cdktf.stringToHclTerraform(struct!.ui),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationQueryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlsAlertConfigurationQueryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartTitle = this._chartTitle;
    }
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._powerSqlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerSqlMode = this._powerSqlMode;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    if (this._storeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeType = this._storeType;
    }
    if (this._timeSpanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSpanType = this._timeSpanType;
    }
    if (this._ui !== undefined) {
      hasAnyValues = true;
      internalValueResult.ui = this._ui;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationQueryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartTitle = undefined;
      this._dashboardId = undefined;
      this._end = undefined;
      this._powerSqlMode = undefined;
      this._project = undefined;
      this._query = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._start = undefined;
      this._store = undefined;
      this._storeType = undefined;
      this._timeSpanType = undefined;
      this._ui = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartTitle = value.chartTitle;
      this._dashboardId = value.dashboardId;
      this._end = value.end;
      this._powerSqlMode = value.powerSqlMode;
      this._project = value.project;
      this._query = value.query;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._start = value.start;
      this._store = value.store;
      this._storeType = value.storeType;
      this._timeSpanType = value.timeSpanType;
      this._ui = value.ui;
    }
  }

  // chart_title - computed: false, optional: true, required: false
  private _chartTitle?: string; 
  public get chartTitle() {
    return this.getStringAttribute('chart_title');
  }
  public set chartTitle(value: string) {
    this._chartTitle = value;
  }
  public resetChartTitle() {
    this._chartTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartTitleInput() {
    return this._chartTitle;
  }

  // dashboard_id - computed: false, optional: true, required: false
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  public resetDashboardId() {
    this._dashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // power_sql_mode - computed: false, optional: true, required: false
  private _powerSqlMode?: string; 
  public get powerSqlMode() {
    return this.getStringAttribute('power_sql_mode');
  }
  public set powerSqlMode(value: string) {
    this._powerSqlMode = value;
  }
  public resetPowerSqlMode() {
    this._powerSqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerSqlModeInput() {
    return this._powerSqlMode;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
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

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // store - computed: false, optional: true, required: false
  private _store?: string; 
  public get store() {
    return this.getStringAttribute('store');
  }
  public set store(value: string) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }

  // store_type - computed: false, optional: true, required: false
  private _storeType?: string; 
  public get storeType() {
    return this.getStringAttribute('store_type');
  }
  public set storeType(value: string) {
    this._storeType = value;
  }
  public resetStoreType() {
    this._storeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTypeInput() {
    return this._storeType;
  }

  // time_span_type - computed: false, optional: true, required: false
  private _timeSpanType?: string; 
  public get timeSpanType() {
    return this.getStringAttribute('time_span_type');
  }
  public set timeSpanType(value: string) {
    this._timeSpanType = value;
  }
  public resetTimeSpanType() {
    this._timeSpanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanTypeInput() {
    return this._timeSpanType;
  }

  // ui - computed: false, optional: true, required: false
  private _ui?: string; 
  public get ui() {
    return this.getStringAttribute('ui');
  }
  public set ui(value: string) {
    this._ui = value;
  }
  public resetUi() {
    this._ui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiInput() {
    return this._ui;
  }
}

export class SlsAlertConfigurationQueryListStructList extends cdktf.ComplexList {
  public internalValue? : SlsAlertConfigurationQueryListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlsAlertConfigurationQueryListStructOutputReference {
    return new SlsAlertConfigurationQueryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlsAlertConfigurationSeverityConfigurationsEvalCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#condition SlsAlert#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#count_condition SlsAlert#count_condition}
  */
  readonly countCondition?: string;
}

export function slsAlertConfigurationSeverityConfigurationsEvalConditionToTerraform(struct?: SlsAlertConfigurationSeverityConfigurationsEvalConditionOutputReference | SlsAlertConfigurationSeverityConfigurationsEvalCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    count_condition: cdktf.stringToTerraform(struct!.countCondition),
  }
}


export function slsAlertConfigurationSeverityConfigurationsEvalConditionToHclTerraform(struct?: SlsAlertConfigurationSeverityConfigurationsEvalConditionOutputReference | SlsAlertConfigurationSeverityConfigurationsEvalCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count_condition: {
      value: cdktf.stringToHclTerraform(struct!.countCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationSeverityConfigurationsEvalConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationSeverityConfigurationsEvalCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._countCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.countCondition = this._countCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationSeverityConfigurationsEvalCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._countCondition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._countCondition = value.countCondition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // count_condition - computed: false, optional: true, required: false
  private _countCondition?: string; 
  public get countCondition() {
    return this.getStringAttribute('count_condition');
  }
  public set countCondition(value: string) {
    this._countCondition = value;
  }
  public resetCountCondition() {
    this._countCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countConditionInput() {
    return this._countCondition;
  }
}
export interface SlsAlertConfigurationSeverityConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#severity SlsAlert#severity}
  */
  readonly severity?: number;
  /**
  * eval_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#eval_condition SlsAlert#eval_condition}
  */
  readonly evalCondition?: SlsAlertConfigurationSeverityConfigurationsEvalCondition;
}

export function slsAlertConfigurationSeverityConfigurationsToTerraform(struct?: SlsAlertConfigurationSeverityConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity: cdktf.numberToTerraform(struct!.severity),
    eval_condition: slsAlertConfigurationSeverityConfigurationsEvalConditionToTerraform(struct!.evalCondition),
  }
}


export function slsAlertConfigurationSeverityConfigurationsToHclTerraform(struct?: SlsAlertConfigurationSeverityConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eval_condition: {
      value: slsAlertConfigurationSeverityConfigurationsEvalConditionToHclTerraform(struct!.evalCondition),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationSeverityConfigurationsEvalConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationSeverityConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlsAlertConfigurationSeverityConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._evalCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evalCondition = this._evalCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationSeverityConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._severity = undefined;
      this._evalCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._severity = value.severity;
      this._evalCondition.internalValue = value.evalCondition;
    }
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // eval_condition - computed: false, optional: true, required: false
  private _evalCondition = new SlsAlertConfigurationSeverityConfigurationsEvalConditionOutputReference(this, "eval_condition");
  public get evalCondition() {
    return this._evalCondition;
  }
  public putEvalCondition(value: SlsAlertConfigurationSeverityConfigurationsEvalCondition) {
    this._evalCondition.internalValue = value;
  }
  public resetEvalCondition() {
    this._evalCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalConditionInput() {
    return this._evalCondition.internalValue;
  }
}

export class SlsAlertConfigurationSeverityConfigurationsList extends cdktf.ComplexList {
  public internalValue? : SlsAlertConfigurationSeverityConfigurations[] | cdktf.IResolvable

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
  public get(index: number): SlsAlertConfigurationSeverityConfigurationsOutputReference {
    return new SlsAlertConfigurationSeverityConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlsAlertConfigurationSinkAlerthub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#enabled SlsAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function slsAlertConfigurationSinkAlerthubToTerraform(struct?: SlsAlertConfigurationSinkAlerthubOutputReference | SlsAlertConfigurationSinkAlerthub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function slsAlertConfigurationSinkAlerthubToHclTerraform(struct?: SlsAlertConfigurationSinkAlerthubOutputReference | SlsAlertConfigurationSinkAlerthub): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationSinkAlerthubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationSinkAlerthub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationSinkAlerthub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
}
export interface SlsAlertConfigurationSinkCms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#enabled SlsAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function slsAlertConfigurationSinkCmsToTerraform(struct?: SlsAlertConfigurationSinkCmsOutputReference | SlsAlertConfigurationSinkCms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function slsAlertConfigurationSinkCmsToHclTerraform(struct?: SlsAlertConfigurationSinkCmsOutputReference | SlsAlertConfigurationSinkCms): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationSinkCmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationSinkCms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationSinkCms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
}
export interface SlsAlertConfigurationSinkEventStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#enabled SlsAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#endpoint SlsAlert#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#event_store SlsAlert#event_store}
  */
  readonly eventStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#project SlsAlert#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#role_arn SlsAlert#role_arn}
  */
  readonly roleArn?: string;
}

export function slsAlertConfigurationSinkEventStoreToTerraform(struct?: SlsAlertConfigurationSinkEventStoreOutputReference | SlsAlertConfigurationSinkEventStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    event_store: cdktf.stringToTerraform(struct!.eventStore),
    project: cdktf.stringToTerraform(struct!.project),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function slsAlertConfigurationSinkEventStoreToHclTerraform(struct?: SlsAlertConfigurationSinkEventStoreOutputReference | SlsAlertConfigurationSinkEventStore): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_store: {
      value: cdktf.stringToHclTerraform(struct!.eventStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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

export class SlsAlertConfigurationSinkEventStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationSinkEventStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._eventStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStore = this._eventStore;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfigurationSinkEventStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._endpoint = undefined;
      this._eventStore = undefined;
      this._project = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._endpoint = value.endpoint;
      this._eventStore = value.eventStore;
      this._project = value.project;
      this._roleArn = value.roleArn;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // event_store - computed: false, optional: true, required: false
  private _eventStore?: string; 
  public get eventStore() {
    return this.getStringAttribute('event_store');
  }
  public set eventStore(value: string) {
    this._eventStore = value;
  }
  public resetEventStore() {
    this._eventStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStoreInput() {
    return this._eventStore;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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
}
export interface SlsAlertConfigurationTemplateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#annotations SlsAlert#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#lang SlsAlert#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#template_id SlsAlert#template_id}
  */
  readonly templateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#tokens SlsAlert#tokens}
  */
  readonly tokens?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#type SlsAlert#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#version SlsAlert#version}
  */
  readonly version?: string;
}

export function slsAlertConfigurationTemplateConfigurationToTerraform(struct?: SlsAlertConfigurationTemplateConfigurationOutputReference | SlsAlertConfigurationTemplateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    lang: cdktf.stringToTerraform(struct!.lang),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    tokens: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokens),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function slsAlertConfigurationTemplateConfigurationToHclTerraform(struct?: SlsAlertConfigurationTemplateConfigurationOutputReference | SlsAlertConfigurationTemplateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    lang: {
      value: cdktf.stringToHclTerraform(struct!.lang),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokens),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class SlsAlertConfigurationTemplateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfigurationTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
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

  public set internalValue(value: SlsAlertConfigurationTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._lang = undefined;
      this._templateId = undefined;
      this._tokens = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._lang = value.lang;
      this._templateId = value.templateId;
      this._tokens = value.tokens;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens?: { [key: string]: string }; 
  public get tokens() {
    return this.getStringMapAttribute('tokens');
  }
  public set tokens(value: { [key: string]: string }) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SlsAlertConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#auto_annotation SlsAlert#auto_annotation}
  */
  readonly autoAnnotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#dashboard SlsAlert#dashboard}
  */
  readonly dashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#mute_until SlsAlert#mute_until}
  */
  readonly muteUntil?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#no_data_fire SlsAlert#no_data_fire}
  */
  readonly noDataFire?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#no_data_severity SlsAlert#no_data_severity}
  */
  readonly noDataSeverity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#send_resolved SlsAlert#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#tags SlsAlert#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#threshold SlsAlert#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#type SlsAlert#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#version SlsAlert#version}
  */
  readonly version?: string;
  /**
  * annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#annotations SlsAlert#annotations}
  */
  readonly annotations?: SlsAlertConfigurationAnnotations[] | cdktf.IResolvable;
  /**
  * condition_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#condition_configuration SlsAlert#condition_configuration}
  */
  readonly conditionConfiguration?: SlsAlertConfigurationConditionConfiguration;
  /**
  * group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#group_configuration SlsAlert#group_configuration}
  */
  readonly groupConfiguration?: SlsAlertConfigurationGroupConfiguration;
  /**
  * join_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#join_configurations SlsAlert#join_configurations}
  */
  readonly joinConfigurations?: SlsAlertConfigurationJoinConfigurations[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#labels SlsAlert#labels}
  */
  readonly labels?: SlsAlertConfigurationLabels[] | cdktf.IResolvable;
  /**
  * policy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#policy_configuration SlsAlert#policy_configuration}
  */
  readonly policyConfiguration?: SlsAlertConfigurationPolicyConfiguration;
  /**
  * query_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#query_list SlsAlert#query_list}
  */
  readonly queryList?: SlsAlertConfigurationQueryListStruct[] | cdktf.IResolvable;
  /**
  * severity_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#severity_configurations SlsAlert#severity_configurations}
  */
  readonly severityConfigurations?: SlsAlertConfigurationSeverityConfigurations[] | cdktf.IResolvable;
  /**
  * sink_alerthub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#sink_alerthub SlsAlert#sink_alerthub}
  */
  readonly sinkAlerthub?: SlsAlertConfigurationSinkAlerthub;
  /**
  * sink_cms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#sink_cms SlsAlert#sink_cms}
  */
  readonly sinkCms?: SlsAlertConfigurationSinkCms;
  /**
  * sink_event_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#sink_event_store SlsAlert#sink_event_store}
  */
  readonly sinkEventStore?: SlsAlertConfigurationSinkEventStore;
  /**
  * template_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#template_configuration SlsAlert#template_configuration}
  */
  readonly templateConfiguration?: SlsAlertConfigurationTemplateConfiguration;
}

export function slsAlertConfigurationToTerraform(struct?: SlsAlertConfigurationOutputReference | SlsAlertConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_annotation: cdktf.booleanToTerraform(struct!.autoAnnotation),
    dashboard: cdktf.stringToTerraform(struct!.dashboard),
    mute_until: cdktf.numberToTerraform(struct!.muteUntil),
    no_data_fire: cdktf.booleanToTerraform(struct!.noDataFire),
    no_data_severity: cdktf.numberToTerraform(struct!.noDataSeverity),
    send_resolved: cdktf.booleanToTerraform(struct!.sendResolved),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    annotations: cdktf.listMapper(slsAlertConfigurationAnnotationsToTerraform, true)(struct!.annotations),
    condition_configuration: slsAlertConfigurationConditionConfigurationToTerraform(struct!.conditionConfiguration),
    group_configuration: slsAlertConfigurationGroupConfigurationToTerraform(struct!.groupConfiguration),
    join_configurations: cdktf.listMapper(slsAlertConfigurationJoinConfigurationsToTerraform, true)(struct!.joinConfigurations),
    labels: cdktf.listMapper(slsAlertConfigurationLabelsToTerraform, true)(struct!.labels),
    policy_configuration: slsAlertConfigurationPolicyConfigurationToTerraform(struct!.policyConfiguration),
    query_list: cdktf.listMapper(slsAlertConfigurationQueryListStructToTerraform, true)(struct!.queryList),
    severity_configurations: cdktf.listMapper(slsAlertConfigurationSeverityConfigurationsToTerraform, true)(struct!.severityConfigurations),
    sink_alerthub: slsAlertConfigurationSinkAlerthubToTerraform(struct!.sinkAlerthub),
    sink_cms: slsAlertConfigurationSinkCmsToTerraform(struct!.sinkCms),
    sink_event_store: slsAlertConfigurationSinkEventStoreToTerraform(struct!.sinkEventStore),
    template_configuration: slsAlertConfigurationTemplateConfigurationToTerraform(struct!.templateConfiguration),
  }
}


export function slsAlertConfigurationToHclTerraform(struct?: SlsAlertConfigurationOutputReference | SlsAlertConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_annotation: {
      value: cdktf.booleanToHclTerraform(struct!.autoAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dashboard: {
      value: cdktf.stringToHclTerraform(struct!.dashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mute_until: {
      value: cdktf.numberToHclTerraform(struct!.muteUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_data_fire: {
      value: cdktf.booleanToHclTerraform(struct!.noDataFire),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_data_severity: {
      value: cdktf.numberToHclTerraform(struct!.noDataSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_resolved: {
      value: cdktf.booleanToHclTerraform(struct!.sendResolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
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
    annotations: {
      value: cdktf.listMapperHcl(slsAlertConfigurationAnnotationsToHclTerraform, true)(struct!.annotations),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationAnnotationsList",
    },
    condition_configuration: {
      value: slsAlertConfigurationConditionConfigurationToHclTerraform(struct!.conditionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationConditionConfigurationList",
    },
    group_configuration: {
      value: slsAlertConfigurationGroupConfigurationToHclTerraform(struct!.groupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationGroupConfigurationList",
    },
    join_configurations: {
      value: cdktf.listMapperHcl(slsAlertConfigurationJoinConfigurationsToHclTerraform, true)(struct!.joinConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationJoinConfigurationsList",
    },
    labels: {
      value: cdktf.listMapperHcl(slsAlertConfigurationLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationLabelsList",
    },
    policy_configuration: {
      value: slsAlertConfigurationPolicyConfigurationToHclTerraform(struct!.policyConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationPolicyConfigurationList",
    },
    query_list: {
      value: cdktf.listMapperHcl(slsAlertConfigurationQueryListStructToHclTerraform, true)(struct!.queryList),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationQueryListStructList",
    },
    severity_configurations: {
      value: cdktf.listMapperHcl(slsAlertConfigurationSeverityConfigurationsToHclTerraform, true)(struct!.severityConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationSeverityConfigurationsList",
    },
    sink_alerthub: {
      value: slsAlertConfigurationSinkAlerthubToHclTerraform(struct!.sinkAlerthub),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationSinkAlerthubList",
    },
    sink_cms: {
      value: slsAlertConfigurationSinkCmsToHclTerraform(struct!.sinkCms),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationSinkCmsList",
    },
    sink_event_store: {
      value: slsAlertConfigurationSinkEventStoreToHclTerraform(struct!.sinkEventStore),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationSinkEventStoreList",
    },
    template_configuration: {
      value: slsAlertConfigurationTemplateConfigurationToHclTerraform(struct!.templateConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SlsAlertConfigurationTemplateConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsAlertConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAnnotation = this._autoAnnotation;
    }
    if (this._dashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard;
    }
    if (this._muteUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteUntil = this._muteUntil;
    }
    if (this._noDataFire !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDataFire = this._noDataFire;
    }
    if (this._noDataSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDataSeverity = this._noDataSeverity;
    }
    if (this._sendResolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendResolved = this._sendResolved;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._conditionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionConfiguration = this._conditionConfiguration?.internalValue;
    }
    if (this._groupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConfiguration = this._groupConfiguration?.internalValue;
    }
    if (this._joinConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinConfigurations = this._joinConfigurations?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._policyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyConfiguration = this._policyConfiguration?.internalValue;
    }
    if (this._queryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryList = this._queryList?.internalValue;
    }
    if (this._severityConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityConfigurations = this._severityConfigurations?.internalValue;
    }
    if (this._sinkAlerthub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkAlerthub = this._sinkAlerthub?.internalValue;
    }
    if (this._sinkCms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkCms = this._sinkCms?.internalValue;
    }
    if (this._sinkEventStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkEventStore = this._sinkEventStore?.internalValue;
    }
    if (this._templateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateConfiguration = this._templateConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsAlertConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoAnnotation = undefined;
      this._dashboard = undefined;
      this._muteUntil = undefined;
      this._noDataFire = undefined;
      this._noDataSeverity = undefined;
      this._sendResolved = undefined;
      this._tags = undefined;
      this._threshold = undefined;
      this._type = undefined;
      this._version = undefined;
      this._annotations.internalValue = undefined;
      this._conditionConfiguration.internalValue = undefined;
      this._groupConfiguration.internalValue = undefined;
      this._joinConfigurations.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._policyConfiguration.internalValue = undefined;
      this._queryList.internalValue = undefined;
      this._severityConfigurations.internalValue = undefined;
      this._sinkAlerthub.internalValue = undefined;
      this._sinkCms.internalValue = undefined;
      this._sinkEventStore.internalValue = undefined;
      this._templateConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoAnnotation = value.autoAnnotation;
      this._dashboard = value.dashboard;
      this._muteUntil = value.muteUntil;
      this._noDataFire = value.noDataFire;
      this._noDataSeverity = value.noDataSeverity;
      this._sendResolved = value.sendResolved;
      this._tags = value.tags;
      this._threshold = value.threshold;
      this._type = value.type;
      this._version = value.version;
      this._annotations.internalValue = value.annotations;
      this._conditionConfiguration.internalValue = value.conditionConfiguration;
      this._groupConfiguration.internalValue = value.groupConfiguration;
      this._joinConfigurations.internalValue = value.joinConfigurations;
      this._labels.internalValue = value.labels;
      this._policyConfiguration.internalValue = value.policyConfiguration;
      this._queryList.internalValue = value.queryList;
      this._severityConfigurations.internalValue = value.severityConfigurations;
      this._sinkAlerthub.internalValue = value.sinkAlerthub;
      this._sinkCms.internalValue = value.sinkCms;
      this._sinkEventStore.internalValue = value.sinkEventStore;
      this._templateConfiguration.internalValue = value.templateConfiguration;
    }
  }

  // auto_annotation - computed: true, optional: true, required: false
  private _autoAnnotation?: boolean | cdktf.IResolvable; 
  public get autoAnnotation() {
    return this.getBooleanAttribute('auto_annotation');
  }
  public set autoAnnotation(value: boolean | cdktf.IResolvable) {
    this._autoAnnotation = value;
  }
  public resetAutoAnnotation() {
    this._autoAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAnnotationInput() {
    return this._autoAnnotation;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard?: string; 
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }
  public set dashboard(value: string) {
    this._dashboard = value;
  }
  public resetDashboard() {
    this._dashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // mute_until - computed: false, optional: true, required: false
  private _muteUntil?: number; 
  public get muteUntil() {
    return this.getNumberAttribute('mute_until');
  }
  public set muteUntil(value: number) {
    this._muteUntil = value;
  }
  public resetMuteUntil() {
    this._muteUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteUntilInput() {
    return this._muteUntil;
  }

  // no_data_fire - computed: true, optional: true, required: false
  private _noDataFire?: boolean | cdktf.IResolvable; 
  public get noDataFire() {
    return this.getBooleanAttribute('no_data_fire');
  }
  public set noDataFire(value: boolean | cdktf.IResolvable) {
    this._noDataFire = value;
  }
  public resetNoDataFire() {
    this._noDataFire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataFireInput() {
    return this._noDataFire;
  }

  // no_data_severity - computed: false, optional: true, required: false
  private _noDataSeverity?: number; 
  public get noDataSeverity() {
    return this.getNumberAttribute('no_data_severity');
  }
  public set noDataSeverity(value: number) {
    this._noDataSeverity = value;
  }
  public resetNoDataSeverity() {
    this._noDataSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataSeverityInput() {
    return this._noDataSeverity;
  }

  // send_resolved - computed: true, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // type - computed: true, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations = new SlsAlertConfigurationAnnotationsList(this, "annotations", false);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: SlsAlertConfigurationAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // condition_configuration - computed: false, optional: true, required: false
  private _conditionConfiguration = new SlsAlertConfigurationConditionConfigurationOutputReference(this, "condition_configuration");
  public get conditionConfiguration() {
    return this._conditionConfiguration;
  }
  public putConditionConfiguration(value: SlsAlertConfigurationConditionConfiguration) {
    this._conditionConfiguration.internalValue = value;
  }
  public resetConditionConfiguration() {
    this._conditionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionConfigurationInput() {
    return this._conditionConfiguration.internalValue;
  }

  // group_configuration - computed: false, optional: true, required: false
  private _groupConfiguration = new SlsAlertConfigurationGroupConfigurationOutputReference(this, "group_configuration");
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: SlsAlertConfigurationGroupConfiguration) {
    this._groupConfiguration.internalValue = value;
  }
  public resetGroupConfiguration() {
    this._groupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigurationInput() {
    return this._groupConfiguration.internalValue;
  }

  // join_configurations - computed: false, optional: true, required: false
  private _joinConfigurations = new SlsAlertConfigurationJoinConfigurationsList(this, "join_configurations", false);
  public get joinConfigurations() {
    return this._joinConfigurations;
  }
  public putJoinConfigurations(value: SlsAlertConfigurationJoinConfigurations[] | cdktf.IResolvable) {
    this._joinConfigurations.internalValue = value;
  }
  public resetJoinConfigurations() {
    this._joinConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinConfigurationsInput() {
    return this._joinConfigurations.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new SlsAlertConfigurationLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: SlsAlertConfigurationLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // policy_configuration - computed: false, optional: true, required: false
  private _policyConfiguration = new SlsAlertConfigurationPolicyConfigurationOutputReference(this, "policy_configuration");
  public get policyConfiguration() {
    return this._policyConfiguration;
  }
  public putPolicyConfiguration(value: SlsAlertConfigurationPolicyConfiguration) {
    this._policyConfiguration.internalValue = value;
  }
  public resetPolicyConfiguration() {
    this._policyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyConfigurationInput() {
    return this._policyConfiguration.internalValue;
  }

  // query_list - computed: false, optional: true, required: false
  private _queryList = new SlsAlertConfigurationQueryListStructList(this, "query_list", false);
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: SlsAlertConfigurationQueryListStruct[] | cdktf.IResolvable) {
    this._queryList.internalValue = value;
  }
  public resetQueryList() {
    this._queryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
  }

  // severity_configurations - computed: false, optional: true, required: false
  private _severityConfigurations = new SlsAlertConfigurationSeverityConfigurationsList(this, "severity_configurations", false);
  public get severityConfigurations() {
    return this._severityConfigurations;
  }
  public putSeverityConfigurations(value: SlsAlertConfigurationSeverityConfigurations[] | cdktf.IResolvable) {
    this._severityConfigurations.internalValue = value;
  }
  public resetSeverityConfigurations() {
    this._severityConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityConfigurationsInput() {
    return this._severityConfigurations.internalValue;
  }

  // sink_alerthub - computed: false, optional: true, required: false
  private _sinkAlerthub = new SlsAlertConfigurationSinkAlerthubOutputReference(this, "sink_alerthub");
  public get sinkAlerthub() {
    return this._sinkAlerthub;
  }
  public putSinkAlerthub(value: SlsAlertConfigurationSinkAlerthub) {
    this._sinkAlerthub.internalValue = value;
  }
  public resetSinkAlerthub() {
    this._sinkAlerthub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkAlerthubInput() {
    return this._sinkAlerthub.internalValue;
  }

  // sink_cms - computed: false, optional: true, required: false
  private _sinkCms = new SlsAlertConfigurationSinkCmsOutputReference(this, "sink_cms");
  public get sinkCms() {
    return this._sinkCms;
  }
  public putSinkCms(value: SlsAlertConfigurationSinkCms) {
    this._sinkCms.internalValue = value;
  }
  public resetSinkCms() {
    this._sinkCms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkCmsInput() {
    return this._sinkCms.internalValue;
  }

  // sink_event_store - computed: false, optional: true, required: false
  private _sinkEventStore = new SlsAlertConfigurationSinkEventStoreOutputReference(this, "sink_event_store");
  public get sinkEventStore() {
    return this._sinkEventStore;
  }
  public putSinkEventStore(value: SlsAlertConfigurationSinkEventStore) {
    this._sinkEventStore.internalValue = value;
  }
  public resetSinkEventStore() {
    this._sinkEventStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkEventStoreInput() {
    return this._sinkEventStore.internalValue;
  }

  // template_configuration - computed: false, optional: true, required: false
  private _templateConfiguration = new SlsAlertConfigurationTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
  public putTemplateConfiguration(value: SlsAlertConfigurationTemplateConfiguration) {
    this._templateConfiguration.internalValue = value;
  }
  public resetTemplateConfiguration() {
    this._templateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigurationInput() {
    return this._templateConfiguration.internalValue;
  }
}
export interface SlsAlertSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#cron_expression SlsAlert#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#delay SlsAlert#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#interval SlsAlert#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#run_immdiately SlsAlert#run_immdiately}
  */
  readonly runImmdiately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#time_zone SlsAlert#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#type SlsAlert#type}
  */
  readonly type?: string;
}

export function slsAlertScheduleToTerraform(struct?: SlsAlertScheduleOutputReference | SlsAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    delay: cdktf.numberToTerraform(struct!.delay),
    interval: cdktf.stringToTerraform(struct!.interval),
    run_immdiately: cdktf.booleanToTerraform(struct!.runImmdiately),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function slsAlertScheduleToHclTerraform(struct?: SlsAlertScheduleOutputReference | SlsAlertSchedule): any {
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
    run_immdiately: {
      value: cdktf.booleanToHclTerraform(struct!.runImmdiately),
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

export class SlsAlertScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsAlertSchedule | undefined {
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
    if (this._runImmdiately !== undefined) {
      hasAnyValues = true;
      internalValueResult.runImmdiately = this._runImmdiately;
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

  public set internalValue(value: SlsAlertSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._delay = undefined;
      this._interval = undefined;
      this._runImmdiately = undefined;
      this._timeZone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._delay = value.delay;
      this._interval = value.interval;
      this._runImmdiately = value.runImmdiately;
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

  // run_immdiately - computed: false, optional: true, required: false
  private _runImmdiately?: boolean | cdktf.IResolvable; 
  public get runImmdiately() {
    return this.getBooleanAttribute('run_immdiately');
  }
  public set runImmdiately(value: boolean | cdktf.IResolvable) {
    this._runImmdiately = value;
  }
  public resetRunImmdiately() {
    this._runImmdiately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runImmdiatelyInput() {
    return this._runImmdiately;
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
export interface SlsAlertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#create SlsAlert#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#delete SlsAlert#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#update SlsAlert#update}
  */
  readonly update?: string;
}

export function slsAlertTimeoutsToTerraform(struct?: SlsAlertTimeouts | cdktf.IResolvable): any {
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


export function slsAlertTimeoutsToHclTerraform(struct?: SlsAlertTimeouts | cdktf.IResolvable): any {
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

export class SlsAlertTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SlsAlertTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlsAlertTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert alicloud_sls_alert}
*/
export class SlsAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sls_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlsAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlsAlert to import
  * @param importFromId The id of the existing SlsAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlsAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sls_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sls_alert alicloud_sls_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlsAlertConfig
  */
  public constructor(scope: Construct, id: string, config: SlsAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sls_alert',
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
    this._alertName = config.alertName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._projectName = config.projectName;
    this._status = config.status;
    this._configuration.internalValue = config.configuration;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_name - computed: false, optional: false, required: true
  private _alertName?: string; 
  public get alertName() {
    return this.getStringAttribute('alert_name');
  }
  public set alertName(value: string) {
    this._alertName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNameInput() {
    return this._alertName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SlsAlertConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SlsAlertConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new SlsAlertScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SlsAlertSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SlsAlertTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SlsAlertTimeouts) {
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
      alert_name: cdktf.stringToTerraform(this._alertName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      status: cdktf.stringToTerraform(this._status),
      configuration: slsAlertConfigurationToTerraform(this._configuration.internalValue),
      schedule: slsAlertScheduleToTerraform(this._schedule.internalValue),
      timeouts: slsAlertTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_name: {
        value: cdktf.stringToHclTerraform(this._alertName),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
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
      configuration: {
        value: slsAlertConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsAlertConfigurationList",
      },
      schedule: {
        value: slsAlertScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsAlertScheduleList",
      },
      timeouts: {
        value: slsAlertTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SlsAlertTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
