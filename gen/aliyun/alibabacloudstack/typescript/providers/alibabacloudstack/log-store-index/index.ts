// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogStoreIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#id LogStoreIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#logstore LogStoreIndex#logstore}
  */
  readonly logstore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#project LogStoreIndex#project}
  */
  readonly project: string;
  /**
  * field_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#field_search LogStoreIndex#field_search}
  */
  readonly fieldSearch?: LogStoreIndexFieldSearch[] | cdktf.IResolvable;
  /**
  * full_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#full_text LogStoreIndex#full_text}
  */
  readonly fullText?: LogStoreIndexFullText;
}
export interface LogStoreIndexFieldSearchJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#alias LogStoreIndex#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#doc_value LogStoreIndex#doc_value}
  */
  readonly docValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#name LogStoreIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#type LogStoreIndex#type}
  */
  readonly type?: string;
}

export function logStoreIndexFieldSearchJsonKeysToTerraform(struct?: LogStoreIndexFieldSearchJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    doc_value: cdktf.booleanToTerraform(struct!.docValue),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logStoreIndexFieldSearchJsonKeysToHclTerraform(struct?: LogStoreIndexFieldSearchJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    doc_value: {
      value: cdktf.booleanToHclTerraform(struct!.docValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class LogStoreIndexFieldSearchJsonKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogStoreIndexFieldSearchJsonKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._docValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docValue = this._docValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStoreIndexFieldSearchJsonKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._docValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._docValue = value.docValue;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // doc_value - computed: false, optional: true, required: false
  private _docValue?: boolean | cdktf.IResolvable; 
  public get docValue() {
    return this.getBooleanAttribute('doc_value');
  }
  public set docValue(value: boolean | cdktf.IResolvable) {
    this._docValue = value;
  }
  public resetDocValue() {
    this._docValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docValueInput() {
    return this._docValue;
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

export class LogStoreIndexFieldSearchJsonKeysList extends cdktf.ComplexList {
  public internalValue? : LogStoreIndexFieldSearchJsonKeys[] | cdktf.IResolvable

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
  public get(index: number): LogStoreIndexFieldSearchJsonKeysOutputReference {
    return new LogStoreIndexFieldSearchJsonKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogStoreIndexFieldSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#alias LogStoreIndex#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#case_sensitive LogStoreIndex#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#enable_analytics LogStoreIndex#enable_analytics}
  */
  readonly enableAnalytics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#include_chinese LogStoreIndex#include_chinese}
  */
  readonly includeChinese?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#name LogStoreIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#token LogStoreIndex#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#type LogStoreIndex#type}
  */
  readonly type?: string;
  /**
  * json_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#json_keys LogStoreIndex#json_keys}
  */
  readonly jsonKeys?: LogStoreIndexFieldSearchJsonKeys[] | cdktf.IResolvable;
}

export function logStoreIndexFieldSearchToTerraform(struct?: LogStoreIndexFieldSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    enable_analytics: cdktf.booleanToTerraform(struct!.enableAnalytics),
    include_chinese: cdktf.booleanToTerraform(struct!.includeChinese),
    name: cdktf.stringToTerraform(struct!.name),
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
    json_keys: cdktf.listMapper(logStoreIndexFieldSearchJsonKeysToTerraform, true)(struct!.jsonKeys),
  }
}


export function logStoreIndexFieldSearchToHclTerraform(struct?: LogStoreIndexFieldSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.enableAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_chinese: {
      value: cdktf.booleanToHclTerraform(struct!.includeChinese),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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
    json_keys: {
      value: cdktf.listMapperHcl(logStoreIndexFieldSearchJsonKeysToHclTerraform, true)(struct!.jsonKeys),
      isBlock: true,
      type: "set",
      storageClassType: "LogStoreIndexFieldSearchJsonKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStoreIndexFieldSearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogStoreIndexFieldSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._enableAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAnalytics = this._enableAnalytics;
    }
    if (this._includeChinese !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChinese = this._includeChinese;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._jsonKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKeys = this._jsonKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStoreIndexFieldSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._caseSensitive = undefined;
      this._enableAnalytics = undefined;
      this._includeChinese = undefined;
      this._name = undefined;
      this._token = undefined;
      this._type = undefined;
      this._jsonKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._caseSensitive = value.caseSensitive;
      this._enableAnalytics = value.enableAnalytics;
      this._includeChinese = value.includeChinese;
      this._name = value.name;
      this._token = value.token;
      this._type = value.type;
      this._jsonKeys.internalValue = value.jsonKeys;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // enable_analytics - computed: false, optional: true, required: false
  private _enableAnalytics?: boolean | cdktf.IResolvable; 
  public get enableAnalytics() {
    return this.getBooleanAttribute('enable_analytics');
  }
  public set enableAnalytics(value: boolean | cdktf.IResolvable) {
    this._enableAnalytics = value;
  }
  public resetEnableAnalytics() {
    this._enableAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnalyticsInput() {
    return this._enableAnalytics;
  }

  // include_chinese - computed: false, optional: true, required: false
  private _includeChinese?: boolean | cdktf.IResolvable; 
  public get includeChinese() {
    return this.getBooleanAttribute('include_chinese');
  }
  public set includeChinese(value: boolean | cdktf.IResolvable) {
    this._includeChinese = value;
  }
  public resetIncludeChinese() {
    this._includeChinese = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChineseInput() {
    return this._includeChinese;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // json_keys - computed: false, optional: true, required: false
  private _jsonKeys = new LogStoreIndexFieldSearchJsonKeysList(this, "json_keys", true);
  public get jsonKeys() {
    return this._jsonKeys;
  }
  public putJsonKeys(value: LogStoreIndexFieldSearchJsonKeys[] | cdktf.IResolvable) {
    this._jsonKeys.internalValue = value;
  }
  public resetJsonKeys() {
    this._jsonKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeysInput() {
    return this._jsonKeys.internalValue;
  }
}

export class LogStoreIndexFieldSearchList extends cdktf.ComplexList {
  public internalValue? : LogStoreIndexFieldSearch[] | cdktf.IResolvable

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
  public get(index: number): LogStoreIndexFieldSearchOutputReference {
    return new LogStoreIndexFieldSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogStoreIndexFullText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#case_sensitive LogStoreIndex#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#include_chinese LogStoreIndex#include_chinese}
  */
  readonly includeChinese?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#token LogStoreIndex#token}
  */
  readonly token?: string;
}

export function logStoreIndexFullTextToTerraform(struct?: LogStoreIndexFullTextOutputReference | LogStoreIndexFullText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    include_chinese: cdktf.booleanToTerraform(struct!.includeChinese),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function logStoreIndexFullTextToHclTerraform(struct?: LogStoreIndexFullTextOutputReference | LogStoreIndexFullText): any {
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
    include_chinese: {
      value: cdktf.booleanToHclTerraform(struct!.includeChinese),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStoreIndexFullTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogStoreIndexFullText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._includeChinese !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChinese = this._includeChinese;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStoreIndexFullText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._includeChinese = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._includeChinese = value.includeChinese;
      this._token = value.token;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // include_chinese - computed: false, optional: true, required: false
  private _includeChinese?: boolean | cdktf.IResolvable; 
  public get includeChinese() {
    return this.getBooleanAttribute('include_chinese');
  }
  public set includeChinese(value: boolean | cdktf.IResolvable) {
    this._includeChinese = value;
  }
  public resetIncludeChinese() {
    this._includeChinese = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChineseInput() {
    return this._includeChinese;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index alibabacloudstack_log_store_index}
*/
export class LogStoreIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_log_store_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogStoreIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogStoreIndex to import
  * @param importFromId The id of the existing LogStoreIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogStoreIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_log_store_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/log_store_index alibabacloudstack_log_store_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogStoreIndexConfig
  */
  public constructor(scope: Construct, id: string, config: LogStoreIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_log_store_index',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
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
    this._logstore = config.logstore;
    this._project = config.project;
    this._fieldSearch.internalValue = config.fieldSearch;
    this._fullText.internalValue = config.fullText;
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

  // logstore - computed: false, optional: false, required: true
  private _logstore?: string; 
  public get logstore() {
    return this.getStringAttribute('logstore');
  }
  public set logstore(value: string) {
    this._logstore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreInput() {
    return this._logstore;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // field_search - computed: false, optional: true, required: false
  private _fieldSearch = new LogStoreIndexFieldSearchList(this, "field_search", true);
  public get fieldSearch() {
    return this._fieldSearch;
  }
  public putFieldSearch(value: LogStoreIndexFieldSearch[] | cdktf.IResolvable) {
    this._fieldSearch.internalValue = value;
  }
  public resetFieldSearch() {
    this._fieldSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSearchInput() {
    return this._fieldSearch.internalValue;
  }

  // full_text - computed: false, optional: true, required: false
  private _fullText = new LogStoreIndexFullTextOutputReference(this, "full_text");
  public get fullText() {
    return this._fullText;
  }
  public putFullText(value: LogStoreIndexFullText) {
    this._fullText.internalValue = value;
  }
  public resetFullText() {
    this._fullText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullTextInput() {
    return this._fullText.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      logstore: cdktf.stringToTerraform(this._logstore),
      project: cdktf.stringToTerraform(this._project),
      field_search: cdktf.listMapper(logStoreIndexFieldSearchToTerraform, true)(this._fieldSearch.internalValue),
      full_text: logStoreIndexFullTextToTerraform(this._fullText.internalValue),
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
      logstore: {
        value: cdktf.stringToHclTerraform(this._logstore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_search: {
        value: cdktf.listMapperHcl(logStoreIndexFieldSearchToHclTerraform, true)(this._fieldSearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogStoreIndexFieldSearchList",
      },
      full_text: {
        value: logStoreIndexFullTextToHclTerraform(this._fullText.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogStoreIndexFullTextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
