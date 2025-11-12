// https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CreateBrowserCheckV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#id CreateBrowserCheckV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#test CreateBrowserCheckV2#test}
  */
  readonly test: CreateBrowserCheckV2Test[] | cdktf.IResolvable;
}
export interface CreateBrowserCheckV2TestAdvancedSettingsAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#password CreateBrowserCheckV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#username CreateBrowserCheckV2#username}
  */
  readonly username?: string;
}

export function createBrowserCheckV2TestAdvancedSettingsAuthenticationToTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function createBrowserCheckV2TestAdvancedSettingsAuthenticationToHclTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckV2TestAdvancedSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestAdvancedSettingsAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestAdvancedSettingsAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class CreateBrowserCheckV2TestAdvancedSettingsAuthenticationList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestAdvancedSettingsAuthentication[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestAdvancedSettingsAuthenticationOutputReference {
    return new CreateBrowserCheckV2TestAdvancedSettingsAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestAdvancedSettingsChromeFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#name CreateBrowserCheckV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#value CreateBrowserCheckV2#value}
  */
  readonly value?: string;
}

export function createBrowserCheckV2TestAdvancedSettingsChromeFlagsToTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsChromeFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function createBrowserCheckV2TestAdvancedSettingsChromeFlagsToHclTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsChromeFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class CreateBrowserCheckV2TestAdvancedSettingsChromeFlagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestAdvancedSettingsChromeFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestAdvancedSettingsChromeFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class CreateBrowserCheckV2TestAdvancedSettingsChromeFlagsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestAdvancedSettingsChromeFlags[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestAdvancedSettingsChromeFlagsOutputReference {
    return new CreateBrowserCheckV2TestAdvancedSettingsChromeFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestAdvancedSettingsCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#domain CreateBrowserCheckV2#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#key CreateBrowserCheckV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#path CreateBrowserCheckV2#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#value CreateBrowserCheckV2#value}
  */
  readonly value?: string;
}

export function createBrowserCheckV2TestAdvancedSettingsCookiesToTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function createBrowserCheckV2TestAdvancedSettingsCookiesToHclTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class CreateBrowserCheckV2TestAdvancedSettingsCookiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestAdvancedSettingsCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestAdvancedSettingsCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._key = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._key = value.key;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class CreateBrowserCheckV2TestAdvancedSettingsCookiesList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestAdvancedSettingsCookies[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestAdvancedSettingsCookiesOutputReference {
    return new CreateBrowserCheckV2TestAdvancedSettingsCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestAdvancedSettingsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#domain CreateBrowserCheckV2#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#name CreateBrowserCheckV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#value CreateBrowserCheckV2#value}
  */
  readonly value?: string;
}

export function createBrowserCheckV2TestAdvancedSettingsHeadersToTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function createBrowserCheckV2TestAdvancedSettingsHeadersToHclTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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

export class CreateBrowserCheckV2TestAdvancedSettingsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestAdvancedSettingsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestAdvancedSettingsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

export class CreateBrowserCheckV2TestAdvancedSettingsHeadersList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestAdvancedSettingsHeaders[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestAdvancedSettingsHeadersOutputReference {
    return new CreateBrowserCheckV2TestAdvancedSettingsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestAdvancedSettingsHostOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#keep_host_header CreateBrowserCheckV2#keep_host_header}
  */
  readonly keepHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#source CreateBrowserCheckV2#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#target CreateBrowserCheckV2#target}
  */
  readonly target?: string;
}

export function createBrowserCheckV2TestAdvancedSettingsHostOverridesToTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsHostOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_host_header: cdktf.booleanToTerraform(struct!.keepHostHeader),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function createBrowserCheckV2TestAdvancedSettingsHostOverridesToHclTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettingsHostOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.keepHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckV2TestAdvancedSettingsHostOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestAdvancedSettingsHostOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepHostHeader = this._keepHostHeader;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestAdvancedSettingsHostOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepHostHeader = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepHostHeader = value.keepHostHeader;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // keep_host_header - computed: false, optional: true, required: false
  private _keepHostHeader?: boolean | cdktf.IResolvable; 
  public get keepHostHeader() {
    return this.getBooleanAttribute('keep_host_header');
  }
  public set keepHostHeader(value: boolean | cdktf.IResolvable) {
    this._keepHostHeader = value;
  }
  public resetKeepHostHeader() {
    this._keepHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepHostHeaderInput() {
    return this._keepHostHeader;
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class CreateBrowserCheckV2TestAdvancedSettingsHostOverridesList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestAdvancedSettingsHostOverrides[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestAdvancedSettingsHostOverridesOutputReference {
    return new CreateBrowserCheckV2TestAdvancedSettingsHostOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestAdvancedSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#collect_interactive_metrics CreateBrowserCheckV2#collect_interactive_metrics}
  */
  readonly collectInteractiveMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#user_agent CreateBrowserCheckV2#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#verify_certificates CreateBrowserCheckV2#verify_certificates}
  */
  readonly verifyCertificates: boolean | cdktf.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#authentication CreateBrowserCheckV2#authentication}
  */
  readonly authentication?: CreateBrowserCheckV2TestAdvancedSettingsAuthentication[] | cdktf.IResolvable;
  /**
  * chrome_flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#chrome_flags CreateBrowserCheckV2#chrome_flags}
  */
  readonly chromeFlags?: CreateBrowserCheckV2TestAdvancedSettingsChromeFlags[] | cdktf.IResolvable;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#cookies CreateBrowserCheckV2#cookies}
  */
  readonly cookies?: CreateBrowserCheckV2TestAdvancedSettingsCookies[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#headers CreateBrowserCheckV2#headers}
  */
  readonly headers?: CreateBrowserCheckV2TestAdvancedSettingsHeaders[] | cdktf.IResolvable;
  /**
  * host_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#host_overrides CreateBrowserCheckV2#host_overrides}
  */
  readonly hostOverrides?: CreateBrowserCheckV2TestAdvancedSettingsHostOverrides[] | cdktf.IResolvable;
}

export function createBrowserCheckV2TestAdvancedSettingsToTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collect_interactive_metrics: cdktf.booleanToTerraform(struct!.collectInteractiveMetrics),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
    verify_certificates: cdktf.booleanToTerraform(struct!.verifyCertificates),
    authentication: cdktf.listMapper(createBrowserCheckV2TestAdvancedSettingsAuthenticationToTerraform, true)(struct!.authentication),
    chrome_flags: cdktf.listMapper(createBrowserCheckV2TestAdvancedSettingsChromeFlagsToTerraform, true)(struct!.chromeFlags),
    cookies: cdktf.listMapper(createBrowserCheckV2TestAdvancedSettingsCookiesToTerraform, true)(struct!.cookies),
    headers: cdktf.listMapper(createBrowserCheckV2TestAdvancedSettingsHeadersToTerraform, true)(struct!.headers),
    host_overrides: cdktf.listMapper(createBrowserCheckV2TestAdvancedSettingsHostOverridesToTerraform, true)(struct!.hostOverrides),
  }
}


export function createBrowserCheckV2TestAdvancedSettingsToHclTerraform(struct?: CreateBrowserCheckV2TestAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collect_interactive_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.collectInteractiveMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestAdvancedSettingsAuthenticationToHclTerraform, true)(struct!.authentication),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestAdvancedSettingsAuthenticationList",
    },
    chrome_flags: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestAdvancedSettingsChromeFlagsToHclTerraform, true)(struct!.chromeFlags),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestAdvancedSettingsChromeFlagsList",
    },
    cookies: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestAdvancedSettingsCookiesToHclTerraform, true)(struct!.cookies),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestAdvancedSettingsCookiesList",
    },
    headers: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestAdvancedSettingsHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestAdvancedSettingsHeadersList",
    },
    host_overrides: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestAdvancedSettingsHostOverridesToHclTerraform, true)(struct!.hostOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestAdvancedSettingsHostOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckV2TestAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestAdvancedSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectInteractiveMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectInteractiveMetrics = this._collectInteractiveMetrics;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._verifyCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificates = this._verifyCertificates;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._chromeFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chromeFlags = this._chromeFlags?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._hostOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostOverrides = this._hostOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestAdvancedSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectInteractiveMetrics = undefined;
      this._userAgent = undefined;
      this._verifyCertificates = undefined;
      this._authentication.internalValue = undefined;
      this._chromeFlags.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._hostOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectInteractiveMetrics = value.collectInteractiveMetrics;
      this._userAgent = value.userAgent;
      this._verifyCertificates = value.verifyCertificates;
      this._authentication.internalValue = value.authentication;
      this._chromeFlags.internalValue = value.chromeFlags;
      this._cookies.internalValue = value.cookies;
      this._headers.internalValue = value.headers;
      this._hostOverrides.internalValue = value.hostOverrides;
    }
  }

  // collect_interactive_metrics - computed: false, optional: true, required: false
  private _collectInteractiveMetrics?: boolean | cdktf.IResolvable; 
  public get collectInteractiveMetrics() {
    return this.getBooleanAttribute('collect_interactive_metrics');
  }
  public set collectInteractiveMetrics(value: boolean | cdktf.IResolvable) {
    this._collectInteractiveMetrics = value;
  }
  public resetCollectInteractiveMetrics() {
    this._collectInteractiveMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectInteractiveMetricsInput() {
    return this._collectInteractiveMetrics;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // verify_certificates - computed: false, optional: false, required: true
  private _verifyCertificates?: boolean | cdktf.IResolvable; 
  public get verifyCertificates() {
    return this.getBooleanAttribute('verify_certificates');
  }
  public set verifyCertificates(value: boolean | cdktf.IResolvable) {
    this._verifyCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificatesInput() {
    return this._verifyCertificates;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new CreateBrowserCheckV2TestAdvancedSettingsAuthenticationList(this, "authentication", true);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: CreateBrowserCheckV2TestAdvancedSettingsAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // chrome_flags - computed: false, optional: true, required: false
  private _chromeFlags = new CreateBrowserCheckV2TestAdvancedSettingsChromeFlagsList(this, "chrome_flags", true);
  public get chromeFlags() {
    return this._chromeFlags;
  }
  public putChromeFlags(value: CreateBrowserCheckV2TestAdvancedSettingsChromeFlags[] | cdktf.IResolvable) {
    this._chromeFlags.internalValue = value;
  }
  public resetChromeFlags() {
    this._chromeFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromeFlagsInput() {
    return this._chromeFlags.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new CreateBrowserCheckV2TestAdvancedSettingsCookiesList(this, "cookies", true);
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: CreateBrowserCheckV2TestAdvancedSettingsCookies[] | cdktf.IResolvable) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CreateBrowserCheckV2TestAdvancedSettingsHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CreateBrowserCheckV2TestAdvancedSettingsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // host_overrides - computed: false, optional: true, required: false
  private _hostOverrides = new CreateBrowserCheckV2TestAdvancedSettingsHostOverridesList(this, "host_overrides", true);
  public get hostOverrides() {
    return this._hostOverrides;
  }
  public putHostOverrides(value: CreateBrowserCheckV2TestAdvancedSettingsHostOverrides[] | cdktf.IResolvable) {
    this._hostOverrides.internalValue = value;
  }
  public resetHostOverrides() {
    this._hostOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOverridesInput() {
    return this._hostOverrides.internalValue;
  }
}

export class CreateBrowserCheckV2TestAdvancedSettingsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestAdvancedSettings[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestAdvancedSettingsOutputReference {
    return new CreateBrowserCheckV2TestAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#key CreateBrowserCheckV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#value CreateBrowserCheckV2#value}
  */
  readonly value?: string;
}

export function createBrowserCheckV2TestCustomPropertiesToTerraform(struct?: CreateBrowserCheckV2TestCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function createBrowserCheckV2TestCustomPropertiesToHclTerraform(struct?: CreateBrowserCheckV2TestCustomProperties | cdktf.IResolvable): any {
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

export class CreateBrowserCheckV2TestCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestCustomProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CreateBrowserCheckV2TestCustomProperties | cdktf.IResolvable | undefined) {
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

export class CreateBrowserCheckV2TestCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestCustomPropertiesOutputReference {
    return new CreateBrowserCheckV2TestCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestTransactionsStepsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#url CreateBrowserCheckV2#url}
  */
  readonly url?: string;
}

export function createBrowserCheckV2TestTransactionsStepsOptionsToTerraform(struct?: CreateBrowserCheckV2TestTransactionsStepsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function createBrowserCheckV2TestTransactionsStepsOptionsToHclTerraform(struct?: CreateBrowserCheckV2TestTransactionsStepsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CreateBrowserCheckV2TestTransactionsStepsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestTransactionsStepsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestTransactionsStepsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
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

export class CreateBrowserCheckV2TestTransactionsStepsOptionsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestTransactionsStepsOptions[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestTransactionsStepsOptionsOutputReference {
    return new CreateBrowserCheckV2TestTransactionsStepsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestTransactionsSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#action CreateBrowserCheckV2#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#duration CreateBrowserCheckV2#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#max_wait_time CreateBrowserCheckV2#max_wait_time}
  */
  readonly maxWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#name CreateBrowserCheckV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#option_selector CreateBrowserCheckV2#option_selector}
  */
  readonly optionSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#option_selector_type CreateBrowserCheckV2#option_selector_type}
  */
  readonly optionSelectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#selector CreateBrowserCheckV2#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#selector_type CreateBrowserCheckV2#selector_type}
  */
  readonly selectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#type CreateBrowserCheckV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#url CreateBrowserCheckV2#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#value CreateBrowserCheckV2#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#variable_name CreateBrowserCheckV2#variable_name}
  */
  readonly variableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#wait_for_nav CreateBrowserCheckV2#wait_for_nav}
  */
  readonly waitForNav?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#wait_for_nav_timeout CreateBrowserCheckV2#wait_for_nav_timeout}
  */
  readonly waitForNavTimeout?: number;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#options CreateBrowserCheckV2#options}
  */
  readonly options?: CreateBrowserCheckV2TestTransactionsStepsOptions[] | cdktf.IResolvable;
}

export function createBrowserCheckV2TestTransactionsStepsToTerraform(struct?: CreateBrowserCheckV2TestTransactionsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    duration: cdktf.numberToTerraform(struct!.duration),
    max_wait_time: cdktf.numberToTerraform(struct!.maxWaitTime),
    name: cdktf.stringToTerraform(struct!.name),
    option_selector: cdktf.stringToTerraform(struct!.optionSelector),
    option_selector_type: cdktf.stringToTerraform(struct!.optionSelectorType),
    selector: cdktf.stringToTerraform(struct!.selector),
    selector_type: cdktf.stringToTerraform(struct!.selectorType),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    value: cdktf.stringToTerraform(struct!.value),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
    wait_for_nav: cdktf.booleanToTerraform(struct!.waitForNav),
    wait_for_nav_timeout: cdktf.numberToTerraform(struct!.waitForNavTimeout),
    options: cdktf.listMapper(createBrowserCheckV2TestTransactionsStepsOptionsToTerraform, true)(struct!.options),
  }
}


export function createBrowserCheckV2TestTransactionsStepsToHclTerraform(struct?: CreateBrowserCheckV2TestTransactionsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.maxWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_selector: {
      value: cdktf.stringToHclTerraform(struct!.optionSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_selector_type: {
      value: cdktf.stringToHclTerraform(struct!.optionSelectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector_type: {
      value: cdktf.stringToHclTerraform(struct!.selectorType),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_nav: {
      value: cdktf.booleanToHclTerraform(struct!.waitForNav),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_nav_timeout: {
      value: cdktf.numberToHclTerraform(struct!.waitForNavTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestTransactionsStepsOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestTransactionsStepsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckV2TestTransactionsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestTransactionsSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._maxWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTime = this._maxWaitTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optionSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionSelector = this._optionSelector;
    }
    if (this._optionSelectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionSelectorType = this._optionSelectorType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._selectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorType = this._selectorType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    if (this._waitForNav !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForNav = this._waitForNav;
    }
    if (this._waitForNavTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForNavTimeout = this._waitForNavTimeout;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestTransactionsSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._duration = undefined;
      this._maxWaitTime = undefined;
      this._name = undefined;
      this._optionSelector = undefined;
      this._optionSelectorType = undefined;
      this._selector = undefined;
      this._selectorType = undefined;
      this._type = undefined;
      this._url = undefined;
      this._value = undefined;
      this._variableName = undefined;
      this._waitForNav = undefined;
      this._waitForNavTimeout = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._duration = value.duration;
      this._maxWaitTime = value.maxWaitTime;
      this._name = value.name;
      this._optionSelector = value.optionSelector;
      this._optionSelectorType = value.optionSelectorType;
      this._selector = value.selector;
      this._selectorType = value.selectorType;
      this._type = value.type;
      this._url = value.url;
      this._value = value.value;
      this._variableName = value.variableName;
      this._waitForNav = value.waitForNav;
      this._waitForNavTimeout = value.waitForNavTimeout;
      this._options.internalValue = value.options;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // max_wait_time - computed: false, optional: true, required: false
  private _maxWaitTime?: number; 
  public get maxWaitTime() {
    return this.getNumberAttribute('max_wait_time');
  }
  public set maxWaitTime(value: number) {
    this._maxWaitTime = value;
  }
  public resetMaxWaitTime() {
    this._maxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInput() {
    return this._maxWaitTime;
  }

  // max_wait_time_default - computed: true, optional: false, required: false
  public get maxWaitTimeDefault() {
    return this.getBooleanAttribute('max_wait_time_default');
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

  // option_selector - computed: false, optional: true, required: false
  private _optionSelector?: string; 
  public get optionSelector() {
    return this.getStringAttribute('option_selector');
  }
  public set optionSelector(value: string) {
    this._optionSelector = value;
  }
  public resetOptionSelector() {
    this._optionSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionSelectorInput() {
    return this._optionSelector;
  }

  // option_selector_type - computed: false, optional: true, required: false
  private _optionSelectorType?: string; 
  public get optionSelectorType() {
    return this.getStringAttribute('option_selector_type');
  }
  public set optionSelectorType(value: string) {
    this._optionSelectorType = value;
  }
  public resetOptionSelectorType() {
    this._optionSelectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionSelectorTypeInput() {
    return this._optionSelectorType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // selector_type - computed: false, optional: true, required: false
  private _selectorType?: string; 
  public get selectorType() {
    return this.getStringAttribute('selector_type');
  }
  public set selectorType(value: string) {
    this._selectorType = value;
  }
  public resetSelectorType() {
    this._selectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorTypeInput() {
    return this._selectorType;
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

  // variable_name - computed: false, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // wait_for_nav - computed: false, optional: true, required: false
  private _waitForNav?: boolean | cdktf.IResolvable; 
  public get waitForNav() {
    return this.getBooleanAttribute('wait_for_nav');
  }
  public set waitForNav(value: boolean | cdktf.IResolvable) {
    this._waitForNav = value;
  }
  public resetWaitForNav() {
    this._waitForNav = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForNavInput() {
    return this._waitForNav;
  }

  // wait_for_nav_timeout - computed: false, optional: true, required: false
  private _waitForNavTimeout?: number; 
  public get waitForNavTimeout() {
    return this.getNumberAttribute('wait_for_nav_timeout');
  }
  public set waitForNavTimeout(value: number) {
    this._waitForNavTimeout = value;
  }
  public resetWaitForNavTimeout() {
    this._waitForNavTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForNavTimeoutInput() {
    return this._waitForNavTimeout;
  }

  // wait_for_nav_timeout_default - computed: true, optional: false, required: false
  public get waitForNavTimeoutDefault() {
    return this.getBooleanAttribute('wait_for_nav_timeout_default');
  }

  // options - computed: false, optional: true, required: false
  private _options = new CreateBrowserCheckV2TestTransactionsStepsOptionsList(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: CreateBrowserCheckV2TestTransactionsStepsOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class CreateBrowserCheckV2TestTransactionsStepsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestTransactionsSteps[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestTransactionsStepsOutputReference {
    return new CreateBrowserCheckV2TestTransactionsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2TestTransactions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#name CreateBrowserCheckV2#name}
  */
  readonly name?: string;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#steps CreateBrowserCheckV2#steps}
  */
  readonly steps: CreateBrowserCheckV2TestTransactionsSteps[] | cdktf.IResolvable;
}

export function createBrowserCheckV2TestTransactionsToTerraform(struct?: CreateBrowserCheckV2TestTransactions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    steps: cdktf.listMapper(createBrowserCheckV2TestTransactionsStepsToTerraform, true)(struct!.steps),
  }
}


export function createBrowserCheckV2TestTransactionsToHclTerraform(struct?: CreateBrowserCheckV2TestTransactions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestTransactionsStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "CreateBrowserCheckV2TestTransactionsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckV2TestTransactionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2TestTransactions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2TestTransactions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._steps.internalValue = value.steps;
    }
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

  // steps - computed: false, optional: false, required: true
  private _steps = new CreateBrowserCheckV2TestTransactionsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: CreateBrowserCheckV2TestTransactionsSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}

export class CreateBrowserCheckV2TestTransactionsList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2TestTransactions[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestTransactionsOutputReference {
    return new CreateBrowserCheckV2TestTransactionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CreateBrowserCheckV2Test {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#active CreateBrowserCheckV2#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#automatic_retries CreateBrowserCheckV2#automatic_retries}
  */
  readonly automaticRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#device_id CreateBrowserCheckV2#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#frequency CreateBrowserCheckV2#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#location_ids CreateBrowserCheckV2#location_ids}
  */
  readonly locationIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#name CreateBrowserCheckV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#scheduling_strategy CreateBrowserCheckV2#scheduling_strategy}
  */
  readonly schedulingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#start_url CreateBrowserCheckV2#start_url}
  */
  readonly startUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#url_protocol CreateBrowserCheckV2#url_protocol}
  */
  readonly urlProtocol?: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#advanced_settings CreateBrowserCheckV2#advanced_settings}
  */
  readonly advancedSettings: CreateBrowserCheckV2TestAdvancedSettings[] | cdktf.IResolvable;
  /**
  * custom_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#custom_properties CreateBrowserCheckV2#custom_properties}
  */
  readonly customProperties?: CreateBrowserCheckV2TestCustomProperties[] | cdktf.IResolvable;
  /**
  * transactions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#transactions CreateBrowserCheckV2#transactions}
  */
  readonly transactions: CreateBrowserCheckV2TestTransactions[] | cdktf.IResolvable;
}

export function createBrowserCheckV2TestToTerraform(struct?: CreateBrowserCheckV2Test | cdktf.IResolvable): any {
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
    start_url: cdktf.stringToTerraform(struct!.startUrl),
    url_protocol: cdktf.stringToTerraform(struct!.urlProtocol),
    advanced_settings: cdktf.listMapper(createBrowserCheckV2TestAdvancedSettingsToTerraform, true)(struct!.advancedSettings),
    custom_properties: cdktf.listMapper(createBrowserCheckV2TestCustomPropertiesToTerraform, true)(struct!.customProperties),
    transactions: cdktf.listMapper(createBrowserCheckV2TestTransactionsToTerraform, true)(struct!.transactions),
  }
}


export function createBrowserCheckV2TestToHclTerraform(struct?: CreateBrowserCheckV2Test | cdktf.IResolvable): any {
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
    start_url: {
      value: cdktf.stringToHclTerraform(struct!.startUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_protocol: {
      value: cdktf.stringToHclTerraform(struct!.urlProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_settings: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestAdvancedSettingsToHclTerraform, true)(struct!.advancedSettings),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestAdvancedSettingsList",
    },
    custom_properties: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestCustomPropertiesToHclTerraform, true)(struct!.customProperties),
      isBlock: true,
      type: "set",
      storageClassType: "CreateBrowserCheckV2TestCustomPropertiesList",
    },
    transactions: {
      value: cdktf.listMapperHcl(createBrowserCheckV2TestTransactionsToHclTerraform, true)(struct!.transactions),
      isBlock: true,
      type: "list",
      storageClassType: "CreateBrowserCheckV2TestTransactionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreateBrowserCheckV2TestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CreateBrowserCheckV2Test | cdktf.IResolvable | undefined {
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
    if (this._startUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.startUrl = this._startUrl;
    }
    if (this._urlProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlProtocol = this._urlProtocol;
    }
    if (this._advancedSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSettings = this._advancedSettings?.internalValue;
    }
    if (this._customProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties?.internalValue;
    }
    if (this._transactions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactions = this._transactions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreateBrowserCheckV2Test | cdktf.IResolvable | undefined) {
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
      this._startUrl = undefined;
      this._urlProtocol = undefined;
      this._advancedSettings.internalValue = undefined;
      this._customProperties.internalValue = undefined;
      this._transactions.internalValue = undefined;
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
      this._startUrl = value.startUrl;
      this._urlProtocol = value.urlProtocol;
      this._advancedSettings.internalValue = value.advancedSettings;
      this._customProperties.internalValue = value.customProperties;
      this._transactions.internalValue = value.transactions;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
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

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // location_ids - computed: false, optional: true, required: false
  private _locationIds?: string[]; 
  public get locationIds() {
    return this.getListAttribute('location_ids');
  }
  public set locationIds(value: string[]) {
    this._locationIds = value;
  }
  public resetLocationIds() {
    this._locationIds = undefined;
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

  // start_url - computed: false, optional: true, required: false
  private _startUrl?: string; 
  public get startUrl() {
    return this.getStringAttribute('start_url');
  }
  public set startUrl(value: string) {
    this._startUrl = value;
  }
  public resetStartUrl() {
    this._startUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startUrlInput() {
    return this._startUrl;
  }

  // url_protocol - computed: false, optional: true, required: false
  private _urlProtocol?: string; 
  public get urlProtocol() {
    return this.getStringAttribute('url_protocol');
  }
  public set urlProtocol(value: string) {
    this._urlProtocol = value;
  }
  public resetUrlProtocol() {
    this._urlProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlProtocolInput() {
    return this._urlProtocol;
  }

  // advanced_settings - computed: false, optional: false, required: true
  private _advancedSettings = new CreateBrowserCheckV2TestAdvancedSettingsList(this, "advanced_settings", true);
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: CreateBrowserCheckV2TestAdvancedSettings[] | cdktf.IResolvable) {
    this._advancedSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new CreateBrowserCheckV2TestCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: CreateBrowserCheckV2TestCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // transactions - computed: false, optional: false, required: true
  private _transactions = new CreateBrowserCheckV2TestTransactionsList(this, "transactions", false);
  public get transactions() {
    return this._transactions;
  }
  public putTransactions(value: CreateBrowserCheckV2TestTransactions[] | cdktf.IResolvable) {
    this._transactions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionsInput() {
    return this._transactions.internalValue;
  }
}

export class CreateBrowserCheckV2TestList extends cdktf.ComplexList {
  public internalValue? : CreateBrowserCheckV2Test[] | cdktf.IResolvable

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
  public get(index: number): CreateBrowserCheckV2TestOutputReference {
    return new CreateBrowserCheckV2TestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2 synthetics_create_browser_check_v2}
*/
export class CreateBrowserCheckV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_create_browser_check_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CreateBrowserCheckV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CreateBrowserCheckV2 to import
  * @param importFromId The id of the existing CreateBrowserCheckV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CreateBrowserCheckV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_create_browser_check_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.16/docs/resources/create_browser_check_v2 synthetics_create_browser_check_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CreateBrowserCheckV2Config
  */
  public constructor(scope: Construct, id: string, config: CreateBrowserCheckV2Config) {
    super(scope, id, {
      terraformResourceType: 'synthetics_create_browser_check_v2',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.16',
        providerVersionConstraint: '2.0.16'
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
  private _test = new CreateBrowserCheckV2TestList(this, "test", false);
  public get test() {
    return this._test;
  }
  public putTest(value: CreateBrowserCheckV2Test[] | cdktf.IResolvable) {
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
      test: cdktf.listMapper(createBrowserCheckV2TestToTerraform, true)(this._test.internalValue),
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
        value: cdktf.listMapperHcl(createBrowserCheckV2TestToHclTerraform, true)(this._test.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CreateBrowserCheckV2TestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
