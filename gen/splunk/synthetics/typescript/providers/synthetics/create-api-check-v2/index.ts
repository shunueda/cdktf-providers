// https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CreateApiCheckV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#id CreateApiCheckV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#test CreateApiCheckV2#test}
  */
  readonly test: CreateApiCheckV2Test[] | cdktf.IResolvable;
}
export interface CreateApiCheckV2TestCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#key CreateApiCheckV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#value CreateApiCheckV2#value}
  */
  readonly value?: string;
}

export function createApiCheckV2TestCustomPropertiesToTerraform(struct?: CreateApiCheckV2TestCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function createApiCheckV2TestCustomPropertiesToHclTerraform(struct?: CreateApiCheckV2TestCustomProperties | cdktf.IResolvable): any {
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

export class CreateApiCheckV2TestCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateApiCheckV2TestCustomProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateApiCheckV2TestCustomProperties | cdktf.IResolvable | undefined) {
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

export class CreateApiCheckV2TestCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : CreateApiCheckV2TestCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): CreateApiCheckV2TestCustomPropertiesOutputReference {
    return new CreateApiCheckV2TestCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateApiCheckV2TestRequestsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#body CreateApiCheckV2#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#headers CreateApiCheckV2#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#name CreateApiCheckV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#request_method CreateApiCheckV2#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#url CreateApiCheckV2#url}
  */
  readonly url?: string;
}

export function createApiCheckV2TestRequestsConfigurationToTerraform(struct?: CreateApiCheckV2TestRequestsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    name: cdktf.stringToTerraform(struct!.name),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function createApiCheckV2TestRequestsConfigurationToHclTerraform(struct?: CreateApiCheckV2TestRequestsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_method: {
      value: cdktf.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateApiCheckV2TestRequestsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateApiCheckV2TestRequestsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateApiCheckV2TestRequestsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._headers = undefined;
      this._name = undefined;
      this._requestMethod = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._headers = value.headers;
      this._name = value.name;
      this._requestMethod = value.requestMethod;
      this._url = value.url;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class CreateApiCheckV2TestRequestsConfigurationList extends cdktf.ComplexList {
  public internalValue? : CreateApiCheckV2TestRequestsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CreateApiCheckV2TestRequestsConfigurationOutputReference {
    return new CreateApiCheckV2TestRequestsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateApiCheckV2TestRequestsSetup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#code CreateApiCheckV2#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#extractor CreateApiCheckV2#extractor}
  */
  readonly extractor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#name CreateApiCheckV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#source CreateApiCheckV2#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#type CreateApiCheckV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#value CreateApiCheckV2#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#variable CreateApiCheckV2#variable}
  */
  readonly variable?: string;
}

export function createApiCheckV2TestRequestsSetupToTerraform(struct?: CreateApiCheckV2TestRequestsSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    extractor: cdktf.stringToTerraform(struct!.extractor),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function createApiCheckV2TestRequestsSetupToHclTerraform(struct?: CreateApiCheckV2TestRequestsSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractor: {
      value: cdktf.stringToHclTerraform(struct!.extractor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateApiCheckV2TestRequestsSetupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateApiCheckV2TestRequestsSetup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._extractor !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractor = this._extractor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateApiCheckV2TestRequestsSetup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._extractor = undefined;
      this._name = undefined;
      this._source = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._extractor = value.extractor;
      this._name = value.name;
      this._source = value.source;
      this._type = value.type;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // extractor - computed: false, optional: true, required: false
  private _extractor?: string; 
  public get extractor() {
    return this.getStringAttribute('extractor');
  }
  public set extractor(value: string) {
    this._extractor = value;
  }
  public resetExtractor() {
    this._extractor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorInput() {
    return this._extractor;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class CreateApiCheckV2TestRequestsSetupList extends cdktf.ComplexList {
  public internalValue? : CreateApiCheckV2TestRequestsSetup[] | cdktf.IResolvable

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
  public get(index: number): CreateApiCheckV2TestRequestsSetupOutputReference {
    return new CreateApiCheckV2TestRequestsSetupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateApiCheckV2TestRequestsValidations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#actual CreateApiCheckV2#actual}
  */
  readonly actual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#code CreateApiCheckV2#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#comparator CreateApiCheckV2#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#expected CreateApiCheckV2#expected}
  */
  readonly expected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#extractor CreateApiCheckV2#extractor}
  */
  readonly extractor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#name CreateApiCheckV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#source CreateApiCheckV2#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#type CreateApiCheckV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#value CreateApiCheckV2#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#variable CreateApiCheckV2#variable}
  */
  readonly variable?: string;
}

export function createApiCheckV2TestRequestsValidationsToTerraform(struct?: CreateApiCheckV2TestRequestsValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actual: cdktf.stringToTerraform(struct!.actual),
    code: cdktf.stringToTerraform(struct!.code),
    comparator: cdktf.stringToTerraform(struct!.comparator),
    expected: cdktf.stringToTerraform(struct!.expected),
    extractor: cdktf.stringToTerraform(struct!.extractor),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function createApiCheckV2TestRequestsValidationsToHclTerraform(struct?: CreateApiCheckV2TestRequestsValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actual: {
      value: cdktf.stringToHclTerraform(struct!.actual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected: {
      value: cdktf.stringToHclTerraform(struct!.expected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractor: {
      value: cdktf.stringToHclTerraform(struct!.extractor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateApiCheckV2TestRequestsValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateApiCheckV2TestRequestsValidations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actual !== undefined) {
      hasAnyValues = true;
      internalValueResult.actual = this._actual;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._expected !== undefined) {
      hasAnyValues = true;
      internalValueResult.expected = this._expected;
    }
    if (this._extractor !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractor = this._extractor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateApiCheckV2TestRequestsValidations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actual = undefined;
      this._code = undefined;
      this._comparator = undefined;
      this._expected = undefined;
      this._extractor = undefined;
      this._name = undefined;
      this._source = undefined;
      this._type = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actual = value.actual;
      this._code = value.code;
      this._comparator = value.comparator;
      this._expected = value.expected;
      this._extractor = value.extractor;
      this._name = value.name;
      this._source = value.source;
      this._type = value.type;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // actual - computed: false, optional: true, required: false
  private _actual?: string; 
  public get actual() {
    return this.getStringAttribute('actual');
  }
  public set actual(value: string) {
    this._actual = value;
  }
  public resetActual() {
    this._actual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actualInput() {
    return this._actual;
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // comparator - computed: false, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // expected - computed: false, optional: true, required: false
  private _expected?: string; 
  public get expected() {
    return this.getStringAttribute('expected');
  }
  public set expected(value: string) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
  }

  // extractor - computed: false, optional: true, required: false
  private _extractor?: string; 
  public get extractor() {
    return this.getStringAttribute('extractor');
  }
  public set extractor(value: string) {
    this._extractor = value;
  }
  public resetExtractor() {
    this._extractor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorInput() {
    return this._extractor;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class CreateApiCheckV2TestRequestsValidationsList extends cdktf.ComplexList {
  public internalValue? : CreateApiCheckV2TestRequestsValidations[] | cdktf.IResolvable

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
  public get(index: number): CreateApiCheckV2TestRequestsValidationsOutputReference {
    return new CreateApiCheckV2TestRequestsValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateApiCheckV2TestRequests {
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#configuration CreateApiCheckV2#configuration}
  */
  readonly configuration?: CreateApiCheckV2TestRequestsConfiguration[] | cdktf.IResolvable;
  /**
  * setup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#setup CreateApiCheckV2#setup}
  */
  readonly setup?: CreateApiCheckV2TestRequestsSetup[] | cdktf.IResolvable;
  /**
  * validations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#validations CreateApiCheckV2#validations}
  */
  readonly validations?: CreateApiCheckV2TestRequestsValidations[] | cdktf.IResolvable;
}

export function createApiCheckV2TestRequestsToTerraform(struct?: CreateApiCheckV2TestRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.listMapper(createApiCheckV2TestRequestsConfigurationToTerraform, true)(struct!.configuration),
    setup: cdktf.listMapper(createApiCheckV2TestRequestsSetupToTerraform, true)(struct!.setup),
    validations: cdktf.listMapper(createApiCheckV2TestRequestsValidationsToTerraform, true)(struct!.validations),
  }
}


export function createApiCheckV2TestRequestsToHclTerraform(struct?: CreateApiCheckV2TestRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.listMapperHcl(createApiCheckV2TestRequestsConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "CreateApiCheckV2TestRequestsConfigurationList",
    },
    setup: {
      value: cdktf.listMapperHcl(createApiCheckV2TestRequestsSetupToHclTerraform, true)(struct!.setup),
      isBlock: true,
      type: "list",
      storageClassType: "CreateApiCheckV2TestRequestsSetupList",
    },
    validations: {
      value: cdktf.listMapperHcl(createApiCheckV2TestRequestsValidationsToHclTerraform, true)(struct!.validations),
      isBlock: true,
      type: "list",
      storageClassType: "CreateApiCheckV2TestRequestsValidationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateApiCheckV2TestRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateApiCheckV2TestRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._setup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setup = this._setup?.internalValue;
    }
    if (this._validations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validations = this._validations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateApiCheckV2TestRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._setup.internalValue = undefined;
      this._validations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._setup.internalValue = value.setup;
      this._validations.internalValue = value.validations;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new CreateApiCheckV2TestRequestsConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: CreateApiCheckV2TestRequestsConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // setup - computed: false, optional: true, required: false
  private _setup = new CreateApiCheckV2TestRequestsSetupList(this, "setup", false);
  public get setup() {
    return this._setup;
  }
  public putSetup(value: CreateApiCheckV2TestRequestsSetup[] | cdktf.IResolvable) {
    this._setup.internalValue = value;
  }
  public resetSetup() {
    this._setup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupInput() {
    return this._setup.internalValue;
  }

  // validations - computed: false, optional: true, required: false
  private _validations = new CreateApiCheckV2TestRequestsValidationsList(this, "validations", false);
  public get validations() {
    return this._validations;
  }
  public putValidations(value: CreateApiCheckV2TestRequestsValidations[] | cdktf.IResolvable) {
    this._validations.internalValue = value;
  }
  public resetValidations() {
    this._validations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationsInput() {
    return this._validations.internalValue;
  }
}

export class CreateApiCheckV2TestRequestsList extends cdktf.ComplexList {
  public internalValue? : CreateApiCheckV2TestRequests[] | cdktf.IResolvable

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
  public get(index: number): CreateApiCheckV2TestRequestsOutputReference {
    return new CreateApiCheckV2TestRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateApiCheckV2Test {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#active CreateApiCheckV2#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#automatic_retries CreateApiCheckV2#automatic_retries}
  */
  readonly automaticRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#device_id CreateApiCheckV2#device_id}
  */
  readonly deviceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#frequency CreateApiCheckV2#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#location_ids CreateApiCheckV2#location_ids}
  */
  readonly locationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#name CreateApiCheckV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#scheduling_strategy CreateApiCheckV2#scheduling_strategy}
  */
  readonly schedulingStrategy?: string;
  /**
  * custom_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#custom_properties CreateApiCheckV2#custom_properties}
  */
  readonly customProperties?: CreateApiCheckV2TestCustomProperties[] | cdktf.IResolvable;
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#requests CreateApiCheckV2#requests}
  */
  readonly requests?: CreateApiCheckV2TestRequests[] | cdktf.IResolvable;
}

export function createApiCheckV2TestToTerraform(struct?: CreateApiCheckV2Test | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    automatic_retries: cdktf.numberToTerraform(struct!.automaticRetries),
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    location_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locationIds),
    name: cdktf.stringToTerraform(struct!.name),
    scheduling_strategy: cdktf.stringToTerraform(struct!.schedulingStrategy),
    custom_properties: cdktf.listMapper(createApiCheckV2TestCustomPropertiesToTerraform, true)(struct!.customProperties),
    requests: cdktf.listMapper(createApiCheckV2TestRequestsToTerraform, true)(struct!.requests),
  }
}


export function createApiCheckV2TestToHclTerraform(struct?: CreateApiCheckV2Test | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_retries: {
      value: cdktf.numberToHclTerraform(struct!.automaticRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_strategy: {
      value: cdktf.stringToHclTerraform(struct!.schedulingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_properties: {
      value: cdktf.listMapperHcl(createApiCheckV2TestCustomPropertiesToHclTerraform, true)(struct!.customProperties),
      isBlock: true,
      type: "set",
      storageClassType: "CreateApiCheckV2TestCustomPropertiesList",
    },
    requests: {
      value: cdktf.listMapperHcl(createApiCheckV2TestRequestsToHclTerraform, true)(struct!.requests),
      isBlock: true,
      type: "list",
      storageClassType: "CreateApiCheckV2TestRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateApiCheckV2TestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateApiCheckV2Test | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._automaticRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRetries = this._automaticRetries;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._locationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationIds = this._locationIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedulingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingStrategy = this._schedulingStrategy;
    }
    if (this._customProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateApiCheckV2Test | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._automaticRetries = undefined;
      this._deviceId = undefined;
      this._frequency = undefined;
      this._locationIds = undefined;
      this._name = undefined;
      this._schedulingStrategy = undefined;
      this._customProperties.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._automaticRetries = value.automaticRetries;
      this._deviceId = value.deviceId;
      this._frequency = value.frequency;
      this._locationIds = value.locationIds;
      this._name = value.name;
      this._schedulingStrategy = value.schedulingStrategy;
      this._customProperties.internalValue = value.customProperties;
      this._requests.internalValue = value.requests;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // automatic_retries - computed: true, optional: true, required: false
  private _automaticRetries?: number; 
  public get automaticRetries() {
    return this.getNumberAttribute('automatic_retries');
  }
  public set automaticRetries(value: number) {
    this._automaticRetries = value;
  }
  public resetAutomaticRetries() {
    this._automaticRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRetriesInput() {
    return this._automaticRetries;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // location_ids - computed: false, optional: false, required: true
  private _locationIds?: string[]; 
  public get locationIds() {
    return this.getListAttribute('location_ids');
  }
  public set locationIds(value: string[]) {
    this._locationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdsInput() {
    return this._locationIds;
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

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string; 
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new CreateApiCheckV2TestCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: CreateApiCheckV2TestCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new CreateApiCheckV2TestRequestsList(this, "requests", false);
  public get requests() {
    return this._requests;
  }
  public putRequests(value: CreateApiCheckV2TestRequests[] | cdktf.IResolvable) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}

export class CreateApiCheckV2TestList extends cdktf.ComplexList {
  public internalValue? : CreateApiCheckV2Test[] | cdktf.IResolvable

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
  public get(index: number): CreateApiCheckV2TestOutputReference {
    return new CreateApiCheckV2TestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2 synthetics_create_api_check_v2}
*/
export class CreateApiCheckV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_create_api_check_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CreateApiCheckV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CreateApiCheckV2 to import
  * @param importFromId The id of the existing CreateApiCheckV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CreateApiCheckV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_create_api_check_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/resources/create_api_check_v2 synthetics_create_api_check_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CreateApiCheckV2Config
  */
  public constructor(scope: Construct, id: string, config: CreateApiCheckV2Config) {
    super(scope, id, {
      terraformResourceType: 'synthetics_create_api_check_v2',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.17',
        providerVersionConstraint: '2.0.17'
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
    this._test.internalValue = config.test;
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

  // test - computed: false, optional: false, required: true
  private _test = new CreateApiCheckV2TestList(this, "test", true);
  public get test() {
    return this._test;
  }
  public putTest(value: CreateApiCheckV2Test[] | cdktf.IResolvable) {
    this._test.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      test: cdktf.listMapper(createApiCheckV2TestToTerraform, true)(this._test.internalValue),
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
      test: {
        value: cdktf.listMapperHcl(createApiCheckV2TestToHclTerraform, true)(this._test.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CreateApiCheckV2TestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
