// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#id ClsIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Internal field marker of full-text index. Default value: false. Valid value: false: excluding internal fields; true: including internal fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#include_internal_fields ClsIndex#include_internal_fields}
  */
  readonly includeInternalFields?: boolean | cdktf.IResolvable;
  /**
  * Metadata flag. Default value: 0. Valid value: 0: full-text index (including the metadata field with key-value index enabled); 1: full-text index (including all metadata fields); 2: full-text index (excluding metadata fields)..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#metadata_flag ClsIndex#metadata_flag}
  */
  readonly metadataFlag?: number;
  /**
  * Whether to take effect. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#status ClsIndex#status}
  */
  readonly status?: boolean | cdktf.IResolvable;
  /**
  * Log topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#topic_id ClsIndex#topic_id}
  */
  readonly topicId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#rule ClsIndex#rule}
  */
  readonly rule?: ClsIndexRule;
}
export interface ClsIndexRuleDynamicIndex {
  /**
  * index automatic configuration switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#status ClsIndex#status}
  */
  readonly status: boolean | cdktf.IResolvable;
}

export function clsIndexRuleDynamicIndexToTerraform(struct?: ClsIndexRuleDynamicIndexOutputReference | ClsIndexRuleDynamicIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.booleanToTerraform(struct!.status),
  }
}


export function clsIndexRuleDynamicIndexToHclTerraform(struct?: ClsIndexRuleDynamicIndexOutputReference | ClsIndexRuleDynamicIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.booleanToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsIndexRuleDynamicIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsIndexRuleDynamicIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleDynamicIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ClsIndexRuleFullText {
  /**
  * Case sensitivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#case_sensitive ClsIndex#case_sensitive}
  */
  readonly caseSensitive: boolean | cdktf.IResolvable;
  /**
  * Whether Chinese characters are contained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#contain_z_h ClsIndex#contain_z_h}
  */
  readonly containZH: boolean | cdktf.IResolvable;
  /**
  * Full-Text index delimiter. Each character in the string represents a delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#tokenizer ClsIndex#tokenizer}
  */
  readonly tokenizer: string;
}

export function clsIndexRuleFullTextToTerraform(struct?: ClsIndexRuleFullTextOutputReference | ClsIndexRuleFullText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    contain_z_h: cdktf.booleanToTerraform(struct!.containZH),
    tokenizer: cdktf.stringToTerraform(struct!.tokenizer),
  }
}


export function clsIndexRuleFullTextToHclTerraform(struct?: ClsIndexRuleFullTextOutputReference | ClsIndexRuleFullText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    contain_z_h: {
      value: cdktf.booleanToHclTerraform(struct!.containZH),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tokenizer: {
      value: cdktf.stringToHclTerraform(struct!.tokenizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsIndexRuleFullTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsIndexRuleFullText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._containZH !== undefined) {
      hasAnyValues = true;
      internalValueResult.containZH = this._containZH;
    }
    if (this._tokenizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenizer = this._tokenizer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleFullText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._containZH = undefined;
      this._tokenizer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._containZH = value.containZH;
      this._tokenizer = value.tokenizer;
    }
  }

  // case_sensitive - computed: false, optional: false, required: true
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // contain_z_h - computed: false, optional: false, required: true
  private _containZH?: boolean | cdktf.IResolvable; 
  public get containZH() {
    return this.getBooleanAttribute('contain_z_h');
  }
  public set containZH(value: boolean | cdktf.IResolvable) {
    this._containZH = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containZHInput() {
    return this._containZH;
  }

  // tokenizer - computed: false, optional: false, required: true
  private _tokenizer?: string; 
  public get tokenizer() {
    return this.getStringAttribute('tokenizer');
  }
  public set tokenizer(value: string) {
    this._tokenizer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizerInput() {
    return this._tokenizer;
  }
}
export interface ClsIndexRuleKeyValueKeyValuesValue {
  /**
  * Whether Chinese characters are contained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#contain_z_h ClsIndex#contain_z_h}
  */
  readonly containZH?: boolean | cdktf.IResolvable;
  /**
  * Whether the analysis feature is enabled for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#sql_flag ClsIndex#sql_flag}
  */
  readonly sqlFlag?: boolean | cdktf.IResolvable;
  /**
  * Field delimiter, which is meaningful only if the field type is text. Each character in the entered string represents a delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#tokenizer ClsIndex#tokenizer}
  */
  readonly tokenizer?: string;
  /**
  * Field type. Valid values: long, text, double.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#type ClsIndex#type}
  */
  readonly type: string;
}

export function clsIndexRuleKeyValueKeyValuesValueToTerraform(struct?: ClsIndexRuleKeyValueKeyValuesValueOutputReference | ClsIndexRuleKeyValueKeyValuesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contain_z_h: cdktf.booleanToTerraform(struct!.containZH),
    sql_flag: cdktf.booleanToTerraform(struct!.sqlFlag),
    tokenizer: cdktf.stringToTerraform(struct!.tokenizer),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clsIndexRuleKeyValueKeyValuesValueToHclTerraform(struct?: ClsIndexRuleKeyValueKeyValuesValueOutputReference | ClsIndexRuleKeyValueKeyValuesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contain_z_h: {
      value: cdktf.booleanToHclTerraform(struct!.containZH),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_flag: {
      value: cdktf.booleanToHclTerraform(struct!.sqlFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tokenizer: {
      value: cdktf.stringToHclTerraform(struct!.tokenizer),
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

export class ClsIndexRuleKeyValueKeyValuesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsIndexRuleKeyValueKeyValuesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containZH !== undefined) {
      hasAnyValues = true;
      internalValueResult.containZH = this._containZH;
    }
    if (this._sqlFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlFlag = this._sqlFlag;
    }
    if (this._tokenizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenizer = this._tokenizer;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleKeyValueKeyValuesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containZH = undefined;
      this._sqlFlag = undefined;
      this._tokenizer = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containZH = value.containZH;
      this._sqlFlag = value.sqlFlag;
      this._tokenizer = value.tokenizer;
      this._type = value.type;
    }
  }

  // contain_z_h - computed: false, optional: true, required: false
  private _containZH?: boolean | cdktf.IResolvable; 
  public get containZH() {
    return this.getBooleanAttribute('contain_z_h');
  }
  public set containZH(value: boolean | cdktf.IResolvable) {
    this._containZH = value;
  }
  public resetContainZH() {
    this._containZH = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containZHInput() {
    return this._containZH;
  }

  // sql_flag - computed: false, optional: true, required: false
  private _sqlFlag?: boolean | cdktf.IResolvable; 
  public get sqlFlag() {
    return this.getBooleanAttribute('sql_flag');
  }
  public set sqlFlag(value: boolean | cdktf.IResolvable) {
    this._sqlFlag = value;
  }
  public resetSqlFlag() {
    this._sqlFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFlagInput() {
    return this._sqlFlag;
  }

  // tokenizer - computed: false, optional: true, required: false
  private _tokenizer?: string; 
  public get tokenizer() {
    return this.getStringAttribute('tokenizer');
  }
  public set tokenizer(value: string) {
    this._tokenizer = value;
  }
  public resetTokenizer() {
    this._tokenizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizerInput() {
    return this._tokenizer;
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
export interface ClsIndexRuleKeyValueKeyValues {
  /**
  * When a key value or metafield index needs to be configured for a field, the metafield Key does not need to be prefixed with __TAG__. and is consistent with the one when logs are uploaded. __TAG__. will be prefixed automatically for display in the console..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#key ClsIndex#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#value ClsIndex#value}
  */
  readonly value?: ClsIndexRuleKeyValueKeyValuesValue;
}

export function clsIndexRuleKeyValueKeyValuesToTerraform(struct?: ClsIndexRuleKeyValueKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: clsIndexRuleKeyValueKeyValuesValueToTerraform(struct!.value),
  }
}


export function clsIndexRuleKeyValueKeyValuesToHclTerraform(struct?: ClsIndexRuleKeyValueKeyValues | cdktf.IResolvable): any {
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
      value: clsIndexRuleKeyValueKeyValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleKeyValueKeyValuesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsIndexRuleKeyValueKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsIndexRuleKeyValueKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleKeyValueKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new ClsIndexRuleKeyValueKeyValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ClsIndexRuleKeyValueKeyValuesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ClsIndexRuleKeyValueKeyValuesList extends cdktf.ComplexList {
  public internalValue? : ClsIndexRuleKeyValueKeyValues[] | cdktf.IResolvable

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
  public get(index: number): ClsIndexRuleKeyValueKeyValuesOutputReference {
    return new ClsIndexRuleKeyValueKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsIndexRuleKeyValue {
  /**
  * Case sensitivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#case_sensitive ClsIndex#case_sensitive}
  */
  readonly caseSensitive: boolean | cdktf.IResolvable;
  /**
  * key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#key_values ClsIndex#key_values}
  */
  readonly keyValues?: ClsIndexRuleKeyValueKeyValues[] | cdktf.IResolvable;
}

export function clsIndexRuleKeyValueToTerraform(struct?: ClsIndexRuleKeyValueOutputReference | ClsIndexRuleKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    key_values: cdktf.listMapper(clsIndexRuleKeyValueKeyValuesToTerraform, true)(struct!.keyValues),
  }
}


export function clsIndexRuleKeyValueToHclTerraform(struct?: ClsIndexRuleKeyValueOutputReference | ClsIndexRuleKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_values: {
      value: cdktf.listMapperHcl(clsIndexRuleKeyValueKeyValuesToHclTerraform, true)(struct!.keyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleKeyValueKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsIndexRuleKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsIndexRuleKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._keyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValues = this._keyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._keyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._keyValues.internalValue = value.keyValues;
    }
  }

  // case_sensitive - computed: false, optional: false, required: true
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // key_values - computed: false, optional: true, required: false
  private _keyValues = new ClsIndexRuleKeyValueKeyValuesList(this, "key_values", false);
  public get keyValues() {
    return this._keyValues;
  }
  public putKeyValues(value: ClsIndexRuleKeyValueKeyValues[] | cdktf.IResolvable) {
    this._keyValues.internalValue = value;
  }
  public resetKeyValues() {
    this._keyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuesInput() {
    return this._keyValues.internalValue;
  }
}
export interface ClsIndexRuleTagKeyValuesValue {
  /**
  * Whether Chinese characters are contained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#contain_z_h ClsIndex#contain_z_h}
  */
  readonly containZH?: boolean | cdktf.IResolvable;
  /**
  * Whether the analysis feature is enabled for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#sql_flag ClsIndex#sql_flag}
  */
  readonly sqlFlag?: boolean | cdktf.IResolvable;
  /**
  * Field delimiter, which is meaningful only if the field type is text. Each character in the entered string represents a delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#tokenizer ClsIndex#tokenizer}
  */
  readonly tokenizer?: string;
  /**
  * Field type. Valid values: long, text, double.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#type ClsIndex#type}
  */
  readonly type: string;
}

export function clsIndexRuleTagKeyValuesValueToTerraform(struct?: ClsIndexRuleTagKeyValuesValueOutputReference | ClsIndexRuleTagKeyValuesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contain_z_h: cdktf.booleanToTerraform(struct!.containZH),
    sql_flag: cdktf.booleanToTerraform(struct!.sqlFlag),
    tokenizer: cdktf.stringToTerraform(struct!.tokenizer),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clsIndexRuleTagKeyValuesValueToHclTerraform(struct?: ClsIndexRuleTagKeyValuesValueOutputReference | ClsIndexRuleTagKeyValuesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contain_z_h: {
      value: cdktf.booleanToHclTerraform(struct!.containZH),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_flag: {
      value: cdktf.booleanToHclTerraform(struct!.sqlFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tokenizer: {
      value: cdktf.stringToHclTerraform(struct!.tokenizer),
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

export class ClsIndexRuleTagKeyValuesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsIndexRuleTagKeyValuesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containZH !== undefined) {
      hasAnyValues = true;
      internalValueResult.containZH = this._containZH;
    }
    if (this._sqlFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlFlag = this._sqlFlag;
    }
    if (this._tokenizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenizer = this._tokenizer;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleTagKeyValuesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containZH = undefined;
      this._sqlFlag = undefined;
      this._tokenizer = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containZH = value.containZH;
      this._sqlFlag = value.sqlFlag;
      this._tokenizer = value.tokenizer;
      this._type = value.type;
    }
  }

  // contain_z_h - computed: false, optional: true, required: false
  private _containZH?: boolean | cdktf.IResolvable; 
  public get containZH() {
    return this.getBooleanAttribute('contain_z_h');
  }
  public set containZH(value: boolean | cdktf.IResolvable) {
    this._containZH = value;
  }
  public resetContainZH() {
    this._containZH = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containZHInput() {
    return this._containZH;
  }

  // sql_flag - computed: false, optional: true, required: false
  private _sqlFlag?: boolean | cdktf.IResolvable; 
  public get sqlFlag() {
    return this.getBooleanAttribute('sql_flag');
  }
  public set sqlFlag(value: boolean | cdktf.IResolvable) {
    this._sqlFlag = value;
  }
  public resetSqlFlag() {
    this._sqlFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFlagInput() {
    return this._sqlFlag;
  }

  // tokenizer - computed: false, optional: true, required: false
  private _tokenizer?: string; 
  public get tokenizer() {
    return this.getStringAttribute('tokenizer');
  }
  public set tokenizer(value: string) {
    this._tokenizer = value;
  }
  public resetTokenizer() {
    this._tokenizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizerInput() {
    return this._tokenizer;
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
export interface ClsIndexRuleTagKeyValues {
  /**
  * When a key value or metafield index needs to be configured for a field, the metafield Key does not need to be prefixed with __TAG__. and is consistent with the one when logs are uploaded. __TAG__. will be prefixed automatically for display in the console..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#key ClsIndex#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#value ClsIndex#value}
  */
  readonly value?: ClsIndexRuleTagKeyValuesValue;
}

export function clsIndexRuleTagKeyValuesToTerraform(struct?: ClsIndexRuleTagKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: clsIndexRuleTagKeyValuesValueToTerraform(struct!.value),
  }
}


export function clsIndexRuleTagKeyValuesToHclTerraform(struct?: ClsIndexRuleTagKeyValues | cdktf.IResolvable): any {
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
      value: clsIndexRuleTagKeyValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleTagKeyValuesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsIndexRuleTagKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsIndexRuleTagKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleTagKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new ClsIndexRuleTagKeyValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ClsIndexRuleTagKeyValuesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ClsIndexRuleTagKeyValuesList extends cdktf.ComplexList {
  public internalValue? : ClsIndexRuleTagKeyValues[] | cdktf.IResolvable

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
  public get(index: number): ClsIndexRuleTagKeyValuesOutputReference {
    return new ClsIndexRuleTagKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsIndexRuleTag {
  /**
  * Case sensitivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#case_sensitive ClsIndex#case_sensitive}
  */
  readonly caseSensitive: boolean | cdktf.IResolvable;
  /**
  * key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#key_values ClsIndex#key_values}
  */
  readonly keyValues?: ClsIndexRuleTagKeyValues[] | cdktf.IResolvable;
}

export function clsIndexRuleTagToTerraform(struct?: ClsIndexRuleTagOutputReference | ClsIndexRuleTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    key_values: cdktf.listMapper(clsIndexRuleTagKeyValuesToTerraform, true)(struct!.keyValues),
  }
}


export function clsIndexRuleTagToHclTerraform(struct?: ClsIndexRuleTagOutputReference | ClsIndexRuleTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_values: {
      value: cdktf.listMapperHcl(clsIndexRuleTagKeyValuesToHclTerraform, true)(struct!.keyValues),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleTagKeyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsIndexRuleTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsIndexRuleTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._keyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValues = this._keyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRuleTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._keyValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._keyValues.internalValue = value.keyValues;
    }
  }

  // case_sensitive - computed: false, optional: false, required: true
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // key_values - computed: false, optional: true, required: false
  private _keyValues = new ClsIndexRuleTagKeyValuesList(this, "key_values", false);
  public get keyValues() {
    return this._keyValues;
  }
  public putKeyValues(value: ClsIndexRuleTagKeyValues[] | cdktf.IResolvable) {
    this._keyValues.internalValue = value;
  }
  public resetKeyValues() {
    this._keyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuesInput() {
    return this._keyValues.internalValue;
  }
}
export interface ClsIndexRule {
  /**
  * dynamic_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#dynamic_index ClsIndex#dynamic_index}
  */
  readonly dynamicIndex?: ClsIndexRuleDynamicIndex;
  /**
  * full_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#full_text ClsIndex#full_text}
  */
  readonly fullText?: ClsIndexRuleFullText;
  /**
  * key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#key_value ClsIndex#key_value}
  */
  readonly keyValue?: ClsIndexRuleKeyValue;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#tag ClsIndex#tag}
  */
  readonly tag?: ClsIndexRuleTag;
}

export function clsIndexRuleToTerraform(struct?: ClsIndexRuleOutputReference | ClsIndexRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_index: clsIndexRuleDynamicIndexToTerraform(struct!.dynamicIndex),
    full_text: clsIndexRuleFullTextToTerraform(struct!.fullText),
    key_value: clsIndexRuleKeyValueToTerraform(struct!.keyValue),
    tag: clsIndexRuleTagToTerraform(struct!.tag),
  }
}


export function clsIndexRuleToHclTerraform(struct?: ClsIndexRuleOutputReference | ClsIndexRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_index: {
      value: clsIndexRuleDynamicIndexToHclTerraform(struct!.dynamicIndex),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleDynamicIndexList",
    },
    full_text: {
      value: clsIndexRuleFullTextToHclTerraform(struct!.fullText),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleFullTextList",
    },
    key_value: {
      value: clsIndexRuleKeyValueToHclTerraform(struct!.keyValue),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleKeyValueList",
    },
    tag: {
      value: clsIndexRuleTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ClsIndexRuleTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsIndexRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsIndexRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicIndex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicIndex = this._dynamicIndex?.internalValue;
    }
    if (this._fullText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullText = this._fullText?.internalValue;
    }
    if (this._keyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValue = this._keyValue?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsIndexRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dynamicIndex.internalValue = undefined;
      this._fullText.internalValue = undefined;
      this._keyValue.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dynamicIndex.internalValue = value.dynamicIndex;
      this._fullText.internalValue = value.fullText;
      this._keyValue.internalValue = value.keyValue;
      this._tag.internalValue = value.tag;
    }
  }

  // dynamic_index - computed: false, optional: true, required: false
  private _dynamicIndex = new ClsIndexRuleDynamicIndexOutputReference(this, "dynamic_index");
  public get dynamicIndex() {
    return this._dynamicIndex;
  }
  public putDynamicIndex(value: ClsIndexRuleDynamicIndex) {
    this._dynamicIndex.internalValue = value;
  }
  public resetDynamicIndex() {
    this._dynamicIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIndexInput() {
    return this._dynamicIndex.internalValue;
  }

  // full_text - computed: false, optional: true, required: false
  private _fullText = new ClsIndexRuleFullTextOutputReference(this, "full_text");
  public get fullText() {
    return this._fullText;
  }
  public putFullText(value: ClsIndexRuleFullText) {
    this._fullText.internalValue = value;
  }
  public resetFullText() {
    this._fullText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullTextInput() {
    return this._fullText.internalValue;
  }

  // key_value - computed: false, optional: true, required: false
  private _keyValue = new ClsIndexRuleKeyValueOutputReference(this, "key_value");
  public get keyValue() {
    return this._keyValue;
  }
  public putKeyValue(value: ClsIndexRuleKeyValue) {
    this._keyValue.internalValue = value;
  }
  public resetKeyValue() {
    this._keyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ClsIndexRuleTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: ClsIndexRuleTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index tencentcloud_cls_index}
*/
export class ClsIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsIndex to import
  * @param importFromId The id of the existing ClsIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/cls_index tencentcloud_cls_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsIndexConfig
  */
  public constructor(scope: Construct, id: string, config: ClsIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_index',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._includeInternalFields = config.includeInternalFields;
    this._metadataFlag = config.metadataFlag;
    this._status = config.status;
    this._topicId = config.topicId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_internal_fields - computed: false, optional: true, required: false
  private _includeInternalFields?: boolean | cdktf.IResolvable; 
  public get includeInternalFields() {
    return this.getBooleanAttribute('include_internal_fields');
  }
  public set includeInternalFields(value: boolean | cdktf.IResolvable) {
    this._includeInternalFields = value;
  }
  public resetIncludeInternalFields() {
    this._includeInternalFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalFieldsInput() {
    return this._includeInternalFields;
  }

  // metadata_flag - computed: false, optional: true, required: false
  private _metadataFlag?: number; 
  public get metadataFlag() {
    return this.getNumberAttribute('metadata_flag');
  }
  public set metadataFlag(value: number) {
    this._metadataFlag = value;
  }
  public resetMetadataFlag() {
    this._metadataFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFlagInput() {
    return this._metadataFlag;
  }

  // status - computed: true, optional: true, required: false
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ClsIndexRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: ClsIndexRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_internal_fields: cdktf.booleanToTerraform(this._includeInternalFields),
      metadata_flag: cdktf.numberToTerraform(this._metadataFlag),
      status: cdktf.booleanToTerraform(this._status),
      topic_id: cdktf.stringToTerraform(this._topicId),
      rule: clsIndexRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_internal_fields: {
        value: cdktf.booleanToHclTerraform(this._includeInternalFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata_flag: {
        value: cdktf.numberToHclTerraform(this._metadataFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.booleanToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: clsIndexRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsIndexRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
