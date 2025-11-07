// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#id Context#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name for the context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#name Context#name}
  */
  readonly name: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#spec Context#spec}
  */
  readonly spec: ContextSpec;
}
export interface ContextSpecConfig {
  /**
  * The map of variables representing the shared config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#data Context#data}
  */
  readonly data: { [key: string]: string };
}

export function contextSpecConfigToTerraform(struct?: ContextSpecConfigOutputReference | ContextSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
  }
}


export function contextSpecConfigToHclTerraform(struct?: ContextSpecConfigOutputReference | ContextSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }
}
export interface ContextSpecSecret {
  /**
  * The map of variables representing the shared config (secret).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#data Context#data}
  */
  readonly data: { [key: string]: string };
}

export function contextSpecSecretToTerraform(struct?: ContextSpecSecretOutputReference | ContextSpecSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
  }
}


export function contextSpecSecretToHclTerraform(struct?: ContextSpecSecretOutputReference | ContextSpecSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }
}
export interface ContextSpecSecretyaml {
  /**
  * The YAML string representing the shared config (secret).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#data Context#data}
  */
  readonly data: string;
}

export function contextSpecSecretyamlToTerraform(struct?: ContextSpecSecretyamlOutputReference | ContextSpecSecretyaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
  }
}


export function contextSpecSecretyamlToHclTerraform(struct?: ContextSpecSecretyamlOutputReference | ContextSpecSecretyaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecSecretyamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecSecretyaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecSecretyaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }
}
export interface ContextSpecStorageazurefDataAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#account_key Context#account_key}
  */
  readonly accountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#account_name Context#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#type Context#type}
  */
  readonly type: string;
}

export function contextSpecStorageazurefDataAuthToTerraform(struct?: ContextSpecStorageazurefDataAuthOutputReference | ContextSpecStorageazurefDataAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function contextSpecStorageazurefDataAuthToHclTerraform(struct?: ContextSpecStorageazurefDataAuthOutputReference | ContextSpecStorageazurefDataAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
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

export class ContextSpecStorageazurefDataAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStorageazurefDataAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStorageazurefDataAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountKey = undefined;
      this._accountName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountKey = value.accountKey;
      this._accountName = value.accountName;
      this._type = value.type;
    }
  }

  // account_key - computed: false, optional: false, required: true
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
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
export interface ContextSpecStorageazurefData {
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#auth Context#auth}
  */
  readonly auth: ContextSpecStorageazurefDataAuth;
}

export function contextSpecStorageazurefDataToTerraform(struct?: ContextSpecStorageazurefDataOutputReference | ContextSpecStorageazurefData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: contextSpecStorageazurefDataAuthToTerraform(struct!.auth),
  }
}


export function contextSpecStorageazurefDataToHclTerraform(struct?: ContextSpecStorageazurefDataOutputReference | ContextSpecStorageazurefData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: contextSpecStorageazurefDataAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStorageazurefDataAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecStorageazurefDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStorageazurefData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStorageazurefData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auth.internalValue = value.auth;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new ContextSpecStorageazurefDataAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ContextSpecStorageazurefDataAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}
export interface ContextSpecStorageazuref {
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#data Context#data}
  */
  readonly data: ContextSpecStorageazurefData;
}

export function contextSpecStorageazurefToTerraform(struct?: ContextSpecStorageazurefOutputReference | ContextSpecStorageazuref): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: contextSpecStorageazurefDataToTerraform(struct!.data),
  }
}


export function contextSpecStorageazurefToHclTerraform(struct?: ContextSpecStorageazurefOutputReference | ContextSpecStorageazuref): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: contextSpecStorageazurefDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStorageazurefDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecStorageazurefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStorageazuref | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStorageazuref | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data = new ContextSpecStorageazurefDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: ContextSpecStorageazurefData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface ContextSpecStoragegcDataAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#json_config Context#json_config}
  */
  readonly jsonConfig: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#type Context#type}
  */
  readonly type: string;
}

export function contextSpecStoragegcDataAuthToTerraform(struct?: ContextSpecStoragegcDataAuthOutputReference | ContextSpecStoragegcDataAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jsonConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function contextSpecStoragegcDataAuthToHclTerraform(struct?: ContextSpecStoragegcDataAuthOutputReference | ContextSpecStoragegcDataAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jsonConfig),
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

export class ContextSpecStoragegcDataAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStoragegcDataAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonConfig = this._jsonConfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStoragegcDataAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonConfig = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonConfig = value.jsonConfig;
      this._type = value.type;
    }
  }

  // json_config - computed: false, optional: false, required: true
  private _jsonConfig?: { [key: string]: string }; 
  public get jsonConfig() {
    return this.getStringMapAttribute('json_config');
  }
  public set jsonConfig(value: { [key: string]: string }) {
    this._jsonConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigInput() {
    return this._jsonConfig;
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
export interface ContextSpecStoragegcData {
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#auth Context#auth}
  */
  readonly auth: ContextSpecStoragegcDataAuth;
}

export function contextSpecStoragegcDataToTerraform(struct?: ContextSpecStoragegcDataOutputReference | ContextSpecStoragegcData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: contextSpecStoragegcDataAuthToTerraform(struct!.auth),
  }
}


export function contextSpecStoragegcDataToHclTerraform(struct?: ContextSpecStoragegcDataOutputReference | ContextSpecStoragegcData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: contextSpecStoragegcDataAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStoragegcDataAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecStoragegcDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStoragegcData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStoragegcData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auth.internalValue = value.auth;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new ContextSpecStoragegcDataAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ContextSpecStoragegcDataAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}
export interface ContextSpecStoragegc {
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#data Context#data}
  */
  readonly data: ContextSpecStoragegcData;
}

export function contextSpecStoragegcToTerraform(struct?: ContextSpecStoragegcOutputReference | ContextSpecStoragegc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: contextSpecStoragegcDataToTerraform(struct!.data),
  }
}


export function contextSpecStoragegcToHclTerraform(struct?: ContextSpecStoragegcOutputReference | ContextSpecStoragegc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: contextSpecStoragegcDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStoragegcDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecStoragegcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStoragegc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStoragegc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data = new ContextSpecStoragegcDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: ContextSpecStoragegcData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface ContextSpecStorages3DataAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#json_config Context#json_config}
  */
  readonly jsonConfig: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#type Context#type}
  */
  readonly type: string;
}

export function contextSpecStorages3DataAuthToTerraform(struct?: ContextSpecStorages3DataAuthOutputReference | ContextSpecStorages3DataAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jsonConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function contextSpecStorages3DataAuthToHclTerraform(struct?: ContextSpecStorages3DataAuthOutputReference | ContextSpecStorages3DataAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jsonConfig),
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

export class ContextSpecStorages3DataAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStorages3DataAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonConfig = this._jsonConfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStorages3DataAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonConfig = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonConfig = value.jsonConfig;
      this._type = value.type;
    }
  }

  // json_config - computed: false, optional: false, required: true
  private _jsonConfig?: { [key: string]: string }; 
  public get jsonConfig() {
    return this.getStringMapAttribute('json_config');
  }
  public set jsonConfig(value: { [key: string]: string }) {
    this._jsonConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigInput() {
    return this._jsonConfig;
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
export interface ContextSpecStorages3Data {
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#auth Context#auth}
  */
  readonly auth: ContextSpecStorages3DataAuth;
}

export function contextSpecStorages3DataToTerraform(struct?: ContextSpecStorages3DataOutputReference | ContextSpecStorages3Data): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: contextSpecStorages3DataAuthToTerraform(struct!.auth),
  }
}


export function contextSpecStorages3DataToHclTerraform(struct?: ContextSpecStorages3DataOutputReference | ContextSpecStorages3Data): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: contextSpecStorages3DataAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStorages3DataAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecStorages3DataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStorages3Data | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStorages3Data | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auth.internalValue = value.auth;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new ContextSpecStorages3DataAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ContextSpecStorages3DataAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}
export interface ContextSpecStorages3 {
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#data Context#data}
  */
  readonly data: ContextSpecStorages3Data;
}

export function contextSpecStorages3ToTerraform(struct?: ContextSpecStorages3OutputReference | ContextSpecStorages3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: contextSpecStorages3DataToTerraform(struct!.data),
  }
}


export function contextSpecStorages3ToHclTerraform(struct?: ContextSpecStorages3OutputReference | ContextSpecStorages3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: contextSpecStorages3DataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStorages3DataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecStorages3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecStorages3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecStorages3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data = new ContextSpecStorages3DataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: ContextSpecStorages3Data) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface ContextSpecYaml {
  /**
  * The YAML string representing the shared config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#data Context#data}
  */
  readonly data: string;
}

export function contextSpecYamlToTerraform(struct?: ContextSpecYamlOutputReference | ContextSpecYaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
  }
}


export function contextSpecYamlToHclTerraform(struct?: ContextSpecYamlOutputReference | ContextSpecYaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecYamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpecYaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpecYaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }
}
export interface ContextSpec {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#config Context#config}
  */
  readonly config?: ContextSpecConfig;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#secret Context#secret}
  */
  readonly secret?: ContextSpecSecret;
  /**
  * secretyaml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#secretyaml Context#secretyaml}
  */
  readonly secretyaml?: ContextSpecSecretyaml;
  /**
  * storageazuref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#storageazuref Context#storageazuref}
  */
  readonly storageazuref?: ContextSpecStorageazuref;
  /**
  * storagegc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#storagegc Context#storagegc}
  */
  readonly storagegc?: ContextSpecStoragegc;
  /**
  * storages3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#storages3 Context#storages3}
  */
  readonly storages3?: ContextSpecStorages3;
  /**
  * yaml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#yaml Context#yaml}
  */
  readonly yaml?: ContextSpecYaml;
}

export function contextSpecToTerraform(struct?: ContextSpecOutputReference | ContextSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: contextSpecConfigToTerraform(struct!.config),
    secret: contextSpecSecretToTerraform(struct!.secret),
    secretyaml: contextSpecSecretyamlToTerraform(struct!.secretyaml),
    storageazuref: contextSpecStorageazurefToTerraform(struct!.storageazuref),
    storagegc: contextSpecStoragegcToTerraform(struct!.storagegc),
    storages3: contextSpecStorages3ToTerraform(struct!.storages3),
    yaml: contextSpecYamlToTerraform(struct!.yaml),
  }
}


export function contextSpecToHclTerraform(struct?: ContextSpecOutputReference | ContextSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: contextSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecConfigList",
    },
    secret: {
      value: contextSpecSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecSecretList",
    },
    secretyaml: {
      value: contextSpecSecretyamlToHclTerraform(struct!.secretyaml),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecSecretyamlList",
    },
    storageazuref: {
      value: contextSpecStorageazurefToHclTerraform(struct!.storageazuref),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStorageazurefList",
    },
    storagegc: {
      value: contextSpecStoragegcToHclTerraform(struct!.storagegc),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStoragegcList",
    },
    storages3: {
      value: contextSpecStorages3ToHclTerraform(struct!.storages3),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecStorages3List",
    },
    yaml: {
      value: contextSpecYamlToHclTerraform(struct!.yaml),
      isBlock: true,
      type: "list",
      storageClassType: "ContextSpecYamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContextSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContextSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._secretyaml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretyaml = this._secretyaml?.internalValue;
    }
    if (this._storageazuref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageazuref = this._storageazuref?.internalValue;
    }
    if (this._storagegc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagegc = this._storagegc?.internalValue;
    }
    if (this._storages3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storages3 = this._storages3?.internalValue;
    }
    if (this._yaml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaml = this._yaml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContextSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._secretyaml.internalValue = undefined;
      this._storageazuref.internalValue = undefined;
      this._storagegc.internalValue = undefined;
      this._storages3.internalValue = undefined;
      this._yaml.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
      this._secret.internalValue = value.secret;
      this._secretyaml.internalValue = value.secretyaml;
      this._storageazuref.internalValue = value.storageazuref;
      this._storagegc.internalValue = value.storagegc;
      this._storages3.internalValue = value.storages3;
      this._yaml.internalValue = value.yaml;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new ContextSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ContextSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ContextSpecSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ContextSpecSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // secretyaml - computed: false, optional: true, required: false
  private _secretyaml = new ContextSpecSecretyamlOutputReference(this, "secretyaml");
  public get secretyaml() {
    return this._secretyaml;
  }
  public putSecretyaml(value: ContextSpecSecretyaml) {
    this._secretyaml.internalValue = value;
  }
  public resetSecretyaml() {
    this._secretyaml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretyamlInput() {
    return this._secretyaml.internalValue;
  }

  // storageazuref - computed: false, optional: true, required: false
  private _storageazuref = new ContextSpecStorageazurefOutputReference(this, "storageazuref");
  public get storageazuref() {
    return this._storageazuref;
  }
  public putStorageazuref(value: ContextSpecStorageazuref) {
    this._storageazuref.internalValue = value;
  }
  public resetStorageazuref() {
    this._storageazuref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageazurefInput() {
    return this._storageazuref.internalValue;
  }

  // storagegc - computed: false, optional: true, required: false
  private _storagegc = new ContextSpecStoragegcOutputReference(this, "storagegc");
  public get storagegc() {
    return this._storagegc;
  }
  public putStoragegc(value: ContextSpecStoragegc) {
    this._storagegc.internalValue = value;
  }
  public resetStoragegc() {
    this._storagegc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagegcInput() {
    return this._storagegc.internalValue;
  }

  // storages3 - computed: false, optional: true, required: false
  private _storages3 = new ContextSpecStorages3OutputReference(this, "storages3");
  public get storages3() {
    return this._storages3;
  }
  public putStorages3(value: ContextSpecStorages3) {
    this._storages3.internalValue = value;
  }
  public resetStorages3() {
    this._storages3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storages3Input() {
    return this._storages3.internalValue;
  }

  // yaml - computed: false, optional: true, required: false
  private _yaml = new ContextSpecYamlOutputReference(this, "yaml");
  public get yaml() {
    return this._yaml;
  }
  public putYaml(value: ContextSpecYaml) {
    this._yaml.internalValue = value;
  }
  public resetYaml() {
    this._yaml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context codefresh_context}
*/
export class Context extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Context resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Context to import
  * @param importFromId The id of the existing Context that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Context to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/context codefresh_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContextConfig
  */
  public constructor(scope: Construct, id: string, config: ContextConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_context',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.1.0'
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
    this._name = config.name;
    this._spec.internalValue = config.spec;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ContextSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ContextSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      spec: contextSpecToTerraform(this._spec.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: contextSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContextSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
