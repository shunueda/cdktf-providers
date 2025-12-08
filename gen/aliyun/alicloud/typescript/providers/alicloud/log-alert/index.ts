// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#alert_description LogAlert#alert_description}
  */
  readonly alertDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#alert_displayname LogAlert#alert_displayname}
  */
  readonly alertDisplayname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#alert_name LogAlert#alert_name}
  */
  readonly alertName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#auto_annotation LogAlert#auto_annotation}
  */
  readonly autoAnnotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#condition LogAlert#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#dashboard LogAlert#dashboard}
  */
  readonly dashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#id LogAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#mute_until LogAlert#mute_until}
  */
  readonly muteUntil?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#no_data_fire LogAlert#no_data_fire}
  */
  readonly noDataFire?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#no_data_severity LogAlert#no_data_severity}
  */
  readonly noDataSeverity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#notify_threshold LogAlert#notify_threshold}
  */
  readonly notifyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#project_name LogAlert#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#schedule_interval LogAlert#schedule_interval}
  */
  readonly scheduleInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#schedule_type LogAlert#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#send_resolved LogAlert#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#threshold LogAlert#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#throttling LogAlert#throttling}
  */
  readonly throttling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#type LogAlert#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#version LogAlert#version}
  */
  readonly version?: string;
  /**
  * annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#annotations LogAlert#annotations}
  */
  readonly annotations?: LogAlertAnnotations[] | cdktf.IResolvable;
  /**
  * group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#group_configuration LogAlert#group_configuration}
  */
  readonly groupConfiguration?: LogAlertGroupConfiguration;
  /**
  * join_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#join_configurations LogAlert#join_configurations}
  */
  readonly joinConfigurations?: LogAlertJoinConfigurations[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#labels LogAlert#labels}
  */
  readonly labels?: LogAlertLabels[] | cdktf.IResolvable;
  /**
  * notification_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#notification_list LogAlert#notification_list}
  */
  readonly notificationList?: LogAlertNotificationListStruct[] | cdktf.IResolvable;
  /**
  * policy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#policy_configuration LogAlert#policy_configuration}
  */
  readonly policyConfiguration?: LogAlertPolicyConfiguration;
  /**
  * query_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#query_list LogAlert#query_list}
  */
  readonly queryList?: LogAlertQueryListStruct[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#schedule LogAlert#schedule}
  */
  readonly schedule?: LogAlertSchedule;
  /**
  * severity_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#severity_configurations LogAlert#severity_configurations}
  */
  readonly severityConfigurations?: LogAlertSeverityConfigurations[] | cdktf.IResolvable;
  /**
  * template_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#template_configuration LogAlert#template_configuration}
  */
  readonly templateConfiguration?: LogAlertTemplateConfiguration;
}
export interface LogAlertAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#key LogAlert#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#value LogAlert#value}
  */
  readonly value: string;
}

export function logAlertAnnotationsToTerraform(struct?: LogAlertAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logAlertAnnotationsToHclTerraform(struct?: LogAlertAnnotations | cdktf.IResolvable): any {
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

export class LogAlertAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertAnnotations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAlertAnnotations | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class LogAlertAnnotationsList extends cdktf.ComplexList {
  public internalValue? : LogAlertAnnotations[] | cdktf.IResolvable

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
  public get(index: number): LogAlertAnnotationsOutputReference {
    return new LogAlertAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAlertGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#fields LogAlert#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#type LogAlert#type}
  */
  readonly type: string;
}

export function logAlertGroupConfigurationToTerraform(struct?: LogAlertGroupConfigurationOutputReference | LogAlertGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAlertGroupConfigurationToHclTerraform(struct?: LogAlertGroupConfigurationOutputReference | LogAlertGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "set",
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

export class LogAlertGroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAlertGroupConfiguration | undefined {
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

  public set internalValue(value: LogAlertGroupConfiguration | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
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
export interface LogAlertJoinConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#condition LogAlert#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#type LogAlert#type}
  */
  readonly type: string;
}

export function logAlertJoinConfigurationsToTerraform(struct?: LogAlertJoinConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAlertJoinConfigurationsToHclTerraform(struct?: LogAlertJoinConfigurations | cdktf.IResolvable): any {
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

export class LogAlertJoinConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertJoinConfigurations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAlertJoinConfigurations | cdktf.IResolvable | undefined) {
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

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

export class LogAlertJoinConfigurationsList extends cdktf.ComplexList {
  public internalValue? : LogAlertJoinConfigurations[] | cdktf.IResolvable

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
  public get(index: number): LogAlertJoinConfigurationsOutputReference {
    return new LogAlertJoinConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAlertLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#key LogAlert#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#value LogAlert#value}
  */
  readonly value: string;
}

export function logAlertLabelsToTerraform(struct?: LogAlertLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logAlertLabelsToHclTerraform(struct?: LogAlertLabels | cdktf.IResolvable): any {
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

export class LogAlertLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAlertLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class LogAlertLabelsList extends cdktf.ComplexList {
  public internalValue? : LogAlertLabels[] | cdktf.IResolvable

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
  public get(index: number): LogAlertLabelsOutputReference {
    return new LogAlertLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAlertNotificationListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#content LogAlert#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#email_list LogAlert#email_list}
  */
  readonly emailList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#mobile_list LogAlert#mobile_list}
  */
  readonly mobileList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#service_uri LogAlert#service_uri}
  */
  readonly serviceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#type LogAlert#type}
  */
  readonly type: string;
}

export function logAlertNotificationListStructToTerraform(struct?: LogAlertNotificationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
    mobile_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mobileList),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAlertNotificationListStructToHclTerraform(struct?: LogAlertNotificationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mobile_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mobileList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_uri: {
      value: cdktf.stringToHclTerraform(struct!.serviceUri),
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

export class LogAlertNotificationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertNotificationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
    }
    if (this._mobileList !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileList = this._mobileList;
    }
    if (this._serviceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUri = this._serviceUri;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAlertNotificationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._emailList = undefined;
      this._mobileList = undefined;
      this._serviceUri = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._emailList = value.emailList;
      this._mobileList = value.mobileList;
      this._serviceUri = value.serviceUri;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return cdktf.Fn.tolist(this.getListAttribute('email_list'));
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
  }

  // mobile_list - computed: false, optional: true, required: false
  private _mobileList?: string[]; 
  public get mobileList() {
    return cdktf.Fn.tolist(this.getListAttribute('mobile_list'));
  }
  public set mobileList(value: string[]) {
    this._mobileList = value;
  }
  public resetMobileList() {
    this._mobileList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileListInput() {
    return this._mobileList;
  }

  // service_uri - computed: false, optional: true, required: false
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  public resetServiceUri() {
    this._serviceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
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

export class LogAlertNotificationListStructList extends cdktf.ComplexList {
  public internalValue? : LogAlertNotificationListStruct[] | cdktf.IResolvable

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
  public get(index: number): LogAlertNotificationListStructOutputReference {
    return new LogAlertNotificationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAlertPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#action_policy_id LogAlert#action_policy_id}
  */
  readonly actionPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#alert_policy_id LogAlert#alert_policy_id}
  */
  readonly alertPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#repeat_interval LogAlert#repeat_interval}
  */
  readonly repeatInterval: string;
}

export function logAlertPolicyConfigurationToTerraform(struct?: LogAlertPolicyConfigurationOutputReference | LogAlertPolicyConfiguration): any {
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


export function logAlertPolicyConfigurationToHclTerraform(struct?: LogAlertPolicyConfigurationOutputReference | LogAlertPolicyConfiguration): any {
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

export class LogAlertPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAlertPolicyConfiguration | undefined {
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

  public set internalValue(value: LogAlertPolicyConfiguration | undefined) {
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

  // alert_policy_id - computed: false, optional: false, required: true
  private _alertPolicyId?: string; 
  public get alertPolicyId() {
    return this.getStringAttribute('alert_policy_id');
  }
  public set alertPolicyId(value: string) {
    this._alertPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyIdInput() {
    return this._alertPolicyId;
  }

  // repeat_interval - computed: false, optional: false, required: true
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }
}
export interface LogAlertQueryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#chart_title LogAlert#chart_title}
  */
  readonly chartTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#dashboard_id LogAlert#dashboard_id}
  */
  readonly dashboardId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#end LogAlert#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#logstore LogAlert#logstore}
  */
  readonly logstore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#power_sql_mode LogAlert#power_sql_mode}
  */
  readonly powerSqlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#project LogAlert#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#query LogAlert#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#region LogAlert#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#role_arn LogAlert#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#start LogAlert#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#store LogAlert#store}
  */
  readonly store?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#store_type LogAlert#store_type}
  */
  readonly storeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#time_span_type LogAlert#time_span_type}
  */
  readonly timeSpanType?: string;
}

export function logAlertQueryListStructToTerraform(struct?: LogAlertQueryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_title: cdktf.stringToTerraform(struct!.chartTitle),
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    end: cdktf.stringToTerraform(struct!.end),
    logstore: cdktf.stringToTerraform(struct!.logstore),
    power_sql_mode: cdktf.stringToTerraform(struct!.powerSqlMode),
    project: cdktf.stringToTerraform(struct!.project),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    start: cdktf.stringToTerraform(struct!.start),
    store: cdktf.stringToTerraform(struct!.store),
    store_type: cdktf.stringToTerraform(struct!.storeType),
    time_span_type: cdktf.stringToTerraform(struct!.timeSpanType),
  }
}


export function logAlertQueryListStructToHclTerraform(struct?: LogAlertQueryListStruct | cdktf.IResolvable): any {
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
    logstore: {
      value: cdktf.stringToHclTerraform(struct!.logstore),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAlertQueryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertQueryListStruct | cdktf.IResolvable | undefined {
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
    if (this._logstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstore = this._logstore;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAlertQueryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartTitle = undefined;
      this._dashboardId = undefined;
      this._end = undefined;
      this._logstore = undefined;
      this._powerSqlMode = undefined;
      this._project = undefined;
      this._query = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._start = undefined;
      this._store = undefined;
      this._storeType = undefined;
      this._timeSpanType = undefined;
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
      this._logstore = value.logstore;
      this._powerSqlMode = value.powerSqlMode;
      this._project = value.project;
      this._query = value.query;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._start = value.start;
      this._store = value.store;
      this._storeType = value.storeType;
      this._timeSpanType = value.timeSpanType;
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

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // logstore - computed: false, optional: true, required: false
  private _logstore?: string; 
  public get logstore() {
    return this.getStringAttribute('logstore');
  }
  public set logstore(value: string) {
    this._logstore = value;
  }
  public resetLogstore() {
    this._logstore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreInput() {
    return this._logstore;
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

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
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
}

export class LogAlertQueryListStructList extends cdktf.ComplexList {
  public internalValue? : LogAlertQueryListStruct[] | cdktf.IResolvable

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
  public get(index: number): LogAlertQueryListStructOutputReference {
    return new LogAlertQueryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAlertSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#cron_expression LogAlert#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#day_of_week LogAlert#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#delay LogAlert#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#hour LogAlert#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#interval LogAlert#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#run_immediately LogAlert#run_immediately}
  */
  readonly runImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#time_zone LogAlert#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#type LogAlert#type}
  */
  readonly type: string;
}

export function logAlertScheduleToTerraform(struct?: LogAlertScheduleOutputReference | LogAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    delay: cdktf.numberToTerraform(struct!.delay),
    hour: cdktf.numberToTerraform(struct!.hour),
    interval: cdktf.stringToTerraform(struct!.interval),
    run_immediately: cdktf.booleanToTerraform(struct!.runImmediately),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAlertScheduleToHclTerraform(struct?: LogAlertScheduleOutputReference | LogAlertSchedule): any {
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
    day_of_week: {
      value: cdktf.numberToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
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

export class LogAlertScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAlertSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
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

  public set internalValue(value: LogAlertSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._dayOfWeek = undefined;
      this._delay = undefined;
      this._hour = undefined;
      this._interval = undefined;
      this._runImmediately = undefined;
      this._timeZone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._dayOfWeek = value.dayOfWeek;
      this._delay = value.delay;
      this._hour = value.hour;
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

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
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

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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
export interface LogAlertSeverityConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#eval_condition LogAlert#eval_condition}
  */
  readonly evalCondition: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#severity LogAlert#severity}
  */
  readonly severity: number;
}

export function logAlertSeverityConfigurationsToTerraform(struct?: LogAlertSeverityConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eval_condition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evalCondition),
    severity: cdktf.numberToTerraform(struct!.severity),
  }
}


export function logAlertSeverityConfigurationsToHclTerraform(struct?: LogAlertSeverityConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eval_condition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evalCondition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAlertSeverityConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAlertSeverityConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evalCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.evalCondition = this._evalCondition;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAlertSeverityConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evalCondition = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evalCondition = value.evalCondition;
      this._severity = value.severity;
    }
  }

  // eval_condition - computed: false, optional: false, required: true
  private _evalCondition?: { [key: string]: string }; 
  public get evalCondition() {
    return this.getStringMapAttribute('eval_condition');
  }
  public set evalCondition(value: { [key: string]: string }) {
    this._evalCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evalConditionInput() {
    return this._evalCondition;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class LogAlertSeverityConfigurationsList extends cdktf.ComplexList {
  public internalValue? : LogAlertSeverityConfigurations[] | cdktf.IResolvable

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
  public get(index: number): LogAlertSeverityConfigurationsOutputReference {
    return new LogAlertSeverityConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAlertTemplateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#annotations LogAlert#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#id LogAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#lang LogAlert#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#tokens LogAlert#tokens}
  */
  readonly tokens?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#type LogAlert#type}
  */
  readonly type: string;
}

export function logAlertTemplateConfigurationToTerraform(struct?: LogAlertTemplateConfigurationOutputReference | LogAlertTemplateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    id: cdktf.stringToTerraform(struct!.id),
    lang: cdktf.stringToTerraform(struct!.lang),
    tokens: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokens),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAlertTemplateConfigurationToHclTerraform(struct?: LogAlertTemplateConfigurationOutputReference | LogAlertTemplateConfiguration): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lang: {
      value: cdktf.stringToHclTerraform(struct!.lang),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAlertTemplateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAlertTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAlertTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._id = undefined;
      this._lang = undefined;
      this._tokens = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._id = value.id;
      this._lang = value.lang;
      this._tokens = value.tokens;
      this._type = value.type;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert alicloud_log_alert}
*/
export class LogAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_log_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAlert to import
  * @param importFromId The id of the existing LogAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_log_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/log_alert alicloud_log_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAlertConfig
  */
  public constructor(scope: Construct, id: string, config: LogAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_log_alert',
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
    this._alertDescription = config.alertDescription;
    this._alertDisplayname = config.alertDisplayname;
    this._alertName = config.alertName;
    this._autoAnnotation = config.autoAnnotation;
    this._condition = config.condition;
    this._dashboard = config.dashboard;
    this._id = config.id;
    this._muteUntil = config.muteUntil;
    this._noDataFire = config.noDataFire;
    this._noDataSeverity = config.noDataSeverity;
    this._notifyThreshold = config.notifyThreshold;
    this._projectName = config.projectName;
    this._scheduleInterval = config.scheduleInterval;
    this._scheduleType = config.scheduleType;
    this._sendResolved = config.sendResolved;
    this._threshold = config.threshold;
    this._throttling = config.throttling;
    this._type = config.type;
    this._version = config.version;
    this._annotations.internalValue = config.annotations;
    this._groupConfiguration.internalValue = config.groupConfiguration;
    this._joinConfigurations.internalValue = config.joinConfigurations;
    this._labels.internalValue = config.labels;
    this._notificationList.internalValue = config.notificationList;
    this._policyConfiguration.internalValue = config.policyConfiguration;
    this._queryList.internalValue = config.queryList;
    this._schedule.internalValue = config.schedule;
    this._severityConfigurations.internalValue = config.severityConfigurations;
    this._templateConfiguration.internalValue = config.templateConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_description - computed: false, optional: true, required: false
  private _alertDescription?: string; 
  public get alertDescription() {
    return this.getStringAttribute('alert_description');
  }
  public set alertDescription(value: string) {
    this._alertDescription = value;
  }
  public resetAlertDescription() {
    this._alertDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDescriptionInput() {
    return this._alertDescription;
  }

  // alert_displayname - computed: false, optional: false, required: true
  private _alertDisplayname?: string; 
  public get alertDisplayname() {
    return this.getStringAttribute('alert_displayname');
  }
  public set alertDisplayname(value: string) {
    this._alertDisplayname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDisplaynameInput() {
    return this._alertDisplayname;
  }

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

  // auto_annotation - computed: false, optional: true, required: false
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

  // mute_until - computed: true, optional: true, required: false
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

  // no_data_fire - computed: false, optional: true, required: false
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

  // notify_threshold - computed: false, optional: true, required: false
  private _notifyThreshold?: number; 
  public get notifyThreshold() {
    return this.getNumberAttribute('notify_threshold');
  }
  public set notifyThreshold(value: number) {
    this._notifyThreshold = value;
  }
  public resetNotifyThreshold() {
    this._notifyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyThresholdInput() {
    return this._notifyThreshold;
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

  // schedule_interval - computed: true, optional: true, required: false
  private _scheduleInterval?: string; 
  public get scheduleInterval() {
    return this.getStringAttribute('schedule_interval');
  }
  public set scheduleInterval(value: string) {
    this._scheduleInterval = value;
  }
  public resetScheduleInterval() {
    this._scheduleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIntervalInput() {
    return this._scheduleInterval;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // send_resolved - computed: false, optional: true, required: false
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

  // threshold - computed: true, optional: true, required: false
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

  // throttling - computed: false, optional: true, required: false
  private _throttling?: string; 
  public get throttling() {
    return this.getStringAttribute('throttling');
  }
  public set throttling(value: string) {
    this._throttling = value;
  }
  public resetThrottling() {
    this._throttling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingInput() {
    return this._throttling;
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

  // annotations - computed: false, optional: true, required: false
  private _annotations = new LogAlertAnnotationsList(this, "annotations", false);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: LogAlertAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // group_configuration - computed: false, optional: true, required: false
  private _groupConfiguration = new LogAlertGroupConfigurationOutputReference(this, "group_configuration");
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: LogAlertGroupConfiguration) {
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
  private _joinConfigurations = new LogAlertJoinConfigurationsList(this, "join_configurations", false);
  public get joinConfigurations() {
    return this._joinConfigurations;
  }
  public putJoinConfigurations(value: LogAlertJoinConfigurations[] | cdktf.IResolvable) {
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
  private _labels = new LogAlertLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: LogAlertLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // notification_list - computed: false, optional: true, required: false
  private _notificationList = new LogAlertNotificationListStructList(this, "notification_list", false);
  public get notificationList() {
    return this._notificationList;
  }
  public putNotificationList(value: LogAlertNotificationListStruct[] | cdktf.IResolvable) {
    this._notificationList.internalValue = value;
  }
  public resetNotificationList() {
    this._notificationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationListInput() {
    return this._notificationList.internalValue;
  }

  // policy_configuration - computed: false, optional: true, required: false
  private _policyConfiguration = new LogAlertPolicyConfigurationOutputReference(this, "policy_configuration");
  public get policyConfiguration() {
    return this._policyConfiguration;
  }
  public putPolicyConfiguration(value: LogAlertPolicyConfiguration) {
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
  private _queryList = new LogAlertQueryListStructList(this, "query_list", false);
  public get queryList() {
    return this._queryList;
  }
  public putQueryList(value: LogAlertQueryListStruct[] | cdktf.IResolvable) {
    this._queryList.internalValue = value;
  }
  public resetQueryList() {
    this._queryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryListInput() {
    return this._queryList.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new LogAlertScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LogAlertSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // severity_configurations - computed: false, optional: true, required: false
  private _severityConfigurations = new LogAlertSeverityConfigurationsList(this, "severity_configurations", false);
  public get severityConfigurations() {
    return this._severityConfigurations;
  }
  public putSeverityConfigurations(value: LogAlertSeverityConfigurations[] | cdktf.IResolvable) {
    this._severityConfigurations.internalValue = value;
  }
  public resetSeverityConfigurations() {
    this._severityConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityConfigurationsInput() {
    return this._severityConfigurations.internalValue;
  }

  // template_configuration - computed: false, optional: true, required: false
  private _templateConfiguration = new LogAlertTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
  public putTemplateConfiguration(value: LogAlertTemplateConfiguration) {
    this._templateConfiguration.internalValue = value;
  }
  public resetTemplateConfiguration() {
    this._templateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigurationInput() {
    return this._templateConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_description: cdktf.stringToTerraform(this._alertDescription),
      alert_displayname: cdktf.stringToTerraform(this._alertDisplayname),
      alert_name: cdktf.stringToTerraform(this._alertName),
      auto_annotation: cdktf.booleanToTerraform(this._autoAnnotation),
      condition: cdktf.stringToTerraform(this._condition),
      dashboard: cdktf.stringToTerraform(this._dashboard),
      id: cdktf.stringToTerraform(this._id),
      mute_until: cdktf.numberToTerraform(this._muteUntil),
      no_data_fire: cdktf.booleanToTerraform(this._noDataFire),
      no_data_severity: cdktf.numberToTerraform(this._noDataSeverity),
      notify_threshold: cdktf.numberToTerraform(this._notifyThreshold),
      project_name: cdktf.stringToTerraform(this._projectName),
      schedule_interval: cdktf.stringToTerraform(this._scheduleInterval),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      send_resolved: cdktf.booleanToTerraform(this._sendResolved),
      threshold: cdktf.numberToTerraform(this._threshold),
      throttling: cdktf.stringToTerraform(this._throttling),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      annotations: cdktf.listMapper(logAlertAnnotationsToTerraform, true)(this._annotations.internalValue),
      group_configuration: logAlertGroupConfigurationToTerraform(this._groupConfiguration.internalValue),
      join_configurations: cdktf.listMapper(logAlertJoinConfigurationsToTerraform, true)(this._joinConfigurations.internalValue),
      labels: cdktf.listMapper(logAlertLabelsToTerraform, true)(this._labels.internalValue),
      notification_list: cdktf.listMapper(logAlertNotificationListStructToTerraform, true)(this._notificationList.internalValue),
      policy_configuration: logAlertPolicyConfigurationToTerraform(this._policyConfiguration.internalValue),
      query_list: cdktf.listMapper(logAlertQueryListStructToTerraform, true)(this._queryList.internalValue),
      schedule: logAlertScheduleToTerraform(this._schedule.internalValue),
      severity_configurations: cdktf.listMapper(logAlertSeverityConfigurationsToTerraform, true)(this._severityConfigurations.internalValue),
      template_configuration: logAlertTemplateConfigurationToTerraform(this._templateConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_description: {
        value: cdktf.stringToHclTerraform(this._alertDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_displayname: {
        value: cdktf.stringToHclTerraform(this._alertDisplayname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_name: {
        value: cdktf.stringToHclTerraform(this._alertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_annotation: {
        value: cdktf.booleanToHclTerraform(this._autoAnnotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard: {
        value: cdktf.stringToHclTerraform(this._dashboard),
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
      mute_until: {
        value: cdktf.numberToHclTerraform(this._muteUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_data_fire: {
        value: cdktf.booleanToHclTerraform(this._noDataFire),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_data_severity: {
        value: cdktf.numberToHclTerraform(this._noDataSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify_threshold: {
        value: cdktf.numberToHclTerraform(this._notifyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_interval: {
        value: cdktf.stringToHclTerraform(this._scheduleInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_resolved: {
        value: cdktf.booleanToHclTerraform(this._sendResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttling: {
        value: cdktf.stringToHclTerraform(this._throttling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(logAlertAnnotationsToHclTerraform, true)(this._annotations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertAnnotationsList",
      },
      group_configuration: {
        value: logAlertGroupConfigurationToHclTerraform(this._groupConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogAlertGroupConfigurationList",
      },
      join_configurations: {
        value: cdktf.listMapperHcl(logAlertJoinConfigurationsToHclTerraform, true)(this._joinConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertJoinConfigurationsList",
      },
      labels: {
        value: cdktf.listMapperHcl(logAlertLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertLabelsList",
      },
      notification_list: {
        value: cdktf.listMapperHcl(logAlertNotificationListStructToHclTerraform, true)(this._notificationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertNotificationListStructList",
      },
      policy_configuration: {
        value: logAlertPolicyConfigurationToHclTerraform(this._policyConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogAlertPolicyConfigurationList",
      },
      query_list: {
        value: cdktf.listMapperHcl(logAlertQueryListStructToHclTerraform, true)(this._queryList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertQueryListStructList",
      },
      schedule: {
        value: logAlertScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogAlertScheduleList",
      },
      severity_configurations: {
        value: cdktf.listMapperHcl(logAlertSeverityConfigurationsToHclTerraform, true)(this._severityConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertSeverityConfigurationsList",
      },
      template_configuration: {
        value: logAlertTemplateConfigurationToHclTerraform(this._templateConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAlertTemplateConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
