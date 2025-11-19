// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogCustomSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#enabled LogCustomSource#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#id LogCustomSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#name LogCustomSource#name}
  */
  readonly name: string;
  /**
  * The scope of this setting (HOST, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#scope LogCustomSource#scope}
  */
  readonly scope?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#context LogCustomSource#context}
  */
  readonly context?: LogCustomSourceContext;
  /**
  * custom_log_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#custom_log_source LogCustomSource#custom_log_source}
  */
  readonly customLogSource: LogCustomSourceCustomLogSource;
}
export interface LogCustomSourceContextContext {
  /**
  * Possible Values: `Dt_entity_process_group`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#attribute LogCustomSource#attribute}
  */
  readonly attribute: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#values LogCustomSource#values}
  */
  readonly values: string[];
}

export function logCustomSourceContextContextToTerraform(struct?: LogCustomSourceContextContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function logCustomSourceContextContextToHclTerraform(struct?: LogCustomSourceContextContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogCustomSourceContextContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogCustomSourceContextContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogCustomSourceContextContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LogCustomSourceContextContextList extends cdktf.ComplexList {
  public internalValue? : LogCustomSourceContextContext[] | cdktf.IResolvable

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
  public get(index: number): LogCustomSourceContextContextOutputReference {
    return new LogCustomSourceContextContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogCustomSourceContext {
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#context LogCustomSource#context}
  */
  readonly context: LogCustomSourceContextContext[] | cdktf.IResolvable;
}

export function logCustomSourceContextToTerraform(struct?: LogCustomSourceContextOutputReference | LogCustomSourceContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.listMapper(logCustomSourceContextContextToTerraform, true)(struct!.context),
  }
}


export function logCustomSourceContextToHclTerraform(struct?: LogCustomSourceContextOutputReference | LogCustomSourceContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.listMapperHcl(logCustomSourceContextContextToHclTerraform, true)(struct!.context),
      isBlock: true,
      type: "set",
      storageClassType: "LogCustomSourceContextContextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogCustomSourceContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogCustomSourceContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogCustomSourceContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context.internalValue = value.context;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context = new LogCustomSourceContextContextList(this, "context", true);
  public get context() {
    return this._context;
  }
  public putContext(value: LogCustomSourceContextContext[] | cdktf.IResolvable) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }
}
export interface LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#key LogCustomSource#key}
  */
  readonly key?: string;
  /**
  * Possible Values: `Attribute`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#type LogCustomSource#type}
  */
  readonly type: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#value LogCustomSource#value}
  */
  readonly value?: string;
}

export function logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentToTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentToHclTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
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
      this._type = value.type;
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

export class LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentList extends cdktf.ComplexList {
  public internalValue? : LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment[] | cdktf.IResolvable

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
  public get(index: number): LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentOutputReference {
    return new LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichment {
  /**
  * enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#enrichment LogCustomSource#enrichment}
  */
  readonly enrichment: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment[] | cdktf.IResolvable;
}

export function logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentToTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentOutputReference | LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enrichment: cdktf.listMapper(logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentToTerraform, true)(struct!.enrichment),
  }
}


export function logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentToHclTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentOutputReference | LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enrichment: {
      value: cdktf.listMapperHcl(logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentToHclTerraform, true)(struct!.enrichment),
      isBlock: true,
      type: "set",
      storageClassType: "LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enrichment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enrichment.internalValue = value.enrichment;
    }
  }

  // enrichment - computed: false, optional: false, required: true
  private _enrichment = new LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichmentList(this, "enrichment", true);
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentEnrichment[] | cdktf.IResolvable) {
    this._enrichment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }
}
export interface LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment {
  /**
  * Values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#path LogCustomSource#path}
  */
  readonly path: string;
  /**
  * enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#enrichment LogCustomSource#enrichment}
  */
  readonly enrichment?: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichment;
}

export function logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentToTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    enrichment: logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentToTerraform(struct!.enrichment),
  }
}


export function logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentToHclTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrichment: {
      value: logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentToHclTerraform(struct!.enrichment),
      isBlock: true,
      type: "list",
      storageClassType: "LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._enrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._enrichment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._enrichment.internalValue = value.enrichment;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment = new LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichmentOutputReference(this, "enrichment");
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentEnrichment) {
    this._enrichment.internalValue = value;
  }
  public resetEnrichment() {
    this._enrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }
}

export class LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentList extends cdktf.ComplexList {
  public internalValue? : LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment[] | cdktf.IResolvable

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
  public get(index: number): LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentOutputReference {
    return new LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogCustomSourceCustomLogSourceValuesAndEnrichment {
  /**
  * custom_log_source_with_enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#custom_log_source_with_enrichment LogCustomSource#custom_log_source_with_enrichment}
  */
  readonly customLogSourceWithEnrichment: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment[] | cdktf.IResolvable;
}

export function logCustomSourceCustomLogSourceValuesAndEnrichmentToTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentOutputReference | LogCustomSourceCustomLogSourceValuesAndEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_log_source_with_enrichment: cdktf.listMapper(logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentToTerraform, true)(struct!.customLogSourceWithEnrichment),
  }
}


export function logCustomSourceCustomLogSourceValuesAndEnrichmentToHclTerraform(struct?: LogCustomSourceCustomLogSourceValuesAndEnrichmentOutputReference | LogCustomSourceCustomLogSourceValuesAndEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_log_source_with_enrichment: {
      value: cdktf.listMapperHcl(logCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentToHclTerraform, true)(struct!.customLogSourceWithEnrichment),
      isBlock: true,
      type: "set",
      storageClassType: "LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogCustomSourceCustomLogSourceValuesAndEnrichmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogCustomSourceCustomLogSourceValuesAndEnrichment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLogSourceWithEnrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLogSourceWithEnrichment = this._customLogSourceWithEnrichment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogCustomSourceCustomLogSourceValuesAndEnrichment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLogSourceWithEnrichment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLogSourceWithEnrichment.internalValue = value.customLogSourceWithEnrichment;
    }
  }

  // custom_log_source_with_enrichment - computed: false, optional: false, required: true
  private _customLogSourceWithEnrichment = new LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichmentList(this, "custom_log_source_with_enrichment", true);
  public get customLogSourceWithEnrichment() {
    return this._customLogSourceWithEnrichment;
  }
  public putCustomLogSourceWithEnrichment(value: LogCustomSourceCustomLogSourceValuesAndEnrichmentCustomLogSourceWithEnrichment[] | cdktf.IResolvable) {
    this._customLogSourceWithEnrichment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogSourceWithEnrichmentInput() {
    return this._customLogSourceWithEnrichment.internalValue;
  }
}
export interface LogCustomSourceCustomLogSource {
  /**
  * Accept binary content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#accept_binary LogCustomSource#accept_binary}
  */
  readonly acceptBinary?: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#encoding LogCustomSource#encoding}
  */
  readonly encoding?: string;
  /**
  * Possible Values: `LOG_PATH_PATTERN`, `WINDOWS_EVENT_LOG`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#type LogCustomSource#type}
  */
  readonly type: string;
  /**
  * (Required attribute for cluster v1.291 and under) It might be either an absolute path to log(s) with optional wildcards or Windows Event Log name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#values LogCustomSource#values}
  */
  readonly values?: string[];
  /**
  * values_and_enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#values_and_enrichment LogCustomSource#values_and_enrichment}
  */
  readonly valuesAndEnrichment?: LogCustomSourceCustomLogSourceValuesAndEnrichment;
}

export function logCustomSourceCustomLogSourceToTerraform(struct?: LogCustomSourceCustomLogSourceOutputReference | LogCustomSourceCustomLogSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_binary: cdktf.booleanToTerraform(struct!.acceptBinary),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    values_and_enrichment: logCustomSourceCustomLogSourceValuesAndEnrichmentToTerraform(struct!.valuesAndEnrichment),
  }
}


export function logCustomSourceCustomLogSourceToHclTerraform(struct?: LogCustomSourceCustomLogSourceOutputReference | LogCustomSourceCustomLogSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_binary: {
      value: cdktf.booleanToHclTerraform(struct!.acceptBinary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values_and_enrichment: {
      value: logCustomSourceCustomLogSourceValuesAndEnrichmentToHclTerraform(struct!.valuesAndEnrichment),
      isBlock: true,
      type: "list",
      storageClassType: "LogCustomSourceCustomLogSourceValuesAndEnrichmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogCustomSourceCustomLogSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogCustomSourceCustomLogSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptBinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptBinary = this._acceptBinary;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesAndEnrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesAndEnrichment = this._valuesAndEnrichment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogCustomSourceCustomLogSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptBinary = undefined;
      this._encoding = undefined;
      this._type = undefined;
      this._values = undefined;
      this._valuesAndEnrichment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptBinary = value.acceptBinary;
      this._encoding = value.encoding;
      this._type = value.type;
      this._values = value.values;
      this._valuesAndEnrichment.internalValue = value.valuesAndEnrichment;
    }
  }

  // accept_binary - computed: false, optional: true, required: false
  private _acceptBinary?: boolean | cdktf.IResolvable; 
  public get acceptBinary() {
    return this.getBooleanAttribute('accept_binary');
  }
  public set acceptBinary(value: boolean | cdktf.IResolvable) {
    this._acceptBinary = value;
  }
  public resetAcceptBinary() {
    this._acceptBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptBinaryInput() {
    return this._acceptBinary;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_and_enrichment - computed: false, optional: true, required: false
  private _valuesAndEnrichment = new LogCustomSourceCustomLogSourceValuesAndEnrichmentOutputReference(this, "values_and_enrichment");
  public get valuesAndEnrichment() {
    return this._valuesAndEnrichment;
  }
  public putValuesAndEnrichment(value: LogCustomSourceCustomLogSourceValuesAndEnrichment) {
    this._valuesAndEnrichment.internalValue = value;
  }
  public resetValuesAndEnrichment() {
    this._valuesAndEnrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesAndEnrichmentInput() {
    return this._valuesAndEnrichment.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source dynatrace_log_custom_source}
*/
export class LogCustomSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_custom_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogCustomSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogCustomSource to import
  * @param importFromId The id of the existing LogCustomSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogCustomSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_custom_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_custom_source dynatrace_log_custom_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogCustomSourceConfig
  */
  public constructor(scope: Construct, id: string, config: LogCustomSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_custom_source',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._scope = config.scope;
    this._context.internalValue = config.context;
    this._customLogSource.internalValue = config.customLogSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // context - computed: false, optional: true, required: false
  private _context = new LogCustomSourceContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: LogCustomSourceContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // custom_log_source - computed: false, optional: false, required: true
  private _customLogSource = new LogCustomSourceCustomLogSourceOutputReference(this, "custom_log_source");
  public get customLogSource() {
    return this._customLogSource;
  }
  public putCustomLogSource(value: LogCustomSourceCustomLogSource) {
    this._customLogSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogSourceInput() {
    return this._customLogSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      context: logCustomSourceContextToTerraform(this._context.internalValue),
      custom_log_source: logCustomSourceCustomLogSourceToTerraform(this._customLogSource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: logCustomSourceContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogCustomSourceContextList",
      },
      custom_log_source: {
        value: logCustomSourceCustomLogSourceToHclTerraform(this._customLogSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogCustomSourceCustomLogSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
