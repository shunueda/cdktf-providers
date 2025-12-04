// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#config_json PlatformService#config_json}
  */
  readonly configJson: string;
  /**
  * Credentials such as usernames and passwords, or API Keys, required to integrate with external systems are also stored and encrypted separately to the main configuration of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#cred_sets PlatformService#cred_sets}
  */
  readonly credSets?: { [key: string]: PlatformServiceCredSets } | cdktf.IResolvable;
  /**
  * Environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#environment PlatformService#environment}
  */
  readonly environment: string;
  /**
  * Some services require binary files as part of their configuration, such as x509 certificates, or large JSON/YAML configuration files to be passed directly down to the service for verification. The files are individually encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#file_sets PlatformService#file_sets}
  */
  readonly fileSets?: { [key: string]: PlatformServiceFileSets } | cdktf.IResolvable;
  /**
  * Set to `true` when you plan to delete a protected service like a Besu validator node. You must apply the value before you can successfully `terraform destroy` the protected service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#force_delete PlatformService#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#hostnames PlatformService#hostnames}
  */
  readonly hostnames?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Service Display Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#name PlatformService#name}
  */
  readonly name: string;
  /**
  * Runtime ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#runtime PlatformService#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#stack_id PlatformService#stack_id}
  */
  readonly stackId?: string;
  /**
  * Service Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#type PlatformService#type}
  */
  readonly type: string;
  /**
  * Set to `false` to ignore the service's readiness status before proceeding. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#wait_for_ready PlatformService#wait_for_ready}
  */
  readonly waitForReady?: boolean | cdktf.IResolvable;
}
export interface PlatformServiceCredSetsBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#password PlatformService#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#username PlatformService#username}
  */
  readonly username: string;
}

export function platformServiceCredSetsBasicAuthToTerraform(struct?: PlatformServiceCredSetsBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function platformServiceCredSetsBasicAuthToHclTerraform(struct?: PlatformServiceCredSetsBasicAuth | cdktf.IResolvable): any {
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

export class PlatformServiceCredSetsBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformServiceCredSetsBasicAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformServiceCredSetsBasicAuth | cdktf.IResolvable | undefined) {
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface PlatformServiceCredSetsKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#value PlatformService#value}
  */
  readonly value: string;
}

export function platformServiceCredSetsKeyToTerraform(struct?: PlatformServiceCredSetsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformServiceCredSetsKeyToHclTerraform(struct?: PlatformServiceCredSetsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class PlatformServiceCredSetsKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformServiceCredSetsKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformServiceCredSetsKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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
export interface PlatformServiceCredSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#basic_auth PlatformService#basic_auth}
  */
  readonly basicAuth?: PlatformServiceCredSetsBasicAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#key PlatformService#key}
  */
  readonly key?: PlatformServiceCredSetsKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#type PlatformService#type}
  */
  readonly type: string;
}

export function platformServiceCredSetsToTerraform(struct?: PlatformServiceCredSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: platformServiceCredSetsBasicAuthToTerraform(struct!.basicAuth),
    key: platformServiceCredSetsKeyToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformServiceCredSetsToHclTerraform(struct?: PlatformServiceCredSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: platformServiceCredSetsBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "PlatformServiceCredSetsBasicAuth",
    },
    key: {
      value: platformServiceCredSetsKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "PlatformServiceCredSetsKey",
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

export class PlatformServiceCredSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PlatformServiceCredSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformServiceCredSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._key.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._key.internalValue = value.key;
      this._type = value.type;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new PlatformServiceCredSetsBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: PlatformServiceCredSetsBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new PlatformServiceCredSetsKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: PlatformServiceCredSetsKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
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

export class PlatformServiceCredSetsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PlatformServiceCredSets } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PlatformServiceCredSetsOutputReference {
    return new PlatformServiceCredSetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PlatformServiceEndpoints {
}

export function platformServiceEndpointsToTerraform(struct?: PlatformServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function platformServiceEndpointsToHclTerraform(struct?: PlatformServiceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlatformServiceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PlatformServiceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformServiceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }
}

export class PlatformServiceEndpointsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PlatformServiceEndpointsOutputReference {
    return new PlatformServiceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PlatformServiceFileSetsFilesData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#base64 PlatformService#base64}
  */
  readonly base64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#hex PlatformService#hex}
  */
  readonly hex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#text PlatformService#text}
  */
  readonly text?: string;
}

export function platformServiceFileSetsFilesDataToTerraform(struct?: PlatformServiceFileSetsFilesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64: cdktf.stringToTerraform(struct!.base64),
    hex: cdktf.stringToTerraform(struct!.hex),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function platformServiceFileSetsFilesDataToHclTerraform(struct?: PlatformServiceFileSetsFilesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64: {
      value: cdktf.stringToHclTerraform(struct!.base64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hex: {
      value: cdktf.stringToHclTerraform(struct!.hex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformServiceFileSetsFilesDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformServiceFileSetsFilesData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64 = this._base64;
    }
    if (this._hex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hex = this._hex;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformServiceFileSetsFilesData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base64 = undefined;
      this._hex = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base64 = value.base64;
      this._hex = value.hex;
      this._text = value.text;
    }
  }

  // base64 - computed: false, optional: true, required: false
  private _base64?: string; 
  public get base64() {
    return this.getStringAttribute('base64');
  }
  public set base64(value: string) {
    this._base64 = value;
  }
  public resetBase64() {
    this._base64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64Input() {
    return this._base64;
  }

  // hex - computed: false, optional: true, required: false
  private _hex?: string; 
  public get hex() {
    return this.getStringAttribute('hex');
  }
  public set hex(value: string) {
    this._hex = value;
  }
  public resetHex() {
    this._hex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexInput() {
    return this._hex;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface PlatformServiceFileSetsFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#data PlatformService#data}
  */
  readonly data: PlatformServiceFileSetsFilesData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#type PlatformService#type}
  */
  readonly type: string;
}

export function platformServiceFileSetsFilesToTerraform(struct?: PlatformServiceFileSetsFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: platformServiceFileSetsFilesDataToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformServiceFileSetsFilesToHclTerraform(struct?: PlatformServiceFileSetsFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: platformServiceFileSetsFilesDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "PlatformServiceFileSetsFilesData",
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

export class PlatformServiceFileSetsFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PlatformServiceFileSetsFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformServiceFileSetsFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data = new PlatformServiceFileSetsFilesDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: PlatformServiceFileSetsFilesData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
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

export class PlatformServiceFileSetsFilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PlatformServiceFileSetsFiles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PlatformServiceFileSetsFilesOutputReference {
    return new PlatformServiceFileSetsFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PlatformServiceFileSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#files PlatformService#files}
  */
  readonly files: { [key: string]: PlatformServiceFileSetsFiles } | cdktf.IResolvable;
}

export function platformServiceFileSetsToTerraform(struct?: PlatformServiceFileSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.hashMapper(platformServiceFileSetsFilesToTerraform)(struct!.files),
  }
}


export function platformServiceFileSetsToHclTerraform(struct?: PlatformServiceFileSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.hashMapperHcl(platformServiceFileSetsFilesToHclTerraform)(struct!.files),
      isBlock: true,
      type: "map",
      storageClassType: "PlatformServiceFileSetsFilesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformServiceFileSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PlatformServiceFileSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformServiceFileSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files.internalValue = value.files;
    }
  }

  // files - computed: false, optional: false, required: true
  private _files = new PlatformServiceFileSetsFilesMap(this, "files");
  public get files() {
    return this._files;
  }
  public putFiles(value: { [key: string]: PlatformServiceFileSetsFiles } | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }
}

export class PlatformServiceFileSetsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PlatformServiceFileSets } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PlatformServiceFileSetsOutputReference {
    return new PlatformServiceFileSetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service kaleido_platform_service}
*/
export class PlatformService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformService to import
  * @param importFromId The id of the existing PlatformService that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_service kaleido_platform_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformServiceConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_service',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configJson = config.configJson;
    this._credSets.internalValue = config.credSets;
    this._environment = config.environment;
    this._fileSets.internalValue = config.fileSets;
    this._forceDelete = config.forceDelete;
    this._hostnames = config.hostnames;
    this._name = config.name;
    this._runtime = config.runtime;
    this._stackId = config.stackId;
    this._type = config.type;
    this._waitForReady = config.waitForReady;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_json - computed: false, optional: false, required: true
  private _configJson?: string; 
  public get configJson() {
    return this.getStringAttribute('config_json');
  }
  public set configJson(value: string) {
    this._configJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configJsonInput() {
    return this._configJson;
  }

  // connectivity_json - computed: true, optional: false, required: false
  public get connectivityJson() {
    return this.getStringAttribute('connectivity_json');
  }

  // cred_sets - computed: false, optional: true, required: false
  private _credSets = new PlatformServiceCredSetsMap(this, "cred_sets");
  public get credSets() {
    return this._credSets;
  }
  public putCredSets(value: { [key: string]: PlatformServiceCredSets } | cdktf.IResolvable) {
    this._credSets.internalValue = value;
  }
  public resetCredSets() {
    this._credSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credSetsInput() {
    return this._credSets.internalValue;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new PlatformServiceEndpointsMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // environment_member_id - computed: true, optional: false, required: false
  public get environmentMemberId() {
    return this.getStringAttribute('environment_member_id');
  }

  // file_sets - computed: false, optional: true, required: false
  private _fileSets = new PlatformServiceFileSetsMap(this, "file_sets");
  public get fileSets() {
    return this._fileSets;
  }
  public putFileSets(value: { [key: string]: PlatformServiceFileSets } | cdktf.IResolvable) {
    this._fileSets.internalValue = value;
  }
  public resetFileSets() {
    this._fileSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSetsInput() {
    return this._fileSets.internalValue;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get hostnames() {
    return this.interpolationForAttribute('hostnames');
  }
  public set hostnames(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
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

  // wait_for_ready - computed: false, optional: true, required: false
  private _waitForReady?: boolean | cdktf.IResolvable; 
  public get waitForReady() {
    return this.getBooleanAttribute('wait_for_ready');
  }
  public set waitForReady(value: boolean | cdktf.IResolvable) {
    this._waitForReady = value;
  }
  public resetWaitForReady() {
    this._waitForReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadyInput() {
    return this._waitForReady;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_json: cdktf.stringToTerraform(this._configJson),
      cred_sets: cdktf.hashMapper(platformServiceCredSetsToTerraform)(this._credSets.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      file_sets: cdktf.hashMapper(platformServiceFileSetsToTerraform)(this._fileSets.internalValue),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      hostnames: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._hostnames),
      name: cdktf.stringToTerraform(this._name),
      runtime: cdktf.stringToTerraform(this._runtime),
      stack_id: cdktf.stringToTerraform(this._stackId),
      type: cdktf.stringToTerraform(this._type),
      wait_for_ready: cdktf.booleanToTerraform(this._waitForReady),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_json: {
        value: cdktf.stringToHclTerraform(this._configJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cred_sets: {
        value: cdktf.hashMapperHcl(platformServiceCredSetsToHclTerraform)(this._credSets.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PlatformServiceCredSetsMap",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_sets: {
        value: cdktf.hashMapperHcl(platformServiceFileSetsToHclTerraform)(this._fileSets.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PlatformServiceFileSetsMap",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostnames: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._hostnames),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
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
      wait_for_ready: {
        value: cdktf.booleanToHclTerraform(this._waitForReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
